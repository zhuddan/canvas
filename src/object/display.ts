import EventEmitter from 'eventemitter3'
import type { App } from '../app'
import type { Observer } from '../coordinate/ObservablePoint'
import { ObservablePoint } from '../coordinate/ObservablePoint'
import type { PointData } from '../coordinate/PointData'
import { createProxy, ensureBetween, getEnv } from '../utils'

export interface ShadowType {
  /**
   * [CanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
   */
  color: string
  /**
   * [CanvasRenderingContext2D.shadowOffsetX](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
   */
  x?: number
  /**
   * [CanvasRenderingContext2D.shadowOffsetY](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
   */
  y?: number
  /**
   * [CanvasRenderingContext2D.shadowBlur](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
   */
  blur?: number
}
/**
 * [单位矩阵变化](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform)
 */
export interface DisplayOptions {
  /**
   * 元素是否可见
   */
  visible?: boolean
  /**
   * 元素位置x
   */
  x?: number
  /**
   * 元素位置y
   */
  y?: number
  /**
   * 元素位置
   */
  position?: PointData
  /**
   * 旋转角度(弧度)
   */
  rotation?: number
  /**
   * 缩放比例
   */
  scale?: PointData | number
  /**
   * 单位矩阵变化中心，默认是[0,0]表示左上角，[1,1]表示右下角，[0.5,0.5]表示中心
   *
   * 此属性可以很好的控制元素的锚点，不用计算相对位置
   *
   * 例如：一个500x500的画布上需要绘制一个上下居中的图片
   *
   * ``` ts
   * const text = new Picture('demo.png',{
   *  anchor: 0.5
   * })
   * ```
   */
  anchor?: PointData | number
  /**
   * 同 anchor，但是具体坐标，建议使用 anchor
   */
  pivot?: PointData | number
  /**
   * 元素倾斜
   */
  skew?: PointData
  /**
   * 透明度
   */
  alpha?: number
  /**
   * 阴影
   */
  shadow?: ShadowType
}

/**
 * 默认值
 */
const defaultSkew = new ObservablePoint(null)
const defaultPivot = new ObservablePoint(null)
const defaultAnchor = new ObservablePoint(null)
const defaultScale = new ObservablePoint(null, 1, 1)

