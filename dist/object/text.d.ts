import { TextStyle } from '../style/text-style.js';
import { Display } from './display.js';
import '../index.d-BUkyRbYY.js';
import '../style/base-style.js';
import '../position/point.js';

declare class Text extends Display {
    style: TextStyle;
    constructor(text: string, x: number, y: number);
    private _text;
    set text(text: string);
    get text(): string;
    _render(ctx: CanvasRenderingContext2D): void;
}

export { Text };
