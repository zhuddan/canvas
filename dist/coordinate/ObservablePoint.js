"use strict";class t{_x;_y;_observer;constructor(t,s,e){this._x=s||0,this._y=e||0,this._observer=t}clone(s){return new t(s??this._observer,this._x,this._y)}set(t=0,s=t){return this._x===t&&this._y===s||(this._x=t,this._y=s,this._observer?._onUpdate(this)),this}copyFrom(t){return this._x===t.x&&this._y===t.y||(this._x=t.x,this._y=t.y,this._observer?._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer?._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer?._onUpdate(this))}}exports.ObservablePoint=t;
//# sourceMappingURL=ObservablePoint.js.map