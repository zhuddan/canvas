enum ENV {
  WEB = 'WEB',
  UNI_APP = 'UNI_APP',
  WX = 'WX',
}

export interface TextBaseStyle {
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/font
   */
  font?: string
  fontSize?: number
  fontFamily?: string
  fontWeight?: 'normal' | 'bold' | number

  textAlign?: 'left' | 'center' | 'right'

  color?: string

  textBaseline?: CanvasTextBaseline
}

export interface TextMultilineStyle extends TextBaseStyle {
  lineHeight?: number
  maxWidth?: number
}

export class Painter {
  canvas?: OffscreenCanvas | UniNamespace.OffscreenCanvas | WechatMiniprogram.OffscreenCanvas
  ctx?: OffscreenCanvasRenderingContext2D
  constructor(private defaultTextStyle: Omit<TextMultilineStyle, 'lineHeight' | 'maxWidth'> = {
    textBaseline: 'top',
    fontFamily: '"Microsoft YaHei"',
    textAlign: 'left',
  }) {

  }

  init(width: number, height: number) {
    switch (getEnv()) {
      case ENV.WEB:
        this.canvas = new OffscreenCanvas(width, height)
        this.ctx = this.canvas.getContext('2d')!
        break
      case ENV.UNI_APP:
        this.canvas = uni.createOffscreenCanvas(width, height)
        this.ctx = this.canvas.getContext('2d')
        break
      case ENV.WX:
        this.canvas = wx.createOffscreenCanvas(width, height)
        this.ctx = this.canvas.getContext('2d')
        break
    }
  }

  private checkCtx() {
    if (!this.ctx) {
      // return false
      throw new Error('请先执行 init() 函数')
    }
    return true
  }

  text(text: string, x: number, y: number, style: TextMultilineStyle = {}) {
    if (!this.checkCtx()) {
      return
    }
    const _style = Object.assign({}, this.defaultTextStyle, style)
    const ctx = this.ctx!
    if (_style.color) {
      ctx.fillStyle = _style.color
    }

    if (_style.textAlign) {
      ctx.textAlign = _style.textAlign
    }

    if (_style.font) {
      ctx.font = _style.font
    }
    else {
      const fs = _style?.fontSize ? `${_style.fontSize}px` : '32px'
      const fontWeight = _style?.fontWeight || 'normal'
      ctx.font = `${fs} ${fontWeight} ${_style.fontFamily}`
    }
    if (_style?.maxWidth && _style?.lineHeight) {
      const allAtr = text.split('')
      const splitText = [] // 拆分出来的每一行
      let multilineText: string[] = [] // 每一行的文字数组
      for (let i = 0; i < allAtr.length; i++) {
        const currentStr = allAtr[i]
        multilineText.push(currentStr)
        const rowStr = multilineText.join('')
        if (ctx.measureText(rowStr).width > _style.maxWidth) {
          multilineText.pop()
          splitText.push(multilineText.join(''))
          multilineText = [currentStr]
          continue
        }
        if (i === allAtr.length - 1) {
          splitText.push(rowStr)
        }
      }

      for (let i = 0; i < splitText.length; i++) {
        ctx.fillText(splitText[i], x, y + i * _style.lineHeight)
      }
    }
    else {
      ctx.fillText(text, x, y)
    }
  }
}

function getEnv(): ENV {
  if (typeof uni === 'object') {
    return ENV.UNI_APP
  }
  if (/MicroMessenger/.test(navigator.userAgent)) {
    return ENV.WX
  }
  return ENV.WEB
}

export default Painter
