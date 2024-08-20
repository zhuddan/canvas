import EventEmitter from 'eventemitter3'
import { createProxy } from '../utils'

export type StrokeInputColor = CanvasRenderingContext2D['strokeStyle']
export interface StrokeInput {
  color?: StrokeInputColor
  width?: number
}

// | CanvasRenderingContext2D['strokeStyle']
export interface IAbstractStyle {
  /**
   * 填充颜色
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)
   */
  fill: CanvasRenderingContext2D['fillStyle'] | null
  /**
   * 描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
   */
  stroke: StrokeInput
  /**
   * [CanvasRenderingContext2D.filter](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)
   */
  filter: CanvasRenderingContext2D['filter']
}
export abstract class AbstractStyle extends EventEmitter<{
  update: []
  updateBounds: []
}> implements IAbstractStyle {
  private _strokeWeight = 0

  set strokeWeight(value) {
    this._strokeWeight = value
    this.update()
  }

  get strokeWeight() {
    return this._strokeWeight
  }

  private _fill = '#000'

  set fill(value) {
    this._fill = value
    this.update()
  }

  get fill() {
    return this._fill
  }

  private _stroke: StrokeInput = {}

  set stroke(value: StrokeInput | StrokeInputColor) {
    if (value === this._stroke)
      return
    if (
      typeof value === 'string'
      || value instanceof CanvasGradient
      || value instanceof CanvasPattern
    ) {
      this._stroke = createProxy({
        ...this._stroke,
        color: value,
      }, () => {
        this.update()
      })
    }
    else {
      this._stroke = createProxy(value, () => {
        this.update()
      })
      this.update()
    }
  }

  get stroke(): StrokeInput {
    return this._stroke
  }

  private _filter = 'none'

  set filter(value) {
    this._filter = value
    this.update()
  }

  get filter() {
    return this._filter
  }

  update() {
    this.emit('update')
  }

  updateBounds() {
    this.emit('updateBounds')
  }

  render(ctx: CanvasRenderingContext2D) {
    renderAbstractStyle(this, ctx)
    return this
  }
}

export function renderAbstractStyle(
  style: IAbstractStyle,
  ctx: CanvasRenderingContext2D,
) {
  if (style.stroke.color && style.stroke.width) {
    ctx.lineWidth = style.stroke.width
    ctx.strokeStyle = style.stroke.color
  }
  if (style.fill) {
    ctx.fillStyle = style.fill
  }
  if (style.filter) {
    ctx.filter = style.filter
  }
}
