import { P as Property, a as Properties } from '../index.d-CPSGt-W-.js';
import { PointData } from '../coordinate/PointData.js';
import { ObservablePoint } from '../coordinate/ObservablePoint.js';
import { a as Display, D as DisplayOptions } from '../app.d-DAOGknMY.js';
import '../coordinate/PointLike.js';
import '../index.d-CXdzLWZ3.js';

interface PictureOptions extends DisplayOptions {
    size?: PointData;
    slice?: PointData;
    sliceSize?: PointData;
    objectFit?: Properties['objectFit'];
    rounded?: number;
}
declare class Picture extends Display {
    private options?;
    constructor(maybeImage: HTMLImageElement | string, options?: PictureOptions | undefined);
    private image;
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
    set objectFit(value: Property.ObjectFit | undefined);
    get objectFit(): Property.ObjectFit | undefined;
    private _rounded;
    set rounded(value: number);
    _onUpdate(_point?: ObservablePoint | undefined): void;
    get rounded(): number;
    private _ready;
    private _onImageComplete;
    get _shouldUpdate(): boolean;
    private get _isSlice();
    protected _render(ctx: CanvasRenderingContext2D): void;
    transformWidth: number;
    transformHeight: number;
    updateTransformBounds(): void;
}

export { Picture };
