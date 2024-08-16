
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var tslib_es6 = require('../tslib.es6-E-TKQeY2.js');
var common_intercept = require('../common/intercept.js');
var style_baseStyle = require('./base-style.js');
require('../app.js');
require('../const.js');
require('../utils.js');

class TextStyle extends style_baseStyle.BaseStyle {
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
tslib_es6.__decorate([
    common_intercept.interceptUpdate()
], TextStyle.prototype, "fontSize", null);
tslib_es6.__decorate([
    common_intercept.interceptUpdate()
], TextStyle.prototype, "fontFamily", null);
tslib_es6.__decorate([
    common_intercept.interceptUpdate()
], TextStyle.prototype, "fontStyle", null);
tslib_es6.__decorate([
    common_intercept.interceptUpdate()
], TextStyle.prototype, "fontWeight", null);

exports.TextStyle = TextStyle;
//# sourceMappingURL=text-style.js.map
