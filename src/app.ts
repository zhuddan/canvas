import { NOOP } from './const'
import type { Display } from './object/display'
import type { RenderImpl } from './types'
import { formatValue } from './utils'

interface AppConstructorOptions {
  width?: number
  height?: number
  dpr?: boolean
  onUpdate?: () => void
}

export class App {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  dpr = 1
  width: number
  height: number
  onUpdate: () => void
  constructor(
    {
    width = 600,
    height = 800,
    dpr = true,
    onUpdate,
  }: AppConstructorOptions = {},
  ) {
    if (dpr) {
      this.dpr = window.devicePixelRatio ?? 1
    }
    this.onUpdate = onUpdate ?? NOOP
    this.canvas = document.createElement('canvas')!
    this.ctx = this.canvas.getContext('2d')!
    this.canvas.style.width = formatValue(width)
    this.canvas.style.height = formatValue(height)
    this.canvas.width = width * this.dpr
    this.canvas.height = height * this.dpr
    this.ctx.scale(this.dpr, this.dpr)
    this.width = width
    this.height = height
    this.update()
  }

  private beforeRender() {
    this.ctx.save()
  }

  private afterRender() {
    this.ctx.restore()
  }

  private debug() {
    this.beforeRender()
    const ctx = this.ctx
    this.ctx.strokeStyle = '#cccccc80'
    this.ctx.fillStyle = '#cccccc80'
    ctx.textBaseline = 'top'
    ctx.font = '10px 黑体'
    ctx.setLineDash([4, 10])
    for (let row = 0; row < Math.ceil((this.width + 1) / 100); row++) {
      for (let col = 0; col < Math.ceil((this.height + 1) / 100); col++) {
        ctx.beginPath()
        ctx.fillText(`${row * 100},${col * 100}`, row * 100, col * 100)
        if (row === 0 || col === 0) {
          continue
        }
        ctx.moveTo(row * 100 - 100, col * 100)
        ctx.lineTo(row * 100, col * 100)
        ctx.lineTo(row * 100, col * 100 - 100)
        ctx.stroke()
      }
    }
    this.afterRender()
  }

  children: Display[] = []

  add(object: Display) {
    object.onAdd()
    object._app = this
    this.children.push(object)
  }

  remove(object: Display) {
    const index = this.children.indexOf(object)
    if (index !== -1) {
      this.children.splice(index, 1)
      object._app = null
    }
  }

  private update() {
    window.requestAnimationFrame(() => {
      this.update()
    })

    const isDirty = !![...this.children.filter(e => e.dirty)].length
    if (!isDirty)
      return
    this.ctx.clearRect(
      -this.width,
      -this.height,
      this.width * 2,
      this.height * 2,
    )

    this.debug()
    const shouldRender = [...this.children].filter(e => e.shouldUpdate)
    while (shouldRender.length) {
      this.beforeRender()
      const child = shouldRender.shift()!
      child.render(this.ctx)
      child.dirty = false
      this.afterRender()
    }
    this.onUpdate()
  }

  onContext(fn: (ctx: CanvasRenderingContext2D) => any) {
    this.beforeRender()
    fn(this.ctx)
    this.afterRender()
  }
}
