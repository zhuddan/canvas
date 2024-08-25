function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var eventemitter3 = {exports: {}};

(function (module) {

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	{
	  module.exports = EventEmitter;
	} 
} (eventemitter3));

var eventemitter3Exports = eventemitter3.exports;
var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

/**
 *  输出 px
 * @param val
 */
function formatWithPx(val) {
    return typeof val === 'string' ? val : `${val}px`;
}
/**
 * 创造 [CSS-font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 字符串
 * 由于 canvas 绘制的差异性部分属性不生效故舍弃
 */
function createCanvasFontString({ fontFamily, fontSize, fontStyle = 'normal', fontWeight = 'normal', }) {
    const _fontSize = typeof fontSize === 'string' ? fontSize : `${fontSize}px`;
    return `${fontStyle} ${fontWeight} ${_fontSize} ${fontFamily}`;
}
/**
 * 计算最小值
 * @param numbers
 */
function calcMin(numbers) {
    return numbers.reduce((a, b) => {
        return a < b ? a : b;
    });
}
/**
 * 计算最大值
 * @param numbers
 */
function calcMax(numbers) {
    return numbers.reduce((a, b) => {
        return a > b ? a : b;
    });
}
/**
 * 计算差异
 * @param numbers
 */
function calcDiff(numbers) {
    return calcMax(numbers) - calcMin(numbers);
}
/**
 * 确保输入值在 min 和 max 之间，若超出边界则返回边界
 * @param input
 * @param min
 * @param max
 */
function ensureBetween(input, min = 0, max = 1) {
    return input <= min ? min : input >= max ? max : input;
}
/**
 * 创建代理
 * @param value
 * @param cb
 */
function createProxy(value, cb) {
    return new Proxy(value, {
        set: (target, property, newValue) => {
            target[property] = newValue;
            cb?.(property, newValue);
            return true;
        },
    });
}
var ENV;
(function (ENV) {
    ENV["WX"] = "WX";
    ENV["WEB"] = "WEB";
    ENV["UNKNOWN"] = "UNKNOWN";
    ENV["UNI_APP"] = "UNI_APP";
})(ENV || (ENV = {}));
function getEnv() {
    if (typeof uni !== 'undefined')
        return ENV.UNI_APP;
    if (typeof wx !== 'undefined')
        return ENV.WX;
    if (typeof window !== 'undefined' && typeof window.document !== 'undefined')
        return ENV.WEB;
    return ENV.UNKNOWN;
}
/**
 * Draws a rectangle with rounded corners compatible with different environments.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
 * @param {PointData} position - The position of the rectangle.
 * @param {PointData} size - The size of the rectangle.
 * @param {number} [rounded] - The radius of the rounded corners.
 *
 * @return {void}
 */
function drawRectCompatible(ctx, position, size, rounded) {
    rounded = rounded ?? 0;
    rounded = Math.min(rounded, size.x / 2, size.y / 2);
    ctx.beginPath();
    if (rounded) {
        if (getEnv() === ENV.WX) {
            // 左上角到右上角
            ctx.moveTo(position.x + rounded, position.y);
            ctx.arcTo(position.x + size.x, position.y, position.x + size.x, position.y + rounded, rounded);
            // 右上角到右下角
            ctx.arcTo(position.x + size.x, position.y + size.y, position.x + size.x - rounded, position.y + size.y, rounded);
            // 右下角到左下角
            ctx.arcTo(position.x, position.y + size.y, position.x, position.y + size.y - rounded, rounded);
            // 左下角到左上角
            ctx.arcTo(position.x, position.y, position.x + rounded, position.y, rounded);
            // 闭合路径
            ctx.closePath();
        }
        else {
            ctx.roundRect(position.x, position.y, size.x, size.y, rounded);
        }
    }
    else {
        ctx.rect(position.x, position.y, size.x, size.y);
    }
}

