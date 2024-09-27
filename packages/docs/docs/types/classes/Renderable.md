[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / Renderable

# Class: `abstract` Renderable

渲染元素抽象类

## Extends

- `EventEmitter`\<`object`\>

## Extended by

- [`Picture`](Picture.md)
- [`Shape`](Shape.md)
- [`Text`](Text.md)

## Implements

- [`Observer`](../interfaces/Observer.md)\<[`ObservablePoint`](ObservablePoint.md)\>

## Constructors

### new Renderable()

> **new Renderable**(`options`): [`Renderable`](Renderable.md)

#### Parameters

• **options**: [`RenderableOptions`](../interfaces/RenderableOptions.md) = `{}`

#### Returns

[`Renderable`](Renderable.md)

#### Overrides

`EventEmitter<{
  updateBounds: [width: number, height: number]
  render: []
}>.constructor`

#### Defined in

[packages/core/src/renderables/renderable.ts:114](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L114)

## Properties

### \_app

> **\_app**: `null` \| [`App`](App.md) = `null`

#### Defined in

[packages/core/src/renderables/renderable.ts:363](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L363)

***

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Defined in

[packages/core/src/renderables/renderable.ts:166](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L166)

***

### \_rawSize

> `protected` **\_rawSize**: `object`

原始尺寸

#### height

> **height**: `number` = `0`

#### width

> **width**: `number` = `0`

#### Defined in

[packages/core/src/renderables/renderable.ts:463](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L463)

***

### \_renderId

> **\_renderId**: `number` = `0`

#### Defined in

[packages/core/src/renderables/renderable.ts:456](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L456)

***

### \_shouldUpdateBounds

> `protected` **\_shouldUpdateBounds**: `boolean` = `false`

#### Defined in

[packages/core/src/renderables/renderable.ts:376](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L376)

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Inherited from

`EventEmitter.prefixed`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:9

## Accessors

### \_shouldUpdate

> `get` `abstract` **\_shouldUpdate**(): `boolean`

更新优化
如果_shouldRender为true 则渲染
否则跳过渲染

#### Returns

`boolean`

#### Defined in

[packages/core/src/renderables/renderable.ts:160](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L160)

***

### alpha

> `get` **alpha**(): `number`

> `set` **alpha**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[packages/core/src/renderables/renderable.ts:186](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L186)

***

### anchor

> `get` **anchor**(): [`ObservablePoint`](ObservablePoint.md)

> `set` **anchor**(`value`): `void`

#### Parameters

• **value**: `number` \| [`PointData`](../interfaces/PointData.md)

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Defined in

[packages/core/src/renderables/renderable.ts:266](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L266)

***

### dirty

> `get` **dirty**(): `boolean`

> `set` **dirty**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[packages/core/src/renderables/renderable.ts:173](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L173)

***

### height

> `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[packages/core/src/renderables/renderable.ts:465](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L465)

***

### pivot

> `get` **pivot**(): [`ObservablePoint`](ObservablePoint.md)

> `set` **pivot**(`value`): `void`

#### Parameters

• **value**: `number` \| [`PointData`](../interfaces/PointData.md)

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Defined in

[packages/core/src/renderables/renderable.ts:293](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L293)

***

### position

> `get` **position**(): [`ObservablePoint`](ObservablePoint.md)

> `set` **position**(`value`): `void`

#### Parameters

• **value**: [`PointData`](../interfaces/PointData.md)

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Defined in

[packages/core/src/renderables/renderable.ts:242](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L242)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[packages/core/src/renderables/renderable.ts:309](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L309)

***

### scale

> `get` **scale**(): [`ObservablePoint`](ObservablePoint.md)

> `set` **scale**(`value`): `void`

#### Parameters

• **value**: `number` \| [`PointData`](../interfaces/PointData.md)

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Defined in

[packages/core/src/renderables/renderable.ts:333](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L333)

***

### shadow

> `get` **shadow**(): [`ShadowType`](../interfaces/ShadowType.md)

> `set` **shadow**(`value`): `void`

#### Parameters

• **value**: [`ShadowType`](../interfaces/ShadowType.md)

#### Returns

[`ShadowType`](../interfaces/ShadowType.md)

#### Defined in

[packages/core/src/renderables/renderable.ts:210](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L210)

***

### shouldUpdate

> `get` **shouldUpdate**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/core/src/renderables/renderable.ts:162](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L162)

***

### skew

> `get` **skew**(): [`ObservablePoint`](ObservablePoint.md)

> `set` **skew**(`value`): `void`

#### Parameters

• **value**: [`PointData`](../interfaces/PointData.md)

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Defined in

[packages/core/src/renderables/renderable.ts:352](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L352)

***

### visible

> `get` **visible**(): `boolean`

> `set` **visible**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Defined in

[packages/core/src/renderables/renderable.ts:367](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L367)

***

### width

> `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[packages/core/src/renderables/renderable.ts:469](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L469)

***

### x

> `get` **x**(): `number`

> `set` **x**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[packages/core/src/renderables/renderable.ts:220](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L220)

***

### y

> `get` **y**(): `number`

> `set` **y**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Defined in

[packages/core/src/renderables/renderable.ts:230](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L230)

## Methods

### \_onUpdate()

> **\_onUpdate**(`_point`?): `void`

#### Parameters

• **\_point?**: [`ObservablePoint`](ObservablePoint.md)

#### Returns

`void`

#### Implementation of

[`Observer`](../interfaces/Observer.md).[`_onUpdate`](../interfaces/Observer.md#_onupdate)

#### Defined in

[packages/core/src/renderables/renderable.ts:359](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L359)

***

### \_render()

> `abstract` `protected` **\_render**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Defined in

[packages/core/src/renderables/renderable.ts:458](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L458)

***

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* `"updateBounds"` \| `"render"`

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

### addTo()

> **addTo**(`app`): [`Renderable`](Renderable.md)

#### Parameters

• **app**: [`App`](App.md)

#### Returns

[`Renderable`](Renderable.md)

#### Defined in

[packages/core/src/renderables/renderable.ts:499](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L499)

***

### changeRawSize()

> `protected` **changeRawSize**(`width`, `height`): `void`

更新原始尺寸

#### Parameters

• **width**: `number`

• **height**: `number`

#### Returns

`void`

#### Defined in

[packages/core/src/renderables/renderable.ts:480](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L480)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/renderables/renderable.ts:504](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L504)

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `"updateBounds"` \| `"render"`

#### Parameters

• **event**: `T`

• ...**args**: `ArgumentMap`\<`object`\>\[`Extract`\<`T`, `"updateBounds"` \| `"render"`\>\]

#### Returns

`boolean`

#### Inherited from

`EventEmitter.emit`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:32

***

### eventNames()

> **eventNames**(): (`"updateBounds"` \| `"render"`)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`"updateBounds"` \| `"render"`)[]

