import EventEmitter from 'eventemitter3'
import type { Display } from '../object/display'
import { Dirty } from '../common/dirty'

// interface CoordinateEventEmitter {
//   shouldUpdate: []
// }
// EventEmitter<CoordinateEventEmitter>

export abstract class Coordinate extends Dirty {
  constructor(_display?: Display) {
    super(_display)
  }
  abstract clone(): Coordinate
}
