import { IFont } from './types.js';
import 'csstype';

declare function formatValue(val: string | number): string;
/**
 * 创造 [CSS-font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 字符串
 * 由于 canvas 绘制的差异性部分属性不生效故舍弃
 */
declare function createCanvasFontString({ fontFamily, fontSize, fontStyle, fontWeight, }: IFont): string;
/**
 * 计算差异
 * @param numbers
 */
declare function calcDiff(numbers: number[]): number;
/**
 * 确保输入值在 min 和 max 之间，若超出边界则返回边界
 * @param input
 * @param min
 * @param max
 */
declare function ensureBetween(input: number, min?: number, max?: number): number;

export { calcDiff, createCanvasFontString, ensureBetween, formatValue };
