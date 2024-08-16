import { pauseUpdate, shouldUpdate } from '../app'
import { Event } from '../common/event'
import { interceptUpdate } from '../common/intercept'
import type {
  MaybePoint,
} from '../position/point'
import {
  Point,
} from '../position/point'
import type { BaseStyle } from '../style/base-style'
import type { RenderImpl } from '../types'

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

export abstract class Display implements Required<DisplayImpl> {
  constructor() {
    console.log('on')
  }

  abstract style: BaseStyle

  private _visible = true

  get visible() {
    return this._visible
  }

  @interceptUpdate()
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

  position = new Point([-Infinity, -Infinity])
  skew = new Point([0, 0])
  anchor = new Point([0, 0])
  scale = new Point([1, 1])

  onAdd() { }

  onRemove() { }

  abstract _render(ctx: CanvasRenderingContext2D): void

  render(ctx: CanvasRenderingContext2D): void {
    this._render(ctx)
  }
}
