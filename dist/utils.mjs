function n(n){return"string"==typeof n?n:`${n}px`}function t({fontFamily:n,fontSize:t,fontStyle:r="normal",fontWeight:e="normal"}){return`${r} ${e} ${"string"==typeof t?t:`${t}px`} ${n}`}function r(n){return n.reduce(((n,t)=>n<t?n:t))}function e(n){return n.reduce(((n,t)=>n>t?n:t))}function o(n){return e(n)-r(n)}function u(n,t=0,r=1){return n<=t?t:n>=r?r:n}function f(n,t){return(n+t)/2}function i(n,t){return new Proxy(n,{set:(n,r,e)=>(n[r]=e,t?.(r,e),!0)})}export{f as calcCenter,o as calcDiff,e as calcMax,r as calcMin,t as createCanvasFontString,i as createProxy,u as ensureBetween,n as formatValue};
//# sourceMappingURL=utils.mjs.map
