// @ts-check
import { Easing, Group, Tween } from '@tweenjs/tween.js'
import { App, Picture } from '../../dist/index'

const app = new App({
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
  // dpr: false,
  onUpdate() {
  },
})
const img = document.createElement('img')
img.src = './scene.jpg'
const p = new Picture('http://localhost:13000/example/scene.jpg', {
  // objectFit: 'cover',
  size: {
    x: 300,
    y: 300,
  },
})
app.add(p)
document.body.appendChild(app.canvas)

const tween = new Tween(p)
  .to({ x: 300, y: 200, rounded: 1000, size: {
    x: 100,
    y: 100,
  } }, 2000)
  .delay(1000)
  .easing(Easing.Quadratic.InOut)

const tweenBack = new Tween(p)
  .to({ x: 0, y: 0, rounded: 0, size: {
    x: 300,
    y: 300,
  } }, 2000)
  .easing(Easing.Quadratic.InOut)

tweenBack.chain(tween).start()

const group = new Group(tween, tweenBack)
// .yoyo(true)
// .repeat(100) // 重复100次

/**
 *
 * @param {number} time
 */
function animate(time) {
  group.update(time)
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)
