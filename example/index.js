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
const text = new Text({
  // stroke: '#10d74d',
  // fill: '#1e8cd7',
  // fontSize: 64,
  // strokeWeight: 2,
  // fontWeight: 600,
  // textAlign: 'left',

  // filter: 'blur(4px)',
  text: '这是文字',
  visible: true,
  style: {
    stroke: '#10d74d',
    strokeWeight: 1,
    fontSize: 45,
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
pane.addBinding(text.style, 'filter', {
  options: {
    'none': 'none',
    'blur(10px)': 'blur(10px)',
    'Multiple': 'contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)',
  },
})

pane.addBinding(text, 'scale', {
  min: 1,
  max: 2,
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
