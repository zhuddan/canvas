[**@zd~/canvas**](../README.md) • **Docs**

***

[@zd~/canvas](../README.md) / Ticker

# Class: Ticker

一个基于 [requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame) 的循环计时器

## Constructors

### new Ticker()

> **new Ticker**(`autoStart`): [`Ticker`](Ticker.md)

#### Parameters

• **autoStart**: `boolean` = `true`

#### Returns

[`Ticker`](Ticker.md)

#### Defined in

[packages/core/src/app.ts:406](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L406)

## Properties

### autoStart

> `protected` **autoStart**: `boolean` = `true`

#### Defined in

[packages/core/src/app.ts:406](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L406)

***

### cancelAnimationFrame()?

> `optional` **cancelAnimationFrame**: (`handle`) => `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)

#### Parameters

• **handle**: `number`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:402](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L402)

***

### handler

> **handler**: (`time`) => `void`[] = `[]`

#### Defined in

[packages/core/src/app.ts:405](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L405)

***

### myReq

> **myReq**: `number` = `0`

#### Defined in

[packages/core/src/app.ts:403](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L403)

***

### requestAnimationFrame()?

> `optional` **requestAnimationFrame**: (`callback`) => `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)

#### Parameters

• **callback**: `FrameRequestCallback`

#### Returns

`number`

#### Defined in

[packages/core/src/app.ts:401](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L401)

## Methods

### add()

> **add**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:424](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L424)

***

### init()

> **init**(`canvas`, `autoStart`): `void`

#### Parameters

• **canvas**: `HTMLCanvasElement`

• **autoStart**: `boolean`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:410](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L410)

***

### remove()

> **remove**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:432](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L432)

***

### removeAll()

> **removeAll**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:428](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L428)

***

### start()

> **start**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:439](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L439)

***

### stop()

> **stop**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:446](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L446)

***

### update()

> **update**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:453](https://github.com/zhuddan/canvas/blob/c11ee44ae428df81cce04f84fbeb069a37e4f15c/packages/core/src/app.ts#L453)
