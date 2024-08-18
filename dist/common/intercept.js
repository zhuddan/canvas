"use strict";exports.interceptUpdate=function(){return function(t,e,n){const c=n.set,i=n.get;n.set=function(e){if(c){const n=i?.call(this);e!==n&&(c.call(this,e),t.dirty=!0)}},Object.defineProperty(t,e,n)}},exports.interceptUpdate2=function(){return function(t,e,n){}};
//# sourceMappingURL=intercept.js.map
