'use strict';

var point = require('./point.js');
var utils = require('./utils.js');

class Bounds {
    min;
    max;
    constructor(point1, point2) {
        point1 = point.createPoint(point1);
        point2 = point.createPoint(point2);
        const minX = utils.calcMin([point1.x, point2.x]);
        const minY = utils.calcMin([point1.y, point2.y]);
        const maxX = utils.calcMax([point1.x, point2.x]);
        const maxY = utils.calcMax([point1.y, point2.y]);
        this.min = new point.Point([minX, minY]);
        this.max = new point.Point([maxX, maxY]);
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
function createBounds(b) {
    if (b instanceof Bounds) {
        return b;
    }
    return new Bounds(...b);
}

exports.Bounds = Bounds;
exports.createBounds = createBounds;
