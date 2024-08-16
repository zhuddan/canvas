
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var utils = require('./utils.js');

class App {
    canvas;
    ctx;
    dpr = 1;
    width;
    height;
    constructor({ width = 600, height = 800, dpr = true, } = {}) {
        if (dpr) {
            this.dpr = window.devicePixelRatio ?? 1;
        }
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.width = utils.formatValue(width);
        this.canvas.style.height = utils.formatValue(height);
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
                ctx.fillText(`${row * 100},${col * 100}`, row * 100, col * 100);
                if (row === 0 || col === 0) {
                    continue;
                }
                ctx.moveTo(row * 100 - 100, col * 100);
                ctx.lineTo(row * 100, col * 100);
                ctx.lineTo(row * 100, col * 100 - 100);
                // ctx.stroke()
            }
        }
        ctx.stroke();
        this.afterRender();
    }
    children = [];
    add(object) {
        this.children.push(object);
    }
    // renders: ((ctx: CanvasRenderingContext2D) => void)[] = []
    update() {
        // window.requestAnimationFrame(() => {
        //   this.update()
        // })
        const needUpdateObject = [];
        for (let index = 0; index < this.children.length; index++) {
            const object = this.children[index];
            if (object._shouldUpdate) {
                needUpdateObject.push(object);
            }
        }
        if (needUpdateObject.length) {
            this.ctx.clearRect(-this.width, -this.height, this.width * 2, this.height * 2);
            this.debug();
        }
        const children = [...this.children];
        while (children.length) {
            children.shift()?.render(this.ctx);
        }
    }
}

exports.App = App;
//# sourceMappingURL=app.js.map
