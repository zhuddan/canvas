
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { E as EventEmitter } from '../index-BYsAzWpY.js';
import { ObservablePoint } from '../coordinate/ObservablePoint.mjs';
import { createProxy, ensureBetween } from '../utils.mjs';

const defaultSkew = new ObservablePoint(null);
const defaultPivot = new ObservablePoint(null);
const defaultAnchor = new ObservablePoint(null);
const defaultScale = new ObservablePoint(null, 1, 1);
class Display extends EventEmitter {
    constructor(options = {}) {
        super();
        this.visible = options.visible ?? true;
        if (options.position) {
            this.position = options.position;
        }
        else {
            this.x = options.x ?? 0;
            this.y = options.y ?? 0;
        }
        if (options.scale) {
            this.scale = options.scale;
        }
        if (options.skew) {
            this.skew = options.skew;
        }
        if (options.pivot) {
            this.pivot = options.pivot;
        }
        if (options.shadow) {
            this.shadow = options.shadow;
        }
        if (options.anchor) {
            this.anchor = options.anchor;
        }
        if (options.rotation) {
            this.rotation = options.rotation;
        }
    }
    /**
     * 更新优化
     */
    get __shouldUpdate() {
        return !(!this.visible
            || this.scale.x === 0
            || this.scale.y === 0
            || this.alpha === 0);
    }
    get shouldUpdate() {
        return this.__shouldUpdate && this._shouldUpdate;
    }
    _dirty = false;
    set dirty(value) {
        if (this._dirty === value)
            return;
        this._dirty = value;
    }
    get dirty() {
        return this._dirty;
    }
    set x(value) {
        if (this.x !== value) {
            this.position.x = value;
        }
    }
    get x() {
        return this.position.x;
    }
    set y(value) {
        if (this.y !== value) {
            this.position.y = value;
        }
    }
    get y() {
        return this.position.y;
    }
    _position = new ObservablePoint(this, 0, 0);
    set position(value) {
        if (this.position !== value) {
            this._position.copyFrom(value);
        }
    }
    get position() {
        return this._position;
    }
    _scale = defaultScale;
    set scale(value) {
        if (this._scale === defaultScale) {
            this._scale = new ObservablePoint(this, 1, 1);
        }
        if (typeof value === 'number') {
            this._scale.set(value);
        }
        else {
            this._scale.copyFrom(value);
        }
    }
    get scale() {
        if (this._scale === defaultScale) {
            this._scale = new ObservablePoint(this, 1, 1);
        }
        return this._scale;
    }
    _skew = defaultSkew;
    set skew(value) {
        if (this._skew === defaultSkew) {
            this._skew = new ObservablePoint(this);
        }
        this._skew.copyFrom(value);
    }
    get skew() {
        if (this._skew === defaultSkew) {
            this._skew = new ObservablePoint(this, 0, 0);
        }
        return this._skew;
    }
    _alpha = 1;
    set alpha(value) {
        if (this.alpha !== value) {
            this._alpha = value;
            this._onUpdate();
        }
    }
    get alpha() {
        return this._alpha;
    }
    _rotation = 0;
    set rotation(value) {
        if (this.rotation !== value) {
            this._rotation = value;
            this._onUpdate();
        }
    }
    get rotation() {
        return this._rotation;
    }
    _anchor = defaultAnchor;
    set anchor(value) {
        if (this._anchor === defaultAnchor) {
            this._anchor = new ObservablePoint(this, 0, 0);
        }
        if (typeof value === 'number') {
            this._anchor.set(value);
        }
        else {
            this._anchor.copyFrom(value);
        }
    }
    get anchor() {
        if (this._anchor === defaultAnchor) {
            this._anchor = new ObservablePoint(this);
        }
        return this._anchor;
    }
    _pivot = defaultPivot;
    set pivot(value) {
        if (this._pivot === defaultPivot) {
            this._pivot = new ObservablePoint(this, 0, 0);
        }
        if (typeof value === 'number') {
            this._pivot.set(value);
        }
        else {
            this._pivot.copyFrom(value);
        }
    }
    get pivot() {
        if (this._pivot === defaultPivot) {
            this._pivot = new ObservablePoint(this);
        }
        return this._pivot;
    }
    _shadow = { x: 0, y: 0 };
    set shadow(value) {
        if (value === this._shadow)
            return;
        if (value) {
            this._shadow = createProxy(value, () => {
                this._onUpdate();
            });
            this._onUpdate();
        }
    }
    get shadow() {
        return this._shadow;
    }
    _onUpdate(_point) {
        this.dirty = true;
    }
    _app = null;
    // abstract style: BaseStyle
    _visible = true;
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        this._onUpdate();
    }
    _shouldUpdateBounds = true;
    shouldUpdateBounds() {
        this._shouldUpdateBounds = true;
    }
    _baseRender(ctx) {
        if ((this.shadow?.x || this.shadow?.y)
            && (this.shadow?.blur || this.shadow?.color)) {
            if (this.shadow.color) {
                ctx.shadowColor = this.shadow.color;
            }
            if (this.shadow.blur) {
                ctx.shadowBlur = this.shadow.blur;
            }
            if (this.shadow.x) {
                ctx.shadowOffsetX = this.shadow.x;
            }
            if (this.shadow.y) {
                ctx.shadowOffsetY = this.shadow.y;
            }
        }
    }
    render(ctx) {
        if (this._shouldUpdateBounds) {
            this.updateTransformBounds();
            this._shouldUpdateBounds = false;
        }
        if (this.alpha !== 1) {
            ctx.globalAlpha = this.alpha;
        }
        const dpr = this._app?.dpr ?? 1;
        const scaleX = this.scale.x * dpr;
        const scaleY = this.scale.y * dpr;
        const skewX = this.skew.x;
        const skewY = this.skew.y;
        const positionX = this.position.x * dpr;
        const positionY = this.position.y * dpr;
        const pivotX = this.pivot.x;
        const pivotY = this.pivot.y;
        const rotation = this.rotation;
        // Calculate rotation matrix components
        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);
        const anchorX = ensureBetween(this.anchor.x, 0, 1);
        const anchorY = ensureBetween(this.anchor.y, 0, 1);
        const originX = this.transformWidth * anchorX;
        const originY = this.transformHeight * anchorY;
        const dx = positionX - (pivotX + originX) * cos * scaleX + (pivotY + originY) * sin * scaleY;
        const dy = positionY - (pivotX + originX) * sin * scaleX - (pivotY + originY) * cos * scaleY;
        ctx.setTransform(scaleX * cos + skewY * -sin, // a
        scaleX * sin + skewY * cos, // b
        skewX * cos + scaleY * -sin, // c
        skewX * sin + scaleY * cos, // d
        dx, // e
        dy);
        const _position = this.position.clone();
        this.position.set(0);
        this._baseRender(ctx);
        this._render(ctx);
        this.position = _position;
        ctx.resetTransform();
    }
    _renderId = 0;
    onAdd(_app) {
        this._app = _app;
        this._onUpdate();
    }
    onRemove() {
        this._app = null;
        this._onUpdate();
    }
    destroy() {
        this.removeAllListeners();
    }
}

export { Display };
