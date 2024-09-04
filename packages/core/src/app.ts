import EventEmitter from 'eventemitter3'
import type { Renderable } from './renderables/renderable'
import { ENV, formatWithPx, getEnv } from './utils'

export interface AppOptions {
  /**
   *  画布宽度
   */
  width?: number
  /**
   *  画布高度
   */
  height?: number
  /**
   *  是否开启dpr
   */
  dpr?: boolean | number
  /**
   *  `画布元素`或`画布id(微信小程序或者uni-app)`或者`document.querySelector可以接受的字符串`
   */
  canvas?: HTMLCanvasElement | string
  /**
   * backgroundColor
   */
  backgroundColor?: string
  /**
   * 画布resize到的元素 仅 web 支持
   */
  resizeTo?: HTMLElement | Window | string
}

export class App extends EventEmitter<{
  render: []
  ready: []
}> {
  private ctx!: CanvasRenderingContext2D
  private _ready = false
  protected _env = getEnv()
  canvas!: HTMLCanvasElement
  ticker!: Ticker
  dpr = 1
  width = 0
  height = 0
  _width = 0
  _height = 0
  removeResizeEvent?: () => void
  constructor(private options: AppOptions = {}) {
    super()
    this.validateAppOptions(options)
    this.initDpr()
    this.initTicker()
    this.initCanvas()
  }

  onReady(fn: () => void) {
    if (this._ready) {
      fn()
    }
    else {
      this.once('ready', () => {
        fn()
      })
    }
  }

  private validateAppOptions(appOptions: AppOptions) {
    if (this._env === ENV.WX && !appOptions.canvas) {
      console.error('当前为非document环境, 无法使用 document.createElement(\'canvas\'),\n 请传入canvas元素或者canvasId')
    }
  }

  private initDpr() {
    const { dpr = true } = this.options
    if (typeof dpr === 'boolean') {
      this.dpr = window.devicePixelRatio ?? 1
    }
    else {
      this.dpr = dpr
    }
  }

  private initCanvas() {
    const canvas = this.options.canvas
    if (canvas) {
      if (typeof canvas === 'string') {
        if (this._env === ENV.WEB) {
          this.canvas = document.querySelector(canvas) as HTMLCanvasElement
        }
        else {
          let query: WechatMiniprogram.SelectorQuery | UniNamespace.SelectorQuery
          if (this._env === ENV.WX) {
            query = wx.createSelectorQuery()
          }
          else {
            query = uni.createSelectorQuery()
          }
          query.select('#myCanvas')
            .fields({ node: true, size: true }, undefined as any)
            .exec((res) => {
              const canvas = res[0].node as HTMLCanvasElement
              this.canvas = canvas
              this.initCanvasRenderingContext2D()
            })
        }
      }
      else {
        this.canvas = canvas
        this.initCanvasRenderingContext2D()
      }
    }
    else {
      this.canvas = document.createElement('canvas')!
      this.initCanvasRenderingContext2D()
    }
  }

  private initCanvasRenderingContext2D() {
    const {
      width = this._env === ENV.WX ? 300 : 600,
      height = this._env === ENV.WX ? 150 : 300,
      resizeTo,
    } = this.options
    if (!this.canvas)
      return
    if (this.canvas.style) {
      this.canvas.style.backgroundColor = this.options.backgroundColor ?? 'transparent'
      if (resizeTo) {
        this.initResizeEvent()
      }
      else {
        this.width = width
        this.height = height
      }
    }
    else {
      this.canvas.width = width * this.dpr
      this.canvas.height = height * this.dpr
      this.width = width
      this.height = width
    }
    this.ctx = this.canvas.getContext('2d')!
    this._ready = true
    this.ticker.init(this.canvas, true)
    this.emit('ready')
  }

  initResizeEvent(): void {
    if (!this.options.resizeTo) {
      return
    }
    const resizeTo = this.options.resizeTo
    const target = typeof resizeTo === 'string'
      ? document.querySelector(resizeTo) as HTMLElement
      : resizeTo
    if (target instanceof Window) {
      const resizeHandler = () => {
        this.width = window.innerWidth
        this.height = window.innerHeight
      }
      const _resizeHandler = resizeHandler.bind(this)
      window.addEventListener('resize', _resizeHandler)
      this.removeResizeEvent = () => {
        window.removeEventListener('resize', _resizeHandler)
      }
      resizeHandler()
    }
    else {
      const resizeHandler = () => {
        const width = target.clientWidth
        const height = target.clientHeight
        this.width = width
        this.height = height
      }
      const resizeObserver = new ResizeObserver(resizeHandler)
      resizeObserver.observe(target)
      this.removeResizeEvent = () => {
        resizeObserver.disconnect()
      }
      resizeHandler()
    }
  }

  private get shouldResize() {
    return this.width !== this._width || this.height !== this._height
  }

  resize() {
    if (this.shouldResize) {
      this.canvas.style.width = formatWithPx(this.width)
      this.canvas.style.height = formatWithPx(this.height)
      this.canvas.width = this.width * this.dpr
      this.canvas.height = this.height * this.dpr
      this._width = this.width
      this._height = this.height
    }
  }

  private initTicker() {
    this.ticker = new Ticker()
    this.ticker.add(this.update.bind(this))
  }

  private beforeRender() {
    this.ctx.save()
  }

  private afterRender() {
    this.ctx.restore()
  }

  children: Renderable[] = []

  add(...objects: Renderable[]) {
    for (let index = 0; index < objects.length; index++) {
      const object = objects[index]
      this.children.push(object)
      object.onAdd(this)
    }
  }

  remove(...objects: Renderable[]) {
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
    const isDirty = !![...this.children.filter(e => e.dirty)].length || this.shouldResize

    if (!isDirty)
      return

    if (this.shouldResize) {
      this.resize()
    }
    this.ctx.clearRect(
      -this.canvas.width,
      -this.canvas.height,
      this.canvas.width * 2,
      this.canvas.height * 2,
    )

    const shouldRender = [...this.children].filter(e => e.shouldUpdate)
    while (shouldRender.length) {
      this.beforeRender()
      const child = shouldRender.shift()!
      child.render(this.ctx)
      child.dirty = false
      child._renderId++
      child.emit('render')
      this.afterRender()
    }
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

  wrapperRender(fn: (ctx: CanvasRenderingContext2D) => any) {
    this.beforeRender()
    fn(this.ctx)
    this.afterRender()
  }
}

class Ticker {
  requestAnimationFrame?: typeof requestAnimationFrame
  cancelAnimationFrame?: typeof cancelAnimationFrame
  myReq: number = 0
  private isRunning: boolean = false
  handler: ((time: number) => void)[] = []
  protected _env = getEnv()
  constructor(protected autoStart: boolean = true) {

  }

  init(canvas: HTMLCanvasElement, autoStart: boolean) {
    if (this._env === ENV.WX) {
      this.requestAnimationFrame = (canvas as any).requestAnimationFrame.bind(canvas)
      this.cancelAnimationFrame = (canvas as any).requestAnimationFrame.bind(canvas)
    }
    else if (window) {
      this.requestAnimationFrame = window.requestAnimationFrame.bind(window)
      this.cancelAnimationFrame = window.cancelAnimationFrame.bind(window)
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
    if (this.requestAnimationFrame) {
      this.myReq = this.requestAnimationFrame(this.update.bind(this))
    }
  }

  stop() {
    if (this.isRunning && this.myReq) {
      this.cancelAnimationFrame?.(this.myReq)
      this.isRunning = false
    }
  }

  update() {
    if (!this.isRunning)
      return
    if (this.requestAnimationFrame) {
      this.myReq = this.requestAnimationFrame(this.update.bind(this))
    }
    this.handler.forEach(fn => fn(performance.now()))
  }
}
