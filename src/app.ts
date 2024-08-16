import type { Display } from './object/display'
import type { RenderImpl } from './types'
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

  children: Display[] = []
  add(object: Display) {
    this.children.push(object)
  }

  // renders: ((ctx: CanvasRenderingContext2D) => void)[] = []

  private update() {
    // window.requestAnimationFrame(() => {
    //   this.update()
    // })
    const needUpdateObject: Display[] = []
    for (let index = 0; index < this.children.length; index++) {
      const object = this.children[index]
      if (object._shouldUpdate) {
        needUpdateObject.push(object)
      }
    }
    if (needUpdateObject.length) {
      this.ctx.clearRect(
        -this.width,
        -this.height,
        this.width * 2,
        this.height * 2,
      )
      this.debug()
    }

    const children = [...this.children]
    while (children.length) {
      children.shift()?.render(this.ctx)
    }
  }
}
