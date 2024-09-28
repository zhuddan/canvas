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

[packages/core/src/app.ts:413](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L413)

## Properties

### autoStart

> `protected` **autoStart**: `boolean` = `true`

#### Defined in

[packages/core/src/app.ts:413](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L413)

***

### cancelAnimationFrame()?

> `optional` **cancelAnimationFrame**: (`handle`) => `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)

#### Parameters

• **handle**: `number`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:409](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L409)

***

### handler

> **handler**: (`time`) => `void`[] = `[]`

#### Defined in

[packages/core/src/app.ts:412](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L412)

***

### myReq

> **myReq**: `number` = `0`

#### Defined in

[packages/core/src/app.ts:410](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L410)

***

### requestAnimationFrame()?

> `optional` **requestAnimationFrame**: (`callback`) => `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)

#### Parameters

• **callback**: `FrameRequestCallback`

#### Returns

`number`

#### Defined in

[packages/core/src/app.ts:408](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L408)

## Methods

### add()

> **add**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:431](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L431)

***

### init()

> **init**(`canvas`, `autoStart`): `void`

#### Parameters

• **canvas**: `HTMLCanvasElement`

• **autoStart**: `boolean`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:417](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L417)

***

### remove()

> **remove**(`fn`): `void`

#### Parameters

• **fn**

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:439](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L439)

***

### removeAll()

> **removeAll**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:435](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L435)

***

### start()

> **start**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:446](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L446)

***

### stop()

> **stop**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:453](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L453)

***

### update()

> **update**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/app.ts:460](https://github.com/zhuddan/canvas/blob/d52e9d518af896aea2877cea1b89cdb1bc75e617/packages/core/src/app.ts#L460)
