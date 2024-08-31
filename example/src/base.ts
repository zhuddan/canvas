import { App, Text } from '@zd~/canvas'

const app = new App({
  backgroundColor: '#60a5fab0',
  resizeTo: window,
})

document.body.appendChild(app.canvas)

const text = new Text({
  text: 'Hello World @zd~/canvas',
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  anchor: {
    x: 0.5,
    y: 0.5,
  },
  style: {
    fontSize: 32,
    fontWeight: 'bold',
    fill: 'white',
  },
})

app.add(text)

app.ticker.add(() => {
  text.rotation -= 0.01
})
