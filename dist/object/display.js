
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var tslib_es6 = require('../tslib.es6-E-TKQeY2.js');
var common_intercept = require('../common/intercept.js');
var position_point = require('../position/point.js');
require('../app.js');
require('../const.js');
require('../utils.js');
require('../common/event.js');

class Display {
    constructor() {
        console.log('on');
    }
    _visible = true;
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
    }
    _angle = 0;
    get angle() {
        return this._angle;
    }
    set angle(value) {
        this._angle = value;
    }
    get x() {
        return this.position.x;
    }
    set x(val) {
        this.position.x = val;
    }
    get y() {
        return this.position.y;
    }
    set y(val) {
        this.position.y = val;
    }
    position = new position_point.Point([-Infinity, -Infinity]);
    skew = new position_point.Point([0, 0]);
    anchor = new position_point.Point([0, 0]);
    scale = new position_point.Point([1, 1]);
    onAdd() { }
    onRemove() { }
    render(ctx) {
        this._render(ctx);
    }
}
tslib_es6.__decorate([
    common_intercept.interceptUpdate()
], Display.prototype, "visible", null);

exports.Display = Display;
//# sourceMappingURL=display.js.map
