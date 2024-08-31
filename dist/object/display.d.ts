import EventEmitter from 'eventemitter3';
import type { App } from '../app';
import type { Observer } from '../coordinate/ObservablePoint';
import { ObservablePoint } from '../coordinate/ObservablePoint';
import type { PointData } from '../coordinate/PointData';
export interface ShadowType {
    /**
     * [CanvasRenderingContext2D.shadowOffsetX](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
     */
    x?: number;
    /**
     * [CanvasRenderingContext2D.shadowOffsetY](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
     */
    y?: number;
    /**
     * [CanvasRenderingContext2D.shadowBlur](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
     */
    blur?: number;
    /**
     * [CanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
     */
    color?: string;
}
/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
export interface DisplayOptions {
    /**
     * 元素是否可见
     */
    visible?: boolean;
    /**
     * 元素位置x
     */
    x?: number;
    /**
     * 元素位置y
     */
    y?: number;
    /**
     * 元素位置
     */
    position?: PointData;
    /**
     * 旋转角度(弧度)
     */
    rotation?: number;
    /**
     * 缩放比例
     */
    scale?: PointData | number;
    /**
     * 单位矩阵变化中心，默认是[0,0]表示左上角，[1,1]表示右下角，[0.5,0.5]表示中心
     *
     * 此属性可以很好的控制元素的锚点，不用计算相对位置
     *
     * 例如：一个500x500的画布上需要绘制一个上下居中的图片
     *
     * ``` ts
     * const text = new Picture('demo.png',{
     *  anchor: 0.5
     * })
     * ```
     *
     * ```
     * > [!IMPORTANT]
     * > Crucial information necessary for users to succeed.
     * ```
     */
    anchor?: PointData | number;
    /**
     * 同 anchor，但是具体坐标，建议使用 anchor
     */
    pivot?: PointData | number;
    /**
     * 元素倾斜
     */
    skew?: PointData;
    /**
     * 透明度
     */
    alpha?: number;
    /**
     * 阴影
     */
    shadow?: ShadowType;
}
export declare abstract class Display extends EventEmitter<{
    ready: [];
}> implements Observer<ObservablePoint> {
    protected _env: import("../utils").ENV;
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
    private _shadow;
    set shadow(value: ShadowType);
    get shadow(): ShadowType;
    _onUpdate(_point?: ObservablePoint | undefined): void;
    _app: App | null;
    private _visible;
    get visible(): boolean;
    set visible(value: boolean);
    protected _shouldUpdateBounds: boolean;
    protected shouldUpdateBounds(): void;
    private _baseRender;
    render(ctx: CanvasRenderingContext2D): void;
    _renderId: number;
    protected abstract _render(ctx: CanvasRenderingContext2D): void;
    /**
     * 同于形变转换的宽度
     */
    protected abstract transformWidth: number;
    /**
     * 同于形变转换的高度
     */
    protected abstract transformHeight: number;
    /**
     * 同于形变转换的边界
     */
    protected abstract updateTransformBounds(): void;
    get height(): number;
    get width(): number;
    onAdd(_app: App): void;
    onRemove(): void;
    addTo(app: App): this;
    destroy(): void;
}
