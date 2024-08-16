
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { Event } from './common/event.mjs';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function updateIntercept() {
    return function (target, propertyKey, descriptor) {
        const originalSet = descriptor.set;
        const originalGet = descriptor.get;
        descriptor.set = function (newValue) {
            if (originalSet) {
                const oldValue = originalGet?.call(this);
                if (newValue !== oldValue) {
                    originalSet.call(this, newValue);
                    // target.on('shouldUpdate', console.log)
                    target.emit.call(this, 'shouldUpdate', propertyKey);
                }
                else {
                    console.log([newValue, oldValue], '新旧值相同');
                }
            }
        };
        Object.defineProperty(target, propertyKey, descriptor);
    };
}

class Point extends Event {
    shouldUpdate = false;
    _x = -Infinity;
    set x(x) {
        this._x = x;
    }
    get x() {
        return this._x;
    }
    _y = -Infinity;
    set y(y) {
        this._y = y;
    }
    get y() {
        return this._y;
    }
    constructor(arg1) {
        super();
        if (Array.isArray(arg1)) {
            [this._x, this._y] = arg1;
        }
        else {
            this._x = arg1.x;
            this._y = arg1.y;
        }
    }
    translate(p) {
        p = createPoint(p);
        this.x += p.x;
        this.y += p.y;
        return this;
    }
    reverse() {
        this.x *= -1;
        this.y *= -1;
        return this;
    }
    clone() {
        return new Point([this.x, this.y]);
    }
}
__decorate([
    updateIntercept()
], Point.prototype, "x", null);
__decorate([
    updateIntercept()
], Point.prototype, "y", null);
function createPoint(maybePoint) {
    if (maybePoint instanceof Point) {
        return maybePoint;
    }
    return new Point(maybePoint);
}

export { Point as P, __decorate as _, createPoint as c, updateIntercept as u };
//# sourceMappingURL=point-D9q2E1O2.js.map
