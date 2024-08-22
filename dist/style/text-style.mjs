import { createCanvasFontString, formatValue } from '../utils.mjs';
import { AbstractStyle } from './abstract-style.mjs';
import '../index-txTiXx5A.js';

class TextStyle extends AbstractStyle {
    static defaultTextStyle = {
        fill: 'black',
        stroke: {
            width: 1,
        },
        fontFamily: 'Arial',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontStretch: 'condensed',
        fontVariantCaps: 'normal',
        letterSpacing: 0,
        wordSpacing: 0,
        textAlign: 'left',
        filter: 'none',
        lineHeight: 0,
        wordWrap: false,
        wordWrapWidth: 0,
    };
    _isStroke;
    constructor(style = {}) {
        super();
        this._isStroke = !!style.stroke;
        const fullStyle = Object.assign({}, TextStyle.defaultTextStyle, style);
        for (const key in fullStyle) {
            const thisKey = key;
            const data = fullStyle[key];
            if (key === 'stroke') {
                this[thisKey] = Object.assign({}, TextStyle.defaultTextStyle[key], data);
            }
            else {
                this[thisKey] = data;
            }
        }
    }
    reset() {
        const defaultStyle = TextStyle.defaultTextStyle;
        for (const key in defaultStyle) {
            this[key] = defaultStyle[key];
        }
        this.updateBounds();
        this.update();
    }
    textBaseline = 'top';
    _fontSize;
    set fontSize(value) {
        this._fontSize = value;
        this.updateBounds();
        this.update();
    }
    get fontSize() {
        return this._fontSize;
    }
    _fontFamily;
    set fontFamily(value) {
        this._fontFamily = value;
        this.updateBounds();
        this.update();
    }
    get fontFamily() {
        return this._fontFamily;
    }
    _fontStyle;
    set fontStyle(value) {
        this._fontStyle = value;
        this.updateBounds();
        this.update();
    }
    get fontStyle() {
        return this._fontStyle;
    }
    _fontWeight;
    set fontWeight(value) {
        this._fontWeight = value;
        this.updateBounds();
        this.update();
    }
    get fontWeight() {
        return this._fontWeight;
    }
    _fontStretch = TextStyle.defaultTextStyle.fontStretch;
    set fontStretch(value) {
        this._fontStretch = value;
        this.updateBounds();
        this.update();
    }
    get fontStretch() {
        return this._fontStretch;
    }
    _fontVariantCaps = TextStyle.defaultTextStyle.fontVariantCaps;
    set fontVariantCaps(value) {
        this._fontVariantCaps = value;
        this.updateBounds();
        this.update();
    }
    get fontVariantCaps() {
        return this._fontVariantCaps;
    }
    _letterSpacing = TextStyle.defaultTextStyle.letterSpacing;
    set letterSpacing(value) {
        this._letterSpacing = value;
        this.update();
        this.updateBounds();
    }
    get letterSpacing() {
        return this._letterSpacing;
    }
    _wordSpacing = TextStyle.defaultTextStyle.wordSpacing;
    set wordSpacing(value) {
        this._wordSpacing = value;
        this.update();
        this.updateBounds();
    }
    get wordSpacing() {
        return this._wordSpacing;
    }
    _textAlign = TextStyle.defaultTextStyle.textAlign;
    set textAlign(value) {
        this._textAlign = value;
        this.update();
    }
    get textAlign() {
        return this._textAlign;
    }
    _lineHeight = 0;
    set lineHeight(value) {
        if (this.lineHeight !== value) {
            this._lineHeight = value;
            this.update();
            this.updateBounds();
        }
    }
    get lineHeight() {
        if (!this._lineHeight) {
            this._lineHeight = typeof this.fontSize == 'number' ? this.fontSize : Number.parseInt(`${this.fontSize}`);
        }
        return this._lineHeight;
    }
    _wordWrap = false;
    set wordWrap(value) {
        if (this.wordWrap !== value) {
            this._wordWrap = value;
            this.update();
            this.updateBounds();
        }
    }
    get wordWrap() {
        return this._wordWrap;
    }
    _wordWrapWidth = 0;
    set wordWrapWidth(value) {
        if (this.wordWrapWidth !== value) {
            this._wordWrapWidth = value;
            this.update();
            this.updateBounds();
        }
    }
    get wordWrapWidth() {
        return this._wordWrapWidth;
    }
    clone() {
        return new TextStyle({
            fill: this.fill,
            stroke: this.stroke,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            fontStyle: this.fontStyle,
            fontWeight: this.fontWeight,
            fontStretch: this.fontStretch,
            fontVariantCaps: this.fontVariantCaps,
            letterSpacing: this.letterSpacing,
            wordSpacing: this.wordSpacing,
            textAlign: this.textAlign,
            filter: this.filter,
        });
    }
    render(ctx) {
        super.render(ctx);
        ctx.textBaseline = 'top';
        ctx.font = createCanvasFontString(this);
        ctx.fontStretch = this.fontStretch;
        ctx.fontVariantCaps = this.fontVariantCaps;
        ctx.letterSpacing = formatValue(this.letterSpacing);
        ctx.wordSpacing = formatValue(this.wordSpacing);
        ctx.textAlign = this.textAlign;
        return this;
    }
}

export { TextStyle };
