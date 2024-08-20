import type { Properties } from 'csstype';
import type { PointData } from '../coordinate/PointData';
import { ObservablePoint } from '../coordinate/ObservablePoint';
import type { DisplayOptions } from './display';
import { Display } from './display';
interface PictureOptions extends DisplayOptions {
    size?: PointData;
    slice?: PointData;
    sliceSize?: PointData;
    objectFit?: Properties['objectFit'];
}
export declare class Picture extends Display {
    img: HTMLImageElement;
    private _size;
    set size(value: PointData);
    get size(): ObservablePoint;
    private _slice;
    set slice(value: PointData);
    get slice(): ObservablePoint;
    private _sliceSize;
    set sliceSize(value: PointData);
    get sliceSize(): ObservablePoint;
    constructor(img: HTMLImageElement, options?: PictureOptions);
    get _shouldUpdate(): boolean;
    protected _render(ctx: CanvasRenderingContext2D): void;
    transformWidth: number;
    transformHeight: number;
    _updateTransformBounds(): void;
}
export {};
