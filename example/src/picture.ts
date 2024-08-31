import { App, Picture } from '@zd~/canvas'
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

const picture = new Picture({
  image: '/cat.jpg',
  x: 20,
  y: 20,
  size: {
    x: 300,
    y: 200,
  },
})

app.add(picture)
addDisplayOptionsBinding(pane, picture)

const pictureFolder = pane.addFolder({
  title: 'picture',
})

pictureFolder.addBinding(picture, 'size', {
  label: 'size',
  x: {
    min: 0,
    max: 300 * 2,
  },
  y: {
    min: 0,
    max: 200 * 2,
  },
})

picture.on('updateBounds', () => {
  pane.refresh()
})
