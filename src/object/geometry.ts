import type { DisplayOptions } from './display'
import { Display } from './display'

export interface GeometryOptions extends DisplayOptions {
  // text: string
  // style?: Partial<TextStyleOptions> | TextStyle
}

export interface PathInstruction {
  action: 'moveTo' | 'lineTo' | 'quadraticCurveTo' |
  'bezierCurveTo' | 'arc' | 'closePath' |
  'addPath' | 'arcTo' | 'ellipse' |
  'rect' | 'roundRect' | 'arcToSvg' |
  'poly' | 'circle' |
  'regularPoly' | 'roundPoly' | 'roundShape' | 'filletRect' | 'chamferRect'
  data: any[]
}

export class Geometry extends Display {
  get _shouldUpdate(): boolean {
    throw new Error('Method not implemented.')
  }

  protected _render(ctx: CanvasRenderingContext2D): void {
    // throw new Error('Method not implemented.')
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
