[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / ObservablePoint

# Class: ObservablePoint

Common interface for points. Both Point and ObservablePoint implement it

## Memberof

maths

## Implements

- [`PointLike`](../interfaces/PointLike.md)

## Constructors

### new ObservablePoint()

> **new ObservablePoint**(`observer`, `x`?, `y`?): [`ObservablePoint`](ObservablePoint.md)

#### Parameters

• **observer**: `null` \| [`Observer`](../interfaces/Observer.md)\<[`ObservablePoint`](ObservablePoint.md)\>

• **x?**: `number`

• **y?**: `number`

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:12](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L12)

## Properties

### \_x

> **\_x**: `number`

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:9](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L9)

***

### \_y

> **\_y**: `number`

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:10](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L10)

## Accessors

### x

> `get` **x**(): `number`

X coord

> `set` **x**(`value`): `void`

X coord

#### Parameters

• **value**: `number`

#### Returns

`number`

X coord

#### Implementation of

[`PointLike`](../interfaces/PointLike.md).[`x`](../interfaces/PointLike.md#x)

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:49](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L49)

***

### y

> `get` **y**(): `number`

Y coord

> `set` **y**(`value`): `void`

Y coord

#### Parameters

• **value**: `number`

#### Returns

`number`

Y coord

#### Implementation of

[`PointLike`](../interfaces/PointLike.md).[`y`](../interfaces/PointLike.md#y)

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:60](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L60)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `object`

#### Returns

`object`

##### next()

> **next**: () => `object` \| `object`

###### Returns

`object` \| `object`

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:71](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L71)

***

### clone()

> **clone**(`observer`?): [`ObservablePoint`](ObservablePoint.md)

#### Parameters

• **observer?**: [`Observer`](../interfaces/Observer.md)\<[`ObservablePoint`](ObservablePoint.md)\>

#### Returns

[`ObservablePoint`](ObservablePoint.md)

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:18](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L18)

***

### copyFrom()

> **copyFrom**(`p`): `this`

Copies x and y from the given point

#### Parameters

• **p**: [`PointData`](../interfaces/PointData.md)

The point to copy from

#### Returns

`this`

Returns itself.

#### Implementation of

[`PointLike`](../interfaces/PointLike.md).[`copyFrom`](../interfaces/PointLike.md#copyfrom)

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:31](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L31)

***

### copyTo()

> **copyTo**\<`T`\>(`p`): `T`

Copies x and y into the given point

#### Type Parameters

• **T** *extends* [`PointLike`](../interfaces/PointLike.md)

#### Parameters

• **p**: `T`

The point to copy.

#### Returns

`T`

Given point with values updated

#### Implementation of

[`PointLike`](../interfaces/PointLike.md).[`copyTo`](../interfaces/PointLike.md#copyto)

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:40](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L40)

***

### equals()

> **equals**(`p`): `boolean`

Returns true if the given point is equal to this point

#### Parameters

• **p**: [`PointData`](../interfaces/PointData.md)

The point to check

#### Returns

`boolean`

Whether the given point equal to this point

#### Implementation of

[`PointLike`](../interfaces/PointLike.md).[`equals`](../interfaces/PointLike.md#equals)

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:45](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L45)

***

### set()

> **set**(`x`, `y`): `this`

Sets the point to a new x and y position.
If y is omitted, both x and y will be set to x.

#### Parameters

• **x**: `number` = `0`

position of the point on the x axis

• **y**: `number` = `x`

position of the point on the y axis

#### Returns

`this`

#### Implementation of

[`PointLike`](../interfaces/PointLike.md).[`set`](../interfaces/PointLike.md#set)

#### Defined in

[packages/core/src/coordinate/ObservablePoint.ts:22](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/ObservablePoint.ts#L22)
