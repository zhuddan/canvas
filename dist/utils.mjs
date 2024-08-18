
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
function formatValue(val) {
    return typeof val === 'string' ? val : `${val}px`;
}
/**
 * 创造 [CSS-font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 字符串
 * 由于 canvas 绘制的差异性部分属性不生效故舍弃
 */
function createCanvasFontString({ fontFamily, fontSize, fontStyle = 'normal', fontWeight = 'normal', }) {
    const _fontSize = typeof fontSize === 'string' ? fontSize : `${fontSize}px`;
    return `${fontStyle} ${fontWeight} ${_fontSize} ${fontFamily}`;
}
function calcMin(numbers) {
    return numbers.reduce((a, b) => {
        return a < b ? a : b;
    });
}
function calcMax(numbers) {
    return numbers.reduce((a, b) => {
        return a > b ? a : b;
    });
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
// export function toPoint(point: PointObject | number): PointObject {
//   let x = 0
//   let y = 0
//   if (typeof point !== 'undefined') {
//     if (typeof point === 'object') {
//       x = point.x
//       y = point.y
//     }
//     else {
//       x = y = point
//     }
//   }
//   return { x, y }
// }
// // 计算变换后的矩形实际大小
// export function getTransformedRectSize(
//   transform: [number, number, number, number, number, number],
//   bounds: Bounds,
// ) {
//   const [scaleX, skewX, skewY, scaleY, translateX, translateY] = transform
//   // const [1, 0.5, 0.5, 1, 0, 0] = transform
//   const x = bounds.start.x
//   const y = bounds.start.y
//   const width = bounds.width
//   const height = bounds.height
//   // 矩形四个角的坐标
//   const corners: IPoint[] = [
//     { x, y },
//     { x: x + width, y },
//     { x: x + width, y: y + height },
//     { x, y: y + height },
//   ]
//   // 变换后的角点坐标
//   const transformedCorners = corners.map(({ x: cx, y: cy }) => {
//     return {
//       x: scaleX * cx + skewY * cy + translateX,
//       y: skewX * cx + scaleY * cy + translateY,
//     }
//   })
//   // 计算变换后的矩形宽度和高度
//   const xValues = transformedCorners.map(corner => corner.x)
//   const yValues = transformedCorners.map(corner => corner.y)
//   const minX = Math.min(...xValues)
//   const maxX = Math.max(...xValues)
//   const minY = Math.min(...yValues)
//   const maxY = Math.max(...yValues)
//   return {
//     width: maxX - minX,
//     height: maxY - minY,
//   }
// }
// export function calculateEllipseRadii(rx: number, ry: number, a: number, b: number, c: number, d: number): { newRx: number, newRy: number } {
//   const newRx = Math.sqrt((a * rx) ** 2 + (b * ry) ** 2)
//   const newRy = Math.sqrt((c * rx) ** 2 + (d * ry) ** 2)
//   return { newRx, newRy }
// }
// const originalRadius = 50
// const transformMatrix = [1, 0.8, 0.2, 1] as const
// const { newRx, newRy } = calculateEllipseRadii(originalRadius, originalRadius, ...transformMatrix)
// console.log(`Transformed ellipse radii: Rx = ${newRx}, Ry = ${newRy}`)

export { calcCenter, calcDiff, calcMax, calcMin, createCanvasFontString, ensureBetween, formatValue };
