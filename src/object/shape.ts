import type { AbstractStyle, IAbstractStyle, InputColor, StrokeInput, renderAbstractStyle } from '../style/abstract-style'
import type { FunctionKeys, ModifyReturnType } from '../types'
import { createProxy } from '../utils'
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
  | 'lineTo'
  | 'rect'
  | 'fill'
  | 'stroke'
  | 'roundRect'
  | 'arcTo'
  | 'bezierCurveTo'
  | 'ellipse'
  | 'fillRect'
  | 'strokeRect'
type PathInstruction = PathData<Methods>
export interface ShapeOptions extends DisplayOptions {

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
  arcTo: (...args: Parameters<CanvasRenderingContext2D['arcTo']>) => Shape
  bezierCurveTo: (...args: Parameters<CanvasRenderingContext2D['bezierCurveTo']>) => Shape
  ellipse: (...args: Parameters<CanvasRenderingContext2D['ellipse']>) => Shape
  fillRect: (...args: Parameters<CanvasRect['fillRect']>) => Shape
  strokeRect: (...args: Parameters<CanvasRect['strokeRect']>) => Shape
}

export class Shape extends Display implements IShape {
  constructor(options: Partial<ShapeOptions> = {}) {
    super(options)
  }

  // CanvasRenderingContext2DMethods
  beginPath(): Shape {
    this.pathInstruction.push({
      action: 'beginPath',
      args: [],
    })
    return this
  }

  closePath() {
    this.pathInstruction.push({
      action: 'closePath',
      args: [],
    })
    return this
  }

  moveTo(...args: Parameters<CanvasRenderingContext2D['lineTo']>) {
    this.pathInstruction.push({
      action: 'moveTo',
      args: [...args],
    })
    return this
  }

  lineTo(...args: Parameters<CanvasRenderingContext2D['lineTo']>) {
    this.pathInstruction.push({
      action: 'lineTo',
      args: [...args],
    })
    return this
  }

  rect(...args: Parameters<CanvasRenderingContext2D['rect']>) {
    this.pathInstruction.push({
      action: 'rect',
      args: [...args],
    })
    return this
  }

  roundRect(...args: Parameters<CanvasRenderingContext2D['roundRect']>) {
    this.pathInstruction.push({
      action: 'roundRect',
      args: [...args],
    })
    return this
  }

  arcTo(...args: Parameters<CanvasRenderingContext2D['arcTo']>) {
    this.pathInstruction.push({
      action: 'arcTo',
      args: [...args],
    })
    return this
  }

  bezierCurveTo(...args: Parameters<CanvasRenderingContext2D['bezierCurveTo']>) {
    this.pathInstruction.push({
      action: 'bezierCurveTo',
      args: [...args],
    })
    return this
  }

  ellipse(...args: Parameters<CanvasRenderingContext2D['ellipse']>) {
    this.pathInstruction.push({
      action: 'ellipse',
      args: [...args],
    })
    return this
  }

  fillRect(...args: Parameters<CanvasRect['fillRect']>) {
    this.pathInstruction.push({
      action: 'fillRect',
      args: [...args],
    })
    return this
  }

  strokeRect(...args: Parameters<CanvasRect['strokeRect']>) {
    this.pathInstruction.push({
      action: 'strokeRect',
      args: [...args],
    })
    return this
  }

  private pathInstruction: PathInstruction[] = []
  get _shouldUpdate(): boolean {
    // throw new Error('Method not implemented.')
    return true
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

  width = 100
  height = 100
  _updateBounds(): void {
    // throw new Error('Method not implemented.')
  }

  private _strokeWeight = 0

  set strokeWeight(value) {
    this._strokeWeight = value
    this._onUpdate()
  }

  get strokeWeight() {
    return this._strokeWeight
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
      this.pathInstruction.push({
        action: 'fill',
        args: [color],
      })
    }
    return this
  }

  stroke(value?: StrokeInput | InputColor) {
    this.pathInstruction.push({
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
