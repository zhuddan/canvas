import { TextBaseStyle, LineBaseStyle, RectStyle } from './types.js';
import 'csstype';

declare class Painter {
    canvas?: HTMLCanvasElement;
    ctx?: CanvasRenderingContext2D;
    defaultTextStyle: TextBaseStyle;
    defaultLineBaseStyle: LineBaseStyle;
    constructor();
    /**
     * 检查init函数是否执行
     */
    private _checkCtx;
    /**
     * 设置颜色 fillStyle strokeStyle
     */
    private setColor;
    /**
     * 设置线段样式
     */
    private setLineStyle;
    private _isSetTransform;
    private setTransform;
    /**
     * 初始化
     * @param width
     * @param height
     */
    init(width: number, height: number): this;
    /**
     * 绘制矩形(圆角请设置 style.radii )
     * @param x
     * @param y
     * @param w
     * @param h
     * @param style
     */
    rect(x: number, y: number, w: number, h: number, style?: RectStyle): void;
    /**
     *
     * @param callback
     * @param save
     */
    private _create;
}

declare const canvas: HTMLCanvasElement | undefined;

export { Painter, canvas, Painter as default };
