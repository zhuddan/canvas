import type { Display } from './object/display';
import { DisplayGroup } from './object/display';
interface AppConstructorOptions {
    width?: number;
    height?: number;
    dpr?: boolean;
    onUpdate?: () => void;
}
export declare class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    dpr: number;
    width: number;
    height: number;
    onUpdate: () => void;
    constructor({ width, height, dpr, onUpdate, }?: AppConstructorOptions);
    private beforeRender;
    private afterRender;
    private debug;
    children: Display[];
    add(object: Display | DisplayGroup): void;
    remove(object: Display | DisplayGroup): void;
    private update;
    onContext(fn: (ctx: CanvasRenderingContext2D) => any): void;
}
export {};
