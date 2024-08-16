// @ts-check
import { App, Text } from '../dist/index.mjs'

const app = new App({

})

const text = new Text('哈哈', 100, 100)
app.add(text)
document.body.appendChild(app.canvas)

const start = performance.now()
let _last = performance.now()

function update() {
  const now = performance.now()
  if (text.position.x > 200) {
    const text2 = new Text(`共耗时${now - start}`, 100, 550)
    app.add(text2)
    app.update()
    return
  }
  text.position.x += 10
  app.update()
  console.log(now - _last)
  _last = now
  window.requestAnimationFrame(update)
}

update()

// function test() {
//   window.requestAnimationFrame(test)
// }

// test()
