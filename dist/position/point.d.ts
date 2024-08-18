import type { Display } from '../object/display';
import { Coordinate } from './coordinate';
export interface PointObject {
    x: number;
    y: number;
}
export type PointArray = [number, number];
export type MaybePoint = PointObject | PointArray | Point;
export declare class Point extends Coordinate {
    shouldUpdate: boolean;
    _x: number;
    set x(x: number);
    get x(): number;
    private _y;
    set y(y: number);
    get y(): number;
    constructor(arg1: PointObject | PointArray, _display?: Display);
    translate(p: MaybePoint): this;
    reverse(): this;
    clone(): Point;
}
export declare function createPoint(maybePoint: MaybePoint, _display?: Display): Point;
