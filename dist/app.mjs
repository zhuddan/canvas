import { E as EventEmitter } from './index-txTiXx5A.js';
import { NOOP } from './const.mjs';
import { formatValue } from './utils.mjs';

class App extends EventEmitter {
    canvas;
    ctx;
    dpr = 1;
    width;
    height;
    onUpdate;
    static createImage;
    constructor({ width = 600, height = 800, dpr = true, createImage = () => document.createElement('img'), onUpdate, } = {}) {
        super();
        if (dpr) {
            this.dpr = window.devicePixelRatio ?? 1;
        }
        // this.dpr = 1
        this.onUpdate = onUpdate ?? NOOP;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.width = formatValue(width);
        this.canvas.style.height = formatValue(height);
        this.canvas.width = width * this.dpr;
        this.canvas.height = height * this.dpr;
        this.width = width;
        this.height = height;
        App.createImage = createImage;
        this.update();
    }
    beforeRender() {
        this.ctx.save();
    }
    afterRender() {
        this.ctx.restore();
    }
    // private debug() {
    //   this.beforeRender()
    //   const ctx = this.ctx
    //   this.ctx.strokeStyle = '#cccccc'
    //   this.ctx.fillStyle = '#cccccc'
    //   ctx.textBaseline = 'top'
    //   ctx.font = '10px 黑体'
    //   ctx.setLineDash([4, 10])
    //   for (let row = 0; row < Math.ceil((this.width + 1) / 100); row++) {
    //     for (let col = 0; col < Math.ceil((this.height + 1) / 100); col++) {
    //       ctx.beginPath()
    //       ctx.fillText(`${row * 100},${col * 100}`, row * 100 * this.dpr, col * 100 * this.dpr)
    //       if (row === 0 || col === 0) {
    //         continue
    //       }
    //       ctx.moveTo((row * 100 - 100) * this.dpr, col * 100 * this.dpr)
    //       ctx.lineTo(row * 100 * this.dpr, col * 100 * this.dpr)
    //       ctx.lineTo(row * 100 * this.dpr, (col * 100 - 100) * this.dpr)
    //       ctx.stroke()
    //     }
    //   }
    //   this.afterRender()
    // }
    children = [];
    add(object) {
        this.children.push(object);
        object.onAdd(this);
    }
    remove(object) {
        const index = this.children.indexOf(object);
        if (index !== -1) {
            object.onRemove();
            this.children.splice(index, 1);
        }
    }
    update() {
        window.requestAnimationFrame(() => {
            this.update();
        });
        if (!this.children.length) {
            return;
        }
        const isDirty = !![...this.children.filter(e => e.dirty)].length;
        const _renderIds = this.children.every(e => e._renderId > 0);
        if (_renderIds && this.children.length) {
            this.emit('render');
        }
        if (!isDirty)
            return;
        this.ctx.clearRect(-this.canvas.width, -this.canvas.height, this.canvas.width * 2, this.canvas.height * 2);
        // this.debug()
        const shouldRender = [...this.children].filter(e => e.shouldUpdate);
        while (shouldRender.length) {
            this.beforeRender();
            const child = shouldRender.shift();
            child.render(this.ctx);
            child.dirty = false;
            child._renderId++;
            this.afterRender();
        }
        this.onUpdate();
    }
    toDataURL(type, quality) {
        return this.canvas.toDataURL(type, quality);
    }
    toDataURLAsync(type, quality) {
        return new Promise((resolve) => {
            this.once('render', () => {
                resolve(this.toDataURL(type, quality));
            });
        });
    }
    onContext(fn) {
        this.beforeRender();
        fn(this.ctx);
        this.afterRender();
    }
}

export { App };
