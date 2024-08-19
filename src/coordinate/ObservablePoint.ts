import type { PointData } from './PointData'
import type { PointLike } from './PointLike'

export interface Observer<T> {
  _onUpdate: (point?: T) => void
}

export class ObservablePoint implements PointLike {
  public _x: number
  public _y: number
  private readonly _observer: Observer<ObservablePoint> | null
  constructor(observer: Observer<ObservablePoint> | null, x?: number, y?: number) {
    this._x = x || 0
    this._y = y || 0
    this._observer = observer
  }

  public clone(observer?: Observer<ObservablePoint>): ObservablePoint {
    return new ObservablePoint(observer ?? this._observer, this._x, this._y)
  }

  public set(x = 0, y = x): this {
    if (this._x !== x || this._y !== y) {
      this._x = x
      this._y = y
      this._observer?._onUpdate(this)
    }
    return this
  }

  public copyFrom(p: PointData): this {
    if (this._x !== p.x || this._y !== p.y) {
      this._x = p.x
      this._y = p.y
      this._observer?._onUpdate(this)
    }
    return this
  }

  public copyTo<T extends PointLike>(p: T): T {
    p.set(this._x, this._y)
    return p
  }

  public equals(p: PointData): boolean {
    return (p.x === this._x) && (p.y === this._y)
  }

  get x(): number {
    return this._x
  }

  set x(value: number) {
    if (this._x !== value) {
      this._x = value
      console.log(this._observer)
      this._observer?._onUpdate(this)
    }
  }

  get y(): number {
    return this._y
  }

  set y(value: number) {
    if (this._y !== value) {
      this._y = value
      this._observer?._onUpdate(this)
    }
  }
}
