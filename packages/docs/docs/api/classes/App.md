[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / App

# Class: App

应用实例

## Extends

- `EventEmitter`\<`object`\>

## Constructors

### new App()

> **new App**(`options`): [`App`](App.md)

#### Parameters

• **options**: [`AppOptions`](../interfaces/AppOptions.md) = `{}`

#### Returns

[`App`](App.md)

#### Overrides

`EventEmitter<{
  render: []
  ready: []
}>.constructor`

#### Defined in

[packages/core/src/app.ts:42](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L42)

## Properties

### canvas

> **canvas**: `HTMLCanvasElement`

canvas 元素

#### Defined in

[packages/core/src/app.ts:59](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L59)

***

### children

> **children**: [`Renderable`](Renderable.md)[] = `[]`

所有可渲染的子元素

#### Defined in

[packages/core/src/app.ts:307](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L307)

***

### dpr

> **dpr**: `number` = `1`

设备像素比 [devicePixelRatio](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio)

#### Defined in

[packages/core/src/app.ts:67](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L67)

***

### ticker

> **ticker**: [`Ticker`](Ticker.md)

计时器

#### Defined in

[packages/core/src/app.ts:63](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L63)

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Inherited from

`EventEmitter.prefixed`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:9

## Methods

### add()

> **add**(...`objects`): `void`

添加渲染元素

#### Parameters

• ...**objects**: [`Renderable`](Renderable.md)[]

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:312](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L312)

***

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* `"render"` \| `"ready"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`EventEmitter.addListener`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:45

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:392](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L392)

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `"render"` \| `"ready"`

#### Parameters

• **event**: `T`

• ...**args**: `ArgumentMap`\<`object`\>\[`Extract`\<`T`, `"render"` \| `"ready"`\>\]

#### Returns

`boolean`

#### Inherited from

`EventEmitter.emit`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:32

***

### eventNames()

> **eventNames**(): (`"render"` \| `"ready"`)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`"render"` \| `"ready"`)[]

#### Inherited from

`EventEmitter.eventNames`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:15

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: `"render"` \| `"ready"`

#### Returns

`number`

#### Inherited from

`EventEmitter.listenerCount`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:27

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `"render"` \| `"ready"`

#### Parameters

• **event**: `T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

`EventEmitter.listeners`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:20

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

#### Type Parameters

• **T** *extends* `"render"` \| `"ready"`

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

`EventEmitter.off`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:69

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a listener for a given event.

#### Type Parameters

• **T** *extends* `"render"` \| `"ready"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`EventEmitter.on`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:40

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* `"render"` \| `"ready"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`EventEmitter.once`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:54

***

### onReady()

> **onReady**(`fn`): `void`

程序准备好之后运行

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:97](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L97)

***

### remove()

> **remove**(...`objects`): `void`

删除渲染元素

#### Parameters

• ...**objects**: [`Renderable`](Renderable.md)[]

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:323](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L323)

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: `"render"` \| `"ready"`

#### Returns

`this`

#### Inherited from

`EventEmitter.removeAllListeners`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:79

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* `"render"` \| `"ready"`

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

`EventEmitter.removeListener`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:63

***

### toDataURL()

> **toDataURL**(`type`?, `quality`?): `string`

返回base64

#### Parameters

• **type?**: `string`

• **quality?**: `any`

#### Returns

`string`

#### Defined in

[packages/core/src/app.ts:371](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L371)

***

### toDataURLAsync()

> **toDataURLAsync**(`type`?, `quality`?): `Promise`\<`string`\>

返回 base64 异步的

#### Parameters

• **type?**: `string`

• **quality?**: `any`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/core/src/app.ts:378](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L378)

***

### wrapperRender()

> **wrapperRender**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:386](https://github.com/zhuddan/canvas/blob/2c03d7cefb2e6b676d454fa816d18ee0f8613833/packages/core/src/app.ts#L386)
