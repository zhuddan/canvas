
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { Display } from './display.mjs';
import '../position/point.mjs';
import '../common/event.mjs';

class Text extends Display {
    text;
    constructor(text, x, y) {
        super();
        this.text = text;
        this.position.x = x;
        this.position.y = y;
    }
    _render(ctx) {
        ctx.textBaseline = 'top';
        ctx.font = '18px 黑体';
        ctx.fillText(this.text, this.position.x, this.position.y);
        this._shouldUpdate = false;
    }
}

export { Text };
//# sourceMappingURL=text.mjs.map
