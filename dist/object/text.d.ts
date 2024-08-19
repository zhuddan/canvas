import { D as DisplayOptions, a as Display } from '../app.d-B6dmCDYo.js';
import { TextStyleOptions, TextStyle } from '../style/text-style.js';
import '../coordinate/ObservablePoint.js';
import '../coordinate/PointData.js';
import '../coordinate/PointLike.js';
import '../index.d-BUkyRbYY.js';
import '../style/base-style.js';

interface TextOptions extends DisplayOptions {
    text: string;
    style?: Partial<TextStyleOptions> | TextStyle;
}
declare class Text extends Display {
    constructor(options: TextOptions);
    private _style;
    set style(style: Partial<TextStyleOptions> | TextStyle);
    get style(): TextStyle;
    private _text;
    set text(text: string);
    get text(): string;
    get _shouldUpdate(): boolean;
    getSplitText(ctx: CanvasRenderingContext2D): string[];
    _render(ctx: CanvasRenderingContext2D): void;
    _updateBounds(): void;
    width: number;
    height: number;
}

export { Text, type TextOptions };
