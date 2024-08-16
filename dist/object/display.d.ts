import { Event } from '../common/event';
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
export declare abstract class Display extends Event<{
    shouldUpdate: any;
}> implements Required<DisplayImpl> {
    constructor();
    private _angle;
    _shouldUpdate: boolean;
    get angle(): number;
    set angle(value: number);
    get x(): number;
    set x(val: number);
    get y(): number;
    set y(val: number);
    position: Point;
    skew: Point;
    anchor: Point;
    scale: Point;
    onAdd(): void;
    onRemove(): void;
    abstract _render(ctx: CanvasRenderingContext2D): void;
    render(ctx: CanvasRenderingContext2D): void;
}
