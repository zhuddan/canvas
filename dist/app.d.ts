import { Display } from './object/display.js';
import './position/point.js';
import './style/base-style.js';

interface AppConstructorOptions {
    width?: number;
    height?: number;
    dpr?: boolean;
    onUpdate?: () => void;
}
declare class App {
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
    add(object: Display): void;
    remove(object: Display): void;
    private update;
}

export { App };
