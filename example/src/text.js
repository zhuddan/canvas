// @ts-check
import { Pane } from 'tweakpane'
import throttle from 'lodash-es/throttle.js'
import { App, Text } from '../../dist/index'
import { createBaseFolder, createBaseStyleFolder, options, range } from './common.js'

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
  position: {
    x: 200,
    y: 100,
  },
  scale: 1.5,
  text: '这是文字这是文字这是文字这是文字这是文字',
  visible: true,
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

createBaseFolder(pane, text, app)
const folderText = pane.addFolder({
  title: 'text',
})
folderText.addBinding(text, 'text')
createBaseStyleFolder(pane, text)
const textStyle = pane.addFolder({
  title: 'text.style',
})
textStyle.addBinding(text.style, 'fontFamily')
textStyle.addBinding(text.style, 'fontSize', range(12, 80))
textStyle.addBinding(text.style, 'fontStyle')
textStyle.addBinding(text.style, 'fontWeight')
textStyle.addBinding(text.style, 'fontStretch')
textStyle.addBinding(text.style, 'fontVariantCaps')
textStyle.addBinding(text.style, 'letterSpacing', range(0, 20))
textStyle.addBinding(text.style, 'wordSpacing', range(0, 20))
textStyle.addBinding(text.style, 'textAlign', options('left', 'right', 'center'))
textStyle.addBinding(text.style, 'lineHeight', range(12, 80))
textStyle.addBinding(text.style, 'wordWrap')
textStyle.addBinding(text.style, 'wordWrapWidth', range(0, 500))
