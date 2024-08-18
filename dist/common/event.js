"use strict";exports.Event=class{all=new Map;on(t,l){const s=this.all?.get(t);s?s.push(l):this.all.set(t,[l])}off(t,l){const s=this.all?.get(t);s&&(l?s.splice(s.indexOf(l)>>>0,1):this.all.set(t,[]))}emit(t,l){let s=this.all?.get(t);s&&s.slice().forEach((t=>{t(l)})),s=this.all?.get("*"),s&&s.slice().forEach((s=>{s(t,l)}))}};
//# sourceMappingURL=event.js.map
