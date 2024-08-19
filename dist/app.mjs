import{NOOP as t}from"./const.mjs";import{formatValue as e}from"./utils.mjs";class i{canvas;ctx;dpr=1;width;height;onUpdate;constructor({width:i=600,height:h=800,dpr:s=!0,onUpdate:r}={}){s&&(this.dpr=window.devicePixelRatio??1),this.onUpdate=r??t,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.style.width=e(i),this.canvas.style.height=e(h),this.canvas.width=i*this.dpr,this.canvas.height=h*this.dpr,this.ctx.scale(this.dpr,this.dpr),this.width=i,this.height=h,this.update()}beforeRender(){this.ctx.save()}afterRender(){this.ctx.restore()}debug(){this.beforeRender();const t=this.ctx;this.ctx.strokeStyle="#cccccc80",this.ctx.fillStyle="#cccccc80",t.textBaseline="top",t.font="10px 黑体",t.setLineDash([4,10]);for(let e=0;e<Math.ceil((this.width+1)/100);e++)for(let i=0;i<Math.ceil((this.height+1)/100);i++)t.beginPath(),t.fillText(`${100*e},${100*i}`,100*e,100*i),0!==e&&0!==i&&(t.moveTo(100*e-100,100*i),t.lineTo(100*e,100*i),t.lineTo(100*e,100*i-100),t.stroke());this.afterRender()}children=[];add(t){t.onAdd(),t._app=this,this.children.push(t)}remove(t){const e=this.children.indexOf(t);-1!==e&&(this.children.splice(e,1),t._app=null)}update(){window.requestAnimationFrame((()=>{this.update()}));if(!!![...this.children.filter((t=>t.dirty))].length)return;this.ctx.clearRect(-this.width,-this.height,2*this.width,2*this.height),this.debug();const t=[...this.children].filter((t=>t.shouldUpdate));for(;t.length;){this.beforeRender();const e=t.shift();e.render(this.ctx),e.dirty=!1,this.afterRender()}this.onUpdate()}onContext(t){this.beforeRender(),t(this.ctx),this.afterRender()}}export{i as App};
//# sourceMappingURL=app.mjs.map
