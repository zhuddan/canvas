// @ts-check
import { Pane } from 'tweakpane'
import throttle from 'lodash-es/throttle.js'
import { App, Text } from '../../dist/index'

const pane = new Pane()

const refresh = throttle(() => {
  pane.refresh()
})
const app = new App({
  // dpr: false,
  onUpdate() {
    refresh()
  },
})
const text = new Text({
  // stroke: '#10d74d',
  // fill: '#1e8cd7',
  // fontSize: 64,
  // strokeWeight: 2,
  // fontWeight: 600,
  // textAlign: 'left',

  // filter: 'blur(4px)',
  position: {
    x: 200,
    y: 100,
  },
  scale: 1.5,
  text: '这是文字这是文字这是文字这是文字这是文字',
  visible: true,
  // pivot: {
  //   x: 82,
  //   y: 18,
  // },
  anchor: 0,
  style: {
    wordWrapWidth: 100,
    wordWrap: true,
    stroke: '#10d74d',
    strokeWeight: 1,
    fontSize: 40,
    fill: '#ffff',
    shadow: {
      color: '#d11257',
      x: 5,
      y: 5,
      blur: 5,
    },
  },
})
app.add(text)
document.body.appendChild(app.canvas)
/**
 *
 * @param {number} min
 * @param {number} max
 */
const range = (min, max) => ({ min, max })
const color = () => ({ color: {} })
function options(/** @type {any[]} */...args) {
  const options = /** @type {Record<string,any>} */ ({})
  for (let index = 0; index < args.length; index++) {
    const key = args[index]
    options[`${key}`] = key
  }
  return {
    options,
  }
}
pane.addBinding(text, 'text')
pane.addBinding(text.style, 'textAlign', options('left', 'right', 'center'))
pane.addBinding(text, 'x', range(0, app.width))
pane.addBinding(text, 'y', range(0, app.height))
pane.addBinding(text.style, 'fontSize', range(12, 80))
pane.addBinding(text.style, 'letterSpacing', range(0, 20))
pane.addBinding(text.style, 'fill', color())
pane.addBinding(text.style, 'stroke', color())
pane.addBinding(text.style, 'strokeWeight', range(0, 10))
pane.addBinding(text.style, 'shadow')
pane.addBinding(text.style.shadow, 'color', { label: 'shadow.fill' })
pane.addBinding(text.style.shadow, 'blur', { label: 'shadow.blur' })
pane.addBinding(text.style, 'wordWrapWidth', range(0, 1000))
pane.addBinding(text.style, 'filter', {
  options: {
    'none': 'none',
    'blur(10px)': 'blur(10px)',
    'Multiple': 'contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)',
  },
})
pane.addBinding(text, 'scale', range(-2, 2))
pane.addBinding(text, 'skew', range(-2, 2))
pane.addBinding(text, 'anchor', range(0, 1))
pane.addBinding(text, 'pivot', range(-100, 100))
pane.addBinding(text, 'anchor', range(0, 1))
pane.addBinding(text, 'rotation', range(-Math.PI * 2, Math.PI * 2))

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

function s() {
  requestAnimationFrame(s)
  // text.rotation += 0.01
}
requestAnimationFrame(s)
