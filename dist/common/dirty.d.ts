import type { Display } from '../object/display';
export declare abstract class Dirty {
    constructor(_display?: Display);
    display?: Display;
    protected _dirty: boolean;
    set dirty(value: boolean);
    get dirty(): boolean;
}
