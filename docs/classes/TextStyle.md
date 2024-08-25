[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / TextStyle

# Class: TextStyle

## Extends

- `AbstractStyle`

## Implements

- [`TextStyleOptions`](../interfaces/TextStyleOptions.md)

## Constructors

### new TextStyle()

> **new TextStyle**(`style`): [`TextStyle`](TextStyle.md)

#### Parameters

• **style**: `Partial`\<[`TextStyleOptions`](../interfaces/TextStyleOptions.md)\> = `{}`

#### Returns

[`TextStyle`](TextStyle.md)

#### Overrides

`AbstractStyle.constructor`

#### Defined in

[src/style/text-style.ts:80](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L80)

## Properties

### \_isStroke

> **\_isStroke**: `boolean`

#### Defined in

[src/style/text-style.ts:79](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L79)

***

### textBaseline

> `protected` `readonly` **textBaseline**: `"top"` = `'top'`

#### Defined in

[src/style/text-style.ts:105](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L105)

***

### defaultTextStyle

> `static` **defaultTextStyle**: [`TextStyleOptions`](../interfaces/TextStyleOptions.md)

#### Defined in

[src/style/text-style.ts:59](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L59)

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Inherited from

`AbstractStyle.prefixed`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:9

## Accessors

### fill

> `get` **fill**(): `string`

填充颜色
[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)

> `set` **fill**(`value`): `void`

填充颜色
[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)

#### Parameters

• **value**: `string`

#### Returns

`string`

填充颜色
[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`fill`](../interfaces/TextStyleOptions.md#fill)

#### Inherited from

`AbstractStyle.fill`

#### Defined in

[src/style/abstract-style.ts:40](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/abstract-style.ts#L40)

***

### filter

> `get` **filter**(): `string`

[CanvasRenderingContext2D.filter](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)

> `set` **filter**(`value`): `void`

[CanvasRenderingContext2D.filter](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)

#### Parameters

• **value**: `string`

#### Returns

`string`

[CanvasRenderingContext2D.filter](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`filter`](../interfaces/TextStyleOptions.md#filter)

#### Inherited from

`AbstractStyle.filter`

#### Defined in

[src/style/abstract-style.ts:80](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/abstract-style.ts#L80)

***

### fontFamily

> `get` **fontFamily**(): `undefined` \| `FontFamily`

#### Description

字体
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)

> `set` **fontFamily**(`value`): `void`

#### Description

字体
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)

#### Parameters

• **value**: `undefined` \| `FontFamily`

#### Returns

`undefined` \| `FontFamily`

#### Description

字体
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`fontFamily`](../interfaces/TextStyleOptions.md#fontfamily)

#### Defined in

[src/style/text-style.ts:125](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L125)

***

### fontSize

> `get` **fontSize**(): `undefined` \| `FontSize`\<`0` \| `string` & `object`\> \| `number` & `object`

#### Description

字体大小 当值为 number 时单位为px
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)

> `set` **fontSize**(`value`): `void`

#### Description

字体大小 当值为 number 时单位为px
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)

#### Parameters

• **value**: `undefined` \| `FontSize`\<`0` \| `string` & `object`\> \| `number` & `object`

#### Returns

`undefined` \| `FontSize`\<`0` \| `string` & `object`\> \| `number` & `object`

#### Description

字体大小 当值为 number 时单位为px
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`fontSize`](../interfaces/TextStyleOptions.md#fontsize)

#### Defined in

[src/style/text-style.ts:114](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L114)

***

### fontStretch

> `get` **fontStretch**(): `CanvasFontStretch`

指定绘制文本时字体如何被扩展或压缩
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontStretch)

> `set` **fontStretch**(`value`): `void`

指定绘制文本时字体如何被扩展或压缩
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontStretch)

#### Parameters

• **value**: `CanvasFontStretch`

#### Returns

`CanvasFontStretch`

指定绘制文本时字体如何被扩展或压缩
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontStretch)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`fontStretch`](../interfaces/TextStyleOptions.md#fontstretch)

#### Defined in

[src/style/text-style.ts:161](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L161)

***

### fontStyle

> `get` **fontStyle**(): `undefined` \| `FontStyle`

#### Description

字体样式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)

> `set` **fontStyle**(`value`): `void`

#### Description

字体样式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)

#### Parameters

• **value**: `undefined` \| `FontStyle`

#### Returns

`undefined` \| `FontStyle`

#### Description

字体样式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`fontStyle`](../interfaces/TextStyleOptions.md#fontstyle)

#### Defined in

[src/style/text-style.ts:137](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L137)

***

### fontVariantCaps

> `get` **fontVariantCaps**(): `CanvasFontVariantCaps`

用于指定渲染文本的替代大写形式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)

> `set` **fontVariantCaps**(`value`): `void`

用于指定渲染文本的替代大写形式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)

#### Parameters

• **value**: `CanvasFontVariantCaps`

#### Returns

`CanvasFontVariantCaps`

用于指定渲染文本的替代大写形式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`fontVariantCaps`](../interfaces/TextStyleOptions.md#fontvariantcaps)

#### Defined in

[src/style/text-style.ts:173](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L173)

***

### fontWeight

> `get` **fontWeight**(): `undefined` \| `FontWeight`

#### Description

字体的粗细程度
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)

> `set` **fontWeight**(`value`): `void`

#### Description

字体的粗细程度
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)

#### Parameters

• **value**: `undefined` \| `FontWeight`

#### Returns

`undefined` \| `FontWeight`

#### Description

