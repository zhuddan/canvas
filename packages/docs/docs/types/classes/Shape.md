[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / Shape

# Class: Shape

渲染元素抽象类

## Extends

- [`Renderable`](Renderable.md)

## Implements

- `IShape`

## Constructors

### new Shape()

> **new Shape**(`options`): [`Shape`](Shape.md)

#### Parameters

• **options**: `Partial`\<`_ShapeOptions`\> = `{}`

#### Returns

[`Shape`](Shape.md)

#### Overrides

[`Renderable`](Renderable.md).[`constructor`](Renderable.md#constructors)

#### Defined in

[packages/core/src/renderables/shape.ts:55](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L55)

## Properties

### \_app

> **\_app**: `null` \| [`App`](App.md) = `null`

#### Inherited from

[`Renderable`](Renderable.md).[`_app`](Renderable.md#_app)

#### Defined in

[packages/core/src/renderables/renderable.ts:363](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L363)

***

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Inherited from

[`Renderable`](Renderable.md).[`_dirty`](Renderable.md#_dirty)

#### Defined in

[packages/core/src/renderables/renderable.ts:166](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L166)

***

### \_rawSize

> `protected` **\_rawSize**: `object`

原始尺寸

#### height

> **height**: `number` = `0`

#### width

> **width**: `number` = `0`

#### Inherited from

[`Renderable`](Renderable.md).[`_rawSize`](Renderable.md#_rawsize)

#### Defined in

[packages/core/src/renderables/renderable.ts:463](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L463)

***

### \_renderId

> **\_renderId**: `number` = `0`

#### Inherited from

[`Renderable`](Renderable.md).[`_renderId`](Renderable.md#_renderid)

#### Defined in

[packages/core/src/renderables/renderable.ts:456](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L456)

***

### \_shouldUpdateBounds

> `protected` **\_shouldUpdateBounds**: `boolean` = `false`

#### Inherited from

[`Renderable`](Renderable.md).[`_shouldUpdateBounds`](Renderable.md#_shouldupdatebounds)

#### Defined in

[packages/core/src/renderables/renderable.ts:376](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L376)

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`prefixed`](Renderable.md#prefixed)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:9

## Accessors

### \_shouldUpdate

> `get` **\_shouldUpdate**(): `boolean`

更新优化
如果_shouldRender为true 则渲染
否则跳过渲染

#### Returns

`boolean`

#### Overrides

[`Renderable`](Renderable.md).[`_shouldUpdate`](Renderable.md#_shouldupdate)

#### Defined in

[packages/core/src/renderables/shape.ts:207](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L207)

***

### alpha

> `get` **alpha**(): `number`

> `set` **alpha**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Inherited from

[`Renderable`](Renderable.md).[`alpha`](Renderable.md#alpha)

#### Defined in

[packages/core/src/renderables/renderable.ts:186](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L186)

***

### anchor

> `get` **anchor**(): [`ObservablePoint`](ObservablePoint.md)

> `set` **anchor**(`value`): `void`

#### Parameters

• **value**: `number` \| [`PointData`](../interfaces/PointData.md)

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Inherited from

[`Renderable`](Renderable.md).[`anchor`](Renderable.md#anchor)

#### Defined in

[packages/core/src/renderables/renderable.ts:266](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L266)

***

### dirty

> `get` **dirty**(): `boolean`

> `set` **dirty**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`dirty`](Renderable.md#dirty)

#### Defined in

[packages/core/src/renderables/renderable.ts:173](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L173)

***

### fillStyle

> `get` **fillStyle**(): `null` \| `string` \| `CanvasGradient` \| `CanvasPattern`

> `set` **fillStyle**(`value`): `void`

#### Parameters

• **value**: `null` \| `string` \| `CanvasGradient` \| `CanvasPattern`

#### Returns

`null` \| `string` \| `CanvasGradient` \| `CanvasPattern`

#### Defined in

[packages/core/src/renderables/shape.ts:375](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L375)

***

### filter

> `get` **filter**(): `string`

> `set` **filter**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Defined in

[packages/core/src/renderables/shape.ts:404](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L404)

***

### height

> `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

[`Renderable`](Renderable.md).[`height`](Renderable.md#height-1)

#### Defined in

[packages/core/src/renderables/renderable.ts:465](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L465)

***

### pivot

> `get` **pivot**(): [`ObservablePoint`](ObservablePoint.md)

> `set` **pivot**(`value`): `void`

#### Parameters

• **value**: `number` \| [`PointData`](../interfaces/PointData.md)

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Inherited from

[`Renderable`](Renderable.md).[`pivot`](Renderable.md#pivot)

#### Defined in

[packages/core/src/renderables/renderable.ts:293](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L293)

***

### position

> `get` **position**(): [`ObservablePoint`](ObservablePoint.md)

> `set` **position**(`value`): `void`

#### Parameters

• **value**: [`PointData`](../interfaces/PointData.md)

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Inherited from

[`Renderable`](Renderable.md).[`position`](Renderable.md#position)

#### Defined in

[packages/core/src/renderables/renderable.ts:242](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L242)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Inherited from

[`Renderable`](Renderable.md).[`rotation`](Renderable.md#rotation)

#### Defined in

[packages/core/src/renderables/renderable.ts:309](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L309)

***

### scale

> `get` **scale**(): [`ObservablePoint`](ObservablePoint.md)

> `set` **scale**(`value`): `void`

#### Parameters

• **value**: `number` \| [`PointData`](../interfaces/PointData.md)

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Inherited from

[`Renderable`](Renderable.md).[`scale`](Renderable.md#scale)

#### Defined in

[packages/core/src/renderables/renderable.ts:333](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L333)

***

### shadow

> `get` **shadow**(): [`ShadowType`](../interfaces/ShadowType.md)

> `set` **shadow**(`value`): `void`

#### Parameters

• **value**: [`ShadowType`](../interfaces/ShadowType.md)

#### Returns

[`ShadowType`](../interfaces/ShadowType.md)

#### Inherited from

[`Renderable`](Renderable.md).[`shadow`](Renderable.md#shadow)

#### Defined in

[packages/core/src/renderables/renderable.ts:210](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L210)

***

### shouldUpdate

> `get` **shouldUpdate**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`shouldUpdate`](Renderable.md#shouldupdate)

#### Defined in

[packages/core/src/renderables/renderable.ts:162](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L162)

***

### skew

> `get` **skew**(): [`ObservablePoint`](ObservablePoint.md)

> `set` **skew**(`value`): `void`

#### Parameters

• **value**: [`PointData`](../interfaces/PointData.md)

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Inherited from

[`Renderable`](Renderable.md).[`skew`](Renderable.md#skew)

#### Defined in

[packages/core/src/renderables/renderable.ts:352](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L352)

***

### strokeStyle

> `get` **strokeStyle**(): `StrokeInput`

> `set` **strokeStyle**(`value`): `void`

#### Parameters

• **value**: `string` \| `CanvasGradient` \| `CanvasPattern` \| `StrokeInput`

#### Returns

`StrokeInput`

#### Defined in

[packages/core/src/renderables/shape.ts:316](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L316)

***

### visible

> `get` **visible**(): `boolean`

> `set` **visible**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Inherited from

[`Renderable`](Renderable.md).[`visible`](Renderable.md#visible)

#### Defined in

[packages/core/src/renderables/renderable.ts:367](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L367)

***

### width

> `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

[`Renderable`](Renderable.md).[`width`](Renderable.md#width-1)

#### Defined in

[packages/core/src/renderables/renderable.ts:469](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L469)

***

### x

> `get` **x**(): `number`

> `set` **x**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Inherited from

[`Renderable`](Renderable.md).[`x`](Renderable.md#x)

#### Defined in

[packages/core/src/renderables/renderable.ts:220](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L220)

***

### y

> `get` **y**(): `number`

> `set` **y**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Inherited from

[`Renderable`](Renderable.md).[`y`](Renderable.md#y)

#### Defined in

[packages/core/src/renderables/renderable.ts:230](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L230)

## Methods

### \_onUpdate()

> **\_onUpdate**(`_point`?): `void`

#### Parameters

• **\_point?**: [`ObservablePoint`](ObservablePoint.md)

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`_onUpdate`](Renderable.md#_onupdate)

#### Defined in

[packages/core/src/renderables/renderable.ts:359](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L359)

***

### \_render()

> `protected` **\_render**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Overrides

[`Renderable`](Renderable.md).[`_render`](Renderable.md#_render)

#### Defined in

[packages/core/src/renderables/shape.ts:216](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L216)

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

[`Renderable`](Renderable.md).[`addListener`](Renderable.md#addlistener)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:45

***

### addTo()

> **addTo**(`app`): [`Shape`](Shape.md)

#### Parameters

• **app**: [`App`](App.md)

#### Returns

[`Shape`](Shape.md)

#### Inherited from

[`Renderable`](Renderable.md).[`addTo`](Renderable.md#addto)

#### Defined in

[packages/core/src/renderables/renderable.ts:499](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L499)

***

### arc()

> **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise`?): [`Shape`](Shape.md)

#### Parameters

• **x**: `number`

• **y**: `number`

• **radius**: `number`

• **startAngle**: `number` = `0`

• **endAngle**: `number` = `...`

• **counterclockwise?**: `boolean`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.arc`

#### Defined in

[packages/core/src/renderables/shape.ts:135](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L135)

***

### arcTo()

> **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): [`Shape`](Shape.md)

#### Parameters

• **x1**: `number`

• **y1**: `number`

• **x2**: `number`

• **y2**: `number`

• **radius**: `number`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.arcTo`

#### Defined in

[packages/core/src/renderables/shape.ts:150](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L150)

***

### beginPath()

> **beginPath**(): [`Shape`](Shape.md)

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.beginPath`

#### Defined in

[packages/core/src/renderables/shape.ts:65](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L65)

***

### bezierCurveTo()

> **bezierCurveTo**(`cp1x`, `cp1y`, `cp2x`, `cp2y`, `x`, `y`): [`Shape`](Shape.md)

#### Parameters

• **cp1x**: `number`

• **cp1y**: `number`

• **cp2x**: `number`

• **cp2y**: `number`

• **x**: `number`

• **y**: `number`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.bezierCurveTo`

#### Defined in

[packages/core/src/renderables/shape.ts:158](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L158)

***

### changeRawSize()

> `protected` **changeRawSize**(`width`, `height`): `void`

更新原始尺寸

#### Parameters

• **width**: `number`

• **height**: `number`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`changeRawSize`](Renderable.md#changerawsize)

#### Defined in

[packages/core/src/renderables/renderable.ts:480](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L480)

***

### closePath()

> **closePath**(): [`Shape`](Shape.md)

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.closePath`

#### Defined in

[packages/core/src/renderables/shape.ts:73](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L73)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`destroy`](Renderable.md#destroy)

#### Defined in

[packages/core/src/renderables/renderable.ts:504](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L504)

***

### ellipse()

> **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `counterclockwise`?): [`Shape`](Shape.md)

#### Parameters

• **x**: `number`

• **y**: `number`

• **radiusX**: `number`

• **radiusY**: `number`

• **rotation**: `number`

• **startAngle**: `number`

• **endAngle**: `number`

• **counterclockwise?**: `boolean`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.ellipse`

#### Defined in

[packages/core/src/renderables/shape.ts:173](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L173)

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

[`Renderable`](Renderable.md).[`emit`](Renderable.md#emit)

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

[`Renderable`](Renderable.md).[`eventNames`](Renderable.md#eventnames)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:15

***

### fill()

> **fill**(`color`?): [`Shape`](Shape.md)

#### Parameters

• **color?**: `null` \| `string` \| `CanvasGradient` \| `CanvasPattern`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.fill`

#### Defined in

[packages/core/src/renderables/shape.ts:379](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L379)

***

### fillRect()

> **fillRect**(`x`, `y`, `w`, `h`): [`Shape`](Shape.md)

#### Parameters

• **x**: `number`

• **y**: `number`

• **w**: `number`

• **h**: `number`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.fillRect`

#### Defined in

[packages/core/src/renderables/shape.ts:190](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L190)

***

### lineCap()

> **lineCap**(`cap`): [`Shape`](Shape.md)

#### Parameters

• **cap**: `"butt"` \| `"round"` \| `"square"`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.lineCap`

#### Defined in

[packages/core/src/renderables/shape.ts:81](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L81)

***

### lineJoin()

> **lineJoin**(`join`): [`Shape`](Shape.md)

#### Parameters

• **join**: `"round"` \| `"bevel"` \| `"miter"`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.lineJoin`

#### Defined in

[packages/core/src/renderables/shape.ts:89](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L89)

***

### lineTo()

> **lineTo**(`x`, `y`): [`Shape`](Shape.md)

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.lineTo`

#### Defined in

[packages/core/src/renderables/shape.ts:105](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L105)

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: `"updateBounds"` \| `"render"`

#### Returns

`number`

#### Inherited from

[`Renderable`](Renderable.md).[`listenerCount`](Renderable.md#listenercount)

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

[`Renderable`](Renderable.md).[`listeners`](Renderable.md#listeners)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:20

***

### moveTo()

> **moveTo**(`x`, `y`): [`Shape`](Shape.md)

#### Parameters

• **x**: `number`

• **y**: `number`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.moveTo`

#### Defined in

[packages/core/src/renderables/shape.ts:97](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L97)

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

[`Renderable`](Renderable.md).[`off`](Renderable.md#off)

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

[`Renderable`](Renderable.md).[`on`](Renderable.md#on)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:40

***

### onAdd()

> **onAdd**(`_app`): `void`

#### Parameters

• **\_app**: [`App`](App.md)

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`onAdd`](Renderable.md#onadd)

#### Defined in

[packages/core/src/renderables/renderable.ts:489](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L489)

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

[`Renderable`](Renderable.md).[`once`](Renderable.md#once)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:54

***

### onRemove()

> **onRemove**(): `void`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`onRemove`](Renderable.md#onremove)

#### Defined in

[packages/core/src/renderables/renderable.ts:494](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L494)

***

### rect()

> **rect**(`x`, `y`, `w`, `h`): [`Shape`](Shape.md)

#### Parameters

• **x**: `number`

• **y**: `number`

• **w**: `number`

• **h**: `number`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.rect`

#### Defined in

[packages/core/src/renderables/shape.ts:113](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L113)

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: `"updateBounds"` \| `"render"`

#### Returns

`this`

#### Inherited from

[`Renderable`](Renderable.md).[`removeAllListeners`](Renderable.md#removealllisteners)

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

[`Renderable`](Renderable.md).[`removeListener`](Renderable.md#removelistener)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:63

***

### render()

> **render**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`render`](Renderable.md#render)

#### Defined in

[packages/core/src/renderables/renderable.ts:409](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L409)

***

### roundRect()

> **roundRect**(`x`, `y`, `w`, `h`, `radii`?): [`Shape`](Shape.md)

#### Parameters

• **x**: `number`

• **y**: `number`

• **w**: `number`

• **h**: `number`

• **radii?**: `number` \| `DOMPointInit` \| `Iterable`\<`number` \| `DOMPointInit`\>

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.roundRect`

#### Defined in

[packages/core/src/renderables/shape.ts:121](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L121)

***

### shouldUpdateBounds()

> `protected` **shouldUpdateBounds**(`type`?): `void`

#### Parameters

• **type?**: `string`

#### Returns

`void`

#### Inherited from

[`Renderable`](Renderable.md).[`shouldUpdateBounds`](Renderable.md#shouldupdatebounds)

#### Defined in

[packages/core/src/renderables/renderable.ts:378](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/renderable.ts#L378)

***

### stroke()

> **stroke**(`value`?): [`Shape`](Shape.md)

#### Parameters

• **value?**: `string` \| `CanvasGradient` \| `CanvasPattern` \| `StrokeInput`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.stroke`

#### Defined in

[packages/core/src/renderables/shape.ts:389](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L389)

***

### strokeRect()

> **strokeRect**(`x`, `y`, `w`, `h`): [`Shape`](Shape.md)

#### Parameters

• **x**: `number`

• **y**: `number`

• **w**: `number`

• **h**: `number`

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.strokeRect`

#### Defined in

[packages/core/src/renderables/shape.ts:198](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L198)

***

### updateRawSize()

> `protected` **updateRawSize**(): `void`

更新原始尺寸

#### Returns

`void`

#### Overrides

[`Renderable`](Renderable.md).[`updateRawSize`](Renderable.md#updaterawsize)

#### Defined in

[packages/core/src/renderables/shape.ts:320](https://github.com/zhuddan/canvas/blob/a6fd8f143d286553bb693ef3ef0c7af4be86a292/packages/core/src/renderables/shape.ts#L320)
