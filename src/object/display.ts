import type { App } from '../app'
import type { Observer } from '../coordinate/ObservablePoint'
import { ObservablePoint } from '../coordinate/ObservablePoint'
import type { PointData } from '../coordinate/PointData'

/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
export interface DisplayOptions {

  angle?: number

  scale?: PointData | number

  anchor?: PointData | number

  skew?: PointData

  visible?: boolean

  x?: number

  y?: number

  position?: PointData

  alpha?: number
}

const defaultSkew = new ObservablePoint(null)
// const defaultPivot = new ObservablePoint(null)
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
      this._skew = new ObservablePoint(this, 1, 1)
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

  abstract render(ctx: CanvasRenderingContext2D): void

  set visible(value) {
    this._visible = value
  }

  onAdd() { }

  onRemove() { }
}
