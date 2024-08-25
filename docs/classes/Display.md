[**@zd~/canvas**](../README.md) • **Docs**

---

[@zd~/canvas](../README.md) / Display

# Class: `abstract` Display

## Extends

- `EventEmitter`\<`object`\>

## Extended by

- [`Picture`](Picture.md)
- [`Shape`](Shape.md)
- [`Text`](Text.md)

## Implements

- `Observer`\<`ObservablePoint`\>

## Constructors

### new Display()

> **new Display**(`options`): [`Display`](Display.md)

#### Parameters

• **options**: `DisplayOptions` = `{}`

#### Returns

[`Display`](Display.md)

#### Overrides

`EventEmitter<{
  ready: []
}>.constructor`

#### Defined in

[src/object/display.ts:81](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L81)

## Properties

### \_app

> **\_app**: `null` \| [`App`](App.md) = `null`

#### Defined in

[src/object/display.ts:290](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L290)

---

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Defined in

[src/object/display.ts:121](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L121)

---

### \_env

> `protected` **\_env**: `ENV`

#### Defined in

[src/object/display.ts:79](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L79)

---

### \_renderId

> **\_renderId**: `number` = `0`

#### Defined in

[src/object/display.ts:375](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L375)

---

### \_shouldUpdateBounds

> `protected` **\_shouldUpdateBounds**: `boolean` = `true`

#### Defined in

[src/object/display.ts:304](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L304)

---

### transformHeight

> `abstract` `protected` **transformHeight**: `number`

同于形变转换的高度

#### Defined in

[src/object/display.ts:385](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L385)

---

### transformWidth

> `abstract` `protected` **transformWidth**: `number`

同于形变转换的宽度

#### Defined in

[src/object/display.ts:381](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L381)

---

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Inherited from

`EventEmitter.prefixed`

#### Defined in

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:9

## Accessors

### \_shouldUpdate

> `get` `abstract` **\_shouldUpdate**(): `boolean`

更新优化
如果\_shouldRender为true 则渲染
否则跳过渲染

#### Returns

`boolean`

#### Defined in

[src/object/display.ts:115](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L115)

---

### alpha

> `get` **alpha**(): `number`

> `set` **alpha**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[src/object/display.ts:210](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L210)

---

### anchor

> `get` **anchor**(): `ObservablePoint`

> `set` **anchor**(`value`): `void`

#### Parameters

• **value**: `number` \| `PointData`

#### Returns

`ObservablePoint`

#### Defined in

[src/object/display.ts:241](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L241)

---

### dirty

> `get` **dirty**(): `boolean`

> `set` **dirty**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[src/object/display.ts:128](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L128)

---

### height

> `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/object/display.ts:392](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L392)

---

### pivot

> `get` **pivot**(): `ObservablePoint`

> `set` **pivot**(`value`): `void`

#### Parameters

• **value**: `number` \| `PointData`

#### Returns

`ObservablePoint`

#### Defined in

[src/object/display.ts:262](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L262)

---

### position

> `get` **position**(): `ObservablePoint`

> `set` **position**(`value`): `void`

#### Parameters

• **value**: `PointData`

#### Returns

`ObservablePoint`

#### Defined in

[src/object/display.ts:160](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L160)

---

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[src/object/display.ts:223](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L223)

---

### scale

> `get` **scale**(): `ObservablePoint`

> `set` **scale**(`value`): `void`

#### Parameters

• **value**: `number` \| `PointData`

#### Returns

`ObservablePoint`

#### Defined in

[src/object/display.ts:178](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L178)

---

### shadow

> `get` **shadow**(): `ShadowType`

> `set` **shadow**(`value`): `void`

#### Parameters

• **value**: `ShadowType`

#### Returns

`ShadowType`

#### Defined in

[src/object/display.ts:282](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L282)

---

### shouldUpdate

> `get` **shouldUpdate**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/object/display.ts:117](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L117)

---

### skew

> `get` **skew**(): `ObservablePoint`

> `set` **skew**(`value`): `void`

#### Parameters

• **value**: `PointData`

#### Returns

`ObservablePoint`

#### Defined in

[src/object/display.ts:194](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L194)

---

### visible

> `get` **visible**(): `boolean`

> `set` **visible**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[src/object/display.ts:295](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L295)

---

### width

> `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/object/display.ts:396](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L396)

---

### x

> `get` **x**(): `number`

> `set` **x**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[src/object/display.ts:138](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L138)

---

### y

> `get` **y**(): `number`

> `set` **y**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[src/object/display.ts:148](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L148)

## Methods

### \_onUpdate()

> **\_onUpdate**(`_point`?): `void`

#### Parameters

• **\_point?**: `ObservablePoint`

#### Returns

`void`

#### Implementation of

`Observer._onUpdate`

#### Defined in

[src/object/display.ts:286](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L286)

---

### \_render()

> `abstract` `protected` **\_render**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Defined in

[src/object/display.ts:376](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L376)

---

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** _extends_ `"ready"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`EventEmitter.addListener`

#### Defined in

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:45

---

### addTo()

> **addTo**(`app`): [`Display`](Display.md)

#### Parameters

• **app**: [`App`](App.md)

#### Returns

[`Display`](Display.md)

#### Defined in

[src/object/display.ts:410](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L410)

---

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/object/display.ts:415](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L415)

---

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** _extends_ `"ready"`

#### Parameters

• **event**: `T`

• ...**args**: `ArgumentMap`\<`object`\>\[`Extract`\<`T`, `"ready"`\>\]

#### Returns

`boolean`

#### Inherited from

`EventEmitter.emit`

#### Defined in

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:32

---

### eventNames()

> **eventNames**(): `"ready"`[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

`"ready"`[]

#### Inherited from

`EventEmitter.eventNames`

#### Defined in

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:15

---

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: `"ready"`

#### Returns

`number`

#### Inherited from

`EventEmitter.listenerCount`

#### Defined in

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:27

---

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Return the listeners registered for a given event.

#### Type Parameters

• **T** _extends_ `"ready"`

#### Parameters

• **event**: `T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

`EventEmitter.listeners`

#### Defined in

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:20

---

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

#### Type Parameters

• **T** _extends_ `"ready"`

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

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:69

---

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a listener for a given event.

#### Type Parameters

• **T** _extends_ `"ready"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`EventEmitter.on`

#### Defined in

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:40

---

### onAdd()

> **onAdd**(`_app`): `void`

#### Parameters

• **\_app**: [`App`](App.md)

#### Returns

`void`

#### Defined in

[src/object/display.ts:400](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L400)

---

### onRemove()

> **onRemove**(): `void`

#### Returns

`void`

#### Defined in

[src/object/display.ts:405](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L405)

---

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** _extends_ `"ready"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

`EventEmitter.once`

#### Defined in

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:54

---

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: `"ready"`

#### Returns

`this`

#### Inherited from

`EventEmitter.removeAllListeners`

#### Defined in

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:79

---

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Remove the listeners of a given event.

#### Type Parameters

• **T** _extends_ `"ready"`

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

node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.d.ts:63

---

### render()

> **render**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Defined in

[src/object/display.ts:328](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L328)

---

### shouldUpdateBounds()

> `protected` **shouldUpdateBounds**(): `void`

#### Returns

`void`

#### Defined in

[src/object/display.ts:306](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L306)

---

### updateTransformBounds()

> `abstract` `protected` **updateTransformBounds**(): `void`

同于形变转换的边界

#### Returns

`void`

#### Defined in

[src/object/display.ts:390](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L390)
