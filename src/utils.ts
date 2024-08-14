import type { IFont } from './types'

export function formatValue(val: string | number) {
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
}: IFont): string {
  fontSize = typeof fontSize === 'string' ? fontSize : `${fontSize}px`
  return `${fontStyle} ${fontWeight} ${fontSize} ${fontFamily}`
}

function calcMin(numbers: number[]) {
  let min = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (element < min) {
      min = element
    }
  }
  return min
}

function calcMax(numbers: number[]) {
  let max = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (element > max) {
      max = element
    }
  }
  return max
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
