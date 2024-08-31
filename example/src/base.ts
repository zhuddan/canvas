import { App, Text } from '@zd~/canvas'

const app = new App({
  backgroundColor: '#60a5fa',
})

document.getElementById('container')!.appendChild(app.canvas)

const text = new Text({
  text: 'Hello World @zd~/canvas',
  style: {
    fontSize: 32,
    fontWeight: 'bold',
    fill: 'white',
  },
})

app.add(text)
