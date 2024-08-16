
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { Event } from '../common/event.mjs';

class Point extends Event {
    shouldUpdate = false;
    _x = -Infinity;
    set x(x) {
        if (x !== this._x) {
            this._x = x;
            this.emit('shouldUpdate', 'update');
        }
    }
    get x() {
        return this._x;
    }
    _y = -Infinity;
    set y(y) {
        if (y !== this._y) {
            this._y = y;
            this.emit('shouldUpdate', 'update');
        }
    }
    get y() {
        return this._y;
    }
    constructor(arg1) {
        super();
        if (Array.isArray(arg1)) {
            [this.x, this.y] = arg1;
        }
        else if (typeof arg1 === 'number') {
            this.x = this.y = arg1;
        }
        else {
            this.x = arg1.x;
            this.y = arg1.y;
        }
    }
    translate(p) {
        p = createPoint(p);
        this.x += p.x;
        this.y += p.y;
        return this;
    }
    reverse() {
        this.x *= -1;
        this.y *= -1;
        return this;
    }
    clone() {
        return new Point([this.x, this.y]);
    }
}
function createPoint(maybePoint) {
    if (maybePoint instanceof Point) {
        return maybePoint;
    }
    return new Point(maybePoint);
}

export { Point, createPoint };
//# sourceMappingURL=point.mjs.map