字体的粗细程度
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`fontWeight`](../interfaces/TextStyleOptions.md#fontweight)

#### Defined in

[src/style/text-style.ts:149](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L149)

***

### letterSpacing

> `get` **letterSpacing**(): `string` \| `number`

用于指定绘制文本时字母之间的间距
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/letterSpacing)

> `set` **letterSpacing**(`value`): `void`

用于指定绘制文本时字母之间的间距
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/letterSpacing)

#### Parameters

• **value**: `string` \| `number`

#### Returns

`string` \| `number`

用于指定绘制文本时字母之间的间距
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/letterSpacing)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`letterSpacing`](../interfaces/TextStyleOptions.md#letterspacing)

#### Defined in

[src/style/text-style.ts:185](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L185)

***

### lineHeight

> `get` **lineHeight**(): `number`

> `set` **lineHeight**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`lineHeight`](../interfaces/TextStyleOptions.md#lineheight)

#### Defined in

[src/style/text-style.ts:222](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L222)

***

### stroke

> `get` **stroke**(): `StrokeInput`

描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)

> `set` **stroke**(`value`): `void`

描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)

#### Parameters

• **value**: `string` \| `CanvasGradient` \| `CanvasPattern` \| `StrokeInput`

#### Returns

`StrokeInput`

描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
[MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`stroke`](../interfaces/TextStyleOptions.md#stroke)

#### Inherited from

`AbstractStyle.stroke`

#### Defined in

[src/style/abstract-style.ts:69](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/abstract-style.ts#L69)

***

### textAlign

> `get` **textAlign**(): `CanvasTextAlign`

文本时文本的对齐方式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign)

> `set` **textAlign**(`value`): `void`

文本时文本的对齐方式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign)

#### Parameters

• **value**: `CanvasTextAlign`

#### Returns

`CanvasTextAlign`

文本时文本的对齐方式
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`textAlign`](../interfaces/TextStyleOptions.md#textalign)

#### Defined in

[src/style/text-style.ts:208](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L208)

***

### wordSpacing

> `get` **wordSpacing**(): `string` \| `number`

指定绘制文本时单词之间的间距
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/wordSpacing)

> `set` **wordSpacing**(`value`): `void`

指定绘制文本时单词之间的间距
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/wordSpacing)

#### Parameters

• **value**: `string` \| `number`

#### Returns

`string` \| `number`

指定绘制文本时单词之间的间距
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/wordSpacing)

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`wordSpacing`](../interfaces/TextStyleOptions.md#wordspacing)

#### Defined in

[src/style/text-style.ts:197](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L197)

***

### wordWrap

> `get` **wordWrap**(): `boolean`

> `set` **wordWrap**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`wordWrap`](../interfaces/TextStyleOptions.md#wordwrap)

#### Defined in

[src/style/text-style.ts:239](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L239)

***

### wordWrapWidth

> `get` **wordWrapWidth**(): `number`

> `set` **wordWrapWidth**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Implementation of

[`TextStyleOptions`](../interfaces/TextStyleOptions.md).[`wordWrapWidth`](../interfaces/TextStyleOptions.md#wordwrapwidth)

#### Defined in

[src/style/text-style.ts:253](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L253)

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* `"update"` \| `"updateBounds"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`AbstractStyle.addListener`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:45

***

### clone()

> **clone**(): [`TextStyle`](TextStyle.md)

#### Returns

[`TextStyle`](TextStyle.md)

#### Defined in

[src/style/text-style.ts:257](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L257)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

`AbstractStyle.destroy`

#### Defined in

[src/style/abstract-style.ts:106](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/abstract-style.ts#L106)

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `"update"` \| `"updateBounds"`

#### Parameters

• **event**: `T`

• ...**args**: `ArgumentMap`\<`object`\>\[`Extract`\<`T`, `"update"` \| `"updateBounds"`\>\]

#### Returns

`boolean`

#### Inherited from

`AbstractStyle.emit`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:32

***

### eventNames()

> **eventNames**(): (`"update"` \| `"updateBounds"`)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`"update"` \| `"updateBounds"`)[]

#### Inherited from

`AbstractStyle.eventNames`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:15

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: `"update"` \| `"updateBounds"`

#### Returns

`number`

#### Inherited from

`AbstractStyle.listenerCount`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:27

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `"update"` \| `"updateBounds"`

#### Parameters

• **event**: `T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

`AbstractStyle.listeners`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:20

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

#### Type Parameters

• **T** *extends* `"update"` \| `"updateBounds"`

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

`AbstractStyle.off`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:69

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a listener for a given event.

#### Type Parameters

• **T** *extends* `"update"` \| `"updateBounds"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`AbstractStyle.on`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:40

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* `"update"` \| `"updateBounds"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`AbstractStyle.once`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:54

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: `"update"` \| `"updateBounds"`

#### Returns

`this`

#### Inherited from

`AbstractStyle.removeAllListeners`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:79

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* `"update"` \| `"updateBounds"`

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

`AbstractStyle.removeListener`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:63

***

### render()

> **render**(`ctx`): [`TextStyle`](TextStyle.md)

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

[`TextStyle`](TextStyle.md)

#### Overrides

`AbstractStyle.render`

#### Defined in

[src/style/text-style.ts:274](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L274)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/style/text-style.ts:96](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/text-style.ts#L96)

***

### update()

> **update**(): `void`

#### Returns

`void`

#### Inherited from

`AbstractStyle.update`

#### Defined in

[src/style/abstract-style.ts:84](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/abstract-style.ts#L84)

***

### updateBounds()

> **updateBounds**(): `void`

#### Returns

`void`

#### Inherited from

`AbstractStyle.updateBounds`

#### Defined in

[src/style/abstract-style.ts:88](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/style/abstract-style.ts#L88)
