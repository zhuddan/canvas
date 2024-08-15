import type { IPoint } from './types'
import { calcMax, calcMin } from './utils'

export class Bounds {
  start: IPoint
  end: IPoint
  constructor(point1: [number, number], point2: [number, number]) {
    const minX = calcMin([point1[0], point2[0]])
    const minY = calcMin([point1[1], point2[1]])
    const maxX = calcMax([point1[0], point2[0]])
    const maxY = calcMax([point1[1], point2[1]])
    this.start = {
      x: minX,
      y: minY,
    }
    this.end = {
      x: maxX,
      y: maxY,
    }
  }

  get width() {
    return this.end.x - this.start.x
  }

  get height() {
    return this.end.y - this.start.y
  }
}
