"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(M,w,u)=>{u.d(w,{c:()=>c});var a=u(1308),g=u(7864),l=u(1898);const c=(r,e)=>{let n,t;const s=(d,p,f)=>{if(typeof document>"u")return;const _=document.elementFromPoint(d,p);_&&e(_)?_!==n&&(h(),i(_,f)):h()},i=(d,p)=>{n=d,t||(t=n);const f=n;(0,a.c)(()=>f.classList.add("ion-activated")),p()},h=(d=!1)=>{if(!n)return;const p=n;(0,a.c)(()=>p.classList.remove("ion-activated")),d&&t!==n&&n.click(),n=void 0};return(0,l.createGesture)({el:r,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>s(d.currentX,d.currentY,g.a),onMove:d=>s(d.currentX,d.currentY,g.b),onEnd:()=>{h(!0),(0,g.h)(),t=void 0}})}},2225:(M,w,u)=>{u.d(w,{g:()=>a});const a=(e,n,t,s,i)=>l(e[1],n[1],t[1],s[1],i).map(h=>g(e[0],n[0],t[0],s[0],h)),g=(e,n,t,s,i)=>i*(3*n*Math.pow(i-1,2)+i*(-3*t*i+3*t+s*i))-e*Math.pow(i-1,3),l=(e,n,t,s,i)=>r((s-=i)-3*(t-=i)+3*(n-=i)-(e-=i),3*t-6*n+3*e,3*n-3*e,e).filter(d=>d>=0&&d<=1),r=(e,n,t,s)=>{if(0===e)return((e,n,t)=>{const s=n*n-4*e*t;return s<0?[]:[(-n+Math.sqrt(s))/(2*e),(-n-Math.sqrt(s))/(2*e)]})(n,t,s);const i=(3*(t/=e)-(n/=e)*n)/3,h=(2*n*n*n-9*n*t+27*(s/=e))/27;if(0===i)return[Math.pow(-h,1/3)];if(0===h)return[Math.sqrt(-i),-Math.sqrt(-i)];const d=Math.pow(h/2,2)+Math.pow(i/3,3);if(0===d)return[Math.pow(h/2,.5)-n/3];if(d>0)return[Math.pow(-h/2+Math.sqrt(d),1/3)-Math.pow(h/2+Math.sqrt(d),1/3)-n/3];const p=Math.sqrt(Math.pow(-i/3,3)),f=Math.acos(-h/(2*Math.sqrt(Math.pow(-i/3,3)))),_=2*Math.pow(p,1/3);return[_*Math.cos(f/3)-n/3,_*Math.cos((f+2*Math.PI)/3)-n/3,_*Math.cos((f+4*Math.PI)/3)-n/3]}},5062:(M,w,u)=>{u.d(w,{i:()=>a});const a=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},6602:(M,w,u)=>{u.r(w),u.d(w,{startFocusVisible:()=>c});const a="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=r=>{let e=[],n=!0;const t=r?r.shadowRoot:document,s=r||document.body,i=E=>{e.forEach(m=>m.classList.remove(a)),E.forEach(m=>m.classList.add(a)),e=E},h=()=>{n=!1,i([])},d=E=>{n=l.includes(E.key),n||i([])},p=E=>{if(n&&void 0!==E.composedPath){const m=E.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));i(m)}},f=()=>{t.activeElement===s&&i([])};return t.addEventListener("keydown",d),t.addEventListener("focusin",p),t.addEventListener("focusout",f),t.addEventListener("touchstart",h),t.addEventListener("mousedown",h),{destroy:()=>{t.removeEventListener("keydown",d),t.removeEventListener("focusin",p),t.removeEventListener("focusout",f),t.removeEventListener("touchstart",h),t.removeEventListener("mousedown",h)},setFocus:i}}},7626:(M,w,u)=>{u.d(w,{C:()=>r,a:()=>l,d:()=>c});var a=u(5861),g=u(5730);const l=function(){var e=(0,a.Z)(function*(n,t,s,i,h,d){var p;if(n)return n.attachViewToDom(t,s,h,i);if(!(d||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof s?null===(p=t.ownerDocument)||void 0===p?void 0:p.createElement(s):s;return i&&i.forEach(_=>f.classList.add(_)),h&&Object.assign(f,h),t.appendChild(f),yield new Promise(_=>(0,g.c)(f,_)),f});return function(t,s,i,h,d,p){return e.apply(this,arguments)}}(),c=(e,n)=>{if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()},r=()=>{let e,n;return{attachViewToDom:function(){var i=(0,a.Z)(function*(h,d,p={},f=[]){var _,E;if(e=h,d){const v="string"==typeof d?null===(_=e.ownerDocument)||void 0===_?void 0:_.createElement(d):d;f.forEach(o=>v.classList.add(o)),Object.assign(v,p),e.appendChild(v),yield new Promise(o=>(0,g.c)(v,o))}else if(e.children.length>0&&!e.children[0].classList.contains("ion-delegate-host")){const o=null===(E=e.ownerDocument)||void 0===E?void 0:E.createElement("div");o.classList.add("ion-delegate-host"),f.forEach(y=>o.classList.add(y)),o.append(...e.children),e.appendChild(o)}const m=document.querySelector("ion-app")||document.body;return n=document.createComment("ionic teleport"),e.parentNode.insertBefore(n,e),m.appendChild(e),e});return function(d,p){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(e&&n&&(n.parentNode.insertBefore(e,n),n.remove()),Promise.resolve())}}},7864:(M,w,u)=>{u.d(w,{a:()=>c,b:()=>r,c:()=>l,d:()=>n,h:()=>e});const a={getEngine(){var t;const s=window;return s.TapticEngine||(null===(t=s.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&s.Capacitor.Plugins.Haptics},available(){var t;const s=window;return!!this.getEngine()&&("web"!==(null===(t=s.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const s=this.getEngine();if(!s)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;s.impact({style:i})},notification(t){const s=this.getEngine();if(!s)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;s.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>a.available(),l=()=>{g()&&a.selection()},c=()=>{g()&&a.selectionStart()},r=()=>{g()&&a.selectionChanged()},e=()=>{g()&&a.selectionEnd()},n=t=>{g()&&a.impact(t)}},9582:(M,w,u)=>{u.d(w,{a:()=>a,b:()=>d,c:()=>n,d:()=>p,e:()=>x,f:()=>e,g:()=>f,h:()=>l,i:()=>g,j:()=>o,k:()=>y,l:()=>t,m:()=>i,n:()=>_,o:()=>s,p:()=>r,q:()=>c,r:()=>v,s:()=>C,t:()=>h,u:()=>E,v:()=>m});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8416:(M,w,u)=>{u.d(w,{I:()=>r,a:()=>i,b:()=>e,c:()=>p,d:()=>_,f:()=>h,g:()=>s,i:()=>t,p:()=>f,r:()=>E,s:()=>d});var a=u(5861),g=u(5730),l=u(4147);const r="ion-content",e=".ion-content-scroll-host",n=`${r}, ${e}`,t=m=>"ION-CONTENT"===m.tagName,s=function(){var m=(0,a.Z)(function*(v){return t(v)?(yield new Promise(o=>(0,g.c)(v,o)),v.getScrollElement()):v});return function(o){return m.apply(this,arguments)}}(),i=m=>m.querySelector(e)||m.querySelector(n),h=m=>m.closest(n),d=(m,v)=>t(m)?m.scrollToTop(v):Promise.resolve(m.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),p=(m,v,o,y)=>t(m)?m.scrollByPoint(v,o,y):Promise.resolve(m.scrollBy({top:o,left:v,behavior:y>0?"smooth":"auto"})),f=m=>(0,l.a)(m,r),_=m=>{if(t(m)){const o=m.scrollY;return m.scrollY=!1,o}return m.style.setProperty("overflow","hidden"),!0},E=(m,v)=>{t(m)?m.scrollY=v:m.style.removeProperty("overflow")}},9:(M,w,u)=>{u.d(w,{s:()=>a});const a=t=>{try{if(t instanceof n)return t.value;if(!c()||"string"!=typeof t||""===t)return t;const s=document.createDocumentFragment(),i=document.createElement("div");s.appendChild(i),i.innerHTML=t,e.forEach(f=>{const _=s.querySelectorAll(f);for(let E=_.length-1;E>=0;E--){const m=_[E];m.parentNode?m.parentNode.removeChild(m):s.removeChild(m);const v=l(m);for(let o=0;o<v.length;o++)g(v[o])}});const h=l(s);for(let f=0;f<h.length;f++)g(h[f]);const d=document.createElement("div");d.appendChild(s);const p=d.querySelector("div");return null!==p?p.innerHTML:d.innerHTML}catch(s){return console.error(s),""}},g=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let i=t.attributes.length-1;i>=0;i--){const h=t.attributes.item(i),d=h.name;if(!r.includes(d.toLowerCase())){t.removeAttribute(d);continue}const p=h.value;null!=p&&p.toLowerCase().includes("javascript:")&&t.removeAttribute(d)}const s=l(t);for(let i=0;i<s.length;i++)g(s[i])},l=t=>null!=t.children?t.children:t.childNodes,c=()=>{var t;const i=null===(t=window?.Ionic)||void 0===t?void 0:t.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},r=["class","id","href","src","name","slot"],e=["script","style","iframe","meta","link","object","embed"];class n{constructor(s){this.value=s}}},5234:(M,w,u)=>{u.r(w),u.d(w,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>v,keyboardDidClose:()=>f,keyboardDidOpen:()=>d,keyboardDidResize:()=>p,resetKeyboardAssist:()=>n,setKeyboardClose:()=>h,setKeyboardOpen:()=>i,startKeyboardAssist:()=>t,trackViewportChanges:()=>m});const a="ionKeyboardDidShow",g="ionKeyboardDidHide";let c={},r={},e=!1;const n=()=>{c={},r={},e=!1},t=o=>{s(o),o.visualViewport&&(r=v(o.visualViewport),o.visualViewport.onresize=()=>{m(o),d()||p(o)?i(o):f(o)&&h(o)})},s=o=>{o.addEventListener("keyboardDidShow",y=>i(o,y)),o.addEventListener("keyboardDidHide",()=>h(o))},i=(o,y)=>{_(o,y),e=!0},h=o=>{E(o),e=!1},d=()=>!e&&c.width===r.width&&(c.height-r.height)*r.scale>150,p=o=>e&&!f(o),f=o=>e&&r.height===o.innerHeight,_=(o,y)=>{const x=new CustomEvent(a,{detail:{keyboardHeight:y?y.keyboardHeight:o.innerHeight-r.height}});o.dispatchEvent(x)},E=o=>{const y=new CustomEvent(g);o.dispatchEvent(y)},m=o=>{c=Object.assign({},r),r=v(o.visualViewport)},v=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(M,w,u)=>{u.d(w,{c:()=>g});var a=u(3457);const g=l=>{let c,r,e;const n=()=>{c=()=>{e=!0,l&&l(!0)},r=()=>{e=!1,l&&l(!1)},null==a.w||a.w.addEventListener("keyboardWillShow",c),null==a.w||a.w.addEventListener("keyboardWillHide",r)};return n(),{init:n,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",c),null==a.w||a.w.removeEventListener("keyboardWillHide",r),c=r=void 0},isKeyboardVisible:()=>e}}},7741:(M,w,u)=>{u.d(w,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(l,c,r)=>{const e=l*c/r-l+"ms",n=2*Math.PI*c/r;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":e}}}},circles:{dur:1e3,circles:8,fn:(l,c,r)=>{const e=c/r,n=l*e-l+"ms",t=2*Math.PI*e;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,c,r)=>({y1:14,y2:26,style:{transform:`rotate(${360/r*c+(c<r/2?180:-180)}deg)`,"animation-delay":l*c/r-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,c,r)=>({y1:12,y2:20,style:{transform:`rotate(${360/r*c+(c<r/2?180:-180)}deg)`,"animation-delay":l*c/r-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,c,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":l*c/r-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,c,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":l*c/r-l+"ms"}})}}},9210:(M,w,u)=>{u.r(w),u.d(w,{createSwipeBackGesture:()=>r});var a=u(5730),g=u(5062),l=u(1898);u(4349);const r=(e,n,t,s,i)=>{const h=e.ownerDocument.defaultView,d=(0,g.i)(e),f=o=>d?-o.deltaX:o.deltaX;return(0,l.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(o=>{const{startX:C}=o;return d?C>=h.innerWidth-50:C<=50})(o)&&n(),onStart:t,onMove:o=>{const C=f(o)/h.innerWidth;s(C)},onEnd:o=>{const y=f(o),C=h.innerWidth,x=y/C,D=(o=>d?-o.velocityX:o.velocityX)(o),O=D>=0&&(D>.2||y>C/2),L=(O?1-x:x)*C;let T=0;if(L>5){const k=L/Math.abs(D);T=Math.min(k,540)}i(O,x<=0?.01:(0,a.l)(0,x,.9999),T)}})}},4762:(M,w,u)=>{u.d(w,{Z:()=>g});var a=u(8256);let g=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(r,e){1&r&&(a.TgZ(0,"div",0)(1,"strong"),a._uU(2),a.qZA(),a.TgZ(3,"p"),a._uU(4,"Explore "),a.TgZ(5,"a",1),a._uU(6,"UI Components"),a.qZA()()()),2&r&&(a.xp6(2),a.Oqu(e.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),l})()},581:(M,w,u)=>{u.d(w,{e:()=>r});var a=u(6895),g=u(433),l=u(4556),c=u(8256);let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[a.ez,g.u5,l.Pc]}),e})()}}]);