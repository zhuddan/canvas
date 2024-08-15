import type { MaybePoint, PointArray, PointObject } from './point'
import { Point, createPoint } from './point'
import { calcMax, calcMin } from './utils'

export type MaybeBounds = [
  PointObject | PointArray | Point,
  PointObject | PointArray | Point,
] | Bounds

export class Bounds {
  min: Point
  max: Point
  constructor(point1: MaybePoint, point2: MaybePoint) {
    point1 = createPoint(point1)
    point2 = createPoint(point2)
    const minX = calcMin([point1.x, point2.x])
    const minY = calcMin([point1.y, point2.y])
    const maxX = calcMax([point1.x, point2.x])
    const maxY = calcMax([point1.y, point2.y])
    this.min = new Point([minX, minY])
    this.max = new Point([maxX, maxY])
  }

  get width() {
    return this.max.x - this.min.x
  }

  get height() {
    return this.max.y - this.min.y
  }

  translate(p: MaybePoint) {
    this.min.translate(p)
    this.max.translate(p)
    return this
  }

  // 开始坐标移动到原点
  origin() {
    return this.translate(this.min.clone().reverse())
  }

  clone(): Bounds {
    return new Bounds(this.min, this.max)
  }
}

export function createBounds(b: MaybeBounds): Bounds {
  if (b instanceof Bounds) {
    return b
  }
  return new Bounds(...b)
}
