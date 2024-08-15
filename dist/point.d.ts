interface PointObject {
    x: number;
    y: number;
}
type PointArray = [number, number];
type MaybePoint = number | PointObject | PointArray | Point;
declare class Point {
    x: number;
    y: number;
    constructor(arg1: PointObject | PointArray | number);
}
declare function point(maybePoint: MaybePoint): Point;

export { type MaybePoint, Point, type PointArray, type PointObject, point };
