'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('./utils.js');

const dpr = window.devicePixelRatio ?? 1;
class Bounds {
    start;
    size;
    constructor(start, size) {
        if (size[0] < 0 || size[1] < 0) {
            throw new Error(`Size ${JSON.stringify(size)} is meaningless`);
        }
        this.start = { x: start[0], y: start[1] };
        this.size = { x: size[0], y: size[1] };
    }
    get width() {
        return this.size.x;
    }
    get height() {
        return this.size.y;
    }
    get end() {
        return {
            x: this.start.x + this.size.x,
            y: this.start.y + this.size.y,
        };
    }
}
// window.devicePixelRatio = 1
class Painter {
    canvas;
    ctx;
    defaultTextStyle;
    defaultLineBaseStyle;
    _defaultTransform = { angle: 0, scale: 1, skew: 0, anchor: 0 };
    constructor() {
        const defaultTextBaseStyle = {
            fontFamily: '"Microsoft YaHei"',
            fontSize: 32,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fill: '#000',
            stroke: undefined,
            fontStretch: 'normal',
            fontVariantCaps: 'normal',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            textAlign: 'left',
            textBaseline: 'top',
        };
        this.defaultTextStyle = Object.assign({
            ...this._defaultTransform,
        }, defaultTextBaseStyle);
        const defaultBaseStyle = {
            fill: undefined,
            stroke: '#000',
            dash: false,
            dashOffset: 0,
            lineCap: 'butt',
            lineJoin: 'miter',
        };
        this.defaultLineBaseStyle = Object.assign({ ...this._defaultTransform }, defaultBaseStyle);
    }
    /**
     * 检查init函数是否执行
     */
    _checkCtx() {
        if (!this.ctx) {
            throw new Error('请先执行 init() 函数');
        }
        return true;
    }
    /**
     * 设置颜色 fillStyle strokeStyle
     */
    setColor(_style) {
        this._create((ctx) => {
            if (_style.fill) {
                ctx.fillStyle = _style.fill;
            }
            if (_style.stroke) {
                ctx.strokeStyle = _style.stroke;
                ctx.lineWidth = typeof _style.strokeWeight === 'undefined' ? 1 : _style.strokeWeight;
            }
            if (_style.alpha) {
                ctx.globalAlpha = utils.ensureBetween(_style.alpha);
            }
        }, false);
    }
    /**
     * 设置线段样式
     */
    setLineStyle(_style) {
        this._create((ctx) => {
            if (_style.dash) {
                if (_style.dash === true) {
                    ctx.setLineDash([4, 4]);
                }
                else {
                    ctx.setLineDash(_style.dash);
                }
            }
            ctx.lineDashOffset = _style.dashOffset;
            ctx.lineCap = _style.lineCap;
            ctx.lineJoin = _style.lineJoin;
        }, false);
    }
    setTransform(style, bounds) {
        this._create((ctx) => {
            let { transform, angle = 0, scale = 1, skew = 0, anchor = 0, } = style;
            if (!transform) {
                scale = utils.toPoint(scale);
                skew = utils.toPoint(skew);
                anchor = utils.toPoint(anchor);
                const translateX = bounds.start.x + bounds.size.x * utils.ensureBetween(anchor.x);
                const translateY = bounds.start.y + bounds.size.y * utils.ensureBetween(anchor.y);
                // 角度转换为弧度
                const radians = angle * Math.PI / 180;
                // 计算变换矩阵的各个元素
                const scaleX = Math.cos(radians) * scale.x; // 缩放并旋转后，x轴方向的缩放
                const skewX = Math.sin(radians) * scale.x; // 缩放并旋转后，y轴方向的偏移（旋转+缩放）
                const skewY = -Math.sin(radians) * scale.y + skew.x; // 缩放并旋转后，x轴方向的偏移（旋转+缩放+倾斜）
                const scaleY = Math.cos(radians) * scale.y + skew.y; // 缩放并旋转后，y轴方向的缩放
                transform = [
                    scaleX * dpr,
                    skewX * dpr,
                    skewY * dpr,
                    scaleY * dpr,
                    translateX * dpr,
                    translateY * dpr,
                ];
            }
            ctx.setTransform(...transform);
        }, false);
    }
    getAnchor(style, bounds) {
        if (!style.transform) {
            const p = utils.toPoint(style.anchor || 0);
            return {
                x: utils.ensureBetween(p.x),
                y: utils.ensureBetween(p.y),
            };
        }
        else {
            return {
                x: (style.transform[4] - bounds.start.x) / bounds.width,
                y: (style.transform[5] - bounds.start.y) / bounds.height,
            };
        }
    }
    /**
     * 初始化
     * @param width
     * @param height
     */
    init(width, height) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.width = utils.formatValue(width);
        this.canvas.style.height = utils.formatValue(height);
        this.canvas.width = width * dpr;
        this.canvas.height = height * dpr;
        this.ctx.scale(dpr, dpr);
        return this;
    }
    /**
     * 绘制矩形(圆角请设置 style.radii )
     * @param x
     * @param y
     * @param w
     * @param h
     * @param style
     */
    rect(x, y, w, h, style = {}) {
        return this._create((ctx) => {
            const _style = Object.assign({}, this.defaultLineBaseStyle, style);
            ctx.save();
            const bounds = new Bounds([x, y], [w, h]);
            this.setTransform(_style, bounds);
            const anchor = this.getAnchor(_style, bounds);
            x = -anchor.x * w;
            y = -anchor.y * h;
            this.setColor(_style);
            this.setLineStyle(_style);
            ctx.beginPath();
            if (_style.radii) {
                ctx.roundRect(x, y, w, h, _style.radii);
            }
            else {
                ctx.rect(x, y, w, h);
            }
            if (_style.fill) {
                ctx.fill();
            }
            if (style.stroke) {
                ctx.stroke();
            }
        });
    }
    /**
     *
     * @param callback
     * @param save
     */
    _create(callback, save = true) {
        if (!this._checkCtx()) {
            throw new Error('未执行init函数');
        }
        const ctx = this.ctx;
        if (save) {
            ctx.save();
        }
        const result = callback(ctx);
        if (save) {
            ctx.restore();
        }
        return result;
    }
}
// test
const p = new Painter();
p.init(600, 600);
p.rect(200, 200, 200, 200, {
    fill: 'blue',
    alpha: 0.5,
    anchor: 0,
    angle: -45,
    skew: {
        x: 0.2,
        y: 0.8,
    },
});
p._create((ctx) => {
    ctx.beginPath();
    [100, 200, 300, 400, 500].forEach((e) => {
        ctx.moveTo(e, 0);
        ctx.lineTo(e, 600);
        ctx.moveTo(0, e);
        ctx.lineTo(600, e);
    });
    ctx.stroke();
    ctx.textBaseline = 'top';
    ctx.font = '12px 黑体';
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 6; col++) {
            ctx.fillText(`${row * 100},${col * 100}`, row * 100, col * 100);
        }
    }
}, false);
const canvas = p.canvas;

exports.Painter = Painter;
exports.canvas = canvas;
exports.default = Painter;
