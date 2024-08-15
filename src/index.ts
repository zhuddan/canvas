import type {
  ArcStyle,
  ArcToStyle,
  BezierStyle,
  Bounds as IBounds,
  IColor,
  ILinePosition,
  IPoint,
  // ENV,
  ITransform,
  LineBaseStyle,
  LineStyle,
  RectStyle,
  TextBaseStyle,
  TextMultilineStyle,
} from './types'
import {
  calcDiff,
  calcMin,
  createCanvasFontString,
  ensureBetween,
  formatValue,
  toPoint,
} from './utils'

const dpr = 1// window.devicePixelRatio ?? 1

export class Bounds {
  start: IPoint
  size: IPoint
  constructor(start: [number, number], size: [number, number]) {
    if (size[0] < 0 || size[1] < 0) {
      throw new Error(`Size ${JSON.stringify(size)} is meaningless`)
    }
    this.start = { x: start[0], y: start[1] }
    this.size = { x: size[0], y: size[1] }
  }

  get width() {
    return this.size.x
  }

  get height() {
    return this.size.y
  }

  get end() {
    return {
      x: this.start.x + this.size.x,
      y: this.start.y + this.size.y,
    }
  }
}

// window.devicePixelRatio = 1
export class Painter {
  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D
  defaultTextStyle: TextBaseStyle
  defaultLineBaseStyle: LineBaseStyle
  private readonly _defaultTransform: ITransform = { angle: 0, scale: 1, skew: 0, anchor: 0 }
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
    this.defaultTextStyle = Object.assign({
      ...this._defaultTransform,
    }, defaultTextBaseStyle)

    const defaultBaseStyle: LineBaseStyle = {
      fill: undefined,
      stroke: '#000',

      dash: false,
      dashOffset: 0,
      lineCap: 'butt',
      lineJoin: 'miter',
    }

