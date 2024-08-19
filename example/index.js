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
  // shadow: {
  //   color: '#d11257',
  //   x: 5,
  //   y: 5,
  //   blur: 5,
  // },
  // filter: 'blur(4px)',
  text: '这是文字',
  style: {
    stroke: '#10d74d',
    strokeWeight: 1,
    fontSize: 99,
    fill: '#ffff',
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

// pane.addBinding(text.style, 'fontSize', {
//   min: 12,
//   max: 80,
// })
// pane.addBinding(text.style, 'letterSpacing', {
//   min: 0,
//   max: 80,
// })
// pane.addBinding(text, 'text')
// pane.addBinding(text.style, 'fill', {
//   color: {
//   },
// })
// pane.addBinding(text.style, 'stroke', {
//   color: {
//   },
// })
// pane.addBinding(text.style, 'strokeWeight', {
//   min: 0,
//   max: 10,
// })
// pane.addBinding(text.style, 'textAlign', {
//   options: {
//     right: 'right',
//     left: 'left',
//     center: 'center',
//   },
// })
// if (text.style.shadow) {
//   /**
//    *
//    * @param {Partial<import('../dist/style/base-style').IBaseStyle>['shadow']} obj
//    */
//   function setShadow(obj = {}) {
//     text.style.shadow = {
//       ...(text.style.shadow || {}),
//       ...obj,
//     }
//   }
//   pane.addBinding(text.style.shadow, 'color', {
//     label: 'shadow.fill',
//   }).on('change', (e) => {
//     setShadow({ color: e.value })
//   })

//   pane.addBinding(text.style.shadow, 'blur', {
//     label: 'shadow.blur',
//     min: -50,
//     max: 50,
//   }).on('change', (e) => {
//     setShadow({ blur: e.value })
//   })
//   pane.addBinding(text.style.shadow, 'x', {
//     label: 'shadow.x',
//     min: -200,
//     max: 200,
//   }).on('change', (e) => {
//     setShadow({ x: e.value })
//   })
//   pane.addBinding(text.style.shadow, 'y', {
//     label: 'shadow.x',
//     min: -200,
//     max: 200,
//   }).on('change', (e) => {
//     setShadow({ y: e.value })
//   })

//   // pane.addBinding(text.style.shadow, 'y', {
//   //   min: -50,
//   //   max: 50,
//   // }).on('change', (e) => {
//   //   text.style.shadow = {
//   //     ...(text.style.shadow || {}),
//   //     x: e.value,
//   //   }
//   // })
// }

// pane.addBinding(text.style, 'filter', {
//   options: {
//     'none': 'none',
//     'blur(10px)': 'blur(10px)',
//     'Multiple': 'contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)',
//   },
// })

// pane.addBinding(text, 'scale', {
//   min: 1,
//   max: 2,
// })

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
