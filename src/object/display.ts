import type {
  MaybePoint,
} from '../position/point'
import {
  Point,
} from '../position/point'
import type { RenderImpl } from '../types'

/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
export interface DisplayImpl {

  angle?: number

  scale?: MaybePoint

  skew?: MaybePoint

  anchor?: MaybePoint
}

export abstract class Display implements Required<DisplayImpl> {
  _angle = 1
  _shouldUpdate = false

  get angle() {
    return this._angle
  }

  position: Point

  constructor() {
    this.position = new Point([-Infinity, -Infinity])
    this.position.on('shouldUpdate', () => {
      this._shouldUpdate = true
    })
  }

  set angle(value) {
    this._angle = value
  }

  skew = new Point([0, 0])
  anchor = new Point([0, 0])
  scale = new Point([1, 1])

  onAdd() {
    this._shouldUpdate = true
  }

  onRemove() {
    this._shouldUpdate = true
  }

  abstract _render(ctx: CanvasRenderingContext2D): void

  render(ctx: CanvasRenderingContext2D): void {
    this._render(ctx)
  }
}
