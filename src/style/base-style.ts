import { interceptUpdate } from '../common/intercept'

export interface BaseStyleImpl {
  /**
   * 填充颜色
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)
   */
  fill?: CanvasRenderingContext2D['fillStyle']
  /**
   * 描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
   */
  stroke?: CanvasRenderingContext2D['strokeStyle']
  /**
   * 描边宽度? 默认为1
   */
  strokeWeight?: number
  /**
   * 透明度<br/>此透明度为 [CanvasRenderingContext2D.globalAlpha](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
   *
   * 你也可以设置fill或者stroke为rgba实现透明效果
   *
   * 或者你喜欢16进制颜色也可以使用[这种方法](https://blog.csdn.net/ezconn/article/details/90052114)设置透明度
   */
  alpha?: number
}
export abstract class BaseStyle implements Required<BaseStyleImpl> {
  stroke = '#000'
  strokeWeight = 1
  alpha = 1

  private _fill = '#000'

  @interceptUpdate()
  set fill(value) {
    this._fill = value
  }

  get fill() {
    return this._fill
  }
}
