import type { Properties } from 'csstype'
import { interceptUpdate } from '../common/intercept'
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
  private _text = ''

  @interceptUpdate()
  set text(text) {
    console.log('text', text)
    this._text = text
  }

  get text() {
    return this._text
  }

  constructor(text: string, x: number, y: number) {
    super()
    this.position.x = x
    this.position.y = y
    this.text = text
  }

  _render(ctx: CanvasRenderingContext2D) {
    ctx.textBaseline = 'top'
    ctx.font = '48px bold 宋体 '
    ctx.fillText(this.text, this.position.x, this.position.y)
  }
};
