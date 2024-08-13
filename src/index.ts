import type {
  IAnchor,
  IColor,
  // ENV,
  IFont,
  ILinePosition,
  IRotate,
  LineStyle,
  TextBaseStyle,
  TextMultilineStyle,
} from './types'

export class Painter {
  private checkCtx() {
    if (!this.ctx) {
      // return false
      throw new Error('请先执行 init() 函数')
    }
    return true
  }

  setColor(_style: IColor) {
    if (!this.checkCtx()) {
      return
    }
    const ctx = this.ctx!
    if (_style.fill) {
      ctx.fillStyle = _style.fill
    }

    if (_style.stroke) {
      ctx.strokeStyle = _style.stroke
      ctx.lineWidth = _style.strokeWeight || 1
    }
  }

  setAnchor(_style: IAnchor) {
    let anchorX = 0
    let anchorY = 0
    if (typeof _style.anchor !== 'undefined') {
      if (typeof _style.anchor === 'object') {
        anchorX = _style.anchor.x
        anchorY = _style.anchor.y
      }
      else {
        anchorX = anchorY = _style.anchor
      }
    }
    anchorX = anchorX <= 0 ? 0 : anchorX >= 1 ? 1 : anchorX
    anchorY = anchorY <= 0 ? 0 : anchorY >= 1 ? 1 : anchorY

    return {
      anchorX,
      anchorY,
    }
  }

  setRotate(x: number, y: number, _style: IRotate, cb: () => void) {
    if (!this.checkCtx()) {
      return
    }
    const ctx = this.ctx!
    if (_style.rotateAngle || _style.rotateDeg) {
      const angle = _style.rotateAngle
        ? _style.rotateAngle
        : (_style.rotateDeg!) * Math.PI / 180
      ctx.translate(x, y)
      ctx.rotate(angle)
      cb()
    }
  }

  text(text: string, x: number, y: number, style: Partial<TextMultilineStyle> = {}) {
    if (!this.checkCtx()) {
      return
    }
    const ctx = this.ctx!
    ctx.save()

    /**
     * 镂空
     */
    const isHollowOut = !style.fill && style.stroke
    const _style = Object.assign({}, this.defaultTextStyle, style) as Required<TextMultilineStyle>
    /**
     * 处理旋转
     */
    this.setRotate(x, y, _style, () => {
      x = 0
      y = 0
    })
    /**
     * 处理中心坐标
     */
    const { anchorY, anchorX } = this.setAnchor(_style)

    /**
     * font
     */
    ctx.font = this.createCanvasFontString(_style)
    ctx.fontStretch = _style.fontStretch
    ctx.fontVariantCaps = _style.fontVariantCaps
    ctx.letterSpacing = this.formatValue(_style.letterSpacing)
    ctx.wordSpacing = this.formatValue(_style.wordSpacing)
    ctx.textAlign = _style.textAlign
    ctx.textBaseline = _style.textBaseline
    const fontSize = Number(Number.parseInt(`${_style.fontSize}`))
    /**
     * 文本宽度
     */
    let textWidth = 0
    /**
     * 文本高度
     */
    let textHeight = Number.isNaN(fontSize) ? 0 : fontSize

    /**
     * 填充颜色
     */
    this.setColor(_style)
    // 多行文本绘制
    if (_style.maxWidth && _style.lineHeight) {
      textWidth = _style.maxWidth
      const texts = text.split('')
      const splitText = []
      let multilineText: string[] = []
      for (let i = 0; i < texts.length; i++) {
        const currentStr = texts[i]
        multilineText.push(currentStr)
        const rowStr = multilineText.join('')
        if (ctx.measureText(rowStr).width > _style.maxWidth) {
          multilineText.pop()
          splitText.push(multilineText.join(''))
          multilineText = [currentStr]
          continue
        }
        if (i === texts.length - 1) {
          splitText.push(rowStr)
        }
      }
      if (!splitText.length) {
        textHeight = 0
      }
      else if (splitText.length === 1) {
        const measure = ctx.measureText(splitText[0])
        textHeight = Math.max(...[
          measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent,
          Number.isNaN(fontSize) ? 0 : fontSize,
        ])
      }
      else {
        textHeight = (splitText.length - 1) * _style.lineHeight + textHeight
      }

      if (anchorX !== 0) {
        x -= textWidth * anchorX
      }

      if (anchorY !== 0) {
        y -= textHeight * anchorY
      }

      for (let i = 0; i < splitText.length; i++) {
        if (_style.stroke) {
          ctx.strokeText(splitText[i], x, y + i * _style.lineHeight)
        }
        if (!isHollowOut) {
          ctx.fillText(splitText[i], x, y + i * _style.lineHeight)
        }
      }
    }
    else {
      // 单行文本绘制
      const measure = ctx.measureText(text)
      textWidth = measure.width
      textHeight = Math.max(...[
        measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent,
        Number.isNaN(fontSize) ? 0 : fontSize,
      ])

      if (anchorX !== 0) {
        x -= textWidth * anchorX
      }

      if (anchorY !== 0) {
        y -= textHeight * anchorY
      }

      if (_style.stroke) {
        ctx.strokeText(text, x, y)
      }
      if (!isHollowOut) {
        ctx.fillText(text, x, y)
      }
    }
    ctx.restore()
    return textHeight
  }