export abstract class Display extends EventEmitter<{
  ready: []
  updateBounds: [width: number, height: number]
}> implements Observer<ObservablePoint> {
  protected _env = getEnv()
  constructor(options: DisplayOptions = {}) {
    super()
    this.visible = options.visible ?? true
    if (options.position) {
      this.position = options.position
    }
    else {
      this.x = options.x ?? 0
      this.y = options.y ?? 0
    }
    this.scale = options.scale ?? 1
    this.skew = options.skew ?? { x: 0, y: 0 }
    this.pivot = options.pivot ?? 0
    this.shadow = options.shadow ?? this._shadow
    this.rotation = options.rotation ?? 0
    this.anchor = options.anchor ?? 0
    this.alpha = options.alpha ?? 1
  }

  /**
   * 更新优化
   */

  private get __shouldUpdate() {
    return !(!this.visible
      || this.scale.x === 0
      || this.scale.y === 0
      || this.alpha === 0)
  }
  /**
   * 更新优化
   * 如果_shouldRender为true 则渲染
   * 否则跳过渲染
   */
  abstract get _shouldUpdate(): boolean

  get shouldUpdate() {
    return this.__shouldUpdate && this._shouldUpdate
  }

  protected _dirty = false
  set dirty(value) {
    if (this._dirty === value)
      return
    this._dirty = value
  }

  get dirty() {
    return this._dirty
  }

  set x(value) {
    if (this.x !== value) {
      this.position.x = value
    }
  }

  get x() {
    return this.position.x
  }

  set y(value) {
    if (this.y !== value) {
      this.position.y = value
    }
  }

  get y() {
    return this.position.y
  }

  private _position = new ObservablePoint(this, 0, 0)

  set position(value: PointData) {
    if (this.position !== value) {
      this._position.copyFrom(value)
    }
  }

  get position(): ObservablePoint {
    return this._position
  }

  private _scale: ObservablePoint = defaultScale

  set scale(value: PointData | number) {
    if (this._scale === defaultScale) {
      this._scale = new ObservablePoint(this, 1, 1)
    }
    if (typeof value === 'number') {
      this._scale.set(value)
    }
    else {
      this._scale.copyFrom(value)
    }
  }

  get scale(): ObservablePoint {
    if (this._scale === defaultScale) {
      this._scale = new ObservablePoint(this, 1, 1)
    }
    return this._scale
  }

  private _skew: ObservablePoint = defaultSkew

  set skew(value: PointData) {
    if (this._skew === defaultSkew) {
      this._skew = new ObservablePoint(this)
    }
    this._skew.copyFrom(value)
  }

  get skew(): ObservablePoint {
    if (this._skew === defaultSkew) {
      this._skew = new ObservablePoint(this, 0, 0)
    }
    return this._skew
  }

  private _alpha = 1

  set alpha(value) {
    if (this.alpha !== value) {
      this._alpha = value
      this._onUpdate()
    }
  }

  get alpha() {
    return this._alpha
  }

  private _rotation = 0

  set rotation(value) {
    if (this.rotation !== value) {
      this._rotation = value
      this._onUpdate()
    }
  }

  get rotation() {
    return this._rotation
  }

  private _anchor = defaultAnchor

  set anchor(value: PointData | number) {
    if (this._anchor === defaultAnchor) {
      this._anchor = new ObservablePoint(this, 0, 0)
    }
    if (typeof value === 'number') {
      this._anchor.set(value)
    }
    else {
      this._anchor.copyFrom(value)
    }
  }

  get anchor(): ObservablePoint {
    if (this._anchor === defaultAnchor) {
      this._anchor = new ObservablePoint(this)
    }
    return this._anchor
  }

  private _pivot: ObservablePoint = defaultPivot

  set pivot(value: PointData | number) {
    if (this._pivot === defaultPivot) {
      this._pivot = new ObservablePoint(this, 0, 0)
    }
    if (typeof value === 'number') {
      this._pivot.set(value)
    }
    else {
      this._pivot.copyFrom(value)
    }
  }

  get pivot(): ObservablePoint {
    if (this._pivot === defaultPivot) {
      this._pivot = new ObservablePoint(this)
    }
    return this._pivot
  }

  private _shadow: ShadowType = { x: 0, y: 0 } as ShadowType

  set shadow(value) {
    if (value === this._shadow)
      return
    if (value) {
      if (value.x === undefined)
        value.x = 0
      if (value.y === undefined)
        value.y = 0
      if (value.blur === undefined)
        value.blur = 0

      this._shadow = createProxy(value, () => {
        this._onUpdate()
      })
      this._onUpdate()
    }
  }

  get shadow(): ShadowType {
    return this._shadow
  }

  _onUpdate(_point?: ObservablePoint | undefined) {
    this.dirty = true
  }

  _app: App | null = null
  // abstract style: BaseStyle

  private _visible = true

  get visible() {
    return this._visible
  }

  set visible(value) {
    this._visible = value
    this._onUpdate()
  }

  protected _shouldUpdateBounds = false

  protected shouldUpdateBounds() {
    this._shouldUpdateBounds = true
  }

  private _baseRender(ctx: CanvasRenderingContext2D) {
    if ((this.shadow?.x || this.shadow?.y)
      && (this.shadow?.blur || this.shadow?.color)) {
      if (this.shadow.color) {
        ctx.shadowColor = this.shadow.color
      }
      if (this.shadow.blur) {
        ctx.shadowBlur = this.shadow.blur
      }
      if (this.shadow.x) {
        ctx.shadowOffsetX = this.shadow.x
      }
      if (this.shadow.y) {
        ctx.shadowOffsetY = this.shadow.y
      }
    }
  }

  public render(ctx: CanvasRenderingContext2D) {
    if (this._shouldUpdateBounds) {
      this.updateTransformBounds()
      this._shouldUpdateBounds = false
    }
    if (this.alpha !== 1) {
      ctx.globalAlpha = this.alpha
    }
    const dpr = this._app?.dpr ?? 1
    const scaleX = this.scale.x * dpr
    const scaleY = this.scale.y * dpr
    const skewX = this.skew.x
    const skewY = this.skew.y
    const positionX = this.position.x * dpr
    const positionY = this.position.y * dpr
    const pivotX = this.pivot.x
    const pivotY = this.pivot.y
    const rotation = this.rotation
    // Calculate rotation matrix components
    const cos = Math.cos(rotation)
    const sin = Math.sin(rotation)

    const anchorX = ensureBetween(this.anchor.x, 0, 1)
    const anchorY = ensureBetween(this.anchor.y, 0, 1)

    const originX = this.transformWidth * anchorX
    const originY = this.transformHeight * anchorY

    const dx = positionX - (pivotX + originX) * cos * scaleX + (pivotY + originY) * sin * scaleY
    const dy = positionY - (pivotX + originX) * sin * scaleX - (pivotY + originY) * cos * scaleY

    ctx.setTransform(
      scaleX * cos + skewY * -sin, // a
      scaleX * sin + skewY * cos, // b
      skewX * cos + scaleY * -sin, // c
      skewX * sin + scaleY * cos, // d
      dx, // e
      dy, // f
    )
    const _position = this.position.clone()
    this.position.set(0)
    this._baseRender(ctx)
    this._render(ctx)
    this.position = _position
    ctx.resetTransform()
  }

  _renderId = 0
  protected abstract _render(ctx: CanvasRenderingContext2D): void

  /**
   * 同于形变转换的宽度
   */
  protected _transformWidth: number = 0

  protected get transformWidth() {
    return this._transformWidth
  }

  protected set transformWidth(value: number) {
    if (this._transformWidth === value) {
      return
    }
    this._transformWidth = value
    this.emit('updateBounds', value, this.transformHeight)
  }

  /**
   * 同于形变转换的高度
   */
  protected _transformHeight: number = 0

  protected get transformHeight() {
    return this._transformHeight
  }

  protected set transformHeight(value: number) {
    if (this._transformHeight === value) {
      return
    }
    this._transformHeight = value
    this.emit('updateBounds', this.transformWidth, value)
  }

  /**
   * 同于形变转换的边界
   */
  protected abstract updateTransformBounds(): void

  get height() {
    return this.transformHeight
  }

  get width() {
    return this.transformWidth
  }

  onAdd(_app: App) {
    this._app = _app
    this._onUpdate()
  }

  onRemove() {
    this._app = null
    this._onUpdate()
  }

  addTo(app: App) {
    app.add(this)
    return this
  }

  destroy() {
    this.removeAllListeners()
  }
}
