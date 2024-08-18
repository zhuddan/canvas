import type { Properties, Property } from 'csstype';
import type { Display } from '../object/display';
import { BaseStyle } from './base-style';
export interface IFont {
    /**
     * @description 字体
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)
     */
    fontFamily: Properties['fontFamily'];
    /**
     * @description 字体大小 当值为 number 时单位为px
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)
     */
    fontSize: Properties['fontSize'] | (number & {});
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
     * 文本时文本的对齐方式
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign)
     */
    textAlign: CanvasTextAlign;
}
export declare class TextStyle extends BaseStyle implements Required<IFont> {
    constructor(display?: Display);
    readonly textBaseline = "top";
    private _fontSize;
    set fontSize(value: Property.FontSize<0 | (string & {})> | (number & {}) | undefined);
    get fontSize(): Property.FontSize<0 | (string & {})> | (number & {}) | undefined;
    private _fontFamily;
    set fontFamily(value: string);
    get fontFamily(): string;
    private _fontStyle;
    set fontStyle(value: string);
    get fontStyle(): string;
    private _fontWeight;
    set fontWeight(value: string);
    get fontWeight(): string;
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
}
