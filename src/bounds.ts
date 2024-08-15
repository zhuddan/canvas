import type { IPoint } from './types'
import { calcMax, calcMin } from './utils'

export class Bounds {
  min: IPoint
  max: IPoint
  constructor(point1: [number, number], point2: [number, number]) {
    const minX = calcMin([point1[0], point2[0]])
    const minY = calcMin([point1[1], point2[1]])
    const maxX = calcMax([point1[0], point2[0]])
    const maxY = calcMax([point1[1], point2[1]])
    this.min = { x: minX, y: minY }
    this.max = { x: maxX, y: maxY }
  }

  get width() {
    return this.max.x - this.min.x
  }

  get height() {
    return this.max.y - this.min.y
  }
}
