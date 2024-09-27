[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / PictureOptions

# Interface: PictureOptions

渲染元素的配置

## Extends

- [`RenderableOptions`](RenderableOptions.md)

## Properties

### alpha?

> `optional` **alpha**: `number`

透明度

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`alpha`](RenderableOptions.md#alpha)

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

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`anchor`](RenderableOptions.md#anchor)

#### Defined in

[packages/core/src/renderables/renderable.ts:71](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L71)

***

### image

> **image**: `string` \| `HTMLImageElement`

image

#### Defined in

[packages/core/src/renderables/picture.ts:14](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/picture.ts#L14)

***

### objectFit?

> `optional` **objectFit**: `ObjectFit`

图片的缩放模式

#### Defined in

[packages/core/src/renderables/picture.ts:30](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/picture.ts#L30)

***

### pivot?

> `optional` **pivot**: `number` \| [`PointData`](PointData.md)

同 anchor，但是具体坐标，建议使用 anchor

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`pivot`](RenderableOptions.md#pivot)

#### Defined in

[packages/core/src/renderables/renderable.ts:75](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L75)

***

### position?

> `optional` **position**: [`PointData`](PointData.md)

元素位置

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`position`](RenderableOptions.md#position)

#### Defined in

[packages/core/src/renderables/renderable.ts:57](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L57)

***

### rotation?

> `optional` **rotation**: `number`

旋转角度(弧度)

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`rotation`](RenderableOptions.md#rotation)

#### Defined in

[packages/core/src/renderables/renderable.ts:79](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L79)

***

### rounded?

> `optional` **rounded**: `number`

圆角

#### Defined in

[packages/core/src/renderables/picture.ts:34](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/picture.ts#L34)

***

### scale?

> `optional` **scale**: `number` \| [`PointData`](PointData.md)

缩放比例

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`scale`](RenderableOptions.md#scale)

#### Defined in

[packages/core/src/renderables/renderable.ts:83](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L83)

***

### ~~shadow?~~

> `optional` **shadow**: [`ShadowType`](ShadowType.md)

#### Deprecated

图片不支持阴影

#### Overrides

[`RenderableOptions`](RenderableOptions.md).[`shadow`](RenderableOptions.md#shadow)

#### Defined in

[packages/core/src/renderables/picture.ts:38](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/picture.ts#L38)

***

### size?

> `optional` **size**: [`PointData`](PointData.md)

图片的宽高

#### Defined in

[packages/core/src/renderables/picture.ts:18](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/picture.ts#L18)

***

### skew?

> `optional` **skew**: [`PointData`](PointData.md)

元素倾斜

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`skew`](RenderableOptions.md#skew)

#### Defined in

[packages/core/src/renderables/renderable.ts:87](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L87)

***

### slice?

> `optional` **slice**: [`PointData`](PointData.md)

图片切片的开始坐标

#### Defined in

[packages/core/src/renderables/picture.ts:22](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/picture.ts#L22)

***

### sliceSize?

> `optional` **sliceSize**: [`PointData`](PointData.md)

图片切片的宽高

#### Defined in

[packages/core/src/renderables/picture.ts:26](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/picture.ts#L26)

***

### visible?

> `optional` **visible**: `boolean`

元素是否可见

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`visible`](RenderableOptions.md#visible)

#### Defined in

[packages/core/src/renderables/renderable.ts:37](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L37)

***

### x?

> `optional` **x**: `number`

元素位置x

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`x`](RenderableOptions.md#x)

#### Defined in

[packages/core/src/renderables/renderable.ts:49](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L49)

***

### y?

> `optional` **y**: `number`

元素位置y

#### Inherited from

[`RenderableOptions`](RenderableOptions.md).[`y`](RenderableOptions.md#y)

#### Defined in

[packages/core/src/renderables/renderable.ts:53](https://github.com/zhuddan/canvas/blob/e2067dfcd8aab1b5658073c5686cead119551340/packages/core/src/renderables/renderable.ts#L53)
