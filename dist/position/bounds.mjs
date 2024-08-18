
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { calcMin, calcMax } from '../utils.mjs';
import { Coordinate } from './coordinate.mjs';
import { createPoint, Point } from './point.mjs';
import '../common/dirty.mjs';
import '../tslib.es6-Dn8e3nS6.js';
import '../common/intercept.mjs';

class Bounds extends Coordinate {
    min;
    max;
    constructor(point1, point2, _display) {
        super(_display);
        point1 = createPoint(point1, _display);
        point2 = createPoint(point2, _display);
        const minX = calcMin([point1.x, point2.x]);
        const minY = calcMin([point1.y, point2.y]);
        const maxX = calcMax([point1.x, point2.x]);
        const maxY = calcMax([point1.y, point2.y]);
        this.min = new Point([minX, minY]);
        this.max = new Point([maxX, maxY]);
    }
    get width() {
        return this.max.x - this.min.x;
    }
    get height() {
        return this.max.y - this.min.y;
    }
    translate(p) {
        this.min.translate(p);
        this.max.translate(p);
        return this;
    }
    // 开始坐标移动到原点
    origin() {
        return this.translate(this.min.clone().reverse());
    }
    clone() {
        return new Bounds(this.min, this.max);
    }
}
function createBounds(b, _display) {
    if (b instanceof Bounds) {
        return b;
    }
    return new Bounds(...b, _display);
}

export { Bounds, createBounds };
