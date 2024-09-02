import type { ShapeOptions } from '@zd~/canvas'
import { App, Shape } from '@zd~/canvas'
import { Pane } from 'tweakpane'
import { addRenderableOptionsBinding } from './renderable-options'

const pane = new Pane({
  container: document.getElementById('pane-container')!,
})

const app = new App({
  backgroundColor: '#60a5fab0',
  resizeTo: window,
})

document.body.appendChild(app.canvas)

const shape = new Shape({
  shadow: {
    color: '#60a',
  },
  position: {
    x: 50,
    y: 50,
  },
})
shape.beginPath()
shape.roundRect(0, 0, 150, 150, 10)
shape.fill('#66BB6A')
shape.stroke({
  color: '#fff',
  width: 1,
})
app.add(shape)
addRenderableOptionsBinding(pane, shape)
shape.once('render', () => {
  console.log('render')
})

const shape2 = new Shape({
  position: {
    x: 350,
    y: 200,
  },
})
app.add(shape2)

shape2.beginPath()
  .moveTo(0, 0)
  .lineTo(150, 0)
  .lineTo(220, 200)
  .lineTo(255, 80)
  .closePath()
  .stroke({
    color: '#4DB6AC',
    width: 5,
  })
  .fill('#D4E157')

const bezierCurveLine = new Shape({
  x: 250,
  y: 50,
  anchor: { x: 0.5, y: 0.5 },
})
const start = { x: 0, y: 0 }
const cp1 = { x: 200, y: 30 }
const cp2 = { x: 150, y: 80 }
const end = { x: 300, y: 80 }
bezierCurveLine
  .beginPath()

  .moveTo(start.x, start.y)
  .lineCap('round')
  .bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y)
  .stroke({
    color: '#4E342E',
    width: 20,
  })
app.add(bezierCurveLine)

function createClockShape(args: ShapeOptions = {}) {
  return new Shape({
    x: 200,
    y: 400,
    anchor: { x: 0, y: 0.5 },
    ...args,
  })
}
const clock = createClockShape({
  anchor: { x: 0.5, y: 0.5 },
})
app.add(clock)
clock.beginPath()
  .arc(0, 0, 150)
  .fill('#FFCC80')
const hourLine = createClockShape()
const minLine = createClockShape()
const secLine = createClockShape()
hourLine.beginPath().roundRect(0, 0, 80, 10, 100).fill('#E85C0D')
minLine.beginPath().roundRect(0, 0, 100, 4, 100).fill('#0D7C66')
secLine.beginPath().roundRect(0, 0, 128, 2, 100).fill('#3A1078')
app.add(hourLine, minLine, secLine)
const bar = createClockShape()
bar.beginPath()
  .arc(0, 0, 15)
  .fill('#2E7D32')
  .addTo(app)

let n = 60
while (n--) {
  const dot = new Shape({
    x: 200 + Math.cos(Math.PI * 2 / 60 * n) * 140,
    y: 400 + Math.sin(Math.PI * 2 / 60 * n) * 140,
    anchor: 0.1,
  })
  if (n % 5 === 0) {
    dot.beginPath().arc(0, 0, 4).fill('#fff')
  }
  else {
    dot.beginPath().arc(0, 0, 1).fill('#fff')
  }
  app.add(dot)
}

app.ticker.add(() => {
  const { hourAngleInRadians, minuteAngleInRadians, secondAngleInRadians } = calculateClockAnglesInRadians()
  hourLine.rotation = hourAngleInRadians
  minLine.rotation = minuteAngleInRadians
  secLine.rotation = secondAngleInRadians
})

function calculateClockAnglesInRadians() {
  // 获取当前时间
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  // 计算秒针的弧度
  const secondAngleInDegrees = seconds * 6 // 6度/秒
  const secondAngleInRadians = secondAngleInDegrees * (Math.PI / 180)

  // 计算分针的弧度
  const minuteAngleInDegrees = minutes * 6 + seconds * 0.1 // 6度/分 + 0.1度/秒
  const minuteAngleInRadians = minuteAngleInDegrees * (Math.PI / 180)

  // 计算时针的弧度
  const hourAngleInDegrees = (hours % 12) * 30 + minutes * 0.5 // 30度/小时 + 0.5度/分
  const hourAngleInRadians = hourAngleInDegrees * (Math.PI / 180)

  return {
    hourAngleInRadians: hourAngleInRadians - Math.PI / 2,
    minuteAngleInRadians: minuteAngleInRadians - Math.PI / 2,
    secondAngleInRadians: secondAngleInRadians - Math.PI / 2,
  }
}
