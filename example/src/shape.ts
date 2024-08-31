import { App, Shape } from '@zd~/canvas'
import { Pane } from 'tweakpane'
import { addDisplayOptionsBinding } from './displayOptions'

const pane = new Pane({
  container: document.getElementById('pane-container')!,
})

const app = new App({
  backgroundColor: '#60a5fab0',
  resizeTo: window,
})

document.body.appendChild(app.canvas)

const shape = new Shape({
  shadow: {
    color: '#000000',
  },
})
shape.beginPath()
shape.rect(0, 0, 100, 100)
shape.fill('red')
app.add(shape)
addDisplayOptionsBinding(pane, shape)
