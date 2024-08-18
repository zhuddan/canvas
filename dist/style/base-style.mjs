
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { _ as __decorate } from '../tslib.es6-Dn8e3nS6.js';
import { Dirty } from '../common/dirty.mjs';
import { interceptDirty } from '../common/intercept.mjs';

class BaseStyle extends Dirty {
    constructor(_display) {
        super(_display);
    }
    _alpha = 1;
    set alpha(value) {
        this._alpha = value;
    }
    get alpha() {
        return this._alpha;
    }
    _strokeWeight = 0;
    set strokeWeight(value) {
        this._strokeWeight = value;
    }
    get strokeWeight() {
        return this._strokeWeight;
    }
    _fill = '#000';
    set fill(value) {
        this._fill = value;
    }
    get fill() {
        return this._fill;
    }
    _stroke = null;
    set stroke(value) {
        this._stroke = value;
    }
    get stroke() {
        return this._stroke;
    }
    setBaseStyle(ctx) {
        ctx.globalAlpha = this.alpha;
        if (this.strokeWeight && this.stroke) {
            ctx.lineWidth = this.strokeWeight;
            ctx.strokeStyle = this.stroke;
        }
        ctx.fillStyle = this.fill;
    }
}
__decorate([
    interceptDirty()
], BaseStyle.prototype, "alpha", null);
__decorate([
    interceptDirty()
], BaseStyle.prototype, "strokeWeight", null);
__decorate([
    interceptDirty()
], BaseStyle.prototype, "fill", null);
__decorate([
    interceptDirty()
], BaseStyle.prototype, "stroke", null);

export { BaseStyle };
