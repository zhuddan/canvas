import type { Display } from '../object/display'

export abstract class Dirty {
  constructor(_display?: Display) {
    this.display = _display
  }

  display?: Display

  protected _dirty = true
  set dirty(value) {
    // if (this._dirty !== value) {
    this._dirty = value
    if (this.display) {
      this.display.dirty = value
    }
    // }
  }

  get dirty() {
    return this._dirty
  }
}
