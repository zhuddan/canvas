
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { _ as __decorate } from '../tslib.es6-Dn8e3nS6.js';
import { interceptUpdate2 } from '../common/intercept.mjs';
import { BaseStyle } from './base-style.mjs';

class TextStyle extends BaseStyle {
    textBaseline = 'top';
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
    _fontStretch = 'normal';
    set fontStretch(value) {
        this._fontStretch = value;
    }
    get fontStretch() {
        return this._fontStretch;
    }
    _fontVariantCaps = 'normal';
    set fontVariantCaps(value) {
        this._fontVariantCaps = value;
    }
    get fontVariantCaps() {
        return this._fontVariantCaps;
    }
    _letterSpacing = 0;
    set letterSpacing(value) {
        this._letterSpacing = value;
    }
    get letterSpacing() {
        return this._letterSpacing;
    }
    _wordSpacing = 'normal';
    set wordSpacing(value) {
        this._wordSpacing = value;
    }
    get wordSpacing() {
        return this._wordSpacing;
    }
    _textAlign = 'left';
    set textAlign(value) {
        this._textAlign = value;
    }
    get textAlign() {
        return this._textAlign;
    }
}
__decorate([
    interceptUpdate2()
], TextStyle.prototype, "fontSize", null);
__decorate([
    interceptUpdate2()
], TextStyle.prototype, "fontFamily", null);
__decorate([
    interceptUpdate2()
], TextStyle.prototype, "fontStyle", null);
__decorate([
    interceptUpdate2()
], TextStyle.prototype, "fontWeight", null);
__decorate([
    interceptUpdate2()
], TextStyle.prototype, "fontStretch", null);
__decorate([
    interceptUpdate2()
], TextStyle.prototype, "fontVariantCaps", null);
__decorate([
    interceptUpdate2()
], TextStyle.prototype, "wordSpacing", null);
__decorate([
    interceptUpdate2()
], TextStyle.prototype, "textAlign", null);

export { TextStyle };
