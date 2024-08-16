export interface PointObject { x: number, y: number }
export type PointArray = [number, number]
export type MaybePoint = PointObject | PointArray | Point

export class Point {
  x: number
  y: number
  constructor(arg1: PointObject | PointArray) {
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
