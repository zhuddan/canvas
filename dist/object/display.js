
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var common_event = require('../common/event.js');
var position_point = require('../point-DiKax5LN.js');

class Display extends common_event.Event {
    constructor() {
        super();
        console.log('on');
        this.on('shouldUpdate', () => {
            if (!this._shouldUpdate)
                this._shouldUpdate = true;
        });
        this.position.on('shouldUpdate', () => {
            if (!this._shouldUpdate)
                this._shouldUpdate = true;
        });
    }
    _angle = 0;
    _shouldUpdate = false;
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
