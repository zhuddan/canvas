import type { Properties } from 'csstype'
import type { PointData } from '../coordinate/PointData'
import { ObservablePoint } from '../coordinate/ObservablePoint'
import { calcDiff } from '../utils'
import type { DisplayOptions } from './display'
import { Display } from './display'

interface PictureOptions extends DisplayOptions {
  size?: PointData
  slice?: PointData
  sliceSize?: PointData
  objectFit?: Properties['objectFit']
  rounded?: number
}
export class Picture extends Display {
  private _size = new ObservablePoint(this, 0, 0)
  imgSize: ObservablePoint

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

  private _objectFit: Properties['objectFit'] = 'none'

  set objectFit(value) {
    if (this.objectFit !== value) {
      this._objectFit = value
      this._onUpdate()
    }
  }

  get objectFit() {
    return this._objectFit
  }

  private _rounded = 0

  set rounded(value) {
    value = value <= 0 ? 0 : value
    if (this.rounded !== value) {
      this._rounded = value
      this._onUpdate()
    }
  }

  get rounded() {
    return this._rounded
  }

  constructor(public img: HTMLImageElement, options?: PictureOptions) {
    super(options)

    this.imgSize = new ObservablePoint(this, this.img.width, this.img.height)

    this.size = options?.size ?? {
      x: this.img.width,
      y: this.img.height,
    }

    this.slice = options?.slice ?? this.slice

    this.sliceSize = options?.sliceSize ?? {
      x: this.img.width,
      y: this.img.height,
    }

    this.objectFit = options?.objectFit ?? this.objectFit

    this.rounded = options?.rounded ?? this.rounded
  }

  get _shouldUpdate(): boolean {
    return true
  }

  private get _isSlice() {
    return (!!this.slice.x || !!this.slice.y) || !this.sliceSize.equals(this.size)
  }

  protected _render(ctx: CanvasRenderingContext2D): void {
    if (!this._isSlice) {
      const _size = this.size.clone()
      const _position = this.position.clone()
      const scaleDiff = _size.x / this.imgSize.x
      const diffSize = calcDiff([this.imgSize.x, this.imgSize.y])
      const diff = diffSize * scaleDiff
      const slim = this.imgSize.x < this.imgSize.y
      const fat = this.imgSize.x > this.imgSize.y

      if ((slim || fat)) {
        switch (this.objectFit) {
          case 'contain':
            if (slim) {
              this.position.set(this.position.x - diff / 2, this.position.y)
              this.size.set(this.size.x - diff, this.size.y)
            }
            else {
              this.position.set(this.position.x, this.position.y + diff / 2)
              this.size.set(this.size.x, this.size.y - diff)
            }

            ctx.beginPath()
            if (this.rounded) {
              ctx.roundRect(this.x, this.y, this.size.x, this.size.y, this.rounded)
            }
            else {
              ctx.rect(this.x, this.y, this.size.x, this.size.y)
            }
            ctx.clip()
            break
          case 'cover':
            if (slim) {
              this.position.set(this.position.x + diff / 2, this.position.y)
              this.size.set(this.size.x + diff, this.size.y)
            }
            else {
              this.position.set(this.position.x - diff / 2, this.position.y)
              this.size.set(this.size.x + diff, this.size.y)
            }

            ctx.beginPath()
            if (this.rounded) {
              ctx.roundRect(_position.x, _position.y, _size.x, _size.y, this.rounded)
            }
            else {
              ctx.rect(_position.x, _position.y, _size.x, _size.y)
            }
            ctx.clip()
            break
          default:
        }
      }
      ctx.drawImage(
        this.img,
        this.position.x,
        this.position.y,
        this.size.x,
        this.size.y,
      )

      this.position = _position
      this.size = _size
    }
    else {
      const args = [
        this.img,
        this.slice.x,
        this.slice.y,
        this.sliceSize.x,
        this.sliceSize.y,
        this.x,
        this.y,
        this.size.x,
        this.size.y,
      ] as const

      ctx.beginPath()
      if (this.rounded) {
        ctx.roundRect(this.x, this.y, this.size.x, this.size.y, this.rounded)
      }
      else {
        ctx.rect(this.x, this.y, this.size.x, this.size.y)
      }
      ctx.clip()
      ctx.drawImage(...args)
    }
  }

  transformWidth: number = 0
  transformHeight: number = 0
  _updateTransformBounds(): void {
    // throw new Error('Method not implemented.')
  }
}
