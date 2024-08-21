// @ts-check

import { Shape, Text } from '../../dist/index'

const grid = new Shape()
grid.strokeStyle = {
  color: '#cccccccc',
  dash: [2, 2],
}
// grid.fillStyle = '#cccccc'
// ctx.textBaseline = 'top'
// ctx.font = '10px 黑体'
const w = window.screen.width
const h = window.screen.height
/**
 * @type {Text[]}
 */
const texts = []
for (let row = 0; row < Math.ceil((w + 1) / 100); row++) {
  for (let col = 0; col < Math.ceil((h + 1) / 100); col++) {
    grid.beginPath()
    const t = new Text({
      text: `${row * 100},${col * 100}`,
      position: {
        x: row * 100,
        y: col * 100,
      },
      // anchor: 0.5,
      style: {
        fill: '#cccccccc',
        fontSize: 10,
      },
    })
    texts.push(t)
    // debugLine.fillText(`${row * 100},${col * 100}`, row * 100, col * 100)
    if (row === 0 || col === 0) {
      continue
    }
    grid.moveTo((row * 100 - 100), col * 100)
    grid.lineTo(row * 100, col * 100)
    grid.lineTo(row * 100, (col * 100 - 100))
    grid.stroke()
  }
}

/**
 *
 * @param {import('../../dist/index').App} app
 */
export function debug(app) {
  app.add(grid)
  texts.forEach(t => app.add(t))

  setTimeout(() => {
    console.log(texts[0].transformWidth)
  }, 100)
}
