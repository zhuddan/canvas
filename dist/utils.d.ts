import { TextStyle } from './style/text-style.js';
import './index.d-BUkyRbYY.js';
import './style/base-style.js';

declare function formatValue(val: string | number): string;
/**
 * 创造 [CSS-font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 字符串
 * 由于 canvas 绘制的差异性部分属性不生效故舍弃
 */
declare function createCanvasFontString({ fontFamily, fontSize, fontStyle, fontWeight, }: TextStyle): string;
declare function calcMin(numbers: number[]): number;
declare function calcMax(numbers: number[]): number;
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
declare function calcCenter(num1: number, num2: number): number;
declare function createProxy<T extends object>(value: T, cb?: (property: string, newValue: any) => void): T;

export { calcCenter, calcDiff, calcMax, calcMin, createCanvasFontString, createProxy, ensureBetween, formatValue };
