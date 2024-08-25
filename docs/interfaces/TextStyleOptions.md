[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / TextStyleOptions

# Interface: TextStyleOptions

## Extends

- `IAbstractStyle`

## Properties

### fill

> **fill**: `null` \| `string` \| `CanvasGradient` \| `CanvasPattern`

填充颜色
[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)

#### Inherited from

`IAbstractStyle.fill`

#### Defined in

[src/style/abstract-style.ts:18](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/abstract-style.ts#L18)

***

### filter

> **filter**: `string`

[CanvasRenderingContext2D.filter](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)

#### Inherited from

`IAbstractStyle.filter`

#### Defined in

[src/style/abstract-style.ts:27](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/abstract-style.ts#L27)

***

### fontFamily

> **fontFamily**: `undefined` \| `FontFamily`

#### Description

字体
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)

#### Defined in

[src/style/text-style.ts:11](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L11)

***

### fontSize

> **fontSize**: `undefined` \| `FontSize`\<`0` \| `string` & `object`\> \| `number` & `object`

#### Description

字体大小 当值为 number 时单位为px
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)

#### Defined in

[src/style/text-style.ts:16](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L16)

***

### fontStretch

> **fontStretch**: `CanvasFontStretch`

指定绘制文本时字体如何被扩展或压缩
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontStretch)

#### Defined in

[src/style/text-style.ts:31](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L31)

***

### fontStyle

> **fontStyle**: `undefined` \| `FontStyle`

#### Description

字体样式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)

#### Defined in

[src/style/text-style.ts:21](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L21)

***

### fontVariantCaps

> **fontVariantCaps**: `CanvasFontVariantCaps`

用于指定渲染文本的替代大写形式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)

#### Defined in

[src/style/text-style.ts:36](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L36)

***

### fontWeight

> **fontWeight**: `undefined` \| `FontWeight`

#### Description

字体的粗细程度
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)

#### Defined in

[src/style/text-style.ts:26](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L26)

***

### letterSpacing

> **letterSpacing**: `string` \| `number`

用于指定绘制文本时字母之间的间距
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/letterSpacing)

#### Defined in

[src/style/text-style.ts:41](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L41)

***

### lineHeight

> **lineHeight**: `number`

#### Defined in

[src/style/text-style.ts:53](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L53)

***

### stroke

> **stroke**: `StrokeInput`

描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)

#### Inherited from

`IAbstractStyle.stroke`

#### Defined in

[src/style/abstract-style.ts:23](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/abstract-style.ts#L23)

***

### textAlign

> **textAlign**: `CanvasTextAlign`

文本时文本的对齐方式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign)

#### Defined in

[src/style/text-style.ts:51](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L51)

***

### wordSpacing

> **wordSpacing**: `string` \| `number`

指定绘制文本时单词之间的间距
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/wordSpacing)

#### Defined in

[src/style/text-style.ts:46](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L46)

***

### wordWrap

> **wordWrap**: `boolean`

#### Defined in

[src/style/text-style.ts:54](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L54)

***

### wordWrapWidth

> **wordWrapWidth**: `number`

#### Defined in

[src/style/text-style.ts:55](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L55)
