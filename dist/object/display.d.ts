import type { MaybePoint } from '../position/point';
import { Point } from '../position/point';
/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
export interface DisplayImpl {
    angle?: number;
    scale?: MaybePoint;
    skew?: MaybePoint;
    anchor?: MaybePoint;
}
export declare abstract class Display implements Required<DisplayImpl> {
    _angle: number;
    get angle(): number;
    set angle(value: number);
    skew: Point;
    anchor: Point;
    scale: Point;
}
