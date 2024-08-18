import type { Display } from '../object/display';
import { Dirty } from '../common/dirty';
export declare abstract class Coordinate extends Dirty {
    constructor(_display?: Display);
    abstract clone(): Coordinate;
}
