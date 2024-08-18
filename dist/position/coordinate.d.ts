import EventEmitter from 'eventemitter3';
import type { Display } from '../object/display';
import type { Dirty } from '../types';
interface CoordinateEventEmitter {
    shouldUpdate: [];
}
export declare abstract class Coordinate extends EventEmitter<CoordinateEventEmitter> implements Dirty {
    display?: Display;
    constructor(_display?: Display);
    protected _dirty: boolean;
    set dirty(value: boolean);
    get dirty(): boolean;
    abstract clone(): Coordinate;
}
export {};
