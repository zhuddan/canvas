// @ts-check
import { Pane } from 'tweakpane'
import throttle from 'lodash-es/throttle.js'
import { App, Shape } from '../../dist/index'
import { createBaseFolder } from './common.js'
import { debug } from './_debug.js'

const pane = new Pane()

const refresh = throttle(() => {
  pane.refresh()
})
const app = new App({
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
  // dpr: false,
  onUpdate() {
    refresh()
  },
})
debug(app)
const shape = new Shape()
shape.beginPath()
shape.moveTo(50, 50)
  .lineTo(50, 100)
  .lineTo(100, 50)
  .closePath()
  .stroke('red')
  .fill('yellow')

shape.beginPath()
shape.rect(75, 75, 50, 50)
  .stroke('#000')

shape.beginPath()
shape.roundRect(90, 90, 100, 100, 20)
  .stroke({
    color: 'red',
    dash: [1, 4],
  })

shape.beginPath()

shape.strokeStyle = 'pink'
shape.moveTo(200, 20)
  .arcTo(200, 130, 50, 20, 40)
  .stroke({
    width: 12,
  })

app.add(shape)

document.body.appendChild(app.canvas)
createBaseFolder(pane, shape, app)
