import EventEmitter from 'eventemitter3';
import type { App } from '../app';
import type { Observer } from '../coordinate/ObservablePoint';
import { ObservablePoint } from '../coordinate/ObservablePoint';
import type { PointData } from '../coordinate/PointData';
export interface ShadowType {
    /**
     * [CanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
     */
    color: string;
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
}
/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
export interface RenderableOptions {
    /**
     * 元素是否可见
     */
    visible?: boolean;
    /**
     * 透明度
     */
    alpha?: number;
    /**
     * 阴影
     */
    shadow?: ShadowType;
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
     */
    anchor?: PointData | number;
    /**
     * 同 anchor，但是具体坐标，建议使用 anchor
     */
    pivot?: PointData | number;
    /**
     * 旋转角度(弧度)
     */
    rotation?: number;
    /**
     * 缩放比例
     */
    scale?: PointData | number;
    /**
     * 元素倾斜
     */
    skew?: PointData;
}
export declare abstract class Renderable extends EventEmitter<{
    ready: [];
    updateBounds: [width: number, height: number];
}> implements Observer<ObservablePoint> {
    protected _env: import("../utils").ENV;
    constructor(options?: RenderableOptions);
    /**
     * 更新优化
     */
    private get _renderableShouldUpdate();
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
    private _alpha;
    set alpha(value: number);
    get alpha(): number;
    private _shadow;
    set shadow(value: ShadowType);
    get shadow(): ShadowType;
    set x(value: number);
    get x(): number;
    set y(value: number);
    get y(): number;
    private _position;
    set position(value: PointData);
    get position(): ObservablePoint;
    private _anchor;
    set anchor(value: PointData | number);
    get anchor(): ObservablePoint;
    private _pivot;
    set pivot(value: PointData | number);
    get pivot(): ObservablePoint;
    private _rotation;
    set rotation(value: number);
    get rotation(): number;
    private _scale;
    set scale(value: PointData | number);
    get scale(): ObservablePoint;
    private _skew;
    set skew(value: PointData);
    get skew(): ObservablePoint;
    _onUpdate(_point?: ObservablePoint | undefined): void;
    _app: App | null;
    private _visible;
    get visible(): boolean;
    set visible(value: boolean);
    protected _shouldUpdateBounds: boolean;
    protected shouldUpdateBounds(type: string): void;
    /**
     * 读取阴影
     * @param ctx
     */
    private _readerShadow;
    render(ctx: CanvasRenderingContext2D): void;
    _renderId: number;
    protected abstract _render(ctx: CanvasRenderingContext2D): void;
    /**
     * 原始尺寸
     */
    protected _rawSize: {
        width: number;
        height: number;
    };
    get height(): number;
    get width(): number;
    /**
     * 更新原始尺寸
     */
    protected abstract updateRawSize(): void;
    /**
     * 更新原始尺寸
     */
    protected changeRawSize(width: number, height: number): void;
    onAdd(_app: App): void;
    onRemove(): void;
    addTo(app: App): this;
    destroy(): void;
}