    this.defaultLineBaseStyle = Object.assign({ ...this._defaultTransform }, defaultBaseStyle)
  }

  /**
   * 检查init函数是否执行
   */
  private _checkCtx() {
    if (!this.ctx) {
      throw new Error('请先执行 init() 函数')
    }
    return true
  }

  /**
   * 设置颜色 fillStyle strokeStyle
   */
  private setColor(_style: IColor) {
    this._create((ctx) => {
      if (_style.fill) {
        ctx.fillStyle = _style.fill
      }

      if (_style.stroke) {
        ctx.strokeStyle = _style.stroke
        ctx.lineWidth = typeof _style.strokeWeight === 'undefined' ? 1 : _style.strokeWeight
      }

      if (_style.alpha !== undefined) {
        ctx.globalAlpha = ensureBetween(_style.alpha)
      }
    }, false)
  }

  /**
   * 设置线段样式
   */
  private setLineStyle(_style: Required<LineBaseStyle>) {
    this._create((ctx) => {
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
    }, false)
  }

  private setTransform(
    style: ITransform,
    bounds: Bounds,
    isArc = false,
  ) {
    this._create((ctx) => {
      let {
        angle = 0,
        scale = 1,
        skew = 0,
        anchor = 0,
      } = style

      scale = toPoint(scale)
      skew = toPoint(skew)
      anchor = toPoint(anchor)
      // 角度转换为弧度
      const radians = angle * Math.PI / 180
      // 计算变换矩阵的各个元素
      const scaleX = Math.cos(radians) * scale.x // 缩放并旋转后，x轴方向的缩放
      const skewX = Math.sin(radians) * scale.x // 缩放并旋转后，y轴方向的偏移（旋转+缩放）
      const skewY = -Math.sin(radians) * scale.y + skew.x // 缩放并旋转后，x轴方向的偏移（旋转+缩放+倾斜）
      const scaleY = Math.cos(radians) * scale.y + skew.y // 缩放并旋转后，y轴方向的缩放

      const translateX = isArc
        ? bounds.width + bounds.width / 2 + bounds.width * (0.5 - anchor.x) / 2
        : bounds.start.x + bounds.width * anchor.x

      const translateY = isArc
        ? bounds.height + bounds.height / 2 + bounds.height * (0.5 - anchor.y) / 2
        : bounds.start.y + bounds.height * anchor.x

      const transform = [
        scaleX,
        skewX,
        skewY,
        scaleY,
        translateX,
        translateY,
      ] as const
      console.log(transform)
      ctx.setTransform(...transform)
    }, false)
  }

  private getAnchor(style: ITransform): IPoint {
    const p = toPoint(style.anchor ?? 0)
    const point: IPoint = {
      x: ensureBetween(p.x),
      y: ensureBetween(p.y),
    }
    return point
  }

  /**
   * 初始化
   * @param width
   * @param height
   */
  init(width: number, height: number) {
    this.canvas = document.createElement('canvas')!
    this.ctx = this.canvas.getContext('2d')!
    this.canvas.style.width = formatValue(width)
    this.canvas.style.height = formatValue(height)
    this.canvas.width = width * dpr
    this.canvas.height = height * dpr
    this.ctx.scale(dpr, dpr)
    return this
  }

  /**
   * 绘制文本
   * @param text
   * @param x
   * @param y
   * @param style
   */
  text(text: string, x: number, y: number, style: Partial<TextMultilineStyle> = {}) {
    return this._create((ctx) => {
      /**
       * 镂空
       */
      const _style = Object.assign({}, this.defaultTextStyle, style) as Required<TextMultilineStyle>
      /**
       * 镂空
       */
      const isHollowOut = !style.fill && style.stroke
      /**
       * 填充颜色
       */
      this.setColor(_style)
      /**
       * font
       */
      ctx.font = createCanvasFontString(_style)
      ctx.fontStretch = _style.fontStretch
      ctx.fontVariantCaps = _style.fontVariantCaps
      ctx.letterSpacing = formatValue(_style.letterSpacing)
      ctx.wordSpacing = formatValue(_style.wordSpacing)
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

        const bounds = new Bounds([x, y], [textWidth, textHeight])

        this.setTransform(_style, bounds)

        const anchor = this.getAnchor(_style)

        x = -anchor.x * bounds.width
        y = -anchor.y * bounds.height

        for (let i = 0; i < splitText.length; i++) {
          if (_style.stroke) {
            ctx.strokeText(splitText[i], x, y + i * _style.lineHeight)
          }
          if (!isHollowOut) {
            ctx.fillText(splitText[i], x, y + i * _style.lineHeight)
          }
        }
      }
      // 单行文本绘制
      else {
        const measure = ctx.measureText(text)
        textWidth = measure.width
        textHeight = Math.max(...[
          measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent,
          Number.isNaN(fontSize) ? 0 : fontSize,
        ])

        const bounds = new Bounds([x, y], [textWidth, textHeight])
        this.setTransform(_style, bounds)
        const anchor = this.getAnchor(_style)
        x = -anchor.x * bounds.width
        y = -anchor.y * bounds.height
        if (_style.stroke) {
          ctx.strokeText(text, x, y)
        }
        if (!isHollowOut) {
          ctx.fillText(text, x, y)
        }
      }
      return textHeight
    })
  }

  /**
   * 绘制线段
   * 你也可以使用此方法绘制多边形
   * @param lines
   * @param style
   */
  line(lines: ILinePosition, style: LineStyle = {}) {
    return this._create((ctx) => {
      if (lines.length < 2) {
        console.warn('至少两个点')
        return
      }
      const _style = Object.assign({}, this.defaultLineBaseStyle, style) as Required<LineStyle>

      this.setColor(_style)
      this.setLineStyle(_style)

      const x = calcMin(lines.map(e => e[0]))
      const y = calcMin(lines.map(e => e[1]))
      const w = calcDiff(lines.map(e => e[0]))
      const h = calcDiff(lines.map(e => e[1]))

      const bounds = new Bounds([x, y], [w, h])

      this.setTransform(_style, bounds)
      const anchor = this.getAnchor(style)

      const _x = -anchor.x * bounds.width - lines[0][0]
      const _y = -anchor.y * bounds.height - lines[0][1]
      lines = lines.map((e) => {
        return [
          e[0] + _x,
          e[1] + _y,
        ]
      })

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
    })
  }

  /**
   * 绘制矩形(圆角请设置 style.radii )
   * @param x
   * @param y
   * @param w
   * @param h
   * @param style
   */
  rect(x: number, y: number, w: number, h: number, style: RectStyle = {}) {
    return this._create((ctx) => {
      const _style = Object.assign({}, this.defaultLineBaseStyle, style) as Required<RectStyle>
      ctx.save()

      const bounds = new Bounds([x, y], [w, h])
      this.setTransform(_style, bounds)
      const anchor = this.getAnchor(_style)
      x = -anchor.x * bounds.width
      y = -anchor.y * bounds.height
      this.setColor(_style)
      this.setLineStyle(_style)
      ctx.beginPath()
      if (_style.radii) {
        ctx.roundRect(x, y, w, h, _style.radii)
      }
      else {
        ctx.rect(x, y, w, h)
      }
      if (_style.fill) {
        ctx.fill()
      }
      if (style.stroke) {
        ctx.stroke()
      }
    })
  }

  /**
   * 绘制圆弧
   * @param x
   * @param y
   * @param radius
   * @param style
   */
  arc(x: number, y: number, radius: number, style: ArcStyle = {}) {
    return this._create((ctx) => {
      const base: ArcStyle = {
        startDeg: 0,
        endDeg: 360,
      }
      const _style = Object.assign({ ...base }, this.defaultLineBaseStyle, style) as Required<ArcStyle>

      const bounds = new Bounds([x - radius, y - radius], [radius * 2, radius * 2])
      this.setColor(_style)
      this.setLineStyle(_style)
      const scale = toPoint(_style.scale ?? 1)
      this.setTransform(_style, bounds, true)
      x = y = radius / scale.x

      const startAngle = _style.startAngle
        ? _style.startAngle
        : (_style.startDeg!) * Math.PI / 180

      const endAngle = _style.endAngle
        ? _style.endAngle
        : (_style.endDeg!) * Math.PI / 180

      ctx.beginPath()

      ctx.arc(x, y, radius, startAngle, endAngle, !!_style.counterclockwise)

      if (_style.stroke) {
        ctx.stroke()
      }

      if (_style.fill) {
        ctx.fill()
      }
    })
  }

  /**
   * 参考[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/arcTo)
   * @param x1
   * @param y1
   * @param x2
   * @param y2
   * @param radius
   * @param style
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number, style: ArcToStyle = {}) {
    return this._create((ctx) => {
      const _style = Object.assign({ }, this.defaultLineBaseStyle, style) as Required<ArcToStyle>

      const x = calcMin([x1, x2])
      const y = calcMin([y1, y2])
      const w = calcDiff([x1, x2])
      const h = calcDiff([y1, y2])
      const bounds = new Bounds([x, y], [w, h])
      this.setTransform(_style, bounds)
      const anchor = this.getAnchor(_style)

      const _x = -anchor.x * bounds.width - bounds.start.x
      const _y = -anchor.y * bounds.height - bounds.start.y

      x1 += _x
      x2 += _x

      y1 += _y
      y2 += _y

      this.setColor(_style)
      this.setLineStyle(_style)

      ctx.beginPath()
      ctx.moveTo(x1, y2)
      ctx.arcTo(x1, y1, x2, y2, radius)

      if (_style.stroke) {
        ctx.stroke()
      }

      if (_style.fill) {
        ctx.fill()
      }
    })
  }

  /**
   * [绘制贝塞尔曲线](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
   */
  bezier(start: IPoint, cp1: IPoint, cp2: IPoint, end: IPoint, style: BezierStyle = {}) {
    return this._create((ctx) => {
      const _style = Object.assign({ }, this.defaultLineBaseStyle, style) as Required<BezierStyle>

      const x = calcMin([start.x, end.x])
      const y = calcMin([start.y, end.y])
      const w = calcDiff([start.x, end.x])
      const h = calcDiff([start.y, end.y])
      const bounds = new Bounds([x, y], [w, h])
      this.setTransform(_style, bounds)
      const anchor = this.getAnchor(_style)

      const _x = -anchor.x * bounds.width - start.x
      const _y = -anchor.y * bounds.height - start.y

      start.x += _x
      cp1.x += _x
      cp2.x += _x
      end.x += _x

      start.y += _y
      cp1.y += _y
      cp2.y += _y
      end.y += _y

      this.setColor(_style)

      ctx.beginPath()
      ctx.moveTo(start.x, start.y)
      ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y)

      if (_style.stroke) {
        ctx.stroke()
      }

      if (_style.fill) {
        ctx.fill()
      }
    })
  }

  /**
   *
   * @param callback
   * @param save
   */
  _create<T extends (ctx: CanvasRenderingContext2D) => any>(callback: T, save = true): ReturnType<T> {
    if (!this._checkCtx()) {
      throw new Error('未执行init函数')
    }
    const ctx = this.ctx!
    if (save) {
      ctx.save()
    }

    const result = callback(ctx)

    if (save) {
      ctx.restore()
    }
    return result
  }
}

