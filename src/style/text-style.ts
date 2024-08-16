import type { Properties, Property } from 'csstype'
import { interceptUpdate } from '../common/intercept'
import { BaseStyle } from './base-style'

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
export class TextStyle extends BaseStyle implements IFont {
  private _fontSize: IFont['fontSize'] = 12

  @interceptUpdate()
  set fontSize(value) {
    this._fontSize = value
  }

  get fontSize() {
    return this._fontSize
  }

  private _fontFamily = 'serif'

  @interceptUpdate()
  set fontFamily(value) {
    this._fontFamily = value
  }

  get fontFamily() {
    return this._fontFamily
  }

  private _fontStyle = 'normal'

  @interceptUpdate()
  set fontStyle(value) {
    this._fontStyle = value
  }

  get fontStyle() {
    return this._fontStyle
  }

  private _fontWeight = 'normal'
  @interceptUpdate()
  set fontWeight(value) {
    this._fontWeight = value
  }

  get fontWeight() {
    return this._fontWeight
  }
};
