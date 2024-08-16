import { formatValue } from './utils'

interface AppConstructorOptions {
  width?: number
  height?: number
  dpr?: boolean

}
export class App {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  dpr = 1
  width: number
  height: number
  constructor({
    width = 600,
    height = 800,
   dpr = true,
  }: AppConstructorOptions = {}) {
    if (dpr) {
      this.dpr = window.devicePixelRatio ?? 1
    }
    this.canvas = document.createElement('canvas')!
    this.ctx = this.canvas.getContext('2d')!
    this.canvas.style.width = formatValue(width)
    this.canvas.style.height = formatValue(height)
    this.canvas.width = width * this.dpr
    this.canvas.height = height * this.dpr
    this.ctx.scale(this.dpr, this.dpr)
    this.width = width
    this.height = height
    this.debug()
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
    ctx.stroke()
    ctx.textBaseline = 'top'
    ctx.font = '12px 黑体'
    for (let row = 0; row < Math.ceil((this.width + 1) / 100); row++) {
      for (let col = 0; col < Math.ceil((this.height + 1) / 100); col++) {
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
}
