import { D as DisplayOptions, a as Display } from '../app.d-B6dmCDYo.js';
import '../coordinate/ObservablePoint.js';
import '../coordinate/PointData.js';
import '../coordinate/PointLike.js';

interface GeometryOptions extends DisplayOptions {
}
interface PathInstruction {
    action: 'moveTo' | 'lineTo' | 'quadraticCurveTo' | 'bezierCurveTo' | 'arc' | 'closePath' | 'addPath' | 'arcTo' | 'ellipse' | 'rect' | 'roundRect' | 'arcToSvg' | 'poly' | 'circle' | 'regularPoly' | 'roundPoly' | 'roundShape' | 'filletRect' | 'chamferRect';
    data: any[];
}
declare class Geometry extends Display {
    get _shouldUpdate(): boolean;
    protected _render(_ctx: CanvasRenderingContext2D): void;
    width: number;
    height: number;
    _updateBounds(): void;
    constructor();
}

export { Geometry, type GeometryOptions, type PathInstruction };
