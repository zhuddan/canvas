import EventEmitter from 'eventemitter3';
import type { Display } from './object/display';
import { ENV } from './utils';
export interface AppOptions {
    /**
     *  画布宽度
     */
    width?: number;
    /**
     *  画布高度
     */
    height?: number;
    dpr?: boolean | number;
    canvas?: HTMLCanvasElement | string;
}
export declare class App extends EventEmitter<{
    render: [];
    ready: [];
}> {
    private options;
    private ctx;
    private _ready;
    protected _env: ENV;
    canvas: HTMLCanvasElement;
    ticker: Ticker;
    dpr: number;
    width: number;
    height: number;
    constructor(options?: AppOptions);
    onReady(fn: AnyFunction): void;
    private validateAppOptions;
    private initDpr;
    private initCanvas;
    private initCanvasSize;
    private initTicker;
    private beforeRender;
    private afterRender;
    children: Display[];
    add(...objects: Display[]): void;
    remove(...objects: Display[]): void;
    private update;
    toDataURL(type?: string, quality?: any): string;
    toDataURLAsync(type?: string, quality?: any): Promise<string>;
    wrapperRender(fn: (ctx: CanvasRenderingContext2D) => any): void;
}
declare class Ticker {
    protected autoStart: boolean;
    requestAnimationFrame?: typeof requestAnimationFrame;
    cancelAnimationFrame?: typeof cancelAnimationFrame;
    myReq: number;
    private isRunning;
    handler: ((time: number) => void)[];
    protected _env: ENV;
    constructor(autoStart?: boolean);
    init(canvas: HTMLCanvasElement, autoStart: boolean): void;
    add(fn: (time: number) => void): void;
    removeAll(): void;
    remove(fn: (time: number) => void): void;
    start(): void;
    stop(): void;
    update(): void;
}
export {};
