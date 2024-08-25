# @zd~/canvas

这是一个基于 `canvas.CanvasRenderingContext2D` 的绘图简单库，封装了绝大多数 [CanvasRenderingContext2D](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D) API。

<!-- 支持 [文字绘制](https://github.com/zhuddan/canvas/blob/master/src/object/text.ts)、[几何图形绘制](https://github.com/zhuddan/canvas/blob/master/src/object/shape.ts) 以及 [图片绘制](https://github.com/zhuddan/canvas/blob/master/src/object/picture.ts)。该库参考了 [pixijs](https://pixijs.com/)，简化了 [CanvasRenderingContext2D.setTransform](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)，使绘制对象的 [缩放、倾斜等](https://github.com/zhuddan/canvas/blob/master/src/object/display.ts#L341) 变形操作更加简便。还实现了常用的图片圆角和原生图片 [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) 属性，方便地进行图片绘制。除此之外，该库兼容 [uni-app](https://www.dcloud.io/) 和 [原生微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/)。 -->

## 特色

- 支持`坐标`、`缩放`、`倾斜`、`旋转`等操作，并且支持`形变原点`设置
- 支持`阴影`、`滤镜`、`透明度`
- 支持`图片src`绘制，简化了`CanvasRenderingContext2D.drawImage`需要实例化的操作
- 支持图片`裁剪`、`圆角`、以及`缩放模式(objectFit)`
- 支持`beginPath`、`closePath`、`moveTo`、`rect`等所有路径绘制
- 支持`文本字体`，`字体大小`，`字体样式`，`字体的粗细程度`，`字体扩展或压缩`，`字体替代大写形式`，`字母之间的间距`，`对其模式`
- 支持`多行文本`换行绘制，多行文本支持`行高设置`
- 支持`原生微信小程序`和`UNI-APP`, 减少了原生微信小程序和UNI-APP实例化`CanvasRenderingContext2D`的繁琐操作
- 支持`帧动画`，可以结合[`tweenjs`](https://github.com/tweenjs/tween.js)或者[`gsap`](https://gsap.com/)实现动画

> [!NOTE]
> 此库的目的是兼用web和小程序生态的画布操作，且不支持webgl，简单地统一实现形变操作，如果你要实现更强大的操作建议使用[pixijs](https://pixijs.com/)

## 原理

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

[完整类型声明](./docs/README.md)
