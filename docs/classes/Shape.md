[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / Shape

# Class: Shape

## Extends

- [`Display`](Display.md)

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

[`Display`](Display.md).[`constructor`](Display.md#constructors)

#### Defined in

[src/object/shape.ts:59](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L59)

## Properties

### \_app

> **\_app**: `null` \| [`App`](App.md) = `null`

#### Inherited from

[`Display`](Display.md).[`_app`](Display.md#_app)

#### Defined in

[src/object/display.ts:290](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L290)

***

### \_dirty

> `protected` **\_dirty**: `boolean` = `false`

#### Inherited from

[`Display`](Display.md).[`_dirty`](Display.md#_dirty)

#### Defined in

[src/object/display.ts:121](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L121)

***

### \_env

> `protected` **\_env**: `ENV`

#### Inherited from

[`Display`](Display.md).[`_env`](Display.md#_env)

#### Defined in

[src/object/display.ts:79](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L79)

***

### \_renderId

> **\_renderId**: `number` = `0`

#### Inherited from

[`Display`](Display.md).[`_renderId`](Display.md#_renderid)

#### Defined in

[src/object/display.ts:375](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L375)

***

### \_shouldUpdateBounds

> `protected` **\_shouldUpdateBounds**: `boolean` = `true`

#### Inherited from

[`Display`](Display.md).[`_shouldUpdateBounds`](Display.md#_shouldupdatebounds)

#### Defined in

[src/object/display.ts:304](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L304)

***

### transformHeight

> `protected` **transformHeight**: `number` = `0`

同于形变转换的高度

#### Overrides

[`Display`](Display.md).[`transformHeight`](Display.md#transformheight)

#### Defined in

[src/object/shape.ts:326](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L326)

***

### transformWidth

> `protected` **transformWidth**: `number` = `0`

同于形变转换的宽度

#### Overrides

[`Display`](Display.md).[`transformWidth`](Display.md#transformwidth)

#### Defined in

[src/object/shape.ts:325](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L325)

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Inherited from

[`Display`](Display.md).[`prefixed`](Display.md#prefixed)

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

[`Display`](Display.md).[`_shouldUpdate`](Display.md#_shouldupdate)

#### Defined in

[src/object/shape.ts:212](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L212)

***

### alpha

> `get` **alpha**(): `number`

> `set` **alpha**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Inherited from

[`Display`](Display.md).[`alpha`](Display.md#alpha)

#### Defined in

[src/object/display.ts:210](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L210)

***

### anchor

> `get` **anchor**(): `ObservablePoint`

> `set` **anchor**(`value`): `void`

#### Parameters

• **value**: `number` \| `PointData`

#### Returns

`ObservablePoint`

#### Inherited from

[`Display`](Display.md).[`anchor`](Display.md#anchor)

#### Defined in

[src/object/display.ts:241](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L241)

***

### dirty

> `get` **dirty**(): `boolean`

> `set` **dirty**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Inherited from

[`Display`](Display.md).[`dirty`](Display.md#dirty)

#### Defined in

[src/object/display.ts:128](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L128)

***

### fillStyle

> `get` **fillStyle**(): `null` \| `string` \| `CanvasGradient` \| `CanvasPattern`

> `set` **fillStyle**(`value`): `void`

#### Parameters

• **value**: `null` \| `string` \| `CanvasGradient` \| `CanvasPattern`

#### Returns

`null` \| `string` \| `CanvasGradient` \| `CanvasPattern`

#### Defined in

[src/object/shape.ts:381](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L381)

***

### filter

> `get` **filter**(): `string`

> `set` **filter**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Defined in

[src/object/shape.ts:410](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L410)

***

### height

> `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

[`Display`](Display.md).[`height`](Display.md#height)

#### Defined in

[src/object/display.ts:392](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L392)

***

### pivot

> `get` **pivot**(): `ObservablePoint`

> `set` **pivot**(`value`): `void`

#### Parameters

• **value**: `number` \| `PointData`

#### Returns

`ObservablePoint`

#### Inherited from

[`Display`](Display.md).[`pivot`](Display.md#pivot)

#### Defined in

[src/object/display.ts:262](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L262)

***

### position

> `get` **position**(): `ObservablePoint`

> `set` **position**(`value`): `void`

#### Parameters

• **value**: `PointData`

#### Returns

`ObservablePoint`

#### Inherited from

[`Display`](Display.md).[`position`](Display.md#position)

#### Defined in

[src/object/display.ts:160](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L160)

***

### rotation

> `get` **rotation**(): `number`

> `set` **rotation**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Inherited from

[`Display`](Display.md).[`rotation`](Display.md#rotation)

#### Defined in

[src/object/display.ts:223](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L223)

***

### scale

> `get` **scale**(): `ObservablePoint`

> `set` **scale**(`value`): `void`

#### Parameters

• **value**: `number` \| `PointData`

#### Returns

`ObservablePoint`

#### Inherited from

[`Display`](Display.md).[`scale`](Display.md#scale)

#### Defined in

[src/object/display.ts:178](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L178)

***

### shadow

> `get` **shadow**(): `ShadowType`

> `set` **shadow**(`value`): `void`

#### Parameters

• **value**: `ShadowType`

#### Returns

`ShadowType`

#### Inherited from

[`Display`](Display.md).[`shadow`](Display.md#shadow)

#### Defined in

[src/object/display.ts:282](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L282)

***

### shouldUpdate

> `get` **shouldUpdate**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Display`](Display.md).[`shouldUpdate`](Display.md#shouldupdate)

#### Defined in

[src/object/display.ts:117](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L117)

***

### skew

> `get` **skew**(): `ObservablePoint`

> `set` **skew**(`value`): `void`

#### Parameters

• **value**: `PointData`

#### Returns

`ObservablePoint`

#### Inherited from

[`Display`](Display.md).[`skew`](Display.md#skew)

#### Defined in

[src/object/display.ts:194](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L194)

***

### strokeStyle

> `get` **strokeStyle**(): `StrokeInput`

> `set` **strokeStyle**(`value`): `void`

#### Parameters

• **value**: `string` \| `CanvasGradient` \| `CanvasPattern` \| `StrokeInput`

#### Returns

`StrokeInput`

#### Defined in

[src/object/shape.ts:321](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L321)

***

### visible

> `get` **visible**(): `boolean`

> `set` **visible**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Inherited from

[`Display`](Display.md).[`visible`](Display.md#visible)

#### Defined in

[src/object/display.ts:295](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L295)

***

### width

> `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

[`Display`](Display.md).[`width`](Display.md#width)

#### Defined in

[src/object/display.ts:396](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L396)

***

### x

> `get` **x**(): `number`

> `set` **x**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Inherited from

[`Display`](Display.md).[`x`](Display.md#x)

#### Defined in

[src/object/display.ts:138](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L138)

***

### y

> `get` **y**(): `number`

> `set` **y**(`value`): `void`

#### Parameters

• **value**: `number`

#### Returns

`number`

#### Inherited from

[`Display`](Display.md).[`y`](Display.md#y)

#### Defined in

[src/object/display.ts:148](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L148)

## Methods

### \_onUpdate()

> **\_onUpdate**(`_point`?): `void`

#### Parameters

• **\_point?**: `ObservablePoint`

#### Returns

`void`

#### Inherited from

[`Display`](Display.md).[`_onUpdate`](Display.md#_onupdate)

#### Defined in

[src/object/display.ts:286](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L286)

***

### \_render()

> `protected` **\_render**(`ctx`): `void`

#### Parameters

• **ctx**: `CanvasRenderingContext2D`

#### Returns

`void`

#### Overrides

[`Display`](Display.md).[`_render`](Display.md#_render)

#### Defined in

[src/object/shape.ts:221](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L221)

***

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* `"ready"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

[`Display`](Display.md).[`addListener`](Display.md#addlistener)

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

[`Display`](Display.md).[`addTo`](Display.md#addto)

#### Defined in

[src/object/display.ts:410](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L410)

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

[src/object/shape.ts:140](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L140)

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

[src/object/shape.ts:155](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L155)

***

### beginPath()

> **beginPath**(): [`Shape`](Shape.md)

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.beginPath`

#### Defined in

[src/object/shape.ts:70](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L70)

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

[src/object/shape.ts:163](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L163)

***

### closePath()

> **closePath**(): [`Shape`](Shape.md)

#### Returns

[`Shape`](Shape.md)

#### Implementation of

`IShape.closePath`

#### Defined in

[src/object/shape.ts:78](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L78)

***

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[`Display`](Display.md).[`destroy`](Display.md#destroy)

#### Defined in

[src/object/display.ts:415](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L415)

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

[src/object/shape.ts:178](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L178)

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `"ready"`

#### Parameters

• **event**: `T`

• ...**args**: `ArgumentMap`\<`object`\>\[`Extract`\<`T`, `"ready"`\>\]

#### Returns

`boolean`

#### Inherited from

[`Display`](Display.md).[`emit`](Display.md#emit)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:32

***

### eventNames()

> **eventNames**(): `"ready"`[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

`"ready"`[]

#### Inherited from

[`Display`](Display.md).[`eventNames`](Display.md#eventnames)

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

[src/object/shape.ts:385](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L385)

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

[src/object/shape.ts:195](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L195)

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

[src/object/shape.ts:86](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L86)

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

[src/object/shape.ts:94](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L94)

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

[src/object/shape.ts:110](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L110)

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

• **event**: `"ready"`

#### Returns

`number`

#### Inherited from

[`Display`](Display.md).[`listenerCount`](Display.md#listenercount)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:27

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `"ready"`

#### Parameters

• **event**: `T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

[`Display`](Display.md).[`listeners`](Display.md#listeners)

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

[src/object/shape.ts:102](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L102)

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

#### Type Parameters

• **T** *extends* `"ready"`

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

[`Display`](Display.md).[`off`](Display.md#off)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:69

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a listener for a given event.

#### Type Parameters

• **T** *extends* `"ready"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

[`Display`](Display.md).[`on`](Display.md#on)

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

[`Display`](Display.md).[`onAdd`](Display.md#onadd)

#### Defined in

[src/object/display.ts:400](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L400)

***

### onRemove()

> **onRemove**(): `void`

#### Returns

`void`

#### Inherited from

[`Display`](Display.md).[`onRemove`](Display.md#onremove)

#### Defined in

[src/object/display.ts:405](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L405)

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* `"ready"`

#### Parameters

• **event**: `T`

• **fn**

• **context?**: `any`

#### Returns

`this`

#### Inherited from

[`Display`](Display.md).[`once`](Display.md#once)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:54

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

[src/object/shape.ts:118](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L118)

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

• **event?**: `"ready"`

#### Returns

`this`

#### Inherited from

[`Display`](Display.md).[`removeAllListeners`](Display.md#removealllisteners)

#### Defined in

node\_modules/.pnpm/eventemitter3@5.0.1/node\_modules/eventemitter3/index.d.ts:79

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* `"ready"`

#### Parameters

• **event**: `T`

• **fn?**

• **context?**: `any`

• **once?**: `boolean`

#### Returns

`this`

#### Inherited from

[`Display`](Display.md).[`removeListener`](Display.md#removelistener)

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

[`Display`](Display.md).[`render`](Display.md#render)

#### Defined in

[src/object/display.ts:328](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L328)

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

[src/object/shape.ts:126](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L126)

***

### shouldUpdateBounds()

> `protected` **shouldUpdateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[`Display`](Display.md).[`shouldUpdateBounds`](Display.md#shouldupdatebounds)

#### Defined in

[src/object/display.ts:306](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/display.ts#L306)

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

[src/object/shape.ts:395](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L395)

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

[src/object/shape.ts:203](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L203)

***

### updateTransformBounds()

> `protected` **updateTransformBounds**(): `void`

同于形变转换的边界

#### Returns

`void`

#### Overrides

[`Display`](Display.md).[`updateTransformBounds`](Display.md#updatetransformbounds)

#### Defined in

[src/object/shape.ts:327](https://github.com/zhuddan/canvas/blob/b50206ae1c4b263dbb91a272fa7cf66b9bc4f67b/src/object/shape.ts#L327)
