import { Event } from '../common/event'
import { updateIntercept } from '../common/intercept'

export interface PointObject { x: number, y: number }
export type PointArray = [number, number]
export type MaybePoint = PointObject | PointArray | Point

export class Point extends Event<{
  shouldUpdate: any
}> {
  shouldUpdate = false

  _x = -Infinity
  @updateIntercept()
  set x(x) {
    this._x = x
  }

  get x() {
    return this._x
  }

  private _y = -Infinity

  @updateIntercept()
  set y(y) {
    this._y = y
  }

  get y() {
    return this._y
  }

  constructor(arg1: PointObject | PointArray) {
    super()
    if (Array.isArray(arg1)) {
      [this._x, this._y] = arg1
    }
    else {
      this._x = arg1.x
      this._y = arg1.y
    }
  }

  translate(p: MaybePoint) {
    p = createPoint(p)
    this.x += p.x
    this.y += p.y
    return this
  }

  reverse() {
    this.x *= -1
    this.y *= -1
    return this
  }

  clone(): Point {
    return new Point([this.x, this.y])
  }
}

export function createPoint(maybePoint: MaybePoint): Point {
  if (maybePoint instanceof Point) {
    return maybePoint
  }
  return new Point(maybePoint)
}
