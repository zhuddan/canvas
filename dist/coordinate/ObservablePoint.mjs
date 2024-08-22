
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
class ObservablePoint {
    _x;
    _y;
    _observer;
    constructor(observer, x, y) {
        this._x = x || 0;
        this._y = y || 0;
        this._observer = observer;
    }
    clone(observer) {
        return new ObservablePoint(observer ?? this._observer, this._x, this._y);
    }
    set(x = 0, y = x) {
        if (this._x !== x || this._y !== y) {
            this._x = x;
            this._y = y;
            this._observer?._onUpdate(this);
        }
        return this;
    }
    copyFrom(p) {
        if (this._x !== p.x || this._y !== p.y) {
            this._x = p.x;
            this._y = p.y;
            this._observer?._onUpdate(this);
        }
        return this;
    }
    copyTo(p) {
        p.set(this._x, this._y);
        return p;
    }
    equals(p) {
        return (p.x === this._x) && (p.y === this._y);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (this._x !== value) {
            this._x = value;
            this._observer?._onUpdate(this);
        }
    }
    get y() {
        return this._y;
    }
    set y(value) {
        if (this._y !== value) {
            this._y = value;
            this._observer?._onUpdate(this);
        }
    }
    [Symbol.iterator]() {
        let step = 0;
        const properties = [this.x, this.y];
        return {
            next: () => {
                if (step < properties.length) {
                    return { value: properties[step++], done: false };
                }
                else {
                    return { done: true, value: undefined };
                }
            },
        };
    }
}

export { ObservablePoint };
