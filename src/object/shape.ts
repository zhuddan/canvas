import type { IBaseStyle } from '../style/base-style'
import type { FunctionKeys } from '../types'
import type { DisplayOptions } from './display'
import { Display } from './display'

export interface ShapeOptions extends DisplayOptions, IBaseStyle {
  // text: string
  // style?: Partial<TextStyleOptions> | TextStyle
}

export interface PathData<T extends FunctionKeys<CanvasRenderingContext2D>> {
  action: T
  args: Parameters<CanvasRenderingContext2D[T]>
}

type PathInstruction = PathData<'moveTo'> | PathData<'lineTo'>

export class Shape extends Display {
  pathInstruction: PathInstruction[] = []
  get _shouldUpdate(): boolean {
    throw new Error('Method not implemented.')
  }

  protected _render(_ctx: CanvasRenderingContext2D): void {
    throw new Error('Method not implemented.')
  }

  width = 0
  height = 0
  _updateBounds(): void {
    throw new Error('Method not implemented.')
  }

  constructor() {
    super()
  }
}