#### Inherited from

`EventEmitter.eventNames`

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:15

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: `"updateBounds"` \| `"render"`

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

• **T** *extends* `"updateBounds"` \| `"render"`

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

• **T** *extends* `"updateBounds"` \| `"render"`

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

• **T** *extends* `"updateBounds"` \| `"render"`

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

### onAdd()

> **onAdd**(`_app`): `void`

#### Parameters

• **\_app**: [`App`](App.md)

#### Returns

`void`

#### Defined in

[packages/core/src/renderables/renderable.ts:489](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L489)

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* `"updateBounds"` \| `"render"`

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

### onRemove()

> **onRemove**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/renderables/renderable.ts:494](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L494)

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: `"updateBounds"` \| `"render"`

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

• **T** *extends* `"updateBounds"` \| `"render"`

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

### render()

> **render**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Defined in

[packages/core/src/renderables/renderable.ts:409](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L409)

***

### shouldUpdateBounds()

> `protected` **shouldUpdateBounds**(`type`?): `void`

#### Parameters

• **type?**: `string`

#### Returns

`void`

#### Defined in

[packages/core/src/renderables/renderable.ts:378](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L378)

***

### updateRawSize()

> `abstract` `protected` **updateRawSize**(): `void`

更新原始尺寸

#### Returns

`void`

#### Defined in

[packages/core/src/renderables/renderable.ts:476](https://github.com/zhuddan/canvas/blob/4e0594a0d45f272f1c29554e1059a5920cb977c7/packages/core/src/renderables/renderable.ts#L476)
