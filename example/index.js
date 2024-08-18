// @ts-check
import { Pane } from 'tweakpane'
import throttle from 'lodash-es/throttle.js'
import { App, Text } from '../dist/index'

const pane = new Pane()

const refresh = throttle(() => {
  pane.refresh()
})
const app = new App({
  onUpdate() {
    refresh()
  },
})
const text = new Text('这是文字', 150, 150, {
  stroke: '#cd2121',
  fill: '#1e8cd7',
  fontSize: 32,
  strokeWeight: 1,
  fontWeight: 600,
  textAlign: 'left',
})

app.add(text)
document.body.appendChild(app.canvas)
pane.addBinding(text, 'x', {
  min: 0,
  max: app.width,
})
pane.addBinding(text, 'y', {
  min: 0,
  max: app.height,
})
pane.addBinding(text.style, 'fontSize', {
  min: 12,
  max: 80,
})
pane.addBinding(text.style, 'letterSpacing', {
  min: 0,
  max: 80,
})
pane.addBinding(text, 'text')
pane.addBinding(text.style, 'fill', {
  color: {
  },
})
pane.addBinding(text.style, 'stroke', {
  color: {
  },
})
pane.addBinding(text.style, 'strokeWeight', {
  min: 0,
  max: 10,
})
pane.addBinding(text.style, 'textAlign', {
  options: {
    right: 'right',
    left: 'left',
    center: 'center',
  },
})

// const tween = new Tween(text)
//   .to({ x: 300, y: 200 }, 1500)
//   .easing(Easing.Quadratic.InOut)
//   .start()
//   .onComplete(() => {

//   })

// function animate(/** @type {number}  */ time) {
//   // tween.update(time)
//   requestAnimationFrame(animate)
// }

// requestAnimationFrame(animate)
