import type { Properties } from 'csstype'
import type { PointData } from '../coordinate/PointData'
import type { DisplayOptions } from './display'
import { Display } from './display'

interface PictureOptions extends DisplayOptions {
  size?: PointData
  slice?: PointData
  sliceSize?: PointData
  objectFit?: Properties['objectFit']
}
export class Picture extends Display {
  constructor(public img: HTMLImageElement, options?: PictureOptions) {
    super(options)
    this.transformWidth = this.img.width
    this.transformHeight = this.img.height
  }

  get _shouldUpdate(): boolean {
    return true
  }

  protected _render(ctx: CanvasRenderingContext2D): void {
    // throw new Error('Method not implemented.')
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
    )
  }

  transformWidth: number = 0
  transformHeight: number = 0
  _updateTransformBounds(): void {
    // throw new Error('Method not implemented.')
  }
}
