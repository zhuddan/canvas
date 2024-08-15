import { MaybePoint } from './point.js';
import { TextBaseStyle, LineBaseStyle, TextMultilineStyle, ILinePosition, LineStyle, RectStyle, ArcStyle, ArcToStyle, BezierStyle, ImageStyle } from './types.js';
import 'csstype';

declare class Painter {
    canvas?: HTMLCanvasElement;
    ctx?: CanvasRenderingContext2D;
    defaultTextStyle: TextBaseStyle;
    defaultLineBaseStyle: LineBaseStyle;
    private readonly _defaultTransform;
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
    private setTransform;
    private getAnchor;
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
    bezier(start: MaybePoint, cp1: MaybePoint, cp2: MaybePoint, end: MaybePoint, style?: BezierStyle): void;
    image(maybeImage: HTMLImageElement | string, x: number, y: number, style?: ImageStyle): void;
    /**
     *
     * @param callback
     * @param save
     */
    _create<T extends (ctx: CanvasRenderingContext2D) => any>(callback: T, save?: boolean): ReturnType<T>;
}

declare const canvas: HTMLCanvasElement | undefined;

export { Painter, canvas, Painter as default };
