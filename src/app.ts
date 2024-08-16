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

let __shouldUpdate = false
export function shouldUpdate() {
  if (!__shouldUpdate)
    __shouldUpdate = true
}
export function pauseUpdate() {
  if (__shouldUpdate)
    __shouldUpdate = false
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
    const ctx = this.ctx
    this.ctx.strokeStyle = '#00ffcc'
    this.beforeRender()
    ctx.textBaseline = 'top'
    ctx.font = '12px 黑体'
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
    console.log(object)
    object.onAdd()
    this.children.push(object)
    shouldUpdate()
  }

  remove(object: Display) {
    const index = this.children.indexOf(object)
    if (index !== -1) {
      this.children.splice(index, 1)
      shouldUpdate()
    }
  }

  private update() {
    window.requestAnimationFrame(() => {
      this.update()
    })
    if (__shouldUpdate) {
      this.ctx.clearRect(
        -this.width,
        -this.height,
        this.width * 2,
        this.height * 2,
      )
      this.debug()
      const children = [...this.children.filter(e => e.visible)]
      while (children.length) {
        children.shift()?.render(this.ctx)
      }
      this.onUpdate()
      pauseUpdate()
    }
  }
}
