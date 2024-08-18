import type { TextStyleOptions } from '../style/text-style';
import { TextStyle } from '../style/text-style';
import { Display } from './display';
export declare class Text extends Display {
    style: TextStyle;
    constructor(text: string, x: number, y: number, style?: Partial<TextStyleOptions>);
    private _text;
    set text(text: string);
    get text(): string;
    _render(ctx: CanvasRenderingContext2D): void;
}
