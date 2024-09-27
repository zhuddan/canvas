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

[packages/core/src/app.ts:69](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L69)

## Properties

### canvas

> **canvas**: `HTMLCanvasElement`

#### Defined in

[packages/core/src/app.ts:39](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L39)

***

### children

> **children**: [`Renderable`](Renderable.md)[] = `[]`

#### Defined in

[packages/core/src/app.ts:257](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L257)

***

### dpr

> **dpr**: `number` = `1`

#### Defined in

[packages/core/src/app.ts:41](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L41)

***

### removeResizeEvent()?

> `optional` **removeResizeEvent**: () => `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:68](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L68)

***

### ticker

> **ticker**: `Ticker`

#### Defined in

[packages/core/src/app.ts:40](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L40)

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

• ...**objects**: [`Renderable`](Renderable.md)[]

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:259](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L259)

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

### initResizeEvent()

> **initResizeEvent**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:190](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L190)

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

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:77](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L77)

***

### remove()

> **remove**(...`objects`): `void`

#### Parameters

• ...**objects**: [`Renderable`](Renderable.md)[]

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:267](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L267)

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

### resize()

> **resize**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:231](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L231)

***

### toDataURL()

> **toDataURL**(`type`?, `quality`?): `string`

#### Parameters

• **type?**: `string`

• **quality?**: `any`

#### Returns

`string`

#### Defined in

[packages/core/src/app.ts:309](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L309)

***

### toDataURLAsync()

> **toDataURLAsync**(`type`?, `quality`?): `Promise`\<`string`\>

#### Parameters

• **type?**: `string`

• **quality?**: `any`

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/core/src/app.ts:313](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L313)

***

### wrapperRender()

> **wrapperRender**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:321](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/app.ts#L321)
