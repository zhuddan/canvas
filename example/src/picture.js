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
  // objectFit: 'cover',
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
    'none',
    'fill',
  ))

  folderPicture.addBinding(p, 'rounded', range(0, 600))
})

/**
 * @type {Map<string, HTMLImageElement>}
 */
const map = new Map()

let t = 5
app.on('render', async () => {
  while (t-- > 0) {
    const base64 = app.toDataURL()
    downloadBase64File(base64, 'scene.jpg')
    if (!map.has(base64)) {
      const img = new Image()
      img.src = base64
      map.set(base64, img)
    }
    else {
      console.log(base64 === map.get(base64)?.src)
    }
  }
})

/**
 *
 * @param {*} base64
 * @param {*} download
 */
function downloadBase64File(base64, download) {
  const link = document.createElement('a')
  link.href = base64
  link.download = download
  link.click()
}
