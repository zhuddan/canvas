
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
class Dirty {
    constructor(_display) {
        this.display = _display;
    }
    display;
    _dirty = true;
    set dirty(value) {
        // if (this._dirty !== value) {
        this._dirty = value;
        if (this.display) {
            this.display.dirty = value;
        }
        // }
    }
    get dirty() {
        return this._dirty;
    }
}

export { Dirty };
