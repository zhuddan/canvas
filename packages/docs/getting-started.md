下载依赖

```shell
# npm
    npm i zd~@canvas

# yarn
    yarn add zd~@canvas

# pnpm
    pnpm add zd~@canvas
```

开发

```ts
import { App, Text } from '@zd~/canvas'

const app = new App({
  backgroundColor: '#60a5fa',
  resizeTo: window,
})

document.body.appendChild(app.canvas)

const text = new Text({
  text: 'Hello World',
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
```
