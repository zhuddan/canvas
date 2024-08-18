import { interceptDirty } from '../common/intercept'
import type { TextStyleOptions } from '../style/text-style'
import { TextStyle } from '../style/text-style'
import { createCanvasFontString, formatValue } from '../utils'
import { Display } from './display'

export class Text extends Display {
  style: TextStyle
  constructor(text: string, x: number, y: number, style: Partial<TextStyleOptions> = {}) {
    super()
    this.position.x = x
    this.position.y = y
    this.text = text
    this.style = new TextStyle(style, this)
  }

  private _text = ''

  @interceptDirty()
  set text(text) {
    this._text = text
  }

  get text() {
    return this._text
  }

  _render(ctx: CanvasRenderingContext2D) {
    if (this.style.fill || (this.style.stroke && this.style.strokeWeight)) {
      ctx.textBaseline = 'top'
      this.style.setBaseStyle(ctx)
      ctx.font = createCanvasFontString(this.style)
      ctx.fontStretch = this.style.fontStretch
      ctx.fontVariantCaps = this.style.fontVariantCaps
      ctx.letterSpacing = formatValue(this.style.letterSpacing)
      ctx.wordSpacing = formatValue(this.style.wordSpacing)
      ctx.textAlign = this.style.textAlign

      if (this.style.fill) {
        ctx.fillText(this.text, this.position.x, this.position.y)
      }
      if (this.style.stroke && this.style.strokeWeight) {
        ctx.strokeText(this.text, this.position.x, this.position.y)
      }
    }
  }
};
