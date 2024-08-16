import type { Properties } from 'csstype'
import { Point } from '../position/point'
import { Display } from './display'

export interface IFont {
  /**
   * @description 字体
   * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)
   */
  fontFamily: Properties['fontFamily']
  /**
   * @description 字体大小 当值为 number 时单位为px
   * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)
   */
  fontSize: Properties['fontSize'] | (number & {})
  /**
   * @description 字体样式
   * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)
   */
  fontStyle?: Properties['fontStyle']
  /**
   * @description 字体的粗细程度
   * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)
   */
  fontWeight?: Properties['fontWeight']
}

export class Text extends Display {
  constructor(public text: string, x: number, y: number) {
    super()
    this.position.x = x
    this.position.y = y
  }

  _render(ctx: CanvasRenderingContext2D) {
    ctx.textBaseline = 'top'
    ctx.font = '100px 黑体'
    ctx.fillText(this.text, this.position.x, this.position.y)
    this._shouldUpdate = false
  }
};