class App extends EventEmitter {
    options;
    ctx;
    _ready = false;
    _env = getEnv();
    canvas;
    ticker;
    dpr = 1;
    width = 0;
    height = 0;
    constructor(options = {}) {
        super();
        this.options = options;
        this.validateAppOptions(options);
        this.initDpr();
        this.initTicker();
        this.initCanvas();
    }
    onReady(fn) {
        if (this._ready) {
            fn();
        }
        else {
            this.once('ready', () => {
                fn();
            });
        }
    }
    validateAppOptions(appOptions) {
        if (this._env === ENV.WX && !appOptions.canvas) {
            console.error('当前为非document环境, 无法使用 document.createElement(\'canvas\'),\n 请传入canvas元素或者canvasId');
        }
    }
    initDpr() {
        const { dpr = true } = this.options;
        if (typeof dpr === 'boolean') {
            this.dpr = window.devicePixelRatio ?? 1;
        }
        else {
            this.dpr = dpr;
        }
    }
    initCanvas() {
        const canvas = this.options.canvas;
        if (canvas) {
            if (typeof canvas === 'string') {
                if (this._env === ENV.WEB) {
                    this.canvas = document.querySelector(canvas);
                }
                else {
                    let query;
                    if (this._env === ENV.WX) {
                        query = wx.createSelectorQuery();
                    }
                    else {
                        query = uni.createSelectorQuery();
                    }
                    query.select('#myCanvas')
                        .fields({ node: true, size: true }, undefined)
                        .exec((res) => {
                        const canvas = res[0].node;
                        this.canvas = canvas;
                        this.initCanvasSize();
                    });
                }
            }
            else {
                this.canvas = canvas;
                this.initCanvasSize();
            }
        }
        else {
            this.canvas = document.createElement('canvas');
            this.initCanvasSize();
        }
    }
    initCanvasSize() {
        const { width = 300, height = 150 } = this.options;
        if (!this.canvas)
            return;
        if (this.canvas.style) {
            this.canvas.style.width = formatWithPx(width);
            this.canvas.style.height = formatWithPx(height);
            this.canvas.width = width * this.dpr;
            this.canvas.height = height * this.dpr;
        }
        else {
            this.canvas.width = width * this.dpr;
            this.canvas.height = height * this.dpr;
        }
        this.width = width;
        this.height = width;
        this.ctx = this.canvas.getContext('2d');
        this._ready = true;
        this.emit('ready');
        this.ticker.init(this.canvas, true);
    }
    initTicker() {
        this.ticker = new Ticker();
        this.ticker.add(this.update.bind(this));
    }
    beforeRender() {
        this.ctx.save();
    }
    afterRender() {
        this.ctx.restore();
    }
    children = [];
    add(...objects) {
        for (let index = 0; index < objects.length; index++) {
            const object = objects[index];
            this.children.push(object);
            object.onAdd(this);
        }
    }
    remove(...objects) {
        for (let index = 0; index < objects.length; index++) {
            const object = objects[index];
            const delIndex = this.children.indexOf(object);
            if (delIndex !== -1) {
                object.onRemove();
                this.children.splice(delIndex, 1);
            }
        }
    }
    update() {
        if (!this.children.length) {
            return;
        }
        const isDirty = !![...this.children.filter(e => e.dirty)].length;
        const _renderIds = this.children.every(e => e._renderId > 0);
        if (_renderIds && this.children.length) {
            this.emit('render');
        }
        if (!isDirty)
            return;
        this.ctx.clearRect(-this.canvas.width, -this.canvas.height, this.canvas.width * 2, this.canvas.height * 2);
        // this.debug()
        const shouldRender = [...this.children].filter(e => e.shouldUpdate);
        while (shouldRender.length) {
            this.beforeRender();
            const child = shouldRender.shift();
            child.render(this.ctx);
            child.dirty = false;
            child._renderId++;
            this.afterRender();
        }
    }
    toDataURL(type, quality) {
        return this.canvas.toDataURL(type, quality);
    }
    toDataURLAsync(type, quality) {
        return new Promise((resolve) => {
            this.once('render', () => {
                resolve(this.toDataURL(type, quality));
            });
        });
    }
    wrapperRender(fn) {
        this.beforeRender();
        fn(this.ctx);
        this.afterRender();
    }
}
class Ticker {
    autoStart;
    requestAnimationFrame;
    cancelAnimationFrame;
    myReq = 0;
    isRunning = false;
    handler = [];
    _env = getEnv();
    constructor(autoStart = true) {
        this.autoStart = autoStart;
    }
    init(canvas, autoStart) {
        if (this._env === ENV.WX) {
            this.requestAnimationFrame = canvas.requestAnimationFrame.bind(this);
            this.cancelAnimationFrame = canvas.requestAnimationFrame.bind(this);
        }
        else {
            this.requestAnimationFrame = requestAnimationFrame.bind(this);
            this.cancelAnimationFrame = cancelAnimationFrame.bind(this);
        }
        if (autoStart) {
            this.start();
        }
    }
    add(fn) {
        this.handler.push(fn);
    }
    removeAll() {
        this.handler = [];
    }
    remove(fn) {
        const index = this.handler.indexOf(fn);
        if (index !== -1) {
            this.handler.splice(index, 1);
        }
    }
    start() {
        this.isRunning = true;
        this.myReq = this.requestAnimationFrame(this.update.bind(this));
    }
    stop() {
        if (this.isRunning && this.myReq) {
            this.cancelAnimationFrame?.(this.myReq);
            this.isRunning = false;
        }
    }
    update() {
        if (!this.isRunning)
            return;
        this.myReq = this.requestAnimationFrame(this.update.bind(this));
        this.handler.forEach(fn => fn(performance.now()));
    }
}

