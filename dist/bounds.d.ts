import { IPoint } from './types.js';
import 'csstype';

declare class Bounds {
    start: IPoint;
    end: IPoint;
    constructor(point1: [number, number], point2: [number, number]);
    get width(): number;
    get height(): number;
}

export { Bounds };
