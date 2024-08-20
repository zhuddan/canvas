// @ts-check
import { Pane } from 'tweakpane'
import throttle from 'lodash-es/throttle.js'
import { App, Picture } from '../../dist/index'
import { createBaseFolder, range } from './common.js'

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
img.onload = () => {
  const p = new Picture(img, {

  })
  app.add(p)
  document.body.appendChild(app.canvas)
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
}
