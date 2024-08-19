/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 */
declare class EventEmitter<
  EventTypes extends EventEmitter.ValidEventTypes = string | symbol,
  Context extends any = any
> {
  static prefixed: string | boolean;

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   */
  eventNames(): Array<EventEmitter.EventNames<EventTypes>>;

  /**
   * Return the listeners registered for a given event.
   */
  listeners<T extends EventEmitter.EventNames<EventTypes>>(
    event: T
  ): Array<EventEmitter.EventListener<EventTypes, T>>;

  /**
   * Return the number of listeners listening to a given event.
   */
  listenerCount(event: EventEmitter.EventNames<EventTypes>): number;

  /**
   * Calls each of the listeners registered for a given event.
   */
  emit<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    ...args: EventEmitter.EventArgs<EventTypes, T>
  ): boolean;

  /**
   * Add a listener for a given event.
   */
  on<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    context?: Context
  ): this;
  addListener<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    context?: Context
  ): this;

  /**
   * Add a one-time listener for a given event.
   */
  once<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    context?: Context
  ): this;

  /**
   * Remove the listeners of a given event.
   */
  removeListener<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn?: EventEmitter.EventListener<EventTypes, T>,
    context?: Context,
    once?: boolean
  ): this;
  off<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn?: EventEmitter.EventListener<EventTypes, T>,
    context?: Context,
    once?: boolean
  ): this;

  /**
   * Remove all listeners, or those of the specified event.
   */
  removeAllListeners(event?: EventEmitter.EventNames<EventTypes>): this;
}

declare namespace EventEmitter {
  export interface ListenerFn<Args extends any[] = any[]> {
    (...args: Args): void;
  }

  export interface EventEmitterStatic {
    new <
      EventTypes extends ValidEventTypes = string | symbol,
      Context = any
    >(): EventEmitter<EventTypes, Context>;
  }

  /**
   * `object` should be in either of the following forms:
   * ```
   * interface EventTypes {
   *   'event-with-parameters': any[]
   *   'event-with-example-handler': (...args: any[]) => void
   * }
   * ```
   */
  export type ValidEventTypes = string | symbol | object;

  export type EventNames<T extends ValidEventTypes> = T extends string | symbol
    ? T
    : keyof T;

  export type ArgumentMap<T extends object> = {
    [K in keyof T]: T[K] extends (...args: any[]) => void
      ? Parameters<T[K]>
      : T[K] extends any[]
      ? T[K]
      : any[];
  };

  export type EventListener<
    T extends ValidEventTypes,
    K extends EventNames<T>
  > = T extends string | symbol
    ? (...args: any[]) => void
    : (
        ...args: ArgumentMap<Exclude<T, string | symbol>>[Extract<K, keyof T>]
      ) => void;

  export type EventArgs<
    T extends ValidEventTypes,
    K extends EventNames<T>
  > = Parameters<EventListener<T, K>>;

  export const EventEmitter: EventEmitterStatic;
}

interface IBaseStyle {
    /**
     * 填充颜色
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)
     */
    fill: CanvasRenderingContext2D['fillStyle'];
    /**
     * 描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
     */
    stroke: CanvasRenderingContext2D['strokeStyle'] | null;
    /**
     * 描边宽度? 默认为1
     */
    strokeWeight: number;
    /**
     * 透明度<br/>此透明度为 [CanvasRenderingContext2D.globalAlpha](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
     *
     * 你也可以设置fill或者stroke为rgba实现透明效果
     *
     * 或者你喜欢16进制颜色也可以使用[这种方法](https://blog.csdn.net/ezconn/article/details/90052114)设置透明度
     */
    alpha: number;
    shadow: {
        /**
         * [CanvasRenderingContext2D.shadowOffsetX](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
         */
        x?: number;
        /**
         * [CanvasRenderingContext2D.shadowOffsetY](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
         */
        y?: number;
        /**
         * [CanvasRenderingContext2D.shadowBlur](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
         */
        blur?: number;
        /**
         * [CanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
         */
        color?: string;
    };
    /**
     * [CanvasRenderingContext2D.filter](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)
     */
    filter: CanvasRenderingContext2D['filter'];
}
declare abstract class BaseStyle extends EventEmitter<{
    update: [];
    updateBounds: [];
}> implements IBaseStyle {
    constructor();
    private _alpha;
    set alpha(value: number);
    get alpha(): number;
    private _strokeWeight;
    set strokeWeight(value: number);
    get strokeWeight(): number;
    private _fill;
    set fill(value: string);
    get fill(): string;
    private _stroke;
    set stroke(value: string | CanvasGradient | CanvasPattern | null);
    get stroke(): string | CanvasGradient | CanvasPattern | null;
    private _shadow;
    set shadow(value: {
        /**
         * [CanvasRenderingContext2D.shadowOffsetX](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
         */
        x?: number;
        /**
         * [CanvasRenderingContext2D.shadowOffsetY](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
         */
        y?: number;
        /**
         * [CanvasRenderingContext2D.shadowBlur](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
         */
        blur?: number;
        /**
         * [CanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
         */
        color?: string;
    });
    get shadow(): {
        /**
         * [CanvasRenderingContext2D.shadowOffsetX](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
         */
        x?: number;
        /**
         * [CanvasRenderingContext2D.shadowOffsetY](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
         */
        y?: number;
        /**
         * [CanvasRenderingContext2D.shadowBlur](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
         */
        blur?: number;
        /**
         * [CanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
         */
        color?: string;
    };
    private _filter;
    set filter(value: string);
    get filter(): string;
    update(): void;
    updateBounds(): void;
    render(ctx: CanvasRenderingContext2D): this;
}

export { BaseStyle, type IBaseStyle };
