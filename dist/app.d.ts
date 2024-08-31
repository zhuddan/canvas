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
    /**
     *  是否开启dpr
     */
    dpr?: boolean | number;
    /**
     *  `画布元素`或`画布id(微信小程序或者uni-app)`或者`document.querySelector可以接受的字符串`
     */
    canvas?: HTMLCanvasElement | string;
    /**
     * backgroundColor
     */
    backgroundColor?: string;
    /**
     * 画布resize到的元素 仅 web 支持
     */
    resizeTo?: HTMLElement | Window | string;
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
    _width: number;
    _height: number;
    removeResizeEvent?: () => void;
    constructor(options?: AppOptions);
    onReady(fn: () => void): void;
    private validateAppOptions;
    private initDpr;
    private initCanvas;
    private initCanvasRenderingContext2D;
    initResizeEvent(): void;
    private get shouldResize();
    resize(): void;
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
