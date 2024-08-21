import { TextStyleOptions, TextStyle } from '../style/text-style.js';
import { D as DisplayOptions, a as Display } from '../app.d-DAOGknMY.js';
import '../index.d-CPSGt-W-.js';
import '../style/abstract-style.js';
import '../index.d-CXdzLWZ3.js';
import '../coordinate/ObservablePoint.js';
import '../coordinate/PointData.js';
import '../coordinate/PointLike.js';

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
    updateTransformBounds(): void;
    transformWidth: number;
    transformHeight: number;
}

export { Text, type TextOptions };