class ObservablePoint {
    _x;
    _y;
    _observer;
    constructor(observer, x, y) {
        this._x = x || 0;
        this._y = y || 0;
        this._observer = observer;
    }
    clone(observer) {
        return new ObservablePoint(observer ?? this._observer, this._x, this._y);
    }
    set(x = 0, y = x) {
        if (this._x !== x || this._y !== y) {
            this._x = x;
            this._y = y;
            this._observer?._onUpdate(this);
        }
        return this;
    }
    copyFrom(p) {
        if (this._x !== p.x || this._y !== p.y) {
            this._x = p.x;
            this._y = p.y;
            this._observer?._onUpdate(this);
        }
        return this;
    }
    copyTo(p) {
        p.set(this._x, this._y);
        return p;
    }
    equals(p) {
        return (p.x === this._x) && (p.y === this._y);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (this._x !== value) {
            this._x = value;
            this._observer?._onUpdate(this);
        }
    }
    get y() {
        return this._y;
    }
    set y(value) {
        if (this._y !== value) {
            this._y = value;
            this._observer?._onUpdate(this);
        }
    }
    [Symbol.iterator]() {
        let step = 0;
        const properties = [this.x, this.y];
        return {
            next: () => {
                if (step < properties.length) {
                    return { value: properties[step++], done: false };
                }
                else {
                    return { done: true, value: undefined };
                }
            },
        };
    }
}

const defaultSkew = new ObservablePoint(null);
const defaultPivot = new ObservablePoint(null);
const defaultAnchor = new ObservablePoint(null);
const defaultScale = new ObservablePoint(null, 1, 1);
class Display extends EventEmitter {
    _env = getEnv();
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
        this.scale = options.scale ?? 1;
        this.skew = options.skew ?? { x: 0, y: 0 };
        this.pivot = options.pivot ?? 0;
        this.shadow = options.shadow ?? this._shadow;
        this.rotation = options.rotation ?? 0;
        this.anchor = options.anchor ?? 0;
        this.alpha = options.alpha ?? 1;
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
    get height() {
        return this.transformHeight;
    }
    get width() {
        return this.transformWidth;
    }
    onAdd(_app) {
        this._app = _app;
        this._onUpdate();
    }
    onRemove() {
        this._app = null;
        this._onUpdate();
    }
    addTo(app) {
        app.add(this);
        return this;
    }
    destroy() {
        this.removeAllListeners();
    }
}

