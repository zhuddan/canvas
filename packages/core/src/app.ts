import EventEmitter from 'eventemitter3'
import type { Renderable } from './renderables/renderable'
import { formatWithPx } from './utils'
import { IS_STANDARD_DOM_ENVIRONMENT, IS_UNI_APP, IS_WEB, IS_WX, IS_WX_UNIAPP } from './const'

/**
 * app 参数
 */
export interface AppOptions {
  /**
   *  画布宽度
   */
  width?: number
  /**
   *  画布高度
   */
  height?: number
  /**
   *  是否开启dpr
   */
  dpr?: boolean | number
  /**
   *  `画布元素`或`画布id(微信小程序或者uni-app)`或者`document.querySelector可以接受的字符串`
   */
  canvas?: HTMLCanvasElement | string
  /**
   * backgroundColor
   */
  backgroundColor?: string
  /**
   * 画布resize到的元素 仅 web 支持
   */
  resizeTo?: HTMLElement | Window | string
}
/**
 * 应用实例
 */
export class App extends EventEmitter<{
  render: []
  ready: []
}> {
  constructor(private options: AppOptions = {}) {
    super()
    this.validateAppOptions(options)
    this.initDpr()
    this.initTicker()
    this.initCanvas()
  }

  private ctx!: CanvasRenderingContext2D
  private _ready = false
  private _nextWidth = 0
  private _nextHeight = 0
  private _width = 0

  /**
   * canvas 元素
   */
  canvas!: HTMLCanvasElement
  /**
   * 计时器
   */
  ticker!: Ticker
  /**
   * 设备像素比 [devicePixelRatio](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio)
   */
  dpr = 1

  private set width(value) {
    if (this.width !== value) {
      this._width = value
    }
  }

  get width() {
    return this._width
  }

  private _height = 0

  private set height(value) {
    if (this.height !== value) {
      this._height = value
    }
  }

  get height() {
    return this._height
  }

  private removeResizeEvent?: () => void

  /**
   * 程序准备好之后运行
   * @param fn
   */
  onReady(fn: () => void) {
    if (this._ready) {
      fn()
    }
    else {
      this.once('ready', () => {
        fn()
      })
    }
  }

  /**
   * 校验appOptions参数
   */
  private validateAppOptions(appOptions: AppOptions) {
    if (!IS_STANDARD_DOM_ENVIRONMENT && !appOptions.canvas) {
      console.error('当前为非document环境, 无法使用 document.createElement(\'canvas\'),\n 请传入canvas元素或者canvasId')
    }
  }

  /**
   * 初始化dpr
   */
  private initDpr() {
    const { dpr = true } = this.options
    if (typeof dpr === 'boolean') {
      if (IS_WEB) {
        this.dpr = window.devicePixelRatio ?? 1
      }
      else if (IS_WX) {
        this.dpr = wx.getWindowInfo().pixelRatio
      }
      else if (IS_UNI_APP) {
        this.dpr = uni.getWindowInfo().pixelRatio
      }
      else {
        throw new Error('当前运行环境不支持 canvas')
      }
    }
    else {
      this.dpr = dpr
    }
  }

  /**
   * 初始化 canvas
   */
  private initCanvas() {
    const canvas = this.options.canvas
    if (canvas) {
      if (typeof canvas === 'string') {
        if (IS_WEB) {
          this.canvas = document.querySelector(canvas) as HTMLCanvasElement
        }
        else {
          let query: WechatMiniprogram.SelectorQuery | UniNamespace.SelectorQuery
          if (IS_WX) {
            query = wx.createSelectorQuery()
          }
          else if (IS_UNI_APP) {
            query = uni.createSelectorQuery()
          }
          else {
            throw new Error('当前运行环境不支持 canvas')
          }
          query.select(`#${canvas}`)
            .fields({ node: true, size: true }, undefined as any)
            .exec((res) => {
              if (this.options.width || this.options.height) {
                console.warn('微信小程序或 者 uni 不支持 AppOptions.width 和 AppOptions.height。请手动调整 canvas 的样式宽高')
              }
              const canvas = res[0].node as HTMLCanvasElement
              const { width, height } = res[0]
              this.canvas = canvas
              this.initCanvasSize(width, height)
            })
        }
      }
      else {
        this.canvas = canvas
        this.initCanvasSize()
      }
    }
    else {
      this.canvas = document.createElement('canvas')!
      this.initCanvasSize()
    }
  }

  /**
   * 初始化 canvas size
   */
  private initCanvasSize(width = this.options.width, height = this.options.height) {
    const { resizeTo } = this.options
    console.log('initCanvasSize 2')
    if (!this.canvas)
      return
    if (IS_WEB) {
      this.canvas.style.backgroundColor = this.options.backgroundColor ?? 'transparent'
      if (resizeTo) {
        this.initResizeEvent()
      }
      else {
        this._nextWidth = width || 800
        this._nextHeight = height || 600
      }
    }
    else {
      this._nextWidth = width || 800
      this._nextHeight = height || 600
    }
    /**
     * 尝试运行一次
     */
    this.resize()
    this.initCtx()
  }

  /**
   * 初始化 canvas ctx 上下文
   */
  private initCtx() {
    this.ctx = this.canvas.getContext('2d')!
    this._ready = true
    this.ticker.init(this.canvas, true)
    this.emit('ready')
  }

  /**
   * 初始化 resize 事件
   */
  private initResizeEvent(): void {
    if (!this.options.resizeTo) {
      return
    }
    const resizeTo = this.options.resizeTo
    const target = typeof resizeTo === 'string'
      ? document.querySelector(resizeTo) as HTMLElement
      : resizeTo
    if (target instanceof Window) {
      const resizeHandler = () => {
        this._nextWidth = window.innerWidth
        this._nextHeight = window.innerHeight
      }
      const _resizeHandler = resizeHandler.bind(this)

      window.addEventListener('resize', _resizeHandler)
      this.removeResizeEvent = () => {
        window.removeEventListener('resize', _resizeHandler)
      }
      resizeHandler()
    }
    else {
      const resizeHandler = () => {
        if (!target)
          return
        const width = target.clientWidth
        const height = target.clientHeight
        this._nextWidth = width
        this._nextHeight = height
      }

      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries) || !entries.length) {
          return
        }
        resizeHandler()
      })

      console.log(resizeObserver)

      resizeObserver.observe(target)
      this.removeResizeEvent = () => {
        resizeObserver.disconnect()
      }
      resizeHandler()
    }
  }

  /**
   * 初始化 ticker
   */
  private initTicker() {
    this.ticker = new Ticker()
    this.ticker.add(this.update.bind(this))
  }

  /**
   * 是否应该指向resize
   */
  private get shouldResize() {
    return this.width !== this._nextWidth || this.height !== this._nextHeight
  }

  /**
   * resize
   */
  private resize() {
    if (this.shouldResize) {
      this.height = this._nextHeight
      this.width = this._nextWidth
      this.canvas.width = this.width * this.dpr
      this.canvas.height = this.height * this.dpr
      if (IS_WEB) {
        this.canvas.style.width = formatWithPx(this.width)
        this.canvas.style.height = formatWithPx(this.height)
      }
    }
  }

  private beforeRender() {
    this.ctx.save()
  }

  private afterRender() {
    this.ctx.restore()
  }

  /**
   * 所有可渲染的子元素
   */
  children: Renderable[] = []

  /**
   * 添加渲染元素
   */
  add(...objects: Renderable[]) {
    for (let index = 0; index < objects.length; index++) {
      const object = objects[index]
      this.children.push(object)
      object.onAdd(this)
    }
  }

  /**
   * 删除渲染元素
   */
  remove(...objects: Renderable[]) {
    for (let index = 0; index < objects.length; index++) {
      const object = objects[index]
      const delIndex = this.children.indexOf(object)
      if (delIndex !== -1) {
        object.onRemove()
        this.children.splice(delIndex, 1)
      }
    }
  }

  /**
   * 更新事件 ticker 中执行
   */
  private update() {
    const _shouldResize = this.shouldResize
    const isDirty = !![...this.children.filter(e => e.dirty)].length || _shouldResize

    if (_shouldResize) {
      this.resize()
    }

    if (!isDirty)
      return

    this.ctx.clearRect(
      -this.canvas.width,
      -this.canvas.height,
      this.canvas.width * 2,
      this.canvas.height * 2,
    )

    const shouldRender = [...this.children].filter(e => e.shouldUpdate)

    while (shouldRender.length) {
      this.beforeRender()
      const child = shouldRender.shift()!
      child.render(this.ctx)
      child.dirty = false
      child._renderId++
      child.emit('render')
      this.afterRender()
    }
  }

  /**
   * 返回base64
   */
  toDataURL(type?: string, quality?: any) {
    return this.canvas.toDataURL(type, quality)
  }

  /**
   * 返回 base64 异步的
   */
  toDataURLAsync(type?: string, quality?: any) {
    return new Promise<string>((resolve) => {
      this.once('render', () => {
        resolve(this.toDataURL(type, quality))
      })
    })
  }

  wrapperRender(fn: (ctx: CanvasRenderingContext2D) => any) {
    this.beforeRender()
    fn(this.ctx)
    this.afterRender()
  }

  destroy() {
    this.removeResizeEvent?.()
  }
}

