import { App, Text } from '../../utils/canvas/dist/index.esm.js'

Page({
  data: {

  },
  onLoad() {
    const app = new App({
      canvas: 'my-canvas',
    })

    const t = new Text({
      text: 'hello world',
      x: 0,
      y: 0,
    })

    app.add(t)
  },
})
