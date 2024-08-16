// @ts-check
import { Easing, Tween } from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@25.0.0/dist/tween.esm.js'

import { Pane } from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.4/dist/tweakpane.min.js'
import throttle from 'https://cdn.jsdelivr.net/npm/lodash-es/throttle.js'
import { App, Text } from '../dist/index.mjs'

const text = new Text('哈哈', 150, 150)
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
pane.addBinding(text, 'text')

const tween = new Tween(text)
  .to({ x: 300, y: 200 }, 1500)
  .easing(Easing.Quadratic.InOut)
  .start()
  .onComplete(() => {
    setTimeout(() => {
      text.x = 0
    }, 100)
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
