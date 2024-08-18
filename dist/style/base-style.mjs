
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { _ as __decorate } from '../tslib.es6-Dn8e3nS6.js';
import { interceptUpdate2 } from '../common/intercept.mjs';

class BaseStyle {
    stroke = '#000';
    strokeWeight = 1;
    alpha = 1;
    _fill = '#000';
    set fill(value) {
        this._fill = value;
    }
    get fill() {
        return this._fill;
    }
}
__decorate([
    interceptUpdate2()
], BaseStyle.prototype, "fill", null);

export { BaseStyle };
