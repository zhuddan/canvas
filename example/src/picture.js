// @ts-check
import { Pane } from 'tweakpane'
import throttle from 'lodash-es/throttle.js'
import { App, Picture } from '../../dist/index'
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
const img = document.createElement('img')
img.src = './scene.jpg'
img.onload = () => {
  const text = new Picture(img, {

  })
  app.add(text)
  document.body.appendChild(app.canvas)
  createBaseFolder(pane, text, app)
}
