import { Dirty } from '../common/dirty'
import { interceptDirty } from '../common/intercept'
import type { Display } from '../object/display'

export interface IBaseStyle {
  /**
   * 填充颜色
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)
   */
  fill: CanvasRenderingContext2D['fillStyle']
  /**
   * 描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
   */
  stroke: CanvasRenderingContext2D['strokeStyle'] | null
  /**
   * 描边宽度? 默认为1
   */
  strokeWeight: number
  /**
   * 透明度<br/>此透明度为 [CanvasRenderingContext2D.globalAlpha](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
   *
   * 你也可以设置fill或者stroke为rgba实现透明效果
   *
   * 或者你喜欢16进制颜色也可以使用[这种方法](https://blog.csdn.net/ezconn/article/details/90052114)设置透明度
   */
  alpha: number
}
export abstract class BaseStyle extends Dirty implements Required<IBaseStyle> {
  constructor(_display?: Display) {
    super(_display)
  }

  private _alpha = 1
  @interceptDirty()
  set alpha(value) {
    this._alpha = value
  }

  get alpha() {
    return this._alpha
  }

  private _strokeWeight = 0
  @interceptDirty()
  set strokeWeight(value) {
    this._strokeWeight = value
  }

  get strokeWeight() {
    return this._strokeWeight
  }

  private _fill = '#000'
  @interceptDirty()
  set fill(value) {
    this._fill = value
  }

  get fill() {
    return this._fill
  }

  private _stroke: IBaseStyle['stroke'] = null
  @interceptDirty()
  set stroke(value) {
    this._stroke = value
  }

  get stroke() {
    return this._stroke
  }

  setBaseStyle(ctx: CanvasRenderingContext2D) {
    ctx.globalAlpha = this.alpha
    if (this.strokeWeight && this.stroke) {
      ctx.lineWidth = this.strokeWeight
      ctx.strokeStyle = this.stroke
    }
    ctx.fillStyle = this.fill
  }
}
