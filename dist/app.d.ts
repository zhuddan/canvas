import type { Display } from './object/display';
interface AppConstructorOptions {
    width?: number;
    height?: number;
    dpr?: boolean;
}
export declare class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    dpr: number;
    width: number;
    height: number;
    constructor({ width, height, dpr, }?: AppConstructorOptions);
    private beforeRender;
    private afterRender;
    private debug;
    children: Display[];
    add(object: Display): void;
    private update;
}
export {};
