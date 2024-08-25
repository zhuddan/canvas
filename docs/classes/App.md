[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / App

# Class: App

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

[src/app.ts:30](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L30)

## Properties

### \_env

> `protected` **\_env**: `ENV`

#### Defined in

[src/app.ts:24](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L24)

***

### canvas

> **canvas**: `HTMLCanvasElement`

#### Defined in

[src/app.ts:25](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L25)

***

### children

> **children**: [`Display`](Display.md)[] = `[]`

#### Defined in

[src/app.ts:135](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L135)

***

### dpr

> **dpr**: `number` = `1`

#### Defined in

[src/app.ts:27](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L27)

***

### height

> **height**: `number` = `0`

#### Defined in

[src/app.ts:29](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L29)

***

### ticker

> **ticker**: `Ticker`

#### Defined in

[src/app.ts:26](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L26)

***

### width

> **width**: `number` = `0`

#### Defined in

[src/app.ts:28](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L28)

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

#### Parameters

• ...**objects**: [`Display`](Display.md)[]

#### Returns

`void`

#### Defined in

[src/app.ts:137](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L137)

***

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* `"ready"` \| `"render"`

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

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `"ready"` \| `"render"`

#### Parameters

• **event**: `T`

• ...**args**: `ArgumentMap`\<`object`\>\[`Extract`\<`T`, `"ready"` \| `"render"`\>\]

#### Returns

`boolean`

#### Inherited from

`EventEmitter.emit`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:32

***

### eventNames()

> **eventNames**(): (`"ready"` \| `"render"`)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`"ready"` \| `"render"`)[]

#### Inherited from

`EventEmitter.eventNames`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:15

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: `"ready"` \| `"render"`

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

• **T** *extends* `"ready"` \| `"render"`

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

• **T** *extends* `"ready"` \| `"render"`

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

• **T** *extends* `"ready"` \| `"render"`

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

### onReady()

> **onReady**(`fn`): `void`

#### Parameters

• **fn**: `AnyFunction`

#### Returns

`void`

#### Defined in

[src/app.ts:38](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L38)

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* `"ready"` \| `"render"`

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

### remove()

> **remove**(...`objects`): `void`

#### Parameters

• ...**objects**: [`Display`](Display.md)[]

#### Returns

`void`

#### Defined in

[src/app.ts:145](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L145)

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: `"ready"` \| `"render"`

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

• **T** *extends* `"ready"` \| `"render"`

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

#### Parameters

• **type?**: `string`

• **quality?**: `any`

#### Returns

`string`

#### Defined in

[src/app.ts:186](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L186)

***

### toDataURLAsync()

> **toDataURLAsync**(`type`?, `quality`?): `Promise`\<`string`\>

#### Parameters

• **type?**: `string`

• **quality?**: `any`

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/app.ts:190](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L190)

***

### wrapperRender()

> **wrapperRender**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[src/app.ts:198](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/app.ts#L198)
