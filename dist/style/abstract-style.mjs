import { E as EventEmitter } from '../index-txTiXx5A.js';
import { createProxy } from '../utils.mjs';

class AbstractStyle extends EventEmitter {
    // private _strokeWeight = 0
    // set strokeWeight(value) {
    //   this._strokeWeight = value
    //   this.update()
    // }
    // get strokeWeight() {
    //   return this._strokeWeight
    // }
    _fill = '#000';
    set fill(value) {
        this._fill = value;
        this.update();
    }
    get fill() {
        return this._fill;
    }
    _stroke = {};
    set stroke(value) {
        if (value === this._stroke)
            return;
        if (typeof value === 'string'
            || value instanceof CanvasGradient
            || value instanceof CanvasPattern) {
            this._stroke = createProxy({
                ...this._stroke,
                color: value,
            }, () => {
                this.update();
            });
        }
        else {
            this._stroke = createProxy(value, () => {
                this.update();
            });
            this.update();
        }
    }
    get stroke() {
        return this._stroke;
    }
    _filter = 'none';
    set filter(value) {
        this._filter = value;
        this.update();
    }
    get filter() {
        return this._filter;
    }
    update() {
        this.emit('update');
    }
    updateBounds() {
        this.emit('updateBounds');
    }
    render(ctx) {
        if (this.stroke.color && this.stroke.width) {
            ctx.lineWidth = this.stroke.width;
            ctx.strokeStyle = this.stroke.color;
        }
        if (this.fill) {
            ctx.fillStyle = this.fill;
        }
        if (this.filter) {
            ctx.filter = this.filter;
        }
        return this;
    }
    destroy() {
        this.removeAllListeners();
    }
}

export { AbstractStyle };
