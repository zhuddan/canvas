import type { Properties } from 'csstype';
import type { PointData } from '../coordinate/PointData';
import { ObservablePoint } from '../coordinate/ObservablePoint';
import type { App } from '../app';
import type { DisplayOptions, ShadowType } from './display';
import { Display } from './display';
export interface PictureOptions extends DisplayOptions {
    /**
     * 图片的宽高
     */
    size?: PointData;
    /**
     * 图片切片的开始坐标
     */
    slice?: PointData;
    /**
     * 图片切片的宽高
     */
    sliceSize?: PointData;
    /**
     * 图片的缩放模式
     */
    objectFit?: Properties['objectFit'];
    /**
     * 圆角
     */
    rounded?: number;
    /**
     *  image
     */
    image?: HTMLImageElement | string;
    /**
     * @deprecated 图片不支持阴影
     */
    shadow?: ShadowType;
}
export declare class Picture extends Display {
    private options?;
    private src;
    constructor(options?: PictureOptions | undefined);
    onAdd(_app: App): void;
    createImage(): void;
    initImageEvents(): void;
    private image?;
    private _size;
    private _imageSize;
    set size(value: PointData);
    get size(): ObservablePoint;
    private _slice;
    set slice(value: PointData);
    get slice(): ObservablePoint;
    private _sliceSize;
    set sliceSize(value: PointData);
    get sliceSize(): ObservablePoint;
    private _objectFit;
    set objectFit(value: import("csstype").Property.ObjectFit | undefined);
    get objectFit(): import("csstype").Property.ObjectFit | undefined;
    private _rounded;
    set rounded(value: number);
    _onUpdate(_point?: ObservablePoint | undefined): void;
    get rounded(): number;
    private _complete;
    private _onImageComplete;
    get _shouldUpdate(): boolean;
    private get _isSlice();
    private renderRoundedClip;
    protected _render(ctx: CanvasRenderingContext2D): void;
    protected transformWidth: number;
    protected transformHeight: number;
    protected updateTransformBounds(): void;
}
