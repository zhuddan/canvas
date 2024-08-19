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
    this._style?.off('updateBounds', this._updateBounds, this)
    if (style instanceof TextStyle) {
      this._style = style
    }
    else {
      this._style = new TextStyle(style)
    }
    this._style.on('update', this._onUpdate, this)
    this._style?.on('updateBounds', this._updateBounds, this)
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

  getSplitText(ctx: CanvasRenderingContext2D) {
    const texts = this.text.split('')
    const splitText = []
    let multilineText: string[] = []
    for (let i = 0; i < texts.length; i++) {
      const currentStr = texts[i]
      multilineText.push(currentStr)
      const rowStr = multilineText.join('')
      if (ctx.measureText(rowStr).width > this.style.wordWrapWidth) {
        multilineText.pop()
        splitText.push(multilineText.join(''))
        multilineText = [currentStr]
        continue
      }
      if (i === texts.length - 1) {
        splitText.push(rowStr)
      }
    }
    return splitText
  }

  _render(ctx: CanvasRenderingContext2D) {
    if (this.style.fill || (this.style.stroke && this.style.strokeWeight)) {
      this.style.render(ctx)
      // 绘制单行文本
      if (!this.style.wordWrap || !this.style.wordWrapWidth) {
        if (this.style.fill) {
          ctx.fillText(this.text, this.position.x, this.position.y)
        }
        if (this.style.stroke && this.style.strokeWeight) {
          ctx.strokeText(this.text, this.position.x, this.position.y)
        }
      }
      else {
        const splitText = this.getSplitText(ctx)
        for (let i = 0; i < splitText.length; i++) {
          const text = splitText[i]
          if (this.style.fill) {
            ctx.strokeText(text, this.position.x, this.position.y + i * this.style.lineHeight)
          }
          if (this.style.stroke && this.style.strokeWeight) {
            ctx.strokeText(text, this.position.x, this.position.y + i * this.style.lineHeight)
          }
        }
      }
    }
  }

  _updateBounds() {
    if (!this._app)
      return
    this._app.onContext((ctx) => {
      this.style.render(ctx)
      if (!this.style.wordWrap || !this.style.wordWrapWidth) {
        const measure = ctx.measureText(this.text)
        let height = Math.max(...[
          measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent,
          typeof this.style.fontSize == 'number' ? this.style.fontSize : Number.parseInt(`${this.style.fontSize}`),
        ])
        if (this.style.stroke && this.style.strokeWeight) {
          height += this.style.strokeWeight
        }
        this.height = height
      }
      else {
        const splitText = this.getSplitText(ctx)
        this.width = this.style.wordWrapWidth
        if (!splitText.length) {
          this.height = 0
          return
        }
        const measure = ctx.measureText(this.getSplitText(ctx)[0])
        const lineHeight = this.style.lineHeight
        let height = Math.max(...[
          measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent,
          lineHeight,
        ])
        if (this.style.stroke && this.style.strokeWeight) {
          height += this.style.strokeWeight
        }
        if (splitText.length > 1) {
          this.height = (splitText.length - 1) * lineHeight + height
          console.log(this.height)
        }
      }
    })
  }

  width = 0

  height = 0
};
