import { TextStyle } from '../style/text-style.mjs';
import { Display } from './display.mjs';
import '../utils.mjs';
import '../style/abstract-style.mjs';
import '../index-txTiXx5A.js';
import '../coordinate/ObservablePoint.mjs';

class Text extends Display {
    constructor(options) {
        super(options);
        if (options.style)
            this.style = options.style;
        this.text = options.text ?? '';
        this.emit('ready');
        this._onUpdate();
    }
    _style = new TextStyle();
    set style(style) {
        style = style || {};
        this._style?.off('update', this._onUpdate, this);
        this._style?.off('updateBounds', this.shouldUpdateBounds, this);
        if (style instanceof TextStyle) {
            this._style = style;
        }
        else {
            this._style = new TextStyle(style);
        }
        this._style.on('update', this._onUpdate, this);
        this._style?.on('updateBounds', this.shouldUpdateBounds, this);
        this._onUpdate();
    }
    get style() {
        return this._style;
    }
    _text = '';
    set text(text) {
        if (this._text === text)
            return;
        this._text = text;
        this._onUpdate();
    }
    get text() {
        return this._text;
    }
    get _shouldUpdate() {
        return !!(this.style.fill) || !!(this.style.stroke.color && this.style.stroke.width);
    }
    getSplitText(ctx) {
        const texts = this.text.split('');
        const splitText = [];
        let multilineText = [];
        for (let i = 0; i < texts.length; i++) {
            const currentStr = texts[i];
            multilineText.push(currentStr);
            const rowStr = multilineText.join('');
            if (ctx.measureText(rowStr).width > this.style.wordWrapWidth) {
                multilineText.pop();
                splitText.push(multilineText.join(''));
                multilineText = [currentStr];
                continue;
            }
            if (i === texts.length - 1) {
                splitText.push(rowStr);
            }
        }
        return splitText;
    }
    _render(ctx) {
        if (this.style.fill || (this.style.stroke?.color && this.style.stroke?.width)) {
            this.style.render(ctx);
            // 绘制单行文本
            if (!this.style.wordWrap || !this.style.wordWrapWidth) {
                if (this.style.fill) {
                    ctx.fillText(this.text, this.position.x, this.position.y);
                }
                if (this.style.stroke?.color && this.style.stroke?.width) {
                    ctx.strokeText(this.text, this.position.x, this.position.y);
                }
            }
            else {
                const splitText = this.getSplitText(ctx);
                for (let i = 0; i < splitText.length; i++) {
                    const text = splitText[i];
                    if (this.style.fill) {
                        ctx.strokeText(text, this.position.x, this.position.y + i * this.style.lineHeight);
                    }
                    if (this.style.stroke?.color && this.style.stroke?.width) {
                        ctx.strokeText(text, this.position.x, this.position.y + i * this.style.lineHeight);
                    }
                }
            }
        }
    }
    updateTransformBounds() {
        if (!this._app)
            return;
        this._app.onContext((ctx) => {
            this.style.render(ctx);
            if (!this.style.wordWrap || !this.style.wordWrapWidth) {
                const measure = ctx.measureText(this.text);
                this.transformWidth = measure.width;
                let height = Math.max(...[
                    measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent,
                    typeof this.style.fontSize == 'number' ? this.style.fontSize : Number.parseInt(`${this.style.fontSize}`),
                ]);
                if (this.style.stroke && this.style.stroke.width) {
                    height += this.style.stroke.width;
                }
                this.transformHeight = height;
            }
            else {
                const splitText = this.getSplitText(ctx);
                this.transformWidth = this.style.wordWrapWidth;
                if (!splitText.length) {
                    this.transformHeight = 0;
                    return;
                }
                const measure = ctx.measureText(this.getSplitText(ctx)[0]);
                const lineHeight = this.style.lineHeight;
                let height = Math.max(...[
                    measure.actualBoundingBoxDescent - measure.actualBoundingBoxAscent,
                    lineHeight,
                ]);
                if (this.style.stroke && this.style.stroke.width) {
                    height += this.style.stroke.width;
                }
                if (splitText.length > 1) {
                    this.transformHeight = (splitText.length - 1) * lineHeight + height;
                }
            }
        });
    }
    transformWidth = 0;
    transformHeight = 0;
}

export { Text };
