import type { IAbstractStyle, InputColor, StrokeInput } from '../style/abstract-style'
import type { FunctionKeys } from '../types'
import { calcDiff, createProxy } from '../utils'
import type { DisplayOptions } from './display'
import { Display } from './display'

type CanvasRenderingContext2DMethods = FunctionKeys<CanvasRenderingContext2D>
interface PathData<T extends CanvasRenderingContext2DMethods> {
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
type PathInstruction = PathData<Methods>
interface _ShapeOptions extends DisplayOptions {

}

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
}

export type ShapeOptions = Partial<_ShapeOptions>

export class Shape extends Display implements IShape {
  constructor(options: ShapeOptions = {}) {
    super(options)
    this.emit('ready')
    this._onUpdate()
  }

  addPath(...items: PathInstruction[]) {
    this.pathInstruction.push(...items)
    this.shouldUpdateBounds()
  }

  // CanvasRenderingContext2DMethods
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

  moveTo(...args: Parameters<CanvasRenderingContext2D['lineTo']>) {
    this.addPath({
      action: 'moveTo',
      args: [...args],
    })
    return this
  }

  lineTo(...args: Parameters<CanvasRenderingContext2D['lineTo']>) {
    this.addPath({
      action: 'lineTo',
      args: [...args],
    })
    return this
  }

  rect(...args: Parameters<CanvasRenderingContext2D['rect']>) {
    this.addPath({
      action: 'rect',
      args: [...args],
    })
    return this
  }

  roundRect(...args: Parameters<CanvasRenderingContext2D['roundRect']>) {
    this.addPath({
      action: 'roundRect',
      args: [...args],
    })
    return this
  }

  arc(...args: Parameters<CanvasRenderingContext2D['arc']>) {
    this.addPath({
      action: 'arc',
      args: [...args],
    })
    return this
  }

  arcTo(...args: Parameters<CanvasRenderingContext2D['arcTo']>) {
    this.addPath({
      action: 'arcTo',
      args: [...args],
    })
    return this
  }

  bezierCurveTo(...args: Parameters<CanvasRenderingContext2D['bezierCurveTo']>) {
    this.addPath({
      action: 'bezierCurveTo',
      args: [...args],
    })
    return this
  }

  ellipse(...args: Parameters<CanvasRenderingContext2D['ellipse']>) {
    this.addPath({
      action: 'ellipse',
      args: [...args],
    })
    return this
  }

  fillRect(...args: Parameters<CanvasRect['fillRect']>) {
    this.addPath({
      action: 'fillRect',
      args: [...args],
    })
    return this
  }

  strokeRect(...args: Parameters<CanvasRect['strokeRect']>) {
    this.addPath({
      action: 'strokeRect',
      args: [...args],
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

  protected _render(_ctx: CanvasRenderingContext2D): void {
    if (!_ctx) {
      throw new Error('CanvasRenderingContext2D is null or undefined')
    }
    for (let index = 0; index < this.pathInstruction.length; index++) {
      const { action, args } = this.pathInstruction[index]
      if (action === 'fill') {
        if (args[0]) {
          _ctx.fillStyle = args[0]
        }
        else if (this.fillStyle) {
          _ctx.fillStyle = this.fillStyle
        }
        _ctx.fill()
      }
      else if (action === 'stroke') {
        if (args[0]) {
          const strokeInput = args[0] as StrokeInput | InputColor
          if (typeof strokeInput === 'string'
            || strokeInput instanceof CanvasGradient
            || strokeInput instanceof CanvasPattern) {
            _ctx.strokeStyle = strokeInput
            _ctx.lineWidth = this.strokeStyle.width ?? 1
          }
          else {
            const color = strokeInput.color ?? this.strokeStyle.color
            if (color)
              _ctx.strokeStyle = color

            const width = strokeInput.width ?? this.strokeStyle.width

            if (width)
              _ctx.lineWidth = width

            if (strokeInput.dash) {
              _ctx.setLineDash(strokeInput.dash)
            }
            else {
              _ctx.setLineDash([])
            }
          }
        }
        else {
          if (this.strokeStyle.color)
            _ctx.strokeStyle = this.strokeStyle.color
          if (this.strokeStyle.width)
            _ctx.lineWidth = this.strokeStyle.width
          if (this.strokeStyle.dash) {
            _ctx.setLineDash(this.strokeStyle.dash)
          }
          else {
            _ctx.setLineDash([])
          }
        }
        _ctx.stroke()
      }
      else {
        ;(_ctx[action] as (...args: any[]) => void)(...args)
      }
    }
  }

  private _strokeStyle: StrokeInput = {}

  set strokeStyle(value: StrokeInput | InputColor) {
    if (value === this._strokeStyle)
      return
    if (
      typeof value === 'string'
      || value instanceof CanvasGradient
      || value instanceof CanvasPattern
    ) {
      this._strokeStyle = createProxy({
        ...this._strokeStyle,
        color: value,
      }, () => {
        this._onUpdate()
      })
    }
    else {
      this._strokeStyle = createProxy(value, () => {
        this._onUpdate()
      })
      this._onUpdate()
    }
  }

  get strokeStyle(): StrokeInput {
    return this._strokeStyle
  }

  transformWidth = 0
  transformHeight = 0
  updateTransformBounds(): void {
    // 所有坐标的最大值放进来
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
          let strokeWeight = 0
          if (action === 'strokeRect') {
            strokeWeight = this.strokeStyle.width ?? 1
          }
          allX.push(args[0] + args[2] + strokeWeight)
          allY.push(args[1] + args[2] + strokeWeight)
          break
        }
        case 'arc':
          allX.push(args[0] + args[2])
          allY.push(args[1] + args[2])
          break
        case 'arcTo':
          allX.push(args[0] + args[2])
          allY.push(args[1] + args[2])
          break
        case 'bezierCurveTo':
          allX.push(args[2] + args[4])
          allY.push(args[3] + args[5])
          break
        case 'ellipse':
          allX.push(args[0] + args[2])
          allY.push(args[1] + args[3])
      }
    }
    this.transformWidth = calcDiff(allX)
    this.transformHeight = calcDiff(allY)
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
