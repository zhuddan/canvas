import { PointObject, PointArray, Point, MaybePoint } from './point.js';

type MaybeBounds = [
    PointObject | PointArray | Point,
    PointObject | PointArray | Point
] | Bounds;
declare class Bounds {
    min: Point;
    max: Point;
    constructor(point1: MaybePoint, point2: MaybePoint);
    get width(): number;
    get height(): number;
    translate(p: MaybePoint): this;
    origin(): this;
    clone(): Bounds;
}
declare function createBounds(b: MaybeBounds): Bounds;

export { Bounds, type MaybeBounds, createBounds };
