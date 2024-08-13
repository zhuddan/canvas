import { IColor, TextMultilineStyle, TextBaseStyle, LineStyle, ILinePosition } from './types.js';
import 'csstype';

declare class Painter {
    private checkCtx;
    setColor(_style: IColor): void;
    text(text: string, x: number, y: number, style?: Partial<TextMultilineStyle>): number | undefined;
    private createCanvasFontString;
    private formatValue;
    canvas?: HTMLCanvasElement;
    ctx?: CanvasRenderingContext2D;
    defaultTextStyle: TextBaseStyle;
    defaultLineStyle: LineStyle;
    constructor();
    init(width: number, height: number): this;
    line(lines: ILinePosition, style?: LineStyle): void;
}

export { Painter, Painter as default };
