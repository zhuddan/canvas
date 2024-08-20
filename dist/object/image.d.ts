import type { Properties } from 'csstype';
import type { PointData } from '../coordinate/PointData';
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
    constructor(img: HTMLImageElement, options?: PictureOptions);
    get _shouldUpdate(): boolean;
    protected _render(ctx: CanvasRenderingContext2D): void;
    transformWidth: number;
    transformHeight: number;
    _updateTransformBounds(): void;
}
export {};
