function formatValue(val) {
    return typeof val === 'string' ? val : `${val}px`;
}
/**
 * 创造 [CSS-font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 字符串
 * 由于 canvas 绘制的差异性部分属性不生效故舍弃
 */
function createCanvasFontString({ fontFamily, fontSize, fontStyle = 'normal', fontWeight = 'normal', }) {
    fontSize = typeof fontSize === 'string' ? fontSize : `${fontSize}px`;
    return `${fontStyle} ${fontWeight} ${fontSize} ${fontFamily}`;
}
function calcMin(numbers) {
    let min = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element < min) {
            min = element;
        }
    }
    return min;
}
function calcMax(numbers) {
    let max = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
/**
 * 计算差异
 * @param numbers
 */
function calcDiff(numbers) {
    return calcMax(numbers) - calcMin(numbers);
}
/**
 * 确保输入值在 min 和 max 之间，若超出边界则返回边界
 * @param input
 * @param min
 * @param max
 */
function ensureBetween(input, min = 0, max = 1) {
    return input <= min ? min : input >= max ? max : input;
}
function calcCenter(num1, num2) {
    return (num1 + num2) / 2;
}

export { calcCenter, calcDiff, calcMax, calcMin, createCanvasFontString, ensureBetween, formatValue };
