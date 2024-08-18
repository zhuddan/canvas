
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var tslib_es6 = require('../tslib.es6-E-TKQeY2.js');
var common_intercept = require('../common/intercept.js');
var style_baseStyle = require('./base-style.js');

class TextStyle extends style_baseStyle.BaseStyle {
    constructor(display) {
        super(display);
    }
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
tslib_es6.__decorate([
    common_intercept.interceptDirty()
], TextStyle.prototype, "fontSize", null);
tslib_es6.__decorate([
    common_intercept.interceptDirty()
], TextStyle.prototype, "fontFamily", null);
tslib_es6.__decorate([
    common_intercept.interceptDirty()
], TextStyle.prototype, "fontStyle", null);
tslib_es6.__decorate([
    common_intercept.interceptDirty()
], TextStyle.prototype, "fontWeight", null);
tslib_es6.__decorate([
    common_intercept.interceptDirty()
], TextStyle.prototype, "fontStretch", null);
tslib_es6.__decorate([
    common_intercept.interceptDirty()
], TextStyle.prototype, "fontVariantCaps", null);
tslib_es6.__decorate([
    common_intercept.interceptDirty()
], TextStyle.prototype, "letterSpacing", null);
tslib_es6.__decorate([
    common_intercept.interceptDirty()
], TextStyle.prototype, "wordSpacing", null);
tslib_es6.__decorate([
    common_intercept.interceptDirty()
], TextStyle.prototype, "textAlign", null);

exports.TextStyle = TextStyle;
