import { IS_WX_UNIAPP } from '../const'
import type { IAbstractStyle, InputColor, StrokeInput } from '../style/abstract-style'
import { calcDiff, createProxy, drawRectCompatible } from '../utils'
import type { RenderableOptions } from './renderable'
import { Renderable } from './renderable'

interface PathData<T extends keyof CanvasRenderingContext2D> {
  action: T
  args: any[]
}

type Methods =
  | 'beginPath'
  | 'closePath'
  | 'moveTo'
  | 'fill'
  | 'stroke'
  | 'lineTo' //
  | 'rect' //
  | 'roundRect' //
  | 'fillRect' //
  | 'strokeRect'
  | 'arc' //
  | 'arcTo' //
  | 'bezierCurveTo' //
  | 'ellipse'
  | 'lineCap'
  | 'lineJoin'

type PathInstruction = PathData<Methods>
interface _ShapeOptions extends RenderableOptions { }

interface IShape {
  beginPath: () => Shape
  closePath: () => Shape
  moveTo: (...args: Parameters<CanvasRenderingContext2D['moveTo']>) => Shape
  lineTo: (...args: Parameters<CanvasRenderingContext2D['lineTo']>) => Shape
  stroke: (value?: StrokeInput | InputColor) => Shape
  fill: (color?: InputColor) => Shape
  rect: (...args: Parameters<CanvasRenderingContext2D['rect']>) => Shape
  roundRect: (...args: Parameters<CanvasRenderingContext2D['roundRect']>) => Shape
  arc: (...args: Parameters<CanvasRenderingContext2D['arc']>) => Shape
  arcTo: (...args: Parameters<CanvasRenderingContext2D['arcTo']>) => Shape
  bezierCurveTo: (...args: Parameters<CanvasRenderingContext2D['bezierCurveTo']>) => Shape
  ellipse: (...args: Parameters<CanvasRenderingContext2D['ellipse']>) => Shape
  fillRect: (...args: Parameters<CanvasRect['fillRect']>) => Shape
  strokeRect: (...args: Parameters<CanvasRect['strokeRect']>) => Shape
  lineCap: (...args: [CanvasRenderingContext2D['lineCap']]) => void
  lineJoin: (...args: [CanvasRenderingContext2D['lineJoin']]) => void
}

export type ShapeOptions = Partial<_ShapeOptions>

export class Shape extends Renderable implements IShape {
  constructor(options: ShapeOptions = {}) {
    super(options)
    this._onUpdate()
  }

  private addPath(...items: PathInstruction[]) {
    this.pathInstruction.push(...items)
    this.shouldUpdateBounds()
  }

  beginPath(): Shape {
    this.addPath({
      action: 'beginPath',
      args: [],
    })
    return this
  }

  closePath() {
    this.addPath({
      action: 'closePath',
      args: [],
    })
    return this
  }

  lineCap(cap: 'butt' | 'round' | 'square') {
    this.addPath({
      action: 'lineCap',
      args: [cap],
    })
    return this
  }

  lineJoin(join: 'bevel' | 'miter' | 'round') {
    this.addPath({
      action: 'lineJoin',
      args: [join],
    })
    return this
  }

  moveTo(x: number, y: number) {
    this.addPath({
      action: 'moveTo',
      args: [x, y],
    })
    return this
  }

  lineTo(x: number, y: number) {
    this.addPath({
      action: 'lineTo',
      args: [x, y],
    })
    return this
  }

  rect(x: number, y: number, w: number, h: number) {
    this.addPath({
      action: 'rect',
      args: [x, y, w, h],
    })
    return this
  }

  roundRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radii?: number | DOMPointInit | Iterable<number | DOMPointInit>,
  ) {
    this.addPath({
      action: 'roundRect',
      args: [x, y, w, h, radii],
    })
    return this
  }

  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number = 0,
    endAngle: number = 2 * Math.PI,
    counterclockwise?: boolean,
  ) {
    this.addPath({
      action: 'arc',
      args: [x, y, radius, startAngle, endAngle, counterclockwise],
    })
    return this
  }

  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number) {
    this.addPath({
      action: 'arcTo',
      args: [x1, y1, x2, y2, radius],
    })
    return this
  }

  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ) {
    this.addPath({
      action: 'bezierCurveTo',
      args: [cp1x, cp1y, cp2x, cp2y, x, y],
    })
    return this
  }

  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ) {
    this.addPath({
      action: 'ellipse',
      args: [x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise],
    })
    return this
  }

  fillRect(x: number, y: number, w: number, h: number) {
    this.addPath({
      action: 'fillRect',
      args: [x, y, w, h],
    })
    return this
  }

  strokeRect(x: number, y: number, w: number, h: number) {
    this.addPath({
      action: 'strokeRect',
      args: [x, y, w, h],
    })
    return this
  }

  private pathInstruction: PathInstruction[] = []
  get _shouldUpdate(): boolean {
    const actions = this.pathInstruction.map(item => item.action)
    if (actions.includes('fill')
      || actions.includes('stroke')) {
      return true
    }
    return false
  }

  protected _render(ctx: CanvasRenderingContext2D): void {
    if (!ctx) {
      throw new Error('CanvasRenderingContext2D is null or undefined')
    }
    for (let index = 0; index < this.pathInstruction.length; index++) {
      const { action, args } = this.pathInstruction[index]
      if (action === 'fill') {
        if (args[0]) {
          ctx.fillStyle = args[0]
        }
        else if (this.fillStyle) {
          ctx.fillStyle = this.fillStyle
        }
        ctx.fill()
      }
      else if (action === 'stroke') {
        if (args[0]) {
          const strokeInput = args[0] as StrokeInput | InputColor
          if (typeof strokeInput === 'string'
            || (typeof CanvasGradient !== 'undefined' && strokeInput instanceof CanvasGradient)
            || (typeof CanvasPattern !== 'undefined' && strokeInput instanceof CanvasPattern)
          ) {
            ctx.strokeStyle = strokeInput
            ctx.lineWidth = this.strokeStyle.width ?? 1
          }
          else {
            const _strokeInput = strokeInput as StrokeInput
            const color = _strokeInput.color ?? this.strokeStyle.color
            if (color)
              ctx.strokeStyle = color

            const width = _strokeInput.width ?? this.strokeStyle.width

            if (width)
              ctx.lineWidth = width

            if (_strokeInput.dash) {
              ctx.setLineDash(_strokeInput.dash)
            }
            else {
              ctx.setLineDash([])
            }
          }
        }
        else {
          if (this.strokeStyle.color)
            ctx.strokeStyle = this.strokeStyle.color
          if (this.strokeStyle.width)
            ctx.lineWidth = this.strokeStyle.width
          if (this.strokeStyle.dash) {
            ctx.setLineDash(this.strokeStyle.dash)
          }
          else {
            ctx.setLineDash([])
          }
        }
        ctx.stroke()
      }
      else if (['lineCap', 'lineJoin'].includes(action)) {
        ctx[action] = args[0]
      }
      else if (action === 'roundRect' && IS_WX_UNIAPP) {
        drawRectCompatible(ctx, { x: args[0], y: args[1] }, { x: args[2], y: args[3] }, args[4])
      }
      else {
        if (!(action in ctx)) {
          throw new Error(`CanvasRenderingContext2D has no method ${action}`)
        }
        else {
          ;(ctx[action] as (...args: any[]) => void)(...args)
        }
      }
    }
  }

  private _strokeStyle: StrokeInput = {}

  set strokeStyle(value: StrokeInput | InputColor) {
    if (value === this._strokeStyle)
      return
    if (
      typeof value === 'string'
      || (typeof CanvasGradient !== 'undefined' && value instanceof CanvasGradient)
      || (typeof CanvasPattern !== 'undefined' && value instanceof CanvasPattern)
    ) {
      this._strokeStyle = createProxy({
        ...this._strokeStyle,
        color: value,
      }, () => {
        this._onUpdate()
      })
    }
    else {
      this._strokeStyle = createProxy(value as StrokeInput, () => {
        this._onUpdate()
      })
      this._onUpdate()
    }
  }

  get strokeStyle(): StrokeInput {
    return this._strokeStyle
  }

  protected updateRawSize(): void {
    const allX: number[] = []
    const allY: number[] = []

    for (let index = 0; index < this.pathInstruction.length; index++) {
      const { action, args } = this.pathInstruction[index]
      switch (action) {
        case 'lineTo':

          allX.push(args[0])
          allY.push(args[1])
          break
        case 'fillRect':
        case 'strokeRect':
        case 'roundRect':
        case 'rect':{
          // const strokeWeight = this.getNextStrokeWidth(index)
          allX.push(args[0])
          allY.push(args[1])
          allX.push(args[0] + args[2])
          allY.push(args[1] + args[3])
          break
        }
        case 'arc':{
          allX.push(args[0] + args[2])
          allY.push(args[1] + args[2])
          break
        }
        case 'arcTo':{
          allX.push(args[0] + args[2])
          allY.push(args[1] + args[2])
          break
        }
        case 'bezierCurveTo': {
          allX.push(args[2] + args[4])
          allY.push(args[3] + args[5])
          break
        }
        case 'ellipse':
          allX.push(args[0] + args[2])
          allY.push(args[1] + args[3])
      }
    }
    const w = calcDiff(allX)
    const h = calcDiff(allY)
    this.changeRawSize(w, h)
  }

  private _fillStyle: InputColor | null = null

  set fillStyle(value) {
    this._fillStyle = value
    this._onUpdate()
  }

  get fillStyle() {
    return this._fillStyle
  }

  fill(color?: IAbstractStyle['fill']) {
    if (color) {
      this.addPath({
        action: 'fill',
        args: [color],
      })
    }
    return this
  }

  stroke(value?: StrokeInput | InputColor) {
    this.addPath({
      action: 'stroke',
      args: value ? [value] : [],
    })
    return this
  }

  private _filter = 'none'

  set filter(value) {
    this._filter = value
    this._onUpdate()
  }

  get filter() {
    return this._filter
  }
}
