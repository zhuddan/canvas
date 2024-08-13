import type {
  ArcStyle,
  ArcToStyle,
  IAnchor,
  IBase as IBaseStyle,
  IColor,
  // ENV,
  IFont,
  ILinePosition,
  IRotate,
  LineBaseStyle,
  LineStyle,
  RectStyle,
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

  private setColor(_style: IColor) {
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

  private setLineStyle(_style: Required<LineBaseStyle>) {
    if (!this.checkCtx()) {
      return // Required<LineStyle>
    }
    const ctx = this.ctx!

    this.setColor(_style)

    if (_style.dash) {
      if (_style.dash === true) {
        ctx.setLineDash([4, 4])
      }
      else {
        ctx.setLineDash(_style.dash)
      }
    }

    ctx.lineDashOffset = _style.dashOffset

    ctx.lineCap = _style.lineCap

    ctx.lineJoin = _style.lineJoin
  }

  private getAnchor(_style: IAnchor) {
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

  private setRotate(x: number, y: number, _style: IRotate, cb: () => void) {
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
     * 填充颜色
     */
    this.setColor(_style)
    /**
     * 处理中心坐标
     */
    const { anchorY, anchorX } = this.getAnchor(_style)

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
  defaultLineBaseStyle: LineBaseStyle
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

    const defaultBaseStyle: LineBaseStyle = {
      fill: undefined,
      stroke: '#000',

      dash: false,
      dashOffset: 0,
      lineCap: 'butt',
      lineJoin: 'miter',
    }

    this.defaultLineBaseStyle = Object.assign({}, defaultBaseStyle)
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

    const _style = Object.assign({}, this.defaultLineBaseStyle, style) as Required<LineStyle>

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
    const { anchorY, anchorX } = this.getAnchor(_style)
    /**
     * 宽度
     */
    const instanceWidth = calcDiff(lines.map(e => e[0]))
    /**
     * 高度
     */
    const instanceHeight = calcDiff(lines.map(e => e[1]))
    if (anchorX || anchorY) {
      lines = lines.map((e) => {
        return [
          e[0] - anchorX * instanceWidth,
          e[1] - anchorX * instanceHeight,
        ]
      })
    }

    this.setLineStyle(_style)

    ctx.beginPath()

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

  rect(x: number, y: number, w: number, h: number, style: RectStyle = {}) {
    if (!this.checkCtx()) {
      return
    }

    const _style = Object.assign({}, this.defaultLineBaseStyle, style) as Required<RectStyle>
    const ctx = this.ctx!
    ctx.save()
    /**
     * 处理旋转
     */
    this.setRotate(x, y, _style, () => {
      x = 0
      y = 0
    })
    /**
     * 填充颜色
     */
    this.setLineStyle(_style)
    /**
     * 处理中心坐标
     */
    const { anchorY, anchorX } = this.getAnchor(_style)

    if (anchorX !== 0) {
      x -= w * anchorX
    }

    if (anchorY !== 0) {
      y -= h * anchorY
    }

    ctx.beginPath()

    ctx.rect(x, y, w, h)

    if (_style.stroke) {
      ctx.stroke()
    }

    if (_style.fill) {
      ctx.fill()
    }

    ctx.restore()
  }

  arc(x: number, y: number, radius: number, style: ArcStyle = {}) {
    if (!this.checkCtx()) {
      return
    }
    const ctx = this.ctx!
    ctx.save()

    const base: ArcStyle = {
      startDeg: 0,
      endDeg: 360,
    }
    const _style = Object.assign({ ...base }, this.defaultLineBaseStyle, style) as Required<ArcStyle>

    /**
     * 处理旋转
     */
    this.setRotate(x, y, _style, () => {
      x = 0
      y = 0
    })
    /**
     * 填充颜色
     */
    this.setLineStyle(_style)
    /**
     * 处理中心坐标
     */
    const { anchorY, anchorX } = this.getAnchor(_style)

    const startAngle = _style.startAngle
      ? _style.startAngle
      : (_style.startDeg!) * Math.PI / 180
    const endAngle = _style.endAngle
      ? _style.endAngle
      : (_style.endDeg!) * Math.PI / 180

    if (anchorX !== 0) {
      x -= radius * 2 * anchorX
    }

    if (anchorY !== 0) {
      y -= radius * 2 * anchorY
    }

    ctx.beginPath()

    ctx.arc(x, y, radius, startAngle, endAngle, !!_style.counterclockwise)

    if (_style.stroke) {
      ctx.stroke()
    }

    if (_style.fill) {
      ctx.fill()
    }

    ctx.restore()
  }

  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number, style: ArcToStyle = {}) {
    if (!this.checkCtx()) {
      return
    }
    const ctx = this.ctx!
    ctx.save()

    const _style = Object.assign({ }, this.defaultLineBaseStyle, style) as Required<ArcToStyle>

    /**
     * 处理旋转
     */
    const minX = Math.min(x1, x2)
    const maxX = Math.max(x1, x2)

    const minY = Math.min(y1, y2)
    const maxY = Math.max(y1, y2)
    this.setRotate(maxX - minX, maxY - minY, _style, () => {
      x1 -= minX
      x2 -= minX
      y1 -= minX
      y2 -= minX
    })
    /**
     * 填充颜色
     */
    this.setLineStyle(_style)
    /**
     * 处理中心坐标
     */
    const { anchorY, anchorX } = this.getAnchor(_style)

    if (anchorX !== 0) {
      x1 -= radius * 2 * anchorX
      x2 -= radius * 2 * anchorX
    }

    if (anchorY !== 0) {
      y1 -= radius * 2 * anchorX
      y2 -= radius * 2 * anchorX
    }

    ctx.beginPath()
    ctx.moveTo(x1, y2)
    ctx.arcTo(x1, y1, x2, y2, radius)

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

function calcMin(numbers: number[]) {
  let min = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (element < min) {
      min = element
    }
  }
  return min
}

function calcMax(numbers: number[]) {
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
