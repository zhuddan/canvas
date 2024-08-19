import type { App } from '../app';
import type { Observer } from '../coordinate/ObservablePoint';
import { ObservablePoint } from '../coordinate/ObservablePoint';
import type { PointData } from '../coordinate/PointData';
/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
export interface DisplayOptions {
    angle?: number;
    scale?: PointData | number;
    anchor?: PointData | number;
    skew?: PointData;
    visible?: boolean;
    x?: number;
    y?: number;
    position?: PointData;
    alpha?: number;
}
export declare abstract class Display implements Observer<ObservablePoint> {
    constructor(options?: DisplayOptions);
    /**
     * 更新优化
     */
    private get ___shouldRender();
    /**
     * 更新优化
     * 如果_shouldRender为true 则渲染
     * 否则跳过渲染
     */
    abstract get _shouldRender(): boolean;
    get shouldRender(): boolean;
    protected _dirty: boolean;
    set dirty(value: boolean);
    get dirty(): boolean;
    set x(value: number);
    get x(): number;
    set y(value: number);
    get y(): number;
    private _position;
    set position(value: PointData);
    get position(): ObservablePoint;
    private _scale;
    set scale(value: PointData | number);
    get scale(): ObservablePoint;
    private _skew;
    set skew(value: PointData);
    get skew(): ObservablePoint;
    private _alpha;
    set alpha(value: number);
    get alpha(): number;
    _onUpdate(point?: ObservablePoint | undefined): void;
    _app: App | null;
    private _visible;
    get visible(): boolean;
    abstract render(ctx: CanvasRenderingContext2D): void;
    set visible(value: boolean);
    onAdd(): void;
    onRemove(): void;
}
