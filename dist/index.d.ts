import { TextMultilineStyle, TextBaseStyle, LineBaseStyle, ILinePosition, LineStyle, RectStyle, ArcStyle, ArcToStyle } from './types.js';
import 'csstype';

declare class Painter {
    private checkCtx;
    private setColor;
    private setLineStyle;
    private getAnchor;
    private setRotate;
    text(text: string, x: number, y: number, style?: Partial<TextMultilineStyle>): number | undefined;
    private createCanvasFontString;
    private formatValue;
    canvas?: HTMLCanvasElement;
    ctx?: CanvasRenderingContext2D;
    defaultTextStyle: TextBaseStyle;
    defaultLineBaseStyle: LineBaseStyle;
    constructor();
    init(width: number, height: number): this;
    line(lines: ILinePosition, style?: LineStyle): void;
    rect(x: number, y: number, w: number, h: number, style?: RectStyle): void;
    arc(x: number, y: number, radius: number, style?: ArcStyle): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number, style?: ArcToStyle): void;
}

export { Painter, Painter as default };
