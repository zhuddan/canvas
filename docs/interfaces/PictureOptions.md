[**@zd~/canvas**](../README.md) • **Docs**

---

[@zd~/canvas](../README.md) / PictureOptions

# Interface: PictureOptions

## Extends

- `DisplayOptions`

## Properties

### alpha?

> `optional` **alpha**: `number`

#### Inherited from

`DisplayOptions.alpha`

#### Defined in

[src/object/display.ts:66](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L66)

---

### anchor?

> `optional` **anchor**: `number` \| `PointData`

单位矩阵变化中心，默认是[0,0]表示左上角，[1,1]表示右下角，[0.5,0.5]表示中心

此属性可以很好的控制元素的锚点，不用计算相对位置

例如：一个500x500的画布上需要绘制一个上下居中的图片

```ts
new Picture('demo.png', {
  anchor: 0.5
})
```

```
> [!IMPORTANT]
> Crucial information necessary for users to succeed.
```

#### Inherited from

`DisplayOptions.anchor`

#### Defined in

[src/object/display.ts:58](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L58)

---

### objectFit?

> `optional` **objectFit**: `ObjectFit`

#### Defined in

[src/object/picture.ts:13](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/picture.ts#L13)

---

### pivot?

> `optional` **pivot**: `number` \| `PointData`

同 anchor，但是具体坐标

#### Inherited from

`DisplayOptions.pivot`

#### Defined in

[src/object/display.ts:62](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L62)

---

### position?

> `optional` **position**: `PointData`

#### Inherited from

`DisplayOptions.position`

#### Defined in

[src/object/display.ts:36](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L36)

---

### rotation?

> `optional` **rotation**: `number`

#### Inherited from

`DisplayOptions.rotation`

#### Defined in

[src/object/display.ts:38](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L38)

---

### rounded?

> `optional` **rounded**: `number`

#### Defined in

[src/object/picture.ts:14](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/picture.ts#L14)

---

### scale?

> `optional` **scale**: `number` \| `PointData`

#### Inherited from

`DisplayOptions.scale`

#### Defined in

[src/object/display.ts:40](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L40)

---

### shadow?

> `optional` **shadow**: `ShadowType`

#### Inherited from

`DisplayOptions.shadow`

#### Defined in

[src/object/display.ts:68](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L68)

---

### size?

> `optional` **size**: `PointData`

#### Defined in

[src/object/picture.ts:10](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/picture.ts#L10)

---

### skew?

> `optional` **skew**: `PointData`

#### Inherited from

`DisplayOptions.skew`

#### Defined in

[src/object/display.ts:64](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L64)

---

### slice?

> `optional` **slice**: `PointData`

#### Defined in

[src/object/picture.ts:11](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/picture.ts#L11)

---

### sliceSize?

> `optional` **sliceSize**: `PointData`

#### Defined in

[src/object/picture.ts:12](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/picture.ts#L12)

---

### visible?

> `optional` **visible**: `boolean`

#### Inherited from

`DisplayOptions.visible`

#### Defined in

[src/object/display.ts:30](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L30)

---

### x?

> `optional` **x**: `number`

#### Inherited from

`DisplayOptions.x`

#### Defined in

[src/object/display.ts:32](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L32)

---

### y?

> `optional` **y**: `number`

#### Inherited from

`DisplayOptions.y`

#### Defined in

[src/object/display.ts:34](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L34)
