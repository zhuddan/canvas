
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var tslib_es6 = require('../tslib.es6-E-TKQeY2.js');
var common_intercept = require('../common/intercept.js');

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
tslib_es6.__decorate([
    common_intercept.interceptUpdate2()
], BaseStyle.prototype, "fill", null);

exports.BaseStyle = BaseStyle;
