// @ts-check
import { Pane } from 'tweakpane'
import throttle from 'lodash-es/throttle.js'
import { App, Shape } from '../../dist/index'
import { createBaseFolder } from './common.js'

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
const shape = new Shape()
shape.beginPath()
shape.moveTo(50, 50)
shape.lineTo(50, 100)
shape.fill('red')
app.add(shape)
document.body.appendChild(app.canvas)
createBaseFolder(pane, shape, app)
// const folderText = pane.addFolder({
//   title: 'text',
// })
// folderText.addBinding(text, 'text')
// createBaseStyleFolder(pane, text)
// const textStyle = pane.addFolder({
//   title: 'text.style',
// })
// textStyle.addBinding(text.style, 'fontFamily')
// textStyle.addBinding(text.style, 'fontSize', range(12, 80))
// textStyle.addBinding(text.style, 'fontStyle')
// textStyle.addBinding(text.style, 'fontWeight')
// textStyle.addBinding(text.style, 'fontStretch')
// textStyle.addBinding(text.style, 'fontVariantCaps')
// textStyle.addBinding(text.style, 'letterSpacing', range(0, 20))
// textStyle.addBinding(text.style, 'wordSpacing', range(0, 20))
// textStyle.addBinding(text.style, 'textAlign', options('left', 'right', 'center'))
// textStyle.addBinding(text.style, 'lineHeight', range(12, 80))
// textStyle.addBinding(text.style, 'wordWrap')
// textStyle.addBinding(text.style, 'wordWrapWidth', range(0, 500))