class Picture extends Display {
    options;
    src = '';
    constructor(maybeImage, options) {
        super(options);
        this.options = options;
        if (typeof maybeImage == 'string') {
            if (this._env === ENV.WX) {
                this.src = maybeImage;
            }
            else {
                this.image = document.createElement('img');
                this.image.src = maybeImage;
                this.initImageEvents();
            }
            this.rounded = this.options?.rounded ?? 0;
        }
        else {
            this.image = maybeImage;
            this.initImageEvents();
        }
    }
    onAdd(_app) {
        super.onAdd(_app);
        if (this._env !== ENV.WEB) {
            _app.onReady(this.createImage.bind(this));
        }
    }
    createImage() {
        if (!this._app)
            return;
        this.image = (this._app?.canvas).createImage();
        this.image.src = this.src;
        this.initImageEvents();
    }
    initImageEvents() {
        if (!this.image)
            return;
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
        if (this._complete)
            super._onUpdate(_point);
    }
    get rounded() {
        return this._rounded;
    }
    _complete = false;
    _onImageComplete() {
        if (!this.image)
            return;
        this._imageSize.set(this.image.width, this.image.height);
        this.size = this.options?.size ?? {
            x: this.image.width,
            y: this.image.height,
        };
        this.slice = this.options?.slice ?? this.slice;
        this.sliceSize = this.options?.sliceSize ?? {
            x: this.size.x,
            y: this.size.y,
        };
        this.objectFit = this.options?.objectFit ?? this.objectFit;
        this.rounded = this.options?.rounded ?? this.rounded;
        this._complete = true;
        this.emit('ready');
        this._onUpdate();
        this.shouldUpdateBounds();
    }
    get _shouldUpdate() {
        return true;
    }
    get _isSlice() {
        return (!!this.slice.x || !!this.slice.y) || !this.sliceSize.equals(this.size);
    }
    renderRoundedClip(ctx, position, size) {
        drawRectCompatible(ctx, position, size, this.rounded);
        ctx.clip();
    }
    _render(ctx) {
        if (!this.image || !this._complete) {
            return;
        }
        if (!this._isSlice) {
            const _size = this.size.clone();
            const _position = this.position.clone();
            const scaleDiff = _size.x / this._imageSize.x;
            const diffSize = calcDiff([this._imageSize.x, this._imageSize.y]);
            const diff = diffSize * scaleDiff;
            const slim = this._imageSize.x < this._imageSize.y;
            const fat = this._imageSize.x > this._imageSize.y;
            if (slim || fat) {
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
                        // ctx.beginPath()
                        // if (this.rounded) {
                        //   ctx.roundRect(this.x, this.y, this.size.x, this.size.y, this.rounded)
                        // }
                        // else {
                        //   ctx.rect(this.x, this.y, this.size.x, this.size.y)
                        // }
                        // ctx.clip()
                        this.renderRoundedClip(ctx, this.position, this.size);
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
                        // ctx.beginPath()
                        // if (this.rounded) {
                        //   ctx.roundRect(_position.x, _position.y, _size.x, _size.y, this.rounded)
                        // }
                        // else {
                        //   ctx.rect(_position.x, _position.y, _size.x, _size.y)
                        // }
                        // ctx.clip()
                        this.renderRoundedClip(ctx, _position, _size);
                        break;
                    default:
                        this.renderRoundedClip(ctx, this.position, this.size);
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
            // ctx.beginPath()
            // console.log(this.rounded)
            // if (this.rounded) {
            //   ctx.roundRect(this.x, this.y, this.size.x, this.size.y, this.rounded)
            // }
            // else {
            //   ctx.rect(this.x, this.y, this.size.x, this.size.y)
            // }
            // ctx.clip()
            this.renderRoundedClip(ctx, this.position, this.size);
            ctx.drawImage(...args);
        }
    }
    transformWidth = 0;
    transformHeight = 0;
    updateTransformBounds() {
        this.transformWidth = this.size.x;
        this.transformHeight = this.size.y;
    }
}

// import type { FunctionKeys } from '../types'
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
    lineCap(cap) {
        this.addPath({
            action: 'lineCap',
            args: [cap],
        });
        return this;
    }
    lineJoin(join) {
        this.addPath({
            action: 'lineJoin',
            args: [join],
        });
        return this;
    }
    moveTo(x, y) {
        this.addPath({
            action: 'moveTo',
            args: [x, y],
        });
        return this;
    }
    lineTo(x, y) {
        this.addPath({
            action: 'lineTo',
            args: [x, y],
        });
        return this;
    }
    rect(x, y, w, h) {
        this.addPath({
            action: 'rect',
            args: [x, y, w, h],
        });
        return this;
    }
    roundRect(x, y, w, h, radii) {
        this.addPath({
            action: 'roundRect',
            args: [x, y, w, h, radii],
        });
        return this;
    }
    arc(x, y, radius, startAngle = 0, endAngle = 2 * Math.PI, counterclockwise) {
        this.addPath({
            action: 'arc',
            args: [x, y, radius, startAngle, endAngle, counterclockwise],
        });
        return this;
    }
    arcTo(x1, y1, x2, y2, radius) {
        this.addPath({
            action: 'arcTo',
            args: [x1, y1, x2, y2, radius],
        });
        return this;
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        this.addPath({
            action: 'bezierCurveTo',
            args: [cp1x, cp1y, cp2x, cp2y, x, y],
        });
        return this;
    }
    ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise) {
        this.addPath({
            action: 'ellipse',
            args: [x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise],
        });
        return this;
    }
    fillRect(x, y, w, h) {
        this.addPath({
            action: 'fillRect',
            args: [x, y, w, h],
        });
        return this;
    }
    strokeRect(x, y, w, h) {
        this.addPath({
            action: 'strokeRect',
            args: [x, y, w, h],
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
    _render(ctx) {
        if (!ctx) {
            throw new Error('CanvasRenderingContext2D is null or undefined');
        }
        for (let index = 0; index < this.pathInstruction.length; index++) {
            const { action, args } = this.pathInstruction[index];
            if (action === 'fill') {
                if (args[0]) {
                    ctx.fillStyle = args[0];
                }
                else if (this.fillStyle) {
                    ctx.fillStyle = this.fillStyle;
                }
                ctx.fill();
            }
            else if (action === 'stroke') {
                if (args[0]) {
                    const strokeInput = args[0];
                    if (typeof strokeInput === 'string'
                        || (typeof CanvasGradient !== 'undefined' && strokeInput instanceof CanvasGradient)
                        || (typeof CanvasPattern !== 'undefined' && strokeInput instanceof CanvasPattern)) {
                        ctx.strokeStyle = strokeInput;
                        ctx.lineWidth = this.strokeStyle.width ?? 1;
                    }
                    else {
                        const _strokeInput = strokeInput;
                        const color = _strokeInput.color ?? this.strokeStyle.color;
                        if (color)
                            ctx.strokeStyle = color;
                        const width = _strokeInput.width ?? this.strokeStyle.width;
                        if (width)
                            ctx.lineWidth = width;
                        if (_strokeInput.dash) {
                            ctx.setLineDash(_strokeInput.dash);
                        }
                        else {
                            ctx.setLineDash([]);
                        }
                    }
                }
                else {
                    if (this.strokeStyle.color)
                        ctx.strokeStyle = this.strokeStyle.color;
                    if (this.strokeStyle.width)
                        ctx.lineWidth = this.strokeStyle.width;
                    if (this.strokeStyle.dash) {
                        ctx.setLineDash(this.strokeStyle.dash);
                    }
                    else {
                        ctx.setLineDash([]);
                    }
                }
                ctx.stroke();
            }
            else if (['lineCap', 'lineJoin'].includes(action)) {
                ctx[action] = args[0];
            }
            else if (action === 'roundRect' && this._env === ENV.WX) {
                drawRectCompatible(ctx, { x: args[0], y: args[1] }, { x: args[2], y: args[3] }, args[4]);
            }
            else {
                if (!(action in ctx)) {
                    throw new Error(`CanvasRenderingContext2D has no method ${action}`);
                }
                else {
                    ctx[action](...args);
                }
            }
        }
    }
    _strokeStyle = {};
    set strokeStyle(value) {
        if (value === this._strokeStyle)
            return;
        if (typeof value === 'string'
            || (typeof CanvasGradient !== 'undefined' && value instanceof CanvasGradient)
            || (typeof CanvasPattern !== 'undefined' && value instanceof CanvasPattern)) {
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
                    allX.push(args[0]);
                    allY.push(args[1]);
                    allX.push(args[0] + args[2] + strokeWeight);
                    allY.push(args[1] + args[3] + strokeWeight);
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

class AbstractStyle extends EventEmitter {
    _fill = '#000';
    set fill(value) {
        this._fill = value;
        this.update();
    }
    get fill() {
        return this._fill;
    }
    _stroke = {};
    set stroke(value) {
        if (value === this._stroke)
            return;
        if (typeof value === 'string'
            || (typeof CanvasGradient !== 'undefined' && value instanceof CanvasGradient)
            || (typeof CanvasPattern !== 'undefined' && value instanceof CanvasPattern)) {
            this._stroke = createProxy({
                ...this._stroke,
                color: value,
            }, () => {
                this.update();
            });
        }
        else {
            this._stroke = createProxy(value, () => {
                this.update();
            });
            this.update();
        }
    }
    get stroke() {
        return this._stroke;
    }
    _filter = 'none';
    set filter(value) {
        this._filter = value;
        this.update();
    }
    get filter() {
        return this._filter;
    }
    update() {
        this.emit('update');
    }
    updateBounds() {
        this.emit('updateBounds');
    }
    render(ctx) {
        if (this.stroke.color && this.stroke.width) {
            ctx.lineWidth = this.stroke.width;
            ctx.strokeStyle = this.stroke.color;
        }
        if (this.fill) {
            ctx.fillStyle = this.fill;
        }
        if (this.filter) {
            ctx.filter = this.filter;
        }
        return this;
    }
    destroy() {
        this.removeAllListeners();
    }
}

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
        ctx.letterSpacing = formatWithPx(this.letterSpacing);
        ctx.wordSpacing = formatWithPx(this.wordSpacing);
        ctx.textAlign = this.textAlign;
        return this;
    }
}

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
    transformWidth = 0;
    transformHeight = 0;
    updateTransformBounds() {
        if (!this._app)
            return;
        this._app.wrapperRender((ctx) => {
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
}

export { App, Picture, Shape, Text, TextStyle };
//# sourceMappingURL=canvas.js.map
