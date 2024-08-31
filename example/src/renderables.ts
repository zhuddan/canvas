import { App, Picture, Shape, Text } from '@zd~/canvas'
import { Pane } from 'tweakpane'
import { createDefaultRenderableOptions } from './displayOptions'

const pane = new Pane({
  container: document.getElementById('pane-container')!,
})

const displayOptions = createDefaultRenderableOptions()

const app = new App({
  backgroundColor: '#60a5fab0',
  resizeTo: window,
})

document.body.appendChild(app.canvas)

const shape = new Shape({
  x: 20,
  y: 20,
  ...displayOptions,
})

shape.beginPath().rect(0, 0, 100, 100).stroke('red')

const text = new Text({
  text: 'Hello World @zd~/canvas',
  x: 20,
  y: 140,
  style: {
    fontSize: 32,
    fontWeight: 'bold',
    fill: 'white',
  },
  ...displayOptions,
})

const picture = new Picture({
  image: '/cat.jpg',
  x: 20,
  y: 200,
  ...displayOptions,
})

app.add(shape, text, picture)

const displayFolder = pane.addFolder({
  title: 'displayOptions',
})

displayFolder.addBinding(displayOptions, 'rotation', {
  min: -Math.PI * 2,
  max: Math.PI * 2,
}).on('change', ({ value }) => {
  value = value ?? 0
  text.rotation = value
  picture.rotation = value
  shape.rotation = value
})

displayFolder.addBinding(displayOptions, 'scale', {
  x: { min: -2, max: 2 },
  y: { min: -2, max: 2 },
}).on('change', ({ value }) => {
  value = value ?? 0
  text.scale = value
  picture.scale = value
  shape.scale = value
})

displayFolder.addBinding(displayOptions, 'anchor', {
  x: { min: 0, max: 1 },
  y: { min: 0, max: 1 },
}).on('change', ({ value }) => {
  value = value ?? 0
  text.anchor = value
  picture.anchor = value
  shape.anchor = value
})

displayFolder.addBinding(displayOptions, 'pivot', {
  x: { min: -100, max: 100 },
  y: { min: -100, max: 100 },
}).on('change', ({ value }) => {
  value = value ?? 0
  text.pivot = value
  picture.pivot = value
  shape.pivot = value
})

displayFolder.addBinding(displayOptions, 'skew', {
  x: { min: -1, max: 1 },
  y: { min: -1, max: 1 },
}).on('change', ({ value }) => {
  value = value ?? { x: 0, y: 0 }
  text.skew = value
  picture.skew = value
  shape.skew = value
})

displayFolder.addBinding(displayOptions, 'alpha', {
  min: 0,
  max: 1,
}).on('change', ({ value }) => {
  value = value ?? 0
  text.alpha = value
  picture.alpha = value
  shape.alpha = value
})

displayFolder.addBinding(displayOptions, 'shadow', {
  x: { min: -100, max: 100 },
  y: { min: -100, max: 100 },
  label: 'shadow',
}).on('change', ({ value }) => {
  if (value) {
    text.shadow.x = value.x
    picture.shadow.x = value.x
    shape.shadow.x = value.x
    text.shadow.y = value.y
    picture.shadow.y = value.y
    shape.shadow.y = value.y
  }
})

displayFolder.addBinding(displayOptions.shadow!, 'color', {
  label: 'shadow.color',
}).on('change', ({ value }) => {
  if (value) {
    text.shadow.color = value
    picture.shadow.color = value
    shape.shadow.color = value
  }
})

displayFolder.addBinding(displayOptions.shadow!, 'blur', {
  min: 0,
  max: 100,
}).on('change', ({ value }) => {
  if (value) {
    text.shadow.blur = value
  }
})

const shapeFolder = pane.addFolder({
  title: 'shape',
})

shapeFolder.addBinding(shape, 'visible').on('change', ({ value }) => {
  shape.visible = value
})

shapeFolder.addBinding(shape, 'position').on('change', ({ value }) => {
  shape.x = value.x
  shape.y = value.y
})

const textFolder = pane.addFolder({
  title: 'text',
})
textFolder.addBinding(text, 'visible').on('change', ({ value }) => {
  text.visible = value
})
textFolder.addBinding(text, 'position').on('change', ({ value }) => {
  text.x = value.x
  text.y = value.y
})

const pictureFolder = pane.addFolder({
  title: 'picture',
})
pictureFolder.addBinding(picture, 'visible').on('change', ({ value }) => {
  picture.visible = value
})
pictureFolder.addBinding(picture, 'position').on('change', ({ value }) => {
  picture.x = value.x
  picture.y = value.y
})
