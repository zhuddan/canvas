import { Event } from '../common/event'
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

export abstract class Display extends Event<{ shouldUpdate: any }> implements Required<DisplayImpl> {
  constructor() {
    super()
    console.log('on')
    this.on('shouldUpdate', () => {
      if (!this._shouldUpdate)
        this._shouldUpdate = true
    })
    this.position.on('shouldUpdate', () => {
      if (!this._shouldUpdate)
        this._shouldUpdate = true
    })
  }

  private _angle = 0
  _shouldUpdate = false

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
