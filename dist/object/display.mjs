
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { _ as __decorate, P as Point } from '../point-b9dtiH5q.js';
import { interceptUpdate } from '../common/intercept.mjs';
import '../common/event.mjs';
import '../app.mjs';
import '../utils.mjs';

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
    position = new Point([-Infinity, -Infinity]);
    skew = new Point([0, 0]);
    anchor = new Point([0, 0]);
    scale = new Point([1, 1]);
    onAdd() { }
    onRemove() { }
    render(ctx) {
        this._render(ctx);
    }
}
__decorate([
    interceptUpdate()
], Display.prototype, "visible", null);

export { Display };
//# sourceMappingURL=display.mjs.map
