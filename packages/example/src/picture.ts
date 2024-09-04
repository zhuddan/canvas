import { App, Picture } from '@zd~/canvas'
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

const picture = new Picture({
  image: '/cat.jpg',
  x: 20,
  y: 20,
  size: {
    x: 300,
    y: 200,
  },
  slice: {
    x: 0,
    y: 0,
  },
  sliceSize: {
    x: 300,
    y: 200,
  },
})

app.add(picture)
addRenderableOptionsBinding(pane, picture)

const pictureFolder = pane.addFolder({
  title: 'picture',
})

pictureFolder.addBinding(picture, 'size', {
  label: 'size',
  x: { min: 0, max: 300 * 2 },
  y: { min: 0, max: 200 * 2 },
})

pictureFolder.addBinding(picture, 'slice', {
  label: 'slice',
  x: { min: 0, max: 300 },
  y: { min: 0, max: 200 },
})
pictureFolder.addBinding(picture, 'sliceSize', {
  label: 'sliceSize',
  x: { min: 0, max: 300 },
  y: { min: 0, max: 200 },
})

pictureFolder.addBinding(picture, 'objectFit', {
  options: [
    'contain',
    'cover',
    'none',
    'fill',
  ],
})

pictureFolder.addBinding(picture, 'rounded', {
  label: 'rounded',
  min: 0,
  max: 300,
})

picture.on('updateBounds', () => {
  pane.refresh()
})
