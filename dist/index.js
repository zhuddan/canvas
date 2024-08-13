'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var types = require('./types.js');

class Painter {
    defaultTextStyle;
    text(text, x, y, style = {}) {
        if (!this.checkCtx()) {
            return;
        }
        const ctx = this.ctx;
        ctx.save();
        const _style = Object.assign({}, this.defaultTextStyle, style);
        if (_style.rotateAngle || _style.rotateDeg) {
            const angle = _style.rotateAngle
                ? _style.rotateAngle
                : _style.rotateDeg * Math.PI / 180;
            ctx.translate(x, y);
            x = 0;
            y = 0;
            ctx.rotate(angle);
        }
        ctx.font = this.createCanvasFontString(_style);
        ctx.fontStretch = _style.fontStretch;
        ctx.fontVariantCaps = _style.fontVariantCaps;
        ctx.letterSpacing = this.formatValue(_style.letterSpacing);
        ctx.wordSpacing = this.formatValue(_style.wordSpacing);
        ctx.textAlign = _style.textAlign;
        ctx.textBaseline = _style.textBaseline;
        const fontSize = Number(Number.parseInt(`${_style.fontSize}`));
        let textHeight = Number.isNaN(fontSize) ? 0 : fontSize;
        let textWidth = 0;
        if (_style.fill) {
            ctx.fillStyle = _style.fill;
        }
        if (_style.stroke) {
            ctx.strokeStyle = _style.stroke;
            ctx.lineWidth = _style.strokeWeight || 1;
        }
        let anchorX = 0;
        let anchorY = 0;
        if (typeof _style.anchor !== 'undefined') {
            if (typeof _style.anchor === 'object') {
                anchorX = _style.anchor.x;
                anchorY = _style.anchor.y;
            }
            else {
                anchorX = anchorY = _style.anchor;
            }
        }
        anchorX = anchorX <= 0 ? 0 : anchorX >= 1 ? 1 : anchorX;
        anchorY = anchorY <= 0 ? 0 : anchorY >= 1 ? 1 : anchorY;
        if (_style.maxWidth && _style.lineHeight) {
            textWidth = _style.maxWidth;
            const texts = text.split('');
            const splitText = [];
            let multilineText = [];
            for (let i = 0; i < texts.length; i++) {
                const currentStr = texts[i];
                multilineText.push(currentStr);
                const rowStr = multilineText.join('');
                if (ctx.measureText(rowStr).width > _style.maxWidth) {
                    multilineText.pop();
                    splitText.push(multilineText.join(''));
                    multilineText = [currentStr];
                    continue;
                }
                if (i === texts.length - 1) {
                    splitText.push(rowStr);
                }
            }
            if (!splitText.length) {
                textHeight = 0;
            }
            else if (splitText.length === 1) {
                const measure = ctx.measureText(splitText[0]);
                textHeight = Math.max(...[
                    measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent,
                    Number.isNaN(fontSize) ? 0 : fontSize,
                ]);
            }
            else {
                textHeight = (splitText.length - 1) * _style.lineHeight + textHeight;
            }
            if (anchorX !== 0) {
                x -= textWidth * anchorX;
            }
            if (anchorY !== 0) {
                y -= textHeight * anchorY;
            }
            for (let i = 0; i < splitText.length; i++) {
                ctx.fillText(splitText[i], x, y + i * _style.lineHeight);
                if (_style.stroke) {
                    ctx.strokeText(splitText[i], x, y + i * _style.lineHeight);
                }
            }
        }
        else {
            const measure = ctx.measureText(text);
            textWidth = measure.width;
            textHeight = Math.max(...[
                measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent,
                Number.isNaN(fontSize) ? 0 : fontSize,
            ]);
            if (anchorX !== 0) {
                x -= textWidth * anchorX;
            }
            if (anchorY !== 0) {
                y -= textHeight * anchorY;
            }
            if (_style.stroke) {
                ctx.strokeText(text, x, y);
            }
            ctx.fillText(text, x, y);
        }
        ctx.restore();
        return textHeight;
    }
    createCanvasFontString({ fontFamily, fontSize, fontStyle = 'normal', fontWeight = 'normal', }) {
        fontSize = typeof fontSize === 'string' ? fontSize : `${fontSize}px`;
        return `${fontStyle} ${fontWeight} ${fontSize} ${fontFamily}`;
    }
    formatValue(val) {
        return typeof val === 'string' ? val : `${val}px`;
    }
    canvas;
    ctx;
    constructor(defaultTextStyle = {}) {
        this.defaultTextStyle = defaultTextStyle;
        const default_ = {
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
        this.defaultTextStyle = Object.assign({}, default_, defaultTextStyle);
    }
    init(width, height) {
        switch (getEnv()) {
            case types.ENV.WEB: {
                this.canvas = document.createElement('canvas');
                this.ctx = this.canvas.getContext('2d');
                this.canvas.width = width * 1;
                this.canvas.height = height * 1;
                // this.ctx.scale(dpr, dpr)
                break;
            }
            // case ENV.UNI_APP:
            //   this.canvas = uni.createOffscreenCanvas(width, height)
            //   this.ctx = this.canvas.getContext('2d')
            //   break
            // case ENV.WX:
            //   this.canvas = wx.createOffscreenCanvas(width, height)
            //   this.ctx = this.canvas.getContext('2d')
            //   break
        }
    }
    checkCtx() {
        if (!this.ctx) {
            // return false
            throw new Error('请先执行 init() 函数');
        }
        return true;
    }
}
function getEnv() {
    if (typeof uni === 'object') {
        return types.ENV.UNI_APP;
    }
    if (/MicroMessenger/.test(navigator.userAgent)) {
        return types.ENV.WX;
    }
    return types.ENV.WEB;
}

exports.Painter = Painter;
exports.default = Painter;