/**
 * 一个基于 [requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame) 的循环计时器
 */
export class Ticker {
  requestAnimationFrame?: typeof requestAnimationFrame
  cancelAnimationFrame?: typeof cancelAnimationFrame
  myReq: number = 0
  private isRunning: boolean = false
  handler: ((time: number) => void)[] = []
  constructor(protected autoStart: boolean = true) {

  }

  init(canvas: HTMLCanvasElement, autoStart: boolean) {
    if (IS_WX_UNIAPP) {
      this.requestAnimationFrame = (canvas as any).requestAnimationFrame.bind(canvas)
      this.cancelAnimationFrame = (canvas as any).requestAnimationFrame.bind(canvas)
    }
    else if (window) {
      this.requestAnimationFrame = window.requestAnimationFrame.bind(window)
      this.cancelAnimationFrame = window.cancelAnimationFrame.bind(window)
    }
    if (autoStart) {
      this.start()
    }
  }

  add(fn: (time: number) => void) {
    this.handler.push(fn)
  }

  removeAll() {
    this.handler = []
  }

  remove(fn: (time: number) => void) {
    const index = this.handler.indexOf(fn)
    if (index !== -1) {
      this.handler.splice(index, 1)
    }
  }

  start() {
    this.isRunning = true
    if (this.requestAnimationFrame) {
      this.myReq = this.requestAnimationFrame(this.update.bind(this))
    }
  }

  stop() {
    if (this.isRunning && this.myReq) {
      this.cancelAnimationFrame?.(this.myReq)
      this.isRunning = false
    }
  }

  update() {
    if (!this.isRunning)
      return
    if (this.requestAnimationFrame) {
      this.myReq = this.requestAnimationFrame(this.update.bind(this))
    }
    this.handler.forEach(fn => fn(performance.now()))
  }
}
