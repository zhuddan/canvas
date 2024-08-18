
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
function interceptDirty() {
    return function (target, propertyKey, descriptor) {
        const originalSet = descriptor.set;
        const originalGet = descriptor.get;
        descriptor.set = function (newValue) {
            if (originalSet) {
                const oldValue = originalGet?.call(this);
                if (newValue !== oldValue) {
                    originalSet.call(this, newValue);
                    target.dirty = true;
                    // console.log('this', this)
                    // console.log(this.display)
                    // console.log('target', target)
                    // console.log(target.display)
                    if (this.display) {
                        this.display.dirty = true;
                    }
                }
            }
        };
        Object.defineProperty(target, propertyKey, descriptor);
    };
}

export { interceptDirty };