export default Painter

// test
const p = new Painter()
p.init(600, 600)

p.rect(200, 200, 200, 200, {
  fill: 'blue',
  alpha: 0,
  anchor: 0.5,
  angle: -45,
  skew: {
    x: 0.1,
    y: 0.9,
  },
  radii: 20,
})

p.text('单行文本', 100, 100, {
  fill: 'red',
  anchor: 0.5,
  angle: -30,
  alpha: 0,
  skew: {
    x: -0.5,
    y: 0.1,
  },
})

p.text('平林漠漠烟如织，寒山一带伤心碧。暝色入高楼，有人楼上愁。玉阶空伫立，宿鸟归飞急。何处是归程？长亭更短亭', 200, 200, {
  fontFamily: '黑体',
  textAlign: 'left',
  fontSize: 18,
  fontWeight: 900,
  maxWidth: 250,
  lineHeight: 20,
  letterSpacing: 10,
  wordSpacing: 50,
  stroke: 'blue',
  fill: 'red',
  alpha: 0,
  anchor: 0.5,
  angle: -30,
  skew: {
    x: -0.5,
    y: 0.1,
  },
})

p.line([
  [250, 160],
  [250 + 300, 160],
  [250 + 300, 160 + 120],
], {
  fill: '#26A69A',
  close: true,
  strokeWeight: 4,
  stroke: '#7effdb',
  lineCap: 'round',
  lineJoin: 'round',
  // anchor: 0.5,
  angle: 1,
  skew: -0.1,
})

