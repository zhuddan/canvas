import EventEmitter from 'eventemitter3';
export interface PointObject {
    x: number;
    y: number;
}
export type PointArray = [number, number];
export type MaybePoint = PointObject | PointArray | Point;
export declare class Point extends EventEmitter<{
    shouldUpdate: any;
}> {
    shouldUpdate: boolean;
    _x: number;
    set x(x: number);
    get x(): number;
    private _y;
    set y(y: number);
    get y(): number;
    constructor(arg1: PointObject | PointArray);
    translate(p: MaybePoint): this;
    reverse(): this;
    clone(): Point;
}
export declare function createPoint(maybePoint: MaybePoint): Point;
