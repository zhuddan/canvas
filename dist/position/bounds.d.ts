import type { Display } from '../object/display';
import { Coordinate } from './coordinate';
import type { MaybePoint, PointArray, PointObject } from './point';
import { Point } from './point';
export type MaybeBounds = [
    PointObject | PointArray | Point,
    PointObject | PointArray | Point
] | Bounds;
export declare class Bounds extends Coordinate {
    min: Point;
    max: Point;
    constructor(point1: MaybePoint, point2: MaybePoint, _display?: Display);
    get width(): number;
    get height(): number;
    translate(p: MaybePoint): this;
    origin(): this;
    clone(): Bounds;
}
export declare function createBounds(b: MaybeBounds, _display: Display): Bounds;
