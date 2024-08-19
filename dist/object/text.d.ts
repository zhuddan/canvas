import type { TextStyleOptions } from '../style/text-style';
import { TextStyle } from '../style/text-style';
import type { DisplayOptions } from './display';
import { Display } from './display';
export interface TextOptions extends DisplayOptions {
    text: string;
    style?: Partial<TextStyleOptions> | TextStyle;
}
export declare class Text extends Display {
    constructor(options: TextOptions);
    private _style;
    set style(value: Partial<TextStyleOptions> | TextStyle);
    get style(): TextStyle;
    private _text;
    set text(text: string);
    get text(): string;
    render(ctx: CanvasRenderingContext2D): void;
}
