
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
class Event {
    all = new Map();
    on(type, handler) {
        const handlers = this.all?.get(type);
        if (handlers) {
            handlers.push(handler);
        }
        else {
            this.all.set(type, [handler]);
        }
    }
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(type, handler) {
        const handlers = this.all?.get(type);
        if (handlers) {
            if (handler) {
                handlers.splice(handlers.indexOf(handler) >>> 0, 1);
            }
            else {
                this.all.set(type, []);
            }
        }
    }
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
    emit(type, evt) {
        let handlers = this.all?.get(type);
        if (handlers) {
            handlers
                .slice()
                .forEach((handler) => {
                handler(evt);
            });
        }
        handlers = this.all?.get('*');
        if (handlers) {
            handlers
                .slice()
                .forEach((handler) => {
                handler(type, evt);
            });
        }
    }
}

export { Event };
//# sourceMappingURL=event.mjs.map
