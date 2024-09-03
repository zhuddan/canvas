import type { Properties } from 'csstype';
import type { IAbstractStyle } from './abstract-style';
import { AbstractStyle } from './abstract-style';
export interface TextStyleOptions extends IAbstractStyle {
    /**
     * @description 字体大小 当值为 number 时单位为px
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)
     */
    fontSize: Properties['fontSize'] | (number & {});
    /**
     * 文本时文本的对齐方式
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign)
     */
    textAlign: CanvasTextAlign;
    /**
     * @description 字体
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)
     */
    fontFamily: Properties['fontFamily'];
    /**
     * @description 字体样式
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)
     */
    fontStyle: Properties['fontStyle'];
    /**
     * @description 字体的粗细程度
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)
     */
    fontWeight: Properties['fontWeight'];
    /**
     * 指定绘制文本时字体如何被扩展或压缩
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontStretch)
     */
    fontStretch: CanvasFontStretch;
    /**
     * 用于指定渲染文本的替代大写形式
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
     */
    fontVariantCaps: CanvasFontVariantCaps;
    /**
     * 用于指定绘制文本时字母之间的间距
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
     */
    letterSpacing: string | number;
    /**
     * 指定绘制文本时单词之间的间距
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
     */
    wordSpacing: string | number;
    /**
     * 是否开启换行
     */
    wordWrap: boolean;
    /**
     * 换行宽度
     */
    wordWrapWidth: number;
    /**
     * 用于指定文本的行高 仅当 `wordWrap` 为 `true` 时有效
     */
    lineHeight: number;
}
export declare class TextStyle extends AbstractStyle implements TextStyleOptions {
    static defaultTextStyle: TextStyleOptions;
    constructor(style?: Partial<TextStyleOptions>);
    reset(): void;
    protected readonly textBaseline = "top";
    private _fontSize;
    set fontSize(value: import("csstype").Property.FontSize<0 | (string & {})> | (number & {}) | undefined);
    get fontSize(): import("csstype").Property.FontSize<0 | (string & {})> | (number & {}) | undefined;
    private _fontFamily;
    set fontFamily(value: import("csstype").Property.FontFamily | undefined);
    get fontFamily(): import("csstype").Property.FontFamily | undefined;
    private _fontStyle;
    set fontStyle(value: import("csstype").Property.FontStyle | undefined);
    get fontStyle(): import("csstype").Property.FontStyle | undefined;
    private _fontWeight;
    set fontWeight(value: import("csstype").Property.FontWeight | undefined);
    get fontWeight(): import("csstype").Property.FontWeight | undefined;
    private _fontStretch;
    set fontStretch(value: CanvasFontStretch);
    get fontStretch(): CanvasFontStretch;
    private _fontVariantCaps;
    set fontVariantCaps(value: CanvasFontVariantCaps);
    get fontVariantCaps(): CanvasFontVariantCaps;
    private _letterSpacing;
    set letterSpacing(value: string | number);
    get letterSpacing(): string | number;
    private _wordSpacing;
    set wordSpacing(value: string | number);
    get wordSpacing(): string | number;
    private _textAlign;
    set textAlign(value: CanvasTextAlign);
    get textAlign(): CanvasTextAlign;
    private _lineHeight;
    set lineHeight(value: number);
    get lineHeight(): number;
    private _wordWrap;
    set wordWrap(value: boolean);
    get wordWrap(): boolean;
    private _wordWrapWidth;
    set wordWrapWidth(value: number);
    get wordWrapWidth(): number;
    clone(): TextStyle;
    render(ctx: CanvasRenderingContext2D): this;
}
