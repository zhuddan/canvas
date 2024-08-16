
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var app = require('./app.js');
var object_display = require('./object/display.js');
var object_text = require('./object/text.js');
var position_bounds = require('./position/bounds.js');
var position_point = require('./position/point.js');
require('./const.js');
require('./utils.js');
require('./tslib.es6-E-TKQeY2.js');
require('./common/intercept.js');
require('./style/text-style.js');
require('./style/base-style.js');
require('./common/event.js');



exports.App = app.App;
exports.pauseUpdate = app.pauseUpdate;
exports.shouldUpdate = app.shouldUpdate;
exports.Display = object_display.Display;
exports.Text = object_text.Text;
exports.Bounds = position_bounds.Bounds;
exports.createBounds = position_bounds.createBounds;
exports.Point = position_point.Point;
exports.createPoint = position_point.createPoint;
//# sourceMappingURL=index.js.map
