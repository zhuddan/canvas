import EventEmitter from 'eventemitter3'
import type { Display } from '../object/display'
import type { Dirty } from '../types'

interface CoordinateEventEmitter {
  shouldUpdate: []
}

export abstract class Coordinate extends EventEmitter<CoordinateEventEmitter> implements Dirty {
  display?: Display
  constructor(_display?: Display) {
    super()
    this.display = _display
  }

  protected _dirty = true

  set dirty(value) {
    if (this._dirty !== value) {
      this._dirty = value
    }
  }

  get dirty() {
    return this._dirty
  }
  abstract clone(): Coordinate
}
