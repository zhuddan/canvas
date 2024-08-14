import { TextBaseStyle, LineBaseStyle, TextMultilineStyle, ILinePosition, LineStyle, RectStyle, ArcStyle, ArcToStyle, IPoint, BezierStyle } from './types.js';
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
    /**
     * 设置旋转角度
     */
    private setRotate;
    private _isSetTransform;
    private setTransform;
    /**
     * 设置锚点
     */
    private createAnchor;
    /**
     * 初始化
     * @param width
     * @param height
     */
    init(width: number, height: number): this;
    /**
     * 绘制文本
     * @param text
     * @param x
     * @param y
     * @param style
     */
    text(text: string, x: number, y: number, style?: Partial<TextMultilineStyle>): number;
    /**
     * 绘制线段
     * 你也可以使用此方法绘制多边形
     * @param lines
     * @param style
     */
    line(lines: ILinePosition, style?: LineStyle): void;
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
     * 绘制圆弧
     * @param x
     * @param y
     * @param radius
     * @param style
     */
    arc(x: number, y: number, radius: number, style?: ArcStyle): void;
    /**
     * 参考[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/arcTo)
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param radius
     * @param style
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number, style?: ArcToStyle): void;
    /**
     * [绘制贝塞尔曲线](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
     */
    bezier(start: IPoint, cp1: IPoint, cp2: IPoint, end: IPoint, style?: BezierStyle): void;
    image(): string;
    /**
     *
     * @param callback
     * @param save
     */
    private _create;
}

export { Painter, Painter as default };
