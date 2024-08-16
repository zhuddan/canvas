
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { _ as __decorate } from '../point-b9dtiH5q.js';
import { interceptUpdate } from '../common/intercept.mjs';
import { Display } from './display.mjs';
import '../common/event.mjs';
import '../app.mjs';
import '../utils.mjs';

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
    }
}
__decorate([
    interceptUpdate()
], Text.prototype, "text", null);

export { Text };
//# sourceMappingURL=text.mjs.map
