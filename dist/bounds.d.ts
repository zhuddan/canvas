import { PointObject } from './point.js';

declare class Bounds {
    min: PointObject;
    max: PointObject;
    constructor(point1: [number, number], point2: [number, number]);
    get width(): number;
    get height(): number;
}

export { Bounds };
