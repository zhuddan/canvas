import type { Properties, Property } from 'csstype'
import { interceptDirty } from '../common/intercept'
import type { Display } from '../object/display'
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
  fontStyle: Properties['fontStyle']
  /**
   * @description 字体的粗细程度
   * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)
   */
  fontWeight: Properties['fontWeight']

  /**
   * 指定绘制文本时字体如何被扩展或压缩
   * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontStretch)
   */
  fontStretch: CanvasFontStretch
  /**
   * 用于指定渲染文本的替代大写形式
   * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
   */
  fontVariantCaps: CanvasFontVariantCaps
  /**
   * 用于指定绘制文本时字母之间的间距
   * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
   */
  letterSpacing: string | number
  /**
   * 指定绘制文本时单词之间的间距
   * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
   */
  wordSpacing: string | number
  /**
   * 文本时文本的对齐方式
   * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign)
   */
  textAlign: CanvasTextAlign
  // /**
  //  * 绘制文本时使用的文本基线 建议使用top 即文本坐标为右上角(由于设备差异或者字体差异导致这个坐标是预估的, 尤其是y坐标, 不适合精细的绘制)
  //  * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  //  */
  // textBaseline?: CanvasTextBaseline
}
export class TextStyle extends BaseStyle implements Required<IFont> {
  constructor(display?: Display) {
    super(display)
  }

  readonly textBaseline = 'top'

  private _fontSize: IFont['fontSize'] = 12

  @interceptDirty()
  set fontSize(value) {
    this._fontSize = value
  }

  get fontSize() {
    return this._fontSize
  }

  private _fontFamily = 'serif'

  @interceptDirty()
  set fontFamily(value) {
    this._fontFamily = value
  }

  get fontFamily() {
    return this._fontFamily
  }

  private _fontStyle = 'normal'

  @interceptDirty()
  set fontStyle(value) {
    this._fontStyle = value
  }

  get fontStyle() {
    return this._fontStyle
  }

  private _fontWeight = 'normal'
  @interceptDirty()
  set fontWeight(value) {
    this._fontWeight = value
  }

  get fontWeight() {
    return this._fontWeight
  }

  private _fontStretch: IFont['fontStretch'] = 'normal'
  @interceptDirty()
  set fontStretch(value) {
    this._fontStretch = value
  }

  get fontStretch() {
    return this._fontStretch
  }

  private _fontVariantCaps: IFont['fontVariantCaps'] = 'normal'
  @interceptDirty()
  set fontVariantCaps(value) {
    this._fontVariantCaps = value
  }

  get fontVariantCaps() {
    return this._fontVariantCaps
  }

  private _letterSpacing: IFont['letterSpacing'] = 0

  @interceptDirty()
  set letterSpacing(value) {
    this._letterSpacing = value
  }

  get letterSpacing() {
    return this._letterSpacing
  }

  private _wordSpacing: IFont['wordSpacing'] = 'normal'
  @interceptDirty()
  set wordSpacing(value) {
    this._wordSpacing = value
  }

  get wordSpacing() {
    return this._wordSpacing
  }

  private _textAlign: IFont['textAlign'] = 'left'
  @interceptDirty()
  set textAlign(value) {
    this._textAlign = value
  }

  get textAlign() {
    return this._textAlign
  }
};
