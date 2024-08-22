
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { createProxy, calcDiff } from '../utils.mjs';
import { Display } from './display.mjs';
import '../index-BYsAzWpY.js';
import '../coordinate/ObservablePoint.mjs';

class Shape extends Display {
    constructor(options = {}) {
        super(options);
        this.emit('ready');
        this._onUpdate();
    }
    addPath(...items) {
        this.pathInstruction.push(...items);
        this.shouldUpdateBounds();
    }
    // CanvasRenderingContext2DMethods
    beginPath() {
        this.addPath({
            action: 'beginPath',
            args: [],
        });
        return this;
    }
    closePath() {
        this.addPath({
            action: 'closePath',
            args: [],
        });
        return this;
    }
    moveTo(...args) {
        this.addPath({
            action: 'moveTo',
            args: [...args],
        });
        return this;
    }
    lineTo(...args) {
        this.addPath({
            action: 'lineTo',
            args: [...args],
        });
        return this;
    }
    rect(...args) {
        this.addPath({
            action: 'rect',
            args: [...args],
        });
        return this;
    }
    roundRect(...args) {
        this.addPath({
            action: 'roundRect',
            args: [...args],
        });
        return this;
    }
    arc(...args) {
        this.addPath({
            action: 'arc',
            args: [...args],
        });
        return this;
    }
    arcTo(...args) {
        this.addPath({
            action: 'arcTo',
            args: [...args],
        });
        return this;
    }
    bezierCurveTo(...args) {
        this.addPath({
            action: 'bezierCurveTo',
            args: [...args],
        });
        return this;
    }
    ellipse(...args) {
        this.addPath({
            action: 'ellipse',
            args: [...args],
        });
        return this;
    }
    fillRect(...args) {
        this.addPath({
            action: 'fillRect',
            args: [...args],
        });
        return this;
    }
    strokeRect(...args) {
        this.addPath({
            action: 'strokeRect',
            args: [...args],
        });
        return this;
    }
    pathInstruction = [];
    get _shouldUpdate() {
        const actions = this.pathInstruction.map(item => item.action);
        if (actions.includes('fill')
            || actions.includes('stroke')) {
            return true;
        }
        return false;
    }
    _render(_ctx) {
        if (!_ctx) {
            throw new Error('CanvasRenderingContext2D is null or undefined');
        }
        for (let index = 0; index < this.pathInstruction.length; index++) {
            const { action, args } = this.pathInstruction[index];
            if (action === 'fill') {
                if (args[0]) {
                    _ctx.fillStyle = args[0];
                }
                else if (this.fillStyle) {
                    _ctx.fillStyle = this.fillStyle;
                }
                _ctx.fill();
            }
            else if (action === 'stroke') {
                if (args[0]) {
                    const strokeInput = args[0];
                    if (typeof strokeInput === 'string'
                        || strokeInput instanceof CanvasGradient
                        || strokeInput instanceof CanvasPattern) {
                        _ctx.strokeStyle = strokeInput;
                        _ctx.lineWidth = this.strokeStyle.width ?? 1;
                    }
                    else {
                        const color = strokeInput.color ?? this.strokeStyle.color;
                        if (color)
                            _ctx.strokeStyle = color;
                        const width = strokeInput.width ?? this.strokeStyle.width;
                        if (width)
                            _ctx.lineWidth = width;
                        if (strokeInput.dash) {
                            _ctx.setLineDash(strokeInput.dash);
                        }
                        else {
                            _ctx.setLineDash([]);
                        }
                    }
                }
                else {
                    if (this.strokeStyle.color)
                        _ctx.strokeStyle = this.strokeStyle.color;
                    if (this.strokeStyle.width)
                        _ctx.lineWidth = this.strokeStyle.width;
                    if (this.strokeStyle.dash) {
                        _ctx.setLineDash(this.strokeStyle.dash);
                    }
                    else {
                        _ctx.setLineDash([]);
                    }
                }
                _ctx.stroke();
            }
            else {
                _ctx[action](...args);
            }
        }
    }
    _strokeStyle = {};
    set strokeStyle(value) {
        if (value === this._strokeStyle)
            return;
        if (typeof value === 'string'
            || value instanceof CanvasGradient
            || value instanceof CanvasPattern) {
            this._strokeStyle = createProxy({
                ...this._strokeStyle,
                color: value,
            }, () => {
                this._onUpdate();
            });
        }
        else {
            this._strokeStyle = createProxy(value, () => {
                this._onUpdate();
            });
            this._onUpdate();
        }
    }
    get strokeStyle() {
        return this._strokeStyle;
    }
    transformWidth = 0;
    transformHeight = 0;
    updateTransformBounds() {
        // 所有坐标的最大值放进来
        const allX = [];
        const allY = [];
        for (let index = 0; index < this.pathInstruction.length; index++) {
            const { action, args } = this.pathInstruction[index];
            switch (action) {
                case 'lineTo':
                    allX.push(args[0]);
                    allY.push(args[1]);
                    break;
                case 'fillRect':
                case 'strokeRect':
                case 'roundRect':
                case 'rect': {
                    let strokeWeight = 0;
                    if (action === 'strokeRect') {
                        strokeWeight = this.strokeStyle.width ?? 1;
                    }
                    allX.push(args[0] + args[2] + strokeWeight);
                    allY.push(args[1] + args[2] + strokeWeight);
                    break;
                }
                case 'arc':
                    allX.push(args[0] + args[2]);
                    allY.push(args[1] + args[2]);
                    break;
                case 'arcTo':
                    allX.push(args[0] + args[2]);
                    allY.push(args[1] + args[2]);
                    break;
                case 'bezierCurveTo':
                    allX.push(args[2] + args[4]);
                    allY.push(args[3] + args[5]);
                    break;
                case 'ellipse':
                    allX.push(args[0] + args[2]);
                    allY.push(args[1] + args[3]);
            }
        }
        this.transformWidth = calcDiff(allX);
        this.transformHeight = calcDiff(allY);
    }
    _fillStyle = null;
    set fillStyle(value) {
        this._fillStyle = value;
        this._onUpdate();
    }
    get fillStyle() {
        return this._fillStyle;
    }
    fill(color) {
        if (color) {
            this.addPath({
                action: 'fill',
                args: [color],
            });
        }
        return this;
    }
    stroke(value) {
        this.addPath({
            action: 'stroke',
            args: value ? [value] : [],
        });
        return this;
    }
    _filter = 'none';
    set filter(value) {
        this._filter = value;
        this._onUpdate();
    }
    get filter() {
        return this._filter;
    }
}

export { Shape };
