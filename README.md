# @zd~/canvas

这是一个基于 `canvas.CanvasRenderingContext2D` 的绘图简单库，封装了绝大多数 [CanvasRenderingContext2D](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D) API，支持 [文字绘制](https://github.com/zhuddan/canvas/blob/master/src/object/text.ts)、[几何图形绘制](https://github.com/zhuddan/canvas/blob/master/src/object/shape.ts) 以及 [图片绘制](https://github.com/zhuddan/canvas/blob/master/src/object/picture.ts)。该库参考了 [pixijs](https://pixijs.com/)，简化了 [CanvasRenderingContext2D.setTransform](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)，使绘制对象的 [缩放、倾斜等](https://github.com/zhuddan/canvas/blob/master/src/object/display.ts#L341) 变形操作更加简便。还实现了常用的图片圆角和原生图片 [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) 属性，方便地进行图片绘制。除此之外，该库兼容 [uni-app](https://www.dcloud.io/) 和 [原生微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/)。

<!-- > [!NOTE]
> 这个库至少 -->

# 原理

每个绘制对象都定义了一个[\_render](https://github.com/zhuddan/canvas/blob/master/src/object/display.ts#L358)方法和[\_dirty](https://github.com/zhuddan/canvas/blob/master/src/object/display.ts#L103)属性以及[\_shouldUpdate](https://github.com/zhuddan/canvas/blob/master/src/object/display.ts#L97C16)属性，当绘制对象属性发生改变时(如文字颜色)或者被添加到App时,会修改`_dirty`属性。在[App.ticker](https://github.com/zhuddan/canvas/blob/master/src/app.ts#L257)更新时，会循环所有`App.children`，如果存在`\_dirty`元素，会发生重绘，循环`app.children._render`进行绘制。除此之外，还使用`\_shouldUpdate`属性进行简单的优化处理，一个`缩放比例(scale)`为0或者`透明度(alpha)`为0的元素的绘制是没有任何意义的。

# 快速入门

```ts
import { App } from '@zd~/canvas'
const app = new App()

const text = new Text({
  text: 'hello world'
})

app.add(text)
```
