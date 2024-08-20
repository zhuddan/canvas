import type { Properties } from 'csstype'
import type { PointData } from '../coordinate/PointData'
import { ObservablePoint } from '../coordinate/ObservablePoint'
import type { DisplayOptions } from './display'
import { Display } from './display'

interface PictureOptions extends DisplayOptions {
  size?: PointData
  slice?: PointData
  sliceSize?: PointData
  objectFit?: Properties['objectFit']
}
export class Picture extends Display {
  private _size = new ObservablePoint(this, 0, 0)

  set size(value: PointData) {
    if (this.size !== value) {
      this._size.copyFrom(value)
    }
  }

  get size(): ObservablePoint {
    return this._size
  }

  private _slice = new ObservablePoint(this)

  set slice(value: PointData) {
    if (this.slice !== value) {
      this._slice.copyFrom(value)
    }
  }

  get slice(): ObservablePoint {
    return this._slice
  }

  private _sliceSize = new ObservablePoint(this)

  set sliceSize(value: PointData) {
    if (this.sliceSize !== value) {
      this._sliceSize.copyFrom(value)
    }
  }

  get sliceSize(): ObservablePoint {
    return this._sliceSize
  }

  constructor(public img: HTMLImageElement, options?: PictureOptions) {
    super(options)
    this.size = options?.size ?? {
      x: this.img.width,
      y: this.img.height,
    }

    if (options?.slice) {
      this.slice = options?.slice
    }
    this.sliceSize = options?.sliceSize ?? {
      x: this.img.width,
      y: this.img.height,
    }
    console.log(this.sliceSize)
  }

  get _shouldUpdate(): boolean {
    return true
  }

  protected _render(ctx: CanvasRenderingContext2D): void {
    if (!this.slice.x && !this.slice.y && this.sliceSize.equals(this.size)) {
      ctx.drawImage(
        this.img,
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y,
      )
    }
    else {
      const s = [
        this.img,
        this.slice.x,
        this.slice.y,
        this.sliceSize.x,
        this.sliceSize.y,
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y,
      ] as const
      ctx.drawImage(...s)

      console.log(s)
    }
  }

  transformWidth: number = 0
  transformHeight: number = 0
  _updateTransformBounds(): void {
    // throw new Error('Method not implemented.')
  }
}
