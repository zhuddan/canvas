import EventEmitter from 'eventemitter3'
import { NOOP } from './const'
import type { Display } from './object/display'
import { ENV, formatWithPx, getEnv } from './utils'

export interface AppOptions {
  width?: number
  height?: number
  dpr?: boolean | number
  onUpdate?: () => void
  createCanvas?: () => HTMLCanvasElement
}

export class App extends EventEmitter<{
  render: []
}> {
  canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  dpr = 1
  width: number
  height: number
  onUpdate: () => void
  ticker: Ticker

  constructor({
    width = 600,
    height = 800,
    dpr = true,
    createCanvas,
    onUpdate,
  }: AppOptions = {},
  ) {
    super()
    if (typeof dpr === 'boolean') {
      this.dpr = window.devicePixelRatio ?? 1
    }
    else if (typeof dpr === 'number') {
      this.dpr = dpr
    }
    this.onUpdate = onUpdate ?? NOOP
    if (createCanvas) {
      this.canvas = createCanvas()
    }
    else {
      this.canvas = document.createElement('canvas')!
    }
    this.ctx = this.canvas.getContext('2d')!
    if (this.canvas.style) {
      this.canvas.style.width = formatWithPx(width)
      this.canvas.style.height = formatWithPx(height)
      this.canvas.width = width * this.dpr
      this.canvas.height = height * this.dpr
    }
    else {
      this.canvas.width = width * this.dpr
      this.canvas.height = height * this.dpr
    }
    this.ticker = new Ticker(this.canvas)
    this.width = width
    this.height = height
    this.ticker.add(this.update.bind(this))
  }

  private beforeRender() {
    this.ctx.save()
  }

  private afterRender() {
    this.ctx.restore()
  }

  children: Display[] = []

  add(...objects: Display[]) {
    for (let index = 0; index < objects.length; index++) {
      const object = objects[index]
      this.children.push(object)
      object.onAdd(this)
    }
  }

  remove(...objects: Display[]) {
    for (let index = 0; index < objects.length; index++) {
      const object = objects[index]
      const delIndex = this.children.indexOf(object)
      if (delIndex !== -1) {
        object.onRemove()
        this.children.splice(delIndex, 1)
      }
    }
  }

  private update() {
    if (!this.children.length) {
      return
    }
    const isDirty = !![...this.children.filter(e => e.dirty)].length
    const _renderIds = this.children.every(e => e._renderId > 0)
    if (_renderIds && this.children.length) {
      this.emit('render')
    }
    if (!isDirty)
      return
    this.ctx.clearRect(
      -this.canvas.width,
      -this.canvas.height,
      this.canvas.width * 2,
      this.canvas.height * 2,
    )

    // this.debug()
    const shouldRender = [...this.children].filter(e => e.shouldUpdate)
    while (shouldRender.length) {
      this.beforeRender()
      const child = shouldRender.shift()!
      child.render(this.ctx)
      child.dirty = false
      child._renderId++
      this.afterRender()
    }

    this.onUpdate()
  }

  toDataURL(type?: string, quality?: any) {
    return this.canvas.toDataURL(type, quality)
  }

  toDataURLAsync(type?: string, quality?: any) {
    return new Promise<string>((resolve) => {
      this.once('render', () => {
        resolve(this.toDataURL(type, quality))
      })
    })
  }

  onContext(fn: (ctx: CanvasRenderingContext2D) => any) {
    this.beforeRender()
    fn(this.ctx)
    this.afterRender()
  }
}

class Ticker {
  requestAnimationFrame: typeof requestAnimationFrame
  cancelAnimationFrame: typeof cancelAnimationFrame
  myReq: number = 0
  private isRunning: boolean = false
  handler: ((time: number) => void)[] = []
  protected _env = getEnv()
  constructor(public canvas: HTMLCanvasElement, autoStart: boolean = true) {
    if (this._env === ENV.WX) {
      const canvas = this.canvas as any
      this.requestAnimationFrame = canvas.requestAnimationFrame.bind(this)
      this.cancelAnimationFrame = canvas.requestAnimationFrame.bind(this)
    }
    else {
      this.requestAnimationFrame = requestAnimationFrame.bind(this)
      this.cancelAnimationFrame = cancelAnimationFrame.bind(this)
    }
    if (autoStart) {
      this.start()
    }
  }

  add(fn: (time: number) => void) {
    this.handler.push(fn)
  }

  removeAll() {
    this.handler = []
  }

  remove(fn: (time: number) => void) {
    const index = this.handler.indexOf(fn)
    if (index !== -1) {
      this.handler.splice(index, 1)
    }
  }

  start() {
    this.isRunning = true
    this.myReq = this.requestAnimationFrame(this.update.bind(this))
  }

  stop() {
    if (this.isRunning && this.myReq) {
      this.cancelAnimationFrame(this.myReq)
      this.isRunning = false
    }
  }

  update() {
    if (!this.isRunning)
      return
    this.myReq = this.requestAnimationFrame(this.update.bind(this))
    this.handler.forEach(fn => fn(performance.now()))
  }
}
