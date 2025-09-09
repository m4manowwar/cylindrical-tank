(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var jf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function gS(){if(l_)return wo;l_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var c_;function _S(){return c_||(c_=1,jf.exports=gS()),jf.exports}var Ce=_S(),Zf={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function vS(){if(u_)return ce;u_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function y(D,tt,_t){this.props=D,this.context=tt,this.refs=R,this.updater=_t||M}y.prototype.isReactComponent={},y.prototype.setState=function(D,tt){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,tt,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=y.prototype;function H(D,tt,_t){this.props=D,this.context=tt,this.refs=R,this.updater=_t||M}var P=H.prototype=new _;P.constructor=H,A(P,y.prototype),P.isPureReactComponent=!0;var U=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function G(D,tt,_t,mt,wt,zt){return _t=zt.ref,{$$typeof:r,type:D,key:tt,ref:_t!==void 0?_t:null,props:zt}}function $(D,tt){return G(D.type,tt,void 0,void 0,void 0,D.props)}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function w(D){var tt={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(_t){return tt[_t]})}var B=/\/+/g;function J(D,tt){return typeof D=="object"&&D!==null&&D.key!=null?w(""+D.key):tt.toString(36)}function ct(){}function dt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(ct,ct):(D.status="pending",D.then(function(tt){D.status==="pending"&&(D.status="fulfilled",D.value=tt)},function(tt){D.status==="pending"&&(D.status="rejected",D.reason=tt)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function rt(D,tt,_t,mt,wt){var zt=typeof D;(zt==="undefined"||zt==="boolean")&&(D=null);var at=!1;if(D===null)at=!0;else switch(zt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(D.$$typeof){case r:case t:at=!0;break;case g:return at=D._init,rt(at(D._payload),tt,_t,mt,wt)}}if(at)return wt=wt(D),at=mt===""?"."+J(D,0):mt,U(wt)?(_t="",at!=null&&(_t=at.replace(B,"$&/")+"/"),rt(wt,tt,_t,"",function(Yt){return Yt})):wt!=null&&(C(wt)&&(wt=$(wt,_t+(wt.key==null||D&&D.key===wt.key?"":(""+wt.key).replace(B,"$&/")+"/")+at)),tt.push(wt)),1;at=0;var ht=mt===""?".":mt+":";if(U(D))for(var bt=0;bt<D.length;bt++)mt=D[bt],zt=ht+J(mt,bt),at+=rt(mt,tt,_t,zt,wt);else if(bt=x(D),typeof bt=="function")for(D=bt.call(D),bt=0;!(mt=D.next()).done;)mt=mt.value,zt=ht+J(mt,bt++),at+=rt(mt,tt,_t,zt,wt);else if(zt==="object"){if(typeof D.then=="function")return rt(dt(D),tt,_t,mt,wt);throw tt=String(D),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return at}function N(D,tt,_t){if(D==null)return D;var mt=[],wt=0;return rt(D,mt,"","",function(zt){return tt.call(_t,zt,wt++)}),mt}function q(D){if(D._status===-1){var tt=D._result;tt=tt(),tt.then(function(_t){(D._status===0||D._status===-1)&&(D._status=1,D._result=_t)},function(_t){(D._status===0||D._status===-1)&&(D._status=2,D._result=_t)}),D._status===-1&&(D._status=0,D._result=tt)}if(D._status===1)return D._result.default;throw D._result}var W=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function yt(){}return ce.Children={map:N,forEach:function(D,tt,_t){N(D,function(){tt.apply(this,arguments)},_t)},count:function(D){var tt=0;return N(D,function(){tt++}),tt},toArray:function(D){return N(D,function(tt){return tt})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ce.Component=y,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=H,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ce.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},ce.cache=function(D){return function(){return D.apply(null,arguments)}},ce.cloneElement=function(D,tt,_t){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var mt=A({},D.props),wt=D.key,zt=void 0;if(tt!=null)for(at in tt.ref!==void 0&&(zt=void 0),tt.key!==void 0&&(wt=""+tt.key),tt)!V.call(tt,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&tt.ref===void 0||(mt[at]=tt[at]);var at=arguments.length-2;if(at===1)mt.children=_t;else if(1<at){for(var ht=Array(at),bt=0;bt<at;bt++)ht[bt]=arguments[bt+2];mt.children=ht}return G(D.type,wt,void 0,void 0,zt,mt)},ce.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},ce.createElement=function(D,tt,_t){var mt,wt={},zt=null;if(tt!=null)for(mt in tt.key!==void 0&&(zt=""+tt.key),tt)V.call(tt,mt)&&mt!=="key"&&mt!=="__self"&&mt!=="__source"&&(wt[mt]=tt[mt]);var at=arguments.length-2;if(at===1)wt.children=_t;else if(1<at){for(var ht=Array(at),bt=0;bt<at;bt++)ht[bt]=arguments[bt+2];wt.children=ht}if(D&&D.defaultProps)for(mt in at=D.defaultProps,at)wt[mt]===void 0&&(wt[mt]=at[mt]);return G(D,zt,void 0,void 0,null,wt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(D){return{$$typeof:d,render:D}},ce.isValidElement=C,ce.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:q}},ce.memo=function(D,tt){return{$$typeof:p,type:D,compare:tt===void 0?null:tt}},ce.startTransition=function(D){var tt=z.T,_t={};z.T=_t;try{var mt=D(),wt=z.S;wt!==null&&wt(_t,mt),typeof mt=="object"&&mt!==null&&typeof mt.then=="function"&&mt.then(yt,W)}catch(zt){W(zt)}finally{z.T=tt}},ce.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ce.use=function(D){return z.H.use(D)},ce.useActionState=function(D,tt,_t){return z.H.useActionState(D,tt,_t)},ce.useCallback=function(D,tt){return z.H.useCallback(D,tt)},ce.useContext=function(D){return z.H.useContext(D)},ce.useDebugValue=function(){},ce.useDeferredValue=function(D,tt){return z.H.useDeferredValue(D,tt)},ce.useEffect=function(D,tt,_t){var mt=z.H;if(typeof _t=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return mt.useEffect(D,tt)},ce.useId=function(){return z.H.useId()},ce.useImperativeHandle=function(D,tt,_t){return z.H.useImperativeHandle(D,tt,_t)},ce.useInsertionEffect=function(D,tt){return z.H.useInsertionEffect(D,tt)},ce.useLayoutEffect=function(D,tt){return z.H.useLayoutEffect(D,tt)},ce.useMemo=function(D,tt){return z.H.useMemo(D,tt)},ce.useOptimistic=function(D,tt){return z.H.useOptimistic(D,tt)},ce.useReducer=function(D,tt,_t){return z.H.useReducer(D,tt,_t)},ce.useRef=function(D){return z.H.useRef(D)},ce.useState=function(D){return z.H.useState(D)},ce.useSyncExternalStore=function(D,tt,_t){return z.H.useSyncExternalStore(D,tt,_t)},ce.useTransition=function(){return z.H.useTransition()},ce.version="19.1.1",ce}var f_;function Ed(){return f_||(f_=1,Zf.exports=vS()),Zf.exports}var Ln=Ed(),Kf={exports:{}},Co={},Qf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function xS(){return h_||(h_=1,(function(r){function t(N,q){var W=N.length;N.push(q);t:for(;0<W;){var yt=W-1>>>1,D=N[yt];if(0<l(D,q))N[yt]=q,N[W]=D,W=yt;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var q=N[0],W=N.pop();if(W!==q){N[0]=W;t:for(var yt=0,D=N.length,tt=D>>>1;yt<tt;){var _t=2*(yt+1)-1,mt=N[_t],wt=_t+1,zt=N[wt];if(0>l(mt,W))wt<D&&0>l(zt,mt)?(N[yt]=zt,N[wt]=W,yt=wt):(N[yt]=mt,N[_t]=W,yt=_t);else if(wt<D&&0>l(zt,W))N[yt]=zt,N[wt]=W,yt=wt;else break t}}return q}function l(N,q){var W=N.sortIndex-q.sortIndex;return W!==0?W:N.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,x=3,M=!1,A=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(N){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=N)s(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function z(N){if(R=!1,U(N),!A)if(i(m)!==null)A=!0,V||(V=!0,J());else{var q=i(p);q!==null&&rt(z,q.startTime-N)}}var V=!1,G=-1,$=5,C=-1;function w(){return y?!0:!(r.unstable_now()-C<$)}function B(){if(y=!1,V){var N=r.unstable_now();C=N;var q=!0;try{t:{A=!1,R&&(R=!1,H(G),G=-1),M=!0;var W=x;try{e:{for(U(N),v=i(m);v!==null&&!(v.expirationTime>N&&w());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,x=v.priorityLevel;var D=yt(v.expirationTime<=N);if(N=r.unstable_now(),typeof D=="function"){v.callback=D,U(N),q=!0;break e}v===i(m)&&s(m),U(N)}else s(m);v=i(m)}if(v!==null)q=!0;else{var tt=i(p);tt!==null&&rt(z,tt.startTime-N),q=!1}}break t}finally{v=null,x=W,M=!1}q=void 0}}finally{q?J():V=!1}}}var J;if(typeof P=="function")J=function(){P(B)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,dt=ct.port2;ct.port1.onmessage=B,J=function(){dt.postMessage(null)}}else J=function(){_(B,0)};function rt(N,q){G=_(function(){N(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(N){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var W=x;x=q;try{return N()}finally{x=W}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=x;x=N;try{return q()}finally{x=W}},r.unstable_scheduleCallback=function(N,q,W){var yt=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?yt+W:yt):W=yt,N){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=W+D,N={id:g++,callback:q,priorityLevel:N,startTime:W,expirationTime:D,sortIndex:-1},W>yt?(N.sortIndex=W,t(p,N),i(m)===null&&N===i(p)&&(R?(H(G),G=-1):R=!0,rt(z,W-yt))):(N.sortIndex=D,t(m,N),A||M||(A=!0,V||(V=!0,J()))),N},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(N){var q=x;return function(){var W=x;x=q;try{return N.apply(this,arguments)}finally{x=W}}}})(Jf)),Jf}var d_;function SS(){return d_||(d_=1,Qf.exports=xS()),Qf.exports}var $f={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function yS(){if(p_)return Cn;p_=1;var r=Ed();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Cn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.1.1",Cn}var m_;function MS(){if(m_)return $f.exports;m_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),$f.exports=yS(),$f.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function ES(){if(g_)return Co;g_=1;var r=SS(),t=Ed(),i=MS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===o)return d(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,o=f;break}if(T===o){S=!0,o=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=c;break}if(T===o){S=!0,o=f,a=c;break}T=T.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case z:return"Suspense";case V:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case P:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var rt=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},yt=[],D=-1;function tt(e){return{current:e}}function _t(e){0>D||(e.current=yt[D],yt[D]=null,D--)}function mt(e,n){D++,yt[D]=e.current,e.current=n}var wt=tt(null),zt=tt(null),at=tt(null),ht=tt(null);function bt(e,n){switch(mt(at,n),mt(zt,e),mt(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ig(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ig(n),e=Bg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_t(wt),mt(wt,e)}function Yt(){_t(wt),_t(zt),_t(at)}function Ht(e){e.memoizedState!==null&&mt(ht,e);var n=wt.current,a=Bg(n,e.type);n!==a&&(mt(zt,e),mt(wt,a))}function Qt(e){zt.current===e&&(_t(wt),_t(zt)),ht.current===e&&(_t(ht),Eo._currentValue=W)}var Ze=Object.prototype.hasOwnProperty,I=r.unstable_scheduleCallback,Ae=r.unstable_cancelCallback,ae=r.unstable_shouldYield,$t=r.unstable_requestPaint,It=r.unstable_now,Ne=r.unstable_getCurrentPriorityLevel,Gt=r.unstable_ImmediatePriority,re=r.unstable_UserBlockingPriority,Ve=r.unstable_NormalPriority,ke=r.unstable_LowPriority,L=r.unstable_IdlePriority,E=r.log,F=r.unstable_setDisableYieldValue,K=null,nt=null;function Z(e){if(typeof E=="function"&&F(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(K,e)}catch{}}var Mt=Math.clz32?Math.clz32:Bt,vt=Math.log,Ct=Math.LN2;function Bt(e){return e>>>=0,e===0?32:31-(vt(e)/Ct|0)|0}var Et=256,Nt=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=Zt(o):(S&=T,S!==0?c=Zt(S):a||(a=T&~e,a!==0&&(c=Zt(a))))):(T=o&~f,T!==0?c=Zt(T):S!==0?c=Zt(S):a||(a=o&~e,a!==0&&(c=Zt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ut(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function Rt(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function Dt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ft(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,n,a,o,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,O=e.expirationTimes,it=e.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-Mt(a),xt=1<<pt;T[pt]=0,O[pt]=-1;var ot=it[pt];if(ot!==null)for(it[pt]=null,pt=0;pt<ot.length;pt++){var lt=ot[pt];lt!==null&&(lt.lane&=-536870913)}a&=~xt}o!==0&&St(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function St(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Mt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Xt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Mt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function se(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ye(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:n_(e.type))}function fi(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var cn=Math.random().toString(36).slice(2),un="__reactFiber$"+cn,Ke="__reactProps$"+cn,Ti="__reactContainer$"+cn,As="__reactEvents$"+cn,Zo="__reactListeners$"+cn,Rs="__reactHandles$"+cn,Or="__reactResources$"+cn,bi="__reactMarker$"+cn;function ws(e){delete e[un],delete e[Ke],delete e[As],delete e[Zo],delete e[Rs]}function Hi(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ti]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Gg(e);e!==null;){if(a=e[un])return a;e=Gg(e)}return n}e=a,a=e.parentNode}return null}function ca(e){if(e=e[un]||e[Ti]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ua(e){var n=e[Or];return n||(n=e[Or]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[bi]=!0}var Ko=new Set,Qo={};function b(e,n){Y(e,n),Y(e+"Capture",n)}function Y(e,n){for(Qo[e]=n,e=0;e<n.length;e++)Ko.add(n[e])}var ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ft={},Q={};function At(e){return Ze.call(Q,e)?!0:Ze.call(ft,e)?!1:ut.test(e)?Q[e]=!0:(ft[e]=!0,!1)}function Lt(e,n,a){if(At(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Vt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Jt,ee;function qt(e){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+ee}var fe=!1;function Ee(e,n){if(!e||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(lt){var ot=lt}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(lt){ot=lt}e.call(xt.prototype)}}else{try{throw Error()}catch(lt){ot=lt}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(lt){if(lt&&ot&&typeof lt.stack=="string")return[lt.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var O=S.split(`
`),it=T.split(`
`);for(c=o=0;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(o===O.length||c===it.length)for(o=O.length-1,c=it.length-1;1<=o&&0<=c&&O[o]!==it[c];)c--;for(;1<=o&&0<=c;o--,c--)if(O[o]!==it[c]){if(o!==1||c!==1)do if(o--,c--,0>c||O[o]!==it[c]){var pt=`
`+O[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=c);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function Ye(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return qt("Activity");default:return""}}function Oe(e){try{var n="";do n+=Ye(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function We(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ge(e){e._valueTracker||(e._valueTracker=We(e))}function An(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function hi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nn=/[\n"\\]/g;function gn(e){return e.replace(Nn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(e,n,a,o,c,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,S,he(n)):a!=null?Rn(e,S,he(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+he(T):e.removeAttribute("name")}function On(e,n,a,o,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Rn(e,n,a){n==="number"&&hi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qe(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function Cs(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(rt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var dv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Id(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||dv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Bd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Id(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Id(e,f,n[f])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(e){return mv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var qc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Us=null;function zd(e){var n=ca(e);if(n&&(e=n.stateNode)){var a=e[Ke]||null;t:switch(e=n.stateNode,n.type){case"input":if(He(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Ke]||null;if(!c)throw Error(s(90));He(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&An(o)}break t;case"textarea":yn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(e,!!a.multiple,n,!1)}}}var Zc=!1;function Fd(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var o=e(n);return o}finally{if(Zc=!1,(Ds!==null||Us!==null)&&(Bl(),Ds&&(n=Ds,e=Us,Us=Ds=null,zd(n),e)))for(n=0;n<e.length;n++)zd(e[n])}}function Pr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Ke]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Gi)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Kc=!1}var fa=null,Qc=null,$o=null;function Hd(){if($o)return $o;var e,n=Qc,a=n.length,o,c="value"in fa?fa.value:fa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return $o=c.slice(e,1<o?1-o:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Gd(){return!1}function zn(e){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:Gd,this.isPropagationStopped=Gd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=zn(ja),Br=g({},ja,{view:0,detail:0}),gv=zn(Br),Jc,$c,zr,il=g({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Jc=e.screenX-zr.screenX,$c=e.screenY-zr.screenY):$c=Jc=0,zr=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),Vd=zn(il),_v=g({},il,{dataTransfer:0}),vv=zn(_v),xv=g({},Br,{relatedTarget:0}),tu=zn(xv),Sv=g({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=zn(Sv),Mv=g({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ev=zn(Mv),Tv=g({},ja,{data:0}),kd=zn(Tv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rv[e])?!!n[e]:!1}function eu(){return wv}var Cv=g({},Br,{key:function(e){if(e.key){var n=bv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dv=zn(Cv),Uv=g({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=zn(Uv),Lv=g({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Nv=zn(Lv),Ov=g({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=zn(Ov),Iv=g({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=zn(Iv),zv=g({},ja,{newState:0,oldState:0}),Fv=zn(zv),Hv=[9,13,27,32],nu=Gi&&"CompositionEvent"in window,Fr=null;Gi&&"documentMode"in document&&(Fr=document.documentMode);var Gv=Gi&&"TextEvent"in window&&!Fr,Wd=Gi&&(!nu||Fr&&8<Fr&&11>=Fr),Yd=" ",qd=!1;function jd(e,n){switch(e){case"keyup":return Hv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ls=!1;function Vv(e,n){switch(e){case"compositionend":return Zd(n);case"keypress":return n.which!==32?null:(qd=!0,Yd);case"textInput":return e=n.data,e===Yd&&qd?null:e;default:return null}}function kv(e,n){if(Ls)return e==="compositionend"||!nu&&jd(e,n)?(e=Hd(),$o=Qc=fa=null,Ls=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wd&&n.locale!=="ko"?null:n.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xv[e.type]:n==="textarea"}function Qd(e,n,a,o){Ds?Us?Us.push(o):Us=[o]:Ds=o,n=kl(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Hr=null,Gr=null;function Wv(e){Ug(e,0)}function al(e){var n=qa(e);if(An(n))return e}function Jd(e,n){if(e==="change")return n}var $d=!1;if(Gi){var iu;if(Gi){var au="oninput"in document;if(!au){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),au=typeof tp.oninput=="function"}iu=au}else iu=!1;$d=iu&&(!document.documentMode||9<document.documentMode)}function ep(){Hr&&(Hr.detachEvent("onpropertychange",np),Gr=Hr=null)}function np(e){if(e.propertyName==="value"&&al(Gr)){var n=[];Qd(n,Gr,e,jc(e)),Fd(Wv,n)}}function Yv(e,n,a){e==="focusin"?(ep(),Hr=n,Gr=a,Hr.attachEvent("onpropertychange",np)):e==="focusout"&&ep()}function qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Gr)}function jv(e,n){if(e==="click")return al(n)}function Zv(e,n){if(e==="input"||e==="change")return al(n)}function Kv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Kv;function Vr(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ze.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ap(e,n){var a=ip(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ip(a)}}function sp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?sp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function rp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=hi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=hi(e.document)}return n}function su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Qv=Gi&&"documentMode"in document&&11>=document.documentMode,Ns=null,ru=null,kr=null,ou=!1;function op(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Ns==null||Ns!==hi(o)||(o=Ns,"selectionStart"in o&&su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),kr&&Vr(kr,o)||(kr=o,o=kl(ru,"onSelect"),0<o.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ns)))}function Za(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Os={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},lu={},lp={};Gi&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ka(e){if(lu[e])return lu[e];if(!Os[e])return e;var n=Os[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in lp)return lu[e]=n[a];return e}var cp=Ka("animationend"),up=Ka("animationiteration"),fp=Ka("animationstart"),Jv=Ka("transitionrun"),$v=Ka("transitionstart"),tx=Ka("transitioncancel"),hp=Ka("transitionend"),dp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function di(e,n){dp.set(e,n),b(n,[e])}var pp=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var a=pp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Oe(n)},pp.set(e,n),n)}return{value:e,source:n,stack:Oe(n)}}var ni=[],Ps=0,uu=0;function sl(){for(var e=Ps,n=uu=Ps=0;n<e;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&mp(a,c,f)}}function rl(e,n,a,o){ni[Ps++]=e,ni[Ps++]=n,ni[Ps++]=a,ni[Ps++]=o,uu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function fu(e,n,a,o){return rl(e,n,a,o),ol(e)}function Is(e,n){return rl(e,null,null,n),ol(e)}function mp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Mt(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<mo)throw mo=0,vf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Bs={};function ex(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new ex(e,n,a,o)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function gp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,o,c,f){var S=0;if(o=e,typeof e=="function")hu(e)&&(S=1);else if(typeof e=="string")S=iS(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=qn(31,a,n,c),e.elementType=C,e.lanes=f,e;case A:return Qa(a.children,c,f,n);case R:S=8,c|=24;break;case y:return e=qn(12,a,n,c|2),e.elementType=y,e.lanes=f,e;case z:return e=qn(13,a,n,c),e.elementType=z,e.lanes=f,e;case V:return e=qn(19,a,n,c),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case P:S=10;break t;case H:S=9;break t;case U:S=11;break t;case G:S=14;break t;case $:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=qn(S,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function Qa(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function du(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function pu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zs=[],Fs=0,cl=null,ul=0,ii=[],ai=0,Ja=null,ki=1,Xi="";function $a(e,n){zs[Fs++]=ul,zs[Fs++]=cl,cl=e,ul=n}function _p(e,n,a){ii[ai++]=ki,ii[ai++]=Xi,ii[ai++]=Ja,Ja=e;var o=ki;e=Xi;var c=32-Mt(o)-1;o&=~(1<<c),a+=1;var f=32-Mt(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,ki=1<<32-Mt(n)+c|a<<c|o,Xi=f+e}else ki=1<<f|a<<c|o,Xi=e}function mu(e){e.return!==null&&($a(e,1),_p(e,1,0))}function gu(e){for(;e===cl;)cl=zs[--Fs],zs[Fs]=null,ul=zs[--Fs],zs[Fs]=null;for(;e===Ja;)Ja=ii[--ai],ii[ai]=null,Xi=ii[--ai],ii[ai]=null,ki=ii[--ai],ii[ai]=null}var Pn=null,Je=null,Re=!1,ts=null,Ai=!1,_u=Error(s(519));function es(e){var n=Error(s(418,""));throw Yr(ei(n,e)),_u}function vp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[Ke]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)ve(_o[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ge(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Cs(n,o.value,o.defaultValue,o.children),ge(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Pg(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Xl),n=!0):n=!1,n||es(e)}function xp(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Pn=Pn.return}}function Xr(e){if(e!==Pn)return!1;if(!Re)return xp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Of(e.type,e.memoizedProps)),a=!a),a&&Je&&es(e),xp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,Ra(e.type)?(e=zf,zf=null,Je=e):Je=n):Je=Pn?mi(e.stateNode.nextSibling):null;return!0}function Wr(){Je=Pn=null,Re=!1}function Sp(){var e=ts;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),ts=null),e}function Yr(e){ts===null?ts=[e]:ts.push(e)}var vu=tt(null),ns=null,Wi=null;function ha(e,n,a){mt(vu,n._currentValue),n._currentValue=a}function Yi(e){e._currentValue=vu.current,_t(vu)}function xu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),xu(f.return,a,e),o||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),xu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function qr(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var T=c.type;Yn(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===ht.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Eo):e=[Eo])}c=c.return}e!==null&&Su(n,e,a,o),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function is(e){ns=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return yp(ns,e)}function hl(e,n){return ns===null&&is(e),yp(e,n)}function yp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(s(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var nx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ix=r.unstable_scheduleCallback,ax=r.unstable_NormalPriority,fn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new nx,data:new Map,refCount:0}}function jr(e){e.refCount--,e.refCount===0&&ix(ax,function(){e.controller.abort()})}var Zr=null,Mu=0,Hs=0,Gs=null;function sx(e,n){if(Zr===null){var a=Zr=[];Mu=0,Hs=bf(),Gs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Mu++,n.then(Mp,Mp),n}function Mp(){if(--Mu===0&&Zr!==null){Gs!==null&&(Gs.status="fulfilled");var e=Zr;Zr=null,Hs=0,Gs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function rx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Ep=N.S;N.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&sx(e,n),Ep!==null&&Ep(e,n)};var as=tt(null);function Eu(){var e=as.current;return e!==null?e:Xe.pooledCache}function dl(e,n){n===null?mt(as,as.current):mt(as,n.pool)}function Tp(){var e=Eu();return e===null?null:{parent:fn._currentValue,pool:e}}var Kr=Error(s(460)),bp=Error(s(474)),pl=Error(s(542)),Tu={then:function(){}};function Ap(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ml(){}function Rp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ml,ml),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cp(e),e;default:if(typeof n.status=="string")n.then(ml,ml);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cp(e),e}throw Qr=n,Kr}}var Qr=null;function wp(){if(Qr===null)throw Error(s(459));var e=Qr;return Qr=null,e}function Cp(e){if(e===Kr||e===pl)throw Error(s(483))}var da=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ol(e),mp(e,null,a),n}return rl(e,o,n,a),ol(e)}function Jr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xt(e,a)}}function Ru(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var wu=!1;function $r(){if(wu){var e=Gs;if(e!==null)throw e}}function to(e,n,a,o){wu=!1;var c=e.updateQueue;da=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var O=T,it=O.next;O.next=null,S===null?f=it:S.next=it,S=O;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,T=pt.lastBaseUpdate,T!==S&&(T===null?pt.firstBaseUpdate=it:T.next=it,pt.lastBaseUpdate=O))}if(f!==null){var xt=c.baseState;S=0,pt=it=O=null,T=f;do{var ot=T.lane&-536870913,lt=ot!==T.lane;if(lt?(Se&ot)===ot:(o&ot)===ot){ot!==0&&ot===Hs&&(wu=!0),pt!==null&&(pt=pt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ie=e,te=T;ot=n;var Be=a;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){xt=ie.call(Be,xt,ot);break t}xt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,ot=typeof ie=="function"?ie.call(Be,xt,ot):ie,ot==null)break t;xt=g({},xt,ot);break t;case 2:da=!0}}ot=T.callback,ot!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[ot]:lt.push(ot))}else lt={lane:ot,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pt===null?(it=pt=lt,O=xt):pt=pt.next=lt,S|=ot;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);pt===null&&(O=xt),c.baseState=O,c.firstBaseUpdate=it,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),Ea|=S,e.lanes=S,e.memoizedState=xt}}function Dp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Up(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Dp(a[e],n)}var Vs=tt(null),gl=tt(0);function Lp(e,n){e=$i,mt(gl,e),mt(Vs,n),$i=e|n.baseLanes}function Cu(){mt(gl,$i),mt(Vs,Vs.current)}function Du(){$i=gl.current,_t(Vs),_t(gl)}var ga=0,pe=null,Pe=null,rn=null,_l=!1,ks=!1,ss=!1,vl=0,eo=0,Xs=null,ox=0;function nn(){throw Error(s(321))}function Uu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Lu(e,n,a,o,c,f){return ga=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?mm:gm,ss=!1,f=a(o,c),ss=!1,ks&&(f=Op(n,a,o,c)),Np(e),f}function Np(e){N.H=Tl;var n=Pe!==null&&Pe.next!==null;if(ga=0,rn=Pe=pe=null,_l=!1,eo=0,Xs=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&fl(e)&&(_n=!0))}function Op(e,n,a,o){pe=e;var c=0;do{if(ks&&(Xs=null),eo=0,ks=!1,25<=c)throw Error(s(301));if(c+=1,rn=Pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=px,f=n(a,o)}while(ks);return f}function lx(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?no(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(pe.flags|=1024),n}function Nu(){var e=vl!==0;return vl=0,e}function Ou(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}ga=0,rn=Pe=pe=null,ks=!1,eo=vl=0,Xs=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?pe.memoizedState=rn=e:rn=rn.next=e,rn}function on(){if(Pe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=rn===null?pe.memoizedState:rn.next;if(n!==null)rn=n,Pe=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},rn===null?pe.memoizedState=rn=e:rn=rn.next=e}return rn}function Iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var n=eo;return eo+=1,Xs===null&&(Xs=[]),e=Rp(Xs,e,n),n=pe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?mm:gm),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===P)return wn(e)}throw Error(s(438,String(e)))}function Bu(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Iu(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=on();return zu(n,Pe,e)}function zu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=S=null,O=null,it=n,pt=!1;do{var xt=it.lane&-536870913;if(xt!==it.lane?(Se&xt)===xt:(ga&xt)===xt){var ot=it.revertLane;if(ot===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),xt===Hs&&(pt=!0);else if((ga&ot)===ot){it=it.next,ot===Hs&&(pt=!0);continue}else xt={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},O===null?(T=O=xt,S=f):O=O.next=xt,pe.lanes|=ot,Ea|=ot;xt=it.action,ss&&a(f,xt),f=it.hasEagerState?it.eagerState:a(f,xt)}else ot={lane:xt,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},O===null?(T=O=ot,S=f):O=O.next=ot,pe.lanes|=xt,Ea|=xt;it=it.next}while(it!==null&&it!==n);if(O===null?S=f:O.next=T,!Yn(f,e.memoizedState)&&(_n=!0,pt&&(a=Gs,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=O,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Fu(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Yn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Pp(e,n,a){var o=pe,c=on(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Yn((Pe||c).memoizedState,a);S&&(c.memoizedState=a,_n=!0),c=c.queue;var T=zp.bind(null,o,c,e);if(io(2048,8,T,[e]),c.getSnapshot!==n||S||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Ws(9,yl(),Bp.bind(null,o,c,a,n),null),Xe===null)throw Error(s(349));f||(ga&124)!==0||Ip(o,n,a)}return a}function Ip(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Iu(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Bp(e,n,a,o){n.value=a,n.getSnapshot=o,Fp(n)&&Hp(e)}function zp(e,n,a){return a(function(){Fp(n)&&Hp(e)})}function Fp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Hp(e){var n=Is(e,2);n!==null&&Jn(n,e,2)}function Hu(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),ss){Z(!0);try{a()}finally{Z(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function Gp(e,n,a,o){return e.baseState=a,zu(e,Pe,typeof o=="function"?o:qi)}function cx(e,n,a,o,c){if(El(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Vp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Vp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=N.T,S={};N.T=S;try{var T=a(c,o),O=N.S;O!==null&&O(S,T),kp(e,n,T)}catch(it){Gu(e,n,it)}finally{N.T=f}}else try{f=a(c,o),kp(e,n,f)}catch(it){Gu(e,n,it)}}function kp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Xp(e,n,o)},function(o){return Gu(e,n,o)}):Xp(e,n,a)}function Xp(e,n,a){n.status="fulfilled",n.value=a,Wp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Vp(e,a)))}function Gu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Wp(n),n=n.next;while(n!==o)}e.action=null}function Wp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Yp(e,n){return n}function qp(e,n){if(Re){var a=Xe.formState;if(a!==null){t:{var o=pe;if(Re){if(Je){e:{for(var c=Je,f=Ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=mi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Je=mi(c.nextSibling),o=c.data==="F!";break t}}es(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yp,lastRenderedState:n},a.queue=o,a=hm.bind(null,pe,o),o.dispatch=a,o=Hu(!1),f=Yu.bind(null,pe,!1,o.queue),o=Fn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=cx.bind(null,pe,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function jp(e){var n=on();return Zp(n,Pe,e)}function Zp(e,n,a){if(n=zu(e,n,Yp)[0],e=Sl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=no(n)}catch(S){throw S===Kr?pl:S}else o=n;n=on();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,Ws(9,yl(),ux.bind(null,c,a),null)),[o,f,e]}function ux(e,n){e.action=n}function Kp(e){var n=on(),a=Pe;if(a!==null)return Zp(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Ws(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Iu(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function yl(){return{destroy:void 0,resource:void 0}}function Qp(){return on().memoizedState}function Ml(e,n,a,o){var c=Fn();o=o===void 0?null:o,pe.flags|=e,c.memoizedState=Ws(1|n,yl(),a,o)}function io(e,n,a,o){var c=on();o=o===void 0?null:o;var f=c.memoizedState.inst;Pe!==null&&o!==null&&Uu(o,Pe.memoizedState.deps)?c.memoizedState=Ws(n,f,a,o):(pe.flags|=e,c.memoizedState=Ws(1|n,f,a,o))}function Jp(e,n){Ml(8390656,8,e,n)}function $p(e,n){io(2048,8,e,n)}function tm(e,n){return io(4,2,e,n)}function em(e,n){return io(4,4,e,n)}function nm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function im(e,n,a){a=a!=null?a.concat([e]):null,io(4,4,nm.bind(null,n,e),a)}function Vu(){}function am(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Uu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function sm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Uu(n,o[1]))return o[0];if(o=e(),ss){Z(!0);try{e()}finally{Z(!1)}}return a.memoizedState=[o,n],o}function ku(e,n,a){return a===void 0||(ga&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=lg(),pe.lanes|=e,Ea|=e,a)}function rm(e,n,a,o){return Yn(a,n)?a:Vs.current!==null?(e=ku(e,a,o),Yn(e,n)||(_n=!0),e):(ga&42)===0?(_n=!0,e.memoizedState=a):(e=lg(),pe.lanes|=e,Ea|=e,n)}function om(e,n,a,o,c){var f=q.p;q.p=f!==0&&8>f?f:8;var S=N.T,T={};N.T=T,Yu(e,!1,n,a);try{var O=c(),it=N.S;if(it!==null&&it(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var pt=rx(O,o);ao(e,n,pt,Qn(e))}else ao(e,n,o,Qn(e))}catch(xt){ao(e,n,{then:function(){},status:"rejected",reason:xt},Qn())}finally{q.p=f,N.T=S}}function fx(){}function Xu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=lm(e).queue;om(e,c,n,W,a===null?fx:function(){return cm(e),a(o)})}function lm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function cm(e){var n=lm(e).next.queue;ao(e,n,{},Qn())}function Wu(){return wn(Eo)}function um(){return on().memoizedState}function fm(){return on().memoizedState}function hx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=pa(a);var o=ma(n,e,a);o!==null&&(Jn(o,n,a),Jr(o,n,a)),n={cache:yu()},e.payload=n;return}n=n.return}}function dx(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)?dm(n,a):(a=fu(e,n,a,o),a!==null&&(Jn(a,e,o),pm(a,n,o)))}function hm(e,n,a){var o=Qn();ao(e,n,a,o)}function ao(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(e))dm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Yn(T,S))return rl(e,n,c,0),Xe===null&&sl(),!1}catch{}finally{}if(a=fu(e,n,c,o),a!==null)return Jn(a,e,o),pm(a,n,o),!0}return!1}function Yu(e,n,a,o){if(o={lane:2,revertLane:bf(),action:o,hasEagerState:!1,eagerState:null,next:null},El(e)){if(n)throw Error(s(479))}else n=fu(e,a,o,2),n!==null&&Jn(n,e,2)}function El(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function dm(e,n){ks=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function pm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xt(e,a)}}var Tl={readContext:wn,use:xl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},mm={readContext:wn,use:xl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,nm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(ss){Z(!0);try{e()}finally{Z(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var c=a(n);if(ss){Z(!0);try{a(n)}finally{Z(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=dx.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,a=hm.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(e,n){var a=Fn();return ku(a,e,n)},useTransition:function(){var e=Hu(!1);return e=om.bind(null,pe,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,c=Fn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(Se&124)!==0||Ip(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Jp(zp.bind(null,o,f,e),[e]),o.flags|=2048,Ws(9,yl(),Bp.bind(null,o,f,a,n),null),a},useId:function(){var e=Fn(),n=Xe.identifierPrefix;if(Re){var a=Xi,o=ki;a=(o&~(1<<32-Mt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=ox++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Wu,useFormState:qp,useActionState:qp,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Bu,useCacheRefresh:function(){return Fn().memoizedState=hx.bind(null,pe)}},gm={readContext:wn,use:xl,useCallback:am,useContext:wn,useEffect:$p,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:em,useMemo:sm,useReducer:Sl,useRef:Qp,useState:function(){return Sl(qi)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=on();return rm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Sl(qi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Pp,useId:um,useHostTransitionStatus:Wu,useFormState:jp,useActionState:jp,useOptimistic:function(e,n){var a=on();return Gp(a,Pe,e,n)},useMemoCache:Bu,useCacheRefresh:fm},px={readContext:wn,use:xl,useCallback:am,useContext:wn,useEffect:$p,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:em,useMemo:sm,useReducer:Fu,useRef:Qp,useState:function(){return Fu(qi)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=on();return Pe===null?ku(a,e,n):rm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Fu(qi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Pp,useId:um,useHostTransitionStatus:Wu,useFormState:Kp,useActionState:Kp,useOptimistic:function(e,n){var a=on();return Pe!==null?Gp(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:fm},Ys=null,so=0;function bl(e){var n=so;return so+=1,Ys===null&&(Ys=[]),Rp(Ys,e,n)}function ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _m(e){var n=e._init;return n(e._payload)}function vm(e){function n(j,k){if(e){var et=j.deletions;et===null?(j.deletions=[k],j.flags|=16):et.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function c(j,k){return j=Vi(j,k),j.index=0,j.sibling=null,j}function f(j,k,et){return j.index=et,e?(et=j.alternate,et!==null?(et=et.index,et<k?(j.flags|=67108866,k):et):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function T(j,k,et,gt){return k===null||k.tag!==6?(k=du(et,j.mode,gt),k.return=j,k):(k=c(k,et),k.return=j,k)}function O(j,k,et,gt){var kt=et.type;return kt===A?pt(j,k,et.props.children,gt,et.key):k!==null&&(k.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===$&&_m(kt)===k.type)?(k=c(k,et.props),ro(k,et),k.return=j,k):(k=ll(et.type,et.key,et.props,null,j.mode,gt),ro(k,et),k.return=j,k)}function it(j,k,et,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=pu(et,j.mode,gt),k.return=j,k):(k=c(k,et.children||[]),k.return=j,k)}function pt(j,k,et,gt,kt){return k===null||k.tag!==7?(k=Qa(et,j.mode,gt,kt),k.return=j,k):(k=c(k,et),k.return=j,k)}function xt(j,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=du(""+k,j.mode,et),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return et=ll(k.type,k.key,k.props,null,j.mode,et),ro(et,k),et.return=j,et;case M:return k=pu(k,j.mode,et),k.return=j,k;case $:var gt=k._init;return k=gt(k._payload),xt(j,k,et)}if(rt(k)||J(k))return k=Qa(k,j.mode,et,null),k.return=j,k;if(typeof k.then=="function")return xt(j,bl(k),et);if(k.$$typeof===P)return xt(j,hl(j,k),et);Al(j,k)}return null}function ot(j,k,et,gt){var kt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return kt!==null?null:T(j,k,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case x:return et.key===kt?O(j,k,et,gt):null;case M:return et.key===kt?it(j,k,et,gt):null;case $:return kt=et._init,et=kt(et._payload),ot(j,k,et,gt)}if(rt(et)||J(et))return kt!==null?null:pt(j,k,et,gt,null);if(typeof et.then=="function")return ot(j,k,bl(et),gt);if(et.$$typeof===P)return ot(j,k,hl(j,et),gt);Al(j,et)}return null}function lt(j,k,et,gt,kt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get(et)||null,T(k,j,""+gt,kt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case x:return j=j.get(gt.key===null?et:gt.key)||null,O(k,j,gt,kt);case M:return j=j.get(gt.key===null?et:gt.key)||null,it(k,j,gt,kt);case $:var me=gt._init;return gt=me(gt._payload),lt(j,k,et,gt,kt)}if(rt(gt)||J(gt))return j=j.get(et)||null,pt(k,j,gt,kt,null);if(typeof gt.then=="function")return lt(j,k,et,bl(gt),kt);if(gt.$$typeof===P)return lt(j,k,et,hl(k,gt),kt);Al(k,gt)}return null}function ie(j,k,et,gt){for(var kt=null,me=null,jt=k,ne=k=0,xn=null;jt!==null&&ne<et.length;ne++){jt.index>ne?(xn=jt,jt=null):xn=jt.sibling;var Te=ot(j,jt,et[ne],gt);if(Te===null){jt===null&&(jt=xn);break}e&&jt&&Te.alternate===null&&n(j,jt),k=f(Te,k,ne),me===null?kt=Te:me.sibling=Te,me=Te,jt=xn}if(ne===et.length)return a(j,jt),Re&&$a(j,ne),kt;if(jt===null){for(;ne<et.length;ne++)jt=xt(j,et[ne],gt),jt!==null&&(k=f(jt,k,ne),me===null?kt=jt:me.sibling=jt,me=jt);return Re&&$a(j,ne),kt}for(jt=o(jt);ne<et.length;ne++)xn=lt(jt,j,ne,et[ne],gt),xn!==null&&(e&&xn.alternate!==null&&jt.delete(xn.key===null?ne:xn.key),k=f(xn,k,ne),me===null?kt=xn:me.sibling=xn,me=xn);return e&&jt.forEach(function(La){return n(j,La)}),Re&&$a(j,ne),kt}function te(j,k,et,gt){if(et==null)throw Error(s(151));for(var kt=null,me=null,jt=k,ne=k=0,xn=null,Te=et.next();jt!==null&&!Te.done;ne++,Te=et.next()){jt.index>ne?(xn=jt,jt=null):xn=jt.sibling;var La=ot(j,jt,Te.value,gt);if(La===null){jt===null&&(jt=xn);break}e&&jt&&La.alternate===null&&n(j,jt),k=f(La,k,ne),me===null?kt=La:me.sibling=La,me=La,jt=xn}if(Te.done)return a(j,jt),Re&&$a(j,ne),kt;if(jt===null){for(;!Te.done;ne++,Te=et.next())Te=xt(j,Te.value,gt),Te!==null&&(k=f(Te,k,ne),me===null?kt=Te:me.sibling=Te,me=Te);return Re&&$a(j,ne),kt}for(jt=o(jt);!Te.done;ne++,Te=et.next())Te=lt(jt,j,ne,Te.value,gt),Te!==null&&(e&&Te.alternate!==null&&jt.delete(Te.key===null?ne:Te.key),k=f(Te,k,ne),me===null?kt=Te:me.sibling=Te,me=Te);return e&&jt.forEach(function(mS){return n(j,mS)}),Re&&$a(j,ne),kt}function Be(j,k,et,gt){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case x:t:{for(var kt=et.key;k!==null;){if(k.key===kt){if(kt=et.type,kt===A){if(k.tag===7){a(j,k.sibling),gt=c(k,et.props.children),gt.return=j,j=gt;break t}}else if(k.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===$&&_m(kt)===k.type){a(j,k.sibling),gt=c(k,et.props),ro(gt,et),gt.return=j,j=gt;break t}a(j,k);break}else n(j,k);k=k.sibling}et.type===A?(gt=Qa(et.props.children,j.mode,gt,et.key),gt.return=j,j=gt):(gt=ll(et.type,et.key,et.props,null,j.mode,gt),ro(gt,et),gt.return=j,j=gt)}return S(j);case M:t:{for(kt=et.key;k!==null;){if(k.key===kt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(j,k.sibling),gt=c(k,et.children||[]),gt.return=j,j=gt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}gt=pu(et,j.mode,gt),gt.return=j,j=gt}return S(j);case $:return kt=et._init,et=kt(et._payload),Be(j,k,et,gt)}if(rt(et))return ie(j,k,et,gt);if(J(et)){if(kt=J(et),typeof kt!="function")throw Error(s(150));return et=kt.call(et),te(j,k,et,gt)}if(typeof et.then=="function")return Be(j,k,bl(et),gt);if(et.$$typeof===P)return Be(j,k,hl(j,et),gt);Al(j,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(j,k.sibling),gt=c(k,et),gt.return=j,j=gt):(a(j,k),gt=du(et,j.mode,gt),gt.return=j,j=gt),S(j)):a(j,k)}return function(j,k,et,gt){try{so=0;var kt=Be(j,k,et,gt);return Ys=null,kt}catch(jt){if(jt===Kr||jt===pl)throw jt;var me=qn(29,jt,null,j.mode);return me.lanes=gt,me.return=j,me}finally{}}}var qs=vm(!0),xm=vm(!1),si=tt(null),Ri=null;function _a(e){var n=e.alternate;mt(hn,hn.current&1),mt(si,e),Ri===null&&(n===null||Vs.current!==null||n.memoizedState!==null)&&(Ri=e)}function Sm(e){if(e.tag===22){if(mt(hn,hn.current),mt(si,e),Ri===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ri=e)}}else va()}function va(){mt(hn,hn.current),mt(si,si.current)}function ji(e){_t(si),Ri===e&&(Ri=null),_t(hn)}var hn=tt(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Bf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function qu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=pa(o);c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,o),n!==null&&(Jn(n,e,o),Jr(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=pa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,o),n!==null&&(Jn(n,e,o),Jr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=pa(a);o.tag=2,n!=null&&(o.callback=n),n=ma(e,o,a),n!==null&&(Jn(n,e,a),Jr(n,e,a))}};function ym(e,n,a,o,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Vr(a,o)||!Vr(c,f):!0}function Mm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ju.enqueueReplaceState(n,n.state,null)}function rs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Em(e){wl(e)}function Tm(e){console.error(e)}function bm(e){wl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Am(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Zu(e,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Rm(e){return e=pa(e),e.tag=3,e}function wm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Am(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Am(n,a,o),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function mx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ri===null?Sf():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Tu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Mf(e,o,c)),!1;case 22:return a.flags|=65536,o===Tu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Mf(e,o,c)),!1}throw Error(s(435,a.tag))}return Mf(e,o,c),Sf(),!1}if(Re)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==_u&&(e=Error(s(422),{cause:o}),Yr(ei(e,a)))):(o!==_u&&(n=Error(s(423),{cause:o}),Yr(ei(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ei(o,a),c=Zu(e.stateNode,o,c),Ru(e,c),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:o});if(f=ei(f,a),po===null?po=[f]:po.push(f),$e!==4&&($e=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Zu(a.stateNode,o,e),Ru(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Rm(c),wm(c,e,a,o),Ru(a,c),!1}a=a.return}while(a!==null);return!1}var Cm=Error(s(461)),_n=!1;function Mn(e,n,a,o){n.child=e===null?xm(n,null,a,o):qs(n,e.child,a,o)}function Dm(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return is(n),o=Lu(e,n,a,S,f,c),T=Nu(),e!==null&&!_n?(Ou(e,n,c),Zi(e,n,c)):(Re&&T&&mu(n),n.flags|=1,Mn(e,n,o,c),n.child)}function Um(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Lm(e,n,f,o,c)):(e=ll(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!af(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vr,a(S,o)&&e.ref===n.ref)return Zi(e,n,c)}return n.flags|=1,e=Vi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Lm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Vr(f,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=f,af(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Zi(e,n,c)}return Ku(e,n,a,o,c)}function Nm(e,n,a){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Om(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Lp(n,f):Cu(),Sm(n);else return n.lanes=n.childLanes=536870912,Om(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(dl(n,f.cachePool),Lp(n,f),va(),n.memoizedState=null):(e!==null&&dl(n,null),Cu(),va());return Mn(e,n,c,a),n.child}function Om(e,n,a,o){var c=Eu();return c=c===null?null:{parent:fn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&dl(n,null),Cu(),Sm(n),e!==null&&qr(e,n,o,!0),null}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ku(e,n,a,o,c){return is(n),a=Lu(e,n,a,o,void 0,c),o=Nu(),e!==null&&!_n?(Ou(e,n,c),Zi(e,n,c)):(Re&&o&&mu(n),n.flags|=1,Mn(e,n,a,c),n.child)}function Pm(e,n,a,o,c,f){return is(n),n.updateQueue=null,a=Op(n,o,a,c),Np(e),o=Nu(),e!==null&&!_n?(Ou(e,n,f),Zi(e,n,f)):(Re&&o&&mu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Im(e,n,a,o,c){if(is(n),n.stateNode===null){var f=Bs,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},bu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Bs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(qu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&ju.enqueueReplaceState(f,f.state,null),to(n,o,f,c),$r(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,O=rs(a,T);f.props=O;var it=f.context,pt=a.contextType;S=Bs,typeof pt=="object"&&pt!==null&&(S=wn(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||it!==S)&&Mm(n,f,o,S),da=!1;var ot=n.memoizedState;f.state=ot,to(n,o,f,c),$r(),it=n.memoizedState,T||ot!==it||da?(typeof xt=="function"&&(qu(n,a,xt,o),it=n.memoizedState),(O=da||ym(n,a,O,o,ot,it,S))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=S,o=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Au(e,n),S=n.memoizedProps,pt=rs(a,S),f.props=pt,xt=n.pendingProps,ot=f.context,it=a.contextType,O=Bs,typeof it=="object"&&it!==null&&(O=wn(it)),T=a.getDerivedStateFromProps,(it=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xt||ot!==O)&&Mm(n,f,o,O),da=!1,ot=n.memoizedState,f.state=ot,to(n,o,f,c),$r();var lt=n.memoizedState;S!==xt||ot!==lt||da||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof T=="function"&&(qu(n,a,T,o),lt=n.memoizedState),(pt=da||ym(n,a,pt,o,ot,lt,O)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=O,o=pt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Dl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=qs(n,e.child,null,c),n.child=qs(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Zi(e,n,c),e}function Bm(e,n,a,o){return Wr(),n.flags|=256,Mn(e,n,a,o),n.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(e){return{baseLanes:e,cachePool:Tp()}}function $u(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function zm(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?_a(n):va(),Re){var T=Je,O;if(O=T){t:{for(O=T,T=Ai;O.nodeType!==8;){if(!T){T=null;break t}if(O=mi(O.nextSibling),O===null){T=null;break t}}T=O}T!==null?(n.memoizedState={dehydrated:T,treeContext:Ja!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},O=qn(18,null,null,0),O.stateNode=T,O.return=n,n.child=O,Pn=n,Je=null,O=!0):O=!1}O||es(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Bf(T)?n.lanes=32:n.lanes=536870912,null;ji(n)}return T=o.children,o=o.fallback,c?(va(),c=n.mode,T=Ul({mode:"hidden",children:T},c),o=Qa(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=Ju(a),c.childLanes=$u(e,S,a),n.memoizedState=Qu,o):(_a(n),tf(n,T))}if(O=e.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=ef(e,n,a)):n.memoizedState!==null?(va(),n.child=e.child,n.flags|=128,n=null):(va(),c=o.fallback,T=n.mode,o=Ul({mode:"visible",children:o.children},T),c=Qa(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,qs(n,e.child,null,a),o=n.child,o.memoizedState=Ju(a),o.childLanes=$u(e,S,a),n.memoizedState=Qu,n=c);else if(_a(n),Bf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var it=S.dgst;S=it,o=Error(s(419)),o.stack="",o.digest=S,Yr({value:o,source:null,stack:null}),n=ef(e,n,a)}else if(_n||qr(e,n,a,!1),S=(a&e.childLanes)!==0,_n||S){if(S=Xe,S!==null&&(o=a&-a,o=(o&42)!==0?1:se(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==O.retryLane))throw O.retryLane=o,Is(e,o),Jn(S,e,o),Cm;T.data==="$?"||Sf(),n=ef(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=O.treeContext,Je=mi(T.nextSibling),Pn=n,Re=!0,ts=null,Ai=!1,e!==null&&(ii[ai++]=ki,ii[ai++]=Xi,ii[ai++]=Ja,ki=e.id,Xi=e.overflow,Ja=n),n=tf(n,o.children),n.flags|=4096);return n}return c?(va(),c=o.fallback,T=n.mode,O=e.child,it=O.sibling,o=Vi(O,{mode:"hidden",children:o.children}),o.subtreeFlags=O.subtreeFlags&65011712,it!==null?c=Vi(it,c):(c=Qa(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=e.child.memoizedState,T===null?T=Ju(a):(O=T.cachePool,O!==null?(it=fn._currentValue,O=O.parent!==it?{parent:it,pool:it}:O):O=Tp(),T={baseLanes:T.baseLanes|a,cachePool:O}),c.memoizedState=T,c.childLanes=$u(e,S,a),n.memoizedState=Qu,o):(_a(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function tf(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ef(e,n,a){return qs(n,e.child,null,a),e=tf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),xu(e.return,n,a)}function nf(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Hm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Mn(e,n,o.children,a),o=hn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fm(e,a,n);else if(e.tag===19)Fm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(mt(hn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),nf(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Rl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}nf(n,!0,a,null,f);break;case"together":nf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function gx(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),ha(n,fn,e.memoizedState.cache),Wr();break;case 27:case 5:Ht(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?zm(e,n,a):(_a(n),e=Zi(e,n,a),e!==null?e.sibling:null);_a(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Hm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),mt(hn,hn.current),o)break;return null;case 22:case 23:return n.lanes=0,Nm(e,n,a);case 24:ha(n,fn,e.memoizedState.cache)}return Zi(e,n,a)}function Gm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!af(e,a)&&(n.flags&128)===0)return _n=!1,gx(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Re&&(n.flags&1048576)!==0&&_p(n,ul,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")hu(o)?(e=rs(o,e),n.tag=1,n=Im(null,n,o,e,a)):(n.tag=0,n=Ku(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===U){n.tag=11,n=Dm(null,n,o,e,a);break t}else if(c===G){n.tag=14,n=Um(null,n,o,e,a);break t}}throw n=dt(o)||o,Error(s(306,n,""))}}return n;case 0:return Ku(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=rs(o,n.pendingProps),Im(e,n,o,c,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Au(e,n),to(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ha(n,fn,o),o!==f.cache&&Su(n,[fn],a,!0),$r(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Bm(e,n,o,a);break t}else if(o!==c){c=ei(Error(s(424)),n),Yr(c),n=Bm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=mi(e.firstChild),Pn=n,Re=!0,ts=null,Ai=!0,a=xm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Wr(),o===c){n=Zi(e,n,a);break t}Mn(e,n,o,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=Wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=Wl(at.current).createElement(a),o[un]=n,o[Ke]=e,Tn(o,a,e),sn(o),n.stateNode=o):n.memoizedState=Wg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ht(n),e===null&&Re&&(o=n.stateNode=Vg(n.type,n.pendingProps,at.current),Pn=n,Ai=!0,c=Je,Ra(n.type)?(zf=c,Je=mi(o.firstChild)):Je=c),Mn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=o=Je)&&(o=Xx(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,Pn=n,Je=mi(o.firstChild),Ai=!1,c=!0):c=!1),c||es(n)),Ht(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Of(c,f)?o=null:S!==null&&Of(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Lu(e,n,lx,null,null,a),Eo._currentValue=c),Dl(e,n),Mn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=Je)&&(a=Wx(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Pn=n,Je=null,e=!0):e=!1),e||es(n)),null;case 13:return zm(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qs(n,null,o,a):Mn(e,n,o,a),n.child;case 11:return Dm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ha(n,n.type,o.value),Mn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,is(n),c=wn(c),o=o(c),n.flags|=1,Mn(e,n,o,a),n.child;case 14:return Um(e,n,n.type,n.pendingProps,a);case 15:return Lm(e,n,n.type,n.pendingProps,a);case 19:return Hm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ul(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Vi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Nm(e,n,a);case 24:return is(n),o=wn(fn),e===null?(c=Eu(),c===null&&(c=Xe,f=yu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},bu(n),ha(n,fn,c)):((e.lanes&a)!==0&&(Au(e,n),to(n,null,null,a),$r()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ha(n,fn,o)):(o=f.cache,ha(n,fn,o),o!==c.cache&&Su(n,[fn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ki(e){e.flags|=4}function Vm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kg(n)){if(n=si.current,n!==null&&((Se&4194048)===Se?Ri!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Ri))throw Qr=Tu,bp;e.flags|=8192}}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,Qs|=n)}function oo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function _x(e,n,a){var o=n.pendingProps;switch(gu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yi(fn),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Sp())),je(n),null;case 26:return a=n.memoizedState,e===null?(Ki(n),a!==null?(je(n),Vm(n,a)):(je(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ki(n),je(n),Vm(n,a)):(je(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ki(n),je(n),n.flags&=-16777217),null;case 27:Qt(n),a=at.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}e=wt.current,Xr(n)?vp(n):(e=Vg(c,o,a),n.stateNode=e,Ki(n))}return je(n),null;case 5:if(Qt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(e=wt.current,Xr(n))vp(n);else{switch(c=Wl(at.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[un]=n,e[Ke]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Tn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(n)}}return je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,Xr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Pn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Pg(e.nodeValue,a)),e||es(n)}else e=Wl(e).createTextNode(o),e[un]=n,n.stateNode=e}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[un]=n}else Wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=Sp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),je(n),null;case 4:return Yt(),e===null&&Cf(n.stateNode.containerInfo),je(n),null;case 10:return Yi(n.type),je(n),null;case 19:if(_t(hn),c=n.memoizedState,c===null)return je(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)oo(c,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,oo(c,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)gp(a,e),a=a.sibling;return mt(hn,hn.current&1|2),n.child}e=e.sibling}c.tail!==null&&It()>Pl&&(n.flags|=128,o=!0,oo(c,!1),n.lanes=4194304)}else{if(!o)if(e=Rl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),oo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return je(n),null}else 2*It()-c.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,o=!0,oo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=It(),n.sibling=null,e=hn.current,mt(hn,o?e&1|2:e&1),n):(je(n),null);case 22:case 23:return ji(n),Du(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&_t(as),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(fn),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function vx(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yi(fn),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _t(hn),null;case 4:return Yt(),null;case 10:return Yi(n.type),null;case 22:case 23:return ji(n),Du(),e!==null&&_t(as),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yi(fn),null;case 25:return null;default:return null}}function km(e,n){switch(gu(n),n.tag){case 3:Yi(fn),Yt();break;case 26:case 27:case 5:Qt(n);break;case 4:Yt();break;case 13:ji(n);break;case 19:_t(hn);break;case 10:Yi(n.type);break;case 22:case 23:ji(n),Du(),e!==null&&_t(as);break;case 24:Yi(fn)}}function lo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(T){Ge(n,n.return,T)}}function xa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var O=a,it=T;try{it()}catch(pt){Ge(c,O,pt)}}}o=o.next}while(o!==f)}}catch(pt){Ge(n,n.return,pt)}}function Xm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Up(n,a)}catch(o){Ge(e,e.return,o)}}}function Wm(e,n,a){a.props=rs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ge(e,n,c)}}function wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(e,n,c)}else a.current=null}function Ym(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ge(e,e.return,c)}}function sf(e,n,a){try{var o=e.stateNode;Fx(o,e.type,a,n),o[Ke]=n}catch(c){Ge(e,e.return,c)}}function qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function of(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xl));else if(o!==4&&(o===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(of(e,n,a),e=e.sibling;e!==null;)of(e,n,a),e=e.sibling}function Nl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}function jm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,o,a),n[un]=e,n[Ke]=a}catch(f){Ge(e,e.return,f)}}var Qi=!1,an=!1,lf=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,vn=null;function xx(e,n){if(e=e.containerInfo,Lf=Ql,e=rp(e),su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,O=-1,it=0,pt=0,xt=e,ot=null;e:for(;;){for(var lt;xt!==a||c!==0&&xt.nodeType!==3||(T=S+c),xt!==f||o!==0&&xt.nodeType!==3||(O=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(lt=xt.firstChild)!==null;)ot=xt,xt=lt;for(;;){if(xt===e)break e;if(ot===a&&++it===c&&(T=S),ot===f&&++pt===o&&(O=S),(lt=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=lt}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:e,selectionRange:a},Ql=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ie=rs(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ie,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ge(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function Km(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),o&4&&lo(5,a);break;case 1:if(Sa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var c=rs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&Xm(a),o&512&&co(a,a.return);break;case 3:if(Sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Up(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&jm(a);case 26:case 5:Sa(e,a),n===null&&o&4&&Ym(a),o&512&&co(a,a.return);break;case 12:Sa(e,a);break;case 13:Sa(e,a),o&4&&$m(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wx.bind(null,a),Yx(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||an,c=Qi;var f=an;Qi=o,(an=n)&&!f?ya(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),Qi=c,an=f}break;case 30:break;default:Sa(e,a)}}function Qm(e){var n=e.alternate;n!==null&&(e.alternate=null,Qm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ws(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Hn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)Jm(e,n,a),a=a.sibling}function Jm(e,n,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(K,a)}catch{}switch(a.tag){case 26:an||wi(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||wi(a,n);var o=qe,c=Hn;Ra(a.type)&&(qe=a.stateNode,Hn=!1),Ji(e,n,a),xo(a.stateNode),qe=o,Hn=c;break;case 5:an||wi(a,n);case 6:if(o=qe,c=Hn,qe=null,Ji(e,n,a),qe=o,Hn=c,qe!==null)if(Hn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:qe!==null&&(Hn?(e=qe,Hg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ro(e)):Hg(qe,a.stateNode));break;case 4:o=qe,c=Hn,qe=a.stateNode.containerInfo,Hn=!0,Ji(e,n,a),qe=o,Hn=c;break;case 0:case 11:case 14:case 15:an||xa(2,a,n),an||xa(4,a,n),Ji(e,n,a);break;case 1:an||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Wm(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:an=(o=an)||a.memoizedState!==null,Ji(e,n,a),an=o;break;default:Ji(e,n,a)}}function $m(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ro(e)}catch(a){Ge(n,n.return,a)}}function Sx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Zm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Zm),n;default:throw Error(s(435,e.tag))}}function cf(e,n){var a=Sx(e);n.forEach(function(o){var c=Cx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Ra(T.type)){qe=T.stateNode,Hn=!1;break t}break;case 5:qe=T.stateNode,Hn=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,Hn=!0;break t}T=T.return}if(qe===null)throw Error(s(160));Jm(f,S,c),qe=null,Hn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)tg(n,e),n=n.sibling}var pi=null;function tg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(xa(3,e,e.return),lo(3,e),xa(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(an||a===null||wi(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=pi;if(jn(n,e),Zn(e),o&512&&(an||a===null||wi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[bi]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,o,a),f[un]=e,sn(f),o=f;break t;case"link":var S=jg("link","href",c).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=jg("meta","content",c).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[un]=e,sn(f),o=f}e.stateNode=o}else Zg(c,e.type,e.stateNode);else e.stateNode=qg(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Zg(c,e.type,e.stateNode):qg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(an||a===null||wi(a,a.return)),a!==null&&o&4&&sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(an||a===null||wi(a,a.return)),e.flags&32){c=e.stateNode;try{Bn(c,"")}catch(lt){Ge(e,e.return,lt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,sf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(lf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(lt){Ge(e,e.return,lt)}}break;case 3:if(jl=null,c=pi,pi=Yl(n.containerInfo),jn(n,e),pi=c,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ro(n.containerInfo)}catch(lt){Ge(e,e.return,lt)}lf&&(lf=!1,eg(e));break;case 4:o=pi,pi=Yl(e.stateNode.containerInfo),jn(n,e),Zn(e),pi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(mf=It()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cf(e,o)));break;case 22:c=e.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,it=Qi,pt=an;if(Qi=it||c,an=pt||O,jn(n,e),an=pt,Qi=it,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||Qi||an||os(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=O.stateNode;var xt=O.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;T.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(lt){Ge(O,O.return,lt)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(lt){Ge(O,O.return,lt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,cf(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cf(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(qm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=rf(e);Nl(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Bn(S,""),a.flags&=-33);var T=rf(e);Nl(e,T,S);break;case 3:case 4:var O=a.stateNode.containerInfo,it=rf(e);of(e,it,O);break;default:throw Error(s(161))}}catch(pt){Ge(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Km(e,n.alternate,n),n=n.sibling}function os(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),os(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Wm(n,n.return,a),os(n);break;case 27:xo(n.stateNode);case 26:case 5:wi(n,n.return),os(n);break;case 22:n.memoizedState===null&&os(n);break;case 30:os(n);break;default:os(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ya(c,f,a),lo(4,f);break;case 1:if(ya(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(it){Ge(o,o.return,it)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)Dp(O[c],T)}catch(it){Ge(o,o.return,it)}}a&&S&64&&Xm(f),co(f,f.return);break;case 27:jm(f);case 26:case 5:ya(c,f,a),a&&o===null&&S&4&&Ym(f),co(f,f.return);break;case 12:ya(c,f,a);break;case 13:ya(c,f,a),a&&S&4&&$m(c,f);break;case 22:f.memoizedState===null&&ya(c,f,a),co(f,f.return);break;case 30:break;default:ya(c,f,a)}n=n.sibling}}function uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jr(a))}function ff(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&jr(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ng(e,n,a,o),n=n.sibling}function ng(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),c&2048&&lo(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&jr(e)));break;case 12:if(c&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Ge(n,n.return,O)}}else Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):uo(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,js(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&uf(S,n);break;case 24:Ci(e,n,a,o),c&2048&&ff(n.alternate,n);break;default:Ci(e,n,a,o)}}function js(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,T=a,O=o,it=S.flags;switch(S.tag){case 0:case 11:case 15:js(f,S,T,O,c),lo(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?js(f,S,T,O,c):uo(f,S):(pt._visibility|=2,js(f,S,T,O,c)),c&&it&2048&&uf(S.alternate,S);break;case 24:js(f,S,T,O,c),c&&it&2048&&ff(S.alternate,S);break;default:js(f,S,T,O,c)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:uo(a,o),c&2048&&uf(o.alternate,o);break;case 24:uo(a,o),c&2048&&ff(o.alternate,o);break;default:uo(a,o)}n=n.sibling}}var fo=8192;function Zs(e){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)ig(e),e=e.sibling}function ig(e){switch(e.tag){case 26:Zs(e),e.flags&fo&&e.memoizedState!==null&&sS(pi,e.memoizedState,e.memoizedProps);break;case 5:Zs(e);break;case 3:case 4:var n=pi;pi=Yl(e.stateNode.containerInfo),Zs(e),pi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=fo,fo=16777216,Zs(e),fo=n):Zs(e));break;default:Zs(e)}}function ag(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,rg(o,e)}ag(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sg(e),e=e.sibling}function sg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&xa(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):ho(e);break;default:ho(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,rg(o,e)}ag(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function rg(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:jr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var c=o.sibling,f=o.return;if(Qm(o),o===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var yx={getCacheForType:function(e){var n=wn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Mx=typeof WeakMap=="function"?WeakMap:Map,De=0,Xe=null,_e=null,Se=0,Ue=0,Kn=null,Ma=!1,Ks=!1,hf=!1,$i=0,$e=0,Ea=0,ls=0,df=0,ri=0,Qs=0,po=null,Gn=null,pf=!1,mf=0,Pl=1/0,Il=null,Ta=null,En=0,ba=null,Js=null,$s=0,gf=0,_f=null,og=null,mo=0,vf=null;function Qn(){if((De&2)!==0&&Se!==0)return Se&-Se;if(N.T!==null){var e=Hs;return e!==0?e:bf()}return ye()}function lg(){ri===0&&(ri=(Se&536870912)===0||Re?X():536870912);var e=si.current;return e!==null&&(e.flags|=32),ri}function Jn(e,n,a){(e===Xe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(tr(e,0),Aa(e,Se,ri,!1)),Ft(e,a),((De&2)===0||e!==Xe)&&(e===Xe&&((De&2)===0&&(ls|=a),$e===4&&Aa(e,Se,ri,!1)),Di(e))}function cg(e,n,a){if((De&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ut(e,n),c=o?bx(e,n):yf(e,n,!0),f=o;do{if(c===0){Ks&&!o&&Aa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ex(a)){c=yf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;c=po;var O=T.current.memoizedState.isDehydrated;if(O&&(tr(T,S).flags|=256),S=yf(T,S,!1),S!==2){if(hf&&!O){T.errorRecoveryDisabledLanes|=f,ls|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){tr(e,0),Aa(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Aa(o,n,ri,!Ma);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=mf+300-It(),10<c)){if(Aa(o,n,ri,!Ma),Wt(o,0,!0)!==0)break t;o.timeoutHandle=zg(ug.bind(null,o,a,Gn,Il,pf,n,ri,ls,Qs,Ma,f,2,-0,0),c);break t}ug(o,a,Gn,Il,pf,n,ri,ls,Qs,Ma,f,0,-0,0)}}break}while(!0);Di(e)}function ug(e,n,a,o,c,f,S,T,O,it,pt,xt,ot,lt){if(e.timeoutHandle=-1,xt=n.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:aS},ig(n),xt=rS(),xt!==null)){e.cancelPendingCommit=xt(_g.bind(null,e,n,f,a,o,c,S,T,O,pt,1,ot,lt)),Aa(e,f,S,!it);return}_g(e,n,f,a,o,c,S,T,O)}function Ex(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(e,n,a,o){n&=~df,n&=~ls,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Mt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&St(e,a,n)}function Bl(){return(De&6)===0?(go(0),!1):!0}function xf(){if(_e!==null){if(Ue===0)var e=_e.return;else e=_e,Wi=ns=null,Pu(e),Ys=null,so=0,e=_e;for(;e!==null;)km(e.alternate,e),e=e.return;_e=null}}function tr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Gx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xf(),Xe=e,_e=a=Vi(e.current,null),Se=n,Ue=0,Kn=null,Ma=!1,Ks=Ut(e,n),hf=!1,Qs=ri=df=ls=Ea=$e=0,Gn=po=null,pf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Mt(o),f=1<<c;n|=e[c],o&=~f}return $i=n,sl(),a}function fg(e,n){pe=null,N.H=Tl,n===Kr||n===pl?(n=wp(),Ue=3):n===bp?(n=wp(),Ue=4):Ue=n===Cm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,_e===null&&($e=1,Cl(e,ei(n,e.current)))}function hg(){var e=N.H;return N.H=Tl,e===null?Tl:e}function dg(){var e=N.A;return N.A=yx,e}function Sf(){$e=4,Ma||(Se&4194048)!==Se&&si.current!==null||(Ks=!0),(Ea&134217727)===0&&(ls&134217727)===0||Xe===null||Aa(Xe,Se,ri,!1)}function yf(e,n,a){var o=De;De|=2;var c=hg(),f=dg();(Xe!==e||Se!==n)&&(Il=null,tr(e,n)),n=!1;var S=$e;t:do try{if(Ue!==0&&_e!==null){var T=_e,O=Kn;switch(Ue){case 8:xf(),S=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var it=Ue;if(Ue=0,Kn=null,er(e,T,O,it),a&&Ks){S=0;break t}break;default:it=Ue,Ue=0,Kn=null,er(e,T,O,it)}}Tx(),S=$e;break}catch(pt){fg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,Wi=ns=null,De=o,N.H=c,N.A=f,_e===null&&(Xe=null,Se=0,sl()),S}function Tx(){for(;_e!==null;)pg(_e)}function bx(e,n){var a=De;De|=2;var o=hg(),c=dg();Xe!==e||Se!==n?(Il=null,Pl=It()+500,tr(e,n)):Ks=Ut(e,n);t:do try{if(Ue!==0&&_e!==null){n=_e;var f=Kn;e:switch(Ue){case 1:Ue=0,Kn=null,er(e,n,f,1);break;case 2:case 9:if(Ap(f)){Ue=0,Kn=null,mg(n);break}n=function(){Ue!==2&&Ue!==9||Xe!==e||(Ue=7),Di(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Ap(f)?(Ue=0,Kn=null,mg(n)):(Ue=0,Kn=null,er(e,n,f,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var T=_e;if(!S||Kg(S)){Ue=0,Kn=null;var O=T.sibling;if(O!==null)_e=O;else{var it=T.return;it!==null?(_e=it,zl(it)):_e=null}break e}}Ue=0,Kn=null,er(e,n,f,5);break;case 6:Ue=0,Kn=null,er(e,n,f,6);break;case 8:xf(),$e=6;break t;default:throw Error(s(462))}}Ax();break}catch(pt){fg(e,pt)}while(!0);return Wi=ns=null,N.H=o,N.A=c,De=a,_e!==null?0:(Xe=null,Se=0,sl(),$e)}function Ax(){for(;_e!==null&&!ae();)pg(_e)}function pg(e){var n=Gm(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?zl(e):_e=n}function mg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Pm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Pm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Pu(n);default:km(a,n),n=_e=gp(n,$i),n=Gm(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?zl(e):_e=n}function er(e,n,a,o){Wi=ns=null,Pu(n),Ys=null,so=0;var c=n.return;try{if(mx(e,c,n,a,Se)){$e=1,Cl(e,ei(a,e.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;$e=1,Cl(e,ei(a,e.current)),_e=null;return}n.flags&32768?(Re||o===1?e=!0:Ks||(Se&536870912)!==0?e=!1:(Ma=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),gg(n,e)):zl(n)}function zl(e){var n=e;do{if((n.flags&32768)!==0){gg(n,Ma);return}e=n.return;var a=_x(n.alternate,n,$i);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);$e===0&&($e=5)}function gg(e,n){do{var a=vx(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);$e=6,_e=null}function _g(e,n,a,o,c,f,S,T,O){e.cancelPendingCommit=null;do Fl();while(En!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=uu,Tt(e,a,f,S,T,O),e===Xe&&(_e=Xe=null,Se=0),Js=n,ba=e,$s=a,gf=f,_f=c,og=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dx(Ve,function(){return Mg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,c=q.p,q.p=2,S=De,De|=4;try{xx(e,n,a)}finally{De=S,q.p=c,N.T=o}}En=1,vg(),xg(),Sg()}}function vg(){if(En===1){En=0;var e=ba,n=Js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=q.p;q.p=2;var c=De;De|=4;try{tg(n,e);var f=Nf,S=rp(e.containerInfo),T=f.focusedElem,O=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&sp(T.ownerDocument.documentElement,T)){if(O!==null&&su(T)){var it=O.start,pt=O.end;if(pt===void 0&&(pt=it),"selectionStart"in T)T.selectionStart=it,T.selectionEnd=Math.min(pt,T.value.length);else{var xt=T.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var lt=ot.getSelection(),ie=T.textContent.length,te=Math.min(O.start,ie),Be=O.end===void 0?te:Math.min(O.end,ie);!lt.extend&&te>Be&&(S=Be,Be=te,te=S);var j=ap(T,te),k=ap(T,Be);if(j&&k&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var et=xt.createRange();et.setStart(j.node,j.offset),lt.removeAllRanges(),te>Be?(lt.addRange(et),lt.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),lt.addRange(et))}}}}for(xt=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xt.length;T++){var gt=xt[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Ql=!!Lf,Nf=Lf=null}finally{De=c,q.p=o,N.T=a}}e.current=n,En=2}}function xg(){if(En===2){En=0;var e=ba,n=Js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=q.p;q.p=2;var c=De;De|=4;try{Km(e,n.alternate,n)}finally{De=c,q.p=o,N.T=a}}En=3}}function Sg(){if(En===4||En===3){En=0,$t();var e=ba,n=Js,a=$s,o=og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,Js=ba=null,yg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ta=null),we(a),n=n.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(K,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,c=q.p,q.p=2,N.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var T=o[S];f(T.value,{componentStack:T.stack})}}finally{N.T=n,q.p=c}}($s&3)!==0&&Fl(),Di(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===vf?mo++:(mo=0,vf=e):mo=0,go(0)}}function yg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,jr(n)))}function Fl(e){return vg(),xg(),Sg(),Mg()}function Mg(){if(En!==5)return!1;var e=ba,n=gf;gf=0;var a=we($s),o=N.T,c=q.p;try{q.p=32>a?32:a,N.T=null,a=_f,_f=null;var f=ba,S=$s;if(En=0,Js=ba=null,$s=0,(De&6)!==0)throw Error(s(331));var T=De;if(De|=4,sg(f.current),ng(f,f.current,S,a),De=T,go(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(K,f)}catch{}return!0}finally{q.p=c,N.T=o,yg(e,n)}}function Eg(e,n,a){n=ei(a,n),n=Zu(e.stateNode,n,2),e=ma(e,n,2),e!==null&&(Ft(e,2),Di(e))}function Ge(e,n,a){if(e.tag===3)Eg(e,e,a);else for(;n!==null;){if(n.tag===3){Eg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ta===null||!Ta.has(o))){e=ei(a,e),a=Rm(2),o=ma(n,a,2),o!==null&&(wm(a,o,n,e),Ft(o,2),Di(o));break}}n=n.return}}function Mf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Mx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(hf=!0,c.add(a),e=Rx.bind(null,e,n,a),n.then(e,e))}function Rx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Se&a)===a&&($e===4||$e===3&&(Se&62914560)===Se&&300>It()-mf?(De&2)===0&&tr(e,0):df|=a,Qs===Se&&(Qs=0)),Di(e)}function Tg(e,n){n===0&&(n=Rt()),e=Is(e,n),e!==null&&(Ft(e,n),Di(e))}function wx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Tg(e,a)}function Cx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Tg(e,a)}function Dx(e,n){return I(e,n)}var Hl=null,nr=null,Ef=!1,Gl=!1,Tf=!1,cs=0;function Di(e){e!==nr&&e.next===null&&(nr===null?Hl=nr=e:nr=nr.next=e),Gl=!0,Ef||(Ef=!0,Lx())}function go(e,n){if(!Tf&&Gl){Tf=!0;do for(var a=!1,o=Hl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Mt(42|e)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,wg(o,f))}else f=Se,f=Wt(o,o===Xe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ut(o,f)||(a=!0,wg(o,f));o=o.next}while(a);Tf=!1}}function Ux(){bg()}function bg(){Gl=Ef=!1;var e=0;cs!==0&&(Hx()&&(e=cs),cs=0);for(var n=It(),a=null,o=Hl;o!==null;){var c=o.next,f=Ag(o,n);f===0?(o.next=null,a===null?Hl=c:a.next=c,c===null&&(nr=a)):(a=o,(e!==0||(f&3)!==0)&&(Gl=!0)),o=c}go(e)}function Ag(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Mt(f),T=1<<S,O=c[S];O===-1?((T&a)===0||(T&o)!==0)&&(c[S]=oe(T,n)):O<=n&&(e.expiredLanes|=T),f&=~T}if(n=Xe,a=Se,a=Wt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ut(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ae(o),we(a)){case 2:case 8:a=re;break;case 32:a=Ve;break;case 268435456:a=L;break;default:a=Ve}return o=Rg.bind(null,e),a=I(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function Rg(e,n){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var o=Se;return o=Wt(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(cg(e,o,n),Ag(e,It()),e.callbackNode!=null&&e.callbackNode===a?Rg.bind(null,e):null)}function wg(e,n){if(Fl())return null;cg(e,n,!0)}function Lx(){Vx(function(){(De&6)!==0?I(Gt,Ux):bg()})}function bf(){return cs===0&&(cs=X()),cs}function Cg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jo(""+e)}function Dg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Nx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Cg((c[Ke]||null).action),S=o.submitter;S&&(n=(n=S[Ke]||null)?Cg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new nl("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(cs!==0){var O=S?Dg(c,S):new FormData(c);Xu(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=S?Dg(c,S):new FormData(c),Xu(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var Af=0;Af<cu.length;Af++){var Rf=cu[Af],Ox=Rf.toLowerCase(),Px=Rf[0].toUpperCase()+Rf.slice(1);di(Ox,"on"+Px)}di(cp,"onAnimationEnd"),di(up,"onAnimationIteration"),di(fp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(Jv,"onTransitionRun"),di($v,"onTransitionStart"),di(tx,"onTransitionCancel"),di(hp,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Ug(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],O=T.instance,it=T.currentTarget;if(T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=it;try{f(c)}catch(pt){wl(pt)}c.currentTarget=null,f=O}else for(S=0;S<o.length;S++){if(T=o[S],O=T.instance,it=T.currentTarget,T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=it;try{f(c)}catch(pt){wl(pt)}c.currentTarget=null,f=O}}}}function ve(e,n){var a=n[As];a===void 0&&(a=n[As]=new Set);var o=e+"__bubble";a.has(o)||(Lg(n,e,2,!1),a.add(o))}function wf(e,n,a){var o=0;n&&(o|=4),Lg(a,e,o,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Cf(e){if(!e[Vl]){e[Vl]=!0,Ko.forEach(function(a){a!=="selectionchange"&&(Ix.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,wf("selectionchange",!1,n))}}function Lg(e,n,a,o){switch(n_(n)){case 2:var c=cS;break;case 8:c=uS;break;default:c=kf}a=c.bind(null,n,a,e),c=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Df(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=o.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=Hi(T),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){o=f=S;continue t}T=T.parentNode}}o=o.return}Fd(function(){var it=f,pt=jc(a),xt=[];t:{var ot=dp.get(e);if(ot!==void 0){var lt=nl,ie=e;switch(e){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":lt=Dv;break;case"focusin":ie="focus",lt=tu;break;case"focusout":ie="blur",lt=tu;break;case"beforeblur":case"afterblur":lt=tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Nv;break;case cp:case up:case fp:lt=yv;break;case hp:lt=Pv;break;case"scroll":case"scrollend":lt=gv;break;case"wheel":lt=Bv;break;case"copy":case"cut":case"paste":lt=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Xd;break;case"toggle":case"beforetoggle":lt=Fv}var te=(n&4)!==0,Be=!te&&(e==="scroll"||e==="scrollend"),j=te?ot!==null?ot+"Capture":null:ot;te=[];for(var k=it,et;k!==null;){var gt=k;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||j===null||(gt=Pr(k,j),gt!=null&&te.push(vo(k,gt,et))),Be)break;k=k.return}0<te.length&&(ot=new lt(ot,ie,null,a,pt),xt.push({event:ot,listeners:te}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",ot&&a!==qc&&(ie=a.relatedTarget||a.fromElement)&&(Hi(ie)||ie[Ti]))break t;if((lt||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,lt?(ie=a.relatedTarget||a.toElement,lt=it,ie=ie?Hi(ie):null,ie!==null&&(Be=u(ie),te=ie.tag,ie!==Be||te!==5&&te!==27&&te!==6)&&(ie=null)):(lt=null,ie=it),lt!==ie)){if(te=Vd,gt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Xd,gt="onPointerLeave",j="onPointerEnter",k="pointer"),Be=lt==null?ot:qa(lt),et=ie==null?ot:qa(ie),ot=new te(gt,k+"leave",lt,a,pt),ot.target=Be,ot.relatedTarget=et,gt=null,Hi(pt)===it&&(te=new te(j,k+"enter",ie,a,pt),te.target=et,te.relatedTarget=Be,gt=te),Be=gt,lt&&ie)e:{for(te=lt,j=ie,k=0,et=te;et;et=ir(et))k++;for(et=0,gt=j;gt;gt=ir(gt))et++;for(;0<k-et;)te=ir(te),k--;for(;0<et-k;)j=ir(j),et--;for(;k--;){if(te===j||j!==null&&te===j.alternate)break e;te=ir(te),j=ir(j)}te=null}else te=null;lt!==null&&Ng(xt,ot,lt,te,!1),ie!==null&&Be!==null&&Ng(xt,Be,ie,te,!0)}}t:{if(ot=it?qa(it):window,lt=ot.nodeName&&ot.nodeName.toLowerCase(),lt==="select"||lt==="input"&&ot.type==="file")var kt=Jd;else if(Kd(ot))if($d)kt=Zv;else{kt=qv;var me=Yv}else lt=ot.nodeName,!lt||lt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?it&&Yc(it.elementType)&&(kt=Jd):kt=jv;if(kt&&(kt=kt(e,it))){Qd(xt,kt,a,pt);break t}me&&me(e,ot,it),e==="focusout"&&it&&ot.type==="number"&&it.memoizedProps.value!=null&&Rn(ot,"number",ot.value)}switch(me=it?qa(it):window,e){case"focusin":(Kd(me)||me.contentEditable==="true")&&(Ns=me,ru=it,kr=null);break;case"focusout":kr=ru=Ns=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,op(xt,a,pt);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":op(xt,a,pt)}var jt;if(nu)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Ls?jd(e,a)&&(ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(Wd&&a.locale!=="ko"&&(Ls||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Ls&&(jt=Hd()):(fa=pt,Qc="value"in fa?fa.value:fa.textContent,Ls=!0)),me=kl(it,ne),0<me.length&&(ne=new kd(ne,e,null,a,pt),xt.push({event:ne,listeners:me}),jt?ne.data=jt:(jt=Zd(a),jt!==null&&(ne.data=jt)))),(jt=Gv?Vv(e,a):kv(e,a))&&(ne=kl(it,"onBeforeInput"),0<ne.length&&(me=new kd("onBeforeInput","beforeinput",null,a,pt),xt.push({event:me,listeners:ne}),me.data=jt)),Nx(xt,e,it,a,pt)}Ug(xt,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Pr(e,a),c!=null&&o.unshift(vo(e,c,f)),c=Pr(e,n),c!=null&&o.push(vo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ng(e,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,O=T.alternate,it=T.stateNode;if(T=T.tag,O!==null&&O===o)break;T!==5&&T!==26&&T!==27||it===null||(O=it,c?(it=Pr(a,f),it!=null&&S.unshift(vo(a,it,O))):c||(it=Pr(a,f),it!=null&&S.push(vo(a,it,O)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Bx=/\r\n?/g,zx=/\u0000|\uFFFD/g;function Og(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(zx,"")}function Pg(e,n){return n=Og(n),Og(e)===n}function Xl(){}function Ie(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Bn(e,""+o);break;case"className":Vt(e,"class",o);break;case"tabIndex":Vt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Vt(e,a,o);break;case"style":Bd(e,o,f);break;case"data":if(n!=="object"){Vt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Jo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",c.name,c,null),Ie(e,n,"formEncType",c.formEncType,c,null),Ie(e,n,"formMethod",c.formMethod,c,null),Ie(e,n,"formTarget",c.formTarget,c,null)):(Ie(e,n,"encType",c.encType,c,null),Ie(e,n,"method",c.method,c,null),Ie(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Jo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xl);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Jo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Lt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Lt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pv.get(a)||a,Lt(e,a,o))}}function Uf(e,n,a,o,c,f){switch(a){case"style":Bd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&Bn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Ke]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Lt(e,a,o)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,f,S,a,null)}}c&&Ie(e,n,"srcSet",a.srcSet,a,null),o&&Ie(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=S=c=null,O=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":c=pt;break;case"type":S=pt;break;case"checked":O=pt;break;case"defaultChecked":it=pt;break;case"value":f=pt;break;case"defaultValue":T=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Ie(e,n,o,pt,a,null)}}On(e,f,T,O,it,S,c,!1),ge(e);return;case"select":ve("invalid",e),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Ie(e,n,c,T,a,null)}n=f,a=S,e.multiple=!!o,n!=null?Qe(e,!!o,n,!1):a!=null&&Qe(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ie(e,n,S,T,a,null)}Cs(e,o,c,f),ge(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(o=a[O],o!=null))switch(O){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,n,O,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<_o.length;o++)ve(_o[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,it,o,a,null)}return;default:if(Yc(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Uf(e,n,pt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ie(e,n,T,o,a,null))}function Fx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,O=null,it=null,pt=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":O=xt;default:o.hasOwnProperty(lt)||Ie(e,n,lt,null,o,xt)}}for(var ot in o){var lt=o[ot];if(xt=a[ot],o.hasOwnProperty(ot)&&(lt!=null||xt!=null))switch(ot){case"type":f=lt;break;case"name":c=lt;break;case"checked":it=lt;break;case"defaultChecked":pt=lt;break;case"value":S=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==xt&&Ie(e,n,ot,lt,o,xt)}}He(e,S,T,O,it,pt,f,c);return;case"select":lt=S=T=ot=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":lt=O;default:o.hasOwnProperty(f)||Ie(e,n,f,null,o,O)}for(c in o)if(f=o[c],O=a[c],o.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":ot=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==O&&Ie(e,n,c,f,o,O)}n=T,a=S,o=lt,ot!=null?Qe(e,!!a,ot,!1):!!o!=!!a&&(n!=null?Qe(e,!!a,n,!0):Qe(e,!!a,a?[]:"",!1));return;case"textarea":lt=ot=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(e,n,T,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":ot=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ie(e,n,S,c,o,f)}yn(e,ot,lt);return;case"option":for(var ie in a)if(ot=a[ie],a.hasOwnProperty(ie)&&ot!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ie(e,n,ie,null,o,ot)}for(O in o)if(ot=o[O],lt=a[O],o.hasOwnProperty(O)&&ot!==lt&&(ot!=null||lt!=null))switch(O){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Ie(e,n,O,ot,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)ot=a[te],a.hasOwnProperty(te)&&ot!=null&&!o.hasOwnProperty(te)&&Ie(e,n,te,null,o,ot);for(it in o)if(ot=o[it],lt=a[it],o.hasOwnProperty(it)&&ot!==lt&&(ot!=null||lt!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Ie(e,n,it,ot,o,lt)}return;default:if(Yc(n)){for(var Be in a)ot=a[Be],a.hasOwnProperty(Be)&&ot!==void 0&&!o.hasOwnProperty(Be)&&Uf(e,n,Be,void 0,o,ot);for(pt in o)ot=o[pt],lt=a[pt],!o.hasOwnProperty(pt)||ot===lt||ot===void 0&&lt===void 0||Uf(e,n,pt,ot,o,lt);return}}for(var j in a)ot=a[j],a.hasOwnProperty(j)&&ot!=null&&!o.hasOwnProperty(j)&&Ie(e,n,j,null,o,ot);for(xt in o)ot=o[xt],lt=a[xt],!o.hasOwnProperty(xt)||ot===lt||ot==null&&lt==null||Ie(e,n,xt,ot,o,lt)}var Lf=null,Nf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function Ig(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Of(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function Hx(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,Vx=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(e){return Fg.resolve(null).then(e).catch(kx)}:zg;function kx(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function Hg(e,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&xo(S.documentElement),a&2&&xo(S.body),a&4)for(a=S.head,xo(a),S=a.firstChild;S;){var T=S.nextSibling,O=S.nodeName;S[bi]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=T}}if(c===0){e.removeChild(f),Ro(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Ro(n)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xx(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[bi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function Wx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function Bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Yx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var zf=null;function Gg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Vg(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ws(e)}var oi=new Map,kg=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=q.d;q.d={f:qx,r:jx,D:Zx,C:Kx,L:Qx,m:Jx,X:tS,S:$x,M:eS};function qx(){var e=ta.f(),n=Bl();return e||n}function jx(e){var n=ca(e);n!==null&&n.tag===5&&n.type==="form"?cm(n):ta.r(e)}var ar=typeof document>"u"?null:document;function Xg(e,n,a){var o=ar;if(o&&typeof n=="string"&&n){var c=gn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),kg.has(c)||(kg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Tn(n,"link",e),sn(n),o.head.appendChild(n)))}}function Zx(e){ta.D(e),Xg("dns-prefetch",e,null)}function Kx(e,n){ta.C(e,n),Xg("preconnect",e,n)}function Qx(e,n,a){ta.L(e,n,a);var o=ar;if(o&&e&&n){var c='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gn(a.imageSizes)+'"]')):c+='[href="'+gn(e)+'"]';var f=c;switch(n){case"style":f=sr(e);break;case"script":f=rr(e)}oi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(So(f))||n==="script"&&o.querySelector(yo(f))||(n=o.createElement("link"),Tn(n,"link",e),sn(n),o.head.appendChild(n)))}}function Jx(e,n){ta.m(e,n);var a=ar;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gn(o)+'"][href="'+gn(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rr(e)}if(!oi.has(f)&&(e=g({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}o=a.createElement("link"),Tn(o,"link",e),sn(o),a.head.appendChild(o)}}}function $x(e,n,a){ta.S(e,n,a);var o=ar;if(o&&e){var c=ua(o).hoistableStyles,f=sr(e);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(So(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Ff(e,a);var O=S=o.createElement("link");sn(O),Tn(O,"link",e),O._p=new Promise(function(it,pt){O.onload=it,O.onerror=pt}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ql(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function tS(e,n){ta.X(e,n);var a=ar;if(a&&e){var o=ua(a).hoistableScripts,c=rr(e),f=o.get(c);f||(f=a.querySelector(yo(c)),f||(e=g({src:e,async:!0},n),(n=oi.get(c))&&Hf(e,n),f=a.createElement("script"),sn(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function eS(e,n){ta.M(e,n);var a=ar;if(a&&e){var o=ua(a).hoistableScripts,c=rr(e),f=o.get(c);f||(f=a.querySelector(yo(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Hf(e,n),f=a.createElement("script"),sn(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Wg(e,n,a,o){var c=(c=at.current)?Yl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=sr(a.href),a=ua(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=sr(a.href);var f=ua(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(So(e)))&&!f._p&&(S.instance=f,S.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||nS(c,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rr(a),a=ua(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function sr(e){return'href="'+gn(e)+'"'}function So(e){return'link[rel="stylesheet"]['+e+"]"}function Yg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function nS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),sn(n),e.head.appendChild(n))}function rr(e){return'[src="'+gn(e)+'"]'}function yo(e){return"script[async]"+e}function qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+gn(a.href)+'"]');if(o)return n.instance=o,sn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),sn(o),Tn(o,"style",c),ql(o,a.precedence,e),n.instance=o;case"stylesheet":c=sr(a.href);var f=e.querySelector(So(c));if(f)return n.state.loading|=4,n.instance=f,sn(f),f;o=Yg(a),(c=oi.get(c))&&Ff(o,c),f=(e.ownerDocument||e).createElement("link"),sn(f);var S=f;return S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),Tn(f,"link",o),n.state.loading|=4,ql(f,a.precedence,e),n.instance=f;case"script":return f=rr(a.src),(c=e.querySelector(yo(f)))?(n.instance=c,sn(c),c):(o=a,(c=oi.get(f))&&(o=g({},a),Hf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),sn(c),Tn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ql(o,a.precedence,e));return n.instance}function ql(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function jg(e,n,a){if(jl===null){var o=new Map,c=jl=new Map;c.set(a,o)}else c=jl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[bi]||f[un]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function Zg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function iS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Kg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Mo=null;function aS(){}function sS(e,n,a){if(Mo===null)throw Error(s(475));var o=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=sr(a.href),f=e.querySelector(So(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Zl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,sn(f);return}f=e.ownerDocument||e,a=Yg(a),(c=oi.get(c))&&Ff(a,c),f=f.createElement("link"),sn(f);var S=f;S._p=new Promise(function(T,O){S.onload=T,S.onerror=O}),Tn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Zl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function rS(){if(Mo===null)throw Error(s(475));var e=Mo;return e.stylesheets&&e.count===0&&Gf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Gf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Zl(){if(this.count--,this.count===0){if(this.stylesheets)Gf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Gf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(oS,e),Kl=null,Zl.call(e))}function oS(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var o=a.get(null);else{a=new Map,Kl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=Zl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Eo={$$typeof:P,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function lS(e,n,a,o,c,f,S,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Qg(e,n,a,o,c,f,S,T,O,it,pt,xt){return e=new lS(e,n,a,S,T,O,it,xt),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=yu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},bu(f),e}function Jg(e){return e?(e=Bs,e):Bs}function $g(e,n,a,o,c,f){c=Jg(c),o.context===null?o.context=c:o.pendingContext=c,o=pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ma(e,o,n),a!==null&&(Jn(a,e,n),Jr(a,e,n))}function t_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Vf(e,n){t_(e,n),(e=e.alternate)&&t_(e,n)}function e_(e){if(e.tag===13){var n=Is(e,67108864);n!==null&&Jn(n,e,67108864),Vf(e,67108864)}}var Ql=!0;function cS(e,n,a,o){var c=N.T;N.T=null;var f=q.p;try{q.p=2,kf(e,n,a,o)}finally{q.p=f,N.T=c}}function uS(e,n,a,o){var c=N.T;N.T=null;var f=q.p;try{q.p=8,kf(e,n,a,o)}finally{q.p=f,N.T=c}}function kf(e,n,a,o){if(Ql){var c=Xf(o);if(c===null)Df(e,n,o,Jl,a),i_(e,o);else if(hS(c,e,n,a,o))o.stopPropagation();else if(i_(e,o),n&4&&-1<fS.indexOf(e)){for(;c!==null;){var f=ca(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Zt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var O=1<<31-Mt(S);T.entanglements[1]|=O,S&=~O}Di(f),(De&6)===0&&(Pl=It()+500,go(0))}}break;case 13:T=Is(f,2),T!==null&&Jn(T,f,2),Bl(),Vf(f,2)}if(f=Xf(o),f===null&&Df(e,n,o,Jl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Df(e,n,o,null,a)}}function Xf(e){return e=jc(e),Wf(e)}var Jl=null;function Wf(e){if(Jl=null,e=Hi(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function n_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ne()){case Gt:return 2;case re:return 8;case Ve:case ke:return 32;case L:return 268435456;default:return 32}default:return 32}}var Yf=!1,wa=null,Ca=null,Da=null,To=new Map,bo=new Map,Ua=[],fS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i_(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Ao(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ca(n),n!==null&&e_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function hS(e,n,a,o,c){switch(n){case"focusin":return wa=Ao(wa,e,n,a,o,c),!0;case"dragenter":return Ca=Ao(Ca,e,n,a,o,c),!0;case"mouseover":return Da=Ao(Da,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ao(To.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,Ao(bo.get(f)||null,e,n,a,o,c)),!0}return!1}function a_(e){var n=Hi(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,fi(e.priority,function(){if(a.tag===13){var o=Qn();o=se(o);var c=Is(a,o);c!==null&&Jn(c,a,o),Vf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Xf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);qc=o,a.target.dispatchEvent(o),qc=null}else return n=ca(a),n!==null&&e_(n),e.blockedOn=a,!1;n.shift()}return!0}function s_(e,n,a){$l(e)&&a.delete(n)}function dS(){Yf=!1,wa!==null&&$l(wa)&&(wa=null),Ca!==null&&$l(Ca)&&(Ca=null),Da!==null&&$l(Da)&&(Da=null),To.forEach(s_),bo.forEach(s_)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Yf||(Yf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dS)))}var ec=null;function r_(e){ec!==e&&(ec=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Wf(o||a)===null)continue;break}var f=ca(a);f!==null&&(e.splice(n,3),n-=3,Xu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ro(e){function n(O){return tc(O,e)}wa!==null&&tc(wa,e),Ca!==null&&tc(Ca,e),Da!==null&&tc(Da,e),To.forEach(n),bo.forEach(n);for(var a=0;a<Ua.length;a++){var o=Ua[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)a_(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[Ke]||null;if(typeof f=="function")S||r_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Ke]||null)T=S.formAction;else if(Wf(c)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),r_(a)}}}function qf(e){this._internalRoot=e}nc.prototype.render=qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qn();$g(a,o,e,n,null,null)},nc.prototype.unmount=qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$g(e.current,2,null,e,null,null),Bl(),n[Ti]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ye();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&a_(e)}};var o_=t.version;if(o_!=="19.1.1")throw Error(s(527,o_,"19.1.1"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var pS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{K=ic.inject(pS),nt=ic}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=Em,f=Tm,S=bm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Qg(e,1,!1,null,null,a,o,c,f,S,T,null),e[Ti]=n.current,Cf(e),new qf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=Em,S=Tm,T=bm,O=null,it=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(it=a.formState)),n=Qg(e,1,!0,n,a??null,o,c,f,S,T,O,it),n.context=Jg(null),a=n.current,o=Qn(),o=se(o),c=pa(o),c.callback=null,ma(a,c,o),a=o,n.current.lanes=a,Ft(n,a),Di(n),e[Ti]=n.current,Cf(e),new nc(n)},Co.version="19.1.1",Co}var __;function TS(){if(__)return Kf.exports;__=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Kf.exports=ES(),Kf.exports}var bS=TS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Td="180",Tr={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AS=0,v_=1,RS=2,C0=1,wS=2,ra=3,Xa=0,Xn=1,Li=2,Va=0,br=1,x_=2,S_=3,y_=4,CS=5,vs=100,DS=101,US=102,LS=103,NS=104,OS=200,PS=201,IS=202,BS=203,Oh=204,Ph=205,zS=206,FS=207,HS=208,GS=209,VS=210,kS=211,XS=212,WS=213,YS=214,Ih=0,Bh=1,zh=2,Rr=3,Fh=4,Hh=5,Gh=6,Vh=7,D0=0,qS=1,jS=2,ka=0,ZS=1,KS=2,QS=3,JS=4,$S=5,ty=6,ey=7,U0=300,wr=301,Cr=302,kh=303,Xh=304,Gc=306,Wh=1e3,Ss=1001,Yh=1002,yi=1003,ny=1004,ac=1005,Ni=1006,th=1007,ys=1008,Bi=1009,L0=1010,N0=1011,Fo=1012,bd=1013,Ms=1014,oa=1015,Wo=1016,Ad=1017,Rd=1018,Ho=1020,O0=35902,P0=35899,I0=1021,B0=1022,Si=1023,Go=1026,Vo=1027,z0=1028,wd=1029,F0=1030,Cd=1031,Dd=1033,Cc=33776,Dc=33777,Uc=33778,Lc=33779,qh=35840,jh=35841,Zh=35842,Kh=35843,Qh=36196,Jh=37492,$h=37496,td=37808,ed=37809,nd=37810,id=37811,ad=37812,sd=37813,rd=37814,od=37815,ld=37816,cd=37817,ud=37818,fd=37819,hd=37820,dd=37821,pd=36492,md=36494,gd=36495,_d=36283,vd=36284,xd=36285,Sd=36286,iy=3200,ay=3201,H0=0,sy=1,Ga="",ci="srgb",Dr="srgb-linear",Pc="linear",ze="srgb",or=7680,M_=519,ry=512,oy=513,ly=514,G0=515,cy=516,uy=517,fy=518,hy=519,E_=35044,T_="300 es",Oi=2e3,Ic=2001;class bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,yd=180/Math.PI;function Yo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function dy(r,t){return(r%t+t)%t}function eh(r,t,i){return(1-i)*r+i*t}function Do(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const py={DEG2RAD:Nc};class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const x=u[h+0],M=u[h+1],A=u[h+2],R=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=A,t[i+3]=R;return}if(v!==R||m!==x||p!==M||g!==A){let y=1-d;const _=m*x+p*M+g*A+v*R,H=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const z=Math.sqrt(P),V=Math.atan2(z,_*H);y=Math.sin(y*V)/z,d=Math.sin(d*V)/z}const U=d*H;if(m=m*y+x*U,p=p*y+M*U,g=g*y+A*U,v=v*y+R*U,y===1-d){const z=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=z,p*=z,g*=z,v*=z}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=u[h],x=u[h+1],M=u[h+2],A=u[h+3];return t[i]=d*A+g*v+m*M-p*x,t[i+1]=m*A+g*x+p*v-d*M,t[i+2]=p*A+g*M+d*x-m*v,t[i+3]=g*A-d*v-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(u/2),x=m(s/2),M=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=x*g*v+p*M*A,this._y=p*M*v-x*g*A,this._z=p*g*A+x*M*v,this._w=p*g*v-x*M*A;break;case"YXZ":this._x=x*g*v+p*M*A,this._y=p*M*v-x*g*A,this._z=p*g*A-x*M*v,this._w=p*g*v+x*M*A;break;case"ZXY":this._x=x*g*v-p*M*A,this._y=p*M*v+x*g*A,this._z=p*g*A+x*M*v,this._w=p*g*v-x*M*A;break;case"ZYX":this._x=x*g*v-p*M*A,this._y=p*M*v+x*g*A,this._z=p*g*A-x*M*v,this._w=p*g*v+x*M*A;break;case"YZX":this._x=x*g*v+p*M*A,this._y=p*M*v+x*g*A,this._z=p*g*A-x*M*v,this._w=p*g*v-x*M*A;break;case"XZY":this._x=x*g*v-p*M*A,this._y=p*M*v-x*g*A,this._z=p*g*A+x*M*v,this._w=p*g*v+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=s+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,i=0,s=0){st.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(b_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(b_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*g,this.y=s+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return nh.copy(this).projectOnVector(t),this.sub(nh)}reflect(t){return this.sub(nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new st,b_=new Es;class ue{constructor(t,i,s,l,u,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],M=s[5],A=s[8],R=l[0],y=l[3],_=l[6],H=l[1],P=l[4],U=l[7],z=l[2],V=l[5],G=l[8];return u[0]=h*R+d*H+m*z,u[3]=h*y+d*P+m*V,u[6]=h*_+d*U+m*G,u[1]=p*R+g*H+v*z,u[4]=p*y+g*P+v*V,u[7]=p*_+g*U+v*G,u[2]=x*R+M*H+A*z,u[5]=x*y+M*P+A*V,u[8]=x*_+M*U+A*G,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,x=d*m-g*u,M=p*u-h*m,A=i*v+s*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=v*R,t[1]=(l*p-g*s)*R,t[2]=(d*s-l*h)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*u-d*i)*R,t[6]=M*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ih.makeScale(t,i)),this}rotate(t){return this.premultiply(ih.makeRotation(-t)),this}translate(t,i){return this.premultiply(ih.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ih=new ue;function V0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Bc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function my(){const r=Bc("canvas");return r.style.display="block",r}const A_={};function ko(r){r in A_||(A_[r]=!0,console.warn(r))}function gy(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const R_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _y(){const r={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===ze&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Ar(l.r),l.g=Ar(l.g),l.b=Ar(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Pc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ko("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ko("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Dr]:{primaries:t,whitePoint:s,transfer:Pc,toXYZ:R_,fromXYZ:w_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:R_,fromXYZ:w_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const be=_y();function la(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ar(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lr;class vy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{lr===void 0&&(lr=Bc("canvas")),lr.width=t.width,lr.height=t.height;const l=lr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=lr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Bc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=la(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xy=0;class Ud{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Yo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(ah(l[h].image)):u.push(ah(l[h]))}else u=ah(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sy=0;const sh=new st;class Wn extends bs{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Ss,l=Ss,u=Ni,h=ys,d=Si,m=Bi,p=Wn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Yo(),this.name="",this.source=new Ud(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==U0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wh:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case Yh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wh:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case Yh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=U0;Wn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],x=m[1],M=m[5],A=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(M+1)/2,z=(_+1)/2,V=(g+x)/4,G=(v+R)/4,$=(A+y)/4;return P>U&&P>z?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=V/s,u=G/s):U>z?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=V/l,u=$/l):z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),s=G/u,l=$/u),this.set(s,l,u,i),this}let H=Math.sqrt((y-A)*(y-A)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(H)<.001&&(H=1),this.x=(y-A)/H,this.y=(v-R)/H,this.z=(x-g)/H,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yy extends bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Wn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ud(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends yy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class k0 extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class My extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(t=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,gi):gi.fromBufferAttribute(u,h),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),rc.subVectors(this.max,Uo),cr.subVectors(t.a,Uo),ur.subVectors(t.b,Uo),fr.subVectors(t.c,Uo),Na.subVectors(ur,cr),Oa.subVectors(fr,ur),us.subVectors(cr,fr);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-us.z,us.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,us.z,0,-us.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-us.y,us.x,0];return!rh(i,cr,ur,fr,rc)||(i=[1,0,0,0,1,0,0,0,1],!rh(i,cr,ur,fr,rc))?!1:(oc.crossVectors(Na,Oa),i=[oc.x,oc.y,oc.z],rh(i,cr,ur,fr,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new st,new st,new st,new st,new st,new st,new st,new st],gi=new st,sc=new qo,cr=new st,ur=new st,fr=new st,Na=new st,Oa=new st,us=new st,Uo=new st,rc=new st,oc=new st,fs=new st;function rh(r,t,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){fs.fromArray(r,u);const d=l.x*Math.abs(fs.x)+l.y*Math.abs(fs.y)+l.z*Math.abs(fs.z),m=t.dot(fs),p=i.dot(fs),g=s.dot(fs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Ey=new qo,Lo=new st,oh=new st;class Vc{constructor(t=new st,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ey.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(oh)),this.expandByPoint(Lo.copy(t.center).sub(oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new st,lh=new st,lc=new st,Pa=new st,ch=new st,cc=new st,uh=new st;class Ld{constructor(t=new st,i=new st(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){lh.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(lh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(lc),d=Pa.dot(this.direction),m=-Pa.dot(lc),p=Pa.lengthSq(),g=Math.abs(1-h*h);let v,x,M,A;if(g>0)if(v=h*m-d,x=h*d-m,A=u*g,v>=0)if(x>=-A)if(x<=A){const R=1/g;v*=R,x*=R,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-h*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(v=Math.max(0,-(h*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+x*(x+2*m)+p);else x=h>0?-u:u,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(lh).addScaledVector(lc,x),M}intersectSphere(t,i){na.subVectors(t.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,s,l,u){ch.subVectors(i,t),cc.subVectors(s,t),uh.crossVectors(ch,cc);let h=this.direction.dot(uh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,t);const m=d*this.direction.dot(cc.crossVectors(Pa,cc));if(m<0)return null;const p=d*this.direction.dot(ch.cross(Pa));if(p<0||m+p>h)return null;const g=-d*Pa.dot(uh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,s,l,u,h,d,m,p,g,v,x,M,A,R,y){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,v,x,M,A,R,y)}set(t,i,s,l,u,h,d,m,p,g,v,x,M,A,R,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=M,_[7]=A,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/hr.setFromMatrixColumn(t,0).length(),u=1/hr.setFromMatrixColumn(t,1).length(),h=1/hr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=h*g,M=h*v,A=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+A*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=A+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*v,A=p*g,R=p*v;i[0]=x+R*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-A,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*v,A=p*g,R=p*v;i[0]=x-R*d,i[4]=-h*v,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*g,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*v,A=d*g,R=d*v;i[0]=m*g,i[4]=A*p-M,i[8]=x*p+R,i[1]=m*v,i[5]=R*p+x,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*g,i[4]=R-x*v,i[8]=A*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+A,i[10]=x-R*v}else if(t.order==="XZY"){const x=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+R,i[5]=h*g,i[9]=M*v-A,i[2]=A*v-M,i[6]=d*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ty,t,by)}lookAt(t,i,s){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ia.crossVectors(s,$n),Ia.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ia.crossVectors(s,$n)),Ia.normalize(),uc.crossVectors($n,Ia),l[0]=Ia.x,l[4]=uc.x,l[8]=$n.x,l[1]=Ia.y,l[5]=uc.y,l[9]=$n.y,l[2]=Ia.z,l[6]=uc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],M=s[13],A=s[2],R=s[6],y=s[10],_=s[14],H=s[3],P=s[7],U=s[11],z=s[15],V=l[0],G=l[4],$=l[8],C=l[12],w=l[1],B=l[5],J=l[9],ct=l[13],dt=l[2],rt=l[6],N=l[10],q=l[14],W=l[3],yt=l[7],D=l[11],tt=l[15];return u[0]=h*V+d*w+m*dt+p*W,u[4]=h*G+d*B+m*rt+p*yt,u[8]=h*$+d*J+m*N+p*D,u[12]=h*C+d*ct+m*q+p*tt,u[1]=g*V+v*w+x*dt+M*W,u[5]=g*G+v*B+x*rt+M*yt,u[9]=g*$+v*J+x*N+M*D,u[13]=g*C+v*ct+x*q+M*tt,u[2]=A*V+R*w+y*dt+_*W,u[6]=A*G+R*B+y*rt+_*yt,u[10]=A*$+R*J+y*N+_*D,u[14]=A*C+R*ct+y*q+_*tt,u[3]=H*V+P*w+U*dt+z*W,u[7]=H*G+P*B+U*rt+z*yt,u[11]=H*$+P*J+U*N+z*D,u[15]=H*C+P*ct+U*q+z*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],x=t[10],M=t[14],A=t[3],R=t[7],y=t[11],_=t[15];return A*(+u*m*v-l*p*v-u*d*x+s*p*x+l*d*M-s*m*M)+R*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*h*v-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],x=t[10],M=t[11],A=t[12],R=t[13],y=t[14],_=t[15],H=v*y*p-R*x*p+R*m*M-d*y*M-v*m*_+d*x*_,P=A*x*p-g*y*p-A*m*M+h*y*M+g*m*_-h*x*_,U=g*R*p-A*v*p+A*d*M-h*R*M-g*d*_+h*v*_,z=A*v*m-g*R*m-A*d*x+h*R*x+g*d*y-h*v*y,V=i*H+s*P+l*U+u*z;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/V;return t[0]=H*G,t[1]=(R*x*u-v*y*u-R*l*M+s*y*M+v*l*_-s*x*_)*G,t[2]=(d*y*u-R*m*u+R*l*p-s*y*p-d*l*_+s*m*_)*G,t[3]=(v*m*u-d*x*u-v*l*p+s*x*p+d*l*M-s*m*M)*G,t[4]=P*G,t[5]=(g*y*u-A*x*u+A*l*M-i*y*M-g*l*_+i*x*_)*G,t[6]=(A*m*u-h*y*u-A*l*p+i*y*p+h*l*_-i*m*_)*G,t[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*G,t[8]=U*G,t[9]=(A*v*u-g*R*u-A*s*M+i*R*M+g*s*_-i*v*_)*G,t[10]=(h*R*u-A*d*u+A*s*p-i*R*p-h*s*_+i*d*_)*G,t[11]=(g*d*u-h*v*u-g*s*p+i*v*p+h*s*M-i*d*M)*G,t[12]=z*G,t[13]=(g*R*l-A*v*l+A*s*x-i*R*x-g*s*y+i*v*y)*G,t[14]=(A*d*l-h*R*l-A*s*m+i*R*m+h*s*y-i*d*y)*G,t[15]=(h*v*l-g*d*l+g*s*m-i*v*m-h*s*x+i*d*x)*G,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,x=u*p,M=u*g,A=u*v,R=h*g,y=h*v,_=d*v,H=m*p,P=m*g,U=m*v,z=s.x,V=s.y,G=s.z;return l[0]=(1-(R+_))*z,l[1]=(M+U)*z,l[2]=(A-P)*z,l[3]=0,l[4]=(M-U)*V,l[5]=(1-(x+_))*V,l[6]=(y+H)*V,l[7]=0,l[8]=(A+P)*G,l[9]=(y-H)*G,l[10]=(1-(x+R))*G,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=hr.set(l[0],l[1],l[2]).length();const h=hr.set(l[4],l[5],l[6]).length(),d=hr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/u,g=1/h,v=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Oi,m=!1){const p=this.elements,g=2*u/(i-t),v=2*u/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let A,R;if(m)A=u/(h-u),R=h*u/(h-u);else if(d===Oi)A=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Ic)A=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Oi,m=!1){const p=this.elements,g=2/(i-t),v=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let A,R;if(m)A=1/(h-u),R=h/(h-u);else if(d===Oi)A=-2/(h-u),R=-(h+u)/(h-u);else if(d===Ic)A=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const hr=new st,_i=new en,Ty=new st(0,0,0),by=new st(1,1,1),Ia=new st,uc=new st,$n=new st,C_=new en,D_=new Es;class zi{constructor(t=0,i=0,s=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return C_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(C_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return D_.setFromEuler(this),this.setFromQuaternion(D_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class X0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ay=0;const U_=new st,dr=new Es,ia=new en,fc=new st,No=new st,Ry=new st,wy=new Es,L_=new st(1,0,0),N_=new st(0,1,0),O_=new st(0,0,1),P_={type:"added"},Cy={type:"removed"},pr={type:"childadded",child:null},fh={type:"childremoved",child:null};class bn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new st,i=new zi,s=new Es,l=new st(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ue}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(L_,t)}rotateY(t){return this.rotateOnAxis(N_,t)}rotateZ(t){return this.rotateOnAxis(O_,t)}translateOnAxis(t,i){return U_.copy(t).applyQuaternion(this.quaternion),this.position.add(U_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(L_,t)}translateY(t){return this.translateOnAxis(N_,t)}translateZ(t){return this.translateOnAxis(O_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?fc.copy(t):fc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(No,fc,this.up):ia.lookAt(fc,No,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(ia),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(P_),pr.child=t,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Cy),fh.child=t,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(P_),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,Ry),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,wy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),x=h(t.skeletons),M=h(t.animations),A=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new st(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new st,aa=new st,hh=new st,sa=new st,mr=new st,gr=new st,I_=new st,dh=new st,ph=new st,mh=new st,gh=new tn,_h=new tn,vh=new tn;class xi{constructor(t=new st,i=new st,s=new st){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),vi.subVectors(t,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){vi.subVectors(l,i),aa.subVectors(s,i),hh.subVectors(t,i);const h=vi.dot(vi),d=vi.dot(aa),m=vi.dot(hh),p=aa.dot(aa),g=aa.dot(hh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,M=(p*m-d*g)*x,A=(h*g-d*m)*x;return u.set(1-M-A,A,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,sa.x),m.addScaledVector(h,sa.y),m.addScaledVector(d,sa.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return gh.setScalar(0),_h.setScalar(0),vh.setScalar(0),gh.fromBufferAttribute(t,i),_h.fromBufferAttribute(t,s),vh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(gh,u.x),h.addScaledVector(_h,u.y),h.addScaledVector(vh,u.z),h}static isFrontFacing(t,i,s,l){return vi.subVectors(s,i),aa.subVectors(t,i),vi.cross(aa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),vi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return xi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;mr.subVectors(l,s),gr.subVectors(u,s),dh.subVectors(t,s);const m=mr.dot(dh),p=gr.dot(dh);if(m<=0&&p<=0)return i.copy(s);ph.subVectors(t,l);const g=mr.dot(ph),v=gr.dot(ph);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(mr,h);mh.subVectors(t,u);const M=mr.dot(mh),A=gr.dot(mh);if(A>=0&&M<=A)return i.copy(u);const R=M*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(gr,d);const y=g*A-M*v;if(y<=0&&v-g>=0&&M-A>=0)return I_.subVectors(u,l),d=(v-g)/(v-g+(M-A)),i.copy(l).addScaledVector(I_,d);const _=1/(y+R+x);return h=R*_,d=x*_,i.copy(s).addScaledVector(mr,h).addScaledVector(gr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},hc={h:0,s:0,l:0};function xh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Me{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=dy(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=xh(h,u,t+1/3),this.g=xh(h,u,t),this.b=xh(h,u,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const s=W0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return be.workingToColorSpace(Un.copy(this),t),Math.round(xe(Un.r*255,0,255))*65536+Math.round(xe(Un.g*255,0,255))*256+Math.round(xe(Un.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,u=Un.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ci){be.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+i,Ba.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ba),t.getHSL(hc);const s=eh(Ba.h,hc.h,i),l=eh(Ba.s,hc.s,i),u=eh(Ba.l,hc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Me;Me.NAMES=W0;let Dy=0;class Lr extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=br,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Ph,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Oh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ph&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Y0 extends Lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=D0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new st,dc=new le;let Uy=0;class Ii{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=E_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Do(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Do(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Do(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Do(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Do(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==E_&&(t.usage=this.usage),t}}class q0 extends Ii{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class j0 extends Ii{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Mi extends Ii{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Ly=0;const li=new en,Sh=new bn,_r=new st,ti=new qo,Oo=new qo,Sn=new st;class Fi extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(V0(t)?j0:q0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ue().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,s){return li.makeTranslation(t,i,s),this.applyMatrix4(li),this}scale(t,i,s){return li.makeScale(t,i,s),this.applyMatrix4(li),this}lookAt(t){return Sh.lookAt(t),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Mi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ti.min,Oo.min),ti.expandByPoint(Sn),Sn.addVectors(ti.max,Oo.max),ti.expandByPoint(Sn)):(ti.expandByPoint(Oo.min),ti.expandByPoint(Oo.max))}ti.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(_r.fromBufferAttribute(t,p),Sn.add(_r)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let $=0;$<s.count;$++)d[$]=new st,m[$]=new st;const p=new st,g=new st,v=new st,x=new le,M=new le,A=new le,R=new st,y=new st;function _($,C,w){p.fromBufferAttribute(s,$),g.fromBufferAttribute(s,C),v.fromBufferAttribute(s,w),x.fromBufferAttribute(u,$),M.fromBufferAttribute(u,C),A.fromBufferAttribute(u,w),g.sub(p),v.sub(p),M.sub(x),A.sub(x);const B=1/(M.x*A.y-A.x*M.y);isFinite(B)&&(R.copy(g).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(B),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-A.x).multiplyScalar(B),d[$].add(R),d[C].add(R),d[w].add(R),m[$].add(y),m[C].add(y),m[w].add(y))}let H=this.groups;H.length===0&&(H=[{start:0,count:t.count}]);for(let $=0,C=H.length;$<C;++$){const w=H[$],B=w.start,J=w.count;for(let ct=B,dt=B+J;ct<dt;ct+=3)_(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const P=new st,U=new st,z=new st,V=new st;function G($){z.fromBufferAttribute(l,$),V.copy(z);const C=d[$];P.copy(C),P.sub(z.multiplyScalar(z.dot(C))).normalize(),U.crossVectors(V,C);const B=U.dot(m[$])<0?-1:1;h.setXYZW($,P.x,P.y,P.z,B)}for(let $=0,C=H.length;$<C;++$){const w=H[$],B=w.start,J=w.count;for(let ct=B,dt=B+J;ct<dt;ct+=3)G(t.getX(ct+0)),G(t.getX(ct+1)),G(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new st,u=new st,h=new st,d=new st,m=new st,p=new st,g=new st,v=new st;if(t)for(let x=0,M=t.count;x<M;x+=3){const A=t.getX(x+0),R=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let M=0,A=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let _=0;_<g;_++)x[A++]=p[M++]}return new Ii(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const B_=new en,hs=new Ld,pc=new Vc,z_=new st,mc=new st,gc=new st,_c=new st,yh=new st,vc=new st,F_=new st,xc=new st;class Pi extends bn{constructor(t=new Fi,i=new Y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){vc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(yh.fromBufferAttribute(v,t),h?vc.addScaledVector(yh,g):vc.addScaledVector(yh.sub(i),g))}i.add(vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(u),hs.copy(t.ray).recast(t.near),!(pc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(pc,z_)===null||hs.origin.distanceToSquared(z_)>(t.far-t.near)**2))&&(B_.copy(u).invert(),hs.copy(t.ray).applyMatrix4(B_),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,hs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const y=x[A],_=h[y.materialIndex],H=Math.max(y.start,M.start),P=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=H,z=P;U<z;U+=3){const V=d.getX(U),G=d.getX(U+1),$=d.getX(U+2);l=Sc(this,_,t,s,p,g,v,V,G,$),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=A,_=R;y<_;y+=3){const H=d.getX(y),P=d.getX(y+1),U=d.getX(y+2);l=Sc(this,h,t,s,p,g,v,H,P,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=x.length;A<R;A++){const y=x[A],_=h[y.materialIndex],H=Math.max(y.start,M.start),P=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=H,z=P;U<z;U+=3){const V=U,G=U+1,$=U+2;l=Sc(this,_,t,s,p,g,v,V,G,$),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=A,_=R;y<_;y+=3){const H=y,P=y+1,U=y+2;l=Sc(this,h,t,s,p,g,v,H,P,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ny(r,t,i,s,l,u,h,d){let m;if(t.side===Xn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Xa,d),m===null)return null;xc.copy(d),xc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(xc);return p<i.near||p>i.far?null:{distance:p,point:xc.clone(),object:r}}function Sc(r,t,i,s,l,u,h,d,m,p){r.getVertexPosition(d,mc),r.getVertexPosition(m,gc),r.getVertexPosition(p,_c);const g=Ny(r,t,i,s,mc,gc,_c,F_);if(g){const v=new st;xi.getBarycoord(F_,mc,gc,_c,v),l&&(g.uv=xi.getInterpolatedAttribute(l,d,m,p,v,new le)),u&&(g.uv1=xi.getInterpolatedAttribute(u,d,m,p,v,new le)),h&&(g.normal=xi.getInterpolatedAttribute(h,d,m,p,v,new st),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new st,materialIndex:0};xi.getNormal(mc,gc,_c,x.normal),g.face=x,g.barycoord=v}return g}class jo extends Fi{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let x=0,M=0;A("z","y","x",-1,-1,s,i,t,h,u,0),A("z","y","x",1,-1,s,i,-t,h,u,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,u,4),A("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Mi(p,3)),this.setAttribute("normal",new Mi(g,3)),this.setAttribute("uv",new Mi(v,2));function A(R,y,_,H,P,U,z,V,G,$,C){const w=U/G,B=z/$,J=U/2,ct=z/2,dt=V/2,rt=G+1,N=$+1;let q=0,W=0;const yt=new st;for(let D=0;D<N;D++){const tt=D*B-ct;for(let _t=0;_t<rt;_t++){const mt=_t*w-J;yt[R]=mt*H,yt[y]=tt*P,yt[_]=dt,p.push(yt.x,yt.y,yt.z),yt[R]=0,yt[y]=0,yt[_]=V>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(_t/G),v.push(1-D/$),q+=1}}for(let D=0;D<$;D++)for(let tt=0;tt<G;tt++){const _t=x+tt+rt*D,mt=x+tt+rt*(D+1),wt=x+(tt+1)+rt*(D+1),zt=x+(tt+1)+rt*D;m.push(_t,mt,zt),m.push(mt,wt,zt),W+=6}d.addGroup(M,W,C),M+=W,x+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ur(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function In(r){const t={};for(let i=0;i<r.length;i++){const s=Ur(r[i]);for(const l in s)t[l]=s[l]}return t}function Oy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Z0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const Py={clone:Ur,merge:In};var Iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,By=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iy,this.fragmentShader=By,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=Oy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class K0 extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new st,H_=new le,G_=new le;class ui extends K0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=yd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,H_,G_),i.subVectors(G_,H_)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Nc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,xr=1;class zy extends bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(vr,xr,t,i);l.layers=this.layers,this.add(l);const u=new ui(vr,xr,t,i);u.layers=this.layers,this.add(u);const h=new ui(vr,xr,t,i);h.layers=this.layers,this.add(h);const d=new ui(vr,xr,t,i);d.layers=this.layers,this.add(d);const m=new ui(vr,xr,t,i);m.layers=this.layers,this.add(m);const p=new ui(vr,xr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ic)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,x,M),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Q0 extends Wn{constructor(t=[],i=wr,s,l,u,h,d,m,p,g){super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fy extends Ts{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Q0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jo(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Ur(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Va});u.uniforms.tEquirect.value=i;const h=new Pi(l,u),d=i.minFilter;return i.minFilter===ys&&(i.minFilter=Ni),new zy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class yc extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hy={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,s),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Hy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new yc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Gy extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Eh=new st,Vy=new st,ky=new ue;class Ha{constructor(t=new st(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Eh.subVectors(s,i).cross(Vy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Eh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ky.getNormalMatrix(t),l=this.coplanarPoint(Eh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Vc,Xy=new le(.5,.5),Mc=new st;class Nd{constructor(t=new Ha,i=new Ha,s=new Ha,l=new Ha,u=new Ha,h=new Ha){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Oi,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],M=u[7],A=u[8],R=u[9],y=u[10],_=u[11],H=u[12],P=u[13],U=u[14],z=u[15];if(l[0].setComponents(p-h,M-g,_-A,z-H).normalize(),l[1].setComponents(p+h,M+g,_+A,z+H).normalize(),l[2].setComponents(p+d,M+v,_+R,z+P).normalize(),l[3].setComponents(p-d,M-v,_-R,z-P).normalize(),s)l[4].setComponents(m,x,y,U).normalize(),l[5].setComponents(p-m,M-x,_-y,z-U).normalize();else if(l[4].setComponents(p-m,M-x,_-y,z-U).normalize(),i===Oi)l[5].setComponents(p+m,M+x,_+y,z+U).normalize();else if(i===Ic)l[5].setComponents(m,x,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);const i=Xy.distanceTo(t.center);return ds.radius=.7071067811865476+i,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class J0 extends Lr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zc=new st,Fc=new st,V_=new en,Po=new Ld,Ec=new Vc,Th=new st,k_=new st;class Wy extends bn{constructor(t=new Fi,i=new J0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)zc.fromBufferAttribute(i,l-1),Fc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=zc.distanceTo(Fc);t.setAttribute("lineDistance",new Mi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=u,t.ray.intersectsSphere(Ec)===!1)return;V_.copy(l).invert(),Po.copy(t.ray).applyMatrix4(V_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),A=Math.min(g.count,h.start+h.count);for(let R=M,y=A-1;R<y;R+=p){const _=g.getX(R),H=g.getX(R+1),P=Tc(this,t,Po,m,_,H,R);P&&i.push(P)}if(this.isLineLoop){const R=g.getX(A-1),y=g.getX(M),_=Tc(this,t,Po,m,R,y,A-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),A=Math.min(x.count,h.start+h.count);for(let R=M,y=A-1;R<y;R+=p){const _=Tc(this,t,Po,m,R,R+1,R);_&&i.push(_)}if(this.isLineLoop){const R=Tc(this,t,Po,m,A-1,M,A-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Tc(r,t,i,s,l,u,h){const d=r.geometry.attributes.position;if(zc.fromBufferAttribute(d,l),Fc.fromBufferAttribute(d,u),i.distanceSqToSegment(zc,Fc,Th,k_)>s)return;Th.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Th);if(!(p<t.near||p>t.far))return{distance:p,point:k_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const X_=new st,W_=new st;class Yy extends Wy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)X_.fromBufferAttribute(i,l),W_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+X_.distanceTo(W_);t.setAttribute("lineDistance",new Mi(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $0 extends Wn{constructor(t,i,s=Ms,l,u,h,d=yi,m=yi,p,g=Go,v=1){if(g!==Go&&g!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:v};super(x,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ud(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tv extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class kc extends Fi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=t/d,x=i/m,M=[],A=[],R=[],y=[];for(let _=0;_<g;_++){const H=_*x-h;for(let P=0;P<p;P++){const U=P*v-u;A.push(U,-H,0),R.push(0,0,1),y.push(P/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let H=0;H<d;H++){const P=H+p*_,U=H+p*(_+1),z=H+1+p*(_+1),V=H+1+p*_;M.push(P,U,V),M.push(U,z,V)}this.setIndex(M),this.setAttribute("position",new Mi(A,3)),this.setAttribute("normal",new Mi(R,3)),this.setAttribute("uv",new Mi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.width,t.height,t.widthSegments,t.heightSegments)}}class qy extends Lr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=H0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jy extends Lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zy extends Lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ev extends bn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const bh=new en,Y_=new st,q_=new st;class Ky{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Y_.setFromMatrixPosition(t.matrixWorld),i.position.copy(Y_),q_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(q_),i.updateMatrixWorld(),bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class nv extends K0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Qy extends Ky{constructor(){super(new nv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jy extends ev{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new Qy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $y extends ev{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class tM extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class j_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eM extends bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Z_(r,t,i,s){const l=nM(s);switch(i){case I0:return r*t;case z0:return r*t/l.components*l.byteLength;case wd:return r*t/l.components*l.byteLength;case F0:return r*t*2/l.components*l.byteLength;case Cd:return r*t*2/l.components*l.byteLength;case B0:return r*t*3/l.components*l.byteLength;case Si:return r*t*4/l.components*l.byteLength;case Dd:return r*t*4/l.components*l.byteLength;case Cc:case Dc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jh:case Kh:return Math.max(r,16)*Math.max(t,8)/4;case qh:case Zh:return Math.max(r,8)*Math.max(t,8)/2;case Qh:case Jh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $h:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ed:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case nd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case id:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ad:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case sd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case rd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case od:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ld:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case cd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ud:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case fd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case hd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case dd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case pd:case md:case gd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case _d:case vd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case xd:case Sd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function nM(r){switch(r){case Bi:case L0:return{byteLength:1,components:1};case Fo:case N0:case Wo:return{byteLength:2,components:1};case Ad:case Rd:return{byteLength:2,components:4};case Ms:case bd:case oa:return{byteLength:4,components:1};case O0:case P0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Td);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iv(){let r=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function iM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,g);else{v.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<v.length;M++){const A=v[x],R=v[M];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,v[x]=R)}v.length=x+1;for(let M=0,A=v.length;M<A;M++){const R=v[M];r.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var aM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sM=`#ifdef USE_ALPHAHASH
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
#endif`,rM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uM=`#ifdef USE_AOMAP
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
#endif`,fM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hM=`#ifdef USE_BATCHING
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
#endif`,dM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_M=`#ifdef USE_IRIDESCENCE
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
#endif`,vM=`#ifdef USE_BUMPMAP
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
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RM=`#define PI 3.141592653589793
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
} // validated`,wM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WM=`#ifdef USE_GRADIENTMAP
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
}`,YM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
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
#endif`,KM=`#ifdef USE_ENVMAP
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
#endif`,QM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
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
#endif`,nE=`struct PhysicalMaterial {
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
}`,iE=`
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
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
#endif`,sE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dE=`#if defined( USE_POINTS_UV )
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
#endif`,pE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
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
#endif`,SE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
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
#endif`,RE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VE=`float getShadowMask() {
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
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aT=`uniform sampler2D t2D;
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`#include <common>
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
}`,uT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fT=`#define DISTANCE
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
}`,hT=`#define DISTANCE
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
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
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
}`,gT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,vT=`uniform vec3 diffuse;
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
}`,xT=`#define LAMBERT
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
}`,ST=`#define LAMBERT
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
}`,yT=`#define MATCAP
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
}`,MT=`#define MATCAP
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
}`,ET=`#define NORMAL
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
}`,TT=`#define NORMAL
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
}`,bT=`#define PHONG
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
}`,AT=`#define PHONG
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
}`,RT=`#define STANDARD
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
}`,wT=`#define STANDARD
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
}`,CT=`#define TOON
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
}`,DT=`#define TOON
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
}`,UT=`uniform float size;
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
}`,LT=`uniform vec3 diffuse;
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
}`,NT=`#include <common>
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
}`,OT=`uniform vec3 color;
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
}`,PT=`uniform float rotation;
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
}`,IT=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:aM,alphahash_pars_fragment:sM,alphamap_fragment:rM,alphamap_pars_fragment:oM,alphatest_fragment:lM,alphatest_pars_fragment:cM,aomap_fragment:uM,aomap_pars_fragment:fM,batching_pars_vertex:hM,batching_vertex:dM,begin_vertex:pM,beginnormal_vertex:mM,bsdfs:gM,iridescence_fragment:_M,bumpmap_pars_fragment:vM,clipping_planes_fragment:xM,clipping_planes_pars_fragment:SM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:MM,color_fragment:EM,color_pars_fragment:TM,color_pars_vertex:bM,color_vertex:AM,common:RM,cube_uv_reflection_fragment:wM,defaultnormal_vertex:CM,displacementmap_pars_vertex:DM,displacementmap_vertex:UM,emissivemap_fragment:LM,emissivemap_pars_fragment:NM,colorspace_fragment:OM,colorspace_pars_fragment:PM,envmap_fragment:IM,envmap_common_pars_fragment:BM,envmap_pars_fragment:zM,envmap_pars_vertex:FM,envmap_physical_pars_fragment:KM,envmap_vertex:HM,fog_vertex:GM,fog_pars_vertex:VM,fog_fragment:kM,fog_pars_fragment:XM,gradientmap_pars_fragment:WM,lightmap_pars_fragment:YM,lights_lambert_fragment:qM,lights_lambert_pars_fragment:jM,lights_pars_begin:ZM,lights_toon_fragment:QM,lights_toon_pars_fragment:JM,lights_phong_fragment:$M,lights_phong_pars_fragment:tE,lights_physical_fragment:eE,lights_physical_pars_fragment:nE,lights_fragment_begin:iE,lights_fragment_maps:aE,lights_fragment_end:sE,logdepthbuf_fragment:rE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:cE,map_fragment:uE,map_pars_fragment:fE,map_particle_fragment:hE,map_particle_pars_fragment:dE,metalnessmap_fragment:pE,metalnessmap_pars_fragment:mE,morphinstance_vertex:gE,morphcolor_vertex:_E,morphnormal_vertex:vE,morphtarget_pars_vertex:xE,morphtarget_vertex:SE,normal_fragment_begin:yE,normal_fragment_maps:ME,normal_pars_fragment:EE,normal_pars_vertex:TE,normal_vertex:bE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:wE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:DE,opaque_fragment:UE,packing:LE,premultiplied_alpha_fragment:NE,project_vertex:OE,dithering_fragment:PE,dithering_pars_fragment:IE,roughnessmap_fragment:BE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:FE,shadowmap_pars_vertex:HE,shadowmap_vertex:GE,shadowmask_pars_fragment:VE,skinbase_vertex:kE,skinning_pars_vertex:XE,skinning_vertex:WE,skinnormal_vertex:YE,specularmap_fragment:qE,specularmap_pars_fragment:jE,tonemapping_fragment:ZE,tonemapping_pars_fragment:KE,transmission_fragment:QE,transmission_pars_fragment:JE,uv_pars_fragment:$E,uv_pars_vertex:tT,uv_vertex:eT,worldpos_vertex:nT,background_vert:iT,background_frag:aT,backgroundCube_vert:sT,backgroundCube_frag:rT,cube_vert:oT,cube_frag:lT,depth_vert:cT,depth_frag:uT,distanceRGBA_vert:fT,distanceRGBA_frag:hT,equirect_vert:dT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:_T,meshbasic_frag:vT,meshlambert_vert:xT,meshlambert_frag:ST,meshmatcap_vert:yT,meshmatcap_frag:MT,meshnormal_vert:ET,meshnormal_frag:TT,meshphong_vert:bT,meshphong_frag:AT,meshphysical_vert:RT,meshphysical_frag:wT,meshtoon_vert:CT,meshtoon_frag:DT,points_vert:UT,points_frag:LT,shadow_vert:NT,shadow_frag:OT,sprite_vert:PT,sprite_frag:IT},Pt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ui={basic:{uniforms:In([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:In([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:In([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:In([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:In([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Me(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:In([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:In([Pt.points,Pt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:In([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:In([Pt.common,Pt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:In([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:In([Pt.sprite,Pt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:In([Pt.common,Pt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:In([Pt.lights,Pt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ui.physical={uniforms:In([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const bc={r:0,b:0,g:0},ps=new zi,BT=new en;function zT(r,t,i,s,l,u,h){const d=new Me(0);let m=u===!0?0:1,p,g,v=null,x=0,M=null;function A(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:t).get(U)),U}function R(P){let U=!1;const z=A(P);z===null?_(d,m):z&&z.isColor&&(_(z,1),U=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(P,U){const z=A(U);z&&(z.isCubeTexture||z.mapping===Gc)?(g===void 0&&(g=new Pi(new jo(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Ur(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,G,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ps.copy(U.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(BT.makeRotationFromEuler(ps)),g.material.toneMapped=be.getTransfer(z.colorSpace)!==ze,(v!==z||x!==z.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,v=z,x=z.version,M=r.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Pi(new kc(2,2),new Wa({name:"BackgroundMaterial",uniforms:Ur(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=be.getTransfer(z.colorSpace)!==ze,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||x!==z.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,v=z,x=z.version,M=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,U){P.getRGB(bc,Z0(r)),s.buffers.color.setClear(bc.r,bc.g,bc.b,U,h)}function H(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,_(d,m)},render:R,addToRenderList:y,dispose:H}}function FT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(w,B,J,ct,dt){let rt=!1;const N=v(ct,J,B);u!==N&&(u=N,p(u.object)),rt=M(w,ct,J,dt),rt&&A(w,ct,J,dt),dt!==null&&t.update(dt,r.ELEMENT_ARRAY_BUFFER),(rt||h)&&(h=!1,U(w,B,J,ct),dt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function v(w,B,J){const ct=J.wireframe===!0;let dt=s[w.id];dt===void 0&&(dt={},s[w.id]=dt);let rt=dt[B.id];rt===void 0&&(rt={},dt[B.id]=rt);let N=rt[ct];return N===void 0&&(N=x(m()),rt[ct]=N),N}function x(w){const B=[],J=[],ct=[];for(let dt=0;dt<i;dt++)B[dt]=0,J[dt]=0,ct[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:ct,object:w,attributes:{},index:null}}function M(w,B,J,ct){const dt=u.attributes,rt=B.attributes;let N=0;const q=J.getAttributes();for(const W in q)if(q[W].location>=0){const D=dt[W];let tt=rt[W];if(tt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor)),D===void 0||D.attribute!==tt||tt&&D.data!==tt.data)return!0;N++}return u.attributesNum!==N||u.index!==ct}function A(w,B,J,ct){const dt={},rt=B.attributes;let N=0;const q=J.getAttributes();for(const W in q)if(q[W].location>=0){let D=rt[W];D===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(D=w.instanceColor));const tt={};tt.attribute=D,D&&D.data&&(tt.data=D.data),dt[W]=tt,N++}u.attributes=dt,u.attributesNum=N,u.index=ct}function R(){const w=u.newAttributes;for(let B=0,J=w.length;B<J;B++)w[B]=0}function y(w){_(w,0)}function _(w,B){const J=u.newAttributes,ct=u.enabledAttributes,dt=u.attributeDivisors;J[w]=1,ct[w]===0&&(r.enableVertexAttribArray(w),ct[w]=1),dt[w]!==B&&(r.vertexAttribDivisor(w,B),dt[w]=B)}function H(){const w=u.newAttributes,B=u.enabledAttributes;for(let J=0,ct=B.length;J<ct;J++)B[J]!==w[J]&&(r.disableVertexAttribArray(J),B[J]=0)}function P(w,B,J,ct,dt,rt,N){N===!0?r.vertexAttribIPointer(w,B,J,dt,rt):r.vertexAttribPointer(w,B,J,ct,dt,rt)}function U(w,B,J,ct){R();const dt=ct.attributes,rt=J.getAttributes(),N=B.defaultAttributeValues;for(const q in rt){const W=rt[q];if(W.location>=0){let yt=dt[q];if(yt===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const D=yt.normalized,tt=yt.itemSize,_t=t.get(yt);if(_t===void 0)continue;const mt=_t.buffer,wt=_t.type,zt=_t.bytesPerElement,at=wt===r.INT||wt===r.UNSIGNED_INT||yt.gpuType===bd;if(yt.isInterleavedBufferAttribute){const ht=yt.data,bt=ht.stride,Yt=yt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<W.locationSize;Ht++)_(W.location+Ht,ht.meshPerAttribute);w.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<W.locationSize;Ht++)y(W.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Ht=0;Ht<W.locationSize;Ht++)P(W.location+Ht,tt/W.locationSize,wt,D,bt*zt,(Yt+tt/W.locationSize*Ht)*zt,at)}else{if(yt.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)_(W.location+ht,yt.meshPerAttribute);w.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ht=0;ht<W.locationSize;ht++)y(W.location+ht);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let ht=0;ht<W.locationSize;ht++)P(W.location+ht,tt/W.locationSize,wt,D,tt*zt,tt/W.locationSize*ht*zt,at)}}else if(N!==void 0){const D=N[q];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(W.location,D);break;case 3:r.vertexAttrib3fv(W.location,D);break;case 4:r.vertexAttrib4fv(W.location,D);break;default:r.vertexAttrib1fv(W.location,D)}}}}H()}function z(){$();for(const w in s){const B=s[w];for(const J in B){const ct=B[J];for(const dt in ct)g(ct[dt].object),delete ct[dt];delete B[J]}delete s[w]}}function V(w){if(s[w.id]===void 0)return;const B=s[w.id];for(const J in B){const ct=B[J];for(const dt in ct)g(ct[dt].object),delete ct[dt];delete B[J]}delete s[w.id]}function G(w){for(const B in s){const J=s[B];if(J[w.id]===void 0)continue;const ct=J[w.id];for(const dt in ct)g(ct[dt].object),delete ct[dt];delete J[w.id]}}function $(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:V,releaseStatesOfProgram:G,initAttributes:R,enableAttribute:y,disableUnusedAttributes:H}}function HT(r,t,i){let s;function l(p){s=p}function u(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let M=0;for(let A=0;A<v;A++)M+=g[A];i.update(M,s,1)}function m(p,g,v,x){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],g[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let A=0;for(let R=0;R<v;R++)A+=g[R]*x[R];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function GT(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const G=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(G){return!(G!==Si&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(G){const $=G===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==Bi&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==oa&&!$)}function m(G){if(G==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),H=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=A>0,V=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:H,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:z,maxSamples:V}}function VT(r){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ha,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const A=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,_=r.get(v);if(!l||A===null||A.length===0||u&&!y)u?g(null):p();else{const H=u?0:s,P=H*4;let U=_.clippingState||null;m.value=U,U=g(A,x,P,M);for(let z=0;z!==P;++z)U[z]=i[z];_.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=H}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,x,M,A){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,A!==!0||y===null){const _=M+R*4,H=x.matrixWorldInverse;d.getNormalMatrix(H),(y===null||y.length<_)&&(y=new Float32Array(_));for(let P=0,U=M;P!==R;++P,U+=4)h.copy(v[P]).applyMatrix4(H,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function kT(r){let t=new WeakMap;function i(h,d){return d===kh?h.mapping=wr:d===Xh&&(h.mapping=Cr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===kh||d===Xh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Fy(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Er=4,K_=[.125,.215,.35,.446,.526,.582],xs=20,Ah=new nv,Q_=new Me;let Rh=null,wh=0,Ch=0,Dh=!1;const gs=(1+Math.sqrt(5))/2,Sr=1/gs,J_=[new st(-gs,Sr,0),new st(gs,Sr,0),new st(-Sr,0,gs),new st(Sr,0,gs),new st(0,gs,-Sr),new st(0,gs,Sr),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],XT=new st;class $_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=XT}=u;Rh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,wh,Ch),this._renderer.xr.enabled=Dh,t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===wr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Wo,format:Si,colorSpace:Dr,depthBuffer:!1},l=t0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WT(u)),this._blurMaterial=YT(u,t,i)}return l}_compileMaterial(t){const i=new Pi(this._lodPlanes[0],t);this._renderer.compile(i,Ah)}_sceneToCubeUV(t,i,s,l,u){const m=new ui(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(Q_),v.toneMapping=ka,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new Y0({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),y=new Pi(new jo,R);let _=!1;const H=t.background;H?H.isColor&&(R.color.copy(H),t.background=null,_=!0):(R.color.copy(Q_),_=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[P],u.y,u.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[P]));const z=this._cubeSize;Ac(l,U*z,P>2?z:0,z,z),v.setRenderTarget(l),_&&v.render(y,m),v.render(t,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=x,t.background=H}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===wr||t.mapping===Cr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Pi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Ac(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ah)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=J_[(l-u-1)%J_.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Pi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*xs-1),R=u/A,y=isFinite(u)?1+Math.floor(g*R):xs;y>xs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xs}`);const _=[];let H=0;for(let G=0;G<xs;++G){const $=G/R,C=Math.exp(-$*$/2);_.push(C),G===0?H+=C:G<y&&(H+=2*C)}for(let G=0;G<_.length;G++)_[G]=_[G]/H;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=A,x.mipInt.value=P-s;const U=this._sizeLods[l],z=3*U*(l>P-Er?l-P+Er:0),V=4*(this._cubeSize-U);Ac(i,z,V,3*U,2*U),m.setRenderTarget(i),m.render(v,Ah)}}function WT(r){const t=[],i=[],s=[];let l=r;const u=r-Er+1+K_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Er?m=K_[h-r+Er-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,A=6,R=3,y=2,_=1,H=new Float32Array(R*A*M),P=new Float32Array(y*A*M),U=new Float32Array(_*A*M);for(let V=0;V<M;V++){const G=V%3*2/3-1,$=V>2?0:-1,C=[G,$,0,G+2/3,$,0,G+2/3,$+1,0,G,$,0,G+2/3,$+1,0,G,$+1,0];H.set(C,R*A*V),P.set(x,y*A*V);const w=[V,V,V,V,V,V];U.set(w,_*A*V)}const z=new Fi;z.setAttribute("position",new Ii(H,R)),z.setAttribute("uv",new Ii(P,y)),z.setAttribute("faceIndex",new Ii(U,_)),t.push(z),l>Er&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function t0(r,t,i){const s=new Ts(r,t,i);return s.texture.mapping=Gc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ac(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function YT(r,t,i){const s=new Float32Array(xs),l=new st(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Od(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function e0(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Od(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function n0(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Od(){return`

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
	`}function qT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===kh||m===Xh,g=m===wr||m===Cr;if(p||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new $_(r)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new $_(r)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function jT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ko("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function ZT(r,t,i,s){const l={},u=new WeakMap;function h(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const A in x.attributes)t.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,A=v.attributes.position;let R=0;if(M!==null){const H=M.array;R=M.version;for(let P=0,U=H.length;P<U;P+=3){const z=H[P+0],V=H[P+1],G=H[P+2];x.push(z,V,V,G,G,z)}}else if(A!==void 0){const H=A.array;R=A.version;for(let P=0,U=H.length/3-1;P<U;P+=3){const z=P+0,V=P+1,G=P+2;x.push(z,V,V,G,G,z)}}else return;const y=new(V0(x)?j0:q0)(x,1);y.version=R;const _=u.get(v);_&&t.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function KT(r,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){r.drawElements(s,M,u,x*h),i.update(M,s,1)}function p(x,M,A){A!==0&&(r.drawElementsInstanced(s,M,u,x*h,A),i.update(M,s,A))}function g(x,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,A);let y=0;for(let _=0;_<A;_++)y+=M[_];i.update(y,s,1)}function v(x,M,A,R){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,R,0,A);let _=0;for(let H=0;H<A;H++)_+=M[H]*R[H];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function QT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function JT(r,t,i){const s=new WeakMap,l=new tn;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let w=function(){$.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],H=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),R===!0&&(U=2),y===!0&&(U=3);let z=d.attributes.position.count*U,V=1;z>t.maxTextureSize&&(V=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const G=new Float32Array(z*V*4*v),$=new k0(G,z,V,v);$.type=oa,$.needsUpdate=!0;const C=U*4;for(let B=0;B<v;B++){const J=_[B],ct=H[B],dt=P[B],rt=z*V*4*B;for(let N=0;N<J.count;N++){const q=N*C;A===!0&&(l.fromBufferAttribute(J,N),G[rt+q+0]=l.x,G[rt+q+1]=l.y,G[rt+q+2]=l.z,G[rt+q+3]=0),R===!0&&(l.fromBufferAttribute(ct,N),G[rt+q+4]=l.x,G[rt+q+5]=l.y,G[rt+q+6]=l.z,G[rt+q+7]=0),y===!0&&(l.fromBufferAttribute(dt,N),G[rt+q+8]=l.x,G[rt+q+9]=l.y,G[rt+q+10]=l.z,G[rt+q+11]=dt.itemSize===4?l.w:1)}}x={count:v,texture:$,size:new le(z,V)},s.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const R=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:u}}function $T(r,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const av=new Wn,i0=new $0(1,1),sv=new k0,rv=new My,ov=new Q0,a0=[],s0=[],r0=new Float32Array(16),o0=new Float32Array(9),l0=new Float32Array(4);function Nr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=a0[l];if(u===void 0&&(u=new Float32Array(l),a0[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(u,d)}return u}function pn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Xc(r,t){let i=s0[t];i===void 0&&(i=new Int32Array(t),s0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function tb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function eb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2fv(this.addr,t),mn(i,t)}}function nb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;r.uniform3fv(this.addr,t),mn(i,t)}}function ib(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4fv(this.addr,t),mn(i,t)}}function ab(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;l0.set(s),r.uniformMatrix2fv(this.addr,!1,l0),mn(i,s)}}function sb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;o0.set(s),r.uniformMatrix3fv(this.addr,!1,o0),mn(i,s)}}function rb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;r0.set(s),r.uniformMatrix4fv(this.addr,!1,r0),mn(i,s)}}function ob(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function lb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2iv(this.addr,t),mn(i,t)}}function cb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3iv(this.addr,t),mn(i,t)}}function ub(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4iv(this.addr,t),mn(i,t)}}function fb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function hb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2uiv(this.addr,t),mn(i,t)}}function db(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3uiv(this.addr,t),mn(i,t)}}function pb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4uiv(this.addr,t),mn(i,t)}}function mb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(i0.compareFunction=G0,u=i0):u=av,i.setTexture2D(t||u,l)}function gb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||rv,l)}function _b(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ov,l)}function vb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||sv,l)}function xb(r){switch(r){case 5126:return tb;case 35664:return eb;case 35665:return nb;case 35666:return ib;case 35674:return ab;case 35675:return sb;case 35676:return rb;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return ub;case 5125:return fb;case 36294:return hb;case 36295:return db;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return vb}}function Sb(r,t){r.uniform1fv(this.addr,t)}function yb(r,t){const i=Nr(t,this.size,2);r.uniform2fv(this.addr,i)}function Mb(r,t){const i=Nr(t,this.size,3);r.uniform3fv(this.addr,i)}function Eb(r,t){const i=Nr(t,this.size,4);r.uniform4fv(this.addr,i)}function Tb(r,t){const i=Nr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function bb(r,t){const i=Nr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Ab(r,t){const i=Nr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Rb(r,t){r.uniform1iv(this.addr,t)}function wb(r,t){r.uniform2iv(this.addr,t)}function Cb(r,t){r.uniform3iv(this.addr,t)}function Db(r,t){r.uniform4iv(this.addr,t)}function Ub(r,t){r.uniform1uiv(this.addr,t)}function Lb(r,t){r.uniform2uiv(this.addr,t)}function Nb(r,t){r.uniform3uiv(this.addr,t)}function Ob(r,t){r.uniform4uiv(this.addr,t)}function Pb(r,t,i){const s=this.cache,l=t.length,u=Xc(i,l);pn(s,u)||(r.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||av,u[h])}function Ib(r,t,i){const s=this.cache,l=t.length,u=Xc(i,l);pn(s,u)||(r.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||rv,u[h])}function Bb(r,t,i){const s=this.cache,l=t.length,u=Xc(i,l);pn(s,u)||(r.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ov,u[h])}function zb(r,t,i){const s=this.cache,l=t.length,u=Xc(i,l);pn(s,u)||(r.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||sv,u[h])}function Fb(r){switch(r){case 5126:return Sb;case 35664:return yb;case 35665:return Mb;case 35666:return Eb;case 35674:return Tb;case 35675:return bb;case 35676:return Ab;case 5124:case 35670:return Rb;case 35667:case 35671:return wb;case 35668:case 35672:return Cb;case 35669:case 35673:return Db;case 5125:return Ub;case 36294:return Lb;case 36295:return Nb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return zb}}class Hb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=xb(i.type)}}class Gb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Fb(i.type)}}class Vb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Uh=/(\w+)(\])?(\[|\.)?/g;function c0(r,t){r.seq.push(t),r.map[t.id]=t}function kb(r,t,i){const s=r.name,l=s.length;for(Uh.lastIndex=0;;){const u=Uh.exec(s),h=Uh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){c0(i,p===void 0?new Hb(d,r,t):new Gb(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new Vb(d),c0(i,v)),i=v}}}class Oc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);kb(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function u0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const Xb=37297;let Wb=0;function Yb(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const f0=new ue;function qb(r){be._getMatrix(f0,be.workingColorSpace,r);const t=`mat3( ${f0.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(r)){case Pc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function h0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),u=(r.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+Yb(r.getShaderSource(t),d)}else return u}function jb(r,t){const i=qb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Zb(r,t){let i;switch(t){case ZS:i="Linear";break;case KS:i="Reinhard";break;case QS:i="Cineon";break;case JS:i="ACESFilmic";break;case ty:i="AgX";break;case ey:i="Neutral";break;case $S:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new st;function Kb(){be.getLuminanceCoefficients(Rc);const r=Rc.x.toFixed(4),t=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function Jb(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function $b(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function zo(r){return r!==""}function d0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(r){return r.replace(tA,nA)}const eA=new Map;function nA(r,t){let i=de[t];if(i===void 0){const s=eA.get(t);if(s!==void 0)i=de[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Md(i)}const iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(r){return r.replace(iA,aA)}function aA(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function g0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===C0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===wS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function rA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wr:case Cr:t="ENVMAP_TYPE_CUBE";break;case Gc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function lA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case D0:t="ENVMAP_BLENDING_MULTIPLY";break;case qS:t="ENVMAP_BLENDING_MIX";break;case jS:t="ENVMAP_BLENDING_ADD";break}return t}function cA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function uA(r,t,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=sA(i),p=rA(i),g=oA(i),v=lA(i),x=cA(i),M=Qb(i),A=Jb(u),R=l.createProgram();let y,_,H=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(zo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(zo).join(`
`),_.length>0&&(_+=`
`)):(y=[g0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),_=[g0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?de.tonemapping_pars_fragment:"",i.toneMapping!==ka?Zb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,jb("linearToOutputTexel",i.outputColorSpace),Kb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),h=Md(h),h=d0(h,i),h=p0(h,i),d=Md(d),d=d0(d,i),d=p0(d,i),h=m0(h),d=m0(d),i.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===T_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===T_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=H+y+h,U=H+_+d,z=u0(l,l.VERTEX_SHADER,P),V=u0(l,l.FRAGMENT_SHADER,U);l.attachShader(R,z),l.attachShader(R,V),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function G(B){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(R)||"",ct=l.getShaderInfoLog(z)||"",dt=l.getShaderInfoLog(V)||"",rt=J.trim(),N=ct.trim(),q=dt.trim();let W=!0,yt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,z,V);else{const D=h0(l,z,"vertex"),tt=h0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+rt+`
`+D+`
`+tt)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(N===""||q==="")&&(yt=!1);yt&&(B.diagnostics={runnable:W,programLog:rt,vertexShader:{log:N,prefix:y},fragmentShader:{log:q,prefix:_}})}l.deleteShader(z),l.deleteShader(V),$=new Oc(l,R),C=$b(l,R)}let $;this.getUniforms=function(){return $===void 0&&G(this),$};let C;this.getAttributes=function(){return C===void 0&&G(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,Xb)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Wb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=V,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new dA(t),i.set(t,s)),s}}class dA{constructor(t){this.id=fA++,this.code=t,this.usedTimes=0}}function pA(r,t,i,s,l,u,h){const d=new X0,m=new hA,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,w,B,J,ct){const dt=J.fog,rt=ct.geometry,N=C.isMeshStandardMaterial?J.environment:null,q=(C.isMeshStandardMaterial?i:t).get(C.envMap||N),W=q&&q.mapping===Gc?q.image.height:null,yt=A[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const D=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,tt=D!==void 0?D.length:0;let _t=0;rt.morphAttributes.position!==void 0&&(_t=1),rt.morphAttributes.normal!==void 0&&(_t=2),rt.morphAttributes.color!==void 0&&(_t=3);let mt,wt,zt,at;if(yt){const ye=Ui[yt];mt=ye.vertexShader,wt=ye.fragmentShader}else mt=C.vertexShader,wt=C.fragmentShader,m.update(C),zt=m.getVertexShaderID(C),at=m.getFragmentShaderID(C);const ht=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Yt=ct.isInstancedMesh===!0,Ht=ct.isBatchedMesh===!0,Qt=!!C.map,Ze=!!C.matcap,I=!!q,Ae=!!C.aoMap,ae=!!C.lightMap,$t=!!C.bumpMap,It=!!C.normalMap,Ne=!!C.displacementMap,Gt=!!C.emissiveMap,re=!!C.metalnessMap,Ve=!!C.roughnessMap,ke=C.anisotropy>0,L=C.clearcoat>0,E=C.dispersion>0,F=C.iridescence>0,K=C.sheen>0,nt=C.transmission>0,Z=ke&&!!C.anisotropyMap,Mt=L&&!!C.clearcoatMap,vt=L&&!!C.clearcoatNormalMap,Ct=L&&!!C.clearcoatRoughnessMap,Bt=F&&!!C.iridescenceMap,Et=F&&!!C.iridescenceThicknessMap,Nt=K&&!!C.sheenColorMap,Zt=K&&!!C.sheenRoughnessMap,Wt=!!C.specularMap,Ut=!!C.specularColorMap,oe=!!C.specularIntensityMap,X=nt&&!!C.transmissionMap,Rt=nt&&!!C.thicknessMap,Dt=!!C.gradientMap,Ft=!!C.alphaMap,Tt=C.alphaTest>0,St=!!C.alphaHash,Xt=!!C.extensions;let se=ka;C.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(se=r.toneMapping);const we={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:mt,fragmentShader:wt,defines:C.defines,customVertexShaderID:zt,customFragmentShaderID:at,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ht,batchingColor:Ht&&ct._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&ct.instanceColor!==null,instancingMorph:Yt&&ct.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Dr,alphaToCoverage:!!C.alphaToCoverage,map:Qt,matcap:Ze,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:W,aoMap:Ae,lightMap:ae,bumpMap:$t,normalMap:It,displacementMap:x&&Ne,emissiveMap:Gt,normalMapObjectSpace:It&&C.normalMapType===sy,normalMapTangentSpace:It&&C.normalMapType===H0,metalnessMap:re,roughnessMap:Ve,anisotropy:ke,anisotropyMap:Z,clearcoat:L,clearcoatMap:Mt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Ct,dispersion:E,iridescence:F,iridescenceMap:Bt,iridescenceThicknessMap:Et,sheen:K,sheenColorMap:Nt,sheenRoughnessMap:Zt,specularMap:Wt,specularColorMap:Ut,specularIntensityMap:oe,transmission:nt,transmissionMap:X,thicknessMap:Rt,gradientMap:Dt,opaque:C.transparent===!1&&C.blending===br&&C.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Tt,alphaHash:St,combine:C.combine,mapUv:Qt&&R(C.map.channel),aoMapUv:Ae&&R(C.aoMap.channel),lightMapUv:ae&&R(C.lightMap.channel),bumpMapUv:$t&&R(C.bumpMap.channel),normalMapUv:It&&R(C.normalMap.channel),displacementMapUv:Ne&&R(C.displacementMap.channel),emissiveMapUv:Gt&&R(C.emissiveMap.channel),metalnessMapUv:re&&R(C.metalnessMap.channel),roughnessMapUv:Ve&&R(C.roughnessMap.channel),anisotropyMapUv:Z&&R(C.anisotropyMap.channel),clearcoatMapUv:Mt&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:vt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(C.sheenRoughnessMap.channel),specularMapUv:Wt&&R(C.specularMap.channel),specularColorMapUv:Ut&&R(C.specularColorMap.channel),specularIntensityMapUv:oe&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:Rt&&R(C.thicknessMap.channel),alphaMapUv:Ft&&R(C.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(It||ke),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!rt.attributes.uv&&(Qt||Ft),fog:!!dt,useFog:C.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:bt,skinning:ct.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:_t,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:Qt&&C.map.isVideoTexture===!0&&be.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:Gt&&C.emissiveMap.isVideoTexture===!0&&be.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Li,flipSided:C.side===Xn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Xt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&C.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function _(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)w.push(B),w.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(H(w,C),P(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function H(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function P(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const w=A[C.type];let B;if(w){const J=Ui[w];B=Py.clone(J.uniforms)}else B=C.uniforms;return B}function z(C,w){let B;for(let J=0,ct=g.length;J<ct;J++){const dt=g[J];if(dt.cacheKey===w){B=dt,++B.usedTimes;break}}return B===void 0&&(B=new uA(r,w,C,u),g.push(B)),B}function V(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function G(C){m.remove(C)}function $(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:z,releaseProgram:V,releaseShaderCache:G,programs:g,dispose:$}}function mA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function gA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function _0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function v0(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,x,M,A,R,y){let _=r[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:M,groupOrder:A,renderOrder:v.renderOrder,z:R,group:y},r[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=M,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=R,_.group=y),t++,_}function d(v,x,M,A,R,y){const _=h(v,x,M,A,R,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,x,M,A,R,y){const _=h(v,x,M,A,R,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||gA),s.length>1&&s.sort(x||_0),l.length>1&&l.sort(x||_0)}function g(){for(let v=t,x=r.length;v<x;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function _A(){let r=new WeakMap;function t(s,l){const u=r.get(s);let h;return u===void 0?(h=new v0,r.set(s,[h])):l>=u.length?(h=new v0,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function vA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new st,color:new Me};break;case"SpotLight":i={position:new st,direction:new st,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new st,halfWidth:new st,halfHeight:new st};break}return r[t.id]=i,i}}}function xA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let SA=0;function yA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function MA(r){const t=new vA,i=xA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new st);const l=new st,u=new en,h=new en;function d(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,A=0,R=0,y=0,_=0,H=0,P=0,U=0,z=0,V=0,G=0;p.sort(yA);for(let C=0,w=p.length;C<w;C++){const B=p[C],J=B.color,ct=B.intensity,dt=B.distance,rt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=J.r*ct,v+=J.g*ct,x+=J.b*ct;else if(B.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(B.sh.coefficients[N],ct);G++}else if(B.isDirectionalLight){const N=t.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,W=i.get(B);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=rt,s.directionalShadowMatrix[M]=B.shadow.matrix,H++}s.directional[M]=N,M++}else if(B.isSpotLight){const N=t.get(B);N.position.setFromMatrixPosition(B.matrixWorld),N.color.copy(J).multiplyScalar(ct),N.distance=dt,N.coneCos=Math.cos(B.angle),N.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),N.decay=B.decay,s.spot[R]=N;const q=B.shadow;if(B.map&&(s.spotLightMap[z]=B.map,z++,q.updateMatrices(B),B.castShadow&&V++),s.spotLightMatrix[R]=q.matrix,B.castShadow){const W=i.get(B);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,s.spotShadow[R]=W,s.spotShadowMap[R]=rt,U++}R++}else if(B.isRectAreaLight){const N=t.get(B);N.color.copy(J).multiplyScalar(ct),N.halfWidth.set(B.width*.5,0,0),N.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=N,y++}else if(B.isPointLight){const N=t.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity),N.distance=B.distance,N.decay=B.decay,B.castShadow){const q=B.shadow,W=i.get(B);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,s.pointShadow[A]=W,s.pointShadowMap[A]=rt,s.pointShadowMatrix[A]=B.shadow.matrix,P++}s.point[A]=N,A++}else if(B.isHemisphereLight){const N=t.get(B);N.skyColor.copy(B.color).multiplyScalar(ct),N.groundColor.copy(B.groundColor).multiplyScalar(ct),s.hemi[_]=N,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const $=s.hash;($.directionalLength!==M||$.pointLength!==A||$.spotLength!==R||$.rectAreaLength!==y||$.hemiLength!==_||$.numDirectionalShadows!==H||$.numPointShadows!==P||$.numSpotShadows!==U||$.numSpotMaps!==z||$.numLightProbes!==G)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=A,s.hemi.length=_,s.directionalShadow.length=H,s.directionalShadowMap.length=H,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=H,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=U+z-V,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=G,$.directionalLength=M,$.pointLength=A,$.spotLength=R,$.rectAreaLength=y,$.hemiLength=_,$.numDirectionalShadows=H,$.numPointShadows=P,$.numSpotShadows=U,$.numSpotMaps=z,$.numLightProbes=G,s.version=SA++)}function m(p,g){let v=0,x=0,M=0,A=0,R=0;const y=g.matrixWorldInverse;for(let _=0,H=p.length;_<H;_++){const P=p[_];if(P.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(P.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const U=s.rectArea[A];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(P.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),x++}else if(P.isHemisphereLight){const U=s.hemi[R];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function x0(r){const t=new MA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function EA(r){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new x0(r),t.set(l,[d])):u>=h.length?(d=new x0(r),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bA=`uniform sampler2D shadow_pass;
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
}`;function AA(r,t,i){let s=new Nd;const l=new le,u=new le,h=new tn,d=new jy({depthPacking:ay}),m=new Zy,p={},g=i.maxTextureSize,v={[Xa]:Xn,[Xn]:Xa,[Li]:Li},x=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:TA,fragmentShader:bA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new Fi;A.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Pi(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0;let _=this.type;this.render=function(V,G,$){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Va),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ct=_!==ra&&this.type===ra,dt=_===ra&&this.type!==ra;for(let rt=0,N=V.length;rt<N;rt++){const q=V[rt],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const yt=W.getFrameExtents();if(l.multiply(yt),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/yt.x),l.x=u.x*yt.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/yt.y),l.y=u.y*yt.y,W.mapSize.y=u.y)),W.map===null||ct===!0||dt===!0){const tt=this.type!==ra?{minFilter:yi,magFilter:yi}:{};W.map!==null&&W.map.dispose(),W.map=new Ts(l.x,l.y,tt),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const D=W.getViewportCount();for(let tt=0;tt<D;tt++){const _t=W.getViewport(tt);h.set(u.x*_t.x,u.y*_t.y,u.x*_t.z,u.y*_t.w),J.viewport(h),W.updateMatrices(q,tt),s=W.getFrustum(),U(G,$,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===ra&&H(W,$),W.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(C,w,B)};function H(V,G){const $=t.update(R);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ts(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(G,null,$,x,R,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(G,null,$,M,R,null)}function P(V,G,$,C){let w=null;const B=$.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(B!==void 0)w=B;else if(w=$.isPointLight===!0?m:d,r.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const J=w.uuid,ct=G.uuid;let dt=p[J];dt===void 0&&(dt={},p[J]=dt);let rt=dt[ct];rt===void 0&&(rt=w.clone(),dt[ct]=rt,G.addEventListener("dispose",z)),w=rt}if(w.visible=G.visible,w.wireframe=G.wireframe,C===ra?w.side=G.shadowSide!==null?G.shadowSide:G.side:w.side=G.shadowSide!==null?G.shadowSide:v[G.side],w.alphaMap=G.alphaMap,w.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,w.map=G.map,w.clipShadows=G.clipShadows,w.clippingPlanes=G.clippingPlanes,w.clipIntersection=G.clipIntersection,w.displacementMap=G.displacementMap,w.displacementScale=G.displacementScale,w.displacementBias=G.displacementBias,w.wireframeLinewidth=G.wireframeLinewidth,w.linewidth=G.linewidth,$.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const J=r.properties.get(w);J.light=$}return w}function U(V,G,$,C,w){if(V.visible===!1)return;if(V.layers.test(G.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&w===ra)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,V.matrixWorld);const ct=t.update(V),dt=V.material;if(Array.isArray(dt)){const rt=ct.groups;for(let N=0,q=rt.length;N<q;N++){const W=rt[N],yt=dt[W.materialIndex];if(yt&&yt.visible){const D=P(V,yt,C,w);V.onBeforeShadow(r,V,G,$,ct,D,W),r.renderBufferDirect($,null,ct,D,V,W),V.onAfterShadow(r,V,G,$,ct,D,W)}}}else if(dt.visible){const rt=P(V,dt,C,w);V.onBeforeShadow(r,V,G,$,ct,rt,null),r.renderBufferDirect($,null,ct,rt,V,null),V.onAfterShadow(r,V,G,$,ct,rt,null)}}const J=V.children;for(let ct=0,dt=J.length;ct<dt;ct++)U(J[ct],G,$,C,w)}function z(V){V.target.removeEventListener("dispose",z);for(const $ in p){const C=p[$],w=V.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const RA={[Ih]:Bh,[zh]:Gh,[Fh]:Vh,[Rr]:Hh,[Bh]:Ih,[Gh]:zh,[Vh]:Fh,[Hh]:Rr};function wA(r,t){function i(){let X=!1;const Rt=new tn;let Dt=null;const Ft=new tn(0,0,0,0);return{setMask:function(Tt){Dt!==Tt&&!X&&(r.colorMask(Tt,Tt,Tt,Tt),Dt=Tt)},setLocked:function(Tt){X=Tt},setClear:function(Tt,St,Xt,se,we){we===!0&&(Tt*=se,St*=se,Xt*=se),Rt.set(Tt,St,Xt,se),Ft.equals(Rt)===!1&&(r.clearColor(Tt,St,Xt,se),Ft.copy(Rt))},reset:function(){X=!1,Dt=null,Ft.set(-1,0,0,0)}}}function s(){let X=!1,Rt=!1,Dt=null,Ft=null,Tt=null;return{setReversed:function(St){if(Rt!==St){const Xt=t.get("EXT_clip_control");St?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Rt=St;const se=Tt;Tt=null,this.setClear(se)}},getReversed:function(){return Rt},setTest:function(St){St?ht(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(St){Dt!==St&&!X&&(r.depthMask(St),Dt=St)},setFunc:function(St){if(Rt&&(St=RA[St]),Ft!==St){switch(St){case Ih:r.depthFunc(r.NEVER);break;case Bh:r.depthFunc(r.ALWAYS);break;case zh:r.depthFunc(r.LESS);break;case Rr:r.depthFunc(r.LEQUAL);break;case Fh:r.depthFunc(r.EQUAL);break;case Hh:r.depthFunc(r.GEQUAL);break;case Gh:r.depthFunc(r.GREATER);break;case Vh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=St}},setLocked:function(St){X=St},setClear:function(St){Tt!==St&&(Rt&&(St=1-St),r.clearDepth(St),Tt=St)},reset:function(){X=!1,Dt=null,Ft=null,Tt=null,Rt=!1}}}function l(){let X=!1,Rt=null,Dt=null,Ft=null,Tt=null,St=null,Xt=null,se=null,we=null;return{setTest:function(ye){X||(ye?ht(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(ye){Rt!==ye&&!X&&(r.stencilMask(ye),Rt=ye)},setFunc:function(ye,fi,cn){(Dt!==ye||Ft!==fi||Tt!==cn)&&(r.stencilFunc(ye,fi,cn),Dt=ye,Ft=fi,Tt=cn)},setOp:function(ye,fi,cn){(St!==ye||Xt!==fi||se!==cn)&&(r.stencilOp(ye,fi,cn),St=ye,Xt=fi,se=cn)},setLocked:function(ye){X=ye},setClear:function(ye){we!==ye&&(r.clearStencil(ye),we=ye)},reset:function(){X=!1,Rt=null,Dt=null,Ft=null,Tt=null,St=null,Xt=null,se=null,we=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,M=[],A=null,R=!1,y=null,_=null,H=null,P=null,U=null,z=null,V=null,G=new Me(0,0,0),$=0,C=!1,w=null,B=null,J=null,ct=null,dt=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,q=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=q>=2);let yt=null,D={};const tt=r.getParameter(r.SCISSOR_BOX),_t=r.getParameter(r.VIEWPORT),mt=new tn().fromArray(tt),wt=new tn().fromArray(_t);function zt(X,Rt,Dt,Ft){const Tt=new Uint8Array(4),St=r.createTexture();r.bindTexture(X,St),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<Dt;Xt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(Rt+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return St}const at={};at[r.TEXTURE_2D]=zt(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=zt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=zt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=zt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ht(r.DEPTH_TEST),h.setFunc(Rr),$t(!1),It(v_),ht(r.CULL_FACE),Ae(Va);function ht(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function bt(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Yt(X,Rt){return v[X]!==Rt?(r.bindFramebuffer(X,Rt),v[X]=Rt,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Rt),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Ht(X,Rt){let Dt=M,Ft=!1;if(X){Dt=x.get(Rt),Dt===void 0&&(Dt=[],x.set(Rt,Dt));const Tt=X.textures;if(Dt.length!==Tt.length||Dt[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Xt=Tt.length;St<Xt;St++)Dt[St]=r.COLOR_ATTACHMENT0+St;Dt.length=Tt.length,Ft=!0}}else Dt[0]!==r.BACK&&(Dt[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(Dt)}function Qt(X){return A!==X?(r.useProgram(X),A=X,!0):!1}const Ze={[vs]:r.FUNC_ADD,[DS]:r.FUNC_SUBTRACT,[US]:r.FUNC_REVERSE_SUBTRACT};Ze[LS]=r.MIN,Ze[NS]=r.MAX;const I={[OS]:r.ZERO,[PS]:r.ONE,[IS]:r.SRC_COLOR,[Oh]:r.SRC_ALPHA,[VS]:r.SRC_ALPHA_SATURATE,[HS]:r.DST_COLOR,[zS]:r.DST_ALPHA,[BS]:r.ONE_MINUS_SRC_COLOR,[Ph]:r.ONE_MINUS_SRC_ALPHA,[GS]:r.ONE_MINUS_DST_COLOR,[FS]:r.ONE_MINUS_DST_ALPHA,[kS]:r.CONSTANT_COLOR,[XS]:r.ONE_MINUS_CONSTANT_COLOR,[WS]:r.CONSTANT_ALPHA,[YS]:r.ONE_MINUS_CONSTANT_ALPHA};function Ae(X,Rt,Dt,Ft,Tt,St,Xt,se,we,ye){if(X===Va){R===!0&&(bt(r.BLEND),R=!1);return}if(R===!1&&(ht(r.BLEND),R=!0),X!==CS){if(X!==y||ye!==C){if((_!==vs||U!==vs)&&(r.blendEquation(r.FUNC_ADD),_=vs,U=vs),ye)switch(X){case br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case x_:r.blendFunc(r.ONE,r.ONE);break;case S_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case y_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case x_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case S_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}H=null,P=null,z=null,V=null,G.set(0,0,0),$=0,y=X,C=ye}return}Tt=Tt||Rt,St=St||Dt,Xt=Xt||Ft,(Rt!==_||Tt!==U)&&(r.blendEquationSeparate(Ze[Rt],Ze[Tt]),_=Rt,U=Tt),(Dt!==H||Ft!==P||St!==z||Xt!==V)&&(r.blendFuncSeparate(I[Dt],I[Ft],I[St],I[Xt]),H=Dt,P=Ft,z=St,V=Xt),(se.equals(G)===!1||we!==$)&&(r.blendColor(se.r,se.g,se.b,we),G.copy(se),$=we),y=X,C=!1}function ae(X,Rt){X.side===Li?bt(r.CULL_FACE):ht(r.CULL_FACE);let Dt=X.side===Xn;Rt&&(Dt=!Dt),$t(Dt),X.blending===br&&X.transparent===!1?Ae(Va):Ae(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Ft=X.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Gt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function It(X){X!==AS?(ht(r.CULL_FACE),X!==B&&(X===v_?r.cullFace(r.BACK):X===RS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),B=X}function Ne(X){X!==J&&(N&&r.lineWidth(X),J=X)}function Gt(X,Rt,Dt){X?(ht(r.POLYGON_OFFSET_FILL),(ct!==Rt||dt!==Dt)&&(r.polygonOffset(Rt,Dt),ct=Rt,dt=Dt)):bt(r.POLYGON_OFFSET_FILL)}function re(X){X?ht(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function Ve(X){X===void 0&&(X=r.TEXTURE0+rt-1),yt!==X&&(r.activeTexture(X),yt=X)}function ke(X,Rt,Dt){Dt===void 0&&(yt===null?Dt=r.TEXTURE0+rt-1:Dt=yt);let Ft=D[Dt];Ft===void 0&&(Ft={type:void 0,texture:void 0},D[Dt]=Ft),(Ft.type!==X||Ft.texture!==Rt)&&(yt!==Dt&&(r.activeTexture(Dt),yt=Dt),r.bindTexture(X,Rt||at[X]),Ft.type=X,Ft.texture=Rt)}function L(){const X=D[yt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function K(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(X){mt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),mt.copy(X))}function Zt(X){wt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),wt.copy(X))}function Wt(X,Rt){let Dt=p.get(Rt);Dt===void 0&&(Dt=new WeakMap,p.set(Rt,Dt));let Ft=Dt.get(X);Ft===void 0&&(Ft=r.getUniformBlockIndex(Rt,X.name),Dt.set(X,Ft))}function Ut(X,Rt){const Ft=p.get(Rt).get(X);m.get(Rt)!==Ft&&(r.uniformBlockBinding(Rt,Ft,X.__bindingPointIndex),m.set(Rt,Ft))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},yt=null,D={},v={},x=new WeakMap,M=[],A=null,R=!1,y=null,_=null,H=null,P=null,U=null,z=null,V=null,G=new Me(0,0,0),$=0,C=!1,w=null,B=null,J=null,ct=null,dt=null,mt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ht,disable:bt,bindFramebuffer:Yt,drawBuffers:Ht,useProgram:Qt,setBlending:Ae,setMaterial:ae,setFlipSided:$t,setCullFace:It,setLineWidth:Ne,setPolygonOffset:Gt,setScissorTest:re,activeTexture:Ve,bindTexture:ke,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:F,texImage2D:Bt,texImage3D:Et,updateUBOMapping:Wt,uniformBlockBinding:Ut,texStorage2D:vt,texStorage3D:Ct,texSubImage2D:K,texSubImage3D:nt,compressedTexSubImage2D:Z,compressedTexSubImage3D:Mt,scissor:Nt,viewport:Zt,reset:oe}}function CA(r,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,g=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,E){return M?new OffscreenCanvas(L,E):Bc("canvas")}function R(L,E,F){let K=1;const nt=ke(L);if((nt.width>F||nt.height>F)&&(K=F/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Z=Math.floor(K*nt.width),Mt=Math.floor(K*nt.height);v===void 0&&(v=A(Z,Mt));const vt=E?A(Z,Mt):v;return vt.width=Z,vt.height=Mt,vt.getContext("2d").drawImage(L,0,0,Z,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+Mt+")."),vt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function H(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(L,E,F,K,nt=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=E;if(E===r.RED&&(F===r.FLOAT&&(Z=r.R32F),F===r.HALF_FLOAT&&(Z=r.R16F),F===r.UNSIGNED_BYTE&&(Z=r.R8)),E===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(Z=r.R8UI),F===r.UNSIGNED_SHORT&&(Z=r.R16UI),F===r.UNSIGNED_INT&&(Z=r.R32UI),F===r.BYTE&&(Z=r.R8I),F===r.SHORT&&(Z=r.R16I),F===r.INT&&(Z=r.R32I)),E===r.RG&&(F===r.FLOAT&&(Z=r.RG32F),F===r.HALF_FLOAT&&(Z=r.RG16F),F===r.UNSIGNED_BYTE&&(Z=r.RG8)),E===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(Z=r.RG8UI),F===r.UNSIGNED_SHORT&&(Z=r.RG16UI),F===r.UNSIGNED_INT&&(Z=r.RG32UI),F===r.BYTE&&(Z=r.RG8I),F===r.SHORT&&(Z=r.RG16I),F===r.INT&&(Z=r.RG32I)),E===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),F===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),F===r.UNSIGNED_INT&&(Z=r.RGB32UI),F===r.BYTE&&(Z=r.RGB8I),F===r.SHORT&&(Z=r.RGB16I),F===r.INT&&(Z=r.RGB32I)),E===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),F===r.UNSIGNED_INT&&(Z=r.RGBA32UI),F===r.BYTE&&(Z=r.RGBA8I),F===r.SHORT&&(Z=r.RGBA16I),F===r.INT&&(Z=r.RGBA32I)),E===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),E===r.RGBA){const Mt=nt?Pc:be.getTransfer(K);F===r.FLOAT&&(Z=r.RGBA32F),F===r.HALF_FLOAT&&(Z=r.RGBA16F),F===r.UNSIGNED_BYTE&&(Z=Mt===ze?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function U(L,E){let F;return L?E===null||E===Ms||E===Ho?F=r.DEPTH24_STENCIL8:E===oa?F=r.DEPTH32F_STENCIL8:E===Fo&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ms||E===Ho?F=r.DEPTH_COMPONENT24:E===oa?F=r.DEPTH_COMPONENT32F:E===Fo&&(F=r.DEPTH_COMPONENT16),F}function z(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==yi&&L.minFilter!==Ni?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function V(L){const E=L.target;E.removeEventListener("dispose",V),$(E),E.isVideoTexture&&g.delete(E)}function G(L){const E=L.target;E.removeEventListener("dispose",G),w(E)}function $(L){const E=s.get(L);if(E.__webglInit===void 0)return;const F=L.source,K=x.get(F);if(K){const nt=K[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&C(L),Object.keys(K).length===0&&x.delete(F)}s.remove(L)}function C(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const F=L.source,K=x.get(F);delete K[E.__cacheKey],h.memory.textures--}function w(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let nt=0;nt<E.__webglFramebuffer[K].length;nt++)r.deleteFramebuffer(E.__webglFramebuffer[K][nt]);else r.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)r.deleteFramebuffer(E.__webglFramebuffer[K]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const F=L.textures;for(let K=0,nt=F.length;K<nt;K++){const Z=s.get(F[K]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),h.memory.textures--),s.remove(F[K])}s.remove(L)}let B=0;function J(){B=0}function ct(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function dt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function rt(L,E){const F=s.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&F.__version!==L.version){const K=L.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(F,L,E);return}}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+E)}function N(L,E){const F=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){at(F,L,E);return}i.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+E)}function q(L,E){const F=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){at(F,L,E);return}i.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+E)}function W(L,E){const F=s.get(L);if(L.version>0&&F.__version!==L.version){ht(F,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+E)}const yt={[Wh]:r.REPEAT,[Ss]:r.CLAMP_TO_EDGE,[Yh]:r.MIRRORED_REPEAT},D={[yi]:r.NEAREST,[ny]:r.NEAREST_MIPMAP_NEAREST,[ac]:r.NEAREST_MIPMAP_LINEAR,[Ni]:r.LINEAR,[th]:r.LINEAR_MIPMAP_NEAREST,[ys]:r.LINEAR_MIPMAP_LINEAR},tt={[ry]:r.NEVER,[hy]:r.ALWAYS,[oy]:r.LESS,[G0]:r.LEQUAL,[ly]:r.EQUAL,[fy]:r.GEQUAL,[cy]:r.GREATER,[uy]:r.NOTEQUAL};function _t(L,E){if(E.type===oa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ni||E.magFilter===th||E.magFilter===ac||E.magFilter===ys||E.minFilter===Ni||E.minFilter===th||E.minFilter===ac||E.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,yt[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,yt[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,yt[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,D[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yi||E.minFilter!==ac&&E.minFilter!==ys||E.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function mt(L,E){let F=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",V));const K=E.source;let nt=x.get(K);nt===void 0&&(nt={},x.set(K,nt));const Z=dt(E);if(Z!==L.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,F=!0),nt[Z].usedTimes++;const Mt=nt[L.__cacheKey];Mt!==void 0&&(nt[L.__cacheKey].usedTimes--,Mt.usedTimes===0&&C(E)),L.__cacheKey=Z,L.__webglTexture=nt[Z].texture}return F}function wt(L,E,F){return Math.floor(Math.floor(L/F)/E)}function zt(L,E,F,K){const Z=L.updateRanges;if(Z.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,F,K,E.data);else{Z.sort((Et,Nt)=>Et.start-Nt.start);let Mt=0;for(let Et=1;Et<Z.length;Et++){const Nt=Z[Mt],Zt=Z[Et],Wt=Nt.start+Nt.count,Ut=wt(Zt.start,E.width,4),oe=wt(Nt.start,E.width,4);Zt.start<=Wt+1&&Ut===oe&&wt(Zt.start+Zt.count-1,E.width,4)===Ut?Nt.count=Math.max(Nt.count,Zt.start+Zt.count-Nt.start):(++Mt,Z[Mt]=Zt)}Z.length=Mt+1;const vt=r.getParameter(r.UNPACK_ROW_LENGTH),Ct=r.getParameter(r.UNPACK_SKIP_PIXELS),Bt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Nt=Z.length;Et<Nt;Et++){const Zt=Z[Et],Wt=Math.floor(Zt.start/4),Ut=Math.ceil(Zt.count/4),oe=Wt%E.width,X=Math.floor(Wt/E.width),Rt=Ut,Dt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,oe,X,Rt,Dt,F,K,E.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,vt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,Bt)}}function at(L,E,F){let K=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=r.TEXTURE_3D);const nt=mt(L,E),Z=E.source;i.bindTexture(K,L.__webglTexture,r.TEXTURE0+F);const Mt=s.get(Z);if(Z.version!==Mt.__version||nt===!0){i.activeTexture(r.TEXTURE0+F);const vt=be.getPrimaries(be.workingColorSpace),Ct=E.colorSpace===Ga?null:be.getPrimaries(E.colorSpace),Bt=E.colorSpace===Ga||vt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let Et=R(E.image,!1,l.maxTextureSize);Et=Ve(E,Et);const Nt=u.convert(E.format,E.colorSpace),Zt=u.convert(E.type);let Wt=P(E.internalFormat,Nt,Zt,E.colorSpace,E.isVideoTexture);_t(K,E);let Ut;const oe=E.mipmaps,X=E.isVideoTexture!==!0,Rt=Mt.__version===void 0||nt===!0,Dt=Z.dataReady,Ft=z(E,Et);if(E.isDepthTexture)Wt=U(E.format===Vo,E.type),Rt&&(X?i.texStorage2D(r.TEXTURE_2D,1,Wt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,Wt,Et.width,Et.height,0,Nt,Zt,null));else if(E.isDataTexture)if(oe.length>0){X&&Rt&&i.texStorage2D(r.TEXTURE_2D,Ft,Wt,oe[0].width,oe[0].height);for(let Tt=0,St=oe.length;Tt<St;Tt++)Ut=oe[Tt],X?Dt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Nt,Zt,Ut.data):i.texImage2D(r.TEXTURE_2D,Tt,Wt,Ut.width,Ut.height,0,Nt,Zt,Ut.data);E.generateMipmaps=!1}else X?(Rt&&i.texStorage2D(r.TEXTURE_2D,Ft,Wt,Et.width,Et.height),Dt&&zt(E,Et,Nt,Zt)):i.texImage2D(r.TEXTURE_2D,0,Wt,Et.width,Et.height,0,Nt,Zt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Wt,oe[0].width,oe[0].height,Et.depth);for(let Tt=0,St=oe.length;Tt<St;Tt++)if(Ut=oe[Tt],E.format!==Si)if(Nt!==null)if(X){if(Dt)if(E.layerUpdates.size>0){const Xt=Z_(Ut.width,Ut.height,E.format,E.type);for(const se of E.layerUpdates){const we=Ut.data.subarray(se*Xt/Ut.data.BYTES_PER_ELEMENT,(se+1)*Xt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,se,Ut.width,Ut.height,1,Nt,we)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Ut.width,Ut.height,Et.depth,Nt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Tt,Wt,Ut.width,Ut.height,Et.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Dt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Tt,0,0,0,Ut.width,Ut.height,Et.depth,Nt,Zt,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Tt,Wt,Ut.width,Ut.height,Et.depth,0,Nt,Zt,Ut.data)}else{X&&Rt&&i.texStorage2D(r.TEXTURE_2D,Ft,Wt,oe[0].width,oe[0].height);for(let Tt=0,St=oe.length;Tt<St;Tt++)Ut=oe[Tt],E.format!==Si?Nt!==null?X?Dt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Nt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,Tt,Wt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Dt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Ut.width,Ut.height,Nt,Zt,Ut.data):i.texImage2D(r.TEXTURE_2D,Tt,Wt,Ut.width,Ut.height,0,Nt,Zt,Ut.data)}else if(E.isDataArrayTexture)if(X){if(Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Wt,Et.width,Et.height,Et.depth),Dt)if(E.layerUpdates.size>0){const Tt=Z_(Et.width,Et.height,E.format,E.type);for(const St of E.layerUpdates){const Xt=Et.data.subarray(St*Tt/Et.data.BYTES_PER_ELEMENT,(St+1)*Tt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,St,Et.width,Et.height,1,Nt,Zt,Xt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Nt,Zt,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,Et.width,Et.height,Et.depth,0,Nt,Zt,Et.data);else if(E.isData3DTexture)X?(Rt&&i.texStorage3D(r.TEXTURE_3D,Ft,Wt,Et.width,Et.height,Et.depth),Dt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Nt,Zt,Et.data)):i.texImage3D(r.TEXTURE_3D,0,Wt,Et.width,Et.height,Et.depth,0,Nt,Zt,Et.data);else if(E.isFramebufferTexture){if(Rt)if(X)i.texStorage2D(r.TEXTURE_2D,Ft,Wt,Et.width,Et.height);else{let Tt=Et.width,St=Et.height;for(let Xt=0;Xt<Ft;Xt++)i.texImage2D(r.TEXTURE_2D,Xt,Wt,Tt,St,0,Nt,Zt,null),Tt>>=1,St>>=1}}else if(oe.length>0){if(X&&Rt){const Tt=ke(oe[0]);i.texStorage2D(r.TEXTURE_2D,Ft,Wt,Tt.width,Tt.height)}for(let Tt=0,St=oe.length;Tt<St;Tt++)Ut=oe[Tt],X?Dt&&i.texSubImage2D(r.TEXTURE_2D,Tt,0,0,Nt,Zt,Ut):i.texImage2D(r.TEXTURE_2D,Tt,Wt,Nt,Zt,Ut);E.generateMipmaps=!1}else if(X){if(Rt){const Tt=ke(Et);i.texStorage2D(r.TEXTURE_2D,Ft,Wt,Tt.width,Tt.height)}Dt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Nt,Zt,Et)}else i.texImage2D(r.TEXTURE_2D,0,Wt,Nt,Zt,Et);y(E)&&_(K),Mt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ht(L,E,F){if(E.image.length!==6)return;const K=mt(L,E),nt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+F);const Z=s.get(nt);if(nt.version!==Z.__version||K===!0){i.activeTexture(r.TEXTURE0+F);const Mt=be.getPrimaries(be.workingColorSpace),vt=E.colorSpace===Ga?null:be.getPrimaries(E.colorSpace),Ct=E.colorSpace===Ga||Mt===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Bt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Nt=[];for(let St=0;St<6;St++)!Bt&&!Et?Nt[St]=R(E.image[St],!0,l.maxCubemapSize):Nt[St]=Et?E.image[St].image:E.image[St],Nt[St]=Ve(E,Nt[St]);const Zt=Nt[0],Wt=u.convert(E.format,E.colorSpace),Ut=u.convert(E.type),oe=P(E.internalFormat,Wt,Ut,E.colorSpace),X=E.isVideoTexture!==!0,Rt=Z.__version===void 0||K===!0,Dt=nt.dataReady;let Ft=z(E,Zt);_t(r.TEXTURE_CUBE_MAP,E);let Tt;if(Bt){X&&Rt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,oe,Zt.width,Zt.height);for(let St=0;St<6;St++){Tt=Nt[St].mipmaps;for(let Xt=0;Xt<Tt.length;Xt++){const se=Tt[Xt];E.format!==Si?Wt!==null?X?Dt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt,0,0,se.width,se.height,Wt,se.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt,oe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt,0,0,se.width,se.height,Wt,Ut,se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt,oe,se.width,se.height,0,Wt,Ut,se.data)}}}else{if(Tt=E.mipmaps,X&&Rt){Tt.length>0&&Ft++;const St=ke(Nt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,oe,St.width,St.height)}for(let St=0;St<6;St++)if(Et){X?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Nt[St].width,Nt[St].height,Wt,Ut,Nt[St].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,oe,Nt[St].width,Nt[St].height,0,Wt,Ut,Nt[St].data);for(let Xt=0;Xt<Tt.length;Xt++){const we=Tt[Xt].image[St].image;X?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt+1,0,0,we.width,we.height,Wt,Ut,we.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt+1,oe,we.width,we.height,0,Wt,Ut,we.data)}}else{X?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Wt,Ut,Nt[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,oe,Wt,Ut,Nt[St]);for(let Xt=0;Xt<Tt.length;Xt++){const se=Tt[Xt];X?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt+1,0,0,Wt,Ut,se.image[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Xt+1,oe,Wt,Ut,se.image[St])}}}y(E)&&_(r.TEXTURE_CUBE_MAP),Z.__version=nt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function bt(L,E,F,K,nt,Z){const Mt=u.convert(F.format,F.colorSpace),vt=u.convert(F.type),Ct=P(F.internalFormat,Mt,vt,F.colorSpace),Bt=s.get(E),Et=s.get(F);if(Et.__renderTarget=E,!Bt.__hasExternalTextures){const Nt=Math.max(1,E.width>>Z),Zt=Math.max(1,E.height>>Z);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?i.texImage3D(nt,Z,Ct,Nt,Zt,E.depth,0,Mt,vt,null):i.texImage2D(nt,Z,Ct,Nt,Zt,0,Mt,vt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),Gt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,nt,Et.__webglTexture,0,Ne(E)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,nt,Et.__webglTexture,Z),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(L,E,F){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const K=E.depthTexture,nt=K&&K.isDepthTexture?K.type:null,Z=U(E.stencilBuffer,nt),Mt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=Ne(E);Gt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,Z,E.width,E.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,Z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,L)}else{const K=E.textures;for(let nt=0;nt<K.length;nt++){const Z=K[nt],Mt=u.convert(Z.format,Z.colorSpace),vt=u.convert(Z.type),Ct=P(Z.internalFormat,Mt,vt,Z.colorSpace),Bt=Ne(E);F&&Gt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,Ct,E.width,E.height):Gt(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Bt,Ct,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ct,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=s.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),rt(E.depthTexture,0);const nt=K.__webglTexture,Z=Ne(E);if(E.depthTexture.format===Go)Gt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(E.depthTexture.format===Vo)Gt(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Qt(L){const E=s.get(L),F=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const K=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=K}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const K=L.texture.mipmaps;K&&K.length>0?Ht(E.__webglFramebuffer[0],L):Ht(E.__webglFramebuffer,L)}else if(F){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=r.createRenderbuffer(),Yt(E.__webglDepthbuffer[K],L,!1);else{const nt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,Z)}}else{const K=L.texture.mipmaps;if(K&&K.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Yt(E.__webglDepthbuffer,L,!1);else{const nt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,Z)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(L,E,F){const K=s.get(L);E!==void 0&&bt(K.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Qt(L)}function I(L){const E=L.texture,F=s.get(L),K=s.get(E);L.addEventListener("dispose",G);const nt=L.textures,Z=L.isWebGLCubeRenderTarget===!0,Mt=nt.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=E.version,h.memory.textures++),Z){F.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[vt]=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)F.__webglFramebuffer[vt][Ct]=r.createFramebuffer()}else F.__webglFramebuffer[vt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)F.__webglFramebuffer[vt]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let vt=0,Ct=nt.length;vt<Ct;vt++){const Bt=s.get(nt[vt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=r.createTexture(),h.memory.textures++)}if(L.samples>0&&Gt(L)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let vt=0;vt<nt.length;vt++){const Ct=nt[vt];F.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[vt]);const Bt=u.convert(Ct.format,Ct.colorSpace),Et=u.convert(Ct.type),Nt=P(Ct.internalFormat,Bt,Et,Ct.colorSpace,L.isXRRenderTarget===!0),Zt=Ne(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Nt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,F.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(F.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),_t(r.TEXTURE_CUBE_MAP,E);for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ct=0;Ct<E.mipmaps.length;Ct++)bt(F.__webglFramebuffer[vt][Ct],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct);else bt(F.__webglFramebuffer[vt],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);y(E)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Mt){for(let vt=0,Ct=nt.length;vt<Ct;vt++){const Bt=nt[vt],Et=s.get(Bt);let Nt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Nt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Et.__webglTexture),_t(Nt,Bt),bt(F.__webglFramebuffer,L,Bt,r.COLOR_ATTACHMENT0+vt,Nt,0),y(Bt)&&_(Nt)}i.unbindTexture()}else{let vt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(vt,K.__webglTexture),_t(vt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ct=0;Ct<E.mipmaps.length;Ct++)bt(F.__webglFramebuffer[Ct],L,E,r.COLOR_ATTACHMENT0,vt,Ct);else bt(F.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,vt,0);y(E)&&_(vt),i.unbindTexture()}L.depthBuffer&&Qt(L)}function Ae(L){const E=L.textures;for(let F=0,K=E.length;F<K;F++){const nt=E[F];if(y(nt)){const Z=H(L),Mt=s.get(nt).__webglTexture;i.bindTexture(Z,Mt),_(Z),i.unbindTexture()}}}const ae=[],$t=[];function It(L){if(L.samples>0){if(Gt(L)===!1){const E=L.textures,F=L.width,K=L.height;let nt=r.COLOR_BUFFER_BIT;const Z=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=s.get(L),vt=E.length>1;if(vt)for(let Bt=0;Bt<E.length;Bt++)i.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const Ct=L.texture.mipmaps;Ct&&Ct.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Bt=0;Bt<E.length;Bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),vt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[Bt]);const Et=s.get(E[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,F,K,0,0,F,K,nt,r.NEAREST),m===!0&&(ae.length=0,$t.length=0,ae.push(r.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ae.push(Z),$t.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let Bt=0;Bt<E.length;Bt++){i.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[Bt]);const Et=s.get(E[Bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ne(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Ve(L,E){const F=L.colorSpace,K=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||F!==Dr&&F!==Ga&&(be.getTransfer(F)===ze?(K!==Si||nt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=J,this.setTexture2D=rt,this.setTexture2DArray=N,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Ze,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Gt}function DA(r,t){function i(s,l=Ga){let u;const h=be.getTransfer(l);if(s===Bi)return r.UNSIGNED_BYTE;if(s===Ad)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Rd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===O0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===P0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===L0)return r.BYTE;if(s===N0)return r.SHORT;if(s===Fo)return r.UNSIGNED_SHORT;if(s===bd)return r.INT;if(s===Ms)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===Wo)return r.HALF_FLOAT;if(s===I0)return r.ALPHA;if(s===B0)return r.RGB;if(s===Si)return r.RGBA;if(s===Go)return r.DEPTH_COMPONENT;if(s===Vo)return r.DEPTH_STENCIL;if(s===z0)return r.RED;if(s===wd)return r.RED_INTEGER;if(s===F0)return r.RG;if(s===Cd)return r.RG_INTEGER;if(s===Dd)return r.RGBA_INTEGER;if(s===Cc||s===Dc||s===Uc||s===Lc)if(h===ze)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Cc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Cc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qh||s===jh||s===Zh||s===Kh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===qh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qh||s===Jh||s===$h)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Qh||s===Jh)return h===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===$h)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===td)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ed)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===id)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ad)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===od)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ld)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ud)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dd)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pd||s===md||s===gd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===pd)return h===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===md)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_d||s===vd||s===xd||s===Sd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===_d)return u.COMPRESSED_RED_RGTC1_EXT;if(s===vd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ho?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const UA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LA=`
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

}`;class NA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new tv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wa({vertexShader:UA,fragmentShader:LA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pi(new kc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OA extends bs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,M=null,A=null;const R=typeof XRWebGLBinding<"u",y=new NA,_={},H=i.getContextAttributes();let P=null,U=null;const z=[],V=[],G=new le;let $=null;const C=new ui;C.viewport=new tn;const w=new ui;w.viewport=new tn;const B=[C,w],J=new tM;let ct=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ht=z[at];return ht===void 0&&(ht=new Mh,z[at]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(at){let ht=z[at];return ht===void 0&&(ht=new Mh,z[at]=ht),ht.getGripSpace()},this.getHand=function(at){let ht=z[at];return ht===void 0&&(ht=new Mh,z[at]=ht),ht.getHandSpace()};function rt(at){const ht=V.indexOf(at.inputSource);if(ht===-1)return;const bt=z[ht];bt!==void 0&&(bt.update(at.inputSource,at.frame,p||h),bt.dispatchEvent({type:at.type,data:at.inputSource}))}function N(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",q);for(let at=0;at<z.length;at++){const ht=V[at];ht!==null&&(V[at]=null,z[at].disconnect(ht))}ct=null,dt=null,y.reset();for(const at in _)delete _[at];t.setRenderTarget(P),M=null,x=null,v=null,l=null,U=null,zt.stop(),s.isPresenting=!1,t.setPixelRatio($),t.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",N),l.addEventListener("inputsourceschange",q),H.xrCompatible!==!0&&await i.makeXRCompatible(),$=t.getPixelRatio(),t.getSize(G),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Yt=null,Ht=null;H.depth&&(Ht=H.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=H.stencil?Vo:Go,Yt=H.stencil?Ho:Ms);const Qt={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:u};v=this.getBinding(),x=v.createProjectionLayer(Qt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Ts(x.textureWidth,x.textureHeight,{format:Si,type:Bi,depthTexture:new $0(x.textureWidth,x.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:H.stencil,colorSpace:t.outputColorSpace,samples:H.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const bt={antialias:H.antialias,alpha:!0,depth:H.depth,stencil:H.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Ts(M.framebufferWidth,M.framebufferHeight,{format:Si,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:H.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(at){for(let ht=0;ht<at.removed.length;ht++){const bt=at.removed[ht],Yt=V.indexOf(bt);Yt>=0&&(V[Yt]=null,z[Yt].disconnect(bt))}for(let ht=0;ht<at.added.length;ht++){const bt=at.added[ht];let Yt=V.indexOf(bt);if(Yt===-1){for(let Qt=0;Qt<z.length;Qt++)if(Qt>=V.length){V.push(bt),Yt=Qt;break}else if(V[Qt]===null){V[Qt]=bt,Yt=Qt;break}if(Yt===-1)break}const Ht=z[Yt];Ht&&Ht.connect(bt)}}const W=new st,yt=new st;function D(at,ht,bt){W.setFromMatrixPosition(ht.matrixWorld),yt.setFromMatrixPosition(bt.matrixWorld);const Yt=W.distanceTo(yt),Ht=ht.projectionMatrix.elements,Qt=bt.projectionMatrix.elements,Ze=Ht[14]/(Ht[10]-1),I=Ht[14]/(Ht[10]+1),Ae=(Ht[9]+1)/Ht[5],ae=(Ht[9]-1)/Ht[5],$t=(Ht[8]-1)/Ht[0],It=(Qt[8]+1)/Qt[0],Ne=Ze*$t,Gt=Ze*It,re=Yt/(-$t+It),Ve=re*-$t;if(ht.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ve),at.translateZ(re),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Ht[10]===-1)at.projectionMatrix.copy(ht.projectionMatrix),at.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const ke=Ze+re,L=I+re,E=Ne-Ve,F=Gt+(Yt-Ve),K=Ae*I/L*ke,nt=ae*I/L*ke;at.projectionMatrix.makePerspective(E,F,K,nt,ke,L),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function tt(at,ht){ht===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ht.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let ht=at.near,bt=at.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),J.near=w.near=C.near=ht,J.far=w.far=C.far=bt,(ct!==J.near||dt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),ct=J.near,dt=J.far),J.layers.mask=at.layers.mask|6,C.layers.mask=J.layers.mask&3,w.layers.mask=J.layers.mask&5;const Yt=at.parent,Ht=J.cameras;tt(J,Yt);for(let Qt=0;Qt<Ht.length;Qt++)tt(Ht[Qt],Yt);Ht.length===2?D(J,C,w):J.projectionMatrix.copy(C.projectionMatrix),_t(at,J,Yt)};function _t(at,ht,bt){bt===null?at.matrix.copy(ht.matrixWorld):(at.matrix.copy(bt.matrixWorld),at.matrix.invert(),at.matrix.multiply(ht.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ht.projectionMatrix),at.projectionMatrixInverse.copy(ht.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=yd*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(at){m=at,x!==null&&(x.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(at){return _[at]};let mt=null;function wt(at,ht){if(g=ht.getViewerPose(p||h),A=ht,g!==null){const bt=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Yt=!1;bt.length!==J.cameras.length&&(J.cameras.length=0,Yt=!0);for(let I=0;I<bt.length;I++){const Ae=bt[I];let ae=null;if(M!==null)ae=M.getViewport(Ae);else{const It=v.getViewSubImage(x,Ae);ae=It.viewport,I===0&&(t.setRenderTargetTextures(U,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(U))}let $t=B[I];$t===void 0&&($t=new ui,$t.layers.enable(I),$t.viewport=new tn,B[I]=$t),$t.matrix.fromArray(Ae.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ae.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ae.x,ae.y,ae.width,ae.height),I===0&&(J.matrix.copy($t.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Yt===!0&&J.cameras.push($t)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=s.getBinding();const I=v.getDepthInformation(bt[0]);I&&I.isValid&&I.texture&&y.init(I,l.renderState)}if(Ht&&Ht.includes("camera-access")&&R){t.state.unbindTexture(),v=s.getBinding();for(let I=0;I<bt.length;I++){const Ae=bt[I].camera;if(Ae){let ae=_[Ae];ae||(ae=new tv,_[Ae]=ae);const $t=v.getCameraImage(Ae);ae.sourceTexture=$t}}}}for(let bt=0;bt<z.length;bt++){const Yt=V[bt],Ht=z[bt];Yt!==null&&Ht!==void 0&&Ht.update(Yt,ht,p||h)}mt&&mt(at,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),A=null}const zt=new iv;zt.setAnimationLoop(wt),this.setAnimationLoop=function(at){mt=at},this.dispose=function(){}}}const ms=new zi,PA=new en;function IA(r,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,Z0(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,H,P,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,U)):_.isMeshMatcapMaterial?(u(y,_),A(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,H,P):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Xn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Xn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const H=t.get(_),P=H.envMap,U=H.envMapRotation;P&&(y.envMap.value=P,ms.copy(U),ms.x*=-1,ms.y*=-1,ms.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),y.envMapRotation.value.setFromMatrix4(PA.makeRotationFromEuler(ms)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,H,P){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*H,y.scale.value=P*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,H){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=H.texture,y.transmissionSamplerSize.value.set(H.width,H.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const H=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(H.matrixWorld),y.nearDistance.value=H.shadow.camera.near,y.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function BA(r,t,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(H,P){const U=P.program;s.uniformBlockBinding(H,U)}function p(H,P){let U=l[H.id];U===void 0&&(A(H),U=g(H),l[H.id]=U,H.addEventListener("dispose",y));const z=P.program;s.updateUBOMapping(H,z);const V=t.render.frame;u[H.id]!==V&&(x(H),u[H.id]=V)}function g(H){const P=v();H.__bindingPointIndex=P;const U=r.createBuffer(),z=H.__size,V=H.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,z,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,U),U}function v(){for(let H=0;H<d;H++)if(h.indexOf(H)===-1)return h.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(H){const P=l[H.id],U=H.uniforms,z=H.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let V=0,G=U.length;V<G;V++){const $=Array.isArray(U[V])?U[V]:[U[V]];for(let C=0,w=$.length;C<w;C++){const B=$[C];if(M(B,V,C,z)===!0){const J=B.__offset,ct=Array.isArray(B.value)?B.value:[B.value];let dt=0;for(let rt=0;rt<ct.length;rt++){const N=ct[rt],q=R(N);typeof N=="number"||typeof N=="boolean"?(B.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,J+dt,B.__data)):N.isMatrix3?(B.__data[0]=N.elements[0],B.__data[1]=N.elements[1],B.__data[2]=N.elements[2],B.__data[3]=0,B.__data[4]=N.elements[3],B.__data[5]=N.elements[4],B.__data[6]=N.elements[5],B.__data[7]=0,B.__data[8]=N.elements[6],B.__data[9]=N.elements[7],B.__data[10]=N.elements[8],B.__data[11]=0):(N.toArray(B.__data,dt),dt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(H,P,U,z){const V=H.value,G=P+"_"+U;if(z[G]===void 0)return typeof V=="number"||typeof V=="boolean"?z[G]=V:z[G]=V.clone(),!0;{const $=z[G];if(typeof V=="number"||typeof V=="boolean"){if($!==V)return z[G]=V,!0}else if($.equals(V)===!1)return $.copy(V),!0}return!1}function A(H){const P=H.uniforms;let U=0;const z=16;for(let G=0,$=P.length;G<$;G++){const C=Array.isArray(P[G])?P[G]:[P[G]];for(let w=0,B=C.length;w<B;w++){const J=C[w],ct=Array.isArray(J.value)?J.value:[J.value];for(let dt=0,rt=ct.length;dt<rt;dt++){const N=ct[dt],q=R(N),W=U%z,yt=W%q.boundary,D=W+yt;U+=yt,D!==0&&z-D<q.storage&&(U+=z-D),J.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=U,U+=q.storage}}}const V=U%z;return V>0&&(U+=z-V),H.__size=U,H.__cache={},this}function R(H){const P={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(P.boundary=4,P.storage=4):H.isVector2?(P.boundary=8,P.storage=8):H.isVector3||H.isColor?(P.boundary=16,P.storage=12):H.isVector4?(P.boundary=16,P.storage=16):H.isMatrix3?(P.boundary=48,P.storage=48):H.isMatrix4?(P.boundary=64,P.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),P}function y(H){const P=H.target;P.removeEventListener("dispose",y);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function _(){for(const H in l)r.deleteBuffer(l[H]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class zA{constructor(t={}){const{canvas:i=my(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const H=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let z=!1;this._outputColorSpace=ci;let V=0,G=0,$=null,C=-1,w=null;const B=new tn,J=new tn;let ct=null;const dt=new Me(0);let rt=0,N=i.width,q=i.height,W=1,yt=null,D=null;const tt=new tn(0,0,N,q),_t=new tn(0,0,N,q);let mt=!1;const wt=new Nd;let zt=!1,at=!1;const ht=new en,bt=new st,Yt=new tn,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Ze(){return $===null?W:1}let I=s;function Ae(b,Y){return i.getContext(b,Y)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Td}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),I===null){const Y="webgl2";if(I=Ae(Y,b),I===null)throw Ae(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ae,$t,It,Ne,Gt,re,Ve,ke,L,E,F,K,nt,Z,Mt,vt,Ct,Bt,Et,Nt,Zt,Wt,Ut,oe;function X(){ae=new jT(I),ae.init(),Wt=new DA(I,ae),$t=new GT(I,ae,t,Wt),It=new wA(I,ae),$t.reversedDepthBuffer&&x&&It.buffers.depth.setReversed(!0),Ne=new QT(I),Gt=new mA,re=new CA(I,ae,It,Gt,$t,Wt,Ne),Ve=new kT(U),ke=new qT(U),L=new iM(I),Ut=new FT(I,L),E=new ZT(I,L,Ne,Ut),F=new $T(I,E,L,Ne),Et=new JT(I,$t,re),vt=new VT(Gt),K=new pA(U,Ve,ke,ae,$t,Ut,vt),nt=new IA(U,Gt),Z=new _A,Mt=new EA(ae),Bt=new zT(U,Ve,ke,It,F,M,m),Ct=new AA(U,F,$t),oe=new BA(I,Ne,$t,It),Nt=new HT(I,ae,Ne),Zt=new KT(I,ae,Ne),Ne.programs=K.programs,U.capabilities=$t,U.extensions=ae,U.properties=Gt,U.renderLists=Z,U.shadowMap=Ct,U.state=It,U.info=Ne}X();const Rt=new OA(U,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(N,q,!1))},this.getSize=function(b){return b.set(N,q)},this.setSize=function(b,Y,ut=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,q=Y,i.width=Math.floor(b*W),i.height=Math.floor(Y*W),ut===!0&&(i.style.width=b+"px",i.style.height=Y+"px"),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(N*W,q*W).floor()},this.setDrawingBufferSize=function(b,Y,ut){N=b,q=Y,W=ut,i.width=Math.floor(b*ut),i.height=Math.floor(Y*ut),this.setViewport(0,0,b,Y)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,Y,ut,ft){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,Y,ut,ft),It.viewport(B.copy(tt).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(_t)},this.setScissor=function(b,Y,ut,ft){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,Y,ut,ft),It.scissor(J.copy(_t).multiplyScalar(W).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(b){It.setScissorTest(mt=b)},this.setOpaqueSort=function(b){yt=b},this.setTransparentSort=function(b){D=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,ut=!0){let ft=0;if(b){let Q=!1;if($!==null){const At=$.texture.format;Q=At===Dd||At===Cd||At===wd}if(Q){const At=$.texture.type,Lt=At===Bi||At===Ms||At===Fo||At===Ho||At===Ad||At===Rd,Vt=Bt.getClearColor(),Ot=Bt.getClearAlpha(),Jt=Vt.r,ee=Vt.g,qt=Vt.b;Lt?(A[0]=Jt,A[1]=ee,A[2]=qt,A[3]=Ot,I.clearBufferuiv(I.COLOR,0,A)):(R[0]=Jt,R[1]=ee,R[2]=qt,R[3]=Ot,I.clearBufferiv(I.COLOR,0,R))}else ft|=I.COLOR_BUFFER_BIT}Y&&(ft|=I.DEPTH_BUFFER_BIT),ut&&(ft|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Bt.dispose(),Z.dispose(),Mt.dispose(),Gt.dispose(),Ve.dispose(),ke.dispose(),F.dispose(),Ut.dispose(),oe.dispose(),K.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",cn),Rt.removeEventListener("sessionend",un),Ke.stop()};function Dt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const b=Ne.autoReset,Y=Ct.enabled,ut=Ct.autoUpdate,ft=Ct.needsUpdate,Q=Ct.type;X(),Ne.autoReset=b,Ct.enabled=Y,Ct.autoUpdate=ut,Ct.needsUpdate=ft,Ct.type=Q}function Tt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function St(b){const Y=b.target;Y.removeEventListener("dispose",St),Xt(Y)}function Xt(b){se(b),Gt.remove(b)}function se(b){const Y=Gt.get(b).programs;Y!==void 0&&(Y.forEach(function(ut){K.releaseProgram(ut)}),b.isShaderMaterial&&K.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,ut,ft,Q,At){Y===null&&(Y=Ht);const Lt=Q.isMesh&&Q.matrixWorld.determinant()<0,Vt=ca(b,Y,ut,ft,Q);It.setMaterial(ft,Lt);let Ot=ut.index,Jt=1;if(ft.wireframe===!0){if(Ot=E.getWireframeAttribute(ut),Ot===void 0)return;Jt=2}const ee=ut.drawRange,qt=ut.attributes.position;let fe=ee.start*Jt,Ee=(ee.start+ee.count)*Jt;At!==null&&(fe=Math.max(fe,At.start*Jt),Ee=Math.min(Ee,(At.start+At.count)*Jt)),Ot!==null?(fe=Math.max(fe,0),Ee=Math.min(Ee,Ot.count)):qt!=null&&(fe=Math.max(fe,0),Ee=Math.min(Ee,qt.count));const Ye=Ee-fe;if(Ye<0||Ye===1/0)return;Ut.setup(Q,ft,Vt,ut,Ot);let Oe,he=Nt;if(Ot!==null&&(Oe=L.get(Ot),he=Zt,he.setIndex(Oe)),Q.isMesh)ft.wireframe===!0?(It.setLineWidth(ft.wireframeLinewidth*Ze()),he.setMode(I.LINES)):he.setMode(I.TRIANGLES);else if(Q.isLine){let Kt=ft.linewidth;Kt===void 0&&(Kt=1),It.setLineWidth(Kt*Ze()),Q.isLineSegments?he.setMode(I.LINES):Q.isLineLoop?he.setMode(I.LINE_LOOP):he.setMode(I.LINE_STRIP)}else Q.isPoints?he.setMode(I.POINTS):Q.isSprite&&he.setMode(I.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ko("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))he.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Kt=Q._multiDrawStarts,We=Q._multiDrawCounts,ge=Q._multiDrawCount,An=Ot?L.get(Ot).bytesPerElement:1,hi=Gt.get(ft).currentProgram.getUniforms();for(let Nn=0;Nn<ge;Nn++)hi.setValue(I,"_gl_DrawID",Nn),he.render(Kt[Nn]/An,We[Nn])}else if(Q.isInstancedMesh)he.renderInstances(fe,Ye,Q.count);else if(ut.isInstancedBufferGeometry){const Kt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,We=Math.min(ut.instanceCount,Kt);he.renderInstances(fe,Ye,We)}else he.render(fe,Ye)};function we(b,Y,ut){b.transparent===!0&&b.side===Li&&b.forceSinglePass===!1?(b.side=Xn,b.needsUpdate=!0,bi(b,Y,ut),b.side=Xa,b.needsUpdate=!0,bi(b,Y,ut),b.side=Li):bi(b,Y,ut)}this.compile=function(b,Y,ut=null){ut===null&&(ut=b),_=Mt.get(ut),_.init(Y),P.push(_),ut.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),b!==ut&&b.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const ft=new Set;return b.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const At=Q.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Vt=At[Lt];we(Vt,ut,Q),ft.add(Vt)}else we(At,ut,Q),ft.add(At)}),_=P.pop(),ft},this.compileAsync=function(b,Y,ut=null){const ft=this.compile(b,Y,ut);return new Promise(Q=>{function At(){if(ft.forEach(function(Lt){Gt.get(Lt).currentProgram.isReady()&&ft.delete(Lt)}),ft.size===0){Q(b);return}setTimeout(At,10)}ae.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ye=null;function fi(b){ye&&ye(b)}function cn(){Ke.stop()}function un(){Ke.start()}const Ke=new iv;Ke.setAnimationLoop(fi),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(b){ye=b,Rt.setAnimationLoop(b),b===null?Ke.stop():Ke.start()},Rt.addEventListener("sessionstart",cn),Rt.addEventListener("sessionend",un),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Y),Y=Rt.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,Y,$),_=Mt.get(b,P.length),_.init(Y),P.push(_),ht.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),wt.setFromProjectionMatrix(ht,Oi,Y.reversedDepth),at=this.localClippingEnabled,zt=vt.init(this.clippingPlanes,at),y=Z.get(b,H.length),y.init(),H.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){const At=U.xr.getDepthSensingMesh();At!==null&&Ti(At,Y,-1/0,U.sortObjects)}Ti(b,Y,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(yt,D),Qt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Qt&&Bt.addToRenderList(y,b),this.info.render.frame++,zt===!0&&vt.beginShadows();const ut=_.state.shadowsArray;Ct.render(ut,b,Y),zt===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=y.opaque,Q=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const At=Y.cameras;if(Q.length>0)for(let Lt=0,Vt=At.length;Lt<Vt;Lt++){const Ot=At[Lt];Zo(ft,Q,b,Ot)}Qt&&Bt.render(b);for(let Lt=0,Vt=At.length;Lt<Vt;Lt++){const Ot=At[Lt];As(y,b,Ot,Ot.viewport)}}else Q.length>0&&Zo(ft,Q,b,Y),Qt&&Bt.render(b),As(y,b,Y);$!==null&&G===0&&(re.updateMultisampleRenderTarget($),re.updateRenderTargetMipmap($)),b.isScene===!0&&b.onAfterRender(U,b,Y),Ut.resetDefaultState(),C=-1,w=null,P.pop(),P.length>0?(_=P[P.length-1],zt===!0&&vt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,H.pop(),H.length>0?y=H[H.length-1]:y=null};function Ti(b,Y,ut,ft){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)ut=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||wt.intersectsSprite(b)){ft&&Yt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);const Lt=F.update(b),Vt=b.material;Vt.visible&&y.push(b,Lt,Vt,ut,Yt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||wt.intersectsObject(b))){const Lt=F.update(b),Vt=b.material;if(ft&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Yt.copy(b.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Yt.copy(Lt.boundingSphere.center)),Yt.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(Vt)){const Ot=Lt.groups;for(let Jt=0,ee=Ot.length;Jt<ee;Jt++){const qt=Ot[Jt],fe=Vt[qt.materialIndex];fe&&fe.visible&&y.push(b,Lt,fe,ut,Yt.z,qt)}}else Vt.visible&&y.push(b,Lt,Vt,ut,Yt.z,null)}}const At=b.children;for(let Lt=0,Vt=At.length;Lt<Vt;Lt++)Ti(At[Lt],Y,ut,ft)}function As(b,Y,ut,ft){const Q=b.opaque,At=b.transmissive,Lt=b.transparent;_.setupLightsView(ut),zt===!0&&vt.setGlobalState(U.clippingPlanes,ut),ft&&It.viewport(B.copy(ft)),Q.length>0&&Rs(Q,Y,ut),At.length>0&&Rs(At,Y,ut),Lt.length>0&&Rs(Lt,Y,ut),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Zo(b,Y,ut,ft){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ft.id]===void 0&&(_.state.transmissionRenderTarget[ft.id]=new Ts(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Wo:Bi,minFilter:ys,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const At=_.state.transmissionRenderTarget[ft.id],Lt=ft.viewport||B;At.setSize(Lt.z*U.transmissionResolutionScale,Lt.w*U.transmissionResolutionScale);const Vt=U.getRenderTarget(),Ot=U.getActiveCubeFace(),Jt=U.getActiveMipmapLevel();U.setRenderTarget(At),U.getClearColor(dt),rt=U.getClearAlpha(),rt<1&&U.setClearColor(16777215,.5),U.clear(),Qt&&Bt.render(ut);const ee=U.toneMapping;U.toneMapping=ka;const qt=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),_.setupLightsView(ft),zt===!0&&vt.setGlobalState(U.clippingPlanes,ft),Rs(b,ut,ft),re.updateMultisampleRenderTarget(At),re.updateRenderTargetMipmap(At),ae.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ee=0,Ye=Y.length;Ee<Ye;Ee++){const Oe=Y[Ee],he=Oe.object,Kt=Oe.geometry,We=Oe.material,ge=Oe.group;if(We.side===Li&&he.layers.test(ft.layers)){const An=We.side;We.side=Xn,We.needsUpdate=!0,Or(he,ut,ft,Kt,We,ge),We.side=An,We.needsUpdate=!0,fe=!0}}fe===!0&&(re.updateMultisampleRenderTarget(At),re.updateRenderTargetMipmap(At))}U.setRenderTarget(Vt,Ot,Jt),U.setClearColor(dt,rt),qt!==void 0&&(ft.viewport=qt),U.toneMapping=ee}function Rs(b,Y,ut){const ft=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,At=b.length;Q<At;Q++){const Lt=b[Q],Vt=Lt.object,Ot=Lt.geometry,Jt=Lt.group;let ee=Lt.material;ee.allowOverride===!0&&ft!==null&&(ee=ft),Vt.layers.test(ut.layers)&&Or(Vt,Y,ut,Ot,ee,Jt)}}function Or(b,Y,ut,ft,Q,At){b.onBeforeRender(U,Y,ut,ft,Q,At),b.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(U,Y,ut,ft,b,At),Q.transparent===!0&&Q.side===Li&&Q.forceSinglePass===!1?(Q.side=Xn,Q.needsUpdate=!0,U.renderBufferDirect(ut,Y,ft,Q,b,At),Q.side=Xa,Q.needsUpdate=!0,U.renderBufferDirect(ut,Y,ft,Q,b,At),Q.side=Li):U.renderBufferDirect(ut,Y,ft,Q,b,At),b.onAfterRender(U,Y,ut,ft,Q,At)}function bi(b,Y,ut){Y.isScene!==!0&&(Y=Ht);const ft=Gt.get(b),Q=_.state.lights,At=_.state.shadowsArray,Lt=Q.state.version,Vt=K.getParameters(b,Q.state,At,Y,ut),Ot=K.getProgramCacheKey(Vt);let Jt=ft.programs;ft.environment=b.isMeshStandardMaterial?Y.environment:null,ft.fog=Y.fog,ft.envMap=(b.isMeshStandardMaterial?ke:Ve).get(b.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",St),Jt=new Map,ft.programs=Jt);let ee=Jt.get(Ot);if(ee!==void 0){if(ft.currentProgram===ee&&ft.lightsStateVersion===Lt)return Hi(b,Vt),ee}else Vt.uniforms=K.getUniforms(b),b.onBeforeCompile(Vt,U),ee=K.acquireProgram(Vt,Ot),Jt.set(Ot,ee),ft.uniforms=Vt.uniforms;const qt=ft.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=vt.uniform),Hi(b,Vt),ft.needsLights=ua(b),ft.lightsStateVersion=Lt,ft.needsLights&&(qt.ambientLightColor.value=Q.state.ambient,qt.lightProbe.value=Q.state.probe,qt.directionalLights.value=Q.state.directional,qt.directionalLightShadows.value=Q.state.directionalShadow,qt.spotLights.value=Q.state.spot,qt.spotLightShadows.value=Q.state.spotShadow,qt.rectAreaLights.value=Q.state.rectArea,qt.ltc_1.value=Q.state.rectAreaLTC1,qt.ltc_2.value=Q.state.rectAreaLTC2,qt.pointLights.value=Q.state.point,qt.pointLightShadows.value=Q.state.pointShadow,qt.hemisphereLights.value=Q.state.hemi,qt.directionalShadowMap.value=Q.state.directionalShadowMap,qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qt.spotShadowMap.value=Q.state.spotShadowMap,qt.spotLightMatrix.value=Q.state.spotLightMatrix,qt.spotLightMap.value=Q.state.spotLightMap,qt.pointShadowMap.value=Q.state.pointShadowMap,qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ft.currentProgram=ee,ft.uniformsList=null,ee}function ws(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=Oc.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function Hi(b,Y){const ut=Gt.get(b);ut.outputColorSpace=Y.outputColorSpace,ut.batching=Y.batching,ut.batchingColor=Y.batchingColor,ut.instancing=Y.instancing,ut.instancingColor=Y.instancingColor,ut.instancingMorph=Y.instancingMorph,ut.skinning=Y.skinning,ut.morphTargets=Y.morphTargets,ut.morphNormals=Y.morphNormals,ut.morphColors=Y.morphColors,ut.morphTargetsCount=Y.morphTargetsCount,ut.numClippingPlanes=Y.numClippingPlanes,ut.numIntersection=Y.numClipIntersection,ut.vertexAlphas=Y.vertexAlphas,ut.vertexTangents=Y.vertexTangents,ut.toneMapping=Y.toneMapping}function ca(b,Y,ut,ft,Q){Y.isScene!==!0&&(Y=Ht),re.resetTextureUnits();const At=Y.fog,Lt=ft.isMeshStandardMaterial?Y.environment:null,Vt=$===null?U.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Dr,Ot=(ft.isMeshStandardMaterial?ke:Ve).get(ft.envMap||Lt),Jt=ft.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,ee=!!ut.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),qt=!!ut.morphAttributes.position,fe=!!ut.morphAttributes.normal,Ee=!!ut.morphAttributes.color;let Ye=ka;ft.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ye=U.toneMapping);const Oe=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,he=Oe!==void 0?Oe.length:0,Kt=Gt.get(ft),We=_.state.lights;if(zt===!0&&(at===!0||b!==w)){const Qe=b===w&&ft.id===C;vt.setState(ft,b,Qe)}let ge=!1;ft.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==We.state.version||Kt.outputColorSpace!==Vt||Q.isBatchedMesh&&Kt.batching===!1||!Q.isBatchedMesh&&Kt.batching===!0||Q.isBatchedMesh&&Kt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Kt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Kt.instancing===!1||!Q.isInstancedMesh&&Kt.instancing===!0||Q.isSkinnedMesh&&Kt.skinning===!1||!Q.isSkinnedMesh&&Kt.skinning===!0||Q.isInstancedMesh&&Kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Kt.instancingMorph===!1&&Q.morphTexture!==null||Kt.envMap!==Ot||ft.fog===!0&&Kt.fog!==At||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==vt.numPlanes||Kt.numIntersection!==vt.numIntersection)||Kt.vertexAlphas!==Jt||Kt.vertexTangents!==ee||Kt.morphTargets!==qt||Kt.morphNormals!==fe||Kt.morphColors!==Ee||Kt.toneMapping!==Ye||Kt.morphTargetsCount!==he)&&(ge=!0):(ge=!0,Kt.__version=ft.version);let An=Kt.currentProgram;ge===!0&&(An=bi(ft,Y,Q));let hi=!1,Nn=!1,gn=!1;const He=An.getUniforms(),On=Kt.uniforms;if(It.useProgram(An.program)&&(hi=!0,Nn=!0,gn=!0),ft.id!==C&&(C=ft.id,Nn=!0),hi||w!==b){It.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),He.setValue(I,"projectionMatrix",b.projectionMatrix),He.setValue(I,"viewMatrix",b.matrixWorldInverse);const yn=He.map.cameraPosition;yn!==void 0&&yn.setValue(I,bt.setFromMatrixPosition(b.matrixWorld)),$t.logarithmicDepthBuffer&&He.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&He.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,Nn=!0,gn=!0)}if(Q.isSkinnedMesh){He.setOptional(I,Q,"bindMatrix"),He.setOptional(I,Q,"bindMatrixInverse");const Qe=Q.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),He.setValue(I,"boneTexture",Qe.boneTexture,re))}Q.isBatchedMesh&&(He.setOptional(I,Q,"batchingTexture"),He.setValue(I,"batchingTexture",Q._matricesTexture,re),He.setOptional(I,Q,"batchingIdTexture"),He.setValue(I,"batchingIdTexture",Q._indirectTexture,re),He.setOptional(I,Q,"batchingColorTexture"),Q._colorsTexture!==null&&He.setValue(I,"batchingColorTexture",Q._colorsTexture,re));const Rn=ut.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Et.update(Q,ut,An),(Nn||Kt.receiveShadow!==Q.receiveShadow)&&(Kt.receiveShadow=Q.receiveShadow,He.setValue(I,"receiveShadow",Q.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(On.envMap.value=Ot,On.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&Y.environment!==null&&(On.envMapIntensity.value=Y.environmentIntensity),Nn&&(He.setValue(I,"toneMappingExposure",U.toneMappingExposure),Kt.needsLights&&qa(On,gn),At&&ft.fog===!0&&nt.refreshFogUniforms(On,At),nt.refreshMaterialUniforms(On,ft,W,q,_.state.transmissionRenderTarget[b.id]),Oc.upload(I,ws(Kt),On,re)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Oc.upload(I,ws(Kt),On,re),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&He.setValue(I,"center",Q.center),He.setValue(I,"modelViewMatrix",Q.modelViewMatrix),He.setValue(I,"normalMatrix",Q.normalMatrix),He.setValue(I,"modelMatrix",Q.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const Qe=ft.uniformsGroups;for(let yn=0,Cs=Qe.length;yn<Cs;yn++){const Bn=Qe[yn];oe.update(Bn,An),oe.bind(Bn,An)}}return An}function qa(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function ua(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(b,Y,ut){const ft=Gt.get(b);ft.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Gt.get(b.texture).__webglTexture=Y,Gt.get(b.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ut,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){const ut=Gt.get(b);ut.__webglFramebuffer=Y,ut.__useDefaultFramebuffer=Y===void 0};const sn=I.createFramebuffer();this.setRenderTarget=function(b,Y=0,ut=0){$=b,V=Y,G=ut;let ft=!0,Q=null,At=!1,Lt=!1;if(b){const Ot=Gt.get(b);if(Ot.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(I.FRAMEBUFFER,null),ft=!1;else if(Ot.__webglFramebuffer===void 0)re.setupRenderTarget(b);else if(Ot.__hasExternalTextures)re.rebindTextures(b,Gt.get(b.texture).__webglTexture,Gt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const qt=b.depthTexture;if(Ot.__boundDepthTexture!==qt){if(qt!==null&&Gt.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(b)}}const Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Lt=!0);const ee=Gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ee[Y])?Q=ee[Y][ut]:Q=ee[Y],At=!0):b.samples>0&&re.useMultisampledRTT(b)===!1?Q=Gt.get(b).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[ut]:Q=ee,B.copy(b.viewport),J.copy(b.scissor),ct=b.scissorTest}else B.copy(tt).multiplyScalar(W).floor(),J.copy(_t).multiplyScalar(W).floor(),ct=mt;if(ut!==0&&(Q=sn),It.bindFramebuffer(I.FRAMEBUFFER,Q)&&ft&&It.drawBuffers(b,Q),It.viewport(B),It.scissor(J),It.setScissorTest(ct),At){const Ot=Gt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,ut)}else if(Lt){const Ot=Y;for(let Jt=0;Jt<b.textures.length;Jt++){const ee=Gt.get(b.textures[Jt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Jt,ee.__webglTexture,ut,Ot)}}else if(b!==null&&ut!==0){const Ot=Gt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,ut)}C=-1},this.readRenderTargetPixels=function(b,Y,ut,ft,Q,At,Lt,Vt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){It.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const Jt=b.textures[Vt],ee=Jt.format,qt=Jt.type;if(!$t.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-ft&&ut>=0&&ut<=b.height-Q&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Vt),I.readPixels(Y,ut,ft,Q,Wt.convert(ee),Wt.convert(qt),At))}finally{const Jt=$!==null?Gt.get($).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(b,Y,ut,ft,Q,At,Lt,Vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(Y>=0&&Y<=b.width-ft&&ut>=0&&ut<=b.height-Q){It.bindFramebuffer(I.FRAMEBUFFER,Ot);const Jt=b.textures[Vt],ee=Jt.format,qt=Jt.type;if(!$t.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,fe),I.bufferData(I.PIXEL_PACK_BUFFER,At.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Vt),I.readPixels(Y,ut,ft,Q,Wt.convert(ee),Wt.convert(qt),0);const Ee=$!==null?Gt.get($).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,Ee);const Ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await gy(I,Ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,fe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,At),I.deleteBuffer(fe),I.deleteSync(Ye),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Y=null,ut=0){const ft=Math.pow(2,-ut),Q=Math.floor(b.image.width*ft),At=Math.floor(b.image.height*ft),Lt=Y!==null?Y.x:0,Vt=Y!==null?Y.y:0;re.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,ut,0,0,Lt,Vt,Q,At),It.unbindTexture()};const Ko=I.createFramebuffer(),Qo=I.createFramebuffer();this.copyTextureToTexture=function(b,Y,ut=null,ft=null,Q=0,At=null){At===null&&(Q!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Q,Q=0):At=0);let Lt,Vt,Ot,Jt,ee,qt,fe,Ee,Ye;const Oe=b.isCompressedTexture?b.mipmaps[At]:b.image;if(ut!==null)Lt=ut.max.x-ut.min.x,Vt=ut.max.y-ut.min.y,Ot=ut.isBox3?ut.max.z-ut.min.z:1,Jt=ut.min.x,ee=ut.min.y,qt=ut.isBox3?ut.min.z:0;else{const Rn=Math.pow(2,-Q);Lt=Math.floor(Oe.width*Rn),Vt=Math.floor(Oe.height*Rn),b.isDataArrayTexture?Ot=Oe.depth:b.isData3DTexture?Ot=Math.floor(Oe.depth*Rn):Ot=1,Jt=0,ee=0,qt=0}ft!==null?(fe=ft.x,Ee=ft.y,Ye=ft.z):(fe=0,Ee=0,Ye=0);const he=Wt.convert(Y.format),Kt=Wt.convert(Y.type);let We;Y.isData3DTexture?(re.setTexture3D(Y,0),We=I.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(re.setTexture2DArray(Y,0),We=I.TEXTURE_2D_ARRAY):(re.setTexture2D(Y,0),We=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);const ge=I.getParameter(I.UNPACK_ROW_LENGTH),An=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hi=I.getParameter(I.UNPACK_SKIP_PIXELS),Nn=I.getParameter(I.UNPACK_SKIP_ROWS),gn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Oe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Oe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);const He=b.isDataArrayTexture||b.isData3DTexture,On=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const Rn=Gt.get(b),Qe=Gt.get(Y),yn=Gt.get(Rn.__renderTarget),Cs=Gt.get(Qe.__renderTarget);It.bindFramebuffer(I.READ_FRAMEBUFFER,yn.__webglFramebuffer),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let Bn=0;Bn<Ot;Bn++)He&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.get(b).__webglTexture,Q,qt+Bn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.get(Y).__webglTexture,At,Ye+Bn)),I.blitFramebuffer(Jt,ee,Lt,Vt,fe,Ee,Lt,Vt,I.DEPTH_BUFFER_BIT,I.NEAREST);It.bindFramebuffer(I.READ_FRAMEBUFFER,null),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Q!==0||b.isRenderTargetTexture||Gt.has(b)){const Rn=Gt.get(b),Qe=Gt.get(Y);It.bindFramebuffer(I.READ_FRAMEBUFFER,Ko),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qo);for(let yn=0;yn<Ot;yn++)He?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rn.__webglTexture,Q,qt+yn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rn.__webglTexture,Q),On?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.__webglTexture,At,Ye+yn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qe.__webglTexture,At),Q!==0?I.blitFramebuffer(Jt,ee,Lt,Vt,fe,Ee,Lt,Vt,I.COLOR_BUFFER_BIT,I.NEAREST):On?I.copyTexSubImage3D(We,At,fe,Ee,Ye+yn,Jt,ee,Lt,Vt):I.copyTexSubImage2D(We,At,fe,Ee,Jt,ee,Lt,Vt);It.bindFramebuffer(I.READ_FRAMEBUFFER,null),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else On?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(We,At,fe,Ee,Ye,Lt,Vt,Ot,he,Kt,Oe.data):Y.isCompressedArrayTexture?I.compressedTexSubImage3D(We,At,fe,Ee,Ye,Lt,Vt,Ot,he,Oe.data):I.texSubImage3D(We,At,fe,Ee,Ye,Lt,Vt,Ot,he,Kt,Oe):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,At,fe,Ee,Lt,Vt,he,Kt,Oe.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,At,fe,Ee,Oe.width,Oe.height,he,Oe.data):I.texSubImage2D(I.TEXTURE_2D,At,fe,Ee,Lt,Vt,he,Kt,Oe);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,An),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,gn),At===0&&Y.generateMipmaps&&I.generateMipmap(We),It.unbindTexture()},this.initRenderTarget=function(b){Gt.get(b).__webglFramebuffer===void 0&&re.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?re.setTextureCube(b,0):b.isData3DTexture?re.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?re.setTexture2DArray(b,0):re.setTexture2D(b,0),It.unbindTexture()},this.resetState=function(){V=0,G=0,$=null,It.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}const S0={type:"change"},Pd={type:"start"},lv={type:"end"},wc=new Ld,y0=new Ha,FA=Math.cos(70*py.DEG2RAD),dn=new st,kn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lh=1e-6;class HA extends eM{constructor(t,i=null){super(t,i),this.state=Fe.NONE,this.target=new st,this.cursor=new st,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new st,this._lastQuaternion=new Es,this._lastTargetPosition=new st,this._quat=new Es().setFromUnitVectors(t.up,new st(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new j_,this._sphericalDelta=new j_,this._scale=1,this._panOffset=new st,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new st,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VA.bind(this),this._onPointerDown=GA.bind(this),this._onPointerUp=kA.bind(this),this._onContextMenu=KA.bind(this),this._onMouseWheel=YA.bind(this),this._onKeyDown=qA.bind(this),this._onTouchStart=jA.bind(this),this._onTouchMove=ZA.bind(this),this._onMouseDown=XA.bind(this),this._onMouseMove=WA.bind(this),this._interceptControlDown=QA.bind(this),this._interceptControlUp=JA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(S0),this.update(),this.state=Fe.NONE}update(t=null){const i=this.object.position;dn.copy(i).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=kn:s>Math.PI&&(s-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),i.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=dn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new st(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new st(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(wc.origin.copy(this.object.position),wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wc.direction))<FA?this.object.lookAt(this.target):(y0.setFromNormalAndCoplanarPoint(this.object.up,this.target),wc.intersectPlane(y0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Lh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lh||this._lastTargetPosition.distanceToSquared(this.target)>Lh?(this.dispatchEvent(S0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?kn/60*this.autoRotateSpeed*t:kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){dn.setFromMatrixColumn(i,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,i){this.screenSpacePanning===!0?dn.setFromMatrixColumn(i,1):(dn.setFromMatrixColumn(i,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;dn.copy(l).sub(this.target);let u=dn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function GA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function VA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function kA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lv),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function XA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Fe.DOLLY;break;case Tr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}break;case Tr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Pd)}function WA(r){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function YA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(r.preventDefault(),this.dispatchEvent(Pd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(lv))}function qA(r){this.enabled!==!1&&this._handleKeyDown(r)}function jA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Fe.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Fe.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Pd)}function ZA(r){switch(this._trackPointer(r),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Fe.NONE}}function KA(r){this.enabled!==!1&&r.preventDefault()}function QA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function JA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cv=6048e5,$A=864e5,M0=Symbol.for("constructDateFrom");function Ya(r,t){return typeof r=="function"?r(t):r&&typeof r=="object"&&M0 in r?r[M0](t):r instanceof Date?new r.constructor(t):new Date(t)}function Ei(r,t){return Ya(t||r,r)}let t1={};function Wc(){return t1}function Xo(r,t){const i=Wc(),s=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??i.weekStartsOn??i.locale?.options?.weekStartsOn??0,l=Ei(r,t?.in),u=l.getDay(),h=(u<s?7:0)+u-s;return l.setDate(l.getDate()-h),l.setHours(0,0,0,0),l}function Hc(r,t){return Xo(r,{...t,weekStartsOn:1})}function uv(r,t){const i=Ei(r,t?.in),s=i.getFullYear(),l=Ya(i,0);l.setFullYear(s+1,0,4),l.setHours(0,0,0,0);const u=Hc(l),h=Ya(i,0);h.setFullYear(s,0,4),h.setHours(0,0,0,0);const d=Hc(h);return i.getTime()>=u.getTime()?s+1:i.getTime()>=d.getTime()?s:s-1}function E0(r){const t=Ei(r),i=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return i.setUTCFullYear(t.getFullYear()),+r-+i}function e1(r,...t){const i=Ya.bind(null,t.find(s=>typeof s=="object"));return t.map(i)}function T0(r,t){const i=Ei(r,t?.in);return i.setHours(0,0,0,0),i}function n1(r,t,i){const[s,l]=e1(i?.in,r,t),u=T0(s),h=T0(l),d=+u-E0(u),m=+h-E0(h);return Math.round((d-m)/$A)}function i1(r,t){const i=uv(r,t),s=Ya(r,0);return s.setFullYear(i,0,4),s.setHours(0,0,0,0),Hc(s)}function a1(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function s1(r){return!(!a1(r)&&typeof r!="number"||isNaN(+Ei(r)))}function r1(r,t){const i=Ei(r,t?.in);return i.setFullYear(i.getFullYear(),0,1),i.setHours(0,0,0,0),i}const o1={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},l1=(r,t,i)=>{let s;const l=o1[r];return typeof l=="string"?s=l:t===1?s=l.one:s=l.other.replace("{{count}}",t.toString()),i?.addSuffix?i.comparison&&i.comparison>0?"in "+s:s+" ago":s};function Nh(r){return(t={})=>{const i=t.width?String(t.width):r.defaultWidth;return r.formats[i]||r.formats[r.defaultWidth]}}const c1={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},u1={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},f1={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},h1={date:Nh({formats:c1,defaultWidth:"full"}),time:Nh({formats:u1,defaultWidth:"full"}),dateTime:Nh({formats:f1,defaultWidth:"full"})},d1={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},p1=(r,t,i,s)=>d1[r];function Io(r){return(t,i)=>{const s=i?.context?String(i.context):"standalone";let l;if(s==="formatting"&&r.formattingValues){const h=r.defaultFormattingWidth||r.defaultWidth,d=i?.width?String(i.width):h;l=r.formattingValues[d]||r.formattingValues[h]}else{const h=r.defaultWidth,d=i?.width?String(i.width):r.defaultWidth;l=r.values[d]||r.values[h]}const u=r.argumentCallback?r.argumentCallback(t):t;return l[u]}}const m1={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},g1={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},_1={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},v1={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},x1={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},S1={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},y1=(r,t)=>{const i=Number(r),s=i%100;if(s>20||s<10)switch(s%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},M1={ordinalNumber:y1,era:Io({values:m1,defaultWidth:"wide"}),quarter:Io({values:g1,defaultWidth:"wide",argumentCallback:r=>r-1}),month:Io({values:_1,defaultWidth:"wide"}),day:Io({values:v1,defaultWidth:"wide"}),dayPeriod:Io({values:x1,defaultWidth:"wide",formattingValues:S1,defaultFormattingWidth:"wide"})};function Bo(r){return(t,i={})=>{const s=i.width,l=s&&r.matchPatterns[s]||r.matchPatterns[r.defaultMatchWidth],u=t.match(l);if(!u)return null;const h=u[0],d=s&&r.parsePatterns[s]||r.parsePatterns[r.defaultParseWidth],m=Array.isArray(d)?T1(d,v=>v.test(h)):E1(d,v=>v.test(h));let p;p=r.valueCallback?r.valueCallback(m):m,p=i.valueCallback?i.valueCallback(p):p;const g=t.slice(h.length);return{value:p,rest:g}}}function E1(r,t){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i)&&t(r[i]))return i}function T1(r,t){for(let i=0;i<r.length;i++)if(t(r[i]))return i}function b1(r){return(t,i={})=>{const s=t.match(r.matchPattern);if(!s)return null;const l=s[0],u=t.match(r.parsePattern);if(!u)return null;let h=r.valueCallback?r.valueCallback(u[0]):u[0];h=i.valueCallback?i.valueCallback(h):h;const d=t.slice(l.length);return{value:h,rest:d}}}const A1=/^(\d+)(th|st|nd|rd)?/i,R1=/\d+/i,w1={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},C1={any:[/^b/i,/^(a|c)/i]},D1={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},U1={any:[/1/i,/2/i,/3/i,/4/i]},L1={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},N1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},O1={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},P1={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},I1={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},B1={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},z1={ordinalNumber:b1({matchPattern:A1,parsePattern:R1,valueCallback:r=>parseInt(r,10)}),era:Bo({matchPatterns:w1,defaultMatchWidth:"wide",parsePatterns:C1,defaultParseWidth:"any"}),quarter:Bo({matchPatterns:D1,defaultMatchWidth:"wide",parsePatterns:U1,defaultParseWidth:"any",valueCallback:r=>r+1}),month:Bo({matchPatterns:L1,defaultMatchWidth:"wide",parsePatterns:N1,defaultParseWidth:"any"}),day:Bo({matchPatterns:O1,defaultMatchWidth:"wide",parsePatterns:P1,defaultParseWidth:"any"}),dayPeriod:Bo({matchPatterns:I1,defaultMatchWidth:"any",parsePatterns:B1,defaultParseWidth:"any"})},F1={code:"en-US",formatDistance:l1,formatLong:h1,formatRelative:p1,localize:M1,match:z1,options:{weekStartsOn:0,firstWeekContainsDate:1}};function H1(r,t){const i=Ei(r,t?.in);return n1(i,r1(i))+1}function G1(r,t){const i=Ei(r,t?.in),s=+Hc(i)-+i1(i);return Math.round(s/cv)+1}function fv(r,t){const i=Ei(r,t?.in),s=i.getFullYear(),l=Wc(),u=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??l.firstWeekContainsDate??l.locale?.options?.firstWeekContainsDate??1,h=Ya(t?.in||r,0);h.setFullYear(s+1,0,u),h.setHours(0,0,0,0);const d=Xo(h,t),m=Ya(t?.in||r,0);m.setFullYear(s,0,u),m.setHours(0,0,0,0);const p=Xo(m,t);return+i>=+d?s+1:+i>=+p?s:s-1}function V1(r,t){const i=Wc(),s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,l=fv(r,t),u=Ya(t?.in||r,0);return u.setFullYear(l,0,s),u.setHours(0,0,0,0),Xo(u,t)}function k1(r,t){const i=Ei(r,t?.in),s=+Xo(i,t)-+V1(i,t);return Math.round(s/cv)+1}function Le(r,t){const i=r<0?"-":"",s=Math.abs(r).toString().padStart(t,"0");return i+s}const Fa={y(r,t){const i=r.getFullYear(),s=i>0?i:1-i;return Le(t==="yy"?s%100:s,t.length)},M(r,t){const i=r.getMonth();return t==="M"?String(i+1):Le(i+1,2)},d(r,t){return Le(r.getDate(),t.length)},a(r,t){const i=r.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return i.toUpperCase();case"aaa":return i;case"aaaaa":return i[0];case"aaaa":default:return i==="am"?"a.m.":"p.m."}},h(r,t){return Le(r.getHours()%12||12,t.length)},H(r,t){return Le(r.getHours(),t.length)},m(r,t){return Le(r.getMinutes(),t.length)},s(r,t){return Le(r.getSeconds(),t.length)},S(r,t){const i=t.length,s=r.getMilliseconds(),l=Math.trunc(s*Math.pow(10,i-3));return Le(l,t.length)}},yr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},b0={G:function(r,t,i){const s=r.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return i.era(s,{width:"abbreviated"});case"GGGGG":return i.era(s,{width:"narrow"});case"GGGG":default:return i.era(s,{width:"wide"})}},y:function(r,t,i){if(t==="yo"){const s=r.getFullYear(),l=s>0?s:1-s;return i.ordinalNumber(l,{unit:"year"})}return Fa.y(r,t)},Y:function(r,t,i,s){const l=fv(r,s),u=l>0?l:1-l;if(t==="YY"){const h=u%100;return Le(h,2)}return t==="Yo"?i.ordinalNumber(u,{unit:"year"}):Le(u,t.length)},R:function(r,t){const i=uv(r);return Le(i,t.length)},u:function(r,t){const i=r.getFullYear();return Le(i,t.length)},Q:function(r,t,i){const s=Math.ceil((r.getMonth()+1)/3);switch(t){case"Q":return String(s);case"QQ":return Le(s,2);case"Qo":return i.ordinalNumber(s,{unit:"quarter"});case"QQQ":return i.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return i.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(s,{width:"wide",context:"formatting"})}},q:function(r,t,i){const s=Math.ceil((r.getMonth()+1)/3);switch(t){case"q":return String(s);case"qq":return Le(s,2);case"qo":return i.ordinalNumber(s,{unit:"quarter"});case"qqq":return i.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return i.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(s,{width:"wide",context:"standalone"})}},M:function(r,t,i){const s=r.getMonth();switch(t){case"M":case"MM":return Fa.M(r,t);case"Mo":return i.ordinalNumber(s+1,{unit:"month"});case"MMM":return i.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return i.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(s,{width:"wide",context:"formatting"})}},L:function(r,t,i){const s=r.getMonth();switch(t){case"L":return String(s+1);case"LL":return Le(s+1,2);case"Lo":return i.ordinalNumber(s+1,{unit:"month"});case"LLL":return i.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return i.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(s,{width:"wide",context:"standalone"})}},w:function(r,t,i,s){const l=k1(r,s);return t==="wo"?i.ordinalNumber(l,{unit:"week"}):Le(l,t.length)},I:function(r,t,i){const s=G1(r);return t==="Io"?i.ordinalNumber(s,{unit:"week"}):Le(s,t.length)},d:function(r,t,i){return t==="do"?i.ordinalNumber(r.getDate(),{unit:"date"}):Fa.d(r,t)},D:function(r,t,i){const s=H1(r);return t==="Do"?i.ordinalNumber(s,{unit:"dayOfYear"}):Le(s,t.length)},E:function(r,t,i){const s=r.getDay();switch(t){case"E":case"EE":case"EEE":return i.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return i.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(s,{width:"short",context:"formatting"});case"EEEE":default:return i.day(s,{width:"wide",context:"formatting"})}},e:function(r,t,i,s){const l=r.getDay(),u=(l-s.weekStartsOn+8)%7||7;switch(t){case"e":return String(u);case"ee":return Le(u,2);case"eo":return i.ordinalNumber(u,{unit:"day"});case"eee":return i.day(l,{width:"abbreviated",context:"formatting"});case"eeeee":return i.day(l,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(l,{width:"short",context:"formatting"});case"eeee":default:return i.day(l,{width:"wide",context:"formatting"})}},c:function(r,t,i,s){const l=r.getDay(),u=(l-s.weekStartsOn+8)%7||7;switch(t){case"c":return String(u);case"cc":return Le(u,t.length);case"co":return i.ordinalNumber(u,{unit:"day"});case"ccc":return i.day(l,{width:"abbreviated",context:"standalone"});case"ccccc":return i.day(l,{width:"narrow",context:"standalone"});case"cccccc":return i.day(l,{width:"short",context:"standalone"});case"cccc":default:return i.day(l,{width:"wide",context:"standalone"})}},i:function(r,t,i){const s=r.getDay(),l=s===0?7:s;switch(t){case"i":return String(l);case"ii":return Le(l,t.length);case"io":return i.ordinalNumber(l,{unit:"day"});case"iii":return i.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return i.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return i.day(s,{width:"short",context:"formatting"});case"iiii":default:return i.day(s,{width:"wide",context:"formatting"})}},a:function(r,t,i){const l=r.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return i.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"aaa":return i.dayPeriod(l,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return i.dayPeriod(l,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(l,{width:"wide",context:"formatting"})}},b:function(r,t,i){const s=r.getHours();let l;switch(s===12?l=yr.noon:s===0?l=yr.midnight:l=s/12>=1?"pm":"am",t){case"b":case"bb":return i.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"bbb":return i.dayPeriod(l,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return i.dayPeriod(l,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(l,{width:"wide",context:"formatting"})}},B:function(r,t,i){const s=r.getHours();let l;switch(s>=17?l=yr.evening:s>=12?l=yr.afternoon:s>=4?l=yr.morning:l=yr.night,t){case"B":case"BB":case"BBB":return i.dayPeriod(l,{width:"abbreviated",context:"formatting"});case"BBBBB":return i.dayPeriod(l,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(l,{width:"wide",context:"formatting"})}},h:function(r,t,i){if(t==="ho"){let s=r.getHours()%12;return s===0&&(s=12),i.ordinalNumber(s,{unit:"hour"})}return Fa.h(r,t)},H:function(r,t,i){return t==="Ho"?i.ordinalNumber(r.getHours(),{unit:"hour"}):Fa.H(r,t)},K:function(r,t,i){const s=r.getHours()%12;return t==="Ko"?i.ordinalNumber(s,{unit:"hour"}):Le(s,t.length)},k:function(r,t,i){let s=r.getHours();return s===0&&(s=24),t==="ko"?i.ordinalNumber(s,{unit:"hour"}):Le(s,t.length)},m:function(r,t,i){return t==="mo"?i.ordinalNumber(r.getMinutes(),{unit:"minute"}):Fa.m(r,t)},s:function(r,t,i){return t==="so"?i.ordinalNumber(r.getSeconds(),{unit:"second"}):Fa.s(r,t)},S:function(r,t){return Fa.S(r,t)},X:function(r,t,i){const s=r.getTimezoneOffset();if(s===0)return"Z";switch(t){case"X":return R0(s);case"XXXX":case"XX":return _s(s);case"XXXXX":case"XXX":default:return _s(s,":")}},x:function(r,t,i){const s=r.getTimezoneOffset();switch(t){case"x":return R0(s);case"xxxx":case"xx":return _s(s);case"xxxxx":case"xxx":default:return _s(s,":")}},O:function(r,t,i){const s=r.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+A0(s,":");case"OOOO":default:return"GMT"+_s(s,":")}},z:function(r,t,i){const s=r.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+A0(s,":");case"zzzz":default:return"GMT"+_s(s,":")}},t:function(r,t,i){const s=Math.trunc(+r/1e3);return Le(s,t.length)},T:function(r,t,i){return Le(+r,t.length)}};function A0(r,t=""){const i=r>0?"-":"+",s=Math.abs(r),l=Math.trunc(s/60),u=s%60;return u===0?i+String(l):i+String(l)+t+Le(u,2)}function R0(r,t){return r%60===0?(r>0?"-":"+")+Le(Math.abs(r)/60,2):_s(r,t)}function _s(r,t=""){const i=r>0?"-":"+",s=Math.abs(r),l=Le(Math.trunc(s/60),2),u=Le(s%60,2);return i+l+t+u}const w0=(r,t)=>{switch(r){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},hv=(r,t)=>{switch(r){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},X1=(r,t)=>{const i=r.match(/(P+)(p+)?/)||[],s=i[1],l=i[2];if(!l)return w0(r,t);let u;switch(s){case"P":u=t.dateTime({width:"short"});break;case"PP":u=t.dateTime({width:"medium"});break;case"PPP":u=t.dateTime({width:"long"});break;case"PPPP":default:u=t.dateTime({width:"full"});break}return u.replace("{{date}}",w0(s,t)).replace("{{time}}",hv(l,t))},W1={p:hv,P:X1},Y1=/^D+$/,q1=/^Y+$/,j1=["D","DD","YY","YYYY"];function Z1(r){return Y1.test(r)}function K1(r){return q1.test(r)}function Q1(r,t,i){const s=J1(r,t,i);if(console.warn(s),j1.includes(r))throw new RangeError(s)}function J1(r,t,i){const s=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${t}\`) for formatting ${s} to the input \`${i}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const $1=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,eR=/^'([^]*?)'?$/,nR=/''/g,iR=/[a-zA-Z]/;function aR(r,t,i){const s=Wc(),l=s.locale??F1,u=s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,h=s.weekStartsOn??s.locale?.options?.weekStartsOn??0,d=Ei(r,i?.in);if(!s1(d))throw new RangeError("Invalid time value");let m=t.match(tR).map(g=>{const v=g[0];if(v==="p"||v==="P"){const x=W1[v];return x(g,l.formatLong)}return g}).join("").match($1).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const v=g[0];if(v==="'")return{isToken:!1,value:sR(g)};if(b0[v])return{isToken:!0,value:g};if(v.match(iR))throw new RangeError("Format string contains an unescaped latin alphabet character `"+v+"`");return{isToken:!1,value:g}});l.localize.preprocessor&&(m=l.localize.preprocessor(d,m));const p={firstWeekContainsDate:u,weekStartsOn:h,locale:l};return m.map(g=>{if(!g.isToken)return g.value;const v=g.value;(K1(v)||Z1(v))&&Q1(v,t,String(r));const x=b0[v[0]];return x(d,v,l.localize,p)}).join("")}function sR(r){const t=r.match(eR);return t?t[1].replace(nR,"'"):r}const rR={width:"100%",height:"50vh",borderRadius:"1rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",backgroundColor:"#f1f5f9",position:"relative"},oR=()=>{const[r,t]=Ln.useState(10),[i,s]=Ln.useState(24),[l,u]=Ln.useState(10),[h,d]=Ln.useState(10),[m,p]=Ln.useState(3),[g,v]=Ln.useState(10),[x,M]=Ln.useState(null),[A,R]=Ln.useState(!1),[y,_]=Ln.useState(null),[H,P]=Ln.useState([]),[U,z]=Ln.useState([]),V=Ln.useRef(null),G=Ln.useRef(null),$=Ln.useMemo(()=>{const B=[],J=aR(new Date,"dd-MMM-yy");B.push("STAAD SPACE"),B.push("START JOB INFORMATION"),B.push("ENGINEER DATE "+J),B.push("END JOB INFORMATION"),B.push("INPUT WIDTH 79"),B.push("UNIT METER KN"),B.push("JOINT COORDINATES");const ct=N=>parseFloat(N.toFixed(3)),dt=74;let rt="";return H.forEach(N=>{const q=`${N.node} ${ct(N.x)} ${ct(N.y)} ${ct(N.z)}`;rt===""?rt=q:(rt+"; "+q).length<=dt?rt+="; "+q:(B.push(rt+";"),rt=q)}),rt!==""&&B.push(rt+";"),B.push(`
ELEMENT INCIDENCES SHELL`),rt="",U.forEach((N,q)=>{let W=`${q+1} `;N.nodes.forEach((yt,D)=>{W+=yt,D<N.nodes.length-1&&(W+=" ")}),rt===""?rt=W:(rt+"; "+W).length<=dt?rt+="; "+W:(B.push(rt+";"),rt=W)}),rt!==""&&B.push(rt+";"),B.join(`
`)},[H,U]),C=()=>{const B="coordinates.txt",J=document.createElement("a"),ct=new Blob([$],{type:"text/plain"});J.href=URL.createObjectURL(ct),J.download=B,document.body.appendChild(J),J.click(),document.body.removeChild(J)};Ln.useEffect(()=>{const B=new Gy;G.current=B;const J=new ui(75,window.innerWidth/(window.innerHeight*.75),.1,1e3),ct=new zA({antialiasing:!0,alpha:!0}),dt=V.current;if(!dt)return;ct.setSize(dt.clientWidth,dt.clientHeight),dt.appendChild(ct.domElement),J.position.z=Math.max(r*1.5,h*1.5,m*1.5,20),J.position.y=Math.max(r*.5,h*.5,10),J.lookAt(new st(0,(h+1)/2,0));const rt=new HA(J,ct.domElement);rt.enableDamping=!0,rt.dampingFactor=.05,rt.screenSpacePanning=!1,rt.minDistance=5,rt.maxDistance=500;const N=new $y(16777215,.6);B.add(N);const q=new Jy(16777215,.8);q.position.set(5,10,7),B.add(q),(()=>{const tt=B.getObjectByName("combinedMesh");tt&&(B.remove(tt),tt.geometry.dispose(),tt.material.dispose());const _t=B.getObjectByName("gridMesh");_t&&(B.remove(_t),_t.geometry.dispose(),_t.material.dispose());const mt=r/2,wt=i,zt=l,at=mt+m,ht=[],bt=[],Yt=[],Ht=[],Qt=[],Ze=new Me(4473924);let I=1;Yt.push(0,0,0),ht.push({node:I++,x:0,y:0,z:0});for(let F=1;F<=l;F++){const K=F/l*mt;for(let nt=0;nt<i;nt++){const Z=nt/i*2*Math.PI,Mt=K*Math.cos(Z),vt=0,Ct=K*Math.sin(Z);Yt.push(Mt,vt,Ct),ht.push({node:I++,x:Mt,y:vt,z:Ct})}}const Ae=0;for(let F=0;F<i;F++){const K=1+F,nt=1+(F+1)%i;Ht.push(Ae,nt,K),bt.push({nodes:[ht[Ae].node,ht[nt].node,ht[K].node]})}for(let F=0;F<l-1;F++)for(let K=0;K<i;K++){const nt=1+F*i,Z=nt+K,Mt=nt+(K+1)%i,vt=nt+i+(K+1)%i,Ct=nt+i+K;Ht.push(Z,Mt,Ct),Ht.push(Mt,vt,Ct),bt.push({nodes:[ht[Mt].node,ht[vt].node,ht[Ct].node,ht[Z].node]})}const ae=ht.length,$t=ae-i;for(let F=1;F<=zt;F++){const K=F/zt*h;for(let nt=0;nt<wt;nt++){const Z=nt/wt*2*Math.PI,Mt=mt*Math.cos(Z),vt=K,Ct=mt*Math.sin(Z);Yt.push(Mt,vt,Ct),ht.push({node:I++,x:Mt,y:vt,z:Ct})}}for(let F=0;F<zt;F++){const K=$t+F*wt,nt=ae+F*wt;for(let Z=0;Z<wt;Z++){const Mt=K+Z,vt=K+(Z+1)%wt,Ct=nt+(Z+1)%wt,Bt=nt+Z;Ht.push(Mt,vt,Bt),Ht.push(vt,Ct,Bt),bt.push({nodes:[ht[Mt].node,ht[vt].node,ht[Ct].node,ht[Bt].node]})}}const It=ht.length;for(let F=1;F<=g;F++){const K=mt+F/g*m;for(let nt=0;nt<i;nt++){const Z=nt/i*2*Math.PI,Mt=K*Math.cos(Z),vt=h,Ct=K*Math.sin(Z);Yt.push(Mt,vt,Ct),ht.push({node:I++,x:Mt,y:vt,z:Ct})}}const Ne=It-wt;for(let F=0;F<g;F++){const K=Ne+F*i,nt=It+F*i;for(let Z=0;Z<i;Z++){const Mt=K+Z,vt=K+(Z+1)%i,Ct=nt+(Z+1)%i,Bt=nt+Z;Ht.push(Mt,vt,Bt),Ht.push(vt,Ct,Bt),bt.push({nodes:[ht[Mt].node,ht[vt].node,ht[Ct].node,ht[Bt].node]})}}for(let F=0;F<i;F++){const K=F/i*2*Math.PI,nt=mt*Math.cos(K),Z=mt*Math.sin(K);Qt.push(0,.01,0),Qt.push(nt,.01,Z)}for(let F=1;F<=l;F++){const K=F/l*mt;for(let nt=0;nt<i;nt++){const Z=nt/i*2*Math.PI,Mt=(nt+1)/i*2*Math.PI,vt=K*Math.cos(Z),Ct=K*Math.sin(Z),Bt=K*Math.cos(Mt),Et=K*Math.sin(Mt);Qt.push(vt,.01,Ct),Qt.push(Bt,.01,Et)}}for(let F=0;F<wt;F++){const K=F/wt*2*Math.PI,nt=mt*Math.cos(K),Z=mt*Math.sin(K);Qt.push(nt,0,Z),Qt.push(nt,h,Z)}for(let F=1;F<zt;F++){const K=F/zt*h;for(let nt=0;nt<wt;nt++){const Z=nt/wt*2*Math.PI,Mt=(nt+1)/wt*2*Math.PI,vt=mt*Math.cos(Z),Ct=mt*Math.sin(Z),Bt=mt*Math.cos(Mt),Et=mt*Math.sin(Mt);Qt.push(vt,K,Ct),Qt.push(Bt,K,Et)}}for(let F=0;F<i;F++){const K=F/i*2*Math.PI,nt=mt*Math.cos(K),Z=mt*Math.sin(K),Mt=at*Math.cos(K),vt=at*Math.sin(K);Qt.push(nt,h,Z),Qt.push(Mt,h,vt)}for(let F=1;F<=g;F++){const K=mt+F/g*m;for(let nt=0;nt<i;nt++){const Z=nt/i*2*Math.PI,Mt=(nt+1)/i*2*Math.PI,vt=K*Math.cos(Z),Ct=K*Math.sin(Z),Bt=K*Math.cos(Mt),Et=K*Math.sin(Mt);Qt.push(vt,h,Ct),Qt.push(Bt,h,Et)}}const Gt=new Fi;Gt.setAttribute("position",new Mi(Yt,3)),Gt.setIndex(Ht),Gt.computeVertexNormals();const re=new qy({color:16777215,metalness:.5,roughness:.5,side:Li}),Ve=new Pi(Gt,re);Ve.name="combinedMesh",B.add(Ve);const ke=new Fi;ke.setAttribute("position",new Mi(Qt,3));const L=new J0({color:Ze}),E=new Yy(ke,L);E.name="gridMesh",B.add(E),P(ht),z(bt)})();const yt=()=>{requestAnimationFrame(yt),rt.update(),ct.render(B,J)};yt();const D=()=>{dt&&(J.aspect=dt.clientWidth/dt.clientHeight,J.updateProjectionMatrix(),ct.setSize(dt.clientWidth,dt.clientHeight))};return window.addEventListener("resize",D),()=>{window.removeEventListener("resize",D),dt&&ct.domElement&&dt.removeChild(ct.domElement);const tt=G.current;tt&&tt.traverse(_t=>{_t.geometry&&_t.geometry.dispose(),_t.material&&_t.material.dispose()}),ct.dispose(),rt.dispose()}},[r,i,l,h,m,g]);const w=(B,J,ct,dt)=>Ce.jsxs("div",{className:"flex flex-row items-center justify-between w-full",children:[Ce.jsx("label",{className:"text-gray-700 font-semibold flex-shrink-0",children:B}),Ce.jsx("input",{type:"number",value:J,onChange:rt=>ct(Math.max(1,Number(rt.target.value))),step:dt,className:"text-center px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow w-2/5"})]});return Ce.jsxs("div",{className:"min-h-screen bg-gray-100 p-4 md:p-8 font-sans flex flex-col md:flex-row items-start gap-8",children:[Ce.jsx("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"}),Ce.jsx("script",{src:"https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"}),Ce.jsx("script",{src:"https://cdn.tailwindcss.com"}),Ce.jsx("script",{src:"https://cdn.jsdelivr.net/npm/date-fns@2.30.0/dist/date-fns.min.js"}),Ce.jsxs("div",{className:"w-full md:w-1/3 flex-shrink-0",children:[Ce.jsxs("div",{className:"bg-white p-6 rounded-3xl shadow-lg mb-8",children:[Ce.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-4 text-center",children:"3D Structure Generator"}),Ce.jsx("p",{className:"text-center text-gray-500 mb-6",children:"Adjust the parameters below to generate a new 3D model."}),Ce.jsxs("div",{className:"flex flex-col gap-6",children:[w("Slab Diameter",r,t,.1),w("Slab Divisions (Periphery)",i,s,1),w("Slab Divisions (Radius)",l,u,1),w("Cylinder Height",h,d,.1),w("Cylinder Divisions (Height)",l,u,1),w("Walkway Width",m,p,.1),w("Walkway Divisions (Radius)",g,v,1)]})]}),x&&Ce.jsxs("div",{className:"bg-white p-6 rounded-3xl shadow-lg mb-8",children:[Ce.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Description"}),Ce.jsx("div",{className:"whitespace-pre-line text-gray-600",children:x})]}),y&&Ce.jsxs("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-4",role:"alert",children:[Ce.jsx("p",{className:"font-semibold",children:"Error:"}),Ce.jsx("p",{children:y})]})]}),Ce.jsxs("div",{className:"w-full md:flex-1",children:[Ce.jsxs("div",{className:"bg-white p-6 rounded-3xl shadow-lg mb-8 h-full",children:[Ce.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-4 text-center",children:"3D Model View"}),Ce.jsx("div",{ref:V,style:rR})]}),Ce.jsxs("div",{className:"bg-white rounded-2xl shadow p-3 mt-8",children:[Ce.jsx("div",{className:"font-medium mb-2",children:"Export Preview"}),Ce.jsx("textarea",{className:"w-full min-h-[720px] border rounded-xl p-2 text-xs font-mono",readOnly:!0,value:$}),Ce.jsx("div",{className:"flex justify-end mt-2",children:Ce.jsx("button",{onClick:C,className:"border px-3 py-2 rounded-2xl shadow-sm hover:shadow bg-indigo-600 text-white",children:"Download File"})})]})]})]})};bS.createRoot(document.getElementById("root")).render(Ce.jsx(Ln.StrictMode,{children:Ce.jsx(oR,{})}));
