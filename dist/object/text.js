
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var position_point = require('../point-DiKax5LN.js');
var object_display = require('./display.js');
require('../common/event.js');

class Text extends object_display.Display {
    _text = '';
    set text(text) {
        console.log('text', text);
        this._text = text;
    }
    get text() {
        return this._text;
    }
    constructor(text, x, y) {
        super();
        this.position.x = x;
        this.position.y = y;
        this.text = text;
        console.log(this);
    }
    _render(ctx) {
        ctx.textBaseline = 'top';
        ctx.font = '48px bold 宋体 ';
        ctx.fillText(this.text, this.position.x, this.position.y);
        this._shouldUpdate = false;
    }
}
position_point.__decorate([
    position_point.updateIntercept()
], Text.prototype, "text", null);

exports.Text = Text;
//# sourceMappingURL=text.js.map
