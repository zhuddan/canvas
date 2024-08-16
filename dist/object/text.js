
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var object_display = require('./display.js');
require('../position/point.js');

class Text extends object_display.Display {
}

exports.Text = Text;
//# sourceMappingURL=text.js.map
