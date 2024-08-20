import { Observer, ObservablePoint } from './coordinate/ObservablePoint.js';
import { PointData } from './coordinate/PointData.js';

/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
interface DisplayOptions {
    rotation?: number;
    scale?: PointData | number;
    anchor?: PointData | number;
    pivot?: PointData | number;
    skew?: PointData;
    visible?: boolean;
    x?: number;
    y?: number;
    position?: PointData;
    alpha?: number;
}
declare abstract class Display implements Observer<ObservablePoint> {
    constructor(options?: DisplayOptions);
    /**
     * 更新优化
     */
    private get __shouldUpdate();
    /**
     * 更新优化
     * 如果_shouldRender为true 则渲染
     * 否则跳过渲染
     */
    abstract get _shouldUpdate(): boolean;
    get shouldUpdate(): boolean;
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
    private _rotation;
    set rotation(value: number);
    get rotation(): number;
    private _anchor;
    set anchor(value: PointData | number);
    get anchor(): ObservablePoint;
    private _pivot;
    set pivot(value: PointData | number);
    get pivot(): ObservablePoint;
    _onUpdate(point?: ObservablePoint | undefined): void;
    _app: App | null;
    private _visible;
    get visible(): boolean;
    private shouldUpdateBounds;
    protected needUpdateBounds(): void;
    render(ctx: CanvasRenderingContext2D): void;
    protected abstract _render(ctx: CanvasRenderingContext2D): void;
    set visible(value: boolean);
    abstract width: number;
    abstract height: number;
    abstract _updateBounds(): void;
    onAdd(): void;
    onRemove(): void;
}

interface AppConstructorOptions {
    width?: number;
    height?: number;
    dpr?: boolean;
    onUpdate?: () => void;
}
declare class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    dpr: number;
    width: number;
    height: number;
    onUpdate: () => void;
    constructor({ width, height, dpr, onUpdate, }?: AppConstructorOptions);
    private beforeRender;
    private afterRender;
    private debug;
    children: Display[];
    add(object: Display): void;
    remove(object: Display): void;
    private update;
    onContext(fn: (ctx: CanvasRenderingContext2D) => any): void;
}

export { App as A, type DisplayOptions as D, Display as a };