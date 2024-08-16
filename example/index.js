// @ts-check
import { Easing, Tween } from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@25.0.0/dist/tween.esm.js'
import { App, Text } from '../dist/index.mjs'

const app = new App({

})

const text = new Text('哈哈', 150, 150)
app.add(text)
document.body.appendChild(app.canvas)

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

const btn = document.getElementById('button')

const input = /** @type {HTMLInputElement} */(document.getElementById('input'))

btn?.addEventListener('click', () => {
  console.log(input.value)
  if (input) {
    text.text = input.value
  }
})
requestAnimationFrame(animate)
