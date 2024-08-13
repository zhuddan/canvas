import { TextBaseStyle, TextMultilineStyle } from './types.js';
import 'csstype';

declare class Painter {
    defaultTextStyle: Partial<TextBaseStyle>;
    text(text: string, x: number, y: number, style?: Partial<TextMultilineStyle>): number | undefined;
    private createCanvasFontString;
    private formatValue;
    canvas?: HTMLCanvasElement;
    ctx?: CanvasRenderingContext2D;
    constructor(defaultTextStyle?: Partial<TextBaseStyle>);
    init(width: number, height: number): void;
    private checkCtx;
}

export { Painter, Painter as default };
