import type { IAbstractStyle, InputColor, StrokeInput } from '../style/abstract-style';
import type { DisplayOptions } from './display';
import { Display } from './display';
interface _ShapeOptions extends DisplayOptions {
}
interface IShape {
    beginPath: () => Shape;
    closePath: () => Shape;
    moveTo: (...args: Parameters<CanvasRenderingContext2D['moveTo']>) => Shape;
    lineTo: (...args: Parameters<CanvasRenderingContext2D['lineTo']>) => Shape;
    stroke: (value?: StrokeInput | InputColor) => Shape;
    fill: (color?: InputColor) => Shape;
    rect: (...args: Parameters<CanvasRenderingContext2D['rect']>) => Shape;
    roundRect: (...args: Parameters<CanvasRenderingContext2D['roundRect']>) => Shape;
    arc: (...args: Parameters<CanvasRenderingContext2D['arc']>) => Shape;
    arcTo: (...args: Parameters<CanvasRenderingContext2D['arcTo']>) => Shape;
    bezierCurveTo: (...args: Parameters<CanvasRenderingContext2D['bezierCurveTo']>) => Shape;
    ellipse: (...args: Parameters<CanvasRenderingContext2D['ellipse']>) => Shape;
    fillRect: (...args: Parameters<CanvasRect['fillRect']>) => Shape;
    strokeRect: (...args: Parameters<CanvasRect['strokeRect']>) => Shape;
    lineCap: (...args: [CanvasRenderingContext2D['lineCap']]) => void;
    lineJoin: (...args: [CanvasRenderingContext2D['lineJoin']]) => void;
}
export type ShapeOptions = Partial<_ShapeOptions>;
export declare class Shape extends Display implements IShape {
    constructor(options?: ShapeOptions);
    private addPath;
    beginPath(): Shape;
    closePath(): this;
    lineCap(cap: 'butt' | 'round' | 'square'): this;
    lineJoin(join: 'bevel' | 'miter' | 'round'): this;
    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    rect(x: number, y: number, w: number, h: number): this;
    roundRect(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | Iterable<number | DOMPointInit>): this;
    arc(x: number, y: number, radius: number, startAngle?: number, endAngle?: number, counterclockwise?: boolean): this;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): this;
    fillRect(x: number, y: number, w: number, h: number): this;
    strokeRect(x: number, y: number, w: number, h: number): this;
    private pathInstruction;
    get _shouldUpdate(): boolean;
    protected _render(ctx: CanvasRenderingContext2D): void;
    private _strokeStyle;
    set strokeStyle(value: StrokeInput | InputColor);
    get strokeStyle(): StrokeInput;
    protected transformWidth: number;
    protected transformHeight: number;
    protected updateTransformBounds(): void;
    private _fillStyle;
    set fillStyle(value: string | CanvasGradient | CanvasPattern | null);
    get fillStyle(): string | CanvasGradient | CanvasPattern | null;
    fill(color?: IAbstractStyle['fill']): this;
    stroke(value?: StrokeInput | InputColor): this;
    private _filter;
    set filter(value: string);
    get filter(): string;
}
export {};
