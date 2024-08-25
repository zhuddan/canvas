import type { PointData } from './coordinate/PointData';
import type { TextStyle } from './style/text-style';
/**
 *  输出 px
 * @param val
 */
export declare function formatWithPx(val: string | number): string;
/**
 * 创造 [CSS-font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 字符串
 * 由于 canvas 绘制的差异性部分属性不生效故舍弃
 */
export declare function createCanvasFontString({ fontFamily, fontSize, fontStyle, fontWeight, }: TextStyle): string;
/**
 * 计算最小值
 * @param numbers
 */
export declare function calcMin(numbers: number[]): number;
/**
 * 计算最大值
 * @param numbers
 */
export declare function calcMax(numbers: number[]): number;
/**
 * 计算差异
 * @param numbers
 */
export declare function calcDiff(numbers: number[]): number;
/**
 * 确保输入值在 min 和 max 之间，若超出边界则返回边界
 * @param input
 * @param min
 * @param max
 */
export declare function ensureBetween(input: number, min?: number, max?: number): number;
/**
 * 创建代理
 * @param value
 * @param cb
 */
export declare function createProxy<T extends object>(value: T, cb?: (property: string, newValue: any) => void): T;
export declare enum ENV {
    WX = "WX",
    WEB = "WEB",
    UNKNOWN = "UNKNOWN",
    UNI_APP = "UNI_APP"
}
export declare function getEnv(): ENV;
/**
 * Draws a rectangle with rounded corners compatible with different environments.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {PointData} position - The position of the rectangle.
 * @param {PointData} size - The size of the rectangle.
 * @param {number} [rounded] - The radius of the rounded corners.
 *
 * @return {void}
 */
export declare function drawRectCompatible(ctx: CanvasRenderingContext2D, position: PointData, size: PointData, rounded?: number): void;
