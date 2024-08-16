
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { _ as __decorate } from '../tslib.es6-Dn8e3nS6.js';
import { interceptUpdate } from '../common/intercept.mjs';
import { BaseStyle } from './base-style.mjs';
import '../app.mjs';
import '../const.mjs';
import '../utils.mjs';

class TextStyle extends BaseStyle {
    _fontSize = 12;
    set fontSize(value) {
        this._fontSize = value;
    }
    get fontSize() {
        return this._fontSize;
    }
    _fontFamily = 'serif';
    set fontFamily(value) {
        this._fontFamily = value;
    }
    get fontFamily() {
        return this._fontFamily;
    }
    _fontStyle = 'normal';
    set fontStyle(value) {
        this._fontStyle = value;
    }
    get fontStyle() {
        return this._fontStyle;
    }
    _fontWeight = 'normal';
    set fontWeight(value) {
        this._fontWeight = value;
    }
    get fontWeight() {
        return this._fontWeight;
    }
}
__decorate([
    interceptUpdate()
], TextStyle.prototype, "fontSize", null);
__decorate([
    interceptUpdate()
], TextStyle.prototype, "fontFamily", null);
__decorate([
    interceptUpdate()
], TextStyle.prototype, "fontStyle", null);
__decorate([
    interceptUpdate()
], TextStyle.prototype, "fontWeight", null);

export { TextStyle };
//# sourceMappingURL=text-style.mjs.map
