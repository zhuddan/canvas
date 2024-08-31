import EventEmitter from 'eventemitter3'
import { createProxy } from '../utils'

export type InputColor = CanvasRenderingContext2D['strokeStyle']
export type LineDash = Iterable<number>
export interface StrokeInput {
  /**
   * 颜色
   */
  color?: InputColor
  /**
   * 宽度 同 [lineWidth](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineWidth)
   */
  width?: number
  /**
   * [CanvasRenderingContext2D.lineDashOffset](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
   */
  dash?: LineDash
}
/**
 * 抽象样式
 */
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
  private _fill = '#000'

  set fill(value) {
    this._fill = value
    console.log('fill', value)
    console.log(this)
    this.update()
  }

  get fill() {
    return this._fill
  }

  private _stroke: StrokeInput = {}

  set stroke(value: StrokeInput | InputColor) {
    if (value === this._stroke)
      return
    if (
      typeof value === 'string'
      || (typeof CanvasGradient !== 'undefined' && value instanceof CanvasGradient)
      || (typeof CanvasPattern !== 'undefined' && value instanceof CanvasPattern)
    ) {
      this._stroke = createProxy({
        ...this._stroke,
        color: value,
      }, () => {
        this.update()
      })
    }
    else {
      this._stroke = createProxy(value as StrokeInput, () => {
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
    if (this.stroke.color && this.stroke.width) {
      ctx.lineWidth = this.stroke.width
      ctx.strokeStyle = this.stroke.color
    }
    if (this.fill) {
      ctx.fillStyle = this.fill
    }
    if (this.filter) {
      ctx.filter = this.filter
    }
    return this
  }

  destroy() {
    this.removeAllListeners()
  }
}
