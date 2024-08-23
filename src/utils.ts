import type { TextStyle } from './style/text-style'

/**
 *  输出 px
 * @param val
 */
export function formatWithPx(val: string | number) {
  return typeof val === 'string' ? val : `${val}px`
}

/**
 * 创造 [CSS-font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 字符串
 * 由于 canvas 绘制的差异性部分属性不生效故舍弃
 */
export function createCanvasFontString({
  fontFamily,
  fontSize,
  fontStyle = 'normal',
  fontWeight = 'normal',
}: TextStyle): string {
  const _fontSize = typeof fontSize === 'string' ? fontSize : `${fontSize}px`
  return `${fontStyle} ${fontWeight} ${_fontSize} ${fontFamily}`
}

/**
 * 计算最小值
 * @param numbers
 */
export function calcMin(numbers: number[]) {
  return numbers.reduce((a, b) => {
    return a < b ? a : b
  })
}
/**
 * 计算最大值
 * @param numbers
 */
export function calcMax(numbers: number[]) {
  return numbers.reduce((a, b) => {
    return a > b ? a : b
  })
}
/**
 * 计算差异
 * @param numbers
 */
export function calcDiff(numbers: number[]) {
  return calcMax(numbers) - calcMin(numbers)
}

/**
 * 确保输入值在 min 和 max 之间，若超出边界则返回边界
 * @param input
 * @param min
 * @param max
 */
export function ensureBetween(input: number, min: number = 0, max: number = 1) {
  return input <= min ? min : input >= max ? max : input
}

/**
 * 创建代理
 * @param value
 * @param cb
 */
export function createProxy<T extends object>(value: T, cb?: (property: string, newValue: any) => void): T {
  return new Proxy<T>(value, {
    set: (target, property, newValue) => {
      target[property as keyof T] = newValue
      cb?.(property as string, newValue)
      return true
    },
  })
}

export enum ENV {
  WX = 'WX',
  WEB = 'WEB',
  UNKNOWN = 'UNKNOWN',
}

export function getEnv() {
  if (typeof wx !== 'undefined')
    return ENV.WX
  if (typeof window !== 'undefined' && typeof window.document !== 'undefined')
    return ENV.WEB

  return ENV.UNKNOWN
}
