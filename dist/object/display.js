
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var position_point = require('../position/point.js');
require('../common/event.js');

class Display {
    _angle = 1;
    _shouldUpdate = false;
    get angle() {
        return this._angle;
    }
    position;
    constructor() {
        this.position = new position_point.Point([-Infinity, -Infinity]);
        this.position.on('shouldUpdate', () => {
            this._shouldUpdate = true;
        });
    }
    set angle(value) {
        this._angle = value;
    }
    skew = new position_point.Point([0, 0]);
    anchor = new position_point.Point([0, 0]);
    scale = new position_point.Point([1, 1]);
    onAdd() {
        this._shouldUpdate = true;
    }
    onRemove() {
        this._shouldUpdate = true;
    }
    render(ctx) {
        this._render(ctx);
    }
}

exports.Display = Display;
//# sourceMappingURL=display.js.map
