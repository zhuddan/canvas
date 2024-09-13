---
sidebar_position: 1
---

import CustomPlayground from '@site/src/components/CustomPlayground';

# 快速开始

1. 首先实例化一个 `const app = new App();`
2. 把 `app.canvas` 添加到 `document.body`
3. 实例化一个渲染元素 (这里以`Text`为例), 并且 把他添加到 `app`

<CustomPlayground>

```ts
import { App, Text } from '@zd~/canvas'

const app = new App({
  backgroundColor: '#60a5fab0',
  resizeTo: window,
})

document.body.appendChild(app.canvas)

const text = new Text({
  text: 'Hello World',
  x: 50,
  y: 50,
  style: {
    fontSize: 32,
    fontWeight: 'bold',
  },
})

app.add(text)
```

</CustomPlayground>
