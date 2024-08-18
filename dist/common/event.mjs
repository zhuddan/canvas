class l{all=new Map;on(l,t){const s=this.all?.get(l);s?s.push(t):this.all.set(l,[t])}off(l,t){const s=this.all?.get(l);s&&(t?s.splice(s.indexOf(t)>>>0,1):this.all.set(l,[]))}emit(l,t){let s=this.all?.get(l);s&&s.slice().forEach((l=>{l(t)})),s=this.all?.get("*"),s&&s.slice().forEach((s=>{s(l,t)}))}}export{l as Event};
//# sourceMappingURL=event.mjs.map
