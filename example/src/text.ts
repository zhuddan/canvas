import { App, Text } from '@zd~/canvas'
import { Pane } from 'tweakpane'

const pane = new Pane({
  container: document.getElementById('pane-container')!,
})

const app = new App({
  backgroundColor: '#60a5fab0',
  resizeTo: window,
})

document.body.appendChild(app.canvas)

const text = new Text({
  text: 'Hello World @zd~/canvas',
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

    fontFamily: 'Arial',
    fontSize: 32,

    fontStyle: 'normal',
    fontWeight: 900,

    wordWrap: true,
    wordWrapWidth: 200,
  },
})

app.add(text)
app.ticker.add(() => {
  text.position.set(
    window.innerWidth / 2,
    window.innerHeight / 2,
  )
})

pane.addBinding(text, 'text')

pane.addBinding(text.style, 'fill')

pane.addBinding(text.style.stroke, 'color', {
  label: 'stroke color',
})
pane.addBinding(text.style.stroke, 'width', {
  label: 'stroke width',
  min: 0,
  max: 100,
})

pane.addBinding(text.style, 'fontSize', {
  min: 12,
  max: 80,
})

pane.addBinding(text.style, 'fontFamily', {
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

pane.addBinding(text.style, 'fontStyle', {
  options: {
    normal: 'normal',
    italic: 'italic',
    oblique: 'oblique',
  },
})
pane.addBinding(text.style, 'fontWeight')
pane.addBinding(text.style, 'fontStretch')
pane.addBinding(text.style, 'fontVariantCaps')
pane.addBinding(text.style, 'letterSpacing', {
  min: 0,
})
pane.addBinding(text.style, 'wordSpacing', {
  min: 0,
  max: 20,
})
pane.addBinding(text.style, 'textAlign', {
  options: {
    left: 'left',
    right: 'right',
    center: 'center',
  },
})
pane.addBinding(text.style, 'lineHeight', {
  min: 12,
  max: 80,
})
pane.addBinding(text.style, 'wordWrap')
pane.addBinding(text.style, 'wordWrapWidth', {
  min: 0,
  max: 500,
})
