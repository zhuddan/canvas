import EventEmitter from 'eventemitter3';
import type { Display } from './object/display';
import { ENV } from './utils';
export interface AppOptions {
    width?: number;
    height?: number;
    dpr?: boolean | number;
    onUpdate?: () => void;
    createCanvas?: () => HTMLCanvasElement;
}
export declare class App extends EventEmitter<{
    render: [];
}> {
    canvas: HTMLCanvasElement;
    private ctx;
    dpr: number;
    width: number;
    height: number;
    onUpdate: () => void;
    ticker: Ticker;
    constructor({ width, height, dpr, createCanvas, onUpdate, }?: AppOptions);
    private beforeRender;
    private afterRender;
    children: Display[];
    add(...objects: Display[]): void;
    remove(...objects: Display[]): void;
    private update;
    toDataURL(type?: string, quality?: any): string;
    toDataURLAsync(type?: string, quality?: any): Promise<string>;
    onContext(fn: (ctx: CanvasRenderingContext2D) => any): void;
}
declare class Ticker {
    canvas: HTMLCanvasElement;
    requestAnimationFrame: typeof requestAnimationFrame;
    cancelAnimationFrame: typeof cancelAnimationFrame;
    myReq: number;
    private isRunning;
    handler: ((time: number) => void)[];
    protected _env: ENV;
    constructor(canvas: HTMLCanvasElement, autoStart?: boolean);
    add(fn: (time: number) => void): void;
    removeAll(): void;
    remove(fn: (time: number) => void): void;
    start(): void;
    stop(): void;
    update(): void;
}
export {};
