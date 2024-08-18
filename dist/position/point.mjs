
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { _ as __decorate } from '../tslib.es6-Dn8e3nS6.js';
import { interceptDirty } from '../common/intercept.mjs';
import { Coordinate } from './coordinate.mjs';

class Point extends Coordinate {
    shouldUpdate = false;
    _x = -Infinity;
    set x(x) {
        this._x = x;
    }
    get x() {
        return this._x;
    }
    _y = -Infinity;
    set y(y) {
        this._y = y;
    }
    get y() {
        return this._y;
    }
    constructor(arg1, _display) {
        super(_display);
        if (Array.isArray(arg1)) {
            [this._x, this._y] = arg1;
        }
        else {
            this._x = arg1.x;
            this._y = arg1.y;
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
__decorate([
    interceptDirty()
], Point.prototype, "x", null);
__decorate([
    interceptDirty()
], Point.prototype, "y", null);
function createPoint(maybePoint, _display) {
    if (maybePoint instanceof Point) {
        return maybePoint;
    }
    return new Point(maybePoint, _display);
}

export { Point, createPoint };
