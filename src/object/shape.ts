import type { AbstractStyle, IAbstractStyle, StrokeInput, StrokeInputColor, renderAbstractStyle } from '../style/abstract-style'
import type { FunctionKeys, ModifyReturnType } from '../types'
import { createProxy } from '../utils'
import type { DisplayOptions } from './display'
import { Display } from './display'

type CanvasRenderingContext2DMethods = FunctionKeys<CanvasRenderingContext2D>
interface PathData<T extends CanvasRenderingContext2DMethods> {
  action: T
  args: any[]
}

type PathInstruction = PathData<Methods>
export interface ShapeOptions extends DisplayOptions {

}
type Methods = 'moveTo' | 'lineTo' | 'beginPath' | 'fill' | 'stroke'

interface IShape {
  moveTo: (...args: Parameters<CanvasRenderingContext2D['moveTo']>) => Shape
  lineTo: (...args: Parameters<CanvasRenderingContext2D['lineTo']>) => Shape
  beginPath: () => Shape
  stroke: (value: StrokeInput | StrokeInputColor) => Shape
  fill: (color: IAbstractStyle['fill']) => Shape
}
export class Shape extends Display implements IShape {
  constructor(options: Partial<ShapeOptions> = {}) {
    super(options)
  }

  // CanvasRenderingContext2DMethods
  lineTo(x: number, y: number) {
    this.pathInstruction.push({
      action: 'lineTo',
      args: [x, y],
    })
    return this
  }

  moveTo(x: number, y: number) {
    this.pathInstruction.push({
      action: 'moveTo',
      args: [x, y],
    })
    return this
  }

  beginPath(): Shape {
    this.pathInstruction.push({
      action: 'beginPath',
      args: [],
    })
    return this
  }

  pathInstruction: PathInstruction[] = []
  get _shouldUpdate(): boolean {
    // throw new Error('Method not implemented.')
    return true
  }

  protected _render(_ctx: CanvasRenderingContext2D): void {
    if (!_ctx) {
      throw new Error('CanvasRenderingContext2D is null or undefined')
    }
    for (let index = 0; index < this.pathInstruction.length; index++) {
      const element = this.pathInstruction[index]
      ;(_ctx[element.action] as (...args: any[]) => void)(...element.args)
    }
  }

  width = 0
  height = 0
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

  fill(color: IAbstractStyle['fill']) {
    if (color) {
      this.pathInstruction.push({
        action: 'fill',
        args: [color],
      })
    }
    return this
  }

  stroke(value: StrokeInput | StrokeInputColor) {
    this.pathInstruction.push({
      action: 'stroke',
      args: [value],
    })
    return this
  }

  // private _stroke: IAbstractStyle['stroke'] = null

  // set stroke(value) {
  //   this._stroke = value
  //   this._onUpdate()
  // }

  // get stroke() {
  //   return this._stroke
  // }

  private _filter = 'none'

  set filter(value) {
    this._filter = value
    this._onUpdate()
  }

  get filter() {
    return this._filter
  }
}
