
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { Dirty } from '../common/dirty.mjs';

// interface CoordinateEventEmitter {
//   shouldUpdate: []
// }
// EventEmitter<CoordinateEventEmitter>
class Coordinate extends Dirty {
    constructor(_display) {
        super(_display);
    }
}

export { Coordinate };
