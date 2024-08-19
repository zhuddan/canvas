// import { interceptDirty } from '../common/intercept'
import type { TextStyleOptions } from '../style/text-style'
import { TextStyle } from '../style/text-style'
import { createCanvasFontString, formatValue } from '../utils'
import type { DisplayOptions } from './display'
import { Display } from './display'

export interface TextOptions extends DisplayOptions {
  text: string
  style?: Partial<TextStyleOptions> | TextStyle
}
export class Text extends Display {
  constructor(options: TextOptions) {
    super(options)
    if (options.style)
      this.style = options.style
    this.text = options.text ?? ''
  }

  private _style = new TextStyle()

  set style(style: Partial<TextStyleOptions> | TextStyle) {
    style = style || {}
    this._style?.off('update', this._onUpdate, this)
    if (style instanceof TextStyle) {
      this._style = style
    }
    else {
      this._style = new TextStyle(style)
    }
    this._style.on('update', this._onUpdate, this)
    this._onUpdate()
  }

  get style(): TextStyle {
    return this._style
  }

  private _text = ''

  set text(text) {
    if (this._text === text)
      return
    this._text = text
    this._onUpdate()
  }

  get text() {
    return this._text
  }

  get _shouldUpdate(): boolean {
    return !!(this.style.fill) || !!(this.style.stroke && this.style.strokeWeight)
  }

  render(ctx: CanvasRenderingContext2D) {
    if (this.style.fill || (this.style.stroke && this.style.strokeWeight)) {
      this.style.render(ctx)
      if (this.style.fill) {
        ctx.fillText(this.text, this.position.x, this.position.y)
      }
      if (this.style.stroke && this.style.strokeWeight) {
        ctx.strokeText(this.text, this.position.x, this.position.y)
      }
    }
  }
};
