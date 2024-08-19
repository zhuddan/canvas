import type { App } from '../app';
import { Dirty } from '../common/dirty';
import type { Observer } from '../position/ObservablePoint';
import { ObservablePoint } from '../position/ObservablePoint';
import type { MaybePoint } from '../position/point';
import type { PointData } from '../position/PointData';
/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
export interface DisplayOptions {
    angle?: number;
    scale?: MaybePoint;
    skew?: MaybePoint;
    anchor?: MaybePoint;
    visible?: boolean;
    x?: number;
    y?: number;
    position?: MaybePoint;
}
export declare abstract class Display extends Dirty implements Observer<ObservablePoint> {
    constructor(options?: DisplayOptions);
    set x(value: number);
    get x(): number;
    set y(value: number);
    get y(): number;
    private _position;
    set position(value: PointData);
    get position(): PointData;
    _onUpdate(point?: ObservablePoint | undefined): void;
    _app: App | null;
    private _visible;
    get visible(): boolean;
    abstract render(ctx: CanvasRenderingContext2D): void;
    set visible(value: boolean);
    onAdd(): void;
    onRemove(): void;
}
