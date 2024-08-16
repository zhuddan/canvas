import type { Properties, Property } from 'csstype';
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
    fontStyle?: Properties['fontStyle'];
    /**
     * @description 字体的粗细程度
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)
     */
    fontWeight?: Properties['fontWeight'];
}
export declare class TextStyle extends BaseStyle implements IFont {
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
}
