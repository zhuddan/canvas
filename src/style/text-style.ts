import type { Properties, Property } from 'csstype'
// import { interceptDirty } from '../common/intercept'
import type { Display } from '../object/display'
import { createCanvasFontString, formatValue } from '../utils'
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

  lineHeight: number
  wordWrap: boolean
  wordWrapWidth: number
}

export class TextStyle extends BaseStyle implements TextStyleOptions {
  public static defaultTextStyle: TextStyleOptions = {
    fill: 'black',
    stroke: null,
    strokeWeight: 0,
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
    shadow: {},
    lineHeight: 0,
    wordWrap: false,
    wordWrapWidth: 0,
  }

  _isStroke: boolean
  constructor(style: Partial<TextStyleOptions> = {}) {
    super()
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
    this.updateBounds()
    this.update()
  }

  protected readonly textBaseline = 'top'

  private _fontSize: TextStyleOptions['fontSize']
  set fontSize(value) {
    this._fontSize = value
    this.updateBounds()
    this.update()
  }

  get fontSize() {
    return this._fontSize
  }

  private _fontFamily: TextStyleOptions['fontFamily']
  set fontFamily(value) {
    this._fontFamily = value
    this.updateBounds()
    this.update()
  }

  get fontFamily() {
    return this._fontFamily
  }

  private _fontStyle: TextStyleOptions['fontStyle']

  set fontStyle(value) {
    this._fontStyle = value
    this.updateBounds()
    this.update()
  }

  get fontStyle() {
    return this._fontStyle
  }

  private _fontWeight: TextStyleOptions['fontWeight']

  set fontWeight(value) {
    this._fontWeight = value
    this.updateBounds()
    this.update()
  }

  get fontWeight() {
    return this._fontWeight
  }

  private _fontStretch: TextStyleOptions['fontStretch'] = TextStyle.defaultTextStyle.fontStretch

  set fontStretch(value) {
    this._fontStretch = value
    this.updateBounds()
    this.update()
  }

  get fontStretch() {
    return this._fontStretch
  }

  private _fontVariantCaps: TextStyleOptions['fontVariantCaps'] = TextStyle.defaultTextStyle.fontVariantCaps

  set fontVariantCaps(value) {
    this._fontVariantCaps = value
    this.updateBounds()
    this.update()
  }

  get fontVariantCaps() {
    return this._fontVariantCaps
  }

  private _letterSpacing: TextStyleOptions['letterSpacing'] = TextStyle.defaultTextStyle.letterSpacing

  set letterSpacing(value) {
    this._letterSpacing = value
    this.update()
    this.updateBounds()
  }

  get letterSpacing() {
    return this._letterSpacing
  }

  private _wordSpacing: TextStyleOptions['wordSpacing'] = TextStyle.defaultTextStyle.wordSpacing

  set wordSpacing(value) {
    this._wordSpacing = value
    this.update()
    this.updateBounds()
  }

  get wordSpacing() {
    return this._wordSpacing
  }

  private _textAlign: TextStyleOptions['textAlign'] = TextStyle.defaultTextStyle.textAlign

  set textAlign(value) {
    this._textAlign = value
    this.update()
  }

  get textAlign() {
    return this._textAlign
  }

  private _lineHeight = 0

  set lineHeight(value) {
    if (this.lineHeight !== value) {
      this._lineHeight = value
      this.update()
      this.updateBounds()
    }
  }

  get lineHeight() {
    if (!this._lineHeight) {
      this._lineHeight = typeof this.fontSize == 'number' ? this.fontSize : Number.parseInt(`${this.fontSize}`)
    }
    return this._lineHeight
  }

  private _wordWrap = false

  set wordWrap(value) {
    if (this.wordWrap !== value) {
      this._wordWrap = value
      this.update()
      this.updateBounds()
    }
  }

  get wordWrap() {
    return this._wordWrap
  }

  private _wordWrapWidth = 0

  set wordWrapWidth(value) {
    if (this.wordWrapWidth !== value) {
      this._wordWrapWidth = value
      this.update()
      this.updateBounds()
    }
  }

  get wordWrapWidth() {
    return this._wordWrapWidth
  }

  clone() {
    return new TextStyle({
      fill: this.fill,
      stroke: this.stroke,
      strokeWeight: this.strokeWeight,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      fontStyle: this.fontStyle,
      fontWeight: this.fontWeight,
      fontStretch: this.fontStretch,
      fontVariantCaps: this.fontVariantCaps,
      letterSpacing: this.letterSpacing,
      wordSpacing: this.wordSpacing,
      textAlign: this.textAlign,
      filter: this.filter,
    })
  }

  render(ctx: CanvasRenderingContext2D) {
    super.render(ctx)
    ctx.textBaseline = 'top'
    ctx.font = createCanvasFontString(this)
    ctx.fontStretch = this.fontStretch
    ctx.fontVariantCaps = this.fontVariantCaps
    ctx.letterSpacing = formatValue(this.letterSpacing)
    ctx.wordSpacing = formatValue(this.wordSpacing)
    ctx.textAlign = this.textAlign
    return this
  }
};
