import type { DisplayOptions } from './display';
import { Display } from './display';
export interface GeometryOptions extends DisplayOptions {
}
export interface PathInstruction {
    action: 'moveTo' | 'lineTo' | 'quadraticCurveTo' | 'bezierCurveTo' | 'arc' | 'closePath' | 'addPath' | 'arcTo' | 'ellipse' | 'rect' | 'roundRect' | 'arcToSvg' | 'poly' | 'circle' | 'regularPoly' | 'roundPoly' | 'roundShape' | 'filletRect' | 'chamferRect';
    data: any[];
}
export declare class Geometry extends Display {
    get _shouldUpdate(): boolean;
    protected _render(_ctx: CanvasRenderingContext2D): void;
    width: number;
    height: number;
    _updateBounds(): void;
    constructor();
}
