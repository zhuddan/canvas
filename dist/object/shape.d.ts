import type { IBaseStyle } from '../style/base-style';
import type { FunctionKeys } from '../types';
import type { DisplayOptions } from './display';
import { Display } from './display';
export interface ShapeOptions extends DisplayOptions, IBaseStyle {
}
export interface PathData<T extends FunctionKeys<CanvasRenderingContext2D>> {
    action: T;
    args: Parameters<CanvasRenderingContext2D[T]>;
}
type PathInstruction = PathData<'moveTo'> | PathData<'lineTo'>;
export declare class Shape extends Display {
    pathInstruction: PathInstruction[];
    get _shouldUpdate(): boolean;
    protected _render(_ctx: CanvasRenderingContext2D): void;
    width: number;
    height: number;
    _updateBounds(): void;
    constructor();
}
export {};
