// @ts-check
import { Pane } from 'tweakpane'
import throttle from 'lodash-es/throttle.js'
import { App, Picture } from '../../dist/index'
import { createBaseFolder, options, range } from './common.js'

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
const img = document.createElement('img')
img.src = './scene.jpg'
const p = new Picture('http://localhost:13000/example/scene.jpg', {
  objectFit: 'cover',
  size: {
    x: 600,
    y: 600,
  },
})
app.add(p)

document.body.appendChild(app.canvas)

p.once('ready', () => {
  createBaseFolder(pane, p, app)
  const folderPicture = pane.addFolder({
    title: 'Picture',
  })
  folderPicture.addBinding(p, 'size')
  folderPicture.addBinding(p, 'slice', {
    x: range(0, img.width),
    y: range(0, img.height),
  })
  folderPicture.addBinding(p, 'sliceSize', {
    x: range(0, img.width),
    y: range(0, img.height),
  })

  folderPicture.addBinding(p, 'objectFit', options(
    'contain',
    'cover',
    'fill',
  ))

  folderPicture.addBinding(p, 'rounded', range(0, 600))
})
