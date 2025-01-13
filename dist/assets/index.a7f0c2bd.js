const Ny=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Ny();function Xc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Dy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Oy=Xc(Dy);function Zd(t){return!!t||t===""}function Jc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ke(s)?My(s):Jc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ke(t))return t;if($e(t))return t}}const Py=/;(?![^(]*\))/g,xy=/:(.+)/;function My(t){const e={};return t.split(Py).forEach(n=>{if(n){const s=n.split(xy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Sn(t){let e="";if(Ke(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=Sn(t[n]);s&&(e+=s+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qt=t=>Ke(t)?t:t==null?"":Y(t)||$e(t)&&(t.toString===sf||!ne(t.toString))?JSON.stringify(t,ef,2):String(t),ef=(t,e)=>e&&e.__v_isRef?ef(t,e.value):Ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:tf(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!Y(e)&&!rf(e)?String(e):e,ve={},bs=[],Ct=()=>{},Ly=()=>!1,Uy=/^on[^a-z]/,ko=t=>Uy.test(t),Zc=t=>t.startsWith("onUpdate:"),st=Object.assign,el=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fy=Object.prototype.hasOwnProperty,le=(t,e)=>Fy.call(t,e),Y=Array.isArray,Ts=t=>Ro(t)==="[object Map]",tf=t=>Ro(t)==="[object Set]",ne=t=>typeof t=="function",Ke=t=>typeof t=="string",tl=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",nf=t=>$e(t)&&ne(t.then)&&ne(t.catch),sf=Object.prototype.toString,Ro=t=>sf.call(t),Vy=t=>Ro(t).slice(8,-1),rf=t=>Ro(t)==="[object Object]",nl=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fi=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),No=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$y=/-(\w)/g,jt=No(t=>t.replace($y,(e,n)=>n?n.toUpperCase():"")),By=/\B([A-Z])/g,Ks=No(t=>t.replace(By,"-$1").toLowerCase()),Do=No(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ea=No(t=>t?`on${Do(t)}`:""),Ar=(t,e)=>!Object.is(t,e),Vi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Yi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},za=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vu;const jy=()=>Vu||(Vu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let bt;class of{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&bt&&(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return bt=this,e()}finally{bt=this.parent}}on(){bt=this}off(){bt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function af(t){return new of(t)}function qy(t,e=bt){e&&e.active&&e.effects.push(t)}function cf(){return bt}function lf(t){bt&&bt.cleanups.push(t)}const sl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},uf=t=>(t.w&Cn)>0,hf=t=>(t.n&Cn)>0,Hy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cn},Ky=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];uf(r)&&!hf(r)?r.delete(t):e[n++]=r,r.w&=~Cn,r.n&=~Cn}e.length=n}},Ga=new WeakMap;let or=0,Cn=1;const Qa=30;let Ft;const Kn=Symbol(""),Ya=Symbol("");class rl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qy(this,s)}run(){if(!this.active)return this.fn();let e=Ft,n=yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ft,Ft=this,yn=!0,Cn=1<<++or,or<=Qa?Hy(this):$u(this),this.fn()}finally{or<=Qa&&Ky(this),Cn=1<<--or,Ft=this.parent,yn=n,this.parent=void 0}}stop(){this.active&&($u(this),this.onStop&&this.onStop(),this.active=!1)}}function $u(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yn=!0;const df=[];function Ws(){df.push(yn),yn=!1}function zs(){const t=df.pop();yn=t===void 0?!0:t}function yt(t,e,n){if(yn&&Ft){let s=Ga.get(t);s||Ga.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=sl()),ff(r)}}function ff(t,e){let n=!1;or<=Qa?hf(t)||(t.n|=Cn,n=!uf(t)):n=!t.has(Ft),n&&(t.add(Ft),Ft.deps.push(t))}function Yt(t,e,n,s,r,i){const o=Ga.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?nl(n)&&a.push(o.get("length")):(a.push(o.get(Kn)),Ts(t)&&a.push(o.get(Ya)));break;case"delete":Y(t)||(a.push(o.get(Kn)),Ts(t)&&a.push(o.get(Ya)));break;case"set":Ts(t)&&a.push(o.get(Kn));break}if(a.length===1)a[0]&&Xa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Xa(sl(c))}}function Xa(t,e){for(const n of Y(t)?t:[...t])(n!==Ft||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Wy=Xc("__proto__,__v_isRef,__isVue"),pf=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(tl)),zy=il(),Gy=il(!1,!0),Qy=il(!0),Bu=Yy();function Yy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let i=0,o=this.length;i<o;i++)yt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ue)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ws();const s=ue(this)[e].apply(this,n);return zs(),s}}),t}function il(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?dv:wf:e?vf:yf).get(s))return s;const o=Y(s);if(!t&&o&&le(Bu,r))return Reflect.get(Bu,r,i);const a=Reflect.get(s,r,i);return(tl(r)?pf.has(r):Wy(r))||(t||yt(s,"get",r),e)?a:Re(a)?!o||!nl(r)?a.value:a:$e(a)?t?_f(a):Xt(a):a}}const Xy=gf(),Jy=gf(!0);function gf(t=!1){return function(n,s,r,i){let o=n[s];if(kr(o)&&Re(o)&&!Re(r))return!1;if(!t&&!kr(r)&&(Ef(r)||(r=ue(r),o=ue(o)),!Y(n)&&Re(o)&&!Re(r)))return o.value=r,!0;const a=Y(n)&&nl(s)?Number(s)<n.length:le(n,s),c=Reflect.set(n,s,r,i);return n===ue(i)&&(a?Ar(r,o)&&Yt(n,"set",s,r):Yt(n,"add",s,r)),c}}function Zy(t,e){const n=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Yt(t,"delete",e,void 0),s}function ev(t,e){const n=Reflect.has(t,e);return(!tl(e)||!pf.has(e))&&yt(t,"has",e),n}function tv(t){return yt(t,"iterate",Y(t)?"length":Kn),Reflect.ownKeys(t)}const mf={get:zy,set:Xy,deleteProperty:Zy,has:ev,ownKeys:tv},nv={get:Qy,set(t,e){return!0},deleteProperty(t,e){return!0}},sv=st({},mf,{get:Gy,set:Jy}),ol=t=>t,Oo=t=>Reflect.getPrototypeOf(t);function Ti(t,e,n=!1,s=!1){t=t.__v_raw;const r=ue(t),i=ue(e);e!==i&&!n&&yt(r,"get",e),!n&&yt(r,"get",i);const{has:o}=Oo(r),a=s?ol:n?ll:Rr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Si(t,e=!1){const n=this.__v_raw,s=ue(n),r=ue(t);return t!==r&&!e&&yt(s,"has",t),!e&&yt(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Ci(t,e=!1){return t=t.__v_raw,!e&&yt(ue(t),"iterate",Kn),Reflect.get(t,"size",t)}function ju(t){t=ue(t);const e=ue(this);return Oo(e).has.call(e,t)||(e.add(t),Yt(e,"add",t,t)),this}function qu(t,e){e=ue(e);const n=ue(this),{has:s,get:r}=Oo(n);let i=s.call(n,t);i||(t=ue(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Ar(e,o)&&Yt(n,"set",t,e):Yt(n,"add",t,e),this}function Hu(t){const e=ue(this),{has:n,get:s}=Oo(e);let r=n.call(e,t);r||(t=ue(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Yt(e,"delete",t,void 0),i}function Ku(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Yt(t,"clear",void 0,void 0),n}function Ai(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ue(o),c=e?ol:t?ll:Rr;return!t&&yt(a,"iterate",Kn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ki(t,e,n){return function(...s){const r=this.__v_raw,i=ue(r),o=Ts(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ol:e?ll:Rr;return!e&&yt(i,"iterate",c?Ya:Kn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function on(t){return function(...e){return t==="delete"?!1:this}}function rv(){const t={get(i){return Ti(this,i)},get size(){return Ci(this)},has:Si,add:ju,set:qu,delete:Hu,clear:Ku,forEach:Ai(!1,!1)},e={get(i){return Ti(this,i,!1,!0)},get size(){return Ci(this)},has:Si,add:ju,set:qu,delete:Hu,clear:Ku,forEach:Ai(!1,!0)},n={get(i){return Ti(this,i,!0)},get size(){return Ci(this,!0)},has(i){return Si.call(this,i,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:Ai(!0,!1)},s={get(i){return Ti(this,i,!0,!0)},get size(){return Ci(this,!0)},has(i){return Si.call(this,i,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:Ai(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ki(i,!1,!1),n[i]=ki(i,!0,!1),e[i]=ki(i,!1,!0),s[i]=ki(i,!0,!0)}),[t,n,e,s]}const[iv,ov,av,cv]=rv();function al(t,e){const n=e?t?cv:av:t?ov:iv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(le(n,r)&&r in s?n:s,r,i)}const lv={get:al(!1,!1)},uv={get:al(!1,!0)},hv={get:al(!0,!1)},yf=new WeakMap,vf=new WeakMap,wf=new WeakMap,dv=new WeakMap;function fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pv(t){return t.__v_skip||!Object.isExtensible(t)?0:fv(Vy(t))}function Xt(t){return kr(t)?t:cl(t,!1,mf,lv,yf)}function gv(t){return cl(t,!1,sv,uv,vf)}function _f(t){return cl(t,!0,nv,hv,wf)}function cl(t,e,n,s,r){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=pv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function vn(t){return kr(t)?vn(t.__v_raw):!!(t&&t.__v_isReactive)}function kr(t){return!!(t&&t.__v_isReadonly)}function Ef(t){return!!(t&&t.__v_isShallow)}function If(t){return vn(t)||kr(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Zn(t){return Yi(t,"__v_skip",!0),t}const Rr=t=>$e(t)?Xt(t):t,ll=t=>$e(t)?_f(t):t;function bf(t){yn&&Ft&&(t=ue(t),ff(t.dep||(t.dep=sl())))}function Tf(t,e){t=ue(t),t.dep&&Xa(t.dep)}function Re(t){return!!(t&&t.__v_isRef===!0)}function mt(t){return Sf(t,!1)}function mv(t){return Sf(t,!0)}function Sf(t,e){return Re(t)?t:new yv(t,e)}class yv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Rr(e)}get value(){return bf(this),this._value}set value(e){e=this.__v_isShallow?e:ue(e),Ar(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Rr(e),Tf(this))}}function oe(t){return Re(t)?t.value:t}const vv={get:(t,e,n)=>oe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Re(r)&&!Re(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Cf(t){return vn(t)?t:new Proxy(t,vv)}function wv(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=Ev(t,n);return e}class _v{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ev(t,e,n){const s=t[e];return Re(s)?s:new _v(t,e,n)}class Iv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new rl(e,()=>{this._dirty||(this._dirty=!0,Tf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ue(this);return bf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function bv(t,e,n=!1){let s,r;const i=ne(t);return i?(s=t,r=Ct):(s=t.get,r=t.set),new Iv(s,r,i||!r,n)}Promise.resolve();function wn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Po(i,e,n)}return r}function Tt(t,e,n,s){if(ne(t)){const i=wn(t,e,n,s);return i&&nf(i)&&i.catch(o=>{Po(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Tt(t[i],e,n,s));return r}function Po(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){wn(c,null,10,[t,o,a]);return}}Tv(t,n,r,s)}function Tv(t,e,n,s=!0){console.error(t)}let Xi=!1,Ja=!1;const ft=[];let Kt=0;const gr=[];let ar=null,ps=0;const mr=[];let ln=null,gs=0;const Af=Promise.resolve();let ul=null,Za=null;function hl(t){const e=ul||Af;return t?e.then(this?t.bind(this):t):e}function Sv(t){let e=Kt+1,n=ft.length;for(;e<n;){const s=e+n>>>1;Nr(ft[s])<t?e=s+1:n=s}return e}function kf(t){(!ft.length||!ft.includes(t,Xi&&t.allowRecurse?Kt+1:Kt))&&t!==Za&&(t.id==null?ft.push(t):ft.splice(Sv(t.id),0,t),Rf())}function Rf(){!Xi&&!Ja&&(Ja=!0,ul=Af.then(Of))}function Cv(t){const e=ft.indexOf(t);e>Kt&&ft.splice(e,1)}function Nf(t,e,n,s){Y(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Rf()}function Av(t){Nf(t,ar,gr,ps)}function kv(t){Nf(t,ln,mr,gs)}function dl(t,e=null){if(gr.length){for(Za=e,ar=[...new Set(gr)],gr.length=0,ps=0;ps<ar.length;ps++)ar[ps]();ar=null,ps=0,Za=null,dl(t,e)}}function Df(t){if(mr.length){const e=[...new Set(mr)];if(mr.length=0,ln){ln.push(...e);return}for(ln=e,ln.sort((n,s)=>Nr(n)-Nr(s)),gs=0;gs<ln.length;gs++)ln[gs]();ln=null,gs=0}}const Nr=t=>t.id==null?1/0:t.id;function Of(t){Ja=!1,Xi=!0,dl(t),ft.sort((n,s)=>Nr(n)-Nr(s));const e=Ct;try{for(Kt=0;Kt<ft.length;Kt++){const n=ft[Kt];n&&n.active!==!1&&wn(n,null,14)}}finally{Kt=0,ft.length=0,Df(),Xi=!1,ul=null,(ft.length||gr.length||mr.length)&&Of(t)}}function Rv(t,e,...n){const s=t.vnode.props||ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ve;d?r=n.map(p=>p.trim()):h&&(r=n.map(za))}let a,c=s[a=Ea(e)]||s[a=Ea(jt(e))];!c&&i&&(c=s[a=Ea(Ks(e))]),c&&Tt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Tt(l,t,6,r)}}function Pf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ne(t)){const c=l=>{const u=Pf(l,e,!0);u&&(a=!0,st(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):st(o,i),s.set(t,o),o)}function fl(t,e){return!t||!ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,Ks(e))||le(t,e))}let pt=null,xf=null;function Ji(t){const e=pt;return pt=t,xf=t&&t.type.__scopeId||null,e}function Ns(t,e=pt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&nh(-1);const i=Ji(e),o=t(...r);return Ji(i),s._d&&nh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ia(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:v}=t;let b,R;const P=Ji(t);try{if(n.shapeFlag&4){const G=r||s;b=Lt(u.call(G,G,h,i,p,d,m)),R=c}else{const G=e;b=Lt(G.length>1?G(i,{attrs:c,slots:a,emit:l}):G(i,null)),R=e.props?c:Nv(c)}}catch(G){yr.length=0,Po(G,t,1),b=De(Rt)}let X=b;if(R&&v!==!1){const G=Object.keys(R),{shapeFlag:ee}=X;G.length&&ee&7&&(o&&G.some(Zc)&&(R=Dv(R,o)),X=Ds(X,R))}return n.dirs&&(X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&(X.transition=n.transition),b=X,Ji(P),b}const Nv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ko(n))&&((e||(e={}))[n]=t[n]);return e},Dv=(t,e)=>{const n={};for(const s in t)(!Zc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ov(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Wu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!fl(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wu(s,o,l):!0:!!o;return!1}function Wu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!fl(n,i))return!0}return!1}function Pv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xv=t=>t.__isSuspense;function Mv(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):kv(t)}function $i(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function At(t,e,n=!1){const s=He||pt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ne(e)?e.call(s.proxy):e}}const zu={};function Wn(t,e,n){return Mf(t,e,n)}function Mf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ve){const a=He;let c,l=!1,u=!1;if(Re(t)?(c=()=>t.value,l=Ef(t)):vn(t)?(c=()=>t,s=!0):Y(t)?(u=!0,l=t.some(vn),c=()=>t.map(R=>{if(Re(R))return R.value;if(vn(R))return Bn(R);if(ne(R))return wn(R,a,2)})):ne(t)?e?c=()=>wn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Tt(t,a,3,[d])}:c=Ct,e&&s){const R=c;c=()=>Bn(R())}let h,d=R=>{h=b.onStop=()=>{wn(R,a,4)}};if(Dr)return d=Ct,e?n&&Tt(e,a,3,[c(),u?[]:void 0,d]):c(),Ct;let p=u?[]:zu;const m=()=>{if(!!b.active)if(e){const R=b.run();(s||l||(u?R.some((P,X)=>Ar(P,p[X])):Ar(R,p)))&&(h&&h(),Tt(e,a,3,[R,p===zu?void 0:p,d]),p=R)}else b.run()};m.allowRecurse=!!e;let v;r==="sync"?v=m:r==="post"?v=()=>lt(m,a&&a.suspense):v=()=>{!a||a.isMounted?Av(m):m()};const b=new rl(c,v);return e?n?m():p=b.run():r==="post"?lt(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&el(a.scope.effects,b)}}function Lv(t,e,n){const s=this.proxy,r=Ke(t)?t.includes(".")?Lf(s,t):()=>s[t]:t.bind(s,s);let i;ne(e)?i=e:(i=e.handler,n=e);const o=He;Os(this);const a=Mf(r,i.bind(s),n);return o?Os(o):Gn(),a}function Lf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Bn(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))Bn(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Bn(t[n],e);else if(tf(t)||Ts(t))t.forEach(n=>{Bn(n,e)});else if(rf(t))for(const n in t)Bn(t[n],e);return t}function Uv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Lo(()=>{t.isMounted=!0}),Bf(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],Fv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},setup(t,{slots:e}){const n=tp(),s=Uv();let r;return()=>{const i=e.default&&Ff(e.default(),!0);if(!i||!i.length)return;const o=ue(t),{mode:a}=o,c=i[0];if(s.isLeaving)return ba(c);const l=Gu(c);if(!l)return ba(c);const u=ec(l,o,s,n);tc(l,u);const h=n.subTree,d=h&&Gu(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();r===void 0?r=v:v!==r&&(r=v,p=!0)}if(d&&d.type!==Rt&&(!Vn(l,d)||p)){const v=ec(d,o,s,n);if(tc(d,v),a==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update()},ba(c);a==="in-out"&&l.type!==Rt&&(v.delayLeave=(b,R,P)=>{const X=Uf(s,d);X[String(d.key)]=d,b._leaveCb=()=>{R(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return c}}},Vv=Fv;function Uf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ec(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:v,onAppear:b,onAfterAppear:R,onAppearCancelled:P}=e,X=String(t.key),G=Uf(n,t),ee=(M,W)=>{M&&Tt(M,s,9,W)},fe={mode:i,persisted:o,beforeEnter(M){let W=a;if(!n.isMounted)if(r)W=v||a;else return;M._leaveCb&&M._leaveCb(!0);const ie=G[X];ie&&Vn(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),ee(W,[M])},enter(M){let W=c,ie=l,Ae=u;if(!n.isMounted)if(r)W=b||c,ie=R||l,Ae=P||u;else return;let ke=!1;const ze=M._enterCb=Ot=>{ke||(ke=!0,Ot?ee(Ae,[M]):ee(ie,[M]),fe.delayedLeave&&fe.delayedLeave(),M._enterCb=void 0)};W?(W(M,ze),W.length<=1&&ze()):ze()},leave(M,W){const ie=String(t.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return W();ee(h,[M]);let Ae=!1;const ke=M._leaveCb=ze=>{Ae||(Ae=!0,W(),ze?ee(m,[M]):ee(p,[M]),M._leaveCb=void 0,G[ie]===t&&delete G[ie])};G[ie]=t,d?(d(M,ke),d.length<=1&&ke()):ke()},clone(M){return ec(M,e,n,s)}};return fe}function ba(t){if(xo(t))return t=Ds(t),t.children=null,t}function Gu(t){return xo(t)?t.children?t.children[0]:void 0:t}function tc(t,e){t.shapeFlag&6&&t.component?tc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ff(t,e=!1){let n=[],s=0;for(let r=0;r<t.length;r++){const i=t[r];i.type===at?(i.patchFlag&128&&s++,n=n.concat(Ff(i.children,e))):(e||i.type!==Rt)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Vf(t){return ne(t)?{setup:t,name:t.name}:t}const nc=t=>!!t.type.__asyncLoader,xo=t=>t.type.__isKeepAlive;function $v(t,e){$f(t,"a",e)}function Bv(t,e){$f(t,"da",e)}function $f(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Mo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)xo(r.parent.vnode)&&jv(s,e,n,r),r=r.parent}}function jv(t,e,n,s){const r=Mo(e,t,s,!0);pl(()=>{el(s[e],r)},n)}function Mo(t,e,n=He,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ws(),Os(n);const a=Tt(e,n,t,o);return Gn(),zs(),a});return s?r.unshift(i):r.push(i),i}}const sn=t=>(e,n=He)=>(!Dr||t==="sp")&&Mo(t,e,n),qv=sn("bm"),Lo=sn("m"),Hv=sn("bu"),Kv=sn("u"),Bf=sn("bum"),pl=sn("um"),Wv=sn("sp"),zv=sn("rtg"),Gv=sn("rtc");function Qv(t,e=He){Mo("ec",t,e)}let sc=!0;function Yv(t){const e=qf(t),n=t.proxy,s=t.ctx;sc=!1,e.beforeCreate&&Qu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:v,deactivated:b,beforeDestroy:R,beforeUnmount:P,destroyed:X,unmounted:G,render:ee,renderTracked:fe,renderTriggered:M,errorCaptured:W,serverPrefetch:ie,expose:Ae,inheritAttrs:ke,components:ze,directives:Ot,filters:wt}=e;if(l&&Xv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const we in o){const pe=o[we];ne(pe)&&(s[we]=pe.bind(n))}if(r){const we=r.call(n,n);$e(we)&&(t.data=Xt(we))}if(sc=!0,i)for(const we in i){const pe=i[we],_t=ne(pe)?pe.bind(n,n):ne(pe.get)?pe.get.bind(n,n):Ct,us=!ne(pe)&&ne(pe.set)?pe.set.bind(n):Ct,Ht=Ze({get:_t,set:us});Object.defineProperty(s,we,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:Pt=>Ht.value=Pt})}if(a)for(const we in a)jf(a[we],s,n,we);if(c){const we=ne(c)?c.call(n):c;Reflect.ownKeys(we).forEach(pe=>{$i(pe,we[pe])})}u&&Qu(u,t,"c");function Ue(we,pe){Y(pe)?pe.forEach(_t=>we(_t.bind(n))):pe&&we(pe.bind(n))}if(Ue(qv,h),Ue(Lo,d),Ue(Hv,p),Ue(Kv,m),Ue($v,v),Ue(Bv,b),Ue(Qv,W),Ue(Gv,fe),Ue(zv,M),Ue(Bf,P),Ue(pl,G),Ue(Wv,ie),Y(Ae))if(Ae.length){const we=t.exposed||(t.exposed={});Ae.forEach(pe=>{Object.defineProperty(we,pe,{get:()=>n[pe],set:_t=>n[pe]=_t})})}else t.exposed||(t.exposed={});ee&&t.render===Ct&&(t.render=ee),ke!=null&&(t.inheritAttrs=ke),ze&&(t.components=ze),Ot&&(t.directives=Ot)}function Xv(t,e,n=Ct,s=!1){Y(t)&&(t=rc(t));for(const r in t){const i=t[r];let o;$e(i)?"default"in i?o=At(i.from||r,i.default,!0):o=At(i.from||r):o=At(i),Re(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Qu(t,e,n){Tt(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function jf(t,e,n,s){const r=s.includes(".")?Lf(n,s):()=>n[s];if(Ke(t)){const i=e[t];ne(i)&&Wn(r,i)}else if(ne(t))Wn(r,t.bind(n));else if($e(t))if(Y(t))t.forEach(i=>jf(i,e,n,s));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&Wn(r,i,t)}}function qf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Zi(c,l,o,!0)),Zi(c,e,o)),i.set(e,c),c}function Zi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Zi(t,i,n,!0),r&&r.forEach(o=>Zi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Jv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jv={data:Yu,props:Ln,emits:Ln,methods:Ln,computed:Ln,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:Ln,directives:Ln,watch:ew,provide:Yu,inject:Zv};function Yu(t,e){return e?t?function(){return st(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Zv(t,e){return Ln(rc(t),rc(e))}function rc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?st(st(Object.create(null),t),e):e}function ew(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const s in e)n[s]=ot(t[s],e[s]);return n}function tw(t,e,n,s=!1){const r={},i={};Yi(i,Fo,1),t.propsDefaults=Object.create(null),Hf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:gv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function nw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ue(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];const p=e[d];if(c)if(le(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const m=jt(d);r[m]=ic(c,a,m,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{Hf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=Ks(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ic(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!le(e,h)&&!0)&&(delete i[h],l=!0)}l&&Yt(t,"set","$attrs")}function Hf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fi(c))continue;const l=e[c];let u;r&&le(r,u=jt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:fl(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ue(n),l=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ic(r,c,h,l[h],t,!le(l,h))}}return o}function ic(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&ne(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Os(r),s=l[n]=c.call(null,e),Gn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ks(n))&&(s=!0))}return s}function Kf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!ne(t)){const u=h=>{c=!0;const[d,p]=Kf(h,e,!0);st(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,bs),bs;if(Y(i))for(let u=0;u<i.length;u++){const h=jt(i[u]);Xu(h)&&(o[h]=ve)}else if(i)for(const u in i){const h=jt(u);if(Xu(h)){const d=i[u],p=o[h]=Y(d)||ne(d)?{type:d}:d;if(p){const m=eh(Boolean,p.type),v=eh(String,p.type);p[0]=m>-1,p[1]=v<0||m<v,(m>-1||le(p,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function Xu(t){return t[0]!=="$"}function Ju(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Zu(t,e){return Ju(t)===Ju(e)}function eh(t,e){return Y(e)?e.findIndex(n=>Zu(n,t)):ne(e)&&Zu(e,t)?0:-1}const Wf=t=>t[0]==="_"||t==="$stable",gl=t=>Y(t)?t.map(Lt):[Lt(t)],sw=(t,e,n)=>{const s=Ns((...r)=>gl(e(...r)),n);return s._c=!1,s},zf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Wf(r))continue;const i=t[r];if(ne(i))e[r]=sw(r,i,s);else if(i!=null){const o=gl(i);e[r]=()=>o}}},Gf=(t,e)=>{const n=gl(e);t.slots.default=()=>n},rw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Yi(e,"_",n)):zf(e,t.slots={})}else t.slots={},e&&Gf(t,e);Yi(t.slots,Fo,1)},iw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(st(r,e),!n&&a===1&&delete r._):(i=!e.$stable,zf(e,r)),o=e}else e&&(Gf(t,e),o={default:1});if(i)for(const a in r)!Wf(a)&&!(a in o)&&delete r[a]};function Fn(t,e){const n=pt;if(n===null)return t;const s=n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ve]=e[i];ne(o)&&(o={mounted:o,updated:o}),o.deep&&Bn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Pn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ws(),Tt(c,n,8,[t.el,a,t,e]),zs())}}function Qf(){return{app:null,config:{isNativeTag:Ly,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ow=0;function aw(t,e){return function(s,r=null){r!=null&&!$e(r)&&(r=null);const i=Qf(),o=new Set;let a=!1;const c=i.app={_uid:ow++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Nw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(c,...u)):ne(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=De(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,wl(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function oc(t,e,n,s,r=!1){if(Y(t)){t.forEach((d,p)=>oc(d,e&&(Y(e)?e[p]:e),n,s,r));return}if(nc(s)&&!r)return;const i=s.shapeFlag&4?wl(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ke(l)?(u[l]=null,le(h,l)&&(h[l]=null)):Re(l)&&(l.value=null)),ne(c))wn(c,a,12,[o,u]);else{const d=Ke(c),p=Re(c);if(d||p){const m=()=>{if(t.f){const v=d?u[c]:c.value;r?Y(v)&&el(v,i):Y(v)?v.includes(i)||v.push(i):d?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,le(h,c)&&(h[c]=o)):Re(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,lt(m,n)):m()}}}const lt=Mv;function cw(t){return lw(t)}function lw(t,e){const n=jy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Ct,cloneNode:m,insertStaticContent:v}=t,b=(f,g,y,I=null,E=null,A=null,O=!1,C=null,k=!!g.dynamicChildren)=>{if(f===g)return;f&&!Vn(f,g)&&(I=$(f),Et(f,E,A,!0),f=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:T,ref:j,shapeFlag:L}=g;switch(T){case yl:R(f,g,y,I);break;case Rt:P(f,g,y,I);break;case Ta:f==null&&X(g,y,I,O);break;case at:Ot(f,g,y,I,E,A,O,C,k);break;default:L&1?fe(f,g,y,I,E,A,O,C,k):L&6?wt(f,g,y,I,E,A,O,C,k):(L&64||L&128)&&T.process(f,g,y,I,E,A,O,C,k,_e)}j!=null&&E&&oc(j,f&&f.ref,A,g||f,!g)},R=(f,g,y,I)=>{if(f==null)s(g.el=a(g.children),y,I);else{const E=g.el=f.el;g.children!==f.children&&l(E,g.children)}},P=(f,g,y,I)=>{f==null?s(g.el=c(g.children||""),y,I):g.el=f.el},X=(f,g,y,I)=>{[f.el,f.anchor]=v(f.children,g,y,I,f.el,f.anchor)},G=({el:f,anchor:g},y,I)=>{let E;for(;f&&f!==g;)E=d(f),s(f,y,I),f=E;s(g,y,I)},ee=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),r(f),f=y;r(g)},fe=(f,g,y,I,E,A,O,C,k)=>{O=O||g.type==="svg",f==null?M(g,y,I,E,A,O,C,k):Ae(f,g,E,A,O,C,k)},M=(f,g,y,I,E,A,O,C)=>{let k,T;const{type:j,props:L,shapeFlag:q,transition:Q,patchFlag:ce,dirs:Te}=f;if(f.el&&m!==void 0&&ce===-1)k=f.el=m(f.el);else{if(k=f.el=o(f.type,A,L&&L.is,L),q&8?u(k,f.children):q&16&&ie(f.children,k,null,I,E,A&&j!=="foreignObject",O,C),Te&&Pn(f,null,I,"created"),L){for(const Ie in L)Ie!=="value"&&!Fi(Ie)&&i(k,Ie,null,L[Ie],A,f.children,I,E,N);"value"in L&&i(k,"value",null,L.value),(T=L.onVnodeBeforeMount)&&Mt(T,I,f)}W(k,f,f.scopeId,O,I)}Te&&Pn(f,null,I,"beforeMount");const me=(!E||E&&!E.pendingBranch)&&Q&&!Q.persisted;me&&Q.beforeEnter(k),s(k,g,y),((T=L&&L.onVnodeMounted)||me||Te)&&lt(()=>{T&&Mt(T,I,f),me&&Q.enter(k),Te&&Pn(f,null,I,"mounted")},E)},W=(f,g,y,I,E)=>{if(y&&p(f,y),I)for(let A=0;A<I.length;A++)p(f,I[A]);if(E){let A=E.subTree;if(g===A){const O=E.vnode;W(f,O,O.scopeId,O.slotScopeIds,E.parent)}}},ie=(f,g,y,I,E,A,O,C,k=0)=>{for(let T=k;T<f.length;T++){const j=f[T]=C?un(f[T]):Lt(f[T]);b(null,j,g,y,I,E,A,O,C)}},Ae=(f,g,y,I,E,A,O)=>{const C=g.el=f.el;let{patchFlag:k,dynamicChildren:T,dirs:j}=g;k|=f.patchFlag&16;const L=f.props||ve,q=g.props||ve;let Q;y&&xn(y,!1),(Q=q.onVnodeBeforeUpdate)&&Mt(Q,y,g,f),j&&Pn(g,f,y,"beforeUpdate"),y&&xn(y,!0);const ce=E&&g.type!=="foreignObject";if(T?ke(f.dynamicChildren,T,C,y,I,ce,A):O||_t(f,g,C,null,y,I,ce,A,!1),k>0){if(k&16)ze(C,g,L,q,y,I,E);else if(k&2&&L.class!==q.class&&i(C,"class",null,q.class,E),k&4&&i(C,"style",L.style,q.style,E),k&8){const Te=g.dynamicProps;for(let me=0;me<Te.length;me++){const Ie=Te[me],St=L[Ie],hs=q[Ie];(hs!==St||Ie==="value")&&i(C,Ie,St,hs,E,f.children,y,I,N)}}k&1&&f.children!==g.children&&u(C,g.children)}else!O&&T==null&&ze(C,g,L,q,y,I,E);((Q=q.onVnodeUpdated)||j)&&lt(()=>{Q&&Mt(Q,y,g,f),j&&Pn(g,f,y,"updated")},I)},ke=(f,g,y,I,E,A,O)=>{for(let C=0;C<g.length;C++){const k=f[C],T=g[C],j=k.el&&(k.type===at||!Vn(k,T)||k.shapeFlag&70)?h(k.el):y;b(k,T,j,null,I,E,A,O,!0)}},ze=(f,g,y,I,E,A,O)=>{if(y!==I){for(const C in I){if(Fi(C))continue;const k=I[C],T=y[C];k!==T&&C!=="value"&&i(f,C,T,k,O,g.children,E,A,N)}if(y!==ve)for(const C in y)!Fi(C)&&!(C in I)&&i(f,C,y[C],null,O,g.children,E,A,N);"value"in I&&i(f,"value",y.value,I.value)}},Ot=(f,g,y,I,E,A,O,C,k)=>{const T=g.el=f?f.el:a(""),j=g.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:q,slotScopeIds:Q}=g;Q&&(C=C?C.concat(Q):Q),f==null?(s(T,y,I),s(j,y,I),ie(g.children,y,j,E,A,O,C,k)):L>0&&L&64&&q&&f.dynamicChildren?(ke(f.dynamicChildren,q,y,E,A,O,C),(g.key!=null||E&&g===E.subTree)&&Yf(f,g,!0)):_t(f,g,y,j,E,A,O,C,k)},wt=(f,g,y,I,E,A,O,C,k)=>{g.slotScopeIds=C,f==null?g.shapeFlag&512?E.ctx.activate(g,y,I,O,k):Le(g,y,I,E,A,O,k):Ue(f,g,k)},Le=(f,g,y,I,E,A,O)=>{const C=f.component=bw(f,I,E);if(xo(f)&&(C.ctx.renderer=_e),Tw(C),C.asyncDep){if(E&&E.registerDep(C,we),!f.el){const k=C.subTree=De(Rt);P(null,k,g,y)}return}we(C,f,g,y,E,A,O)},Ue=(f,g,y)=>{const I=g.component=f.component;if(Ov(f,g,y))if(I.asyncDep&&!I.asyncResolved){pe(I,g,y);return}else I.next=g,Cv(I.update),I.update();else g.component=f.component,g.el=f.el,I.vnode=g},we=(f,g,y,I,E,A,O)=>{const C=()=>{if(f.isMounted){let{next:j,bu:L,u:q,parent:Q,vnode:ce}=f,Te=j,me;xn(f,!1),j?(j.el=ce.el,pe(f,j,O)):j=ce,L&&Vi(L),(me=j.props&&j.props.onVnodeBeforeUpdate)&&Mt(me,Q,j,ce),xn(f,!0);const Ie=Ia(f),St=f.subTree;f.subTree=Ie,b(St,Ie,h(St.el),$(St),f,E,A),j.el=Ie.el,Te===null&&Pv(f,Ie.el),q&&lt(q,E),(me=j.props&&j.props.onVnodeUpdated)&&lt(()=>Mt(me,Q,j,ce),E)}else{let j;const{el:L,props:q}=g,{bm:Q,m:ce,parent:Te}=f,me=nc(g);if(xn(f,!1),Q&&Vi(Q),!me&&(j=q&&q.onVnodeBeforeMount)&&Mt(j,Te,g),xn(f,!0),L&&te){const Ie=()=>{f.subTree=Ia(f),te(L,f.subTree,f,E,null)};me?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Ie()):Ie()}else{const Ie=f.subTree=Ia(f);b(null,Ie,y,I,f,E,A),g.el=Ie.el}if(ce&&lt(ce,E),!me&&(j=q&&q.onVnodeMounted)){const Ie=g;lt(()=>Mt(j,Te,Ie),E)}g.shapeFlag&256&&f.a&&lt(f.a,E),f.isMounted=!0,g=y=I=null}},k=f.effect=new rl(C,()=>kf(f.update),f.scope),T=f.update=k.run.bind(k);T.id=f.uid,xn(f,!0),T()},pe=(f,g,y)=>{g.component=f;const I=f.vnode.props;f.vnode=g,f.next=null,nw(f,g.props,I,y),iw(f,g.children,y),Ws(),dl(void 0,f.update),zs()},_t=(f,g,y,I,E,A,O,C,k=!1)=>{const T=f&&f.children,j=f?f.shapeFlag:0,L=g.children,{patchFlag:q,shapeFlag:Q}=g;if(q>0){if(q&128){Ht(T,L,y,I,E,A,O,C,k);return}else if(q&256){us(T,L,y,I,E,A,O,C,k);return}}Q&8?(j&16&&N(T,E,A),L!==T&&u(y,L)):j&16?Q&16?Ht(T,L,y,I,E,A,O,C,k):N(T,E,A,!0):(j&8&&u(y,""),Q&16&&ie(L,y,I,E,A,O,C,k))},us=(f,g,y,I,E,A,O,C,k)=>{f=f||bs,g=g||bs;const T=f.length,j=g.length,L=Math.min(T,j);let q;for(q=0;q<L;q++){const Q=g[q]=k?un(g[q]):Lt(g[q]);b(f[q],Q,y,null,E,A,O,C,k)}T>j?N(f,E,A,!0,!1,L):ie(g,y,I,E,A,O,C,k,L)},Ht=(f,g,y,I,E,A,O,C,k)=>{let T=0;const j=g.length;let L=f.length-1,q=j-1;for(;T<=L&&T<=q;){const Q=f[T],ce=g[T]=k?un(g[T]):Lt(g[T]);if(Vn(Q,ce))b(Q,ce,y,null,E,A,O,C,k);else break;T++}for(;T<=L&&T<=q;){const Q=f[L],ce=g[q]=k?un(g[q]):Lt(g[q]);if(Vn(Q,ce))b(Q,ce,y,null,E,A,O,C,k);else break;L--,q--}if(T>L){if(T<=q){const Q=q+1,ce=Q<j?g[Q].el:I;for(;T<=q;)b(null,g[T]=k?un(g[T]):Lt(g[T]),y,ce,E,A,O,C,k),T++}}else if(T>q)for(;T<=L;)Et(f[T],E,A,!0),T++;else{const Q=T,ce=T,Te=new Map;for(T=ce;T<=q;T++){const dt=g[T]=k?un(g[T]):Lt(g[T]);dt.key!=null&&Te.set(dt.key,T)}let me,Ie=0;const St=q-ce+1;let hs=!1,Lu=0;const nr=new Array(St);for(T=0;T<St;T++)nr[T]=0;for(T=Q;T<=L;T++){const dt=f[T];if(Ie>=St){Et(dt,E,A,!0);continue}let xt;if(dt.key!=null)xt=Te.get(dt.key);else for(me=ce;me<=q;me++)if(nr[me-ce]===0&&Vn(dt,g[me])){xt=me;break}xt===void 0?Et(dt,E,A,!0):(nr[xt-ce]=T+1,xt>=Lu?Lu=xt:hs=!0,b(dt,g[xt],y,null,E,A,O,C,k),Ie++)}const Uu=hs?uw(nr):bs;for(me=Uu.length-1,T=St-1;T>=0;T--){const dt=ce+T,xt=g[dt],Fu=dt+1<j?g[dt+1].el:I;nr[T]===0?b(null,xt,y,Fu,E,A,O,C,k):hs&&(me<0||T!==Uu[me]?Pt(xt,y,Fu,2):me--)}}},Pt=(f,g,y,I,E=null)=>{const{el:A,type:O,transition:C,children:k,shapeFlag:T}=f;if(T&6){Pt(f.component.subTree,g,y,I);return}if(T&128){f.suspense.move(g,y,I);return}if(T&64){O.move(f,g,y,_e);return}if(O===at){s(A,g,y);for(let L=0;L<k.length;L++)Pt(k[L],g,y,I);s(f.anchor,g,y);return}if(O===Ta){G(f,g,y);return}if(I!==2&&T&1&&C)if(I===0)C.beforeEnter(A),s(A,g,y),lt(()=>C.enter(A),E);else{const{leave:L,delayLeave:q,afterLeave:Q}=C,ce=()=>s(A,g,y),Te=()=>{L(A,()=>{ce(),Q&&Q()})};q?q(A,ce,Te):Te()}else s(A,g,y)},Et=(f,g,y,I=!1,E=!1)=>{const{type:A,props:O,ref:C,children:k,dynamicChildren:T,shapeFlag:j,patchFlag:L,dirs:q}=f;if(C!=null&&oc(C,null,y,f,!0),j&256){g.ctx.deactivate(f);return}const Q=j&1&&q,ce=!nc(f);let Te;if(ce&&(Te=O&&O.onVnodeBeforeUnmount)&&Mt(Te,g,f),j&6)F(f.component,y,I);else{if(j&128){f.suspense.unmount(y,I);return}Q&&Pn(f,null,g,"beforeUnmount"),j&64?f.type.remove(f,g,y,E,_e,I):T&&(A!==at||L>0&&L&64)?N(T,g,y,!1,!0):(A===at&&L&384||!E&&j&16)&&N(k,g,y),I&&_a(f)}(ce&&(Te=O&&O.onVnodeUnmounted)||Q)&&lt(()=>{Te&&Mt(Te,g,f),Q&&Pn(f,null,g,"unmounted")},y)},_a=f=>{const{type:g,el:y,anchor:I,transition:E}=f;if(g===at){_(y,I);return}if(g===Ta){ee(f);return}const A=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:C}=E,k=()=>O(y,A);C?C(f.el,A,k):k()}else A()},_=(f,g)=>{let y;for(;f!==g;)y=d(f),r(f),f=y;r(g)},F=(f,g,y)=>{const{bum:I,scope:E,update:A,subTree:O,um:C}=f;I&&Vi(I),E.stop(),A&&(A.active=!1,Et(O,f,g,y)),C&&lt(C,g),lt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},N=(f,g,y,I=!1,E=!1,A=0)=>{for(let O=A;O<f.length;O++)Et(f[O],g,y,I,E)},$=f=>f.shapeFlag&6?$(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),ge=(f,g,y)=>{f==null?g._vnode&&Et(g._vnode,null,null,!0):b(g._vnode||null,f,g,null,null,null,y),Df(),g._vnode=f},_e={p:b,um:Et,m:Pt,r:_a,mt:Le,mc:ie,pc:_t,pbc:ke,n:$,o:t};let se,te;return e&&([se,te]=e(_e)),{render:ge,hydrate:se,createApp:aw(ge,se)}}function xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Yf(t,e,n=!1){const s=t.children,r=e.children;if(Y(s)&&Y(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=un(r[i]),a.el=o.el),n||Yf(o,a))}}function uw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const hw=t=>t.__isTeleport,Xf="components";function ml(t,e){return fw(Xf,t,!0,e)||t}const dw=Symbol();function fw(t,e,n=!0,s=!1){const r=pt||He;if(r){const i=r.type;if(t===Xf){const a=kw(i);if(a&&(a===e||a===jt(e)||a===Do(jt(e))))return i}const o=th(r[t]||i[t],e)||th(r.appContext[t],e);return!o&&s?i:o}}function th(t,e){return t&&(t[e]||t[jt(e)]||t[Do(jt(e))])}const at=Symbol(void 0),yl=Symbol(void 0),Rt=Symbol(void 0),Ta=Symbol(void 0),yr=[];let zn=null;function Se(t=!1){yr.push(zn=t?null:[])}function pw(){yr.pop(),zn=yr[yr.length-1]||null}let eo=1;function nh(t){eo+=t}function Jf(t){return t.dynamicChildren=eo>0?zn||bs:null,pw(),eo>0&&zn&&zn.push(t),t}function xe(t,e,n,s,r,i){return Jf(D(t,e,n,s,r,i,!0))}function Uo(t,e,n,s,r){return Jf(De(t,e,n,s,r,!0))}function to(t){return t?t.__v_isVNode===!0:!1}function Vn(t,e){return t.type===e.type&&t.key===e.key}const Fo="__vInternal",Zf=({key:t})=>t!=null?t:null,Bi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ke(t)||Re(t)||ne(t)?{i:pt,r:t,k:e,f:!!n}:t:null;function D(t,e=null,n=null,s=0,r=null,i=t===at?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zf(e),ref:e&&Bi(e),scopeId:xf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(vl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),eo>0&&!o&&zn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zn.push(c),c}const De=gw;function gw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===dw)&&(t=Rt),to(t)){const a=Ds(t,e,!0);return n&&vl(a,n),a}if(Rw(t)&&(t=t.__vccOpts),e){e=mw(e);let{class:a,style:c}=e;a&&!Ke(a)&&(e.class=Sn(a)),$e(c)&&(If(c)&&!Y(c)&&(c=st({},c)),e.style=Jc(c))}const o=Ke(t)?1:xv(t)?128:hw(t)?64:$e(t)?4:ne(t)?2:0;return D(t,e,n,s,r,o,i,!0)}function mw(t){return t?If(t)||Fo in t?st({},t):t:null}function Ds(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?yw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Zf(a),ref:e&&e.ref?n&&r?Y(r)?r.concat(Bi(e)):[r,Bi(e)]:Bi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==at?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ds(t.ssContent),ssFallback:t.ssFallback&&Ds(t.ssFallback),el:t.el,anchor:t.anchor}}function Vo(t=" ",e=0){return De(yl,null,t,e)}function Gr(t="",e=!1){return e?(Se(),Uo(Rt,null,t)):De(Rt,null,t)}function Lt(t){return t==null||typeof t=="boolean"?De(Rt):Y(t)?De(at,null,t.slice()):typeof t=="object"?un(t):De(yl,null,String(t))}function un(t){return t.el===null||t.memo?t:Ds(t)}function vl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),vl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Fo in e)?e._ctx=pt:r===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),s&64?(n=16,e=[Vo(e)]):n=8);t.children=e,t.shapeFlag|=n}function yw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Sn([e.class,s.class]));else if(r==="style")e.style=Jc([e.style,s.style]);else if(ko(r)){const i=e[r],o=s[r];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Mt(t,e,n,s=null){Tt(t,e,7,[n,s])}function vw(t,e,n,s){let r;const i=n&&n[s];if(Y(t)||Ke(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if($e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function ww(t,e,n={},s,r){if(pt.isCE)return De("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),Se();const o=i&&ep(i(n)),a=Uo(at,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ep(t){return t.some(e=>to(e)?!(e.type===Rt||e.type===at&&!ep(e.children)):!0)?t:null}const ac=t=>t?np(t)?wl(t)||t.proxy:ac(t.parent):null,no=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ac(t.parent),$root:t=>ac(t.root),$emit:t=>t.emit,$options:t=>qf(t),$forceUpdate:t=>()=>kf(t.update),$nextTick:t=>hl.bind(t.proxy),$watch:t=>Lv.bind(t)}),_w={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ve&&le(s,e))return o[e]=1,s[e];if(r!==ve&&le(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==ve&&le(n,e))return o[e]=4,n[e];sc&&(o[e]=0)}}const u=no[e];let h,d;if(u)return e==="$attrs"&&yt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&le(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;if(r!==ve&&le(r,e))r[e]=n;else if(s!==ve&&le(s,e))s[e]=n;else if(le(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&le(t,o)||e!==ve&&le(e,o)||(a=i[0])&&le(a,o)||le(s,o)||le(no,o)||le(r.config.globalProperties,o)}},Ew=Qf();let Iw=0;function bw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ew,i={uid:Iw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new of(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kf(s,r),emitsOptions:Pf(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rv.bind(null,i),t.ce&&t.ce(i),i}let He=null;const tp=()=>He||pt,Os=t=>{He=t,t.scope.on()},Gn=()=>{He&&He.scope.off(),He=null};function np(t){return t.vnode.shapeFlag&4}let Dr=!1;function Tw(t,e=!1){Dr=e;const{props:n,children:s}=t.vnode,r=np(t);tw(t,n,r,e),rw(t,s);const i=r?Sw(t,e):void 0;return Dr=!1,i}function Sw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zn(new Proxy(t.ctx,_w));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Aw(t):null;Os(t),Ws();const i=wn(s,t,0,[t.props,r]);if(zs(),Gn(),nf(i)){if(i.then(Gn,Gn),e)return i.then(o=>{sh(t,o,e)}).catch(o=>{Po(o,t,0)});t.asyncDep=i}else sh(t,i,e)}else sp(t,e)}function sh(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=Cf(e)),sp(t,n)}let rh;function sp(t,e,n){const s=t.type;if(!t.render){if(!e&&rh&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=st(st({isCustomElement:i,delimiters:a},o),c);s.render=rh(r,l)}}t.render=s.render||Ct}Os(t),Ws(),Yv(t),zs(),Gn()}function Cw(t){return new Proxy(t.attrs,{get(e,n){return yt(t,"get","$attrs"),e[n]}})}function Aw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Cw(t))},slots:t.slots,emit:t.emit,expose:e}}function wl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cf(Zn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in no)return no[n](t)}}))}function kw(t){return ne(t)&&t.displayName||t.name}function Rw(t){return ne(t)&&"__vccOpts"in t}const Ze=(t,e)=>bv(t,e,Dr);function rp(t,e,n){const s=arguments.length;return s===2?$e(e)&&!Y(e)?to(e)?De(t,null,[e]):De(t,e):De(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&to(n)&&(n=[n]),De(t,e,n))}const Nw="3.2.30",Dw="http://www.w3.org/2000/svg",$n=typeof document!="undefined"?document:null,ih=$n&&$n.createElement("template"),Ow={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?$n.createElementNS(Dw,t):$n.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>$n.createTextNode(t),createComment:t=>$n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ih.innerHTML=s?`<svg>${t}</svg>`:t;const a=ih.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Pw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function xw(t,e,n){const s=t.style,r=Ke(n);if(n&&!r){for(const i in n)cc(s,i,n[i]);if(e&&!Ke(e))for(const i in e)n[i]==null&&cc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const oh=/\s*!important$/;function cc(t,e,n){if(Y(n))n.forEach(s=>cc(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=Mw(t,e);oh.test(n)?t.setProperty(Ks(s),n.replace(oh,""),"important"):t[s]=n}}const ah=["Webkit","Moz","ms"],Sa={};function Mw(t,e){const n=Sa[e];if(n)return n;let s=jt(e);if(s!=="filter"&&s in t)return Sa[e]=s;s=Do(s);for(let r=0;r<ah.length;r++){const i=ah[r]+s;if(i in t)return Sa[e]=i}return e}const ch="http://www.w3.org/1999/xlink";function Lw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ch,e.slice(6,e.length)):t.setAttributeNS(ch,e,n);else{const i=Oy(e);n==null||i&&!Zd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Uw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Zd(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let so=Date.now,ip=!1;if(typeof window!="undefined"){so()>document.createEvent("Event").timeStamp&&(so=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ip=!!(t&&Number(t[1])<=53)}let lc=0;const Fw=Promise.resolve(),Vw=()=>{lc=0},$w=()=>lc||(Fw.then(Vw),lc=so());function ms(t,e,n,s){t.addEventListener(e,n,s)}function Bw(t,e,n,s){t.removeEventListener(e,n,s)}function jw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=qw(e);if(s){const l=i[e]=Hw(s,r);ms(t,a,l,c)}else o&&(Bw(t,a,o,c),i[e]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function qw(t){let e;if(lh.test(t)){e={};let n;for(;n=t.match(lh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ks(t.slice(2)),e]}function Hw(t,e){const n=s=>{const r=s.timeStamp||so();(ip||r>=n.attached-1)&&Tt(Kw(s,n.value),e,5,[s])};return n.value=t,n.attached=$w(),n}function Kw(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const uh=/^on[a-z]/,Ww=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Pw(t,s,r):e==="style"?xw(t,n,s):ko(e)?Zc(e)||jw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zw(t,e,s,r))?Uw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Lw(t,e,s,r))};function zw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&uh.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||uh.test(e)&&Ke(n)?!1:e in t}const Gw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vv.props;const hh=t=>{const e=t.props["onUpdate:modelValue"];return Y(e)?n=>Vi(e,n):e};function Qw(t){t.target.composing=!0}function dh(t){const e=t.target;e.composing&&(e.composing=!1,Yw(e,"input"))}function Yw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ys={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=hh(r);const i=s||r.props&&r.props.type==="number";ms(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=za(a)),t._assign(a)}),n&&ms(t,"change",()=>{t.value=t.value.trim()}),e||(ms(t,"compositionstart",Qw),ms(t,"compositionend",dh),ms(t,"change",dh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=hh(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&za(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Xw=["ctrl","shift","alt","meta"],Jw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Xw.some(n=>t[`${n}Key`]&&!e.includes(n))},vr=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Jw[e[r]];if(i&&i(n,e))return}return t(n,...s)},Zw=st({patchProp:Ww},Ow);let fh;function e_(){return fh||(fh=cw(Zw))}const t_=(...t)=>{const e=e_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=n_(s);if(!r)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function n_(t){return Ke(t)?document.querySelector(t):t}var s_=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let op;const $o=t=>op=t,ap=Symbol();function uc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var wr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wr||(wr={}));function r_(){const t=af(!0),e=t.run(()=>mt({}));let n=[],s=[];const r=Zn({install(i){$o(r),r._a=i,i.provide(ap,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!s_?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const cp=()=>{};function ph(t,e,n,s=cp){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&cf()&&lf(r),r}function ds(t,...e){t.slice().forEach(n=>{n(...e)})}function hc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];uc(r)&&uc(s)&&t.hasOwnProperty(n)&&!Re(s)&&!vn(s)?t[n]=hc(r,s):t[n]=s}return t}const i_=Symbol();function o_(t){return!uc(t)||!t.hasOwnProperty(i_)}const{assign:hn}=Object;function a_(t){return!!(Re(t)&&t.effect)}function c_(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=wv(n.state.value[t]);return hn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Zn(Ze(()=>{$o(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=lp(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(d=>{hn(d,h)})},c}function lp(t,e,n={},s,r,i){let o;const a=hn({actions:{}},n),c={deep:!0};let l,u,h=Zn([]),d=Zn([]),p;const m=s.state.value[t];!i&&!m&&(s.state.value[t]={}),mt({});let v;function b(M){let W;l=u=!1,typeof M=="function"?(M(s.state.value[t]),W={type:wr.patchFunction,storeId:t,events:p}):(hc(s.state.value[t],M),W={type:wr.patchObject,payload:M,storeId:t,events:p});const ie=v=Symbol();hl().then(()=>{v===ie&&(l=!0)}),u=!0,ds(h,W,s.state.value[t])}const R=cp;function P(){o.stop(),h=[],d=[],s._s.delete(t)}function X(M,W){return function(){$o(s);const ie=Array.from(arguments),Ae=[],ke=[];function ze(Le){Ae.push(Le)}function Ot(Le){ke.push(Le)}ds(d,{args:ie,name:M,store:ee,after:ze,onError:Ot});let wt;try{wt=W.apply(this&&this.$id===t?this:ee,ie)}catch(Le){throw ds(ke,Le),Le}return wt instanceof Promise?wt.then(Le=>(ds(Ae,Le),Le)).catch(Le=>(ds(ke,Le),Promise.reject(Le))):(ds(Ae,wt),wt)}}const G={_p:s,$id:t,$onAction:ph.bind(null,d),$patch:b,$reset:R,$subscribe(M,W={}){const ie=ph(h,M,W.detached,()=>Ae()),Ae=o.run(()=>Wn(()=>s.state.value[t],ke=>{(W.flush==="sync"?u:l)&&M({storeId:t,type:wr.direct,events:p},ke)},hn({},c,W)));return ie},$dispose:P},ee=Xt(G);s._s.set(t,ee);const fe=s._e.run(()=>(o=af(),o.run(()=>e())));for(const M in fe){const W=fe[M];if(Re(W)&&!a_(W)||vn(W))i||(m&&o_(W)&&(Re(W)?W.value=m[M]:hc(W,m[M])),s.state.value[t][M]=W);else if(typeof W=="function"){const ie=X(M,W);fe[M]=ie,a.actions[M]=W}}return hn(ee,fe),hn(ue(ee),fe),Object.defineProperty(ee,"$state",{get:()=>s.state.value[t],set:M=>{b(W=>{hn(W,M)})}}),s._p.forEach(M=>{hn(ee,o.run(()=>M({store:ee,app:s._a,pinia:s,options:a})))}),m&&i&&n.hydrate&&n.hydrate(ee.$state,m),l=!0,u=!0,ee}function up(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=tp();return a=a||l&&At(ap,null),a&&$o(a),a=op,a._s.has(s)||(i?lp(s,e,r,a):c_(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},l_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):l_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u_=function(t){const e=hp(t);return dp.encodeByteArray(e,!0)},ro=function(t){return u_(t).replace(/\./g,"")},fp=function(t){try{return dp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=()=>h_().__FIREBASE_DEFAULTS__,f_=()=>{typeof process=="undefined"||process.env},p_=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fp(t[1]);return e&&JSON.parse(e)},_l=()=>{try{return d_()||f_()||p_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pp=t=>{var e,n;return(n=(e=_l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},g_=t=>{const e=pp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},m_=()=>{var t;return(t=_l())===null||t===void 0?void 0:t.config},gp=t=>{var e;return(e=_l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ro(JSON.stringify(n)),ro(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w_(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function __(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function E_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I_(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b_(){try{return typeof indexedDB=="object"}catch{return!1}}function T_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="FirebaseError";class rn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=S_,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qr.prototype.create)}}class Qr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?C_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new rn(r,a,s)}}function C_(t,e){return t.replace(A_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const A_=/\{\$([^}]+)}/g;function k_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function io(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(gh(i)&&gh(o)){if(!io(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function gh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function cr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function lr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function R_(t,e){const n=new N_(t,e);return n.subscribe.bind(n)}class N_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");D_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ca),r.error===void 0&&(r.error=Ca),r.complete===void 0&&(r.complete=Ca);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ca(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){return t&&t._delegate?t._delegate:t}class es{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new y_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(x_(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:P_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function P_(t){return t===Un?void 0:t}function x_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new O_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const L_={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},U_=he.INFO,F_={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},V_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=F_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class El{constructor(e){this.name=e,this._logLevel=U_,this._logHandler=V_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const $_=(t,e)=>e.some(n=>t instanceof n);let mh,yh;function B_(){return mh||(mh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j_(){return yh||(yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mp=new WeakMap,dc=new WeakMap,yp=new WeakMap,Aa=new WeakMap,Il=new WeakMap;function q_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mp.set(n,t)}).catch(()=>{}),Il.set(e,t),e}function H_(t){if(dc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dc.set(t,e)}let fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function K_(t){fc=t(fc)}function W_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ka(this),e,...n);return yp.set(s,e.sort?e.sort():[e]),_n(s)}:j_().includes(t)?function(...e){return t.apply(ka(this),e),_n(mp.get(this))}:function(...e){return _n(t.apply(ka(this),e))}}function z_(t){return typeof t=="function"?W_(t):(t instanceof IDBTransaction&&H_(t),$_(t,B_())?new Proxy(t,fc):t)}function _n(t){if(t instanceof IDBRequest)return q_(t);if(Aa.has(t))return Aa.get(t);const e=z_(t);return e!==t&&(Aa.set(t,e),Il.set(e,t)),e}const ka=t=>Il.get(t);function G_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_n(o.result),c.oldVersion,c.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Q_=["get","getKey","getAll","getAllKeys","count"],Y_=["put","add","delete","clear"],Ra=new Map;function vh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Y_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Q_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ra.set(e,i),i}K_(t=>({...t,get:(e,n,s)=>vh(e,n)||t.get(e,n,s),has:(e,n)=>!!vh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function J_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pc="@firebase/app",wh="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new El("@firebase/app"),Z_="@firebase/app-compat",eE="@firebase/analytics-compat",tE="@firebase/analytics",nE="@firebase/app-check-compat",sE="@firebase/app-check",rE="@firebase/auth",iE="@firebase/auth-compat",oE="@firebase/database",aE="@firebase/database-compat",cE="@firebase/functions",lE="@firebase/functions-compat",uE="@firebase/installations",hE="@firebase/installations-compat",dE="@firebase/messaging",fE="@firebase/messaging-compat",pE="@firebase/performance",gE="@firebase/performance-compat",mE="@firebase/remote-config",yE="@firebase/remote-config-compat",vE="@firebase/storage",wE="@firebase/storage-compat",_E="@firebase/firestore",EE="@firebase/firestore-compat",IE="firebase",bE="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="[DEFAULT]",TE={[pc]:"fire-core",[Z_]:"fire-core-compat",[tE]:"fire-analytics",[eE]:"fire-analytics-compat",[sE]:"fire-app-check",[nE]:"fire-app-check-compat",[rE]:"fire-auth",[iE]:"fire-auth-compat",[oE]:"fire-rtdb",[aE]:"fire-rtdb-compat",[cE]:"fire-fn",[lE]:"fire-fn-compat",[uE]:"fire-iid",[hE]:"fire-iid-compat",[dE]:"fire-fcm",[fE]:"fire-fcm-compat",[pE]:"fire-perf",[gE]:"fire-perf-compat",[mE]:"fire-rc",[yE]:"fire-rc-compat",[vE]:"fire-gcs",[wE]:"fire-gcs-compat",[_E]:"fire-fst",[EE]:"fire-fst-compat","fire-js":"fire-js",[IE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Map,mc=new Map;function SE(t,e){try{t.container.addComponent(e)}catch(n){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(mc.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,t);for(const n of oo.values())SE(n,t);return!0}function bl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},En=new Qr("app","Firebase",CE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=bE;function vp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:gc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw En.create("bad-app-name",{appName:String(r)});if(n||(n=m_()),!n)throw En.create("no-options");const i=oo.get(r);if(i){if(io(n,i.options)&&io(s,i.config))return i;throw En.create("duplicate-app",{appName:r})}const o=new M_(r);for(const c of mc.values())o.addComponent(c);const a=new AE(n,s,o);return oo.set(r,a),a}function wp(t=gc){const e=oo.get(t);if(!e&&t===gc)return vp();if(!e)throw En.create("no-app",{appName:t});return e}function In(t,e,n){var s;let r=(s=TE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(a.join(" "));return}Ps(new es(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="firebase-heartbeat-database",RE=1,Or="firebase-heartbeat-store";let Na=null;function _p(){return Na||(Na=G_(kE,RE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Or)}}}).catch(t=>{throw En.create("idb-open",{originalErrorMessage:t.message})})),Na}async function NE(t){try{return(await _p()).transaction(Or).objectStore(Or).get(Ep(t))}catch(e){if(e instanceof rn)ts.warn(e.message);else{const n=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ts.warn(n.message)}}}async function _h(t,e){try{const s=(await _p()).transaction(Or,"readwrite");return await s.objectStore(Or).put(e,Ep(t)),s.done}catch(n){if(n instanceof rn)ts.warn(n.message);else{const s=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ts.warn(s.message)}}}function Ep(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=1024,OE=30*24*60*60*1e3;class PE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ME(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Eh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=OE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Eh(),{heartbeatsToSend:n,unsentEntries:s}=xE(this._heartbeatsCache.heartbeats),r=ro(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Eh(){return new Date().toISOString().substring(0,10)}function xE(t,e=DE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ih(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ih(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ME{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b_()?T_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _h(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _h(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ih(t){return ro(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){Ps(new es("platform-logger",e=>new X_(e),"PRIVATE")),Ps(new es("heartbeat",e=>new PE(e),"PRIVATE")),In(pc,wh,t),In(pc,wh,"esm2017"),In("fire-js","")}LE("");var UE="firebase",FE="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(UE,FE,"app");var VE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},U,Tl=Tl||{},z=VE||self;function ao(){}function Bo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Jr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $E(t){return Object.prototype.hasOwnProperty.call(t,Da)&&t[Da]||(t[Da]=++BE)}var Da="closure_uid_"+(1e9*Math.random()>>>0),BE=0;function jE(t,e,n){return t.call.apply(t.bind,arguments)}function qE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=jE:tt=qE,tt.apply(null,arguments)}function Ri(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Nn(){this.s=this.s,this.o=this.o}var HE=0;Nn.prototype.s=!1;Nn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),HE!=0)&&$E(this)};Nn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ip=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Sl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function bh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Bo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var KE=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",ao,e),z.removeEventListener("test",ao,e)}catch{}return t}();function co(t){return/^[\s\xa0]*$/.test(t)}var Th=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Oa(t,e){return t<e?-1:t>e?1:0}function jo(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return jo().indexOf(t)!=-1}function Cl(t){return Cl[" "](t),t}Cl[" "]=ao;function WE(t){var e=QE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var zE=Ut("Opera"),xs=Ut("Trident")||Ut("MSIE"),bp=Ut("Edge"),yc=bp||xs,Tp=Ut("Gecko")&&!(jo().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),GE=jo().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function Sp(){var t=z.document;return t?t.documentMode:void 0}var lo;e:{var Pa="",xa=function(){var t=jo();if(Tp)return/rv:([^\);]+)(\)|;)/.exec(t);if(bp)return/Edge\/([\d\.]+)/.exec(t);if(xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(GE)return/WebKit\/(\S+)/.exec(t);if(zE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xa&&(Pa=xa?xa[1]:""),xs){var Ma=Sp();if(Ma!=null&&Ma>parseFloat(Pa)){lo=String(Ma);break e}}lo=Pa}var QE={};function YE(){return WE(function(){let t=0;const e=Th(String(lo)).split("."),n=Th("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Oa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Oa(r[2].length==0,i[2].length==0)||Oa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var vc;if(z.document&&xs){var Sh=Sp();vc=Sh||parseInt(lo,10)||void 0}else vc=void 0;var XE=vc;function Pr(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tp){e:{try{Cl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:JE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pr.X.h.call(this)}}Ye(Pr,nt);var JE={2:"touch",3:"pen",4:"mouse"};Pr.prototype.h=function(){Pr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zr="closure_listenable_"+(1e6*Math.random()|0),ZE=0;function e0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++ZE,this.ba=this.ea=!1}function qo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Al(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Cp(t){const e={};for(const n in t)e[n]=t[n];return e}const Ch="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ap(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ch.length;i++)n=Ch[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ho(t){this.src=t,this.g={},this.h=0}Ho.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=_c(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new e0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function wc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ip(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(qo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _c(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var kl="closure_lm_"+(1e6*Math.random()|0),La={};function kp(t,e,n,s,r){if(s&&s.once)return Np(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)kp(t,e[i],n,s,r);return null}return n=Dl(n),t&&t[Zr]?t.N(e,n,Jr(s)?!!s.capture:!!s,r):Rp(t,e,n,!1,s,r)}function Rp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Jr(r)?!!r.capture:!!r,a=Nl(t);if(a||(t[kl]=a=new Ho(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=t0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)KE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Op(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function t0(){function t(n){return e.call(t.src,t.listener,n)}const e=n0;return t}function Np(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Np(t,e[i],n,s,r);return null}return n=Dl(n),t&&t[Zr]?t.O(e,n,Jr(s)?!!s.capture:!!s,r):Rp(t,e,n,!0,s,r)}function Dp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Dp(t,e[i],n,s,r);else s=Jr(s)?!!s.capture:!!s,n=Dl(n),t&&t[Zr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=_c(i,n,s,r),-1<n&&(qo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_c(e,n,s,r)),(n=-1<t?e[t]:null)&&Rl(n))}function Rl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Zr])wc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Op(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Nl(e))?(wc(n,t),n.h==0&&(n.src=null,e[kl]=null)):qo(t)}}}function Op(t){return t in La?La[t]:La[t]="on"+t}function n0(t,e){if(t.ba)t=!0;else{e=new Pr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Rl(t),t=n.call(s,e)}return t}function Nl(t){return t=t[kl],t instanceof Ho?t:null}var Ua="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dl(t){return typeof t=="function"?t:(t[Ua]||(t[Ua]=function(e){return t.handleEvent(e)}),t[Ua])}function We(){Nn.call(this),this.i=new Ho(this),this.P=this,this.I=null}Ye(We,Nn);We.prototype[Zr]=!0;We.prototype.removeEventListener=function(t,e,n,s){Dp(this,t,e,n,s)};function Qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var r=e;e=new nt(s,t),Ap(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ni(o,s,!0,e)&&r}if(o=e.g=t,r=Ni(o,s,!0,e)&&r,r=Ni(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ni(o,s,!1,e)&&r}We.prototype.M=function(){if(We.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)qo(n[s]);delete t.g[e],t.h--}}this.I=null};We.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};We.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ni(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&wc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ol=z.JSON.stringify;function s0(){var t=Mp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class r0{constructor(){this.h=this.g=null}add(e,n){const s=Pp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Pp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new i0,t=>t.reset());class i0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function o0(t){z.setTimeout(()=>{throw t},0)}function xp(t,e){Ec||a0(),Ic||(Ec(),Ic=!0),Mp.add(t,e)}var Ec;function a0(){var t=z.Promise.resolve(void 0);Ec=function(){t.then(c0)}}var Ic=!1,Mp=new r0;function c0(){for(var t;t=s0();){try{t.h.call(t.g)}catch(n){o0(n)}var e=Pp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ic=!1}function Ko(t,e){We.call(this),this.h=t||1,this.g=e||z,this.j=tt(this.lb,this),this.l=Date.now()}Ye(Ko,We);U=Ko.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Qe(this,"tick"),this.ca&&(Pl(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Ko.X.M.call(this),Pl(this),delete this.g};function xl(t,e,n){if(typeof t=="function")n&&(t=tt(t,n));else if(t&&typeof t.handleEvent=="function")t=tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Lp(t){t.g=xl(()=>{t.g=null,t.i&&(t.i=!1,Lp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class l0 extends Nn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lp(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xr(t){Nn.call(this),this.h=t,this.g={}}Ye(xr,Nn);var Ah=[];function Up(t,e,n,s){Array.isArray(n)||(n&&(Ah[0]=n.toString()),n=Ah);for(var r=0;r<n.length;r++){var i=kp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Fp(t){Al(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rl(e)},t),t.g={}}xr.prototype.M=function(){xr.X.M.call(this),Fp(this)};xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wo(){this.g=!0}Wo.prototype.Aa=function(){this.g=!1};function u0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function h0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Es(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+f0(t,n)+(s?" "+s:"")})}function d0(t,e){t.info(function(){return"TIMEOUT: "+e})}Wo.prototype.info=function(){};function f0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ol(n)}catch{return e}}var os={},kh=null;function zo(){return kh=kh||new We}os.Pa="serverreachability";function Vp(t){nt.call(this,os.Pa,t)}Ye(Vp,nt);function Mr(t){const e=zo();Qe(e,new Vp(e))}os.STAT_EVENT="statevent";function $p(t,e){nt.call(this,os.STAT_EVENT,t),this.stat=e}Ye($p,nt);function ct(t){const e=zo();Qe(e,new $p(e,t))}os.Qa="timingevent";function Bp(t,e){nt.call(this,os.Qa,t),this.size=e}Ye(Bp,nt);function ei(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Go={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},jp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ml(){}Ml.prototype.h=null;function Rh(t){return t.h||(t.h=t.i())}function qp(){}var ti={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ll(){nt.call(this,"d")}Ye(Ll,nt);function Ul(){nt.call(this,"c")}Ye(Ul,nt);var bc;function Qo(){}Ye(Qo,Ml);Qo.prototype.g=function(){return new XMLHttpRequest};Qo.prototype.i=function(){return{}};bc=new Qo;function ni(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new xr(this),this.O=p0,t=yc?125:void 0,this.T=new Ko(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Hp}function Hp(){this.i=null,this.g="",this.h=!1}var p0=45e3,Tc={},uo={};U=ni.prototype;U.setTimeout=function(t){this.O=t};function Sc(t,e,n){t.K=1,t.v=Xo(Jt(e)),t.s=n,t.P=!0,Kp(t,null)}function Kp(t,e){t.F=Date.now(),si(t),t.A=Jt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Zp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Hp,t.g=_g(t.l,n?e:null,!t.s),0<t.N&&(t.L=new l0(tt(t.La,t,t.g),t.N)),Up(t.S,t.g,"readystatechange",t.ib),e=t.H?Cp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Mr(),u0(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&Wt(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const u=Wt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||yc||this.g&&(this.h.h||this.g.fa()||Ph(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Mr(3):Mr(2)),Yo(this);var n=this.g.aa();this.Y=n;t:if(Wp(this)){var s=Ph(this.g);t="";var r=s.length,i=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){jn(this),_r(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,h0(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!co(a)){var l=a;break t}}l=null}if(n=l)Es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Cc(this,n);else{this.i=!1,this.o=3,ct(12),jn(this),_r(this);break e}}this.P?(zp(this,u,o),yc&&this.i&&u==3&&(Up(this.S,this.T,"tick",this.hb),this.T.start())):(Es(this.j,this.m,o,null),Cc(this,o)),u==4&&jn(this),this.i&&!this.I&&(u==4?mg(this.l,this):(this.i=!1,si(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),jn(this),_r(this)}}}catch{}finally{}};function Wp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function zp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=g0(t,n),r==uo){e==4&&(t.o=4,ct(14),s=!1),Es(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Tc){t.o=4,ct(15),Es(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Es(t.j,t.m,r,null),Cc(t,r);Wp(t)&&r!=uo&&r!=Tc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hl(e),e.K=!0,ct(11))):(Es(t.j,t.m,n,"[Invalid Chunked Response]"),jn(t),_r(t))}U.hb=function(){if(this.g){var t=Wt(this.g),e=this.g.fa();this.C<e.length&&(Yo(this),zp(this,t,e),this.i&&t!=4&&si(this))}};function g0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?uo:(n=Number(e.substring(n,s)),isNaN(n)?Tc:(s+=1,s+n>e.length?uo:(e=e.substr(s,n),t.C=s+n,e)))}U.cancel=function(){this.I=!0,jn(this)};function si(t){t.V=Date.now()+t.O,Gp(t,t.O)}function Gp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ei(tt(t.gb,t),e)}function Yo(t){t.B&&(z.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(d0(this.j,this.A),this.K!=2&&(Mr(),ct(17)),jn(this),this.o=2,_r(this)):Gp(this,this.V-t)};function _r(t){t.l.G==0||t.I||mg(t.l,t)}function jn(t){Yo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Pl(t.T),Fp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Cc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ac(n.h,t))){if(!t.J&&Ac(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)po(n),ea(n);else break e;ql(n),ct(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ei(tt(n.cb,n),6e3));if(1>=ng(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else qn(n,11)}else if((t.J||n.g==t)&&po(n),!co(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Fl(i,i.h),i.h=null))}if(s.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,Ce(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=wg(s,s.H?s.ka:null,s.V),o.J){sg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Yo(a),si(a)),s.g=o}else pg(s);0<n.i.length&&ta(n)}else l[0]!="stop"&&l[0]!="close"||qn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?qn(n,7):jl(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Mr(4)}catch{}}function m0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function y0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(Bo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Qp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=y0(t),s=m0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Yp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function v0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Qn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qn){this.h=e!==void 0?e:t.h,ho(this,t.j),this.s=t.s,this.g=t.g,fo(this,t.m),this.l=t.l,e=t.i;var n=new Lr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Nh(this,n),this.o=t.o}else t&&(n=String(t).match(Yp))?(this.h=!!e,ho(this,n[1]||"",!0),this.s=ur(n[2]||""),this.g=ur(n[3]||"",!0),fo(this,n[4]),this.l=ur(n[5]||"",!0),Nh(this,n[6]||"",!0),this.o=ur(n[7]||"")):(this.h=!!e,this.i=new Lr(null,this.h))}Qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hr(e,Dh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hr(e,Dh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(hr(n,n.charAt(0)=="/"?E0:_0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hr(n,b0)),t.join("")};function Jt(t){return new Qn(t)}function ho(t,e,n){t.j=n?ur(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function fo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Nh(t,e,n){e instanceof Lr?(t.i=e,T0(t.i,t.h)):(n||(e=hr(e,I0)),t.i=new Lr(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Xo(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ur(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,w0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function w0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Dh=/[#\/\?@]/g,_0=/[#\?:]/g,E0=/[#\?]/g,I0=/[#\?@]/g,b0=/#/g;function Lr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Dn(t){t.g||(t.g=new Map,t.h=0,t.i&&v0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Lr.prototype;U.add=function(t,e){Dn(this),this.i=null,t=Gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xp(t,e){Dn(t),e=Gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jp(t,e){return Dn(t),e=Gs(t,e),t.g.has(e)}U.forEach=function(t,e){Dn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};U.oa=function(){Dn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};U.W=function(t){Dn(this);let e=[];if(typeof t=="string")Jp(this,t)&&(e=e.concat(this.g.get(Gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Dn(this),this.i=null,t=Gs(this,t),Jp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Zp(t,e,n){Xp(t,e),0<n.length&&(t.i=null,t.g.set(Gs(t,e),Sl(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function T0(t,e){e&&!t.j&&(Dn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Xp(this,s),Zp(this,r,n))},t)),t.j=e}var S0=class{constructor(t,e){this.h=t,this.g=e}};function eg(t){this.l=t||C0,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var C0=10;function tg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ng(t){return t.h?1:t.g?t.g.size:0}function Ac(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fl(t,e){t.g?t.g.add(e):t.h=e}function sg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}eg.prototype.cancel=function(){if(this.i=rg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Sl(t.i)}function Vl(){}Vl.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Vl.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function A0(){this.g=new Vl}function k0(t,e,n){const s=n||"";try{Qp(t,function(r,i){let o=r;Jr(r)&&(o=Ol(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function R0(t,e){const n=new Wo;if(z.Image){const s=new Image;s.onload=Ri(Di,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ri(Di,n,s,"TestLoadImage: error",!1,e),s.onabort=Ri(Di,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ri(Di,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Di(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ri(t){this.l=t.ac||null,this.j=t.jb||!1}Ye(ri,Ml);ri.prototype.g=function(){return new Jo(this.l,this.j)};ri.prototype.i=function(t){return function(){return t}}({});function Jo(t,e){We.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=$l,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(Jo,We);var $l=0;U=Jo.prototype;U.open=function(t,e){if(this.readyState!=$l)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ur(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ii(this)),this.readyState=$l};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ur(this)),this.g&&(this.readyState=3,Ur(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ig(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ig(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ii(this):Ur(this),this.readyState==3&&ig(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,ii(this))};U.Ua=function(t){this.g&&(this.response=t,ii(this))};U.ga=function(){this.g&&ii(this)};function ii(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ur(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ur(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var N0=z.JSON.parse;function Ne(t){We.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=og,this.K=this.L=!1}Ye(Ne,We);var og="",D0=/^https?$/i,O0=["POST","PUT"];U=Ne.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bc.g(),this.C=this.u?Rh(this.u):Rh(bc),this.g.onreadystatechange=tt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Oh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=Ip(O0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lg(this),0<this.B&&((this.K=P0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.qa,this)):this.A=xl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Oh(this,i)}};function P0(t){return xs&&YE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof Tl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Oh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ag(t),Zo(t)}function ag(t){t.D||(t.D=!0,Qe(t,"complete"),Qe(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Zo(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zo(this,!0)),Ne.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?cg(this):this.fb())};U.fb=function(){cg(this)};function cg(t){if(t.h&&typeof Tl!="undefined"&&(!t.C[1]||Wt(t)!=4||t.aa()!=2)){if(t.v&&Wt(t)==4)xl(t.Ha,0,t);else if(Qe(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Yp)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!D0.test(r?r.toLowerCase():"")}n=s}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<Wt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ag(t)}}finally{Zo(t)}}}}function Zo(t,e){if(t.g){lg(t);const n=t.g,s=t.C[0]?ao:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function lg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Wt(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),N0(e)}};function Ph(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case og:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ug(t){let e="";return Al(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Bl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ug(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function sr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hg(t){this.Ca=0,this.i=[],this.j=new Wo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=sr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=sr("baseRetryDelayMs",5e3,t),this.bb=sr("retryDelaySeedMs",1e4,t),this.$a=sr("forwardChannelMaxRetries",2,t),this.ta=sr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new eg(t&&t.concurrentRequestLimit),this.Fa=new A0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=hg.prototype;U.ma=8;U.G=1;function jl(t){if(dg(t),t.G==3){var e=t.U++,n=Jt(t.F);Ce(n,"SID",t.I),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),oi(t,n),e=new ni(t,t.j,e,void 0),e.K=2,e.v=Xo(Jt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=_g(e.l,null),e.g.da(e.v)),e.F=Date.now(),si(e)}vg(t)}function ea(t){t.g&&(Hl(t),t.g.cancel(),t.g=null)}function dg(t){ea(t),t.u&&(z.clearTimeout(t.u),t.u=null),po(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function ta(t){tg(t.h)||t.m||(t.m=!0,xp(t.Ja,t),t.C=0)}function x0(t,e){return ng(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ei(tt(t.Ja,t,e),yg(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ni(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Cp(i),Ap(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fg(this,r,e),n=Jt(this.F),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),oi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(ug(i)))+"&"+e:this.o&&Bl(n,this.o,i)),Fl(this.h,r),this.Ya&&Ce(n,"TYPE","init"),this.O?(Ce(n,"$req",e),Ce(n,"SID","null"),r.Z=!0,Sc(r,n,null)):Sc(r,n,e),this.G=2}}else this.G==3&&(t?xh(this,t):this.i.length==0||tg(this.h)||xh(this))};function xh(t,e){var n;e?n=e.m:n=t.U++;const s=Jt(t.F);Ce(s,"SID",t.I),Ce(s,"RID",n),Ce(s,"AID",t.T),oi(t,s),t.o&&t.s&&Bl(s,t.o,t.s),n=new ni(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=fg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Fl(t.h,n),Sc(n,s,e)}function oi(t,e){t.ia&&Al(t.ia,function(n,s){Ce(e,s,n)}),t.l&&Qp({},function(n,s){Ce(e,s,n)})}function fg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?tt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{k0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function pg(t){t.g||t.u||(t.Z=1,xp(t.Ia,t),t.A=0)}function ql(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ei(tt(t.Ia,t),yg(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,gg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ei(tt(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ct(10),ea(this),gg(this))};function Hl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function gg(t){t.g=new ni(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Jt(t.sa);Ce(e,"RID","rpc"),Ce(e,"SID",t.I),Ce(e,"CI",t.L?"0":"1"),Ce(e,"AID",t.T),Ce(e,"TYPE","xmlhttp"),oi(t,e),t.o&&t.s&&Bl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Xo(Jt(e)),n.s=null,n.P=!0,Kp(n,t)}U.cb=function(){this.v!=null&&(this.v=null,ea(this),ql(this),ct(19))};function po(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function mg(t,e){var n=null;if(t.g==e){po(t),Hl(t),t.g=null;var s=2}else if(Ac(t.h,e))n=e.D,sg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=zo(),Qe(s,new Bp(s,n)),ta(t)}else pg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&x0(t,e)||s==2&&ql(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:qn(t,5);break;case 4:qn(t,10);break;case 3:qn(t,6);break;default:qn(t,2)}}}function yg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function qn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=tt(t.kb,t);n||(n=new Qn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||ho(n,"https"),Xo(n)),R0(n.toString(),s)}else ct(2);t.G=0,t.l&&t.l.va(e),vg(t),dg(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function vg(t){if(t.G=0,t.la=[],t.l){const e=rg(t.h);(e.length!=0||t.i.length!=0)&&(bh(t.la,e),bh(t.la,t.i),t.h.i.length=0,Sl(t.i),t.i.length=0),t.l.ua()}}function wg(t,e,n){var s=n instanceof Qn?Jt(n):new Qn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),fo(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Qn(null,void 0);s&&ho(i,s),e&&(i.g=e),r&&fo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ce(s,n,e),Ce(s,"VER",t.ma),oi(t,s),s}function _g(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ne(new ri({jb:!0})):new Ne(t.ra),e.Ka(t.H),e}function Eg(){}U=Eg.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function go(){if(xs&&!(10<=Number(XE)))throw Error("Environmental error: no available transport.")}go.prototype.g=function(t,e){return new vt(t,e)};function vt(t,e){We.call(this),this.g=new hg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!co(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!co(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qs(this)}Ye(vt,We);vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=wg(t,null,t.V),ta(t)};vt.prototype.close=function(){jl(this.g)};vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ol(t),t=n);e.i.push(new S0(e.ab++,t)),e.G==3&&ta(e)};vt.prototype.M=function(){this.g.l=null,delete this.j,jl(this.g),delete this.g,vt.X.M.call(this)};function Ig(t){Ll.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(Ig,Ll);function bg(){Ul.call(this),this.status=1}Ye(bg,Ul);function Qs(t){this.g=t}Ye(Qs,Eg);Qs.prototype.xa=function(){Qe(this.g,"a")};Qs.prototype.wa=function(t){Qe(this.g,new Ig(t))};Qs.prototype.va=function(t){Qe(this.g,new bg)};Qs.prototype.ua=function(){Qe(this.g,"b")};go.prototype.createWebChannel=go.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;Go.NO_ERROR=0;Go.TIMEOUT=8;Go.HTTP_ERROR=6;jp.COMPLETE="complete";qp.EventType=ti;ti.OPEN="a";ti.CLOSE="b";ti.ERROR="c";ti.MESSAGE="d";We.prototype.listen=We.prototype.N;Ne.prototype.listenOnce=Ne.prototype.O;Ne.prototype.getLastError=Ne.prototype.Oa;Ne.prototype.getLastErrorCode=Ne.prototype.Ea;Ne.prototype.getStatus=Ne.prototype.aa;Ne.prototype.getResponseJson=Ne.prototype.Sa;Ne.prototype.getResponseText=Ne.prototype.fa;Ne.prototype.send=Ne.prototype.da;Ne.prototype.setWithCredentials=Ne.prototype.Ka;var M0=function(){return new go},L0=function(){return zo()},Fa=Go,U0=jp,F0=os,Mh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},V0=ri,Oi=qp,$0=Ne;const Lh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new El("@firebase/firestore");function Uh(){return ns.logLevel}function V(t,...e){if(ns.logLevel<=he.DEBUG){const n=e.map(Kl);ns.debug(`Firestore (${Ys}): ${t}`,...n)}}function Zt(t,...e){if(ns.logLevel<=he.ERROR){const n=e.map(Kl);ns.error(`Firestore (${Ys}): ${t}`,...n)}}function kc(t,...e){if(ns.logLevel<=he.WARN){const n=e.map(Kl);ns.warn(`Firestore (${Ys}): ${t}`,...n)}}function Kl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: `+t;throw Zt(e),new Error(e)}function Ee(t,e){t||K()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class j0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class q0{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ee(typeof s.accessToken=="string"),new Tg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Xe(e)}}class H0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ee(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class K0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new H0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class W0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.A=n.token,new W0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=G0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function de(t,e){return t<e?-1:t>e?1:0}function Ms(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Fe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Fe(0,0))}static max(){return new J(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Fr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends Fr{construct(e,n,s){return new be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new x(w.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new be(n)}static emptyPath(){return new be([])}}const Q0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Fr{construct(e,n,s){return new et(e,n,s)}static isValidIdentifier(e){return Q0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new x(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new x(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(be.fromString(e))}static fromName(e){return new B(be.fromString(e).popFirst(5))}static empty(){return new B(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new be(e.slice()))}}function Y0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new Fe(n+1,0):new Fe(n,s));return new An(r,B.empty(),e)}function X0(t){return new An(t.readTime,t.key,-1)}class An{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new An(J.min(),B.empty(),-1)}static max(){return new An(J.max(),B.empty(),-1)}}function J0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==Z0)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ci(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Wl.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Vr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){return t==null}function mo(t){return t===0&&1/t==-1/0}function nI(t){return typeof t=="number"&&Number.isInteger(t)&&!mo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new it(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const sI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=sI.exec(t);if(Ee(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ls(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kg(t){const e=t.mapValue.fields.__previous_value__;return Ag(e)?kg(e):e}function $r(t){const e=kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ag(t)?4:rI(t)?9007199254740991:10:K()}function qt(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $r(t).isEqual($r(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=kn(s.timestampValue),o=kn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ls(s.bytesValue).isEqual(Ls(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Pe(s.geoPointValue.latitude)===Pe(r.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Pe(s.integerValue)===Pe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Pe(s.doubleValue),o=Pe(r.doubleValue);return i===o?mo(i)===mo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ms(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Fh(i)!==Fh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!qt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Br(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function Us(t,e){if(t===e)return 0;const n=ss(t),s=ss(e);if(n!==s)return de(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Pe(r.integerValue||r.doubleValue),a=Pe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Vh(t.timestampValue,e.timestampValue);case 4:return Vh($r(t),$r(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ls(r),a=Ls(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=de(o[c],a[c]);if(l!==0)return l}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=de(Pe(r.latitude),Pe(i.latitude));return o!==0?o:de(Pe(r.longitude),Pe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Us(o[c],a[c]);if(l)return l}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Pi.mapValue&&i===Pi.mapValue)return 0;if(r===Pi.mapValue)return 1;if(i===Pi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=de(a[u],l[u]);if(h!==0)return h;const d=Us(o[a[u]],c[l[u]]);if(d!==0)return d}return de(a.length,l.length)}(t.mapValue,e.mapValue);default:throw K()}}function Vh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=kn(t),s=kn(e),r=de(n.seconds,s.seconds);return r!==0?r:de(n.nanos,s.nanos)}function Fs(t){return Rc(t)}function Rc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=kn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ls(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Rc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Rc(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function $h(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nc(t){return!!t&&"integerValue"in t}function zl(t){return!!t&&"arrayValue"in t}function Bh(t){return!!t&&"nullValue"in t}function jh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ji(t){return!!t&&"mapValue"in t}function Er(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Er(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Er(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.position=e,this.inclusive=n}}function qh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=Us(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Hh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{}class Me extends Rg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new oI(e,n,s):n==="array-contains"?new lI(e,s):n==="in"?new uI(e,s):n==="not-in"?new hI(e,s):n==="array-contains-any"?new dI(e,s):new Me(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new aI(e,s):new cI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Us(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(Us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nt extends Rg{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Nt(e,n)}matches(e){return Ng(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ng(t){return t.op==="and"}function Dg(t){return iI(t)&&Ng(t)}function iI(t){for(const e of t.filters)if(e instanceof Nt)return!1;return!0}function Dc(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Fs(t.value);if(Dg(t))return t.filters.map(e=>Dc(e)).join(",");{const e=t.filters.map(n=>Dc(n)).join(",");return`${t.op}(${e})`}}function Og(t,e){return t instanceof Me?function(n,s){return s instanceof Me&&n.op===s.op&&n.field.isEqual(s.field)&&qt(n.value,s.value)}(t,e):t instanceof Nt?function(n,s){return s instanceof Nt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Og(i,s.filters[o]),!0):!1}(t,e):void K()}function Pg(t){return t instanceof Me?function(e){return`${e.field.canonicalString()} ${e.op} ${Fs(e.value)}`}(t):t instanceof Nt?function(e){return e.op.toString()+" {"+e.getFilters().map(Pg).join(" ,")+"}"}(t):"Filter"}class oI extends Me{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class aI extends Me{constructor(e,n){super(e,"in",n),this.keys=xg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cI extends Me{constructor(e,n){super(e,"not-in",n),this.keys=xg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class lI extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zl(n)&&Br(n.arrayValue,this.value)}}class uI extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Br(this.value.arrayValue,n)}}class hI extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Br(this.value.arrayValue,n)}}class dI extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Br(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n="asc"){this.field=e,this.dir=n}}function fI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xi(this.root,e,this.comparator,!0)}}class xi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ge.RED,this.left=r!=null?r:Ge.EMPTY,this.right=i!=null?i:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ge(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Kh(this.data.getIterator())}getIteratorFrom(e){return new Kh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Kh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new gt([])}unionWith(e){let n=new Ve(et.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ms(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ji(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Er(n)}setAll(e){let n=et.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Er(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ji(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ji(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){as(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ut(Er(this.value))}}function Mg(t){const e=[];return as(t.fields,(n,s)=>{const r=new et([n]);if(ji(s)){const i=Mg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Je(e,0,J.min(),J.min(),J.min(),ut.empty(),0)}static newFoundDocument(e,n,s,r){return new Je(e,1,n,J.min(),s,r,0)}static newNoDocument(e,n){return new Je(e,2,n,J.min(),J.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,J.min(),J.min(),ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Wh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new pI(t,e,n,s,r,i,o)}function Gl(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Dc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),na(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fs(s)).join(",")),e.ft=n}return e.ft}function Ql(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Og(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hh(t.startAt,e.startAt)&&Hh(t.endAt,e.endAt)}function Oc(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function gI(t,e,n,s,r,i,o,a){return new Xs(t,e,n,s,r,i,o,a)}function Yl(t){return new Xs(t)}function zh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sa(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Lg(t){return t.collectionGroup!==null}function Cs(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=sa(e),s=Xl(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Ss(n)),e.dt.push(new Ss(et.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ss(et.keyField(),i))}}}return e.dt}function en(t){const e=Z(t);if(!e._t)if(e.limitType==="F")e._t=Wh(e.path,e.collectionGroup,Cs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Cs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ss(i.field,o))}const s=e.endAt?new yo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new yo(e.startAt.position,e.startAt.inclusive):null;e._t=Wh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Pc(t,e){e.getFirstInequalityField(),sa(t);const n=t.filters.concat([e]);return new Xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xc(t,e,n){return new Xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ra(t,e){return Ql(en(t),en(e))&&t.limitType===e.limitType}function Ug(t){return`${Gl(en(t))}|lt:${t.limitType}`}function Mc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Pg(s)).join(", ")}]`),na(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fs(s)).join(",")),`Target(${n})`}(en(t))}; limitType=${t.limitType})`}function Jl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Cs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=qh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Cs(n),s)||n.endAt&&!function(r,i,o){const a=qh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Cs(n),s))}(t,e)}function mI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fg(t){return(e,n)=>{let s=!1;for(const r of Cs(t)){const i=yI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function yI(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Us(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mo(e)?"-0":e}}function $g(t){return{integerValue:""+t}}function vI(t,e){return nI(e)?$g(e):Vg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this._=void 0}}function wI(t,e,n){return t instanceof vo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof jr?jg(t,e):t instanceof qr?qg(t,e):function(s,r){const i=Bg(s,r),o=Gh(i)+Gh(s.gt);return Nc(i)&&Nc(s.gt)?$g(o):Vg(s.yt,o)}(t,e)}function _I(t,e,n){return t instanceof jr?jg(t,e):t instanceof qr?qg(t,e):n}function Bg(t,e){return t instanceof wo?Nc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class vo extends ia{}class jr extends ia{constructor(e){super(),this.elements=e}}function jg(t,e){const n=Hg(e);for(const s of t.elements)n.some(r=>qt(r,s))||n.push(s);return{arrayValue:{values:n}}}class qr extends ia{constructor(e){super(),this.elements=e}}function qg(t,e){let n=Hg(e);for(const s of t.elements)n=n.filter(r=>!qt(r,s));return{arrayValue:{values:n}}}class wo extends ia{constructor(e,n){super(),this.yt=e,this.gt=n}}function Gh(t){return Pe(t.integerValue||t.doubleValue)}function Hg(t){return zl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function EI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof jr&&s instanceof jr||n instanceof qr&&s instanceof qr?Ms(n.elements,s.elements,qt):n instanceof wo&&s instanceof wo?qt(n.gt,s.gt):n instanceof vo&&s instanceof vo}(t.transform,e.transform)}class II{constructor(e,n){this.version=e,this.transformResults=n}}class kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oa{}function Kg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zl(t.key,kt.none()):new li(t.key,t.data,kt.none());{const n=t.data,s=ut.empty();let r=new Ve(et.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new On(t.key,s,new gt(r.toArray()),kt.none())}}function bI(t,e,n){t instanceof li?function(s,r,i){const o=s.value.clone(),a=Yh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof On?function(s,r,i){if(!qi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Yh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Wg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ir(t,e,n,s){return t instanceof li?function(r,i,o,a){if(!qi(r.precondition,i))return o;const c=r.value.clone(),l=Xh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof On?function(r,i,o,a){if(!qi(r.precondition,i))return o;const c=Xh(r.fieldTransforms,a,i),l=i.data;return l.setAll(Wg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return qi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function TI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Bg(s.transform,r||null);i!=null&&(n===null&&(n=ut.empty()),n.set(s.field,i))}return n||null}function Qh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ms(n,s,(r,i)=>EI(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class li extends oa{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class On extends oa{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Yh(t,e,n){const s=new Map;Ee(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,_I(o,a,n[r]))}return s}function Xh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,wI(i,o,e))}return s}class Zl extends oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SI extends oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,ae;function AI(t){switch(t){default:return K();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function zg(t){if(t===void 0)return Zt("GRPC error has no .code"),w.UNKNOWN;switch(t){case Oe.OK:return w.OK;case Oe.CANCELLED:return w.CANCELLED;case Oe.UNKNOWN:return w.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return w.INTERNAL;case Oe.UNAVAILABLE:return w.UNAVAILABLE;case Oe.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Oe.NOT_FOUND:return w.NOT_FOUND;case Oe.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Oe.ABORTED:return w.ABORTED;case Oe.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Oe.DATA_LOSS:return w.DATA_LOSS;default:return K()}}(ae=Oe||(Oe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Cg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new je(B.comparator);function tn(){return kI}const Gg=new je(B.comparator);function dr(...t){let e=Gg;for(const n of t)e=e.insert(n.key,n);return e}function Qg(t){let e=Gg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Hn(){return br()}function Yg(){return br()}function br(){return new Js(t=>t.toString(),(t,e)=>t.isEqual(e))}const RI=new je(B.comparator),NI=new Ve(B.comparator);function re(...t){let e=NI;for(const n of t)e=e.add(n);return e}const DI=new Ve(de);function Xg(){return DI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ui.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new aa(J.min(),r,Xg(),tn(),re())}}class ui{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ui(s,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Jg{constructor(e,n){this.targetId=e,this.Et=n}}class Zg{constructor(e,n,s=it.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Jh{constructor(){this.At=0,this.Rt=ed(),this.bt=it.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=re(),n=re(),s=re();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new ui(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=ed()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class OI{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=tn(),this.qt=Zh(),this.Ut=new Ve(de)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Oc(i))if(s===0){const o=new B(i.path);this.Qt(n,o,Je.newNoDocument(o,J.min()))}else Ee(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Oc(a.target)){const c=new B(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Je.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=re();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new aa(e,n,this.Ut,this.Lt,s);return this.Lt=tn(),this.qt=Zh(),this.Ut=new Ve(de),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Jh,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ve(de),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Jh),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Zh(){return new je(B.comparator)}function ed(){return new je(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),MI=(()=>({and:"AND",or:"OR"}))();class LI{constructor(e,n){this.databaseId=e,this.wt=n}}function _o(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function em(t,e){return t.wt?e.toBase64():e.toUint8Array()}function UI(t,e){return _o(t,e.toTimestamp())}function Vt(t){return Ee(!!t),J.fromTimestamp(function(e){const n=kn(e);return new Fe(n.seconds,n.nanos)}(t))}function eu(t,e){return function(n){return new be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function tm(t){const e=be.fromString(t);return Ee(im(e)),e}function Lc(t,e){return eu(t.databaseId,e.path)}function Va(t,e){const n=tm(e);if(n.get(1)!==t.databaseId.projectId)throw new x(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(nm(n))}function Uc(t,e){return eu(t.databaseId,e)}function FI(t){const e=tm(t);return e.length===4?be.emptyPath():nm(e)}function Fc(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nm(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function td(t,e,n){return{name:Lc(t,e),fields:n.value.mapValue.fields}}function VI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(Ee(l===void 0||typeof l=="string"),it.fromBase64String(l||"")):(Ee(l===void 0||l instanceof Uint8Array),it.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?w.UNKNOWN:zg(c.code);return new x(l,c.message||"")}(o);n=new Zg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Va(t,s.document.name),i=Vt(s.document.updateTime),o=s.document.createTime?Vt(s.document.createTime):J.min(),a=new ut({mapValue:{fields:s.document.fields}}),c=Je.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Hi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Va(t,s.document),i=s.readTime?Vt(s.readTime):J.min(),o=Je.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Va(t,s.document),i=s.removedTargetIds||[];n=new Hi([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new CI(r),o=s.targetId;n=new Jg(o,i)}}return n}function $I(t,e){let n;if(e instanceof li)n={update:td(t,e.key,e.value)};else if(e instanceof Zl)n={delete:Lc(t,e.key)};else if(e instanceof On)n={update:td(t,e.key,e.data),updateMask:QI(e.fieldMask)};else{if(!(e instanceof SI))return K();n={verify:Lc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof vo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof jr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof qr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wo)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:UI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function BI(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Vt(s.updateTime):Vt(r);return i.isEqual(J.min())&&(i=Vt(r)),new II(i,s.transformResults||[])}(n,e))):[]}function jI(t,e){return{documents:[Uc(t,e.path)]}}function qI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Uc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Uc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return rm(Nt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:vs(u.field),direction:WI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||na(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function HI(t){let e=FI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ee(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=sm(u);return h instanceof Nt&&Dg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ss(ws(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,na(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new yo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new yo(d,h)}(n.endAt)),gI(e,r,o,i,a,"F",c,l)}function KI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function sm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ws(e.unaryFilter.field);return Me.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ws(e.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ws(e.unaryFilter.field);return Me.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ws(e.unaryFilter.field);return Me.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return Me.create(ws(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Nt.create(e.compositeFilter.filters.map(n=>sm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function WI(t){return PI[t]}function zI(t){return xI[t]}function GI(t){return MI[t]}function vs(t){return{fieldPath:t.canonicalString()}}function ws(t){return et.fromServerFormat(t.fieldPath)}function rm(t){return t instanceof Me?function(e){if(e.op==="=="){if(jh(e.value))return{unaryFilter:{field:vs(e.field),op:"IS_NAN"}};if(Bh(e.value))return{unaryFilter:{field:vs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jh(e.value))return{unaryFilter:{field:vs(e.field),op:"IS_NOT_NAN"}};if(Bh(e.value))return{unaryFilter:{field:vs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(e.field),op:zI(e.op),value:e.value}}}(t):t instanceof Nt?function(e){const n=e.getFilters().map(s=>rm(s));return n.length===1?n[0]:{compositeFilter:{op:GI(e.op),filters:n}}}(t):K()}function QI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function im(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&bI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ir(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ir(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Yg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Kg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Ms(this.mutations,e.mutations,(n,s)=>Qh(n,s))&&Ms(this.baseMutations,e.baseMutations,(n,s)=>Qh(n,s))}}class tu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ee(e.mutations.length===s.length);let r=RI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new tu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,s,r,i=J.min(),o=J.min(),a=it.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.ie=e}}function ZI(t){const e=HI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.Je=new tb}addToCollectionParentIndex(e,n){return this.Je.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(An.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(An.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class tb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ve(be.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ve(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Vs(0)}static vn(){return new Vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.changes=new Js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ir(s.mutation,r,gt.empty(),Fe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,re()).next(()=>s))}getLocalViewOfDocuments(e,n,s=re()){const r=Hn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=dr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Hn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,re()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=tn();const o=br(),a=br();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof On)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ir(u.mutation,l,u.mutation.getFieldMask(),Fe.now())):o.set(l.key,gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new sb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=br();let r=new je((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||gt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||re()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Yg();u.forEach(d=>{if(!i.has(d)){const p=Kg(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(Hn());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:Qg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(s=>{let r=dr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=dr();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Xs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Je.newInvalidDocument(l)))});let o=dr();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ir(l.mutation,c,gt.empty(),Fe.now()),Jl(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Vt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:ZI(s.bundledQuery),readTime:Vt(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.overlays=new je(B.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Hn();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=Hn(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new je((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Hn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Hn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return S.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new XI(n,s));let i=this.es.get(n);i===void 0&&(i=re(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.ns=new Ve(qe.ss),this.rs=new Ve(qe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new qe(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new qe(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new B(new be([])),s=new qe(n,e),r=new qe(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new B(new be([])),s=new qe(n,e),r=new qe(n,e+1);let i=re();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class qe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return B.comparator(e.key,n.key)||de(e._s,n._s)}static os(e,n){return de(e._s,n._s)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ve(qe.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new qe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new qe(n,0),r=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ve(de);return n.forEach(r=>{const i=new qe(r,0),o=new qe(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),S.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new qe(new B(i),0);let a=new Ve(de);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ee(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return S.forEach(n.mutations,r=>{const i=new qe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new qe(n,0),r=this.gs.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.Es=e,this.docs=new je(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let s=tn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Je.newInvalidDocument(r))}),S.resolve(s)}getAllFromCollection(e,n,s){let r=tn();const i=new B(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||J0(X0(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,n,s,r){K()}As(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new lb(this)}getSize(e){return S.resolve(this.size)}}class lb extends nb{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.persistence=e,this.Rs=new Js(n=>Gl(n),Ql),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Ps=new nu,this.targetCount=0,this.vs=Vs.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Vs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Wl(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ub(this),this.indexManager=new eb,this.remoteDocumentCache=function(s){return new cb(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new JI(n),this.Ns=new ib(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ob,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new ab(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const r=new db(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return S.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class db extends eI{constructor(e){super(),this.currentSequenceNumber=e}}class su{constructor(e){this.persistence=e,this.Fs=new nu,this.$s=null}static Bs(e){return new su(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,s=>{const r=B.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=re(),r=re();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ru(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(zh(n))return S.resolve(null);let s=en(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=xc(n,null,"F"),s=en(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=re(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,xc(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return zh(n)||r.isEqual(J.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Uh()<=he.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mc(n)),this.Bi(e,o,n,Y0(r,-1)))})}Fi(e,n){let s=new Ve(Fg(e));return n.forEach((r,i)=>{Jl(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Uh()<=he.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Mc(n)),this.Ni.getDocumentsMatchingQuery(e,n,An.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new je(de),this.Ui=new Js(i=>Gl(i),Ql),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function gb(t,e,n,s){return new pb(t,e,n,s)}async function om(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=re();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function mb(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(m=>{const v=c.docVersions.get(p);Ee(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=re();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function am(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function yb(t,e){const n=Z(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(it.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(m,v,b){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=tn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(vb(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(J.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function vb(t,e,n){let s=re(),r=re();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function wb(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function _b(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Xn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Vc(t,e,n){const s=Z(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ci(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function nd(t,e,n){const s=Z(t);let r=J.min(),i=re();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Z(a),h=u.Ui.get(l);return h!==void 0?S.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,en(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:re())).next(a=>(Eb(s,mI(e),a),{documents:a,Hi:i})))}function Eb(t,e,n){let s=t.Ki.get(e)||J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class sd{constructor(){this.activeTargetIds=Xg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ib{constructor(){this.Lr=new sd,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new sd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);V("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(V("RestConnection","Received: ",c),c),c=>{throw kc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ys,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=Tb[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new $0;a.setWithCredentials(!0),a.listenOnce(U0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fa.NO_ERROR:const l=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Fa.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new x(w.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const u=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(v)>=0?v:w.UNKNOWN}(d.status);o(new x(p,d.message))}else o(new x(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(w.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=M0(),o=L0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new V0({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");V("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new Sb({Hr:m=>{h?V("Connection","Not sending because WebChannel is closed:",m):(u||(V("Connection","Opening WebChannel transport."),l.open(),u=!0),V("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),p=(m,v,b)=>{m.listen(v,R=>{try{b(R)}catch(P){setTimeout(()=>{throw P},0)}})};return p(l,Oi.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),p(l,Oi.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),d.io())}),p(l,Oi.EventType.ERROR,m=>{h||(h=!0,kc("Connection","WebChannel transport errored:",m),d.io(new x(w.UNAVAILABLE,"The operation could not be completed")))}),p(l,Oi.EventType.MESSAGE,m=>{var v;if(!h){const b=m.data[0];Ee(!!b);const R=b,P=R.error||((v=R[0])===null||v===void 0?void 0:v.error);if(P){V("Connection","WebChannel received error:",P);const X=P.status;let G=function(fe){const M=Oe[fe];if(M!==void 0)return zg(M)}(X),ee=P.message;G===void 0&&(G=w.INTERNAL,ee="Unknown error status: "+X+" with message "+P.message),h=!0,d.io(new x(G,ee)),l.close()}else V("Connection","WebChannel received:",b),d.ro(b)}}),p(o,F0.STAT_EVENT,m=>{m.stat===Mh.PROXY?V("Connection","Detected buffering proxy"):m.stat===Mh.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function $a(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){return new LI(t,!0)}class cm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&V("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new cm(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Zt(n.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new x(w.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ab extends lm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=VI(this.yt,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?Vt(i.readTime):J.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Fc(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Oc(a)?{documents:jI(r,a)}:{query:qI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=em(r,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=_o(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=KI(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Fc(this.yt),n.removeTarget=e,this.Bo(n)}}class kb extends lm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=BI(e.writeResults,e.commitTime),s=Vt(e.commitTime);return this.listener.Zo(s,n)}return Ee(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Fc(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>$I(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new x(w.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(w.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(w.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class Nb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Zt(n),this.ou=!1):V("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{cs(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Z(a);c._u.add(4),await hi(c),c.gu.set("Unknown"),c._u.delete(4),await la(c)}(this))})}),this.gu=new Nb(s,r)}}async function la(t){if(cs(t))for(const e of t.wu)await e(!0)}async function hi(t){for(const e of t.wu)await e(!1)}function um(t,e){const n=Z(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),au(n)?ou(n):Zs(n).ko()&&iu(n,e))}function hm(t,e){const n=Z(t),s=Zs(n);n.du.delete(e),s.ko()&&dm(n,e),n.du.size===0&&(s.ko()?s.Fo():cs(n)&&n.gu.set("Unknown"))}function iu(t,e){t.yu.Ot(e.targetId),Zs(t).zo(e)}function dm(t,e){t.yu.Ot(e),Zs(t).Ho(e)}function ou(t){t.yu=new OI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Zs(t).start(),t.gu.uu()}function au(t){return cs(t)&&!Zs(t).No()&&t.du.size>0}function cs(t){return Z(t)._u.size===0}function fm(t){t.yu=void 0}async function Ob(t){t.du.forEach((e,n)=>{iu(t,e)})}async function Pb(t,e){fm(t),au(t)?(t.gu.hu(e),ou(t)):t.gu.set("Unknown")}async function xb(t,e,n){if(t.gu.set("Online"),e instanceof Zg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Eo(t,s)}else if(e instanceof Hi?t.yu.Kt(e):e instanceof Jg?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(J.min()))try{const s=await am(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(it.EMPTY_BYTE_STRING,c.snapshotVersion)),dm(r,a);const l=new Xn(c.target,a,1,c.sequenceNumber);iu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){V("RemoteStore","Failed to raise snapshot:",s),await Eo(t,s)}}async function Eo(t,e,n){if(!ci(e))throw e;t._u.add(1),await hi(t),t.gu.set("Offline"),n||(n=()=>am(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await la(t)})}function pm(t,e){return e().catch(n=>Eo(t,n,e))}async function ua(t){const e=Z(t),n=Rn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Mb(e);)try{const r=await wb(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,Lb(e,r)}catch(r){await Eo(e,r)}gm(e)&&mm(e)}function Mb(t){return cs(t)&&t.fu.length<10}function Lb(t,e){t.fu.push(e);const n=Rn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function gm(t){return cs(t)&&!Rn(t).No()&&t.fu.length>0}function mm(t){Rn(t).start()}async function Ub(t){Rn(t).eu()}async function Fb(t){const e=Rn(t);for(const n of t.fu)e.Xo(n.mutations)}async function Vb(t,e,n){const s=t.fu.shift(),r=tu.from(s,e,n);await pm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ua(t)}async function $b(t,e){e&&Rn(t).Yo&&await async function(n,s){if(r=s.code,AI(r)&&r!==w.ABORTED){const i=n.fu.shift();Rn(n).Mo(),await pm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ua(n)}var r}(t,e),gm(t)&&mm(t)}async function id(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=cs(n);n._u.add(3),await hi(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await la(n)}async function Bb(t,e){const n=Z(t);e?(n._u.delete(2),await la(n)):e||(n._u.add(2),await hi(n),n.gu.set("Unknown"))}function Zs(t){return t.pu||(t.pu=function(e,n,s){const r=Z(e);return r.su(),new Ab(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Ob.bind(null,t),Zr:Pb.bind(null,t),Wo:xb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),au(t)?ou(t):t.gu.set("Unknown")):(await t.pu.stop(),fm(t))})),t.pu}function Rn(t){return t.Iu||(t.Iu=function(e,n,s){const r=Z(e);return r.su(),new kb(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:Ub.bind(null,t),Zr:$b.bind(null,t),tu:Fb.bind(null,t),Zo:Vb.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await ua(t)):(await t.Iu.stop(),t.fu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new cu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(t,e){if(Zt("AsyncQueue",`${e}: ${t}`),ci(t))return new x(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=dr(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new As(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof As)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new As;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.Tu=new je(B.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):K():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class $s{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $s(e,n,As.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.Au=void 0,this.listeners=[]}}class qb{constructor(){this.queries=new Js(e=>Ug(e),ra),this.onlineState="Unknown",this.Ru=new Set}}async function Hb(t,e){const n=Z(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new jb),r)try{i.Au=await n.onListen(s)}catch(o){const a=lu(o,`Initialization of query '${Mc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&uu(n)}async function Kb(t,e){const n=Z(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Wb(t,e){const n=Z(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&uu(n)}function zb(t,e,n){const s=Z(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function uu(t){t.Ru.forEach(e=>{e.next()})}class Gb{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new $s(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=$s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.key=e}}class vm{constructor(e){this.key=e}}class Qb{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=re(),this.mutatedKeys=re(),this.Gu=Fg(e),this.Qu=new As(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new od,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),p=Jl(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let b=!1;d&&p?d.data.isEqual(p.data)?m!==v&&(s.track({type:3,doc:p}),b=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),b=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),b=!0):d&&!p&&(s.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return p(h)-p(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new $s(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new od,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=re(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new vm(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new ym(s))}),n}tc(e){this.qu=e.Hi,this.Ku=re();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return $s.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Yb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Xb{constructor(e){this.key=e,this.nc=!1}}class Jb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Js(a=>Ug(a),ra),this.rc=new Map,this.oc=new Set,this.uc=new je(B.comparator),this.cc=new Map,this.ac=new nu,this.hc={},this.lc=new Map,this.fc=Vs.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Zb(t,e){const n=lT(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await _b(n.localStore,en(e));n.isPrimaryClient&&um(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await eT(n,e,s,a==="current",o.resumeToken)}return r}async function eT(t,e,n,s,r){t._c=(h,d,p)=>async function(m,v,b,R){let P=v.view.Wu(b);P.$i&&(P=await nd(m.localStore,v.query,!1).then(({documents:ee})=>v.view.Wu(ee,P)));const X=R&&R.targetChanges.get(v.targetId),G=v.view.applyChanges(P,m.isPrimaryClient,X);return cd(m,v.targetId,G.Xu),G.snapshot}(t,h,d,p);const i=await nd(t.localStore,e,!0),o=new Qb(e,i.Hi),a=o.Wu(i.documents),c=ui.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);cd(t,n,l.Xu);const u=new Yb(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function tT(t,e){const n=Z(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!ra(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Vc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),hm(n.remoteStore,s.targetId),$c(n,s.targetId)}).catch(ai)):($c(n,s.targetId),await Vc(n.localStore,s.targetId,!0))}async function nT(t,e,n){const s=uT(t);try{const r=await function(i,o){const a=Z(i),c=Fe.now(),l=o.reduce((d,p)=>d.add(p.key),re());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=tn(),m=re();return a.Gi.getEntries(d,l).next(v=>{p=v,p.forEach((b,R)=>{R.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{u=v;const b=[];for(const R of o){const P=TI(R,u.get(R.key).overlayedDocument);P!=null&&b.push(new On(R.key,P,Mg(P.value.mapValue),kt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(v=>{h=v;const b=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Qg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new je(de)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await di(s,r.changes),await ua(s.remoteStore)}catch(r){const i=lu(r,"Failed to persist write");n.reject(i)}}async function wm(t,e){const n=Z(t);try{const s=await yb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Ee(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Ee(o.nc):r.removedDocuments.size>0&&(Ee(o.nc),o.nc=!1))}),await di(n,s,e)}catch(s){await ai(s)}}function ad(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Z(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&uu(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function sT(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new je(B.comparator);o=o.insert(i,Je.newNoDocument(i,J.min()));const a=re().add(i),c=new aa(J.min(),new Map,new Ve(de),o,a);await wm(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),hu(s)}else await Vc(s.localStore,e,!1).then(()=>$c(s,e,n)).catch(ai)}async function rT(t,e){const n=Z(t),s=e.batch.batchId;try{const r=await mb(n.localStore,e);Em(n,s,null),_m(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await di(n,r)}catch(r){await ai(r)}}async function iT(t,e,n){const s=Z(t);try{const r=await function(i,o){const a=Z(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ee(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Em(s,e,n),_m(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await di(s,r)}catch(r){await ai(r)}}function _m(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Em(t,e,n){const s=Z(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function $c(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Im(t,s)})}function Im(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(hm(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),hu(t))}function cd(t,e,n){for(const s of n)s instanceof ym?(t.ac.addReference(s.key,e),oT(t,s)):s instanceof vm?(V("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Im(t,s.key)):K()}function oT(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(V("SyncEngine","New document in limbo: "+n),t.oc.add(s),hu(t))}function hu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new B(be.fromString(e)),s=t.fc.next();t.cc.set(s,new Xb(n)),t.uc=t.uc.insert(n,s),um(t.remoteStore,new Xn(en(Yl(n.path)),s,2,Wl.at))}}async function di(t,e,n){const s=Z(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=ru.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=Z(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ci(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);l.qi=l.qi.insert(h,m)}}}(s.localStore,i))}async function aT(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await om(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new x(w.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await di(n,s.ji)}}function cT(t,e){const n=Z(t),s=n.cc.get(e);if(s&&s.nc)return re().add(s.key);{let r=re();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function lT(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sT.bind(null,e),e.sc.Wo=Wb.bind(null,e.eventManager),e.sc.wc=zb.bind(null,e.eventManager),e}function uT(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iT.bind(null,e),e}class hT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ca(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return gb(this.persistence,new fb,e.initialUser,this.yt)}yc(e){return new hb(su.Bs,this.yt)}gc(e){return new Ib}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ad(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=aT.bind(null,this.syncEngine),await Bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qb}createDatastore(e){const n=ca(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Cb(r));var r;return function(i,o,a,c){return new Rb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>ad(this.syncEngine,a,0),o=rd.C()?new rd:new bb,new Db(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Jb(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);V("RemoteStore","RemoteStore shutting down."),n._u.add(5),await hi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t,e,n){if(!n)throw new x(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fT(t,e,n,s){if(e===!0&&s===!0)throw new x(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ld(t){if(!B.isDocumentKey(t))throw new x(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ud(t){if(B.isDocumentKey(t))throw new x(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ha(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function bn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ha(t);throw new x(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new Map;class dd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,fT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new B0;switch(n.type){case"gapi":const s=n.client;return new K0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hd.get(e);n&&(V("ComponentProvider","Removing Datastore"),hd.delete(e),n.terminate())}(this),Promise.resolve()}}function pT(t,e,n,s={}){var r;const i=(t=bn(t,da))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&kc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Xe.MOCK_USER;else{o=v_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new x(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Xe(c)}t._authCredentials=new j0(new Tg(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class ls{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class Tn extends ls{constructor(e,n,s){super(e,n,Yl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new B(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function gT(t,e,...n){if(t=Be(t),bm("collection","path",e),t instanceof da){const s=be.fromString(e,...n);return ud(s),new Tn(t,null,s)}{if(!(t instanceof ht||t instanceof Tn))throw new x(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return ud(s),new Tn(t.firestore,null,s)}}function Bc(t,e,...n){if(t=Be(t),arguments.length===1&&(e=Sg.R()),bm("doc","path",e),t instanceof da){const s=be.fromString(e,...n);return ld(s),new ht(t,null,new B(s))}{if(!(t instanceof ht||t instanceof Tn))throw new x(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return ld(s),new ht(t.firestore,t instanceof Tn?t.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Xe.UNAUTHENTICATED,this.clientId=Sg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=lu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vT(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await om(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function wT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _T(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>id(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>id(e.remoteStore,i)),t.onlineComponents=e}async function _T(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await vT(t,new hT)),t.offlineComponents}async function Tm(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await wT(t,new dT)),t.onlineComponents}function ET(t){return Tm(t).then(e=>e.syncEngine)}async function fd(t){const e=await Tm(t),n=e.eventManager;return n.onListen=Zb.bind(null,e.syncEngine),n.onUnlisten=tT.bind(null,e.syncEngine),n}class IT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new cm(this,"async_queue_retry"),this.Wc=()=>{const n=$a();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=$a();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=$a();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Yn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ci(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Zt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=cu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&K()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function pd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Bs extends da{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new IT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cm(this),this._firestoreClient.terminate()}}function bT(t,e){const n=typeof t=="object"?t:wp(),s=typeof t=="string"?t:e||"(default)",r=bl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=g_("firestore");i&&pT(r,...i)}return r}function Sm(t){return t._firestoreClient||Cm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new tI(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new yT(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(it.fromBase64String(e))}catch(n){throw new x(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=/^__.*__$/;class ST{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new On(e,this.data,this.fieldMask,n,this.fieldTransforms):new li(e,this.data,n,this.fieldTransforms)}}class Am{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new On(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function km(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class pu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new pu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Io(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(km(this.sa)&&TT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class CT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||ca(e)}da(e,n,s,r=!1){return new pu({sa:e,methodName:n,fa:s,path:et.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function gu(t){const e=t._freezeSettings(),n=ca(t._databaseId);return new CT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AT(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);mu("Data must be an object, but it was:",o,s);const a=Rm(s,o);let c,l;if(i.merge)c=new gt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=jc(e,h,n);if(!o.contains(d))throw new x(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Dm(u,d)||u.push(d)}c=new gt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ST(new ut(a),c,l)}class pa extends du{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pa}}function kT(t,e,n,s){const r=t.da(1,e,n);mu("Data must be an object, but it was:",r,s);const i=[],o=ut.empty();as(s,(c,l)=>{const u=yu(e,c,n);l=Be(l);const h=r.ca(u);if(l instanceof pa)i.push(u);else{const d=fi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new gt(i);return new Am(o,a,r.fieldTransforms)}function RT(t,e,n,s,r,i){const o=t.da(1,e,n),a=[jc(e,s,n)],c=[r];if(i.length%2!=0)throw new x(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(jc(e,i[d])),c.push(i[d+1]);const l=[],u=ut.empty();for(let d=a.length-1;d>=0;--d)if(!Dm(l,a[d])){const p=a[d];let m=c[d];m=Be(m);const v=o.ca(p);if(m instanceof pa)l.push(p);else{const b=fi(m,v);b!=null&&(l.push(p),u.set(p,b))}}const h=new gt(l);return new Am(u,h,o.fieldTransforms)}function NT(t,e,n,s=!1){return fi(n,t.da(s?4:3,e))}function fi(t,e){if(Nm(t=Be(t)))return mu("Unsupported field value:",e,t),Rm(t,e);if(t instanceof du)return function(n,s){if(!km(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=fi(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Be(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vI(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Fe.fromDate(n);return{timestampValue:_o(s.yt,r)}}if(n instanceof Fe){const r=new Fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_o(s.yt,r)}}if(n instanceof fu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof js)return{bytesValue:em(s.yt,n._byteString)};if(n instanceof ht){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:eu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ha(n)}`)}(t,e)}function Rm(t,e){const n={};return Cg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(s,r)=>{const i=fi(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Nm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof fu||t instanceof js||t instanceof ht||t instanceof du)}function mu(t,e,n){if(!Nm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ha(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function jc(t,e,n){if((e=Be(e))instanceof fa)return e._internalPath;if(typeof e=="string")return yu(t,e);throw Io("Field path arguments must be of type string or ",t,!1,void 0,n)}const DT=new RegExp("[~\\*/\\[\\]]");function yu(t,e,n){if(e.search(DT)>=0)throw Io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fa(...e.split("."))._internalPath}catch{throw Io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Io(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new x(w.INVALID_ARGUMENT,a+t+c)}function Dm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OT extends Om{data(){return super.data()}}function vu(t,e){return typeof e=="string"?yu(t,e):e instanceof fa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wu{}class Pm extends wu{}function xT(t,e,...n){let s=[];e instanceof wu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Eu).length,o=r.filter(a=>a instanceof _u).length;if(i>1||i>0&&o>0)throw new x(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class _u extends Pm{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new _u(e,n,s)}_apply(e){const n=this._parse(e);return xm(e._query,n),new ls(e.firestore,e.converter,Pc(e._query,n))}_parse(e){const n=gu(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new x(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){md(u,l);const d=[];for(const p of u)d.push(gd(a,r,p));h={arrayValue:{values:d}}}else h=gd(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||md(u,l),h=NT(o,i,u,l==="in"||l==="not-in");return Me.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Eu extends wu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Eu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Nt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)xm(i,a),i=Pc(i,a)}(e._query,n),new ls(e.firestore,e.converter,Pc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Iu extends Pm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Iu(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new x(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ss(r,i);return function(a,c){if(Xl(a)===null){const l=sa(a);l!==null&&Mm(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new ls(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Xs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function MT(t,e="asc"){const n=e,s=vu("orderBy",t);return Iu._create(s,n)}function gd(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new x(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lg(e)&&n.indexOf("/")!==-1)throw new x(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(be.fromString(n));if(!B.isDocumentKey(s))throw new x(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $h(t,new B(s))}if(n instanceof ht)return $h(t,n._key);throw new x(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ha(n)}.`)}function md(t,e){if(!Array.isArray(t)||t.length===0)throw new x(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new x(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function xm(t,e){if(e.isInequality()){const s=sa(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new x(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Xl(t);i!==null&&Mm(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Mm(t,e,n){if(!n.isEqual(e))throw new x(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class LT{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const s={};return as(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new fu(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=kg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp($r(e));default:return null}}convertTimestamp(e){const n=kn(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=be.fromString(e);Ee(im(s));const r=new Vr(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||Zt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lm extends Om{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ki extends Lm{data(e={}){return super.data(e)}}class FT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new fr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ki(this._firestore,this._userDataWriter,s.key,s,new fr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ki(s._firestore,s._userDataWriter,o.doc.key,o.doc,new fr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ki(s._firestore,s._userDataWriter,o.doc.key,o.doc,new fr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:VT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class Um extends LT{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function $T(t,e,n,...s){t=bn(t,ht);const r=bn(t.firestore,Bs),i=gu(r);let o;return o=typeof(e=Be(e))=="string"||e instanceof fa?RT(i,"updateDoc",t._key,e,n,s):kT(i,"updateDoc",t._key,e),bu(r,[o.toMutation(t._key,kt.exists(!0))])}function BT(t){return bu(bn(t.firestore,Bs),[new Zl(t._key,kt.none())])}function jT(t,e){const n=bn(t.firestore,Bs),s=Bc(t),r=UT(t.converter,e);return bu(n,[AT(gu(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,kt.exists(!1))]).then(()=>s)}function qT(t,...e){var n,s,r;t=Be(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(pd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof ht)l=bn(t.firestore,Bs),u=Yl(t._key.path),c={next:h=>{e[o]&&e[o](HT(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=bn(t,ls);l=bn(h.firestore,Bs),u=h._query;const d=new Um(l);c={next:p=>{e[o]&&e[o](new FT(l,d,h,p))},error:e[o+1],complete:e[o+2]},PT(t._query)}return function(h,d,p,m){const v=new mT(m),b=new Gb(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>Hb(await fd(h),b)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>Kb(await fd(h),b))}}(Sm(l),u,a,c)}function bu(t,e){return function(n,s){const r=new Yn;return n.asyncQueue.enqueueAndForget(async()=>nT(await ET(n),s,r)),r.promise}(Sm(t),e)}function HT(t,e,n){const s=n.docs.get(e._key),r=new Um(t);return new Lm(t,r,e._key,s,new fr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ys=n})(Xr),Ps(new es("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Bs(new q0(n.getProvider("auth-internal")),new z0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),In(Lh,"3.8.1",t),In(Lh,"3.8.1","esm2017")})();function Tu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Fm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KT=Fm,Vm=new Qr("auth","Firebase",Fm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new El("@firebase/auth");function Wi(t,...e){yd.logLevel<=he.ERROR&&yd.error(`Auth (${Xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,...e){throw Su(t,...e)}function $t(t,...e){return Su(t,...e)}function WT(t,e,n){const s=Object.assign(Object.assign({},KT()),{[e]:n});return new Qr("auth","Firebase",s).create(e,{appName:t.name})}function Su(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Vm.create(t,...e)}function H(t,e,...n){if(!t)throw Su(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wi(e),new Error(e)}function nn(t,e){t||zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=new Map;function Gt(t){nn(t instanceof Function,"Expected a class definition");let e=vd.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vd.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t,e){const n=bl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(io(i,e!=null?e:{}))return r;Dt(r,"already-initialized")}return n.initialize({options:e})}function GT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QT(){return wd()==="http:"||wd()==="https:"}function wd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QT()||__()||"connection"in navigator)?navigator.onLine:!0}function XT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=w_()||E_()}get(){return YT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=new pi(3e4,6e4);function gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mi(t,e,n,s,r={}){return Bm(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Yr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$m.fetch()(jm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Bm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},JT),e);try{const r=new eS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Mi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Mi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw WT(t,u,l);Dt(t,u)}}catch(r){if(r instanceof rn)throw r;Dt(t,"network-request-failed")}}async function yi(t,e,n,s,r={}){const i=await mi(t,e,n,s,r);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function jm(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Cu(t.config,r):`${t.config.apiScheme}://${r}`}class eS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s($t(this.auth,"network-request-failed")),ZT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=$t(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(t,e){return mi(t,"POST","/v1/accounts:delete",e)}async function nS(t,e){return mi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sS(t,e=!1){const n=Be(t),s=await n.getIdToken(e),r=Au(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Tr(Ba(r.auth_time)),issuedAtTime:Tr(Ba(r.iat)),expirationTime:Tr(Ba(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ba(t){return Number(t)*1e3}function Au(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const r=fp(n);return r?JSON.parse(r):(Wi("Failed to decode base64 JWT payload"),null)}catch(r){return Wi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function rS(t){const e=Au(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rn&&iS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function iS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Hr(t,nS(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lS(i.providerUserInfo):[],a=cS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function aS(t){const e=Be(t);await bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function lS(t){return t.map(e=>{var{providerId:n}=e,s=Tu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(t,e){const n=await Bm(t,{},async()=>{const s=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=jm(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$m.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):rS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await uS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Kr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sS(this,e)}reload(){return aS(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await bo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hr(this,tS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:X,emailVerified:G,isAnonymous:ee,providerData:fe,stsTokenManager:M}=n;H(X&&M,e,"internal-error");const W=Kr.fromJSON(this.name,M);H(typeof X=="string",e,"internal-error"),an(h,e.name),an(d,e.name),H(typeof G=="boolean",e,"internal-error"),H(typeof ee=="boolean",e,"internal-error"),an(p,e.name),an(m,e.name),an(v,e.name),an(b,e.name),an(R,e.name),an(P,e.name);const ie=new Jn({uid:X,auth:e,email:d,emailVerified:G,displayName:h,isAnonymous:ee,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:W,createdAt:R,lastLoginAt:P});return fe&&Array.isArray(fe)&&(ie.providerData=fe.map(Ae=>Object.assign({},Ae))),b&&(ie._redirectEventId=b),ie}static async _fromIdTokenResponse(e,n,s=!1){const r=new Kr;r.updateFromServerResponse(n);const i=new Jn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await bo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hm.type="NONE";const _d=Hm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=zi(this.userKey,r.apiKey,i),this.fullPersistenceKey=zi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ks(Gt(_d),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Gt(_d);const o=zi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Jn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ks(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ks(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Km(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qm(e))return"Blackberry";if(Ym(e))return"Webos";if(ku(e))return"Safari";if((e.includes("chrome/")||Wm(e))&&!e.includes("edge/"))return"Chrome";if(Gm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Km(t=rt()){return/firefox\//i.test(t)}function ku(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wm(t=rt()){return/crios\//i.test(t)}function zm(t=rt()){return/iemobile/i.test(t)}function Gm(t=rt()){return/android/i.test(t)}function Qm(t=rt()){return/blackberry/i.test(t)}function Ym(t=rt()){return/webos/i.test(t)}function ga(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hS(t=rt()){var e;return ga(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dS(){return I_()&&document.documentMode===10}function Xm(t=rt()){return ga(t)||Gm(t)||Ym(t)||Qm(t)||/windows phone/i.test(t)||zm(t)}function fS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e=[]){let n;switch(t){case"Browser":n=Ed(rt());break;case"Worker":n=`${Ed(rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Id(this),this.idTokenSubscription=new Id(this),this.beforeStateQueue=new pS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Be(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function vi(t){return Be(t)}class Id{constructor(e){this.auth=e,this.observer=null,this.addObserver=R_(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function mS(t,e,n){const s=vi(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Zm(e),{host:o,port:a}=yS(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||vS()}function Zm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yS(t){const e=Zm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:bd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:bd(o)}}}function bd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function wS(t,e){return mi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(t,e){return yi(t,"POST","/v1/accounts:signInWithPassword",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}async function IS(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Ru{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Wr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Wr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return _S(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ES(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return IS(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t,e){return yi(t,"POST","/v1/accounts:signInWithIdp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="http://localhost";class rs extends Ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Tu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new rs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Rs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:bS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SS(t){const e=cr(lr(t)).link,n=e?cr(lr(e)).deep_link_id:null,s=cr(lr(t)).deep_link_id;return(s?cr(lr(s)).link:null)||s||n||e||t}class Nu{constructor(e){var n,s,r,i,o,a;const c=cr(lr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=TS((r=c.mode)!==null&&r!==void 0?r:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=SS(e);try{return new Nu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.providerId=er.PROVIDER_ID}static credential(e,n){return Wr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Nu.parseLink(n);return H(s,"argument-error"),Wr._fromEmailAndCode(e,s.code,s.tenantId)}}er.PROVIDER_ID="password";er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends ey{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends wi{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return pn.credential(n,s)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends wi{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends wi{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return mn.credential(n,s)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e){return yi(t,"POST","/v1/accounts:signUp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Jn._fromIdTokenResponse(e,s,r),o=Td(s);return new is({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Td(s);return new is({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Td(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends rn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,To.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new To(e,n,s,r)}}function ty(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?To._fromErrorAndOperation(t,i,e,s):i})}async function AS(t,e,n=!1){const s=await Hr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Hr(t,ty(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=Au(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),is._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(t,e,n=!1){const s="signIn",r=await ty(t,s,e),i=await is._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function RS(t,e){return ny(vi(t),e)}async function NS(t,e,n){const s=vi(t),r=await CS(s,{returnSecureToken:!0,email:e,password:n}),i=await is._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function DS(t,e,n){return RS(Be(t),er.credential(e,n))}function OS(t,e,n,s){return Be(t).onIdTokenChanged(e,n,s)}function PS(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function xS(t,e,n,s){return Be(t).onAuthStateChanged(e,n,s)}function MS(t){return Be(t).signOut()}const So="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(So,"1"),this.storage.removeItem(So),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(){const t=rt();return ku(t)||ga(t)}const US=1e3,FS=10;class ry extends sy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LS()&&fS(),this.fallbackToPolling=Xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);dS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,FS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},US)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ry.type="LOCAL";const VS=ry;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends sy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iy.type="SESSION";const oy=iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ma(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await $S(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Du("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return window}function jS(t){Bt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(){return typeof Bt().WorkerGlobalScope!="undefined"&&typeof Bt().importScripts=="function"}async function qS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KS(){return ay()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="firebaseLocalStorageDb",WS=1,Co="firebaseLocalStorage",ly="fbase_key";class _i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([Co],e?"readwrite":"readonly").objectStore(Co)}function zS(){const t=indexedDB.deleteDatabase(cy);return new _i(t).toPromise()}function Hc(){const t=indexedDB.open(cy,WS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Co,{keyPath:ly})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Co)?e(s):(s.close(),await zS(),e(await Hc()))})})}async function Sd(t,e,n){const s=ya(t,!0).put({[ly]:e,value:n});return new _i(s).toPromise()}async function GS(t,e){const n=ya(t,!1).get(e),s=await new _i(n).toPromise();return s===void 0?null:s.value}function Cd(t,e){const n=ya(t,!0).delete(e);return new _i(n).toPromise()}const QS=800,YS=3;class uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>YS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(KS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qS(),!this.activeServiceWorker)return;this.sender=new BS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hc();return await Sd(e,So,"1"),await Cd(e,So),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>GS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ya(r,!1).getAll();return new _i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uy.type="LOCAL";const XS=uy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ZS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=$t("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",JS().appendChild(s)})}function eC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e){return e?Gt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends Ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nC(t){return ny(t.auth,new Ou(t),t.bypassAuthState)}function sC(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),kS(n,new Ou(t),t.bypassAuthState)}async function rC(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),AS(n,new Ou(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nC;case"linkViaPopup":case"linkViaRedirect":return rC;case"reauthViaPopup":case"reauthViaRedirect":return sC;default:Dt(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new pi(2e3,1e4);class Is extends hy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=Du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,iC.get())};e()}}Is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="pendingRedirect",Gi=new Map;class aC extends hy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const s=await cC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cC(t,e){const n=hC(e),s=uC(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function lC(t,e){Gi.set(t._key(),e)}function uC(t){return Gt(t._redirectPersistence)}function hC(t){return zi(oC,t.config.apiKey,t.name)}async function dC(t,e,n=!1){const s=vi(t),r=tC(s,e),o=await new aC(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=10*60*1e3;class pC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError($t(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ad(e))}saveEventToCache(e){this.cachedEventUids.add(Ad(e)),this.lastProcessedEventTime=Date.now()}}function Ad(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e={}){return mi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vC=/^https?/;async function wC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mC(t);for(const n of e)try{if(_C(n))return}catch{}Dt(t,"unauthorized-domain")}function _C(t){const e=qc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!vC.test(n))return!1;if(yC.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=new pi(3e4,6e4);function kd(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IC(t){return new Promise((e,n)=>{var s,r,i;function o(){kd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kd(),n($t(t,"network-request-failed"))},timeout:EC.get()})}if(!((r=(s=Bt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Bt().gapi)===null||i===void 0)&&i.load)o();else{const a=eC("iframefcb");return Bt()[a]=()=>{gapi.load?o():n($t(t,"network-request-failed"))},ZS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function bC(t){return Qi=Qi||IC(t),Qi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=new pi(5e3,15e3),SC="__/auth/iframe",CC="emulator/auth/iframe",AC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RC(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cu(e,CC):`https://${t.config.authDomain}/${SC}`,s={apiKey:e.apiKey,appName:t.name,v:Xr},r=kC.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Yr(s).slice(1)}`}async function NC(t){const e=await bC(t),n=Bt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:RC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=$t(t,"network-request-failed"),a=Bt().setTimeout(()=>{i(o)},TC.get());function c(){Bt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OC=500,PC=600,xC="_blank",MC="http://localhost";class Rd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LC(t,e,n,s=OC,r=PC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},DC),{width:s.toString(),height:r.toString(),top:i,left:o}),l=rt().toLowerCase();n&&(a=Wm(l)?xC:n),Km(l)&&(e=e||MC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(hS(l)&&a!=="_self")return UC(e||"",a),new Rd(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Rd(h)}function UC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="__/auth/handler",VC="emulator/auth/handler";function Nd(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Xr,eventId:r};if(e instanceof ey){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",k_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof wi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${$C(t)}?${Yr(a).slice(1)}`}function $C({config:t}){return t.emulator?Cu(t,VC):`https://${t.authDomain}/${FC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="webStorageSupport";class BC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oy,this._completeRedirectFn=dC,this._overrideRedirectResult=lC}async _openPopup(e,n,s,r){var i;nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Nd(e,n,s,qc(),r);return LC(e,o,Du())}async _openRedirect(e,n,s,r){return await this._originValidation(e),jS(Nd(e,n,s,qc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(nn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await NC(e),s=new pC(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ja,{type:ja},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ja];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xm()||ku()||ga()}}const jC=BC;var Dd="@firebase/auth",Od="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KC(t){Ps(new es("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jm(t)},u=new gS(a,c,l);return GT(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ps(new es("auth-internal",e=>{const n=vi(e.getProvider("auth").getImmediate());return(s=>new qC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Dd,Od,HC(t)),In(Dd,Od,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=5*60,zC=gp("authIdTokenMaxAge")||WC;let Pd=null;const GC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>zC)return;const r=n==null?void 0:n.token;Pd!==r&&(Pd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function QC(t=wp()){const e=bl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zT(t,{popupRedirectResolver:jC,persistence:[XS,VS,oy]}),s=gp("authTokenSyncURL");if(s){const i=GC(s);PS(n,i,()=>i(n.currentUser)),OS(n,o=>i(o))}const r=pp("auth");return r&&mS(n,`http://${r}`),n}KC("Browser");const YC={apiKey:"AIzaSyAM-GoQm2C2OW1Di7l9YUVW2cSxlJI2Hps",authDomain:"notesmaker-974ac.firebaseapp.com",projectId:"notesmaker-974ac",storageBucket:"notesmaker-974ac.appspot.com",messagingSenderId:"655119308404",appId:"1:655119308404:web:e6c01b3850ab97abdf2321"},fy=vp(YC),XC=bT(fy),Li=QC(fy);let rr,xd,qa=null;const Ei=up("storeNotes",{state:()=>({notes:[],showProgressBar:!0}),actions:{init(){const t=Ii();rr=gT(XC,"users",t.user.id,"notes"),xd=xT(rr,MT("date","desc")),this.getNotes()},async getNotes(){this.showProgressBar=!0,qa=qT(xd,t=>{let e=[];t.forEach(n=>{let s={id:n.id,content:n.data().content,date:n.data().date};e.push(s)}),this.notes=e,this.showProgressBar=!1},t=>{console.log("Error message:",t.message)})},clearNotes(){this.notes=[],qa&&qa()},async addNote(t){let n=new Date().getTime().toString();await jT(rr,{content:t,date:n})},async deleteNote(t){await BT(Bc(rr,t))},async updateNotes(t,e){await $T(Bc(rr,t),{content:e})}},getters:{getNoteContent:t=>e=>t.notes.filter(n=>n.id==e)[0].content,getNotesCount:t=>t.notes.length,getCharacterCount:t=>{let e=0;return t.notes.forEach(n=>{e+=n.content.length}),e}}}),Ii=up("storeAuth",{state:()=>({user:{}}),actions:{init(){const t=Ei();xS(Li,e=>{e?(this.user.id=e.uid,this.user.email=e.email,this.router.push("/"),t.init()):(this.user={},this.router.replace("/auth"),t.clearNotes())})},registerUser(t){NS(Li,t.emailId,t.password).then(e=>{e.user}).catch(e=>{e.code,e.message,alert(e.message)})},async loginUser(t){return DS(Li,t.emailId,t.password).then(e=>{e.user}).catch(e=>{e.code,e.message,alert(e.message)})},userLogout(){MS(Li).then(()=>{}).catch(t=>{alert(t.message)})}}});var Md;const bi=typeof window!="undefined",JC=t=>typeof t=="string",ZC=()=>{};bi&&((Md=window==null?void 0:window.navigator)==null?void 0:Md.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Kc(t){return typeof t=="function"?t():oe(t)}function eA(t){return t}function tA(t){return cf()?(lf(t),!0):!1}const nA=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,sA=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g,rA=(t,e,n,s)=>{let r=t<12?"AM":"PM";return s&&(r=r.split("").reduce((i,o)=>i+=`${o}.`,"")),n?r.toLowerCase():r},iA=(t,e,n={})=>{var s;const r=t.getFullYear(),i=t.getMonth(),o=t.getDate(),a=t.getHours(),c=t.getMinutes(),l=t.getSeconds(),u=t.getMilliseconds(),h=t.getDay(),d=(s=n.customMeridiem)!=null?s:rA,p={YY:()=>String(r).slice(-2),YYYY:()=>r,M:()=>i+1,MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(o),DD:()=>`${o}`.padStart(2,"0"),H:()=>String(a),HH:()=>`${a}`.padStart(2,"0"),h:()=>`${a%12||12}`.padStart(1,"0"),hh:()=>`${a%12||12}`.padStart(2,"0"),m:()=>String(c),mm:()=>`${c}`.padStart(2,"0"),s:()=>String(l),ss:()=>`${l}`.padStart(2,"0"),SSS:()=>`${u}`.padStart(3,"0"),d:()=>h,dd:()=>t.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>d(a,c),AA:()=>d(a,c,!1,!0),a:()=>d(a,c,!0),aa:()=>d(a,c,!0,!0)};return e.replace(sA,(m,v)=>v||p[m]())},oA=t=>{if(t===null)return new Date(NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(nA);if(e){const n=e[2]-1||0,s=(e[7]||"0").substring(0,3);return new Date(e[1],n,e[3]||1,e[4]||0,e[5]||0,e[6]||0,s)}}return new Date(t)};function aA(t,e="HH:mm:ss",n={}){return Ze(()=>iA(oA(Kc(t)),Kc(e),n))}function pr(t){var e;const n=Kc(t);return(e=n==null?void 0:n.$el)!=null?e:n}const py=bi?window:void 0;bi&&window.document;bi&&window.navigator;bi&&window.location;function Ui(...t){let e,n,s,r;if(JC(t[0])||Array.isArray(t[0])?([n,s,r]=t,e=py):[e,n,s,r]=t,!e)return ZC;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d)=>(u.addEventListener(h,d,r),()=>u.removeEventListener(h,d,r)),c=Wn(()=>pr(e),u=>{o(),u&&i.push(...n.flatMap(h=>s.map(d=>a(u,h,d))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return tA(l),l}function gy(t,e,n={}){const{window:s=py,ignore:r=[],capture:i=!0,detectIframe:o=!1}=n;if(!s)return;let a=!0,c;const l=p=>r.some(m=>{if(typeof m=="string")return Array.from(s.document.querySelectorAll(m)).some(v=>v===p.target||p.composedPath().includes(v));{const v=pr(m);return v&&(p.target===v||p.composedPath().includes(v))}}),u=p=>{s.clearTimeout(c);const m=pr(t);if(!(!m||m===p.target||p.composedPath().includes(m))){if(p.detail===0&&(a=!l(p)),!a){a=!0;return}e(p)}},h=[Ui(s,"click",u,{passive:!0,capture:i}),Ui(s,"pointerdown",p=>{const m=pr(t);m&&(a=!p.composedPath().includes(m)&&!l(p))},{passive:!0}),Ui(s,"pointerup",p=>{if(p.button===0){const m=p.composedPath();p.composedPath=()=>m,c=s.setTimeout(()=>u(p),50)}},{passive:!0}),o&&Ui(s,"blur",p=>{var m;const v=pr(t);((m=s.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(v!=null&&v.contains(s.document.activeElement))&&e(p)})].filter(Boolean);return()=>h.forEach(p=>p())}const Wc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},zc="__vueuse_ssr_handlers__";Wc[zc]=Wc[zc]||{};Wc[zc];var Ld;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Ld||(Ld={}));var cA=Object.defineProperty,Ud=Object.getOwnPropertySymbols,lA=Object.prototype.hasOwnProperty,uA=Object.prototype.propertyIsEnumerable,Fd=(t,e,n)=>e in t?cA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,hA=(t,e)=>{for(var n in e||(e={}))lA.call(e,n)&&Fd(t,n,e[n]);if(Ud)for(var n of Ud(e))uA.call(e,n)&&Fd(t,n,e[n]);return t};const dA={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};hA({linear:eA},dA);const fA={class:"navbar is-success","aria-label":"main navigation",role:"navigation"},pA={class:"container is-max-desktop px-2"},gA={class:"navbar-brand"},mA=D("div",{class:"navbar-item is-size-4 is-family-monospace"}," Noteballs ",-1),yA=D("span",{"aria-hidden":"true"},null,-1),vA=D("span",{"aria-hidden":"true"},null,-1),wA=D("span",{"aria-hidden":"true"},null,-1),_A=[yA,vA,wA],EA={class:"navbar-start"},IA={class:"navbar-end"},bA=Vo(" Notes "),TA=Vo(" Stats "),SA={setup(t){const e=Ii(),n=mt(!1),s=mt(null),r=mt(null);gy(s,()=>{n.value=!1},{ignore:[r]});const i=()=>{n.value=!1,e.userLogout()};return(o,a)=>{const c=ml("RouterLink");return Se(),xe("nav",fA,[D("div",pA,[D("div",gA,[mA,D("a",{onClick:a[0]||(a[0]=vr(l=>n.value=!n.value,["prevent"])),class:Sn(["navbar-burger",{"is-active":n.value}]),"aria-expanded":"false","aria-label":"menu","data-target":"navbarBasicExample",role:"button",ref_key:"navBarBurgerRef",ref:r},_A,2)]),D("div",{id:"navbarBasicExample",class:Sn(["navbar-menu",{"is-active":n.value}]),ref_key:"navBarMenuRef",ref:s},[D("div",EA,[oe(e).user.id?(Se(),xe("button",{key:0,class:"button is-small is-info my-auto mx-2",onClick:i},"Logout Email: "+Qt(oe(e).user.email),1)):Gr("",!0)]),D("div",IA,[De(c,{onClick:a[1]||(a[1]=l=>n.value=!1),to:"/",class:"navbar-item","active-class":"is-active"},{default:Ns(()=>[bA]),_:1}),De(c,{onClick:a[2]||(a[2]=l=>n.value=!1),to:"/stats",class:"navbar-item","active-class":"is-active"},{default:Ns(()=>[TA]),_:1})])],2)])])}}};const CA={class:"container is-max-desktop px-2 py-4"},AA={setup(t){const e=Ii();return Lo(()=>{e.init()}),(n,s)=>{const r=ml("RouterView");return Se(),xe(at,null,[De(SA),D("div",CA,[De(r)])],64)}}};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const my=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",tr=t=>my?Symbol(t):"_vr_"+t,kA=tr("rvlm"),Vd=tr("rvd"),va=tr("r"),Pu=tr("rl"),Gc=tr("rvl"),_s=typeof window!="undefined";function RA(t){return t.__esModule||my&&t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function Ha(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Sr=()=>{},NA=/\/$/,DA=t=>t.replace(NA,"");function Ka(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=MA(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function OA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $d(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function PA(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&qs(e.matched[s],n.matched[r])&&yy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xA(t[n],e[n]))return!1;return!0}function xA(t,e){return Array.isArray(t)?Bd(t,e):Array.isArray(e)?Bd(e,t):t===e}function Bd(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function MA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var zr;(function(t){t.pop="pop",t.push="push"})(zr||(zr={}));var Cr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Cr||(Cr={}));function LA(t){if(!t)if(_s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DA(t)}const UA=/^[^#]+#/;function FA(t,e){return t.replace(UA,"#")+e}function VA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function $A(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=VA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jd(t,e){return(history.state?history.state.position-e:-1)+t}const Qc=new Map;function BA(t,e){Qc.set(t,e)}function jA(t){const e=Qc.get(t);return Qc.delete(t),e}let qA=()=>location.protocol+"//"+location.host;function vy(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),$d(c,"")}return $d(n,t)+s+r}function HA(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=vy(t,location),m=n.value,v=e.value;let b=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}b=v?d.position-v.position:0}else s(p);r.forEach(R=>{R(n.value,m,{delta:b,type:zr.pop,direction:b?b>0?Cr.forward:Cr.back:Cr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const p=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(ye({},d.state,{scroll:wa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function qd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?wa():null}}function KA(t){const{history:e,location:n}=window,s={value:vy(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:qA()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=ye({},e.state,qd(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ye({},r.value,e.state,{forward:c,scroll:wa()});i(u.current,u,!0);const h=ye({},qd(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function WA(t){t=LA(t);const e=KA(t),n=HA(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ye({location:"",base:t,go:s,createHref:FA.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function zA(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),WA(t)}function GA(t){return typeof t=="string"||t&&typeof t=="object"}function wy(t){return typeof t=="string"||typeof t=="symbol"}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_y=tr("nf");var Hd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hd||(Hd={}));function Hs(t,e){return ye(new Error,{type:t,[_y]:!0},e)}function Mn(t,e){return t instanceof Error&&_y in t&&(e==null||!!(t.type&e))}const Kd="[^/]+?",QA={sensitive:!1,strict:!1,start:!0,end:!0},YA=/[.+*?^${}()[\]/\\]/g;function XA(t,e){const n=ye({},QA,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(YA,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:v,optional:b,regexp:R}=d;i.push({name:m,repeatable:v,optional:b});const P=R||Kd;if(P!==Kd){p+=10;try{new RegExp(`(${P})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+G.message)}}let X=v?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(X=b&&l.length<2?`(?:/${X})`:"/"+X),b&&(X+="?"),r+=X,p+=20,b&&(p+=-8),v&&(p+=-20),P===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=i[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:v,optional:b}=p,R=m in l?l[m]:"";if(Array.isArray(R)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(R)?R.join("/"):R;if(!P)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function JA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ZA(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=JA(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const ek={type:0,value:""},tk=/[a-zA-Z0-9_]/;function nk(t){if(!t)return[[]];if(t==="/")return[[ek]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:tk.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function sk(t,e,n){const s=XA(nk(t.path),n),r=ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function rk(t,e){const n=[],s=new Map;e=zd({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const p=!d,m=ok(u);m.aliasOf=d&&d.record;const v=zd(e,u),b=[m];if("alias"in u){const X=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of X)b.push(ye({},m,{components:d?d.record.components:m.components,path:G,aliasOf:d?d.record:m}))}let R,P;for(const X of b){const{path:G}=X;if(h&&G[0]!=="/"){const ee=h.record.path,fe=ee[ee.length-1]==="/"?"":"/";X.path=h.record.path+(G&&fe+G)}if(R=sk(X,h,v),d?d.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),p&&u.name&&!Wd(R)&&o(u.name)),"children"in m){const ee=m.children;for(let fe=0;fe<ee.length;fe++)i(ee[fe],R,d&&d.children[fe])}d=d||R,c(R)}return P?()=>{o(P)}:Sr}function o(u){if(wy(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&ZA(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!Wd(u)&&s.set(u.record.name,u)}function l(u,h){let d,p={},m,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Hs(1,{location:u});v=d.record.name,p=ye(ik(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params),m=d.stringify(p)}else if("path"in u)m=u.path,d=n.find(P=>P.re.test(m)),d&&(p=d.parse(m),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw Hs(1,{location:u,currentLocation:h});v=d.record.name,p=ye({},h.params,u.params),m=d.stringify(p)}const b=[];let R=d;for(;R;)b.unshift(R.record),R=R.parent;return{name:v,path:m,params:p,matched:b,meta:ck(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ik(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ok(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ak(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ak(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Wd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ck(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function zd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Ey=/#/g,lk=/&/g,uk=/\//g,hk=/=/g,dk=/\?/g,Iy=/\+/g,fk=/%5B/g,pk=/%5D/g,by=/%5E/g,gk=/%60/g,Ty=/%7B/g,mk=/%7C/g,Sy=/%7D/g,yk=/%20/g;function xu(t){return encodeURI(""+t).replace(mk,"|").replace(fk,"[").replace(pk,"]")}function vk(t){return xu(t).replace(Ty,"{").replace(Sy,"}").replace(by,"^")}function Yc(t){return xu(t).replace(Iy,"%2B").replace(yk,"+").replace(Ey,"%23").replace(lk,"%26").replace(gk,"`").replace(Ty,"{").replace(Sy,"}").replace(by,"^")}function wk(t){return Yc(t).replace(hk,"%3D")}function _k(t){return xu(t).replace(Ey,"%23").replace(dk,"%3F")}function Ek(t){return t==null?"":_k(t).replace(uk,"%2F")}function Ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Ik(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Iy," "),o=i.indexOf("="),a=Ao(o<0?i:i.slice(0,o)),c=o<0?null:Ao(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Gd(t){let e="";for(let n in t){const s=t[n];if(n=wk(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Yc(i)):[s&&Yc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bk(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function ir(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function dn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Hs(4,{from:n,to:e})):h instanceof Error?a(h):GA(h)?a(Hs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Wa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Tk(a)){const l=(a.__vccOpts||a)[e];l&&r.push(dn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=RA(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&dn(d,n,s,i,o)()}))}}return r}function Tk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qd(t){const e=At(va),n=At(Pu),s=Ze(()=>e.resolve(oe(t.to))),r=Ze(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(qs.bind(null,u));if(d>-1)return d;const p=Yd(c[l-2]);return l>1&&Yd(u)===p&&h[h.length-1].path!==p?h.findIndex(qs.bind(null,c[l-2])):d}),i=Ze(()=>r.value>-1&&kk(n.params,s.value.params)),o=Ze(()=>r.value>-1&&r.value===n.matched.length-1&&yy(n.params,s.value.params));function a(c={}){return Ak(c)?e[oe(t.replace)?"replace":"push"](oe(t.to)).catch(Sr):Promise.resolve()}return{route:s,href:Ze(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Sk=Vf({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qd,setup(t,{slots:e}){const n=Xt(Qd(t)),{options:s}=At(va),r=Ze(()=>({[Xd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:rp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Ck=Sk;function Ak(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kk(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Yd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xd=(t,e,n)=>t!=null?t:e!=null?e:n,Rk=Vf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=At(Gc),r=Ze(()=>t.route||s.value),i=At(Vd,0),o=Ze(()=>r.value.matched[i]);$i(Vd,i+1),$i(kA,o),$i(Gc,r);const a=mt();return Wn(()=>[a.value,o.value,t.name],([c,l,u],[h,d,p])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!qs(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Jd(n.default,{Component:u,route:c});const d=l.props[t.name],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,v=rp(u,ye({},p,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Jd(n.default,{Component:v,route:c})||v}}});function Jd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Nk=Rk;function Dk(t){const e=rk(t.routes,t),n=t.parseQuery||Ik,s=t.stringifyQuery||Gd,r=t.history,i=ir(),o=ir(),a=ir(),c=mv(cn);let l=cn;_s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ha.bind(null,_=>""+_),h=Ha.bind(null,Ek),d=Ha.bind(null,Ao);function p(_,F){let N,$;return wy(_)?(N=e.getRecordMatcher(_),$=F):$=_,e.addRoute($,N)}function m(_){const F=e.getRecordMatcher(_);F&&e.removeRoute(F)}function v(){return e.getRoutes().map(_=>_.record)}function b(_){return!!e.getRecordMatcher(_)}function R(_,F){if(F=ye({},F||c.value),typeof _=="string"){const te=Ka(n,_,F.path),f=e.resolve({path:te.path},F),g=r.createHref(te.fullPath);return ye(te,f,{params:d(f.params),hash:Ao(te.hash),redirectedFrom:void 0,href:g})}let N;if("path"in _)N=ye({},_,{path:Ka(n,_.path,F.path).path});else{const te=ye({},_.params);for(const f in te)te[f]==null&&delete te[f];N=ye({},_,{params:h(_.params)}),F.params=h(F.params)}const $=e.resolve(N,F),ge=_.hash||"";$.params=u(d($.params));const _e=OA(s,ye({},_,{hash:vk(ge),path:$.path})),se=r.createHref(_e);return ye({fullPath:_e,hash:ge,query:s===Gd?bk(_.query):_.query||{}},$,{redirectedFrom:void 0,href:se})}function P(_){return typeof _=="string"?Ka(n,_,c.value.path):ye({},_)}function X(_,F){if(l!==_)return Hs(8,{from:F,to:_})}function G(_){return M(_)}function ee(_){return G(ye(P(_),{replace:!0}))}function fe(_){const F=_.matched[_.matched.length-1];if(F&&F.redirect){const{redirect:N}=F;let $=typeof N=="function"?N(_):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=P($):{path:$},$.params={}),ye({query:_.query,hash:_.hash,params:_.params},$)}}function M(_,F){const N=l=R(_),$=c.value,ge=_.state,_e=_.force,se=_.replace===!0,te=fe(N);if(te)return M(ye(P(te),{state:ge,force:_e,replace:se}),F||N);const f=N;f.redirectedFrom=F;let g;return!_e&&PA(s,$,N)&&(g=Hs(16,{to:f,from:$}),us($,$,!0,!1)),(g?Promise.resolve(g):ie(f,$)).catch(y=>Mn(y)?y:we(y,f,$)).then(y=>{if(y){if(Mn(y,2))return M(ye(P(y.to),{state:ge,force:_e,replace:se}),F||f)}else y=ke(f,$,!0,se,ge);return Ae(f,$,y),y})}function W(_,F){const N=X(_,F);return N?Promise.reject(N):Promise.resolve()}function ie(_,F){let N;const[$,ge,_e]=Ok(_,F);N=Wa($.reverse(),"beforeRouteLeave",_,F);for(const te of $)te.leaveGuards.forEach(f=>{N.push(dn(f,_,F))});const se=W.bind(null,_,F);return N.push(se),fs(N).then(()=>{N=[];for(const te of i.list())N.push(dn(te,_,F));return N.push(se),fs(N)}).then(()=>{N=Wa(ge,"beforeRouteUpdate",_,F);for(const te of ge)te.updateGuards.forEach(f=>{N.push(dn(f,_,F))});return N.push(se),fs(N)}).then(()=>{N=[];for(const te of _.matched)if(te.beforeEnter&&!F.matched.includes(te))if(Array.isArray(te.beforeEnter))for(const f of te.beforeEnter)N.push(dn(f,_,F));else N.push(dn(te.beforeEnter,_,F));return N.push(se),fs(N)}).then(()=>(_.matched.forEach(te=>te.enterCallbacks={}),N=Wa(_e,"beforeRouteEnter",_,F),N.push(se),fs(N))).then(()=>{N=[];for(const te of o.list())N.push(dn(te,_,F));return N.push(se),fs(N)}).catch(te=>Mn(te,8)?te:Promise.reject(te))}function Ae(_,F,N){for(const $ of a.list())$(_,F,N)}function ke(_,F,N,$,ge){const _e=X(_,F);if(_e)return _e;const se=F===cn,te=_s?history.state:{};N&&($||se?r.replace(_.fullPath,ye({scroll:se&&te&&te.scroll},ge)):r.push(_.fullPath,ge)),c.value=_,us(_,F,N,se),_t()}let ze;function Ot(){ze=r.listen((_,F,N)=>{const $=R(_),ge=fe($);if(ge){M(ye(ge,{replace:!0}),$).catch(Sr);return}l=$;const _e=c.value;_s&&BA(jd(_e.fullPath,N.delta),wa()),ie($,_e).catch(se=>Mn(se,12)?se:Mn(se,2)?(M(se.to,$).then(te=>{Mn(te,20)&&!N.delta&&N.type===zr.pop&&r.go(-1,!1)}).catch(Sr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),we(se,$,_e))).then(se=>{se=se||ke($,_e,!1),se&&(N.delta?r.go(-N.delta,!1):N.type===zr.pop&&Mn(se,20)&&r.go(-1,!1)),Ae($,_e,se)}).catch(Sr)})}let wt=ir(),Le=ir(),Ue;function we(_,F,N){_t(_);const $=Le.list();return $.length?$.forEach(ge=>ge(_,F,N)):console.error(_),Promise.reject(_)}function pe(){return Ue&&c.value!==cn?Promise.resolve():new Promise((_,F)=>{wt.add([_,F])})}function _t(_){Ue||(Ue=!0,Ot(),wt.list().forEach(([F,N])=>_?N(_):F()),wt.reset())}function us(_,F,N,$){const{scrollBehavior:ge}=t;if(!_s||!ge)return Promise.resolve();const _e=!N&&jA(jd(_.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return hl().then(()=>ge(_,F,_e)).then(se=>se&&$A(se)).catch(se=>we(se,_,F))}const Ht=_=>r.go(_);let Pt;const Et=new Set;return{currentRoute:c,addRoute:p,removeRoute:m,hasRoute:b,getRoutes:v,resolve:R,options:t,push:G,replace:ee,go:Ht,back:()=>Ht(-1),forward:()=>Ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:pe,install(_){const F=this;_.component("RouterLink",Ck),_.component("RouterView",Nk),_.config.globalProperties.$router=F,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>oe(c)}),_s&&!Pt&&c.value===cn&&(Pt=!0,G(r.location).catch(ge=>{}));const N={};for(const ge in cn)N[ge]=Ze(()=>c.value[ge]);_.provide(va,F),_.provide(Pu,Xt(N)),_.provide(Gc,c);const $=_.unmount;Et.add(_),_.unmount=function(){Et.delete(_),Et.size<1&&(l=cn,ze&&ze(),c.value=cn,Pt=!1,Ue=!1),$()}}}}function fs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Ok(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>qs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>qs(l,c))||r.push(c))}return[n,s,r]}function Pk(){return At(va)}function xk(){return At(Pu)}function Cy(t,e){Wn(t,n=>{n.length>=e&&alert(`The size of the notes has to be ${e}`)})}const Mk={class:"modal is-active p-2"},Lk=D("div",{class:"modal-background"},null,-1),Uk=D("p",{class:"modal-card-title"},"Delete Note",-1),Fk=D("section",{class:"modal-card-body"}," Are you sure you want to delete the note? ",-1),Vk={class:"modal-card-foot is-justify-content-end"},$k={props:{modelValue:{type:Boolean,default:!1,required:!0},noteId:{type:String,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=Ei(),s=()=>{e("update:modelValue",!1)},r=mt(null);gy(r,s);const i=o=>{o.key==="Escape"&&s()};return Lo(()=>{document.addEventListener("keyup",i)}),pl(()=>{document.removeEventListener("keyup",i)}),(o,a)=>(Se(),xe("div",Mk,[Lk,D("div",{class:"modal-card",ref_key:"modalCardRef",ref:r},[D("header",{class:"modal-card-head"},[Uk,D("button",{class:"delete","aria-label":"close",onClick:s})]),Fk,D("footer",Vk,[D("button",{class:"button is-danger",onClick:a[0]||(a[0]=c=>oe(n).deleteNote(t.noteId))},"Delete"),D("button",{class:"button",onClick:s},"Cancel")])],512)]))}},Bk={class:"card mb-4"},jk={class:"card-content"},qk={class:"content"},Hk={class:"columns is-mobile has-text-grey-light mt-2"},Kk={class:"column"},Wk={class:"column has-text-right"},zk={class:"card-footer"},Gk=Vo("Edit"),Qk={props:{note:{type:Object,required:!0}},setup(t){const e=t,n=Ze(()=>{let i=e.note.content.length,o=i>1?"charachters":"charachter";return`${i} ${o}`}),s=Xt({deleteModal:!1}),r=Ze(()=>{let i=new Date(parseInt(e.note.date));return aA(i,"YYYY-MM-DD HH:mm")});return(i,o)=>{const a=ml("RouterLink");return Se(),xe("div",Bk,[D("div",jk,[D("div",qk,Qt(t.note.content),1),D("div",Hk,[D("small",Kk,Qt(oe(r).value),1),D("small",Wk,Qt(oe(n)),1)])]),D("footer",zk,[De(a,{to:`/editNote/${t.note.id}`,class:"card-footer-item"},{default:Ns(()=>[Gk]),_:1},8,["to"]),D("a",{onClick:o[0]||(o[0]=vr(c=>oe(s).deleteModal=!oe(s).deleteModal,["prevent"])),href:"#",class:"card-footer-item"},"Delete")]),oe(s).deleteModal?(Se(),Uo($k,{key:0,modelValue:oe(s).deleteModal,"onUpdate:modelValue":o[1]||(o[1]=c=>oe(s).deleteModal=c),"note-id":t.note.id},null,8,["modelValue","note-id"])):Gr("",!0)])}}},Ay={mounted:t=>t.focus()},Yk={class:"field"},Xk={class:"control"},Jk={key:0,class:"label has-text-white"},Zk=["value","placeholder"],eR={class:"field is-grouped is-grouped-right"},tR={class:"control"},ky={props:{modelValue:{type:String,required:!0},bgColor:{type:String,required:!1,default:"success"},placeholder:{type:String,default:"Type something..."},label:{type:String}},emits:["update:modelValue"],setup(t,{expose:e,emit:n}){const s=mt(null);return e({focusTextarea:()=>{s.value.focus()}}),(i,o)=>(Se(),xe("div",{class:Sn(["card p-4 mb-5",`has-background-${t.bgColor}-dark`])},[D("div",Yk,[D("div",Xk,[t.label?(Se(),xe("label",Jk,Qt(t.label),1)):Gr("",!0),Fn(D("textarea",{class:"textarea",value:t.modelValue,placeholder:t.placeholder,ref_key:"textareaRef",ref:s,onInput:o[0]||(o[0]=a=>i.$emit("update:modelValue",a.target.value))},null,40,Zk),[[oe(Ay)]])])]),D("div",eR,[D("div",tR,[ww(i.$slots,"buttons")])])],2))}},nR={class:"notes"},sR=["disabled"],rR={key:0,class:"progress is-large is-success",max:"100"},iR={key:0,class:"is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"},oR={setup(t){const e=mt(null),n=mt(""),s=Ei(),r=()=>{s.addNote(n.value),n.value="",e.value.focusTextarea()};return Cy(n,100),(i,o)=>(Se(),xe("div",nR,[De(ky,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),ref_key:"addEditNoteRef",ref:e,placeholder:"Add a new note"},{buttons:Ns(()=>[D("button",{onClick:r,class:"button is-link has-background-success",disabled:!n.value}," Add New Note ",8,sR)]),_:1},8,["modelValue"]),oe(s).showProgressBar?(Se(),xe("progress",rR)):(Se(),xe(at,{key:1},[(Se(!0),xe(at,null,vw(oe(s).notes,a=>(Se(),Uo(Qk,{key:a.id,note:a},null,8,["note"]))),128)),oe(s).notes.length?Gr("",!0):(Se(),xe("div",iR,"No notes here yet..."))],64))]))}},aR={class:"stats"},cR={class:"table is-fullwidth"},lR=D("thead",null,[D("tr",null,[D("th",null,"Stats"),D("th",null,"Value")])],-1),uR=D("td",null,"Number of Notes",-1),hR=D("td",null,"Number of Charcters in all notes",-1),dR={setup(t){const e=mt("");Cy(e,50);const n=Ei();return(s,r)=>(Se(),xe("div",aR,[D("table",cR,[lR,D("tbody",null,[D("tr",null,[uR,D("td",null,Qt(oe(n).getNotesCount),1)]),D("tr",null,[hR,D("td",null,Qt(oe(n).getCharacterCount),1)])])]),Fn(D("input",{type:"text",class:"input",placeholder:"Do you love noteballs?","onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i)},null,512),[[oe(Ay)],[ys,e.value]])]))}},fR={class:"edit-note"},pR=["disabled"],gR={setup(t){const e=mt(""),n=Ei(),s=xk(),r=Pk();e.value=n.getNoteContent(s.params.id);const i=()=>{n.updateNotes(s.params.id,e.value),r.push("/")};return(o,a)=>(Se(),xe("div",fR,[De(ky,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=c=>e.value=c),"bg-color":"link",placeholder:"Edit Note",label:"Edit Note"},{buttons:Ns(()=>[D("button",{class:"button is-link is-light mr-2",onClick:a[0]||(a[0]=c=>o.$router.back())}," Cancel Note "),D("button",{onClick:i,class:"button is-link has-background-link",disabled:!e.value}," Save Note ",8,pR)]),_:1},8,["modelValue"])]))}};const mR={class:"auth"},yR={class:"tabs is-centered"},vR={class:"card card-auth"},wR={class:"card-content"},_R={class:"title has-text-centered"},ER=["onSubmit"],IR={class:"field"},bR=D("label",{class:"label"},"Email",-1),TR={class:"control"},SR={class:"field"},CR=D("label",{class:"label"},"Password",-1),AR={class:"control"},kR={key:0,class:"field"},RR=D("label",{class:"label"},"Re-enter Password",-1),NR={class:"control"},DR={class:"has-text-right"},OR={class:"button is-success"},PR={setup(t){const e=Ii(),n=mt(!1),s=Ze(()=>n.value?"Register":"Login"),r=Ze(()=>n.value?"Register":"Login"),i=Xt({emailId:"",password:""}),o=Xt({emailId:"",password:"",confirmPassword:""}),a=()=>{n.value?!o.emailId||!o.password||!o.confirmPassword?alert("Enter the credentials"):o.confirmPassword!=o.password?alert("Passwords do not match"):e.registerUser(o):!i.emailId||!i.password?alert("Enter the login credentials"):e.loginUser(i)};return(c,l)=>(Se(),xe("div",mR,[D("div",yR,[D("ul",null,[D("li",{class:Sn({"is-active":!n.value})},[D("a",{onClick:l[0]||(l[0]=vr(u=>n.value=!1,["prevent"]))},"Login")],2),D("li",{class:Sn({"is-active":n.value})},[D("a",{onClick:l[1]||(l[1]=vr(u=>n.value=!0,["prevent"]))},"Register")],2)])]),D("div",vR,[D("div",wR,[D("div",_R,Qt(oe(s)),1),D("form",{onSubmit:vr(a,["prevent"])},[D("div",IR,[bR,D("div",TR,[n.value?Fn((Se(),xe("input",{key:1,class:"input",type:"email","onUpdate:modelValue":l[3]||(l[3]=u=>oe(o).emailId=u),placeholder:"e.g. alexsmith@gmail.com"},null,512)),[[ys,oe(o).emailId]]):Fn((Se(),xe("input",{key:0,class:"input",type:"email","onUpdate:modelValue":l[2]||(l[2]=u=>oe(i).emailId=u),placeholder:"e.g. alexsmith@gmail.com"},null,512)),[[ys,oe(i).emailId]])])]),D("div",SR,[CR,D("div",AR,[n.value?Fn((Se(),xe("input",{key:1,class:"input",type:"password","onUpdate:modelValue":l[5]||(l[5]=u=>oe(o).password=u),placeholder:"Enter a password"},null,512)),[[ys,oe(o).password]]):Fn((Se(),xe("input",{key:0,class:"input",type:"password","onUpdate:modelValue":l[4]||(l[4]=u=>oe(i).password=u),placeholder:"Enter a password"},null,512)),[[ys,oe(i).password]])])]),n.value?(Se(),xe("div",kR,[RR,D("div",NR,[Fn(D("input",{class:"input",type:"password","onUpdate:modelValue":l[6]||(l[6]=u=>oe(o).confirmPassword=u),placeholder:"Confirm password"},null,512),[[ys,oe(o).confirmPassword]])])])):Gr("",!0),D("div",DR,[D("button",OR,Qt(oe(r)),1)])],40,ER)])])]))}},xR=[{path:"/",name:"notes",component:oR},{path:"/editNote/:id",name:"edit-note",component:gR},{path:"/stats",name:"stats",component:dR},{path:"/auth",name:"auth",component:PR}],Mu=Dk({history:zA(),routes:xR});Mu.beforeEach(async(t,e)=>{const n=Ii();if(!n.user.id&&t.name!=="auth")return{name:"auth"};if(n.user.id&&t.name==="auth")return!1});const Ry=r_();Ry.use(({store:t})=>{t.router=Zn(Mu)});t_(AA).use(Ry).use(Mu).mount("#app");
