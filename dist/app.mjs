
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { NOOP } from './const.mjs';
import { formatValue } from './utils.mjs';

class App {
    canvas;
    ctx;
    dpr = 1;
    width;
    height;
    onUpdate;
    constructor({ width = 600, height = 800, dpr = true, onUpdate, } = {}) {
        if (dpr) {
            this.dpr = window.devicePixelRatio ?? 1;
        }
        this.onUpdate = onUpdate ?? NOOP;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.width = formatValue(width);
        this.canvas.style.height = formatValue(height);
        this.canvas.width = width * this.dpr;
        this.canvas.height = height * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
        this.width = width;
        this.height = height;
        this.debug();
        this.update();
    }
    beforeRender() {
        this.ctx.save();
    }
    afterRender() {
        this.ctx.restore();
    }
    debug() {
        const ctx = this.ctx;
        this.ctx.strokeStyle = '#00ffcc';
        this.beforeRender();
        ctx.textBaseline = 'top';
        ctx.font = '12px 黑体';
        for (let row = 0; row < Math.ceil((this.width + 1) / 100); row++) {
            for (let col = 0; col < Math.ceil((this.height + 1) / 100); col++) {
                ctx.beginPath();
                ctx.fillText(`${row * 100},${col * 100}`, row * 100, col * 100);
                if (row === 0 || col === 0) {
                    continue;
                }
                ctx.moveTo(row * 100 - 100, col * 100);
                ctx.lineTo(row * 100, col * 100);
                ctx.lineTo(row * 100, col * 100 - 100);
                ctx.stroke();
            }
        }
        this.afterRender();
    }
    children = [];
    add(object) {
        console.log(object);
        object.onAdd();
        this.children.push(object);
    }
    remove(object) {
        const index = this.children.indexOf(object);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }
    update() {
        window.requestAnimationFrame(() => {
            this.update();
        });
        this.ctx.clearRect(-this.width, -this.height, this.width * 2, this.height * 2);
        this.debug();
        const children = [...this.children.filter(e => e.visible)];
        while (children.length) {
            this.beforeRender();
            children.shift()?.render(this.ctx);
            this.afterRender();
        }
        this.onUpdate();
    }
}

export { App };
