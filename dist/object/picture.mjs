import { ObservablePoint } from '../coordinate/ObservablePoint.mjs';
import { calcDiff } from '../utils.mjs';
import { App } from '../app.mjs';
import { Display } from './display.mjs';
import '../index-txTiXx5A.js';
import '../const.mjs';

class Picture extends Display {
    options;
    constructor(maybeImage, options) {
        super(options);
        this.options = options;
        if (typeof maybeImage == 'string') {
            this.image = App.createImage();
            this.image.src = maybeImage;
        }
        else {
            this.image = maybeImage;
        }
        if (this.image.complete) {
            this._onImageComplete();
        }
        else {
            this.image.addEventListener('load', () => {
                this._onImageComplete();
            });
        }
    }
    image;
    // set image(value) {
    //   if (this.image !== value) {
    //     this._image = value
    //   }
    // }
    // get image() {
    //   return this._image
    // }
    _size = new ObservablePoint(this, 0, 0);
    _imageSize = new ObservablePoint(this, 0, 0);
    set size(value) {
        if (this.size !== value) {
            this._size.copyFrom(value);
            this.shouldUpdateBounds();
        }
    }
    get size() {
        return this._size;
    }
    _slice = new ObservablePoint(this);
    set slice(value) {
        if (this.slice !== value) {
            this._slice.copyFrom(value);
            this.shouldUpdateBounds();
        }
    }
    get slice() {
        return this._slice;
    }
    _sliceSize = new ObservablePoint(this);
    set sliceSize(value) {
        if (this.sliceSize !== value) {
            this._sliceSize.copyFrom(value);
            this._onUpdate();
            this.shouldUpdateBounds();
        }
    }
    get sliceSize() {
        return this._sliceSize;
    }
    _objectFit = 'none';
    set objectFit(value) {
        if (this.objectFit !== value) {
            this._objectFit = value;
            this.shouldUpdateBounds();
            this._onUpdate();
        }
    }
    get objectFit() {
        return this._objectFit;
    }
    _rounded = 0;
    set rounded(value) {
        value = value <= 0 ? 0 : value;
        if (this.rounded !== value) {
            this._rounded = value;
            this._onUpdate();
        }
    }
    _onUpdate(_point) {
        if (this._ready)
            super._onUpdate(_point);
    }
    get rounded() {
        return this._rounded;
    }
    _ready = false;
    _onImageComplete() {
        this._imageSize = new ObservablePoint(this, this.image.width, this.image.height);
        this.size = this.options?.size ?? {
            x: this.image.width,
            y: this.image.height,
        };
        this.slice = this.options?.slice ?? this.slice;
        this.sliceSize = this.options?.sliceSize ?? {
            x: this.image.width,
            y: this.image.height,
        };
        this.objectFit = this.options?.objectFit ?? this.objectFit;
        this.rounded = this.options?.rounded ?? this.rounded;
        this.emit('ready');
        this._ready = true;
        this._onUpdate();
        this.shouldUpdateBounds();
    }
    get _shouldUpdate() {
        return true;
    }
    get _isSlice() {
        return (!!this.slice.x || !!this.slice.y) || !this.sliceSize.equals(this.size);
    }
    _render(ctx) {
        if (!this._isSlice) {
            const _size = this.size.clone();
            const _position = this.position.clone();
            const scaleDiff = _size.x / this._imageSize.x;
            const diffSize = calcDiff([this._imageSize.x, this._imageSize.y]);
            const diff = diffSize * scaleDiff;
            const slim = this._imageSize.x < this._imageSize.y;
            const fat = this._imageSize.x > this._imageSize.y;
            if ((slim || fat)) {
                switch (this.objectFit) {
                    case 'contain':
                        if (slim) {
                            this.position.set(this.position.x - diff / 2, this.position.y);
                            this.size.set(this.size.x - diff, this.size.y);
                        }
                        else {
                            this.position.set(this.position.x, this.position.y + diff / 2);
                            this.size.set(this.size.x, this.size.y - diff);
                        }
                        ctx.beginPath();
                        if (this.rounded) {
                            ctx.roundRect(this.x, this.y, this.size.x, this.size.y, this.rounded);
                        }
                        else {
                            ctx.rect(this.x, this.y, this.size.x, this.size.y);
                        }
                        ctx.clip();
                        break;
                    case 'cover':
                        if (slim) {
                            this.position.set(this.position.x + diff / 2, this.position.y);
                            this.size.set(this.size.x + diff, this.size.y);
                        }
                        else {
                            this.position.set(this.position.x - diff / 2, this.position.y);
                            this.size.set(this.size.x + diff, this.size.y);
                        }
                        ctx.beginPath();
                        if (this.rounded) {
                            ctx.roundRect(_position.x, _position.y, _size.x, _size.y, this.rounded);
                        }
                        else {
                            ctx.rect(_position.x, _position.y, _size.x, _size.y);
                        }
                        ctx.clip();
                        break;
                }
            }
            ctx.drawImage(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
            this.position = _position;
            this.size = _size;
        }
        else {
            const args = [
                this.image,
                this.slice.x,
                this.slice.y,
                this.sliceSize.x,
                this.sliceSize.y,
                this.x,
                this.y,
                this.size.x,
                this.size.y,
            ];
            ctx.beginPath();
            if (this.rounded) {
                ctx.roundRect(this.x, this.y, this.size.x, this.size.y, this.rounded);
            }
            else {
                ctx.rect(this.x, this.y, this.size.x, this.size.y);
            }
            ctx.clip();
            ctx.drawImage(...args);
        }
    }
    transformWidth = 0;
    transformHeight = 0;
    updateTransformBounds() {
        this.transformHeight = this.size.x;
        this.transformWidth = this.size.y;
    }
}

export { Picture };
