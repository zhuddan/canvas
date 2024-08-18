
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

class BaseStyle {
    display;
    constructor(_display) {
        this.display = _display;
    }
    _dirty = true;
    set dirty(value) {
        if (this._dirty !== value) {
            this._dirty = value;
        }
    }
    get dirty() {
        return this._dirty;
    }
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

exports.BaseStyle = BaseStyle;
