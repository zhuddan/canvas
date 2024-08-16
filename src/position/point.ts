import mitt from 'mitt'
import { Event } from '../common/event'

export interface PointObject { x: number, y: number }
export type PointArray = [number, number]
export type MaybePoint = PointObject | PointArray | Point
export class Point extends Event<{
  shouldUpdate: 'update'
}> {
  shouldUpdate = false
  private _x = -Infinity

  set x(x) {
    if (x !== this._x) {
      this._x = x
      this.emit('shouldUpdate', 'update')
    }
  }

  get x() {
    return this._x
  }

  private _y = -Infinity

  set y(y) {
    if (y !== this._y) {
      this._y = y
      this.emit('shouldUpdate', 'update')
    }
  }

  get y() {
    return this._y
  }

  constructor(arg1: PointObject | PointArray) {
    super()
    if (Array.isArray(arg1)) {
      [this.x, this.y] = arg1
    }
    else if (typeof arg1 === 'number') {
      this.x = this.y = arg1
    }
    else {
      this.x = arg1.x
      this.y = arg1.y
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
