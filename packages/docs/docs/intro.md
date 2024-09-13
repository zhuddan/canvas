---
sidebar_position: 1
---

<div className="note">
  > Some notable things in a block quote!
</div>

<!-- import CodeSandboxEmbed from '../src/components/codesandbox'

<CodeSandboxEmbed id="demo-1-wng5v3" /> -->

<!-- import Sandpack from '@site/src/components/SandpackEditor';

# React 计数器示例2

<Sandpack>

```js
import { useState } from 'react'
// export default function Counter() {
//   const [count, setCount] = useState(0)
//   function handleClick() {
//     setCount(count + 1)
//   }
//   return (
//     <button onClick={handleClick}>
//       You pressed me
//       {' '}
//       {count}
//       {' '}
//       times
//     </button>
//   )
// }
console.log('hello world222')
```

</Sandpack> -->

import CustomPlayground from '@site/src/components/CustomPlayground';

# @zd~/canvas 示例

<CustomPlayground>

```js
import { App, Text } from '@zd~/canvas'

const app = new App({
  backgroundColor: '#60a5fab0',
  resizeTo: window,
})

document.body.appendChild(app.canvas)

const text = new Text({
  shadow: {
    color: '#000000',
    blur: 10,
    x: 10,
    y: 10,
  },
  text: '一切有为法，如梦幻泡影，如露亦如电，应作如是观',
  anchor: {
    x: 0.5,
    y: 0.5,
  },
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  style: {
    fill: '#fcfcfc',
    stroke: {
      color: '#fcfcfc',
      width: 1,
    },
    // 文本
    fontSize: 28,
    textAlign: 'left',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontStretch: 'condensed',
    fontVariantCaps: 'normal',
    letterSpacing: 0,
    wordSpacing: 0,
    wordWrap: true,
    lineHeight: 50, // 默认为字体大小
    wordWrapWidth: 200,
  },
})

app.add(text)
app.ticker.add(() => {

  // text.position.set(
  //   window.innerWidth / 2,
  //   window.innerHeight / 2,
  // )
})
```

</CustomPlayground>
