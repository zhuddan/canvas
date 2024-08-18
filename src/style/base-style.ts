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

  shadow?: {
    /**
     * [CanvasRenderingContext2D.shadowOffsetX](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
     */
    x?: number
    /**
     * [CanvasRenderingContext2D.shadowOffsetY](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
     */
    y?: number
    /**
     * [CanvasRenderingContext2D.shadowBlur](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
     */
    blur?: number
    /**
     * [CanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
     */
    color?: string
  }
  /**
   * [CanvasRenderingContext2D.filter](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)
   */
  filter: CanvasRenderingContext2D['filter']
}
export abstract class BaseStyle extends Dirty implements IBaseStyle {
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

  static defaultShadow: IBaseStyle['shadow'] = {

  }

  private _shadow: IBaseStyle['shadow'] = {}

  @interceptDirty()
  set shadow(value) {
    this._shadow = value
  }

  get shadow() {
    return this._shadow
  }

  private _filter = 'none'
  @interceptDirty()
  set filter(value) {
    this._filter = value
  }

  get filter() {
    return this._filter
  }

  setBaseStyle(ctx: CanvasRenderingContext2D) {
    ctx.globalAlpha = this.alpha
    if (this.strokeWeight && this.stroke) {
      ctx.lineWidth = this.strokeWeight
      ctx.strokeStyle = this.stroke
    }
    if (this.fill) {
      ctx.fillStyle = this.fill
    }
    if (this.filter) {
      ctx.filter = this.filter
    }
    if ((this.shadow?.x || this.shadow?.y)
      && (this.shadow?.blur || this.shadow?.color)) {
      if (this.shadow.color) {
        console.log('set')
        ctx.shadowColor = this.shadow.color
      }
      if (this.shadow.blur) {
        ctx.shadowBlur = this.shadow.blur
      }
      if (this.shadow.x) {
        ctx.shadowOffsetX = this.shadow.x
      }
      if (this.shadow.y) {
        ctx.shadowOffsetY = this.shadow.y
      }
    }
  }
}
