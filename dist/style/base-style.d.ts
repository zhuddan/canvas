import EventEmitter from 'eventemitter3';
export interface IBaseStyle {
    /**
     * 填充颜色
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)
     */
    fill: CanvasRenderingContext2D['fillStyle'];
    /**
     * 描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
     */
    stroke: CanvasRenderingContext2D['strokeStyle'] | null;
    /**
     * 描边宽度? 默认为1
     */
    strokeWeight: number;
    /**
     * 透明度<br/>此透明度为 [CanvasRenderingContext2D.globalAlpha](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
     *
     * 你也可以设置fill或者stroke为rgba实现透明效果
     *
     * 或者你喜欢16进制颜色也可以使用[这种方法](https://blog.csdn.net/ezconn/article/details/90052114)设置透明度
     */
    alpha: number;
    shadow?: {
        /**
         * [CanvasRenderingContext2D.shadowOffsetX](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
         */
        x?: number;
        /**
         * [CanvasRenderingContext2D.shadowOffsetY](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
         */
        y?: number;
        /**
         * [CanvasRenderingContext2D.shadowBlur](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
         */
        blur?: number;
        /**
         * [CanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
         */
        color?: string;
    };
    /**
     * [CanvasRenderingContext2D.filter](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)
     */
    filter: CanvasRenderingContext2D['filter'];
}
export declare abstract class BaseStyle extends EventEmitter<{
    update: [];
}> implements IBaseStyle {
    constructor();
    private _alpha;
    set alpha(value: number);
    get alpha(): number;
    private _strokeWeight;
    set strokeWeight(value: number);
    get strokeWeight(): number;
    private _fill;
    set fill(value: string);
    get fill(): string;
    private _stroke;
    set stroke(value: string | CanvasGradient | CanvasPattern | null);
    get stroke(): string | CanvasGradient | CanvasPattern | null;
    static defaultShadow: IBaseStyle['shadow'];
    private _shadow;
    set shadow(value: {
        /**
         * [CanvasRenderingContext2D.shadowOffsetX](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
         */
        x?: number;
        /**
         * [CanvasRenderingContext2D.shadowOffsetY](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
         */
        y?: number;
        /**
         * [CanvasRenderingContext2D.shadowBlur](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
         */
        blur?: number;
        /**
         * [CanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
         */
        color?: string;
    } | undefined);
    get shadow(): {
        /**
         * [CanvasRenderingContext2D.shadowOffsetX](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
         */
        x?: number;
        /**
         * [CanvasRenderingContext2D.shadowOffsetY](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
         */
        y?: number;
        /**
         * [CanvasRenderingContext2D.shadowBlur](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
         */
        blur?: number;
        /**
         * [CanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
         */
        color?: string;
    } | undefined;
    private _filter;
    set filter(value: string);
    get filter(): string;
    update(): void;
    render(ctx: CanvasRenderingContext2D): this;
}
