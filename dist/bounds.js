'use strict';

var utils = require('./utils.js');

class Bounds {
    min;
    max;
    constructor(point1, point2) {
        const minX = utils.calcMin([point1[0], point2[0]]);
        const minY = utils.calcMin([point1[1], point2[1]]);
        const maxX = utils.calcMax([point1[0], point2[0]]);
        const maxY = utils.calcMax([point1[1], point2[1]]);
        this.min = { x: minX, y: minY };
        this.max = { x: maxX, y: maxY };
    }
    get width() {
        return this.max.x - this.min.x;
    }
    get height() {
        return this.max.y - this.min.y;
    }
}

exports.Bounds = Bounds;
