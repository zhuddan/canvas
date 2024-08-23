import type { Properties } from 'csstype'
import type { PointData } from '../coordinate/PointData'
import { ObservablePoint } from '../coordinate/ObservablePoint'
import { calcDiff } from '../utils'
import { App } from '../app'
import type { DisplayOptions } from './display'
import { Display } from './display'

export interface PictureOptions extends DisplayOptions {
  size?: PointData
  slice?: PointData
  sliceSize?: PointData
  objectFit?: Properties['objectFit']
  rounded?: number
}

export class Picture extends Display {
  constructor(maybeImage: HTMLImageElement | string, private options?: PictureOptions) {
    super(options)
    if (typeof maybeImage == 'string') {
      this.image = App.createImage()
      this.image.src = maybeImage
    }
    else {
      this.image = maybeImage
    }

    if (this.image.complete) {
      this._onImageComplete()
    }
    else {
      this.image.addEventListener('load', () => {
        this._onImageComplete()
      })
    }
  }

  private image: HTMLImageElement

  // set image(value) {
  //   if (this.image !== value) {
  //     this._image = value
  //   }
  // }

  // get image() {
  //   return this._image
  // }

  private _size = new ObservablePoint(this, 0, 0)

  private _imageSize = new ObservablePoint(this, 0, 0)

  set size(value: PointData) {
    if (this.size !== value) {
      this._size.copyFrom(value)
      this.shouldUpdateBounds()
    }
  }

  get size(): ObservablePoint {
    return this._size
  }

  private _slice = new ObservablePoint(this)

  set slice(value: PointData) {
    if (this.slice !== value) {
      this._slice.copyFrom(value)
      this.shouldUpdateBounds()
    }
  }

  get slice(): ObservablePoint {
    return this._slice
  }

  private _sliceSize = new ObservablePoint(this)

  set sliceSize(value: PointData) {
    if (this.sliceSize !== value) {
      this._sliceSize.copyFrom(value)
      this._onUpdate()
      this.shouldUpdateBounds()
    }
  }

  get sliceSize(): ObservablePoint {
    return this._sliceSize
  }

  private _objectFit: Properties['objectFit'] = 'none'

  set objectFit(value) {
    if (this.objectFit !== value) {
      this._objectFit = value
      this.shouldUpdateBounds()
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

  _onUpdate(_point?: ObservablePoint | undefined) {
    if (this._ready)
      super._onUpdate(_point)
  }

  get rounded() {
    return this._rounded
  }

  private _ready = false

  private _onImageComplete() {
    this._imageSize = new ObservablePoint(this, this.image.width, this.image.height)

    this.size = this.options?.size ?? {
      x: this.image.width,
      y: this.image.height,
    }

    this.slice = this.options?.slice ?? this.slice

    this.sliceSize = this.options?.sliceSize ?? {
      x: this.image.width,
      y: this.image.height,
    }

    this.objectFit = this.options?.objectFit ?? this.objectFit

    this.rounded = this.options?.rounded ?? this.rounded
    this.emit('ready')
    this._ready = true
    this._onUpdate()
    this.shouldUpdateBounds()
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
      const scaleDiff = _size.x / this._imageSize.x
      const diffSize = calcDiff([this._imageSize.x, this._imageSize.y])
      const diff = diffSize * scaleDiff
      const slim = this._imageSize.x < this._imageSize.y
      const fat = this._imageSize.x > this._imageSize.y
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
        this.image,
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
        this.image,
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
  updateTransformBounds(): void {
    this.transformHeight = this.size.x
    this.transformWidth = this.size.y
  }
}