p._create((ctx) => {
  ctx.beginPath();
  [100, 200, 300, 400, 500].forEach((e) => {
    ctx.moveTo(e, 0)
    ctx.lineTo(e, 600)
    ctx.moveTo(0, e)
    ctx.lineTo(600, e)
  })
  ctx.stroke()
  ctx.textBaseline = 'top'
  ctx.font = '12px 黑体'

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      ctx.fillText(`${row * 100},${col * 100}`, row * 100, col * 100)
    }
  }
}, false)

// p.arc(200, 200, 50, {
//   strokeWeight: 5,
//   lineJoin: 'round',
//   fill: 'red',
//   alpha: 0.2,
// })

console.log('arc')
p.arc(200, 200, 50, {
  strokeWeight: 0,
  lineJoin: 'round',
  fill: '#FFF176',
  alpha: 0.5,
  anchor: 0.5,
  skew: {
    x: 0.1,
    y: 0.1,
  },
  scale: 1.5,
  startAngle: 0.5,
})

p.arcTo(200, 600, 50, 100, 60, {
  stroke: '#e84a5f',
  strokeWeight: 10,
  alpha: 0.5,
  scale: 1.5,
  anchor: 0.5,
})

p.rect(150, 150, 100, 100, {
  strokeWeight: 9,
  lineJoin: 'round',
  fill: 'blue',
  alpha: 0.5,
  anchor: 0.5,
  scale: 1.5,
  skew: {
    x: 0.8,
    y: 0.2,
  },
  // scale: 0.5,
})
const start = { x: 50, y: 20 + 300 }
const cp1 = { x: 230, y: 30 + 300 }
const cp2 = { x: 150, y: 80 + 300 }
const end = { x: 250, y: 100 + 300 }
p.bezier(start, cp1, cp2, end, {
  strokeWeight: 2,
  stroke: '#2eb872',
  scale: 1,
  // anchor: 0.5,
})

export const canvas = p.canvas
