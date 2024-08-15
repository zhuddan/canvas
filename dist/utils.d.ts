import { IFont, IPoint } from './types.js';
import { Bounds } from './index.js';
import 'csstype';

declare function formatValue(val: string | number): string;
/**
 * 创造 [CSS-font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 字符串
 * 由于 canvas 绘制的差异性部分属性不生效故舍弃
 */
declare function createCanvasFontString({ fontFamily, fontSize, fontStyle, fontWeight, }: IFont): string;
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
declare function toPoint(point: IPoint | number): IPoint;
declare function getTransformedRectSize(transform: [number, number, number, number, number, number], bounds: Bounds): {
    width: number;
    height: number;
};
declare function calculateEllipseRadii(rx: number, ry: number, a: number, b: number, c: number, d: number): {
    newRx: number;
    newRy: number;
};

export { calcCenter, calcDiff, calcMax, calcMin, calculateEllipseRadii, createCanvasFontString, ensureBetween, formatValue, getTransformedRectSize, toPoint };
