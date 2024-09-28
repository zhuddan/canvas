"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7187],{3878:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>i});var s=a(5723),t=a(1525);const c={},o=void 0,p={id:"basics/xx",title:"xx",description:"",source:"@site/docs/basics/xx.md",sourceDirName:"basics",slug:"/basics/xx",permalink:"/canvas/zh-Hans/docs/basics/xx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},r={},i=[];function d(n){const e={code:"code",pre:"pre",...(0,t.R)(),...n.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { App, Shape } from '@zd~/canvas'\n\nconst app = new App({\n  backgroundColor: '#60a5fab0',\n  resizeTo: window,\n})\n\ndocument.body.appendChild(app.canvas)\n\nconst shape1 = new Shape({\n  x: app.width / 3 * 1,\n  y: app.height / 2,\n  anchor: 0.5\n}).beginPath().rect(0, 0, 60, 60).fill('#FFCC80')\n\nconst shape2 = new Shape({\n  x: app.width / 3 * 2,\n  y: app.height / 2,\n  anchor: 0,\n}).beginPath().rect(0, 0, 60, 60).fill('#FFCC80')\n\napp.add(shape1, shape2)\n\nlet d = 1\napp.ticker.add(() => {\n  shape1.rotation += 0.005\n\n  if (shape1.scale.x < 0.5 || shape1.scale.x > 2) {\n    d *= -1\n  }\n  shape1.scale.x += 0.005 * d\n  shape1.scale.y += 0.005 * d\n\n  shape2.rotation += 0.005\n  if (shape2.scale.x < 0.5 || shape2.scale.x > 2) {\n    d *= -1\n  }\n  shape2.scale.x += 0.005 * d\n  shape2.scale.y += 0.005 * d\n})\n"})})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1525:(n,e,a)=>{a.d(e,{R:()=>o,x:()=>p});var s=a(2155);const t={},c=s.createContext(t);function o(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);