type EventType = string | symbol;
type Handler<T = unknown> = (event: T) => void;
type WildcardHandler<T = Record<string, unknown>> = (type: keyof T, event: T[keyof T]) => void;
type EventHandlerList<T = unknown> = Array<Handler<T>>;
type WildCardEventHandlerList<T = Record<string, unknown>> = Array<WildcardHandler<T>>;
type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<keyof Events | '*', EventHandlerList<Events[keyof Events]> | WildCardEventHandlerList<Events>>;
interface Emitter<Events extends Record<EventType, unknown>> {
    all: EventHandlerMap<Events>;
    on: (<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>) => void) & ((type: '*', handler: WildcardHandler<Events>) => void);
    off: (<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>) => void) & ((type: '*', handler: WildcardHandler<Events>) => void);
    emit: (<Key extends keyof Events>(type: Key, event: Events[Key]) => void) & (<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never) => void);
}
declare class Event<Events extends Record<EventType, unknown>, GenericEventHandler = Handler<Events[keyof Events]> | WildcardHandler<Events>> {
    all: EventHandlerMap<Events>;
    on<Key extends keyof Events>(type: Key, handler: GenericEventHandler): void;
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off<Key extends keyof Events>(type: Key, handler?: GenericEventHandler): void;
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit<Key extends keyof Events>(type: Key, evt?: Events[Key]): void;
}

export { type Emitter, Event, type EventHandlerList, type EventHandlerMap, type EventType, type Handler, type WildCardEventHandlerList, type WildcardHandler };
