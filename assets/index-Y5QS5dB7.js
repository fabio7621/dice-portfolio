(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nf(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const lt={},Ss=[],ci=()=>{},wp=()=>!1,il=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),rl=n=>n.startsWith("onUpdate:"),Rt=Object.assign,rf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xg=Object.prototype.hasOwnProperty,Je=(n,e)=>Xg.call(n,e),Oe=Array.isArray,Ms=n=>zo(n)==="[object Map]",Rp=n=>zo(n)==="[object Set]",hh=n=>zo(n)==="[object Date]",He=n=>typeof n=="function",Mt=n=>typeof n=="string",Fn=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",Cp=n=>(tt(n)||He(n))&&He(n.then)&&He(n.catch),Pp=Object.prototype.toString,zo=n=>Pp.call(n),qg=n=>zo(n).slice(8,-1),Dp=n=>zo(n)==="[object Object]",sl=n=>Mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,uo=nf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ol=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Yg=/-\w/g,Zt=ol(n=>n.replace(Yg,e=>e.slice(1).toUpperCase())),Kg=/\B([A-Z])/g,Kr=ol(n=>n.replace(Kg,"-$1").toLowerCase()),al=ol(n=>n.charAt(0).toUpperCase()+n.slice(1)),Dl=ol(n=>n?`on${al(n)}`:""),si=(n,e)=>!Object.is(n,e),Ll=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Lp=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},jg=n=>{const e=parseFloat(n);return isNaN(e)?n:e},$g=n=>{const e=Mt(n)?Number(n):NaN;return isNaN(e)?n:e};let dh;const ll=()=>dh||(dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sf(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Mt(i)?e0(i):sf(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Mt(n)||tt(n))return n}const Zg=/;(?![^(]*\))/g,Jg=/:([^]+)/,Qg=/\/\*[^]*?\*\//g;function e0(n){const e={};return n.replace(Qg,"").split(Zg).forEach(t=>{if(t){const i=t.split(Jg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function of(n){let e="";if(Mt(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=of(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const t0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",n0=nf(t0);function Ip(n){return!!n||n===""}function i0(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=af(n[i],e[i]);return t}function af(n,e){if(n===e)return!0;let t=hh(n),i=hh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Fn(n),i=Fn(e),t||i)return n===e;if(t=Oe(n),i=Oe(e),t||i)return t&&i?i0(n,e):!1;if(t=tt(n),i=tt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!af(n[o],e[o]))return!1}}return String(n)===String(e)}const Up=n=>!!(n&&n.__v_isRef===!0),ys=n=>Mt(n)?n:n==null?"":Oe(n)||tt(n)&&(n.toString===Pp||!He(n.toString))?Up(n)?ys(n.value):JSON.stringify(n,Np,2):String(n),Np=(n,e)=>Up(e)?Np(n,e.value):Ms(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Il(i,s)+" =>"]=r,t),{})}:Rp(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Il(t))}:Fn(e)?Il(e):tt(e)&&!Oe(e)&&!Dp(e)?String(e):e,Il=(n,e="")=>{var t;return Fn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class Op{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){this._on>0&&--this._on===0&&(Bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fp(n){return new Op(n)}function Bp(){return Bt}function r0(n,e=!1){Bt&&Bt.cleanups.push(n)}let ot;const Ul=new WeakSet;class zp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ul.has(this)&&(Ul.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ph(this),kp(this);const e=ot,t=Yn;ot=this,Yn=!0;try{return this.fn()}finally{Gp(this),ot=e,Yn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uf(e);this.deps=this.depsTail=void 0,ph(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ul.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oc(this)&&this.run()}get dirty(){return Oc(this)}}let Hp=0,fo,ho;function Vp(n,e=!1){if(n.flags|=8,e){n.next=ho,ho=n;return}n.next=fo,fo=n}function lf(){Hp++}function cf(){if(--Hp>0)return;if(ho){let e=ho;for(ho=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;fo;){let e=fo;for(fo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function kp(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gp(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),uf(i),s0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Oc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Wp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Eo)||(n.globalVersion=Eo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Oc(n))))return;n.flags|=2;const e=n.dep,t=ot,i=Yn;ot=n,Yn=!0;try{kp(n);const r=n.fn(n._value);(e.version===0||si(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ot=t,Yn=i,Gp(n),n.flags&=-3}}function uf(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)uf(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function s0(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Yn=!0;const Xp=[];function Di(){Xp.push(Yn),Yn=!1}function Li(){const n=Xp.pop();Yn=n===void 0?!0:n}function ph(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ot;ot=void 0;try{e()}finally{ot=t}}}let Eo=0;class o0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ff{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ot||!Yn||ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ot)t=this.activeLink=new o0(ot,this),ot.deps?(t.prevDep=ot.depsTail,ot.depsTail.nextDep=t,ot.depsTail=t):ot.deps=ot.depsTail=t,qp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ot.depsTail,t.nextDep=void 0,ot.depsTail.nextDep=t,ot.depsTail=t,ot.deps===t&&(ot.deps=i)}return t}trigger(e){this.version++,Eo++,this.notify(e)}notify(e){lf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{cf()}}}function qp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Oa=new WeakMap,Br=Symbol(""),Fc=Symbol(""),To=Symbol("");function zt(n,e,t){if(Yn&&ot){let i=Oa.get(n);i||Oa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new ff),r.map=i,r.key=t),r.track()}}function Ai(n,e,t,i,r,s){const o=Oa.get(n);if(!o){Eo++;return}const a=l=>{l&&l.trigger()};if(lf(),e==="clear")o.forEach(a);else{const l=Oe(n),c=l&&sl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===To||!Fn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(To)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Br)),Ms(n)&&a(o.get(Fc)));break;case"delete":l||(a(o.get(Br)),Ms(n)&&a(o.get(Fc)));break;case"set":Ms(n)&&a(o.get(Br));break}}cf()}function a0(n,e){const t=Oa.get(n);return t&&t.get(e)}function Jr(n){const e=qe(n);return e===n?e:(zt(e,"iterate",To),En(n)?e:e.map(Kn))}function cl(n){return zt(n=qe(n),"iterate",To),n}function ni(n,e){return Ii(n)?Ps(Pi(n)?Kn(e):e):Kn(e)}const l0={__proto__:null,[Symbol.iterator](){return Nl(this,Symbol.iterator,n=>ni(this,n))},concat(...n){return Jr(this).concat(...n.map(e=>Oe(e)?Jr(e):e))},entries(){return Nl(this,"entries",n=>(n[1]=ni(this,n[1]),n))},every(n,e){return di(this,"every",n,e,void 0,arguments)},filter(n,e){return di(this,"filter",n,e,t=>t.map(i=>ni(this,i)),arguments)},find(n,e){return di(this,"find",n,e,t=>ni(this,t),arguments)},findIndex(n,e){return di(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return di(this,"findLast",n,e,t=>ni(this,t),arguments)},findLastIndex(n,e){return di(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return di(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ol(this,"includes",n)},indexOf(...n){return Ol(this,"indexOf",n)},join(n){return Jr(this).join(n)},lastIndexOf(...n){return Ol(this,"lastIndexOf",n)},map(n,e){return di(this,"map",n,e,void 0,arguments)},pop(){return js(this,"pop")},push(...n){return js(this,"push",n)},reduce(n,...e){return mh(this,"reduce",n,e)},reduceRight(n,...e){return mh(this,"reduceRight",n,e)},shift(){return js(this,"shift")},some(n,e){return di(this,"some",n,e,void 0,arguments)},splice(...n){return js(this,"splice",n)},toReversed(){return Jr(this).toReversed()},toSorted(n){return Jr(this).toSorted(n)},toSpliced(...n){return Jr(this).toSpliced(...n)},unshift(...n){return js(this,"unshift",n)},values(){return Nl(this,"values",n=>ni(this,n))}};function Nl(n,e,t){const i=cl(n),r=i[e]();return i!==n&&!En(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const c0=Array.prototype;function di(n,e,t,i,r,s){const o=cl(n),a=o!==n&&!En(n),l=o[e];if(l!==c0[e]){const f=l.apply(n,s);return a?Kn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,ni(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function mh(n,e,t,i){const r=cl(n),s=r!==n&&!En(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=ni(n,c)),t.call(this,c,ni(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?ni(n,l):l}function Ol(n,e,t){const i=qe(n);zt(i,"iterate",To);const r=i[e](...t);return(r===-1||r===!1)&&ul(t[0])?(t[0]=qe(t[0]),i[e](...t)):r}function js(n,e,t=[]){Di(),lf();const i=qe(n)[e].apply(n,t);return cf(),Li(),i}const u0=nf("__proto__,__v_isRef,__isVue"),Yp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Fn));function f0(n){Fn(n)||(n=String(n));const e=qe(this);return zt(e,"has",n),e.hasOwnProperty(n)}class Kp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?M0:Jp:s?Zp:$p).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Oe(e);if(!r){let l;if(o&&(l=l0[t]))return l;if(t==="hasOwnProperty")return f0}const a=Reflect.get(e,t,xt(e)?e:i);if((Fn(t)?Yp.has(t):u0(t))||(r||zt(e,"get",t),s))return a;if(xt(a)){const l=o&&sl(t)?a:a.value;return r&&tt(l)?zc(l):l}return tt(a)?r?zc(a):Ho(a):a}}class jp extends Kp{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Oe(e)&&sl(t);if(!this._isShallow){const c=Ii(s);if(!En(i)&&!Ii(i)&&(s=qe(s),i=qe(i)),!o&&xt(s)&&!xt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Je(e,t),l=Reflect.set(e,t,i,xt(e)?e:r);return e===qe(r)&&(a?si(i,s)&&Ai(e,"set",t,i):Ai(e,"add",t,i)),l}deleteProperty(e,t){const i=Je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ai(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Fn(t)||!Yp.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",Oe(e)?"length":Br),Reflect.ownKeys(e)}}class h0 extends Kp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const d0=new jp,p0=new h0,m0=new jp(!0);const Bc=n=>n,$o=n=>Reflect.getPrototypeOf(n);function _0(n,e,t){return function(...i){const r=this.__v_raw,s=qe(r),o=Ms(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Bc:e?Ps:Kn;return!e&&zt(s,"iterate",l?Fc:Br),Rt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Zo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function g0(n,e){const t={get(r){const s=this.__v_raw,o=qe(s),a=qe(r);n||(si(r,a)&&zt(o,"get",r),zt(o,"get",a));const{has:l}=$o(o),c=e?Bc:n?Ps:Kn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&zt(qe(r),"iterate",Br),r.size},has(r){const s=this.__v_raw,o=qe(s),a=qe(r);return n||(si(r,a)&&zt(o,"has",r),zt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=qe(a),c=e?Bc:n?Ps:Kn;return!n&&zt(l,"iterate",Br),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Rt(t,n?{add:Zo("add"),set:Zo("set"),delete:Zo("delete"),clear:Zo("clear")}:{add(r){const s=qe(this),o=$o(s),a=qe(r),l=!e&&!En(r)&&!Ii(r)?a:r;return o.has.call(s,l)||si(r,l)&&o.has.call(s,r)||si(a,l)&&o.has.call(s,a)||(s.add(l),Ai(s,"add",l,l)),this},set(r,s){!e&&!En(s)&&!Ii(s)&&(s=qe(s));const o=qe(this),{has:a,get:l}=$o(o);let c=a.call(o,r);c||(r=qe(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?si(s,u)&&Ai(o,"set",r,s):Ai(o,"add",r,s),this},delete(r){const s=qe(this),{has:o,get:a}=$o(s);let l=o.call(s,r);l||(r=qe(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Ai(s,"delete",r,void 0),c},clear(){const r=qe(this),s=r.size!==0,o=r.clear();return s&&Ai(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_0(r,n,e)}),t}function hf(n,e){const t=g0(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Je(t,r)&&r in i?t:i,r,s)}const v0={get:hf(!1,!1)},x0={get:hf(!1,!0)},S0={get:hf(!0,!1)};const $p=new WeakMap,Zp=new WeakMap,Jp=new WeakMap,M0=new WeakMap;function y0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E0(n){return n.__v_skip||!Object.isExtensible(n)?0:y0(qg(n))}function Ho(n){return Ii(n)?n:df(n,!1,d0,v0,$p)}function Qp(n){return df(n,!1,m0,x0,Zp)}function zc(n){return df(n,!0,p0,S0,Jp)}function df(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=E0(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function Pi(n){return Ii(n)?Pi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ii(n){return!!(n&&n.__v_isReadonly)}function En(n){return!!(n&&n.__v_isShallow)}function ul(n){return n?!!n.__v_raw:!1}function qe(n){const e=n&&n.__v_raw;return e?qe(e):n}function pf(n){return!Je(n,"__v_skip")&&Object.isExtensible(n)&&Lp(n,"__v_skip",!0),n}const Kn=n=>tt(n)?Ho(n):n,Ps=n=>tt(n)?zc(n):n;function xt(n){return n?n.__v_isRef===!0:!1}function mf(n){return em(n,!1)}function T0(n){return em(n,!0)}function em(n,e){return xt(n)?n:new b0(n,e)}class b0{constructor(e,t){this.dep=new ff,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:qe(e),this._value=t?e:Kn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||En(e)||Ii(e);e=i?e:qe(e),si(e,t)&&(this._rawValue=e,this._value=i?e:Kn(e),this.dep.trigger())}}function gn(n){return xt(n)?n.value:n}const A0={get:(n,e,t)=>e==="__v_raw"?n:gn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return xt(r)&&!xt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function tm(n){return Pi(n)?n:new Proxy(n,A0)}function w0(n){const e=Oe(n)?new Array(n.length):{};for(const t in n)e[t]=C0(n,t);return e}class R0{constructor(e,t,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Fn(t)?t:String(t),this._raw=qe(e);let r=!0,s=e;if(!Oe(e)||Fn(this._key)||!sl(this._key))do r=!ul(s)||En(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=gn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&xt(this._raw[this._key])){const t=this._object[this._key];if(xt(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return a0(this._raw,this._key)}}function C0(n,e,t){return new R0(n,e,t)}class P0{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ff(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return Vp(this,!0),!0}get value(){const e=this.dep.track();return Wp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function D0(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new P0(i,r,t)}const Jo={},Fa=new WeakMap;let wr;function L0(n,e=!1,t=wr){if(t){let i=Fa.get(t);i||Fa.set(t,i=[]),i.push(n)}}function I0(n,e,t=lt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:En(E)||r===!1||r===0?$i(E,1):$i(E);let u,f,h,d,g=!1,_=!1;if(xt(n)?(f=()=>n.value,g=En(n)):Pi(n)?(f=()=>c(n),g=!0):Oe(n)?(_=!0,g=n.some(E=>Pi(E)||En(E)),f=()=>n.map(E=>{if(xt(E))return E.value;if(Pi(E))return c(E);if(He(E))return l?l(E,2):E()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Di();try{h()}finally{Li()}}const E=wr;wr=u;try{return l?l(n,3,[d]):n(d)}finally{wr=E}}:f=ci,e&&r){const E=f,C=r===!0?1/0:r;f=()=>$i(E(),C)}const p=Bp(),m=()=>{u.stop(),p&&p.active&&rf(p.effects,u)};if(s&&e){const E=e;e=(...C)=>{E(...C),m()}}let y=_?new Array(n.length).fill(Jo):Jo;const S=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const C=u.run();if(r||g||(_?C.some((R,b)=>si(R,y[b])):si(C,y))){h&&h();const R=wr;wr=u;try{const b=[C,y===Jo?void 0:_&&y[0]===Jo?[]:y,d];y=C,l?l(e,3,b):e(...b)}finally{wr=R}}}else u.run()};return a&&a(S),u=new zp(f),u.scheduler=o?()=>o(S,!1):S,d=E=>L0(E,!1,u),h=u.onStop=()=>{const E=Fa.get(u);if(E){if(l)l(E,4);else for(const C of E)C();Fa.delete(u)}},e?i?S(!0):y=u.run():o?o(S.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function $i(n,e=1/0,t){if(e<=0||!tt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,xt(n))$i(n.value,e,t);else if(Oe(n))for(let i=0;i<n.length;i++)$i(n[i],e,t);else if(Rp(n)||Ms(n))n.forEach(i=>{$i(i,e,t)});else if(Dp(n)){for(const i in n)$i(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&$i(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vo(n,e,t,i){try{return i?n(...i):n()}catch(r){fl(r,e,t)}}function jn(n,e,t,i){if(He(n)){const r=Vo(n,e,t,i);return r&&Cp(r)&&r.catch(s=>{fl(s,e,t)}),r}if(Oe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(jn(n[s],e,t,i));return r}}function fl(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||lt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Di(),Vo(s,null,10,[n,l,c]),Li();return}}U0(n,t,r,i,o)}function U0(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Yt=[];let Jn=-1;const Es=[];let Ki=null,ms=0;const nm=Promise.resolve();let Ba=null;function _f(n){const e=Ba||nm;return n?e.then(this?n.bind(this):n):e}function N0(n){let e=Jn+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,r=Yt[i],s=bo(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function gf(n){if(!(n.flags&1)){const e=bo(n),t=Yt[Yt.length-1];!t||!(n.flags&2)&&e>=bo(t)?Yt.push(n):Yt.splice(N0(e),0,n),n.flags|=1,im()}}function im(){Ba||(Ba=nm.then(sm))}function O0(n){Oe(n)?Es.push(...n):Ki&&n.id===-1?Ki.splice(ms+1,0,n):n.flags&1||(Es.push(n),n.flags|=1),im()}function _h(n,e,t=Jn+1){for(;t<Yt.length;t++){const i=Yt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Yt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function rm(n){if(Es.length){const e=[...new Set(Es)].sort((t,i)=>bo(t)-bo(i));if(Es.length=0,Ki){Ki.push(...e);return}for(Ki=e,ms=0;ms<Ki.length;ms++){const t=Ki[ms];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ki=null,ms=0}}const bo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function sm(n){try{for(Jn=0;Jn<Yt.length;Jn++){const e=Yt[Jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jn<Yt.length;Jn++){const e=Yt[Jn];e&&(e.flags&=-2)}Jn=-1,Yt.length=0,rm(),Ba=null,(Yt.length||Es.length)&&sm()}}let Xn=null,om=null;function za(n){const e=Xn;return Xn=n,om=n&&n.type.__scopeId||null,e}function Hc(n,e=Xn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ka(-1);const s=za(e);let o;try{o=n(...r)}finally{za(s),i._d&&ka(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function mr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Di(),jn(l,t,8,[n.el,a,n,e]),Li())}}function ya(n,e){if(Ht){let t=Ht.provides;const i=Ht.parent&&Ht.parent.provides;i===t&&(t=Ht.provides=Object.create(i)),t[n]=e}}function On(n,e,t=!1){const i=Ef();if(i||zr){let r=zr?zr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}function F0(){return!!(Ef()||zr)}const B0=Symbol.for("v-scx"),z0=()=>On(B0);function tr(n,e,t){return am(n,e,t)}function am(n,e,t=lt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Rt({},t),l=e&&i||!e&&s!=="post";let c;if(Ro){if(s==="sync"){const d=z0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ci,d.resume=ci,d.pause=ci,d}}const u=Ht;a.call=(d,g,_)=>jn(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{nn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():gf(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=I0(n,e,a);return Ro&&(c?c.push(h):l&&h()),h}function H0(n,e,t){const i=this.proxy,r=Mt(n)?n.includes(".")?lm(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=ko(this),a=am(r,s.bind(i),t);return o(),a}function lm(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const V0=Symbol("_vte"),cm=n=>n.__isTeleport,Qn=Symbol("_leaveCb"),$s=Symbol("_enterCb");function k0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vf(()=>{n.isMounted=!0}),xf(()=>{n.isUnmounting=!0}),n}const Rn=[Function,Array],um={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rn,onEnter:Rn,onAfterEnter:Rn,onEnterCancelled:Rn,onBeforeLeave:Rn,onLeave:Rn,onAfterLeave:Rn,onLeaveCancelled:Rn,onBeforeAppear:Rn,onAppear:Rn,onAfterAppear:Rn,onAppearCancelled:Rn},fm=n=>{const e=n.subTree;return e.component?fm(e.component):e},G0={name:"BaseTransition",props:um,setup(n,{slots:e}){const t=Ef(),i=k0();return()=>{const r=e.default&&pm(e.default(),!0);if(!r||!r.length)return;const s=hm(r),o=qe(n),{mode:a}=o;if(i.isLeaving)return Fl(s);const l=gh(s);if(!l)return Fl(s);let c=Vc(l,o,i,t,f=>c=f);l.type!==Kt&&Ao(l,c);let u=t.subTree&&gh(t.subTree);if(u&&u.type!==Kt&&!Dr(u,l)&&fm(t).type!==Kt){let f=Vc(u,o,i,t);if(Ao(u,f),a==="out-in"&&l.type!==Kt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Fl(s);a==="in-out"&&l.type!==Kt?f.delayLeave=(h,d,g)=>{const _=dm(i,u);_[String(u.key)]=u,h[Qn]=()=>{d(),h[Qn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function hm(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Kt){e=t;break}}return e}const W0=G0;function dm(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Vc(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:m,onAfterAppear:y,onAppearCancelled:S}=e,E=String(n.key),C=dm(t,n),R=(L,x)=>{L&&jn(L,i,9,x)},b=(L,x)=>{const T=x[1];R(L,x),Oe(L)?L.every(I=>I.length<=1)&&T():L.length<=1&&T()},D={mode:o,persisted:a,beforeEnter(L){let x=l;if(!t.isMounted)if(s)x=p||l;else return;L[Qn]&&L[Qn](!0);const T=C[E];T&&Dr(n,T)&&T.el[Qn]&&T.el[Qn](),R(x,[L])},enter(L){if(C[E]===n)return;let x=c,T=u,I=f;if(!t.isMounted)if(s)x=m||c,T=y||u,I=S||f;else return;let N=!1;L[$s]=ee=>{N||(N=!0,ee?R(I,[L]):R(T,[L]),D.delayedLeave&&D.delayedLeave(),L[$s]=void 0)};const K=L[$s].bind(null,!1);x?b(x,[L,K]):K()},leave(L,x){const T=String(n.key);if(L[$s]&&L[$s](!0),t.isUnmounting)return x();R(h,[L]);let I=!1;L[Qn]=K=>{I||(I=!0,x(),K?R(_,[L]):R(g,[L]),L[Qn]=void 0,C[T]===n&&delete C[T])};const N=L[Qn].bind(null,!1);C[T]=n,d?b(d,[L,N]):N()},clone(L){const x=Vc(L,e,t,i,r);return r&&r(x),x}};return D}function Fl(n){if(hl(n))return n=or(n),n.children=null,n}function gh(n){if(!hl(n))return cm(n.type)&&n.children?hm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&He(t.default))return t.default()}}function Ao(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ao(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function pm(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Dn?(o.patchFlag&128&&r++,i=i.concat(pm(o.children,e,a))):(e||o.type!==Kt)&&i.push(a!=null?or(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function mm(n,e){return He(n)?Rt({name:n.name},e,{setup:n}):n}function _m(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function vh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ha=new WeakMap;function po(n,e,t,i,r=!1){if(Oe(n)){n.forEach((_,p)=>po(_,e&&(Oe(e)?e[p]:e),t,i,r));return}if(mo(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&po(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Tf(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===lt?a.refs={}:a.refs,f=a.setupState,h=qe(f),d=f===lt?wp:_=>vh(u,_)?!1:Je(h,_),g=(_,p)=>!(p&&vh(u,p));if(c!=null&&c!==l){if(xh(e),Mt(c))u[c]=null,d(c)&&(f[c]=null);else if(xt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(He(l))Vo(l,a,12,[o,u]);else{const _=Mt(l),p=xt(l);if(_||p){const m=()=>{if(n.f){const y=_?d(l)?f[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)Oe(y)&&rf(y,s);else if(Oe(y))y.includes(s)||y.push(s);else if(_)u[l]=[s],d(l)&&(f[l]=u[l]);else{const S=[s];g(l,n.k)&&(l.value=S),n.k&&(u[n.k]=S)}}else _?(u[l]=o,d(l)&&(f[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{m(),Ha.delete(n)};y.id=-1,Ha.set(n,y),nn(y,t)}else xh(n),m()}}}function xh(n){const e=Ha.get(n);e&&(e.flags|=8,Ha.delete(n))}ll().requestIdleCallback;ll().cancelIdleCallback;const mo=n=>!!n.type.__asyncLoader,hl=n=>n.type.__isKeepAlive;function X0(n,e){gm(n,"a",e)}function q0(n,e){gm(n,"da",e)}function gm(n,e,t=Ht){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(dl(e,i,t),t){let r=t.parent;for(;r&&r.parent;)hl(r.parent.vnode)&&Y0(i,e,t,r),r=r.parent}}function Y0(n,e,t,i){const r=dl(e,n,i,!0);vm(()=>{rf(i[e],r)},t)}function dl(n,e,t=Ht,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Di();const a=ko(t),l=jn(e,t,n,o);return a(),Li(),l});return i?r.unshift(s):r.push(s),s}}const Fi=n=>(e,t=Ht)=>{(!Ro||n==="sp")&&dl(n,(...i)=>e(...i),t)},K0=Fi("bm"),vf=Fi("m"),j0=Fi("bu"),$0=Fi("u"),xf=Fi("bum"),vm=Fi("um"),Z0=Fi("sp"),J0=Fi("rtg"),Q0=Fi("rtc");function ev(n,e=Ht){dl("ec",n,e)}const xm="components";function tv(n,e){return Mm(xm,n,!0,e)||n}const Sm=Symbol.for("v-ndc");function nv(n){return Mt(n)?Mm(xm,n,!1)||n:n||Sm}function Mm(n,e,t=!0,i=!1){const r=Xn||Ht;if(r){const s=r.type;{const a=kv(s,!1);if(a&&(a===e||a===Zt(e)||a===al(Zt(e))))return s}const o=Sh(r[n]||s[n],e)||Sh(r.appContext[n],e);return!o&&i?s:o}}function Sh(n,e){return n&&(n[e]||n[Zt(e)]||n[al(Zt(e))])}function iv(n,e,t,i){let r;const s=t,o=Oe(n);if(o||Mt(n)){const a=o&&Pi(n);let l=!1,c=!1;a&&(l=!En(n),c=Ii(n),n=cl(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Ps(Kn(n[u])):Kn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const kc=n=>n?km(n)?Tf(n):kc(n.parent):null,_o=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kc(n.parent),$root:n=>kc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Em(n),$forceUpdate:n=>n.f||(n.f=()=>{gf(n.update)}),$nextTick:n=>n.n||(n.n=_f.bind(n.proxy)),$watch:n=>H0.bind(n)}),Bl=(n,e)=>n!==lt&&!n.__isScriptSetup&&Je(n,e),rv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Bl(i,e))return o[e]=1,i[e];if(r!==lt&&Je(r,e))return o[e]=2,r[e];if(Je(s,e))return o[e]=3,s[e];if(t!==lt&&Je(t,e))return o[e]=4,t[e];Gc&&(o[e]=0)}}const c=_o[e];let u,f;if(c)return e==="$attrs"&&zt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==lt&&Je(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Je(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Bl(r,e)?(r[e]=t,!0):i!==lt&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==lt&&a[0]!=="$"&&Je(n,a)||Bl(e,a)||Je(s,a)||Je(i,a)||Je(_o,a)||Je(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Mh(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Gc=!0;function sv(n){const e=Em(n),t=n.proxy,i=n.ctx;Gc=!1,e.beforeCreate&&yh(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:y,destroyed:S,unmounted:E,render:C,renderTracked:R,renderTriggered:b,errorCaptured:D,serverPrefetch:L,expose:x,inheritAttrs:T,components:I,directives:N,filters:K}=e;if(c&&ov(c,i,null),o)for(const X in o){const G=o[X];He(G)&&(i[X]=G.bind(t))}if(r){const X=r.call(t,t);tt(X)&&(n.data=Ho(X))}if(Gc=!0,s)for(const X in s){const G=s[X],me=He(G)?G.bind(t,t):He(G.get)?G.get.bind(t,t):ci,_e=!He(G)&&He(G.set)?G.set.bind(t):ci,ge=In({get:me,set:_e});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Le=>ge.value=Le})}if(a)for(const X in a)ym(a[X],i,t,X);if(l){const X=He(l)?l.call(t):l;Reflect.ownKeys(X).forEach(G=>{ya(G,X[G])})}u&&yh(u,n,"c");function k(X,G){Oe(G)?G.forEach(me=>X(me.bind(t))):G&&X(G.bind(t))}if(k(K0,f),k(vf,h),k(j0,d),k($0,g),k(X0,_),k(q0,p),k(ev,D),k(Q0,R),k(J0,b),k(xf,y),k(vm,E),k(Z0,L),Oe(x))if(x.length){const X=n.exposed||(n.exposed={});x.forEach(G=>{Object.defineProperty(X,G,{get:()=>t[G],set:me=>t[G]=me,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===ci&&(n.render=C),T!=null&&(n.inheritAttrs=T),I&&(n.components=I),N&&(n.directives=N),L&&_m(n)}function ov(n,e,t=ci){Oe(n)&&(n=Wc(n));for(const i in n){const r=n[i];let s;tt(r)?"default"in r?s=On(r.from||i,r.default,!0):s=On(r.from||i):s=On(r),xt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function yh(n,e,t){jn(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ym(n,e,t,i){let r=i.includes(".")?lm(t,i):()=>t[i];if(Mt(n)){const s=e[n];He(s)&&tr(r,s)}else if(He(n))tr(r,n.bind(t));else if(tt(n))if(Oe(n))n.forEach(s=>ym(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&tr(r,s,n)}}function Em(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Va(l,c,o,!0)),Va(l,e,o)),tt(e)&&s.set(e,l),l}function Va(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Va(n,s,t,!0),r&&r.forEach(o=>Va(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=av[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const av={data:Eh,props:Th,emits:Th,methods:oo,computed:oo,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:oo,directives:oo,watch:cv,provide:Eh,inject:lv};function Eh(n,e){return e?n?function(){return Rt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function lv(n,e){return oo(Wc(n),Wc(e))}function Wc(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wt(n,e){return n?[...new Set([].concat(n,e))]:e}function oo(n,e){return n?Rt(Object.create(null),n,e):e}function Th(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:Rt(Object.create(null),Mh(n),Mh(e??{})):e}function cv(n,e){if(!n)return e;if(!e)return n;const t=Rt(Object.create(null),n);for(const i in e)t[i]=Wt(n[i],e[i]);return t}function Tm(){return{app:null,config:{isNativeTag:wp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uv=0;function fv(n,e){return function(i,r=null){He(i)||(i=Rt({},i)),r!=null&&!tt(r)&&(r=null);const s=Tm(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:uv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Wv,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&He(u.install)?(o.add(u),u.install(c,...f)):He(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Lt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Tf(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(jn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=zr;zr=c;try{return u()}finally{zr=f}}};return c}}let zr=null;const hv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Zt(e)}Modifiers`]||n[`${Kr(e)}Modifiers`];function dv(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let r=t;const s=e.startsWith("update:"),o=s&&hv(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Mt(u)?u.trim():u)),o.number&&(r=t.map(jg)));let a,l=i[a=Dl(e)]||i[a=Dl(Zt(e))];!l&&s&&(l=i[a=Dl(Kr(e))]),l&&jn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,jn(c,n,6,r)}}const pv=new WeakMap;function bm(n,e,t=!1){const i=t?pv:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=bm(c,e,!0);u&&(a=!0,Rt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(tt(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>o[l]=null):Rt(o,s),tt(n)&&i.set(n,o),o)}function pl(n,e){return!n||!il(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,Kr(e))||Je(n,e))}function bh(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,p=za(n);let m,y;try{if(t.shapeFlag&4){const E=r||i,C=E;m=ii(c.call(C,E,u,f,d,h,g)),y=a}else{const E=e;m=ii(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),y=e.props?a:mv(a)}}catch(E){go.length=0,fl(E,n,1),m=Lt(Kt)}let S=m;if(y&&_!==!1){const E=Object.keys(y),{shapeFlag:C}=S;E.length&&C&7&&(s&&E.some(rl)&&(y=_v(y,s)),S=or(S,y,!1,!0))}return t.dirs&&(S=or(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Ao(S,t.transition),m=S,za(p),m}const mv=n=>{let e;for(const t in n)(t==="class"||t==="style"||il(t))&&((e||(e={}))[t]=n[t]);return e},_v=(n,e)=>{const t={};for(const i in n)(!rl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function gv(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ah(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Am(o,i,h)&&!pl(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ah(i,o,c):!0:!!o;return!1}function Ah(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Am(e,n,s)&&!pl(t,s))return!0}return!1}function Am(n,e,t){const i=n[t],r=e[t];return t==="style"&&tt(i)&&tt(r)?!af(i,r):i!==r}function vv({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const wm={},Rm=()=>Object.create(wm),Cm=n=>Object.getPrototypeOf(n)===wm;function xv(n,e,t,i=!1){const r={},s=Rm();n.propsDefaults=Object.create(null),Pm(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Qp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Sv(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=qe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(pl(n.emitsOptions,h))continue;const d=e[h];if(l)if(Je(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Zt(h);r[g]=Xc(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Pm(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Je(e,f)&&((u=Kr(f))===f||!Je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Xc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Je(e,f))&&(delete s[f],c=!0)}c&&Ai(n.attrs,"set","")}function Pm(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(uo(l))continue;const c=e[l];let u;r&&Je(r,u=Zt(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:pl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=qe(t),c=a||lt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Xc(r,l,f,c[f],n,!Je(c,f))}}return o}function Xc(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ko(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Kr(t))&&(i=!0))}return i}const Mv=new WeakMap;function Dm(n,e,t=!1){const i=t?Mv:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[h,d]=Dm(f,e,!0);Rt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,Ss),Ss;if(Oe(s))for(let u=0;u<s.length;u++){const f=Zt(s[u]);wh(f)&&(o[f]=lt)}else if(s)for(const u in s){const f=Zt(u);if(wh(f)){const h=s[u],d=o[f]=Oe(h)||He(h)?{type:h}:Rt({},h),g=d.type;let _=!1,p=!0;if(Oe(g))for(let m=0;m<g.length;++m){const y=g[m],S=He(y)&&y.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(p=!1)}else _=He(g)&&g.name==="Boolean";d[0]=_,d[1]=p,(_||Je(d,"default"))&&a.push(f)}}const c=[o,a];return tt(n)&&i.set(n,c),c}function wh(n){return n[0]!=="$"&&!uo(n)}const Sf=n=>n==="_"||n==="_ctx"||n==="$stable",Mf=n=>Oe(n)?n.map(ii):[ii(n)],yv=(n,e,t)=>{if(e._n)return e;const i=Hc((...r)=>Mf(e(...r)),t);return i._c=!1,i},Lm=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Sf(r))continue;const s=n[r];if(He(s))e[r]=yv(r,s,i);else if(s!=null){const o=Mf(s);e[r]=()=>o}}},Im=(n,e)=>{const t=Mf(e);n.slots.default=()=>t},Um=(n,e,t)=>{for(const i in e)(t||!Sf(i))&&(n[i]=e[i])},Ev=(n,e,t)=>{const i=n.slots=Rm();if(n.vnode.shapeFlag&32){const r=e._;r?(Um(i,e,t),t&&Lp(i,"_",r,!0)):Lm(e,i)}else e&&Im(n,e)},Tv=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=lt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Um(r,e,t):(s=!e.$stable,Lm(e,r)),o=e}else e&&(Im(n,e),o={default:1});if(s)for(const a in r)!Sf(a)&&o[a]==null&&delete r[a]},nn=Cv;function bv(n){return Av(n)}function Av(n,e){const t=ll();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ci,insertStaticContent:g}=n,_=(P,M,B,Y=null,J=null,W=null,ue=void 0,ie=null,A=!!M.dynamicChildren)=>{if(P===M)return;P&&!Dr(P,M)&&(Y=H(P),Le(P,J,W,!0),P=null),M.patchFlag===-2&&(A=!1,M.dynamicChildren=null);const{type:v,ref:U,shapeFlag:F}=M;switch(v){case ml:p(P,M,B,Y);break;case Kt:m(P,M,B,Y);break;case Ea:P==null&&y(M,B,Y,ue);break;case Dn:I(P,M,B,Y,J,W,ue,ie,A);break;default:F&1?C(P,M,B,Y,J,W,ue,ie,A):F&6?N(P,M,B,Y,J,W,ue,ie,A):(F&64||F&128)&&v.process(P,M,B,Y,J,W,ue,ie,A,de)}U!=null&&J?po(U,P&&P.ref,W,M||P,!M):U==null&&P&&P.ref!=null&&po(P.ref,null,W,P,!0)},p=(P,M,B,Y)=>{if(P==null)i(M.el=a(M.children),B,Y);else{const J=M.el=P.el;M.children!==P.children&&c(J,M.children)}},m=(P,M,B,Y)=>{P==null?i(M.el=l(M.children||""),B,Y):M.el=P.el},y=(P,M,B,Y)=>{[P.el,P.anchor]=g(P.children,M,B,Y,P.el,P.anchor)},S=({el:P,anchor:M},B,Y)=>{let J;for(;P&&P!==M;)J=h(P),i(P,B,Y),P=J;i(M,B,Y)},E=({el:P,anchor:M})=>{let B;for(;P&&P!==M;)B=h(P),r(P),P=B;r(M)},C=(P,M,B,Y,J,W,ue,ie,A)=>{if(M.type==="svg"?ue="svg":M.type==="math"&&(ue="mathml"),P==null)R(M,B,Y,J,W,ue,ie,A);else{const v=P.el&&P.el._isVueCE?P.el:null;try{v&&v._beginPatch(),L(P,M,J,W,ue,ie,A)}finally{v&&v._endPatch()}}},R=(P,M,B,Y,J,W,ue,ie)=>{let A,v;const{props:U,shapeFlag:F,transition:j,dirs:q}=P;if(A=P.el=o(P.type,W,U&&U.is,U),F&8?u(A,P.children):F&16&&D(P.children,A,null,Y,J,zl(P,W),ue,ie),q&&mr(P,null,Y,"created"),b(A,P,P.scopeId,ue,Y),U){for(const ce in U)ce!=="value"&&!uo(ce)&&s(A,ce,null,U[ce],W,Y);"value"in U&&s(A,"value",null,U.value,W),(v=U.onVnodeBeforeMount)&&Zn(v,Y,P)}q&&mr(P,null,Y,"beforeMount");const he=wv(J,j);he&&j.beforeEnter(A),i(A,M,B),((v=U&&U.onVnodeMounted)||he||q)&&nn(()=>{try{v&&Zn(v,Y,P),he&&j.enter(A),q&&mr(P,null,Y,"mounted")}finally{}},J)},b=(P,M,B,Y,J)=>{if(B&&d(P,B),Y)for(let W=0;W<Y.length;W++)d(P,Y[W]);if(J){let W=J.subTree;if(M===W||Bm(W.type)&&(W.ssContent===M||W.ssFallback===M)){const ue=J.vnode;b(P,ue,ue.scopeId,ue.slotScopeIds,J.parent)}}},D=(P,M,B,Y,J,W,ue,ie,A=0)=>{for(let v=A;v<P.length;v++){const U=P[v]=ie?Ti(P[v]):ii(P[v]);_(null,U,M,B,Y,J,W,ue,ie)}},L=(P,M,B,Y,J,W,ue)=>{const ie=M.el=P.el;let{patchFlag:A,dynamicChildren:v,dirs:U}=M;A|=P.patchFlag&16;const F=P.props||lt,j=M.props||lt;let q;if(B&&_r(B,!1),(q=j.onVnodeBeforeUpdate)&&Zn(q,B,M,P),U&&mr(M,P,B,"beforeUpdate"),B&&_r(B,!0),(F.innerHTML&&j.innerHTML==null||F.textContent&&j.textContent==null)&&u(ie,""),v?x(P.dynamicChildren,v,ie,B,Y,zl(M,J),W):ue||G(P,M,ie,null,B,Y,zl(M,J),W,!1),A>0){if(A&16)T(ie,F,j,B,J);else if(A&2&&F.class!==j.class&&s(ie,"class",null,j.class,J),A&4&&s(ie,"style",F.style,j.style,J),A&8){const he=M.dynamicProps;for(let ce=0;ce<he.length;ce++){const fe=he[ce],Ie=F[fe],le=j[fe];(le!==Ie||fe==="value")&&s(ie,fe,Ie,le,J,B)}}A&1&&P.children!==M.children&&u(ie,M.children)}else!ue&&v==null&&T(ie,F,j,B,J);((q=j.onVnodeUpdated)||U)&&nn(()=>{q&&Zn(q,B,M,P),U&&mr(M,P,B,"updated")},Y)},x=(P,M,B,Y,J,W,ue)=>{for(let ie=0;ie<M.length;ie++){const A=P[ie],v=M[ie],U=A.el&&(A.type===Dn||!Dr(A,v)||A.shapeFlag&198)?f(A.el):B;_(A,v,U,null,Y,J,W,ue,!0)}},T=(P,M,B,Y,J)=>{if(M!==B){if(M!==lt)for(const W in M)!uo(W)&&!(W in B)&&s(P,W,M[W],null,J,Y);for(const W in B){if(uo(W))continue;const ue=B[W],ie=M[W];ue!==ie&&W!=="value"&&s(P,W,ie,ue,J,Y)}"value"in B&&s(P,"value",M.value,B.value,J)}},I=(P,M,B,Y,J,W,ue,ie,A)=>{const v=M.el=P?P.el:a(""),U=M.anchor=P?P.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:q}=M;q&&(ie=ie?ie.concat(q):q),P==null?(i(v,B,Y),i(U,B,Y),D(M.children||[],B,U,J,W,ue,ie,A)):F>0&&F&64&&j&&P.dynamicChildren&&P.dynamicChildren.length===j.length?(x(P.dynamicChildren,j,B,J,W,ue,ie),(M.key!=null||J&&M===J.subTree)&&Nm(P,M,!0)):G(P,M,B,U,J,W,ue,ie,A)},N=(P,M,B,Y,J,W,ue,ie,A)=>{M.slotScopeIds=ie,P==null?M.shapeFlag&512?J.ctx.activate(M,B,Y,ue,A):K(M,B,Y,J,W,ue,A):ee(P,M,A)},K=(P,M,B,Y,J,W,ue)=>{const ie=P.component=Fv(P,Y,J);if(hl(P)&&(ie.ctx.renderer=de),Bv(ie,!1,ue),ie.asyncDep){if(J&&J.registerDep(ie,k,ue),!P.el){const A=ie.subTree=Lt(Kt);m(null,A,M,B),P.placeholder=A.el}}else k(ie,P,M,B,J,W,ue)},ee=(P,M,B)=>{const Y=M.component=P.component;if(gv(P,M,B))if(Y.asyncDep&&!Y.asyncResolved){X(Y,M,B);return}else Y.next=M,Y.update();else M.el=P.el,Y.vnode=M},k=(P,M,B,Y,J,W,ue)=>{const ie=()=>{if(P.isMounted){let{next:F,bu:j,u:q,parent:he,vnode:ce}=P;{const Ce=Om(P);if(Ce){F&&(F.el=ce.el,X(P,F,ue)),Ce.asyncDep.then(()=>{nn(()=>{P.isUnmounted||v()},J)});return}}let fe=F,Ie;_r(P,!1),F?(F.el=ce.el,X(P,F,ue)):F=ce,j&&Ll(j),(Ie=F.props&&F.props.onVnodeBeforeUpdate)&&Zn(Ie,he,F,ce),_r(P,!0);const le=bh(P),xe=P.subTree;P.subTree=le,_(xe,le,f(xe.el),H(xe),P,J,W),F.el=le.el,fe===null&&vv(P,le.el),q&&nn(q,J),(Ie=F.props&&F.props.onVnodeUpdated)&&nn(()=>Zn(Ie,he,F,ce),J)}else{let F;const{el:j,props:q}=M,{bm:he,m:ce,parent:fe,root:Ie,type:le}=P,xe=mo(M);_r(P,!1),he&&Ll(he),!xe&&(F=q&&q.onVnodeBeforeMount)&&Zn(F,fe,M),_r(P,!0);{Ie.ce&&Ie.ce._hasShadowRoot()&&Ie.ce._injectChildStyle(le,P.parent?P.parent.type:void 0);const Ce=P.subTree=bh(P);_(null,Ce,B,Y,P,J,W),M.el=Ce.el}if(ce&&nn(ce,J),!xe&&(F=q&&q.onVnodeMounted)){const Ce=M;nn(()=>Zn(F,fe,Ce),J)}(M.shapeFlag&256||fe&&mo(fe.vnode)&&fe.vnode.shapeFlag&256)&&P.a&&nn(P.a,J),P.isMounted=!0,M=B=Y=null}};P.scope.on();const A=P.effect=new zp(ie);P.scope.off();const v=P.update=A.run.bind(A),U=P.job=A.runIfDirty.bind(A);U.i=P,U.id=P.uid,A.scheduler=()=>gf(U),_r(P,!0),v()},X=(P,M,B)=>{M.component=P;const Y=P.vnode.props;P.vnode=M,P.next=null,Sv(P,M.props,Y,B),Tv(P,M.children,B),Di(),_h(P),Li()},G=(P,M,B,Y,J,W,ue,ie,A=!1)=>{const v=P&&P.children,U=P?P.shapeFlag:0,F=M.children,{patchFlag:j,shapeFlag:q}=M;if(j>0){if(j&128){_e(v,F,B,Y,J,W,ue,ie,A);return}else if(j&256){me(v,F,B,Y,J,W,ue,ie,A);return}}q&8?(U&16&&Se(v,J,W),F!==v&&u(B,F)):U&16?q&16?_e(v,F,B,Y,J,W,ue,ie,A):Se(v,J,W,!0):(U&8&&u(B,""),q&16&&D(F,B,Y,J,W,ue,ie,A))},me=(P,M,B,Y,J,W,ue,ie,A)=>{P=P||Ss,M=M||Ss;const v=P.length,U=M.length,F=Math.min(v,U);let j;for(j=0;j<F;j++){const q=M[j]=A?Ti(M[j]):ii(M[j]);_(P[j],q,B,null,J,W,ue,ie,A)}v>U?Se(P,J,W,!0,!1,F):D(M,B,Y,J,W,ue,ie,A,F)},_e=(P,M,B,Y,J,W,ue,ie,A)=>{let v=0;const U=M.length;let F=P.length-1,j=U-1;for(;v<=F&&v<=j;){const q=P[v],he=M[v]=A?Ti(M[v]):ii(M[v]);if(Dr(q,he))_(q,he,B,null,J,W,ue,ie,A);else break;v++}for(;v<=F&&v<=j;){const q=P[F],he=M[j]=A?Ti(M[j]):ii(M[j]);if(Dr(q,he))_(q,he,B,null,J,W,ue,ie,A);else break;F--,j--}if(v>F){if(v<=j){const q=j+1,he=q<U?M[q].el:Y;for(;v<=j;)_(null,M[v]=A?Ti(M[v]):ii(M[v]),B,he,J,W,ue,ie,A),v++}}else if(v>j)for(;v<=F;)Le(P[v],J,W,!0),v++;else{const q=v,he=v,ce=new Map;for(v=he;v<=j;v++){const Fe=M[v]=A?Ti(M[v]):ii(M[v]);Fe.key!=null&&ce.set(Fe.key,v)}let fe,Ie=0;const le=j-he+1;let xe=!1,Ce=0;const Ne=new Array(le);for(v=0;v<le;v++)Ne[v]=0;for(v=q;v<=F;v++){const Fe=P[v];if(Ie>=le){Le(Fe,J,W,!0);continue}let Ue;if(Fe.key!=null)Ue=ce.get(Fe.key);else for(fe=he;fe<=j;fe++)if(Ne[fe-he]===0&&Dr(Fe,M[fe])){Ue=fe;break}Ue===void 0?Le(Fe,J,W,!0):(Ne[Ue-he]=v+1,Ue>=Ce?Ce=Ue:xe=!0,_(Fe,M[Ue],B,null,J,W,ue,ie,A),Ie++)}const be=xe?Rv(Ne):Ss;for(fe=be.length-1,v=le-1;v>=0;v--){const Fe=he+v,Ue=M[Fe],nt=M[Fe+1],O=Fe+1<U?nt.el||Fm(nt):Y;Ne[v]===0?_(null,Ue,B,O,J,W,ue,ie,A):xe&&(fe<0||v!==be[fe]?ge(Ue,B,O,2):fe--)}}},ge=(P,M,B,Y,J=null)=>{const{el:W,type:ue,transition:ie,children:A,shapeFlag:v}=P;if(v&6){ge(P.component.subTree,M,B,Y);return}if(v&128){P.suspense.move(M,B,Y);return}if(v&64){ue.move(P,M,B,de);return}if(ue===Dn){i(W,M,B);for(let F=0;F<A.length;F++)ge(A[F],M,B,Y);i(P.anchor,M,B);return}if(ue===Ea){S(P,M,B);return}if(Y!==2&&v&1&&ie)if(Y===0)ie.beforeEnter(W),i(W,M,B),nn(()=>ie.enter(W),J);else{const{leave:F,delayLeave:j,afterLeave:q}=ie,he=()=>{P.ctx.isUnmounted?r(W):i(W,M,B)},ce=()=>{W._isLeaving&&W[Qn](!0),F(W,()=>{he(),q&&q()})};j?j(W,he,ce):ce()}else i(W,M,B)},Le=(P,M,B,Y=!1,J=!1)=>{const{type:W,props:ue,ref:ie,children:A,dynamicChildren:v,shapeFlag:U,patchFlag:F,dirs:j,cacheIndex:q,memo:he}=P;if(F===-2&&(J=!1),ie!=null&&(Di(),po(ie,null,B,P,!0),Li()),q!=null&&(M.renderCache[q]=void 0),U&256){M.ctx.deactivate(P);return}const ce=U&1&&j,fe=!mo(P);let Ie;if(fe&&(Ie=ue&&ue.onVnodeBeforeUnmount)&&Zn(Ie,M,P),U&6)ae(P.component,B,Y);else{if(U&128){P.suspense.unmount(B,Y);return}ce&&mr(P,null,M,"beforeUnmount"),U&64?P.type.remove(P,M,B,de,Y):v&&!v.hasOnce&&(W!==Dn||F>0&&F&64)?Se(v,M,B,!1,!0):(W===Dn&&F&384||!J&&U&16)&&Se(A,M,B),Y&&Ge(P)}const le=he!=null&&q==null;(fe&&(Ie=ue&&ue.onVnodeUnmounted)||ce||le)&&nn(()=>{Ie&&Zn(Ie,M,P),ce&&mr(P,null,M,"unmounted"),le&&(P.el=null)},B)},Ge=P=>{const{type:M,el:B,anchor:Y,transition:J}=P;if(M===Dn){te(B,Y);return}if(M===Ea){E(P);return}const W=()=>{r(B),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(P.shapeFlag&1&&J&&!J.persisted){const{leave:ue,delayLeave:ie}=J,A=()=>ue(B,W);ie?ie(P.el,W,A):A()}else W()},te=(P,M)=>{let B;for(;P!==M;)B=h(P),r(P),P=B;r(M)},ae=(P,M,B)=>{const{bum:Y,scope:J,job:W,subTree:ue,um:ie,m:A,a:v}=P;Rh(A),Rh(v),Y&&Ll(Y),J.stop(),W&&(W.flags|=8,Le(ue,P,M,B)),ie&&nn(ie,M),nn(()=>{P.isUnmounted=!0},M)},Se=(P,M,B,Y=!1,J=!1,W=0)=>{for(let ue=W;ue<P.length;ue++)Le(P[ue],M,B,Y,J)},H=P=>{if(P.shapeFlag&6)return H(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const M=h(P.anchor||P.el),B=M&&M[V0];return B?h(B):M};let se=!1;const re=(P,M,B)=>{let Y;P==null?M._vnode&&(Le(M._vnode,null,null,!0),Y=M._vnode.component):_(M._vnode||null,P,M,null,null,null,B),M._vnode=P,se||(se=!0,_h(Y),rm(),se=!1)},de={p:_,um:Le,m:ge,r:Ge,mt:K,mc:D,pc:G,pbc:x,n:H,o:n};return{render:re,hydrate:void 0,createApp:fv(re)}}function zl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _r({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function wv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Nm(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ti(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Nm(o,a)),a.type===ml&&(a.patchFlag===-1&&(a=r[s]=Ti(a)),a.el=o.el),a.type===Kt&&!a.el&&(a.el=o.el)}}function Rv(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Om(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Om(e)}function Rh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Fm(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Fm(e.subTree):null}const Bm=n=>n.__isSuspense;function Cv(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):O0(n)}const Dn=Symbol.for("v-fgt"),ml=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Ea=Symbol.for("v-stc"),go=[];let Sn=null;function jt(n=!1){go.push(Sn=n?null:[])}function Pv(){go.pop(),Sn=go[go.length-1]||null}let wo=1;function ka(n,e=!1){wo+=n,n<0&&Sn&&e&&(Sn.hasOnce=!0)}function zm(n){return n.dynamicChildren=wo>0?Sn||Ss:null,Pv(),wo>0&&Sn&&Sn.push(n),n}function vn(n,e,t,i,r,s){return zm(at(n,e,t,i,r,s,!0))}function Hm(n,e,t,i,r){return zm(Lt(n,e,t,i,r,!0))}function Ga(n){return n?n.__v_isVNode===!0:!1}function Dr(n,e){return n.type===e.type&&n.key===e.key}const Vm=({key:n})=>n??null,Ta=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mt(n)||xt(n)||He(n)?{i:Xn,r:n,k:e,f:!!t}:n:null);function at(n,e=null,t=null,i=0,r=null,s=n===Dn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Vm(e),ref:e&&Ta(e),scopeId:om,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xn};return a?(yf(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Mt(t)?8:16),wo>0&&!o&&Sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Sn.push(l),l}const Lt=Dv;function Dv(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Sm)&&(n=Kt),Ga(n)){const a=or(n,e,!0);return t&&yf(a,t),wo>0&&!s&&Sn&&(a.shapeFlag&6?Sn[Sn.indexOf(n)]=a:Sn.push(a)),a.patchFlag=-2,a}if(Gv(n)&&(n=n.__vccOpts),e){e=Lv(e);let{class:a,style:l}=e;a&&!Mt(a)&&(e.class=of(a)),tt(l)&&(ul(l)&&!Oe(l)&&(l=Rt({},l)),e.style=sf(l))}const o=Mt(n)?1:Bm(n)?128:cm(n)?64:tt(n)?4:He(n)?2:0;return at(n,e,t,i,r,o,s,!0)}function Lv(n){return n?ul(n)||Cm(n)?Rt({},n):n:null}function or(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Uv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Vm(c),ref:e&&e.ref?t&&s?Oe(s)?s.concat(Ta(e)):[s,Ta(e)]:Ta(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Dn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&or(n.ssContent),ssFallback:n.ssFallback&&or(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ao(u,l.clone(u)),u}function Iv(n=" ",e=0){return Lt(ml,null,n,e)}function _l(n,e){const t=Lt(Ea,null,n);return t.staticCount=e,t}function Hl(n="",e=!1){return e?(jt(),Hm(Kt,null,n)):Lt(Kt,null,n)}function ii(n){return n==null||typeof n=="boolean"?Lt(Kt):Oe(n)?Lt(Dn,null,n.slice()):Ga(n)?Ti(n):Lt(ml,null,String(n))}function Ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:or(n)}function yf(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),yf(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Cm(e)?e._ctx=Xn:r===3&&Xn&&(Xn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:Xn},t=32):(e=String(e),i&64?(t=16,e=[Iv(e)]):t=8);n.children=e,n.shapeFlag|=t}function Uv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=of([e.class,i.class]));else if(r==="style")e.style=sf([e.style,i.style]);else if(il(r)){const s=e[r],o=i[r];o&&s!==o&&!(Oe(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!rl(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Zn(n,e,t,i=null){jn(n,e,7,[t,i])}const Nv=Tm();let Ov=0;function Fv(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Nv,s={uid:Ov++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dm(i,r),emitsOptions:bm(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dv.bind(null,s),n.ce&&n.ce(s),s}let Ht=null;const Ef=()=>Ht||Xn;let Wa,qc;{const n=ll(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Wa=e("__VUE_INSTANCE_SETTERS__",t=>Ht=t),qc=e("__VUE_SSR_SETTERS__",t=>Ro=t)}const ko=n=>{const e=Ht;return Wa(n),n.scope.on(),()=>{n.scope.off(),Wa(e)}},Ch=()=>{Ht&&Ht.scope.off(),Wa(null)};function km(n){return n.vnode.shapeFlag&4}let Ro=!1;function Bv(n,e=!1,t=!1){e&&qc(e);const{props:i,children:r}=n.vnode,s=km(n);xv(n,i,s,e),Ev(n,r,t||e);const o=s?zv(n,e):void 0;return e&&qc(!1),o}function zv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,rv);const{setup:i}=t;if(i){Di();const r=n.setupContext=i.length>1?Vv(n):null,s=ko(n),o=Vo(i,n,0,[n.props,r]),a=Cp(o);if(Li(),s(),(a||n.sp)&&!mo(n)&&_m(n),a){if(o.then(Ch,Ch),e)return o.then(l=>{Ph(n,l)}).catch(l=>{fl(l,n,0)});n.asyncDep=o}else Ph(n,o)}else Gm(n)}function Ph(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=tm(e)),Gm(n)}function Gm(n,e,t){const i=n.type;n.render||(n.render=i.render||ci);{const r=ko(n);Di();try{sv(n)}finally{Li(),r()}}}const Hv={get(n,e){return zt(n,"get",""),n[e]}};function Vv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Hv),slots:n.slots,emit:n.emit,expose:e}}function Tf(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(tm(pf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in _o)return _o[t](n)},has(e,t){return t in e||t in _o}})):n.proxy}function kv(n,e=!0){return He(n)?n.displayName||n.name:n.name||e&&n.__name}function Gv(n){return He(n)&&"__vccOpts"in n}const In=(n,e)=>D0(n,e,Ro);function bf(n,e,t){try{ka(-1);const i=arguments.length;return i===2?tt(e)&&!Oe(e)?Ga(e)?Lt(n,null,[e]):Lt(n,e):Lt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ga(t)&&(t=[t]),Lt(n,e,t))}finally{ka(1)}}const Wv="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yc;const Dh=typeof window<"u"&&window.trustedTypes;if(Dh)try{Yc=Dh.createPolicy("vue",{createHTML:n=>n})}catch{}const Wm=Yc?n=>Yc.createHTML(n):n=>n,Xv="http://www.w3.org/2000/svg",qv="http://www.w3.org/1998/Math/MathML",yi=typeof document<"u"?document:null,Lh=yi&&yi.createElement("template"),Yv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?yi.createElementNS(Xv,n):e==="mathml"?yi.createElementNS(qv,n):t?yi.createElement(n,{is:t}):yi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>yi.createTextNode(n),createComment:n=>yi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>yi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Lh.innerHTML=Wm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Lh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},zi="transition",Zs="animation",Co=Symbol("_vtc"),Xm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Kv=Rt({},um,Xm),jv=n=>(n.displayName="Transition",n.props=Kv,n),$v=jv((n,{slots:e})=>bf(W0,Zv(n),e)),gr=(n,e=[])=>{Oe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Ih=n=>n?Oe(n)?n.some(e=>e.length>1):n.length>1:!1;function Zv(n){const e={};for(const I in n)I in Xm||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=Jv(r),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:y,onEnterCancelled:S,onLeave:E,onLeaveCancelled:C,onBeforeAppear:R=m,onAppear:b=y,onAppearCancelled:D=S}=e,L=(I,N,K,ee)=>{I._enterCancelled=ee,vr(I,N?u:a),vr(I,N?c:o),K&&K()},x=(I,N)=>{I._isLeaving=!1,vr(I,f),vr(I,d),vr(I,h),N&&N()},T=I=>(N,K)=>{const ee=I?b:y,k=()=>L(N,I,K);gr(ee,[N,k]),Uh(()=>{vr(N,I?l:s),pi(N,I?u:a),Ih(ee)||Nh(N,i,_,k)})};return Rt(e,{onBeforeEnter(I){gr(m,[I]),pi(I,s),pi(I,o)},onBeforeAppear(I){gr(R,[I]),pi(I,l),pi(I,c)},onEnter:T(!1),onAppear:T(!0),onLeave(I,N){I._isLeaving=!0;const K=()=>x(I,N);pi(I,f),I._enterCancelled?(pi(I,h),Bh(I)):(Bh(I),pi(I,h)),Uh(()=>{I._isLeaving&&(vr(I,f),pi(I,d),Ih(E)||Nh(I,i,p,K))}),gr(E,[I,K])},onEnterCancelled(I){L(I,!1,void 0,!0),gr(S,[I])},onAppearCancelled(I){L(I,!0,void 0,!0),gr(D,[I])},onLeaveCancelled(I){x(I),gr(C,[I])}})}function Jv(n){if(n==null)return null;if(tt(n))return[Vl(n.enter),Vl(n.leave)];{const e=Vl(n);return[e,e]}}function Vl(n){return $g(n)}function pi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Co]||(n[Co]=new Set)).add(e)}function vr(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Co];t&&(t.delete(e),t.size||(n[Co]=void 0))}function Uh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Qv=0;function Nh(n,e,t,i){const r=n._endId=++Qv,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=ex(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function ex(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${zi}Delay`),s=i(`${zi}Duration`),o=Oh(r,s),a=i(`${Zs}Delay`),l=i(`${Zs}Duration`),c=Oh(a,l);let u=null,f=0,h=0;e===zi?o>0&&(u=zi,f=o,h=s.length):e===Zs?c>0&&(u=Zs,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?zi:Zs:null,h=u?u===zi?s.length:l.length:0);const d=u===zi&&/\b(?:transform|all)(?:,|$)/.test(i(`${zi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Oh(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Fh(t)+Fh(n[i])))}function Fh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Bh(n){return(n?n.ownerDocument:document).body.offsetHeight}function tx(n,e,t){const i=n[Co];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zh=Symbol("_vod"),nx=Symbol("_vsh"),ix=Symbol(""),rx=/(?:^|;)\s*display\s*:/;function sx(n,e,t){const i=n.style,r=Mt(t);let s=!1;if(t&&!r){if(e)if(Mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ba(i,a,"")}else for(const o in e)t[o]==null&&ba(i,o,"");for(const o in t)o==="display"&&(s=!0),ba(i,o,t[o])}else if(r){if(e!==t){const o=i[ix];o&&(t+=";"+o),i.cssText=t,s=rx.test(t)}}else e&&n.removeAttribute("style");zh in n&&(n[zh]=s?i.display:"",n[nx]&&(i.display="none"))}const Hh=/\s*!important$/;function ba(n,e,t){if(Oe(t))t.forEach(i=>ba(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ox(n,e);Hh.test(t)?n.setProperty(Kr(i),t.replace(Hh,""),"important"):n[i]=t}}const Vh=["Webkit","Moz","ms"],kl={};function ox(n,e){const t=kl[e];if(t)return t;let i=Zt(e);if(i!=="filter"&&i in n)return kl[e]=i;i=al(i);for(let r=0;r<Vh.length;r++){const s=Vh[r]+i;if(s in n)return kl[e]=s}return e}const kh="http://www.w3.org/1999/xlink";function Gh(n,e,t,i,r,s=n0(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(kh,e.slice(6,e.length)):n.setAttributeNS(kh,e,t):t==null||s&&!Ip(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Fn(t)?String(t):t)}function Wh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Wm(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Ip(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function ax(n,e,t,i){n.addEventListener(e,t,i)}function lx(n,e,t,i){n.removeEventListener(e,t,i)}const Xh=Symbol("_vei");function cx(n,e,t,i,r=null){const s=n[Xh]||(n[Xh]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=ux(e);if(i){const c=s[e]=dx(i,r);ax(n,a,c,l)}else o&&(lx(n,a,o,l),s[e]=void 0)}}const qh=/(?:Once|Passive|Capture)$/;function ux(n){let e;if(qh.test(n)){e={};let i;for(;i=n.match(qh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Kr(n.slice(2)),e]}let Gl=0;const fx=Promise.resolve(),hx=()=>Gl||(fx.then(()=>Gl=0),Gl=Date.now());function dx(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;jn(px(i,t.value),e,5,[i])};return t.value=n,t.attached=hx(),t}function px(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Yh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,mx=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?tx(n,i,o):e==="style"?sx(n,t,i):il(e)?rl(e)||cx(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_x(n,e,i,o))?(Wh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gh(n,e,i,o,s,e!=="value")):n._isVueCE&&(gx(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Mt(i)))?Wh(n,Zt(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gh(n,e,i,o))};function _x(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Yh(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yh(e)&&Mt(t)?!1:e in n}function gx(n,e){const t=n._def.props;if(!t)return!1;const i=Zt(e);return Array.isArray(t)?t.some(r=>Zt(r)===i):Object.keys(t).some(r=>Zt(r)===i)}const vx=Rt({patchProp:mx},Yv);let Kh;function xx(){return Kh||(Kh=bv(vx))}const Sx=(...n)=>{const e=xx().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=yx(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Mx(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Mx(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function yx(n){return Mt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let qm;const gl=n=>qm=n,Ym=Symbol();function Kc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var vo;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(vo||(vo={}));function Ex(){const n=Fp(!0),e=n.run(()=>mf({}));let t=[],i=[];const r=pf({install(s){gl(r),r._a=s,s.provide(Ym,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Km=()=>{};function jh(n,e,t,i=Km){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&Bp()&&r0(r),r}function Qr(n,...e){n.slice().forEach(t=>{t(...e)})}const Tx=n=>n(),$h=Symbol(),Wl=Symbol();function jc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];Kc(r)&&Kc(i)&&n.hasOwnProperty(t)&&!xt(i)&&!Pi(i)?n[t]=jc(r,i):n[t]=i}return n}const bx=Symbol();function Ax(n){return!Kc(n)||!n.hasOwnProperty(bx)}const{assign:Yi}=Object;function wx(n){return!!(xt(n)&&n.effect)}function Rx(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=w0(t.state.value[n]);return Yi(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=pf(In(()=>{gl(t);const d=t._s.get(n);return o[h].call(d,d)})),f),{}))}return l=jm(n,c,e,t,i,!0),l}function jm(n,e,t={},i,r,s){let o;const a=Yi({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],d;const g=i.state.value[n];!s&&!g&&(i.state.value[n]={});let _;function p(D){let L;c=u=!1,typeof D=="function"?(D(i.state.value[n]),L={type:vo.patchFunction,storeId:n,events:d}):(jc(i.state.value[n],D),L={type:vo.patchObject,payload:D,storeId:n,events:d});const x=_=Symbol();_f().then(()=>{_===x&&(c=!0)}),u=!0,Qr(f,L,i.state.value[n])}const m=s?function(){const{state:L}=t,x=L?L():{};this.$patch(T=>{Yi(T,x)})}:Km;function y(){o.stop(),f=[],h=[],i._s.delete(n)}const S=(D,L="")=>{if($h in D)return D[Wl]=L,D;const x=function(){gl(i);const T=Array.from(arguments),I=[],N=[];function K(X){I.push(X)}function ee(X){N.push(X)}Qr(h,{args:T,name:x[Wl],store:C,after:K,onError:ee});let k;try{k=D.apply(this&&this.$id===n?this:C,T)}catch(X){throw Qr(N,X),X}return k instanceof Promise?k.then(X=>(Qr(I,X),X)).catch(X=>(Qr(N,X),Promise.reject(X))):(Qr(I,k),k)};return x[$h]=!0,x[Wl]=L,x},E={_p:i,$id:n,$onAction:jh.bind(null,h),$patch:p,$reset:m,$subscribe(D,L={}){const x=jh(f,D,L.detached,()=>T()),T=o.run(()=>tr(()=>i.state.value[n],I=>{(L.flush==="sync"?u:c)&&D({storeId:n,type:vo.direct,events:d},I)},Yi({},l,L)));return x},$dispose:y},C=Ho(E);i._s.set(n,C);const b=(i._a&&i._a.runWithContext||Tx)(()=>i._e.run(()=>(o=Fp()).run(()=>e({action:S}))));for(const D in b){const L=b[D];if(xt(L)&&!wx(L)||Pi(L))s||(g&&Ax(L)&&(xt(L)?L.value=g[D]:jc(L,g[D])),i.state.value[n][D]=L);else if(typeof L=="function"){const x=S(L,D);b[D]=x,a.actions[D]=L}}return Yi(C,b),Yi(qe(C),b),Object.defineProperty(C,"$state",{get:()=>i.state.value[n],set:D=>{p(L=>{Yi(L,D)})}}),i._p.forEach(D=>{Yi(C,o.run(()=>D({store:C,app:i._a,pinia:i,options:a})))}),g&&s&&t.hydrate&&t.hydrate(C.$state,g),c=!0,u=!0,C}/*! #__NO_SIDE_EFFECTS__ */function Cx(n,e,t){let i,r;const s=typeof e=="function";i=n,r=s?t:e;function o(a,l){const c=F0();return a=a||(c?On(Ym,null):null),a&&gl(a),a=qm,a._s.has(i)||(s?jm(i,e,r,a):Rx(i,r,a)),a._s.get(i)}return o.$id=i,o}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Af="169",Px=0,Zh=1,Dx=2,$m=1,Lx=2,Mi=3,ar=0,on=1,wi=2,nr=0,Ts=1,Jh=2,Qh=3,ed=4,Ix=5,Lr=100,Ux=101,Nx=102,Ox=103,Fx=104,Bx=200,zx=201,Hx=202,Vx=203,$c=204,Zc=205,kx=206,Gx=207,Wx=208,Xx=209,qx=210,Yx=211,Kx=212,jx=213,$x=214,Jc=0,Qc=1,eu=2,Ds=3,tu=4,nu=5,iu=6,ru=7,Zm=0,Zx=1,Jx=2,ir=0,Qx=1,eS=2,tS=3,nS=4,iS=5,rS=6,sS=7,Jm=300,Ls=301,Is=302,su=303,ou=304,vl=306,au=1e3,Ur=1001,lu=1002,sn=1003,oS=1004,Qo=1005,Gn=1006,Xl=1007,Nr=1008,Ui=1009,Qm=1010,e_=1011,Po=1012,wf=1013,Xr=1014,Ri=1015,Go=1016,Rf=1017,Cf=1018,Us=1020,t_=35902,n_=1021,i_=1022,qn=1023,r_=1024,s_=1025,bs=1026,Ns=1027,o_=1028,Pf=1029,a_=1030,Df=1031,Lf=1033,Aa=33776,wa=33777,Ra=33778,Ca=33779,cu=35840,uu=35841,fu=35842,hu=35843,du=36196,pu=37492,mu=37496,_u=37808,gu=37809,vu=37810,xu=37811,Su=37812,Mu=37813,yu=37814,Eu=37815,Tu=37816,bu=37817,Au=37818,wu=37819,Ru=37820,Cu=37821,Pa=36492,Pu=36494,Du=36495,l_=36283,Lu=36284,Iu=36285,Uu=36286,aS=3200,lS=3201,c_=0,cS=1,Zi="",ei="srgb",hr="srgb-linear",If="display-p3",xl="display-p3-linear",Xa="linear",ut="srgb",qa="rec709",Ya="p3",es=7680,td=519,uS=512,fS=513,hS=514,u_=515,dS=516,pS=517,mS=518,_S=519,nd=35044,id="300 es",Ci=2e3,Ka=2001;class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=Math.PI/180,Nu=180/Math.PI;function Wo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function gS(n,e){return(n%e+e)%e}function Yl(n,e,t){return(1-t)*n+t*e}function Js(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],p=r[3],m=r[6],y=r[1],S=r[4],E=r[7],C=r[2],R=r[5],b=r[8];return s[0]=o*_+a*y+l*C,s[3]=o*p+a*S+l*R,s[6]=o*m+a*E+l*b,s[1]=c*_+u*y+f*C,s[4]=c*p+u*S+f*R,s[7]=c*m+u*E+f*b,s[2]=h*_+d*y+g*C,s[5]=h*p+d*S+g*R,s[8]=h*m+d*E+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kl=new ke;function f_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vS(){const n=ja("canvas");return n.style.display="block",n}const rd={};function Da(n){n in rd||(rd[n]=!0,console.warn(n))}function xS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function SS(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function MS(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sd=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),od=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[hr]:{transfer:Xa,primaries:qa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ei]:{transfer:ut,primaries:qa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[xl]:{transfer:Xa,primaries:Ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(od),fromReference:n=>n.applyMatrix3(sd)},[If]:{transfer:ut,primaries:Ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(od),fromReference:n=>n.applyMatrix3(sd).convertLinearToSRGB()}},yS=new Set([hr,xl]),Qe={enabled:!0,_workingColorSpace:hr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Qs[e].toReference,r=Qs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Qs[n].primaries},getTransfer:function(n){return n===Zi?Xa:Qs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Qs[e].luminanceCoefficients)}};function As(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function jl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class ES{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=ja("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=As(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(As(t[i]/255)*255):t[i]=As(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TS=0;class h_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($l(r[o].image)):s.push($l(r[o]))}else s=$l(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ES.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bS=0;class Jt extends Xs{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=Ur,r=Ur,s=Gn,o=Nr,a=qn,l=Ui,c=Jt.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Wo(),this.name="",this.source=new h_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case au:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case lu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case au:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case lu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Jm;Jt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(d+1)/2,C=(m+1)/2,R=(u+h)/4,b=(f+_)/4,D=(g+p)/4;return S>E&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=b/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=D/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AS extends Xs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new h_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends AS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class d_ extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wS extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-a;const m=l*h+c*d+u*g+f*_,y=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const C=Math.sqrt(S),R=Math.atan2(C,m*y);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const E=a*y;if(l=l*p+h*E,c=c*p+d*E,u=u*p+g*E,f=f*p+_*E,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zl.copy(this).projectOnVector(e),this.sub(Zl)}reflect(e){return this.sub(Zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new Q,ad=new Yr;class Xo{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),ta.subVectors(this.max,eo),ns.subVectors(e.a,eo),is.subVectors(e.b,eo),rs.subVectors(e.c,eo),Hi.subVectors(is,ns),Vi.subVectors(rs,is),xr.subVectors(ns,rs);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-xr.z,xr.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,xr.z,0,-xr.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-xr.y,xr.x,0];return!Jl(t,ns,is,rs,ta)||(t=[1,0,0,0,1,0,0,0,1],!Jl(t,ns,is,rs,ta))?!1:(na.crossVectors(Hi,Vi),t=[na.x,na.y,na.z],Jl(t,ns,is,rs,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Hn=new Q,ea=new Xo,ns=new Q,is=new Q,rs=new Q,Hi=new Q,Vi=new Q,xr=new Q,eo=new Q,ta=new Q,na=new Q,Sr=new Q;function Jl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Sr.fromArray(n,s);const a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=t.dot(Sr),u=i.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const RS=new Xo,to=new Q,Ql=new Q;class Uf{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):RS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(to,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Ql)),this.expandByPoint(to.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new Q,ec=new Q,ia=new Q,ki=new Q,tc=new Q,ra=new Q,nc=new Q;class CS{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ec.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(ec);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ia),a=ki.dot(this.direction),l=-ki.dot(ia),c=ki.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ec).addScaledVector(ia,h),d}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,r,s){tc.subVectors(t,e),ra.subVectors(i,e),nc.crossVectors(tc,ra);let o=this.direction.dot(nc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(ra.crossVectors(ki,ra));if(l<0)return null;const c=a*this.direction.dot(tc.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(nc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,p){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,p)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PS,e,DS)}lookAt(e,t,i){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Gi.crossVectors(i,pn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Gi.crossVectors(i,pn)),Gi.normalize(),sa.crossVectors(pn,Gi),r[0]=Gi.x,r[4]=sa.x,r[8]=pn.x,r[1]=Gi.y,r[5]=sa.y,r[9]=pn.y,r[2]=Gi.z,r[6]=sa.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],y=i[3],S=i[7],E=i[11],C=i[15],R=r[0],b=r[4],D=r[8],L=r[12],x=r[1],T=r[5],I=r[9],N=r[13],K=r[2],ee=r[6],k=r[10],X=r[14],G=r[3],me=r[7],_e=r[11],ge=r[15];return s[0]=o*R+a*x+l*K+c*G,s[4]=o*b+a*T+l*ee+c*me,s[8]=o*D+a*I+l*k+c*_e,s[12]=o*L+a*N+l*X+c*ge,s[1]=u*R+f*x+h*K+d*G,s[5]=u*b+f*T+h*ee+d*me,s[9]=u*D+f*I+h*k+d*_e,s[13]=u*L+f*N+h*X+d*ge,s[2]=g*R+_*x+p*K+m*G,s[6]=g*b+_*T+p*ee+m*me,s[10]=g*D+_*I+p*k+m*_e,s[14]=g*L+_*N+p*X+m*ge,s[3]=y*R+S*x+E*K+C*G,s[7]=y*b+S*T+E*ee+C*me,s[11]=y*D+S*I+E*k+C*_e,s[15]=y*L+S*N+E*X+C*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+m*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=f*p*c-_*h*c+_*l*d-a*p*d-f*l*m+a*h*m,S=g*h*c-u*p*c-g*l*d+o*p*d+u*l*m-o*h*m,E=u*_*c-g*f*c+g*a*d-o*_*d-u*a*m+o*f*m,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*p-o*f*p,R=t*y+i*S+r*E+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=y*b,e[1]=(_*h*s-f*p*s-_*r*d+i*p*d+f*r*m-i*h*m)*b,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*m+i*l*m)*b,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*b,e[4]=S*b,e[5]=(u*p*s-g*h*s+g*r*d-t*p*d-u*r*m+t*h*m)*b,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*m-t*l*m)*b,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*b,e[8]=E*b,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*m-t*f*m)*b,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*m+t*a*m)*b,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*b,e[12]=C*b,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*p+t*f*p)*b,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*b,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,p=o*f,m=a*f,y=l*c,S=l*u,E=l*f,C=i.x,R=i.y,b=i.z;return r[0]=(1-(_+m))*C,r[1]=(d+E)*C,r[2]=(g-S)*C,r[3]=0,r[4]=(d-E)*R,r[5]=(1-(h+m))*R,r[6]=(p+y)*R,r[7]=0,r[8]=(g+S)*b,r[9]=(p-y)*b,r[10]=(1-(h+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,u=1/o,f=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,t.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ci){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===Ci)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ka)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ci){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(a===Ci)g=(o+s)*f,_=-2*f;else if(a===Ka)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new Q,Vn=new St,PS=new Q(0,0,0),DS=new Q(1,1,1),Gi=new Q,sa=new Q,pn=new Q,ld=new St,cd=new Yr;class Bn{constructor(e=0,t=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ld,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cd.setFromEuler(this),this.setFromQuaternion(cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class p_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LS=0;const ud=new Q,os=new Yr,gi=new St,oa=new Q,no=new Q,IS=new Q,US=new Yr,fd=new Q(1,0,0),hd=new Q(0,1,0),dd=new Q(0,0,1),pd={type:"added"},NS={type:"removed"},as={type:"childadded",child:null},ic={type:"childremoved",child:null};class kt extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new Q,t=new Bn,i=new Yr,r=new Q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new ke}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(fd,e)}rotateY(e){return this.rotateOnAxis(hd,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return ud.copy(e).applyQuaternion(this.quaternion),this.position.add(ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fd,e)}translateY(e){return this.translateOnAxis(hd,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(no,oa,this.up):gi.lookAt(oa,no,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(gi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NS),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,IS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,US,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new Q(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new Q,vi=new Q,rc=new Q,xi=new Q,ls=new Q,cs=new Q,md=new Q,sc=new Q,oc=new Q,ac=new Q,lc=new gt,cc=new gt,uc=new gt;class Wn{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),vi.subVectors(i,t),rc.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(vi),l=kn.dot(rc),c=vi.dot(vi),u=vi.dot(rc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return lc.setScalar(0),cc.setScalar(0),uc.setScalar(0),lc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,i),uc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(lc,s.x),o.addScaledVector(cc,s.y),o.addScaledVector(uc,s.z),o}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),vi.subVectors(e,t),kn.cross(vi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),kn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ls.subVectors(r,i),cs.subVectors(s,i),sc.subVectors(e,i);const l=ls.dot(sc),c=cs.dot(sc);if(l<=0&&c<=0)return t.copy(i);oc.subVectors(e,r);const u=ls.dot(oc),f=cs.dot(oc);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ls,o);ac.subVectors(e,s);const d=ls.dot(ac),g=cs.dot(ac);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(cs,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return md.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(md,a);const m=1/(p+_+h);return o=_*m,a=h*m,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const m_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function fc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=gS(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=fc(o,s,e+1/3),this.g=fc(o,s,e),this.b=fc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=ei){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const i=m_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=jl(e.r),this.g=jl(e.g),this.b=jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Qe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(rn(Ft.r*255,0,255))*65536+Math.round(rn(Ft.g*255,0,255))*256+Math.round(rn(Ft.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=ei){Qe.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,r=Ft.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(aa);const i=Yl(Wi.h,aa.h,t),r=Yl(Wi.s,aa.s,t),s=Yl(Wi.l,aa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ke;Ke.NAMES=m_;let OS=0;class qo extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Ts,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Zc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$c&&(i.blendSrc=this.blendSrc),this.blendDst!==Zc&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class __ extends qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new Q,la=new et;class ui{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nd,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Js(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Js(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Js(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nd&&(e.usage=this.usage),e}}class g_ extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class v_ extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hr extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}let FS=0;const Cn=new St,hc=new kt,us=new Q,mn=new Xo,io=new Xo,Dt=new Q;class jr extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f_(e)?v_:g_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Hr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(mn.min,io.min),mn.expandByPoint(Dt),Dt.addVectors(mn.max,io.max),mn.expandByPoint(Dt)):(mn.expandByPoint(io.min),mn.expandByPoint(io.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),Dt.add(us)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new Q,l[D]=new Q;const c=new Q,u=new Q,f=new Q,h=new et,d=new et,g=new et,_=new Q,p=new Q;function m(D,L,x){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,L),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,D),d.fromBufferAttribute(s,L),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(T),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[D].add(_),a[L].add(_),a[x].add(_),l[D].add(p),l[L].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,L=y.length;D<L;++D){const x=y[D],T=x.start,I=x.count;for(let N=T,K=T+I;N<K;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new Q,E=new Q,C=new Q,R=new Q;function b(D){C.fromBufferAttribute(r,D),R.copy(C);const L=a[D];S.copy(L),S.sub(C.multiplyScalar(C.dot(L))).normalize(),E.crossVectors(R,L);const T=E.dot(l[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,T)}for(let D=0,L=y.length;D<L;++D){const x=y[D],T=x.start,I=x.count;for(let N=T,K=T+I;N<K;N+=3)b(e.getX(N+0)),b(e.getX(N+1)),b(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Q,s=new Q,o=new Q,a=new Q,l=new Q,c=new Q,u=new Q,f=new Q;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new ui(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new St,Mr=new CS,ca=new Uf,gd=new Q,ua=new Q,fa=new Q,ha=new Q,dc=new Q,da=new Q,vd=new Q,pa=new Q;class ai extends kt{constructor(e=new jr,t=new __){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(dc.fromBufferAttribute(f,e),o?da.addScaledVector(dc,u):da.addScaledVector(dc.sub(t),u))}t.add(da)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(ca.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(ca,gd)===null||Mr.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(_d.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(_d),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let E=y,C=S;E<C;E+=3){const R=a.getX(E),b=a.getX(E+1),D=a.getX(E+2);r=ma(this,m,e,i,c,u,f,R,b,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),S=a.getX(p+1),E=a.getX(p+2);r=ma(this,o,e,i,c,u,f,y,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=y,C=S;E<C;E+=3){const R=E,b=E+1,D=E+2;r=ma(this,m,e,i,c,u,f,R,b,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,S=p+1,E=p+2;r=ma(this,o,e,i,c,u,f,y,S,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function BS(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ar,a),l===null)return null;pa.copy(a),pa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:n}}function ma(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ua),n.getVertexPosition(l,fa),n.getVertexPosition(c,ha);const u=BS(n,e,t,i,ua,fa,ha,vd);if(u){const f=new Q;Wn.getBarycoord(vd,ua,fa,ha,f),r&&(u.uv=Wn.getInterpolatedAttribute(r,a,l,c,f,new et)),s&&(u.uv1=Wn.getInterpolatedAttribute(s,a,l,c,f,new et)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,l,c,f,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Q,materialIndex:0};Wn.getNormal(ua,fa,ha,h.normal),u.face=h,u.barycoord=f}return u}class qs extends jr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hr(c,3)),this.setAttribute("normal",new Hr(u,3)),this.setAttribute("uv",new Hr(f,2));function g(_,p,m,y,S,E,C,R,b,D,L){const x=E/b,T=C/D,I=E/2,N=C/2,K=R/2,ee=b+1,k=D+1;let X=0,G=0;const me=new Q;for(let _e=0;_e<k;_e++){const ge=_e*T-N;for(let Le=0;Le<ee;Le++){const Ge=Le*x-I;me[_]=Ge*y,me[p]=ge*S,me[m]=K,c.push(me.x,me.y,me.z),me[_]=0,me[p]=0,me[m]=R>0?1:-1,u.push(me.x,me.y,me.z),f.push(Le/b),f.push(1-_e/D),X+=1}}for(let _e=0;_e<D;_e++)for(let ge=0;ge<b;ge++){const Le=h+ge+ee*_e,Ge=h+ge+ee*(_e+1),te=h+(ge+1)+ee*(_e+1),ae=h+(ge+1)+ee*_e;l.push(Le,Ge,ae),l.push(Ge,te,ae),G+=6}a.addGroup(d,G,L),d+=G,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Os(n[t]);for(const r in i)e[r]=i[r]}return e}function zS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function x_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const HS={clone:Os,merge:Xt};var VS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=zS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class S_ extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new Q,xd=new et,Sd=new et;class Ln extends S_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nu*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,xd,Sd),t.subVectors(Sd,xd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ql*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,hs=1;class GS extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(fs,hs,e,t);r.layers=this.layers,this.add(r);const s=new Ln(fs,hs,e,t);s.layers=this.layers,this.add(s);const o=new Ln(fs,hs,e,t);o.layers=this.layers,this.add(o);const a=new Ln(fs,hs,e,t);a.layers=this.layers,this.add(a);const l=new Ln(fs,hs,e,t);l.layers=this.layers,this.add(l);const c=new Ln(fs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class M_ extends Jt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WS extends qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new M_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qs(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:nr});s.uniforms.tEquirect.value=t;const o=new ai(r,s),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=Gn),new GS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const pc=new Q,XS=new Q,qS=new ke;class Rr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pc.subVectors(i,t).cross(XS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qS.getNormalMatrix(e),r=this.coplanarPoint(pc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Uf,_a=new Q;class Nf{constructor(e=new Rr,t=new Rr,i=new Rr,r=new Rr,s=new Rr,o=new Rr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],p=r[11],m=r[12],y=r[13],S=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,p-d,E-m).normalize(),i[1].setComponents(l+s,h+c,p+d,E+m).normalize(),i[2].setComponents(l+o,h+u,p+g,E+y).normalize(),i[3].setComponents(l-o,h-u,p-g,E-y).normalize(),i[4].setComponents(l-a,h-f,p-_,E-S).normalize(),t===Ci)i[5].setComponents(l+a,h+f,p+_,E+S).normalize();else if(t===Ka)i[5].setComponents(a,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function YS(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Sl extends jr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let S=0;S<c;S++){const E=S*f-s;g.push(E,-y,0),_.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const S=y+c*m,E=y+c*(m+1),C=y+1+c*(m+1),R=y+1+c*m;d.push(S,E,R),d.push(E,C,R)}this.setIndex(d),this.setAttribute("position",new Hr(g,3)),this.setAttribute("normal",new Hr(_,3)),this.setAttribute("uv",new Hr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.widthSegments,e.heightSegments)}}var KS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$S=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",bM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ay=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_y=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,My=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ly=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,By=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ky=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:KS,alphahash_pars_fragment:jS,alphamap_fragment:$S,alphamap_pars_fragment:ZS,alphatest_fragment:JS,alphatest_pars_fragment:QS,aomap_fragment:eM,aomap_pars_fragment:tM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:rM,beginnormal_vertex:sM,bsdfs:oM,iridescence_fragment:aM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:hM,color_fragment:dM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:_M,common:gM,cube_uv_reflection_fragment:vM,defaultnormal_vertex:xM,displacementmap_pars_vertex:SM,displacementmap_vertex:MM,emissivemap_fragment:yM,emissivemap_pars_fragment:EM,colorspace_fragment:TM,colorspace_pars_fragment:bM,envmap_fragment:AM,envmap_common_pars_fragment:wM,envmap_pars_fragment:RM,envmap_pars_vertex:CM,envmap_physical_pars_fragment:HM,envmap_vertex:PM,fog_vertex:DM,fog_pars_vertex:LM,fog_fragment:IM,fog_pars_fragment:UM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:OM,lights_lambert_fragment:FM,lights_lambert_pars_fragment:BM,lights_pars_begin:zM,lights_toon_fragment:VM,lights_toon_pars_fragment:kM,lights_phong_fragment:GM,lights_phong_pars_fragment:WM,lights_physical_fragment:XM,lights_physical_pars_fragment:qM,lights_fragment_begin:YM,lights_fragment_maps:KM,lights_fragment_end:jM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:ZM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:QM,map_fragment:ey,map_pars_fragment:ty,map_particle_fragment:ny,map_particle_pars_fragment:iy,metalnessmap_fragment:ry,metalnessmap_pars_fragment:sy,morphinstance_vertex:oy,morphcolor_vertex:ay,morphnormal_vertex:ly,morphtarget_pars_vertex:cy,morphtarget_vertex:uy,normal_fragment_begin:fy,normal_fragment_maps:hy,normal_pars_fragment:dy,normal_pars_vertex:py,normal_vertex:my,normalmap_pars_fragment:_y,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:vy,clearcoat_pars_fragment:xy,iridescence_pars_fragment:Sy,opaque_fragment:My,packing:yy,premultiplied_alpha_fragment:Ey,project_vertex:Ty,dithering_fragment:by,dithering_pars_fragment:Ay,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ry,shadowmap_pars_fragment:Cy,shadowmap_pars_vertex:Py,shadowmap_vertex:Dy,shadowmask_pars_fragment:Ly,skinbase_vertex:Iy,skinning_pars_vertex:Uy,skinning_vertex:Ny,skinnormal_vertex:Oy,specularmap_fragment:Fy,specularmap_pars_fragment:By,tonemapping_fragment:zy,tonemapping_pars_fragment:Hy,transmission_fragment:Vy,transmission_pars_fragment:ky,uv_pars_fragment:Gy,uv_pars_vertex:Wy,uv_vertex:Xy,worldpos_vertex:qy,background_vert:Yy,background_frag:Ky,backgroundCube_vert:jy,backgroundCube_frag:$y,cube_vert:Zy,cube_frag:Jy,depth_vert:Qy,depth_frag:eE,distanceRGBA_vert:tE,distanceRGBA_frag:nE,equirect_vert:iE,equirect_frag:rE,linedashed_vert:sE,linedashed_frag:oE,meshbasic_vert:aE,meshbasic_frag:lE,meshlambert_vert:cE,meshlambert_frag:uE,meshmatcap_vert:fE,meshmatcap_frag:hE,meshnormal_vert:dE,meshnormal_frag:pE,meshphong_vert:mE,meshphong_frag:_E,meshphysical_vert:gE,meshphysical_frag:vE,meshtoon_vert:xE,meshtoon_frag:SE,points_vert:ME,points_frag:yE,shadow_vert:EE,shadow_frag:TE,sprite_vert:bE,sprite_frag:AE},ve={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ri={basic:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Xt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Xt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Xt([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Xt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Xt([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Xt([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Xt([ve.common,ve.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Xt([ve.lights,ve.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ri.physical={uniforms:Xt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ga={r:0,b:0,g:0},Er=new Bn,wE=new St;function RE(n,e,t,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function _(y){let S=!1;const E=g(y);E===null?m(a,l):E&&E.isColor&&(m(E,1),S=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===vl)?(u===void 0&&(u=new ai(new qs(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Os(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Er.copy(S.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wE.makeRotationFromEuler(Er)),u.material.toneMapped=Qe.getTransfer(E.colorSpace)!==ut,(f!==E||h!==E.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ai(new Sl(2,2),new lr({name:"BackgroundMaterial",uniforms:Os(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(E.colorSpace)!==ut,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,S){y.getRGB(ga,x_(n)),i.buffers.color.setClear(ga.r,ga.g,ga.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:p}}function CE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,T,I,N,K){let ee=!1;const k=f(N,I,T);s!==k&&(s=k,c(s.object)),ee=d(x,N,I,K),ee&&g(x,N,I,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,E(x,T,I,N),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,T,I){const N=I.wireframe===!0;let K=i[x.id];K===void 0&&(K={},i[x.id]=K);let ee=K[T.id];ee===void 0&&(ee={},K[T.id]=ee);let k=ee[N];return k===void 0&&(k=h(l()),ee[N]=k),k}function h(x){const T=[],I=[],N=[];for(let K=0;K<t;K++)T[K]=0,I[K]=0,N[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:N,object:x,attributes:{},index:null}}function d(x,T,I,N){const K=s.attributes,ee=T.attributes;let k=0;const X=I.getAttributes();for(const G in X)if(X[G].location>=0){const _e=K[G];let ge=ee[G];if(ge===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor)),_e===void 0||_e.attribute!==ge||ge&&_e.data!==ge.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function g(x,T,I,N){const K={},ee=T.attributes;let k=0;const X=I.getAttributes();for(const G in X)if(X[G].location>=0){let _e=ee[G];_e===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor));const ge={};ge.attribute=_e,_e&&_e.data&&(ge.data=_e.data),K[G]=ge,k++}s.attributes=K,s.attributesNum=k,s.index=N}function _(){const x=s.newAttributes;for(let T=0,I=x.length;T<I;T++)x[T]=0}function p(x){m(x,0)}function m(x,T){const I=s.newAttributes,N=s.enabledAttributes,K=s.attributeDivisors;I[x]=1,N[x]===0&&(n.enableVertexAttribArray(x),N[x]=1),K[x]!==T&&(n.vertexAttribDivisor(x,T),K[x]=T)}function y(){const x=s.newAttributes,T=s.enabledAttributes;for(let I=0,N=T.length;I<N;I++)T[I]!==x[I]&&(n.disableVertexAttribArray(I),T[I]=0)}function S(x,T,I,N,K,ee,k){k===!0?n.vertexAttribIPointer(x,T,I,K,ee):n.vertexAttribPointer(x,T,I,N,K,ee)}function E(x,T,I,N){_();const K=N.attributes,ee=I.getAttributes(),k=T.defaultAttributeValues;for(const X in ee){const G=ee[X];if(G.location>=0){let me=K[X];if(me===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),me!==void 0){const _e=me.normalized,ge=me.itemSize,Le=e.get(me);if(Le===void 0)continue;const Ge=Le.buffer,te=Le.type,ae=Le.bytesPerElement,Se=te===n.INT||te===n.UNSIGNED_INT||me.gpuType===wf;if(me.isInterleavedBufferAttribute){const H=me.data,se=H.stride,re=me.offset;if(H.isInstancedInterleavedBuffer){for(let de=0;de<G.locationSize;de++)m(G.location+de,H.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let de=0;de<G.locationSize;de++)p(G.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let de=0;de<G.locationSize;de++)S(G.location+de,ge/G.locationSize,te,_e,se*ae,(re+ge/G.locationSize*de)*ae,Se)}else{if(me.isInstancedBufferAttribute){for(let H=0;H<G.locationSize;H++)m(G.location+H,me.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let H=0;H<G.locationSize;H++)p(G.location+H);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let H=0;H<G.locationSize;H++)S(G.location+H,ge/G.locationSize,te,_e,ge*ae,ge/G.locationSize*H*ae,Se)}}else if(k!==void 0){const _e=k[X];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(G.location,_e);break;case 3:n.vertexAttrib3fv(G.location,_e);break;case 4:n.vertexAttrib4fv(G.location,_e);break;default:n.vertexAttrib1fv(G.location,_e)}}}}y()}function C(){D();for(const x in i){const T=i[x];for(const I in T){const N=T[I];for(const K in N)u(N[K].object),delete N[K];delete T[I]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const I in T){const N=T[I];for(const K in N)u(N[K].object),delete N[K];delete T[I]}delete i[x.id]}function b(x){for(const T in i){const I=i[T];if(I[x.id]===void 0)continue;const N=I[x.id];for(const K in N)u(N[K].object),delete N[K];delete I[x.id]}}function D(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:L,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function PE(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function DE(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==qn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const D=b===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ui&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ri&&!D)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:C,maxSamples:R}}function LE(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Rr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,S=y*4;let E=m.clippingState||null;l.value=E,E=u(g,h,S,d);for(let C=0;C!==S;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,E=d;S!==_;++S,E+=4)o.copy(f[S]).applyMatrix4(y,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function IE(n){let e=new WeakMap;function t(o,a){return a===su?o.mapping=Ls:a===ou&&(o.mapping=Is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===su||a===ou)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new WS(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class E_ extends S_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=4,Md=[.125,.215,.35,.446,.526,.582],Ir=20,mc=new E_,yd=new Ke;let _c=null,gc=0,vc=0,xc=!1;const Cr=(1+Math.sqrt(5))/2,ds=1/Cr,Ed=[new Q(-Cr,ds,0),new Q(Cr,ds,0),new Q(-ds,0,Cr),new Q(ds,0,Cr),new Q(0,Cr,-ds),new Q(0,Cr,ds),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Td{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_c=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,gc,vc),this._renderer.xr.enabled=xc,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Go,format:qn,colorSpace:hr,depthBuffer:!1},r=bd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UE(s)),this._blurMaterial=NE(s,e,t)}return r}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,i,r){const a=new Ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(yd),u.toneMapping=ir,u.autoClear=!1;const d=new __({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new ai(new qs,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(yd),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;va(r,y*S,m>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ls||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;va(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,mc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ed[(r-s-1)%Ed.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ai(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ir-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ir;p>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ir}`);const m=[];let y=0;for(let b=0;b<Ir;++b){const D=b/_,L=Math.exp(-D*D/2);m.push(L),b===0?y+=L:b<p&&(y+=2*L)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const E=this._sizeLods[r],C=3*E*(r>S-gs?r-S+gs:0),R=4*(this._cubeSize-E);va(t,C,R,3*E,2*E),l.setRenderTarget(t),l.render(f,mc)}}function UE(n){const e=[],t=[],i=[];let r=n;const s=n-gs+1+Md.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-gs?l=Md[o-n+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),S=new Float32Array(p*g*d),E=new Float32Array(m*g*d);for(let R=0;R<d;R++){const b=R%3*2/3-1,D=R>2?0:-1,L=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];y.set(L,_*g*R),S.set(h,p*g*R);const x=[R,R,R,R,R,R];E.set(x,m*g*R)}const C=new jr;C.setAttribute("position",new ui(y,_)),C.setAttribute("uv",new ui(S,p)),C.setAttribute("faceIndex",new ui(E,m)),e.push(C),r>gs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bd(n,e,t){const i=new qr(n,e,t);return i.texture.mapping=vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function NE(n,e,t){const i=new Float32Array(Ir),r=new Q(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Ad(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function wd(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Of(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===su||l===ou,u=l===Ls||l===Is;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Td(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Td(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function FE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Da("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function BE(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let S=0,E=y.length;S<E;S+=3){const C=y[S+0],R=y[S+1],b=y[S+2];h.push(C,R,R,b,b,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,E=y.length/3-1;S<E;S+=3){const C=S+0,R=S+1,b=S+2;h.push(C,R,R,b,b,C)}}else return;const p=new(f_(h)?v_:g_)(h,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function zE(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,i,1)}function f(h,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y];for(let y=0;y<_.length;y++)t.update(m,i,_[y])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function HE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function VE(n,e,t){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let C=a.attributes.position.count*E,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*R*4*f),D=new d_(b,C,R,f);D.type=Ri,D.needsUpdate=!0;const L=E*4;for(let T=0;T<f;T++){const I=m[T],N=y[T],K=S[T],ee=C*R*4*T;for(let k=0;k<I.count;k++){const X=k*L;g===!0&&(r.fromBufferAttribute(I,k),b[ee+X+0]=r.x,b[ee+X+1]=r.y,b[ee+X+2]=r.z,b[ee+X+3]=0),_===!0&&(r.fromBufferAttribute(N,k),b[ee+X+4]=r.x,b[ee+X+5]=r.y,b[ee+X+6]=r.z,b[ee+X+7]=0),p===!0&&(r.fromBufferAttribute(K,k),b[ee+X+8]=r.x,b[ee+X+9]=r.y,b[ee+X+10]=r.z,b[ee+X+11]=K.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new et(C,R)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function kE(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class T_ extends Jt{constructor(e,t,i,r,s,o,a,l,c,u=bs){if(u!==bs&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===bs&&(i=Xr),i===void 0&&u===Ns&&(i=Us),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const b_=new Jt,Rd=new T_(1,1),A_=new d_,w_=new wS,R_=new M_,Cd=[],Pd=[],Dd=new Float32Array(16),Ld=new Float32Array(9),Id=new Float32Array(4);function Ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cd[r];if(s===void 0&&(s=new Float32Array(r),Cd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ml(n,e){let t=Pd[e];t===void 0&&(t=new Int32Array(e),Pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function GE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function WE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function XE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function qE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function YE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Id.set(i),n.uniformMatrix2fv(this.addr,!1,Id),Pt(t,i)}}function KE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ld.set(i),n.uniformMatrix3fv(this.addr,!1,Ld),Pt(t,i)}}function jE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Dd.set(i),n.uniformMatrix4fv(this.addr,!1,Dd),Pt(t,i)}}function $E(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ZE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function JE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function QE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function eT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function nT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function iT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function rT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Rd.compareFunction=u_,s=Rd):s=b_,t.setTexture2D(e||s,r)}function sT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||w_,r)}function oT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||R_,r)}function aT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||A_,r)}function lT(n){switch(n){case 5126:return GE;case 35664:return WE;case 35665:return XE;case 35666:return qE;case 35674:return YE;case 35675:return KE;case 35676:return jE;case 5124:case 35670:return $E;case 35667:case 35671:return ZE;case 35668:case 35672:return JE;case 35669:case 35673:return QE;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}function cT(n,e){n.uniform1fv(this.addr,e)}function uT(n,e){const t=Ys(e,this.size,2);n.uniform2fv(this.addr,t)}function fT(n,e){const t=Ys(e,this.size,3);n.uniform3fv(this.addr,t)}function hT(n,e){const t=Ys(e,this.size,4);n.uniform4fv(this.addr,t)}function dT(n,e){const t=Ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pT(n,e){const t=Ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mT(n,e){const t=Ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _T(n,e){n.uniform1iv(this.addr,e)}function gT(n,e){n.uniform2iv(this.addr,e)}function vT(n,e){n.uniform3iv(this.addr,e)}function xT(n,e){n.uniform4iv(this.addr,e)}function ST(n,e){n.uniform1uiv(this.addr,e)}function MT(n,e){n.uniform2uiv(this.addr,e)}function yT(n,e){n.uniform3uiv(this.addr,e)}function ET(n,e){n.uniform4uiv(this.addr,e)}function TT(n,e,t){const i=this.cache,r=e.length,s=Ml(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||b_,s[o])}function bT(n,e,t){const i=this.cache,r=e.length,s=Ml(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||w_,s[o])}function AT(n,e,t){const i=this.cache,r=e.length,s=Ml(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||R_,s[o])}function wT(n,e,t){const i=this.cache,r=e.length,s=Ml(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||A_,s[o])}function RT(n){switch(n){case 5126:return cT;case 35664:return uT;case 35665:return fT;case 35666:return hT;case 35674:return dT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return _T;case 35667:case 35671:return gT;case 35668:case 35672:return vT;case 35669:case 35673:return xT;case 5125:return ST;case 36294:return MT;case 36295:return yT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return wT}}class CT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lT(t.type)}}class PT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RT(t.type)}}class DT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function Ud(n,e){n.seq.push(e),n.map[e.id]=e}function LT(n,e,t){const i=n.name,r=i.length;for(Sc.lastIndex=0;;){const s=Sc.exec(i),o=Sc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ud(t,c===void 0?new CT(a,n,e):new PT(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new DT(a),Ud(t,f)),t=f}}}class La{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);LT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Nd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const IT=37297;let UT=0;function NT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function OT(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===Ya&&t===qa?i="LinearDisplayP3ToLinearSRGB":e===qa&&t===Ya&&(i="LinearSRGBToLinearDisplayP3"),n){case hr:case xl:return[i,"LinearTransferOETF"];case ei:case If:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Od(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+NT(n.getShaderSource(e),o)}else return r}function FT(n,e){const t=OT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function BT(n,e){let t;switch(e){case Qx:t="Linear";break;case eS:t="Reinhard";break;case tS:t="Cineon";break;case nS:t="ACESFilmic";break;case rS:t="AgX";break;case sS:t="Neutral";break;case iS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xa=new Q;function zT(){Qe.getLuminanceCoefficients(xa);const n=xa.x.toFixed(4),e=xa.y.toFixed(4),t=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function VT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ao(n){return n!==""}function Fd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(n){return n.replace(GT,XT)}const WT=new Map;function XT(n,e){let t=Ve[e];if(t===void 0){const i=WT.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ou(t)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(n){return n.replace(qT,YT)}function YT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$m?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function jT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case Is:e="ENVMAP_TYPE_CUBE";break;case vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $T(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function ZT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zm:e="ENVMAP_BLENDING_MULTIPLY";break;case Zx:e="ENVMAP_BLENDING_MIX";break;case Jx:e="ENVMAP_BLENDING_ADD";break}return e}function JT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function QT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=KT(t),c=jT(t),u=$T(t),f=ZT(t),h=JT(t),d=HT(t),g=VT(s),_=r.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),m.length>0&&(m+=`
`)):(p=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),m=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ir?BT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,FT("linearToOutputTexel",t.outputColorSpace),zT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=Ou(o),o=Fd(o,t),o=Bd(o,t),a=Ou(a),a=Fd(a,t),a=Bd(a,t),o=zd(o),a=zd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=y+p+o,E=y+m+a,C=Nd(r,r.VERTEX_SHADER,S),R=Nd(r,r.FRAGMENT_SHADER,E);r.attachShader(_,C),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(T){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_).trim(),N=r.getShaderInfoLog(C).trim(),K=r.getShaderInfoLog(R).trim();let ee=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,R);else{const X=Od(r,C,"vertex"),G=Od(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+X+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||K==="")&&(k=!1);k&&(T.diagnostics={runnable:ee,programLog:I,vertexShader:{log:N,prefix:p},fragmentShader:{log:K,prefix:m}})}r.deleteShader(C),r.deleteShader(R),D=new La(r,_),L=kT(r,_)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let L;this.getAttributes=function(){return L===void 0&&b(this),L};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,IT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}let eb=0;class tb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nb(e),t.set(e,i)),i}}class nb{constructor(e){this.id=eb++,this.code=e,this.usedTimes=0}}function ib(n,e,t,i,r,s,o){const a=new p_,l=new tb,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,T,I,N,K){const ee=N.fog,k=K.geometry,X=x.isMeshStandardMaterial?N.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),me=G&&G.mapping===vl?G.image.height:null,_e=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Le=ge!==void 0?ge.length:0;let Ge=0;k.morphAttributes.position!==void 0&&(Ge=1),k.morphAttributes.normal!==void 0&&(Ge=2),k.morphAttributes.color!==void 0&&(Ge=3);let te,ae,Se,H;if(_e){const en=ri[_e];te=en.vertexShader,ae=en.fragmentShader}else te=x.vertexShader,ae=x.fragmentShader,l.update(x),Se=l.getVertexShaderID(x),H=l.getFragmentShaderID(x);const se=n.getRenderTarget(),re=K.isInstancedMesh===!0,de=K.isBatchedMesh===!0,Ae=!!x.map,P=!!x.matcap,M=!!G,B=!!x.aoMap,Y=!!x.lightMap,J=!!x.bumpMap,W=!!x.normalMap,ue=!!x.displacementMap,ie=!!x.emissiveMap,A=!!x.metalnessMap,v=!!x.roughnessMap,U=x.anisotropy>0,F=x.clearcoat>0,j=x.dispersion>0,q=x.iridescence>0,he=x.sheen>0,ce=x.transmission>0,fe=U&&!!x.anisotropyMap,Ie=F&&!!x.clearcoatMap,le=F&&!!x.clearcoatNormalMap,xe=F&&!!x.clearcoatRoughnessMap,Ce=q&&!!x.iridescenceMap,Ne=q&&!!x.iridescenceThicknessMap,be=he&&!!x.sheenColorMap,Fe=he&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,nt=!!x.specularColorMap,O=!!x.specularIntensityMap,Ee=ce&&!!x.transmissionMap,ne=ce&&!!x.thicknessMap,oe=!!x.gradientMap,Me=!!x.alphaMap,Te=x.alphaTest>0,Xe=!!x.alphaHash,Tt=!!x.extensions;let Qt=ir;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Qt=n.toneMapping);const Ye={shaderID:_e,shaderType:x.type,shaderName:x.name,vertexShader:te,fragmentShader:ae,defines:x.defines,customVertexShaderID:Se,customFragmentShaderID:H,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:de,batchingColor:de&&K._colorsTexture!==null,instancing:re,instancingColor:re&&K.instanceColor!==null,instancingMorph:re&&K.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:hr,alphaToCoverage:!!x.alphaToCoverage,map:Ae,matcap:P,envMap:M,envMapMode:M&&G.mapping,envMapCubeUVHeight:me,aoMap:B,lightMap:Y,bumpMap:J,normalMap:W,displacementMap:d&&ue,emissiveMap:ie,normalMapObjectSpace:W&&x.normalMapType===cS,normalMapTangentSpace:W&&x.normalMapType===c_,metalnessMap:A,roughnessMap:v,anisotropy:U,anisotropyMap:fe,clearcoat:F,clearcoatMap:Ie,clearcoatNormalMap:le,clearcoatRoughnessMap:xe,dispersion:j,iridescence:q,iridescenceMap:Ce,iridescenceThicknessMap:Ne,sheen:he,sheenColorMap:be,sheenRoughnessMap:Fe,specularMap:Ue,specularColorMap:nt,specularIntensityMap:O,transmission:ce,transmissionMap:Ee,thicknessMap:ne,gradientMap:oe,opaque:x.transparent===!1&&x.blending===Ts&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:Te,alphaHash:Xe,combine:x.combine,mapUv:Ae&&p(x.map.channel),aoMapUv:B&&p(x.aoMap.channel),lightMapUv:Y&&p(x.lightMap.channel),bumpMapUv:J&&p(x.bumpMap.channel),normalMapUv:W&&p(x.normalMap.channel),displacementMapUv:ue&&p(x.displacementMap.channel),emissiveMapUv:ie&&p(x.emissiveMap.channel),metalnessMapUv:A&&p(x.metalnessMap.channel),roughnessMapUv:v&&p(x.roughnessMap.channel),anisotropyMapUv:fe&&p(x.anisotropyMap.channel),clearcoatMapUv:Ie&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&p(x.sheenRoughnessMap.channel),specularMapUv:Ue&&p(x.specularMap.channel),specularColorMapUv:nt&&p(x.specularColorMap.channel),specularIntensityMapUv:O&&p(x.specularIntensityMap.channel),transmissionMapUv:Ee&&p(x.transmissionMap.channel),thicknessMapUv:ne&&p(x.thicknessMap.channel),alphaMapUv:Me&&p(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(W||U),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!k.attributes.uv&&(Ae||Me),fog:!!ee,useFog:x.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&Qe.getTransfer(x.map.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wi,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Tt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&x.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function y(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(S(T,x),E(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function S(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),x.push(a.mask)}function C(x){const T=_[x.type];let I;if(T){const N=ri[T];I=HS.clone(N.uniforms)}else I=x.uniforms;return I}function R(x,T){let I;for(let N=0,K=u.length;N<K;N++){const ee=u[N];if(ee.cacheKey===T){I=ee,++I.usedTimes;break}}return I===void 0&&(I=new QT(n,T,x,s),u.push(I)),I}function b(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),x.destroy()}}function D(x){l.remove(x)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:R,releaseProgram:b,releaseShaderCache:D,programs:u,dispose:L}}function rb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function sb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||sb),i.length>1&&i.sort(h||Vd),r.length>1&&r.sort(h||Vd)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function ob(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new kd,n.set(i,[o])):r>=s.length?(o=new kd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ab(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Ke};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function lb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cb=0;function ub(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fb(n){const e=new ab,t=lb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const r=new Q,s=new St,o=new St;function a(c){let u=0,f=0,h=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,y=0,S=0,E=0,C=0,R=0,b=0;c.sort(ub);for(let L=0,x=c.length;L<x;L++){const T=c[L],I=T.color,N=T.intensity,K=T.distance,ee=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=I.r*N,f+=I.g*N,h+=I.b*N;else if(T.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(T.sh.coefficients[k],N);b++}else if(T.isDirectionalLight){const k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const X=T.shadow,G=t.get(T);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=T.shadow.matrix,y++}i.directional[d]=k,d++}else if(T.isSpotLight){const k=e.get(T);k.position.setFromMatrixPosition(T.matrixWorld),k.color.copy(I).multiplyScalar(N),k.distance=K,k.coneCos=Math.cos(T.angle),k.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),k.decay=T.decay,i.spot[_]=k;const X=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,X.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[_]=X.matrix,T.castShadow){const G=t.get(T);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=ee,E++}_++}else if(T.isRectAreaLight){const k=e.get(T);k.color.copy(I).multiplyScalar(N),k.halfWidth.set(T.width*.5,0,0),k.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=k,p++}else if(T.isPointLight){const k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),k.distance=T.distance,k.decay=T.decay,T.castShadow){const X=T.shadow,G=t.get(T);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=T.shadow.matrix,S++}i.point[g]=k,g++}else if(T.isHemisphereLight){const k=e.get(T);k.skyColor.copy(T.color).multiplyScalar(N),k.groundColor.copy(T.groundColor).multiplyScalar(N),i.hemi[m]=k,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==y||D.numPointShadows!==S||D.numSpotShadows!==E||D.numSpotMaps!==C||D.numLightProbes!==b)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=b,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=y,D.numPointShadows=S,D.numSpotShadows=E,D.numSpotMaps=C,D.numLightProbes=b,i.version=cb++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const S=c[m];if(S.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(S.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Gd(n){const e=new fb(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function hb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Gd(n),e.set(r,[a])):s>=o.length?(a=new Gd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class db extends qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pb extends qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gb(n,e,t){let i=new Nf;const r=new et,s=new et,o=new gt,a=new db({depthPacking:lS}),l=new pb,c={},u=t.maxTextureSize,f={[ar]:on,[on]:ar,[wi]:wi},h=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:mb,fragmentShader:_b}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new jr;g.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ai(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$m;let m=this.type;this.render=function(R,b,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const L=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),I=n.state;I.setBlending(nr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=m!==Mi&&this.type===Mi,K=m===Mi&&this.type!==Mi;for(let ee=0,k=R.length;ee<k;ee++){const X=R[ee],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const me=G.getFrameExtents();if(r.multiply(me),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,G.mapSize.y=s.y)),G.map===null||N===!0||K===!0){const ge=this.type!==Mi?{minFilter:sn,magFilter:sn}:{};G.map!==null&&G.map.dispose(),G.map=new qr(r.x,r.y,ge),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const _e=G.getViewportCount();for(let ge=0;ge<_e;ge++){const Le=G.getViewport(ge);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),I.viewport(o),G.updateMatrices(X,ge),i=G.getFrustum(),E(b,D,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Mi&&y(G,D),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(L,x,T)};function y(R,b){const D=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new qr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(b,null,D,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(b,null,D,d,_,null)}function S(R,b,D,L){let x=null;const T=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)x=T;else if(x=D.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=x.uuid,N=b.uuid;let K=c[I];K===void 0&&(K={},c[I]=K);let ee=K[N];ee===void 0&&(ee=x.clone(),K[N]=ee,b.addEventListener("dispose",C)),x=ee}if(x.visible=b.visible,x.wireframe=b.wireframe,L===Mi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=n.properties.get(x);I.light=D}return x}function E(R,b,D,L,x){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Mi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const N=e.update(R),K=R.material;if(Array.isArray(K)){const ee=N.groups;for(let k=0,X=ee.length;k<X;k++){const G=ee[k],me=K[G.materialIndex];if(me&&me.visible){const _e=S(R,me,L,x);R.onBeforeShadow(n,R,b,D,N,_e,G),n.renderBufferDirect(D,null,N,_e,R,G),R.onAfterShadow(n,R,b,D,N,_e,G)}}}else if(K.visible){const ee=S(R,K,L,x);R.onBeforeShadow(n,R,b,D,N,ee,null),n.renderBufferDirect(D,null,N,ee,R,null),R.onAfterShadow(n,R,b,D,N,ee,null)}}const I=R.children;for(let N=0,K=I.length;N<K;N++)E(I[N],b,D,L,x)}function C(R){R.target.removeEventListener("dispose",C);for(const D in c){const L=c[D],x=R.target.uuid;x in L&&(L[x].dispose(),delete L[x])}}}const vb={[Jc]:Qc,[eu]:iu,[tu]:ru,[Ds]:nu,[Qc]:Jc,[iu]:eu,[ru]:tu,[nu]:Ds};function xb(n){function e(){let O=!1;const Ee=new gt;let ne=null;const oe=new gt(0,0,0,0);return{setMask:function(Me){ne!==Me&&!O&&(n.colorMask(Me,Me,Me,Me),ne=Me)},setLocked:function(Me){O=Me},setClear:function(Me,Te,Xe,Tt,Qt){Qt===!0&&(Me*=Tt,Te*=Tt,Xe*=Tt),Ee.set(Me,Te,Xe,Tt),oe.equals(Ee)===!1&&(n.clearColor(Me,Te,Xe,Tt),oe.copy(Ee))},reset:function(){O=!1,ne=null,oe.set(-1,0,0,0)}}}function t(){let O=!1,Ee=!1,ne=null,oe=null,Me=null;return{setReversed:function(Te){Ee=Te},setTest:function(Te){Te?Se(n.DEPTH_TEST):H(n.DEPTH_TEST)},setMask:function(Te){ne!==Te&&!O&&(n.depthMask(Te),ne=Te)},setFunc:function(Te){if(Ee&&(Te=vb[Te]),oe!==Te){switch(Te){case Jc:n.depthFunc(n.NEVER);break;case Qc:n.depthFunc(n.ALWAYS);break;case eu:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case tu:n.depthFunc(n.EQUAL);break;case nu:n.depthFunc(n.GEQUAL);break;case iu:n.depthFunc(n.GREATER);break;case ru:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Te}},setLocked:function(Te){O=Te},setClear:function(Te){Me!==Te&&(n.clearDepth(Te),Me=Te)},reset:function(){O=!1,ne=null,oe=null,Me=null}}}function i(){let O=!1,Ee=null,ne=null,oe=null,Me=null,Te=null,Xe=null,Tt=null,Qt=null;return{setTest:function(Ye){O||(Ye?Se(n.STENCIL_TEST):H(n.STENCIL_TEST))},setMask:function(Ye){Ee!==Ye&&!O&&(n.stencilMask(Ye),Ee=Ye)},setFunc:function(Ye,en,hi){(ne!==Ye||oe!==en||Me!==hi)&&(n.stencilFunc(Ye,en,hi),ne=Ye,oe=en,Me=hi)},setOp:function(Ye,en,hi){(Te!==Ye||Xe!==en||Tt!==hi)&&(n.stencilOp(Ye,en,hi),Te=Ye,Xe=en,Tt=hi)},setLocked:function(Ye){O=Ye},setClear:function(Ye){Qt!==Ye&&(n.clearStencil(Ye),Qt=Ye)},reset:function(){O=!1,Ee=null,ne=null,oe=null,Me=null,Te=null,Xe=null,Tt=null,Qt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,y=null,S=null,E=null,C=null,R=new Ke(0,0,0),b=0,D=!1,L=null,x=null,T=null,I=null,N=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,k=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),ee=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ee=k>=2);let G=null,me={};const _e=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Le=new gt().fromArray(_e),Ge=new gt().fromArray(ge);function te(O,Ee,ne,oe){const Me=new Uint8Array(4),Te=n.createTexture();n.bindTexture(O,Te),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<ne;Xe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(Ee+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return Te}const ae={};ae[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),s.setFunc(Ds),Y(!1),J(Zh),Se(n.CULL_FACE),M(nr);function Se(O){c[O]!==!0&&(n.enable(O),c[O]=!0)}function H(O){c[O]!==!1&&(n.disable(O),c[O]=!1)}function se(O,Ee){return u[O]!==Ee?(n.bindFramebuffer(O,Ee),u[O]=Ee,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ee),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function re(O,Ee){let ne=h,oe=!1;if(O){ne=f.get(Ee),ne===void 0&&(ne=[],f.set(Ee,ne));const Me=O.textures;if(ne.length!==Me.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Xe=Me.length;Te<Xe;Te++)ne[Te]=n.COLOR_ATTACHMENT0+Te;ne.length=Me.length,oe=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,oe=!0);oe&&n.drawBuffers(ne)}function de(O){return d!==O?(n.useProgram(O),d=O,!0):!1}const Ae={[Lr]:n.FUNC_ADD,[Ux]:n.FUNC_SUBTRACT,[Nx]:n.FUNC_REVERSE_SUBTRACT};Ae[Ox]=n.MIN,Ae[Fx]=n.MAX;const P={[Bx]:n.ZERO,[zx]:n.ONE,[Hx]:n.SRC_COLOR,[$c]:n.SRC_ALPHA,[qx]:n.SRC_ALPHA_SATURATE,[Wx]:n.DST_COLOR,[kx]:n.DST_ALPHA,[Vx]:n.ONE_MINUS_SRC_COLOR,[Zc]:n.ONE_MINUS_SRC_ALPHA,[Xx]:n.ONE_MINUS_DST_COLOR,[Gx]:n.ONE_MINUS_DST_ALPHA,[Yx]:n.CONSTANT_COLOR,[Kx]:n.ONE_MINUS_CONSTANT_COLOR,[jx]:n.CONSTANT_ALPHA,[$x]:n.ONE_MINUS_CONSTANT_ALPHA};function M(O,Ee,ne,oe,Me,Te,Xe,Tt,Qt,Ye){if(O===nr){g===!0&&(H(n.BLEND),g=!1);return}if(g===!1&&(Se(n.BLEND),g=!0),O!==Ix){if(O!==_||Ye!==D){if((p!==Lr||S!==Lr)&&(n.blendEquation(n.FUNC_ADD),p=Lr,S=Lr),Ye)switch(O){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.ONE,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ed:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ed:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,y=null,E=null,C=null,R.set(0,0,0),b=0,_=O,D=Ye}return}Me=Me||Ee,Te=Te||ne,Xe=Xe||oe,(Ee!==p||Me!==S)&&(n.blendEquationSeparate(Ae[Ee],Ae[Me]),p=Ee,S=Me),(ne!==m||oe!==y||Te!==E||Xe!==C)&&(n.blendFuncSeparate(P[ne],P[oe],P[Te],P[Xe]),m=ne,y=oe,E=Te,C=Xe),(Tt.equals(R)===!1||Qt!==b)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Qt),R.copy(Tt),b=Qt),_=O,D=!1}function B(O,Ee){O.side===wi?H(n.CULL_FACE):Se(n.CULL_FACE);let ne=O.side===on;Ee&&(ne=!ne),Y(ne),O.blending===Ts&&O.transparent===!1?M(nr):M(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const oe=O.stencilWrite;o.setTest(oe),oe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):H(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function J(O){O!==Px?(Se(n.CULL_FACE),O!==x&&(O===Zh?n.cullFace(n.BACK):O===Dx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):H(n.CULL_FACE),x=O}function W(O){O!==T&&(ee&&n.lineWidth(O),T=O)}function ue(O,Ee,ne){O?(Se(n.POLYGON_OFFSET_FILL),(I!==Ee||N!==ne)&&(n.polygonOffset(Ee,ne),I=Ee,N=ne)):H(n.POLYGON_OFFSET_FILL)}function ie(O){O?Se(n.SCISSOR_TEST):H(n.SCISSOR_TEST)}function A(O){O===void 0&&(O=n.TEXTURE0+K-1),G!==O&&(n.activeTexture(O),G=O)}function v(O,Ee,ne){ne===void 0&&(G===null?ne=n.TEXTURE0+K-1:ne=G);let oe=me[ne];oe===void 0&&(oe={type:void 0,texture:void 0},me[ne]=oe),(oe.type!==O||oe.texture!==Ee)&&(G!==ne&&(n.activeTexture(ne),G=ne),n.bindTexture(O,Ee||ae[O]),oe.type=O,oe.texture=Ee)}function U(){const O=me[G];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function F(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(O){Le.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Le.copy(O))}function be(O){Ge.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ge.copy(O))}function Fe(O,Ee){let ne=l.get(Ee);ne===void 0&&(ne=new WeakMap,l.set(Ee,ne));let oe=ne.get(O);oe===void 0&&(oe=n.getUniformBlockIndex(Ee,O.name),ne.set(O,oe))}function Ue(O,Ee){const oe=l.get(Ee).get(O);a.get(Ee)!==oe&&(n.uniformBlockBinding(Ee,oe,O.__bindingPointIndex),a.set(Ee,oe))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,me={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,y=null,S=null,E=null,C=null,R=new Ke(0,0,0),b=0,D=!1,L=null,x=null,T=null,I=null,N=null,Le.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Se,disable:H,bindFramebuffer:se,drawBuffers:re,useProgram:de,setBlending:M,setMaterial:B,setFlipSided:Y,setCullFace:J,setLineWidth:W,setPolygonOffset:ue,setScissorTest:ie,activeTexture:A,bindTexture:v,unbindTexture:U,compressedTexImage2D:F,compressedTexImage3D:j,texImage2D:xe,texImage3D:Ce,updateUBOMapping:Fe,uniformBlockBinding:Ue,texStorage2D:Ie,texStorage3D:le,texSubImage2D:q,texSubImage3D:he,compressedTexSubImage2D:ce,compressedTexSubImage3D:fe,scissor:Ne,viewport:be,reset:nt}}function Wd(n,e,t,i){const r=Sb(i);switch(t){case n_:return n*e;case r_:return n*e;case s_:return n*e*2;case o_:return n*e/r.components*r.byteLength;case Pf:return n*e/r.components*r.byteLength;case a_:return n*e*2/r.components*r.byteLength;case Df:return n*e*2/r.components*r.byteLength;case i_:return n*e*3/r.components*r.byteLength;case qn:return n*e*4/r.components*r.byteLength;case Lf:return n*e*4/r.components*r.byteLength;case Aa:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uu:case hu:return Math.max(n,16)*Math.max(e,8)/4;case cu:case fu:return Math.max(n,8)*Math.max(e,8)/2;case du:case pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Su:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Au:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pa:case Pu:case Du:return Math.ceil(n/4)*Math.ceil(e/4)*16;case l_:case Lu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Iu:case Uu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sb(n){switch(n){case Ui:case Qm:return{byteLength:1,components:1};case Po:case e_:case Go:return{byteLength:2,components:1};case Rf:case Cf:return{byteLength:2,components:4};case Xr:case wf:case Ri:return{byteLength:4,components:1};case t_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Mb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return d?new OffscreenCanvas(A,v):ja("canvas")}function _(A,v,U){let F=1;const j=ie(A);if((j.width>U||j.height>U)&&(F=U/Math.max(j.width,j.height)),F<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(F*j.width),he=Math.floor(F*j.height);f===void 0&&(f=g(q,he));const ce=v?g(q,he):f;return ce.width=q,ce.height=he,ce.getContext("2d").drawImage(A,0,0,q,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+he+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==sn&&A.minFilter!==Gn}function m(A){n.generateMipmap(A)}function y(A,v,U,F,j=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=v;if(v===n.RED&&(U===n.FLOAT&&(q=n.R32F),U===n.HALF_FLOAT&&(q=n.R16F),U===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.R8UI),U===n.UNSIGNED_SHORT&&(q=n.R16UI),U===n.UNSIGNED_INT&&(q=n.R32UI),U===n.BYTE&&(q=n.R8I),U===n.SHORT&&(q=n.R16I),U===n.INT&&(q=n.R32I)),v===n.RG&&(U===n.FLOAT&&(q=n.RG32F),U===n.HALF_FLOAT&&(q=n.RG16F),U===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RG8UI),U===n.UNSIGNED_SHORT&&(q=n.RG16UI),U===n.UNSIGNED_INT&&(q=n.RG32UI),U===n.BYTE&&(q=n.RG8I),U===n.SHORT&&(q=n.RG16I),U===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(q=n.RGB16UI),U===n.UNSIGNED_INT&&(q=n.RGB32UI),U===n.BYTE&&(q=n.RGB8I),U===n.SHORT&&(q=n.RGB16I),U===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),U===n.UNSIGNED_INT&&(q=n.RGBA32UI),U===n.BYTE&&(q=n.RGBA8I),U===n.SHORT&&(q=n.RGBA16I),U===n.INT&&(q=n.RGBA32I)),v===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),v===n.RGBA){const he=j?Xa:Qe.getTransfer(F);U===n.FLOAT&&(q=n.RGBA32F),U===n.HALF_FLOAT&&(q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(q=he===ut?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(A,v){let U;return A?v===null||v===Xr||v===Us?U=n.DEPTH24_STENCIL8:v===Ri?U=n.DEPTH32F_STENCIL8:v===Po&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xr||v===Us?U=n.DEPTH_COMPONENT24:v===Ri?U=n.DEPTH_COMPONENT32F:v===Po&&(U=n.DEPTH_COMPONENT16),U}function E(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==Gn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){const v=A.target;v.removeEventListener("dispose",C),b(v),v.isVideoTexture&&u.delete(v)}function R(A){const v=A.target;v.removeEventListener("dispose",R),L(v)}function b(A){const v=i.get(A);if(v.__webglInit===void 0)return;const U=A.source,F=h.get(U);if(F){const j=F[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&D(A),Object.keys(F).length===0&&h.delete(U)}i.remove(A)}function D(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const U=A.source,F=h.get(U);delete F[v.__cacheKey],o.memory.textures--}function L(A){const v=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(v.__webglFramebuffer[F]))for(let j=0;j<v.__webglFramebuffer[F].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[F][j]);else n.deleteFramebuffer(v.__webglFramebuffer[F]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[F])}else{if(Array.isArray(v.__webglFramebuffer))for(let F=0;F<v.__webglFramebuffer.length;F++)n.deleteFramebuffer(v.__webglFramebuffer[F]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let F=0;F<v.__webglColorRenderbuffer.length;F++)v.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[F]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=A.textures;for(let F=0,j=U.length;F<j;F++){const q=i.get(U[F]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(U[F])}i.remove(A)}let x=0;function T(){x=0}function I(){const A=x;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),x+=1,A}function N(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function K(A,v){const U=i.get(A);if(A.isVideoTexture&&W(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){const F=A.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(U,A,v);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function ee(A,v){const U=i.get(A);if(A.version>0&&U.__version!==A.version){Ge(U,A,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function k(A,v){const U=i.get(A);if(A.version>0&&U.__version!==A.version){Ge(U,A,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function X(A,v){const U=i.get(A);if(A.version>0&&U.__version!==A.version){te(U,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const G={[au]:n.REPEAT,[Ur]:n.CLAMP_TO_EDGE,[lu]:n.MIRRORED_REPEAT},me={[sn]:n.NEAREST,[oS]:n.NEAREST_MIPMAP_NEAREST,[Qo]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[Xl]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},_e={[uS]:n.NEVER,[_S]:n.ALWAYS,[fS]:n.LESS,[u_]:n.LEQUAL,[hS]:n.EQUAL,[mS]:n.GEQUAL,[dS]:n.GREATER,[pS]:n.NOTEQUAL};function ge(A,v){if(v.type===Ri&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Gn||v.magFilter===Xl||v.magFilter===Qo||v.magFilter===Nr||v.minFilter===Gn||v.minFilter===Xl||v.minFilter===Qo||v.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,G[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,G[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,G[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==Qo&&v.minFilter!==Nr||v.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Le(A,v){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));const F=v.source;let j=h.get(F);j===void 0&&(j={},h.set(F,j));const q=N(v);if(q!==A.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),j[q].usedTimes++;const he=j[A.__cacheKey];he!==void 0&&(j[A.__cacheKey].usedTimes--,he.usedTimes===0&&D(v)),A.__cacheKey=q,A.__webglTexture=j[q].texture}return U}function Ge(A,v,U){let F=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(F=n.TEXTURE_3D);const j=Le(A,v),q=v.source;t.bindTexture(F,A.__webglTexture,n.TEXTURE0+U);const he=i.get(q);if(q.version!==he.__version||j===!0){t.activeTexture(n.TEXTURE0+U);const ce=Qe.getPrimaries(Qe.workingColorSpace),fe=v.colorSpace===Zi?null:Qe.getPrimaries(v.colorSpace),Ie=v.colorSpace===Zi||ce===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let le=_(v.image,!1,r.maxTextureSize);le=ue(v,le);const xe=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type);let Ne=y(v.internalFormat,xe,Ce,v.colorSpace,v.isVideoTexture);ge(F,v);let be;const Fe=v.mipmaps,Ue=v.isVideoTexture!==!0,nt=he.__version===void 0||j===!0,O=q.dataReady,Ee=E(v,le);if(v.isDepthTexture)Ne=S(v.format===Ns,v.type),nt&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,Ne,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ne,le.width,le.height,0,xe,Ce,null));else if(v.isDataTexture)if(Fe.length>0){Ue&&nt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,Fe[0].width,Fe[0].height);for(let ne=0,oe=Fe.length;ne<oe;ne++)be=Fe[ne],Ue?O&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,be.width,be.height,xe,Ce,be.data):t.texImage2D(n.TEXTURE_2D,ne,Ne,be.width,be.height,0,xe,Ce,be.data);v.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,le.width,le.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,xe,Ce,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,le.width,le.height,0,xe,Ce,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ue&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ne,Fe[0].width,Fe[0].height,le.depth);for(let ne=0,oe=Fe.length;ne<oe;ne++)if(be=Fe[ne],v.format!==qn)if(xe!==null)if(Ue){if(O)if(v.layerUpdates.size>0){const Me=Wd(be.width,be.height,v.format,v.type);for(const Te of v.layerUpdates){const Xe=be.data.subarray(Te*Me/be.data.BYTES_PER_ELEMENT,(Te+1)*Me/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Te,be.width,be.height,1,xe,Xe,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,be.width,be.height,le.depth,xe,be.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Ne,be.width,be.height,le.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,be.width,be.height,le.depth,xe,Ce,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Ne,be.width,be.height,le.depth,0,xe,Ce,be.data)}else{Ue&&nt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ne,Fe[0].width,Fe[0].height);for(let ne=0,oe=Fe.length;ne<oe;ne++)be=Fe[ne],v.format!==qn?xe!==null?Ue?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,be.width,be.height,xe,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Ne,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?O&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,be.width,be.height,xe,Ce,be.data):t.texImage2D(n.TEXTURE_2D,ne,Ne,be.width,be.height,0,xe,Ce,be.data)}else if(v.isDataArrayTexture)if(Ue){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ne,le.width,le.height,le.depth),O)if(v.layerUpdates.size>0){const ne=Wd(le.width,le.height,v.format,v.type);for(const oe of v.layerUpdates){const Me=le.data.subarray(oe*ne/le.data.BYTES_PER_ELEMENT,(oe+1)*ne/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,le.width,le.height,1,xe,Ce,Me)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Ce,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,le.width,le.height,le.depth,0,xe,Ce,le.data);else if(v.isData3DTexture)Ue?(nt&&t.texStorage3D(n.TEXTURE_3D,Ee,Ne,le.width,le.height,le.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Ce,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,le.width,le.height,le.depth,0,xe,Ce,le.data);else if(v.isFramebufferTexture){if(nt)if(Ue)t.texStorage2D(n.TEXTURE_2D,Ee,Ne,le.width,le.height);else{let ne=le.width,oe=le.height;for(let Me=0;Me<Ee;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ne,ne,oe,0,xe,Ce,null),ne>>=1,oe>>=1}}else if(Fe.length>0){if(Ue&&nt){const ne=ie(Fe[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ne,ne.width,ne.height)}for(let ne=0,oe=Fe.length;ne<oe;ne++)be=Fe[ne],Ue?O&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,xe,Ce,be):t.texImage2D(n.TEXTURE_2D,ne,Ne,xe,Ce,be);v.generateMipmaps=!1}else if(Ue){if(nt){const ne=ie(le);t.texStorage2D(n.TEXTURE_2D,Ee,Ne,ne.width,ne.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ce,le)}else t.texImage2D(n.TEXTURE_2D,0,Ne,xe,Ce,le);p(v)&&m(F),he.__version=q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function te(A,v,U){if(v.image.length!==6)return;const F=Le(A,v),j=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+U);const q=i.get(j);if(j.version!==q.__version||F===!0){t.activeTexture(n.TEXTURE0+U);const he=Qe.getPrimaries(Qe.workingColorSpace),ce=v.colorSpace===Zi?null:Qe.getPrimaries(v.colorSpace),fe=v.colorSpace===Zi||he===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ie=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!Ie&&!le?xe[oe]=_(v.image[oe],!0,r.maxCubemapSize):xe[oe]=le?v.image[oe].image:v.image[oe],xe[oe]=ue(v,xe[oe]);const Ce=xe[0],Ne=s.convert(v.format,v.colorSpace),be=s.convert(v.type),Fe=y(v.internalFormat,Ne,be,v.colorSpace),Ue=v.isVideoTexture!==!0,nt=q.__version===void 0||F===!0,O=j.dataReady;let Ee=E(v,Ce);ge(n.TEXTURE_CUBE_MAP,v);let ne;if(Ie){Ue&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Fe,Ce.width,Ce.height);for(let oe=0;oe<6;oe++){ne=xe[oe].mipmaps;for(let Me=0;Me<ne.length;Me++){const Te=ne[Me];v.format!==qn?Ne!==null?Ue?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,Te.width,Te.height,Ne,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,Te.width,Te.height,Ne,be,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,Fe,Te.width,Te.height,0,Ne,be,Te.data)}}}else{if(ne=v.mipmaps,Ue&&nt){ne.length>0&&Ee++;const oe=ie(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Fe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(le){Ue?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Ne,be,xe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Fe,xe[oe].width,xe[oe].height,0,Ne,be,xe[oe].data);for(let Me=0;Me<ne.length;Me++){const Xe=ne[Me].image[oe].image;Ue?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Xe.width,Xe.height,Ne,be,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,Fe,Xe.width,Xe.height,0,Ne,be,Xe.data)}}else{Ue?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,be,xe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Fe,Ne,be,xe[oe]);for(let Me=0;Me<ne.length;Me++){const Te=ne[Me];Ue?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Ne,be,Te.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,Fe,Ne,be,Te.image[oe])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),q.__version=j.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ae(A,v,U,F,j,q){const he=s.convert(U.format,U.colorSpace),ce=s.convert(U.type),fe=y(U.internalFormat,he,ce,U.colorSpace);if(!i.get(v).__hasExternalTextures){const le=Math.max(1,v.width>>q),xe=Math.max(1,v.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,q,fe,le,xe,v.depth,0,he,ce,null):t.texImage2D(j,q,fe,le,xe,0,he,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),J(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,j,i.get(U).__webglTexture,0,Y(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,j,i.get(U).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(A,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const F=v.depthTexture,j=F&&F.isDepthTexture?F.type:null,q=S(v.stencilBuffer,j),he=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Y(v);J(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,q,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,A)}else{const F=v.textures;for(let j=0;j<F.length;j++){const q=F[j],he=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),fe=y(q.internalFormat,he,ce,q.colorSpace),Ie=Y(v);U&&J(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,fe,v.width,v.height):J(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function H(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const F=i.get(v.depthTexture).__webglTexture,j=Y(v);if(v.depthTexture.format===bs)J(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(v.depthTexture.format===Ns)J(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function se(A){const v=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const F=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),F){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,F.removeEventListener("dispose",j)};F.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=F}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");H(v.__webglFramebuffer,A)}else if(U){v.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[F]),v.__webglDepthbuffer[F]===void 0)v.__webglDepthbuffer[F]=n.createRenderbuffer(),Se(v.__webglDepthbuffer[F],A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Se(v.__webglDepthbuffer,A,!1);else{const F=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(A,v,U){const F=i.get(A);v!==void 0&&ae(F.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&se(A)}function de(A){const v=A.texture,U=i.get(A),F=i.get(v);A.addEventListener("dispose",R);const j=A.textures,q=A.isWebGLCubeRenderTarget===!0,he=j.length>1;if(he||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=v.version,o.memory.textures++),q){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let fe=0;fe<v.mipmaps.length;fe++)U.__webglFramebuffer[ce][fe]=n.createFramebuffer()}else U.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)U.__webglFramebuffer[ce]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(he)for(let ce=0,fe=j.length;ce<fe;ce++){const Ie=i.get(j[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&J(A)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){const fe=j[ce];U.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Ie=s.convert(fe.format,fe.colorSpace),le=s.convert(fe.type),xe=y(fe.internalFormat,Ie,le,fe.colorSpace,A.isXRRenderTarget===!0),Ce=Y(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,xe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),ge(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ae(U.__webglFramebuffer[ce][fe],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else ae(U.__webglFramebuffer[ce],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ce=0,fe=j.length;ce<fe;ce++){const Ie=j[ce],le=i.get(Ie);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),ge(n.TEXTURE_2D,Ie),ae(U.__webglFramebuffer,A,Ie,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),p(Ie)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,F.__webglTexture),ge(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ae(U.__webglFramebuffer[fe],A,v,n.COLOR_ATTACHMENT0,ce,fe);else ae(U.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,ce,0);p(v)&&m(ce),t.unbindTexture()}A.depthBuffer&&se(A)}function Ae(A){const v=A.textures;for(let U=0,F=v.length;U<F;U++){const j=v[U];if(p(j)){const q=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(j).__webglTexture;t.bindTexture(q,he),m(q),t.unbindTexture()}}}const P=[],M=[];function B(A){if(A.samples>0){if(J(A)===!1){const v=A.textures,U=A.width,F=A.height;let j=n.COLOR_BUFFER_BIT;const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(A),ce=v.length>1;if(ce)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const Ie=i.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,U,F,0,0,U,F,j,n.NEAREST),l===!0&&(P.length=0,M.length=0,P.push(n.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(P.push(q),M.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const Ie=i.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Y(A){return Math.min(r.maxSamples,A.samples)}function J(A){const v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function W(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function ue(A,v){const U=A.colorSpace,F=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==hr&&U!==Zi&&(Qe.getTransfer(U)===ut?(F!==qn||j!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=T,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=re,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=J}function yb(n,e){function t(i,r=Zi){let s;const o=Qe.getTransfer(r);if(i===Ui)return n.UNSIGNED_BYTE;if(i===Rf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===t_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qm)return n.BYTE;if(i===e_)return n.SHORT;if(i===Po)return n.UNSIGNED_SHORT;if(i===wf)return n.INT;if(i===Xr)return n.UNSIGNED_INT;if(i===Ri)return n.FLOAT;if(i===Go)return n.HALF_FLOAT;if(i===n_)return n.ALPHA;if(i===i_)return n.RGB;if(i===qn)return n.RGBA;if(i===r_)return n.LUMINANCE;if(i===s_)return n.LUMINANCE_ALPHA;if(i===bs)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===o_)return n.RED;if(i===Pf)return n.RED_INTEGER;if(i===a_)return n.RG;if(i===Df)return n.RG_INTEGER;if(i===Lf)return n.RGBA_INTEGER;if(i===Aa||i===wa||i===Ra||i===Ca)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cu||i===uu||i===fu||i===hu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===du||i===pu||i===mu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===du||i===pu)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_u||i===gu||i===vu||i===xu||i===Su||i===Mu||i===yu||i===Eu||i===Tu||i===bu||i===Au||i===wu||i===Ru||i===Cu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_u)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Su)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Au)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ru)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===Pu||i===Du)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pa)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Du)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===l_||i===Lu||i===Iu||i===Uu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Eb extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sa extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tb={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new lr({vertexShader:bb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new Sl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rb extends Xs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new wb,p=t.getContextAttributes();let m=null,y=null;const S=[],E=[],C=new et;let R=null;const b=new Ln;b.layers.enable(1),b.viewport=new gt;const D=new Ln;D.layers.enable(2),D.viewport=new gt;const L=[b,D],x=new Eb;x.layers.enable(1),x.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=S[te];return ae===void 0&&(ae=new Mc,S[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=S[te];return ae===void 0&&(ae=new Mc,S[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=S[te];return ae===void 0&&(ae=new Mc,S[te]=ae),ae.getHandSpace()};function N(te){const ae=E.indexOf(te.inputSource);if(ae===-1)return;const Se=S[ae];Se!==void 0&&(Se.update(te.inputSource,te.frame,c||o),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function K(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",ee);for(let te=0;te<S.length;te++){const ae=E[te];ae!==null&&(E[te]=null,S[te].disconnect(ae))}T=null,I=null,_.reset(),e.setRenderTarget(m),d=null,h=null,f=null,r=null,y=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",K),r.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new qr(d.framebufferWidth,d.framebufferHeight,{format:qn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,Se=null,H=null;p.depth&&(H=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?Ns:bs,Se=p.stencil?Us:Xr);const se={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new qr(h.textureWidth,h.textureHeight,{format:qn,type:Ui,depthTexture:new T_(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(te){for(let ae=0;ae<te.removed.length;ae++){const Se=te.removed[ae],H=E.indexOf(Se);H>=0&&(E[H]=null,S[H].disconnect(Se))}for(let ae=0;ae<te.added.length;ae++){const Se=te.added[ae];let H=E.indexOf(Se);if(H===-1){for(let re=0;re<S.length;re++)if(re>=E.length){E.push(Se),H=re;break}else if(E[re]===null){E[re]=Se,H=re;break}if(H===-1)break}const se=S[H];se&&se.connect(Se)}}const k=new Q,X=new Q;function G(te,ae,Se){k.setFromMatrixPosition(ae.matrixWorld),X.setFromMatrixPosition(Se.matrixWorld);const H=k.distanceTo(X),se=ae.projectionMatrix.elements,re=Se.projectionMatrix.elements,de=se[14]/(se[10]-1),Ae=se[14]/(se[10]+1),P=(se[9]+1)/se[5],M=(se[9]-1)/se[5],B=(se[8]-1)/se[0],Y=(re[8]+1)/re[0],J=de*B,W=de*Y,ue=H/(-B+Y),ie=ue*-B;if(ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ie),te.translateZ(ue),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),se[10]===-1)te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const A=de+ue,v=Ae+ue,U=J-ie,F=W+(H-ie),j=P*Ae/v*A,q=M*Ae/v*A;te.projectionMatrix.makePerspective(U,F,j,q,A,v),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function me(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ae=te.near,Se=te.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),x.near=D.near=b.near=ae,x.far=D.far=b.far=Se,(T!==x.near||I!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,I=x.far);const H=te.parent,se=x.cameras;me(x,H);for(let re=0;re<se.length;re++)me(se[re],H);se.length===2?G(x,b,D):x.projectionMatrix.copy(b.projectionMatrix),_e(te,x,H)};function _e(te,ae,Se){Se===null?te.matrix.copy(ae.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Nu*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ge=null;function Le(te,ae){if(u=ae.getViewerPose(c||o),g=ae,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let H=!1;Se.length!==x.cameras.length&&(x.cameras.length=0,H=!0);for(let re=0;re<Se.length;re++){const de=Se[re];let Ae=null;if(d!==null)Ae=d.getViewport(de);else{const M=f.getViewSubImage(h,de);Ae=M.viewport,re===0&&(e.setRenderTargetTextures(y,M.colorTexture,h.ignoreDepthValues?void 0:M.depthStencilTexture),e.setRenderTarget(y))}let P=L[re];P===void 0&&(P=new Ln,P.layers.enable(re),P.viewport=new gt,L[re]=P),P.matrix.fromArray(de.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(de.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),re===0&&(x.matrix.copy(P.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),H===!0&&x.cameras.push(P)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const re=f.getDepthInformation(Se[0]);re&&re.isValid&&re.texture&&_.init(e,re,r.renderState)}}for(let Se=0;Se<S.length;Se++){const H=E[Se],se=S[Se];H!==null&&se!==void 0&&se.update(H,ae,c||o)}ge&&ge(te,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Ge=new y_;Ge.setAnimationLoop(Le),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const Tr=new Bn,Cb=new St;function Pb(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,x_(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,y,S,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),S=y.envMap,E=y.envMapRotation;S&&(p.envMap.value=S,Tr.copy(E),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(Tr)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Db(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const E=S.program;i.uniformBlockBinding(y,E)}function c(y,S){let E=r[y.id];E===void 0&&(g(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",p));const C=S.program;i.updateUBOMapping(y,C);const R=e.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function u(y){const S=f();y.__bindingPointIndex=S;const E=n.createBuffer(),C=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=r[y.id],E=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,b=E.length;R<b;R++){const D=Array.isArray(E[R])?E[R]:[E[R]];for(let L=0,x=D.length;L<x;L++){const T=D[L];if(d(T,R,L,C)===!0){const I=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let K=0;for(let ee=0;ee<N.length;ee++){const k=N[ee],X=_(k);typeof k=="number"||typeof k=="boolean"?(T.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,I+K,T.__data)):k.isMatrix3?(T.__data[0]=k.elements[0],T.__data[1]=k.elements[1],T.__data[2]=k.elements[2],T.__data[3]=0,T.__data[4]=k.elements[3],T.__data[5]=k.elements[4],T.__data[6]=k.elements[5],T.__data[7]=0,T.__data[8]=k.elements[6],T.__data[9]=k.elements[7],T.__data[10]=k.elements[8],T.__data[11]=0):(k.toArray(T.__data,K),K+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,S,E,C){const R=y.value,b=S+"_"+E;if(C[b]===void 0)return typeof R=="number"||typeof R=="boolean"?C[b]=R:C[b]=R.clone(),!0;{const D=C[b];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[b]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(y){const S=y.uniforms;let E=0;const C=16;for(let b=0,D=S.length;b<D;b++){const L=Array.isArray(S[b])?S[b]:[S[b]];for(let x=0,T=L.length;x<T;x++){const I=L[x],N=Array.isArray(I.value)?I.value:[I.value];for(let K=0,ee=N.length;K<ee;K++){const k=N[K],X=_(k),G=E%C,me=G%X.boundary,_e=G+me;E+=me,_e!==0&&C-_e<X.storage&&(E+=C-_e),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=X.storage}}}const R=E%C;return R>0&&(E+=C-R),y.__size=E,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Lb{constructor(e={}){const{canvas:t=vS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=ir,this.toneMappingExposure=1;const S=this;let E=!1,C=0,R=0,b=null,D=-1,L=null;const x=new gt,T=new gt;let I=null;const N=new Ke(0);let K=0,ee=t.width,k=t.height,X=1,G=null,me=null;const _e=new gt(0,0,ee,k),ge=new gt(0,0,ee,k);let Le=!1;const Ge=new Nf;let te=!1,ae=!1;const Se=new St,H=new St,se=new Q,re=new gt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function P(){return b===null?X:1}let M=i;function B(w,z){return t.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Af}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Te,!1),M===null){const z="webgl2";if(M=B(z,w),M===null)throw B(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Y,J,W,ue,ie,A,v,U,F,j,q,he,ce,fe,Ie,le,xe,Ce,Ne,be,Fe,Ue,nt,O;function Ee(){Y=new FE(M),Y.init(),Ue=new yb(M,Y),J=new DE(M,Y,e,Ue),W=new xb(M),J.reverseDepthBuffer&&W.buffers.depth.setReversed(!0),ue=new HE(M),ie=new rb,A=new Mb(M,Y,W,ie,J,Ue,ue),v=new IE(S),U=new OE(S),F=new YS(M),nt=new CE(M,F),j=new BE(M,F,ue,nt),q=new kE(M,j,F,ue),Ne=new VE(M,J,A),le=new LE(ie),he=new ib(S,v,U,Y,J,nt,le),ce=new Pb(S,ie),fe=new ob,Ie=new hb(Y),Ce=new RE(S,v,U,W,q,h,l),xe=new gb(S,q,J),O=new Db(M,ue,J,W),be=new PE(M,Y,ue),Fe=new zE(M,Y,ue),ue.programs=he.programs,S.capabilities=J,S.extensions=Y,S.properties=ie,S.renderLists=fe,S.shadowMap=xe,S.state=W,S.info=ue}Ee();const ne=new Rb(S,M);this.xr=ne,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const w=Y.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Y.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(ee,k,!1))},this.getSize=function(w){return w.set(ee,k)},this.setSize=function(w,z,$=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,k=z,t.width=Math.floor(w*X),t.height=Math.floor(z*X),$===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(ee*X,k*X).floor()},this.setDrawingBufferSize=function(w,z,$){ee=w,k=z,X=$,t.width=Math.floor(w*$),t.height=Math.floor(z*$),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(_e)},this.setViewport=function(w,z,$,Z){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,z,$,Z),W.viewport(x.copy(_e).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,z,$,Z){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,z,$,Z),W.scissor(T.copy(ge).multiplyScalar(X).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(w){W.setScissorTest(Le=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){me=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(w=!0,z=!0,$=!0){let Z=0;if(w){let V=!1;if(b!==null){const pe=b.texture.format;V=pe===Lf||pe===Df||pe===Pf}if(V){const pe=b.texture.type,ye=pe===Ui||pe===Xr||pe===Po||pe===Us||pe===Rf||pe===Cf,we=Ce.getClearColor(),Re=Ce.getClearAlpha(),Be=we.r,ze=we.g,Pe=we.b;ye?(d[0]=Be,d[1]=ze,d[2]=Pe,d[3]=Re,M.clearBufferuiv(M.COLOR,0,d)):(g[0]=Be,g[1]=ze,g[2]=Pe,g[3]=Re,M.clearBufferiv(M.COLOR,0,g))}else Z|=M.COLOR_BUFFER_BIT}z&&(Z|=M.DEPTH_BUFFER_BIT,M.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(Z|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),fe.dispose(),Ie.dispose(),ie.dispose(),v.dispose(),U.dispose(),q.dispose(),nt.dispose(),O.dispose(),he.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",rh),ne.removeEventListener("sessionend",sh),pr.stop()};function oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=ue.autoReset,z=xe.enabled,$=xe.autoUpdate,Z=xe.needsUpdate,V=xe.type;Ee(),ue.autoReset=w,xe.enabled=z,xe.autoUpdate=$,xe.needsUpdate=Z,xe.type=V}function Te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xe(w){const z=w.target;z.removeEventListener("dispose",Xe),Tt(z)}function Tt(w){Qt(w),ie.remove(w)}function Qt(w){const z=ie.get(w).programs;z!==void 0&&(z.forEach(function($){he.releaseProgram($)}),w.isShaderMaterial&&he.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,$,Z,V,pe){z===null&&(z=de);const ye=V.isMesh&&V.matrixWorld.determinant()<0,we=Vg(w,z,$,Z,V);W.setMaterial(Z,ye);let Re=$.index,Be=1;if(Z.wireframe===!0){if(Re=j.getWireframeAttribute($),Re===void 0)return;Be=2}const ze=$.drawRange,Pe=$.attributes.position;let it=ze.start*Be,ct=(ze.start+ze.count)*Be;pe!==null&&(it=Math.max(it,pe.start*Be),ct=Math.min(ct,(pe.start+pe.count)*Be)),Re!==null?(it=Math.max(it,0),ct=Math.min(ct,Re.count)):Pe!=null&&(it=Math.max(it,0),ct=Math.min(ct,Pe.count));const mt=ct-it;if(mt<0||mt===1/0)return;nt.setup(V,Z,we,$,Re);let hn,je=be;if(Re!==null&&(hn=F.get(Re),je=Fe,je.setIndex(hn)),V.isMesh)Z.wireframe===!0?(W.setLineWidth(Z.wireframeLinewidth*P()),je.setMode(M.LINES)):je.setMode(M.TRIANGLES);else if(V.isLine){let De=Z.linewidth;De===void 0&&(De=1),W.setLineWidth(De*P()),V.isLineSegments?je.setMode(M.LINES):V.isLineLoop?je.setMode(M.LINE_LOOP):je.setMode(M.LINE_STRIP)}else V.isPoints?je.setMode(M.POINTS):V.isSprite&&je.setMode(M.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)je.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))je.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const De=V._multiDrawStarts,Ut=V._multiDrawCounts,$e=V._multiDrawCount,zn=Re?F.get(Re).bytesPerElement:1,Zr=ie.get(Z).currentProgram.getUniforms();for(let dn=0;dn<$e;dn++)Zr.setValue(M,"_gl_DrawID",dn),je.render(De[dn]/zn,Ut[dn])}else if(V.isInstancedMesh)je.renderInstances(it,mt,V.count);else if($.isInstancedBufferGeometry){const De=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ut=Math.min($.instanceCount,De);je.renderInstances(it,mt,Ut)}else je.render(it,mt)};function Ye(w,z,$){w.transparent===!0&&w.side===wi&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,jo(w,z,$),w.side=ar,w.needsUpdate=!0,jo(w,z,$),w.side=wi):jo(w,z,$)}this.compile=function(w,z,$=null){$===null&&($=w),p=Ie.get($),p.init(z),y.push(p),$.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==$&&w.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Z=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const we=pe[ye];Ye(we,$,V),Z.add(we)}else Ye(pe,$,V),Z.add(pe)}),y.pop(),p=null,Z},this.compileAsync=function(w,z,$=null){const Z=this.compile(w,z,$);return new Promise(V=>{function pe(){if(Z.forEach(function(ye){ie.get(ye).currentProgram.isReady()&&Z.delete(ye)}),Z.size===0){V(w);return}setTimeout(pe,10)}Y.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let en=null;function hi(w){en&&en(w)}function rh(){pr.stop()}function sh(){pr.start()}const pr=new y_;pr.setAnimationLoop(hi),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(w){en=w,ne.setAnimationLoop(w),w===null?pr.stop():pr.start()},ne.addEventListener("sessionstart",rh),ne.addEventListener("sessionend",sh),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(z),z=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,z,b),p=Ie.get(w,y.length),p.init(z),y.push(p),H.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ge.setFromProjectionMatrix(H),ae=this.localClippingEnabled,te=le.init(this.clippingPlanes,ae),_=fe.get(w,m.length),_.init(),m.push(_),ne.enabled===!0&&ne.isPresenting===!0){const pe=S.xr.getDepthSensingMesh();pe!==null&&wl(pe,z,-1/0,S.sortObjects)}wl(w,z,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(G,me),Ae=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ae&&Ce.addToRenderList(_,w),this.info.render.frame++,te===!0&&le.beginShadows();const $=p.state.shadowsArray;xe.render($,w,z),te===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=_.opaque,V=_.transmissive;if(p.setupLights(),z.isArrayCamera){const pe=z.cameras;if(V.length>0)for(let ye=0,we=pe.length;ye<we;ye++){const Re=pe[ye];ah(Z,V,w,Re)}Ae&&Ce.render(w);for(let ye=0,we=pe.length;ye<we;ye++){const Re=pe[ye];oh(_,w,Re,Re.viewport)}}else V.length>0&&ah(Z,V,w,z),Ae&&Ce.render(w),oh(_,w,z);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(S,w,z),nt.resetDefaultState(),D=-1,L=null,y.pop(),y.length>0?(p=y[y.length-1],te===!0&&le.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function wl(w,z,$,Z){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ge.intersectsSprite(w)){Z&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(H);const ye=q.update(w),we=w.material;we.visible&&_.push(w,ye,we,$,re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ge.intersectsObject(w))){const ye=q.update(w),we=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),re.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),re.copy(ye.boundingSphere.center)),re.applyMatrix4(w.matrixWorld).applyMatrix4(H)),Array.isArray(we)){const Re=ye.groups;for(let Be=0,ze=Re.length;Be<ze;Be++){const Pe=Re[Be],it=we[Pe.materialIndex];it&&it.visible&&_.push(w,ye,it,$,re.z,Pe)}}else we.visible&&_.push(w,ye,we,$,re.z,null)}}const pe=w.children;for(let ye=0,we=pe.length;ye<we;ye++)wl(pe[ye],z,$,Z)}function oh(w,z,$,Z){const V=w.opaque,pe=w.transmissive,ye=w.transparent;p.setupLightsView($),te===!0&&le.setGlobalState(S.clippingPlanes,$),Z&&W.viewport(x.copy(Z)),V.length>0&&Ko(V,z,$),pe.length>0&&Ko(pe,z,$),ye.length>0&&Ko(ye,z,$),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function ah(w,z,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new qr(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?Go:Ui,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const pe=p.state.transmissionRenderTarget[Z.id],ye=Z.viewport||x;pe.setSize(ye.z,ye.w);const we=S.getRenderTarget();S.setRenderTarget(pe),S.getClearColor(N),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Ae&&Ce.render($);const Re=S.toneMapping;S.toneMapping=ir;const Be=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),te===!0&&le.setGlobalState(S.clippingPlanes,Z),Ko(w,$,Z),A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe),Y.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Pe=0,it=z.length;Pe<it;Pe++){const ct=z[Pe],mt=ct.object,hn=ct.geometry,je=ct.material,De=ct.group;if(je.side===wi&&mt.layers.test(Z.layers)){const Ut=je.side;je.side=on,je.needsUpdate=!0,lh(mt,$,Z,hn,je,De),je.side=Ut,je.needsUpdate=!0,ze=!0}}ze===!0&&(A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe))}S.setRenderTarget(we),S.setClearColor(N,K),Be!==void 0&&(Z.viewport=Be),S.toneMapping=Re}function Ko(w,z,$){const Z=z.isScene===!0?z.overrideMaterial:null;for(let V=0,pe=w.length;V<pe;V++){const ye=w[V],we=ye.object,Re=ye.geometry,Be=Z===null?ye.material:Z,ze=ye.group;we.layers.test($.layers)&&lh(we,z,$,Re,Be,ze)}}function lh(w,z,$,Z,V,pe){w.onBeforeRender(S,z,$,Z,V,pe),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(S,z,$,Z,w,pe),V.transparent===!0&&V.side===wi&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,S.renderBufferDirect($,z,Z,V,w,pe),V.side=ar,V.needsUpdate=!0,S.renderBufferDirect($,z,Z,V,w,pe),V.side=wi):S.renderBufferDirect($,z,Z,V,w,pe),w.onAfterRender(S,z,$,Z,V,pe)}function jo(w,z,$){z.isScene!==!0&&(z=de);const Z=ie.get(w),V=p.state.lights,pe=p.state.shadowsArray,ye=V.state.version,we=he.getParameters(w,V.state,pe,z,$),Re=he.getProgramCacheKey(we);let Be=Z.programs;Z.environment=w.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(w.isMeshStandardMaterial?U:v).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Xe),Be=new Map,Z.programs=Be);let ze=Be.get(Re);if(ze!==void 0){if(Z.currentProgram===ze&&Z.lightsStateVersion===ye)return uh(w,we),ze}else we.uniforms=he.getUniforms(w),w.onBeforeCompile(we,S),ze=he.acquireProgram(we,Re),Be.set(Re,ze),Z.uniforms=we.uniforms;const Pe=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=le.uniform),uh(w,we),Z.needsLights=Gg(w),Z.lightsStateVersion=ye,Z.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMap.value=V.state.directionalShadowMap,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotShadowMap.value=V.state.spotShadowMap,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMap.value=V.state.pointShadowMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=ze,Z.uniformsList=null,ze}function ch(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=La.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function uh(w,z){const $=ie.get(w);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function Vg(w,z,$,Z,V){z.isScene!==!0&&(z=de),A.resetTextureUnits();const pe=z.fog,ye=Z.isMeshStandardMaterial?z.environment:null,we=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:hr,Re=(Z.isMeshStandardMaterial?U:v).get(Z.envMap||ye),Be=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Pe=!!$.morphAttributes.position,it=!!$.morphAttributes.normal,ct=!!$.morphAttributes.color;let mt=ir;Z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(mt=S.toneMapping);const hn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,je=hn!==void 0?hn.length:0,De=ie.get(Z),Ut=p.state.lights;if(te===!0&&(ae===!0||w!==L)){const wn=w===L&&Z.id===D;le.setState(Z,w,wn)}let $e=!1;Z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ut.state.version||De.outputColorSpace!==we||V.isBatchedMesh&&De.batching===!1||!V.isBatchedMesh&&De.batching===!0||V.isBatchedMesh&&De.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&De.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||V.isInstancedMesh&&De.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&De.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&De.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&De.instancingMorph===!1&&V.morphTexture!==null||De.envMap!==Re||Z.fog===!0&&De.fog!==pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==le.numPlanes||De.numIntersection!==le.numIntersection)||De.vertexAlphas!==Be||De.vertexTangents!==ze||De.morphTargets!==Pe||De.morphNormals!==it||De.morphColors!==ct||De.toneMapping!==mt||De.morphTargetsCount!==je)&&($e=!0):($e=!0,De.__version=Z.version);let zn=De.currentProgram;$e===!0&&(zn=jo(Z,z,V));let Zr=!1,dn=!1,Rl=!1;const yt=zn.getUniforms(),Bi=De.uniforms;if(W.useProgram(zn.program)&&(Zr=!0,dn=!0,Rl=!0),Z.id!==D&&(D=Z.id,dn=!0),Zr||L!==w){J.reverseDepthBuffer?(Se.copy(w.projectionMatrix),SS(Se),MS(Se),yt.setValue(M,"projectionMatrix",Se)):yt.setValue(M,"projectionMatrix",w.projectionMatrix),yt.setValue(M,"viewMatrix",w.matrixWorldInverse);const wn=yt.map.cameraPosition;wn!==void 0&&wn.setValue(M,se.setFromMatrixPosition(w.matrixWorld)),J.logarithmicDepthBuffer&&yt.setValue(M,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&yt.setValue(M,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,dn=!0,Rl=!0)}if(V.isSkinnedMesh){yt.setOptional(M,V,"bindMatrix"),yt.setOptional(M,V,"bindMatrixInverse");const wn=V.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),yt.setValue(M,"boneTexture",wn.boneTexture,A))}V.isBatchedMesh&&(yt.setOptional(M,V,"batchingTexture"),yt.setValue(M,"batchingTexture",V._matricesTexture,A),yt.setOptional(M,V,"batchingIdTexture"),yt.setValue(M,"batchingIdTexture",V._indirectTexture,A),yt.setOptional(M,V,"batchingColorTexture"),V._colorsTexture!==null&&yt.setValue(M,"batchingColorTexture",V._colorsTexture,A));const Cl=$.morphAttributes;if((Cl.position!==void 0||Cl.normal!==void 0||Cl.color!==void 0)&&Ne.update(V,$,zn),(dn||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,yt.setValue(M,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Bi.envMap.value=Re,Bi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(Bi.envMapIntensity.value=z.environmentIntensity),dn&&(yt.setValue(M,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&kg(Bi,Rl),pe&&Z.fog===!0&&ce.refreshFogUniforms(Bi,pe),ce.refreshMaterialUniforms(Bi,Z,X,k,p.state.transmissionRenderTarget[w.id]),La.upload(M,ch(De),Bi,A)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(La.upload(M,ch(De),Bi,A),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&yt.setValue(M,"center",V.center),yt.setValue(M,"modelViewMatrix",V.modelViewMatrix),yt.setValue(M,"normalMatrix",V.normalMatrix),yt.setValue(M,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const wn=Z.uniformsGroups;for(let Pl=0,Wg=wn.length;Pl<Wg;Pl++){const fh=wn[Pl];O.update(fh,zn),O.bind(fh,zn)}}return zn}function kg(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Gg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,z,$){ie.get(w.texture).__webglTexture=z,ie.get(w.depthTexture).__webglTexture=$;const Z=ie.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const $=ie.get(w);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,$=0){b=w,C=z,R=$;let Z=!0,V=null,pe=!1,ye=!1;if(w){const Re=ie.get(w);if(Re.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(M.FRAMEBUFFER,null),Z=!1;else if(Re.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Re.__hasExternalTextures)A.rebindTextures(w,ie.get(w.texture).__webglTexture,ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pe=w.depthTexture;if(Re.__boundDepthTexture!==Pe){if(Pe!==null&&ie.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const ze=ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?V=ze[z][$]:V=ze[z],pe=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?V=ie.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[$]:V=ze,x.copy(w.viewport),T.copy(w.scissor),I=w.scissorTest}else x.copy(_e).multiplyScalar(X).floor(),T.copy(ge).multiplyScalar(X).floor(),I=Le;if(W.bindFramebuffer(M.FRAMEBUFFER,V)&&Z&&W.drawBuffers(w,V),W.viewport(x),W.scissor(T),W.setScissorTest(I),pe){const Re=ie.get(w.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,$)}else if(ye){const Re=ie.get(w.texture),Be=z||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Re.__webglTexture,$||0,Be)}D=-1},this.readRenderTargetPixels=function(w,z,$,Z,V,pe,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){W.bindFramebuffer(M.FRAMEBUFFER,we);try{const Re=w.texture,Be=Re.format,ze=Re.type;if(!J.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Z&&$>=0&&$<=w.height-V&&M.readPixels(z,$,Z,V,Ue.convert(Be),Ue.convert(ze),pe)}finally{const Re=b!==null?ie.get(b).__webglFramebuffer:null;W.bindFramebuffer(M.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,z,$,Z,V,pe,ye){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){const Re=w.texture,Be=Re.format,ze=Re.type;if(!J.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-Z&&$>=0&&$<=w.height-V){W.bindFramebuffer(M.FRAMEBUFFER,we);const Pe=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Pe),M.bufferData(M.PIXEL_PACK_BUFFER,pe.byteLength,M.STREAM_READ),M.readPixels(z,$,Z,V,Ue.convert(Be),Ue.convert(ze),0);const it=b!==null?ie.get(b).__webglFramebuffer:null;W.bindFramebuffer(M.FRAMEBUFFER,it);const ct=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await xS(M,ct,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Pe),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,pe),M.deleteBuffer(Pe),M.deleteSync(ct),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,$=0){w.isTexture!==!0&&(Da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const Z=Math.pow(2,-$),V=Math.floor(w.image.width*Z),pe=Math.floor(w.image.height*Z),ye=z!==null?z.x:0,we=z!==null?z.y:0;A.setTexture2D(w,0),M.copyTexSubImage2D(M.TEXTURE_2D,$,0,0,ye,we,V,pe),W.unbindTexture()},this.copyTextureToTexture=function(w,z,$=null,Z=null,V=0){w.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],z=arguments[2],V=arguments[3]||0,$=null);let pe,ye,we,Re,Be,ze;$!==null?(pe=$.max.x-$.min.x,ye=$.max.y-$.min.y,we=$.min.x,Re=$.min.y):(pe=w.image.width,ye=w.image.height,we=0,Re=0),Z!==null?(Be=Z.x,ze=Z.y):(Be=0,ze=0);const Pe=Ue.convert(z.format),it=Ue.convert(z.type);A.setTexture2D(z,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,z.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,z.unpackAlignment);const ct=M.getParameter(M.UNPACK_ROW_LENGTH),mt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),hn=M.getParameter(M.UNPACK_SKIP_PIXELS),je=M.getParameter(M.UNPACK_SKIP_ROWS),De=M.getParameter(M.UNPACK_SKIP_IMAGES),Ut=w.isCompressedTexture?w.mipmaps[V]:w.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,Ut.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Ut.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,we),M.pixelStorei(M.UNPACK_SKIP_ROWS,Re),w.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,V,Be,ze,pe,ye,Pe,it,Ut.data):w.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,V,Be,ze,Ut.width,Ut.height,Pe,Ut.data):M.texSubImage2D(M.TEXTURE_2D,V,Be,ze,pe,ye,Pe,it,Ut),M.pixelStorei(M.UNPACK_ROW_LENGTH,ct),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,mt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,hn),M.pixelStorei(M.UNPACK_SKIP_ROWS,je),M.pixelStorei(M.UNPACK_SKIP_IMAGES,De),V===0&&z.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(w,z,$=null,Z=null,V=0){w.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],z=arguments[3],V=arguments[4]||0);let pe,ye,we,Re,Be,ze,Pe,it,ct;const mt=w.isCompressedTexture?w.mipmaps[V]:w.image;$!==null?(pe=$.max.x-$.min.x,ye=$.max.y-$.min.y,we=$.max.z-$.min.z,Re=$.min.x,Be=$.min.y,ze=$.min.z):(pe=mt.width,ye=mt.height,we=mt.depth,Re=0,Be=0,ze=0),Z!==null?(Pe=Z.x,it=Z.y,ct=Z.z):(Pe=0,it=0,ct=0);const hn=Ue.convert(z.format),je=Ue.convert(z.type);let De;if(z.isData3DTexture)A.setTexture3D(z,0),De=M.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)A.setTexture2DArray(z,0),De=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,z.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,z.unpackAlignment);const Ut=M.getParameter(M.UNPACK_ROW_LENGTH),$e=M.getParameter(M.UNPACK_IMAGE_HEIGHT),zn=M.getParameter(M.UNPACK_SKIP_PIXELS),Zr=M.getParameter(M.UNPACK_SKIP_ROWS),dn=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,mt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,mt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Re),M.pixelStorei(M.UNPACK_SKIP_ROWS,Be),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ze),w.isDataTexture||w.isData3DTexture?M.texSubImage3D(De,V,Pe,it,ct,pe,ye,we,hn,je,mt.data):z.isCompressedArrayTexture?M.compressedTexSubImage3D(De,V,Pe,it,ct,pe,ye,we,hn,mt.data):M.texSubImage3D(De,V,Pe,it,ct,pe,ye,we,hn,je,mt),M.pixelStorei(M.UNPACK_ROW_LENGTH,Ut),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,$e),M.pixelStorei(M.UNPACK_SKIP_PIXELS,zn),M.pixelStorei(M.UNPACK_SKIP_ROWS,Zr),M.pixelStorei(M.UNPACK_SKIP_IMAGES,dn),V===0&&z.generateMipmaps&&M.generateMipmap(De),W.unbindTexture()},this.initRenderTarget=function(w){ie.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),W.unbindTexture()},this.resetState=function(){C=0,R=0,b=null,W.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===If?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===xl?"display-p3":"srgb"}}class Ib extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ub extends Jt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nb extends qo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=c_,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class C_ extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const yc=new St,Xd=new Q,qd=new Q;class Ob{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nf,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xd),qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qd),t.updateMatrixWorld(),yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fb extends Ob{constructor(){super(new E_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bb extends C_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Fb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zb extends C_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Af}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Af);function Ei(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function P_(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fs={duration:.5,overwrite:!1,delay:0},Ff,Nt,ft,Un=1e8,st=1/Un,Fu=Math.PI*2,Hb=Fu/4,Vb=0,D_=Math.sqrt,kb=Math.cos,Gb=Math.sin,It=function(e){return typeof e=="string"},vt=function(e){return typeof e=="function"},Ni=function(e){return typeof e=="number"},Bf=function(e){return typeof e>"u"},fi=function(e){return typeof e=="object"},an=function(e){return e!==!1},zf=function(){return typeof window<"u"},Ma=function(e){return vt(e)||It(e)},L_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gt=Array.isArray,Wb=/random\([^)]+\)/g,Xb=/,\s*/g,Yd=/(?:-?\.?\d|\.)+/gi,I_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,U_=/[+-]=-?[.\d]+/,qb=/[^,'"\[\]\s]+/gi,Yb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,ti,Bu,Hf,bn={},$a={},N_,O_=function(e){return($a=Bs(e,bn))&&fn},Vf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Do=function(e,t){return!t&&console.warn(e)},F_=function(e,t){return e&&(bn[e]=t)&&$a&&($a[e]=t)||bn},Lo=function(){return 0},Kb={suppressEvents:!0,isStart:!0,kill:!1},Ia={suppressEvents:!0,kill:!1},jb={suppressEvents:!0},kf={},rr=[],zu={},B_,_n={},Tc={},Kd=30,Ua=[],Gf="",Wf=function(e){var t=e[0],i,r;if(fi(t)||vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ua.length;r--&&!Ua[r].targetTest(t););i=Ua[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new lg(e[r],i)))||e.splice(r,1);return e},Vr=function(e){return e._gsap||Wf(Nn(e))[0]._gsap},z_=function(e,t,i){return(i=e[t])&&vt(i)?e[t]():Bf(i)&&e.getAttribute&&e.getAttribute(t)||i},ln=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},ws=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},$b=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Za=function(){var e=rr.length,t=rr.slice(0),i,r;for(zu={},rr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Xf=function(e){return!!(e._initted||e._startAt||e.add)},H_=function(e,t,i,r){rr.length&&!Nt&&Za(),e.render(t,i,!!(Nt&&t<0&&Xf(e))),rr.length&&!Nt&&Za()},V_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(qb).length<2?t:It(e)?e.trim():e},k_=function(e){return e},An=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Zb=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Bs=function(e,t){for(var i in t)e[i]=t[i];return e},jd=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=fi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ja=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},xo=function(e){var t=e.parent||dt,i=e.keyframes?Zb(Gt(e.keyframes)):An;if(an(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Jb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},G_=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},yl=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},cr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},kr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Qb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Hu=function(e,t,i,r){return e._startAt&&(Nt?e._startAt.revert(Ia):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},eA=function n(e){return!e||e._ts&&n(e.parent)},$d=function(e){return e._repeat?zs(e._tTime,e=e.duration()+e._rDelay)*e:0},zs=function(e,t){var i=Math.floor(e=ht(e/t));return e&&i===e?i-1:i},Qa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},El=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},Tl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ht(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),El(e),i._dirty||kr(i,e)),e},W_=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Qa(e.rawTime(),t),(!t._dur||Yo(0,t.totalDuration(),i)-t._tTime>st)&&t.render(i,!0)),kr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-st}},oi=function(e,t,i,r){return t.parent&&cr(t),t._start=ht((Ni(i)?i:i||e!==dt?Pn(e,i,t):e._time)+t._delay),t._end=ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),G_(e,t,"_first","_last",e._sort?"_start":0),Vu(t)||(e._recent=t),r||W_(e,t),e._ts<0&&Tl(e,e._tTime),e},X_=function(e,t){return(bn.ScrollTrigger||Vf("scrollTrigger",t))&&bn.ScrollTrigger.create(t,e)},q_=function(e,t,i,r,s){if(Yf(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Nt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&B_!==xn.frame)return rr.push(e),e._lazy=[s,r],1},tA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Vu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},nA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&tA(e)&&!(!e._initted&&Vu(e))||(e._ts<0||e._dp._ts<0)&&!Vu(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Yo(0,e._tDur,t),u=zs(l,a),e._yoyo&&u&1&&(o=1-o),u!==zs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Nt||r||e._zTime===st||!t&&e._zTime){if(!e._initted&&q_(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?st:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Hu(e,t,i,!0),e._onUpdate&&!i&&Mn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&cr(e,1),!i&&!Nt&&(Mn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},iA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Hs=function(e,t,i,r){var s=e._repeat,o=ht(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ht(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Tl(e,e._tTime=e._tDur*a),e.parent&&El(e),i||kr(e.parent,e),e},Zd=function(e){return e instanceof $t?kr(e):Hs(e,e._dur)},rA={_start:0,endTime:Lo,totalDuration:Lo},Pn=function n(e,t,i){var r=e.labels,s=e._recent||rA,o=e.duration()>=Un?s.endTime(!1):e._dur,a,l,c;return It(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Gt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},So=function(e,t,i){var r=Ni(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;o.immediateRender=an(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new At(t[0],o,t[s+1])},dr=function(e,t){return e||e===0?t(e):t},Yo=function(e,t,i){return i<e?e:i>t?t:i},Vt=function(e,t){return!It(e)||!(t=Yb.exec(e))?"":t[1]},sA=function(e,t,i){return dr(i,function(r){return Yo(e,t,r)})},ku=[].slice,Y_=function(e,t){return e&&fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fi(e[0]))&&!e.nodeType&&e!==ti},oA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return It(r)&&!t||Y_(r,1)?(s=i).push.apply(s,Nn(r)):i.push(r)})||i},Nn=function(e,t,i){return ft&&!t&&ft.selector?ft.selector(e):It(e)&&!i&&(Bu||!Vs())?ku.call((t||Hf).querySelectorAll(e),0):Gt(e)?oA(e,i):Y_(e)?ku.call(e,0):e?[e]:[]},Gu=function(e){return e=Nn(e)[0]||Do("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Nn(t,i.querySelectorAll?i:i===e?Do("Invalid scope")||Hf.createElement("div"):e)}},K_=function(e){return e.sort(function(){return .5-Math.random()})},j_=function(e){if(vt(e))return e;var t=fi(e)?e:{each:e},i=Gr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return It(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,p=o[_],m,y,S,E,C,R,b,D,L;if(!p){if(L=t.grid==="auto"?0:(t.grid||[1,Un])[1],!L){for(b=-Un;b<(b=g[L++].getBoundingClientRect().left)&&L<_;);L<_&&L--}for(p=o[_]=[],m=l?Math.min(L,_)*u-.5:r%L,y=L===Un?0:l?_*f/L-.5:r/L|0,b=0,D=Un,R=0;R<_;R++)S=R%L-m,E=y-(R/L|0),p[R]=C=c?Math.abs(c==="y"?E:S):D_(S*S+E*E),C>b&&(b=C),C<D&&(D=C);r==="random"&&K_(p),p.max=b-D,p.min=D,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(L>_?_-1:c?c==="y"?_/L:L:Math.max(L,_/L))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Vt(t.amount||t.each)||0,i=i&&_<0?sg(i):i}return _=(p[h]-p.min)/p.max||0,ht(p.b+(i?i(_):_)*p.v)+p.u}},Wu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ht(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Ni(i)?0:Vt(i))}},$_=function(e,t){var i=Gt(e),r,s;return!i&&fi(e)&&(r=i=e.radius||Un,e.values?(e=Nn(e.values),(s=!Ni(e[0]))&&(r*=r)):e=Wu(e.increment)),dr(t,i?vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Un,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Ni(o)?u:u+Vt(o)}:Wu(e))},Z_=function(e,t,i,r){return dr(Gt(e)?!t:i===!0?!!(i=0):!r,function(){return Gt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},aA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},lA=function(e,t){return function(i){return e(parseFloat(i))+(t||Vt(i))}},cA=function(e,t,i){return Q_(e,t,0,1,i)},J_=function(e,t,i){return dr(i,function(r){return e[~~t(r)]})},uA=function n(e,t,i){var r=t-e;return Gt(e)?J_(e,n(0,e.length),t):dr(i,function(s){return(r+(s-e)%r)%r+e})},fA=function n(e,t,i){var r=t-e,s=r*2;return Gt(e)?J_(e,n(0,e.length-1),t):dr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Io=function(e){return e.replace(Wb,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Xb);return Z_(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Q_=function(e,t,i,r,s){var o=t-e,a=r-i;return dr(s,function(l){return i+((l-e)/o*a||0)})},hA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=It(e),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Gt(e)&&!Gt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else r||(e=Bs(Gt(e)?[]:{},e));if(!u){for(l in t)qf.call(a,e,l,"get",t[l]);s=function(g){return $f(g,a)||(o?e.p:e)}}}return dr(i,s)},Jd=function(e,t,i){var r=e.labels,s=Un,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mn=function(e,t,i){var r=e.vars,s=r[t],o=ft,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&rr.length&&Za(),a&&(ft=a),u=l?s.apply(c,l):s.call(c),ft=o,u},lo=function(e){return cr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Nt),e.progress()<1&&Mn(e,"onInterrupt"),e},xs,eg=[],tg=function(e){if(e)if(e=!e.name&&e.default||e,zf()||e.headless){var t=e.name,i=vt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Lo,render:$f,add:qf,kill:RA,modifier:wA,rawVars:0},o={targetTest:0,get:0,getSetter:jf,aliases:{},register:0};if(Vs(),e!==r){if(_n[t])return;An(r,An(Ja(e,s),o)),Bs(r.prototype,Bs(s,Ja(e,o))),_n[r.prop=t]=r,e.targetTest&&(Ua.push(r),kf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}F_(t,r),e.register&&e.register(fn,r,cn)}else eg.push(e)},rt=255,co={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},bc=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*rt+.5|0},ng=function(e,t,i){var r=e?Ni(e)?[e>>16,e>>8&rt,e&rt]:0:co.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),co[e])r=co[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&rt,r&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Yd),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=bc(l+1/3,s,o),r[1]=bc(l,s,o),r[2]=bc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(I_),i&&r.length<4&&(r[3]=1),r}else r=e.match(Yd)||co.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/rt,o=r[1]/rt,a=r[2]/rt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},ig=function(e){var t=[],i=[],r=-1;return e.split(sr).forEach(function(s){var o=s.match(vs)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Qd=function(e,t,i){var r="",s=(e+r).match(sr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=ng(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=ig(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(sr,"1").split(vs),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(sr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},sr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in co)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),dA=/hsl[a]?\(/,rg=function(e){var t=e.join(" "),i;if(sr.lastIndex=0,sr.test(t))return i=dA.test(t),e[1]=Qd(e[1],i),e[0]=Qd(e[0],i,ig(e[1])),!0},Uo,xn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(p){var m=n()-r,y=p===!0,S,E,C,R;if((m>e||m<0)&&(i+=m-t),r+=m,C=r-i,S=C-o,(S>0||y)&&(R=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=S+(S>=s?4:s-S),E=1),y||(l=c(_)),E)for(d=0;d<a.length;d++)a[d](C,h,R,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){N_&&(!Bu&&zf()&&(ti=Bu=window,Hf=ti.document||{},bn.gsap=fn,(ti.gsapVersions||(ti.gsapVersions=[])).push(fn.version),O_($a||ti.GreenSockGlobals||!ti.gsap&&ti||{}),eg.forEach(tg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Uo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Uo=0,c=Lo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var S=m?function(E,C,R,b){p(E,C,R,b),f.remove(S)}:p;return f.remove(p),a[y?"unshift":"push"](S),Vs(),S},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),Vs=function(){return!Uo&&xn.wake()},We={},pA=/^[\d.\-M][\d.\-,\s]/,mA=/["']/g,_A=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(mA,"").trim():+c,r=l.substr(a+1).trim();return t},gA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},vA=function(e){var t=(e+"").split("("),i=We[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[_A(t[1])]:gA(e).split(",").map(V_)):We._CE&&pA.test(e)?We._CE("",e):i},sg=function(e){return function(t){return 1-e(1-t)}},og=function n(e,t){for(var i=e._first,r;i;)i instanceof $t?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Gr=function(e,t){return e&&(vt(e)?e:We[e]||vA(e))||t},$r=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ln(e,function(a){We[a]=bn[a]=s,We[o=a.toLowerCase()]=i;for(var l in s)We[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[a+"."+l]=s[l]}),s},ag=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ac=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Fu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Gb((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:ag(a);return s=Fu/s,l.config=function(c,u){return n(e,c,u)},l},wc=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:ag(i);return r.config=function(s){return n(e,s)},r};ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;$r(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;$r("Elastic",Ac("in"),Ac("out"),Ac());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};$r("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);$r("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});$r("Circ",function(n){return-(D_(1-n*n)-1)});$r("Sine",function(n){return n===1?1:-kb(n*Hb)+1});$r("Back",wc("in"),wc("out"),wc());We.SteppedEase=We.steps=bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-st;return function(a){return((r*Yo(0,o,a)|0)+s)*i}}};Fs.ease=We["quad.out"];ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Gf+=n+","+n+"Params,"});var lg=function(e,t){this.id=Vb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:z_,this.set=t?t.getSetter:jf},No=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hs(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),Uo||xn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tl(this,i),!s._dp||s.parent||W_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&oi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===st||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),H_(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$d(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$d(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?zs(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Qa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-st?0:this._rts,this.totalTime(Yo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),El(this),Qb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ht(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&oi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(an(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qa(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=jb);var r=Nt;return Nt=i,Xf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Nt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Zd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Zd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Pn(this,i),an(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,an(r)),this._dur||(this._zTime=-st),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-st)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=vt(i)?i:k_,l=function(){var u=r.then;r.then=null,s&&s(),vt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){lo(this)},n}();An(No.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var $t=function(n){P_(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=an(i.sortChildren),dt&&oi(i.parent||dt,Ei(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&X_(Ei(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return So(0,arguments,this),this},t.from=function(r,s,o){return So(1,arguments,this),this},t.fromTo=function(r,s,o,a){return So(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,xo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new At(r,s,Pn(this,o),1),this},t.call=function(r,s,o){return oi(this,At.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new At(r,o,Pn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,xo(o).immediateRender=an(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,xo(a).immediateRender=an(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ht(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,p,m,y,S,E,C,R,b;if(this!==dt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,E=this._start,S=this._ts,m=!S,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=ht(u%p),u===l?(_=this._repeat,h=c):(C=ht(u/p),_=~~C,_&&_===C&&(h=c,_--),h>c&&(h=c)),C=zs(this._tTime,p),!a&&this._tTime&&C!==_&&this._tTime-C*p-this._dur<=0&&(C=_),R&&_&1&&(h=c-h,b=1),_!==C&&!this._lock){var D=R&&C&1,L=D===(R&&_&1);if(_<C&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(b?0:ht(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;og(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=iA(this,ht(a),ht(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!C&&(Mn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-st);break}}d=g}else{d=this._last;for(var x=r<0?r:h;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||Nt&&Xf(d)),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=x?-st:st);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-st)._zTime=h>=a?1:-1,this._ts))return this._start=E,El(this),this.render(r,s,o);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(E===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&cr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Mn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ni(s)||(s=Pn(this,s,r)),!(r instanceof No)){if(Gt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(It(r))return this.addLabel(r,s);if(vt(r))r=At.delayedCall(0,r);else return this}return this!==r?oi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Un);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof At?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return It(r)?this.removeLabel(r):vt(r)?this.killTweensOf(r):(r.parent===this&&yl(this,r),r===this._recent&&(this._recent=this._last),kr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(xn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Pn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=At.delayedCall(0,s||Lo,o);return a.data="isPause",this._hasPause=1,oi(this,a,Pn(this,r))},t.removePause=function(r){var s=this._first;for(r=Pn(this,r);s;)s._start===r&&s.data==="isPause"&&cr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ji!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Nn(r),l=this._first,c=Ni(s),u;l;)l instanceof At?$b(l._targets,a)&&(c?(!Ji||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Pn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=At.to(o,An({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||st,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Hs(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,An({startAt:{time:Pn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Jd(this,Pn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Jd(this,Pn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=ht(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return kr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),kr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Un,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,oi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=ht(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Hs(o,o===dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(dt._ts&&(H_(dt,Qa(r,dt)),B_=xn.frame),xn.frame>=Kd){Kd+=Tn.autoSleep||120;var s=dt._first;if((!s||!s._ts)&&Tn.autoSleep&&xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xn.sleep()}}},e}(No);An($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var xA=function(e,t,i,r,s,o,a){var l=new cn(this._pt,e,t,0,1,pg,null,s),c=0,u=0,f,h,d,g,_,p,m,y;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=Io(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),h=i.match(Ec)||[];f=Ec.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ws(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Ec.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(U_.test(r)||m)&&(l.e=0),this._pt=l,l},qf=function(e,t,i,r,s,o,a,l,c,u){vt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:vt(f)?c?e[t.indexOf("set")||!vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=vt(f)?c?TA:hg:Kf,g;if(It(r)&&(~r.indexOf("random(")&&(r=Io(r)),r.charAt(1)==="="&&(g=ws(h,r)+(Vt(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Xu)return!isNaN(h*r)&&r!==""?(g=new cn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?AA:dg,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Vf(t,r),xA.call(this,e,t,h,r,d,l||Tn.stringFilter,c))},SA=function(e,t,i,r,s){if(vt(e)&&(e=Mo(e,s,t,i,r)),!fi(e)||e.style&&e.nodeType||Gt(e)||L_(e))return It(e)?Mo(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Mo(e[a],s,t,i,r);return o},cg=function(e,t,i,r,s,o){var a,l,c,u;if(_n[e]&&(a=new _n[e]).init(s,a.rawVars?t[e]:SA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new cn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==xs))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ji,Xu,Yf=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,S=e._overwrite==="auto"&&!Ff,E=e.timeline,C,R,b,D,L,x,T,I,N,K,ee,k,X;if(E&&(!h||!s)&&(s="none"),e._ease=Gr(s,Fs.ease),e._yEase=f?sg(Gr(f===!0?s:f,Fs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!E&&!!r.runBackwards,!E||h&&!r.stagger){if(I=p[0]?Vr(p[0]).harness:0,k=I&&r[I.prop],C=Ja(r,kf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Ia:Kb),_._lazy=0),o){if(cr(e._startAt=At.set(p,An({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&an(l),startAt:null,delay:0,onUpdate:c&&function(){return Mn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Nt||!a&&!d)&&e._startAt.revert(Ia),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=An({overwrite:!1,data:"isFromStart",lazy:a&&!_&&an(l),immediateRender:a,stagger:0,parent:m},C),k&&(b[I.prop]=k),cr(e._startAt=At.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Nt?e._startAt.revert(Ia):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&an(l)||l&&!g,R=0;R<p.length;R++){if(L=p[R],T=L._gsap||Wf(p)[R]._gsap,e._ptLookup[R]=K={},zu[T.id]&&rr.length&&Za(),ee=y===p?R:y.indexOf(L),I&&(N=new I).init(L,k||C,e,ee,y)!==!1&&(e._pt=D=new cn(e._pt,L,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(G){K[G]=D}),N.priority&&(x=1)),!I||k)for(b in C)_n[b]&&(N=cg(b,C,e,ee,L,y))?N.priority&&(x=1):K[b]=D=qf.call(e,L,b,"get",C[b],ee,y,0,r.stringFilter);e._op&&e._op[R]&&e.kill(L,e._op[R]),S&&e._pt&&(Ji=e,dt.killTweensOf(L,K,e.globalTime(t)),X=!e.parent,Ji=0),e._pt&&l&&(zu[T.id]=1)}x&&mg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,h&&t<=0&&E.render(Un,!0,!0)},MA=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Xu=1,e.vars[t]="+=0",Yf(e,a),Xu=0,l?Do(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=Et(i)+Vt(f.e)),f.b&&(f.b=u.s+Vt(f.b))},yA=function(e,t){var i=e[0]?Vr(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Bs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},EA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Gt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Mo=function(e,t,i,r,s){return vt(e)?e.call(t,i,r,s):It(e)&&~e.indexOf("random(")?Io(e):e},ug=Gf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",fg={};ln(ug+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return fg[n]=1});var At=function(n){P_(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:xo(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=r.parent||dt,S=(Gt(i)||L_(i)?Ni(i[0]):"length"in r)?[i]:Nn(i),E,C,R,b,D,L,x,T;if(a._targets=S.length?Wf(S):Do("GSAP target "+i+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Ma(c)||Ma(u)){if(r=a.vars,E=a.timeline=new $t({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:S}),E.kill(),E.parent=E._dp=Ei(a),E._start=0,h||Ma(c)||Ma(u)){if(b=S.length,x=h&&j_(h),fi(h))for(D in h)~ug.indexOf(D)&&(T||(T={}),T[D]=h[D]);for(C=0;C<b;C++)R=Ja(r,fg),R.stagger=0,m&&(R.yoyoEase=m),T&&Bs(R,T),L=S[C],R.duration=+Mo(c,Ei(a),C,L,S),R.delay=(+Mo(u,Ei(a),C,L,S)||0)-a._delay,!h&&b===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),E.to(L,R,x?x(C,L,S):0),E._ease=We.none;E.duration()?c=u=0:a.timeline=0}else if(g){xo(An(E.vars.defaults,{ease:"none"})),E._ease=Gr(g.ease||r.ease||"none");var I=0,N,K,ee;if(Gt(g))g.forEach(function(k){return E.to(S,k,">")}),E.duration();else{R={};for(D in g)D==="ease"||D==="easeEach"||EA(D,g[D],R,g.easeEach);for(D in R)for(N=R[D].sort(function(k,X){return k.t-X.t}),I=0,C=0;C<N.length;C++)K=N[C],ee={ease:K.e,duration:(K.t-(C?N[C-1].t:0))/100*c},ee[D]=K.v,E.to(S,ee,I),I+=ee.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return d===!0&&!Ff&&(Ji=Ei(a),dt.killTweensOf(S),Ji=0),oi(y,Ei(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===ht(y._time)&&an(f)&&eA(Ei(a))&&y.data!=="nested")&&(a._tTime=-st,a.render(Math.max(0,-u)||0)),p&&X_(Ei(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-st&&!u?l:r<st?0:r,h,d,g,_,p,m,y,S,E;if(!c)nA(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=ht(f%_),f===l?(g=this._repeat,h=c):(p=ht(f/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(E=this._yEase,h=c-h),p=zs(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(S&&this._yEase&&og(S,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(ht(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(q_(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(h/c),this._from&&(this.ratio=y=1-y),!a&&f&&!s&&!p&&(Mn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;S&&S.render(r<0?r:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Hu(this,r,s,o),Mn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Hu(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&cr(this,1),!s&&!(u&&!a)&&(f||a||m)&&(Mn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Uo||xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Yf(this,c),u=this._ease(c/this._dur),MA(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Tl(this,0),this.parent||G_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?lo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Nt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ji&&Ji.vars.overwrite!==!0)._first||lo(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Nn(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&Jb(a,l))return s==="all"&&(this._pt=0),lo(this);for(f=this._op=this._op||[],s!=="all"&&(It(s)&&(_={},ln(s,function(y){return _[y]=1}),s=_),s=yA(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&yl(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&lo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return So(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return So(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return dt.killTweensOf(r,s,o)},e}(No);An(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ln("staggerTo,staggerFrom,staggerFromTo",function(n){At[n]=function(){var e=new $t,t=ku.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Kf=function(e,t,i){return e[t]=i},hg=function(e,t,i){return e[t](i)},TA=function(e,t,i,r){return e[t](r.fp,i)},bA=function(e,t,i){return e.setAttribute(t,i)},jf=function(e,t){return vt(e[t])?hg:Bf(e[t])&&e.setAttribute?bA:Kf},dg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},AA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},pg=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},$f=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},wA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},RA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?yl(this,t,"_pt"):t.dep||(i=1),t=r;return!i},CA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},mg=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},cn=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||dg,this.d=l||this,this.set=c||Kf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=CA,this.m=i,this.mt=s,this.tween=r},n}();ln(Gf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return kf[n]=1});bn.TweenMax=bn.TweenLite=At;bn.TimelineLite=bn.TimelineMax=$t;dt=new $t({sortChildren:!1,defaults:Fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=rg;var Wr=[],Na={},PA=[],ep=0,DA=0,Rc=function(e){return(Na[e]||PA).map(function(t){return t()})},qu=function(){var e=Date.now(),t=[];e-ep>2&&(Rc("matchMediaInit"),Wr.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=ti.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Rc("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),ep=e,Rc("matchMedia"))},_g=function(){function n(t,i){this.selector=i&&Gu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=DA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){vt(i)&&(s=r,r=i,i=vt);var o=this,a=function(){var c=ft,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Gu(s)),ft=o,f=r.apply(o,arguments),vt(f)&&o._r.push(f),ft=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===vt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ft;ft=null,i(this),ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof At&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof $t?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof At)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Wr.length;o--;)Wr[o].id===this.id&&Wr.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),LA=function(){function n(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){fi(i)||(i={matches:i});var o=new _g(0,s||this.scope),a=o.conditions={},l,c,u;ft&&!o.selector&&(o.selector=ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ti.matchMedia(i[c]),l&&(Wr.indexOf(o)<0&&Wr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(qu):l.addEventListener("change",qu)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),el={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return tg(r)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,t){return dt.getTweensOf(e,t)},getProperty:function(e,t,i,r){It(e)&&(e=Nn(e)[0]);var s=Vr(e||{}).get,o=i?k_:V_;return i==="native"&&(i=""),e&&(t?o((_n[t]&&_n[t].get||s)(e,t,i,r)):function(a,l,c){return o((_n[a]&&_n[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Nn(e),e.length>1){var r=e.map(function(u){return fn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=_n[t],a=Vr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;xs._pt=0,f.init(e,i?u+i:u,xs,0,[e]),f.render(1,f),xs._pt&&$f(1,xs)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=fn.to(e,An((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gr(e.ease,Fs.ease)),jd(Fs,e||{})},config:function(e){return jd(Tn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!_n[a]&&!bn[a]&&Do(t+" effect requires "+a+" plugin.")}),Tc[t]=function(a,l,c){return i(Nn(a),An(l||{},s),c)},o&&($t.prototype[t]=function(a,l,c){return this.add(Tc[t](a,fi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){We[e]=Gr(t)},parseEase:function(e,t){return arguments.length?Gr(e,t):We},getById:function(e){return dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new $t(e),r,s;for(i.smoothChildTiming=an(e.smoothChildTiming),dt.remove(i),i._dp=0,i._time=i._tTime=dt._time,r=dt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof At&&r.vars.onComplete===r._targets[0]))&&oi(i,r,r._start-r._delay),r=s;return oi(dt,i,0),i},context:function(e,t){return e?new _g(e,t):ft},matchMedia:function(e){return new LA(e)},matchMediaRefresh:function(){return Wr.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||qu()},addEventListener:function(e,t){var i=Na[e]||(Na[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Na[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:uA,wrapYoyo:fA,distribute:j_,random:Z_,snap:$_,normalize:cA,getUnit:Vt,clamp:sA,splitColor:ng,toArray:Nn,selector:Gu,mapRange:Q_,pipe:aA,unitize:lA,interpolate:hA,shuffle:K_},install:O_,effects:Tc,ticker:xn,updateRoot:$t.updateRoot,plugins:_n,globalTimeline:dt,core:{PropTween:cn,globals:F_,Tween:At,Timeline:$t,Animation:No,getCache:Vr,_removeLinkedListItem:yl,reverting:function(){return Nt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return Ff=e}}};ln("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return el[n]=At[n]});xn.add($t.updateRoot);xs=el.to({},{duration:0});var IA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},UA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=IA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Cc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(It(s)&&(l={},ln(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}UA(a,s)}}}},fn=el.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Nt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Cc("roundProps",Wu),Cc("modifiers"),Cc("snap",$_))||el;At.version=$t.version=fn.version="3.14.2";N_=1;zf()&&Vs();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var tp,Qi,Rs,Zf,Or,np,Jf,NA=function(){return typeof window<"u"},Oi={},Pr=180/Math.PI,Cs=Math.PI/180,ps=Math.atan2,ip=1e8,Qf=/([A-Z])/g,OA=/(left|right|width|margin|padding|x)/i,FA=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},BA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},HA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},VA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},vg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kA=function(e,t,i){return e.style[t]=i},GA=function(e,t,i){return e.style.setProperty(t,i)},WA=function(e,t,i){return e._gsap[t]=i},XA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},qA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},YA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},pt="transform",un=pt+"Origin",KA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Oi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=bi(r,a)}):this.tfm[e]=o.x?o[e]:bi(r,e),e===un&&(this.tfm.zOrigin=o.zOrigin);else return li.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(pt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(un,t,"")),e=pt}(s||t)&&this.props.push(e,t,s[e])},xg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Qf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Jf(),(!s||!s.isStart)&&!i[pt]&&(xg(i),r.zOrigin&&i[un]&&(i[un]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Sg=function(e,t){var i={target:e,props:[],revert:jA,save:KA};return e._gsap||fn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Mg,Ku=function(e,t){var i=Qi.createElementNS?Qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qi.createElement(e);return i&&i.style?i:Qi.createElement(e)},yn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Qf,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ks(t)||t,1)||""},rp="O,Moz,ms,Ms,Webkit".split(","),ks=function(e,t,i){var r=t||Or,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(rp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?rp[o]:"")+e},ju=function(){NA()&&window.document&&(tp=window,Qi=tp.document,Rs=Qi.documentElement,Or=Ku("div")||{style:{}},Ku("div"),pt=ks(pt),un=pt+"Origin",Or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Mg=!!ks("perspective"),Jf=fn.core.reverting,Zf=1)},sp=function(e){var t=e.ownerSVGElement,i=Ku("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Rs.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Rs.removeChild(i),s},op=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},yg=function(e){var t,i;try{t=e.getBBox()}catch{t=sp(e),i=1}return t&&(t.width||t.height)||i||(t=sp(e)),t&&!t.width&&!t.x&&!t.y?{x:+op(e,["x","cx","x1"])||0,y:+op(e,["y","cy","y1"])||0,width:0,height:0}:t},Eg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&yg(e))},ur=function(e,t){if(t){var i=e.style,r;t in Oi&&t!==un&&(t=pt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Qf,"-$1").toLowerCase())):i.removeAttribute(t)}},er=function(e,t,i,r,s,o){var a=new cn(e._pt,t,i,0,1,o?vg:gg);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},ap={deg:1,rad:1,turn:1},$A={grid:1,flex:1},fr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Or.style,l=OA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,p,m;if(r===o||!s||ap[r]||ap[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),m=e.getCTM&&Eg(e),(d||o==="%")&&(Oi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Et(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Qi||!_.appendChild)&&(_=Qi.body),p=_._gsap,p&&d&&p.width&&l&&p.time===xn.time&&!p.uncache)return Et(s/p.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+r,g=e[u],y?e.style[t]=y:ur(e,t)}else(d||o==="%")&&!$A[yn(_,"display")]&&(a.position=yn(e,"position")),_===e&&(a.position="static"),_.appendChild(Or),g=Or[u],_.removeChild(Or),a.position="absolute";return l&&d&&(p=Vr(_),p.time=xn.time,p.width=_[u]),Et(h?g*s/f:g&&s?f/g*s:0)},bi=function(e,t,i,r){var s;return Zf||ju(),t in li&&t!=="transform"&&(t=li[t],~t.indexOf(",")&&(t=t.split(",")[0])),Oi[t]&&t!=="transform"?(s=Fo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:nl(yn(e,un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=tl[t]&&tl[t](e,t,i)||yn(e,t)||z_(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?fr(e,t,s,i)+i:s},ZA=function(e,t,i,r){if(!i||i==="none"){var s=ks(t,e,1),o=s&&yn(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=yn(e,"borderTopColor"))}var a=new cn(this._pt,e.style,t,0,1,pg),l=0,c=0,u,f,h,d,g,_,p,m,y,S,E,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=yn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=yn(e,t)||r,_?e.style[t]=_:ur(e,t)),u=[i,r],rg(u),i=u[0],r=u[1],h=i.match(vs)||[],C=r.match(vs)||[],C.length){for(;f=vs.exec(r);)p=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,E=_.substr((d+"").length),p.charAt(1)==="="&&(p=ws(d,p)+E),m=parseFloat(p),S=p.substr((m+"").length),l=vs.lastIndex-S.length,S||(S=S||Tn.units[t]||E,l===r.length&&(r+=S,a.e+=S)),E!==S&&(d=fr(e,t,_,S)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?vg:gg;return U_.test(r)&&(a.e=0),this._pt=a,a},lp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},JA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=lp[i]||i,t[1]=lp[r]||r,t.join(" ")},QA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Oi[a]&&(l=1,a=a==="transformOrigin"?un:pt),ur(i,a);l&&(ur(i,pt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Fo(i,1),o.uncache=1,xg(r)))}},tl={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new cn(e._pt,t,i,0,0,QA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Oo=[1,0,0,1,0,0],Tg={},bg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},cp=function(e){var t=yn(e,pt);return bg(t)?Oo:t.substr(7).match(I_).map(Et)},eh=function(e,t){var i=e._gsap||Vr(e),r=e.style,s=cp(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Oo:s):(s===Oo&&!e.offsetParent&&e!==Rs&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Rs.appendChild(e)),s=cp(e),l?r.display=l:ur(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Rs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$u=function(e,t,i,r,s,o){var a=e._gsap,l=s||eh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],S=t.split(" "),E=parseFloat(S[0])||0,C=parseFloat(S[1])||0,R,b,D,L;i?l!==Oo&&(b=d*p-g*_)&&(D=E*(p/b)+C*(-_/b)+(_*y-p*m)/b,L=E*(-g/b)+C*(d/b)-(d*y-g*m)/b,E=D,C=L):(R=yg(e),E=R.x+(~S[0].indexOf("%")?E/100*R.width:E),C=R.y+(~(S[1]||S[0]).indexOf("%")?C/100*R.height:C)),r||r!==!1&&a.smooth?(m=E-c,y=C-u,a.xOffset=f+(m*d+y*_)-m,a.yOffset=h+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[un]="0px 0px",o&&(er(o,a,"xOrigin",c,E),er(o,a,"yOrigin",u,C),er(o,a,"xOffset",f,a.xOffset),er(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",E+" "+C)},Fo=function(e,t){var i=e._gsap||new lg(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=yn(e,un)||"0",u,f,h,d,g,_,p,m,y,S,E,C,R,b,D,L,x,T,I,N,K,ee,k,X,G,me,_e,ge,Le,Ge,te,ae;return u=f=h=_=p=m=y=S=E=0,d=g=1,i.svg=!!(e.getCTM&&Eg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pt]!=="none"?l[pt]:"")),r.scale=r.rotate=r.translate="none"),b=eh(e,i.svg),i.svg&&(i.uncache?(G=e.getBBox(),c=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),$u(e,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,b)),C=i.xOrigin||0,R=i.yOrigin||0,b!==Oo&&(T=b[0],I=b[1],N=b[2],K=b[3],u=ee=b[4],f=k=b[5],b.length===6?(d=Math.sqrt(T*T+I*I),g=Math.sqrt(K*K+N*N),_=T||I?ps(I,T)*Pr:0,y=N||K?ps(N,K)*Pr+_:0,y&&(g*=Math.abs(Math.cos(y*Cs))),i.svg&&(u-=C-(C*T+R*N),f-=R-(C*I+R*K))):(ae=b[6],Ge=b[7],_e=b[8],ge=b[9],Le=b[10],te=b[11],u=b[12],f=b[13],h=b[14],D=ps(ae,Le),p=D*Pr,D&&(L=Math.cos(-D),x=Math.sin(-D),X=ee*L+_e*x,G=k*L+ge*x,me=ae*L+Le*x,_e=ee*-x+_e*L,ge=k*-x+ge*L,Le=ae*-x+Le*L,te=Ge*-x+te*L,ee=X,k=G,ae=me),D=ps(-N,Le),m=D*Pr,D&&(L=Math.cos(-D),x=Math.sin(-D),X=T*L-_e*x,G=I*L-ge*x,me=N*L-Le*x,te=K*x+te*L,T=X,I=G,N=me),D=ps(I,T),_=D*Pr,D&&(L=Math.cos(D),x=Math.sin(D),X=T*L+I*x,G=ee*L+k*x,I=I*L-T*x,k=k*L-ee*x,T=X,ee=G),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Et(Math.sqrt(T*T+I*I+N*N)),g=Et(Math.sqrt(k*k+ae*ae)),D=ps(ee,k),y=Math.abs(D)>2e-4?D*Pr:0,E=te?1/(te<0?-te:te):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!bg(yn(e,pt)),X&&e.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Et(d),i.scaleY=Et(g),i.rotation=Et(_)+a,i.rotationX=Et(p)+a,i.rotationY=Et(m)+a,i.skewX=y+a,i.skewY=S+a,i.transformPerspective=E+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[un]=nl(c)),i.xOffset=i.yOffset=0,i.force3D=Tn.force3D,i.renderTransform=i.svg?t1:Mg?Ag:e1,i.uncache=0,i},nl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pc=function(e,t,i){var r=Vt(t);return Et(parseFloat(t)+parseFloat(fr(e,"x",i+"px",r)))+r},e1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ag(e,t)},br="0deg",ro="0px",Ar=") ",Ag=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,y=i.target,S=i.zOrigin,E="",C=m==="auto"&&e&&e!==1||m===!0;if(S&&(f!==br||u!==br)){var R=parseFloat(u)*Cs,b=Math.sin(R),D=Math.cos(R),L;R=parseFloat(f)*Cs,L=Math.cos(R),o=Pc(y,o,b*L*-S),a=Pc(y,a,-Math.sin(R)*-S),l=Pc(y,l,D*L*-S+S)}p!==ro&&(E+="perspective("+p+Ar),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(C||o!==ro||a!==ro||l!==ro)&&(E+=l!==ro||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ar),c!==br&&(E+="rotate("+c+Ar),u!==br&&(E+="rotateY("+u+Ar),f!==br&&(E+="rotateX("+f+Ar),(h!==br||d!==br)&&(E+="skew("+h+", "+d+Ar),(g!==1||_!==1)&&(E+="scale("+g+", "+_+Ar),y.style[pt]=E||"translate(0, 0)"},t1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,y=i.forceCSS,S=parseFloat(o),E=parseFloat(a),C,R,b,D,L;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Cs,c*=Cs,C=Math.cos(l)*f,R=Math.sin(l)*f,b=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=Cs,L=Math.tan(c-u),L=Math.sqrt(1+L*L),b*=L,D*=L,u&&(L=Math.tan(u),L=Math.sqrt(1+L*L),C*=L,R*=L)),C=Et(C),R=Et(R),b=Et(b),D=Et(D)):(C=f,D=h,R=b=0),(S&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(S=fr(d,"x",o,"px"),E=fr(d,"y",a,"px")),(g||_||p||m)&&(S=Et(S+g-(g*C+_*b)+p),E=Et(E+_-(g*R+_*D)+m)),(r||s)&&(L=d.getBBox(),S=Et(S+r/100*L.width),E=Et(E+s/100*L.height)),L="matrix("+C+","+R+","+b+","+D+","+S+","+E+")",d.setAttribute("transform",L),y&&(d.style[pt]=L)},n1=function(e,t,i,r,s){var o=360,a=It(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Pr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*ip)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*ip)%o-~~(c/o)*o)),e._pt=h=new cn(e._pt,t,i,r,c,BA),h.e=u,h.u="deg",e._props.push(i),h},up=function(e,t){for(var i in t)e[i]=t[i];return e},i1=function(e,t,i){var r=up({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[pt]=t,a=Fo(i,1),ur(i,pt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[pt],o[pt]=t,a=Fo(i,1),o[pt]=c);for(l in Oi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Vt(c),g=Vt(u),f=d!==g?fr(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new cn(e._pt,a,l,f,h-f,Yu),e._pt.u=g||0,e._props.push(l));up(a,r)};ln("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});tl[e>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return bi(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var wg={name:"css",register:ju,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,d,g,_,p,m,y,S,E,C,R,b,D,L;Zf||ju(),this.styles=this.styles||Sg(e),D=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(_n[_]&&cg(_,t,i,r,e,s)))){if(d=typeof u,g=tl[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Io(u)),g)g(this,e,_,u,i)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",sr.lastIndex=0,sr.test(c)||(p=Vt(c),m=Vt(u),m?p!==m&&(c=fr(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],It(c)&&~c.indexOf("random(")&&(c=Io(c)),Vt(c+"")||c==="auto"||(c+=Tn.units[_]||Vt(bi(e,_))||""),(c+"").charAt(1)==="="&&(c=bi(e,_))):c=bi(e,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in li&&(_==="autoAlpha"&&(h===1&&bi(e,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),er(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=li[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Oi,S){if(this.styles.save(_),L=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=yn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=yn(e,"perspective"),x?e.style.perspective=x:ur(e,"perspective")}f=parseFloat(u)}if(E||(C=e._gsap,C.renderTransform&&!t.parseTransform||Fo(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,E=this._pt=new cn(this._pt,a,pt,0,1,C.renderTransform,C,0,-1),E.dep=1),_==="scale")this._pt=new cn(this._pt,C,"scaleY",C.scaleY,(y?ws(C.scaleY,y+f):f)-C.scaleY||0,Yu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(un,0,a[un]),u=JA(u),C.svg?$u(e,u,0,R,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==C.zOrigin&&er(this,C,"zOrigin",C.zOrigin,m),er(this,a,_,nl(c),nl(u)));continue}else if(_==="svgOrigin"){$u(e,u,1,R,0,this);continue}else if(_ in Tg){n1(this,C,_,h,y?ws(h,y+u):u);continue}else if(_==="smoothOrigin"){er(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){i1(this,u,e);continue}}else _ in a||(_=ks(_)||_);if(S||(f||f===0)&&(h||h===0)&&!FA.test(u)&&_ in a)p=(c+"").substr((h+"").length),f||(f=0),m=Vt(u)||(_ in Tn.units?Tn.units[_]:p),p!==m&&(h=fr(e,_,c,m)),this._pt=new cn(this._pt,S?C:a,_,h,(y?ws(h,y+f):f)-h,!S&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?VA:Yu),this._pt.u=m||0,S&&L!==u?(this._pt.b=c,this._pt.e=L,this._pt.r=HA):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=zA);else if(_ in a)ZA.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){Vf(_,u);continue}S||(_ in a?D.push(_,0,a[_]):typeof e[_]=="function"?D.push(_,2,e[_]()):D.push(_,1,c||e[_])),o.push(_)}}b&&mg(this)},render:function(e,t){if(t.tween._time||!Jf())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:bi,aliases:li,getSetter:function(e,t,i){var r=li[t];return r&&r.indexOf(",")<0&&(t=r),t in Oi&&t!==un&&(e._gsap.x||bi(e,"x"))?i&&np===i?t==="scale"?XA:WA:(np=i||{})&&(t==="scale"?qA:YA):e.style&&!Bf(e.style[t])?kA:~t.indexOf("-")?GA:jf(e,t)},core:{_removeProperty:ur,_getMatrix:eh}};fn.utils.checkPrefix=ks;fn.core.getStyleSaver=Sg;(function(n,e,t,i){var r=ln(n+","+e+","+t,function(s){Oi[s]=1});ln(e,function(s){Tn.units[s]="deg",Tg[s]=1}),li[r[13]]=n+","+e,ln(i,function(s){var o=s.split(":");li[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Tn.units[n]="px"});fn.registerPlugin(wg);var Zu=fn.registerPlugin(wg)||fn;Zu.core.Tween;const Dc=6,Rg=Cx("dice",{state:()=>({currentFace:1,isAnimating:!1}),actions:{nextFace(){this.isAnimating||(this.isAnimating=!0,this.currentFace=this.currentFace===Dc?1:this.currentFace+1)},prevFace(){this.isAnimating||(this.isAnimating=!0,this.currentFace=this.currentFace===1?Dc:this.currentFace-1)},goToFace(n){this.isAnimating||n<1||n>Dc||n!==this.currentFace&&(this.isAnimating=!0,this.currentFace=n)},finishAnimation(){this.isAnimating=!1}}}),r1={__name:"DiceCanvas",setup(n){const e=mf(null),t=Rg(),i={1:{x:0,y:0},2:{x:0,y:Math.PI/2},3:{x:-Math.PI/2,y:0},4:{x:Math.PI/2,y:0},5:{x:0,y:-Math.PI/2},6:{x:Math.PI,y:0}},r=["#fbd000","#d40000","#ffffff","#00a800","#5c94fc","#ffea66"],s=["?","M","★","1UP","!","🍄"];function o(S,E){const R=document.createElement("canvas");R.width=R.height=256;const b=R.getContext("2d");b.fillStyle=S,b.fillRect(0,0,256,256),b.fillStyle="#000",b.fillRect(0,0,256,18),b.fillRect(0,238,256,18),b.fillRect(0,0,18,256),b.fillRect(238,0,18,256),b.fillRect(28,28,16,16),b.fillRect(212,28,16,16),b.fillRect(28,212,16,16),b.fillRect(212,212,16,16),b.fillStyle="rgba(255,255,255,0.35)",b.fillRect(18,18,220,8),b.fillRect(18,18,8,220),b.fillStyle="rgba(0,0,0,0.25)",b.fillRect(18,230,220,8),b.fillRect(230,18,8,220),b.fillStyle="#000",b.font='bold 130px "Press Start 2P", monospace',b.textAlign="center",b.textBaseline="middle",b.fillText(E,256/2+4,256/2+8),b.fillStyle="#fff",b.fillText(E,256/2,256/2);const D=new Ub(R);return D.magFilter=sn,D.minFilter=sn,D}let a,l,c,u,f,h,d=!1,g=0,_=0,p=!1;function m(S,E){const C=new Bn(S,E,0,"XYZ"),R=new Yr().setFromEuler(C);let b=1,D=-1/0;for(const[L,x]of Object.entries(i)){const T=new Yr().setFromEuler(new Bn(x.x,x.y,0,"XYZ")),I=Math.abs(R.dot(T));I>D&&(D=I,b=Number(L))}return b}function y(){if(!l||!u)return;const S=window.innerWidth;S<768?(u.position.x=0,u.position.y=1.6,u.scale.setScalar(.75),l.position.z=7):(u.position.x=-1.8,u.position.y=0,u.scale.setScalar(1),l.position.z=6),l.aspect=S/window.innerHeight,l.updateProjectionMatrix(),c.setSize(S,window.innerHeight)}return vf(()=>{const S=e.value;a=new Ib,l=new Ln(45,window.innerWidth/window.innerHeight,.1,100),l.position.set(0,0,6),c=new Lb({canvas:S,antialias:!0,alpha:!0}),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setSize(window.innerWidth,window.innerHeight);const E=new qs(2,2,2),C=r.map((T,I)=>new Nb({map:o(T,s[I]),roughness:.55,metalness:.1}));u=new ai(E,C),a.add(u),a.add(new zb(16777215,.7));const R=new Bb(16777215,1.1);R.position.set(5,5,5),a.add(R),y();const b=()=>{!t.isAnimating&&!p&&(u.rotation.y+=.0025,u.rotation.x+=.0012),c.render(a,l),f=requestAnimationFrame(b)};b(),h=y,window.addEventListener("resize",h);const D=T=>{var I;t.isAnimating||(d=!0,p=!1,g=T.clientX,_=T.clientY,(I=S.setPointerCapture)==null||I.call(S,T.pointerId))},L=T=>{if(!d)return;const I=T.clientX-g,N=T.clientY-_;Math.abs(I)+Math.abs(N)>2&&(p=!0),g=T.clientX,_=T.clientY,u.rotation.y+=I*.01,u.rotation.x+=N*.01},x=T=>{var N;if(!d||(d=!1,(N=S.releasePointerCapture)==null||N.call(S,T.pointerId),!p))return;p=!1;const I=m(u.rotation.x,u.rotation.y);if(I===t.currentFace){t.isAnimating=!0;const K=i[I];Zu.to(u.rotation,{x:K.x,y:K.y,duration:.5,ease:"power2.out",onComplete:()=>t.finishAnimation()})}else t.goToFace(I)};S.addEventListener("pointerdown",D),window.addEventListener("pointermove",L),window.addEventListener("pointerup",x),S.style.touchAction="none",S.style.cursor="grab",S._cleanup=()=>{S.removeEventListener("pointerdown",D),window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",x)}}),tr(()=>t.currentFace,S=>{if(!u)return;const E=i[S],C=(R,b)=>{const D=b-R,L=Math.atan2(Math.sin(D),Math.cos(D));return R+L};Zu.to(u.rotation,{x:C(u.rotation.x,E.x),y:C(u.rotation.y,E.y),duration:.8,ease:"power2.inOut",onComplete:()=>{u.rotation.x=E.x,u.rotation.y=E.y,t.finishAnimation()}})}),xf(()=>{var S,E;cancelAnimationFrame(f),window.removeEventListener("resize",h),(E=(S=e.value)==null?void 0:S._cleanup)==null||E.call(S),c==null||c.dispose()}),(S,E)=>(jt(),vn("canvas",{ref_key:"canvasRef",ref:e,class:"dice-canvas"},null,512))}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const _s=typeof document<"u";function Cg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function s1(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Cg(n.default)}const Ze=Object.assign;function Lc(n,e){const t={};for(const i in e){const r=e[i];t[i]=$n(r)?r.map(n):n(r)}return t}const yo=()=>{},$n=Array.isArray;function fp(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Pg=/#/g,o1=/&/g,a1=/\//g,l1=/=/g,c1=/\?/g,Dg=/\+/g,u1=/%5B/g,f1=/%5D/g,Lg=/%5E/g,h1=/%60/g,Ig=/%7B/g,d1=/%7C/g,Ug=/%7D/g,p1=/%20/g;function th(n){return n==null?"":encodeURI(""+n).replace(d1,"|").replace(u1,"[").replace(f1,"]")}function m1(n){return th(n).replace(Ig,"{").replace(Ug,"}").replace(Lg,"^")}function Ju(n){return th(n).replace(Dg,"%2B").replace(p1,"+").replace(Pg,"%23").replace(o1,"%26").replace(h1,"`").replace(Ig,"{").replace(Ug,"}").replace(Lg,"^")}function _1(n){return Ju(n).replace(l1,"%3D")}function g1(n){return th(n).replace(Pg,"%23").replace(c1,"%3F")}function v1(n){return g1(n).replace(a1,"%2F")}function Bo(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const x1=/\/$/,S1=n=>n.replace(x1,"");function Ic(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=T1(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:Bo(o)}}function M1(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function hp(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function y1(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Gs(e.matched[i],t.matched[r])&&Ng(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Gs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Ng(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!E1(n[t],e[t]))return!1;return!0}function E1(n,e){return $n(n)?dp(n,e):$n(e)?dp(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function dp(n,e){return $n(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function T1(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const qi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Qu=function(n){return n.pop="pop",n.push="push",n}({}),Uc=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function b1(n){if(!n)if(_s){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),S1(n)}const A1=/^[^#]+#/;function w1(n,e){return n.replace(A1,"#")+e}function R1(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const bl=()=>({left:window.scrollX,top:window.scrollY});function C1(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=R1(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pp(n,e){return(history.state?history.state.position-e:-1)+n}const ef=new Map;function P1(n,e){ef.set(n,e)}function D1(n){const e=ef.get(n);return ef.delete(n),e}function L1(n){return typeof n=="string"||n&&typeof n=="object"}function Og(n){return typeof n=="string"||typeof n=="symbol"}let _t=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Fg=Symbol("");_t.MATCHER_NOT_FOUND+"",_t.NAVIGATION_GUARD_REDIRECT+"",_t.NAVIGATION_ABORTED+"",_t.NAVIGATION_CANCELLED+"",_t.NAVIGATION_DUPLICATED+"";function Ws(n,e){return Ze(new Error,{type:n,[Fg]:!0},e)}function Si(n,e){return n instanceof Error&&Fg in n&&(e==null||!!(n.type&e))}const I1=["params","query","hash"];function U1(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of I1)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function N1(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Dg," "),s=r.indexOf("="),o=Bo(s<0?r:r.slice(0,s)),a=s<0?null:Bo(r.slice(s+1));if(o in e){let l=e[o];$n(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function mp(n){let e="";for(let t in n){const i=n[t];if(t=_1(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}($n(i)?i.map(r=>r&&Ju(r)):[i&&Ju(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function O1(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=$n(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const F1=Symbol(""),_p=Symbol(""),Al=Symbol(""),nh=Symbol(""),tf=Symbol("");function so(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ji(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Ws(_t.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):L1(h)?l(Ws(_t.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Nc(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Cg(l)){const c=(l.__vccOpts||l)[e];c&&s.push(ji(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=s1(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&ji(h,t,i,o,a,r)()}))}}return s}function B1(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Gs(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Gs(c,l))||r.push(l))}return[t,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let z1=()=>location.protocol+"//"+location.host;function Bg(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),hp(a,"")}return hp(t,n)+i+r}function H1(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=Bg(n,location),g=t.value,_=e.value;let p=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}p=_?h.position-_.position:0}else i(d);r.forEach(m=>{m(t.value,g,{delta:p,type:Qu.pop,direction:p?p>0?Uc.forward:Uc.back:Uc.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(Ze({},h.state,{scroll:bl()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function gp(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?bl():null}}function V1(n){const{history:e,location:t}=window,i={value:Bg(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:z1()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){s(l,Ze({},e.state,gp(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=Ze({},r.value,e.state,{forward:l,scroll:bl()});s(u.current,u,!0),s(l,Ze({},gp(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function k1(n){n=b1(n);const e=V1(n),t=H1(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Ze({location:"",base:n,go:i,createHref:w1.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function G1(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),k1(n)}let Fr=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var wt=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(wt||{});const W1={type:Fr.Static,value:""},X1=/[a-zA-Z0-9_]/;function q1(n){if(!n)return[[]];if(n==="/")return[[W1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=wt.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===wt.Static?s.push({type:Fr.Static,value:c}):t===wt.Param||t===wt.ParamRegExp||t===wt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Fr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==wt.ParamRegExp){i=t,t=wt.EscapeNext;continue}switch(t){case wt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),t=wt.Param):h();break;case wt.EscapeNext:h(),t=i;break;case wt.Param:l==="("?t=wt.ParamRegExp:X1.test(l)?h():(f(),t=wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case wt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=wt.ParamRegExpEnd:u+=l;break;case wt.ParamRegExpEnd:f(),t=wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===wt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}const vp="[^/]+?",Y1={sensitive:!1,strict:!1,start:!0,end:!0};var qt=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(qt||{});const K1=/[.+*?^${}()[\]/\\]/g;function j1(n,e){const t=Ze({},Y1,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[qt.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=qt.Segment+(t.sensitive?qt.BonusCaseSensitive:0);if(h.type===Fr.Static)f||(r+="/"),r+=h.value.replace(K1,"\\$&"),d+=qt.Static;else if(h.type===Fr.Param){const{value:g,repeatable:_,optional:p,regexp:m}=h;s.push({name:g,repeatable:_,optional:p});const y=m||vp;if(y!==vp){d+=qt.BonusCustomRegExp;try{`${y}`}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+E.message)}}let S=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(S=p&&c.length<2?`(?:/${S})`:"/"+S),p&&(S+="?"),r+=S,d+=qt.Dynamic,p&&(d+=qt.BonusOptional),_&&(d+=qt.BonusRepeatable),y===".*"&&(d+=qt.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=qt.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===Fr.Static)u+=d.value;else if(d.type===Fr.Param){const{value:g,repeatable:_,optional:p}=d,m=g in c?c[g]:"";if($n(m)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=$n(m)?m.join("/"):m;if(!y)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function $1(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===qt.Static+qt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===qt.Static+qt.Segment?1:-1:0}function zg(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=$1(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(xp(i))return 1;if(xp(r))return-1}return r.length-i.length}function xp(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Z1={strict:!1,end:!0,sensitive:!1};function J1(n,e,t){const i=j1(q1(n.path),t),r=Ze(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Q1(n,e){const t=[],i=new Map;e=fp(Z1,e);function r(f){return i.get(f)}function s(f,h,d){const g=!d,_=Mp(f);_.aliasOf=d&&d.record;const p=fp(e,f),m=[_];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of E)m.push(Mp(Ze({},_,{components:d?d.record.components:_.components,path:C,aliasOf:d?d.record:_})))}let y,S;for(const E of m){const{path:C}=E;if(h&&C[0]!=="/"){const R=h.record.path,b=R[R.length-1]==="/"?"":"/";E.path=h.record.path+(C&&b+C)}if(y=J1(E,h,p),d?d.alias.push(y):(S=S||y,S!==y&&S.alias.push(y),g&&f.name&&!yp(y)&&o(f.name)),Hg(y)&&l(y),_.children){const R=_.children;for(let b=0;b<R.length;b++)s(R[b],y,d&&d.children[b])}d=d||y}return S?()=>{o(S)}:yo}function o(f){if(Og(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=nw(f,t);t.splice(h,0,f),f.record.name&&!yp(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},_,p;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Ws(_t.MATCHER_NOT_FOUND,{location:f});p=d.record.name,g=Ze(Sp(h.params,d.keys.filter(S=>!S.optional).concat(d.parent?d.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&Sp(f.params,d.keys.map(S=>S.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=t.find(S=>S.re.test(_)),d&&(g=d.parse(_),p=d.record.name);else{if(d=h.name?i.get(h.name):t.find(S=>S.re.test(h.path)),!d)throw Ws(_t.MATCHER_NOT_FOUND,{location:f,currentLocation:h});p=d.record.name,g=Ze({},h.params,f.params),_=d.stringify(g)}const m=[];let y=d;for(;y;)m.unshift(y.record),y=y.parent;return{name:p,path:_,params:g,matched:m,meta:tw(m)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Sp(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Mp(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:ew(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ew(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function yp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function tw(n){return n.reduce((e,t)=>Ze(e,t.meta),{})}function nw(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;zg(n,e[s])<0?i=s:t=s+1}const r=iw(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function iw(n){let e=n;for(;e=e.parent;)if(Hg(e)&&zg(n,e)===0)return e}function Hg({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Ep(n){const e=On(Al),t=On(nh),i=In(()=>{const l=gn(n.to);return e.resolve(l)}),r=In(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Gs.bind(null,u));if(h>-1)return h;const d=Tp(l[c-2]);return c>1&&Tp(u)===d&&f[f.length-1].path!==d?f.findIndex(Gs.bind(null,l[c-2])):h}),s=In(()=>r.value>-1&&lw(t.params,i.value.params)),o=In(()=>r.value>-1&&r.value===t.matched.length-1&&Ng(t.params,i.value.params));function a(l={}){if(aw(l)){const c=e[gn(n.replace)?"replace":"push"](gn(n.to)).catch(yo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:In(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function rw(n){return n.length===1?n[0]:n}const sw=mm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ep,setup(n,{slots:e}){const t=Ho(Ep(n)),{options:i}=On(Al),r=In(()=>({[bp(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[bp(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&rw(e.default(t));return n.custom?s:bf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),ow=sw;function aw(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function lw(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!$n(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function Tp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const bp=(n,e,t)=>n??e??t,cw=mm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=On(tf),r=In(()=>n.route||i.value),s=On(_p,0),o=In(()=>{let c=gn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=In(()=>r.value.matched[o.value]);ya(_p,In(()=>o.value+1)),ya(F1,a),ya(tf,r);const l=mf();return tr(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Gs(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Ap(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=bf(h,Ze({},g,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Ap(t.default,{Component:p,route:c})||p}}});function Ap(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const uw=cw;function fw(n){const e=Q1(n.routes,n),t=n.parseQuery||N1,i=n.stringifyQuery||mp,r=n.history,s=so(),o=so(),a=so(),l=T0(qi);let c=qi;_s&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Lc.bind(null,H=>""+H),f=Lc.bind(null,v1),h=Lc.bind(null,Bo);function d(H,se){let re,de;return Og(H)?(re=e.getRecordMatcher(H),de=se):de=H,e.addRoute(de,re)}function g(H){const se=e.getRecordMatcher(H);se&&e.removeRoute(se)}function _(){return e.getRoutes().map(H=>H.record)}function p(H){return!!e.getRecordMatcher(H)}function m(H,se){if(se=Ze({},se||l.value),typeof H=="string"){const B=Ic(t,H,se.path),Y=e.resolve({path:B.path},se),J=r.createHref(B.fullPath);return Ze(B,Y,{params:h(Y.params),hash:Bo(B.hash),redirectedFrom:void 0,href:J})}let re;if(H.path!=null)re=Ze({},H,{path:Ic(t,H.path,se.path).path});else{const B=Ze({},H.params);for(const Y in B)B[Y]==null&&delete B[Y];re=Ze({},H,{params:f(B)}),se.params=f(se.params)}const de=e.resolve(re,se),Ae=H.hash||"";de.params=u(h(de.params));const P=M1(i,Ze({},H,{hash:m1(Ae),path:de.path})),M=r.createHref(P);return Ze({fullPath:P,hash:Ae,query:i===mp?O1(H.query):H.query||{}},de,{redirectedFrom:void 0,href:M})}function y(H){return typeof H=="string"?Ic(t,H,l.value.path):Ze({},H)}function S(H,se){if(c!==H)return Ws(_t.NAVIGATION_CANCELLED,{from:se,to:H})}function E(H){return b(H)}function C(H){return E(Ze(y(H),{replace:!0}))}function R(H,se){const re=H.matched[H.matched.length-1];if(re&&re.redirect){const{redirect:de}=re;let Ae=typeof de=="function"?de(H,se):de;return typeof Ae=="string"&&(Ae=Ae.includes("?")||Ae.includes("#")?Ae=y(Ae):{path:Ae},Ae.params={}),Ze({query:H.query,hash:H.hash,params:Ae.path!=null?{}:H.params},Ae)}}function b(H,se){const re=c=m(H),de=l.value,Ae=H.state,P=H.force,M=H.replace===!0,B=R(re,de);if(B)return b(Ze(y(B),{state:typeof B=="object"?Ze({},Ae,B.state):Ae,force:P,replace:M}),se||re);const Y=re;Y.redirectedFrom=se;let J;return!P&&y1(i,de,re)&&(J=Ws(_t.NAVIGATION_DUPLICATED,{to:Y,from:de}),ge(de,de,!0,!1)),(J?Promise.resolve(J):x(Y,de)).catch(W=>Si(W)?Si(W,_t.NAVIGATION_GUARD_REDIRECT)?W:_e(W):G(W,Y,de)).then(W=>{if(W){if(Si(W,_t.NAVIGATION_GUARD_REDIRECT))return b(Ze({replace:M},y(W.to),{state:typeof W.to=="object"?Ze({},Ae,W.to.state):Ae,force:P}),se||Y)}else W=I(Y,de,!0,M,Ae);return T(Y,de,W),W})}function D(H,se){const re=S(H,se);return re?Promise.reject(re):Promise.resolve()}function L(H){const se=te.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(H):H()}function x(H,se){let re;const[de,Ae,P]=B1(H,se);re=Nc(de.reverse(),"beforeRouteLeave",H,se);for(const B of de)B.leaveGuards.forEach(Y=>{re.push(ji(Y,H,se))});const M=D.bind(null,H,se);return re.push(M),Se(re).then(()=>{re=[];for(const B of s.list())re.push(ji(B,H,se));return re.push(M),Se(re)}).then(()=>{re=Nc(Ae,"beforeRouteUpdate",H,se);for(const B of Ae)B.updateGuards.forEach(Y=>{re.push(ji(Y,H,se))});return re.push(M),Se(re)}).then(()=>{re=[];for(const B of P)if(B.beforeEnter)if($n(B.beforeEnter))for(const Y of B.beforeEnter)re.push(ji(Y,H,se));else re.push(ji(B.beforeEnter,H,se));return re.push(M),Se(re)}).then(()=>(H.matched.forEach(B=>B.enterCallbacks={}),re=Nc(P,"beforeRouteEnter",H,se,L),re.push(M),Se(re))).then(()=>{re=[];for(const B of o.list())re.push(ji(B,H,se));return re.push(M),Se(re)}).catch(B=>Si(B,_t.NAVIGATION_CANCELLED)?B:Promise.reject(B))}function T(H,se,re){a.list().forEach(de=>L(()=>de(H,se,re)))}function I(H,se,re,de,Ae){const P=S(H,se);if(P)return P;const M=se===qi,B=_s?history.state:{};re&&(de||M?r.replace(H.fullPath,Ze({scroll:M&&B&&B.scroll},Ae)):r.push(H.fullPath,Ae)),l.value=H,ge(H,se,re,M),_e()}let N;function K(){N||(N=r.listen((H,se,re)=>{if(!ae.listening)return;const de=m(H),Ae=R(de,ae.currentRoute.value);if(Ae){b(Ze(Ae,{replace:!0,force:!0}),de).catch(yo);return}c=de;const P=l.value;_s&&P1(pp(P.fullPath,re.delta),bl()),x(de,P).catch(M=>Si(M,_t.NAVIGATION_ABORTED|_t.NAVIGATION_CANCELLED)?M:Si(M,_t.NAVIGATION_GUARD_REDIRECT)?(b(Ze(y(M.to),{force:!0}),de).then(B=>{Si(B,_t.NAVIGATION_ABORTED|_t.NAVIGATION_DUPLICATED)&&!re.delta&&re.type===Qu.pop&&r.go(-1,!1)}).catch(yo),Promise.reject()):(re.delta&&r.go(-re.delta,!1),G(M,de,P))).then(M=>{M=M||I(de,P,!1),M&&(re.delta&&!Si(M,_t.NAVIGATION_CANCELLED)?r.go(-re.delta,!1):re.type===Qu.pop&&Si(M,_t.NAVIGATION_ABORTED|_t.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),T(de,P,M)}).catch(yo)}))}let ee=so(),k=so(),X;function G(H,se,re){_e(H);const de=k.list();return de.length?de.forEach(Ae=>Ae(H,se,re)):console.error(H),Promise.reject(H)}function me(){return X&&l.value!==qi?Promise.resolve():new Promise((H,se)=>{ee.add([H,se])})}function _e(H){return X||(X=!H,K(),ee.list().forEach(([se,re])=>H?re(H):se()),ee.reset()),H}function ge(H,se,re,de){const{scrollBehavior:Ae}=n;if(!_s||!Ae)return Promise.resolve();const P=!re&&D1(pp(H.fullPath,0))||(de||!re)&&history.state&&history.state.scroll||null;return _f().then(()=>Ae(H,se,P)).then(M=>M&&C1(M)).catch(M=>G(M,H,se))}const Le=H=>r.go(H);let Ge;const te=new Set,ae={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:p,getRoutes:_,resolve:m,options:n,push:E,replace:C,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:k.add,isReady:me,install(H){H.component("RouterLink",ow),H.component("RouterView",uw),H.config.globalProperties.$router=ae,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>gn(l)}),_s&&!Ge&&l.value===qi&&(Ge=!0,E(r.location).catch(de=>{}));const se={};for(const de in qi)Object.defineProperty(se,de,{get:()=>l.value[de],enumerable:!0});H.provide(Al,ae),H.provide(nh,Qp(se)),H.provide(tf,l);const re=H.unmount;te.add(H),H.unmount=function(){te.delete(H),te.size<1&&(c=qi,N&&N(),N=null,l.value=qi,Ge=!1,X=!1),re()}}};function Se(H){return H.reduce((se,re)=>se.then(()=>L(re)),Promise.resolve())}return ae}function hw(){return On(Al)}function dw(n){return On(nh)}const Ks=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},pw={},mw={class:"content-inner"};function _w(n,e){return jt(),vn("section",mw,[...e[0]||(e[0]=[at("h1",null,"Fabio(李承哲)",-1),at("p",null,[at("strong",null,"前端開發者 · 台灣")],-1),at("p",{style:{"margin-top":"0.6rem","font-style":"italic"}}," 「我用程式碼打造網頁體驗，偶爾也擲個骰子。」 ",-1),at("h2",null,"關於",-1),at("p",null," 您好，我是承哲。前陣子在行銷公司擔任前端切版工作兩年半，參與多項企業官網專案， 熟悉 HTML、CSS 與 Bootstrap；框架方面會 Vue 與 React，具備基礎應用能力。 ",-1),at("h2",null,"近況更新",-1),at("p",null,"致各位 HR 與正在看這份履歷的長官們：不太正式地，我把這邊當作近況更新的小角落。",-1),at("p",null," 最近在好想工作室重新打造自己的學習方式，開始學習 3A Pattern 與測試程式碼的寫法， 這幾天也在調整對設計模式的理解，研究 SOLID 原則，並持續閱讀《Code Complete》。 ",-1),at("p",null," 目前求職暫緩中，但也不排斥被截胡帶走，歡迎聯絡。 日後作品會持續更新，希望能更有工程師的味道， 不再只是補習班作品，而是學習與努力累積下來的結晶。 ",-1)])])}const gw=Ks(pw,[["render",_w]]),vw={};function xw(n,e){return jt(),vn("section",null,[...e[0]||(e[0]=[_l("<h1>技術能力</h1><h2>前端</h2><ul><li>Vue 3（Composition API、script setup、Pinia）</li><li>React</li><li>HTML5 / CSS3 / SCSS</li><li>Tailwind CSS / Bootstrap 5</li></ul><h2>後端(略懂)</h2><ul><li>Node.js / Express</li><li>RESTful API 設計</li><li>MongoDB / Mongoose</li></ul><h2>工具</h2><ul><li>Git / GitHub、Claude Code</li></ul>",7)])])}const Sw=Ks(vw,[["render",xw]]),Mw="/dice-portfolio/assets/helment-DE3euBY4.png",yw="/dice-portfolio/assets/music-react-CdXLopJC.png",Ew="/dice-portfolio/assets/dadongam-tc1gjDpl.webp",Tw="/dice-portfolio/assets/ten-D4VSO5RV.webp",bw={class:"projects"},Aw={class:"preview"},ww=["src","alt"],Rw={key:0},Cw={class:"links"},Pw=["href"],Dw=["href"],Lw={__name:"FaceProjects",setup(n){const e=[{title:"HelmentShop",description:"安全帽電商網站前後台 Vue3 option api + Vite + Pinia + Router，RESTful API 串接。",stack:"Vue 3 · Vite · Pinia",image:Mw,site:"https://fabio7621.github.io/HelmentShop/#/",repo:"https://github.com/fabio7621/HelmentShop"},{title:"MusicShop",description:"React.js + Vite + chart.js（音樂商店 mix 儀錶板）。",stack:"React · Vite · chart.js",image:yw,site:"https://fabio7621.github.io/musicstore-react/",repo:"https://github.com/fabio7621/musicstore-react"},{title:"大東洋（靜態切版）",description:"服務案例",stack:"Html + CSS",image:Ew,site:"https://www.freshlife.com.tw/",repo:""},{title:"蔡教練",description:"服務案例",stack:"Html + CSS",image:Tw,site:"https://fabio7621.github.io/tsai-coach/",repo:"https://github.com/fabio7621/tsai-coach"}];return(t,i)=>(jt(),vn("section",bw,[i[1]||(i[1]=at("h1",null,"作品集",-1)),(jt(),vn(Dn,null,iv(e,r=>at("article",{key:r.title,class:"project"},[at("div",Aw,[at("img",{src:r.image,alt:r.title},null,8,ww)]),at("h2",null,ys(r.title),1),at("p",null,ys(r.description),1),r.stack?(jt(),vn("p",Rw,[at("em",null,ys(r.stack),1)])):Hl("",!0),at("div",Cw,[r.site?(jt(),vn("a",{key:0,href:r.site,target:"_blank",rel:"noopener"},"前往網站",8,Pw)):Hl("",!0),r.repo?(jt(),vn("a",{key:1,href:r.repo,target:"_blank",rel:"noopener","aria-label":"GitHub Repository",class:"github"},[...i[0]||(i[0]=[at("svg",{viewBox:"0 0 16 16",width:"22",height:"22","aria-hidden":"true"},[at("path",{fill:"currentColor",d:"M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"})],-1)])],8,Dw)):Hl("",!0)])])),64))]))}},Iw=Ks(Lw,[["__scopeId","data-v-5eb8477c"]]),Uw={};function Nw(n,e){return jt(),vn("section",null,[...e[0]||(e[0]=[_l("<h1>工作經歷</h1><h2>前端工程師 / 設計師 · 佑新行銷股份有限公司</h2><p>2023 – 2025.12</p><ul><li>負責前端頁面切版，使用 Bootstrap 5 完成多個響應式網頁專案</li><li>維護與救援公司舊專案</li><li>擔任產品 PM 與外包後端之間的溝通橋樑</li></ul><h2>行銷美編 · 格力得企業有限公司</h2><p>2019 – 2023</p><ul><li>網拍美編設計</li><li>公司庶務管理</li></ul>",7)])])}const Ow=Ks(Uw,[["render",Nw]]),Fw={};function Bw(n,e){return jt(),vn("section",null,[...e[0]||(e[0]=[_l("<h1>關於我</h1><p> 設計相關科系畢業，後來轉職前端開發，把原本的視覺設計背景延伸到網頁實作。 參加過 Amos（CSScoke）老師的課程後，目前從事前端切版工作， 主要負責將設計稿轉換為實際畫面，累積了處理版面細節與 RWD 切版的經驗。 </p><p> 現在持續在好想工作室學習，加強 JavaScript 與前端框架能力， 也開始接觸測試、I/O 設計等軟體工程觀念，並透過《Code Complete》 等書籍理解可讀性與可維護性的重要。最近也在練習把 AI 工具加入開發流程， 先寫規格與計劃、再搭配 AI 實作小工具，思考從需求到完成的完整流程。 </p><h2>技能</h2><ul><li><strong>HTML / CSS / Sass</strong>：熟悉 RWD、Flex 佈局與語意化 HTML， 使用 Sass 進行樣式模組化管理。 </li><li><strong>JavaScript (ES6)</strong>：具備前端邏輯與資料處理能力， 曾實作表單、狀態處理與資料呈現。 </li><li><strong>Vue 3 / Vite / Pinia</strong>：SPA 元件化開發與狀態管理， 實作過產品列表、優惠券邏輯與 API 串接。 </li><li><strong>React</strong>：開發電商專案，實作商品列表、搜尋、分類篩選與圖表資料呈現。 </li><li><strong>Nuxt</strong>：開發含會員註冊、資料編輯與訂單紀錄的網站專案。 </li><li><strong>AI-assisted Development</strong>：以規格文件搭配 AI 協作， 練習從構想到實作的開發流程。 </li></ul><h2>目前狀態</h2><p>尋找前端開發者職位中（台灣 / 遠端皆可）。</p>",7)])])}const zw=Ks(Fw,[["render",Bw]]),Hw={},Vw={class:"contact"};function kw(n,e){return jt(),vn("section",Vw,[...e[0]||(e[0]=[_l('<h1 data-v-98e30aed>聯絡我</h1><p class="intro" data-v-98e30aed> 如果您對我的作品感興趣，或者有任何問題，歡迎透過以下方式與我聯絡。 </p><ul class="list" data-v-98e30aed><li data-v-98e30aed><a href="tel:0932885689" data-v-98e30aed><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" data-v-98e30aed><path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" data-v-98e30aed></path></svg><span data-v-98e30aed>0932-885-689</span></a></li><li data-v-98e30aed><a href="mailto:d6200121a@gmail.com" data-v-98e30aed><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" data-v-98e30aed><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" data-v-98e30aed></path></svg><span data-v-98e30aed>d6200121a@gmail.com</span></a></li><li data-v-98e30aed><a href="https://www.linkedin.com/" target="_blank" rel="noopener" data-v-98e30aed><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" data-v-98e30aed><path fill="currentColor" d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10.5H5.67v7.84h2.67ZM7 9.34a1.55 1.55 0 1 0 0-3.09 1.55 1.55 0 0 0 0 3.1Zm11.34 9V13.9c0-2.48-1.32-3.63-3.09-3.63-1.43 0-2.07.79-2.43 1.35V10.5h-2.67c.04.75 0 7.84 0 7.84h2.67v-4.38c0-.24.02-.48.09-.65.19-.48.63-.97 1.37-.97.97 0 1.36.74 1.36 1.82v4.18h2.7Z" data-v-98e30aed></path></svg><span data-v-98e30aed>LinkedIn 個人檔案</span></a></li><li data-v-98e30aed><a href="https://github.com/fabio7621" target="_blank" rel="noopener" data-v-98e30aed><svg viewBox="0 0 16 16" width="22" height="22" aria-hidden="true" data-v-98e30aed><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" data-v-98e30aed></path></svg><span data-v-98e30aed>GitHub 個人檔案</span></a></li><li data-v-98e30aed><a href="https://line.me/ti/p/~vida0701" target="_blank" rel="noopener" data-v-98e30aed><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" data-v-98e30aed><path fill="currentColor" d="M12 3C6.48 3 2 6.58 2 11c0 4 3.58 7.34 8.4 7.94.33.07.78.22.9.5.1.26.07.65.03.91l-.14.86c-.04.26-.2 1 .9.55s5.95-3.5 8.12-6a6.9 6.9 0 0 0 1.79-4.76C22 6.58 17.52 3 12 3Zm-4.24 9.43H5.83a.27.27 0 0 1-.27-.27V8.34c0-.15.12-.27.27-.27s.27.12.27.27v3.56h1.66c.15 0 .27.12.27.27s-.12.26-.27.26Zm1.18-.27c0 .15-.12.27-.27.27a.27.27 0 0 1-.27-.27V8.34c0-.15.12-.27.27-.27s.27.12.27.27v3.82Zm4.46 0c0 .12-.08.22-.19.25l-.08.02a.27.27 0 0 1-.22-.11L11 9.68v2.48c0 .15-.12.27-.27.27a.27.27 0 0 1-.27-.27V8.34c0-.11.08-.22.19-.25.03-.01.05-.02.08-.02.08 0 .17.04.22.11l1.9 2.64V8.34c0-.15.12-.27.27-.27s.27.12.27.27v3.82Zm3-2.18c.15 0 .27.12.27.27s-.12.27-.27.27h-1.66v1.05h1.66c.15 0 .27.12.27.27s-.12.26-.27.26h-1.93a.27.27 0 0 1-.27-.26V8.34c0-.15.12-.27.27-.27h1.93c.15 0 .27.12.27.27s-.12.27-.27.27h-1.66v1.05h1.66Z" data-v-98e30aed></path></svg><span data-v-98e30aed>LINE ID: vida0701</span></a></li></ul>',3)])])}const Gw=Ks(Hw,[["render",kw],["__scopeId","data-v-98e30aed"]]),Ww={1:"/",2:"/skills",3:"/projects",4:"/experience",5:"/about",6:"/contact"},Xw=[{path:"/",component:gw,meta:{face:1}},{path:"/skills",component:Sw,meta:{face:2}},{path:"/projects",component:Iw,meta:{face:3}},{path:"/experience",component:Ow,meta:{face:4}},{path:"/about",component:zw,meta:{face:5}},{path:"/contact",component:Gw,meta:{face:6}}],qw=fw({history:G1(),routes:Xw}),Yw={class:"nav-buttons"},Kw=["disabled"],jw={class:"face-indicator"},$w=["disabled"],Zw={__name:"NavButtons",setup(n){const e=Rg(),t=hw(),i=dw();return tr(()=>e.currentFace,r=>{const s=Ww[r];s&&i.path!==s&&t.push(s)}),tr(()=>i.meta.face,r=>{r&&r!==e.currentFace&&e.goToFace(r)},{immediate:!0}),(r,s)=>(jt(),vn("div",Yw,[at("button",{disabled:gn(e).isAnimating,onClick:s[0]||(s[0]=o=>gn(e).prevFace())},"◀ B",8,Kw),at("span",jw,"★ "+ys(gn(e).currentFace)+"-0"+ys(gn(e).currentFace),1),at("button",{disabled:gn(e).isAnimating,onClick:s[1]||(s[1]=o=>gn(e).nextFace())},"A ▶",8,$w)]))}},Jw={class:"content"},Qw={__name:"App",setup(n){return(e,t)=>{const i=tv("router-view");return jt(),vn(Dn,null,[Lt(r1),at("main",Jw,[Lt(i,null,{default:Hc(({Component:r})=>[Lt($v,{name:"fade",mode:"out-in"},{default:Hc(()=>[(jt(),Hm(nv(r)))]),_:2},1024)]),_:1})]),Lt(Zw)],64)}}},ih=Sx(Qw);ih.use(Ex());ih.use(qw);ih.mount("#app");
