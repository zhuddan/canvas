import type { Properties, Property } from 'csstype'
import { interceptDirty } from '../common/intercept'
import type { Display } from '../object/display'
import type { IBaseStyle } from './base-style'
import { BaseStyle } from './base-style'

export interface TextStyleOptions extends IBaseStyle {
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
}

export class TextStyle extends BaseStyle {
  public static defaultTextStyle: TextStyleOptions = {
    fill: 'black',
    stroke: null,
    strokeWeight: 0,
    alpha: 1,
    fontFamily: 'Arial',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontStretch: 'condensed',
    fontVariantCaps: 'normal',
    letterSpacing: 0,
    wordSpacing: 0,
    textAlign: 'left',
    filter: 'none',
  }

  _isStroke: boolean
  constructor(style: Partial<TextStyleOptions> = {}, display?: Display) {
    super(display)
    this._isStroke = !!style.stroke
    const fullStyle = Object.assign({}, TextStyle.defaultTextStyle, style)
    for (const key in fullStyle) {
      const thisKey = key as keyof typeof this
      this[thisKey] = fullStyle[key as keyof TextStyleOptions] as any
    }
  }

  public reset() {
    const defaultStyle = TextStyle.defaultTextStyle
    for (const key in defaultStyle) {
      this[key as keyof typeof this] = defaultStyle[key as keyof TextStyleOptions] as any
    }
  }

  protected readonly textBaseline = 'top'

  private _fontSize: TextStyleOptions['fontSize']
  @interceptDirty()
  set fontSize(value) {
    this._fontSize = value
  }

  get fontSize() {
    return this._fontSize
  }

  private _fontFamily: TextStyleOptions['fontFamily']
  @interceptDirty()
  set fontFamily(value) {
    this._fontFamily = value
  }

  get fontFamily() {
    return this._fontFamily
  }

  private _fontStyle: TextStyleOptions['fontStyle']
  @interceptDirty()
  set fontStyle(value) {
    this._fontStyle = value
  }

  get fontStyle() {
    return this._fontStyle
  }

  private _fontWeight: TextStyleOptions['fontWeight']
  @interceptDirty()
  set fontWeight(value) {
    this._fontWeight = value
  }

  get fontWeight() {
    return this._fontWeight
  }

  private _fontStretch: TextStyleOptions['fontStretch'] = TextStyle.defaultTextStyle.fontStretch
  @interceptDirty()
  set fontStretch(value) {
    this._fontStretch = value
  }

  get fontStretch() {
    return this._fontStretch
  }

  private _fontVariantCaps: TextStyleOptions['fontVariantCaps'] = TextStyle.defaultTextStyle.fontVariantCaps
  @interceptDirty()
  set fontVariantCaps(value) {
    this._fontVariantCaps = value
  }

  get fontVariantCaps() {
    return this._fontVariantCaps
  }

  private _letterSpacing: TextStyleOptions['letterSpacing'] = TextStyle.defaultTextStyle.letterSpacing

  @interceptDirty()
  set letterSpacing(value) {
    this._letterSpacing = value
  }

  get letterSpacing() {
    return this._letterSpacing
  }

  private _wordSpacing: TextStyleOptions['wordSpacing'] = TextStyle.defaultTextStyle.wordSpacing
  @interceptDirty()
  set wordSpacing(value) {
    this._wordSpacing = value
  }

  get wordSpacing() {
    return this._wordSpacing
  }

  private _textAlign: TextStyleOptions['textAlign'] = TextStyle.defaultTextStyle.textAlign
  @interceptDirty()
  set textAlign(value) {
    this._textAlign = value
  }

  get textAlign() {
    return this._textAlign
  }
};
