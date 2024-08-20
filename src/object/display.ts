import type { App } from '../app'
import type { Observer } from '../coordinate/ObservablePoint'
import { ObservablePoint } from '../coordinate/ObservablePoint'
import type { PointData } from '../coordinate/PointData'
import { ensureBetween } from '../utils'

/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
export interface DisplayOptions {
  visible?: boolean

  x?: number

  y?: number

  position?: PointData

  rotation?: number

  scale?: PointData | number

  anchor?: PointData | number

  pivot?: PointData | number

  skew?: PointData

  alpha?: number
}

const defaultSkew = new ObservablePoint(null)
const defaultPivot = new ObservablePoint(null)
const defaultAnchor = new ObservablePoint(null)
const defaultScale = new ObservablePoint(null, 1, 1)

export abstract class Display implements Observer<ObservablePoint> {
  constructor(options: DisplayOptions = {}) {
    this.visible = !!options.visible
    if (options.position) {
      this.position = options.position
    }
    else {
      this.x = options.x ?? 0
      this.y = options.y ?? 0
    }

    if (options.scale) {
      this.scale = options.scale
    }

    if (options.skew) {
      this.skew = options.skew
    }
    if (options.pivot) {
      this.pivot = options.pivot
    }
  }

  /**
   * 更新优化
   */

  private get __shouldUpdate() {
    return !(!this.visible
      || this.scale.x === 0
      || this.scale.y === 0
      || this.alpha === 0)
  }
  /**
   * 更新优化
   * 如果_shouldRender为true 则渲染
   * 否则跳过渲染
   */
  abstract get _shouldUpdate(): boolean

  get shouldUpdate() {
    return this.__shouldUpdate && this._shouldUpdate
  }

  protected _dirty = true
  set dirty(value) {
    if (this._dirty === value)
      return
    this._dirty = value
  }

  get dirty() {
    return this._dirty
  }

  set x(value) {
    if (this.x !== value) {
      this.position.x = value
    }
  }

  get x() {
    return this.position.x
  }

  set y(value) {
    if (this.y !== value) {
      this.position.y = value
    }
  }

  get y() {
    return this.position.y
  }

  private _position = new ObservablePoint(this, 0, 0)

  set position(value: PointData) {
    if (this.position !== value) {
      this._position.copyFrom(value)
    }
  }

  get position(): ObservablePoint {
    return this._position
  }

  private _scale: ObservablePoint = defaultScale

  set scale(value: PointData | number) {
    if (this._scale === defaultScale) {
      this._scale = new ObservablePoint(this, 1, 1)
    }
    if (typeof value === 'number') {
      this._scale.set(value)
    }
    else {
      this._scale.copyFrom(value)
    }
  }

  get scale(): ObservablePoint {
    if (this._scale === defaultScale) {
      this._scale = new ObservablePoint(this, 1, 1)
    }
    return this._scale
  }

  private _skew: ObservablePoint = defaultSkew

  set skew(value: PointData) {
    if (this._skew === defaultSkew) {
      this._skew = new ObservablePoint(this)
    }
    this._skew.copyFrom(value)
  }

  get skew(): ObservablePoint {
    if (this._skew === defaultSkew) {
      this._skew = new ObservablePoint(this, 0, 0)
    }
    return this._skew
  }

  private _alpha = 1

  set alpha(value) {
    if (this.alpha !== value) {
      this._alpha = value
      this._onUpdate()
    }
  }

  get alpha() {
    return this._alpha
  }

  private _rotation = 0

  set rotation(value) {
    if (this.rotation !== value) {
      this._rotation = value
      this._onUpdate()
    }
  }

  get rotation() {
    return this._rotation
  }

  private _anchor = defaultAnchor

  set anchor(value: PointData | number) {
    if (this._anchor === defaultAnchor) {
      this._anchor = new ObservablePoint(this, 0, 0)
    }
    if (typeof value === 'number') {
      this._anchor.set(value)
    }
    else {
      this._anchor.copyFrom(value)
    }
  }

  get anchor(): ObservablePoint {
    if (this._anchor === defaultAnchor) {
      this._anchor = new ObservablePoint(this)
    }
    return this._anchor
  }

  private _pivot: ObservablePoint = defaultPivot

  set pivot(value: PointData | number) {
    if (this._pivot === defaultPivot) {
      this._pivot = new ObservablePoint(this, 0, 0)
    }
    if (typeof value === 'number') {
      this._pivot.set(value)
    }
    else {
      this._pivot.copyFrom(value)
    }
  }

  get pivot(): ObservablePoint {
    if (this._pivot === defaultPivot) {
      this._pivot = new ObservablePoint(this)
    }
    return this._pivot
  }

  _onUpdate(point?: ObservablePoint | undefined) {
    if (!point) {
      //
    }
    this.dirty = true
  }

  _app: App | null = null
  // abstract style: BaseStyle

  private _visible = true

  get visible() {
    return this._visible
  }

  set visible(value) {
    this._visible = value
    this._onUpdate()
  }

  private shouldUpdateBounds = true
  protected needUpdateBounds() {
    if (!this.shouldUpdateBounds)
      this.shouldUpdateBounds = true
  }

  public render(ctx: CanvasRenderingContext2D) {
    if (this.shouldUpdateBounds) {
      this._updateBounds()
      this.shouldUpdateBounds = false
    }
    if (this.alpha !== 1) {
      ctx.globalAlpha = this.alpha
    }
    const scaleX = this.scale.x
    const scaleY = this.scale.y
    const skewX = this.skew.x
    const skewY = this.skew.y
    const positionX = this.position.x
    const positionY = this.position.y
    const pivotX = this.pivot.x
    const pivotY = this.pivot.y
    const rotation = this.rotation
    // Calculate rotation matrix components
    const cos = Math.cos(rotation)
    const sin = Math.sin(rotation)

    const anchorX = ensureBetween(this.anchor.x, 0, 1)
    const anchorY = ensureBetween(this.anchor.y, 0, 1)

    // Adjust origin based on anchor
    const originX = this.width * anchorX
    const originY = this.height * anchorY

    // Apply pivot translation
    // const dx = positionX - pivotX * cos * scaleX + pivotY * sin * scaleY
    // const dy = positionY - pivotX * sin * scaleX - pivotY * cos * scaleY

    const dx = positionX - (pivotX + originX) * cos * scaleX + (pivotY + originY) * sin * scaleY
    const dy = positionY - (pivotX + originX) * sin * scaleX - (pivotY + originY) * cos * scaleY

    // Set transformation matrix
    // a = scaleX * cos + skewY * -sin
    // b = scaleX * sin + skewY * cos
    // c = skewX * cos + scaleY * -sin
    // d = skewX * sin + scaleY * cos
    // e = dx
    // f = dy

    const dpr = this._app?.dpr ?? 1
    ctx.setTransform(
      scaleX * cos + skewY * -sin, // a
      scaleX * sin + skewY * cos, // b
      skewX * cos + scaleY * -sin, // c
      skewX * sin + scaleY * cos, // d
      dx * dpr, // e
      dy * dpr, // f
    )
    const _position = this.position.clone()
    ctx.scale(dpr, dpr)
    this.position.set(0)
    this._render(ctx)
    this.position = _position
    ctx.resetTransform()
  }

  protected abstract _render(ctx: CanvasRenderingContext2D): void

  abstract width: number
  abstract height: number
  abstract _updateBounds(): void

  onAdd() { }

  onRemove() { }
}
