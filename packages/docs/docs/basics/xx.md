```ts
import { App, Shape } from '@zd~/canvas'

const app = new App({
  backgroundColor: '#60a5fab0',
  resizeTo: window,
})

document.body.appendChild(app.canvas)

const shape1 = new Shape({
  x: app.width / 3 * 1,
  y: app.height / 2,
  anchor: 0.5
}).beginPath().rect(0, 0, 60, 60).fill('#FFCC80')

const shape2 = new Shape({
  x: app.width / 3 * 2,
  y: app.height / 2,
  anchor: 0,
}).beginPath().rect(0, 0, 60, 60).fill('#FFCC80')

app.add(shape1, shape2)

let d = 1
app.ticker.add(() => {
  shape1.rotation += 0.005

  if (shape1.scale.x < 0.5 || shape1.scale.x > 2) {
    d *= -1
  }
  shape1.scale.x += 0.005 * d
  shape1.scale.y += 0.005 * d

  shape2.rotation += 0.005
  if (shape2.scale.x < 0.5 || shape2.scale.x > 2) {
    d *= -1
  }
  shape2.scale.x += 0.005 * d
  shape2.scale.y += 0.005 * d
})
```
