
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { _ as __decorate, u as updateIntercept } from '../point-D9q2E1O2.js';
import { Display } from './display.mjs';
import '../common/event.mjs';

class Text extends Display {
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
__decorate([
    updateIntercept()
], Text.prototype, "text", null);

export { Text };
//# sourceMappingURL=text.mjs.map
