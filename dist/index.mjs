var ENV;
(function (ENV) {
    ENV["WEB"] = "WEB";
    ENV["UNI_APP"] = "UNI_APP";
    ENV["WX"] = "WX";
})(ENV || (ENV = {}));
class Painter {
    defaultTextStyle;
    canvas;
    ctx;
    constructor(defaultTextStyle) {
        this.defaultTextStyle = defaultTextStyle;
        this.defaultTextStyle = Object.assign({}, {
            textBaseline: 'hanging',
            fontFamily: '"Microsoft YaHei"',
            textAlign: 'left',
            fontSize: 32,
            color: '#000',
        }, defaultTextStyle);
    }
    init(width, height) {
        switch (getEnv()) {
            case ENV.WEB:
                this.canvas = document.createElement('canvas');
                this.ctx = this.canvas.getContext('2d');
                const dpr = window.devicePixelRatio ?? 1;
                this.canvas.width = width * dpr;
                this.canvas.height = height * dpr;
                this.ctx.scale(dpr, dpr);
                break;
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
    text(text, x, y, style = {}) {
        if (!this.checkCtx()) {
            return;
        }
        const _style = Object.assign({}, this.defaultTextStyle, style);
        console.log(_style);
        const ctx = this.ctx;
        if (_style.color) {
            ctx.fillStyle = _style.color;
        }
        if (_style.textAlign) {
            ctx.textAlign = _style.textAlign;
        }
        if (_style.textBaseline) {
            ctx.textBaseline = _style.textBaseline;
        }
        if (_style.font) {
            ctx.font = _style.font;
        }
        else {
            const fs = _style.fontSize ? `${_style.fontSize}px` : '32px';
            console.log(_style.fontSize);
            const fontWeight = _style.fontWeight || 'normal';
            ctx.font = ` ${fontWeight} ${fs} ${_style.fontFamily}`;
            console.log(ctx.font);
        }
        if (_style?.maxWidth && _style?.lineHeight) {
            const allAtr = text.split('');
            const splitText = []; // 拆分出来的每一行
            let multilineText = []; // 每一行的文字数组
            for (let i = 0; i < allAtr.length; i++) {
                const currentStr = allAtr[i];
                multilineText.push(currentStr);
                const rowStr = multilineText.join('');
                if (ctx.measureText(rowStr).width > _style.maxWidth) {
                    multilineText.pop();
                    splitText.push(multilineText.join(''));
                    multilineText = [currentStr];
                    continue;
                }
                if (i === allAtr.length - 1) {
                    splitText.push(rowStr);
                }
            }
            for (let i = 0; i < splitText.length; i++) {
                ctx.fillText(splitText[i], x, y + i * _style.lineHeight);
            }
        }
        else {
            console.log(ctx.textBaseline);
            ctx.fillText(text, x, y);
        }
    }
}
function getEnv() {
    if (typeof uni === 'object') {
        return ENV.UNI_APP;
    }
    if (/MicroMessenger/.test(navigator.userAgent)) {
        return ENV.WX;
    }
    return ENV.WEB;
}

export { Painter, Painter as default };