  private createCanvasFontString({
    fontFamily,
    fontSize,
    fontStyle = 'normal',
    fontWeight = 'normal',
  }: IFont): string {
    fontSize = typeof fontSize === 'string' ? fontSize : `${fontSize}px`
    return `${fontStyle} ${fontWeight} ${fontSize} ${fontFamily}`
  }

  private formatValue(val: string | number) {
    return typeof val === 'string' ? val : `${val}px`
  }

  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D
  defaultTextStyle: TextBaseStyle
  defaultLineStyle: LineStyle
  constructor() {
    const defaultTextBaseStyle: TextBaseStyle = {
      fontFamily: '"Microsoft YaHei"',
      fontSize: 32,
      fontWeight: 'normal',
      fontStyle: 'normal',

      fill: '#000',
      stroke: undefined,

      fontStretch: 'normal',
      fontVariantCaps: 'normal',
      letterSpacing: 'normal',
      wordSpacing: 'normal',

      textAlign: 'left',
      textBaseline: 'top',
    }
    this.defaultTextStyle = Object.assign({}, defaultTextBaseStyle)
    const defaultLineStyle: LineStyle = {
      dash: false,
      dashOffset: 0,
      lineCap: 'butt',
      lineJoin: 'miter',

      fill: undefined,
      stroke: '#000',
    }
    this.defaultLineStyle = Object.assign({}, defaultLineStyle)
  }

  init(width: number, height: number) {
    this.canvas = document.createElement('canvas')!
    this.ctx = this.canvas.getContext('2d')!
    const dpr = 1 ?? 1
    this.canvas.style.width = this.formatValue(width * 1)
    this.canvas.style.height = this.formatValue(height * 1)
    this.canvas.width = width * dpr
    this.canvas.height = height * dpr
    this.ctx.scale(dpr, dpr)
    return this
  }

  line(lines: ILinePosition, style: LineStyle = {}) {
    if (!this.checkCtx()) {
      return
    }
    if (!lines.length) {
      return
    }
    const ctx = this.ctx!
    ctx.save()

    const _style = Object.assign({}, this.defaultLineStyle, style) as Required<LineStyle>

    /**
     * 填充颜色
     */
    this.setColor(_style)

    this.setRotate(lines[0][0], lines[0][1], _style, () => {
      lines = lines.map((e) => {
        return [
          e[0] - lines[0][0],
          e[1] - lines[0][1],
        ]
      })
    })

    if (_style.dash) {
      if (_style.dash === true) {
        ctx.setLineDash([4, 4])
      }
      else {
        ctx.setLineDash(_style.dash)
      }
    }

    /**
     * 宽度
     */
    const instanceWidth = calcDiff(lines.map(e => e[0]))
    /**
     * 高度
     */
    const instanceHeight = calcDiff(lines.map(e => e[1]))

    const { anchorY, anchorX } = this.setAnchor(_style)

    if (anchorX || anchorY) {
      lines = lines.map((e) => {
        return [
          e[0] - anchorX * instanceWidth,
          e[1] - anchorX * instanceHeight,
        ]
      })
    }

    ctx.beginPath()

    ctx.lineDashOffset = _style.dashOffset

    ctx.lineCap = _style.lineCap

    ctx.lineJoin = _style.lineJoin

    ctx.moveTo(...lines.shift()!)

    for (let index = 0; index < lines.length; index++) {
      const point = lines[index]
      ctx.lineTo(...point)
    }

    if (_style.close) {
      ctx.closePath()
    }

    if (_style.stroke) {
      ctx.stroke()
    }

    if (_style.fill) {
      ctx.fill()
    }

    ctx.restore()
  }
}

// function getEnv(): ENV {
//   if (typeof uni === 'object') {
//     return ENV.UNI_APP
//   }
//   if (/MicroMessenger/.test(navigator.userAgent)) {
//     return ENV.WX
//   }
//   return ENV.WEB
// }

export function calcMin(numbers: number[]) {
  let min = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (element < min) {
      min = element
    }
  }
  return min
}

export function calcMax(numbers: number[]) {
  let max = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (element > max) {
      max = element
    }
  }
  return max
}

function calcDiff(numbers: number[]) {
  return calcMax(numbers) - calcMin(numbers)
}

export default Painter
