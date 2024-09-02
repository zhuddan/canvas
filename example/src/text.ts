import { App, Text } from '@zd~/canvas'
import { Pane } from 'tweakpane'
import { addRenderableOptionsBinding } from './renderable-options'

const pane = new Pane({
  container: document.getElementById('pane-container')!,
})

const app = new App({
  backgroundColor: '#60a5fab0',
  resizeTo: window,
})

document.body.appendChild(app.canvas)

const text = new Text({
  shadow: {
    color: '#000000',
    blur: 10,
    x: 10,
    y: 10,
  },
  text: '一切有为法，如梦幻泡影，如露亦如电，应作如是观',
  anchor: {
    x: 0.5,
    y: 0.5,
  },
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  style: {
    fill: '#fcfcfc',
    stroke: {
      color: '#000000',
      width: 1,
    },
    // 文本
    fontSize: 50,
    textAlign: 'left',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontStretch: 'condensed',
    fontVariantCaps: 'normal',
    letterSpacing: 0,
    wordSpacing: 0,
    wordWrap: false,
    lineHeight: 50, // 默认为字体大小
    wordWrapWidth: 120,
  },
})

app.add(text)
app.ticker.add(() => {

  // text.position.set(
  //   window.innerWidth / 2,
  //   window.innerHeight / 2,
  // )
})
addRenderableOptionsBinding(pane, text)
const textFolder = pane.addFolder({
  title: 'text',
})
textFolder.addBinding(text, 'text')

textFolder.addBinding(text.style, 'fill')

textFolder.addBinding(text.style.stroke, 'color', {
  label: 'stroke color',
})
textFolder.addBinding(text.style.stroke, 'width', {
  label: 'stroke width',
  min: 0,
  max: 100,
})

textFolder.addBinding(text.style, 'fontSize', {
  min: 12,
  max: 80,
})

textFolder.addBinding(text.style, 'textAlign', {
  options: {
    left: 'left',
    right: 'right',
    center: 'center',
  },
})

textFolder.addBinding(text.style, 'fontFamily', {
  options: {
    'Arial': 'Arial',
    'Times New Roman': 'Times New Roman',
    'Courier New': 'Courier New',
    '宋体': '宋体',
    '微软雅黑': '微软雅黑',
    '黑体': '黑体',
    '楷体': '楷体',
    '仿宋': '仿宋',
  },
})

textFolder.addBinding(text.style, 'fontStyle', {
  options: {
    normal: 'normal',
    italic: 'italic',
    oblique: 'oblique',
  },
})
textFolder.addBinding(text.style, 'fontWeight')
textFolder.addBinding(text.style, 'fontStretch')
textFolder.addBinding(text.style, 'fontVariantCaps')
textFolder.addBinding(text.style, 'letterSpacing', {
  min: 0,
})
textFolder.addBinding(text.style, 'wordSpacing', {
  min: 0,
  max: 20,
})

textFolder.addBinding(text.style, 'wordWrap')
textFolder.addBinding(text.style, 'wordWrapWidth', {
  min: 0,
  max: 500,
})
textFolder.addBinding(text.style, 'lineHeight', {
  min: 12,
  max: 80,
})
