import { interceptDirty as displayIntercept } from '../common/intercept'
import type {
  MaybePoint,
} from '../position/point'
import {
  Point,
} from '../position/point'
import type { BaseStyle } from '../style/base-style'
import type { Dirty } from '../types'

/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
export interface DisplayImpl {

  angle?: number

  scale?: MaybePoint

  skew?: MaybePoint

  anchor?: MaybePoint

  visible?: boolean
}

export abstract class Display implements Required<DisplayImpl>, Dirty {
  constructor() {

  }

  private _dirty = true
  set dirty(value) {
    if (this._dirty !== value) {
      this._dirty = value
    }
  }

  get dirty() {
    return this._dirty
  }

  abstract style: BaseStyle

  private _visible = true

  get visible() {
    return this._visible
  }

  @displayIntercept()
  set visible(value) {
    this._visible = value
  }

  private _angle = 0

  get angle() {
    return this._angle
  }

  set angle(value) {
    this._angle = value
  }

  get x() {
    return this.position.x
  }

  set x(val) {
    this.position.x = val
  }

  get y() {
    return this.position.y
  }

  set y(val) {
    this.position.y = val
  }

  position = new Point([-Infinity, -Infinity], this)
  skew = new Point([0, 0], this)
  anchor = new Point([0, 0], this)
  scale = new Point([1, 1], this)

  abstract _render(ctx: CanvasRenderingContext2D): void

  render(ctx: CanvasRenderingContext2D): void {
    this._render(ctx)
  }

  onAdd() { }

  onRemove() { }
}
