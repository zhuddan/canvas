import { interceptUpdate } from '../common/intercept'
import { TextStyle } from '../style/text-style'
import { createCanvasFontString, formatValue } from '../utils'
import { Display } from './display'

export class Text extends Display {
  style: TextStyle
  constructor(text: string, x: number, y: number) {
    super()
    this.style = new TextStyle()
    this.position.x = x
    this.position.y = y
    this.text = text
  }

  private _text = ''

  @interceptUpdate()
  set text(text) {
    console.log('text', text)
    this._text = text
  }

  get text() {
    return this._text
  }

  _render(ctx: CanvasRenderingContext2D) {
    ctx.textBaseline = 'top'
    ctx.fillStyle = this.style.fill
    ctx.font = createCanvasFontString(this.style)
    ctx.fontStretch = this.style.fontStretch
    ctx.fontVariantCaps = this.style.fontVariantCaps
    ctx.letterSpacing = formatValue(this.style.letterSpacing)
    ctx.wordSpacing = formatValue(this.style.wordSpacing)
    ctx.textAlign = this.style.textAlign
    ctx.textBaseline = this.style.textBaseline
    ctx.fillText(this.text, this.position.x, this.position.y)
  }
};
