
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { _ as __decorate } from '../tslib.es6-Dn8e3nS6.js';
import { interceptDirty } from '../common/intercept.mjs';
import { TextStyle } from '../style/text-style.mjs';
import { createCanvasFontString, formatValue } from '../utils.mjs';
import { Display } from './display.mjs';
import '../style/base-style.mjs';
import '../common/dirty.mjs';
import '../position/point.mjs';
import '../position/coordinate.mjs';

class Text extends Display {
    style;
    constructor(text, x, y, style = {}) {
        super();
        this.position.x = x;
        this.position.y = y;
        this.text = text;
        this.style = new TextStyle(style, this);
    }
    _text = '';
    set text(text) {
        this._text = text;
    }
    get text() {
        return this._text;
    }
    _render(ctx) {
        if (this.style.fill || (this.style.stroke && this.style.strokeWeight)) {
            ctx.textBaseline = 'top';
            this.style.setBaseStyle(ctx);
            ctx.font = createCanvasFontString(this.style);
            ctx.fontStretch = this.style.fontStretch;
            ctx.fontVariantCaps = this.style.fontVariantCaps;
            ctx.letterSpacing = formatValue(this.style.letterSpacing);
            ctx.wordSpacing = formatValue(this.style.wordSpacing);
            ctx.textAlign = this.style.textAlign;
            if (this.style.fill) {
                ctx.fillText(this.text, this.position.x, this.position.y);
            }
            if (this.style.stroke && this.style.strokeWeight) {
                ctx.strokeText(this.text, this.position.x, this.position.y);
            }
        }
    }
}
__decorate([
    interceptDirty()
], Text.prototype, "text", null);

export { Text };
