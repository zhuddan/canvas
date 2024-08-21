import { E as EventEmitter } from '../index.d-CXdzLWZ3.js';

type InputColor = CanvasRenderingContext2D['strokeStyle'];
type LineDash = Iterable<number>;
interface StrokeInput {
    color?: InputColor;
    width?: number;
    dash?: LineDash;
}
interface IAbstractStyle {
    /**
     * 填充颜色
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)
     */
    fill: CanvasRenderingContext2D['fillStyle'] | null;
    /**
     * 描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
     */
    stroke: StrokeInput;
    /**
     * [CanvasRenderingContext2D.filter](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)
     */
    filter: CanvasRenderingContext2D['filter'];
}
declare abstract class AbstractStyle extends EventEmitter<{
    update: [];
    updateBounds: [];
}> implements IAbstractStyle {
    private _fill;
    set fill(value: string);
    get fill(): string;
    private _stroke;
    set stroke(value: StrokeInput | InputColor);
    get stroke(): StrokeInput;
    private _filter;
    set filter(value: string);
    get filter(): string;
    update(): void;
    updateBounds(): void;
    render(ctx: CanvasRenderingContext2D): this;
    destroy(): void;
}

export { AbstractStyle, type IAbstractStyle, type InputColor, type LineDash, type StrokeInput };
