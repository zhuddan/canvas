import type { IAbstractStyle, StrokeInput, StrokeInputColor } from '../style/abstract-style';
import type { FunctionKeys } from '../types';
import type { DisplayOptions } from './display';
import { Display } from './display';
type CanvasRenderingContext2DMethods = FunctionKeys<CanvasRenderingContext2D>;
interface PathData<T extends CanvasRenderingContext2DMethods> {
    action: T;
    args: any[];
}
type PathInstruction = PathData<Methods>;
export interface ShapeOptions extends DisplayOptions {
}
type Methods = 'moveTo' | 'lineTo' | 'beginPath' | 'fill' | 'stroke';
interface IShape {
    moveTo: (...args: Parameters<CanvasRenderingContext2D['moveTo']>) => Shape;
    lineTo: (...args: Parameters<CanvasRenderingContext2D['lineTo']>) => Shape;
    beginPath: () => Shape;
    stroke: (value: StrokeInput | StrokeInputColor) => Shape;
    fill: (color: IAbstractStyle['fill']) => Shape;
}
export declare class Shape extends Display implements IShape {
    constructor(options?: Partial<ShapeOptions>);
    lineTo(x: number, y: number): this;
    moveTo(x: number, y: number): this;
    beginPath(): Shape;
    pathInstruction: PathInstruction[];
    get _shouldUpdate(): boolean;
    protected _render(_ctx: CanvasRenderingContext2D): void;
    width: number;
    height: number;
    _updateBounds(): void;
    private _strokeWeight;
    set strokeWeight(value: number);
    get strokeWeight(): number;
    fill(color: IAbstractStyle['fill']): this;
    stroke(value: StrokeInput | StrokeInputColor): this;
    private _filter;
    set filter(value: string);
    get filter(): string;
}
export {};
