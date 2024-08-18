
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var utils = require('../utils.js');
var position_coordinate = require('./coordinate.js');
var position_point = require('./point.js');
require('../tslib.es6-E-TKQeY2.js');
require('../common/intercept.js');

class Bounds extends position_coordinate.Coordinate {
    min;
    max;
    constructor(point1, point2, _display) {
        super(_display);
        point1 = position_point.createPoint(point1, _display);
        point2 = position_point.createPoint(point2, _display);
        const minX = utils.calcMin([point1.x, point2.x]);
        const minY = utils.calcMin([point1.y, point2.y]);
        const maxX = utils.calcMax([point1.x, point2.x]);
        const maxY = utils.calcMax([point1.y, point2.y]);
        this.min = new position_point.Point([minX, minY]);
        this.max = new position_point.Point([maxX, maxY]);
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

exports.Bounds = Bounds;
exports.createBounds = createBounds;
