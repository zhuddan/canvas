// @ts-check
import { Easing, Tween } from '@tweenjs/tween.js'
import { Pane } from 'tweakpane'
import throttle from 'lodash-es/throttle.js'
import { App, Text } from '../dist/index.mjs'

const text = new Text('这是文字', 150, 150)
const pane = new Pane()

const refresh = throttle(() => {
  pane.refresh()
})
const app = new App({
  onUpdate() {
    refresh()
  },
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
pane.addBinding(text.style, 'fill')

const tween = new Tween(text)
  .to({ x: 300, y: 200 }, 1500)
  .easing(Easing.Quadratic.InOut)
  .start()
  .onComplete(() => {

  })

/**
 *
 * @param {number} time
 */
function animate(time) {
  tween.update(time)
  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)
