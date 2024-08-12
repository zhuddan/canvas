interface TextBaseStyle {
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/font
     */
    font?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: 'normal' | 'bold' | number;
    textAlign?: 'left' | 'center' | 'right';
    color?: string;
    textBaseline?: CanvasTextBaseline;
}
interface TextMultilineStyle extends TextBaseStyle {
    lineHeight?: number;
    maxWidth?: number;
}
declare class Painter {
    private defaultTextStyle;
    canvas?: OffscreenCanvas | UniNamespace.OffscreenCanvas | WechatMiniprogram.OffscreenCanvas;
    ctx?: OffscreenCanvasRenderingContext2D;
    constructor(defaultTextStyle?: Omit<TextMultilineStyle, 'lineHeight' | 'maxWidth'>);
    init(width: number, height: number): void;
    private checkCtx;
    text(text: string, x: number, y: number, style?: TextMultilineStyle): void;
}

export { Painter, type TextBaseStyle, type TextMultilineStyle };
