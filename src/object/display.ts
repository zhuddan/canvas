import type {
  MaybePoint,
} from '../position/point'
import {
  Point,
} from '../position/point'

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
  get angle() {
    return this._angle
  }

  set angle(value) {
    this._angle = value
  }

  skew = new Point([0, 0])
  anchor = new Point([0, 0])
  scale = new Point([1, 1])
}
