export interface PointObject {
    x: number;
    y: number;
}
export type PointArray = [number, number];
export type MaybePoint = PointObject | PointArray | Point;
export declare class Point {
    x: number;
    y: number;
    constructor(arg1: PointObject | PointArray);
    translate(p: MaybePoint): this;
    reverse(): this;
    clone(): Point;
}
export declare function createPoint(maybePoint: MaybePoint): Point;
