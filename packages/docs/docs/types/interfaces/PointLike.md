[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / PointLike

# Interface: PointLike

Common interface for points. Both Point and ObservablePoint implement it

## Memberof

maths

## Extends

- [`PointData`](PointData.md)

## Properties

### copyFrom()

> **copyFrom**: (`p`) => `this`

Copies x and y from the given point

#### Parameters

• **p**: [`PointData`](PointData.md)

The point to copy from

#### Returns

`this`

Returns itself.

#### Defined in

[packages/core/src/coordinate/PointLike.ts:13](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/PointLike.ts#L13)

***

### copyTo()

> **copyTo**: \<`T`\>(`p`) => `T`

Copies x and y into the given point

#### Type Parameters

• **T** *extends* [`PointLike`](PointLike.md)

#### Parameters

• **p**: `T`

The point to copy.

#### Returns

`T`

Given point with values updated

#### Defined in

[packages/core/src/coordinate/PointLike.ts:19](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/PointLike.ts#L19)

***

### equals()

> **equals**: (`p`) => `boolean`

Returns true if the given point is equal to this point

#### Parameters

• **p**: [`PointData`](PointData.md)

The point to check

#### Returns

`boolean`

Whether the given point equal to this point

#### Defined in

[packages/core/src/coordinate/PointLike.ts:25](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/PointLike.ts#L25)

***

### set()

> **set**: (`x`?, `y`?) => `void`

Sets the point to a new x and y position.
If y is omitted, both x and y will be set to x.

#### Parameters

• **x?**: `number`

position of the point on the x axis

• **y?**: `number`

position of the point on the y axis

#### Returns

`void`

#### Defined in

[packages/core/src/coordinate/PointLike.ts:32](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/PointLike.ts#L32)

***

### x

> **x**: `number`

X coord

#### Inherited from

[`PointData`](PointData.md).[`x`](PointData.md#x)

#### Defined in

[packages/core/src/coordinate/PointData.ts:7](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/PointData.ts#L7)

***

### y

> **y**: `number`

Y coord

#### Inherited from

[`PointData`](PointData.md).[`y`](PointData.md#y)

#### Defined in

[packages/core/src/coordinate/PointData.ts:10](https://github.com/zhuddan/canvas/blob/f6c03e85774f3d0f4895661f3bf09fbc689199aa/packages/core/src/coordinate/PointData.ts#L10)
