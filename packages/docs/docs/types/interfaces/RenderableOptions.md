[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / RenderableOptions

# Interface: RenderableOptions

渲染元素的配置

## Extended by

- [`PictureOptions`](PictureOptions.md)
- [`TextOptions`](TextOptions.md)

## Properties

### alpha?

> `optional` **alpha**: `number`

透明度

#### Defined in

[packages/core/src/renderables/renderable.ts:41](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L41)

***

### anchor?

> `optional` **anchor**: `number` \| [`PointData`](PointData.md)

单位矩阵变化中心，默认是[0,0]表示左上角，[1,1]表示右下角，[0.5,0.5]表示中心

此属性可以很好的控制元素的锚点，不用计算相对位置

例如：一个500x500的画布上需要绘制一个上下居中的图片

``` ts
const text = new Picture('demo.png',{
 anchor: 0.5
})
```

#### Defined in

[packages/core/src/renderables/renderable.ts:71](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L71)

***

### pivot?

> `optional` **pivot**: `number` \| [`PointData`](PointData.md)

同 anchor，但是具体坐标，建议使用 anchor

#### Defined in

[packages/core/src/renderables/renderable.ts:75](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L75)

***

### position?

> `optional` **position**: [`PointData`](PointData.md)

元素位置

#### Defined in

[packages/core/src/renderables/renderable.ts:57](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L57)

***

### rotation?

> `optional` **rotation**: `number`

旋转角度(弧度)

#### Defined in

[packages/core/src/renderables/renderable.ts:79](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L79)

***

### scale?

> `optional` **scale**: `number` \| [`PointData`](PointData.md)

缩放比例

#### Defined in

[packages/core/src/renderables/renderable.ts:83](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L83)

***

### shadow?

> `optional` **shadow**: [`ShadowType`](ShadowType.md)

阴影

#### Defined in

[packages/core/src/renderables/renderable.ts:45](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L45)

***

### skew?

> `optional` **skew**: [`PointData`](PointData.md)

元素倾斜

#### Defined in

[packages/core/src/renderables/renderable.ts:87](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L87)

***

### visible?

> `optional` **visible**: `boolean`

元素是否可见

#### Defined in

[packages/core/src/renderables/renderable.ts:37](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L37)

***

### x?

> `optional` **x**: `number`

元素位置x

#### Defined in

[packages/core/src/renderables/renderable.ts:49](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L49)

***

### y?

> `optional` **y**: `number`

元素位置y

#### Defined in

[packages/core/src/renderables/renderable.ts:53](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L53)
