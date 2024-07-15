(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();var _s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ix={exports:{}},$d={},ax={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ts=Symbol.for("react.element"),IT=Symbol.for("react.portal"),jT=Symbol.for("react.fragment"),NT=Symbol.for("react.strict_mode"),MT=Symbol.for("react.profiler"),DT=Symbol.for("react.provider"),LT=Symbol.for("react.context"),RT=Symbol.for("react.forward_ref"),FT=Symbol.for("react.suspense"),BT=Symbol.for("react.memo"),zT=Symbol.for("react.lazy"),Y1=Symbol.iterator;function UT(e){return e===null||typeof e!="object"?null:(e=Y1&&e[Y1]||e["@@iterator"],typeof e=="function"?e:null)}var ox={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ux=Object.assign,lx={};function jo(e,t,r){this.props=e,this.context=t,this.refs=lx,this.updater=r||ox}jo.prototype.isReactComponent={};jo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sx(){}sx.prototype=jo.prototype;function xm(e,t,r){this.props=e,this.context=t,this.refs=lx,this.updater=r||ox}var Am=xm.prototype=new sx;Am.constructor=xm;ux(Am,jo.prototype);Am.isPureReactComponent=!0;var q1=Array.isArray,cx=Object.prototype.hasOwnProperty,Pm={current:null},fx={key:!0,ref:!0,__self:!0,__source:!0};function dx(e,t,r){var n,i={},a=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)cx.call(t,n)&&!fx.hasOwnProperty(n)&&(i[n]=t[n]);var u=arguments.length-2;if(u===1)i.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps,u)i[n]===void 0&&(i[n]=u[n]);return{$$typeof:ts,type:e,key:a,ref:o,props:i,_owner:Pm.current}}function WT(e,t){return{$$typeof:ts,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Em(e){return typeof e=="object"&&e!==null&&e.$$typeof===ts}function HT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Q1=/\/+/g;function Kp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?HT(""+e.key):t.toString(36)}function Oc(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ts:case IT:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+Kp(o,0):n,q1(i)?(r="",e!=null&&(r=e.replace(Q1,"$&/")+"/"),Oc(i,t,r,"",function(s){return s})):i!=null&&(Em(i)&&(i=WT(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Q1,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",q1(e))for(var u=0;u<e.length;u++){a=e[u];var l=n+Kp(a,u);o+=Oc(a,t,r,l,i)}else if(l=UT(e),typeof l=="function")for(e=l.call(e),u=0;!(a=e.next()).done;)a=a.value,l=n+Kp(a,u++),o+=Oc(a,t,r,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Os(e,t,r){if(e==null)return e;var n=[],i=0;return Oc(e,n,"","",function(a){return t.call(r,a,i++)}),n}function GT(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Lt={current:null},xc={transition:null},VT={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:xc,ReactCurrentOwner:Pm};function px(){throw Error("act(...) is not supported in production builds of React.")}ve.Children={map:Os,forEach:function(e,t,r){Os(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Os(e,function(){t++}),t},toArray:function(e){return Os(e,function(t){return t})||[]},only:function(e){if(!Em(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ve.Component=jo;ve.Fragment=jT;ve.Profiler=MT;ve.PureComponent=xm;ve.StrictMode=NT;ve.Suspense=FT;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VT;ve.act=px;ve.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ux({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Pm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)cx.call(t,l)&&!fx.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&u!==void 0?u[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){u=Array(l);for(var s=0;s<l;s++)u[s]=arguments[s+2];n.children=u}return{$$typeof:ts,type:e.type,key:i,ref:a,props:n,_owner:o}};ve.createContext=function(e){return e={$$typeof:LT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:DT,_context:e},e.Consumer=e};ve.createElement=dx;ve.createFactory=function(e){var t=dx.bind(null,e);return t.type=e,t};ve.createRef=function(){return{current:null}};ve.forwardRef=function(e){return{$$typeof:RT,render:e}};ve.isValidElement=Em;ve.lazy=function(e){return{$$typeof:zT,_payload:{_status:-1,_result:e},_init:GT}};ve.memo=function(e,t){return{$$typeof:BT,type:e,compare:t===void 0?null:t}};ve.startTransition=function(e){var t=xc.transition;xc.transition={};try{e()}finally{xc.transition=t}};ve.unstable_act=px;ve.useCallback=function(e,t){return Lt.current.useCallback(e,t)};ve.useContext=function(e){return Lt.current.useContext(e)};ve.useDebugValue=function(){};ve.useDeferredValue=function(e){return Lt.current.useDeferredValue(e)};ve.useEffect=function(e,t){return Lt.current.useEffect(e,t)};ve.useId=function(){return Lt.current.useId()};ve.useImperativeHandle=function(e,t,r){return Lt.current.useImperativeHandle(e,t,r)};ve.useInsertionEffect=function(e,t){return Lt.current.useInsertionEffect(e,t)};ve.useLayoutEffect=function(e,t){return Lt.current.useLayoutEffect(e,t)};ve.useMemo=function(e,t){return Lt.current.useMemo(e,t)};ve.useReducer=function(e,t,r){return Lt.current.useReducer(e,t,r)};ve.useRef=function(e){return Lt.current.useRef(e)};ve.useState=function(e){return Lt.current.useState(e)};ve.useSyncExternalStore=function(e,t,r){return Lt.current.useSyncExternalStore(e,t,r)};ve.useTransition=function(){return Lt.current.useTransition()};ve.version="18.3.1";ax.exports=ve;var V=ax.exports;const x=Se(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KT=V,XT=Symbol.for("react.element"),YT=Symbol.for("react.fragment"),qT=Object.prototype.hasOwnProperty,QT=KT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZT={key:!0,ref:!0,__self:!0,__source:!0};function vx(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)qT.call(t,n)&&!ZT.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:XT,type:e,key:a,ref:o,props:i,_owner:QT.current}}$d.Fragment=YT;$d.jsx=vx;$d.jsxs=vx;ix.exports=$d;var X=ix.exports,k0={},hx={exports:{}},lr={},yx={exports:{}},mx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,L){var U=j.length;j.push(L);e:for(;0<U;){var Y=U-1>>>1,G=j[Y];if(0<i(G,L))j[Y]=L,j[U]=G,U=Y;else break e}}function r(j){return j.length===0?null:j[0]}function n(j){if(j.length===0)return null;var L=j[0],U=j.pop();if(U!==L){j[0]=U;e:for(var Y=0,G=j.length,ne=G>>>1;Y<ne;){var ce=2*(Y+1)-1,Ae=j[ce],Pe=ce+1,Ee=j[Pe];if(0>i(Ae,U))Pe<G&&0>i(Ee,Ae)?(j[Y]=Ee,j[Pe]=U,Y=Pe):(j[Y]=Ae,j[ce]=U,Y=ce);else if(Pe<G&&0>i(Ee,U))j[Y]=Ee,j[Pe]=U,Y=Pe;else break e}}return L}function i(j,L){var U=j.sortIndex-L.sortIndex;return U!==0?U:j.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var l=[],s=[],f=1,c=null,d=3,p=!1,y=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(j){for(var L=r(s);L!==null;){if(L.callback===null)n(s);else if(L.startTime<=j)n(s),L.sortIndex=L.expirationTime,t(l,L);else break;L=r(s)}}function w(j){if(m=!1,b(j),!y)if(r(l)!==null)y=!0,F(S);else{var L=r(s);L!==null&&B(w,L.startTime-j)}}function S(j,L){y=!1,m&&(m=!1,h(O),O=-1),p=!0;var U=d;try{for(b(L),c=r(l);c!==null&&(!(c.expirationTime>L)||j&&!k());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,d=c.priorityLevel;var G=Y(c.expirationTime<=L);L=e.unstable_now(),typeof G=="function"?c.callback=G:c===r(l)&&n(l),b(L)}else n(l);c=r(l)}if(c!==null)var ne=!0;else{var ce=r(s);ce!==null&&B(w,ce.startTime-L),ne=!1}return ne}finally{c=null,d=U,p=!1}}var $=!1,_=null,O=-1,T=5,P=-1;function k(){return!(e.unstable_now()-P<T)}function E(){if(_!==null){var j=e.unstable_now();P=j;var L=!0;try{L=_(!0,j)}finally{L?C():($=!1,_=null)}}else $=!1}var C;if(typeof v=="function")C=function(){v(E)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,z=N.port2;N.port1.onmessage=E,C=function(){z.postMessage(null)}}else C=function(){g(E,0)};function F(j){_=j,$||($=!0,C())}function B(j,L){O=g(function(){j(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||p||(y=!0,F(S))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(j){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var U=d;d=L;try{return j()}finally{d=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,L){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var U=d;d=j;try{return L()}finally{d=U}},e.unstable_scheduleCallback=function(j,L,U){var Y=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Y+U:Y):U=Y,j){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=U+G,j={id:f++,callback:L,priorityLevel:j,startTime:U,expirationTime:G,sortIndex:-1},U>Y?(j.sortIndex=U,t(s,j),r(l)===null&&j===r(s)&&(m?(h(O),O=-1):m=!0,B(w,U-Y))):(j.sortIndex=G,t(l,j),y||p||(y=!0,F(S))),j},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(j){var L=d;return function(){var U=d;d=L;try{return j.apply(this,arguments)}finally{d=U}}}})(mx);yx.exports=mx;var JT=yx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e5=V,ur=JT;function W(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gx=new Set,tl={};function ia(e,t){qa(e,t),qa(e+"Capture",t)}function qa(e,t){for(tl[e]=t,e=0;e<t.length;e++)gx.add(t[e])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C0=Object.prototype.hasOwnProperty,t5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Z1={},J1={};function r5(e){return C0.call(J1,e)?!0:C0.call(Z1,e)?!1:t5.test(e)?J1[e]=!0:(Z1[e]=!0,!1)}function n5(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function i5(e,t,r,n){if(t===null||typeof t>"u"||n5(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Rt(e,t,r,n,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$t[e]=new Rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$t[t]=new Rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$t[e]=new Rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$t[e]=new Rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$t[e]=new Rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$t[e]=new Rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$t[e]=new Rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$t[e]=new Rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$t[e]=new Rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tm=/[\-:]([a-z])/g;function km(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tm,km);$t[t]=new Rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tm,km);$t[t]=new Rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tm,km);$t[t]=new Rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$t[e]=new Rt(e,1,!1,e.toLowerCase(),null,!1,!1)});$t.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$t[e]=new Rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cm(e,t,r,n){var i=$t.hasOwnProperty(t)?$t[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(i5(t,r,i,n)&&(r=null),n||i===null?r5(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var In=e5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xs=Symbol.for("react.element"),$a=Symbol.for("react.portal"),_a=Symbol.for("react.fragment"),Im=Symbol.for("react.strict_mode"),I0=Symbol.for("react.profiler"),bx=Symbol.for("react.provider"),wx=Symbol.for("react.context"),jm=Symbol.for("react.forward_ref"),j0=Symbol.for("react.suspense"),N0=Symbol.for("react.suspense_list"),Nm=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),Sx=Symbol.for("react.offscreen"),eb=Symbol.iterator;function ru(e){return e===null||typeof e!="object"?null:(e=eb&&e[eb]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,Xp;function ku(e){if(Xp===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Xp=t&&t[1]||""}return`
`+Xp+e}var Yp=!1;function qp(e,t){if(!e||Yp)return"";Yp=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var n=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){n=s}e.call(t.prototype)}else{try{throw Error()}catch(s){n=s}e()}}catch(s){if(s&&n&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,u=a.length-1;1<=o&&0<=u&&i[o]!==a[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==a[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==a[u]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=u);break}}}finally{Yp=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ku(e):""}function a5(e){switch(e.tag){case 5:return ku(e.type);case 16:return ku("Lazy");case 13:return ku("Suspense");case 19:return ku("SuspenseList");case 0:case 2:case 15:return e=qp(e.type,!1),e;case 11:return e=qp(e.type.render,!1),e;case 1:return e=qp(e.type,!0),e;default:return""}}function M0(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _a:return"Fragment";case $a:return"Portal";case I0:return"Profiler";case Im:return"StrictMode";case j0:return"Suspense";case N0:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wx:return(e.displayName||"Context")+".Consumer";case bx:return(e._context.displayName||"Context")+".Provider";case jm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nm:return t=e.displayName||null,t!==null?t:M0(e.type)||"Memo";case Wn:t=e._payload,e=e._init;try{return M0(e(t))}catch{}}return null}function o5(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return M0(t);case 8:return t===Im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function di(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $x(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function u5(e){var t=$x(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function As(e){e._valueTracker||(e._valueTracker=u5(e))}function _x(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=$x(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Hc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function D0(e,t){var r=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function tb(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=di(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ox(e,t){t=t.checked,t!=null&&Cm(e,"checked",t,!1)}function L0(e,t){Ox(e,t);var r=di(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?R0(e,t.type,r):t.hasOwnProperty("defaultValue")&&R0(e,t.type,di(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rb(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function R0(e,t,r){(t!=="number"||Hc(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Cu=Array.isArray;function Ba(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+di(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function F0(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(W(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nb(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(W(92));if(Cu(r)){if(1<r.length)throw Error(W(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:di(r)}}function xx(e,t){var r=di(t.value),n=di(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function ib(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ax(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function B0(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ax(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ps,Px=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rl(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Lu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l5=["Webkit","ms","Moz","O"];Object.keys(Lu).forEach(function(e){l5.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lu[t]=Lu[e]})});function Ex(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Lu.hasOwnProperty(e)&&Lu[e]?(""+t).trim():t+"px"}function Tx(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Ex(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var s5=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function z0(e,t){if(t){if(s5[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(W(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(W(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(W(61))}if(t.style!=null&&typeof t.style!="object")throw Error(W(62))}}function U0(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W0=null;function Mm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var H0=null,za=null,Ua=null;function ab(e){if(e=is(e)){if(typeof H0!="function")throw Error(W(280));var t=e.stateNode;t&&(t=Pd(t),H0(e.stateNode,e.type,t))}}function kx(e){za?Ua?Ua.push(e):Ua=[e]:za=e}function Cx(){if(za){var e=za,t=Ua;if(Ua=za=null,ab(e),t)for(e=0;e<t.length;e++)ab(t[e])}}function Ix(e,t){return e(t)}function jx(){}var Qp=!1;function Nx(e,t,r){if(Qp)return e(t,r);Qp=!0;try{return Ix(e,t,r)}finally{Qp=!1,(za!==null||Ua!==null)&&(jx(),Cx())}}function nl(e,t){var r=e.stateNode;if(r===null)return null;var n=Pd(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(W(231,t,typeof r));return r}var G0=!1;if(On)try{var nu={};Object.defineProperty(nu,"passive",{get:function(){G0=!0}}),window.addEventListener("test",nu,nu),window.removeEventListener("test",nu,nu)}catch{G0=!1}function c5(e,t,r,n,i,a,o,u,l){var s=Array.prototype.slice.call(arguments,3);try{t.apply(r,s)}catch(f){this.onError(f)}}var Ru=!1,Gc=null,Vc=!1,V0=null,f5={onError:function(e){Ru=!0,Gc=e}};function d5(e,t,r,n,i,a,o,u,l){Ru=!1,Gc=null,c5.apply(f5,arguments)}function p5(e,t,r,n,i,a,o,u,l){if(d5.apply(this,arguments),Ru){if(Ru){var s=Gc;Ru=!1,Gc=null}else throw Error(W(198));Vc||(Vc=!0,V0=s)}}function aa(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Mx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ob(e){if(aa(e)!==e)throw Error(W(188))}function v5(e){var t=e.alternate;if(!t){if(t=aa(e),t===null)throw Error(W(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return ob(i),e;if(a===n)return ob(i),t;a=a.sibling}throw Error(W(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,u=i.child;u;){if(u===r){o=!0,r=i,n=a;break}if(u===n){o=!0,n=i,r=a;break}u=u.sibling}if(!o){for(u=a.child;u;){if(u===r){o=!0,r=a,n=i;break}if(u===n){o=!0,n=a,r=i;break}u=u.sibling}if(!o)throw Error(W(189))}}if(r.alternate!==n)throw Error(W(190))}if(r.tag!==3)throw Error(W(188));return r.stateNode.current===r?e:t}function Dx(e){return e=v5(e),e!==null?Lx(e):null}function Lx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lx(e);if(t!==null)return t;e=e.sibling}return null}var Rx=ur.unstable_scheduleCallback,ub=ur.unstable_cancelCallback,h5=ur.unstable_shouldYield,y5=ur.unstable_requestPaint,qe=ur.unstable_now,m5=ur.unstable_getCurrentPriorityLevel,Dm=ur.unstable_ImmediatePriority,Fx=ur.unstable_UserBlockingPriority,Kc=ur.unstable_NormalPriority,g5=ur.unstable_LowPriority,Bx=ur.unstable_IdlePriority,_d=null,en=null;function b5(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(_d,e,void 0,(e.current.flags&128)===128)}catch{}}var Br=Math.clz32?Math.clz32:$5,w5=Math.log,S5=Math.LN2;function $5(e){return e>>>=0,e===0?32:31-(w5(e)/S5|0)|0}var Es=64,Ts=4194304;function Iu(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xc(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var u=o&~i;u!==0?n=Iu(u):(a&=o,a!==0&&(n=Iu(a)))}else o=r&~i,o!==0?n=Iu(o):a!==0&&(n=Iu(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Br(t),i=1<<r,n|=e[r],t&=~i;return n}function _5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O5(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Br(a),u=1<<o,l=i[o];l===-1?(!(u&r)||u&n)&&(i[o]=_5(u,t)):l<=t&&(e.expiredLanes|=u),a&=~u}}function K0(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zx(){var e=Es;return Es<<=1,!(Es&4194240)&&(Es=64),e}function Zp(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function rs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Br(t),e[t]=r}function x5(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Br(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Lm(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Br(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var _e=0;function Ux(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wx,Rm,Hx,Gx,Vx,X0=!1,ks=[],ti=null,ri=null,ni=null,il=new Map,al=new Map,Kn=[],A5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lb(e,t){switch(e){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":il.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(t.pointerId)}}function iu(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=is(t),t!==null&&Rm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function P5(e,t,r,n,i){switch(t){case"focusin":return ti=iu(ti,e,t,r,n,i),!0;case"dragenter":return ri=iu(ri,e,t,r,n,i),!0;case"mouseover":return ni=iu(ni,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return il.set(a,iu(il.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,al.set(a,iu(al.get(a)||null,e,t,r,n,i)),!0}return!1}function Kx(e){var t=ji(e.target);if(t!==null){var r=aa(t);if(r!==null){if(t=r.tag,t===13){if(t=Mx(r),t!==null){e.blockedOn=t,Vx(e.priority,function(){Hx(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Y0(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);W0=n,r.target.dispatchEvent(n),W0=null}else return t=is(r),t!==null&&Rm(t),e.blockedOn=r,!1;t.shift()}return!0}function sb(e,t,r){Ac(e)&&r.delete(t)}function E5(){X0=!1,ti!==null&&Ac(ti)&&(ti=null),ri!==null&&Ac(ri)&&(ri=null),ni!==null&&Ac(ni)&&(ni=null),il.forEach(sb),al.forEach(sb)}function au(e,t){e.blockedOn===t&&(e.blockedOn=null,X0||(X0=!0,ur.unstable_scheduleCallback(ur.unstable_NormalPriority,E5)))}function ol(e){function t(i){return au(i,e)}if(0<ks.length){au(ks[0],e);for(var r=1;r<ks.length;r++){var n=ks[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ti!==null&&au(ti,e),ri!==null&&au(ri,e),ni!==null&&au(ni,e),il.forEach(t),al.forEach(t),r=0;r<Kn.length;r++)n=Kn[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Kn.length&&(r=Kn[0],r.blockedOn===null);)Kx(r),r.blockedOn===null&&Kn.shift()}var Wa=In.ReactCurrentBatchConfig,Yc=!0;function T5(e,t,r,n){var i=_e,a=Wa.transition;Wa.transition=null;try{_e=1,Fm(e,t,r,n)}finally{_e=i,Wa.transition=a}}function k5(e,t,r,n){var i=_e,a=Wa.transition;Wa.transition=null;try{_e=4,Fm(e,t,r,n)}finally{_e=i,Wa.transition=a}}function Fm(e,t,r,n){if(Yc){var i=Y0(e,t,r,n);if(i===null)lv(e,t,n,qc,r),lb(e,n);else if(P5(i,e,t,r,n))n.stopPropagation();else if(lb(e,n),t&4&&-1<A5.indexOf(e)){for(;i!==null;){var a=is(i);if(a!==null&&Wx(a),a=Y0(e,t,r,n),a===null&&lv(e,t,n,qc,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else lv(e,t,n,null,r)}}var qc=null;function Y0(e,t,r,n){if(qc=null,e=Mm(n),e=ji(e),e!==null)if(t=aa(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Mx(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qc=e,null}function Xx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m5()){case Dm:return 1;case Fx:return 4;case Kc:case g5:return 16;case Bx:return 536870912;default:return 16}default:return 16}}var Qn=null,Bm=null,Pc=null;function Yx(){if(Pc)return Pc;var e,t=Bm,r=t.length,n,i="value"in Qn?Qn.value:Qn.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[a-n];n++);return Pc=i.slice(e,1<n?1-n:void 0)}function Ec(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cs(){return!0}function cb(){return!1}function sr(e){function t(r,n,i,a,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(r=e[u],this[u]=r?r(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Cs:cb,this.isPropagationStopped=cb,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Cs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Cs)},persist:function(){},isPersistent:Cs}),t}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zm=sr(No),ns=Ve({},No,{view:0,detail:0}),C5=sr(ns),Jp,ev,ou,Od=Ve({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Um,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ou&&(ou&&e.type==="mousemove"?(Jp=e.screenX-ou.screenX,ev=e.screenY-ou.screenY):ev=Jp=0,ou=e),Jp)},movementY:function(e){return"movementY"in e?e.movementY:ev}}),fb=sr(Od),I5=Ve({},Od,{dataTransfer:0}),j5=sr(I5),N5=Ve({},ns,{relatedTarget:0}),tv=sr(N5),M5=Ve({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),D5=sr(M5),L5=Ve({},No,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R5=sr(L5),F5=Ve({},No,{data:0}),db=sr(F5),B5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=U5[e])?!!t[e]:!1}function Um(){return W5}var H5=Ve({},ns,{key:function(e){if(e.key){var t=B5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ec(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Um,charCode:function(e){return e.type==="keypress"?Ec(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ec(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G5=sr(H5),V5=Ve({},Od,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pb=sr(V5),K5=Ve({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Um}),X5=sr(K5),Y5=Ve({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),q5=sr(Y5),Q5=Ve({},Od,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z5=sr(Q5),J5=[9,13,27,32],Wm=On&&"CompositionEvent"in window,Fu=null;On&&"documentMode"in document&&(Fu=document.documentMode);var ek=On&&"TextEvent"in window&&!Fu,qx=On&&(!Wm||Fu&&8<Fu&&11>=Fu),vb=" ",hb=!1;function Qx(e,t){switch(e){case"keyup":return J5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oa=!1;function tk(e,t){switch(e){case"compositionend":return Zx(t);case"keypress":return t.which!==32?null:(hb=!0,vb);case"textInput":return e=t.data,e===vb&&hb?null:e;default:return null}}function rk(e,t){if(Oa)return e==="compositionend"||!Wm&&Qx(e,t)?(e=Yx(),Pc=Bm=Qn=null,Oa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qx&&t.locale!=="ko"?null:t.data;default:return null}}var nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yb(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nk[e.type]:t==="textarea"}function Jx(e,t,r,n){kx(n),t=Qc(t,"onChange"),0<t.length&&(r=new zm("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Bu=null,ul=null;function ik(e){cA(e,0)}function xd(e){var t=Pa(e);if(_x(t))return e}function ak(e,t){if(e==="change")return t}var eA=!1;if(On){var rv;if(On){var nv="oninput"in document;if(!nv){var mb=document.createElement("div");mb.setAttribute("oninput","return;"),nv=typeof mb.oninput=="function"}rv=nv}else rv=!1;eA=rv&&(!document.documentMode||9<document.documentMode)}function gb(){Bu&&(Bu.detachEvent("onpropertychange",tA),ul=Bu=null)}function tA(e){if(e.propertyName==="value"&&xd(ul)){var t=[];Jx(t,ul,e,Mm(e)),Nx(ik,t)}}function ok(e,t,r){e==="focusin"?(gb(),Bu=t,ul=r,Bu.attachEvent("onpropertychange",tA)):e==="focusout"&&gb()}function uk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xd(ul)}function lk(e,t){if(e==="click")return xd(t)}function sk(e,t){if(e==="input"||e==="change")return xd(t)}function ck(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wr=typeof Object.is=="function"?Object.is:ck;function ll(e,t){if(Wr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!C0.call(t,i)||!Wr(e[i],t[i]))return!1}return!0}function bb(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wb(e,t){var r=bb(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=bb(r)}}function rA(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rA(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nA(){for(var e=window,t=Hc();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Hc(e.document)}return t}function Hm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fk(e){var t=nA(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&rA(r.ownerDocument.documentElement,r)){if(n!==null&&Hm(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=wb(r,a);var o=wb(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dk=On&&"documentMode"in document&&11>=document.documentMode,xa=null,q0=null,zu=null,Q0=!1;function Sb(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Q0||xa==null||xa!==Hc(n)||(n=xa,"selectionStart"in n&&Hm(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),zu&&ll(zu,n)||(zu=n,n=Qc(q0,"onSelect"),0<n.length&&(t=new zm("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=xa)))}function Is(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Aa={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},iv={},iA={};On&&(iA=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Ad(e){if(iv[e])return iv[e];if(!Aa[e])return e;var t=Aa[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in iA)return iv[e]=t[r];return e}var aA=Ad("animationend"),oA=Ad("animationiteration"),uA=Ad("animationstart"),lA=Ad("transitionend"),sA=new Map,$b="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hi(e,t){sA.set(e,t),ia(t,[e])}for(var av=0;av<$b.length;av++){var ov=$b[av],pk=ov.toLowerCase(),vk=ov[0].toUpperCase()+ov.slice(1);hi(pk,"on"+vk)}hi(aA,"onAnimationEnd");hi(oA,"onAnimationIteration");hi(uA,"onAnimationStart");hi("dblclick","onDoubleClick");hi("focusin","onFocus");hi("focusout","onBlur");hi(lA,"onTransitionEnd");qa("onMouseEnter",["mouseout","mouseover"]);qa("onMouseLeave",["mouseout","mouseover"]);qa("onPointerEnter",["pointerout","pointerover"]);qa("onPointerLeave",["pointerout","pointerover"]);ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ia("onBeforeInput",["compositionend","keypress","textInput","paste"]);ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ju="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ju));function _b(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,p5(n,t,void 0,e),e.currentTarget=null}function cA(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var u=n[o],l=u.instance,s=u.currentTarget;if(u=u.listener,l!==a&&i.isPropagationStopped())break e;_b(i,u,s),a=l}else for(o=0;o<n.length;o++){if(u=n[o],l=u.instance,s=u.currentTarget,u=u.listener,l!==a&&i.isPropagationStopped())break e;_b(i,u,s),a=l}}}if(Vc)throw e=V0,Vc=!1,V0=null,e}function Me(e,t){var r=t[rh];r===void 0&&(r=t[rh]=new Set);var n=e+"__bubble";r.has(n)||(fA(t,e,2,!1),r.add(n))}function uv(e,t,r){var n=0;t&&(n|=4),fA(r,e,n,t)}var js="_reactListening"+Math.random().toString(36).slice(2);function sl(e){if(!e[js]){e[js]=!0,gx.forEach(function(r){r!=="selectionchange"&&(hk.has(r)||uv(r,!1,e),uv(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[js]||(t[js]=!0,uv("selectionchange",!1,t))}}function fA(e,t,r,n){switch(Xx(t)){case 1:var i=T5;break;case 4:i=k5;break;default:i=Fm}r=i.bind(null,t,r,e),i=void 0,!G0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function lv(e,t,r,n,i){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var u=n.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;u!==null;){if(o=ji(u),o===null)return;if(l=o.tag,l===5||l===6){n=a=o;continue e}u=u.parentNode}}n=n.return}Nx(function(){var s=a,f=Mm(r),c=[];e:{var d=sA.get(e);if(d!==void 0){var p=zm,y=e;switch(e){case"keypress":if(Ec(r)===0)break e;case"keydown":case"keyup":p=G5;break;case"focusin":y="focus",p=tv;break;case"focusout":y="blur",p=tv;break;case"beforeblur":case"afterblur":p=tv;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=j5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=X5;break;case aA:case oA:case uA:p=D5;break;case lA:p=q5;break;case"scroll":p=C5;break;case"wheel":p=Z5;break;case"copy":case"cut":case"paste":p=R5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=pb}var m=(t&4)!==0,g=!m&&e==="scroll",h=m?d!==null?d+"Capture":null:d;m=[];for(var v=s,b;v!==null;){b=v;var w=b.stateNode;if(b.tag===5&&w!==null&&(b=w,h!==null&&(w=nl(v,h),w!=null&&m.push(cl(v,w,b)))),g)break;v=v.return}0<m.length&&(d=new p(d,y,null,r,f),c.push({event:d,listeners:m}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&r!==W0&&(y=r.relatedTarget||r.fromElement)&&(ji(y)||y[xn]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=r.relatedTarget||r.toElement,p=s,y=y?ji(y):null,y!==null&&(g=aa(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=s),p!==y)){if(m=fb,w="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(m=pb,w="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?d:Pa(p),b=y==null?d:Pa(y),d=new m(w,v+"leave",p,r,f),d.target=g,d.relatedTarget=b,w=null,ji(f)===s&&(m=new m(h,v+"enter",y,r,f),m.target=b,m.relatedTarget=g,w=m),g=w,p&&y)t:{for(m=p,h=y,v=0,b=m;b;b=pa(b))v++;for(b=0,w=h;w;w=pa(w))b++;for(;0<v-b;)m=pa(m),v--;for(;0<b-v;)h=pa(h),b--;for(;v--;){if(m===h||h!==null&&m===h.alternate)break t;m=pa(m),h=pa(h)}m=null}else m=null;p!==null&&Ob(c,d,p,m,!1),y!==null&&g!==null&&Ob(c,g,y,m,!0)}}e:{if(d=s?Pa(s):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=ak;else if(yb(d))if(eA)S=sk;else{S=uk;var $=ok}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=lk);if(S&&(S=S(e,s))){Jx(c,S,r,f);break e}$&&$(e,d,s),e==="focusout"&&($=d._wrapperState)&&$.controlled&&d.type==="number"&&R0(d,"number",d.value)}switch($=s?Pa(s):window,e){case"focusin":(yb($)||$.contentEditable==="true")&&(xa=$,q0=s,zu=null);break;case"focusout":zu=q0=xa=null;break;case"mousedown":Q0=!0;break;case"contextmenu":case"mouseup":case"dragend":Q0=!1,Sb(c,r,f);break;case"selectionchange":if(dk)break;case"keydown":case"keyup":Sb(c,r,f)}var _;if(Wm)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Oa?Qx(e,r)&&(O="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(O="onCompositionStart");O&&(qx&&r.locale!=="ko"&&(Oa||O!=="onCompositionStart"?O==="onCompositionEnd"&&Oa&&(_=Yx()):(Qn=f,Bm="value"in Qn?Qn.value:Qn.textContent,Oa=!0)),$=Qc(s,O),0<$.length&&(O=new db(O,e,null,r,f),c.push({event:O,listeners:$}),_?O.data=_:(_=Zx(r),_!==null&&(O.data=_)))),(_=ek?tk(e,r):rk(e,r))&&(s=Qc(s,"onBeforeInput"),0<s.length&&(f=new db("onBeforeInput","beforeinput",null,r,f),c.push({event:f,listeners:s}),f.data=_))}cA(c,t)})}function cl(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Qc(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=nl(e,r),a!=null&&n.unshift(cl(e,a,i)),a=nl(e,t),a!=null&&n.push(cl(e,a,i))),e=e.return}return n}function pa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ob(e,t,r,n,i){for(var a=t._reactName,o=[];r!==null&&r!==n;){var u=r,l=u.alternate,s=u.stateNode;if(l!==null&&l===n)break;u.tag===5&&s!==null&&(u=s,i?(l=nl(r,a),l!=null&&o.unshift(cl(r,l,u))):i||(l=nl(r,a),l!=null&&o.push(cl(r,l,u)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var yk=/\r\n?/g,mk=/\u0000|\uFFFD/g;function xb(e){return(typeof e=="string"?e:""+e).replace(yk,`
`).replace(mk,"")}function Ns(e,t,r){if(t=xb(t),xb(e)!==t&&r)throw Error(W(425))}function Zc(){}var Z0=null,J0=null;function eh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var th=typeof setTimeout=="function"?setTimeout:void 0,gk=typeof clearTimeout=="function"?clearTimeout:void 0,Ab=typeof Promise=="function"?Promise:void 0,bk=typeof queueMicrotask=="function"?queueMicrotask:typeof Ab<"u"?function(e){return Ab.resolve(null).then(e).catch(wk)}:th;function wk(e){setTimeout(function(){throw e})}function sv(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),ol(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);ol(t)}function ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pb(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),qr="__reactFiber$"+Mo,fl="__reactProps$"+Mo,xn="__reactContainer$"+Mo,rh="__reactEvents$"+Mo,Sk="__reactListeners$"+Mo,$k="__reactHandles$"+Mo;function ji(e){var t=e[qr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[xn]||r[qr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Pb(e);e!==null;){if(r=e[qr])return r;e=Pb(e)}return t}e=r,r=e.parentNode}return null}function is(e){return e=e[qr]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(W(33))}function Pd(e){return e[fl]||null}var nh=[],Ea=-1;function yi(e){return{current:e}}function Be(e){0>Ea||(e.current=nh[Ea],nh[Ea]=null,Ea--)}function Ie(e,t){Ea++,nh[Ea]=e.current,e.current=t}var pi={},Tt=yi(pi),Gt=yi(!1),Xi=pi;function Qa(e,t){var r=e.type.contextTypes;if(!r)return pi;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(e){return e=e.childContextTypes,e!=null}function Jc(){Be(Gt),Be(Tt)}function Eb(e,t,r){if(Tt.current!==pi)throw Error(W(168));Ie(Tt,t),Ie(Gt,r)}function dA(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(W(108,o5(e)||"Unknown",i));return Ve({},r,n)}function ef(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pi,Xi=Tt.current,Ie(Tt,e),Ie(Gt,Gt.current),!0}function Tb(e,t,r){var n=e.stateNode;if(!n)throw Error(W(169));r?(e=dA(e,t,Xi),n.__reactInternalMemoizedMergedChildContext=e,Be(Gt),Be(Tt),Ie(Tt,e)):Be(Gt),Ie(Gt,r)}var hn=null,Ed=!1,cv=!1;function pA(e){hn===null?hn=[e]:hn.push(e)}function _k(e){Ed=!0,pA(e)}function mi(){if(!cv&&hn!==null){cv=!0;var e=0,t=_e;try{var r=hn;for(_e=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}hn=null,Ed=!1}catch(i){throw hn!==null&&(hn=hn.slice(e+1)),Rx(Dm,mi),i}finally{_e=t,cv=!1}}return null}var Ta=[],ka=0,tf=null,rf=0,hr=[],yr=0,Yi=null,yn=1,mn="";function Pi(e,t){Ta[ka++]=rf,Ta[ka++]=tf,tf=e,rf=t}function vA(e,t,r){hr[yr++]=yn,hr[yr++]=mn,hr[yr++]=Yi,Yi=e;var n=yn;e=mn;var i=32-Br(n)-1;n&=~(1<<i),r+=1;var a=32-Br(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,yn=1<<32-Br(t)+i|r<<i|n,mn=a+e}else yn=1<<a|r<<i|n,mn=e}function Gm(e){e.return!==null&&(Pi(e,1),vA(e,1,0))}function Vm(e){for(;e===tf;)tf=Ta[--ka],Ta[ka]=null,rf=Ta[--ka],Ta[ka]=null;for(;e===Yi;)Yi=hr[--yr],hr[yr]=null,mn=hr[--yr],hr[yr]=null,yn=hr[--yr],hr[yr]=null}var ar=null,ir=null,Ue=!1,Lr=null;function hA(e,t){var r=br(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function kb(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ar=e,ir=ii(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ar=e,ir=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Yi!==null?{id:yn,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=br(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ar=e,ir=null,!0):!1;default:return!1}}function ih(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ah(e){if(Ue){var t=ir;if(t){var r=t;if(!kb(e,t)){if(ih(e))throw Error(W(418));t=ii(r.nextSibling);var n=ar;t&&kb(e,t)?hA(n,r):(e.flags=e.flags&-4097|2,Ue=!1,ar=e)}}else{if(ih(e))throw Error(W(418));e.flags=e.flags&-4097|2,Ue=!1,ar=e}}}function Cb(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ar=e}function Ms(e){if(e!==ar)return!1;if(!Ue)return Cb(e),Ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eh(e.type,e.memoizedProps)),t&&(t=ir)){if(ih(e))throw yA(),Error(W(418));for(;t;)hA(e,t),t=ii(t.nextSibling)}if(Cb(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ir=ii(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ir=null}}else ir=ar?ii(e.stateNode.nextSibling):null;return!0}function yA(){for(var e=ir;e;)e=ii(e.nextSibling)}function Za(){ir=ar=null,Ue=!1}function Km(e){Lr===null?Lr=[e]:Lr.push(e)}var Ok=In.ReactCurrentBatchConfig;function uu(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(W(309));var n=r.stateNode}if(!n)throw Error(W(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var u=i.refs;o===null?delete u[a]:u[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(W(284));if(!r._owner)throw Error(W(290,e))}return e}function Ds(e,t){throw e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ib(e){var t=e._init;return t(e._payload)}function mA(e){function t(h,v){if(e){var b=h.deletions;b===null?(h.deletions=[v],h.flags|=16):b.push(v)}}function r(h,v){if(!e)return null;for(;v!==null;)t(h,v),v=v.sibling;return null}function n(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function i(h,v){return h=li(h,v),h.index=0,h.sibling=null,h}function a(h,v,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<v?(h.flags|=2,v):b):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,v,b,w){return v===null||v.tag!==6?(v=mv(b,h.mode,w),v.return=h,v):(v=i(v,b),v.return=h,v)}function l(h,v,b,w){var S=b.type;return S===_a?f(h,v,b.props.children,w,b.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wn&&Ib(S)===v.type)?(w=i(v,b.props),w.ref=uu(h,v,b),w.return=h,w):(w=Mc(b.type,b.key,b.props,null,h.mode,w),w.ref=uu(h,v,b),w.return=h,w)}function s(h,v,b,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=gv(b,h.mode,w),v.return=h,v):(v=i(v,b.children||[]),v.return=h,v)}function f(h,v,b,w,S){return v===null||v.tag!==7?(v=Wi(b,h.mode,w,S),v.return=h,v):(v=i(v,b),v.return=h,v)}function c(h,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=mv(""+v,h.mode,b),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xs:return b=Mc(v.type,v.key,v.props,null,h.mode,b),b.ref=uu(h,null,v),b.return=h,b;case $a:return v=gv(v,h.mode,b),v.return=h,v;case Wn:var w=v._init;return c(h,w(v._payload),b)}if(Cu(v)||ru(v))return v=Wi(v,h.mode,b,null),v.return=h,v;Ds(h,v)}return null}function d(h,v,b,w){var S=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return S!==null?null:u(h,v,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case xs:return b.key===S?l(h,v,b,w):null;case $a:return b.key===S?s(h,v,b,w):null;case Wn:return S=b._init,d(h,v,S(b._payload),w)}if(Cu(b)||ru(b))return S!==null?null:f(h,v,b,w,null);Ds(h,b)}return null}function p(h,v,b,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(b)||null,u(v,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xs:return h=h.get(w.key===null?b:w.key)||null,l(v,h,w,S);case $a:return h=h.get(w.key===null?b:w.key)||null,s(v,h,w,S);case Wn:var $=w._init;return p(h,v,b,$(w._payload),S)}if(Cu(w)||ru(w))return h=h.get(b)||null,f(v,h,w,S,null);Ds(v,w)}return null}function y(h,v,b,w){for(var S=null,$=null,_=v,O=v=0,T=null;_!==null&&O<b.length;O++){_.index>O?(T=_,_=null):T=_.sibling;var P=d(h,_,b[O],w);if(P===null){_===null&&(_=T);break}e&&_&&P.alternate===null&&t(h,_),v=a(P,v,O),$===null?S=P:$.sibling=P,$=P,_=T}if(O===b.length)return r(h,_),Ue&&Pi(h,O),S;if(_===null){for(;O<b.length;O++)_=c(h,b[O],w),_!==null&&(v=a(_,v,O),$===null?S=_:$.sibling=_,$=_);return Ue&&Pi(h,O),S}for(_=n(h,_);O<b.length;O++)T=p(_,h,O,b[O],w),T!==null&&(e&&T.alternate!==null&&_.delete(T.key===null?O:T.key),v=a(T,v,O),$===null?S=T:$.sibling=T,$=T);return e&&_.forEach(function(k){return t(h,k)}),Ue&&Pi(h,O),S}function m(h,v,b,w){var S=ru(b);if(typeof S!="function")throw Error(W(150));if(b=S.call(b),b==null)throw Error(W(151));for(var $=S=null,_=v,O=v=0,T=null,P=b.next();_!==null&&!P.done;O++,P=b.next()){_.index>O?(T=_,_=null):T=_.sibling;var k=d(h,_,P.value,w);if(k===null){_===null&&(_=T);break}e&&_&&k.alternate===null&&t(h,_),v=a(k,v,O),$===null?S=k:$.sibling=k,$=k,_=T}if(P.done)return r(h,_),Ue&&Pi(h,O),S;if(_===null){for(;!P.done;O++,P=b.next())P=c(h,P.value,w),P!==null&&(v=a(P,v,O),$===null?S=P:$.sibling=P,$=P);return Ue&&Pi(h,O),S}for(_=n(h,_);!P.done;O++,P=b.next())P=p(_,h,O,P.value,w),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?O:P.key),v=a(P,v,O),$===null?S=P:$.sibling=P,$=P);return e&&_.forEach(function(E){return t(h,E)}),Ue&&Pi(h,O),S}function g(h,v,b,w){if(typeof b=="object"&&b!==null&&b.type===_a&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case xs:e:{for(var S=b.key,$=v;$!==null;){if($.key===S){if(S=b.type,S===_a){if($.tag===7){r(h,$.sibling),v=i($,b.props.children),v.return=h,h=v;break e}}else if($.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wn&&Ib(S)===$.type){r(h,$.sibling),v=i($,b.props),v.ref=uu(h,$,b),v.return=h,h=v;break e}r(h,$);break}else t(h,$);$=$.sibling}b.type===_a?(v=Wi(b.props.children,h.mode,w,b.key),v.return=h,h=v):(w=Mc(b.type,b.key,b.props,null,h.mode,w),w.ref=uu(h,v,b),w.return=h,h=w)}return o(h);case $a:e:{for($=b.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){r(h,v.sibling),v=i(v,b.children||[]),v.return=h,h=v;break e}else{r(h,v);break}else t(h,v);v=v.sibling}v=gv(b,h.mode,w),v.return=h,h=v}return o(h);case Wn:return $=b._init,g(h,v,$(b._payload),w)}if(Cu(b))return y(h,v,b,w);if(ru(b))return m(h,v,b,w);Ds(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(r(h,v.sibling),v=i(v,b),v.return=h,h=v):(r(h,v),v=mv(b,h.mode,w),v.return=h,h=v),o(h)):r(h,v)}return g}var Ja=mA(!0),gA=mA(!1),nf=yi(null),af=null,Ca=null,Xm=null;function Ym(){Xm=Ca=af=null}function qm(e){var t=nf.current;Be(nf),e._currentValue=t}function oh(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ha(e,t){af=e,Xm=Ca=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ut=!0),e.firstContext=null)}function _r(e){var t=e._currentValue;if(Xm!==e)if(e={context:e,memoizedValue:t,next:null},Ca===null){if(af===null)throw Error(W(308));Ca=e,af.dependencies={lanes:0,firstContext:e}}else Ca=Ca.next=e;return t}var Ni=null;function Qm(e){Ni===null?Ni=[e]:Ni.push(e)}function bA(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Qm(t)):(r.next=i.next,i.next=r),t.interleaved=r,An(e,n)}function An(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Hn=!1;function Zm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wA(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ai(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,me&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,An(e,r)}return i=n.interleaved,i===null?(t.next=t,Qm(n)):(t.next=i.next,i.next=t),n.interleaved=t,An(e,r)}function Tc(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Lm(e,r)}}function jb(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function of(e,t,r,n){var i=e.updateQueue;Hn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var l=u,s=l.next;l.next=null,o===null?a=s:o.next=s,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==o&&(u===null?f.firstBaseUpdate=s:u.next=s,f.lastBaseUpdate=l))}if(a!==null){var c=i.baseState;o=0,f=s=l=null,u=a;do{var d=u.lane,p=u.eventTime;if((n&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,m=u;switch(d=t,p=r,m.tag){case 1:if(y=m.payload,typeof y=="function"){c=y.call(p,c,d);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=m.payload,d=typeof y=="function"?y.call(p,c,d):y,d==null)break e;c=Ve({},c,d);break e;case 2:Hn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[u]:d.push(u))}else p={eventTime:p,lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(s=f=p,l=c):f=f.next=p,o|=d;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;d=u,u=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(l=c),i.baseState=l,i.firstBaseUpdate=s,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Qi|=o,e.lanes=o,e.memoizedState=c}}function Nb(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(W(191,i));i.call(n)}}}var as={},tn=yi(as),dl=yi(as),pl=yi(as);function Mi(e){if(e===as)throw Error(W(174));return e}function Jm(e,t){switch(Ie(pl,t),Ie(dl,e),Ie(tn,as),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:B0(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=B0(t,e)}Be(tn),Ie(tn,t)}function eo(){Be(tn),Be(dl),Be(pl)}function SA(e){Mi(pl.current);var t=Mi(tn.current),r=B0(t,e.type);t!==r&&(Ie(dl,e),Ie(tn,r))}function eg(e){dl.current===e&&(Be(tn),Be(dl))}var He=yi(0);function uf(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fv=[];function tg(){for(var e=0;e<fv.length;e++)fv[e]._workInProgressVersionPrimary=null;fv.length=0}var kc=In.ReactCurrentDispatcher,dv=In.ReactCurrentBatchConfig,qi=0,Ge=null,at=null,pt=null,lf=!1,Uu=!1,vl=0,xk=0;function _t(){throw Error(W(321))}function rg(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Wr(e[r],t[r]))return!1;return!0}function ng(e,t,r,n,i,a){if(qi=a,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kc.current=e===null||e.memoizedState===null?Tk:kk,e=r(n,i),Uu){a=0;do{if(Uu=!1,vl=0,25<=a)throw Error(W(301));a+=1,pt=at=null,t.updateQueue=null,kc.current=Ck,e=r(n,i)}while(Uu)}if(kc.current=sf,t=at!==null&&at.next!==null,qi=0,pt=at=Ge=null,lf=!1,t)throw Error(W(300));return e}function ig(){var e=vl!==0;return vl=0,e}function Kr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ge.memoizedState=pt=e:pt=pt.next=e,pt}function Or(){if(at===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=at.next;var t=pt===null?Ge.memoizedState:pt.next;if(t!==null)pt=t,at=e;else{if(e===null)throw Error(W(310));at=e,e={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},pt===null?Ge.memoizedState=pt=e:pt=pt.next=e}return pt}function hl(e,t){return typeof t=="function"?t(e):t}function pv(e){var t=Or(),r=t.queue;if(r===null)throw Error(W(311));r.lastRenderedReducer=e;var n=at,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var u=o=null,l=null,s=a;do{var f=s.lane;if((qi&f)===f)l!==null&&(l=l.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),n=s.hasEagerState?s.eagerState:e(n,s.action);else{var c={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};l===null?(u=l=c,o=n):l=l.next=c,Ge.lanes|=f,Qi|=f}s=s.next}while(s!==null&&s!==a);l===null?o=n:l.next=u,Wr(n,t.memoizedState)||(Ut=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Ge.lanes|=a,Qi|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function vv(e){var t=Or(),r=t.queue;if(r===null)throw Error(W(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Wr(a,t.memoizedState)||(Ut=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function $A(){}function _A(e,t){var r=Ge,n=Or(),i=t(),a=!Wr(n.memoizedState,i);if(a&&(n.memoizedState=i,Ut=!0),n=n.queue,ag(AA.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||pt!==null&&pt.memoizedState.tag&1){if(r.flags|=2048,yl(9,xA.bind(null,r,n,i,t),void 0,null),ht===null)throw Error(W(349));qi&30||OA(r,t,i)}return i}function OA(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function xA(e,t,r,n){t.value=r,t.getSnapshot=n,PA(t)&&EA(e)}function AA(e,t,r){return r(function(){PA(t)&&EA(e)})}function PA(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Wr(e,r)}catch{return!0}}function EA(e){var t=An(e,1);t!==null&&zr(t,e,1,-1)}function Mb(e){var t=Kr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:e},t.queue=e,e=e.dispatch=Ek.bind(null,Ge,e),[t.memoizedState,e]}function yl(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function TA(){return Or().memoizedState}function Cc(e,t,r,n){var i=Kr();Ge.flags|=e,i.memoizedState=yl(1|t,r,void 0,n===void 0?null:n)}function Td(e,t,r,n){var i=Or();n=n===void 0?null:n;var a=void 0;if(at!==null){var o=at.memoizedState;if(a=o.destroy,n!==null&&rg(n,o.deps)){i.memoizedState=yl(t,r,a,n);return}}Ge.flags|=e,i.memoizedState=yl(1|t,r,a,n)}function Db(e,t){return Cc(8390656,8,e,t)}function ag(e,t){return Td(2048,8,e,t)}function kA(e,t){return Td(4,2,e,t)}function CA(e,t){return Td(4,4,e,t)}function IA(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jA(e,t,r){return r=r!=null?r.concat([e]):null,Td(4,4,IA.bind(null,t,e),r)}function og(){}function NA(e,t){var r=Or();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&rg(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function MA(e,t){var r=Or();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&rg(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function DA(e,t,r){return qi&21?(Wr(r,t)||(r=zx(),Ge.lanes|=r,Qi|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ut=!0),e.memoizedState=r)}function Ak(e,t){var r=_e;_e=r!==0&&4>r?r:4,e(!0);var n=dv.transition;dv.transition={};try{e(!1),t()}finally{_e=r,dv.transition=n}}function LA(){return Or().memoizedState}function Pk(e,t,r){var n=ui(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},RA(e))FA(t,r);else if(r=bA(e,t,r,n),r!==null){var i=Dt();zr(r,e,n,i),BA(r,t,n)}}function Ek(e,t,r){var n=ui(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(RA(e))FA(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,u=a(o,r);if(i.hasEagerState=!0,i.eagerState=u,Wr(u,o)){var l=t.interleaved;l===null?(i.next=i,Qm(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=bA(e,t,i,n),r!==null&&(i=Dt(),zr(r,e,n,i),BA(r,t,n))}}function RA(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function FA(e,t){Uu=lf=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function BA(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Lm(e,r)}}var sf={readContext:_r,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},Tk={readContext:_r,useCallback:function(e,t){return Kr().memoizedState=[e,t===void 0?null:t],e},useContext:_r,useEffect:Db,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Cc(4194308,4,IA.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Cc(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cc(4,2,e,t)},useMemo:function(e,t){var r=Kr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Kr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Pk.bind(null,Ge,e),[n.memoizedState,e]},useRef:function(e){var t=Kr();return e={current:e},t.memoizedState=e},useState:Mb,useDebugValue:og,useDeferredValue:function(e){return Kr().memoizedState=e},useTransition:function(){var e=Mb(!1),t=e[0];return e=Ak.bind(null,e[1]),Kr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ge,i=Kr();if(Ue){if(r===void 0)throw Error(W(407));r=r()}else{if(r=t(),ht===null)throw Error(W(349));qi&30||OA(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Db(AA.bind(null,n,a,e),[e]),n.flags|=2048,yl(9,xA.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Kr(),t=ht.identifierPrefix;if(Ue){var r=mn,n=yn;r=(n&~(1<<32-Br(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=vl++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=xk++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kk={readContext:_r,useCallback:NA,useContext:_r,useEffect:ag,useImperativeHandle:jA,useInsertionEffect:kA,useLayoutEffect:CA,useMemo:MA,useReducer:pv,useRef:TA,useState:function(){return pv(hl)},useDebugValue:og,useDeferredValue:function(e){var t=Or();return DA(t,at.memoizedState,e)},useTransition:function(){var e=pv(hl)[0],t=Or().memoizedState;return[e,t]},useMutableSource:$A,useSyncExternalStore:_A,useId:LA,unstable_isNewReconciler:!1},Ck={readContext:_r,useCallback:NA,useContext:_r,useEffect:ag,useImperativeHandle:jA,useInsertionEffect:kA,useLayoutEffect:CA,useMemo:MA,useReducer:vv,useRef:TA,useState:function(){return vv(hl)},useDebugValue:og,useDeferredValue:function(e){var t=Or();return at===null?t.memoizedState=e:DA(t,at.memoizedState,e)},useTransition:function(){var e=vv(hl)[0],t=Or().memoizedState;return[e,t]},useMutableSource:$A,useSyncExternalStore:_A,useId:LA,unstable_isNewReconciler:!1};function Nr(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function uh(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Ve({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var kd={isMounted:function(e){return(e=e._reactInternals)?aa(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Dt(),i=ui(e),a=Sn(n,i);a.payload=t,r!=null&&(a.callback=r),t=ai(e,a,i),t!==null&&(zr(t,e,i,n),Tc(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Dt(),i=ui(e),a=Sn(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=ai(e,a,i),t!==null&&(zr(t,e,i,n),Tc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Dt(),n=ui(e),i=Sn(r,n);i.tag=2,t!=null&&(i.callback=t),t=ai(e,i,n),t!==null&&(zr(t,e,n,r),Tc(t,e,n))}};function Lb(e,t,r,n,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!ll(r,n)||!ll(i,a):!0}function zA(e,t,r){var n=!1,i=pi,a=t.contextType;return typeof a=="object"&&a!==null?a=_r(a):(i=Vt(t)?Xi:Tt.current,n=t.contextTypes,a=(n=n!=null)?Qa(e,i):pi),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kd,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Rb(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&kd.enqueueReplaceState(t,t.state,null)}function lh(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Zm(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=_r(a):(a=Vt(t)?Xi:Tt.current,i.context=Qa(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(uh(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&kd.enqueueReplaceState(i,i.state,null),of(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function to(e,t){try{var r="",n=t;do r+=a5(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function hv(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function sh(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ik=typeof WeakMap=="function"?WeakMap:Map;function UA(e,t,r){r=Sn(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ff||(ff=!0,bh=n),sh(e,t)},r}function WA(e,t,r){r=Sn(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){sh(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){sh(e,t),typeof n!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Fb(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Ik;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Vk.bind(null,e,t,r),t.then(e,e))}function Bb(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zb(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Sn(-1,1),t.tag=2,ai(r,t,1))),r.lanes|=1),e)}var jk=In.ReactCurrentOwner,Ut=!1;function Ct(e,t,r,n){t.child=e===null?gA(t,null,r,n):Ja(t,e.child,r,n)}function Ub(e,t,r,n,i){r=r.render;var a=t.ref;return Ha(t,i),n=ng(e,t,r,n,a,i),r=ig(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pn(e,t,i)):(Ue&&r&&Gm(t),t.flags|=1,Ct(e,t,n,i),t.child)}function Wb(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!vg(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,HA(e,t,a,n,i)):(e=Mc(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:ll,r(o,n)&&e.ref===t.ref)return Pn(e,t,i)}return t.flags|=1,e=li(a,n),e.ref=t.ref,e.return=t,t.child=e}function HA(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(ll(a,n)&&e.ref===t.ref)if(Ut=!1,t.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(Ut=!0);else return t.lanes=e.lanes,Pn(e,t,i)}return ch(e,t,r,n,i)}function GA(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(ja,tr),tr|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(ja,tr),tr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,Ie(ja,tr),tr|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,Ie(ja,tr),tr|=n;return Ct(e,t,i,r),t.child}function VA(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ch(e,t,r,n,i){var a=Vt(r)?Xi:Tt.current;return a=Qa(t,a),Ha(t,i),r=ng(e,t,r,n,a,i),n=ig(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pn(e,t,i)):(Ue&&n&&Gm(t),t.flags|=1,Ct(e,t,r,i),t.child)}function Hb(e,t,r,n,i){if(Vt(r)){var a=!0;ef(t)}else a=!1;if(Ha(t,i),t.stateNode===null)Ic(e,t),zA(t,r,n),lh(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var l=o.context,s=r.contextType;typeof s=="object"&&s!==null?s=_r(s):(s=Vt(r)?Xi:Tt.current,s=Qa(t,s));var f=r.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==n||l!==s)&&Rb(t,o,n,s),Hn=!1;var d=t.memoizedState;o.state=d,of(t,n,o,i),l=t.memoizedState,u!==n||d!==l||Gt.current||Hn?(typeof f=="function"&&(uh(t,r,f,n),l=t.memoizedState),(u=Hn||Lb(t,r,u,n,d,l,s))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=s,n=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,wA(e,t),u=t.memoizedProps,s=t.type===t.elementType?u:Nr(t.type,u),o.props=s,c=t.pendingProps,d=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=_r(l):(l=Vt(r)?Xi:Tt.current,l=Qa(t,l));var p=r.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==c||d!==l)&&Rb(t,o,n,l),Hn=!1,d=t.memoizedState,o.state=d,of(t,n,o,i);var y=t.memoizedState;u!==c||d!==y||Gt.current||Hn?(typeof p=="function"&&(uh(t,r,p,n),y=t.memoizedState),(s=Hn||Lb(t,r,s,n,d,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),o.props=n,o.state=y,o.context=l,n=s):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),n=!1)}return fh(e,t,r,n,a,i)}function fh(e,t,r,n,i,a){VA(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&Tb(t,r,!1),Pn(e,t,a);n=t.stateNode,jk.current=t;var u=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Ja(t,e.child,null,a),t.child=Ja(t,null,u,a)):Ct(e,t,u,a),t.memoizedState=n.state,i&&Tb(t,r,!0),t.child}function KA(e){var t=e.stateNode;t.pendingContext?Eb(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Eb(e,t.context,!1),Jm(e,t.containerInfo)}function Gb(e,t,r,n,i){return Za(),Km(i),t.flags|=256,Ct(e,t,r,n),t.child}var dh={dehydrated:null,treeContext:null,retryLane:0};function ph(e){return{baseLanes:e,cachePool:null,transitions:null}}function XA(e,t,r){var n=t.pendingProps,i=He.current,a=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ie(He,i&1),e===null)return ah(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=jd(o,n,0,null),e=Wi(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ph(r),t.memoizedState=dh,e):ug(t,o));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Nk(e,t,o,n,u,i,r);if(a){a=n.fallback,o=t.mode,i=e.child,u=i.sibling;var l={mode:"hidden",children:n.children};return!(o&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=li(i,l),n.subtreeFlags=i.subtreeFlags&14680064),u!==null?a=li(u,a):(a=Wi(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?ph(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=dh,n}return a=e.child,e=a.sibling,n=li(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ug(e,t){return t=jd({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ls(e,t,r,n){return n!==null&&Km(n),Ja(t,e.child,null,r),e=ug(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nk(e,t,r,n,i,a,o){if(r)return t.flags&256?(t.flags&=-257,n=hv(Error(W(422))),Ls(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=jd({mode:"visible",children:n.children},i,0,null),a=Wi(a,i,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&Ja(t,e.child,null,o),t.child.memoizedState=ph(o),t.memoizedState=dh,a);if(!(t.mode&1))return Ls(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var u=n.dgst;return n=u,a=Error(W(419)),n=hv(a,n,void 0),Ls(e,t,o,n)}if(u=(o&e.childLanes)!==0,Ut||u){if(n=ht,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,An(e,i),zr(n,e,i,-1))}return pg(),n=hv(Error(W(421))),Ls(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kk.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ir=ii(i.nextSibling),ar=t,Ue=!0,Lr=null,e!==null&&(hr[yr++]=yn,hr[yr++]=mn,hr[yr++]=Yi,yn=e.id,mn=e.overflow,Yi=t),t=ug(t,n.children),t.flags|=4096,t)}function Vb(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),oh(e.return,t,r)}function yv(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function YA(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(Ct(e,t,n.children,r),n=He.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vb(e,r,t);else if(e.tag===19)Vb(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Ie(He,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&uf(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),yv(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&uf(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}yv(t,!0,r,null,a);break;case"together":yv(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ic(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Qi|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,r=li(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=li(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Mk(e,t,r){switch(t.tag){case 3:KA(t),Za();break;case 5:SA(t);break;case 1:Vt(t.type)&&ef(t);break;case 4:Jm(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;Ie(nf,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Ie(He,He.current&1),t.flags|=128,null):r&t.child.childLanes?XA(e,t,r):(Ie(He,He.current&1),e=Pn(e,t,r),e!==null?e.sibling:null);Ie(He,He.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return YA(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(He,He.current),n)break;return null;case 22:case 23:return t.lanes=0,GA(e,t,r)}return Pn(e,t,r)}var qA,vh,QA,ZA;qA=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};vh=function(){};QA=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Mi(tn.current);var a=null;switch(r){case"input":i=D0(e,i),n=D0(e,n),a=[];break;case"select":i=Ve({},i,{value:void 0}),n=Ve({},n,{value:void 0}),a=[];break;case"textarea":i=F0(e,i),n=F0(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Zc)}z0(r,n);var o;r=null;for(s in i)if(!n.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var u=i[s];for(o in u)u.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tl.hasOwnProperty(s)?a||(a=[]):(a=a||[]).push(s,null));for(s in n){var l=n[s];if(u=i!=null?i[s]:void 0,n.hasOwnProperty(s)&&l!==u&&(l!=null||u!=null))if(s==="style")if(u){for(o in u)!u.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&u[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(s,r)),r=l;else s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,u=u?u.__html:void 0,l!=null&&u!==l&&(a=a||[]).push(s,l)):s==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(s,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(tl.hasOwnProperty(s)?(l!=null&&s==="onScroll"&&Me("scroll",e),a||u===l||(a=[])):(a=a||[]).push(s,l))}r&&(a=a||[]).push("style",r);var s=a;(t.updateQueue=s)&&(t.flags|=4)}};ZA=function(e,t,r,n){r!==n&&(t.flags|=4)};function lu(e,t){if(!Ue)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Dk(e,t,r){var n=t.pendingProps;switch(Vm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Vt(t.type)&&Jc(),Ot(t),null;case 3:return n=t.stateNode,eo(),Be(Gt),Be(Tt),tg(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ms(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lr!==null&&($h(Lr),Lr=null))),vh(e,t),Ot(t),null;case 5:eg(t);var i=Mi(pl.current);if(r=t.type,e!==null&&t.stateNode!=null)QA(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(W(166));return Ot(t),null}if(e=Mi(tn.current),Ms(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[qr]=t,n[fl]=a,e=(t.mode&1)!==0,r){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(i=0;i<ju.length;i++)Me(ju[i],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":tb(n,a),Me("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Me("invalid",n);break;case"textarea":nb(n,a),Me("invalid",n)}z0(r,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="children"?typeof u=="string"?n.textContent!==u&&(a.suppressHydrationWarning!==!0&&Ns(n.textContent,u,e),i=["children",u]):typeof u=="number"&&n.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&Ns(n.textContent,u,e),i=["children",""+u]):tl.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&Me("scroll",n)}switch(r){case"input":As(n),rb(n,a,!0);break;case"textarea":As(n),ib(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Zc)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ax(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[qr]=t,e[fl]=n,qA(e,t,!1,!1),t.stateNode=e;e:{switch(o=U0(r,n),r){case"dialog":Me("cancel",e),Me("close",e),i=n;break;case"iframe":case"object":case"embed":Me("load",e),i=n;break;case"video":case"audio":for(i=0;i<ju.length;i++)Me(ju[i],e);i=n;break;case"source":Me("error",e),i=n;break;case"img":case"image":case"link":Me("error",e),Me("load",e),i=n;break;case"details":Me("toggle",e),i=n;break;case"input":tb(e,n),i=D0(e,n),Me("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Ve({},n,{value:void 0}),Me("invalid",e);break;case"textarea":nb(e,n),i=F0(e,n),Me("invalid",e);break;default:i=n}z0(r,i),u=i;for(a in u)if(u.hasOwnProperty(a)){var l=u[a];a==="style"?Tx(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Px(e,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&rl(e,l):typeof l=="number"&&rl(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(tl.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Me("scroll",e):l!=null&&Cm(e,a,l,o))}switch(r){case"input":As(e),rb(e,n,!1);break;case"textarea":As(e),ib(e);break;case"option":n.value!=null&&e.setAttribute("value",""+di(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Ba(e,!!n.multiple,a,!1):n.defaultValue!=null&&Ba(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)ZA(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(W(166));if(r=Mi(pl.current),Mi(tn.current),Ms(t)){if(n=t.stateNode,r=t.memoizedProps,n[qr]=t,(a=n.nodeValue!==r)&&(e=ar,e!==null))switch(e.tag){case 3:Ns(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ns(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[qr]=t,t.stateNode=n}return Ot(t),null;case 13:if(Be(He),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ue&&ir!==null&&t.mode&1&&!(t.flags&128))yA(),Za(),t.flags|=98560,a=!1;else if(a=Ms(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(W(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(W(317));a[qr]=t}else Za(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ot(t),a=!1}else Lr!==null&&($h(Lr),Lr=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||He.current&1?ut===0&&(ut=3):pg())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return eo(),vh(e,t),e===null&&sl(t.stateNode.containerInfo),Ot(t),null;case 10:return qm(t.type._context),Ot(t),null;case 17:return Vt(t.type)&&Jc(),Ot(t),null;case 19:if(Be(He),a=t.memoizedState,a===null)return Ot(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)lu(a,!1);else{if(ut!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=uf(e),o!==null){for(t.flags|=128,lu(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Ie(He,He.current&1|2),t.child}e=e.sibling}a.tail!==null&&qe()>ro&&(t.flags|=128,n=!0,lu(a,!1),t.lanes=4194304)}else{if(!n)if(e=uf(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),lu(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ue)return Ot(t),null}else 2*qe()-a.renderingStartTime>ro&&r!==1073741824&&(t.flags|=128,n=!0,lu(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=qe(),t.sibling=null,r=He.current,Ie(He,n?r&1|2:r&1),t):(Ot(t),null);case 22:case 23:return dg(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?tr&1073741824&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(W(156,t.tag))}function Lk(e,t){switch(Vm(t),t.tag){case 1:return Vt(t.type)&&Jc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return eo(),Be(Gt),Be(Tt),tg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return eg(t),null;case 13:if(Be(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));Za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Be(He),null;case 4:return eo(),null;case 10:return qm(t.type._context),null;case 22:case 23:return dg(),null;case 24:return null;default:return null}}var Rs=!1,At=!1,Rk=typeof WeakSet=="function"?WeakSet:Set,J=null;function Ia(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ke(e,t,n)}else r.current=null}function hh(e,t,r){try{r()}catch(n){Ke(e,t,n)}}var Kb=!1;function Fk(e,t){if(Z0=Yc,e=nA(),Hm(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,u=-1,l=-1,s=0,f=0,c=e,d=null;t:for(;;){for(var p;c!==r||i!==0&&c.nodeType!==3||(u=o+i),c!==a||n!==0&&c.nodeType!==3||(l=o+n),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)d=c,c=p;for(;;){if(c===e)break t;if(d===r&&++s===i&&(u=o),d===a&&++f===n&&(l=o),(p=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=p}r=u===-1||l===-1?null:{start:u,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(J0={focusedElem:e,selectionRange:r},Yc=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var m=y.memoizedProps,g=y.memoizedState,h=t.stateNode,v=h.getSnapshotBeforeUpdate(t.elementType===t.type?m:Nr(t.type,m),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(w){Ke(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return y=Kb,Kb=!1,y}function Wu(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&hh(t,r,a)}i=i.next}while(i!==n)}}function Cd(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function yh(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function JA(e){var t=e.alternate;t!==null&&(e.alternate=null,JA(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qr],delete t[fl],delete t[rh],delete t[Sk],delete t[$k])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function e3(e){return e.tag===5||e.tag===3||e.tag===4}function Xb(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||e3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mh(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Zc));else if(n!==4&&(e=e.child,e!==null))for(mh(e,t,r),e=e.sibling;e!==null;)mh(e,t,r),e=e.sibling}function gh(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(gh(e,t,r),e=e.sibling;e!==null;)gh(e,t,r),e=e.sibling}var wt=null,Mr=!1;function Ln(e,t,r){for(r=r.child;r!==null;)t3(e,t,r),r=r.sibling}function t3(e,t,r){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(_d,r)}catch{}switch(r.tag){case 5:At||Ia(r,t);case 6:var n=wt,i=Mr;wt=null,Ln(e,t,r),wt=n,Mr=i,wt!==null&&(Mr?(e=wt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):wt.removeChild(r.stateNode));break;case 18:wt!==null&&(Mr?(e=wt,r=r.stateNode,e.nodeType===8?sv(e.parentNode,r):e.nodeType===1&&sv(e,r),ol(e)):sv(wt,r.stateNode));break;case 4:n=wt,i=Mr,wt=r.stateNode.containerInfo,Mr=!0,Ln(e,t,r),wt=n,Mr=i;break;case 0:case 11:case 14:case 15:if(!At&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&hh(r,t,o),i=i.next}while(i!==n)}Ln(e,t,r);break;case 1:if(!At&&(Ia(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(u){Ke(r,t,u)}Ln(e,t,r);break;case 21:Ln(e,t,r);break;case 22:r.mode&1?(At=(n=At)||r.memoizedState!==null,Ln(e,t,r),At=n):Ln(e,t,r);break;default:Ln(e,t,r)}}function Yb(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Rk),t.forEach(function(n){var i=Xk.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function kr(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:wt=u.stateNode,Mr=!1;break e;case 3:wt=u.stateNode.containerInfo,Mr=!0;break e;case 4:wt=u.stateNode.containerInfo,Mr=!0;break e}u=u.return}if(wt===null)throw Error(W(160));t3(a,o,i),wt=null,Mr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(s){Ke(i,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)r3(t,e),t=t.sibling}function r3(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kr(t,e),Gr(e),n&4){try{Wu(3,e,e.return),Cd(3,e)}catch(m){Ke(e,e.return,m)}try{Wu(5,e,e.return)}catch(m){Ke(e,e.return,m)}}break;case 1:kr(t,e),Gr(e),n&512&&r!==null&&Ia(r,r.return);break;case 5:if(kr(t,e),Gr(e),n&512&&r!==null&&Ia(r,r.return),e.flags&32){var i=e.stateNode;try{rl(i,"")}catch(m){Ke(e,e.return,m)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,u=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&Ox(i,a),U0(u,o);var s=U0(u,a);for(o=0;o<l.length;o+=2){var f=l[o],c=l[o+1];f==="style"?Tx(i,c):f==="dangerouslySetInnerHTML"?Px(i,c):f==="children"?rl(i,c):Cm(i,f,c,s)}switch(u){case"input":L0(i,a);break;case"textarea":xx(i,a);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Ba(i,!!a.multiple,p,!1):d!==!!a.multiple&&(a.defaultValue!=null?Ba(i,!!a.multiple,a.defaultValue,!0):Ba(i,!!a.multiple,a.multiple?[]:"",!1))}i[fl]=a}catch(m){Ke(e,e.return,m)}}break;case 6:if(kr(t,e),Gr(e),n&4){if(e.stateNode===null)throw Error(W(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(m){Ke(e,e.return,m)}}break;case 3:if(kr(t,e),Gr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ol(t.containerInfo)}catch(m){Ke(e,e.return,m)}break;case 4:kr(t,e),Gr(e);break;case 13:kr(t,e),Gr(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(cg=qe())),n&4&&Yb(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(At=(s=At)||f,kr(t,e),At=s):kr(t,e),Gr(e),n&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&e.mode&1)for(J=e,f=e.child;f!==null;){for(c=J=f;J!==null;){switch(d=J,p=d.child,d.tag){case 0:case 11:case 14:case 15:Wu(4,d,d.return);break;case 1:Ia(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){n=d,r=d.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(m){Ke(n,r,m)}}break;case 5:Ia(d,d.return);break;case 22:if(d.memoizedState!==null){Qb(c);continue}}p!==null?(p.return=d,J=p):Qb(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,s?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,u.style.display=Ex("display",o))}catch(m){Ke(e,e.return,m)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(m){Ke(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:kr(t,e),Gr(e),n&4&&Yb(e);break;case 21:break;default:kr(t,e),Gr(e)}}function Gr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(e3(r)){var n=r;break e}r=r.return}throw Error(W(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(rl(i,""),n.flags&=-33);var a=Xb(e);gh(e,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,u=Xb(e);mh(e,u,o);break;default:throw Error(W(161))}}catch(l){Ke(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bk(e,t,r){J=e,n3(e)}function n3(e,t,r){for(var n=(e.mode&1)!==0;J!==null;){var i=J,a=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||Rs;if(!o){var u=i.alternate,l=u!==null&&u.memoizedState!==null||At;u=Rs;var s=At;if(Rs=o,(At=l)&&!s)for(J=i;J!==null;)o=J,l=o.child,o.tag===22&&o.memoizedState!==null?Zb(i):l!==null?(l.return=o,J=l):Zb(i);for(;a!==null;)J=a,n3(a),a=a.sibling;J=i,Rs=u,At=s}qb(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,J=a):qb(e)}}function qb(e){for(;J!==null;){var t=J;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:At||Cd(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!At)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Nr(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Nb(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Nb(t,o,r)}break;case 5:var u=t.stateNode;if(r===null&&t.flags&4){r=u;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&ol(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}At||t.flags&512&&yh(t)}catch(d){Ke(t,t.return,d)}}if(t===e){J=null;break}if(r=t.sibling,r!==null){r.return=t.return,J=r;break}J=t.return}}function Qb(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var r=t.sibling;if(r!==null){r.return=t.return,J=r;break}J=t.return}}function Zb(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Cd(4,t)}catch(l){Ke(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){Ke(t,i,l)}}var a=t.return;try{yh(t)}catch(l){Ke(t,a,l)}break;case 5:var o=t.return;try{yh(t)}catch(l){Ke(t,o,l)}}}catch(l){Ke(t,t.return,l)}if(t===e){J=null;break}var u=t.sibling;if(u!==null){u.return=t.return,J=u;break}J=t.return}}var zk=Math.ceil,cf=In.ReactCurrentDispatcher,lg=In.ReactCurrentOwner,Sr=In.ReactCurrentBatchConfig,me=0,ht=null,et=null,St=0,tr=0,ja=yi(0),ut=0,ml=null,Qi=0,Id=0,sg=0,Hu=null,zt=null,cg=0,ro=1/0,dn=null,ff=!1,bh=null,oi=null,Fs=!1,Zn=null,df=0,Gu=0,wh=null,jc=-1,Nc=0;function Dt(){return me&6?qe():jc!==-1?jc:jc=qe()}function ui(e){return e.mode&1?me&2&&St!==0?St&-St:Ok.transition!==null?(Nc===0&&(Nc=zx()),Nc):(e=_e,e!==0||(e=window.event,e=e===void 0?16:Xx(e.type)),e):1}function zr(e,t,r,n){if(50<Gu)throw Gu=0,wh=null,Error(W(185));rs(e,r,n),(!(me&2)||e!==ht)&&(e===ht&&(!(me&2)&&(Id|=r),ut===4&&Xn(e,St)),Kt(e,n),r===1&&me===0&&!(t.mode&1)&&(ro=qe()+500,Ed&&mi()))}function Kt(e,t){var r=e.callbackNode;O5(e,t);var n=Xc(e,e===ht?St:0);if(n===0)r!==null&&ub(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ub(r),t===1)e.tag===0?_k(Jb.bind(null,e)):pA(Jb.bind(null,e)),bk(function(){!(me&6)&&mi()}),r=null;else{switch(Ux(n)){case 1:r=Dm;break;case 4:r=Fx;break;case 16:r=Kc;break;case 536870912:r=Bx;break;default:r=Kc}r=f3(r,i3.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function i3(e,t){if(jc=-1,Nc=0,me&6)throw Error(W(327));var r=e.callbackNode;if(Ga()&&e.callbackNode!==r)return null;var n=Xc(e,e===ht?St:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=pf(e,n);else{t=n;var i=me;me|=2;var a=o3();(ht!==e||St!==t)&&(dn=null,ro=qe()+500,Ui(e,t));do try{Hk();break}catch(u){a3(e,u)}while(!0);Ym(),cf.current=a,me=i,et!==null?t=0:(ht=null,St=0,t=ut)}if(t!==0){if(t===2&&(i=K0(e),i!==0&&(n=i,t=Sh(e,i))),t===1)throw r=ml,Ui(e,0),Xn(e,n),Kt(e,qe()),r;if(t===6)Xn(e,n);else{if(i=e.current.alternate,!(n&30)&&!Uk(i)&&(t=pf(e,n),t===2&&(a=K0(e),a!==0&&(n=a,t=Sh(e,a))),t===1))throw r=ml,Ui(e,0),Xn(e,n),Kt(e,qe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(W(345));case 2:Ei(e,zt,dn);break;case 3:if(Xn(e,n),(n&130023424)===n&&(t=cg+500-qe(),10<t)){if(Xc(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=th(Ei.bind(null,e,zt,dn),t);break}Ei(e,zt,dn);break;case 4:if(Xn(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-Br(n);a=1<<o,o=t[o],o>i&&(i=o),n&=~a}if(n=i,n=qe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*zk(n/1960))-n,10<n){e.timeoutHandle=th(Ei.bind(null,e,zt,dn),n);break}Ei(e,zt,dn);break;case 5:Ei(e,zt,dn);break;default:throw Error(W(329))}}}return Kt(e,qe()),e.callbackNode===r?i3.bind(null,e):null}function Sh(e,t){var r=Hu;return e.current.memoizedState.isDehydrated&&(Ui(e,t).flags|=256),e=pf(e,t),e!==2&&(t=zt,zt=r,t!==null&&$h(t)),e}function $h(e){zt===null?zt=e:zt.push.apply(zt,e)}function Uk(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!Wr(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xn(e,t){for(t&=~sg,t&=~Id,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Br(t),n=1<<r;e[r]=-1,t&=~n}}function Jb(e){if(me&6)throw Error(W(327));Ga();var t=Xc(e,0);if(!(t&1))return Kt(e,qe()),null;var r=pf(e,t);if(e.tag!==0&&r===2){var n=K0(e);n!==0&&(t=n,r=Sh(e,n))}if(r===1)throw r=ml,Ui(e,0),Xn(e,t),Kt(e,qe()),r;if(r===6)throw Error(W(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ei(e,zt,dn),Kt(e,qe()),null}function fg(e,t){var r=me;me|=1;try{return e(t)}finally{me=r,me===0&&(ro=qe()+500,Ed&&mi())}}function Zi(e){Zn!==null&&Zn.tag===0&&!(me&6)&&Ga();var t=me;me|=1;var r=Sr.transition,n=_e;try{if(Sr.transition=null,_e=1,e)return e()}finally{_e=n,Sr.transition=r,me=t,!(me&6)&&mi()}}function dg(){tr=ja.current,Be(ja)}function Ui(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,gk(r)),et!==null)for(r=et.return;r!==null;){var n=r;switch(Vm(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Jc();break;case 3:eo(),Be(Gt),Be(Tt),tg();break;case 5:eg(n);break;case 4:eo();break;case 13:Be(He);break;case 19:Be(He);break;case 10:qm(n.type._context);break;case 22:case 23:dg()}r=r.return}if(ht=e,et=e=li(e.current,null),St=tr=t,ut=0,ml=null,sg=Id=Qi=0,zt=Hu=null,Ni!==null){for(t=0;t<Ni.length;t++)if(r=Ni[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}r.pending=n}Ni=null}return e}function a3(e,t){do{var r=et;try{if(Ym(),kc.current=sf,lf){for(var n=Ge.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}lf=!1}if(qi=0,pt=at=Ge=null,Uu=!1,vl=0,lg.current=null,r===null||r.return===null){ut=1,ml=t,et=null;break}e:{var a=e,o=r.return,u=r,l=t;if(t=St,u.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var s=l,f=u,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Bb(o);if(p!==null){p.flags&=-257,zb(p,o,u,a,t),p.mode&1&&Fb(a,s,t),t=p,l=s;var y=t.updateQueue;if(y===null){var m=new Set;m.add(l),t.updateQueue=m}else y.add(l);break e}else{if(!(t&1)){Fb(a,s,t),pg();break e}l=Error(W(426))}}else if(Ue&&u.mode&1){var g=Bb(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),zb(g,o,u,a,t),Km(to(l,u));break e}}a=l=to(l,u),ut!==4&&(ut=2),Hu===null?Hu=[a]:Hu.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=UA(a,l,t);jb(a,h);break e;case 1:u=l;var v=a.type,b=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(oi===null||!oi.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=WA(a,u,t);jb(a,w);break e}}a=a.return}while(a!==null)}l3(r)}catch(S){t=S,et===r&&r!==null&&(et=r=r.return);continue}break}while(!0)}function o3(){var e=cf.current;return cf.current=sf,e===null?sf:e}function pg(){(ut===0||ut===3||ut===2)&&(ut=4),ht===null||!(Qi&268435455)&&!(Id&268435455)||Xn(ht,St)}function pf(e,t){var r=me;me|=2;var n=o3();(ht!==e||St!==t)&&(dn=null,Ui(e,t));do try{Wk();break}catch(i){a3(e,i)}while(!0);if(Ym(),me=r,cf.current=n,et!==null)throw Error(W(261));return ht=null,St=0,ut}function Wk(){for(;et!==null;)u3(et)}function Hk(){for(;et!==null&&!h5();)u3(et)}function u3(e){var t=c3(e.alternate,e,tr);e.memoizedProps=e.pendingProps,t===null?l3(e):et=t,lg.current=null}function l3(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Lk(r,t),r!==null){r.flags&=32767,et=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ut=6,et=null;return}}else if(r=Dk(r,t,tr),r!==null){et=r;return}if(t=t.sibling,t!==null){et=t;return}et=t=e}while(t!==null);ut===0&&(ut=5)}function Ei(e,t,r){var n=_e,i=Sr.transition;try{Sr.transition=null,_e=1,Gk(e,t,r,n)}finally{Sr.transition=i,_e=n}return null}function Gk(e,t,r,n){do Ga();while(Zn!==null);if(me&6)throw Error(W(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(x5(e,a),e===ht&&(et=ht=null,St=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Fs||(Fs=!0,f3(Kc,function(){return Ga(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Sr.transition,Sr.transition=null;var o=_e;_e=1;var u=me;me|=4,lg.current=null,Fk(e,r),r3(r,e),fk(J0),Yc=!!Z0,J0=Z0=null,e.current=r,Bk(r),y5(),me=u,_e=o,Sr.transition=a}else e.current=r;if(Fs&&(Fs=!1,Zn=e,df=i),a=e.pendingLanes,a===0&&(oi=null),b5(r.stateNode),Kt(e,qe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(ff)throw ff=!1,e=bh,bh=null,e;return df&1&&e.tag!==0&&Ga(),a=e.pendingLanes,a&1?e===wh?Gu++:(Gu=0,wh=e):Gu=0,mi(),null}function Ga(){if(Zn!==null){var e=Ux(df),t=Sr.transition,r=_e;try{if(Sr.transition=null,_e=16>e?16:e,Zn===null)var n=!1;else{if(e=Zn,Zn=null,df=0,me&6)throw Error(W(331));var i=me;for(me|=4,J=e.current;J!==null;){var a=J,o=a.child;if(J.flags&16){var u=a.deletions;if(u!==null){for(var l=0;l<u.length;l++){var s=u[l];for(J=s;J!==null;){var f=J;switch(f.tag){case 0:case 11:case 15:Wu(8,f,a)}var c=f.child;if(c!==null)c.return=f,J=c;else for(;J!==null;){f=J;var d=f.sibling,p=f.return;if(JA(f),f===s){J=null;break}if(d!==null){d.return=p,J=d;break}J=p}}}var y=a.alternate;if(y!==null){var m=y.child;if(m!==null){y.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}J=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,J=o;else e:for(;J!==null;){if(a=J,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Wu(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,J=h;break e}J=a.return}}var v=e.current;for(J=v;J!==null;){o=J;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,J=b;else e:for(o=v;J!==null;){if(u=J,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Cd(9,u)}}catch(S){Ke(u,u.return,S)}if(u===o){J=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,J=w;break e}J=u.return}}if(me=i,mi(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(_d,e)}catch{}n=!0}return n}finally{_e=r,Sr.transition=t}}return!1}function ew(e,t,r){t=to(r,t),t=UA(e,t,1),e=ai(e,t,1),t=Dt(),e!==null&&(rs(e,1,t),Kt(e,t))}function Ke(e,t,r){if(e.tag===3)ew(e,e,r);else for(;t!==null;){if(t.tag===3){ew(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(oi===null||!oi.has(n))){e=to(r,e),e=WA(t,e,1),t=ai(t,e,1),e=Dt(),t!==null&&(rs(t,1,e),Kt(t,e));break}}t=t.return}}function Vk(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Dt(),e.pingedLanes|=e.suspendedLanes&r,ht===e&&(St&r)===r&&(ut===4||ut===3&&(St&130023424)===St&&500>qe()-cg?Ui(e,0):sg|=r),Kt(e,t)}function s3(e,t){t===0&&(e.mode&1?(t=Ts,Ts<<=1,!(Ts&130023424)&&(Ts=4194304)):t=1);var r=Dt();e=An(e,t),e!==null&&(rs(e,t,r),Kt(e,r))}function Kk(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),s3(e,r)}function Xk(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(W(314))}n!==null&&n.delete(t),s3(e,r)}var c3;c3=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Gt.current)Ut=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ut=!1,Mk(e,t,r);Ut=!!(e.flags&131072)}else Ut=!1,Ue&&t.flags&1048576&&vA(t,rf,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ic(e,t),e=t.pendingProps;var i=Qa(t,Tt.current);Ha(t,r),i=ng(null,t,n,e,i,r);var a=ig();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Vt(n)?(a=!0,ef(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zm(t),i.updater=kd,t.stateNode=i,i._reactInternals=t,lh(t,n,e,r),t=fh(null,t,n,!0,a,r)):(t.tag=0,Ue&&a&&Gm(t),Ct(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ic(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=qk(n),e=Nr(n,e),i){case 0:t=ch(null,t,n,e,r);break e;case 1:t=Hb(null,t,n,e,r);break e;case 11:t=Ub(null,t,n,e,r);break e;case 14:t=Wb(null,t,n,Nr(n.type,e),r);break e}throw Error(W(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nr(n,i),ch(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nr(n,i),Hb(e,t,n,i,r);case 3:e:{if(KA(t),e===null)throw Error(W(387));n=t.pendingProps,a=t.memoizedState,i=a.element,wA(e,t),of(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=to(Error(W(423)),t),t=Gb(e,t,n,r,i);break e}else if(n!==i){i=to(Error(W(424)),t),t=Gb(e,t,n,r,i);break e}else for(ir=ii(t.stateNode.containerInfo.firstChild),ar=t,Ue=!0,Lr=null,r=gA(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Za(),n===i){t=Pn(e,t,r);break e}Ct(e,t,n,r)}t=t.child}return t;case 5:return SA(t),e===null&&ah(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,eh(n,i)?o=null:a!==null&&eh(n,a)&&(t.flags|=32),VA(e,t),Ct(e,t,o,r),t.child;case 6:return e===null&&ah(t),null;case 13:return XA(e,t,r);case 4:return Jm(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ja(t,null,n,r):Ct(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nr(n,i),Ub(e,t,n,i,r);case 7:return Ct(e,t,t.pendingProps,r),t.child;case 8:return Ct(e,t,t.pendingProps.children,r),t.child;case 12:return Ct(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Ie(nf,n._currentValue),n._currentValue=o,a!==null)if(Wr(a.value,o)){if(a.children===i.children&&!Gt.current){t=Pn(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===n){if(a.tag===1){l=Sn(-1,r&-r),l.tag=2;var s=a.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?l.next=l:(l.next=f.next,f.next=l),s.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),oh(a.return,r,t),u.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(W(341));o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),oh(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ct(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Ha(t,r),i=_r(i),n=n(i),t.flags|=1,Ct(e,t,n,r),t.child;case 14:return n=t.type,i=Nr(n,t.pendingProps),i=Nr(n.type,i),Wb(e,t,n,i,r);case 15:return HA(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nr(n,i),Ic(e,t),t.tag=1,Vt(n)?(e=!0,ef(t)):e=!1,Ha(t,r),zA(t,n,i),lh(t,n,i,r),fh(null,t,n,!0,e,r);case 19:return YA(e,t,r);case 22:return GA(e,t,r)}throw Error(W(156,t.tag))};function f3(e,t){return Rx(e,t)}function Yk(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(e,t,r,n){return new Yk(e,t,r,n)}function vg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qk(e){if(typeof e=="function")return vg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jm)return 11;if(e===Nm)return 14}return 2}function li(e,t){var r=e.alternate;return r===null?(r=br(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Mc(e,t,r,n,i,a){var o=2;if(n=e,typeof e=="function")vg(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case _a:return Wi(r.children,i,a,t);case Im:o=8,i|=8;break;case I0:return e=br(12,r,t,i|2),e.elementType=I0,e.lanes=a,e;case j0:return e=br(13,r,t,i),e.elementType=j0,e.lanes=a,e;case N0:return e=br(19,r,t,i),e.elementType=N0,e.lanes=a,e;case Sx:return jd(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bx:o=10;break e;case wx:o=9;break e;case jm:o=11;break e;case Nm:o=14;break e;case Wn:o=16,n=null;break e}throw Error(W(130,e==null?e:typeof e,""))}return t=br(o,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function Wi(e,t,r,n){return e=br(7,e,n,t),e.lanes=r,e}function jd(e,t,r,n){return e=br(22,e,n,t),e.elementType=Sx,e.lanes=r,e.stateNode={isHidden:!1},e}function mv(e,t,r){return e=br(6,e,null,t),e.lanes=r,e}function gv(e,t,r){return t=br(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qk(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zp(0),this.expirationTimes=Zp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zp(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hg(e,t,r,n,i,a,o,u,l){return e=new Qk(e,t,r,u,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=br(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zm(a),e}function Zk(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$a,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function d3(e){if(!e)return pi;e=e._reactInternals;e:{if(aa(e)!==e||e.tag!==1)throw Error(W(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(W(171))}if(e.tag===1){var r=e.type;if(Vt(r))return dA(e,r,t)}return t}function p3(e,t,r,n,i,a,o,u,l){return e=hg(r,n,!0,e,i,a,o,u,l),e.context=d3(null),r=e.current,n=Dt(),i=ui(r),a=Sn(n,i),a.callback=t??null,ai(r,a,i),e.current.lanes=i,rs(e,i,n),Kt(e,n),e}function Nd(e,t,r,n){var i=t.current,a=Dt(),o=ui(i);return r=d3(r),t.context===null?t.context=r:t.pendingContext=r,t=Sn(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ai(i,t,o),e!==null&&(zr(e,i,o,a),Tc(e,i,o)),o}function vf(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tw(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function yg(e,t){tw(e,t),(e=e.alternate)&&tw(e,t)}function Jk(){return null}var v3=typeof reportError=="function"?reportError:function(e){console.error(e)};function mg(e){this._internalRoot=e}Md.prototype.render=mg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));Nd(e,t,null,null)};Md.prototype.unmount=mg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zi(function(){Nd(null,e,null,null)}),t[xn]=null}};function Md(e){this._internalRoot=e}Md.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gx();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Kn.length&&t!==0&&t<Kn[r].priority;r++);Kn.splice(r,0,e),r===0&&Kx(e)}};function gg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rw(){}function e8(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var s=vf(o);a.call(s)}}var o=p3(t,n,e,0,null,!1,!1,"",rw);return e._reactRootContainer=o,e[xn]=o.current,sl(e.nodeType===8?e.parentNode:e),Zi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var u=n;n=function(){var s=vf(l);u.call(s)}}var l=hg(e,0,!1,null,null,!1,!1,"",rw);return e._reactRootContainer=l,e[xn]=l.current,sl(e.nodeType===8?e.parentNode:e),Zi(function(){Nd(t,l,r,n)}),l}function Ld(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var u=i;i=function(){var l=vf(o);u.call(l)}}Nd(t,o,e,i)}else o=e8(r,t,e,i,n);return vf(o)}Wx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Iu(t.pendingLanes);r!==0&&(Lm(t,r|1),Kt(t,qe()),!(me&6)&&(ro=qe()+500,mi()))}break;case 13:Zi(function(){var n=An(e,1);if(n!==null){var i=Dt();zr(n,e,1,i)}}),yg(e,1)}};Rm=function(e){if(e.tag===13){var t=An(e,134217728);if(t!==null){var r=Dt();zr(t,e,134217728,r)}yg(e,134217728)}};Hx=function(e){if(e.tag===13){var t=ui(e),r=An(e,t);if(r!==null){var n=Dt();zr(r,e,t,n)}yg(e,t)}};Gx=function(){return _e};Vx=function(e,t){var r=_e;try{return _e=e,t()}finally{_e=r}};H0=function(e,t,r){switch(t){case"input":if(L0(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Pd(n);if(!i)throw Error(W(90));_x(n),L0(n,i)}}}break;case"textarea":xx(e,r);break;case"select":t=r.value,t!=null&&Ba(e,!!r.multiple,t,!1)}};Ix=fg;jx=Zi;var t8={usingClientEntryPoint:!1,Events:[is,Pa,Pd,kx,Cx,fg]},su={findFiberByHostInstance:ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r8={bundleType:su.bundleType,version:su.version,rendererPackageName:su.rendererPackageName,rendererConfig:su.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dx(e),e===null?null:e.stateNode},findFiberByHostInstance:su.findFiberByHostInstance||Jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bs.isDisabled&&Bs.supportsFiber)try{_d=Bs.inject(r8),en=Bs}catch{}}lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t8;lr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gg(t))throw Error(W(200));return Zk(e,t,null,r)};lr.createRoot=function(e,t){if(!gg(e))throw Error(W(299));var r=!1,n="",i=v3;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hg(e,1,!1,null,null,r,!1,n,i),e[xn]=t.current,sl(e.nodeType===8?e.parentNode:e),new mg(t)};lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=Dx(t),e=e===null?null:e.stateNode,e};lr.flushSync=function(e){return Zi(e)};lr.hydrate=function(e,t,r){if(!Dd(t))throw Error(W(200));return Ld(null,e,t,!0,r)};lr.hydrateRoot=function(e,t,r){if(!gg(e))throw Error(W(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",o=v3;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=p3(t,null,e,1,r??null,i,!1,a,o),e[xn]=t.current,sl(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Md(t)};lr.render=function(e,t,r){if(!Dd(t))throw Error(W(200));return Ld(null,e,t,!1,r)};lr.unmountComponentAtNode=function(e){if(!Dd(e))throw Error(W(40));return e._reactRootContainer?(Zi(function(){Ld(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};lr.unstable_batchedUpdates=fg;lr.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Dd(r))throw Error(W(200));if(e==null||e._reactInternals===void 0)throw Error(W(38));return Ld(e,t,r,!1,n)};lr.version="18.3.1-next-f1338f8080-20240426";function h3(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h3)}catch(e){console.error(e)}}h3(),hx.exports=lr;var n8=hx.exports,nw=n8;k0.createRoot=nw.createRoot,k0.hydrateRoot=nw.hydrateRoot;var Wt=function(){return Wt=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},Wt.apply(this,arguments)};function gl(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var De="-ms-",Vu="-moz-",we="-webkit-",y3="comm",Rd="rule",bg="decl",i8="@import",m3="@keyframes",a8="@layer",g3=Math.abs,wg=String.fromCharCode,_h=Object.assign;function o8(e,t){return vt(e,0)^45?(((t<<2^vt(e,0))<<2^vt(e,1))<<2^vt(e,2))<<2^vt(e,3):0}function b3(e){return e.trim()}function pn(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,r){return e.replace(t,r)}function Dc(e,t,r){return e.indexOf(t,r)}function vt(e,t){return e.charCodeAt(t)|0}function no(e,t,r){return e.slice(t,r)}function Yr(e){return e.length}function w3(e){return e.length}function Nu(e,t){return t.push(e),e}function u8(e,t){return e.map(t).join("")}function iw(e,t){return e.filter(function(r){return!pn(r,t)})}var Fd=1,io=1,S3=0,xr=0,Je=0,Do="";function Bd(e,t,r,n,i,a,o,u){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:Fd,column:io,length:o,return:"",siblings:u}}function Un(e,t){return _h(Bd("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function va(e){for(;e.root;)e=Un(e.root,{children:[e]});Nu(e,e.siblings)}function l8(){return Je}function s8(){return Je=xr>0?vt(Do,--xr):0,io--,Je===10&&(io=1,Fd--),Je}function Ur(){return Je=xr<S3?vt(Do,xr++):0,io++,Je===10&&(io=1,Fd++),Je}function Hi(){return vt(Do,xr)}function Lc(){return xr}function zd(e,t){return no(Do,e,t)}function Oh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function c8(e){return Fd=io=1,S3=Yr(Do=e),xr=0,[]}function f8(e){return Do="",e}function bv(e){return b3(zd(xr-1,xh(e===91?e+2:e===40?e+1:e)))}function d8(e){for(;(Je=Hi())&&Je<33;)Ur();return Oh(e)>2||Oh(Je)>3?"":" "}function p8(e,t){for(;--t&&Ur()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return zd(e,Lc()+(t<6&&Hi()==32&&Ur()==32))}function xh(e){for(;Ur();)switch(Je){case e:return xr;case 34:case 39:e!==34&&e!==39&&xh(Je);break;case 40:e===41&&xh(e);break;case 92:Ur();break}return xr}function v8(e,t){for(;Ur()&&e+Je!==57;)if(e+Je===84&&Hi()===47)break;return"/*"+zd(t,xr-1)+"*"+wg(e===47?e:Ur())}function h8(e){for(;!Oh(Hi());)Ur();return zd(e,xr)}function y8(e){return f8(Rc("",null,null,null,[""],e=c8(e),0,[0],e))}function Rc(e,t,r,n,i,a,o,u,l){for(var s=0,f=0,c=o,d=0,p=0,y=0,m=1,g=1,h=1,v=0,b="",w=i,S=a,$=n,_=b;g;)switch(y=v,v=Ur()){case 40:if(y!=108&&vt(_,c-1)==58){Dc(_+=fe(bv(v),"&","&\f"),"&\f",g3(s?u[s-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:_+=bv(v);break;case 9:case 10:case 13:case 32:_+=d8(y);break;case 92:_+=p8(Lc()-1,7);continue;case 47:switch(Hi()){case 42:case 47:Nu(m8(v8(Ur(),Lc()),t,r,l),l);break;default:_+="/"}break;case 123*m:u[s++]=Yr(_)*h;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+f:h==-1&&(_=fe(_,/\f/g,"")),p>0&&Yr(_)-c&&Nu(p>32?ow(_+";",n,r,c-1,l):ow(fe(_," ","")+";",n,r,c-2,l),l);break;case 59:_+=";";default:if(Nu($=aw(_,t,r,s,f,i,u,b,w=[],S=[],c,a),a),v===123)if(f===0)Rc(_,t,$,$,w,a,c,u,S);else switch(d===99&&vt(_,3)===110?100:d){case 100:case 108:case 109:case 115:Rc(e,$,$,n&&Nu(aw(e,$,$,0,0,i,u,b,i,w=[],c,S),S),i,S,c,u,n?w:S);break;default:Rc(_,$,$,$,[""],S,0,u,S)}}s=f=p=0,m=h=1,b=_="",c=o;break;case 58:c=1+Yr(_),p=y;default:if(m<1){if(v==123)--m;else if(v==125&&m++==0&&s8()==125)continue}switch(_+=wg(v),v*m){case 38:h=f>0?1:(_+="\f",-1);break;case 44:u[s++]=(Yr(_)-1)*h,h=1;break;case 64:Hi()===45&&(_+=bv(Ur())),d=Hi(),f=c=Yr(b=_+=h8(Lc())),v++;break;case 45:y===45&&Yr(_)==2&&(m=0)}}return a}function aw(e,t,r,n,i,a,o,u,l,s,f,c){for(var d=i-1,p=i===0?a:[""],y=w3(p),m=0,g=0,h=0;m<n;++m)for(var v=0,b=no(e,d+1,d=g3(g=o[m])),w=e;v<y;++v)(w=b3(g>0?p[v]+" "+b:fe(b,/&\f/g,p[v])))&&(l[h++]=w);return Bd(e,t,r,i===0?Rd:u,l,s,f,c)}function m8(e,t,r,n){return Bd(e,t,r,y3,wg(l8()),no(e,2,-2),0,n)}function ow(e,t,r,n,i){return Bd(e,t,r,bg,no(e,0,n),no(e,n+1,-1),n,i)}function $3(e,t,r){switch(o8(e,t)){case 5103:return we+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+e+e;case 4789:return Vu+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return we+e+Vu+e+De+e+e;case 5936:switch(vt(e,t+11)){case 114:return we+e+De+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return we+e+De+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return we+e+De+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return we+e+De+e+e;case 6165:return we+e+De+"flex-"+e+e;case 5187:return we+e+fe(e,/(\w+).+(:[^]+)/,we+"box-$1$2"+De+"flex-$1$2")+e;case 5443:return we+e+De+"flex-item-"+fe(e,/flex-|-self/g,"")+(pn(e,/flex-|baseline/)?"":De+"grid-row-"+fe(e,/flex-|-self/g,""))+e;case 4675:return we+e+De+"flex-line-pack"+fe(e,/align-content|flex-|-self/g,"")+e;case 5548:return we+e+De+fe(e,"shrink","negative")+e;case 5292:return we+e+De+fe(e,"basis","preferred-size")+e;case 6060:return we+"box-"+fe(e,"-grow","")+we+e+De+fe(e,"grow","positive")+e;case 4554:return we+fe(e,/([^-])(transform)/g,"$1"+we+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+e+e;case 4200:if(!pn(e,/flex-|baseline/))return De+"grid-column-align"+no(e,t)+e;break;case 2592:case 3360:return De+fe(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,pn(n.props,/grid-\w+-end/)})?~Dc(e+(r=r[t].value),"span",0)?e:De+fe(e,"-start","")+e+De+"grid-row-span:"+(~Dc(r,"span",0)?pn(r,/\d+/):+pn(r,/\d+/)-+pn(e,/\d+/))+";":De+fe(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return pn(n.props,/grid-\w+-start/)})?e:De+fe(fe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,we+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yr(e)-1-t>6)switch(vt(e,t+1)){case 109:if(vt(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+Vu+(vt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Dc(e,"stretch",0)?$3(fe(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return fe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,a,o,u,l,s){return De+i+":"+a+s+(o?De+i+"-span:"+(u?l:+l-+a)+s:"")+e});case 4949:if(vt(e,t+6)===121)return fe(e,":",":"+we)+e;break;case 6444:switch(vt(e,vt(e,14)===45?18:11)){case 120:return fe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(vt(e,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+De+"$2box$3")+e;case 100:return fe(e,":",":"+De)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(e,"scroll-","scroll-snap-")+e}return e}function hf(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function g8(e,t,r,n){switch(e.type){case a8:if(e.children.length)break;case i8:case bg:return e.return=e.return||e.value;case y3:return"";case m3:return e.return=e.value+"{"+hf(e.children,n)+"}";case Rd:if(!Yr(e.value=e.props.join(",")))return""}return Yr(r=hf(e.children,n))?e.return=e.value+"{"+r+"}":""}function b8(e){var t=w3(e);return function(r,n,i,a){for(var o="",u=0;u<t;u++)o+=e[u](r,n,i,a)||"";return o}}function w8(e){return function(t){t.root||(t=t.return)&&e(t)}}function S8(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case bg:e.return=$3(e.value,e.length,r);return;case m3:return hf([Un(e,{value:fe(e.value,"@","@"+we)})],n);case Rd:if(e.length)return u8(r=e.props,function(i){switch(pn(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":va(Un(e,{props:[fe(i,/:(read-\w+)/,":"+Vu+"$1")]})),va(Un(e,{props:[i]})),_h(e,{props:iw(r,n)});break;case"::placeholder":va(Un(e,{props:[fe(i,/:(plac\w+)/,":"+we+"input-$1")]})),va(Un(e,{props:[fe(i,/:(plac\w+)/,":"+Vu+"$1")]})),va(Un(e,{props:[fe(i,/:(plac\w+)/,De+"input-$1")]})),va(Un(e,{props:[i]})),_h(e,{props:iw(r,n)});break}return""})}}var $8={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zt={},ao=typeof process<"u"&&Zt!==void 0&&(Zt.REACT_APP_SC_ATTR||Zt.SC_ATTR)||"data-styled",_3="active",O3="data-styled-version",Ud="6.1.11",Sg=`/*!sc*/
`,$g=typeof window<"u"&&"HTMLElement"in window,_8=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zt!==void 0&&Zt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zt.REACT_APP_SC_DISABLE_SPEEDY!==""?Zt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zt!==void 0&&Zt.SC_DISABLE_SPEEDY!==void 0&&Zt.SC_DISABLE_SPEEDY!==""&&Zt.SC_DISABLE_SPEEDY!=="false"&&Zt.SC_DISABLE_SPEEDY),Wd=Object.freeze([]),oo=Object.freeze({});function O8(e,t,r){return r===void 0&&(r=oo),e.theme!==r.theme&&e.theme||t||r.theme}var x3=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),x8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,A8=/(^-|-$)/g;function uw(e){return e.replace(x8,"-").replace(A8,"")}var P8=/(a)(d)/gi,zs=52,lw=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ah(e){var t,r="";for(t=Math.abs(e);t>zs;t=t/zs|0)r=lw(t%zs)+r;return(lw(t%zs)+r).replace(P8,"$1-$2")}var wv,A3=5381,Na=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},P3=function(e){return Na(A3,e)};function E3(e){return Ah(P3(e)>>>0)}function E8(e){return e.displayName||e.name||"Component"}function Sv(e){return typeof e=="string"&&!0}var T3=typeof Symbol=="function"&&Symbol.for,k3=T3?Symbol.for("react.memo"):60115,T8=T3?Symbol.for("react.forward_ref"):60112,k8={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},C8={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I8=((wv={})[T8]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wv[k3]=C3,wv);function sw(e){return("type"in(t=e)&&t.type.$$typeof)===k3?C3:"$$typeof"in e?I8[e.$$typeof]:k8;var t}var j8=Object.defineProperty,N8=Object.getOwnPropertyNames,cw=Object.getOwnPropertySymbols,M8=Object.getOwnPropertyDescriptor,D8=Object.getPrototypeOf,fw=Object.prototype;function I3(e,t,r){if(typeof t!="string"){if(fw){var n=D8(t);n&&n!==fw&&I3(e,n,r)}var i=N8(t);cw&&(i=i.concat(cw(t)));for(var a=sw(e),o=sw(t),u=0;u<i.length;++u){var l=i[u];if(!(l in C8||r&&r[l]||o&&l in o||a&&l in a)){var s=M8(t,l);try{j8(e,l,s)}catch{}}}}return e}function uo(e){return typeof e=="function"}function _g(e){return typeof e=="object"&&"styledComponentId"in e}function Di(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ph(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function bl(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Eh(e,t,r){if(r===void 0&&(r=!1),!r&&!bl(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Eh(e[n],t[n]);else if(bl(t))for(var n in t)e[n]=Eh(e[n],t[n]);return e}function Og(e,t){Object.defineProperty(e,"toString",{value:t})}function os(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var L8=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,a=i;t>=a;)if((a<<=1)<0)throw os(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var u=this.indexOfGroup(t+1),l=(o=0,r.length);o<l;o++)this.tag.insertRule(u,r[o])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var a=n;a<i;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),a=i+n,o=i;o<a;o++)r+="".concat(this.tag.getRule(o)).concat(Sg);return r},e}(),Fc=new Map,yf=new Map,Bc=1,Us=function(e){if(Fc.has(e))return Fc.get(e);for(;yf.has(Bc);)Bc++;var t=Bc++;return Fc.set(e,t),yf.set(t,e),t},R8=function(e,t){Bc=t+1,Fc.set(e,t),yf.set(t,e)},F8="style[".concat(ao,"][").concat(O3,'="').concat(Ud,'"]'),B8=new RegExp("^".concat(ao,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),z8=function(e,t,r){for(var n,i=r.split(","),a=0,o=i.length;a<o;a++)(n=i[a])&&e.registerName(t,n)},U8=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Sg),i=[],a=0,o=n.length;a<o;a++){var u=n[a].trim();if(u){var l=u.match(B8);if(l){var s=0|parseInt(l[1],10),f=l[2];s!==0&&(R8(f,s),z8(e,f,l[3]),e.getTag().insertRules(s,i)),i.length=0}else i.push(u)}}};function W8(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var j3=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(u){var l=Array.from(u.querySelectorAll("style[".concat(ao,"]")));return l[l.length-1]}(r),a=i!==void 0?i.nextSibling:null;n.setAttribute(ao,_3),n.setAttribute(O3,Ud);var o=W8();return o&&n.setAttribute("nonce",o),r.insertBefore(n,a),n},H8=function(){function e(t){this.element=j3(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,a=n.length;i<a;i++){var o=n[i];if(o.ownerNode===r)return o}throw os(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),G8=function(){function e(t){this.element=j3(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),V8=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),dw=$g,K8={isServer:!$g,useCSSOMInjection:!_8},N3=function(){function e(t,r,n){t===void 0&&(t=oo),r===void 0&&(r={});var i=this;this.options=Wt(Wt({},K8),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&$g&&dw&&(dw=!1,function(a){for(var o=document.querySelectorAll(F8),u=0,l=o.length;u<l;u++){var s=o[u];s&&s.getAttribute(ao)!==_3&&(U8(a,s),s.parentNode&&s.parentNode.removeChild(s))}}(this)),Og(this,function(){return function(a){for(var o=a.getTag(),u=o.length,l="",s=function(c){var d=function(h){return yf.get(h)}(c);if(d===void 0)return"continue";var p=a.names.get(d),y=o.getGroup(c);if(p===void 0||y.length===0)return"continue";var m="".concat(ao,".g").concat(c,'[id="').concat(d,'"]'),g="";p!==void 0&&p.forEach(function(h){h.length>0&&(g+="".concat(h,","))}),l+="".concat(y).concat(m,'{content:"').concat(g,'"}').concat(Sg)},f=0;f<u;f++)s(f);return l}(i)})}return e.registerId=function(t){return Us(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Wt(Wt({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new V8(i):n?new H8(i):new G8(i)}(this.options),new L8(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Us(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Us(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Us(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),X8=/&/g,Y8=/^\s*\/\/.*$/gm;function M3(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=M3(r.children,t)),r})}function q8(e){var t,r,n,i=oo,a=i.options,o=a===void 0?oo:a,u=i.plugins,l=u===void 0?Wd:u,s=function(d,p,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):d},f=l.slice();f.push(function(d){d.type===Rd&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(X8,r).replace(n,s))}),o.prefix&&f.push(S8),f.push(g8);var c=function(d,p,y,m){p===void 0&&(p=""),y===void 0&&(y=""),m===void 0&&(m="&"),t=m,r=p,n=new RegExp("\\".concat(r,"\\b"),"g");var g=d.replace(Y8,""),h=y8(y||p?"".concat(y," ").concat(p," { ").concat(g," }"):g);o.namespace&&(h=M3(h,o.namespace));var v=[];return hf(h,b8(f.concat(w8(function(b){return v.push(b)})))),v};return c.hash=l.length?l.reduce(function(d,p){return p.name||os(15),Na(d,p.name)},A3).toString():"",c}var Q8=new N3,Th=q8(),D3=x.createContext({shouldForwardProp:void 0,styleSheet:Q8,stylis:Th});D3.Consumer;x.createContext(void 0);function pw(){return V.useContext(D3)}var L3=function(){function e(t,r){var n=this;this.inject=function(i,a){a===void 0&&(a=Th);var o=n.name+a.hash;i.hasNameForId(n.id,o)||i.insertRules(n.id,o,a(n.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Og(this,function(){throw os(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Th),this.name+t.hash},e}(),Z8=function(e){return e>="A"&&e<="Z"};function vw(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Z8(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var R3=function(e){return e==null||e===!1||e===""},F3=function(e){var t,r,n=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!R3(a)&&(Array.isArray(a)&&a.isCss||uo(a)?n.push("".concat(vw(i),":"),a,";"):bl(a)?n.push.apply(n,gl(gl(["".concat(i," {")],F3(a),!1),["}"],!1)):n.push("".concat(vw(i),": ").concat((t=i,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in $8||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Gi(e,t,r,n){if(R3(e))return[];if(_g(e))return[".".concat(e.styledComponentId)];if(uo(e)){if(!uo(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Gi(i,t,r,n)}var a;return e instanceof L3?r?(e.inject(r,n),[e.getName(n)]):[e]:bl(e)?F3(e):Array.isArray(e)?Array.prototype.concat.apply(Wd,e.map(function(o){return Gi(o,t,r,n)})):[e.toString()]}function J8(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(uo(r)&&!_g(r))return!1}return!0}var eC=P3(Ud),tC=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&J8(t),this.componentId=r,this.baseHash=Na(eC,r),this.baseStyle=n,N3.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=Di(i,this.staticRulesId);else{var a=Ph(Gi(this.rules,t,r,n)),o=Ah(Na(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,o)){var u=n(a,".".concat(o),void 0,this.componentId);r.insertRules(this.componentId,o,u)}i=Di(i,o),this.staticRulesId=o}else{for(var l=Na(this.baseHash,n.hash),s="",f=0;f<this.rules.length;f++){var c=this.rules[f];if(typeof c=="string")s+=c;else if(c){var d=Ph(Gi(c,t,r,n));l=Na(l,d+f),s+=d}}if(s){var p=Ah(l>>>0);r.hasNameForId(this.componentId,p)||r.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),i=Di(i,p)}}return i},e}(),B3=x.createContext(void 0);B3.Consumer;var $v={};function rC(e,t,r){var n=_g(e),i=e,a=!Sv(e),o=t.attrs,u=o===void 0?Wd:o,l=t.componentId,s=l===void 0?function(w,S){var $=typeof w!="string"?"sc":uw(w);$v[$]=($v[$]||0)+1;var _="".concat($,"-").concat(E3(Ud+$+$v[$]));return S?"".concat(S,"-").concat(_):_}(t.displayName,t.parentComponentId):l,f=t.displayName,c=f===void 0?function(w){return Sv(w)?"styled.".concat(w):"Styled(".concat(E8(w),")")}(e):f,d=t.displayName&&t.componentId?"".concat(uw(t.displayName),"-").concat(t.componentId):t.componentId||s,p=n&&i.attrs?i.attrs.concat(u).filter(Boolean):u,y=t.shouldForwardProp;if(n&&i.shouldForwardProp){var m=i.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;y=function(w,S){return m(w,S)&&g(w,S)}}else y=m}var h=new tC(r,d,n?i.componentStyle:void 0);function v(w,S){return function($,_,O){var T=$.attrs,P=$.componentStyle,k=$.defaultProps,E=$.foldedComponentIds,C=$.styledComponentId,N=$.target,z=x.useContext(B3),F=pw(),B=$.shouldForwardProp||F.shouldForwardProp,j=O8(_,z,k)||oo,L=function(Ae,Pe,Ee){for(var rt,Q=Wt(Wt({},Pe),{className:void 0,theme:Ee}),ie=0;ie<Ae.length;ie+=1){var ue=uo(rt=Ae[ie])?rt(Q):rt;for(var R in ue)Q[R]=R==="className"?Di(Q[R],ue[R]):R==="style"?Wt(Wt({},Q[R]),ue[R]):ue[R]}return Pe.className&&(Q.className=Di(Q.className,Pe.className)),Q}(T,_,j),U=L.as||N,Y={};for(var G in L)L[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&L.theme===j||(G==="forwardedAs"?Y.as=L.forwardedAs:B&&!B(G,U)||(Y[G]=L[G]));var ne=function(Ae,Pe){var Ee=pw(),rt=Ae.generateAndInjectStyles(Pe,Ee.styleSheet,Ee.stylis);return rt}(P,L),ce=Di(E,C);return ne&&(ce+=" "+ne),L.className&&(ce+=" "+L.className),Y[Sv(U)&&!x3.has(U)?"class":"className"]=ce,Y.ref=O,V.createElement(U,Y)}(b,w,S)}v.displayName=c;var b=x.forwardRef(v);return b.attrs=p,b.componentStyle=h,b.displayName=c,b.shouldForwardProp=y,b.foldedComponentIds=n?Di(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=d,b.target=n?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=n?function(S){for(var $=[],_=1;_<arguments.length;_++)$[_-1]=arguments[_];for(var O=0,T=$;O<T.length;O++)Eh(S,T[O],!0);return S}({},i.defaultProps,w):w}}),Og(b,function(){return".".concat(b.styledComponentId)}),a&&I3(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function hw(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var yw=function(e){return Object.assign(e,{isCss:!0})};function z3(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(uo(e)||bl(e))return yw(Gi(hw(Wd,gl([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Gi(n):yw(Gi(hw(n,t)))}function kh(e,t,r){if(r===void 0&&(r=oo),!t)throw os(1,t);var n=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,r,z3.apply(void 0,gl([i],a,!1)))};return n.attrs=function(i){return kh(e,t,Wt(Wt({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return kh(e,t,Wt(Wt({},r),i))},n}var U3=function(e){return kh(rC,e)},Ne=U3;x3.forEach(function(e){Ne[e]=U3(e)});function nC(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Ph(z3.apply(void 0,gl([e],t,!1))),i=E3(n);return new L3(i,n)}var us=e=>e.type==="checkbox",Ma=e=>e instanceof Date,It=e=>e==null;const W3=e=>typeof e=="object";var st=e=>!It(e)&&!Array.isArray(e)&&W3(e)&&!Ma(e),iC=e=>st(e)&&e.target?us(e.target)?e.target.checked:e.target.value:e,aC=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,oC=(e,t)=>e.has(aC(t)),uC=e=>{const t=e.constructor&&e.constructor.prototype;return st(t)&&t.hasOwnProperty("isPrototypeOf")},xg=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function vr(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(xg&&(e instanceof Blob||e instanceof FileList))&&(r||st(e)))if(t=r?[]:{},!r&&!uC(e))t=e;else for(const n in e)e.hasOwnProperty(n)&&(t[n]=vr(e[n]));else return e;return t}var Hd=e=>Array.isArray(e)?e.filter(Boolean):[],Ye=e=>e===void 0,te=(e,t,r)=>{if(!t||!st(e))return r;const n=Hd(t.split(/[,[\].]+?/)).reduce((i,a)=>It(i)?i:i[a],e);return Ye(n)||n===e?Ye(e[t])?r:e[t]:n},Yn=e=>typeof e=="boolean",Ag=e=>/^\w*$/.test(e),H3=e=>Hd(e.replace(/["|']|\]/g,"").split(/\.|\[/)),Le=(e,t,r)=>{let n=-1;const i=Ag(t)?[t]:H3(t),a=i.length,o=a-1;for(;++n<a;){const u=i[n];let l=r;if(n!==o){const s=e[u];l=st(s)||Array.isArray(s)?s:isNaN(+i[n+1])?{}:[]}if(u==="__proto__")return;e[u]=l,e=e[u]}return e};const mw={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Rr={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ln={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};x.createContext(null);var lC=(e,t,r,n=!0)=>{const i={defaultValues:t._defaultValues};for(const a in e)Object.defineProperty(i,a,{get:()=>{const o=a;return t._proxyFormState[o]!==Rr.all&&(t._proxyFormState[o]=!n||Rr.all),e[o]}});return i},er=e=>st(e)&&!Object.keys(e).length,sC=(e,t,r,n)=>{r(e);const{name:i,...a}=e;return er(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(o=>t[o]===Rr.all)},zc=e=>Array.isArray(e)?e:[e];function cC(e){const t=x.useRef(e);t.current=e,x.useEffect(()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var Zr=e=>typeof e=="string",fC=(e,t,r,n,i)=>Zr(e)?(n&&t.watch.add(e),te(r,e,i)):Array.isArray(e)?e.map(a=>(n&&t.watch.add(a),te(r,a))):(n&&(t.watchAll=!0),r),dC=(e,t,r,n,i)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:i||!0}}:{},gw=e=>({isOnSubmit:!e||e===Rr.onSubmit,isOnBlur:e===Rr.onBlur,isOnChange:e===Rr.onChange,isOnAll:e===Rr.all,isOnTouch:e===Rr.onTouched}),bw=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const Ku=(e,t,r,n)=>{for(const i of r||Object.keys(e)){const a=te(e,i);if(a){const{_f:o,...u}=a;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],i)&&!n)break;if(o.ref&&t(o.ref,o.name)&&!n)break;Ku(u,t)}else st(u)&&Ku(u,t)}}};var pC=(e,t,r)=>{const n=zc(te(e,r));return Le(n,"root",t[r]),Le(e,r,n),e},Pg=e=>e.type==="file",Jn=e=>typeof e=="function",mf=e=>{if(!xg)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Uc=e=>Zr(e),Eg=e=>e.type==="radio",gf=e=>e instanceof RegExp;const ww={value:!1,isValid:!1},Sw={value:!0,isValid:!0};var G3=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ye(e[0].attributes.value)?Ye(e[0].value)||e[0].value===""?Sw:{value:e[0].value,isValid:!0}:Sw:ww}return ww};const $w={isValid:!1,value:null};var V3=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,$w):$w;function _w(e,t,r="validate"){if(Uc(e)||Array.isArray(e)&&e.every(Uc)||Yn(e)&&!e)return{type:r,message:Uc(e)?e:"",ref:t}}var ha=e=>st(e)&&!gf(e)?e:{value:e,message:""},Ow=async(e,t,r,n,i)=>{const{ref:a,refs:o,required:u,maxLength:l,minLength:s,min:f,max:c,pattern:d,validate:p,name:y,valueAsNumber:m,mount:g,disabled:h}=e._f,v=te(t,y);if(!g||h)return{};const b=o?o[0]:a,w=E=>{n&&b.reportValidity&&(b.setCustomValidity(Yn(E)?"":E||""),b.reportValidity())},S={},$=Eg(a),_=us(a),O=$||_,T=(m||Pg(a))&&Ye(a.value)&&Ye(v)||mf(a)&&a.value===""||v===""||Array.isArray(v)&&!v.length,P=dC.bind(null,y,r,S),k=(E,C,N,z=ln.maxLength,F=ln.minLength)=>{const B=E?C:N;S[y]={type:E?z:F,message:B,ref:a,...P(E?z:F,B)}};if(i?!Array.isArray(v)||!v.length:u&&(!O&&(T||It(v))||Yn(v)&&!v||_&&!G3(o).isValid||$&&!V3(o).isValid)){const{value:E,message:C}=Uc(u)?{value:!!u,message:u}:ha(u);if(E&&(S[y]={type:ln.required,message:C,ref:b,...P(ln.required,C)},!r))return w(C),S}if(!T&&(!It(f)||!It(c))){let E,C;const N=ha(c),z=ha(f);if(!It(v)&&!isNaN(v)){const F=a.valueAsNumber||v&&+v;It(N.value)||(E=F>N.value),It(z.value)||(C=F<z.value)}else{const F=a.valueAsDate||new Date(v),B=U=>new Date(new Date().toDateString()+" "+U),j=a.type=="time",L=a.type=="week";Zr(N.value)&&v&&(E=j?B(v)>B(N.value):L?v>N.value:F>new Date(N.value)),Zr(z.value)&&v&&(C=j?B(v)<B(z.value):L?v<z.value:F<new Date(z.value))}if((E||C)&&(k(!!E,N.message,z.message,ln.max,ln.min),!r))return w(S[y].message),S}if((l||s)&&!T&&(Zr(v)||i&&Array.isArray(v))){const E=ha(l),C=ha(s),N=!It(E.value)&&v.length>+E.value,z=!It(C.value)&&v.length<+C.value;if((N||z)&&(k(N,E.message,C.message),!r))return w(S[y].message),S}if(d&&!T&&Zr(v)){const{value:E,message:C}=ha(d);if(gf(E)&&!v.match(E)&&(S[y]={type:ln.pattern,message:C,ref:a,...P(ln.pattern,C)},!r))return w(C),S}if(p){if(Jn(p)){const E=await p(v,t),C=_w(E,b);if(C&&(S[y]={...C,...P(ln.validate,C.message)},!r))return w(C.message),S}else if(st(p)){let E={};for(const C in p){if(!er(E)&&!r)break;const N=_w(await p[C](v,t),b,C);N&&(E={...N,...P(C,N.message)},w(N.message),r&&(S[y]=E))}if(!er(E)&&(S[y]={ref:b,...E},!r))return S}}return w(!0),S};function vC(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=Ye(e)?n++:e[t[n++]];return e}function hC(e){for(const t in e)if(e.hasOwnProperty(t)&&!Ye(e[t]))return!1;return!0}function it(e,t){const r=Array.isArray(t)?t:Ag(t)?[t]:H3(t),n=r.length===1?e:vC(e,r),i=r.length-1,a=r[i];return n&&delete n[a],i!==0&&(st(n)&&er(n)||Array.isArray(n)&&hC(n))&&it(e,r.slice(0,-1)),e}var _v=()=>{let e=[];return{get observers(){return e},next:i=>{for(const a of e)a.next&&a.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(a=>a!==i)}}),unsubscribe:()=>{e=[]}}},bf=e=>It(e)||!W3(e);function Li(e,t){if(bf(e)||bf(t))return e===t;if(Ma(e)&&Ma(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const i of r){const a=e[i];if(!n.includes(i))return!1;if(i!=="ref"){const o=t[i];if(Ma(a)&&Ma(o)||st(a)&&st(o)||Array.isArray(a)&&Array.isArray(o)?!Li(a,o):a!==o)return!1}}return!0}var K3=e=>e.type==="select-multiple",yC=e=>Eg(e)||us(e),Ov=e=>mf(e)&&e.isConnected,X3=e=>{for(const t in e)if(Jn(e[t]))return!0;return!1};function wf(e,t={}){const r=Array.isArray(e);if(st(e)||r)for(const n in e)Array.isArray(e[n])||st(e[n])&&!X3(e[n])?(t[n]=Array.isArray(e[n])?[]:{},wf(e[n],t[n])):It(e[n])||(t[n]=!0);return t}function Y3(e,t,r){const n=Array.isArray(e);if(st(e)||n)for(const i in e)Array.isArray(e[i])||st(e[i])&&!X3(e[i])?Ye(t)||bf(r[i])?r[i]=Array.isArray(e[i])?wf(e[i],[]):{...wf(e[i])}:Y3(e[i],It(t)?{}:t[i],r[i]):r[i]=!Li(e[i],t[i]);return r}var Ws=(e,t)=>Y3(e,t,wf(t)),q3=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>Ye(e)?e:t?e===""?NaN:e&&+e:r&&Zr(e)?new Date(e):n?n(e):e;function xv(e){const t=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):t.disabled))return Pg(t)?t.files:Eg(t)?V3(e.refs).value:K3(t)?[...t.selectedOptions].map(({value:r})=>r):us(t)?G3(e.refs).value:q3(Ye(t.value)?e.ref.value:t.value,e)}var mC=(e,t,r,n)=>{const i={};for(const a of e){const o=te(t,a);o&&Le(i,a,o._f)}return{criteriaMode:r,names:[...e],fields:i,shouldUseNativeValidation:n}},cu=e=>Ye(e)?e:gf(e)?e.source:st(e)?gf(e.value)?e.value.source:e.value:e,gC=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function xw(e,t,r){const n=te(e,r);if(n||Ag(r))return{error:n,name:r};const i=r.split(".");for(;i.length;){const a=i.join("."),o=te(t,a),u=te(e,a);if(o&&!Array.isArray(o)&&r!==a)return{name:r};if(u&&u.type)return{name:a,error:u};i.pop()}return{name:r}}var bC=(e,t,r,n,i)=>i.isOnAll?!1:!r&&i.isOnTouch?!(t||e):(r?n.isOnBlur:i.isOnBlur)?!e:(r?n.isOnChange:i.isOnChange)?e:!0,wC=(e,t)=>!Hd(te(e,t)).length&&it(e,t);const SC={mode:Rr.onSubmit,reValidateMode:Rr.onChange,shouldFocusError:!0};function $C(e={}){let t={...SC,...e},r={submitCount:0,isDirty:!1,isLoading:Jn(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},n={},i=st(t.defaultValues)||st(t.values)?vr(t.defaultValues||t.values)||{}:{},a=t.shouldUnregister?{}:vr(i),o={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,s=0;const f={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},c={values:_v(),array:_v(),state:_v()},d=gw(t.mode),p=gw(t.reValidateMode),y=t.criteriaMode===Rr.all,m=A=>I=>{clearTimeout(s),s=setTimeout(A,I)},g=async A=>{if(f.isValid||A){const I=t.resolver?er((await O()).errors):await P(n,!0);I!==r.isValid&&c.state.next({isValid:I})}},h=(A,I)=>{(f.isValidating||f.validatingFields)&&((A||Array.from(u.mount)).forEach(M=>{M&&(I?Le(r.validatingFields,M,I):it(r.validatingFields,M))}),c.state.next({validatingFields:r.validatingFields,isValidating:!er(r.validatingFields)}))},v=(A,I=[],M,Z,q=!0,H=!0)=>{if(Z&&M){if(o.action=!0,H&&Array.isArray(te(n,A))){const re=M(te(n,A),Z.argA,Z.argB);q&&Le(n,A,re)}if(H&&Array.isArray(te(r.errors,A))){const re=M(te(r.errors,A),Z.argA,Z.argB);q&&Le(r.errors,A,re),wC(r.errors,A)}if(f.touchedFields&&H&&Array.isArray(te(r.touchedFields,A))){const re=M(te(r.touchedFields,A),Z.argA,Z.argB);q&&Le(r.touchedFields,A,re)}f.dirtyFields&&(r.dirtyFields=Ws(i,a)),c.state.next({name:A,isDirty:E(A,I),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Le(a,A,I)},b=(A,I)=>{Le(r.errors,A,I),c.state.next({errors:r.errors})},w=A=>{r.errors=A,c.state.next({errors:r.errors,isValid:!1})},S=(A,I,M,Z)=>{const q=te(n,A);if(q){const H=te(a,A,Ye(M)?te(i,A):M);Ye(H)||Z&&Z.defaultChecked||I?Le(a,A,I?H:xv(q._f)):z(A,H),o.mount&&g()}},$=(A,I,M,Z,q)=>{let H=!1,re=!1;const be={name:A},Ze=!!(te(n,A)&&te(n,A)._f&&te(n,A)._f.disabled);if(!M||Z){f.isDirty&&(re=r.isDirty,r.isDirty=be.isDirty=E(),H=re!==be.isDirty);const Qt=Ze||Li(te(i,A),I);re=!!(!Ze&&te(r.dirtyFields,A)),Qt||Ze?it(r.dirtyFields,A):Le(r.dirtyFields,A,!0),be.dirtyFields=r.dirtyFields,H=H||f.dirtyFields&&re!==!Qt}if(M){const Qt=te(r.touchedFields,A);Qt||(Le(r.touchedFields,A,M),be.touchedFields=r.touchedFields,H=H||f.touchedFields&&Qt!==M)}return H&&q&&c.state.next(be),H?be:{}},_=(A,I,M,Z)=>{const q=te(r.errors,A),H=f.isValid&&Yn(I)&&r.isValid!==I;if(e.delayError&&M?(l=m(()=>b(A,M)),l(e.delayError)):(clearTimeout(s),l=null,M?Le(r.errors,A,M):it(r.errors,A)),(M?!Li(q,M):q)||!er(Z)||H){const re={...Z,...H&&Yn(I)?{isValid:I}:{},errors:r.errors,name:A};r={...r,...re},c.state.next(re)}},O=async A=>{h(A,!0);const I=await t.resolver(a,t.context,mC(A||u.mount,n,t.criteriaMode,t.shouldUseNativeValidation));return h(A),I},T=async A=>{const{errors:I}=await O(A);if(A)for(const M of A){const Z=te(I,M);Z?Le(r.errors,M,Z):it(r.errors,M)}else r.errors=I;return I},P=async(A,I,M={valid:!0})=>{for(const Z in A){const q=A[Z];if(q){const{_f:H,...re}=q;if(H){const be=u.array.has(H.name);h([Z],!0);const Ze=await Ow(q,a,y,t.shouldUseNativeValidation&&!I,be);if(h([Z]),Ze[H.name]&&(M.valid=!1,I))break;!I&&(te(Ze,H.name)?be?pC(r.errors,Ze,H.name):Le(r.errors,H.name,Ze[H.name]):it(r.errors,H.name))}re&&await P(re,I,M)}}return M.valid},k=()=>{for(const A of u.unMount){const I=te(n,A);I&&(I._f.refs?I._f.refs.every(M=>!Ov(M)):!Ov(I._f.ref))&&Pe(A)}u.unMount=new Set},E=(A,I)=>(A&&I&&Le(a,A,I),!Li(Y(),i)),C=(A,I,M)=>fC(A,u,{...o.mount?a:Ye(I)?i:Zr(A)?{[A]:I}:I},M,I),N=A=>Hd(te(o.mount?a:i,A,e.shouldUnregister?te(i,A,[]):[])),z=(A,I,M={})=>{const Z=te(n,A);let q=I;if(Z){const H=Z._f;H&&(!H.disabled&&Le(a,A,q3(I,H)),q=mf(H.ref)&&It(I)?"":I,K3(H.ref)?[...H.ref.options].forEach(re=>re.selected=q.includes(re.value)):H.refs?us(H.ref)?H.refs.length>1?H.refs.forEach(re=>(!re.defaultChecked||!re.disabled)&&(re.checked=Array.isArray(q)?!!q.find(be=>be===re.value):q===re.value)):H.refs[0]&&(H.refs[0].checked=!!q):H.refs.forEach(re=>re.checked=re.value===q):Pg(H.ref)?H.ref.value="":(H.ref.value=q,H.ref.type||c.values.next({name:A,values:{...a}})))}(M.shouldDirty||M.shouldTouch)&&$(A,q,M.shouldTouch,M.shouldDirty,!0),M.shouldValidate&&U(A)},F=(A,I,M)=>{for(const Z in I){const q=I[Z],H=`${A}.${Z}`,re=te(n,H);(u.array.has(A)||!bf(q)||re&&!re._f)&&!Ma(q)?F(H,q,M):z(H,q,M)}},B=(A,I,M={})=>{const Z=te(n,A),q=u.array.has(A),H=vr(I);Le(a,A,H),q?(c.array.next({name:A,values:{...a}}),(f.isDirty||f.dirtyFields)&&M.shouldDirty&&c.state.next({name:A,dirtyFields:Ws(i,a),isDirty:E(A,H)})):Z&&!Z._f&&!It(H)?F(A,H,M):z(A,H,M),bw(A,u)&&c.state.next({...r}),c.values.next({name:o.mount?A:void 0,values:{...a}})},j=async A=>{o.mount=!0;const I=A.target;let M=I.name,Z=!0;const q=te(n,M),H=()=>I.type?xv(q._f):iC(A),re=be=>{Z=Number.isNaN(be)||be===te(a,M,be)};if(q){let be,Ze;const Qt=H(),da=A.type===mw.BLUR||A.type===mw.FOCUS_OUT,TT=!gC(q._f)&&!t.resolver&&!te(r.errors,M)&&!q._f.deps||bC(da,te(r.touchedFields,M),r.isSubmitted,p,d),Gp=bw(M,u,da);Le(a,M,Qt),da?(q._f.onBlur&&q._f.onBlur(A),l&&l(0)):q._f.onChange&&q._f.onChange(A);const Vp=$(M,Qt,da,!1),kT=!er(Vp)||Gp;if(!da&&c.values.next({name:M,type:A.type,values:{...a}}),TT)return f.isValid&&g(),kT&&c.state.next({name:M,...Gp?{}:Vp});if(!da&&Gp&&c.state.next({...r}),t.resolver){const{errors:K1}=await O([M]);if(re(Qt),Z){const CT=xw(r.errors,n,M),X1=xw(K1,n,CT.name||M);be=X1.error,M=X1.name,Ze=er(K1)}}else h([M],!0),be=(await Ow(q,a,y,t.shouldUseNativeValidation))[M],h([M]),re(Qt),Z&&(be?Ze=!1:f.isValid&&(Ze=await P(n,!0)));Z&&(q._f.deps&&U(q._f.deps),_(M,Ze,be,Vp))}},L=(A,I)=>{if(te(r.errors,I)&&A.focus)return A.focus(),1},U=async(A,I={})=>{let M,Z;const q=zc(A);if(t.resolver){const H=await T(Ye(A)?A:q);M=er(H),Z=A?!q.some(re=>te(H,re)):M}else A?(Z=(await Promise.all(q.map(async H=>{const re=te(n,H);return await P(re&&re._f?{[H]:re}:re)}))).every(Boolean),!(!Z&&!r.isValid)&&g()):Z=M=await P(n);return c.state.next({...!Zr(A)||f.isValid&&M!==r.isValid?{}:{name:A},...t.resolver||!A?{isValid:M}:{},errors:r.errors}),I.shouldFocus&&!Z&&Ku(n,L,A?q:u.mount),Z},Y=A=>{const I={...o.mount?a:i};return Ye(A)?I:Zr(A)?te(I,A):A.map(M=>te(I,M))},G=(A,I)=>({invalid:!!te((I||r).errors,A),isDirty:!!te((I||r).dirtyFields,A),error:te((I||r).errors,A),isValidating:!!te(r.validatingFields,A),isTouched:!!te((I||r).touchedFields,A)}),ne=A=>{A&&zc(A).forEach(I=>it(r.errors,I)),c.state.next({errors:A?r.errors:{}})},ce=(A,I,M)=>{const Z=(te(n,A,{_f:{}})._f||{}).ref,q=te(r.errors,A)||{},{ref:H,message:re,type:be,...Ze}=q;Le(r.errors,A,{...Ze,...I,ref:Z}),c.state.next({name:A,errors:r.errors,isValid:!1}),M&&M.shouldFocus&&Z&&Z.focus&&Z.focus()},Ae=(A,I)=>Jn(A)?c.values.subscribe({next:M=>A(C(void 0,I),M)}):C(A,I,!0),Pe=(A,I={})=>{for(const M of A?zc(A):u.mount)u.mount.delete(M),u.array.delete(M),I.keepValue||(it(n,M),it(a,M)),!I.keepError&&it(r.errors,M),!I.keepDirty&&it(r.dirtyFields,M),!I.keepTouched&&it(r.touchedFields,M),!I.keepIsValidating&&it(r.validatingFields,M),!t.shouldUnregister&&!I.keepDefaultValue&&it(i,M);c.values.next({values:{...a}}),c.state.next({...r,...I.keepDirty?{isDirty:E()}:{}}),!I.keepIsValid&&g()},Ee=({disabled:A,name:I,field:M,fields:Z,value:q})=>{if(Yn(A)&&o.mount||A){const H=A?void 0:Ye(q)?xv(M?M._f:te(Z,I)._f):q;Le(a,I,H),$(I,H,!1,!1,!0)}},rt=(A,I={})=>{let M=te(n,A);const Z=Yn(I.disabled);return Le(n,A,{...M||{},_f:{...M&&M._f?M._f:{ref:{name:A}},name:A,mount:!0,...I}}),u.mount.add(A),M?Ee({field:M,disabled:I.disabled,name:A,value:I.value}):S(A,!0,I.value),{...Z?{disabled:I.disabled}:{},...t.progressive?{required:!!I.required,min:cu(I.min),max:cu(I.max),minLength:cu(I.minLength),maxLength:cu(I.maxLength),pattern:cu(I.pattern)}:{},name:A,onChange:j,onBlur:j,ref:q=>{if(q){rt(A,I),M=te(n,A);const H=Ye(q.value)&&q.querySelectorAll&&q.querySelectorAll("input,select,textarea")[0]||q,re=yC(H),be=M._f.refs||[];if(re?be.find(Ze=>Ze===H):H===M._f.ref)return;Le(n,A,{_f:{...M._f,...re?{refs:[...be.filter(Ov),H,...Array.isArray(te(i,A))?[{}]:[]],ref:{type:H.type,name:A}}:{ref:H}}}),S(A,!1,void 0,H)}else M=te(n,A,{}),M._f&&(M._f.mount=!1),(t.shouldUnregister||I.shouldUnregister)&&!(oC(u.array,A)&&o.action)&&u.unMount.add(A)}}},Q=()=>t.shouldFocusError&&Ku(n,L,u.mount),ie=A=>{Yn(A)&&(c.state.next({disabled:A}),Ku(n,(I,M)=>{const Z=te(n,M);Z&&(I.disabled=Z._f.disabled||A,Array.isArray(Z._f.refs)&&Z._f.refs.forEach(q=>{q.disabled=Z._f.disabled||A}))},0,!1))},ue=(A,I)=>async M=>{let Z;M&&(M.preventDefault&&M.preventDefault(),M.persist&&M.persist());let q=vr(a);if(c.state.next({isSubmitting:!0}),t.resolver){const{errors:H,values:re}=await O();r.errors=H,q=re}else await P(n);if(it(r.errors,"root"),er(r.errors)){c.state.next({errors:{}});try{await A(q,M)}catch(H){Z=H}}else I&&await I({...r.errors},M),Q(),setTimeout(Q);if(c.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:er(r.errors)&&!Z,submitCount:r.submitCount+1,errors:r.errors}),Z)throw Z},R=(A,I={})=>{te(n,A)&&(Ye(I.defaultValue)?B(A,vr(te(i,A))):(B(A,I.defaultValue),Le(i,A,vr(I.defaultValue))),I.keepTouched||it(r.touchedFields,A),I.keepDirty||(it(r.dirtyFields,A),r.isDirty=I.defaultValue?E(A,vr(te(i,A))):E()),I.keepError||(it(r.errors,A),f.isValid&&g()),c.state.next({...r}))},ze=(A,I={})=>{const M=A?vr(A):i,Z=vr(M),q=er(A),H=q?i:Z;if(I.keepDefaultValues||(i=M),!I.keepValues){if(I.keepDirtyValues)for(const re of u.mount)te(r.dirtyFields,re)?Le(H,re,te(a,re)):B(re,te(H,re));else{if(xg&&Ye(A))for(const re of u.mount){const be=te(n,re);if(be&&be._f){const Ze=Array.isArray(be._f.refs)?be._f.refs[0]:be._f.ref;if(mf(Ze)){const Qt=Ze.closest("form");if(Qt){Qt.reset();break}}}}n={}}a=e.shouldUnregister?I.keepDefaultValues?vr(i):{}:vr(H),c.array.next({values:{...H}}),c.values.next({values:{...H}})}u={mount:I.keepDirtyValues?u.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!f.isValid||!!I.keepIsValid||!!I.keepDirtyValues,o.watch=!!e.shouldUnregister,c.state.next({submitCount:I.keepSubmitCount?r.submitCount:0,isDirty:q?!1:I.keepDirty?r.isDirty:!!(I.keepDefaultValues&&!Li(A,i)),isSubmitted:I.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:q?{}:I.keepDirtyValues?I.keepDefaultValues&&a?Ws(i,a):r.dirtyFields:I.keepDefaultValues&&A?Ws(i,A):I.keepDirty?r.dirtyFields:{},touchedFields:I.keepTouched?r.touchedFields:{},errors:I.keepErrors?r.errors:{},isSubmitSuccessful:I.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},he=(A,I)=>ze(Jn(A)?A(a):A,I);return{control:{register:rt,unregister:Pe,getFieldState:G,handleSubmit:ue,setError:ce,_executeSchema:O,_getWatch:C,_getDirty:E,_updateValid:g,_removeUnmounted:k,_updateFieldArray:v,_updateDisabledField:Ee,_getFieldArray:N,_reset:ze,_resetDefaultValues:()=>Jn(t.defaultValues)&&t.defaultValues().then(A=>{he(A,t.resetOptions),c.state.next({isLoading:!1})}),_updateFormState:A=>{r={...r,...A}},_disableForm:ie,_subjects:c,_proxyFormState:f,_setErrors:w,get _fields(){return n},get _formValues(){return a},get _state(){return o},set _state(A){o=A},get _defaultValues(){return i},get _names(){return u},set _names(A){u=A},get _formState(){return r},set _formState(A){r=A},get _options(){return t},set _options(A){t={...t,...A}}},trigger:U,register:rt,handleSubmit:ue,watch:Ae,setValue:B,getValues:Y,reset:he,resetField:R,clearErrors:ne,unregister:Pe,setError:ce,setFocus:(A,I={})=>{const M=te(n,A),Z=M&&M._f;if(Z){const q=Z.refs?Z.refs[0]:Z.ref;q.focus&&(q.focus(),I.shouldSelect&&q.select())}},getFieldState:G}}function _C(e={}){const t=x.useRef(),r=x.useRef(),[n,i]=x.useState({isDirty:!1,isValidating:!1,isLoading:Jn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Jn(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...$C(e),formState:n});const a=t.current.control;return a._options=e,cC({subject:a._subjects.state,next:o=>{sC(o,a._proxyFormState,a._updateFormState)&&i({...a._formState})}}),x.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),x.useEffect(()=>{if(a._proxyFormState.isDirty){const o=a._getDirty();o!==n.isDirty&&a._subjects.state.next({isDirty:o})}},[a,n.isDirty]),x.useEffect(()=>{e.values&&!Li(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,i(o=>({...o}))):a._resetDefaultValues()},[e.values,a]),x.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),x.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),x.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),t.current.formState=lC(n,a),t.current}var Q3={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ch=x.createContext&&x.createContext(Q3),OC=["attr","size","title"];function xC(e,t){if(e==null)return{};var r=AC(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function AC(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function Sf(){return Sf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Sf.apply(this,arguments)}function Aw(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Aw(Object(r),!0).forEach(function(n){PC(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Aw(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function PC(e,t,r){return t=EC(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function EC(e){var t=TC(e,"string");return typeof t=="symbol"?t:t+""}function TC(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Z3(e){return e&&e.map((t,r)=>x.createElement(t.tag,$f({key:r},t.attr),Z3(t.child)))}function J3(e){return t=>x.createElement(kC,Sf({attr:$f({},e.attr)},t),Z3(e.child))}function kC(e){var t=r=>{var{attr:n,size:i,title:a}=e,o=xC(e,OC),u=i||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),x.createElement("svg",Sf({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,o,{className:l,style:$f($f({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&x.createElement("title",null,a),e.children)};return Ch!==void 0?x.createElement(Ch.Consumer,null,r=>t(r)):t(Q3)}function CC(e){return J3({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.707 2.293A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707l-5-5zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"},child:[]}]})(e)}const IC=Ne.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
`,jC=Ne.p`
  color: red;
  line-height: 7rem;
  font-size: 9rem;
  text-align: center;
`,NC=Ne.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
`;function MC(){return X.jsxs(IC,{children:[X.jsx(jC,{children:X.jsx(CC,{})}),X.jsx(NC,{children:"Ooops, something went wrong. Try reloading the page!"})]})}const DC=Ne.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,LC=nC`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg
  }
`,RC=Ne.span`
  display: flex;
  height: 5rem;
  width: 5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  animation: ${LC} linear 1.5s infinite;
  color: #ffffff;
  border: solid transparent 20px;
  border-radius: 99999px;
  border-inline-end-color: #050105;
`;function eP(){return X.jsx(DC,{children:X.jsx(RC,{})})}const FC=Ne.form`
  display: flex;
  justify-content: space-around;
  align-self: center;
  width: 60%;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: #eceae6;
  box-shadow: 2px 2px 2px inset lightgrey;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`,Av=Ne.select`
  border-style: hidden;
  background-color: #e1dddd;
  box-shadow: 3px 3px 3px inset lightgrey;
  border-radius: 5px;
  text-align: center;
  padding: 3px;
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`,BC=Ne.input`
  border-style: hidden;
  box-shadow: 3px 3px 3px inset lightgrey;
  background-color: #e1dddd;
  border-radius: 5px;
  text-align: center;
  padding: 3px;
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`,Hs=Ne.label`
  font-size: large;
  margin-right: 6px;
  font-weight: 600;
`,zC=Ne.button`
  font-size: small;
  font-weight: 600;
  border-style: hidden;
  box-shadow: 3px 3px 3px inset lightgrey;
  background-color: #e1dddd;
  margin-left: 10px;
  border-radius: 5px;
  max-height: 3rem;
  padding: 4px;
  padding-right: 7px;
  padding-left: 7px;
  align-self: center;

  &:hover:enabled {
    background-color: #ffffd9;
  }

  &:active:enabled {
    background-color: #f9cccc;
  }
`,UC=[0,.05,.1,.5,1,2,3,5,10,25,50,100];function WC({setResults:e,setChartData:t,setExpected:r,setIsRolling:n,isRolling:i}){const{register:a,handleSubmit:o,formState:{errors:u,isLoading:l}}=_C(),[s,f]=V.useState(null);V.useEffect(()=>{const d=new URL("data:video/mp2t;base64,aW1wb3J0IHsNCiAgYXZlcmFnaW5nLA0KICBnZW5lcmF0ZUNoYXJ0RGF0YSwNCiAgcmFuZG9tUmVzdWx0cywNCn0gZnJvbSAiLi91dGlsaXR5RnVuY3Rpb25zIjsNCg0Kb25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7DQogIGNvbnNvbGUubG9nKCJoZWkiKTsNCiAgY29uc3QgeyBiYXRjaENvdW50LCByb2xsQ291bnQsIHJhbmdlQ291bnQsIGNoZWF0RGljZSB9ID0gZXZlbnQuZGF0YTsNCiAgY29uc3QgcmVzQXJyYXkgPSByYW5kb21SZXN1bHRzKGJhdGNoQ291bnQsIHJvbGxDb3VudCwgcmFuZ2VDb3VudCwgY2hlYXREaWNlKTsNCiAgY29uc3QgY3J5cHRvZ3JhcGhpY1Jlc0FycmF5ID0gcmFuZG9tUmVzdWx0cygNCiAgICBiYXRjaENvdW50LA0KICAgIHJvbGxDb3VudCwNCiAgICByYW5nZUNvdW50LA0KICAgIGNoZWF0RGljZSwNCiAgICAiY3J5cHRvIg0KICApOw0KDQogIGNvbnN0IGF2ZXJhZ2VUaHJvd3MgPSBhdmVyYWdpbmcocmVzQXJyYXksIGJhdGNoQ291bnQpOw0KICBjb25zdCBjaGFydERhdGEgPSBnZW5lcmF0ZUNoYXJ0RGF0YShhdmVyYWdlVGhyb3dzLCByb2xsQ291bnQpOw0KICBjb25zdCBjcnlwdG9BdmVyYWdlVGhyb3dzID0gYXZlcmFnaW5nKGNyeXB0b2dyYXBoaWNSZXNBcnJheSwgYmF0Y2hDb3VudCk7DQogIGNvbnN0IGNyeXB0b0NoYXJ0RGF0YSA9IGdlbmVyYXRlQ2hhcnREYXRhKGNyeXB0b0F2ZXJhZ2VUaHJvd3MsIHJvbGxDb3VudCk7DQogIGNvbnN0IGV4cGVjdGVkID0gYXZlcmFnZVRocm93cy5tYXAoKF9lbCkgPT4gcm9sbENvdW50IC8gcmFuZ2VDb3VudCk7DQogIHBvc3RNZXNzYWdlKHsNCiAgICByZXNBcnJheSwNCiAgICBjcnlwdG9ncmFwaGljUmVzQXJyYXksDQogICAgY2hhcnREYXRhLA0KICAgIGNyeXB0b0NoYXJ0RGF0YSwNCiAgICBleHBlY3RlZCwNCiAgfSk7DQp9Ow0K",import.meta.url),p=new Worker(d,{type:"module"});return p.onmessage=function(y){const{chartData:m,cryptoChartData:g,resArray:h,cryptographicResArray:v,expected:b}=y.data;e({regResults:h,cryptoResults:v}),t({regChartData:m,cryptoChartData:g}),r(b),n(!1)},f(p),()=>{p.terminate()}},[t,r,n,e]);function c(d,p){p==null||p.preventDefault();const{rangeCount:y,batchCount:m,rollCount:g,cheatDice:h}=d;n(!0),g&&s&&s.postMessage({rangeCount:y,batchCount:m,rollCount:g,cheatDice:h})}return Object.keys(u).length>0?X.jsx(MC,{}):l?X.jsx(eP,{}):X.jsxs(FC,{onSubmit:o(c),children:[X.jsxs("span",{children:[X.jsx(Hs,{htmlFor:"rangeCount",children:"Range (D ̽ ) "}),X.jsx(Av,{defaultValue:6,...a("rangeCount",{valueAsNumber:!0}),disabled:i,children:new Array(99).fill(null).map((d,p)=>X.jsx("option",{value:p+2,children:p+2},p))})]}),X.jsxs("span",{children:[X.jsx(Hs,{htmlFor:"rollCount",children:"Rolls per batch"}),X.jsx(BC,{type:"number",min:"1",max:"100000",defaultValue:1e3,required:!0,pattern:"\\d+",...a("rollCount",{valueAsNumber:!0}),disabled:i})]})," ",X.jsxs("span",{children:[X.jsx(Hs,{htmlFor:"batchCount",children:"Test batches"}),X.jsx(Av,{defaultValue:20,...a("batchCount",{valueAsNumber:!0}),disabled:i,children:new Array(50).fill(null).map((d,p)=>X.jsx("option",{value:p+1,children:p+1},p))})]}),X.jsxs("span",{children:[X.jsx(Hs,{htmlFor:"cheatDice",children:"Cheat!"}),X.jsx(Av,{defaultValue:0,...a("cheatDice",{valueAsNumber:!0}),disabled:i,children:UC.map((d,p)=>X.jsx("option",{value:d,children:`${d}%`},p))})]}),X.jsx(zC,{type:"submit",disabled:i,children:"Compute"})]})}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function HC(e){return e!==e}var GC=HC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VC=GC,Ft=VC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KC=Number.POSITIVE_INFINITY,Xt=KC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XC=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YC=XC,qC=YC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QC=qC,ZC=QC.NEGATIVE_INFINITY,Pr=ZC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JC=Xt,eI=Pr;function tI(e){return e===JC||e===eI}var rI=tI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nI=rI,ls=nI;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function iI(e){return Math.abs(e)}var aI=iI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oI=aI,Yt=oI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function uI(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var lI=uI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sI=lI,cI=sI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fI=cI,dI=fI();function pI(){return dI&&typeof Symbol.toStringTag=="symbol"}var vI=pI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hI=vI,yI=hI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mI=Object.prototype.toString,tP=mI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gI=tP;function bI(e){return gI.call(e)}var wI=bI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SI=Object.prototype.hasOwnProperty;function $I(e,t){return e==null?!1:SI.call(e,t)}var _I=$I;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OI=_I,xI=OI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AI=typeof Symbol=="function"?Symbol:void 0,PI=AI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EI=PI,TI=EI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pw=TI,kI=typeof Pw=="function"?Pw.toStringTag:"",CI=kI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var II=xI,fu=CI,Pv=tP;function jI(e){var t,r,n;if(e==null)return Pv.call(e);r=e[fu],t=II(e,fu);try{e[fu]=void 0}catch{return Pv.call(e)}return n=Pv.call(e),t?e[fu]=r:delete e[fu],n}var NI=jI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MI=yI,DI=wI,LI=NI,Ih;MI()?Ih=LI:Ih=DI;var Gd=Ih;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RI=Gd,FI=typeof Uint32Array=="function";function BI(e){return FI&&e instanceof Uint32Array||RI(e)==="[object Uint32Array]"}var zI=BI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UI=zI,WI=UI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HI=4294967295,GI=HI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VI=typeof Uint32Array=="function"?Uint32Array:null,KI=VI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XI=WI,Ev=GI,Ew=KI;function YI(){var e,t;if(typeof Ew!="function")return!1;try{t=[1,3.14,-3.14,Ev+1,Ev+2],t=new Ew(t),e=XI(t)&&t[0]===1&&t[1]===3&&t[2]===Ev-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var qI=YI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QI=qI,ZI=QI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JI=typeof Uint32Array=="function"?Uint32Array:void 0,e9=JI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function t9(){throw new Error("not implemented")}var r9=t9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n9=ZI,i9=e9,a9=r9,jh;n9()?jh=i9:jh=a9;var Lo=jh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o9=Gd,u9=typeof Float64Array=="function";function l9(e){return u9&&e instanceof Float64Array||o9(e)==="[object Float64Array]"}var s9=l9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c9=s9,f9=c9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d9=typeof Float64Array=="function"?Float64Array:null,p9=d9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v9=f9,Tw=p9;function h9(){var e,t;if(typeof Tw!="function")return!1;try{t=new Tw([1,3.14,-3.14,NaN]),e=v9(t)&&t[0]===1&&t[1]===3.14&&t[2]===-3.14&&t[3]!==t[3]}catch{e=!1}return e}var y9=h9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m9=y9,g9=m9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b9=typeof Float64Array=="function"?Float64Array:void 0,w9=b9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function S9(){throw new Error("not implemented")}var $9=S9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _9=g9,O9=w9,x9=$9,Nh;_9()?Nh=O9:Nh=x9;var Ro=Nh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A9=Gd,P9=typeof Uint8Array=="function";function E9(e){return P9&&e instanceof Uint8Array||A9(e)==="[object Uint8Array]"}var T9=E9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k9=T9,C9=k9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I9=255,j9=I9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N9=typeof Uint8Array=="function"?Uint8Array:null,M9=N9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D9=C9,Tv=j9,kw=M9;function L9(){var e,t;if(typeof kw!="function")return!1;try{t=[1,3.14,-3.14,Tv+1,Tv+2],t=new kw(t),e=D9(t)&&t[0]===1&&t[1]===3&&t[2]===Tv-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var R9=L9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F9=R9,B9=F9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z9=typeof Uint8Array=="function"?Uint8Array:void 0,U9=z9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function W9(){throw new Error("not implemented")}var H9=W9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G9=B9,V9=U9,K9=H9,Mh;G9()?Mh=V9:Mh=K9;var X9=Mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y9=Gd,q9=typeof Uint16Array=="function";function Q9(e){return q9&&e instanceof Uint16Array||Y9(e)==="[object Uint16Array]"}var Z9=Q9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J9=Z9,ej=J9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tj=65535,rj=tj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nj=typeof Uint16Array=="function"?Uint16Array:null,ij=nj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aj=ej,kv=rj,Cw=ij;function oj(){var e,t;if(typeof Cw!="function")return!1;try{t=[1,3.14,-3.14,kv+1,kv+2],t=new Cw(t),e=aj(t)&&t[0]===1&&t[1]===3&&t[2]===kv-2&&t[3]===0&&t[4]===1}catch{e=!1}return e}var uj=oj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lj=uj,sj=lj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cj=typeof Uint16Array=="function"?Uint16Array:void 0,fj=cj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dj(){throw new Error("not implemented")}var pj=dj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vj=sj,hj=fj,yj=pj,Dh;vj()?Dh=hj:Dh=yj;var mj=Dh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gj=X9,bj=mj,wj={uint16:bj,uint8:gj},Sj=wj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iw=Sj,rP;function $j(){var e,t;return e=new Iw.uint16(1),e[0]=4660,t=new Iw.uint8(e.buffer),t[0]===52}rP=$j();var _j=rP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oj=_j,Fo=Oj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xj=Fo,Lh;xj===!0?Lh=1:Lh=0;var Aj=Lh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pj=Lo,Ej=Ro,Tj=Aj,nP=new Ej(1),kj=new Pj(nP.buffer);function Cj(e){return nP[0]=e,kj[Tj]}var Ij=Cj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jj=Ij,Er=jj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nj=Fo,Rh;Nj===!0?Rh=1:Rh=0;var Mj=Rh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dj=Lo,Lj=Ro,Rj=Mj,Fh=new Lj(1),Fj=new Dj(Fh.buffer);function Bj(e,t){return Fh[0]=e,Fj[Rj]=t>>>0,Fh[0]}var zj=Bj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uj=zj,ss=Uj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wj=1023,oa=Wj;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hj(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var Gj=Hj;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vj(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var Kj=Vj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var jw=Er,Xj=ss,Yj=Ft,qj=oa,Qj=Pr,Zj=Gj,Jj=Kj,Gs=.6931471803691238,Vs=19082149292705877e-26,e7=0x40000000000000,t7=.3333333333333333,Nw=1048575,r7=2146435072,n7=1048576,i7=1072693248;function a7(e){var t,r,n,i,a,o,u,l,s,f,c,d;return e===0?Qj:Yj(e)||e<0?NaN:(r=jw(e),a=0,r<n7&&(a-=54,e*=e7,r=jw(e)),r>=r7?e+e:(a+=(r>>20)-qj|0,r&=Nw,l=r+614244&1048576|0,e=Xj(e,r|l^i7),a+=l>>20|0,u=e-1,(Nw&2+r)<3?u===0?a===0?0:a*Gs+a*Vs:(o=u*u*(.5-t7*u),a===0?u-o:a*Gs-(o-a*Vs-u)):(f=u/(2+u),d=f*f,l=r-398458|0,c=d*d,s=440401-r|0,i=c*Zj(c),n=d*Jj(c),l|=s,o=n+i,l>0?(t=.5*u*u,a===0?u-(t-f*(t+o)):a*Gs-(t-(f*(t+o)+a*Vs)-u)):a===0?u-f*(u-o):a*Gs-(f*(u-o)-a*Vs-u))))}var o7=a7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u7=o7,ua=u7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l7=Math.floor,s7=l7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c7=s7,cs=c7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f7=Math.ceil,d7=f7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p7=d7,v7=p7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h7=cs,y7=v7;function m7(e){return e<0?y7(e):h7(e)}var g7=m7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b7=g7,Tg=b7;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function w7(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var S7=w7;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $7(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var _7=$7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var O7=S7,x7=_7;function A7(e,t){var r,n,i,a;return a=e*e,i=a*a,n=a*O7(a),n+=i*i*x7(a),r=.5*a,i=1-r,i+(1-i-r+(a*n-e*t))}var P7=A7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E7=P7,iP=E7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Mw=-.16666666666666632,T7=.00833333333332249,k7=-.0001984126982985795,C7=27557313707070068e-22,I7=-25050760253406863e-24,j7=158969099521155e-24;function N7(e,t){var r,n,i,a;return a=e*e,i=a*a,r=T7+a*(k7+a*C7)+a*i*(I7+a*j7),n=a*e,t===0?e+n*(Mw+a*r):e-(a*(.5*t-n*r)-t-n*Mw)}var M7=N7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D7=M7,aP=D7;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L7=2147483647,Bo=L7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R7=2146435072,kg=R7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F7=1048575,oP=F7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B7=Fo,Bh;B7===!0?Bh=0:Bh=1;var z7=Bh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U7=Lo,W7=Ro,H7=z7,uP=new W7(1),G7=new U7(uP.buffer);function V7(e){return uP[0]=e,G7[H7]}var K7=V7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X7=K7,Y7=X7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q7=Fo,lP,zh,Uh;q7===!0?(zh=1,Uh=0):(zh=0,Uh=1);lP={HIGH:zh,LOW:Uh};var Q7=lP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z7=Lo,J7=Ro,sP=Q7,cP=new J7(1),Dw=new Z7(cP.buffer),eN=sP.HIGH,tN=sP.LOW;function rN(e,t){return Dw[eN]=e,Dw[tN]=t,cP[0]}var nN=rN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iN=nN,Vd=iN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aN=1023,oN=aN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uN=-1023,lN=uN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sN=-1074,cN=sN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fN=2147483648,dN=fN;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pN=typeof Object.defineProperty=="function"?Object.defineProperty:null,vN=pN;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hN=vN;function yN(){try{return hN({},"x",{}),!0}catch{return!1}}var mN=yN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gN=Object.defineProperty,bN=gN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wN(e){return typeof e=="number"}var fP=wN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function SN(e){return e[0]==="-"}function Lw(e){var t="",r;for(r=0;r<e;r++)t+="0";return t}function $N(e,t,r){var n=!1,i=t-e.length;return i<0||(SN(e)&&(n=!0,e=e.substr(1)),e=r?e+Lw(i):Lw(i)+e,n&&(e="-"+e)),e}var dP=$N;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _N=fP,Rw=dP,ON=String.prototype.toLowerCase,Fw=String.prototype.toUpperCase;function xN(e){var t,r,n;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;case"d":case"i":case"u":default:t=10;break}if(r=e.arg,n=parseInt(r,10),!isFinite(n)){if(!_N(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&(e.specifier==="u"||t!==10)&&(n=4294967295+n+1),n<0?(r=(-n).toString(t),e.precision&&(r=Rw(r,e.precision,e.padRight)),r="-"+r):(r=n.toString(t),!n&&!e.precision?r="":e.precision&&(r=Rw(r,e.precision,e.padRight)),e.sign&&(r=e.sign+r)),t===16&&(e.alternate&&(r="0x"+r),r=e.specifier===Fw.call(e.specifier)?Fw.call(r):ON.call(r)),t===8&&e.alternate&&r.charAt(0)!=="0"&&(r="0"+r),r}var AN=xN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function PN(e){return typeof e=="string"}var EN=PN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TN=fP,kN=Math.abs,CN=String.prototype.toLowerCase,Bw=String.prototype.toUpperCase,_i=String.prototype.replace,IN=/e\+(\d)$/,jN=/e-(\d)$/,NN=/^(\d+)$/,MN=/^(\d+)e/,DN=/\.0$/,LN=/\.0*e/,RN=/(\..*[^0])0*e/;function FN(e){var t,r,n=parseFloat(e.arg);if(!isFinite(n)){if(!TN(e.arg))throw new Error("invalid floating-point number. Value: "+r);n=e.arg}switch(e.specifier){case"e":case"E":r=n.toExponential(e.precision);break;case"f":case"F":r=n.toFixed(e.precision);break;case"g":case"G":kN(n)<1e-4?(t=e.precision,t>0&&(t-=1),r=n.toExponential(t)):r=n.toPrecision(e.precision),e.alternate||(r=_i.call(r,RN,"$1e"),r=_i.call(r,LN,"e"),r=_i.call(r,DN,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=_i.call(r,IN,"e+0$1"),r=_i.call(r,jN,"e-0$1"),e.alternate&&(r=_i.call(r,NN,"$1."),r=_i.call(r,MN,"$1.e")),n>=0&&e.sign&&(r=e.sign+r),r=e.specifier===Bw.call(e.specifier)?Bw.call(r):CN.call(r),r}var BN=FN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zw(e){var t="",r;for(r=0;r<e;r++)t+=" ";return t}function zN(e,t,r){var n=t-e.length;return n<0||(e=r?e+zw(n):zw(n)+e),e}var UN=zN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WN=AN,HN=EN,GN=BN,VN=UN,KN=dP,XN=String.fromCharCode,Ks=isNaN,YN=Array.isArray;function qN(e){var t={};return t.specifier=e.specifier,t.precision=e.precision===void 0?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function QN(e){var t,r,n,i,a,o,u,l,s;if(!YN(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,l=0;l<e.length;l++)if(n=e[l],HN(n))o+=n;else{if(t=n.precision!==void 0,n=qN(n),!n.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,s=0;s<r.length;s++)switch(i=r.charAt(s),i){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if(n.width==="*"){if(n.width=parseInt(arguments[u],10),u+=1,Ks(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&n.precision==="*"){if(n.precision=parseInt(arguments[u],10),u+=1,Ks(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=WN(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!Ks(n.arg)){if(a=parseInt(n.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ks(a)?String(n.arg):XN(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=GN(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=KN(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=VN(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var ZN=QN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JN=ZN,eM=JN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xs=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function tM(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return e[4]==="."&&e[5]===void 0&&(t.precision="1"),t}function rM(e){var t,r,n,i;for(r=[],i=0,n=Xs.exec(e);n;)t=e.slice(i,Xs.lastIndex-n[0].length),t.length&&r.push(t),r.push(tM(n)),i=Xs.lastIndex,n=Xs.exec(e);return t=e.slice(i),t.length&&r.push(t),r}var nM=rM;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iM=nM,aM=iM;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function oM(e){return typeof e=="string"}var uM=oM;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lM=eM,sM=aM,cM=uM;function pP(e){var t,r;if(!cM(e))throw new TypeError(pP("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[sM(e)],r=1;r<arguments.length;r++)t.push(arguments[r]);return lM.apply(null,t)}var fM=pP;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dM=fM,pM=dM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uw=pM,zo=Object.prototype,Ww=zo.toString,Hw=zo.__defineGetter__,Gw=zo.__defineSetter__,vM=zo.__lookupGetter__,hM=zo.__lookupSetter__;function yM(e,t,r){var n,i,a,o;if(typeof e!="object"||e===null||Ww.call(e)==="[object Array]")throw new TypeError(Uw("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof r!="object"||r===null||Ww.call(r)==="[object Array]")throw new TypeError(Uw("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if(i="value"in r,i&&(vM.call(e,t)||hM.call(e,t)?(n=e.__proto__,e.__proto__=zo,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),a="get"in r,o="set"in r,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Hw&&Hw.call(e,t,r.get),o&&Gw&&Gw.call(e,t,r.set),e}var mM=yM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gM=mN,bM=bN,wM=mM,Wh;gM()?Wh=bM:Wh=wM;var SM=Wh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $M=SM;function _M(e,t,r){$M(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var OM=_M;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xM=OM,Cg=xM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AM=Fo,vP,Hh,Gh;AM===!0?(Hh=1,Gh=0):(Hh=0,Gh=1);vP={HIGH:Hh,LOW:Gh};var PM=vP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EM=Lo,TM=Ro,hP=PM,yP=new TM(1),Vw=new EM(yP.buffer),kM=hP.HIGH,CM=hP.LOW;function IM(e,t,r,n){return yP[0]=e,t[n]=Vw[kM],t[n+r]=Vw[CM],t}var mP=IM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jM=mP;function NM(e){return jM(e,[0,0],1,0)}var MM=NM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DM=Cg,gP=MM,LM=mP;DM(gP,"assign",LM);var Ig=gP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RM=dN,FM=Bo,BM=Ig,zM=Er,UM=Vd,Cv=[0,0];function WM(e,t){var r,n;return BM.assign(e,Cv,1,0),r=Cv[0],r&=FM,n=zM(t),n&=RM,r|=n,UM(r,Cv[1])}var HM=WM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GM=HM,jg=GM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VM=22250738585072014e-324,KM=VM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XM=KM,YM=ls,qM=Ft,QM=Yt,ZM=4503599627370496;function JM(e,t,r,n){return qM(e)||YM(e)?(t[n]=e,t[n+r]=0,t):e!==0&&QM(e)<XM?(t[n]=e*ZM,t[n+r]=-52,t):(t[n]=e,t[n+r]=0,t)}var bP=JM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eD=bP;function tD(e){return eD(e,[0,0],1,0)}var rD=tD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nD=Cg,wP=rD,iD=bP;nD(wP,"assign",iD);var aD=wP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oD=Er,uD=kg,lD=oa;function sD(e){var t=oD(e);return t=(t&uD)>>>20,t-lD|0}var cD=sD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fD=cD,dD=fD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pD=Xt,vD=Pr,hD=oa,yD=oN,mD=lN,gD=cN,bD=Ft,wD=ls,SD=jg,$D=aD.assign,_D=dD,OD=Ig,xD=Vd,AD=2220446049250313e-31,PD=2148532223,Iv=[0,0],jv=[0,0];function ED(e,t){var r,n;return t===0||e===0||bD(e)||wD(e)?e:($D(e,Iv,1,0),e=Iv[0],t+=Iv[1],t+=_D(e),t<gD?SD(0,e):t>yD?e<0?vD:pD:(t<=mD?(t+=52,n=AD):n=1,OD.assign(e,jv,1,0),r=jv[0],r&=PD,r|=t+hD<<20,n*xD(r,jv[1])))}var TD=ED;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kD=TD,Ng=kD;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function CD(e,t){var r,n;for(r=[],n=0;n<t;n++)r.push(e);return r}var ID=CD;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jD=ID,ND=jD;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MD=ND;function DD(e){return MD(0,e)}var LD=DD;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RD=LD,FD=RD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var BD=cs,Ys=Ng,Kd=FD,SP=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],zD=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Nv=16777216,Mv=5960464477539063e-23,qs=Kd(20),Kw=Kd(20),Qs=Kd(20),gt=Kd(20);function $P(e,t,r,n,i,a,o,u,l){var s,f,c,d,p,y,m,g,h;for(d=a,h=n[r],g=r,p=0;g>0;p++)f=Mv*h|0,gt[p]=h-Nv*f|0,h=n[g-1]+f,g-=1;if(h=Ys(h,i),h-=8*BD(h*.125),m=h|0,h-=m,c=0,i>0?(p=gt[r-1]>>24-i,m+=p,gt[r-1]-=p<<24-i,c=gt[r-1]>>23-i):i===0?c=gt[r-1]>>23:h>=.5&&(c=2),c>0){for(m+=1,s=0,p=0;p<r;p++)g=gt[p],s===0?g!==0&&(s=1,gt[p]=16777216-g):gt[p]=16777215-g;if(i>0)switch(i){case 1:gt[r-1]&=8388607;break;case 2:gt[r-1]&=4194303;break}c===2&&(h=1-h,s!==0&&(h-=Ys(1,i)))}if(h===0){for(g=0,p=r-1;p>=a;p--)g|=gt[p];if(g===0){for(y=1;gt[a-y]===0;y++);for(p=r+1;p<=r+y;p++){for(l[u+p]=SP[o+p],f=0,g=0;g<=u;g++)f+=e[g]*l[u+(p-g)];n[p]=f}return r+=y,$P(e,t,r,n,i,a,o,u,l)}}if(h===0)for(r-=1,i-=24;gt[r]===0;)r-=1,i-=24;else h=Ys(h,-i),h>=Nv?(f=Mv*h|0,gt[r]=h-Nv*f|0,r+=1,i+=24,gt[r]=f):gt[r]=h|0;for(f=Ys(1,i),p=r;p>=0;p--)n[p]=f*gt[p],f*=Mv;for(p=r;p>=0;p--){for(f=0,y=0;y<=d&&y<=r-p;y++)f+=zD[y]*n[p+y];Qs[r-p]=f}for(f=0,p=r;p>=0;p--)f+=Qs[p];for(c===0?t[0]=f:t[0]=-f,f=Qs[0]-f,p=1;p<=r;p++)f+=Qs[p];return c===0?t[1]=f:t[1]=-f,m&7}function UD(e,t,r,n){var i,a,o,u,l,s,f,c,d;for(a=4,u=n-1,o=(r-3)/24|0,o<0&&(o=0),s=r-24*(o+1),c=o-u,d=u+a,f=0;f<=d;f++)c<0?qs[f]=0:qs[f]=SP[c],c+=1;for(f=0;f<=a;f++){for(i=0,c=0;c<=u;c++)i+=e[c]*qs[u+(f-c)];Kw[f]=i}return l=a,$P(e,t,l,Kw,s,a,o,u,qs)}var WD=UD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HD=Math.round,GD=HD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VD=GD,KD=VD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var XD=KD,Xw=Er,YD=.6366197723675814,qD=1.5707963267341256,QD=6077100506506192e-26,ZD=6077100506303966e-26,JD=20222662487959506e-37,eL=20222662487111665e-37,tL=84784276603689e-45,Yw=2047;function rL(e,t,r){var n,i,a,o,u,l,s;return i=XD(e*YD),o=e-i*qD,u=i*QD,s=t>>20|0,r[0]=o-u,n=Xw(r[0]),l=s-(n>>20&Yw),l>16&&(a=o,u=i*ZD,o=a-u,u=i*JD-(a-o-u),r[0]=o-u,n=Xw(r[0]),l=s-(n>>20&Yw),l>49&&(a=o,u=i*eL,o=a-u,u=i*tL-(a-o-u),r[0]=o-u)),r[1]=o-r[0]-u,i}var nL=rL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/var iL=Bo,aL=kg,oL=oP,uL=Er,lL=Y7,sL=Vd,cL=WD,Zs=nL,fL=0,dL=16777216,Rn=1.5707963267341256,Ri=6077100506506192e-26,Js=2*Ri,ec=3*Ri,tc=4*Ri,pL=598523,vL=1072243195,hL=1073928572,yL=1074752122,mL=1074977148,gL=1075183036,bL=1075388923,wL=1075594811,SL=1094263291,du=[0,0,0],pu=[0,0];function $L(e,t){var r,n,i,a,o,u,l,s;if(i=uL(e),a=i&iL|0,a<=vL)return t[0]=e,t[1]=0,0;if(a<=yL)return(a&oL)===pL?Zs(e,a,t):a<=hL?e>0?(s=e-Rn,t[0]=s-Ri,t[1]=s-t[0]-Ri,1):(s=e+Rn,t[0]=s+Ri,t[1]=s-t[0]+Ri,-1):e>0?(s=e-2*Rn,t[0]=s-Js,t[1]=s-t[0]-Js,2):(s=e+2*Rn,t[0]=s+Js,t[1]=s-t[0]+Js,-2);if(a<=wL)return a<=gL?a===mL?Zs(e,a,t):e>0?(s=e-3*Rn,t[0]=s-ec,t[1]=s-t[0]-ec,3):(s=e+3*Rn,t[0]=s+ec,t[1]=s-t[0]+ec,-3):a===bL?Zs(e,a,t):e>0?(s=e-4*Rn,t[0]=s-tc,t[1]=s-t[0]-tc,4):(s=e+4*Rn,t[0]=s+tc,t[1]=s-t[0]+tc,-4);if(a<SL)return Zs(e,a,t);if(a>=aL)return t[0]=NaN,t[1]=NaN,0;for(r=lL(e),n=(a>>20)-1046,s=sL(a-(n<<20|0),r),u=0;u<2;u++)du[u]=s|0,s=(s-du[u])*dL;for(du[2]=s,o=3;du[o-1]===fL;)o-=1;return l=cL(du,pu,n,o),e<0?(t[0]=-pu[0],t[1]=-pu[1],-l):(t[0]=pu[0],t[1]=pu[1],l)}var _L=$L;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OL=_L,_P=OL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var xL=Er,Dv=iP,qw=aP,AL=_P,sn=[0,0],PL=2147483647,EL=1072243195,TL=1044381696,kL=2146435072;function CL(e){var t,r;if(t=xL(e),t&=PL,t<=EL)return t<TL?1:Dv(e,0);if(t>=kL)return NaN;switch(r=AL(e,sn),r&3){case 0:return Dv(sn[0],sn[1]);case 1:return-qw(sn[0],sn[1]);case 2:return-Dv(sn[0],sn[1]);default:return qw(sn[0],sn[1])}}var IL=CL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jL=IL,NL=jL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var ML=Bo,DL=kg,LL=Er,Qw=iP,Lv=aP,RL=_P,FL=1072243195,BL=1045430272,cn=[0,0];function zL(e){var t,r;if(t=LL(e),t&=ML,t<=FL)return t<BL?e:Lv(e,0);if(t>=DL)return NaN;switch(r=RL(e,cn),r&3){case 0:return Lv(cn[0],cn[1]);case 1:return Qw(cn[0],cn[1]);case 2:return-Lv(cn[0],cn[1]);default:return-Qw(cn[0],cn[1])}}var UL=zL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WL=UL,OP=WL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HL=3.141592653589793,Xd=HL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GL=Ft,VL=ls,Zw=NL,Rv=OP,KL=Yt,vu=jg,hu=Xd;function XL(e){var t,r;return GL(e)?NaN:VL(e)?NaN:(r=e%2,t=KL(r),t===0||t===1?vu(0,r):t<.25?Rv(hu*r):t<.75?(t=.5-t,vu(Zw(hu*t),r)):t<1.25?(r=vu(1,r)-r,Rv(hu*r)):t<1.75?(t-=1.5,-vu(Zw(hu*t),r)):(r-=vu(2,r),Rv(hu*r)))}var YL=XL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qL=YL,QL=qL;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ZL(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var JL=ZL;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function eR(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var tR=eR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rR(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var nR=rR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function iR(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var aR=iR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function oR(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var uR=oR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lR(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var sR=lR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function cR(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var fR=cR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function dR(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var pR=dR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vR(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var hR=vR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function yR(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var mR=yR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var gR=Ft,bR=ls,wR=Yt,ya=ua,SR=Tg,$R=QL,_R=Xd,Fv=Xt,OR=JL,xR=tR,AR=nR,PR=aR,ER=uR,TR=sR,kR=fR,CR=pR,IR=hR,jR=mR,NR=.07721566490153287,MR=.3224670334241136,DR=1,LR=-.07721566490153287,RR=.48383612272381005,FR=-.1475877229945939,BR=.06462494023913339,zR=-.07721566490153287,UR=1,WR=.4189385332046727,rc=1.4616321449683622,HR=4503599627370496,GR=0x400000000000000,VR=8470329472543003e-37,Jw=1.4616321449683622,KR=-.12148629053584961,XR=-3638676997039505e-33;function YR(e){var t,r,n,i,a,o,u,l,s,f,c,d,p;if(gR(e)||bR(e))return e;if(e===0)return Fv;if(e<0?(t=!0,e=-e):t=!1,e<VR)return-ya(e);if(t){if(e>=HR||(s=$R(e),s===0))return Fv;r=ya(_R/wR(s*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(p=-ya(e),e>=rc-1+.27?(c=1-e,n=0):e>=rc-1-.27?(c=e-(Jw-1),n=1):(c=e,n=2)):(p=0,e>=rc+.27?(c=2-e,n=0):e>=rc-.27?(c=e-Jw,n=1):(c=e-1,n=2)),n){case 0:d=c*c,o=NR+d*OR(d),a=d*(MR+d*xR(d)),u=c*o+a,p+=u-.5*c;break;case 1:d=c*c,f=d*c,o=RR+f*ER(f),a=FR+f*TR(f),i=BR+f*kR(f),u=d*o-(XR-f*(a+c*i)),p+=KR+u;break;case 2:o=c*(zR+c*CR(c)),a=UR+c*IR(c),p+=-.5*c+o/a;break}else if(e<8)switch(n=SR(e),c=e-n,u=c*(LR+c*PR(c)),l=DR+c*AR(c),p=.5*c+u/l,d=1,n){case 7:d*=c+6;case 6:d*=c+5;case 5:d*=c+4;case 4:d*=c+3;case 3:d*=c+2,p+=ya(d)}else e<GR?(s=ya(e),d=1/e,c=d*d,f=WR+d*jR(c),p=(e-.5)*(s-1)+f):p=e*(ya(e)-1);return t&&(p=r-p),p}var qR=YR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QR=qR,xP=QR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZR=cs;function JR(e){return ZR(e)===e}var eF=JR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tF=eF,Mg=tF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rF=Pr;function nF(e){return e===0&&1/e===rF}var iF=nF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aF=iF,AP=aF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oF=2.5066282746310007,PP=oF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uF=Mg;function lF(e){return uF(e/2)}var sF=lF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cF=sF,fF=cF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e2=fF;function dF(e){return e>0?e2(e-1):e2(e+1)}var pF=dF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vF=pF,EP=vF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hF=Math.sqrt,yF=hF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mF=yF,Yd=mF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gF=Fo,Vh;gF===!0?Vh=0:Vh=1;var bF=Vh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wF=Lo,SF=Ro,$F=bF,Kh=new SF(1),_F=new wF(Kh.buffer);function OF(e,t){return Kh[0]=e,_F[$F]=t>>>0,Kh[0]}var xF=OF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AF=xF,fs=AF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function PF(e){return e|0}var EF=PF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TF=EF,TP=TF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var t2=EP,kF=jg,CF=Pr,nc=Xt;function IF(e,t){return t===CF?nc:t===nc?0:t>0?t2(t)?e:0:t2(t)?kF(nc,e):nc}var jF=IF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var NF=Bo,MF=Er,DF=1072693247,ic=1e300,ac=1e-300;function LF(e,t){var r,n;return n=MF(e),r=n&NF,r<=DF?t<0?ic*ic:ac*ac:t>0?ic*ic:ac*ac}var RF=LF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FF=Yt,r2=Xt;function BF(e,t){return e===-1?(e-e)/(e-e):e===1?1:FF(e)<1==(t===r2)?0:r2}var zF=BF;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function UF(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var WF=UF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var HF=Er,oc=fs,n2=ss,GF=oa,VF=WF,KF=1048575,i2=1048576,XF=1072693248,YF=536870912,qF=524288,QF=20,ZF=9007199254740992,JF=.9617966939259756,eB=.9617967009544373,tB=-7028461650952758e-24,rB=[1,1.5],nB=[0,.5849624872207642],iB=[0,1350039202129749e-23];function aB(e,t,r){var n,i,a,o,u,l,s,f,c,d,p,y,m,g,h,v,b,w,S,$,_,O;return $=0,r<i2&&(t*=ZF,$-=53,r=HF(t)),$+=(r>>QF)-GF|0,_=r&KF|0,r=_|XF|0,_<=235662?O=0:_<767610?O=1:(O=0,$+=1,r-=i2),t=n2(t,r),f=rB[O],w=t-f,S=1/(t+f),i=w*S,o=oc(i,0),n=(r>>1|YF)+qF,n+=O<<18,l=n2(0,n),s=t-(l-f),u=S*(w-o*l-o*s),a=i*i,b=a*a*VF(a),b+=u*(o+i),a=o*o,l=3+a+b,l=oc(l,0),s=b-(l-3-a),w=o*l,S=u*l+s*i,d=w+S,d=oc(d,0),p=S-(d-w),y=eB*d,m=tB*d+p*JF+iB[O],c=nB[O],v=$,g=y+m+c+v,g=oc(g,0),h=m-(g-v-c-y),e[0]=g,e[1]=h,e}var oB=aB;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function uB(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var lB=uB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var sB=fs,cB=lB,fB=1.4426950408889634,dB=1.4426950216293335,pB=19259629911266175e-24;function vB(e,t){var r,n,i,a,o,u;return i=t-1,a=i*i*cB(i),o=dB*i,u=i*pB-a*fB,n=o+u,n=sB(n,0),r=u-(n-o),e[0]=n,e[1]=r,e}var hB=vB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yB=.6931471805599453,mB=yB;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gB(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var bB=gB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var wB=Er,a2=ss,SB=fs,$B=TP,_B=Ng,OB=mB,o2=oa,u2=Bo,l2=oP,xB=bB,s2=1048576,AB=1071644672,yu=20,PB=.6931471824645996,EB=-1904654299957768e-24;function TB(e,t,r){var n,i,a,o,u,l,s,f,c,d,p;return d=e&u2|0,p=(d>>yu)-o2|0,c=0,d>AB&&(c=e+(s2>>p+1)>>>0,p=((c&u2)>>yu)-o2|0,n=(c&~(l2>>p))>>>0,a=a2(0,n),c=(c&l2|s2)>>yu-p>>>0,e<0&&(c=-c),t-=a),a=r+t,a=SB(a,0),u=a*PB,l=(r-(a-t))*OB+a*EB,f=u+l,s=l-(f-u),a=f*f,i=f-a*xB(a),o=f*i/(i-2)-(s+f*s),f=1-(o-f),e=wB(f),e=$B(e),e+=c<<yu>>>0,e>>yu<=0?f=_B(f,c):f=a2(f,e),f}var kB=TB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var c2=Ft,f2=EP,d2=ls,CB=Mg,p2=Yd,IB=Yt,Bv=Ig,jB=fs,v2=TP,NB=Pr,MB=Xt,zv=Bo,DB=jF,LB=RF,RB=zF,FB=oB,BB=hB,zB=kB,UB=1072693247,WB=1105199104,HB=1139802112,h2=1083179008,GB=1072693248,VB=1083231232,KB=3230714880,y2=31,Fn=1e300,Bn=1e-300,XB=8008566259537294e-32,fn=[0,0],m2=[0,0];function kP(e,t){var r,n,i,a,o,u,l,s,f,c,d,p,y,m,g,h;if(c2(e)||c2(t))return NaN;if(Bv.assign(t,fn,1,0),u=fn[0],l=fn[1],l===0){if(t===0)return 1;if(t===1)return e;if(t===-1)return 1/e;if(t===.5)return p2(e);if(t===-.5)return 1/p2(e);if(t===2)return e*e;if(t===3)return e*e*e;if(t===4)return e*=e,e*e;if(d2(t))return RB(e,t)}if(Bv.assign(e,fn,1,0),a=fn[0],o=fn[1],o===0){if(a===0)return DB(e,t);if(e===1)return 1;if(e===-1&&f2(t))return-1;if(d2(e))return e===NB?kP(-0,-t):t<0?0:MB}if(e<0&&CB(t)===!1)return(e-e)/(e-e);if(i=IB(e),r=a&zv|0,n=u&zv|0,s=a>>>y2|0,f=u>>>y2|0,s&&f2(t)?s=-1:s=1,n>WB){if(n>HB)return LB(e,t);if(r<UB)return f===1?s*Fn*Fn:s*Bn*Bn;if(r>GB)return f===0?s*Fn*Fn:s*Bn*Bn;y=BB(m2,i)}else y=FB(m2,i,r);if(c=jB(t,0),p=(t-c)*y[0]+t*y[1],d=c*y[0],m=p+d,Bv.assign(m,fn,1,0),g=v2(fn[0]),h=v2(fn[1]),g>=h2){if(g-h2|h||p+XB>m-d)return s*Fn*Fn}else if((g&zv)>=VB&&(g-KB|h||p<=m-d))return s*Bn*Bn;return m=zB(g,d,p),s*m}var YB=kP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qB=YB,ds=qB;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function QB(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var ZB=QB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var JB=Ng,ez=ZB;function tz(e,t,r){var n,i,a,o;return n=e-t,i=n*n,a=n-i*ez(i),o=1-(t-n*a/(2-a)-e),JB(o,r)}var rz=tz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var nz=Ft,g2=Tg,iz=Pr,b2=Xt,az=rz,oz=.6931471803691238,uz=19082149292705877e-26,w2=1.4426950408889634,lz=709.782712893384,sz=-745.1332191019411,CP=1/(1<<28),cz=-CP;function fz(e){var t,r,n;return nz(e)||e===b2?e:e===iz?0:e>lz?b2:e<sz?0:e>cz&&e<CP?1+e:(e<0?n=g2(w2*e-.5):n=g2(w2*e+.5),t=e-n*oz,r=n*uz,az(t,r,n))}var dz=fz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pz=dz,gi=pz;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vz(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var hz=vz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var yz=PP,S2=ds,mz=gi,gz=hz,bz=143.01608;function wz(e){var t,r,n;return t=1/e,t=1+t*gz(t),r=mz(e),e>bz?(n=S2(e,.5*e-.25),r=n*(n/r)):r=S2(e,e-.5)/r,yz*r*t}var Sz=wz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $z=.5772156649015329,_z=$z;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Oz=_z;function xz(e,t){return t/((1+Oz*e)*e)}var Az=xz;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Pz(e){var t,r,n;return e===0?1:(e<0?t=-e:t=e,t<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),n=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,r=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),n=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),r/n)}var Ez=Pz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Tz=Ft,kz=Mg,Cz=AP,$2=Yt,Iz=cs,jz=OP,_2=Xt,O2=Pr,x2=Xd,A2=Sz,P2=Az,Nz=Ez;function Mz(e){var t,r,n,i;if(kz(e)&&e<0||e===O2||Tz(e))return NaN;if(e===0)return Cz(e)?O2:_2;if(e>171.61447887182297)return _2;if(e<-170.5674972726612)return 0;if(r=$2(e),r>33)return e>=0?A2(e):(n=Iz(r),n&1?t=1:t=-1,i=r-n,i>.5&&(n+=1,i=r-n),i=r*jz(x2*i),t*x2/($2(i)*A2(r)));for(i=1;e>=3;)e-=1,i*=e;for(;e<0;){if(e>-1e-9)return P2(e,i);i/=e,e+=1}for(;e<2;){if(e<1e-9)return P2(e,i);i/=e,e+=1}return e===2?i:(e-=2,i*Nz(e))}var Dz=Mz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lz=Dz,Dg=Lz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rz=14901161193847656e-24,Fz=Rz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bz=17976931348623157e292,zz=Bz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uz=709.782712893384,Lg=Uz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Wz=gi;function Hz(e,t){var r,n,i,a;if(i=Wz(-t),n=i,n!==0)for(r=n,a=1;a<e;++a)r/=a,r*=t,n+=r;return n}var Gz=Hz;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vz(e){return e===0?-.3250421072470015:-.3250421072470015+e*(-.02848174957559851+e*(-.005770270296489442+e*-23763016656650163e-21))}var Kz=Vz;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Xz(e){return e===0?.39791722395915535:.39791722395915535+e*(.0650222499887673+e*(.005081306281875766+e*(.00013249473800432164+e*-3960228278775368e-21)))}var Yz=Xz;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qz(e){return e===0?.41485611868374833:.41485611868374833+e*(-.3722078760357013+e*(.31834661990116175+e*(-.11089469428239668+e*(.035478304325618236+e*-.002166375594868791))))}var Qz=qz;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Zz(e){return e===0?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+e*.011984499846799107))))}var Jz=Zz;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function eU(e){return e===0?-.6938585727071818:-.6938585727071818+e*(-10.558626225323291+e*(-62.375332450326006+e*(-162.39666946257347+e*(-184.60509290671104+e*(-81.2874355063066+e*-9.814329344169145)))))}var tU=eU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rU(e){return e===0?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+e*-.0604244152148581))))))}var nU=rU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function iU(e){return e===0?-.799283237680523:-.799283237680523+e*(-17.757954917754752+e*(-160.63638485582192+e*(-637.5664433683896+e*(-1025.0951316110772+e*-483.5191916086514))))}var aU=iU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function oU(e){return e===0?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+e*-22.44095244658582)))))}var uU=oU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var lU=Ft,E2=gi,sU=fs,cU=Xt,fU=Pr,dU=Kz,pU=Yz,vU=Qz,hU=Jz,yU=tU,mU=nU,gU=aU,bU=uU,uc=1e-300,wU=13877787807814457e-33,T2=.8450629115104675,SU=.12837916709551256,$U=1,_U=-.0023621185607526594,OU=1,xU=-.009864944034847148,AU=1,PU=-.0098649429247001,EU=1;function TU(e){var t,r,n,i,a,o,u,l;if(lU(e))return NaN;if(e===cU)return 0;if(e===fU)return 2;if(e===0)return 1;if(e<0?(t=!0,r=-e):(t=!1,r=e),r<.84375)return r<wU?1-e:(n=e*e,i=SU+n*dU(n),a=$U+n*pU(n),o=i/a,e<.25?1-(e+e*o):(i=e*o,i+=e-.5,.5-i));if(r<1.25)return a=r-1,u=_U+a*vU(a),l=OU+a*hU(a),t?1+T2+u/l:1-T2-u/l;if(r<28){if(a=1/(r*r),r<2.857142857142857)i=xU+a*yU(a),a=AU+a*mU(a);else{if(e<-6)return 2-uc;i=PU+a*gU(a),a=EU+a*bU(a)}return n=sU(r,0),i=E2(-(n*n)-.5625)*E2((n-r)*(n+r)+i/a),t?2-i/r:i/r}return t?2-uc:uc*uc}var kU=TU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CU=kU,IP=CU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var IU=IP,k2=Yd,jU=gi,NU=Xd;function MU(e,t){var r,n,i,a,o;if(a=IU(k2(t)),a!==0&&e>1){for(n=jU(-t)/k2(NU*t),n*=t,r=.5,n/=r,i=n,o=2;o<e;++o)n/=o-r,n*=t,i+=n;a+=i}return a}var DU=MU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LU=-708.3964185322641,jP=LU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ma=gi,lc=ds,RU=ua,C2=Lg,I2=jP;function FU(e,t){var r,n;return n=e*RU(t),t>=1?n<C2&&-t>I2?r=lc(t,e)*ma(-t):e>=1?r=lc(t/ma(t/e),e):r=ma(n-t):n>I2?r=lc(t,e)*ma(-t):t/e<C2?r=lc(t/ma(t/e),e):r=ma(n-t),r}var BU=FU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zU(e,t){var r,n;if(n=e.length,n<2||t===0)return n===0?0:e[0];for(n-=1,r=e[n]*t+e[n-1],n-=2;n>=0;)r=r*t+e[n],n-=1;return r}var NP=zU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UU=Function,WU=UU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HU=WU,GU=HU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VU=GU,KU=NP;function XU(e){var t,r,n,i;if(e.length>500)return a;if(t="return function evalpoly(x){",r=e.length,r===0)t+="return 0.0;";else if(r===1)t+="return "+e[0]+";";else{for(t+="if(x===0.0){return "+e[0]+";}",t+="return "+e[0],n=r-1,i=1;i<r;i++)t+="+x*",i<n&&(t+="("),t+=e[i];for(i=0;i<n-1;i++)t+=")";t+=";"}return t+="}",t+="//# sourceURL=evalpoly.factory.js",new VU(t)();function a(o){return KU(e,o)}}var YU=XU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qU=Cg,MP=NP,QU=YU;qU(MP,"factory",QU);var ZU=MP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JU=2220446049250313e-31,Uo=JU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eW=eval,tW=eW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rW=tW;function nW(){var e;try{rW('"use strict"; (function* () {})'),e=!0}catch{e=!1}return e}var iW=nW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aW=iW,DP=aW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sc=Yt,oW=Uo,uW=1e6;function lW(e,t){var r,n,i,a,o,u;if(u={},arguments.length>1&&(u=t),n=u.tolerance||oW,a=u.maxTerms||uW,o=u.initialValue||0,r=typeof e.next=="function",r===!0){for(i of e)if(o+=i,sc(n*o)>=sc(i)||--a===0)break}else do i=e(),o+=i;while(sc(n*o)<sc(i)&&--a);return o}var sW=lW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j2=Yt,cW=Uo,fW=1e6;function dW(e,t){var r,n,i,a,o;o={},arguments.length>1&&(o=t),r=o.tolerance||cW,i=o.maxTerms||fW,a=o.initialValue||0;do n=e(),a+=n;while(j2(r*a)<j2(n)&&--i);return a}var pW=dW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vW=DP,hW=sW,yW=pW,Xh;vW()?Xh=hW:Xh=yW;var Rg=Xh;/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/function mW(e){var t=-e,r=-1,n=0;return i;function i(){return r*=t,n+=1,r/n}}var gW=mW;/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var bW=Yt,wW=ua,SW=Uo,$W=Rg,_W=gW;function OW(e){var t,r;return e<=-1?NaN:(r=bW(e),r>.95?wW(1+e)-e:r<SW?-e*e/2:(t={initialValue:-e},$W(_W(e),t)))}var xW=OW;/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AW=xW,PW=AW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EW=6.283185307179586,TW=EW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kW(e){return e===0?-.3333333333333333:-.3333333333333333+e*(.08333333333333333+e*(-.014814814814814815+e*(.0011574074074074073+e*(.0003527336860670194+e*(-.0001787551440329218+e*(3919263178522438e-20+e*(-21854485106799924e-22+e*(-185406221071516e-20+e*(8296711340953087e-22+e*(-17665952736826078e-23+e*(6707853543401498e-24+e*(10261809784240309e-24+e*(-4382036018453353e-24+e*914769958223679e-24)))))))))))))}var CW=kW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function IW(e){return e===0?-.001851851851851852:-.001851851851851852+e*(-.003472222222222222+e*(.0026455026455026454+e*(-.0009902263374485596+e*(.00020576131687242798+e*(-4018775720164609e-22+e*(-18098550334489977e-21+e*(764916091608111e-20+e*(-16120900894563446e-22+e*(4647127802807434e-24+e*(1378633446915721e-22+e*(-5752545603517705e-23+e*11951628599778148e-24)))))))))))}var jW=IW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function NW(e){return e===0?.004133597883597883:.004133597883597883+e*(-.0026813271604938273+e*(.0007716049382716049+e*(20093878600823047e-22+e*(-.00010736653226365161+e*(52923448829120125e-21+e*(-12760635188618728e-21+e*(3423578734096138e-23+e*(13721957309062932e-22+e*(-6298992138380055e-22+e*14280614206064242e-23)))))))))}var MW=NW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function DW(e){return e===0?.0006494341563786008:.0006494341563786008+e*(.00022947209362139917+e*(-.0004691894943952557+e*(.00026772063206283885+e*(-7561801671883977e-20+e*(-2396505113867297e-22+e*(11082654115347302e-21+e*(-56749528269915965e-22+e*14230900732435883e-22)))))))}var LW=DW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function RW(e){return e===0?-.0008618882909167117:-.0008618882909167117+e*(.0007840392217200666+e*(-.0002990724803031902+e*(-14638452578843418e-22+e*(6641498215465122e-20+e*(-3968365047179435e-20+e*11375726970678419e-21)))))}var FW=RW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function BW(e){return e===0?-.00033679855336635813:-.00033679855336635813+e*(-6972813758365858e-20+e*(.0002772753244959392+e*(-.00019932570516188847+e*(6797780477937208e-20+e*(1419062920643967e-22+e*(-13594048189768693e-21+e*(8018470256334202e-21+e*-2291481176508095e-21)))))))}var zW=BW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function UW(e){return e===0?.0005313079364639922:.0005313079364639922+e*(-.0005921664373536939+e*(.0002708782096718045+e*(7902353232660328e-22+e*(-8153969367561969e-20+e*(561168275310625e-19+e*-18329116582843375e-21)))))}var WW=UW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function HW(e){return e===0?.00034436760689237765:.00034436760689237765+e*(5171790908260592e-20+e*(-.00033493161081142234+e*(.0002812695154763237+e*-.00010976582244684731)))}var GW=HW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function VW(e){return e===0?-.0006526239185953094:-.0006526239185953094+e*(.0008394987206720873+e*-.000438297098541721)}var KW=VW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var XW=ZU,YW=PW,qW=IP,Uv=Yd,QW=gi,ZW=TW,JW=CW,eH=jW,tH=MW,rH=LW,nH=FW,iH=zW,aH=WW,oH=GW,uH=KW,Cr=[0,0,0,0,0,0,0,0,0,0];function lH(e,t){var r,n,i,a,o;return n=(t-e)/e,i=-YW(n),a=e*i,o=Uv(2*i),t<e&&(o=-o),Cr[0]=JW(o),Cr[1]=eH(o),Cr[2]=tH(o),Cr[3]=rH(o),Cr[4]=nH(o),Cr[5]=iH(o),Cr[6]=aH(o),Cr[7]=oH(o),Cr[8]=uH(o),Cr[9]=-.0005967612901927463,r=XW(Cr,1/e),r*=QW(-a)/Uv(ZW*e),t<e&&(r=-r),r+=qW(Uv(a))/2,r}var sH=lH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function cH(e,t){var r=1,n=e,i=t;return a;function a(){var o=r;return n+=1,r*=i/n,o}}var fH=cH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var dH=Rg,pH=fH;function vH(e,t,r){var n,i;return r=r||0,i=pH(e,t),n=dH(i,{initialValue:r}),n}var hH=vH;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function yH(e){var t,r,n;return e===0?1/0:(e<0?t=-e:t=e,t<=1?(r=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),n=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,r=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),n=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),r/n)}var mH=yH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var gH=mH,bH=gH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wH=bH,SH=wH;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $H(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}var _H=$H;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_log1p.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var OH=Ft,N2=Er,M2=ss,xH=Xt,AH=Pr,D2=oa,PH=_H,Wv=.6931471803691238,Hv=19082149292705877e-26,EH=.41421356237309503,TH=-.2928932188134525,kH=1862645149230957e-24,CH=5551115123125783e-32,IH=9007199254740992,jH=.6666666666666666;function NH(e){var t,r,n,i,a,o,u,l,s,f;if(e<-1||OH(e))return NaN;if(e===-1)return AH;if(e===xH||e===0)return e;if(e<0?n=-e:n=e,f=1,n<EH){if(n<kH)return n<CH?e:e-e*e*.5;e>TH&&(f=0,i=e,r=1)}return f!==0&&(n<IH?(s=1+e,r=N2(s),f=(r>>20)-D2,f>0?a=1-(s-e):a=e-(s-1),a/=s):(s=e,r=N2(s),f=(r>>20)-D2,a=0),r&=1048575,r<434334?s=M2(s,r|1072693248):(f+=1,s=M2(s,r|1071644672),r=1048576-r>>2),i=s-1),t=.5*i*i,r===0?i===0?(a+=f*Hv,f*Wv+a):(l=t*(1-jH*i),f*Wv-(l-(f*Hv+a)-i)):(o=i/(2+i),u=o*o,l=u*PH(u),f===0?i-(t-o*(t+l)):f*Wv-(t-(o*(t+l)+(f*Hv+a))-i))}var MH=NH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DH=MH,LP=DH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LH=Xt;function RH(e){return e===0&&1/e===LH}var FH=RH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BH=FH,zH=BH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UH=zH,L2=Ft,Gv=Xt;function WH(e,t){return L2(e)||L2(t)?NaN:e===Gv||t===Gv?Gv:e===t&&e===0?UH(e)?e:t:e>t?e:t}var HH=WH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GH=HH,VH=GH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KH=AP,R2=Ft,Vv=Pr;function XH(e,t){return R2(e)||R2(t)?NaN:e===Vv||t===Vv?Vv:e===t&&e===0?KH(e)?e:t:e<t?e:t}var YH=XH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qH=YH,QH=qH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZH=10.900511,JH=ZH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eG=2.718281828459045,tG=eG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var rG=SH,nG=xP,iG=Dg,aG=LP,oG=Yd,uG=Yt,zn=gi,mu=ds,Kv=VH,Xv=QH,F2=ua,cc=Lg,gu=jP,Yv=JH,lG=tG;function sG(e,t){var r,n,i,a,o,u,l;return i=e+Yv-.5,l=(t-e-Yv+.5)/i,e<1?t<=gu?zn(e*F2(t)-t-nG(e)):mu(t,e)*zn(-t)/iG(e):(uG(l*l*e)<=100&&e>150?(r=e*(aG(l)-l)+t*(.5-Yv)/i,r=zn(r)):(a=e*F2(t/i),o=e-t,Xv(a,o)<=gu||Kv(a,o)>=cc?(n=o/e,Xv(a,o)/2>gu&&Kv(a,o)/2<cc?(u=mu(t/i,e/2)*zn(o/2),r=u*u):Xv(a,o)/4>gu&&Kv(a,o)/4<cc&&t>e?(u=mu(t/i,e/4)*zn(o/4),r=u*u,r*=r):n>gu&&n<cc?r=mu(t*zn(n)/i,e):r=zn(a+o)):r=mu(t/i,e)*zn(o)),r*=oG(i/lG)/rG(e),r)}var cG=sG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fG=.34657359027997264,dG=fG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function pG(e){return e===0?-.03333333333333313:-.03333333333333313+e*(.0015873015872548146+e*(-793650757867488e-19+e*(4008217827329362e-21+e*-20109921818362437e-23)))}var vG=pG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_expm1.c} and [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var hG=Ft,B2=Er,qv=ss,yG=Vd,z2=Xt,mG=Pr,U2=oa,gG=dG,bG=vG,wG=709.782712893384,Qv=.6931471803691238,Zv=19082149292705877e-26,W2=1.4426950408889634,SG=38.816242111356935,$G=1.0397207708399179;function _G(e){var t,r,n,i,a,o,u,l,s,f,c,d,p;if(e===z2||hG(e))return e;if(e===mG)return-1;if(e===0)return e;if(e<0?(n=!0,l=-e):(n=!1,l=e),l>=SG){if(n)return-1;if(l>=wG)return z2}if(o=B2(l)|0,l>gG)l<$G?n?(i=e+Qv,a=-Zv,p=-1):(i=e-Qv,a=Zv,p=1):(n?p=W2*e-.5:p=W2*e+.5,p|=0,c=p,i=e-c*Qv,a=c*Zv),e=i-a,f=i-e-a;else{if(o<1016070144)return e;p=0}return t=.5*e,s=e*t,u=1+s*bG(s),c=3-u*t,d=s*((u-c)/(6-e*c)),p===0?e-(e*d-s):(r=yG(U2+p<<20,0),d=e*(d-f)-f,d-=s,p===-1?.5*(e-d)-.5:p===1?e<-.25?-2*(d-(e+.5)):1+2*(e-d):p<=-2||p>56?(l=1-(d-e),p===1024?(i=B2(l)+(p<<20)|0,l=qv(l,i)):l*=r,l-1):(c=1,p<20?(i=1072693248-(2097152>>p)|0,c=qv(c,i),l=c-(d-e)):(i=U2-p<<20|0,c=qv(c,i),l=e-(d+c),l+=1),l*=r,l))}var OG=_G;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xG=OG,RP=xG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_60_0/boost/math/special_functions/powm1.hpp}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var H2=Ft,G2=Yt,AG=RP,PG=ua,EG=ds,TG=Tg;function kG(e,t){var r;if(H2(e)||H2(t))return NaN;if(t===0)return 0;if(e===0)return-1;if(e<0&&t%2===0&&(e=-e),e>0){if((G2(t*(e-1))<.5||G2(t)<.2)&&(r=PG(e)*t,r<.5))return AG(r)}else if(TG(t)!==t)return NaN;return EG(e,t)-1}var CG=kG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IG=CG,jG=IG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function NG(e){var t,r,n;return e===0?-.01803556856784494:(e<0?t=-e:t=e,t<=1?(r=-.01803556856784494+e*(.02512664961998968+e*(.049410315156753225+e*(.0172491608709614+e*(-.0002594535632054381+e*(-.0005410098692152044+e*(-3245886498259485e-20+e*0)))))),n=1+e*(1.962029871977952+e*(1.4801966942423133+e*(.5413914320717209+e*(.09885042511280101+e*(.008213096746488934+e*(.00022493629192211576+e*-22335276320861708e-23))))))):(e=1/e,r=0+e*(-3245886498259485e-20+e*(-.0005410098692152044+e*(-.0002594535632054381+e*(.0172491608709614+e*(.049410315156753225+e*(.02512664961998968+e*-.01803556856784494)))))),n=-22335276320861708e-23+e*(.00022493629192211576+e*(.008213096746488934+e*(.09885042511280101+e*(.5413914320717209+e*(1.4801966942423133+e*(1.962029871977952+e*1))))))),r/n)}var MG=NG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function DG(e){var t,r,n;return e===0?.04906224540690395:(e<0?t=-e:t=e,t<=1?(r=.04906224540690395+e*(-.09691175301595212+e*(-.4149833583594954+e*(-.4065671242119384+e*(-.1584135863906922+e*(-.024014982064857155+e*-.0010034668769627955))))),n=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+e*.001957681026011072)))))):(e=1/e,r=-.0010034668769627955+e*(-.024014982064857155+e*(-.1584135863906922+e*(-.4065671242119384+e*(-.4149833583594954+e*(-.09691175301595212+e*.04906224540690395))))),n=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+e*1)))))),r/n)}var LG=DG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function RG(e){var t,r,n;return e===0?-.029232972183027003:(e<0?t=-e:t=e,t<=1?(r=-.029232972183027003+e*(.14421626775719232+e*(-.14244039073863127+e*(.05428096940550536+e*(-.008505359768683364+e*(.0004311713426792973+e*0))))),n=1+e*(-1.5016935605448505+e*(.846973248876495+e*(-.22009515181499575+e*(.02558279715597587+e*(-.0010066679553914337+e*-8271935218912905e-22)))))):(e=1/e,r=0+e*(.0004311713426792973+e*(-.008505359768683364+e*(.05428096940550536+e*(-.14244039073863127+e*(.14421626775719232+e*-.029232972183027003))))),n=-8271935218912905e-22+e*(-.0010066679553914337+e*(.02558279715597587+e*(-.22009515181499575+e*(.846973248876495+e*(-1.5016935605448505+e*1)))))),r/n)}var FG=RG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/lgamma_small.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Jv=ua,BG=Uo,zG=MG,UG=LG,WG=FG,HG=.15896368026733398,GG=.5281534194946289,VG=.45201730728149414;function KG(e,t,r){var n,i,a,o;if(e<BG)return-Jv(e);if(t===0||r===0)return 0;if(i=0,e>2){if(e>=3){do e-=1,r-=1,i+=Jv(e);while(e>=3);r=e-2}return a=r*(e+1),o=zG(r),i+=a*HG+a*o,i}return e<1&&(i+=-Jv(e),r=t,t=e,e+=1),e<=1.5?(a=UG(t),n=t*r,i+=n*GG+n*a,i):(a=r*t,o=WG(-r),i+=a*VG+a*o,i)}var XG=KG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var V2=Dg,K2=RP,YG=LP,qG=Ft,X2=XG;function QG(e){return qG(e)?NaN:e<0?e<-.5?V2(1+e)-1:K2(-YG(e)+X2(e+2,e+1,e)):e<2?K2(X2(e+1,e,e-1)):V2(1+e)-1}var ZG=QG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JG=ZG,eV=JG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function tV(e,t){var r,n,i,a;return r=-t,t=-t,n=e+1,i=1,o;function o(){return a=r/n,r*=t,i+=1,r/=i,n+=1,a}}var rV=tV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var nV=jG,iV=Rg,aV=eV,oV=rV;function uV(e,t,r){var n,i,a,o,u;return i=aV(e),a=(i+1)/e,o=nV(t,e),i-=o,i/=e,u=oV(e,t),o+=1,n=r?a:0,i=-o*iV(u,{initialValue:(n-i)/o}),r&&(i=-i),[i,a]}var lV=uV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sV=11754943508222875e-54,FP=sV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _f=Yt,Qr=FP,cV=Uo,fV=1e6;function dV(e,t,r){var n,i,a,o,u,l,s;if(n=typeof e.next=="function",s=n?e.next().value:e(),o=s[1],a=s[0],o===0&&(o=Qr),u=o,l=0,n===!0)do s=e.next().value,s&&(l=s[1]+s[0]*l,l===0&&(l=Qr),u=s[1]+s[0]/u,u===0&&(u=Qr),l=1/l,i=u*l,o*=i);while(_f(i-1)>t&&--r);else do s=e(),s&&(l=s[1]+s[0]*l,l===0&&(l=Qr),u=s[1]+s[0]/u,u===0&&(u=Qr),l=1/l,i=u*l,o*=i);while(s&&_f(i-1)>t&&--r);return a/o}function pV(e,t,r){var n,i,a,o,u,l;if(n=typeof e.next=="function",l=n?e.next().value:e(),a=l[1],a===0&&(a=Qr),o=a,u=0,n===!0)do l=e.next().value,l&&(u=l[1]+l[0]*u,u===0&&(u=Qr),o=l[1]+l[0]/o,o===0&&(o=Qr),u=1/u,i=o*u,a*=i);while(l&&_f(i-1)>t&&--r);else do l=e(),l&&(u=l[1]+l[0]*u,u===0&&(u=Qr),o=l[1]+l[0]/o,o===0&&(o=Qr),u=1/u,i=o*u,a*=i);while(l&&_f(i-1)>t&&--r);return a}function vV(e,t){var r,n,i;return n={},arguments.length>1&&(n=t),r=n.maxIter||fV,i=n.tolerance||cV,n.keep?pV(e,i,r):dV(e,i,r)}var hV=vV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BP=Yt,yV=Uo,Va=FP,mV=1e6;function gV(e,t,r){var n,i,a,o,u,l;l=e(),u=l[1],i=l[0],u===0&&(u=Va),a=u,o=0;do l=e(),l&&(o=l[1]+l[0]*o,o===0&&(o=Va),a=l[1]+l[0]/a,a===0&&(a=Va),o=1/o,n=a*o,u*=n);while(l&&BP(n-1)>t&&--r);return i/u}function bV(e,t,r){var n,i,a,o,u;u=e(),o=u[1],o===0&&(o=Va),i=o,a=0;do u=e(),u&&(a=u[1]+u[0]*a,a===0&&(a=Va),i=u[1]+u[0]/i,i===0&&(i=Va),a=1/a,n=i*a,o*=n);while(u&&BP(n-1)>t&&--r);return o}function wV(e,t){var r,n,i;return n={},arguments.length>1&&(n=t),i=n.tolerance||yV,r=n.maxIter||mV,n.keep?bV(e,i,r):gV(e,i,r)}var SV=wV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $V=DP,_V=hV,OV=SV,Yh;$V()?Yh=_V:Yh=OV;var xV=Yh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function AV(e,t){var r=t-e+1,n=e,i=0;return a;function a(){return i+=1,r+=2,[i*(n-i),r]}}var PV=AV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var EV=xV,TV=PV;function kV(e,t){var r=TV(e,t);return 1/(t-e+1+EV(r))}var CV=kV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var IV=xP,jV=cs,bu=Dg,Y2=Yt,NV=gi,q2=ds,Ir=ua,MV=Fz,Q2=zz,DV=PP,Z2=Lg,LV=Xt,RV=Gz,FV=DU,J2=BU,BV=sH,e0=hH,eS=cG,zV=lV,tS=CV,UV=170;function zP(e,t,r,n){var i,a,o,u,l,s,f,c,d,p,y,m,g,h,v;if(e<0||t<=0)return NaN;if(a=r===void 0?!0:r,c=n,d=0,t>=UV&&!a)return c&&t*4<e?(d=t*Ir(e)-e,d+=Ir(tS(t,e))):!c&&t>4*e?(d=t*Ir(e)-e,u=0,d+=Ir(e0(t,e,u)/t)):(d=zP(t,e,!0,c),d===0?c?(d=1+1/(12*t)+1/(288*t*t),d=Ir(d)-t+(t-.5)*Ir(t),d+=Ir(DV)):(d=t*Ir(e)-e,u=0,d+=Ir(e0(t,e,u)/t)):d=Ir(d)+IV(t)),d>Z2?LV:NV(d);switch(f=t<30&&t<=e+1&&e<Z2,f?(h=jV(t),p=h===t,l=p?!1:Y2(h-t)===.5):p=l=!1,p&&e>.6?(c=!c,o=0):l&&e>.2?(c=!c,o=1):e<MV&&t>1?o=6:e<.5?-.4/Ir(e)<t?o=2:o=3:e<1.1?e*.75<t?o=2:o=3:(s=!1,a&&t>20&&(y=Y2((e-t)/t),t>200?20/t>y*y&&(s=!0):y<.4&&(s=!0)),s?o=5:e-1/(3*e)<t?o=2:(o=4,c=!c)),o){case 0:d=RV(t,e),a===!1&&(d*=bu(t));break;case 1:d=FV(t,e),a===!1&&(d*=bu(t));break;case 2:d=a?eS(t,e):J2(t,e),d!==0&&(u=0,i=!1,c&&(u=a?1:bu(t),a||d>=1||Q2*d>u?(u/=d,a||t<1||Q2/t>u?(u*=-t,i=!0):u=0):u=0)),d*=e0(t,e,u)/t,i&&(c=!1,d=-d);break;case 3:c=!c,g=zV(t,e,c),d=g[0],v=g[1],c=!1,a&&(d/=v);break;case 4:d=a?eS(t,e):J2(t,e),d!==0&&(d*=tS(t,e));break;case 5:d=BV(t,e),e>=t&&(c=!c);break;case 6:d=a?q2(e,t)/bu(t+1):q2(e,t)/t,d*=1-t*e/(t+1);break}return a&&d>1&&(d=1),c&&(m=a?1:bu(t),d=m-d),d}var WV=zP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HV=WV,GV=HV;const VV=Se(GV);function rS(e,t){return e.map(n=>{function i(s,f){let c=0;for(let d=0;d<s.length;d++){if(f[d]===0)throw new Error("Expected frequency cannot be zero.");c+=Math.pow(s[d]-f[d],2)/f[d]}return c}const a=i(n,t);function o(s,f){const c=f/2,d=s/2;return 1-VV(d,c,!0)}const u=n.length-1;return{pValue:o(a,u),chiSquare:a}})}function nS(e){const t=Number((e.reduce((i,a)=>i+a.pValue,0)/e.length).toFixed(15)),r=Math.round(t*1e8)/1e8,n=e.reduce((i,a)=>i+a.chiSquare,0)/e.length;return{pValue:r,chiSquare:n}}function iS(e,t){return Math.abs(e-t)>e/100*25?"red":Math.abs(e-t)<e/100*25&&Math.abs(e-t)>e/100*10?"orange":Math.abs(e-t)<e/100*10&&Math.abs(e-t)>e/100*5?"yellow":Math.abs(e-t)<e/100*5&&Math.abs(e-t)>e/100*1?"lightgreen":"green"}const KV=Ne.p`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: small;
  font-weight: 600;
`,aS=Ne.span`
  margin-right: 10px;
  margin-left: 10px;
`;function XV(){return X.jsx("footer",{children:X.jsxs(KV,{children:[X.jsx(aS,{children:"Copyright 2024 Thomas Johannessen"}),X.jsxs(aS,{children:["Check out the"," ",X.jsx("a",{href:"https://github.com/Thojohan/dice-randomness-tester/edit/main/README.md",children:"documentation"})," ","on Github"]})]})})}function oS(e){return J3({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.88 129.37 288.16 40.62a64.14 64.14 0 0 0-64.33 0L71.12 129.37a4 4 0 0 0 0 6.9L254 243.85a4 4 0 0 0 4.06 0L440.9 136.27a4 4 0 0 0-.02-6.9zM256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16 24 7.16 24 16-10.75 16-24 16zm-18 118.81L54 163.48a4 4 0 0 0-6 3.46v173.92a48 48 0 0 0 23.84 41.39L234 479.48a4 4 0 0 0 6-3.46V274.27a4 4 0 0 0-2-3.46zM96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm266-172.49L274 271.56a4 4 0 0 0-2 3.45V476a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.86V167a4 4 0 0 0-6-3.49zM320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24z"},child:[]}]})(e)}const YV=Ne.header`
  color: #222121;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-family: "Roboto Condensed", sans-serif;
`,qV=Ne.h1`
  font-family: "Purple Purse", serif;
  margin-top: 0px;
  margin-bottom: 5px;
  text-align: center;
  background-image: url("/public/dice-background2.png");
  padding-top: 12px;
  padding-bottom: 8px;
`,QV=Ne.p`
  width: 60%;
  align-self: center;
  font-size: small;
  font-weight: 600;
`;function ZV(){return X.jsxs(YV,{children:[X.jsxs(qV,{children:[X.jsx(oS,{style:{paddingBottom:"0.5rem"}}),"Randomness of virtual dice",X.jsx(oS,{style:{paddingBottom:"0.5rem"}})]}),X.jsx(QV,{children:'Tables and graps show average values per batch, you can select the number of batches and number of dice per batch from the form. You can also chose the range of the die, from 1 to the selected value. "Cheat!" will give each non-max die value an X % chance to be converted to max.'})]})}function UP(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=UP(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function pe(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=UP(e))&&(n&&(n+=" "),n+=t);return n}var JV=Array.isArray,qt=JV,eK=typeof _s=="object"&&_s&&_s.Object===Object&&_s,WP=eK,tK=WP,rK=typeof self=="object"&&self&&self.Object===Object&&self,nK=tK||rK||Function("return this")(),on=nK,iK=on,aK=iK.Symbol,ps=aK,uS=ps,HP=Object.prototype,oK=HP.hasOwnProperty,uK=HP.toString,wu=uS?uS.toStringTag:void 0;function lK(e){var t=oK.call(e,wu),r=e[wu];try{e[wu]=void 0;var n=!0}catch{}var i=uK.call(e);return n&&(t?e[wu]=r:delete e[wu]),i}var sK=lK,cK=Object.prototype,fK=cK.toString;function dK(e){return fK.call(e)}var pK=dK,lS=ps,vK=sK,hK=pK,yK="[object Null]",mK="[object Undefined]",sS=lS?lS.toStringTag:void 0;function gK(e){return e==null?e===void 0?mK:yK:sS&&sS in Object(e)?vK(e):hK(e)}var jn=gK;function bK(e){return e!=null&&typeof e=="object"}var Nn=bK,wK=jn,SK=Nn,$K="[object Symbol]";function _K(e){return typeof e=="symbol"||SK(e)&&wK(e)==$K}var Wo=_K,OK=qt,xK=Wo,AK=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,PK=/^\w*$/;function EK(e,t){if(OK(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||xK(e)?!0:PK.test(e)||!AK.test(e)||t!=null&&e in Object(t)}var Fg=EK;function TK(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var bi=TK;const Ho=Se(bi);var kK=jn,CK=bi,IK="[object AsyncFunction]",jK="[object Function]",NK="[object GeneratorFunction]",MK="[object Proxy]";function DK(e){if(!CK(e))return!1;var t=kK(e);return t==jK||t==NK||t==IK||t==MK}var Bg=DK;const le=Se(Bg);var LK=on,RK=LK["__core-js_shared__"],FK=RK,t0=FK,cS=function(){var e=/[^.]+$/.exec(t0&&t0.keys&&t0.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function BK(e){return!!cS&&cS in e}var zK=BK,UK=Function.prototype,WK=UK.toString;function HK(e){if(e!=null){try{return WK.call(e)}catch{}try{return e+""}catch{}}return""}var GP=HK,GK=Bg,VK=zK,KK=bi,XK=GP,YK=/[\\^$.*+?()[\]{}|]/g,qK=/^\[object .+?Constructor\]$/,QK=Function.prototype,ZK=Object.prototype,JK=QK.toString,eX=ZK.hasOwnProperty,tX=RegExp("^"+JK.call(eX).replace(YK,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function rX(e){if(!KK(e)||VK(e))return!1;var t=GK(e)?tX:qK;return t.test(XK(e))}var nX=rX;function iX(e,t){return e==null?void 0:e[t]}var aX=iX,oX=nX,uX=aX;function lX(e,t){var r=uX(e,t);return oX(r)?r:void 0}var la=lX,sX=la,cX=sX(Object,"create"),qd=cX,fS=qd;function fX(){this.__data__=fS?fS(null):{},this.size=0}var dX=fX;function pX(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var vX=pX,hX=qd,yX="__lodash_hash_undefined__",mX=Object.prototype,gX=mX.hasOwnProperty;function bX(e){var t=this.__data__;if(hX){var r=t[e];return r===yX?void 0:r}return gX.call(t,e)?t[e]:void 0}var wX=bX,SX=qd,$X=Object.prototype,_X=$X.hasOwnProperty;function OX(e){var t=this.__data__;return SX?t[e]!==void 0:_X.call(t,e)}var xX=OX,AX=qd,PX="__lodash_hash_undefined__";function EX(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=AX&&t===void 0?PX:t,this}var TX=EX,kX=dX,CX=vX,IX=wX,jX=xX,NX=TX;function Go(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Go.prototype.clear=kX;Go.prototype.delete=CX;Go.prototype.get=IX;Go.prototype.has=jX;Go.prototype.set=NX;var MX=Go;function DX(){this.__data__=[],this.size=0}var LX=DX;function RX(e,t){return e===t||e!==e&&t!==t}var zg=RX,FX=zg;function BX(e,t){for(var r=e.length;r--;)if(FX(e[r][0],t))return r;return-1}var Qd=BX,zX=Qd,UX=Array.prototype,WX=UX.splice;function HX(e){var t=this.__data__,r=zX(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():WX.call(t,r,1),--this.size,!0}var GX=HX,VX=Qd;function KX(e){var t=this.__data__,r=VX(t,e);return r<0?void 0:t[r][1]}var XX=KX,YX=Qd;function qX(e){return YX(this.__data__,e)>-1}var QX=qX,ZX=Qd;function JX(e,t){var r=this.__data__,n=ZX(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var eY=JX,tY=LX,rY=GX,nY=XX,iY=QX,aY=eY;function Vo(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Vo.prototype.clear=tY;Vo.prototype.delete=rY;Vo.prototype.get=nY;Vo.prototype.has=iY;Vo.prototype.set=aY;var Zd=Vo,oY=la,uY=on,lY=oY(uY,"Map"),Ug=lY,dS=MX,sY=Zd,cY=Ug;function fY(){this.size=0,this.__data__={hash:new dS,map:new(cY||sY),string:new dS}}var dY=fY;function pY(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var vY=pY,hY=vY;function yY(e,t){var r=e.__data__;return hY(t)?r[typeof t=="string"?"string":"hash"]:r.map}var Jd=yY,mY=Jd;function gY(e){var t=mY(this,e).delete(e);return this.size-=t?1:0,t}var bY=gY,wY=Jd;function SY(e){return wY(this,e).get(e)}var $Y=SY,_Y=Jd;function OY(e){return _Y(this,e).has(e)}var xY=OY,AY=Jd;function PY(e,t){var r=AY(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var EY=PY,TY=dY,kY=bY,CY=$Y,IY=xY,jY=EY;function Ko(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ko.prototype.clear=TY;Ko.prototype.delete=kY;Ko.prototype.get=CY;Ko.prototype.has=IY;Ko.prototype.set=jY;var Wg=Ko,VP=Wg,NY="Expected a function";function Hg(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(NY);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Hg.Cache||VP),r}Hg.Cache=VP;var KP=Hg;const MY=Se(KP);var DY=KP,LY=500;function RY(e){var t=DY(e,function(n){return r.size===LY&&r.clear(),n}),r=t.cache;return t}var FY=RY,BY=FY,zY=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,UY=/\\(\\)?/g,WY=BY(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(zY,function(r,n,i,a){t.push(i?a.replace(UY,"$1"):n||r)}),t}),HY=WY;function GY(e,t){for(var r=-1,n=e==null?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}var Gg=GY,pS=ps,VY=Gg,KY=qt,XY=Wo,YY=1/0,vS=pS?pS.prototype:void 0,hS=vS?vS.toString:void 0;function XP(e){if(typeof e=="string")return e;if(KY(e))return VY(e,XP)+"";if(XY(e))return hS?hS.call(e):"";var t=e+"";return t=="0"&&1/e==-YY?"-0":t}var qY=XP,QY=qY;function ZY(e){return e==null?"":QY(e)}var YP=ZY,JY=qt,eq=Fg,tq=HY,rq=YP;function nq(e,t){return JY(e)?e:eq(e,t)?[e]:tq(rq(e))}var qP=nq,iq=Wo,aq=1/0;function oq(e){if(typeof e=="string"||iq(e))return e;var t=e+"";return t=="0"&&1/e==-aq?"-0":t}var ep=oq,uq=qP,lq=ep;function sq(e,t){t=uq(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[lq(t[r++])];return r&&r==n?e:void 0}var Vg=sq,cq=Vg;function fq(e,t,r){var n=e==null?void 0:cq(e,t);return n===void 0?r:n}var QP=fq;const or=Se(QP);function dq(e){return e==null}var pq=dq;const de=Se(pq);var vq=jn,hq=qt,yq=Nn,mq="[object String]";function gq(e){return typeof e=="string"||!hq(e)&&yq(e)&&vq(e)==mq}var bq=gq;const vs=Se(bq);var ZP={exports:{}},Oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yt=typeof Symbol=="function"&&Symbol.for,Kg=yt?Symbol.for("react.element"):60103,Xg=yt?Symbol.for("react.portal"):60106,tp=yt?Symbol.for("react.fragment"):60107,rp=yt?Symbol.for("react.strict_mode"):60108,np=yt?Symbol.for("react.profiler"):60114,ip=yt?Symbol.for("react.provider"):60109,ap=yt?Symbol.for("react.context"):60110,Yg=yt?Symbol.for("react.async_mode"):60111,op=yt?Symbol.for("react.concurrent_mode"):60111,up=yt?Symbol.for("react.forward_ref"):60112,lp=yt?Symbol.for("react.suspense"):60113,wq=yt?Symbol.for("react.suspense_list"):60120,sp=yt?Symbol.for("react.memo"):60115,cp=yt?Symbol.for("react.lazy"):60116,Sq=yt?Symbol.for("react.block"):60121,$q=yt?Symbol.for("react.fundamental"):60117,_q=yt?Symbol.for("react.responder"):60118,Oq=yt?Symbol.for("react.scope"):60119;function cr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Kg:switch(e=e.type,e){case Yg:case op:case tp:case np:case rp:case lp:return e;default:switch(e=e&&e.$$typeof,e){case ap:case up:case cp:case sp:case ip:return e;default:return t}}case Xg:return t}}}function JP(e){return cr(e)===op}Oe.AsyncMode=Yg;Oe.ConcurrentMode=op;Oe.ContextConsumer=ap;Oe.ContextProvider=ip;Oe.Element=Kg;Oe.ForwardRef=up;Oe.Fragment=tp;Oe.Lazy=cp;Oe.Memo=sp;Oe.Portal=Xg;Oe.Profiler=np;Oe.StrictMode=rp;Oe.Suspense=lp;Oe.isAsyncMode=function(e){return JP(e)||cr(e)===Yg};Oe.isConcurrentMode=JP;Oe.isContextConsumer=function(e){return cr(e)===ap};Oe.isContextProvider=function(e){return cr(e)===ip};Oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kg};Oe.isForwardRef=function(e){return cr(e)===up};Oe.isFragment=function(e){return cr(e)===tp};Oe.isLazy=function(e){return cr(e)===cp};Oe.isMemo=function(e){return cr(e)===sp};Oe.isPortal=function(e){return cr(e)===Xg};Oe.isProfiler=function(e){return cr(e)===np};Oe.isStrictMode=function(e){return cr(e)===rp};Oe.isSuspense=function(e){return cr(e)===lp};Oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tp||e===op||e===np||e===rp||e===lp||e===wq||typeof e=="object"&&e!==null&&(e.$$typeof===cp||e.$$typeof===sp||e.$$typeof===ip||e.$$typeof===ap||e.$$typeof===up||e.$$typeof===$q||e.$$typeof===_q||e.$$typeof===Oq||e.$$typeof===Sq)};Oe.typeOf=cr;ZP.exports=Oe;var xq=ZP.exports,Aq=jn,Pq=Nn,Eq="[object Number]";function Tq(e){return typeof e=="number"||Pq(e)&&Aq(e)==Eq}var eE=Tq;const kq=Se(eE);var Cq=eE;function Iq(e){return Cq(e)&&e!=+e}var jq=Iq;const hs=Se(jq);var jt=function(t){return t===0?0:t>0?1:-1},qh=function(t){return vs(t)&&t.indexOf("%")===t.length-1},K=function(t){return kq(t)&&!hs(t)},lt=function(t){return K(t)||vs(t)},Nq=0,ys=function(t){var r=++Nq;return"".concat(t||"").concat(r)},Nt=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!K(t)&&!vs(t))return n;var a;if(qh(t)){var o=t.indexOf("%");a=r*parseFloat(t.slice(0,o))/100}else a=+t;return hs(a)&&(a=n),i&&a>r&&(a=r),a},qn=function(t){if(!t)return null;var r=Object.keys(t);return r&&r.length?t[r[0]]:null},Mq=function(t){if(!Array.isArray(t))return!1;for(var r=t.length,n={},i=0;i<r;i++)if(!n[t[i]])n[t[i]]=!0;else return!0;return!1},Gn=function(t,r){return K(t)&&K(r)?function(n){return t+n*(r-t)}:function(){return r}};function Qh(e,t,r){return!e||!e.length?null:e.find(function(n){return n&&(typeof t=="function"?t(n):or(n,t))===r})}function Ka(e,t){for(var r in e)if({}.hasOwnProperty.call(e,r)&&(!{}.hasOwnProperty.call(t,r)||e[r]!==t[r]))return!1;for(var n in t)if({}.hasOwnProperty.call(t,n)&&!{}.hasOwnProperty.call(e,n))return!1;return!0}function Zh(e){"@babel/helpers - typeof";return Zh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zh(e)}var Dq=["viewBox","children"],Lq=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],yS=["points","pathLength"],r0={svg:Dq,polygon:yS,polyline:yS},qg=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],Of=function(t,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var n=t;if(V.isValidElement(t)&&(n=t.props),!Ho(n))return null;var i={};return Object.keys(n).forEach(function(a){qg.includes(a)&&(i[a]=r||function(o){return n[a](n,o)})}),i},Rq=function(t,r,n){return function(i){return t(r,n,i),null}},Ji=function(t,r,n){if(!Ho(t)||Zh(t)!=="object")return null;var i=null;return Object.keys(t).forEach(function(a){var o=t[a];qg.includes(a)&&typeof o=="function"&&(i||(i={}),i[a]=Rq(o,r,n))}),i},Fq=["children"],Bq=["children"];function mS(e,t){if(e==null)return{};var r=zq(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function zq(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var gS={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart"},si=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},bS=null,n0=null,Qg=function e(t){if(t===bS&&Array.isArray(n0))return n0;var r=[];return V.Children.forEach(t,function(n){de(n)||(xq.isFragment(n)?r=r.concat(e(n.props.children)):r.push(n))}),n0=r,bS=t,r};function $r(e,t){var r=[],n=[];return Array.isArray(t)?n=t.map(function(i){return si(i)}):n=[si(t)],Qg(e).forEach(function(i){var a=or(i,"type.displayName")||or(i,"type.name");n.indexOf(a)!==-1&&r.push(i)}),r}function rr(e,t){var r=$r(e,t);return r&&r[0]}var wS=function(t){if(!t||!t.props)return!1;var r=t.props,n=r.width,i=r.height;return!(!K(n)||n<=0||!K(i)||i<=0)},Uq=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],Wq=function(t){return t&&t.type&&vs(t.type)&&Uq.indexOf(t.type)>=0},Hq=function(t,r,n,i){var a,o=(a=r0==null?void 0:r0[i])!==null&&a!==void 0?a:[];return!le(t)&&(i&&o.includes(r)||Lq.includes(r))||n&&qg.includes(r)},oe=function(t,r,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var i=t;if(V.isValidElement(t)&&(i=t.props),!Ho(i))return null;var a={};return Object.keys(i).forEach(function(o){var u;Hq((u=i)===null||u===void 0?void 0:u[o],o,r,n)&&(a[o]=i[o])}),a},Jh=function e(t,r){if(t===r)return!0;var n=V.Children.count(t);if(n!==V.Children.count(r))return!1;if(n===0)return!0;if(n===1)return SS(Array.isArray(t)?t[0]:t,Array.isArray(r)?r[0]:r);for(var i=0;i<n;i++){var a=t[i],o=r[i];if(Array.isArray(a)||Array.isArray(o)){if(!e(a,o))return!1}else if(!SS(a,o))return!1}return!0},SS=function(t,r){if(de(t)&&de(r))return!0;if(!de(t)&&!de(r)){var n=t.props||{},i=n.children,a=mS(n,Fq),o=r.props||{},u=o.children,l=mS(o,Bq);return i&&u?Ka(a,l)&&Jh(i,u):!i&&!u?Ka(a,l):!1}return!1},$S=function(t,r){var n=[],i={};return Qg(t).forEach(function(a,o){if(Wq(a))n.push(a);else if(a){var u=si(a.type),l=r[u]||{},s=l.handler,f=l.once;if(s&&(!f||!i[u])){var c=s(a,u,o);n.push(c),i[u]=!0}}}),n},Gq=function(t){var r=t&&t.type;return r&&gS[r]?gS[r]:null},Vq=function(t,r){return Qg(r).indexOf(t)},Kq=["children","width","height","viewBox","className","style","title","desc"];function ey(){return ey=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ey.apply(this,arguments)}function Xq(e,t){if(e==null)return{};var r=Yq(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Yq(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function ty(e){var t=e.children,r=e.width,n=e.height,i=e.viewBox,a=e.className,o=e.style,u=e.title,l=e.desc,s=Xq(e,Kq),f=i||{width:r,height:n,x:0,y:0},c=pe("recharts-surface",a);return x.createElement("svg",ey({},oe(s,!0,"svg"),{className:c,width:r,height:n,style:o,viewBox:"".concat(f.x," ").concat(f.y," ").concat(f.width," ").concat(f.height)}),x.createElement("title",null,u),x.createElement("desc",null,l),t)}var qq=["children","className"];function ry(){return ry=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ry.apply(this,arguments)}function Qq(e,t){if(e==null)return{};var r=Zq(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Zq(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var $e=x.forwardRef(function(e,t){var r=e.children,n=e.className,i=Qq(e,qq),a=pe("recharts-layer",n);return x.createElement("g",ry({className:a},oe(i,!0),{ref:t}),r)}),vi=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a]};function Jq(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),r=r>i?i:r,r<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var a=Array(i);++n<i;)a[n]=e[n+t];return a}var eQ=Jq,tQ=eQ;function rQ(e,t,r){var n=e.length;return r=r===void 0?n:r,!t&&r>=n?e:tQ(e,t,r)}var nQ=rQ,iQ="\\ud800-\\udfff",aQ="\\u0300-\\u036f",oQ="\\ufe20-\\ufe2f",uQ="\\u20d0-\\u20ff",lQ=aQ+oQ+uQ,sQ="\\ufe0e\\ufe0f",cQ="\\u200d",fQ=RegExp("["+cQ+iQ+lQ+sQ+"]");function dQ(e){return fQ.test(e)}var tE=dQ;function pQ(e){return e.split("")}var vQ=pQ,rE="\\ud800-\\udfff",hQ="\\u0300-\\u036f",yQ="\\ufe20-\\ufe2f",mQ="\\u20d0-\\u20ff",gQ=hQ+yQ+mQ,bQ="\\ufe0e\\ufe0f",wQ="["+rE+"]",ny="["+gQ+"]",iy="\\ud83c[\\udffb-\\udfff]",SQ="(?:"+ny+"|"+iy+")",nE="[^"+rE+"]",iE="(?:\\ud83c[\\udde6-\\uddff]){2}",aE="[\\ud800-\\udbff][\\udc00-\\udfff]",$Q="\\u200d",oE=SQ+"?",uE="["+bQ+"]?",_Q="(?:"+$Q+"(?:"+[nE,iE,aE].join("|")+")"+uE+oE+")*",OQ=uE+oE+_Q,xQ="(?:"+[nE+ny+"?",ny,iE,aE,wQ].join("|")+")",AQ=RegExp(iy+"(?="+iy+")|"+xQ+OQ,"g");function PQ(e){return e.match(AQ)||[]}var EQ=PQ,TQ=vQ,kQ=tE,CQ=EQ;function IQ(e){return kQ(e)?CQ(e):TQ(e)}var jQ=IQ,NQ=nQ,MQ=tE,DQ=jQ,LQ=YP;function RQ(e){return function(t){t=LQ(t);var r=MQ(t)?DQ(t):void 0,n=r?r[0]:t.charAt(0),i=r?NQ(r,1).join(""):t.slice(1);return n[e]()+i}}var FQ=RQ,BQ=FQ,zQ=BQ("toUpperCase"),UQ=zQ;const fp=Se(UQ);function Ce(e){return function(){return e}}const lE=Math.cos,xf=Math.sin,Hr=Math.sqrt,Af=Math.PI,dp=2*Af,ay=Math.PI,oy=2*ay,Ti=1e-6,WQ=oy-Ti;function sE(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=arguments[t]+e[t]}function HQ(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return sE;const r=10**t;return function(n){this._+=n[0];for(let i=1,a=n.length;i<a;++i)this._+=Math.round(arguments[i]*r)/r+n[i]}}class GQ{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?sE:HQ(t)}moveTo(t,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,r){this._append`L${this._x1=+t},${this._y1=+r}`}quadraticCurveTo(t,r,n,i){this._append`Q${+t},${+r},${this._x1=+n},${this._y1=+i}`}bezierCurveTo(t,r,n,i,a,o){this._append`C${+t},${+r},${+n},${+i},${this._x1=+a},${this._y1=+o}`}arcTo(t,r,n,i,a){if(t=+t,r=+r,n=+n,i=+i,a=+a,a<0)throw new Error(`negative radius: ${a}`);let o=this._x1,u=this._y1,l=n-t,s=i-r,f=o-t,c=u-r,d=f*f+c*c;if(this._x1===null)this._append`M${this._x1=t},${this._y1=r}`;else if(d>Ti)if(!(Math.abs(c*l-s*f)>Ti)||!a)this._append`L${this._x1=t},${this._y1=r}`;else{let p=n-o,y=i-u,m=l*l+s*s,g=p*p+y*y,h=Math.sqrt(m),v=Math.sqrt(d),b=a*Math.tan((ay-Math.acos((m+d-g)/(2*h*v)))/2),w=b/v,S=b/h;Math.abs(w-1)>Ti&&this._append`L${t+w*f},${r+w*c}`,this._append`A${a},${a},0,0,${+(c*p>f*y)},${this._x1=t+S*l},${this._y1=r+S*s}`}}arc(t,r,n,i,a,o){if(t=+t,r=+r,n=+n,o=!!o,n<0)throw new Error(`negative radius: ${n}`);let u=n*Math.cos(i),l=n*Math.sin(i),s=t+u,f=r+l,c=1^o,d=o?i-a:a-i;this._x1===null?this._append`M${s},${f}`:(Math.abs(this._x1-s)>Ti||Math.abs(this._y1-f)>Ti)&&this._append`L${s},${f}`,n&&(d<0&&(d=d%oy+oy),d>WQ?this._append`A${n},${n},0,1,${c},${t-u},${r-l}A${n},${n},0,1,${c},${this._x1=s},${this._y1=f}`:d>Ti&&this._append`A${n},${n},0,${+(d>=ay)},${c},${this._x1=t+n*Math.cos(a)},${this._y1=r+n*Math.sin(a)}`)}rect(t,r,n,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}h${n=+n}v${+i}h${-n}Z`}toString(){return this._}}function Zg(e){let t=3;return e.digits=function(r){if(!arguments.length)return t;if(r==null)t=null;else{const n=Math.floor(r);if(!(n>=0))throw new RangeError(`invalid digits: ${r}`);t=n}return e},()=>new GQ(t)}function Jg(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function cE(e){this._context=e}cE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function pp(e){return new cE(e)}function fE(e){return e[0]}function dE(e){return e[1]}function pE(e,t){var r=Ce(!0),n=null,i=pp,a=null,o=Zg(u);e=typeof e=="function"?e:e===void 0?fE:Ce(e),t=typeof t=="function"?t:t===void 0?dE:Ce(t);function u(l){var s,f=(l=Jg(l)).length,c,d=!1,p;for(n==null&&(a=i(p=o())),s=0;s<=f;++s)!(s<f&&r(c=l[s],s,l))===d&&((d=!d)?a.lineStart():a.lineEnd()),d&&a.point(+e(c,s,l),+t(c,s,l));if(p)return a=null,p+""||null}return u.x=function(l){return arguments.length?(e=typeof l=="function"?l:Ce(+l),u):e},u.y=function(l){return arguments.length?(t=typeof l=="function"?l:Ce(+l),u):t},u.defined=function(l){return arguments.length?(r=typeof l=="function"?l:Ce(!!l),u):r},u.curve=function(l){return arguments.length?(i=l,n!=null&&(a=i(n)),u):i},u.context=function(l){return arguments.length?(l==null?n=a=null:a=i(n=l),u):n},u}function fc(e,t,r){var n=null,i=Ce(!0),a=null,o=pp,u=null,l=Zg(s);e=typeof e=="function"?e:e===void 0?fE:Ce(+e),t=typeof t=="function"?t:Ce(t===void 0?0:+t),r=typeof r=="function"?r:r===void 0?dE:Ce(+r);function s(c){var d,p,y,m=(c=Jg(c)).length,g,h=!1,v,b=new Array(m),w=new Array(m);for(a==null&&(u=o(v=l())),d=0;d<=m;++d){if(!(d<m&&i(g=c[d],d,c))===h)if(h=!h)p=d,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),y=d-1;y>=p;--y)u.point(b[y],w[y]);u.lineEnd(),u.areaEnd()}h&&(b[d]=+e(g,d,c),w[d]=+t(g,d,c),u.point(n?+n(g,d,c):b[d],r?+r(g,d,c):w[d]))}if(v)return u=null,v+""||null}function f(){return pE().defined(i).curve(o).context(a)}return s.x=function(c){return arguments.length?(e=typeof c=="function"?c:Ce(+c),n=null,s):e},s.x0=function(c){return arguments.length?(e=typeof c=="function"?c:Ce(+c),s):e},s.x1=function(c){return arguments.length?(n=c==null?null:typeof c=="function"?c:Ce(+c),s):n},s.y=function(c){return arguments.length?(t=typeof c=="function"?c:Ce(+c),r=null,s):t},s.y0=function(c){return arguments.length?(t=typeof c=="function"?c:Ce(+c),s):t},s.y1=function(c){return arguments.length?(r=c==null?null:typeof c=="function"?c:Ce(+c),s):r},s.lineX0=s.lineY0=function(){return f().x(e).y(t)},s.lineY1=function(){return f().x(e).y(r)},s.lineX1=function(){return f().x(n).y(t)},s.defined=function(c){return arguments.length?(i=typeof c=="function"?c:Ce(!!c),s):i},s.curve=function(c){return arguments.length?(o=c,a!=null&&(u=o(a)),s):o},s.context=function(c){return arguments.length?(c==null?a=u=null:u=o(a=c),s):a},s}class vE{constructor(t,r){this._context=t,this._x=r}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,r){switch(t=+t,r=+r,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,r,t,r):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+r)/2,t,this._y0,t,r);break}}this._x0=t,this._y0=r}}function VQ(e){return new vE(e,!0)}function KQ(e){return new vE(e,!1)}const e1={draw(e,t){const r=Hr(t/Af);e.moveTo(r,0),e.arc(0,0,r,0,dp)}},XQ={draw(e,t){const r=Hr(t/5)/2;e.moveTo(-3*r,-r),e.lineTo(-r,-r),e.lineTo(-r,-3*r),e.lineTo(r,-3*r),e.lineTo(r,-r),e.lineTo(3*r,-r),e.lineTo(3*r,r),e.lineTo(r,r),e.lineTo(r,3*r),e.lineTo(-r,3*r),e.lineTo(-r,r),e.lineTo(-3*r,r),e.closePath()}},hE=Hr(1/3),YQ=hE*2,qQ={draw(e,t){const r=Hr(t/YQ),n=r*hE;e.moveTo(0,-r),e.lineTo(n,0),e.lineTo(0,r),e.lineTo(-n,0),e.closePath()}},QQ={draw(e,t){const r=Hr(t),n=-r/2;e.rect(n,n,r,r)}},ZQ=.8908130915292852,yE=xf(Af/10)/xf(7*Af/10),JQ=xf(dp/10)*yE,eZ=-lE(dp/10)*yE,tZ={draw(e,t){const r=Hr(t*ZQ),n=JQ*r,i=eZ*r;e.moveTo(0,-r),e.lineTo(n,i);for(let a=1;a<5;++a){const o=dp*a/5,u=lE(o),l=xf(o);e.lineTo(l*r,-u*r),e.lineTo(u*n-l*i,l*n+u*i)}e.closePath()}},i0=Hr(3),rZ={draw(e,t){const r=-Hr(t/(i0*3));e.moveTo(0,r*2),e.lineTo(-i0*r,-r),e.lineTo(i0*r,-r),e.closePath()}},fr=-.5,dr=Hr(3)/2,uy=1/Hr(12),nZ=(uy/2+1)*3,iZ={draw(e,t){const r=Hr(t/nZ),n=r/2,i=r*uy,a=n,o=r*uy+r,u=-a,l=o;e.moveTo(n,i),e.lineTo(a,o),e.lineTo(u,l),e.lineTo(fr*n-dr*i,dr*n+fr*i),e.lineTo(fr*a-dr*o,dr*a+fr*o),e.lineTo(fr*u-dr*l,dr*u+fr*l),e.lineTo(fr*n+dr*i,fr*i-dr*n),e.lineTo(fr*a+dr*o,fr*o-dr*a),e.lineTo(fr*u+dr*l,fr*l-dr*u),e.closePath()}};function aZ(e,t){let r=null,n=Zg(i);e=typeof e=="function"?e:Ce(e||e1),t=typeof t=="function"?t:Ce(t===void 0?64:+t);function i(){let a;if(r||(r=a=n()),e.apply(this,arguments).draw(r,+t.apply(this,arguments)),a)return r=null,a+""||null}return i.type=function(a){return arguments.length?(e=typeof a=="function"?a:Ce(a),i):e},i.size=function(a){return arguments.length?(t=typeof a=="function"?a:Ce(+a),i):t},i.context=function(a){return arguments.length?(r=a??null,i):r},i}function Pf(){}function Ef(e,t,r){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+r)/6)}function mE(e){this._context=e}mE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Ef(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Ef(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function oZ(e){return new mE(e)}function gE(e){this._context=e}gE.prototype={areaStart:Pf,areaEnd:Pf,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Ef(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function uZ(e){return new gE(e)}function bE(e){this._context=e}bE.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var r=(this._x0+4*this._x1+e)/6,n=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(r,n):this._context.moveTo(r,n);break;case 3:this._point=4;default:Ef(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function lZ(e){return new bE(e)}function wE(e){this._context=e}wE.prototype={areaStart:Pf,areaEnd:Pf,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function sZ(e){return new wE(e)}function _S(e){return e<0?-1:1}function OS(e,t,r){var n=e._x1-e._x0,i=t-e._x1,a=(e._y1-e._y0)/(n||i<0&&-0),o=(r-e._y1)/(i||n<0&&-0),u=(a*i+o*n)/(n+i);return(_S(a)+_S(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(u))||0}function xS(e,t){var r=e._x1-e._x0;return r?(3*(e._y1-e._y0)/r-t)/2:t}function a0(e,t,r){var n=e._x0,i=e._y0,a=e._x1,o=e._y1,u=(a-n)/3;e._context.bezierCurveTo(n+u,i+u*t,a-u,o-u*r,a,o)}function Tf(e){this._context=e}Tf.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:a0(this,this._t0,xS(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var r=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,a0(this,xS(this,r=OS(this,e,t)),r);break;default:a0(this,this._t0,r=OS(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=r}}};function SE(e){this._context=new $E(e)}(SE.prototype=Object.create(Tf.prototype)).point=function(e,t){Tf.prototype.point.call(this,t,e)};function $E(e){this._context=e}$E.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,r,n,i,a){this._context.bezierCurveTo(t,e,n,r,a,i)}};function cZ(e){return new Tf(e)}function fZ(e){return new SE(e)}function _E(e){this._context=e}_E.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,r=e.length;if(r)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),r===2)this._context.lineTo(e[1],t[1]);else for(var n=AS(e),i=AS(t),a=0,o=1;o<r;++a,++o)this._context.bezierCurveTo(n[0][a],i[0][a],n[1][a],i[1][a],e[o],t[o]);(this._line||this._line!==0&&r===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function AS(e){var t,r=e.length-1,n,i=new Array(r),a=new Array(r),o=new Array(r);for(i[0]=0,a[0]=2,o[0]=e[0]+2*e[1],t=1;t<r-1;++t)i[t]=1,a[t]=4,o[t]=4*e[t]+2*e[t+1];for(i[r-1]=2,a[r-1]=7,o[r-1]=8*e[r-1]+e[r],t=1;t<r;++t)n=i[t]/a[t-1],a[t]-=n,o[t]-=n*o[t-1];for(i[r-1]=o[r-1]/a[r-1],t=r-2;t>=0;--t)i[t]=(o[t]-i[t+1])/a[t];for(a[r-1]=(e[r]+i[r-1])/2,t=0;t<r-1;++t)a[t]=2*e[t+1]-i[t+1];return[i,a]}function dZ(e){return new _E(e)}function vp(e,t){this._context=e,this._t=t}vp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var r=this._x*(1-this._t)+e*this._t;this._context.lineTo(r,this._y),this._context.lineTo(r,t)}break}}this._x=e,this._y=t}};function pZ(e){return new vp(e,.5)}function vZ(e){return new vp(e,0)}function hZ(e){return new vp(e,1)}function lo(e,t){if((o=e.length)>1)for(var r=1,n,i,a=e[t[0]],o,u=a.length;r<o;++r)for(i=a,a=e[t[r]],n=0;n<u;++n)a[n][1]+=a[n][0]=isNaN(i[n][1])?i[n][0]:i[n][1]}function ly(e){for(var t=e.length,r=new Array(t);--t>=0;)r[t]=t;return r}function yZ(e,t){return e[t]}function mZ(e){const t=[];return t.key=e,t}function gZ(){var e=Ce([]),t=ly,r=lo,n=yZ;function i(a){var o=Array.from(e.apply(this,arguments),mZ),u,l=o.length,s=-1,f;for(const c of a)for(u=0,++s;u<l;++u)(o[u][s]=[0,+n(c,o[u].key,s,a)]).data=c;for(u=0,f=Jg(t(o));u<l;++u)o[f[u]].index=u;return r(o,f),o}return i.keys=function(a){return arguments.length?(e=typeof a=="function"?a:Ce(Array.from(a)),i):e},i.value=function(a){return arguments.length?(n=typeof a=="function"?a:Ce(+a),i):n},i.order=function(a){return arguments.length?(t=a==null?ly:typeof a=="function"?a:Ce(Array.from(a)),i):t},i.offset=function(a){return arguments.length?(r=a??lo,i):r},i}function bZ(e,t){if((n=e.length)>0){for(var r,n,i=0,a=e[0].length,o;i<a;++i){for(o=r=0;r<n;++r)o+=e[r][i][1]||0;if(o)for(r=0;r<n;++r)e[r][i][1]/=o}lo(e,t)}}function wZ(e,t){if((i=e.length)>0){for(var r=0,n=e[t[0]],i,a=n.length;r<a;++r){for(var o=0,u=0;o<i;++o)u+=e[o][r][1]||0;n[r][1]+=n[r][0]=-u/2}lo(e,t)}}function SZ(e,t){if(!(!((o=e.length)>0)||!((a=(i=e[t[0]]).length)>0))){for(var r=0,n=1,i,a,o;n<a;++n){for(var u=0,l=0,s=0;u<o;++u){for(var f=e[t[u]],c=f[n][1]||0,d=f[n-1][1]||0,p=(c-d)/2,y=0;y<u;++y){var m=e[t[y]],g=m[n][1]||0,h=m[n-1][1]||0;p+=g-h}l+=c,s+=p*c}i[n-1][1]+=i[n-1][0]=r,l&&(r-=s/l)}i[n-1][1]+=i[n-1][0]=r,lo(e,t)}}function wl(e){"@babel/helpers - typeof";return wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wl(e)}var $Z=["type","size","sizeType"];function sy(){return sy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},sy.apply(this,arguments)}function PS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ES(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?PS(Object(r),!0).forEach(function(n){_Z(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):PS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _Z(e,t,r){return t=OZ(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function OZ(e){var t=xZ(e,"string");return wl(t)=="symbol"?t:String(t)}function xZ(e,t){if(wl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(wl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function AZ(e,t){if(e==null)return{};var r=PZ(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function PZ(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var OE={symbolCircle:e1,symbolCross:XQ,symbolDiamond:qQ,symbolSquare:QQ,symbolStar:tZ,symbolTriangle:rZ,symbolWye:iZ},EZ=Math.PI/180,TZ=function(t){var r="symbol".concat(fp(t));return OE[r]||e1},kZ=function(t,r,n){if(r==="area")return t;switch(n){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var i=18*EZ;return 1.25*t*t*(Math.tan(i)-Math.tan(i*2)*Math.pow(Math.tan(i),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},CZ=function(t,r){OE["symbol".concat(fp(t))]=r},t1=function(t){var r=t.type,n=r===void 0?"circle":r,i=t.size,a=i===void 0?64:i,o=t.sizeType,u=o===void 0?"area":o,l=AZ(t,$Z),s=ES(ES({},l),{},{type:n,size:a,sizeType:u}),f=function(){var g=TZ(n),h=aZ().type(g).size(kZ(a,u,n));return h()},c=s.className,d=s.cx,p=s.cy,y=oe(s,!0);return d===+d&&p===+p&&a===+a?x.createElement("path",sy({},y,{className:pe("recharts-symbols",c),transform:"translate(".concat(d,", ").concat(p,")"),d:f()})):null};t1.registerSymbol=CZ;function so(e){"@babel/helpers - typeof";return so=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},so(e)}function cy(){return cy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},cy.apply(this,arguments)}function TS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function IZ(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?TS(Object(r),!0).forEach(function(n){Sl(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):TS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function jZ(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function NZ(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,AE(n.key),n)}}function MZ(e,t,r){return t&&NZ(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function DZ(e,t,r){return t=kf(t),LZ(e,xE()?Reflect.construct(t,r||[],kf(e).constructor):t.apply(e,r))}function LZ(e,t){if(t&&(so(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return RZ(e)}function RZ(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xE(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xE=function(){return!!e})()}function kf(e){return kf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},kf(e)}function FZ(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fy(e,t)}function fy(e,t){return fy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},fy(e,t)}function Sl(e,t,r){return t=AE(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function AE(e){var t=BZ(e,"string");return so(t)=="symbol"?t:String(t)}function BZ(e,t){if(so(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(so(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var pr=32,r1=function(e){FZ(t,e);function t(){return jZ(this,t),DZ(this,t,arguments)}return MZ(t,[{key:"renderIcon",value:function(n){var i=this.props.inactiveColor,a=pr/2,o=pr/6,u=pr/3,l=n.inactive?i:n.color;if(n.type==="plainline")return x.createElement("line",{strokeWidth:4,fill:"none",stroke:l,strokeDasharray:n.payload.strokeDasharray,x1:0,y1:a,x2:pr,y2:a,className:"recharts-legend-icon"});if(n.type==="line")return x.createElement("path",{strokeWidth:4,fill:"none",stroke:l,d:"M0,".concat(a,"h").concat(u,`
            A`).concat(o,",").concat(o,",0,1,1,").concat(2*u,",").concat(a,`
            H`).concat(pr,"M").concat(2*u,",").concat(a,`
            A`).concat(o,",").concat(o,",0,1,1,").concat(u,",").concat(a),className:"recharts-legend-icon"});if(n.type==="rect")return x.createElement("path",{stroke:"none",fill:l,d:"M0,".concat(pr/8,"h").concat(pr,"v").concat(pr*3/4,"h").concat(-pr,"z"),className:"recharts-legend-icon"});if(x.isValidElement(n.legendIcon)){var s=IZ({},n);return delete s.legendIcon,x.cloneElement(n.legendIcon,s)}return x.createElement(t1,{fill:l,cx:a,cy:a,size:pr,sizeType:"diameter",type:n.type})}},{key:"renderItems",value:function(){var n=this,i=this.props,a=i.payload,o=i.iconSize,u=i.layout,l=i.formatter,s=i.inactiveColor,f={x:0,y:0,width:pr,height:pr},c={display:u==="horizontal"?"inline-block":"block",marginRight:10},d={display:"inline-block",verticalAlign:"middle",marginRight:4};return a.map(function(p,y){var m=p.formatter||l,g=pe(Sl(Sl({"recharts-legend-item":!0},"legend-item-".concat(y),!0),"inactive",p.inactive));if(p.type==="none")return null;var h=le(p.value)?null:p.value;vi(!le(p.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var v=p.inactive?s:p.color;return x.createElement("li",cy({className:g,style:c,key:"legend-item-".concat(y)},Ji(n.props,p,y)),x.createElement(ty,{width:o,height:o,viewBox:f,style:d},n.renderIcon(p)),x.createElement("span",{className:"recharts-legend-item-text",style:{color:v}},m?m(h,p,y):h))})}},{key:"render",value:function(){var n=this.props,i=n.payload,a=n.layout,o=n.align;if(!i||!i.length)return null;var u={padding:0,margin:0,textAlign:a==="horizontal"?o:"left"};return x.createElement("ul",{className:"recharts-default-legend",style:u},this.renderItems())}}]),t}(V.PureComponent);Sl(r1,"displayName","Legend");Sl(r1,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var zZ=Zd;function UZ(){this.__data__=new zZ,this.size=0}var WZ=UZ;function HZ(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var GZ=HZ;function VZ(e){return this.__data__.get(e)}var KZ=VZ;function XZ(e){return this.__data__.has(e)}var YZ=XZ,qZ=Zd,QZ=Ug,ZZ=Wg,JZ=200;function eJ(e,t){var r=this.__data__;if(r instanceof qZ){var n=r.__data__;if(!QZ||n.length<JZ-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new ZZ(n)}return r.set(e,t),this.size=r.size,this}var tJ=eJ,rJ=Zd,nJ=WZ,iJ=GZ,aJ=KZ,oJ=YZ,uJ=tJ;function Xo(e){var t=this.__data__=new rJ(e);this.size=t.size}Xo.prototype.clear=nJ;Xo.prototype.delete=iJ;Xo.prototype.get=aJ;Xo.prototype.has=oJ;Xo.prototype.set=uJ;var PE=Xo,lJ="__lodash_hash_undefined__";function sJ(e){return this.__data__.set(e,lJ),this}var cJ=sJ;function fJ(e){return this.__data__.has(e)}var dJ=fJ,pJ=Wg,vJ=cJ,hJ=dJ;function Cf(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new pJ;++t<r;)this.add(e[t])}Cf.prototype.add=Cf.prototype.push=vJ;Cf.prototype.has=hJ;var EE=Cf;function yJ(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var TE=yJ;function mJ(e,t){return e.has(t)}var kE=mJ,gJ=EE,bJ=TE,wJ=kE,SJ=1,$J=2;function _J(e,t,r,n,i,a){var o=r&SJ,u=e.length,l=t.length;if(u!=l&&!(o&&l>u))return!1;var s=a.get(e),f=a.get(t);if(s&&f)return s==t&&f==e;var c=-1,d=!0,p=r&$J?new gJ:void 0;for(a.set(e,t),a.set(t,e);++c<u;){var y=e[c],m=t[c];if(n)var g=o?n(m,y,c,t,e,a):n(y,m,c,e,t,a);if(g!==void 0){if(g)continue;d=!1;break}if(p){if(!bJ(t,function(h,v){if(!wJ(p,v)&&(y===h||i(y,h,r,n,a)))return p.push(v)})){d=!1;break}}else if(!(y===m||i(y,m,r,n,a))){d=!1;break}}return a.delete(e),a.delete(t),d}var CE=_J,OJ=on,xJ=OJ.Uint8Array,AJ=xJ;function PJ(e){var t=-1,r=Array(e.size);return e.forEach(function(n,i){r[++t]=[i,n]}),r}var EJ=PJ;function TJ(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var n1=TJ,kS=ps,CS=AJ,kJ=zg,CJ=CE,IJ=EJ,jJ=n1,NJ=1,MJ=2,DJ="[object Boolean]",LJ="[object Date]",RJ="[object Error]",FJ="[object Map]",BJ="[object Number]",zJ="[object RegExp]",UJ="[object Set]",WJ="[object String]",HJ="[object Symbol]",GJ="[object ArrayBuffer]",VJ="[object DataView]",IS=kS?kS.prototype:void 0,o0=IS?IS.valueOf:void 0;function KJ(e,t,r,n,i,a,o){switch(r){case VJ:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case GJ:return!(e.byteLength!=t.byteLength||!a(new CS(e),new CS(t)));case DJ:case LJ:case BJ:return kJ(+e,+t);case RJ:return e.name==t.name&&e.message==t.message;case zJ:case WJ:return e==t+"";case FJ:var u=IJ;case UJ:var l=n&NJ;if(u||(u=jJ),e.size!=t.size&&!l)return!1;var s=o.get(e);if(s)return s==t;n|=MJ,o.set(e,t);var f=CJ(u(e),u(t),n,i,a,o);return o.delete(e),f;case HJ:if(o0)return o0.call(e)==o0.call(t)}return!1}var XJ=KJ;function YJ(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}var IE=YJ,qJ=IE,QJ=qt;function ZJ(e,t,r){var n=t(e);return QJ(e)?n:qJ(n,r(e))}var JJ=ZJ;function eee(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var o=e[r];t(o,r,e)&&(a[i++]=o)}return a}var tee=eee;function ree(){return[]}var nee=ree,iee=tee,aee=nee,oee=Object.prototype,uee=oee.propertyIsEnumerable,jS=Object.getOwnPropertySymbols,lee=jS?function(e){return e==null?[]:(e=Object(e),iee(jS(e),function(t){return uee.call(e,t)}))}:aee,see=lee;function cee(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var fee=cee,dee=jn,pee=Nn,vee="[object Arguments]";function hee(e){return pee(e)&&dee(e)==vee}var yee=hee,NS=yee,mee=Nn,jE=Object.prototype,gee=jE.hasOwnProperty,bee=jE.propertyIsEnumerable,wee=NS(function(){return arguments}())?NS:function(e){return mee(e)&&gee.call(e,"callee")&&!bee.call(e,"callee")},i1=wee,If={exports:{}};function See(){return!1}var $ee=See;If.exports;(function(e,t){var r=on,n=$ee,i=t&&!t.nodeType&&t,a=i&&!0&&e&&!e.nodeType&&e,o=a&&a.exports===i,u=o?r.Buffer:void 0,l=u?u.isBuffer:void 0,s=l||n;e.exports=s})(If,If.exports);var NE=If.exports,_ee=9007199254740991,Oee=/^(?:0|[1-9]\d*)$/;function xee(e,t){var r=typeof e;return t=t??_ee,!!t&&(r=="number"||r!="symbol"&&Oee.test(e))&&e>-1&&e%1==0&&e<t}var a1=xee,Aee=9007199254740991;function Pee(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Aee}var o1=Pee,Eee=jn,Tee=o1,kee=Nn,Cee="[object Arguments]",Iee="[object Array]",jee="[object Boolean]",Nee="[object Date]",Mee="[object Error]",Dee="[object Function]",Lee="[object Map]",Ree="[object Number]",Fee="[object Object]",Bee="[object RegExp]",zee="[object Set]",Uee="[object String]",Wee="[object WeakMap]",Hee="[object ArrayBuffer]",Gee="[object DataView]",Vee="[object Float32Array]",Kee="[object Float64Array]",Xee="[object Int8Array]",Yee="[object Int16Array]",qee="[object Int32Array]",Qee="[object Uint8Array]",Zee="[object Uint8ClampedArray]",Jee="[object Uint16Array]",ete="[object Uint32Array]",Re={};Re[Vee]=Re[Kee]=Re[Xee]=Re[Yee]=Re[qee]=Re[Qee]=Re[Zee]=Re[Jee]=Re[ete]=!0;Re[Cee]=Re[Iee]=Re[Hee]=Re[jee]=Re[Gee]=Re[Nee]=Re[Mee]=Re[Dee]=Re[Lee]=Re[Ree]=Re[Fee]=Re[Bee]=Re[zee]=Re[Uee]=Re[Wee]=!1;function tte(e){return kee(e)&&Tee(e.length)&&!!Re[Eee(e)]}var rte=tte;function nte(e){return function(t){return e(t)}}var ME=nte,jf={exports:{}};jf.exports;(function(e,t){var r=WP,n=t&&!t.nodeType&&t,i=n&&!0&&e&&!e.nodeType&&e,a=i&&i.exports===n,o=a&&r.process,u=function(){try{var l=i&&i.require&&i.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();e.exports=u})(jf,jf.exports);var ite=jf.exports,ate=rte,ote=ME,MS=ite,DS=MS&&MS.isTypedArray,ute=DS?ote(DS):ate,DE=ute,lte=fee,ste=i1,cte=qt,fte=NE,dte=a1,pte=DE,vte=Object.prototype,hte=vte.hasOwnProperty;function yte(e,t){var r=cte(e),n=!r&&ste(e),i=!r&&!n&&fte(e),a=!r&&!n&&!i&&pte(e),o=r||n||i||a,u=o?lte(e.length,String):[],l=u.length;for(var s in e)(t||hte.call(e,s))&&!(o&&(s=="length"||i&&(s=="offset"||s=="parent")||a&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||dte(s,l)))&&u.push(s);return u}var mte=yte,gte=Object.prototype;function bte(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||gte;return e===r}var wte=bte;function Ste(e,t){return function(r){return e(t(r))}}var LE=Ste,$te=LE,_te=$te(Object.keys,Object),Ote=_te,xte=wte,Ate=Ote,Pte=Object.prototype,Ete=Pte.hasOwnProperty;function Tte(e){if(!xte(e))return Ate(e);var t=[];for(var r in Object(e))Ete.call(e,r)&&r!="constructor"&&t.push(r);return t}var kte=Tte,Cte=Bg,Ite=o1;function jte(e){return e!=null&&Ite(e.length)&&!Cte(e)}var ms=jte,Nte=mte,Mte=kte,Dte=ms;function Lte(e){return Dte(e)?Nte(e):Mte(e)}var hp=Lte,Rte=JJ,Fte=see,Bte=hp;function zte(e){return Rte(e,Bte,Fte)}var Ute=zte,LS=Ute,Wte=1,Hte=Object.prototype,Gte=Hte.hasOwnProperty;function Vte(e,t,r,n,i,a){var o=r&Wte,u=LS(e),l=u.length,s=LS(t),f=s.length;if(l!=f&&!o)return!1;for(var c=l;c--;){var d=u[c];if(!(o?d in t:Gte.call(t,d)))return!1}var p=a.get(e),y=a.get(t);if(p&&y)return p==t&&y==e;var m=!0;a.set(e,t),a.set(t,e);for(var g=o;++c<l;){d=u[c];var h=e[d],v=t[d];if(n)var b=o?n(v,h,d,t,e,a):n(h,v,d,e,t,a);if(!(b===void 0?h===v||i(h,v,r,n,a):b)){m=!1;break}g||(g=d=="constructor")}if(m&&!g){var w=e.constructor,S=t.constructor;w!=S&&"constructor"in e&&"constructor"in t&&!(typeof w=="function"&&w instanceof w&&typeof S=="function"&&S instanceof S)&&(m=!1)}return a.delete(e),a.delete(t),m}var Kte=Vte,Xte=la,Yte=on,qte=Xte(Yte,"DataView"),Qte=qte,Zte=la,Jte=on,ere=Zte(Jte,"Promise"),tre=ere,rre=la,nre=on,ire=rre(nre,"Set"),RE=ire,are=la,ore=on,ure=are(ore,"WeakMap"),lre=ure,dy=Qte,py=Ug,vy=tre,hy=RE,yy=lre,FE=jn,Yo=GP,RS="[object Map]",sre="[object Object]",FS="[object Promise]",BS="[object Set]",zS="[object WeakMap]",US="[object DataView]",cre=Yo(dy),fre=Yo(py),dre=Yo(vy),pre=Yo(hy),vre=Yo(yy),ki=FE;(dy&&ki(new dy(new ArrayBuffer(1)))!=US||py&&ki(new py)!=RS||vy&&ki(vy.resolve())!=FS||hy&&ki(new hy)!=BS||yy&&ki(new yy)!=zS)&&(ki=function(e){var t=FE(e),r=t==sre?e.constructor:void 0,n=r?Yo(r):"";if(n)switch(n){case cre:return US;case fre:return RS;case dre:return FS;case pre:return BS;case vre:return zS}return t});var hre=ki,u0=PE,yre=CE,mre=XJ,gre=Kte,WS=hre,HS=qt,GS=NE,bre=DE,wre=1,VS="[object Arguments]",KS="[object Array]",dc="[object Object]",Sre=Object.prototype,XS=Sre.hasOwnProperty;function $re(e,t,r,n,i,a){var o=HS(e),u=HS(t),l=o?KS:WS(e),s=u?KS:WS(t);l=l==VS?dc:l,s=s==VS?dc:s;var f=l==dc,c=s==dc,d=l==s;if(d&&GS(e)){if(!GS(t))return!1;o=!0,f=!1}if(d&&!f)return a||(a=new u0),o||bre(e)?yre(e,t,r,n,i,a):mre(e,t,l,r,n,i,a);if(!(r&wre)){var p=f&&XS.call(e,"__wrapped__"),y=c&&XS.call(t,"__wrapped__");if(p||y){var m=p?e.value():e,g=y?t.value():t;return a||(a=new u0),i(m,g,r,n,a)}}return d?(a||(a=new u0),gre(e,t,r,n,i,a)):!1}var _re=$re,Ore=_re,YS=Nn;function BE(e,t,r,n,i){return e===t?!0:e==null||t==null||!YS(e)&&!YS(t)?e!==e&&t!==t:Ore(e,t,r,n,BE,i)}var u1=BE,xre=PE,Are=u1,Pre=1,Ere=2;function Tre(e,t,r,n){var i=r.length,a=i,o=!n;if(e==null)return!a;for(e=Object(e);i--;){var u=r[i];if(o&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++i<a;){u=r[i];var l=u[0],s=e[l],f=u[1];if(o&&u[2]){if(s===void 0&&!(l in e))return!1}else{var c=new xre;if(n)var d=n(s,f,l,e,t,c);if(!(d===void 0?Are(f,s,Pre|Ere,n,c):d))return!1}}return!0}var kre=Tre,Cre=bi;function Ire(e){return e===e&&!Cre(e)}var zE=Ire,jre=zE,Nre=hp;function Mre(e){for(var t=Nre(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,jre(i)]}return t}var Dre=Mre;function Lre(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}var UE=Lre,Rre=kre,Fre=Dre,Bre=UE;function zre(e){var t=Fre(e);return t.length==1&&t[0][2]?Bre(t[0][0],t[0][1]):function(r){return r===e||Rre(r,e,t)}}var Ure=zre;function Wre(e,t){return e!=null&&t in Object(e)}var Hre=Wre,Gre=qP,Vre=i1,Kre=qt,Xre=a1,Yre=o1,qre=ep;function Qre(e,t,r){t=Gre(t,e);for(var n=-1,i=t.length,a=!1;++n<i;){var o=qre(t[n]);if(!(a=e!=null&&r(e,o)))break;e=e[o]}return a||++n!=i?a:(i=e==null?0:e.length,!!i&&Yre(i)&&Xre(o,i)&&(Kre(e)||Vre(e)))}var Zre=Qre,Jre=Hre,ene=Zre;function tne(e,t){return e!=null&&ene(e,t,Jre)}var rne=tne,nne=u1,ine=QP,ane=rne,one=Fg,une=zE,lne=UE,sne=ep,cne=1,fne=2;function dne(e,t){return one(e)&&une(t)?lne(sne(e),t):function(r){var n=ine(r,e);return n===void 0&&n===t?ane(r,e):nne(t,n,cne|fne)}}var pne=dne;function vne(e){return e}var qo=vne;function hne(e){return function(t){return t==null?void 0:t[e]}}var yne=hne,mne=Vg;function gne(e){return function(t){return mne(t,e)}}var bne=gne,wne=yne,Sne=bne,$ne=Fg,_ne=ep;function One(e){return $ne(e)?wne(_ne(e)):Sne(e)}var xne=One,Ane=Ure,Pne=pne,Ene=qo,Tne=qt,kne=xne;function Cne(e){return typeof e=="function"?e:e==null?Ene:typeof e=="object"?Tne(e)?Pne(e[0],e[1]):Ane(e):kne(e)}var un=Cne;function Ine(e,t,r,n){for(var i=e.length,a=r+(n?1:-1);n?a--:++a<i;)if(t(e[a],a,e))return a;return-1}var WE=Ine;function jne(e){return e!==e}var Nne=jne;function Mne(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}var Dne=Mne,Lne=WE,Rne=Nne,Fne=Dne;function Bne(e,t,r){return t===t?Fne(e,t,r):Lne(e,Rne,r)}var zne=Bne,Une=zne;function Wne(e,t){var r=e==null?0:e.length;return!!r&&Une(e,t,0)>-1}var Hne=Wne;function Gne(e,t,r){for(var n=-1,i=e==null?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}var Vne=Gne;function Kne(){}var Xne=Kne,l0=RE,Yne=Xne,qne=n1,Qne=1/0,Zne=l0&&1/qne(new l0([,-0]))[1]==Qne?function(e){return new l0(e)}:Yne,Jne=Zne,eie=EE,tie=Hne,rie=Vne,nie=kE,iie=Jne,aie=n1,oie=200;function uie(e,t,r){var n=-1,i=tie,a=e.length,o=!0,u=[],l=u;if(r)o=!1,i=rie;else if(a>=oie){var s=t?null:iie(e);if(s)return aie(s);o=!1,i=nie,l=new eie}else l=t?[]:u;e:for(;++n<a;){var f=e[n],c=t?t(f):f;if(f=r||f!==0?f:0,o&&c===c){for(var d=l.length;d--;)if(l[d]===c)continue e;t&&l.push(c),u.push(f)}else i(l,c,r)||(l!==u&&l.push(c),u.push(f))}return u}var lie=uie,sie=un,cie=lie;function fie(e,t){return e&&e.length?cie(e,sie(t)):[]}var die=fie;const qS=Se(die);function HE(e,t,r){return t===!0?qS(e,r):le(t)?qS(e,t):e}function co(e){"@babel/helpers - typeof";return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},co(e)}var pie=["ref"];function QS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Oi(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?QS(Object(r),!0).forEach(function(n){yp(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):QS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function vie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ZS(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,KE(n.key),n)}}function hie(e,t,r){return t&&ZS(e.prototype,t),r&&ZS(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function yie(e,t,r){return t=Nf(t),mie(e,GE()?Reflect.construct(t,r||[],Nf(e).constructor):t.apply(e,r))}function mie(e,t){if(t&&(co(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return VE(e)}function GE(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(GE=function(){return!!e})()}function Nf(e){return Nf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Nf(e)}function VE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gie(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&my(e,t)}function my(e,t){return my=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},my(e,t)}function yp(e,t,r){return t=KE(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function KE(e){var t=bie(e,"string");return co(t)=="symbol"?t:String(t)}function bie(e,t){if(co(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(co(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wie(e,t){if(e==null)return{};var r=Sie(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Sie(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function $ie(e){return e.value}function _ie(e,t){if(x.isValidElement(e))return x.cloneElement(e,t);if(typeof e=="function")return x.createElement(e,t);t.ref;var r=wie(t,pie);return x.createElement(r1,r)}var JS=1,$l=function(e){gie(t,e);function t(){var r;vie(this,t);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return r=yie(this,t,[].concat(i)),yp(VE(r),"lastBoundingBox",{width:-1,height:-1}),r}return hie(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var n=this.wrapperNode.getBoundingClientRect();return n.height=this.wrapperNode.offsetHeight,n.width=this.wrapperNode.offsetWidth,n}return null}},{key:"updateBBox",value:function(){var n=this.props.onBBoxUpdate,i=this.getBBox();i?(Math.abs(i.width-this.lastBoundingBox.width)>JS||Math.abs(i.height-this.lastBoundingBox.height)>JS)&&(this.lastBoundingBox.width=i.width,this.lastBoundingBox.height=i.height,n&&n(i)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,n&&n(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?Oi({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(n){var i=this.props,a=i.layout,o=i.align,u=i.verticalAlign,l=i.margin,s=i.chartWidth,f=i.chartHeight,c,d;if(!n||(n.left===void 0||n.left===null)&&(n.right===void 0||n.right===null))if(o==="center"&&a==="vertical"){var p=this.getBBoxSnapshot();c={left:((s||0)-p.width)/2}}else c=o==="right"?{right:l&&l.right||0}:{left:l&&l.left||0};if(!n||(n.top===void 0||n.top===null)&&(n.bottom===void 0||n.bottom===null))if(u==="middle"){var y=this.getBBoxSnapshot();d={top:((f||0)-y.height)/2}}else d=u==="bottom"?{bottom:l&&l.bottom||0}:{top:l&&l.top||0};return Oi(Oi({},c),d)}},{key:"render",value:function(){var n=this,i=this.props,a=i.content,o=i.width,u=i.height,l=i.wrapperStyle,s=i.payloadUniqBy,f=i.payload,c=Oi(Oi({position:"absolute",width:o||"auto",height:u||"auto"},this.getDefaultPosition(l)),l);return x.createElement("div",{className:"recharts-legend-wrapper",style:c,ref:function(p){n.wrapperNode=p}},_ie(a,Oi(Oi({},this.props),{},{payload:HE(f,s,$ie)})))}}],[{key:"getWithHeight",value:function(n,i){var a=n.props.layout;return a==="vertical"&&K(n.props.height)?{height:n.props.height}:a==="horizontal"?{width:n.props.width||i}:null}}]),t}(V.PureComponent);yp($l,"displayName","Legend");yp($l,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var e$=ps,Oie=i1,xie=qt,t$=e$?e$.isConcatSpreadable:void 0;function Aie(e){return xie(e)||Oie(e)||!!(t$&&e&&e[t$])}var Pie=Aie,Eie=IE,Tie=Pie;function XE(e,t,r,n,i){var a=-1,o=e.length;for(r||(r=Tie),i||(i=[]);++a<o;){var u=e[a];t>0&&r(u)?t>1?XE(u,t-1,r,n,i):Eie(i,u):n||(i[i.length]=u)}return i}var YE=XE;function kie(e){return function(t,r,n){for(var i=-1,a=Object(t),o=n(t),u=o.length;u--;){var l=o[e?u:++i];if(r(a[l],l,a)===!1)break}return t}}var Cie=kie,Iie=Cie,jie=Iie(),Nie=jie,Mie=Nie,Die=hp;function Lie(e,t){return e&&Mie(e,t,Die)}var qE=Lie,Rie=ms;function Fie(e,t){return function(r,n){if(r==null)return r;if(!Rie(r))return e(r,n);for(var i=r.length,a=t?i:-1,o=Object(r);(t?a--:++a<i)&&n(o[a],a,o)!==!1;);return r}}var Bie=Fie,zie=qE,Uie=Bie,Wie=Uie(zie),l1=Wie,Hie=l1,Gie=ms;function Vie(e,t){var r=-1,n=Gie(e)?Array(e.length):[];return Hie(e,function(i,a,o){n[++r]=t(i,a,o)}),n}var QE=Vie;function Kie(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}var Xie=Kie,r$=Wo;function Yie(e,t){if(e!==t){var r=e!==void 0,n=e===null,i=e===e,a=r$(e),o=t!==void 0,u=t===null,l=t===t,s=r$(t);if(!u&&!s&&!a&&e>t||a&&o&&l&&!u&&!s||n&&o&&l||!r&&l||!i)return 1;if(!n&&!a&&!s&&e<t||s&&r&&i&&!n&&!a||u&&r&&i||!o&&i||!l)return-1}return 0}var qie=Yie,Qie=qie;function Zie(e,t,r){for(var n=-1,i=e.criteria,a=t.criteria,o=i.length,u=r.length;++n<o;){var l=Qie(i[n],a[n]);if(l){if(n>=u)return l;var s=r[n];return l*(s=="desc"?-1:1)}}return e.index-t.index}var Jie=Zie,s0=Gg,eae=Vg,tae=un,rae=QE,nae=Xie,iae=ME,aae=Jie,oae=qo,uae=qt;function lae(e,t,r){t.length?t=s0(t,function(a){return uae(a)?function(o){return eae(o,a.length===1?a[0]:a)}:a}):t=[oae];var n=-1;t=s0(t,iae(tae));var i=rae(e,function(a,o,u){var l=s0(t,function(s){return s(a)});return{criteria:l,index:++n,value:a}});return nae(i,function(a,o){return aae(a,o,r)})}var sae=lae;function cae(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var fae=cae,dae=fae,n$=Math.max;function pae(e,t,r){return t=n$(t===void 0?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=n$(n.length-t,0),o=Array(a);++i<a;)o[i]=n[t+i];i=-1;for(var u=Array(t+1);++i<t;)u[i]=n[i];return u[t]=r(o),dae(e,this,u)}}var vae=pae;function hae(e){return function(){return e}}var yae=hae,mae=la,gae=function(){try{var e=mae(Object,"defineProperty");return e({},"",{}),e}catch{}}(),ZE=gae,bae=yae,i$=ZE,wae=qo,Sae=i$?function(e,t){return i$(e,"toString",{configurable:!0,enumerable:!1,value:bae(t),writable:!0})}:wae,$ae=Sae,_ae=800,Oae=16,xae=Date.now;function Aae(e){var t=0,r=0;return function(){var n=xae(),i=Oae-(n-r);if(r=n,i>0){if(++t>=_ae)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var Pae=Aae,Eae=$ae,Tae=Pae,kae=Tae(Eae),Cae=kae,Iae=qo,jae=vae,Nae=Cae;function Mae(e,t){return Nae(jae(e,t,Iae),e+"")}var Dae=Mae,Lae=zg,Rae=ms,Fae=a1,Bae=bi;function zae(e,t,r){if(!Bae(r))return!1;var n=typeof t;return(n=="number"?Rae(r)&&Fae(t,r.length):n=="string"&&t in r)?Lae(r[t],e):!1}var mp=zae,Uae=YE,Wae=sae,Hae=Dae,a$=mp,Gae=Hae(function(e,t){if(e==null)return[];var r=t.length;return r>1&&a$(e,t[0],t[1])?t=[]:r>2&&a$(t[0],t[1],t[2])&&(t=[t[0]]),Wae(e,Uae(t,1),[])}),Vae=Gae;const s1=Se(Vae);function _l(e){"@babel/helpers - typeof";return _l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_l(e)}function gy(){return gy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gy.apply(this,arguments)}function Kae(e,t){return Qae(e)||qae(e,t)||Yae(e,t)||Xae()}function Xae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yae(e,t){if(e){if(typeof e=="string")return o$(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o$(e,t)}}function o$(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function qae(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function Qae(e){if(Array.isArray(e))return e}function u$(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function c0(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?u$(Object(r),!0).forEach(function(n){Zae(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u$(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Zae(e,t,r){return t=Jae(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jae(e){var t=eoe(e,"string");return _l(t)=="symbol"?t:String(t)}function eoe(e,t){if(_l(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(_l(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function toe(e){return Array.isArray(e)&&lt(e[0])&&lt(e[1])?e.join(" ~ "):e}var roe=function(t){var r=t.separator,n=r===void 0?" : ":r,i=t.contentStyle,a=i===void 0?{}:i,o=t.itemStyle,u=o===void 0?{}:o,l=t.labelStyle,s=l===void 0?{}:l,f=t.payload,c=t.formatter,d=t.itemSorter,p=t.wrapperClassName,y=t.labelClassName,m=t.label,g=t.labelFormatter,h=t.accessibilityLayer,v=h===void 0?!1:h,b=function(){if(f&&f.length){var E={padding:0,margin:0},C=(d?s1(f,d):f).map(function(N,z){if(N.type==="none")return null;var F=c0({display:"block",paddingTop:4,paddingBottom:4,color:N.color||"#000"},u),B=N.formatter||c||toe,j=N.value,L=N.name,U=j,Y=L;if(B&&U!=null&&Y!=null){var G=B(j,L,N,z,f);if(Array.isArray(G)){var ne=Kae(G,2);U=ne[0],Y=ne[1]}else U=G}return x.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(z),style:F},lt(Y)?x.createElement("span",{className:"recharts-tooltip-item-name"},Y):null,lt(Y)?x.createElement("span",{className:"recharts-tooltip-item-separator"},n):null,x.createElement("span",{className:"recharts-tooltip-item-value"},U),x.createElement("span",{className:"recharts-tooltip-item-unit"},N.unit||""))});return x.createElement("ul",{className:"recharts-tooltip-item-list",style:E},C)}return null},w=c0({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},a),S=c0({margin:0},s),$=!de(m),_=$?m:"",O=pe("recharts-default-tooltip",p),T=pe("recharts-tooltip-label",y);$&&g&&f!==void 0&&f!==null&&(_=g(m,f));var P=v?{role:"status","aria-live":"assertive"}:{};return x.createElement("div",gy({className:O,style:w},P),x.createElement("p",{className:T,style:S},x.isValidElement(_)?_:"".concat(_)),b())};function Ol(e){"@babel/helpers - typeof";return Ol=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ol(e)}function pc(e,t,r){return t=noe(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function noe(e){var t=ioe(e,"string");return Ol(t)=="symbol"?t:String(t)}function ioe(e,t){if(Ol(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Ol(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Su="recharts-tooltip-wrapper",aoe={visibility:"hidden"};function ooe(e){var t=e.coordinate,r=e.translateX,n=e.translateY;return pe(Su,pc(pc(pc(pc({},"".concat(Su,"-right"),K(r)&&t&&K(t.x)&&r>=t.x),"".concat(Su,"-left"),K(r)&&t&&K(t.x)&&r<t.x),"".concat(Su,"-bottom"),K(n)&&t&&K(t.y)&&n>=t.y),"".concat(Su,"-top"),K(n)&&t&&K(t.y)&&n<t.y))}function l$(e){var t=e.allowEscapeViewBox,r=e.coordinate,n=e.key,i=e.offsetTopLeft,a=e.position,o=e.reverseDirection,u=e.tooltipDimension,l=e.viewBox,s=e.viewBoxDimension;if(a&&K(a[n]))return a[n];var f=r[n]-u-i,c=r[n]+i;if(t[n])return o[n]?f:c;if(o[n]){var d=f,p=l[n];return d<p?Math.max(c,l[n]):Math.max(f,l[n])}var y=c+u,m=l[n]+s;return y>m?Math.max(f,l[n]):Math.max(c,l[n])}function uoe(e){var t=e.translateX,r=e.translateY,n=e.useTranslate3d;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function loe(e){var t=e.allowEscapeViewBox,r=e.coordinate,n=e.offsetTopLeft,i=e.position,a=e.reverseDirection,o=e.tooltipBox,u=e.useTranslate3d,l=e.viewBox,s,f,c;return o.height>0&&o.width>0&&r?(f=l$({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:i,reverseDirection:a,tooltipDimension:o.width,viewBox:l,viewBoxDimension:l.width}),c=l$({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:i,reverseDirection:a,tooltipDimension:o.height,viewBox:l,viewBoxDimension:l.height}),s=uoe({translateX:f,translateY:c,useTranslate3d:u})):s=aoe,{cssProperties:s,cssClasses:ooe({translateX:f,translateY:c,coordinate:r})}}function fo(e){"@babel/helpers - typeof";return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}function s$(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function c$(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?s$(Object(r),!0).forEach(function(n){Sy(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s$(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function soe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function coe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,e6(n.key),n)}}function foe(e,t,r){return t&&coe(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function doe(e,t,r){return t=Mf(t),poe(e,JE()?Reflect.construct(t,r||[],Mf(e).constructor):t.apply(e,r))}function poe(e,t){if(t&&(fo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return by(e)}function JE(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(JE=function(){return!!e})()}function Mf(e){return Mf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Mf(e)}function by(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function voe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&wy(e,t)}function wy(e,t){return wy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},wy(e,t)}function Sy(e,t,r){return t=e6(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function e6(e){var t=hoe(e,"string");return fo(t)=="symbol"?t:String(t)}function hoe(e,t){if(fo(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(fo(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var f$=1,yoe=function(e){voe(t,e);function t(){var r;soe(this,t);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return r=doe(this,t,[].concat(i)),Sy(by(r),"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),Sy(by(r),"handleKeyDown",function(o){if(o.key==="Escape"){var u,l,s,f;r.setState({dismissed:!0,dismissedAtCoordinate:{x:(u=(l=r.props.coordinate)===null||l===void 0?void 0:l.x)!==null&&u!==void 0?u:0,y:(s=(f=r.props.coordinate)===null||f===void 0?void 0:f.y)!==null&&s!==void 0?s:0}})}}),r}return foe(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var n=this.wrapperNode.getBoundingClientRect();(Math.abs(n.width-this.state.lastBoundingBox.width)>f$||Math.abs(n.height-this.state.lastBoundingBox.height)>f$)&&this.setState({lastBoundingBox:{width:n.width,height:n.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var n,i;this.props.active&&this.updateBBox(),this.state.dismissed&&(((n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==this.state.dismissedAtCoordinate.x||((i=this.props.coordinate)===null||i===void 0?void 0:i.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var n=this,i=this.props,a=i.active,o=i.allowEscapeViewBox,u=i.animationDuration,l=i.animationEasing,s=i.children,f=i.coordinate,c=i.hasPayload,d=i.isAnimationActive,p=i.offset,y=i.position,m=i.reverseDirection,g=i.useTranslate3d,h=i.viewBox,v=i.wrapperStyle,b=loe({allowEscapeViewBox:o,coordinate:f,offsetTopLeft:p,position:y,reverseDirection:m,tooltipBox:this.state.lastBoundingBox,useTranslate3d:g,viewBox:h}),w=b.cssClasses,S=b.cssProperties,$=c$(c$({transition:d&&a?"transform ".concat(u,"ms ").concat(l):void 0},S),{},{pointerEvents:"none",visibility:!this.state.dismissed&&a&&c?"visible":"hidden",position:"absolute",top:0,left:0},v);return x.createElement("div",{tabIndex:-1,className:w,style:$,ref:function(O){n.wrapperNode=O}},s)}}]),t}(V.PureComponent),moe=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},$n={isSsr:moe(),get:function(t){return $n[t]},set:function(t,r){if(typeof t=="string")$n[t]=r;else{var n=Object.keys(t);n&&n.length&&n.forEach(function(i){$n[i]=t[i]})}}};function po(e){"@babel/helpers - typeof";return po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},po(e)}function d$(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function p$(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?d$(Object(r),!0).forEach(function(n){c1(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d$(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function goe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function boe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,r6(n.key),n)}}function woe(e,t,r){return t&&boe(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Soe(e,t,r){return t=Df(t),$oe(e,t6()?Reflect.construct(t,r||[],Df(e).constructor):t.apply(e,r))}function $oe(e,t){if(t&&(po(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _oe(e)}function _oe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function t6(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(t6=function(){return!!e})()}function Df(e){return Df=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Df(e)}function Ooe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$y(e,t)}function $y(e,t){return $y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},$y(e,t)}function c1(e,t,r){return t=r6(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r6(e){var t=xoe(e,"string");return po(t)=="symbol"?t:String(t)}function xoe(e,t){if(po(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(po(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Aoe(e){return e.dataKey}function Poe(e,t){return x.isValidElement(e)?x.cloneElement(e,t):typeof e=="function"?x.createElement(e,t):x.createElement(roe,t)}var Xr=function(e){Ooe(t,e);function t(){return goe(this,t),Soe(this,t,arguments)}return woe(t,[{key:"render",value:function(){var n=this,i=this.props,a=i.active,o=i.allowEscapeViewBox,u=i.animationDuration,l=i.animationEasing,s=i.content,f=i.coordinate,c=i.filterNull,d=i.isAnimationActive,p=i.offset,y=i.payload,m=i.payloadUniqBy,g=i.position,h=i.reverseDirection,v=i.useTranslate3d,b=i.viewBox,w=i.wrapperStyle,S=y??[];c&&S.length&&(S=HE(y.filter(function(_){return _.value!=null&&(_.hide!==!0||n.props.includeHidden)}),m,Aoe));var $=S.length>0;return x.createElement(yoe,{allowEscapeViewBox:o,animationDuration:u,animationEasing:l,isAnimationActive:d,active:a,coordinate:f,hasPayload:$,offset:p,position:g,reverseDirection:h,useTranslate3d:v,viewBox:b,wrapperStyle:w},Poe(s,p$(p$({},this.props),{},{payload:S})))}}]),t}(V.PureComponent);c1(Xr,"displayName","Tooltip");c1(Xr,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!$n.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var Eoe=on,Toe=function(){return Eoe.Date.now()},koe=Toe,Coe=/\s/;function Ioe(e){for(var t=e.length;t--&&Coe.test(e.charAt(t)););return t}var joe=Ioe,Noe=joe,Moe=/^\s+/;function Doe(e){return e&&e.slice(0,Noe(e)+1).replace(Moe,"")}var Loe=Doe,Roe=Loe,v$=bi,Foe=Wo,h$=NaN,Boe=/^[-+]0x[0-9a-f]+$/i,zoe=/^0b[01]+$/i,Uoe=/^0o[0-7]+$/i,Woe=parseInt;function Hoe(e){if(typeof e=="number")return e;if(Foe(e))return h$;if(v$(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=v$(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Roe(e);var r=zoe.test(e);return r||Uoe.test(e)?Woe(e.slice(2),r?2:8):Boe.test(e)?h$:+e}var n6=Hoe,Goe=bi,f0=koe,y$=n6,Voe="Expected a function",Koe=Math.max,Xoe=Math.min;function Yoe(e,t,r){var n,i,a,o,u,l,s=0,f=!1,c=!1,d=!0;if(typeof e!="function")throw new TypeError(Voe);t=y$(t)||0,Goe(r)&&(f=!!r.leading,c="maxWait"in r,a=c?Koe(y$(r.maxWait)||0,t):a,d="trailing"in r?!!r.trailing:d);function p($){var _=n,O=i;return n=i=void 0,s=$,o=e.apply(O,_),o}function y($){return s=$,u=setTimeout(h,t),f?p($):o}function m($){var _=$-l,O=$-s,T=t-_;return c?Xoe(T,a-O):T}function g($){var _=$-l,O=$-s;return l===void 0||_>=t||_<0||c&&O>=a}function h(){var $=f0();if(g($))return v($);u=setTimeout(h,m($))}function v($){return u=void 0,d&&n?p($):(n=i=void 0,o)}function b(){u!==void 0&&clearTimeout(u),s=0,n=l=i=u=void 0}function w(){return u===void 0?o:v(f0())}function S(){var $=f0(),_=g($);if(n=arguments,i=this,l=$,_){if(u===void 0)return y(l);if(c)return clearTimeout(u),u=setTimeout(h,t),p(l)}return u===void 0&&(u=setTimeout(h,t)),o}return S.cancel=b,S.flush=w,S}var qoe=Yoe,Qoe=qoe,Zoe=bi,Joe="Expected a function";function eue(e,t,r){var n=!0,i=!0;if(typeof e!="function")throw new TypeError(Joe);return Zoe(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Qoe(e,t,{leading:n,maxWait:t,trailing:i})}var tue=eue;const rue=Se(tue);var gs=function(t){return null};gs.displayName="Cell";function xl(e){"@babel/helpers - typeof";return xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xl(e)}function m$(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function _y(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?m$(Object(r),!0).forEach(function(n){nue(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m$(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function nue(e,t,r){return t=iue(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function iue(e){var t=aue(e,"string");return xl(t)=="symbol"?t:String(t)}function aue(e,t){if(xl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(xl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ga={widthCache:{},cacheCount:0},oue=2e3,uue={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},g$="recharts_measurement_span";function lue(e){var t=_y({},e);return Object.keys(t).forEach(function(r){t[r]||delete t[r]}),t}var Xu=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||$n.isSsr)return{width:0,height:0};var n=lue(r),i=JSON.stringify({text:t,copyStyle:n});if(ga.widthCache[i])return ga.widthCache[i];try{var a=document.getElementById(g$);a||(a=document.createElement("span"),a.setAttribute("id",g$),a.setAttribute("aria-hidden","true"),document.body.appendChild(a));var o=_y(_y({},uue),n);Object.assign(a.style,o),a.textContent="".concat(t);var u=a.getBoundingClientRect(),l={width:u.width,height:u.height};return ga.widthCache[i]=l,++ga.cacheCount>oue&&(ga.cacheCount=0,ga.widthCache={}),l}catch{return{width:0,height:0}}},sue=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function Al(e){"@babel/helpers - typeof";return Al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Al(e)}function Lf(e,t){return pue(e)||due(e,t)||fue(e,t)||cue()}function cue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fue(e,t){if(e){if(typeof e=="string")return b$(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b$(e,t)}}function b$(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function due(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function pue(e){if(Array.isArray(e))return e}function vue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w$(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,yue(n.key),n)}}function hue(e,t,r){return t&&w$(e.prototype,t),r&&w$(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function yue(e){var t=mue(e,"string");return Al(t)=="symbol"?t:String(t)}function mue(e,t){if(Al(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Al(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var S$=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,$$=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,gue=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,bue=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,i6={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},wue=Object.keys(i6),Da="NaN";function Sue(e,t){return e*i6[t]}var vc=function(){function e(t,r){vue(this,e),this.num=t,this.unit=r,this.num=t,this.unit=r,Number.isNaN(t)&&(this.unit=""),r!==""&&!gue.test(r)&&(this.num=NaN,this.unit=""),wue.includes(r)&&(this.num=Sue(t,r),this.unit="px")}return hue(e,[{key:"add",value:function(r){return this.unit!==r.unit?new e(NaN,""):new e(this.num+r.num,this.unit)}},{key:"subtract",value:function(r){return this.unit!==r.unit?new e(NaN,""):new e(this.num-r.num,this.unit)}},{key:"multiply",value:function(r){return this.unit!==""&&r.unit!==""&&this.unit!==r.unit?new e(NaN,""):new e(this.num*r.num,this.unit||r.unit)}},{key:"divide",value:function(r){return this.unit!==""&&r.unit!==""&&this.unit!==r.unit?new e(NaN,""):new e(this.num/r.num,this.unit||r.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(r){var n,i=(n=bue.exec(r))!==null&&n!==void 0?n:[],a=Lf(i,3),o=a[1],u=a[2];return new e(parseFloat(o),u??"")}}]),e}();function a6(e){if(e.includes(Da))return Da;for(var t=e;t.includes("*")||t.includes("/");){var r,n=(r=S$.exec(t))!==null&&r!==void 0?r:[],i=Lf(n,4),a=i[1],o=i[2],u=i[3],l=vc.parse(a??""),s=vc.parse(u??""),f=o==="*"?l.multiply(s):l.divide(s);if(f.isNaN())return Da;t=t.replace(S$,f.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var c,d=(c=$$.exec(t))!==null&&c!==void 0?c:[],p=Lf(d,4),y=p[1],m=p[2],g=p[3],h=vc.parse(y??""),v=vc.parse(g??""),b=m==="+"?h.add(v):h.subtract(v);if(b.isNaN())return Da;t=t.replace($$,b.toString())}return t}var _$=/\(([^()]*)\)/;function $ue(e){for(var t=e;t.includes("(");){var r=_$.exec(t),n=Lf(r,2),i=n[1];t=t.replace(_$,a6(i))}return t}function _ue(e){var t=e.replace(/\s+/g,"");return t=$ue(t),t=a6(t),t}function Oue(e){try{return _ue(e)}catch{return Da}}function d0(e){var t=Oue(e.slice(5,-1));return t===Da?"":t}var xue=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],Aue=["dx","dy","angle","className","breakAll"];function Oy(){return Oy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Oy.apply(this,arguments)}function O$(e,t){if(e==null)return{};var r=Pue(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Pue(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function x$(e,t){return Cue(e)||kue(e,t)||Tue(e,t)||Eue()}function Eue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tue(e,t){if(e){if(typeof e=="string")return A$(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A$(e,t)}}function A$(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function kue(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function Cue(e){if(Array.isArray(e))return e}var o6=/[ \f\n\r\t\v\u2028\u2029]+/,u6=function(t){var r=t.children,n=t.breakAll,i=t.style;try{var a=[];de(r)||(n?a=r.toString().split(""):a=r.toString().split(o6));var o=a.map(function(l){return{word:l,width:Xu(l,i).width}}),u=n?0:Xu(" ",i).width;return{wordsWithComputedWidth:o,spaceWidth:u}}catch{return null}},Iue=function(t,r,n,i,a){var o=t.maxLines,u=t.children,l=t.style,s=t.breakAll,f=K(o),c=u,d=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return z.reduce(function(F,B){var j=B.word,L=B.width,U=F[F.length-1];if(U&&(i==null||a||U.width+L+n<Number(i)))U.words.push(j),U.width+=L+n;else{var Y={words:[j],width:L};F.push(Y)}return F},[])},p=d(r),y=function(z){return z.reduce(function(F,B){return F.width>B.width?F:B})};if(!f)return p;for(var m="…",g=function(z){var F=c.slice(0,z),B=u6({breakAll:s,style:l,children:F+m}).wordsWithComputedWidth,j=d(B),L=j.length>o||y(j).width>Number(i);return[L,j]},h=0,v=c.length-1,b=0,w;h<=v&&b<=c.length-1;){var S=Math.floor((h+v)/2),$=S-1,_=g($),O=x$(_,2),T=O[0],P=O[1],k=g(S),E=x$(k,1),C=E[0];if(!T&&!C&&(h=S+1),T&&C&&(v=S-1),!T&&C){w=P;break}b++}return w||p},P$=function(t){var r=de(t)?[]:t.toString().split(o6);return[{words:r}]},jue=function(t){var r=t.width,n=t.scaleToFit,i=t.children,a=t.style,o=t.breakAll,u=t.maxLines;if((r||n)&&!$n.isSsr){var l,s,f=u6({breakAll:o,children:i,style:a});if(f){var c=f.wordsWithComputedWidth,d=f.spaceWidth;l=c,s=d}else return P$(i);return Iue({breakAll:o,children:i,maxLines:u,style:a},l,s,r,n)}return P$(i)},E$="#808080",ea=function(t){var r=t.x,n=r===void 0?0:r,i=t.y,a=i===void 0?0:i,o=t.lineHeight,u=o===void 0?"1em":o,l=t.capHeight,s=l===void 0?"0.71em":l,f=t.scaleToFit,c=f===void 0?!1:f,d=t.textAnchor,p=d===void 0?"start":d,y=t.verticalAnchor,m=y===void 0?"end":y,g=t.fill,h=g===void 0?E$:g,v=O$(t,xue),b=V.useMemo(function(){return jue({breakAll:v.breakAll,children:v.children,maxLines:v.maxLines,scaleToFit:c,style:v.style,width:v.width})},[v.breakAll,v.children,v.maxLines,c,v.style,v.width]),w=v.dx,S=v.dy,$=v.angle,_=v.className,O=v.breakAll,T=O$(v,Aue);if(!lt(n)||!lt(a))return null;var P=n+(K(w)?w:0),k=a+(K(S)?S:0),E;switch(m){case"start":E=d0("calc(".concat(s,")"));break;case"middle":E=d0("calc(".concat((b.length-1)/2," * -").concat(u," + (").concat(s," / 2))"));break;default:E=d0("calc(".concat(b.length-1," * -").concat(u,")"));break}var C=[];if(c){var N=b[0].width,z=v.width;C.push("scale(".concat((K(z)?z/N:1)/N,")"))}return $&&C.push("rotate(".concat($,", ").concat(P,", ").concat(k,")")),C.length&&(T.transform=C.join(" ")),x.createElement("text",Oy({},oe(T,!0),{x:P,y:k,className:pe("recharts-text",_),textAnchor:p,fill:h.includes("url")?E$:h}),b.map(function(F,B){var j=F.words.join(O?"":" ");return x.createElement("tspan",{x:P,dy:B===0?E:u,key:j},j)}))};function ci(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Nue(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function f1(e){let t,r,n;e.length!==2?(t=ci,r=(u,l)=>ci(e(u),l),n=(u,l)=>e(u)-l):(t=e===ci||e===Nue?e:Mue,r=e,n=e);function i(u,l,s=0,f=u.length){if(s<f){if(t(l,l)!==0)return f;do{const c=s+f>>>1;r(u[c],l)<0?s=c+1:f=c}while(s<f)}return s}function a(u,l,s=0,f=u.length){if(s<f){if(t(l,l)!==0)return f;do{const c=s+f>>>1;r(u[c],l)<=0?s=c+1:f=c}while(s<f)}return s}function o(u,l,s=0,f=u.length){const c=i(u,l,s,f-1);return c>s&&n(u[c-1],l)>-n(u[c],l)?c-1:c}return{left:i,center:o,right:a}}function Mue(){return 0}function l6(e){return e===null?NaN:+e}function*Due(e,t){for(let r of e)r!=null&&(r=+r)>=r&&(yield r)}const Lue=f1(ci),bs=Lue.right;f1(l6).center;class T$ extends Map{constructor(t,r=Bue){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:r}}),t!=null)for(const[n,i]of t)this.set(n,i)}get(t){return super.get(k$(this,t))}has(t){return super.has(k$(this,t))}set(t,r){return super.set(Rue(this,t),r)}delete(t){return super.delete(Fue(this,t))}}function k$({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):r}function Rue({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):(e.set(n,r),r)}function Fue({_intern:e,_key:t},r){const n=t(r);return e.has(n)&&(r=e.get(n),e.delete(n)),r}function Bue(e){return e!==null&&typeof e=="object"?e.valueOf():e}function zue(e=ci){if(e===ci)return s6;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,r)=>{const n=e(t,r);return n||n===0?n:(e(r,r)===0)-(e(t,t)===0)}}function s6(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const Uue=Math.sqrt(50),Wue=Math.sqrt(10),Hue=Math.sqrt(2);function Rf(e,t,r){const n=(t-e)/Math.max(0,r),i=Math.floor(Math.log10(n)),a=n/Math.pow(10,i),o=a>=Uue?10:a>=Wue?5:a>=Hue?2:1;let u,l,s;return i<0?(s=Math.pow(10,-i)/o,u=Math.round(e*s),l=Math.round(t*s),u/s<e&&++u,l/s>t&&--l,s=-s):(s=Math.pow(10,i)*o,u=Math.round(e/s),l=Math.round(t/s),u*s<e&&++u,l*s>t&&--l),l<u&&.5<=r&&r<2?Rf(e,t,r*2):[u,l,s]}function xy(e,t,r){if(t=+t,e=+e,r=+r,!(r>0))return[];if(e===t)return[e];const n=t<e,[i,a,o]=n?Rf(t,e,r):Rf(e,t,r);if(!(a>=i))return[];const u=a-i+1,l=new Array(u);if(n)if(o<0)for(let s=0;s<u;++s)l[s]=(a-s)/-o;else for(let s=0;s<u;++s)l[s]=(a-s)*o;else if(o<0)for(let s=0;s<u;++s)l[s]=(i+s)/-o;else for(let s=0;s<u;++s)l[s]=(i+s)*o;return l}function Ay(e,t,r){return t=+t,e=+e,r=+r,Rf(e,t,r)[2]}function Py(e,t,r){t=+t,e=+e,r=+r;const n=t<e,i=n?Ay(t,e,r):Ay(e,t,r);return(n?-1:1)*(i<0?1/-i:i)}function C$(e,t){let r;for(const n of e)n!=null&&(r<n||r===void 0&&n>=n)&&(r=n);return r}function I$(e,t){let r;for(const n of e)n!=null&&(r>n||r===void 0&&n>=n)&&(r=n);return r}function c6(e,t,r=0,n=1/0,i){if(t=Math.floor(t),r=Math.floor(Math.max(0,r)),n=Math.floor(Math.min(e.length-1,n)),!(r<=t&&t<=n))return e;for(i=i===void 0?s6:zue(i);n>r;){if(n-r>600){const l=n-r+1,s=t-r+1,f=Math.log(l),c=.5*Math.exp(2*f/3),d=.5*Math.sqrt(f*c*(l-c)/l)*(s-l/2<0?-1:1),p=Math.max(r,Math.floor(t-s*c/l+d)),y=Math.min(n,Math.floor(t+(l-s)*c/l+d));c6(e,t,p,y,i)}const a=e[t];let o=r,u=n;for($u(e,r,t),i(e[n],a)>0&&$u(e,r,n);o<u;){for($u(e,o,u),++o,--u;i(e[o],a)<0;)++o;for(;i(e[u],a)>0;)--u}i(e[r],a)===0?$u(e,r,u):(++u,$u(e,u,n)),u<=t&&(r=u+1),t<=u&&(n=u-1)}return e}function $u(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function Gue(e,t,r){if(e=Float64Array.from(Due(e)),!(!(n=e.length)||isNaN(t=+t))){if(t<=0||n<2)return I$(e);if(t>=1)return C$(e);var n,i=(n-1)*t,a=Math.floor(i),o=C$(c6(e,a).subarray(0,a+1)),u=I$(e.subarray(a+1));return o+(u-o)*(i-a)}}function Vue(e,t,r=l6){if(!(!(n=e.length)||isNaN(t=+t))){if(t<=0||n<2)return+r(e[0],0,e);if(t>=1)return+r(e[n-1],n-1,e);var n,i=(n-1)*t,a=Math.floor(i),o=+r(e[a],a,e),u=+r(e[a+1],a+1,e);return o+(u-o)*(i-a)}}function Kue(e,t,r){e=+e,t=+t,r=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+r;for(var n=-1,i=Math.max(0,Math.ceil((t-e)/r))|0,a=new Array(i);++n<i;)a[n]=e+n*r;return a}function Tr(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Mn(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const Ey=Symbol("implicit");function d1(){var e=new T$,t=[],r=[],n=Ey;function i(a){let o=e.get(a);if(o===void 0){if(n!==Ey)return n;e.set(a,o=t.push(a)-1)}return r[o%r.length]}return i.domain=function(a){if(!arguments.length)return t.slice();t=[],e=new T$;for(const o of a)e.has(o)||e.set(o,t.push(o)-1);return i},i.range=function(a){return arguments.length?(r=Array.from(a),i):r.slice()},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return d1(t,r).unknown(n)},Tr.apply(i,arguments),i}function Pl(){var e=d1().unknown(void 0),t=e.domain,r=e.range,n=0,i=1,a,o,u=!1,l=0,s=0,f=.5;delete e.unknown;function c(){var d=t().length,p=i<n,y=p?i:n,m=p?n:i;a=(m-y)/Math.max(1,d-l+s*2),u&&(a=Math.floor(a)),y+=(m-y-a*(d-l))*f,o=a*(1-l),u&&(y=Math.round(y),o=Math.round(o));var g=Kue(d).map(function(h){return y+a*h});return r(p?g.reverse():g)}return e.domain=function(d){return arguments.length?(t(d),c()):t()},e.range=function(d){return arguments.length?([n,i]=d,n=+n,i=+i,c()):[n,i]},e.rangeRound=function(d){return[n,i]=d,n=+n,i=+i,u=!0,c()},e.bandwidth=function(){return o},e.step=function(){return a},e.round=function(d){return arguments.length?(u=!!d,c()):u},e.padding=function(d){return arguments.length?(l=Math.min(1,s=+d),c()):l},e.paddingInner=function(d){return arguments.length?(l=Math.min(1,d),c()):l},e.paddingOuter=function(d){return arguments.length?(s=+d,c()):s},e.align=function(d){return arguments.length?(f=Math.max(0,Math.min(1,d)),c()):f},e.copy=function(){return Pl(t(),[n,i]).round(u).paddingInner(l).paddingOuter(s).align(f)},Tr.apply(c(),arguments)}function f6(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return f6(t())},e}function Yu(){return f6(Pl.apply(null,arguments).paddingInner(1))}function p1(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function d6(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function ws(){}var El=.7,Ff=1/El,Xa="\\s*([+-]?\\d+)\\s*",Tl="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",rn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Xue=/^#([0-9a-f]{3,8})$/,Yue=new RegExp(`^rgb\\(${Xa},${Xa},${Xa}\\)$`),que=new RegExp(`^rgb\\(${rn},${rn},${rn}\\)$`),Que=new RegExp(`^rgba\\(${Xa},${Xa},${Xa},${Tl}\\)$`),Zue=new RegExp(`^rgba\\(${rn},${rn},${rn},${Tl}\\)$`),Jue=new RegExp(`^hsl\\(${Tl},${rn},${rn}\\)$`),ele=new RegExp(`^hsla\\(${Tl},${rn},${rn},${Tl}\\)$`),j$={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};p1(ws,kl,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:N$,formatHex:N$,formatHex8:tle,formatHsl:rle,formatRgb:M$,toString:M$});function N$(){return this.rgb().formatHex()}function tle(){return this.rgb().formatHex8()}function rle(){return p6(this).formatHsl()}function M$(){return this.rgb().formatRgb()}function kl(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=Xue.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?D$(t):r===3?new Ht(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?hc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?hc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Yue.exec(e))?new Ht(t[1],t[2],t[3],1):(t=que.exec(e))?new Ht(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Que.exec(e))?hc(t[1],t[2],t[3],t[4]):(t=Zue.exec(e))?hc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Jue.exec(e))?F$(t[1],t[2]/100,t[3]/100,1):(t=ele.exec(e))?F$(t[1],t[2]/100,t[3]/100,t[4]):j$.hasOwnProperty(e)?D$(j$[e]):e==="transparent"?new Ht(NaN,NaN,NaN,0):null}function D$(e){return new Ht(e>>16&255,e>>8&255,e&255,1)}function hc(e,t,r,n){return n<=0&&(e=t=r=NaN),new Ht(e,t,r,n)}function nle(e){return e instanceof ws||(e=kl(e)),e?(e=e.rgb(),new Ht(e.r,e.g,e.b,e.opacity)):new Ht}function Ty(e,t,r,n){return arguments.length===1?nle(e):new Ht(e,t,r,n??1)}function Ht(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}p1(Ht,Ty,d6(ws,{brighter(e){return e=e==null?Ff:Math.pow(Ff,e),new Ht(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?El:Math.pow(El,e),new Ht(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ht(Vi(this.r),Vi(this.g),Vi(this.b),Bf(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:L$,formatHex:L$,formatHex8:ile,formatRgb:R$,toString:R$}));function L$(){return`#${Fi(this.r)}${Fi(this.g)}${Fi(this.b)}`}function ile(){return`#${Fi(this.r)}${Fi(this.g)}${Fi(this.b)}${Fi((isNaN(this.opacity)?1:this.opacity)*255)}`}function R$(){const e=Bf(this.opacity);return`${e===1?"rgb(":"rgba("}${Vi(this.r)}, ${Vi(this.g)}, ${Vi(this.b)}${e===1?")":`, ${e})`}`}function Bf(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Vi(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Fi(e){return e=Vi(e),(e<16?"0":"")+e.toString(16)}function F$(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new Fr(e,t,r,n)}function p6(e){if(e instanceof Fr)return new Fr(e.h,e.s,e.l,e.opacity);if(e instanceof ws||(e=kl(e)),!e)return new Fr;if(e instanceof Fr)return e;e=e.rgb();var t=e.r/255,r=e.g/255,n=e.b/255,i=Math.min(t,r,n),a=Math.max(t,r,n),o=NaN,u=a-i,l=(a+i)/2;return u?(t===a?o=(r-n)/u+(r<n)*6:r===a?o=(n-t)/u+2:o=(t-r)/u+4,u/=l<.5?a+i:2-a-i,o*=60):u=l>0&&l<1?0:o,new Fr(o,u,l,e.opacity)}function ale(e,t,r,n){return arguments.length===1?p6(e):new Fr(e,t,r,n??1)}function Fr(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}p1(Fr,ale,d6(ws,{brighter(e){return e=e==null?Ff:Math.pow(Ff,e),new Fr(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?El:Math.pow(El,e),new Fr(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,i=2*r-n;return new Ht(p0(e>=240?e-240:e+120,i,n),p0(e,i,n),p0(e<120?e+240:e-120,i,n),this.opacity)},clamp(){return new Fr(B$(this.h),yc(this.s),yc(this.l),Bf(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Bf(this.opacity);return`${e===1?"hsl(":"hsla("}${B$(this.h)}, ${yc(this.s)*100}%, ${yc(this.l)*100}%${e===1?")":`, ${e})`}`}}));function B$(e){return e=(e||0)%360,e<0?e+360:e}function yc(e){return Math.max(0,Math.min(1,e||0))}function p0(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}const v1=e=>()=>e;function ole(e,t){return function(r){return e+r*t}}function ule(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}function lle(e){return(e=+e)==1?v6:function(t,r){return r-t?ule(t,r,e):v1(isNaN(t)?r:t)}}function v6(e,t){var r=t-e;return r?ole(e,r):v1(isNaN(e)?t:e)}const z$=function e(t){var r=lle(t);function n(i,a){var o=r((i=Ty(i)).r,(a=Ty(a)).r),u=r(i.g,a.g),l=r(i.b,a.b),s=v6(i.opacity,a.opacity);return function(f){return i.r=o(f),i.g=u(f),i.b=l(f),i.opacity=s(f),i+""}}return n.gamma=e,n}(1);function sle(e,t){t||(t=[]);var r=e?Math.min(t.length,e.length):0,n=t.slice(),i;return function(a){for(i=0;i<r;++i)n[i]=e[i]*(1-a)+t[i]*a;return n}}function cle(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function fle(e,t){var r=t?t.length:0,n=e?Math.min(r,e.length):0,i=new Array(n),a=new Array(r),o;for(o=0;o<n;++o)i[o]=Qo(e[o],t[o]);for(;o<r;++o)a[o]=t[o];return function(u){for(o=0;o<n;++o)a[o]=i[o](u);return a}}function dle(e,t){var r=new Date;return e=+e,t=+t,function(n){return r.setTime(e*(1-n)+t*n),r}}function zf(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}function ple(e,t){var r={},n={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?r[i]=Qo(e[i],t[i]):n[i]=t[i];return function(a){for(i in r)n[i]=r[i](a);return n}}var ky=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,v0=new RegExp(ky.source,"g");function vle(e){return function(){return e}}function hle(e){return function(t){return e(t)+""}}function yle(e,t){var r=ky.lastIndex=v0.lastIndex=0,n,i,a,o=-1,u=[],l=[];for(e=e+"",t=t+"";(n=ky.exec(e))&&(i=v0.exec(t));)(a=i.index)>r&&(a=t.slice(r,a),u[o]?u[o]+=a:u[++o]=a),(n=n[0])===(i=i[0])?u[o]?u[o]+=i:u[++o]=i:(u[++o]=null,l.push({i:o,x:zf(n,i)})),r=v0.lastIndex;return r<t.length&&(a=t.slice(r),u[o]?u[o]+=a:u[++o]=a),u.length<2?l[0]?hle(l[0].x):vle(t):(t=l.length,function(s){for(var f=0,c;f<t;++f)u[(c=l[f]).i]=c.x(s);return u.join("")})}function Qo(e,t){var r=typeof t,n;return t==null||r==="boolean"?v1(t):(r==="number"?zf:r==="string"?(n=kl(t))?(t=n,z$):yle:t instanceof kl?z$:t instanceof Date?dle:cle(t)?sle:Array.isArray(t)?fle:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?ple:zf)(e,t)}function h1(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}function mle(e,t){t===void 0&&(t=e,e=Qo);for(var r=0,n=t.length-1,i=t[0],a=new Array(n<0?0:n);r<n;)a[r]=e(i,i=t[++r]);return function(o){var u=Math.max(0,Math.min(n-1,Math.floor(o*=n)));return a[u](o-u)}}function gle(e){return function(){return e}}function Uf(e){return+e}var U$=[0,1];function Mt(e){return e}function Cy(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:gle(isNaN(t)?NaN:.5)}function ble(e,t){var r;return e>t&&(r=e,e=t,t=r),function(n){return Math.max(e,Math.min(t,n))}}function wle(e,t,r){var n=e[0],i=e[1],a=t[0],o=t[1];return i<n?(n=Cy(i,n),a=r(o,a)):(n=Cy(n,i),a=r(a,o)),function(u){return a(n(u))}}function Sle(e,t,r){var n=Math.min(e.length,t.length)-1,i=new Array(n),a=new Array(n),o=-1;for(e[n]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<n;)i[o]=Cy(e[o],e[o+1]),a[o]=r(t[o],t[o+1]);return function(u){var l=bs(e,u,1,n)-1;return a[l](i[l](u))}}function Ss(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function gp(){var e=U$,t=U$,r=Qo,n,i,a,o=Mt,u,l,s;function f(){var d=Math.min(e.length,t.length);return o!==Mt&&(o=ble(e[0],e[d-1])),u=d>2?Sle:wle,l=s=null,c}function c(d){return d==null||isNaN(d=+d)?a:(l||(l=u(e.map(n),t,r)))(n(o(d)))}return c.invert=function(d){return o(i((s||(s=u(t,e.map(n),zf)))(d)))},c.domain=function(d){return arguments.length?(e=Array.from(d,Uf),f()):e.slice()},c.range=function(d){return arguments.length?(t=Array.from(d),f()):t.slice()},c.rangeRound=function(d){return t=Array.from(d),r=h1,f()},c.clamp=function(d){return arguments.length?(o=d?!0:Mt,f()):o!==Mt},c.interpolate=function(d){return arguments.length?(r=d,f()):r},c.unknown=function(d){return arguments.length?(a=d,c):a},function(d,p){return n=d,i=p,f()}}function y1(){return gp()(Mt,Mt)}function $le(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Wf(e,t){if((r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var r,n=e.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+e.slice(r+1)]}function vo(e){return e=Wf(Math.abs(e)),e?e[1]:NaN}function _le(e,t){return function(r,n){for(var i=r.length,a=[],o=0,u=e[0],l=0;i>0&&u>0&&(l+u+1>n&&(u=Math.max(1,n-l)),a.push(r.substring(i-=u,i+u)),!((l+=u+1)>n));)u=e[o=(o+1)%e.length];return a.reverse().join(t)}}function Ole(e){return function(t){return t.replace(/[0-9]/g,function(r){return e[+r]})}}var xle=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Cl(e){if(!(t=xle.exec(e)))throw new Error("invalid format: "+e);var t;return new m1({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Cl.prototype=m1.prototype;function m1(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}m1.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Ale(e){e:for(var t=e.length,r=1,n=-1,i;r<t;++r)switch(e[r]){case".":n=i=r;break;case"0":n===0&&(n=r),i=r;break;default:if(!+e[r])break e;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(i+1):e}var h6;function Ple(e,t){var r=Wf(e,t);if(!r)return e+"";var n=r[0],i=r[1],a=i-(h6=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=n.length;return a===o?n:a>o?n+new Array(a-o+1).join("0"):a>0?n.slice(0,a)+"."+n.slice(a):"0."+new Array(1-a).join("0")+Wf(e,Math.max(0,t+a-1))[0]}function W$(e,t){var r=Wf(e,t);if(!r)return e+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}const H$={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:$le,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>W$(e*100,t),r:W$,s:Ple,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function G$(e){return e}var V$=Array.prototype.map,K$=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ele(e){var t=e.grouping===void 0||e.thousands===void 0?G$:_le(V$.call(e.grouping,Number),e.thousands+""),r=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?G$:Ole(V$.call(e.numerals,String)),o=e.percent===void 0?"%":e.percent+"",u=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function s(c){c=Cl(c);var d=c.fill,p=c.align,y=c.sign,m=c.symbol,g=c.zero,h=c.width,v=c.comma,b=c.precision,w=c.trim,S=c.type;S==="n"?(v=!0,S="g"):H$[S]||(b===void 0&&(b=12),w=!0,S="g"),(g||d==="0"&&p==="=")&&(g=!0,d="0",p="=");var $=m==="$"?r:m==="#"&&/[boxX]/.test(S)?"0"+S.toLowerCase():"",_=m==="$"?n:/[%p]/.test(S)?o:"",O=H$[S],T=/[defgprs%]/.test(S);b=b===void 0?6:/[gprs]/.test(S)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b));function P(k){var E=$,C=_,N,z,F;if(S==="c")C=O(k)+C,k="";else{k=+k;var B=k<0||1/k<0;if(k=isNaN(k)?l:O(Math.abs(k),b),w&&(k=Ale(k)),B&&+k==0&&y!=="+"&&(B=!1),E=(B?y==="("?y:u:y==="-"||y==="("?"":y)+E,C=(S==="s"?K$[8+h6/3]:"")+C+(B&&y==="("?")":""),T){for(N=-1,z=k.length;++N<z;)if(F=k.charCodeAt(N),48>F||F>57){C=(F===46?i+k.slice(N+1):k.slice(N))+C,k=k.slice(0,N);break}}}v&&!g&&(k=t(k,1/0));var j=E.length+k.length+C.length,L=j<h?new Array(h-j+1).join(d):"";switch(v&&g&&(k=t(L+k,L.length?h-C.length:1/0),L=""),p){case"<":k=E+k+C+L;break;case"=":k=E+L+k+C;break;case"^":k=L.slice(0,j=L.length>>1)+E+k+C+L.slice(j);break;default:k=L+E+k+C;break}return a(k)}return P.toString=function(){return c+""},P}function f(c,d){var p=s((c=Cl(c),c.type="f",c)),y=Math.max(-8,Math.min(8,Math.floor(vo(d)/3)))*3,m=Math.pow(10,-y),g=K$[8+y/3];return function(h){return p(m*h)+g}}return{format:s,formatPrefix:f}}var mc,g1,y6;Tle({thousands:",",grouping:[3],currency:["$",""]});function Tle(e){return mc=Ele(e),g1=mc.format,y6=mc.formatPrefix,mc}function kle(e){return Math.max(0,-vo(Math.abs(e)))}function Cle(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(vo(t)/3)))*3-vo(Math.abs(e)))}function Ile(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,vo(t)-vo(e))+1}function m6(e,t,r,n){var i=Py(e,t,r),a;switch(n=Cl(n??",f"),n.type){case"s":{var o=Math.max(Math.abs(e),Math.abs(t));return n.precision==null&&!isNaN(a=Cle(i,o))&&(n.precision=a),y6(n,o)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(a=Ile(i,Math.max(Math.abs(e),Math.abs(t))))&&(n.precision=a-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(a=kle(i))&&(n.precision=a-(n.type==="%")*2);break}}return g1(n)}function wi(e){var t=e.domain;return e.ticks=function(r){var n=t();return xy(n[0],n[n.length-1],r??10)},e.tickFormat=function(r,n){var i=t();return m6(i[0],i[i.length-1],r??10,n)},e.nice=function(r){r==null&&(r=10);var n=t(),i=0,a=n.length-1,o=n[i],u=n[a],l,s,f=10;for(u<o&&(s=o,o=u,u=s,s=i,i=a,a=s);f-- >0;){if(s=Ay(o,u,r),s===l)return n[i]=o,n[a]=u,t(n);if(s>0)o=Math.floor(o/s)*s,u=Math.ceil(u/s)*s;else if(s<0)o=Math.ceil(o*s)/s,u=Math.floor(u*s)/s;else break;l=s}return e},e}function Hf(){var e=y1();return e.copy=function(){return Ss(e,Hf())},Tr.apply(e,arguments),wi(e)}function g6(e){var t;function r(n){return n==null||isNaN(n=+n)?t:n}return r.invert=r,r.domain=r.range=function(n){return arguments.length?(e=Array.from(n,Uf),r):e.slice()},r.unknown=function(n){return arguments.length?(t=n,r):t},r.copy=function(){return g6(e).unknown(t)},e=arguments.length?Array.from(e,Uf):[0,1],wi(r)}function b6(e,t){e=e.slice();var r=0,n=e.length-1,i=e[r],a=e[n],o;return a<i&&(o=r,r=n,n=o,o=i,i=a,a=o),e[r]=t.floor(i),e[n]=t.ceil(a),e}function X$(e){return Math.log(e)}function Y$(e){return Math.exp(e)}function jle(e){return-Math.log(-e)}function Nle(e){return-Math.exp(-e)}function Mle(e){return isFinite(e)?+("1e"+e):e<0?0:e}function Dle(e){return e===10?Mle:e===Math.E?Math.exp:t=>Math.pow(e,t)}function Lle(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function q$(e){return(t,r)=>-e(-t,r)}function b1(e){const t=e(X$,Y$),r=t.domain;let n=10,i,a;function o(){return i=Lle(n),a=Dle(n),r()[0]<0?(i=q$(i),a=q$(a),e(jle,Nle)):e(X$,Y$),t}return t.base=function(u){return arguments.length?(n=+u,o()):n},t.domain=function(u){return arguments.length?(r(u),o()):r()},t.ticks=u=>{const l=r();let s=l[0],f=l[l.length-1];const c=f<s;c&&([s,f]=[f,s]);let d=i(s),p=i(f),y,m;const g=u==null?10:+u;let h=[];if(!(n%1)&&p-d<g){if(d=Math.floor(d),p=Math.ceil(p),s>0){for(;d<=p;++d)for(y=1;y<n;++y)if(m=d<0?y/a(-d):y*a(d),!(m<s)){if(m>f)break;h.push(m)}}else for(;d<=p;++d)for(y=n-1;y>=1;--y)if(m=d>0?y/a(-d):y*a(d),!(m<s)){if(m>f)break;h.push(m)}h.length*2<g&&(h=xy(s,f,g))}else h=xy(d,p,Math.min(p-d,g)).map(a);return c?h.reverse():h},t.tickFormat=(u,l)=>{if(u==null&&(u=10),l==null&&(l=n===10?"s":","),typeof l!="function"&&(!(n%1)&&(l=Cl(l)).precision==null&&(l.trim=!0),l=g1(l)),u===1/0)return l;const s=Math.max(1,n*u/t.ticks().length);return f=>{let c=f/a(Math.round(i(f)));return c*n<n-.5&&(c*=n),c<=s?l(f):""}},t.nice=()=>r(b6(r(),{floor:u=>a(Math.floor(i(u))),ceil:u=>a(Math.ceil(i(u)))})),t}function w6(){const e=b1(gp()).domain([1,10]);return e.copy=()=>Ss(e,w6()).base(e.base()),Tr.apply(e,arguments),e}function Q$(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function Z$(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function w1(e){var t=1,r=e(Q$(t),Z$(t));return r.constant=function(n){return arguments.length?e(Q$(t=+n),Z$(t)):t},wi(r)}function S6(){var e=w1(gp());return e.copy=function(){return Ss(e,S6()).constant(e.constant())},Tr.apply(e,arguments)}function J$(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function Rle(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function Fle(e){return e<0?-e*e:e*e}function S1(e){var t=e(Mt,Mt),r=1;function n(){return r===1?e(Mt,Mt):r===.5?e(Rle,Fle):e(J$(r),J$(1/r))}return t.exponent=function(i){return arguments.length?(r=+i,n()):r},wi(t)}function $1(){var e=S1(gp());return e.copy=function(){return Ss(e,$1()).exponent(e.exponent())},Tr.apply(e,arguments),e}function Ble(){return $1.apply(null,arguments).exponent(.5)}function e_(e){return Math.sign(e)*e*e}function zle(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function $6(){var e=y1(),t=[0,1],r=!1,n;function i(a){var o=zle(e(a));return isNaN(o)?n:r?Math.round(o):o}return i.invert=function(a){return e.invert(e_(a))},i.domain=function(a){return arguments.length?(e.domain(a),i):e.domain()},i.range=function(a){return arguments.length?(e.range((t=Array.from(a,Uf)).map(e_)),i):t.slice()},i.rangeRound=function(a){return i.range(a).round(!0)},i.round=function(a){return arguments.length?(r=!!a,i):r},i.clamp=function(a){return arguments.length?(e.clamp(a),i):e.clamp()},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return $6(e.domain(),t).round(r).clamp(e.clamp()).unknown(n)},Tr.apply(i,arguments),wi(i)}function _6(){var e=[],t=[],r=[],n;function i(){var o=0,u=Math.max(1,t.length);for(r=new Array(u-1);++o<u;)r[o-1]=Vue(e,o/u);return a}function a(o){return o==null||isNaN(o=+o)?n:t[bs(r,o)]}return a.invertExtent=function(o){var u=t.indexOf(o);return u<0?[NaN,NaN]:[u>0?r[u-1]:e[0],u<r.length?r[u]:e[e.length-1]]},a.domain=function(o){if(!arguments.length)return e.slice();e=[];for(let u of o)u!=null&&!isNaN(u=+u)&&e.push(u);return e.sort(ci),i()},a.range=function(o){return arguments.length?(t=Array.from(o),i()):t.slice()},a.unknown=function(o){return arguments.length?(n=o,a):n},a.quantiles=function(){return r.slice()},a.copy=function(){return _6().domain(e).range(t).unknown(n)},Tr.apply(a,arguments)}function O6(){var e=0,t=1,r=1,n=[.5],i=[0,1],a;function o(l){return l!=null&&l<=l?i[bs(n,l,0,r)]:a}function u(){var l=-1;for(n=new Array(r);++l<r;)n[l]=((l+1)*t-(l-r)*e)/(r+1);return o}return o.domain=function(l){return arguments.length?([e,t]=l,e=+e,t=+t,u()):[e,t]},o.range=function(l){return arguments.length?(r=(i=Array.from(l)).length-1,u()):i.slice()},o.invertExtent=function(l){var s=i.indexOf(l);return s<0?[NaN,NaN]:s<1?[e,n[0]]:s>=r?[n[r-1],t]:[n[s-1],n[s]]},o.unknown=function(l){return arguments.length&&(a=l),o},o.thresholds=function(){return n.slice()},o.copy=function(){return O6().domain([e,t]).range(i).unknown(a)},Tr.apply(wi(o),arguments)}function x6(){var e=[.5],t=[0,1],r,n=1;function i(a){return a!=null&&a<=a?t[bs(e,a,0,n)]:r}return i.domain=function(a){return arguments.length?(e=Array.from(a),n=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(a){return arguments.length?(t=Array.from(a),n=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(a){var o=t.indexOf(a);return[e[o-1],e[o]]},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return x6().domain(e).range(t).unknown(r)},Tr.apply(i,arguments)}const h0=new Date,y0=new Date;function ct(e,t,r,n){function i(a){return e(a=arguments.length===0?new Date:new Date(+a)),a}return i.floor=a=>(e(a=new Date(+a)),a),i.ceil=a=>(e(a=new Date(a-1)),t(a,1),e(a),a),i.round=a=>{const o=i(a),u=i.ceil(a);return a-o<u-a?o:u},i.offset=(a,o)=>(t(a=new Date(+a),o==null?1:Math.floor(o)),a),i.range=(a,o,u)=>{const l=[];if(a=i.ceil(a),u=u==null?1:Math.floor(u),!(a<o)||!(u>0))return l;let s;do l.push(s=new Date(+a)),t(a,u),e(a);while(s<a&&a<o);return l},i.filter=a=>ct(o=>{if(o>=o)for(;e(o),!a(o);)o.setTime(o-1)},(o,u)=>{if(o>=o)if(u<0)for(;++u<=0;)for(;t(o,-1),!a(o););else for(;--u>=0;)for(;t(o,1),!a(o););}),r&&(i.count=(a,o)=>(h0.setTime(+a),y0.setTime(+o),e(h0),e(y0),Math.floor(r(h0,y0))),i.every=a=>(a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?i.filter(n?o=>n(o)%a===0:o=>i.count(0,o)%a===0):i)),i}const Gf=ct(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Gf.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?ct(t=>{t.setTime(Math.floor(t/e)*e)},(t,r)=>{t.setTime(+t+r*e)},(t,r)=>(r-t)/e):Gf);Gf.range;const gn=1e3,wr=gn*60,bn=wr*60,En=bn*24,_1=En*7,t_=En*30,m0=En*365,Bi=ct(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*gn)},(e,t)=>(t-e)/gn,e=>e.getUTCSeconds());Bi.range;const O1=ct(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*gn)},(e,t)=>{e.setTime(+e+t*wr)},(e,t)=>(t-e)/wr,e=>e.getMinutes());O1.range;const x1=ct(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*wr)},(e,t)=>(t-e)/wr,e=>e.getUTCMinutes());x1.range;const A1=ct(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*gn-e.getMinutes()*wr)},(e,t)=>{e.setTime(+e+t*bn)},(e,t)=>(t-e)/bn,e=>e.getHours());A1.range;const P1=ct(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*bn)},(e,t)=>(t-e)/bn,e=>e.getUTCHours());P1.range;const $s=ct(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*wr)/En,e=>e.getDate()-1);$s.range;const bp=ct(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/En,e=>e.getUTCDate()-1);bp.range;const A6=ct(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/En,e=>Math.floor(e/En));A6.range;function sa(e){return ct(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,r)=>{t.setDate(t.getDate()+r*7)},(t,r)=>(r-t-(r.getTimezoneOffset()-t.getTimezoneOffset())*wr)/_1)}const wp=sa(0),Vf=sa(1),Ule=sa(2),Wle=sa(3),ho=sa(4),Hle=sa(5),Gle=sa(6);wp.range;Vf.range;Ule.range;Wle.range;ho.range;Hle.range;Gle.range;function ca(e){return ct(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCDate(t.getUTCDate()+r*7)},(t,r)=>(r-t)/_1)}const Sp=ca(0),Kf=ca(1),Vle=ca(2),Kle=ca(3),yo=ca(4),Xle=ca(5),Yle=ca(6);Sp.range;Kf.range;Vle.range;Kle.range;yo.range;Xle.range;Yle.range;const E1=ct(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());E1.range;const T1=ct(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());T1.range;const Tn=ct(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Tn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:ct(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,r)=>{t.setFullYear(t.getFullYear()+r*e)});Tn.range;const kn=ct(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());kn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:ct(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCFullYear(t.getUTCFullYear()+r*e)});kn.range;function P6(e,t,r,n,i,a){const o=[[Bi,1,gn],[Bi,5,5*gn],[Bi,15,15*gn],[Bi,30,30*gn],[a,1,wr],[a,5,5*wr],[a,15,15*wr],[a,30,30*wr],[i,1,bn],[i,3,3*bn],[i,6,6*bn],[i,12,12*bn],[n,1,En],[n,2,2*En],[r,1,_1],[t,1,t_],[t,3,3*t_],[e,1,m0]];function u(s,f,c){const d=f<s;d&&([s,f]=[f,s]);const p=c&&typeof c.range=="function"?c:l(s,f,c),y=p?p.range(s,+f+1):[];return d?y.reverse():y}function l(s,f,c){const d=Math.abs(f-s)/c,p=f1(([,,g])=>g).right(o,d);if(p===o.length)return e.every(Py(s/m0,f/m0,c));if(p===0)return Gf.every(Math.max(Py(s,f,c),1));const[y,m]=o[d/o[p-1][2]<o[p][2]/d?p-1:p];return y.every(m)}return[u,l]}const[qle,Qle]=P6(kn,T1,Sp,A6,P1,x1),[Zle,Jle]=P6(Tn,E1,wp,$s,A1,O1);function g0(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function b0(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function _u(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}function ese(e){var t=e.dateTime,r=e.date,n=e.time,i=e.periods,a=e.days,o=e.shortDays,u=e.months,l=e.shortMonths,s=Ou(i),f=xu(i),c=Ou(a),d=xu(a),p=Ou(o),y=xu(o),m=Ou(u),g=xu(u),h=Ou(l),v=xu(l),b={a:B,A:j,b:L,B:U,c:null,d:u_,e:u_,f:_se,g:jse,G:Mse,H:wse,I:Sse,j:$se,L:E6,m:Ose,M:xse,p:Y,q:G,Q:c_,s:f_,S:Ase,u:Pse,U:Ese,V:Tse,w:kse,W:Cse,x:null,X:null,y:Ise,Y:Nse,Z:Dse,"%":s_},w={a:ne,A:ce,b:Ae,B:Pe,c:null,d:l_,e:l_,f:Bse,g:qse,G:Zse,H:Lse,I:Rse,j:Fse,L:k6,m:zse,M:Use,p:Ee,q:rt,Q:c_,s:f_,S:Wse,u:Hse,U:Gse,V:Vse,w:Kse,W:Xse,x:null,X:null,y:Yse,Y:Qse,Z:Jse,"%":s_},S={a:P,A:k,b:E,B:C,c:N,d:a_,e:a_,f:yse,g:i_,G:n_,H:o_,I:o_,j:dse,L:hse,m:fse,M:pse,p:T,q:cse,Q:gse,s:bse,S:vse,u:ase,U:ose,V:use,w:ise,W:lse,x:z,X:F,y:i_,Y:n_,Z:sse,"%":mse};b.x=$(r,b),b.X=$(n,b),b.c=$(t,b),w.x=$(r,w),w.X=$(n,w),w.c=$(t,w);function $(Q,ie){return function(ue){var R=[],ze=-1,he=0,Qe=Q.length,Xe,Bt,A;for(ue instanceof Date||(ue=new Date(+ue));++ze<Qe;)Q.charCodeAt(ze)===37&&(R.push(Q.slice(he,ze)),(Bt=r_[Xe=Q.charAt(++ze)])!=null?Xe=Q.charAt(++ze):Bt=Xe==="e"?" ":"0",(A=ie[Xe])&&(Xe=A(ue,Bt)),R.push(Xe),he=ze+1);return R.push(Q.slice(he,ze)),R.join("")}}function _(Q,ie){return function(ue){var R=_u(1900,void 0,1),ze=O(R,Q,ue+="",0),he,Qe;if(ze!=ue.length)return null;if("Q"in R)return new Date(R.Q);if("s"in R)return new Date(R.s*1e3+("L"in R?R.L:0));if(ie&&!("Z"in R)&&(R.Z=0),"p"in R&&(R.H=R.H%12+R.p*12),R.m===void 0&&(R.m="q"in R?R.q:0),"V"in R){if(R.V<1||R.V>53)return null;"w"in R||(R.w=1),"Z"in R?(he=b0(_u(R.y,0,1)),Qe=he.getUTCDay(),he=Qe>4||Qe===0?Kf.ceil(he):Kf(he),he=bp.offset(he,(R.V-1)*7),R.y=he.getUTCFullYear(),R.m=he.getUTCMonth(),R.d=he.getUTCDate()+(R.w+6)%7):(he=g0(_u(R.y,0,1)),Qe=he.getDay(),he=Qe>4||Qe===0?Vf.ceil(he):Vf(he),he=$s.offset(he,(R.V-1)*7),R.y=he.getFullYear(),R.m=he.getMonth(),R.d=he.getDate()+(R.w+6)%7)}else("W"in R||"U"in R)&&("w"in R||(R.w="u"in R?R.u%7:"W"in R?1:0),Qe="Z"in R?b0(_u(R.y,0,1)).getUTCDay():g0(_u(R.y,0,1)).getDay(),R.m=0,R.d="W"in R?(R.w+6)%7+R.W*7-(Qe+5)%7:R.w+R.U*7-(Qe+6)%7);return"Z"in R?(R.H+=R.Z/100|0,R.M+=R.Z%100,b0(R)):g0(R)}}function O(Q,ie,ue,R){for(var ze=0,he=ie.length,Qe=ue.length,Xe,Bt;ze<he;){if(R>=Qe)return-1;if(Xe=ie.charCodeAt(ze++),Xe===37){if(Xe=ie.charAt(ze++),Bt=S[Xe in r_?ie.charAt(ze++):Xe],!Bt||(R=Bt(Q,ue,R))<0)return-1}else if(Xe!=ue.charCodeAt(R++))return-1}return R}function T(Q,ie,ue){var R=s.exec(ie.slice(ue));return R?(Q.p=f.get(R[0].toLowerCase()),ue+R[0].length):-1}function P(Q,ie,ue){var R=p.exec(ie.slice(ue));return R?(Q.w=y.get(R[0].toLowerCase()),ue+R[0].length):-1}function k(Q,ie,ue){var R=c.exec(ie.slice(ue));return R?(Q.w=d.get(R[0].toLowerCase()),ue+R[0].length):-1}function E(Q,ie,ue){var R=h.exec(ie.slice(ue));return R?(Q.m=v.get(R[0].toLowerCase()),ue+R[0].length):-1}function C(Q,ie,ue){var R=m.exec(ie.slice(ue));return R?(Q.m=g.get(R[0].toLowerCase()),ue+R[0].length):-1}function N(Q,ie,ue){return O(Q,t,ie,ue)}function z(Q,ie,ue){return O(Q,r,ie,ue)}function F(Q,ie,ue){return O(Q,n,ie,ue)}function B(Q){return o[Q.getDay()]}function j(Q){return a[Q.getDay()]}function L(Q){return l[Q.getMonth()]}function U(Q){return u[Q.getMonth()]}function Y(Q){return i[+(Q.getHours()>=12)]}function G(Q){return 1+~~(Q.getMonth()/3)}function ne(Q){return o[Q.getUTCDay()]}function ce(Q){return a[Q.getUTCDay()]}function Ae(Q){return l[Q.getUTCMonth()]}function Pe(Q){return u[Q.getUTCMonth()]}function Ee(Q){return i[+(Q.getUTCHours()>=12)]}function rt(Q){return 1+~~(Q.getUTCMonth()/3)}return{format:function(Q){var ie=$(Q+="",b);return ie.toString=function(){return Q},ie},parse:function(Q){var ie=_(Q+="",!1);return ie.toString=function(){return Q},ie},utcFormat:function(Q){var ie=$(Q+="",w);return ie.toString=function(){return Q},ie},utcParse:function(Q){var ie=_(Q+="",!0);return ie.toString=function(){return Q},ie}}}var r_={"-":"",_:" ",0:"0"},mt=/^\s*\d+/,tse=/^%/,rse=/[\\^$*+?|[\]().{}]/g;function ge(e,t,r){var n=e<0?"-":"",i=(n?-e:e)+"",a=i.length;return n+(a<r?new Array(r-a+1).join(t)+i:i)}function nse(e){return e.replace(rse,"\\$&")}function Ou(e){return new RegExp("^(?:"+e.map(nse).join("|")+")","i")}function xu(e){return new Map(e.map((t,r)=>[t.toLowerCase(),r]))}function ise(e,t,r){var n=mt.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function ase(e,t,r){var n=mt.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function ose(e,t,r){var n=mt.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function use(e,t,r){var n=mt.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function lse(e,t,r){var n=mt.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function n_(e,t,r){var n=mt.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function i_(e,t,r){var n=mt.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function sse(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function cse(e,t,r){var n=mt.exec(t.slice(r,r+1));return n?(e.q=n[0]*3-3,r+n[0].length):-1}function fse(e,t,r){var n=mt.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function a_(e,t,r){var n=mt.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function dse(e,t,r){var n=mt.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function o_(e,t,r){var n=mt.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function pse(e,t,r){var n=mt.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function vse(e,t,r){var n=mt.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function hse(e,t,r){var n=mt.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function yse(e,t,r){var n=mt.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function mse(e,t,r){var n=tse.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function gse(e,t,r){var n=mt.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function bse(e,t,r){var n=mt.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function u_(e,t){return ge(e.getDate(),t,2)}function wse(e,t){return ge(e.getHours(),t,2)}function Sse(e,t){return ge(e.getHours()%12||12,t,2)}function $se(e,t){return ge(1+$s.count(Tn(e),e),t,3)}function E6(e,t){return ge(e.getMilliseconds(),t,3)}function _se(e,t){return E6(e,t)+"000"}function Ose(e,t){return ge(e.getMonth()+1,t,2)}function xse(e,t){return ge(e.getMinutes(),t,2)}function Ase(e,t){return ge(e.getSeconds(),t,2)}function Pse(e){var t=e.getDay();return t===0?7:t}function Ese(e,t){return ge(wp.count(Tn(e)-1,e),t,2)}function T6(e){var t=e.getDay();return t>=4||t===0?ho(e):ho.ceil(e)}function Tse(e,t){return e=T6(e),ge(ho.count(Tn(e),e)+(Tn(e).getDay()===4),t,2)}function kse(e){return e.getDay()}function Cse(e,t){return ge(Vf.count(Tn(e)-1,e),t,2)}function Ise(e,t){return ge(e.getFullYear()%100,t,2)}function jse(e,t){return e=T6(e),ge(e.getFullYear()%100,t,2)}function Nse(e,t){return ge(e.getFullYear()%1e4,t,4)}function Mse(e,t){var r=e.getDay();return e=r>=4||r===0?ho(e):ho.ceil(e),ge(e.getFullYear()%1e4,t,4)}function Dse(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+ge(t/60|0,"0",2)+ge(t%60,"0",2)}function l_(e,t){return ge(e.getUTCDate(),t,2)}function Lse(e,t){return ge(e.getUTCHours(),t,2)}function Rse(e,t){return ge(e.getUTCHours()%12||12,t,2)}function Fse(e,t){return ge(1+bp.count(kn(e),e),t,3)}function k6(e,t){return ge(e.getUTCMilliseconds(),t,3)}function Bse(e,t){return k6(e,t)+"000"}function zse(e,t){return ge(e.getUTCMonth()+1,t,2)}function Use(e,t){return ge(e.getUTCMinutes(),t,2)}function Wse(e,t){return ge(e.getUTCSeconds(),t,2)}function Hse(e){var t=e.getUTCDay();return t===0?7:t}function Gse(e,t){return ge(Sp.count(kn(e)-1,e),t,2)}function C6(e){var t=e.getUTCDay();return t>=4||t===0?yo(e):yo.ceil(e)}function Vse(e,t){return e=C6(e),ge(yo.count(kn(e),e)+(kn(e).getUTCDay()===4),t,2)}function Kse(e){return e.getUTCDay()}function Xse(e,t){return ge(Kf.count(kn(e)-1,e),t,2)}function Yse(e,t){return ge(e.getUTCFullYear()%100,t,2)}function qse(e,t){return e=C6(e),ge(e.getUTCFullYear()%100,t,2)}function Qse(e,t){return ge(e.getUTCFullYear()%1e4,t,4)}function Zse(e,t){var r=e.getUTCDay();return e=r>=4||r===0?yo(e):yo.ceil(e),ge(e.getUTCFullYear()%1e4,t,4)}function Jse(){return"+0000"}function s_(){return"%"}function c_(e){return+e}function f_(e){return Math.floor(+e/1e3)}var ba,I6,j6;ece({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function ece(e){return ba=ese(e),I6=ba.format,ba.parse,j6=ba.utcFormat,ba.utcParse,ba}function tce(e){return new Date(e)}function rce(e){return e instanceof Date?+e:+new Date(+e)}function k1(e,t,r,n,i,a,o,u,l,s){var f=y1(),c=f.invert,d=f.domain,p=s(".%L"),y=s(":%S"),m=s("%I:%M"),g=s("%I %p"),h=s("%a %d"),v=s("%b %d"),b=s("%B"),w=s("%Y");function S($){return(l($)<$?p:u($)<$?y:o($)<$?m:a($)<$?g:n($)<$?i($)<$?h:v:r($)<$?b:w)($)}return f.invert=function($){return new Date(c($))},f.domain=function($){return arguments.length?d(Array.from($,rce)):d().map(tce)},f.ticks=function($){var _=d();return e(_[0],_[_.length-1],$??10)},f.tickFormat=function($,_){return _==null?S:s(_)},f.nice=function($){var _=d();return(!$||typeof $.range!="function")&&($=t(_[0],_[_.length-1],$??10)),$?d(b6(_,$)):f},f.copy=function(){return Ss(f,k1(e,t,r,n,i,a,o,u,l,s))},f}function nce(){return Tr.apply(k1(Zle,Jle,Tn,E1,wp,$s,A1,O1,Bi,I6).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function ice(){return Tr.apply(k1(qle,Qle,kn,T1,Sp,bp,P1,x1,Bi,j6).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function $p(){var e=0,t=1,r,n,i,a,o=Mt,u=!1,l;function s(c){return c==null||isNaN(c=+c)?l:o(i===0?.5:(c=(a(c)-r)*i,u?Math.max(0,Math.min(1,c)):c))}s.domain=function(c){return arguments.length?([e,t]=c,r=a(e=+e),n=a(t=+t),i=r===n?0:1/(n-r),s):[e,t]},s.clamp=function(c){return arguments.length?(u=!!c,s):u},s.interpolator=function(c){return arguments.length?(o=c,s):o};function f(c){return function(d){var p,y;return arguments.length?([p,y]=d,o=c(p,y),s):[o(0),o(1)]}}return s.range=f(Qo),s.rangeRound=f(h1),s.unknown=function(c){return arguments.length?(l=c,s):l},function(c){return a=c,r=c(e),n=c(t),i=r===n?0:1/(n-r),s}}function Si(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function N6(){var e=wi($p()(Mt));return e.copy=function(){return Si(e,N6())},Mn.apply(e,arguments)}function M6(){var e=b1($p()).domain([1,10]);return e.copy=function(){return Si(e,M6()).base(e.base())},Mn.apply(e,arguments)}function D6(){var e=w1($p());return e.copy=function(){return Si(e,D6()).constant(e.constant())},Mn.apply(e,arguments)}function C1(){var e=S1($p());return e.copy=function(){return Si(e,C1()).exponent(e.exponent())},Mn.apply(e,arguments)}function ace(){return C1.apply(null,arguments).exponent(.5)}function L6(){var e=[],t=Mt;function r(n){if(n!=null&&!isNaN(n=+n))return t((bs(e,n,1)-1)/(e.length-1))}return r.domain=function(n){if(!arguments.length)return e.slice();e=[];for(let i of n)i!=null&&!isNaN(i=+i)&&e.push(i);return e.sort(ci),r},r.interpolator=function(n){return arguments.length?(t=n,r):t},r.range=function(){return e.map((n,i)=>t(i/(e.length-1)))},r.quantiles=function(n){return Array.from({length:n+1},(i,a)=>Gue(e,a/n))},r.copy=function(){return L6(t).domain(e)},Mn.apply(r,arguments)}function _p(){var e=0,t=.5,r=1,n=1,i,a,o,u,l,s=Mt,f,c=!1,d;function p(m){return isNaN(m=+m)?d:(m=.5+((m=+f(m))-a)*(n*m<n*a?u:l),s(c?Math.max(0,Math.min(1,m)):m))}p.domain=function(m){return arguments.length?([e,t,r]=m,i=f(e=+e),a=f(t=+t),o=f(r=+r),u=i===a?0:.5/(a-i),l=a===o?0:.5/(o-a),n=a<i?-1:1,p):[e,t,r]},p.clamp=function(m){return arguments.length?(c=!!m,p):c},p.interpolator=function(m){return arguments.length?(s=m,p):s};function y(m){return function(g){var h,v,b;return arguments.length?([h,v,b]=g,s=mle(m,[h,v,b]),p):[s(0),s(.5),s(1)]}}return p.range=y(Qo),p.rangeRound=y(h1),p.unknown=function(m){return arguments.length?(d=m,p):d},function(m){return f=m,i=m(e),a=m(t),o=m(r),u=i===a?0:.5/(a-i),l=a===o?0:.5/(o-a),n=a<i?-1:1,p}}function R6(){var e=wi(_p()(Mt));return e.copy=function(){return Si(e,R6())},Mn.apply(e,arguments)}function F6(){var e=b1(_p()).domain([.1,1,10]);return e.copy=function(){return Si(e,F6()).base(e.base())},Mn.apply(e,arguments)}function B6(){var e=w1(_p());return e.copy=function(){return Si(e,B6()).constant(e.constant())},Mn.apply(e,arguments)}function I1(){var e=S1(_p());return e.copy=function(){return Si(e,I1()).exponent(e.exponent())},Mn.apply(e,arguments)}function oce(){return I1.apply(null,arguments).exponent(.5)}const d_=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:Pl,scaleDiverging:R6,scaleDivergingLog:F6,scaleDivergingPow:I1,scaleDivergingSqrt:oce,scaleDivergingSymlog:B6,scaleIdentity:g6,scaleImplicit:Ey,scaleLinear:Hf,scaleLog:w6,scaleOrdinal:d1,scalePoint:Yu,scalePow:$1,scaleQuantile:_6,scaleQuantize:O6,scaleRadial:$6,scaleSequential:N6,scaleSequentialLog:M6,scaleSequentialPow:C1,scaleSequentialQuantile:L6,scaleSequentialSqrt:ace,scaleSequentialSymlog:D6,scaleSqrt:Ble,scaleSymlog:S6,scaleThreshold:x6,scaleTime:nce,scaleUtc:ice,tickFormat:m6},Symbol.toStringTag,{value:"Module"}));var uce=Wo;function lce(e,t,r){for(var n=-1,i=e.length;++n<i;){var a=e[n],o=t(a);if(o!=null&&(u===void 0?o===o&&!uce(o):r(o,u)))var u=o,l=a}return l}var Op=lce;function sce(e,t){return e>t}var z6=sce,cce=Op,fce=z6,dce=qo;function pce(e){return e&&e.length?cce(e,dce,fce):void 0}var vce=pce;const xp=Se(vce);function hce(e,t){return e<t}var U6=hce,yce=Op,mce=U6,gce=qo;function bce(e){return e&&e.length?yce(e,gce,mce):void 0}var wce=bce;const Ap=Se(wce);var Sce=Gg,$ce=un,_ce=QE,Oce=qt;function xce(e,t){var r=Oce(e)?Sce:_ce;return r(e,$ce(t))}var Ace=xce,Pce=YE,Ece=Ace;function Tce(e,t){return Pce(Ece(e,t),1)}var kce=Tce;const Cce=Se(kce);var Ice=u1;function jce(e,t){return Ice(e,t)}var Nce=jce;const Pp=Se(Nce);var Zo=1e9,Mce={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},N1,We=!0,Ar="[DecimalError] ",Ki=Ar+"Invalid argument: ",j1=Ar+"Exponent out of range: ",Jo=Math.floor,Ci=Math.pow,Dce=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,nr,dt=1e7,Fe=7,W6=9007199254740991,Xf=Jo(W6/Fe),ee={};ee.absoluteValue=ee.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};ee.comparedTo=ee.cmp=function(e){var t,r,n,i,a=this;if(e=new a.constructor(e),a.s!==e.s)return a.s||-e.s;if(a.e!==e.e)return a.e>e.e^a.s<0?1:-1;for(n=a.d.length,i=e.d.length,t=0,r=n<i?n:i;t<r;++t)if(a.d[t]!==e.d[t])return a.d[t]>e.d[t]^a.s<0?1:-1;return n===i?0:n>i^a.s<0?1:-1};ee.decimalPlaces=ee.dp=function(){var e=this,t=e.d.length-1,r=(t-e.e)*Fe;if(t=e.d[t],t)for(;t%10==0;t/=10)r--;return r<0?0:r};ee.dividedBy=ee.div=function(e){return _n(this,new this.constructor(e))};ee.dividedToIntegerBy=ee.idiv=function(e){var t=this,r=t.constructor;return Te(_n(t,new r(e),0,1),r.precision)};ee.equals=ee.eq=function(e){return!this.cmp(e)};ee.exponent=function(){return tt(this)};ee.greaterThan=ee.gt=function(e){return this.cmp(e)>0};ee.greaterThanOrEqualTo=ee.gte=function(e){return this.cmp(e)>=0};ee.isInteger=ee.isint=function(){return this.e>this.d.length-2};ee.isNegative=ee.isneg=function(){return this.s<0};ee.isPositive=ee.ispos=function(){return this.s>0};ee.isZero=function(){return this.s===0};ee.lessThan=ee.lt=function(e){return this.cmp(e)<0};ee.lessThanOrEqualTo=ee.lte=function(e){return this.cmp(e)<1};ee.logarithm=ee.log=function(e){var t,r=this,n=r.constructor,i=n.precision,a=i+5;if(e===void 0)e=new n(10);else if(e=new n(e),e.s<1||e.eq(nr))throw Error(Ar+"NaN");if(r.s<1)throw Error(Ar+(r.s?"NaN":"-Infinity"));return r.eq(nr)?new n(0):(We=!1,t=_n(Il(r,a),Il(e,a),a),We=!0,Te(t,i))};ee.minus=ee.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?V6(t,e):H6(t,(e.s=-e.s,e))};ee.modulo=ee.mod=function(e){var t,r=this,n=r.constructor,i=n.precision;if(e=new n(e),!e.s)throw Error(Ar+"NaN");return r.s?(We=!1,t=_n(r,e,0,1).times(e),We=!0,r.minus(t)):Te(new n(r),i)};ee.naturalExponential=ee.exp=function(){return G6(this)};ee.naturalLogarithm=ee.ln=function(){return Il(this)};ee.negated=ee.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};ee.plus=ee.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?H6(t,e):V6(t,(e.s=-e.s,e))};ee.precision=ee.sd=function(e){var t,r,n,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Ki+e);if(t=tt(i)+1,n=i.d.length-1,r=n*Fe+1,n=i.d[n],n){for(;n%10==0;n/=10)r--;for(n=i.d[0];n>=10;n/=10)r++}return e&&t>r?t:r};ee.squareRoot=ee.sqrt=function(){var e,t,r,n,i,a,o,u=this,l=u.constructor;if(u.s<1){if(!u.s)return new l(0);throw Error(Ar+"NaN")}for(e=tt(u),We=!1,i=Math.sqrt(+u),i==0||i==1/0?(t=Jr(u.d),(t.length+e)%2==0&&(t+="0"),i=Math.sqrt(t),e=Jo((e+1)/2)-(e<0||e%2),i==1/0?t="5e"+e:(t=i.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),n=new l(t)):n=new l(i.toString()),r=l.precision,i=o=r+3;;)if(a=n,n=a.plus(_n(u,a,o+2)).times(.5),Jr(a.d).slice(0,o)===(t=Jr(n.d)).slice(0,o)){if(t=t.slice(o-3,o+1),i==o&&t=="4999"){if(Te(a,r+1,0),a.times(a).eq(u)){n=a;break}}else if(t!="9999")break;o+=4}return We=!0,Te(n,r)};ee.times=ee.mul=function(e){var t,r,n,i,a,o,u,l,s,f=this,c=f.constructor,d=f.d,p=(e=new c(e)).d;if(!f.s||!e.s)return new c(0);for(e.s*=f.s,r=f.e+e.e,l=d.length,s=p.length,l<s&&(a=d,d=p,p=a,o=l,l=s,s=o),a=[],o=l+s,n=o;n--;)a.push(0);for(n=s;--n>=0;){for(t=0,i=l+n;i>n;)u=a[i]+p[n]*d[i-n-1]+t,a[i--]=u%dt|0,t=u/dt|0;a[i]=(a[i]+t)%dt|0}for(;!a[--o];)a.pop();return t?++r:a.shift(),e.d=a,e.e=r,We?Te(e,c.precision):e};ee.toDecimalPlaces=ee.todp=function(e,t){var r=this,n=r.constructor;return r=new n(r),e===void 0?r:(an(e,0,Zo),t===void 0?t=n.rounding:an(t,0,8),Te(r,e+tt(r)+1,t))};ee.toExponential=function(e,t){var r,n=this,i=n.constructor;return e===void 0?r=ta(n,!0):(an(e,0,Zo),t===void 0?t=i.rounding:an(t,0,8),n=Te(new i(n),e+1,t),r=ta(n,!0,e+1)),r};ee.toFixed=function(e,t){var r,n,i=this,a=i.constructor;return e===void 0?ta(i):(an(e,0,Zo),t===void 0?t=a.rounding:an(t,0,8),n=Te(new a(i),e+tt(i)+1,t),r=ta(n.abs(),!1,e+tt(n)+1),i.isneg()&&!i.isZero()?"-"+r:r)};ee.toInteger=ee.toint=function(){var e=this,t=e.constructor;return Te(new t(e),tt(e)+1,t.rounding)};ee.toNumber=function(){return+this};ee.toPower=ee.pow=function(e){var t,r,n,i,a,o,u=this,l=u.constructor,s=12,f=+(e=new l(e));if(!e.s)return new l(nr);if(u=new l(u),!u.s){if(e.s<1)throw Error(Ar+"Infinity");return u}if(u.eq(nr))return u;if(n=l.precision,e.eq(nr))return Te(u,n);if(t=e.e,r=e.d.length-1,o=t>=r,a=u.s,o){if((r=f<0?-f:f)<=W6){for(i=new l(nr),t=Math.ceil(n/Fe+4),We=!1;r%2&&(i=i.times(u),v_(i.d,t)),r=Jo(r/2),r!==0;)u=u.times(u),v_(u.d,t);return We=!0,e.s<0?new l(nr).div(i):Te(i,n)}}else if(a<0)throw Error(Ar+"NaN");return a=a<0&&e.d[Math.max(t,r)]&1?-1:1,u.s=1,We=!1,i=e.times(Il(u,n+s)),We=!0,i=G6(i),i.s=a,i};ee.toPrecision=function(e,t){var r,n,i=this,a=i.constructor;return e===void 0?(r=tt(i),n=ta(i,r<=a.toExpNeg||r>=a.toExpPos)):(an(e,1,Zo),t===void 0?t=a.rounding:an(t,0,8),i=Te(new a(i),e,t),r=tt(i),n=ta(i,e<=r||r<=a.toExpNeg,e)),n};ee.toSignificantDigits=ee.tosd=function(e,t){var r=this,n=r.constructor;return e===void 0?(e=n.precision,t=n.rounding):(an(e,1,Zo),t===void 0?t=n.rounding:an(t,0,8)),Te(new n(r),e,t)};ee.toString=ee.valueOf=ee.val=ee.toJSON=ee[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=tt(e),r=e.constructor;return ta(e,t<=r.toExpNeg||t>=r.toExpPos)};function H6(e,t){var r,n,i,a,o,u,l,s,f=e.constructor,c=f.precision;if(!e.s||!t.s)return t.s||(t=new f(e)),We?Te(t,c):t;if(l=e.d,s=t.d,o=e.e,i=t.e,l=l.slice(),a=o-i,a){for(a<0?(n=l,a=-a,u=s.length):(n=s,i=o,u=l.length),o=Math.ceil(c/Fe),u=o>u?o+1:u+1,a>u&&(a=u,n.length=1),n.reverse();a--;)n.push(0);n.reverse()}for(u=l.length,a=s.length,u-a<0&&(a=u,n=s,s=l,l=n),r=0;a;)r=(l[--a]=l[a]+s[a]+r)/dt|0,l[a]%=dt;for(r&&(l.unshift(r),++i),u=l.length;l[--u]==0;)l.pop();return t.d=l,t.e=i,We?Te(t,c):t}function an(e,t,r){if(e!==~~e||e<t||e>r)throw Error(Ki+e)}function Jr(e){var t,r,n,i=e.length-1,a="",o=e[0];if(i>0){for(a+=o,t=1;t<i;t++)n=e[t]+"",r=Fe-n.length,r&&(a+=Vn(r)),a+=n;o=e[t],n=o+"",r=Fe-n.length,r&&(a+=Vn(r))}else if(o===0)return"0";for(;o%10===0;)o/=10;return a+o}var _n=function(){function e(n,i){var a,o=0,u=n.length;for(n=n.slice();u--;)a=n[u]*i+o,n[u]=a%dt|0,o=a/dt|0;return o&&n.unshift(o),n}function t(n,i,a,o){var u,l;if(a!=o)l=a>o?1:-1;else for(u=l=0;u<a;u++)if(n[u]!=i[u]){l=n[u]>i[u]?1:-1;break}return l}function r(n,i,a){for(var o=0;a--;)n[a]-=o,o=n[a]<i[a]?1:0,n[a]=o*dt+n[a]-i[a];for(;!n[0]&&n.length>1;)n.shift()}return function(n,i,a,o){var u,l,s,f,c,d,p,y,m,g,h,v,b,w,S,$,_,O,T=n.constructor,P=n.s==i.s?1:-1,k=n.d,E=i.d;if(!n.s)return new T(n);if(!i.s)throw Error(Ar+"Division by zero");for(l=n.e-i.e,_=E.length,S=k.length,p=new T(P),y=p.d=[],s=0;E[s]==(k[s]||0);)++s;if(E[s]>(k[s]||0)&&--l,a==null?v=a=T.precision:o?v=a+(tt(n)-tt(i))+1:v=a,v<0)return new T(0);if(v=v/Fe+2|0,s=0,_==1)for(f=0,E=E[0],v++;(s<S||f)&&v--;s++)b=f*dt+(k[s]||0),y[s]=b/E|0,f=b%E|0;else{for(f=dt/(E[0]+1)|0,f>1&&(E=e(E,f),k=e(k,f),_=E.length,S=k.length),w=_,m=k.slice(0,_),g=m.length;g<_;)m[g++]=0;O=E.slice(),O.unshift(0),$=E[0],E[1]>=dt/2&&++$;do f=0,u=t(E,m,_,g),u<0?(h=m[0],_!=g&&(h=h*dt+(m[1]||0)),f=h/$|0,f>1?(f>=dt&&(f=dt-1),c=e(E,f),d=c.length,g=m.length,u=t(c,m,d,g),u==1&&(f--,r(c,_<d?O:E,d))):(f==0&&(u=f=1),c=E.slice()),d=c.length,d<g&&c.unshift(0),r(m,c,g),u==-1&&(g=m.length,u=t(E,m,_,g),u<1&&(f++,r(m,_<g?O:E,g))),g=m.length):u===0&&(f++,m=[0]),y[s++]=f,u&&m[0]?m[g++]=k[w]||0:(m=[k[w]],g=1);while((w++<S||m[0]!==void 0)&&v--)}return y[0]||y.shift(),p.e=l,Te(p,o?a+tt(p)+1:a)}}();function G6(e,t){var r,n,i,a,o,u,l=0,s=0,f=e.constructor,c=f.precision;if(tt(e)>16)throw Error(j1+tt(e));if(!e.s)return new f(nr);for(t==null?(We=!1,u=c):u=t,o=new f(.03125);e.abs().gte(.1);)e=e.times(o),s+=5;for(n=Math.log(Ci(2,s))/Math.LN10*2+5|0,u+=n,r=i=a=new f(nr),f.precision=u;;){if(i=Te(i.times(e),u),r=r.times(++l),o=a.plus(_n(i,r,u)),Jr(o.d).slice(0,u)===Jr(a.d).slice(0,u)){for(;s--;)a=Te(a.times(a),u);return f.precision=c,t==null?(We=!0,Te(a,c)):a}a=o}}function tt(e){for(var t=e.e*Fe,r=e.d[0];r>=10;r/=10)t++;return t}function w0(e,t,r){if(t>e.LN10.sd())throw We=!0,r&&(e.precision=r),Error(Ar+"LN10 precision limit exceeded");return Te(new e(e.LN10),t)}function Vn(e){for(var t="";e--;)t+="0";return t}function Il(e,t){var r,n,i,a,o,u,l,s,f,c=1,d=10,p=e,y=p.d,m=p.constructor,g=m.precision;if(p.s<1)throw Error(Ar+(p.s?"NaN":"-Infinity"));if(p.eq(nr))return new m(0);if(t==null?(We=!1,s=g):s=t,p.eq(10))return t==null&&(We=!0),w0(m,s);if(s+=d,m.precision=s,r=Jr(y),n=r.charAt(0),a=tt(p),Math.abs(a)<15e14){for(;n<7&&n!=1||n==1&&r.charAt(1)>3;)p=p.times(e),r=Jr(p.d),n=r.charAt(0),c++;a=tt(p),n>1?(p=new m("0."+r),a++):p=new m(n+"."+r.slice(1))}else return l=w0(m,s+2,g).times(a+""),p=Il(new m(n+"."+r.slice(1)),s-d).plus(l),m.precision=g,t==null?(We=!0,Te(p,g)):p;for(u=o=p=_n(p.minus(nr),p.plus(nr),s),f=Te(p.times(p),s),i=3;;){if(o=Te(o.times(f),s),l=u.plus(_n(o,new m(i),s)),Jr(l.d).slice(0,s)===Jr(u.d).slice(0,s))return u=u.times(2),a!==0&&(u=u.plus(w0(m,s+2,g).times(a+""))),u=_n(u,new m(c),s),m.precision=g,t==null?(We=!0,Te(u,g)):u;u=l,i+=2}}function p_(e,t){var r,n,i;for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),n=0;t.charCodeAt(n)===48;)++n;for(i=t.length;t.charCodeAt(i-1)===48;)--i;if(t=t.slice(n,i),t){if(i-=n,r=r-n-1,e.e=Jo(r/Fe),e.d=[],n=(r+1)%Fe,r<0&&(n+=Fe),n<i){for(n&&e.d.push(+t.slice(0,n)),i-=Fe;n<i;)e.d.push(+t.slice(n,n+=Fe));t=t.slice(n),n=Fe-t.length}else n-=i;for(;n--;)t+="0";if(e.d.push(+t),We&&(e.e>Xf||e.e<-Xf))throw Error(j1+r)}else e.s=0,e.e=0,e.d=[0];return e}function Te(e,t,r){var n,i,a,o,u,l,s,f,c=e.d;for(o=1,a=c[0];a>=10;a/=10)o++;if(n=t-o,n<0)n+=Fe,i=t,s=c[f=0];else{if(f=Math.ceil((n+1)/Fe),a=c.length,f>=a)return e;for(s=a=c[f],o=1;a>=10;a/=10)o++;n%=Fe,i=n-Fe+o}if(r!==void 0&&(a=Ci(10,o-i-1),u=s/a%10|0,l=t<0||c[f+1]!==void 0||s%a,l=r<4?(u||l)&&(r==0||r==(e.s<0?3:2)):u>5||u==5&&(r==4||l||r==6&&(n>0?i>0?s/Ci(10,o-i):0:c[f-1])%10&1||r==(e.s<0?8:7))),t<1||!c[0])return l?(a=tt(e),c.length=1,t=t-a-1,c[0]=Ci(10,(Fe-t%Fe)%Fe),e.e=Jo(-t/Fe)||0):(c.length=1,c[0]=e.e=e.s=0),e;if(n==0?(c.length=f,a=1,f--):(c.length=f+1,a=Ci(10,Fe-n),c[f]=i>0?(s/Ci(10,o-i)%Ci(10,i)|0)*a:0),l)for(;;)if(f==0){(c[0]+=a)==dt&&(c[0]=1,++e.e);break}else{if(c[f]+=a,c[f]!=dt)break;c[f--]=0,a=1}for(n=c.length;c[--n]===0;)c.pop();if(We&&(e.e>Xf||e.e<-Xf))throw Error(j1+tt(e));return e}function V6(e,t){var r,n,i,a,o,u,l,s,f,c,d=e.constructor,p=d.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new d(e),We?Te(t,p):t;if(l=e.d,c=t.d,n=t.e,s=e.e,l=l.slice(),o=s-n,o){for(f=o<0,f?(r=l,o=-o,u=c.length):(r=c,n=s,u=l.length),i=Math.max(Math.ceil(p/Fe),u)+2,o>i&&(o=i,r.length=1),r.reverse(),i=o;i--;)r.push(0);r.reverse()}else{for(i=l.length,u=c.length,f=i<u,f&&(u=i),i=0;i<u;i++)if(l[i]!=c[i]){f=l[i]<c[i];break}o=0}for(f&&(r=l,l=c,c=r,t.s=-t.s),u=l.length,i=c.length-u;i>0;--i)l[u++]=0;for(i=c.length;i>o;){if(l[--i]<c[i]){for(a=i;a&&l[--a]===0;)l[a]=dt-1;--l[a],l[i]+=dt}l[i]-=c[i]}for(;l[--u]===0;)l.pop();for(;l[0]===0;l.shift())--n;return l[0]?(t.d=l,t.e=n,We?Te(t,p):t):new d(0)}function ta(e,t,r){var n,i=tt(e),a=Jr(e.d),o=a.length;return t?(r&&(n=r-o)>0?a=a.charAt(0)+"."+a.slice(1)+Vn(n):o>1&&(a=a.charAt(0)+"."+a.slice(1)),a=a+(i<0?"e":"e+")+i):i<0?(a="0."+Vn(-i-1)+a,r&&(n=r-o)>0&&(a+=Vn(n))):i>=o?(a+=Vn(i+1-o),r&&(n=r-i-1)>0&&(a=a+"."+Vn(n))):((n=i+1)<o&&(a=a.slice(0,n)+"."+a.slice(n)),r&&(n=r-o)>0&&(i+1===o&&(a+="."),a+=Vn(n))),e.s<0?"-"+a:a}function v_(e,t){if(e.length>t)return e.length=t,!0}function K6(e){var t,r,n;function i(a){var o=this;if(!(o instanceof i))return new i(a);if(o.constructor=i,a instanceof i){o.s=a.s,o.e=a.e,o.d=(a=a.d)?a.slice():a;return}if(typeof a=="number"){if(a*0!==0)throw Error(Ki+a);if(a>0)o.s=1;else if(a<0)a=-a,o.s=-1;else{o.s=0,o.e=0,o.d=[0];return}if(a===~~a&&a<1e7){o.e=0,o.d=[a];return}return p_(o,a.toString())}else if(typeof a!="string")throw Error(Ki+a);if(a.charCodeAt(0)===45?(a=a.slice(1),o.s=-1):o.s=1,Dce.test(a))p_(o,a);else throw Error(Ki+a)}if(i.prototype=ee,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.clone=K6,i.config=i.set=Lce,e===void 0&&(e={}),e)for(n=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<n.length;)e.hasOwnProperty(r=n[t++])||(e[r]=this[r]);return i.config(e),i}function Lce(e){if(!e||typeof e!="object")throw Error(Ar+"Object expected");var t,r,n,i=["precision",1,Zo,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<i.length;t+=3)if((n=e[r=i[t]])!==void 0)if(Jo(n)===n&&n>=i[t+1]&&n<=i[t+2])this[r]=n;else throw Error(Ki+r+": "+n);if((n=e[r="LN10"])!==void 0)if(n==Math.LN10)this[r]=new this(n);else throw Error(Ki+r+": "+n);return this}var N1=K6(Mce);nr=new N1(1);const xe=N1;function Rce(e){return Uce(e)||zce(e)||Bce(e)||Fce()}function Fce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bce(e,t){if(e){if(typeof e=="string")return Iy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Iy(e,t)}}function zce(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function Uce(e){if(Array.isArray(e))return Iy(e)}function Iy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Wce=function(t){return t},X6={"@@functional/placeholder":!0},Y6=function(t){return t===X6},h_=function(t){return function r(){return arguments.length===0||arguments.length===1&&Y6(arguments.length<=0?void 0:arguments[0])?r:t.apply(void 0,arguments)}},Hce=function e(t,r){return t===1?r:h_(function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];var o=i.filter(function(u){return u!==X6}).length;return o>=t?r.apply(void 0,i):e(t-o,h_(function(){for(var u=arguments.length,l=new Array(u),s=0;s<u;s++)l[s]=arguments[s];var f=i.map(function(c){return Y6(c)?l.shift():c});return r.apply(void 0,Rce(f).concat(l))}))})},Ep=function(t){return Hce(t.length,t)},jy=function(t,r){for(var n=[],i=t;i<r;++i)n[i-t]=i;return n},Gce=Ep(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(r){return t[r]}).map(e)}),Vce=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(!r.length)return Wce;var i=r.reverse(),a=i[0],o=i.slice(1);return function(){return o.reduce(function(u,l){return l(u)},a.apply(void 0,arguments))}},Ny=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},q6=function(t){var r=null,n=null;return function(){for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r&&a.every(function(u,l){return u===r[l]})||(r=a,n=t.apply(void 0,a)),n}};function Kce(e){var t;return e===0?t=1:t=Math.floor(new xe(e).abs().log(10).toNumber())+1,t}function Xce(e,t,r){for(var n=new xe(e),i=0,a=[];n.lt(t)&&i<1e5;)a.push(n.toNumber()),n=n.add(r),i++;return a}var Yce=Ep(function(e,t,r){var n=+e,i=+t;return n+r*(i-n)}),qce=Ep(function(e,t,r){var n=t-+e;return n=n||1/0,(r-e)/n}),Qce=Ep(function(e,t,r){var n=t-+e;return n=n||1/0,Math.max(0,Math.min(1,(r-e)/n))});const Tp={rangeStep:Xce,getDigitCount:Kce,interpolateNumber:Yce,uninterpolateNumber:qce,uninterpolateTruncation:Qce};function My(e){return efe(e)||Jce(e)||Q6(e)||Zce()}function Zce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jce(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function efe(e){if(Array.isArray(e))return Dy(e)}function jl(e,t){return nfe(e)||rfe(e,t)||Q6(e,t)||tfe()}function tfe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q6(e,t){if(e){if(typeof e=="string")return Dy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Dy(e,t)}}function Dy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function rfe(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,i=!1,a=void 0;try{for(var o=e[Symbol.iterator](),u;!(n=(u=o.next()).done)&&(r.push(u.value),!(t&&r.length===t));n=!0);}catch(l){i=!0,a=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw a}}return r}}function nfe(e){if(Array.isArray(e))return e}function Z6(e){var t=jl(e,2),r=t[0],n=t[1],i=r,a=n;return r>n&&(i=n,a=r),[i,a]}function J6(e,t,r){if(e.lte(0))return new xe(0);var n=Tp.getDigitCount(e.toNumber()),i=new xe(10).pow(n),a=e.div(i),o=n!==1?.05:.1,u=new xe(Math.ceil(a.div(o).toNumber())).add(r).mul(o),l=u.mul(i);return t?l:new xe(Math.ceil(l))}function ife(e,t,r){var n=1,i=new xe(e);if(!i.isint()&&r){var a=Math.abs(e);a<1?(n=new xe(10).pow(Tp.getDigitCount(e)-1),i=new xe(Math.floor(i.div(n).toNumber())).mul(n)):a>1&&(i=new xe(Math.floor(e)))}else e===0?i=new xe(Math.floor((t-1)/2)):r||(i=new xe(Math.floor(e)));var o=Math.floor((t-1)/2),u=Vce(Gce(function(l){return i.add(new xe(l-o).mul(n)).toNumber()}),jy);return u(0,t)}function e4(e,t,r,n){var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(r-1)))return{step:new xe(0),tickMin:new xe(0),tickMax:new xe(0)};var a=J6(new xe(t).sub(e).div(r-1),n,i),o;e<=0&&t>=0?o=new xe(0):(o=new xe(e).add(t).div(2),o=o.sub(new xe(o).mod(a)));var u=Math.ceil(o.sub(e).div(a).toNumber()),l=Math.ceil(new xe(t).sub(o).div(a).toNumber()),s=u+l+1;return s>r?e4(e,t,r,n,i+1):(s<r&&(l=t>0?l+(r-s):l,u=t>0?u:u+(r-s)),{step:a,tickMin:o.sub(new xe(u).mul(a)),tickMax:o.add(new xe(l).mul(a))})}function afe(e){var t=jl(e,2),r=t[0],n=t[1],i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,o=Math.max(i,2),u=Z6([r,n]),l=jl(u,2),s=l[0],f=l[1];if(s===-1/0||f===1/0){var c=f===1/0?[s].concat(My(jy(0,i-1).map(function(){return 1/0}))):[].concat(My(jy(0,i-1).map(function(){return-1/0})),[f]);return r>n?Ny(c):c}if(s===f)return ife(s,i,a);var d=e4(s,f,o,a),p=d.step,y=d.tickMin,m=d.tickMax,g=Tp.rangeStep(y,m.add(new xe(.1).mul(p)),p);return r>n?Ny(g):g}function ofe(e,t){var r=jl(e,2),n=r[0],i=r[1],a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,o=Z6([n,i]),u=jl(o,2),l=u[0],s=u[1];if(l===-1/0||s===1/0)return[n,i];if(l===s)return[l];var f=Math.max(t,2),c=J6(new xe(s).sub(l).div(f-1),a,0),d=[].concat(My(Tp.rangeStep(new xe(l),new xe(s).sub(new xe(.99).mul(c)),c)),[s]);return n>i?Ny(d):d}var ufe=q6(afe),lfe=q6(ofe),sfe="Invariant failed";function ra(e,t){throw new Error(sfe)}var cfe=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function mo(e){"@babel/helpers - typeof";return mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mo(e)}function Yf(){return Yf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Yf.apply(this,arguments)}function ffe(e,t){return hfe(e)||vfe(e,t)||pfe(e,t)||dfe()}function dfe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pfe(e,t){if(e){if(typeof e=="string")return y_(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y_(e,t)}}function y_(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function vfe(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function hfe(e){if(Array.isArray(e))return e}function yfe(e,t){if(e==null)return{};var r=mfe(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function mfe(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function gfe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bfe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n4(n.key),n)}}function wfe(e,t,r){return t&&bfe(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sfe(e,t,r){return t=qf(t),$fe(e,t4()?Reflect.construct(t,r||[],qf(e).constructor):t.apply(e,r))}function $fe(e,t){if(t&&(mo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _fe(e)}function _fe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function t4(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(t4=function(){return!!e})()}function qf(e){return qf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},qf(e)}function Ofe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ly(e,t)}function Ly(e,t){return Ly=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Ly(e,t)}function r4(e,t,r){return t=n4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n4(e){var t=xfe(e,"string");return mo(t)=="symbol"?t:String(t)}function xfe(e,t){if(mo(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(mo(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var kp=function(e){Ofe(t,e);function t(){return gfe(this,t),Sfe(this,t,arguments)}return wfe(t,[{key:"render",value:function(){var n=this.props,i=n.offset,a=n.layout,o=n.width,u=n.dataKey,l=n.data,s=n.dataPointFormatter,f=n.xAxis,c=n.yAxis,d=yfe(n,cfe),p=oe(d,!1);this.props.direction==="x"&&f.type!=="number"&&ra();var y=l.map(function(m){var g=s(m,u),h=g.x,v=g.y,b=g.value,w=g.errorVal;if(!w)return null;var S=[],$,_;if(Array.isArray(w)){var O=ffe(w,2);$=O[0],_=O[1]}else $=_=w;if(a==="vertical"){var T=f.scale,P=v+i,k=P+o,E=P-o,C=T(b-$),N=T(b+_);S.push({x1:N,y1:k,x2:N,y2:E}),S.push({x1:C,y1:P,x2:N,y2:P}),S.push({x1:C,y1:k,x2:C,y2:E})}else if(a==="horizontal"){var z=c.scale,F=h+i,B=F-o,j=F+o,L=z(b-$),U=z(b+_);S.push({x1:B,y1:U,x2:j,y2:U}),S.push({x1:F,y1:L,x2:F,y2:U}),S.push({x1:B,y1:L,x2:j,y2:L})}return x.createElement($e,Yf({className:"recharts-errorBar",key:"bar-".concat(S.map(function(Y){return"".concat(Y.x1,"-").concat(Y.x2,"-").concat(Y.y1,"-").concat(Y.y2)}))},p),S.map(function(Y){return x.createElement("line",Yf({},Y,{key:"line-".concat(Y.x1,"-").concat(Y.x2,"-").concat(Y.y1,"-").concat(Y.y2)}))}))});return x.createElement($e,{className:"recharts-errorBars"},y)}}]),t}(x.Component);r4(kp,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});r4(kp,"displayName","ErrorBar");function Nl(e){"@babel/helpers - typeof";return Nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nl(e)}function m_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function S0(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?m_(Object(r),!0).forEach(function(n){Afe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Afe(e,t,r){return t=Pfe(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Pfe(e){var t=Efe(e,"string");return Nl(t)=="symbol"?t:String(t)}function Efe(e,t){if(Nl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Nl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var i4=function(t){var r=t.children,n=t.formattedGraphicalItems,i=t.legendWidth,a=t.legendContent,o=rr(r,$l);if(!o)return null;var u;return o.props&&o.props.payload?u=o.props&&o.props.payload:a==="children"?u=(n||[]).reduce(function(l,s){var f=s.item,c=s.props,d=c.sectors||c.data||[];return l.concat(d.map(function(p){return{type:o.props.iconType||f.props.legendType,value:p.name,color:p.fill,payload:p}}))},[]):u=(n||[]).map(function(l){var s=l.item,f=s.props,c=f.dataKey,d=f.name,p=f.legendType,y=f.hide;return{inactive:y,dataKey:c,type:o.props.iconType||p||"square",color:M1(s),value:d||c,payload:s.props}}),S0(S0(S0({},o.props),$l.getWithHeight(o,i)),{},{payload:u,item:o})};function Ml(e){"@babel/helpers - typeof";return Ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ml(e)}function g_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function mr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?g_(Object(r),!0).forEach(function(n){Ya(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ya(e,t,r){return t=Tfe(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Tfe(e){var t=kfe(e,"string");return Ml(t)=="symbol"?t:String(t)}function kfe(e,t){if(Ml(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Ml(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b_(e){return Nfe(e)||jfe(e)||Ife(e)||Cfe()}function Cfe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ife(e,t){if(e){if(typeof e=="string")return Ry(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ry(e,t)}}function jfe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nfe(e){if(Array.isArray(e))return Ry(e)}function Ry(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Et(e,t,r){return de(e)||de(t)?r:lt(t)?or(e,t,r):le(t)?t(e):r}function qu(e,t,r,n){var i=Cce(e,function(u){return Et(u,t)});if(r==="number"){var a=i.filter(function(u){return K(u)||parseFloat(u)});return a.length?[Ap(a),xp(a)]:[1/0,-1/0]}var o=n?i.filter(function(u){return!de(u)}):i;return o.map(function(u){return lt(u)||u instanceof Date?u:""})}var Mfe=function(t){var r,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],i=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,o=-1,u=(r=n==null?void 0:n.length)!==null&&r!==void 0?r:0;if(u<=1)return 0;if(a&&a.axisType==="angleAxis"&&Math.abs(Math.abs(a.range[1]-a.range[0])-360)<=1e-6)for(var l=a.range,s=0;s<u;s++){var f=s>0?i[s-1].coordinate:i[u-1].coordinate,c=i[s].coordinate,d=s>=u-1?i[0].coordinate:i[s+1].coordinate,p=void 0;if(jt(c-f)!==jt(d-c)){var y=[];if(jt(d-c)===jt(l[1]-l[0])){p=d;var m=c+l[1]-l[0];y[0]=Math.min(m,(m+f)/2),y[1]=Math.max(m,(m+f)/2)}else{p=f;var g=d+l[1]-l[0];y[0]=Math.min(c,(g+c)/2),y[1]=Math.max(c,(g+c)/2)}var h=[Math.min(c,(p+c)/2),Math.max(c,(p+c)/2)];if(t>h[0]&&t<=h[1]||t>=y[0]&&t<=y[1]){o=i[s].index;break}}else{var v=Math.min(f,d),b=Math.max(f,d);if(t>(v+c)/2&&t<=(b+c)/2){o=i[s].index;break}}}else for(var w=0;w<u;w++)if(w===0&&t<=(n[w].coordinate+n[w+1].coordinate)/2||w>0&&w<u-1&&t>(n[w].coordinate+n[w-1].coordinate)/2&&t<=(n[w].coordinate+n[w+1].coordinate)/2||w===u-1&&t>(n[w].coordinate+n[w-1].coordinate)/2){o=n[w].index;break}return o},M1=function(t){var r=t,n=r.type.displayName,i=t.props,a=i.stroke,o=i.fill,u;switch(n){case"Line":u=a;break;case"Area":case"Radar":u=a&&a!=="none"?a:o;break;default:u=o;break}return u},Dfe=function(t){var r=t.barSize,n=t.totalSize,i=t.stackGroups,a=i===void 0?{}:i;if(!a)return{};for(var o={},u=Object.keys(a),l=0,s=u.length;l<s;l++)for(var f=a[u[l]].stackGroups,c=Object.keys(f),d=0,p=c.length;d<p;d++){var y=f[c[d]],m=y.items,g=y.cateAxisId,h=m.filter(function(S){return si(S.type).indexOf("Bar")>=0});if(h&&h.length){var v=h[0].props.barSize,b=h[0].props[g];o[b]||(o[b]=[]);var w=de(v)?r:v;o[b].push({item:h[0],stackList:h.slice(1),barSize:de(w)?void 0:Nt(w,n,0)})}}return o},Lfe=function(t){var r=t.barGap,n=t.barCategoryGap,i=t.bandSize,a=t.sizeList,o=a===void 0?[]:a,u=t.maxBarSize,l=o.length;if(l<1)return null;var s=Nt(r,i,0,!0),f,c=[];if(o[0].barSize===+o[0].barSize){var d=!1,p=i/l,y=o.reduce(function(w,S){return w+S.barSize||0},0);y+=(l-1)*s,y>=i&&(y-=(l-1)*s,s=0),y>=i&&p>0&&(d=!0,p*=.9,y=l*p);var m=(i-y)/2>>0,g={offset:m-s,size:0};f=o.reduce(function(w,S){var $={item:S.item,position:{offset:g.offset+g.size+s,size:d?p:S.barSize}},_=[].concat(b_(w),[$]);return g=_[_.length-1].position,S.stackList&&S.stackList.length&&S.stackList.forEach(function(O){_.push({item:O,position:g})}),_},c)}else{var h=Nt(n,i,0,!0);i-2*h-(l-1)*s<=0&&(s=0);var v=(i-2*h-(l-1)*s)/l;v>1&&(v>>=0);var b=u===+u?Math.min(v,u):v;f=o.reduce(function(w,S,$){var _=[].concat(b_(w),[{item:S.item,position:{offset:h+(v+s)*$+(v-b)/2,size:b}}]);return S.stackList&&S.stackList.length&&S.stackList.forEach(function(O){_.push({item:O,position:_[_.length-1].position})}),_},c)}return f},Rfe=function(t,r,n,i){var a=n.children,o=n.width,u=n.margin,l=o-(u.left||0)-(u.right||0),s=i4({children:a,legendWidth:l});if(s){var f=i||{},c=f.width,d=f.height,p=s.align,y=s.verticalAlign,m=s.layout;if((m==="vertical"||m==="horizontal"&&y==="middle")&&p!=="center"&&K(t[p]))return mr(mr({},t),{},Ya({},p,t[p]+(c||0)));if((m==="horizontal"||m==="vertical"&&p==="center")&&y!=="middle"&&K(t[y]))return mr(mr({},t),{},Ya({},y,t[y]+(d||0)))}return t},Ffe=function(t,r,n){return de(r)?!0:t==="horizontal"?r==="yAxis":t==="vertical"||n==="x"?r==="xAxis":n==="y"?r==="yAxis":!0},a4=function(t,r,n,i,a){var o=r.props.children,u=$r(o,kp).filter(function(s){return Ffe(i,a,s.props.direction)});if(u&&u.length){var l=u.map(function(s){return s.props.dataKey});return t.reduce(function(s,f){var c=Et(f,n);if(de(c))return s;var d=Array.isArray(c)?[Ap(c),xp(c)]:[c,c],p=l.reduce(function(y,m){var g=Et(f,m,0),h=d[0]-Math.abs(Array.isArray(g)?g[0]:g),v=d[1]+Math.abs(Array.isArray(g)?g[1]:g);return[Math.min(h,y[0]),Math.max(v,y[1])]},[1/0,-1/0]);return[Math.min(p[0],s[0]),Math.max(p[1],s[1])]},[1/0,-1/0])}return null},Bfe=function(t,r,n,i,a){var o=r.map(function(u){return a4(t,u,n,a,i)}).filter(function(u){return!de(u)});return o&&o.length?o.reduce(function(u,l){return[Math.min(u[0],l[0]),Math.max(u[1],l[1])]},[1/0,-1/0]):null},o4=function(t,r,n,i,a){var o=r.map(function(l){var s=l.props.dataKey;return n==="number"&&s&&a4(t,l,s,i)||qu(t,s,n,a)});if(n==="number")return o.reduce(function(l,s){return[Math.min(l[0],s[0]),Math.max(l[1],s[1])]},[1/0,-1/0]);var u={};return o.reduce(function(l,s){for(var f=0,c=s.length;f<c;f++)u[s[f]]||(u[s[f]]=!0,l.push(s[f]));return l},[])},u4=function(t,r){return t==="horizontal"&&r==="xAxis"||t==="vertical"&&r==="yAxis"||t==="centric"&&r==="angleAxis"||t==="radial"&&r==="radiusAxis"},l4=function(t,r,n,i){if(i)return t.map(function(l){return l.coordinate});var a,o,u=t.map(function(l){return l.coordinate===r&&(a=!0),l.coordinate===n&&(o=!0),l.coordinate});return a||u.push(r),o||u.push(n),u},wn=function(t,r,n){if(!t)return null;var i=t.scale,a=t.duplicateDomain,o=t.type,u=t.range,l=t.realScaleType==="scaleBand"?i.bandwidth()/2:2,s=(r||n)&&o==="category"&&i.bandwidth?i.bandwidth()/l:0;if(s=t.axisType==="angleAxis"&&(u==null?void 0:u.length)>=2?jt(u[0]-u[1])*2*s:s,r&&(t.ticks||t.niceTicks)){var f=(t.ticks||t.niceTicks).map(function(c){var d=a?a.indexOf(c):c;return{coordinate:i(d)+s,value:c,offset:s}});return f.filter(function(c){return!hs(c.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(c,d){return{coordinate:i(c)+s,value:c,index:d,offset:s}}):i.ticks&&!n?i.ticks(t.tickCount).map(function(c){return{coordinate:i(c)+s,value:c,offset:s}}):i.domain().map(function(c,d){return{coordinate:i(c)+s,value:a?a[c]:c,index:d,offset:s}})},$0=new WeakMap,gc=function(t,r){if(typeof r!="function")return t;$0.has(t)||$0.set(t,new WeakMap);var n=$0.get(t);if(n.has(r))return n.get(r);var i=function(){t.apply(void 0,arguments),r.apply(void 0,arguments)};return n.set(r,i),i},s4=function(t,r,n){var i=t.scale,a=t.type,o=t.layout,u=t.axisType;if(i==="auto")return o==="radial"&&u==="radiusAxis"?{scale:Pl(),realScaleType:"band"}:o==="radial"&&u==="angleAxis"?{scale:Hf(),realScaleType:"linear"}:a==="category"&&r&&(r.indexOf("LineChart")>=0||r.indexOf("AreaChart")>=0||r.indexOf("ComposedChart")>=0&&!n)?{scale:Yu(),realScaleType:"point"}:a==="category"?{scale:Pl(),realScaleType:"band"}:{scale:Hf(),realScaleType:"linear"};if(vs(i)){var l="scale".concat(fp(i));return{scale:(d_[l]||Yu)(),realScaleType:d_[l]?l:"point"}}return le(i)?{scale:i}:{scale:Yu(),realScaleType:"point"}},w_=1e-4,c4=function(t){var r=t.domain();if(!(!r||r.length<=2)){var n=r.length,i=t.range(),a=Math.min(i[0],i[1])-w_,o=Math.max(i[0],i[1])+w_,u=t(r[0]),l=t(r[n-1]);(u<a||u>o||l<a||l>o)&&t.domain([r[0],r[n-1]])}},zfe=function(t,r){if(!t)return null;for(var n=0,i=t.length;n<i;n++)if(t[n].item===r)return t[n].position;return null},Ufe=function(t,r){if(!r||r.length!==2||!K(r[0])||!K(r[1]))return t;var n=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]),a=[t[0],t[1]];return(!K(t[0])||t[0]<n)&&(a[0]=n),(!K(t[1])||t[1]>i)&&(a[1]=i),a[0]>i&&(a[0]=i),a[1]<n&&(a[1]=n),a},Wfe=function(t){var r=t.length;if(!(r<=0))for(var n=0,i=t[0].length;n<i;++n)for(var a=0,o=0,u=0;u<r;++u){var l=hs(t[u][n][1])?t[u][n][0]:t[u][n][1];l>=0?(t[u][n][0]=a,t[u][n][1]=a+l,a=t[u][n][1]):(t[u][n][0]=o,t[u][n][1]=o+l,o=t[u][n][1])}},Hfe=function(t){var r=t.length;if(!(r<=0))for(var n=0,i=t[0].length;n<i;++n)for(var a=0,o=0;o<r;++o){var u=hs(t[o][n][1])?t[o][n][0]:t[o][n][1];u>=0?(t[o][n][0]=a,t[o][n][1]=a+u,a=t[o][n][1]):(t[o][n][0]=0,t[o][n][1]=0)}},Gfe={sign:Wfe,expand:bZ,none:lo,silhouette:wZ,wiggle:SZ,positive:Hfe},Vfe=function(t,r,n){var i=r.map(function(u){return u.props.dataKey}),a=Gfe[n],o=gZ().keys(i).value(function(u,l){return+Et(u,l,0)}).order(ly).offset(a);return o(t)},Kfe=function(t,r,n,i,a,o){if(!t)return null;var u=o?r.reverse():r,l={},s=u.reduce(function(c,d){var p=d.props,y=p.stackId,m=p.hide;if(m)return c;var g=d.props[n],h=c[g]||{hasStack:!1,stackGroups:{}};if(lt(y)){var v=h.stackGroups[y]||{numericAxisId:n,cateAxisId:i,items:[]};v.items.push(d),h.hasStack=!0,h.stackGroups[y]=v}else h.stackGroups[ys("_stackId_")]={numericAxisId:n,cateAxisId:i,items:[d]};return mr(mr({},c),{},Ya({},g,h))},l),f={};return Object.keys(s).reduce(function(c,d){var p=s[d];if(p.hasStack){var y={};p.stackGroups=Object.keys(p.stackGroups).reduce(function(m,g){var h=p.stackGroups[g];return mr(mr({},m),{},Ya({},g,{numericAxisId:n,cateAxisId:i,items:h.items,stackedData:Vfe(t,h.items,a)}))},y)}return mr(mr({},c),{},Ya({},d,p))},f)},f4=function(t,r){var n=r.realScaleType,i=r.type,a=r.tickCount,o=r.originalDomain,u=r.allowDecimals,l=n||r.scale;if(l!=="auto"&&l!=="linear")return null;if(a&&i==="number"&&o&&(o[0]==="auto"||o[1]==="auto")){var s=t.domain();if(!s.length)return null;var f=ufe(s,a,u);return t.domain([Ap(f),xp(f)]),{niceTicks:f}}if(a&&i==="number"){var c=t.domain(),d=lfe(c,a,u);return{niceTicks:d}}return null},S_=function(t){var r=t.axis,n=t.ticks,i=t.offset,a=t.bandSize,o=t.entry,u=t.index;if(r.type==="category")return n[u]?n[u].coordinate+i:null;var l=Et(o,r.dataKey,r.domain[u]);return de(l)?null:r.scale(l)-a/2+i},Xfe=function(t){var r=t.numericAxis,n=r.scale.domain();if(r.type==="number"){var i=Math.min(n[0],n[1]),a=Math.max(n[0],n[1]);return i<=0&&a>=0?0:a<0?a:i}return n[0]},Yfe=function(t,r){var n=t.props.stackId;if(lt(n)){var i=r[n];if(i){var a=i.items.indexOf(t);return a>=0?i.stackedData[a]:null}}return null},qfe=function(t){return t.reduce(function(r,n){return[Ap(n.concat([r[0]]).filter(K)),xp(n.concat([r[1]]).filter(K))]},[1/0,-1/0])},d4=function(t,r,n){return Object.keys(t).reduce(function(i,a){var o=t[a],u=o.stackedData,l=u.reduce(function(s,f){var c=qfe(f.slice(r,n+1));return[Math.min(s[0],c[0]),Math.max(s[1],c[1])]},[1/0,-1/0]);return[Math.min(l[0],i[0]),Math.max(l[1],i[1])]},[1/0,-1/0]).map(function(i){return i===1/0||i===-1/0?0:i})},$_=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,__=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,Fy=function(t,r,n){if(le(t))return t(r,n);if(!Array.isArray(t))return r;var i=[];if(K(t[0]))i[0]=n?t[0]:Math.min(t[0],r[0]);else if($_.test(t[0])){var a=+$_.exec(t[0])[1];i[0]=r[0]-a}else le(t[0])?i[0]=t[0](r[0]):i[0]=r[0];if(K(t[1]))i[1]=n?t[1]:Math.max(t[1],r[1]);else if(__.test(t[1])){var o=+__.exec(t[1])[1];i[1]=r[1]+o}else le(t[1])?i[1]=t[1](r[1]):i[1]=r[1];return i},Qf=function(t,r,n){if(t&&t.scale&&t.scale.bandwidth){var i=t.scale.bandwidth();if(!n||i>0)return i}if(t&&r&&r.length>=2){for(var a=s1(r,function(c){return c.coordinate}),o=1/0,u=1,l=a.length;u<l;u++){var s=a[u],f=a[u-1];o=Math.min((s.coordinate||0)-(f.coordinate||0),o)}return o===1/0?0:o}return n?void 0:0},O_=function(t,r,n){return!t||!t.length||Pp(t,or(n,"type.defaultProps.domain"))?r:t},p4=function(t,r){var n=t.props,i=n.dataKey,a=n.name,o=n.unit,u=n.formatter,l=n.tooltipType,s=n.chartType,f=n.hide;return mr(mr({},oe(t,!1)),{},{dataKey:i,unit:o,formatter:u,name:a||i,color:M1(t),value:Et(r,i),type:l,payload:r,chartType:s,hide:f})};function Dl(e){"@babel/helpers - typeof";return Dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dl(e)}function x_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function vn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?x_(Object(r),!0).forEach(function(n){v4(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function v4(e,t,r){return t=Qfe(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Qfe(e){var t=Zfe(e,"string");return Dl(t)=="symbol"?t:String(t)}function Zfe(e,t){if(Dl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Dl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Jfe(e,t){return nde(e)||rde(e,t)||tde(e,t)||ede()}function ede(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tde(e,t){if(e){if(typeof e=="string")return A_(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A_(e,t)}}function A_(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function rde(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function nde(e){if(Array.isArray(e))return e}var Zf=Math.PI/180,ide=function(t){return t*180/Math.PI},je=function(t,r,n,i){return{x:t+Math.cos(-Zf*i)*n,y:r+Math.sin(-Zf*i)*n}},h4=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(t-(n.left||0)-(n.right||0)),Math.abs(r-(n.top||0)-(n.bottom||0)))/2},ade=function(t,r,n,i,a){var o=t.width,u=t.height,l=t.startAngle,s=t.endAngle,f=Nt(t.cx,o,o/2),c=Nt(t.cy,u,u/2),d=h4(o,u,n),p=Nt(t.innerRadius,d,0),y=Nt(t.outerRadius,d,d*.8),m=Object.keys(r);return m.reduce(function(g,h){var v=r[h],b=v.domain,w=v.reversed,S;if(de(v.range))i==="angleAxis"?S=[l,s]:i==="radiusAxis"&&(S=[p,y]),w&&(S=[S[1],S[0]]);else{S=v.range;var $=S,_=Jfe($,2);l=_[0],s=_[1]}var O=s4(v,a),T=O.realScaleType,P=O.scale;P.domain(b).range(S),c4(P);var k=f4(P,vn(vn({},v),{},{realScaleType:T})),E=vn(vn(vn({},v),k),{},{range:S,radius:y,realScaleType:T,scale:P,cx:f,cy:c,innerRadius:p,outerRadius:y,startAngle:l,endAngle:s});return vn(vn({},g),{},v4({},h,E))},{})},ode=function(t,r){var n=t.x,i=t.y,a=r.x,o=r.y;return Math.sqrt(Math.pow(n-a,2)+Math.pow(i-o,2))},ude=function(t,r){var n=t.x,i=t.y,a=r.cx,o=r.cy,u=ode({x:n,y:i},{x:a,y:o});if(u<=0)return{radius:u};var l=(n-a)/u,s=Math.acos(l);return i>o&&(s=2*Math.PI-s),{radius:u,angle:ide(s),angleInRadian:s}},lde=function(t){var r=t.startAngle,n=t.endAngle,i=Math.floor(r/360),a=Math.floor(n/360),o=Math.min(i,a);return{startAngle:r-o*360,endAngle:n-o*360}},sde=function(t,r){var n=r.startAngle,i=r.endAngle,a=Math.floor(n/360),o=Math.floor(i/360),u=Math.min(a,o);return t+u*360},P_=function(t,r){var n=t.x,i=t.y,a=ude({x:n,y:i},r),o=a.radius,u=a.angle,l=r.innerRadius,s=r.outerRadius;if(o<l||o>s)return!1;if(o===0)return!0;var f=lde(r),c=f.startAngle,d=f.endAngle,p=u,y;if(c<=d){for(;p>d;)p-=360;for(;p<c;)p+=360;y=p>=c&&p<=d}else{for(;p>c;)p-=360;for(;p<d;)p+=360;y=p>=d&&p<=c}return y?vn(vn({},r),{},{radius:o,angle:sde(p,r)}):null},y4=function(t){return!V.isValidElement(t)&&!le(t)&&typeof t!="boolean"?t.className:""};function Ll(e){"@babel/helpers - typeof";return Ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ll(e)}var cde=["offset"];function fde(e){return hde(e)||vde(e)||pde(e)||dde()}function dde(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pde(e,t){if(e){if(typeof e=="string")return By(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return By(e,t)}}function vde(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hde(e){if(Array.isArray(e))return By(e)}function By(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function yde(e,t){if(e==null)return{};var r=mde(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function mde(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function E_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function nt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?E_(Object(r),!0).forEach(function(n){gde(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function gde(e,t,r){return t=bde(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bde(e){var t=wde(e,"string");return Ll(t)=="symbol"?t:String(t)}function wde(e,t){if(Ll(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Ll(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rl(){return Rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Rl.apply(this,arguments)}var Sde=function(t){var r=t.value,n=t.formatter,i=de(t.children)?r:t.children;return le(n)?n(i):i},$de=function(t,r){var n=jt(r-t),i=Math.min(Math.abs(r-t),360);return n*i},_de=function(t,r,n){var i=t.position,a=t.viewBox,o=t.offset,u=t.className,l=a,s=l.cx,f=l.cy,c=l.innerRadius,d=l.outerRadius,p=l.startAngle,y=l.endAngle,m=l.clockWise,g=(c+d)/2,h=$de(p,y),v=h>=0?1:-1,b,w;i==="insideStart"?(b=p+v*o,w=m):i==="insideEnd"?(b=y-v*o,w=!m):i==="end"&&(b=y+v*o,w=m),w=h<=0?w:!w;var S=je(s,f,g,b),$=je(s,f,g,b+(w?1:-1)*359),_="M".concat(S.x,",").concat(S.y,`
    A`).concat(g,",").concat(g,",0,1,").concat(w?0:1,`,
    `).concat($.x,",").concat($.y),O=de(t.id)?ys("recharts-radial-line-"):t.id;return x.createElement("text",Rl({},n,{dominantBaseline:"central",className:pe("recharts-radial-bar-label",u)}),x.createElement("defs",null,x.createElement("path",{id:O,d:_})),x.createElement("textPath",{xlinkHref:"#".concat(O)},r))},Ode=function(t){var r=t.viewBox,n=t.offset,i=t.position,a=r,o=a.cx,u=a.cy,l=a.innerRadius,s=a.outerRadius,f=a.startAngle,c=a.endAngle,d=(f+c)/2;if(i==="outside"){var p=je(o,u,s+n,d),y=p.x,m=p.y;return{x:y,y:m,textAnchor:y>=o?"start":"end",verticalAnchor:"middle"}}if(i==="center")return{x:o,y:u,textAnchor:"middle",verticalAnchor:"middle"};if(i==="centerTop")return{x:o,y:u,textAnchor:"middle",verticalAnchor:"start"};if(i==="centerBottom")return{x:o,y:u,textAnchor:"middle",verticalAnchor:"end"};var g=(l+s)/2,h=je(o,u,g,d),v=h.x,b=h.y;return{x:v,y:b,textAnchor:"middle",verticalAnchor:"middle"}},xde=function(t){var r=t.viewBox,n=t.parentViewBox,i=t.offset,a=t.position,o=r,u=o.x,l=o.y,s=o.width,f=o.height,c=f>=0?1:-1,d=c*i,p=c>0?"end":"start",y=c>0?"start":"end",m=s>=0?1:-1,g=m*i,h=m>0?"end":"start",v=m>0?"start":"end";if(a==="top"){var b={x:u+s/2,y:l-c*i,textAnchor:"middle",verticalAnchor:p};return nt(nt({},b),n?{height:Math.max(l-n.y,0),width:s}:{})}if(a==="bottom"){var w={x:u+s/2,y:l+f+d,textAnchor:"middle",verticalAnchor:y};return nt(nt({},w),n?{height:Math.max(n.y+n.height-(l+f),0),width:s}:{})}if(a==="left"){var S={x:u-g,y:l+f/2,textAnchor:h,verticalAnchor:"middle"};return nt(nt({},S),n?{width:Math.max(S.x-n.x,0),height:f}:{})}if(a==="right"){var $={x:u+s+g,y:l+f/2,textAnchor:v,verticalAnchor:"middle"};return nt(nt({},$),n?{width:Math.max(n.x+n.width-$.x,0),height:f}:{})}var _=n?{width:s,height:f}:{};return a==="insideLeft"?nt({x:u+g,y:l+f/2,textAnchor:v,verticalAnchor:"middle"},_):a==="insideRight"?nt({x:u+s-g,y:l+f/2,textAnchor:h,verticalAnchor:"middle"},_):a==="insideTop"?nt({x:u+s/2,y:l+d,textAnchor:"middle",verticalAnchor:y},_):a==="insideBottom"?nt({x:u+s/2,y:l+f-d,textAnchor:"middle",verticalAnchor:p},_):a==="insideTopLeft"?nt({x:u+g,y:l+d,textAnchor:v,verticalAnchor:y},_):a==="insideTopRight"?nt({x:u+s-g,y:l+d,textAnchor:h,verticalAnchor:y},_):a==="insideBottomLeft"?nt({x:u+g,y:l+f-d,textAnchor:v,verticalAnchor:p},_):a==="insideBottomRight"?nt({x:u+s-g,y:l+f-d,textAnchor:h,verticalAnchor:p},_):Ho(a)&&(K(a.x)||qh(a.x))&&(K(a.y)||qh(a.y))?nt({x:u+Nt(a.x,s),y:l+Nt(a.y,f),textAnchor:"end",verticalAnchor:"end"},_):nt({x:u+s/2,y:l+f/2,textAnchor:"middle",verticalAnchor:"middle"},_)},Ade=function(t){return"cx"in t&&K(t.cx)};function ot(e){var t=e.offset,r=t===void 0?5:t,n=yde(e,cde),i=nt({offset:r},n),a=i.viewBox,o=i.position,u=i.value,l=i.children,s=i.content,f=i.className,c=f===void 0?"":f,d=i.textBreakAll;if(!a||de(u)&&de(l)&&!V.isValidElement(s)&&!le(s))return null;if(V.isValidElement(s))return V.cloneElement(s,i);var p;if(le(s)){if(p=V.createElement(s,i),V.isValidElement(p))return p}else p=Sde(i);var y=Ade(a),m=oe(i,!0);if(y&&(o==="insideStart"||o==="insideEnd"||o==="end"))return _de(i,p,m);var g=y?Ode(i):xde(i);return x.createElement(ea,Rl({className:pe("recharts-label",c)},m,g,{breakAll:d}),p)}ot.displayName="Label";var m4=function(t){var r=t.cx,n=t.cy,i=t.angle,a=t.startAngle,o=t.endAngle,u=t.r,l=t.radius,s=t.innerRadius,f=t.outerRadius,c=t.x,d=t.y,p=t.top,y=t.left,m=t.width,g=t.height,h=t.clockWise,v=t.labelViewBox;if(v)return v;if(K(m)&&K(g)){if(K(c)&&K(d))return{x:c,y:d,width:m,height:g};if(K(p)&&K(y))return{x:p,y,width:m,height:g}}return K(c)&&K(d)?{x:c,y:d,width:0,height:0}:K(r)&&K(n)?{cx:r,cy:n,startAngle:a||i||0,endAngle:o||i||0,innerRadius:s||0,outerRadius:f||l||u||0,clockWise:h}:t.viewBox?t.viewBox:{}},Pde=function(t,r){return t?t===!0?x.createElement(ot,{key:"label-implicit",viewBox:r}):lt(t)?x.createElement(ot,{key:"label-implicit",viewBox:r,value:t}):V.isValidElement(t)?t.type===ot?V.cloneElement(t,{key:"label-implicit",viewBox:r}):x.createElement(ot,{key:"label-implicit",content:t,viewBox:r}):le(t)?x.createElement(ot,{key:"label-implicit",content:t,viewBox:r}):Ho(t)?x.createElement(ot,Rl({viewBox:r},t,{key:"label-implicit"})):null:null},Ede=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&n&&!t.label)return null;var i=t.children,a=m4(t),o=$r(i,ot).map(function(l,s){return V.cloneElement(l,{viewBox:r||a,key:"label-".concat(s)})});if(!n)return o;var u=Pde(t.label,r||a);return[u].concat(fde(o))};ot.parseViewBox=m4;ot.renderCallByParent=Ede;function Tde(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var kde=Tde;const Cde=Se(kde);function Fl(e){"@babel/helpers - typeof";return Fl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fl(e)}var Ide=["valueAccessor"],jde=["data","dataKey","clockWise","id","textBreakAll"];function Nde(e){return Rde(e)||Lde(e)||Dde(e)||Mde()}function Mde(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dde(e,t){if(e){if(typeof e=="string")return zy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return zy(e,t)}}function Lde(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rde(e){if(Array.isArray(e))return zy(e)}function zy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Jf(){return Jf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Jf.apply(this,arguments)}function T_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function k_(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?T_(Object(r),!0).forEach(function(n){Fde(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Fde(e,t,r){return t=Bde(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Bde(e){var t=zde(e,"string");return Fl(t)=="symbol"?t:String(t)}function zde(e,t){if(Fl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Fl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function C_(e,t){if(e==null)return{};var r=Ude(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ude(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var Wde=function(t){return Array.isArray(t.value)?Cde(t.value):t.value};function fi(e){var t=e.valueAccessor,r=t===void 0?Wde:t,n=C_(e,Ide),i=n.data,a=n.dataKey,o=n.clockWise,u=n.id,l=n.textBreakAll,s=C_(n,jde);return!i||!i.length?null:x.createElement($e,{className:"recharts-label-list"},i.map(function(f,c){var d=de(a)?r(f,c):Et(f&&f.payload,a),p=de(u)?{}:{id:"".concat(u,"-").concat(c)};return x.createElement(ot,Jf({},oe(f,!0),s,p,{parentViewBox:f.parentViewBox,value:d,textBreakAll:l,viewBox:ot.parseViewBox(de(o)?f:k_(k_({},f),{},{clockWise:o})),key:"label-".concat(c),index:c}))}))}fi.displayName="LabelList";function Hde(e,t){return e?e===!0?x.createElement(fi,{key:"labelList-implicit",data:t}):x.isValidElement(e)||le(e)?x.createElement(fi,{key:"labelList-implicit",data:t,content:e}):Ho(e)?x.createElement(fi,Jf({data:t},e,{key:"labelList-implicit"})):null:null}function Gde(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&r&&!e.label)return null;var n=e.children,i=$r(n,fi).map(function(o,u){return V.cloneElement(o,{data:t,key:"labelList-".concat(u)})});if(!r)return i;var a=Hde(e.label,t);return[a].concat(Nde(i))}fi.renderCallByParent=Gde;function Bl(e){"@babel/helpers - typeof";return Bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bl(e)}function Uy(){return Uy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Uy.apply(this,arguments)}function I_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function j_(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?I_(Object(r),!0).forEach(function(n){Vde(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Vde(e,t,r){return t=Kde(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Kde(e){var t=Xde(e,"string");return Bl(t)=="symbol"?t:String(t)}function Xde(e,t){if(Bl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Bl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Yde=function(t,r){var n=jt(r-t),i=Math.min(Math.abs(r-t),359.999);return n*i},bc=function(t){var r=t.cx,n=t.cy,i=t.radius,a=t.angle,o=t.sign,u=t.isExternal,l=t.cornerRadius,s=t.cornerIsExternal,f=l*(u?1:-1)+i,c=Math.asin(l/f)/Zf,d=s?a:a+o*c,p=je(r,n,f,d),y=je(r,n,i,d),m=s?a-o*c:a,g=je(r,n,f*Math.cos(c*Zf),m);return{center:p,circleTangency:y,lineTangency:g,theta:c}},g4=function(t){var r=t.cx,n=t.cy,i=t.innerRadius,a=t.outerRadius,o=t.startAngle,u=t.endAngle,l=Yde(o,u),s=o+l,f=je(r,n,a,o),c=je(r,n,a,s),d="M ".concat(f.x,",").concat(f.y,`
    A `).concat(a,",").concat(a,`,0,
    `).concat(+(Math.abs(l)>180),",").concat(+(o>s),`,
    `).concat(c.x,",").concat(c.y,`
  `);if(i>0){var p=je(r,n,i,o),y=je(r,n,i,s);d+="L ".concat(y.x,",").concat(y.y,`
            A `).concat(i,",").concat(i,`,0,
            `).concat(+(Math.abs(l)>180),",").concat(+(o<=s),`,
            `).concat(p.x,",").concat(p.y," Z")}else d+="L ".concat(r,",").concat(n," Z");return d},qde=function(t){var r=t.cx,n=t.cy,i=t.innerRadius,a=t.outerRadius,o=t.cornerRadius,u=t.forceCornerRadius,l=t.cornerIsExternal,s=t.startAngle,f=t.endAngle,c=jt(f-s),d=bc({cx:r,cy:n,radius:a,angle:s,sign:c,cornerRadius:o,cornerIsExternal:l}),p=d.circleTangency,y=d.lineTangency,m=d.theta,g=bc({cx:r,cy:n,radius:a,angle:f,sign:-c,cornerRadius:o,cornerIsExternal:l}),h=g.circleTangency,v=g.lineTangency,b=g.theta,w=l?Math.abs(s-f):Math.abs(s-f)-m-b;if(w<0)return u?"M ".concat(y.x,",").concat(y.y,`
        a`).concat(o,",").concat(o,",0,0,1,").concat(o*2,`,0
        a`).concat(o,",").concat(o,",0,0,1,").concat(-o*2,`,0
      `):g4({cx:r,cy:n,innerRadius:i,outerRadius:a,startAngle:s,endAngle:f});var S="M ".concat(y.x,",").concat(y.y,`
    A`).concat(o,",").concat(o,",0,0,").concat(+(c<0),",").concat(p.x,",").concat(p.y,`
    A`).concat(a,",").concat(a,",0,").concat(+(w>180),",").concat(+(c<0),",").concat(h.x,",").concat(h.y,`
    A`).concat(o,",").concat(o,",0,0,").concat(+(c<0),",").concat(v.x,",").concat(v.y,`
  `);if(i>0){var $=bc({cx:r,cy:n,radius:i,angle:s,sign:c,isExternal:!0,cornerRadius:o,cornerIsExternal:l}),_=$.circleTangency,O=$.lineTangency,T=$.theta,P=bc({cx:r,cy:n,radius:i,angle:f,sign:-c,isExternal:!0,cornerRadius:o,cornerIsExternal:l}),k=P.circleTangency,E=P.lineTangency,C=P.theta,N=l?Math.abs(s-f):Math.abs(s-f)-T-C;if(N<0&&o===0)return"".concat(S,"L").concat(r,",").concat(n,"Z");S+="L".concat(E.x,",").concat(E.y,`
      A`).concat(o,",").concat(o,",0,0,").concat(+(c<0),",").concat(k.x,",").concat(k.y,`
      A`).concat(i,",").concat(i,",0,").concat(+(N>180),",").concat(+(c>0),",").concat(_.x,",").concat(_.y,`
      A`).concat(o,",").concat(o,",0,0,").concat(+(c<0),",").concat(O.x,",").concat(O.y,"Z")}else S+="L".concat(r,",").concat(n,"Z");return S},Qde={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},b4=function(t){var r=j_(j_({},Qde),t),n=r.cx,i=r.cy,a=r.innerRadius,o=r.outerRadius,u=r.cornerRadius,l=r.forceCornerRadius,s=r.cornerIsExternal,f=r.startAngle,c=r.endAngle,d=r.className;if(o<a||f===c)return null;var p=pe("recharts-sector",d),y=o-a,m=Nt(u,y,0,!0),g;return m>0&&Math.abs(f-c)<360?g=qde({cx:n,cy:i,innerRadius:a,outerRadius:o,cornerRadius:Math.min(m,y/2),forceCornerRadius:l,cornerIsExternal:s,startAngle:f,endAngle:c}):g=g4({cx:n,cy:i,innerRadius:a,outerRadius:o,startAngle:f,endAngle:c}),x.createElement("path",Uy({},oe(r,!0),{className:p,d:g,role:"img"}))};function zl(e){"@babel/helpers - typeof";return zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zl(e)}function Wy(){return Wy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Wy.apply(this,arguments)}function N_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function M_(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?N_(Object(r),!0).forEach(function(n){Zde(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Zde(e,t,r){return t=Jde(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jde(e){var t=epe(e,"string");return zl(t)=="symbol"?t:String(t)}function epe(e,t){if(zl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(zl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var D_={curveBasisClosed:uZ,curveBasisOpen:lZ,curveBasis:oZ,curveBumpX:VQ,curveBumpY:KQ,curveLinearClosed:sZ,curveLinear:pp,curveMonotoneX:cZ,curveMonotoneY:fZ,curveNatural:dZ,curveStep:pZ,curveStepAfter:hZ,curveStepBefore:vZ},wc=function(t){return t.x===+t.x&&t.y===+t.y},Au=function(t){return t.x},Pu=function(t){return t.y},tpe=function(t,r){if(le(t))return t;var n="curve".concat(fp(t));return(n==="curveMonotone"||n==="curveBump")&&r?D_["".concat(n).concat(r==="vertical"?"Y":"X")]:D_[n]||pp},rpe=function(t){var r=t.type,n=r===void 0?"linear":r,i=t.points,a=i===void 0?[]:i,o=t.baseLine,u=t.layout,l=t.connectNulls,s=l===void 0?!1:l,f=tpe(n,u),c=s?a.filter(function(m){return wc(m)}):a,d;if(Array.isArray(o)){var p=s?o.filter(function(m){return wc(m)}):o,y=c.map(function(m,g){return M_(M_({},m),{},{base:p[g]})});return u==="vertical"?d=fc().y(Pu).x1(Au).x0(function(m){return m.base.x}):d=fc().x(Au).y1(Pu).y0(function(m){return m.base.y}),d.defined(wc).curve(f),d(y)}return u==="vertical"&&K(o)?d=fc().y(Pu).x1(Au).x0(o):K(o)?d=fc().x(Au).y1(Pu).y0(o):d=pE().x(Au).y(Pu),d.defined(wc).curve(f),d(c)},Hy=function(t){var r=t.className,n=t.points,i=t.path,a=t.pathRef;if((!n||!n.length)&&!i)return null;var o=n&&n.length?rpe(t):i;return x.createElement("path",Wy({},oe(t,!1),Of(t),{className:pe("recharts-curve",r),d:o,ref:a}))},w4={exports:{}},npe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ipe=npe,ape=ipe;function S4(){}function $4(){}$4.resetWarningCache=S4;var ope=function(){function e(n,i,a,o,u,l){if(l!==ape){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$4,resetWarningCache:S4};return r.PropTypes=r,r};w4.exports=ope();var upe=w4.exports;const se=Se(upe);var lpe=Object.getOwnPropertyNames,spe=Object.getOwnPropertySymbols,cpe=Object.prototype.hasOwnProperty;function L_(e,t){return function(n,i,a){return e(n,i,a)&&t(n,i,a)}}function Sc(e){return function(r,n,i){if(!r||!n||typeof r!="object"||typeof n!="object")return e(r,n,i);var a=i.cache,o=a.get(r),u=a.get(n);if(o&&u)return o===n&&u===r;a.set(r,n),a.set(n,r);var l=e(r,n,i);return a.delete(r),a.delete(n),l}}function R_(e){return lpe(e).concat(spe(e))}var _4=Object.hasOwn||function(e,t){return cpe.call(e,t)};function eu(e,t){return e||t?e===t:e===t||e!==e&&t!==t}var O4="_owner",F_=Object.getOwnPropertyDescriptor,B_=Object.keys;function fpe(e,t,r){var n=e.length;if(t.length!==n)return!1;for(;n-- >0;)if(!r.equals(e[n],t[n],n,n,e,t,r))return!1;return!0}function dpe(e,t){return eu(e.getTime(),t.getTime())}function z_(e,t,r){if(e.size!==t.size)return!1;for(var n={},i=e.entries(),a=0,o,u;(o=i.next())&&!o.done;){for(var l=t.entries(),s=!1,f=0;(u=l.next())&&!u.done;){var c=o.value,d=c[0],p=c[1],y=u.value,m=y[0],g=y[1];!s&&!n[f]&&(s=r.equals(d,m,a,f,e,t,r)&&r.equals(p,g,d,m,e,t,r))&&(n[f]=!0),f++}if(!s)return!1;a++}return!0}function ppe(e,t,r){var n=B_(e),i=n.length;if(B_(t).length!==i)return!1;for(var a;i-- >0;)if(a=n[i],a===O4&&(e.$$typeof||t.$$typeof)&&e.$$typeof!==t.$$typeof||!_4(t,a)||!r.equals(e[a],t[a],a,a,e,t,r))return!1;return!0}function Eu(e,t,r){var n=R_(e),i=n.length;if(R_(t).length!==i)return!1;for(var a,o,u;i-- >0;)if(a=n[i],a===O4&&(e.$$typeof||t.$$typeof)&&e.$$typeof!==t.$$typeof||!_4(t,a)||!r.equals(e[a],t[a],a,a,e,t,r)||(o=F_(e,a),u=F_(t,a),(o||u)&&(!o||!u||o.configurable!==u.configurable||o.enumerable!==u.enumerable||o.writable!==u.writable)))return!1;return!0}function vpe(e,t){return eu(e.valueOf(),t.valueOf())}function hpe(e,t){return e.source===t.source&&e.flags===t.flags}function U_(e,t,r){if(e.size!==t.size)return!1;for(var n={},i=e.values(),a,o;(a=i.next())&&!a.done;){for(var u=t.values(),l=!1,s=0;(o=u.next())&&!o.done;)!l&&!n[s]&&(l=r.equals(a.value,o.value,a.value,o.value,e,t,r))&&(n[s]=!0),s++;if(!l)return!1}return!0}function ype(e,t){var r=e.length;if(t.length!==r)return!1;for(;r-- >0;)if(e[r]!==t[r])return!1;return!0}var mpe="[object Arguments]",gpe="[object Boolean]",bpe="[object Date]",wpe="[object Map]",Spe="[object Number]",$pe="[object Object]",_pe="[object RegExp]",Ope="[object Set]",xpe="[object String]",Ape=Array.isArray,W_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,H_=Object.assign,Ppe=Object.prototype.toString.call.bind(Object.prototype.toString);function Epe(e){var t=e.areArraysEqual,r=e.areDatesEqual,n=e.areMapsEqual,i=e.areObjectsEqual,a=e.arePrimitiveWrappersEqual,o=e.areRegExpsEqual,u=e.areSetsEqual,l=e.areTypedArraysEqual;return function(f,c,d){if(f===c)return!0;if(f==null||c==null||typeof f!="object"||typeof c!="object")return f!==f&&c!==c;var p=f.constructor;if(p!==c.constructor)return!1;if(p===Object)return i(f,c,d);if(Ape(f))return t(f,c,d);if(W_!=null&&W_(f))return l(f,c,d);if(p===Date)return r(f,c,d);if(p===RegExp)return o(f,c,d);if(p===Map)return n(f,c,d);if(p===Set)return u(f,c,d);var y=Ppe(f);return y===bpe?r(f,c,d):y===_pe?o(f,c,d):y===wpe?n(f,c,d):y===Ope?u(f,c,d):y===$pe?typeof f.then!="function"&&typeof c.then!="function"&&i(f,c,d):y===mpe?i(f,c,d):y===gpe||y===Spe||y===xpe?a(f,c,d):!1}}function Tpe(e){var t=e.circular,r=e.createCustomConfig,n=e.strict,i={areArraysEqual:n?Eu:fpe,areDatesEqual:dpe,areMapsEqual:n?L_(z_,Eu):z_,areObjectsEqual:n?Eu:ppe,arePrimitiveWrappersEqual:vpe,areRegExpsEqual:hpe,areSetsEqual:n?L_(U_,Eu):U_,areTypedArraysEqual:n?Eu:ype};if(r&&(i=H_({},i,r(i))),t){var a=Sc(i.areArraysEqual),o=Sc(i.areMapsEqual),u=Sc(i.areObjectsEqual),l=Sc(i.areSetsEqual);i=H_({},i,{areArraysEqual:a,areMapsEqual:o,areObjectsEqual:u,areSetsEqual:l})}return i}function kpe(e){return function(t,r,n,i,a,o,u){return e(t,r,u)}}function Cpe(e){var t=e.circular,r=e.comparator,n=e.createState,i=e.equals,a=e.strict;if(n)return function(l,s){var f=n(),c=f.cache,d=c===void 0?t?new WeakMap:void 0:c,p=f.meta;return r(l,s,{cache:d,equals:i,meta:p,strict:a})};if(t)return function(l,s){return r(l,s,{cache:new WeakMap,equals:i,meta:void 0,strict:a})};var o={cache:void 0,equals:i,meta:void 0,strict:a};return function(l,s){return r(l,s,o)}}var Ipe=$i();$i({strict:!0});$i({circular:!0});$i({circular:!0,strict:!0});$i({createInternalComparator:function(){return eu}});$i({strict:!0,createInternalComparator:function(){return eu}});$i({circular:!0,createInternalComparator:function(){return eu}});$i({circular:!0,createInternalComparator:function(){return eu},strict:!0});function $i(e){e===void 0&&(e={});var t=e.circular,r=t===void 0?!1:t,n=e.createInternalComparator,i=e.createState,a=e.strict,o=a===void 0?!1:a,u=Tpe(e),l=Epe(u),s=n?n(l):kpe(l);return Cpe({circular:r,comparator:l,createState:i,equals:s,strict:o})}function jpe(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function G_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=-1,n=function i(a){r<0&&(r=a),a-r>t?(e(a),r=-1):jpe(i)};requestAnimationFrame(n)}function Gy(e){"@babel/helpers - typeof";return Gy=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gy(e)}function Npe(e){return Rpe(e)||Lpe(e)||Dpe(e)||Mpe()}function Mpe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dpe(e,t){if(e){if(typeof e=="string")return V_(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V_(e,t)}}function V_(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Lpe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rpe(e){if(Array.isArray(e))return e}function Fpe(){var e={},t=function(){return null},r=!1,n=function i(a){if(!r){if(Array.isArray(a)){if(!a.length)return;var o=a,u=Npe(o),l=u[0],s=u.slice(1);if(typeof l=="number"){G_(i.bind(null,s),l);return}i(l),G_(i.bind(null,s));return}Gy(a)==="object"&&(e=a,t(e)),typeof a=="function"&&a()}};return{stop:function(){r=!0},start:function(a){r=!1,n(a)},subscribe:function(a){return t=a,function(){t=function(){return null}}}}}function Ul(e){"@babel/helpers - typeof";return Ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ul(e)}function K_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function X_(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?K_(Object(r),!0).forEach(function(n){x4(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function x4(e,t,r){return t=Bpe(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Bpe(e){var t=zpe(e,"string");return Ul(t)==="symbol"?t:String(t)}function zpe(e,t){if(Ul(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Ul(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Upe=function(t,r){return[Object.keys(t),Object.keys(r)].reduce(function(n,i){return n.filter(function(a){return i.includes(a)})})},Wpe=function(t){return t},Hpe=function(t){return t.replace(/([A-Z])/g,function(r){return"-".concat(r.toLowerCase())})},Qu=function(t,r){return Object.keys(r).reduce(function(n,i){return X_(X_({},n),{},x4({},i,t(i,r[i])))},{})},Y_=function(t,r,n){return t.map(function(i){return"".concat(Hpe(i)," ").concat(r,"ms ").concat(n)}).join(",")};function Gpe(e,t){return Xpe(e)||Kpe(e,t)||A4(e,t)||Vpe()}function Vpe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kpe(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function Xpe(e){if(Array.isArray(e))return e}function Ype(e){return Zpe(e)||Qpe(e)||A4(e)||qpe()}function qpe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A4(e,t){if(e){if(typeof e=="string")return Vy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Vy(e,t)}}function Qpe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Zpe(e){if(Array.isArray(e))return Vy(e)}function Vy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ed=1e-4,P4=function(t,r){return[0,3*t,3*r-6*t,3*t-3*r+1]},E4=function(t,r){return t.map(function(n,i){return n*Math.pow(r,i)}).reduce(function(n,i){return n+i})},q_=function(t,r){return function(n){var i=P4(t,r);return E4(i,n)}},Jpe=function(t,r){return function(n){var i=P4(t,r),a=[].concat(Ype(i.map(function(o,u){return o*u}).slice(1)),[0]);return E4(a,n)}},Q_=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=r[0],a=r[1],o=r[2],u=r[3];if(r.length===1)switch(r[0]){case"linear":i=0,a=0,o=1,u=1;break;case"ease":i=.25,a=.1,o=.25,u=1;break;case"ease-in":i=.42,a=0,o=1,u=1;break;case"ease-out":i=.42,a=0,o=.58,u=1;break;case"ease-in-out":i=0,a=0,o=.58,u=1;break;default:{var l=r[0].split("(");if(l[0]==="cubic-bezier"&&l[1].split(")")[0].split(",").length===4){var s=l[1].split(")")[0].split(",").map(function(g){return parseFloat(g)}),f=Gpe(s,4);i=f[0],a=f[1],o=f[2],u=f[3]}}}var c=q_(i,o),d=q_(a,u),p=Jpe(i,o),y=function(h){return h>1?1:h<0?0:h},m=function(h){for(var v=h>1?1:h,b=v,w=0;w<8;++w){var S=c(b)-v,$=p(b);if(Math.abs(S-v)<ed||$<ed)return d(b);b=y(b-S/$)}return d(b)};return m.isStepper=!1,m},eve=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.stiff,n=r===void 0?100:r,i=t.damping,a=i===void 0?8:i,o=t.dt,u=o===void 0?17:o,l=function(f,c,d){var p=-(f-c)*n,y=d*a,m=d+(p-y)*u/1e3,g=d*u/1e3+f;return Math.abs(g-c)<ed&&Math.abs(m)<ed?[c,0]:[g,m]};return l.isStepper=!0,l.dt=u,l},tve=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=r[0];if(typeof i=="string")switch(i){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return Q_(i);case"spring":return eve();default:if(i.split("(")[0]==="cubic-bezier")return Q_(i)}return typeof i=="function"?i:null};function Wl(e){"@babel/helpers - typeof";return Wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wl(e)}function Z_(e){return ive(e)||nve(e)||T4(e)||rve()}function rve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nve(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ive(e){if(Array.isArray(e))return Xy(e)}function J_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function bt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?J_(Object(r),!0).forEach(function(n){Ky(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ky(e,t,r){return t=ave(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ave(e){var t=ove(e,"string");return Wl(t)==="symbol"?t:String(t)}function ove(e,t){if(Wl(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Wl(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function uve(e,t){return cve(e)||sve(e,t)||T4(e,t)||lve()}function lve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T4(e,t){if(e){if(typeof e=="string")return Xy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Xy(e,t)}}function Xy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function sve(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function cve(e){if(Array.isArray(e))return e}var td=function(t,r,n){return t+(r-t)*n},Yy=function(t){var r=t.from,n=t.to;return r!==n},fve=function e(t,r,n){var i=Qu(function(a,o){if(Yy(o)){var u=t(o.from,o.to,o.velocity),l=uve(u,2),s=l[0],f=l[1];return bt(bt({},o),{},{from:s,velocity:f})}return o},r);return n<1?Qu(function(a,o){return Yy(o)?bt(bt({},o),{},{velocity:td(o.velocity,i[a].velocity,n),from:td(o.from,i[a].from,n)}):o},r):e(t,i,n-1)};const dve=function(e,t,r,n,i){var a=Upe(e,t),o=a.reduce(function(g,h){return bt(bt({},g),{},Ky({},h,[e[h],t[h]]))},{}),u=a.reduce(function(g,h){return bt(bt({},g),{},Ky({},h,{from:e[h],velocity:0,to:t[h]}))},{}),l=-1,s,f,c=function(){return null},d=function(){return Qu(function(h,v){return v.from},u)},p=function(){return!Object.values(u).filter(Yy).length},y=function(h){s||(s=h);var v=h-s,b=v/r.dt;u=fve(r,u,b),i(bt(bt(bt({},e),t),d())),s=h,p()||(l=requestAnimationFrame(c))},m=function(h){f||(f=h);var v=(h-f)/n,b=Qu(function(S,$){return td.apply(void 0,Z_($).concat([r(v)]))},o);if(i(bt(bt(bt({},e),t),b)),v<1)l=requestAnimationFrame(c);else{var w=Qu(function(S,$){return td.apply(void 0,Z_($).concat([r(1)]))},o);i(bt(bt(bt({},e),t),w))}};return c=r.isStepper?y:m,function(){return requestAnimationFrame(c),function(){cancelAnimationFrame(l)}}};function go(e){"@babel/helpers - typeof";return go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},go(e)}var pve=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function vve(e,t){if(e==null)return{};var r=hve(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function hve(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function _0(e){return bve(e)||gve(e)||mve(e)||yve()}function yve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mve(e,t){if(e){if(typeof e=="string")return qy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return qy(e,t)}}function gve(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bve(e){if(Array.isArray(e))return qy(e)}function qy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function eO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function jr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?eO(Object(r),!0).forEach(function(n){Mu(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Mu(e,t,r){return t=k4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function wve(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sve(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,k4(n.key),n)}}function $ve(e,t,r){return t&&Sve(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function k4(e){var t=_ve(e,"string");return go(t)==="symbol"?t:String(t)}function _ve(e,t){if(go(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(go(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ove(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qy(e,t)}function Qy(e,t){return Qy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Qy(e,t)}function xve(e){var t=Ave();return function(){var n=rd(e),i;if(t){var a=rd(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return Zy(this,i)}}function Zy(e,t){if(t&&(go(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Jy(e)}function Jy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ave(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rd(e){return rd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},rd(e)}var Cn=function(e){Ove(r,e);var t=xve(r);function r(n,i){var a;wve(this,r),a=t.call(this,n,i);var o=a.props,u=o.isActive,l=o.attributeName,s=o.from,f=o.to,c=o.steps,d=o.children,p=o.duration;if(a.handleStyleChange=a.handleStyleChange.bind(Jy(a)),a.changeStyle=a.changeStyle.bind(Jy(a)),!u||p<=0)return a.state={style:{}},typeof d=="function"&&(a.state={style:f}),Zy(a);if(c&&c.length)a.state={style:c[0].style};else if(s){if(typeof d=="function")return a.state={style:s},Zy(a);a.state={style:l?Mu({},l,s):s}}else a.state={style:{}};return a}return $ve(r,[{key:"componentDidMount",value:function(){var i=this.props,a=i.isActive,o=i.canBegin;this.mounted=!0,!(!a||!o)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(i){var a=this.props,o=a.isActive,u=a.canBegin,l=a.attributeName,s=a.shouldReAnimate,f=a.to,c=a.from,d=this.state.style;if(u){if(!o){var p={style:l?Mu({},l,f):f};this.state&&d&&(l&&d[l]!==f||!l&&d!==f)&&this.setState(p);return}if(!(Ipe(i.to,f)&&i.canBegin&&i.isActive)){var y=!i.canBegin||!i.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var m=y||s?c:i.to;if(this.state&&d){var g={style:l?Mu({},l,m):m};(l&&d[l]!==m||!l&&d!==m)&&this.setState(g)}this.runAnimation(jr(jr({},this.props),{},{from:m,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var i=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),i&&i()}},{key:"handleStyleChange",value:function(i){this.changeStyle(i)}},{key:"changeStyle",value:function(i){this.mounted&&this.setState({style:i})}},{key:"runJSAnimation",value:function(i){var a=this,o=i.from,u=i.to,l=i.duration,s=i.easing,f=i.begin,c=i.onAnimationEnd,d=i.onAnimationStart,p=dve(o,u,tve(s),l,this.changeStyle),y=function(){a.stopJSAnimation=p()};this.manager.start([d,f,y,l,c])}},{key:"runStepAnimation",value:function(i){var a=this,o=i.steps,u=i.begin,l=i.onAnimationStart,s=o[0],f=s.style,c=s.duration,d=c===void 0?0:c,p=function(m,g,h){if(h===0)return m;var v=g.duration,b=g.easing,w=b===void 0?"ease":b,S=g.style,$=g.properties,_=g.onAnimationEnd,O=h>0?o[h-1]:g,T=$||Object.keys(S);if(typeof w=="function"||w==="spring")return[].concat(_0(m),[a.runJSAnimation.bind(a,{from:O.style,to:S,duration:v,easing:w}),v]);var P=Y_(T,v,w),k=jr(jr(jr({},O.style),S),{},{transition:P});return[].concat(_0(m),[k,v,_]).filter(Wpe)};return this.manager.start([l].concat(_0(o.reduce(p,[f,Math.max(d,u)])),[i.onAnimationEnd]))}},{key:"runAnimation",value:function(i){this.manager||(this.manager=Fpe());var a=i.begin,o=i.duration,u=i.attributeName,l=i.to,s=i.easing,f=i.onAnimationStart,c=i.onAnimationEnd,d=i.steps,p=i.children,y=this.manager;if(this.unSubscribe=y.subscribe(this.handleStyleChange),typeof s=="function"||typeof p=="function"||s==="spring"){this.runJSAnimation(i);return}if(d.length>1){this.runStepAnimation(i);return}var m=u?Mu({},u,l):l,g=Y_(Object.keys(m),o,s);y.start([f,a,jr(jr({},m),{},{transition:g}),o,c])}},{key:"render",value:function(){var i=this.props,a=i.children;i.begin;var o=i.duration;i.attributeName,i.easing;var u=i.isActive;i.steps,i.from,i.to,i.canBegin,i.onAnimationEnd,i.shouldReAnimate,i.onAnimationReStart;var l=vve(i,pve),s=V.Children.count(a),f=this.state.style;if(typeof a=="function")return a(f);if(!u||s===0||o<=0)return a;var c=function(p){var y=p.props,m=y.style,g=m===void 0?{}:m,h=y.className,v=V.cloneElement(p,jr(jr({},l),{},{style:jr(jr({},g),f),className:h}));return v};return s===1?c(V.Children.only(a)):x.createElement("div",null,V.Children.map(a,function(d){return c(d)}))}}]),r}(V.PureComponent);Cn.displayName="Animate";Cn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Cn.propTypes={from:se.oneOfType([se.object,se.string]),to:se.oneOfType([se.object,se.string]),attributeName:se.string,duration:se.number,begin:se.number,easing:se.oneOfType([se.string,se.func]),steps:se.arrayOf(se.shape({duration:se.number.isRequired,style:se.object.isRequired,easing:se.oneOfType([se.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),se.func]),properties:se.arrayOf("string"),onAnimationEnd:se.func})),children:se.oneOfType([se.node,se.func]),isActive:se.bool,canBegin:se.bool,onAnimationEnd:se.func,shouldReAnimate:se.bool,onAnimationStart:se.func,onAnimationReStart:se.func};se.object,se.object,se.object,se.element;se.object,se.object,se.object,se.oneOfType([se.array,se.element]),se.any;function Hl(e){"@babel/helpers - typeof";return Hl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hl(e)}function nd(){return nd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},nd.apply(this,arguments)}function Pve(e,t){return Cve(e)||kve(e,t)||Tve(e,t)||Eve()}function Eve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tve(e,t){if(e){if(typeof e=="string")return tO(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return tO(e,t)}}function tO(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function kve(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function Cve(e){if(Array.isArray(e))return e}function rO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function nO(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?rO(Object(r),!0).forEach(function(n){Ive(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ive(e,t,r){return t=jve(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function jve(e){var t=Nve(e,"string");return Hl(t)=="symbol"?t:String(t)}function Nve(e,t){if(Hl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Hl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var iO=function(t,r,n,i,a){var o=Math.min(Math.abs(n)/2,Math.abs(i)/2),u=i>=0?1:-1,l=n>=0?1:-1,s=i>=0&&n>=0||i<0&&n<0?1:0,f;if(o>0&&a instanceof Array){for(var c=[0,0,0,0],d=0,p=4;d<p;d++)c[d]=a[d]>o?o:a[d];f="M".concat(t,",").concat(r+u*c[0]),c[0]>0&&(f+="A ".concat(c[0],",").concat(c[0],",0,0,").concat(s,",").concat(t+l*c[0],",").concat(r)),f+="L ".concat(t+n-l*c[1],",").concat(r),c[1]>0&&(f+="A ".concat(c[1],",").concat(c[1],",0,0,").concat(s,`,
        `).concat(t+n,",").concat(r+u*c[1])),f+="L ".concat(t+n,",").concat(r+i-u*c[2]),c[2]>0&&(f+="A ".concat(c[2],",").concat(c[2],",0,0,").concat(s,`,
        `).concat(t+n-l*c[2],",").concat(r+i)),f+="L ".concat(t+l*c[3],",").concat(r+i),c[3]>0&&(f+="A ".concat(c[3],",").concat(c[3],",0,0,").concat(s,`,
        `).concat(t,",").concat(r+i-u*c[3])),f+="Z"}else if(o>0&&a===+a&&a>0){var y=Math.min(o,a);f="M ".concat(t,",").concat(r+u*y,`
            A `).concat(y,",").concat(y,",0,0,").concat(s,",").concat(t+l*y,",").concat(r,`
            L `).concat(t+n-l*y,",").concat(r,`
            A `).concat(y,",").concat(y,",0,0,").concat(s,",").concat(t+n,",").concat(r+u*y,`
            L `).concat(t+n,",").concat(r+i-u*y,`
            A `).concat(y,",").concat(y,",0,0,").concat(s,",").concat(t+n-l*y,",").concat(r+i,`
            L `).concat(t+l*y,",").concat(r+i,`
            A `).concat(y,",").concat(y,",0,0,").concat(s,",").concat(t,",").concat(r+i-u*y," Z")}else f="M ".concat(t,",").concat(r," h ").concat(n," v ").concat(i," h ").concat(-n," Z");return f},Mve=function(t,r){if(!t||!r)return!1;var n=t.x,i=t.y,a=r.x,o=r.y,u=r.width,l=r.height;if(Math.abs(u)>0&&Math.abs(l)>0){var s=Math.min(a,a+u),f=Math.max(a,a+u),c=Math.min(o,o+l),d=Math.max(o,o+l);return n>=s&&n<=f&&i>=c&&i<=d}return!1},Dve={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},D1=function(t){var r=nO(nO({},Dve),t),n=V.useRef(),i=V.useState(-1),a=Pve(i,2),o=a[0],u=a[1];V.useEffect(function(){if(n.current&&n.current.getTotalLength)try{var w=n.current.getTotalLength();w&&u(w)}catch{}},[]);var l=r.x,s=r.y,f=r.width,c=r.height,d=r.radius,p=r.className,y=r.animationEasing,m=r.animationDuration,g=r.animationBegin,h=r.isAnimationActive,v=r.isUpdateAnimationActive;if(l!==+l||s!==+s||f!==+f||c!==+c||f===0||c===0)return null;var b=pe("recharts-rectangle",p);return v?x.createElement(Cn,{canBegin:o>0,from:{width:f,height:c,x:l,y:s},to:{width:f,height:c,x:l,y:s},duration:m,animationEasing:y,isActive:v},function(w){var S=w.width,$=w.height,_=w.x,O=w.y;return x.createElement(Cn,{canBegin:o>0,from:"0px ".concat(o===-1?1:o,"px"),to:"".concat(o,"px 0px"),attributeName:"strokeDasharray",begin:g,duration:m,isActive:h,easing:y},x.createElement("path",nd({},oe(r,!0),{className:b,d:iO(_,O,S,$,d),ref:n})))}):x.createElement("path",nd({},oe(r,!0),{className:b,d:iO(l,s,f,c,d)}))},Lve=["points","className","baseLinePoints","connectNulls"];function La(){return La=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},La.apply(this,arguments)}function Rve(e,t){if(e==null)return{};var r=Fve(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Fve(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function aO(e){return Wve(e)||Uve(e)||zve(e)||Bve()}function Bve(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zve(e,t){if(e){if(typeof e=="string")return em(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return em(e,t)}}function Uve(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wve(e){if(Array.isArray(e))return em(e)}function em(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var oO=function(t){return t&&t.x===+t.x&&t.y===+t.y},Hve=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=[[]];return t.forEach(function(n){oO(n)?r[r.length-1].push(n):r[r.length-1].length>0&&r.push([])}),oO(t[0])&&r[r.length-1].push(t[0]),r[r.length-1].length<=0&&(r=r.slice(0,-1)),r},Zu=function(t,r){var n=Hve(t);r&&(n=[n.reduce(function(a,o){return[].concat(aO(a),aO(o))},[])]);var i=n.map(function(a){return a.reduce(function(o,u,l){return"".concat(o).concat(l===0?"M":"L").concat(u.x,",").concat(u.y)},"")}).join("");return n.length===1?"".concat(i,"Z"):i},Gve=function(t,r,n){var i=Zu(t,n);return"".concat(i.slice(-1)==="Z"?i.slice(0,-1):i,"L").concat(Zu(r.reverse(),n).slice(1))},Vve=function(t){var r=t.points,n=t.className,i=t.baseLinePoints,a=t.connectNulls,o=Rve(t,Lve);if(!r||!r.length)return null;var u=pe("recharts-polygon",n);if(i&&i.length){var l=o.stroke&&o.stroke!=="none",s=Gve(r,i,a);return x.createElement("g",{className:u},x.createElement("path",La({},oe(o,!0),{fill:s.slice(-1)==="Z"?o.fill:"none",stroke:"none",d:s})),l?x.createElement("path",La({},oe(o,!0),{fill:"none",d:Zu(r,a)})):null,l?x.createElement("path",La({},oe(o,!0),{fill:"none",d:Zu(i,a)})):null)}var f=Zu(r,a);return x.createElement("path",La({},oe(o,!0),{fill:f.slice(-1)==="Z"?o.fill:"none",className:u,d:f}))};function tm(){return tm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},tm.apply(this,arguments)}var L1=function(t){var r=t.cx,n=t.cy,i=t.r,a=t.className,o=pe("recharts-dot",a);return r===+r&&n===+n&&i===+i?x.createElement("circle",tm({},oe(t,!1),Of(t),{className:o,cx:r,cy:n,r:i})):null};function Gl(e){"@babel/helpers - typeof";return Gl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gl(e)}var Kve=["x","y","top","left","width","height","className"];function rm(){return rm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},rm.apply(this,arguments)}function uO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Xve(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?uO(Object(r),!0).forEach(function(n){Yve(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):uO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Yve(e,t,r){return t=qve(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function qve(e){var t=Qve(e,"string");return Gl(t)=="symbol"?t:String(t)}function Qve(e,t){if(Gl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Gl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zve(e,t){if(e==null)return{};var r=Jve(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Jve(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var e0e=function(t,r,n,i,a,o){return"M".concat(t,",").concat(a,"v").concat(i,"M").concat(o,",").concat(r,"h").concat(n)},t0e=function(t){var r=t.x,n=r===void 0?0:r,i=t.y,a=i===void 0?0:i,o=t.top,u=o===void 0?0:o,l=t.left,s=l===void 0?0:l,f=t.width,c=f===void 0?0:f,d=t.height,p=d===void 0?0:d,y=t.className,m=Zve(t,Kve),g=Xve({x:n,y:a,top:u,left:s,width:c,height:p},m);return!K(n)||!K(a)||!K(c)||!K(p)||!K(u)||!K(s)?null:x.createElement("path",rm({},oe(g,!0),{className:pe("recharts-cross",y),d:e0e(n,a,c,p,u,s)}))},r0e=Op,n0e=z6,i0e=un;function a0e(e,t){return e&&e.length?r0e(e,i0e(t),n0e):void 0}var o0e=a0e;const u0e=Se(o0e);var l0e=Op,s0e=un,c0e=U6;function f0e(e,t){return e&&e.length?l0e(e,s0e(t),c0e):void 0}var d0e=f0e;const p0e=Se(d0e);var v0e=["cx","cy","angle","ticks","axisLine"],h0e=["ticks","tick","angle","tickFormatter","stroke"];function bo(e){"@babel/helpers - typeof";return bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bo(e)}function Ju(){return Ju=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ju.apply(this,arguments)}function lO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function xi(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?lO(Object(r),!0).forEach(function(n){Cp(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):lO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function sO(e,t){if(e==null)return{};var r=y0e(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y0e(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function m0e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cO(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,I4(n.key),n)}}function g0e(e,t,r){return t&&cO(e.prototype,t),r&&cO(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function b0e(e,t,r){return t=id(t),w0e(e,C4()?Reflect.construct(t,r||[],id(e).constructor):t.apply(e,r))}function w0e(e,t){if(t&&(bo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S0e(e)}function S0e(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C4(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(C4=function(){return!!e})()}function id(e){return id=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},id(e)}function $0e(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&nm(e,t)}function nm(e,t){return nm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},nm(e,t)}function Cp(e,t,r){return t=I4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I4(e){var t=_0e(e,"string");return bo(t)=="symbol"?t:String(t)}function _0e(e,t){if(bo(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(bo(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ip=function(e){$0e(t,e);function t(){return m0e(this,t),b0e(this,t,arguments)}return g0e(t,[{key:"getTickValueCoord",value:function(n){var i=n.coordinate,a=this.props,o=a.angle,u=a.cx,l=a.cy;return je(u,l,i,o)}},{key:"getTickTextAnchor",value:function(){var n=this.props.orientation,i;switch(n){case"left":i="end";break;case"right":i="start";break;default:i="middle";break}return i}},{key:"getViewBox",value:function(){var n=this.props,i=n.cx,a=n.cy,o=n.angle,u=n.ticks,l=u0e(u,function(f){return f.coordinate||0}),s=p0e(u,function(f){return f.coordinate||0});return{cx:i,cy:a,startAngle:o,endAngle:o,innerRadius:s.coordinate||0,outerRadius:l.coordinate||0}}},{key:"renderAxisLine",value:function(){var n=this.props,i=n.cx,a=n.cy,o=n.angle,u=n.ticks,l=n.axisLine,s=sO(n,v0e),f=u.reduce(function(y,m){return[Math.min(y[0],m.coordinate),Math.max(y[1],m.coordinate)]},[1/0,-1/0]),c=je(i,a,f[0],o),d=je(i,a,f[1],o),p=xi(xi(xi({},oe(s,!1)),{},{fill:"none"},oe(l,!1)),{},{x1:c.x,y1:c.y,x2:d.x,y2:d.y});return x.createElement("line",Ju({className:"recharts-polar-radius-axis-line"},p))}},{key:"renderTicks",value:function(){var n=this,i=this.props,a=i.ticks,o=i.tick,u=i.angle,l=i.tickFormatter,s=i.stroke,f=sO(i,h0e),c=this.getTickTextAnchor(),d=oe(f,!1),p=oe(o,!1),y=a.map(function(m,g){var h=n.getTickValueCoord(m),v=xi(xi(xi(xi({textAnchor:c,transform:"rotate(".concat(90-u,", ").concat(h.x,", ").concat(h.y,")")},d),{},{stroke:"none",fill:s},p),{},{index:g},h),{},{payload:m});return x.createElement($e,Ju({className:pe("recharts-polar-radius-axis-tick",y4(o)),key:"tick-".concat(m.coordinate)},Ji(n.props,m,g)),t.renderTickItem(o,v,l?l(m.value,g):m.value))});return x.createElement($e,{className:"recharts-polar-radius-axis-ticks"},y)}},{key:"render",value:function(){var n=this.props,i=n.ticks,a=n.axisLine,o=n.tick;return!i||!i.length?null:x.createElement($e,{className:pe("recharts-polar-radius-axis",this.props.className)},a&&this.renderAxisLine(),o&&this.renderTicks(),ot.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(n,i,a){var o;return x.isValidElement(n)?o=x.cloneElement(n,i):le(n)?o=n(i):o=x.createElement(ea,Ju({},i,{className:"recharts-polar-radius-axis-tick-value"}),a),o}}]),t}(V.PureComponent);Cp(Ip,"displayName","PolarRadiusAxis");Cp(Ip,"axisType","radiusAxis");Cp(Ip,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function wo(e){"@babel/helpers - typeof";return wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wo(e)}function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ii.apply(this,arguments)}function fO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Ai(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fO(Object(r),!0).forEach(function(n){jp(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function O0e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dO(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,N4(n.key),n)}}function x0e(e,t,r){return t&&dO(e.prototype,t),r&&dO(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function A0e(e,t,r){return t=ad(t),P0e(e,j4()?Reflect.construct(t,r||[],ad(e).constructor):t.apply(e,r))}function P0e(e,t){if(t&&(wo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E0e(e)}function E0e(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j4(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(j4=function(){return!!e})()}function ad(e){return ad=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ad(e)}function T0e(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&im(e,t)}function im(e,t){return im=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},im(e,t)}function jp(e,t,r){return t=N4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N4(e){var t=k0e(e,"string");return wo(t)=="symbol"?t:String(t)}function k0e(e,t){if(wo(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(wo(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var C0e=Math.PI/180,pO=1e-5,Np=function(e){T0e(t,e);function t(){return O0e(this,t),A0e(this,t,arguments)}return x0e(t,[{key:"getTickLineCoord",value:function(n){var i=this.props,a=i.cx,o=i.cy,u=i.radius,l=i.orientation,s=i.tickSize,f=s||8,c=je(a,o,u,n.coordinate),d=je(a,o,u+(l==="inner"?-1:1)*f,n.coordinate);return{x1:c.x,y1:c.y,x2:d.x,y2:d.y}}},{key:"getTickTextAnchor",value:function(n){var i=this.props.orientation,a=Math.cos(-n.coordinate*C0e),o;return a>pO?o=i==="outer"?"start":"end":a<-pO?o=i==="outer"?"end":"start":o="middle",o}},{key:"renderAxisLine",value:function(){var n=this.props,i=n.cx,a=n.cy,o=n.radius,u=n.axisLine,l=n.axisLineType,s=Ai(Ai({},oe(this.props,!1)),{},{fill:"none"},oe(u,!1));if(l==="circle")return x.createElement(L1,Ii({className:"recharts-polar-angle-axis-line"},s,{cx:i,cy:a,r:o}));var f=this.props.ticks,c=f.map(function(d){return je(i,a,o,d.coordinate)});return x.createElement(Vve,Ii({className:"recharts-polar-angle-axis-line"},s,{points:c}))}},{key:"renderTicks",value:function(){var n=this,i=this.props,a=i.ticks,o=i.tick,u=i.tickLine,l=i.tickFormatter,s=i.stroke,f=oe(this.props,!1),c=oe(o,!1),d=Ai(Ai({},f),{},{fill:"none"},oe(u,!1)),p=a.map(function(y,m){var g=n.getTickLineCoord(y),h=n.getTickTextAnchor(y),v=Ai(Ai(Ai({textAnchor:h},f),{},{stroke:"none",fill:s},c),{},{index:m,payload:y,x:g.x2,y:g.y2});return x.createElement($e,Ii({className:pe("recharts-polar-angle-axis-tick",y4(o)),key:"tick-".concat(y.coordinate)},Ji(n.props,y,m)),u&&x.createElement("line",Ii({className:"recharts-polar-angle-axis-tick-line"},d,g)),o&&t.renderTickItem(o,v,l?l(y.value,m):y.value))});return x.createElement($e,{className:"recharts-polar-angle-axis-ticks"},p)}},{key:"render",value:function(){var n=this.props,i=n.ticks,a=n.radius,o=n.axisLine;return a<=0||!i||!i.length?null:x.createElement($e,{className:pe("recharts-polar-angle-axis",this.props.className)},o&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(n,i,a){var o;return x.isValidElement(n)?o=x.cloneElement(n,i):le(n)?o=n(i):o=x.createElement(ea,Ii({},i,{className:"recharts-polar-angle-axis-tick-value"}),a),o}}]),t}(V.PureComponent);jp(Np,"displayName","PolarAngleAxis");jp(Np,"axisType","angleAxis");jp(Np,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var I0e=LE,j0e=I0e(Object.getPrototypeOf,Object),N0e=j0e,M0e=jn,D0e=N0e,L0e=Nn,R0e="[object Object]",F0e=Function.prototype,B0e=Object.prototype,M4=F0e.toString,z0e=B0e.hasOwnProperty,U0e=M4.call(Object);function W0e(e){if(!L0e(e)||M0e(e)!=R0e)return!1;var t=D0e(e);if(t===null)return!0;var r=z0e.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&M4.call(r)==U0e}var H0e=W0e;const G0e=Se(H0e);var V0e=jn,K0e=Nn,X0e="[object Boolean]";function Y0e(e){return e===!0||e===!1||K0e(e)&&V0e(e)==X0e}var q0e=Y0e;const Q0e=Se(q0e);function Vl(e){"@babel/helpers - typeof";return Vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vl(e)}function od(){return od=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},od.apply(this,arguments)}function Z0e(e,t){return rhe(e)||the(e,t)||ehe(e,t)||J0e()}function J0e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ehe(e,t){if(e){if(typeof e=="string")return vO(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return vO(e,t)}}function vO(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function the(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function rhe(e){if(Array.isArray(e))return e}function hO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function yO(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?hO(Object(r),!0).forEach(function(n){nhe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):hO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function nhe(e,t,r){return t=ihe(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ihe(e){var t=ahe(e,"string");return Vl(t)=="symbol"?t:String(t)}function ahe(e,t){if(Vl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Vl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var mO=function(t,r,n,i,a){var o=n-i,u;return u="M ".concat(t,",").concat(r),u+="L ".concat(t+n,",").concat(r),u+="L ".concat(t+n-o/2,",").concat(r+a),u+="L ".concat(t+n-o/2-i,",").concat(r+a),u+="L ".concat(t,",").concat(r," Z"),u},ohe={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},uhe=function(t){var r=yO(yO({},ohe),t),n=V.useRef(),i=V.useState(-1),a=Z0e(i,2),o=a[0],u=a[1];V.useEffect(function(){if(n.current&&n.current.getTotalLength)try{var b=n.current.getTotalLength();b&&u(b)}catch{}},[]);var l=r.x,s=r.y,f=r.upperWidth,c=r.lowerWidth,d=r.height,p=r.className,y=r.animationEasing,m=r.animationDuration,g=r.animationBegin,h=r.isUpdateAnimationActive;if(l!==+l||s!==+s||f!==+f||c!==+c||d!==+d||f===0&&c===0||d===0)return null;var v=pe("recharts-trapezoid",p);return h?x.createElement(Cn,{canBegin:o>0,from:{upperWidth:0,lowerWidth:0,height:d,x:l,y:s},to:{upperWidth:f,lowerWidth:c,height:d,x:l,y:s},duration:m,animationEasing:y,isActive:h},function(b){var w=b.upperWidth,S=b.lowerWidth,$=b.height,_=b.x,O=b.y;return x.createElement(Cn,{canBegin:o>0,from:"0px ".concat(o===-1?1:o,"px"),to:"".concat(o,"px 0px"),attributeName:"strokeDasharray",begin:g,duration:m,easing:y},x.createElement("path",od({},oe(r,!0),{className:v,d:mO(_,O,w,S,$),ref:n})))}):x.createElement("g",null,x.createElement("path",od({},oe(r,!0),{className:v,d:mO(l,s,f,c,d)})))},lhe=["option","shapeType","propTransformer","activeClassName","isActive"];function Kl(e){"@babel/helpers - typeof";return Kl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Kl(e)}function she(e,t){if(e==null)return{};var r=che(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function che(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function gO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ud(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?gO(Object(r),!0).forEach(function(n){fhe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fhe(e,t,r){return t=dhe(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dhe(e){var t=phe(e,"string");return Kl(t)=="symbol"?t:String(t)}function phe(e,t){if(Kl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Kl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vhe(e,t){return ud(ud({},t),e)}function hhe(e,t){return e==="symbols"}function bO(e){var t=e.shapeType,r=e.elementProps;switch(t){case"rectangle":return x.createElement(D1,r);case"trapezoid":return x.createElement(uhe,r);case"sector":return x.createElement(b4,r);case"symbols":if(hhe(t))return x.createElement(t1,r);break;default:return null}}function yhe(e){return V.isValidElement(e)?e.props:e}function D4(e){var t=e.option,r=e.shapeType,n=e.propTransformer,i=n===void 0?vhe:n,a=e.activeClassName,o=a===void 0?"recharts-active-shape":a,u=e.isActive,l=she(e,lhe),s;if(V.isValidElement(t))s=V.cloneElement(t,ud(ud({},l),yhe(t)));else if(le(t))s=t(l);else if(G0e(t)&&!Q0e(t)){var f=i(t,l);s=x.createElement(bO,{shapeType:r,elementProps:f})}else{var c=l;s=x.createElement(bO,{shapeType:r,elementProps:c})}return u?x.createElement($e,{className:o},s):s}function Mp(e,t){return t!=null&&"trapezoids"in e.props}function Dp(e,t){return t!=null&&"sectors"in e.props}function Xl(e,t){return t!=null&&"points"in e.props}function mhe(e,t){var r,n,i=e.x===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.x)||e.x===t.x,a=e.y===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.y)||e.y===t.y;return i&&a}function ghe(e,t){var r=e.endAngle===t.endAngle,n=e.startAngle===t.startAngle;return r&&n}function bhe(e,t){var r=e.x===t.x,n=e.y===t.y,i=e.z===t.z;return r&&n&&i}function whe(e,t){var r;return Mp(e,t)?r=mhe:Dp(e,t)?r=ghe:Xl(e,t)&&(r=bhe),r}function She(e,t){var r;return Mp(e,t)?r="trapezoids":Dp(e,t)?r="sectors":Xl(e,t)&&(r="points"),r}function $he(e,t){if(Mp(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}if(Dp(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}return Xl(e,t)?t.payload:{}}function _he(e){var t=e.activeTooltipItem,r=e.graphicalItem,n=e.itemData,i=She(r,t),a=$he(r,t),o=n.filter(function(l,s){var f=Pp(a,l),c=r.props[i].filter(function(y){var m=whe(r,t);return m(y,t)}),d=r.props[i].indexOf(c[c.length-1]),p=s===d;return f&&p}),u=n.indexOf(o[o.length-1]);return u}var Wc;function So(e){"@babel/helpers - typeof";return So=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},So(e)}function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ra.apply(this,arguments)}function wO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?wO(Object(r),!0).forEach(function(n){gr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ohe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function SO(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,R4(n.key),n)}}function xhe(e,t,r){return t&&SO(e.prototype,t),r&&SO(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ahe(e,t,r){return t=ld(t),Phe(e,L4()?Reflect.construct(t,r||[],ld(e).constructor):t.apply(e,r))}function Phe(e,t){if(t&&(So(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Sa(e)}function L4(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(L4=function(){return!!e})()}function ld(e){return ld=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ld(e)}function Sa(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ehe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&am(e,t)}function am(e,t){return am=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},am(e,t)}function gr(e,t,r){return t=R4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R4(e){var t=The(e,"string");return So(t)=="symbol"?t:String(t)}function The(e,t){if(So(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(So(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Dn=function(e){Ehe(t,e);function t(r){var n;return Ohe(this,t),n=Ahe(this,t,[r]),gr(Sa(n),"pieRef",null),gr(Sa(n),"sectorRefs",[]),gr(Sa(n),"id",ys("recharts-pie-")),gr(Sa(n),"handleAnimationEnd",function(){var i=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),le(i)&&i()}),gr(Sa(n),"handleAnimationStart",function(){var i=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),le(i)&&i()}),n.state={isAnimationFinished:!r.isAnimationActive,prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,sectorToFocus:0},n}return xhe(t,[{key:"isActiveIndex",value:function(n){var i=this.props.activeIndex;return Array.isArray(i)?i.indexOf(n)!==-1:n===i}},{key:"hasActiveIndex",value:function(){var n=this.props.activeIndex;return Array.isArray(n)?n.length!==0:n||n===0}},{key:"renderLabels",value:function(n){var i=this.props.isAnimationActive;if(i&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.label,u=a.labelLine,l=a.dataKey,s=a.valueKey,f=oe(this.props,!1),c=oe(o,!1),d=oe(u,!1),p=o&&o.offsetRadius||20,y=n.map(function(m,g){var h=(m.startAngle+m.endAngle)/2,v=je(m.cx,m.cy,m.outerRadius+p,h),b=ke(ke(ke(ke({},f),m),{},{stroke:"none"},c),{},{index:g,textAnchor:t.getTextAnchor(v.x,m.cx)},v),w=ke(ke(ke(ke({},f),m),{},{fill:"none",stroke:m.fill},d),{},{index:g,points:[je(m.cx,m.cy,m.outerRadius,h),v],key:"line"}),S=l;return de(l)&&de(s)?S="value":de(l)&&(S=s),x.createElement($e,{key:"label-".concat(m.startAngle,"-").concat(m.endAngle,"-").concat(m.midAngle,"-").concat(g)},u&&t.renderLabelLineItem(u,w),t.renderLabelItem(o,b,Et(m,S)))});return x.createElement($e,{className:"recharts-pie-labels"},y)}},{key:"renderSectorsStatically",value:function(n){var i=this,a=this.props,o=a.activeShape,u=a.blendStroke,l=a.inactiveShape;return n.map(function(s,f){if((s==null?void 0:s.startAngle)===0&&(s==null?void 0:s.endAngle)===0&&n.length!==1)return null;var c=i.isActiveIndex(f),d=l&&i.hasActiveIndex()?l:null,p=c?o:d,y=ke(ke({},s),{},{stroke:u?s.fill:s.stroke,tabIndex:-1});return x.createElement($e,Ra({ref:function(g){g&&!i.sectorRefs.includes(g)&&i.sectorRefs.push(g)},tabIndex:-1,className:"recharts-pie-sector"},Ji(i.props,s,f),{key:"sector-".concat(s==null?void 0:s.startAngle,"-").concat(s==null?void 0:s.endAngle,"-").concat(s.midAngle,"-").concat(f)}),x.createElement(D4,Ra({option:p,isActive:c,shapeType:"sector"},y)))})}},{key:"renderSectorsWithAnimation",value:function(){var n=this,i=this.props,a=i.sectors,o=i.isAnimationActive,u=i.animationBegin,l=i.animationDuration,s=i.animationEasing,f=i.animationId,c=this.state,d=c.prevSectors,p=c.prevIsAnimationActive;return x.createElement(Cn,{begin:u,duration:l,isActive:o,easing:s,from:{t:0},to:{t:1},key:"pie-".concat(f,"-").concat(p),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(y){var m=y.t,g=[],h=a&&a[0],v=h.startAngle;return a.forEach(function(b,w){var S=d&&d[w],$=w>0?or(b,"paddingAngle",0):0;if(S){var _=Gn(S.endAngle-S.startAngle,b.endAngle-b.startAngle),O=ke(ke({},b),{},{startAngle:v+$,endAngle:v+_(m)+$});g.push(O),v=O.endAngle}else{var T=b.endAngle,P=b.startAngle,k=Gn(0,T-P),E=k(m),C=ke(ke({},b),{},{startAngle:v+$,endAngle:v+E+$});g.push(C),v=C.endAngle}}),x.createElement($e,null,n.renderSectorsStatically(g))})}},{key:"attachKeyboardHandlers",value:function(n){var i=this;n.onkeydown=function(a){if(!a.altKey)switch(a.key){case"ArrowLeft":{var o=++i.state.sectorToFocus%i.sectorRefs.length;i.sectorRefs[o].focus(),i.setState({sectorToFocus:o});break}case"ArrowRight":{var u=--i.state.sectorToFocus<0?i.sectorRefs.length-1:i.state.sectorToFocus%i.sectorRefs.length;i.sectorRefs[u].focus(),i.setState({sectorToFocus:u});break}case"Escape":{i.sectorRefs[i.state.sectorToFocus].blur(),i.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var n=this.props,i=n.sectors,a=n.isAnimationActive,o=this.state.prevSectors;return a&&i&&i.length&&(!o||!Pp(o,i))?this.renderSectorsWithAnimation():this.renderSectorsStatically(i)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var n=this,i=this.props,a=i.hide,o=i.sectors,u=i.className,l=i.label,s=i.cx,f=i.cy,c=i.innerRadius,d=i.outerRadius,p=i.isAnimationActive,y=this.state.isAnimationFinished;if(a||!o||!o.length||!K(s)||!K(f)||!K(c)||!K(d))return null;var m=pe("recharts-pie",u);return x.createElement($e,{tabIndex:this.props.rootTabIndex,className:m,ref:function(h){n.pieRef=h}},this.renderSectors(),l&&this.renderLabels(o),ot.renderCallByParent(this.props,null,!1),(!p||y)&&fi.renderCallByParent(this.props,o,!1))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return i.prevIsAnimationActive!==n.isAnimationActive?{prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,curSectors:n.sectors,prevSectors:[],isAnimationFinished:!0}:n.isAnimationActive&&n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curSectors:n.sectors,prevSectors:i.curSectors,isAnimationFinished:!0}:n.sectors!==i.curSectors?{curSectors:n.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(n,i){return n>i?"start":n<i?"end":"middle"}},{key:"renderLabelLineItem",value:function(n,i){if(x.isValidElement(n))return x.cloneElement(n,i);if(le(n))return n(i);var a=pe("recharts-pie-label-line",typeof n!="boolean"?n.className:"");return x.createElement(Hy,Ra({},i,{type:"linear",className:a}))}},{key:"renderLabelItem",value:function(n,i,a){if(x.isValidElement(n))return x.cloneElement(n,i);var o=a;if(le(n)&&(o=n(i),x.isValidElement(o)))return o;var u=pe("recharts-pie-label-text",typeof n!="boolean"&&!le(n)?n.className:"");return x.createElement(ea,Ra({},i,{alignmentBaseline:"middle",className:u}),o)}}]),t}(V.PureComponent);Wc=Dn;gr(Dn,"displayName","Pie");gr(Dn,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!$n.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});gr(Dn,"parseDeltaAngle",function(e,t){var r=jt(t-e),n=Math.min(Math.abs(t-e),360);return r*n});gr(Dn,"getRealPieData",function(e){var t=e.data,r=e.children,n=oe(e,!1),i=$r(r,gs);return t&&t.length?t.map(function(a,o){return ke(ke(ke({payload:a},n),a),i&&i[o]&&i[o].props)}):i&&i.length?i.map(function(a){return ke(ke({},n),a.props)}):[]});gr(Dn,"parseCoordinateOfPie",function(e,t){var r=t.top,n=t.left,i=t.width,a=t.height,o=h4(i,a),u=n+Nt(e.cx,i,i/2),l=r+Nt(e.cy,a,a/2),s=Nt(e.innerRadius,o,0),f=Nt(e.outerRadius,o,o*.8),c=e.maxRadius||Math.sqrt(i*i+a*a)/2;return{cx:u,cy:l,innerRadius:s,outerRadius:f,maxRadius:c}});gr(Dn,"getComposedData",function(e){var t=e.item,r=e.offset,n=t.type.defaultProps!==void 0?ke(ke({},t.type.defaultProps),t.props):t.props,i=Wc.getRealPieData(n);if(!i||!i.length)return null;var a=n.cornerRadius,o=n.startAngle,u=n.endAngle,l=n.paddingAngle,s=n.dataKey,f=n.nameKey,c=n.valueKey,d=n.tooltipType,p=Math.abs(n.minAngle),y=Wc.parseCoordinateOfPie(n,r),m=Wc.parseDeltaAngle(o,u),g=Math.abs(m),h=s;de(s)&&de(c)?(vi(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),h="value"):de(s)&&(vi(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),h=c);var v=i.filter(function(O){return Et(O,h,0)!==0}).length,b=(g>=360?v:v-1)*l,w=g-v*p-b,S=i.reduce(function(O,T){var P=Et(T,h,0);return O+(K(P)?P:0)},0),$;if(S>0){var _;$=i.map(function(O,T){var P=Et(O,h,0),k=Et(O,f,T),E=(K(P)?P:0)/S,C;T?C=_.endAngle+jt(m)*l*(P!==0?1:0):C=o;var N=C+jt(m)*((P!==0?p:0)+E*w),z=(C+N)/2,F=(y.innerRadius+y.outerRadius)/2,B=[{name:k,value:P,payload:O,dataKey:h,type:d}],j=je(y.cx,y.cy,F,z);return _=ke(ke(ke({percent:E,cornerRadius:a,name:k,tooltipPayload:B,midAngle:z,middleRadius:F,tooltipPosition:j},O),y),{},{value:Et(O,h),startAngle:C,endAngle:N,payload:O,paddingAngle:jt(m)*l}),_})}return ke(ke({},y),{},{sectors:$,data:i})});var khe=Math.ceil,Che=Math.max;function Ihe(e,t,r,n){for(var i=-1,a=Che(khe((t-e)/(r||1)),0),o=Array(a);a--;)o[n?a:++i]=e,e+=r;return o}var jhe=Ihe,Nhe=n6,$O=1/0,Mhe=17976931348623157e292;function Dhe(e){if(!e)return e===0?e:0;if(e=Nhe(e),e===$O||e===-$O){var t=e<0?-1:1;return t*Mhe}return e===e?e:0}var F4=Dhe,Lhe=jhe,Rhe=mp,O0=F4;function Fhe(e){return function(t,r,n){return n&&typeof n!="number"&&Rhe(t,r,n)&&(r=n=void 0),t=O0(t),r===void 0?(r=t,t=0):r=O0(r),n=n===void 0?t<r?1:-1:O0(n),Lhe(t,r,n,e)}}var Bhe=Fhe,zhe=Bhe,Uhe=zhe(),Whe=Uhe;const sd=Se(Whe);function Yl(e){"@babel/helpers - typeof";return Yl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yl(e)}function _O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function OO(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_O(Object(r),!0).forEach(function(n){B4(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_O(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function B4(e,t,r){return t=Hhe(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Hhe(e){var t=Ghe(e,"string");return Yl(t)=="symbol"?t:String(t)}function Ghe(e,t){if(Yl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Yl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Vhe=["Webkit","Moz","O","ms"],Khe=function(t,r){var n=t.replace(/(\w)/,function(a){return a.toUpperCase()}),i=Vhe.reduce(function(a,o){return OO(OO({},a),{},B4({},o+n,r))},{});return i[t]=r,i};function $o(e){"@babel/helpers - typeof";return $o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$o(e)}function cd(){return cd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},cd.apply(this,arguments)}function xO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function x0(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?xO(Object(r),!0).forEach(function(n){Jt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Xhe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AO(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,U4(n.key),n)}}function Yhe(e,t,r){return t&&AO(e.prototype,t),r&&AO(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function qhe(e,t,r){return t=fd(t),Qhe(e,z4()?Reflect.construct(t,r||[],fd(e).constructor):t.apply(e,r))}function Qhe(e,t){if(t&&($o(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Vr(e)}function z4(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(z4=function(){return!!e})()}function fd(e){return fd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},fd(e)}function Vr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Zhe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&om(e,t)}function om(e,t){return om=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},om(e,t)}function Jt(e,t,r){return t=U4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U4(e){var t=Jhe(e,"string");return $o(t)=="symbol"?t:String(t)}function Jhe(e,t){if($o(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if($o(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var eye=function(t){var r=t.data,n=t.startIndex,i=t.endIndex,a=t.x,o=t.width,u=t.travellerWidth;if(!r||!r.length)return{};var l=r.length,s=Yu().domain(sd(0,l)).range([a,a+o-u]),f=s.domain().map(function(c){return s(c)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:s(n),endX:s(i),scale:s,scaleValues:f}},PO=function(t){return t.changedTouches&&!!t.changedTouches.length},_o=function(e){Zhe(t,e);function t(r){var n;return Xhe(this,t),n=qhe(this,t,[r]),Jt(Vr(n),"handleDrag",function(i){n.leaveTimer&&(clearTimeout(n.leaveTimer),n.leaveTimer=null),n.state.isTravellerMoving?n.handleTravellerMove(i):n.state.isSlideMoving&&n.handleSlideDrag(i)}),Jt(Vr(n),"handleTouchMove",function(i){i.changedTouches!=null&&i.changedTouches.length>0&&n.handleDrag(i.changedTouches[0])}),Jt(Vr(n),"handleDragEnd",function(){n.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var i=n.props,a=i.endIndex,o=i.onDragEnd,u=i.startIndex;o==null||o({endIndex:a,startIndex:u})}),n.detachDragEndListener()}),Jt(Vr(n),"handleLeaveWrapper",function(){(n.state.isTravellerMoving||n.state.isSlideMoving)&&(n.leaveTimer=window.setTimeout(n.handleDragEnd,n.props.leaveTimeOut))}),Jt(Vr(n),"handleEnterSlideOrTraveller",function(){n.setState({isTextActive:!0})}),Jt(Vr(n),"handleLeaveSlideOrTraveller",function(){n.setState({isTextActive:!1})}),Jt(Vr(n),"handleSlideDragStart",function(i){var a=PO(i)?i.changedTouches[0]:i;n.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:a.pageX}),n.attachDragEndListener()}),n.travellerDragStartHandlers={startX:n.handleTravellerDragStart.bind(Vr(n),"startX"),endX:n.handleTravellerDragStart.bind(Vr(n),"endX")},n.state={},n}return Yhe(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(n){var i=n.startX,a=n.endX,o=this.state.scaleValues,u=this.props,l=u.gap,s=u.data,f=s.length-1,c=Math.min(i,a),d=Math.max(i,a),p=t.getIndexInRange(o,c),y=t.getIndexInRange(o,d);return{startIndex:p-p%l,endIndex:y===f?f:y-y%l}}},{key:"getTextOfTick",value:function(n){var i=this.props,a=i.data,o=i.tickFormatter,u=i.dataKey,l=Et(a[n],u,n);return le(o)?o(l,n):l}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(n){var i=this.state,a=i.slideMoveStartX,o=i.startX,u=i.endX,l=this.props,s=l.x,f=l.width,c=l.travellerWidth,d=l.startIndex,p=l.endIndex,y=l.onChange,m=n.pageX-a;m>0?m=Math.min(m,s+f-c-u,s+f-c-o):m<0&&(m=Math.max(m,s-o,s-u));var g=this.getIndex({startX:o+m,endX:u+m});(g.startIndex!==d||g.endIndex!==p)&&y&&y(g),this.setState({startX:o+m,endX:u+m,slideMoveStartX:n.pageX})}},{key:"handleTravellerDragStart",value:function(n,i){var a=PO(i)?i.changedTouches[0]:i;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:n,brushMoveStartX:a.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(n){var i=this.state,a=i.brushMoveStartX,o=i.movingTravellerId,u=i.endX,l=i.startX,s=this.state[o],f=this.props,c=f.x,d=f.width,p=f.travellerWidth,y=f.onChange,m=f.gap,g=f.data,h={startX:this.state.startX,endX:this.state.endX},v=n.pageX-a;v>0?v=Math.min(v,c+d-p-s):v<0&&(v=Math.max(v,c-s)),h[o]=s+v;var b=this.getIndex(h),w=b.startIndex,S=b.endIndex,$=function(){var O=g.length-1;return o==="startX"&&(u>l?w%m===0:S%m===0)||u<l&&S===O||o==="endX"&&(u>l?S%m===0:w%m===0)||u>l&&S===O};this.setState(Jt(Jt({},o,s+v),"brushMoveStartX",n.pageX),function(){y&&$()&&y(b)})}},{key:"handleTravellerMoveKeyboard",value:function(n,i){var a=this,o=this.state,u=o.scaleValues,l=o.startX,s=o.endX,f=this.state[i],c=u.indexOf(f);if(c!==-1){var d=c+n;if(!(d===-1||d>=u.length)){var p=u[d];i==="startX"&&p>=s||i==="endX"&&p<=l||this.setState(Jt({},i,p),function(){a.props.onChange(a.getIndex({startX:a.state.startX,endX:a.state.endX}))})}}}},{key:"renderBackground",value:function(){var n=this.props,i=n.x,a=n.y,o=n.width,u=n.height,l=n.fill,s=n.stroke;return x.createElement("rect",{stroke:s,fill:l,x:i,y:a,width:o,height:u})}},{key:"renderPanorama",value:function(){var n=this.props,i=n.x,a=n.y,o=n.width,u=n.height,l=n.data,s=n.children,f=n.padding,c=V.Children.only(s);return c?x.cloneElement(c,{x:i,y:a,width:o,height:u,margin:f,compact:!0,data:l}):null}},{key:"renderTravellerLayer",value:function(n,i){var a,o,u=this,l=this.props,s=l.y,f=l.travellerWidth,c=l.height,d=l.traveller,p=l.ariaLabel,y=l.data,m=l.startIndex,g=l.endIndex,h=Math.max(n,this.props.x),v=x0(x0({},oe(this.props,!1)),{},{x:h,y:s,width:f,height:c}),b=p||"Min value: ".concat((a=y[m])===null||a===void 0?void 0:a.name,", Max value: ").concat((o=y[g])===null||o===void 0?void 0:o.name);return x.createElement($e,{tabIndex:0,role:"slider","aria-label":b,"aria-valuenow":n,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[i],onTouchStart:this.travellerDragStartHandlers[i],onKeyDown:function(S){["ArrowLeft","ArrowRight"].includes(S.key)&&(S.preventDefault(),S.stopPropagation(),u.handleTravellerMoveKeyboard(S.key==="ArrowRight"?1:-1,i))},onFocus:function(){u.setState({isTravellerFocused:!0})},onBlur:function(){u.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(d,v))}},{key:"renderSlide",value:function(n,i){var a=this.props,o=a.y,u=a.height,l=a.stroke,s=a.travellerWidth,f=Math.min(n,i)+s,c=Math.max(Math.abs(i-n)-s,0);return x.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:l,fillOpacity:.2,x:f,y:o,width:c,height:u})}},{key:"renderText",value:function(){var n=this.props,i=n.startIndex,a=n.endIndex,o=n.y,u=n.height,l=n.travellerWidth,s=n.stroke,f=this.state,c=f.startX,d=f.endX,p=5,y={pointerEvents:"none",fill:s};return x.createElement($e,{className:"recharts-brush-texts"},x.createElement(ea,cd({textAnchor:"end",verticalAnchor:"middle",x:Math.min(c,d)-p,y:o+u/2},y),this.getTextOfTick(i)),x.createElement(ea,cd({textAnchor:"start",verticalAnchor:"middle",x:Math.max(c,d)+l+p,y:o+u/2},y),this.getTextOfTick(a)))}},{key:"render",value:function(){var n=this.props,i=n.data,a=n.className,o=n.children,u=n.x,l=n.y,s=n.width,f=n.height,c=n.alwaysShowText,d=this.state,p=d.startX,y=d.endX,m=d.isTextActive,g=d.isSlideMoving,h=d.isTravellerMoving,v=d.isTravellerFocused;if(!i||!i.length||!K(u)||!K(l)||!K(s)||!K(f)||s<=0||f<=0)return null;var b=pe("recharts-brush",a),w=x.Children.count(o)===1,S=Khe("userSelect","none");return x.createElement($e,{className:b,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:S},this.renderBackground(),w&&this.renderPanorama(),this.renderSlide(p,y),this.renderTravellerLayer(p,"startX"),this.renderTravellerLayer(y,"endX"),(m||g||h||v||c)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(n){var i=n.x,a=n.y,o=n.width,u=n.height,l=n.stroke,s=Math.floor(a+u/2)-1;return x.createElement(x.Fragment,null,x.createElement("rect",{x:i,y:a,width:o,height:u,fill:l,stroke:"none"}),x.createElement("line",{x1:i+1,y1:s,x2:i+o-1,y2:s,fill:"none",stroke:"#fff"}),x.createElement("line",{x1:i+1,y1:s+2,x2:i+o-1,y2:s+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(n,i){var a;return x.isValidElement(n)?a=x.cloneElement(n,i):le(n)?a=n(i):a=t.renderDefaultTraveller(i),a}},{key:"getDerivedStateFromProps",value:function(n,i){var a=n.data,o=n.width,u=n.x,l=n.travellerWidth,s=n.updateId,f=n.startIndex,c=n.endIndex;if(a!==i.prevData||s!==i.prevUpdateId)return x0({prevData:a,prevTravellerWidth:l,prevUpdateId:s,prevX:u,prevWidth:o},a&&a.length?eye({data:a,width:o,x:u,travellerWidth:l,startIndex:f,endIndex:c}):{scale:null,scaleValues:null});if(i.scale&&(o!==i.prevWidth||u!==i.prevX||l!==i.prevTravellerWidth)){i.scale.range([u,u+o-l]);var d=i.scale.domain().map(function(p){return i.scale(p)});return{prevData:a,prevTravellerWidth:l,prevUpdateId:s,prevX:u,prevWidth:o,startX:i.scale(n.startIndex),endX:i.scale(n.endIndex),scaleValues:d}}return null}},{key:"getIndexInRange",value:function(n,i){for(var a=n.length,o=0,u=a-1;u-o>1;){var l=Math.floor((o+u)/2);n[l]>i?u=l:o=l}return i>=n[u]?u:o}}]),t}(V.PureComponent);Jt(_o,"displayName","Brush");Jt(_o,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var tye=l1;function rye(e,t){var r;return tye(e,function(n,i,a){return r=t(n,i,a),!r}),!!r}var nye=rye,iye=TE,aye=un,oye=nye,uye=qt,lye=mp;function sye(e,t,r){var n=uye(e)?iye:oye;return r&&lye(e,t,r)&&(t=void 0),n(e,aye(t))}var cye=sye;const fye=Se(cye);var nn=function(t,r){var n=t.alwaysShow,i=t.ifOverflow;return n&&(i="extendDomain"),i===r},EO=ZE;function dye(e,t,r){t=="__proto__"&&EO?EO(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var pye=dye,vye=pye,hye=qE,yye=un;function mye(e,t){var r={};return t=yye(t),hye(e,function(n,i,a){vye(r,i,t(n,i,a))}),r}var gye=mye;const bye=Se(gye);function wye(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}var Sye=wye,$ye=l1;function _ye(e,t){var r=!0;return $ye(e,function(n,i,a){return r=!!t(n,i,a),r}),r}var Oye=_ye,xye=Sye,Aye=Oye,Pye=un,Eye=qt,Tye=mp;function kye(e,t,r){var n=Eye(e)?xye:Aye;return r&&Tye(e,t,r)&&(t=void 0),n(e,Pye(t))}var Cye=kye;const W4=Se(Cye);var Iye=["x","y"];function ql(e){"@babel/helpers - typeof";return ql=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ql(e)}function um(){return um=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},um.apply(this,arguments)}function TO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Tu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?TO(Object(r),!0).forEach(function(n){jye(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):TO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function jye(e,t,r){return t=Nye(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Nye(e){var t=Mye(e,"string");return ql(t)=="symbol"?t:String(t)}function Mye(e,t){if(ql(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(ql(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dye(e,t){if(e==null)return{};var r=Lye(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Lye(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Rye(e,t){var r=e.x,n=e.y,i=Dye(e,Iye),a="".concat(r),o=parseInt(a,10),u="".concat(n),l=parseInt(u,10),s="".concat(t.height||i.height),f=parseInt(s,10),c="".concat(t.width||i.width),d=parseInt(c,10);return Tu(Tu(Tu(Tu(Tu({},t),i),o?{x:o}:{}),l?{y:l}:{}),{},{height:f,width:d,name:t.name,radius:t.radius})}function kO(e){return x.createElement(D4,um({shapeType:"rectangle",propTransformer:Rye,activeClassName:"recharts-active-bar"},e))}var Fye=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(n,i){if(typeof t=="number")return t;var a=typeof n=="number";return a?t(n,i):(a||ra(),r)}},Bye=["value","background"],H4;function Oo(e){"@babel/helpers - typeof";return Oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oo(e)}function zye(e,t){if(e==null)return{};var r=Uye(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Uye(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function dd(){return dd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},dd.apply(this,arguments)}function CO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ft(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?CO(Object(r),!0).forEach(function(n){ei(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):CO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Wye(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function IO(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,V4(n.key),n)}}function Hye(e,t,r){return t&&IO(e.prototype,t),r&&IO(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Gye(e,t,r){return t=pd(t),Vye(e,G4()?Reflect.construct(t,r||[],pd(e).constructor):t.apply(e,r))}function Vye(e,t){if(t&&(Oo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Du(e)}function G4(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(G4=function(){return!!e})()}function pd(e){return pd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},pd(e)}function Du(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Kye(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&lm(e,t)}function lm(e,t){return lm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},lm(e,t)}function ei(e,t,r){return t=V4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V4(e){var t=Xye(e,"string");return Oo(t)=="symbol"?t:String(t)}function Xye(e,t){if(Oo(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Oo(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var fa=function(e){Kye(t,e);function t(){var r;Wye(this,t);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return r=Gye(this,t,[].concat(i)),ei(Du(r),"state",{isAnimationFinished:!1}),ei(Du(r),"id",ys("recharts-bar-")),ei(Du(r),"handleAnimationEnd",function(){var o=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),o&&o()}),ei(Du(r),"handleAnimationStart",function(){var o=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),o&&o()}),r}return Hye(t,[{key:"renderRectanglesStatically",value:function(n){var i=this,a=this.props,o=a.shape,u=a.dataKey,l=a.activeIndex,s=a.activeBar,f=oe(this.props,!1);return n&&n.map(function(c,d){var p=d===l,y=p?s:o,m=ft(ft(ft({},f),c),{},{isActive:p,option:y,index:d,dataKey:u,onAnimationStart:i.handleAnimationStart,onAnimationEnd:i.handleAnimationEnd});return x.createElement($e,dd({className:"recharts-bar-rectangle"},Ji(i.props,c,d),{key:"rectangle-".concat(c==null?void 0:c.x,"-").concat(c==null?void 0:c.y,"-").concat(c==null?void 0:c.value)}),x.createElement(kO,m))})}},{key:"renderRectanglesWithAnimation",value:function(){var n=this,i=this.props,a=i.data,o=i.layout,u=i.isAnimationActive,l=i.animationBegin,s=i.animationDuration,f=i.animationEasing,c=i.animationId,d=this.state.prevData;return x.createElement(Cn,{begin:l,duration:s,isActive:u,easing:f,from:{t:0},to:{t:1},key:"bar-".concat(c),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(p){var y=p.t,m=a.map(function(g,h){var v=d&&d[h];if(v){var b=Gn(v.x,g.x),w=Gn(v.y,g.y),S=Gn(v.width,g.width),$=Gn(v.height,g.height);return ft(ft({},g),{},{x:b(y),y:w(y),width:S(y),height:$(y)})}if(o==="horizontal"){var _=Gn(0,g.height),O=_(y);return ft(ft({},g),{},{y:g.y+g.height-O,height:O})}var T=Gn(0,g.width),P=T(y);return ft(ft({},g),{},{width:P})});return x.createElement($e,null,n.renderRectanglesStatically(m))})}},{key:"renderRectangles",value:function(){var n=this.props,i=n.data,a=n.isAnimationActive,o=this.state.prevData;return a&&i&&i.length&&(!o||!Pp(o,i))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(i)}},{key:"renderBackground",value:function(){var n=this,i=this.props,a=i.data,o=i.dataKey,u=i.activeIndex,l=oe(this.props.background,!1);return a.map(function(s,f){s.value;var c=s.background,d=zye(s,Bye);if(!c)return null;var p=ft(ft(ft(ft(ft({},d),{},{fill:"#eee"},c),l),Ji(n.props,s,f)),{},{onAnimationStart:n.handleAnimationStart,onAnimationEnd:n.handleAnimationEnd,dataKey:o,index:f,key:"background-bar-".concat(f),className:"recharts-bar-background-rectangle"});return x.createElement(kO,dd({option:n.props.background,isActive:f===u},p))})}},{key:"renderErrorBar",value:function(n,i){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var a=this.props,o=a.data,u=a.xAxis,l=a.yAxis,s=a.layout,f=a.children,c=$r(f,kp);if(!c)return null;var d=s==="vertical"?o[0].height/2:o[0].width/2,p=function(g,h){var v=Array.isArray(g.value)?g.value[1]:g.value;return{x:g.x,y:g.y,value:v,errorVal:Et(g,h)}},y={clipPath:n?"url(#clipPath-".concat(i,")"):null};return x.createElement($e,y,c.map(function(m){return x.cloneElement(m,{key:"error-bar-".concat(i,"-").concat(m.props.dataKey),data:o,xAxis:u,yAxis:l,layout:s,offset:d,dataPointFormatter:p})}))}},{key:"render",value:function(){var n=this.props,i=n.hide,a=n.data,o=n.className,u=n.xAxis,l=n.yAxis,s=n.left,f=n.top,c=n.width,d=n.height,p=n.isAnimationActive,y=n.background,m=n.id;if(i||!a||!a.length)return null;var g=this.state.isAnimationFinished,h=pe("recharts-bar",o),v=u&&u.allowDataOverflow,b=l&&l.allowDataOverflow,w=v||b,S=de(m)?this.id:m;return x.createElement($e,{className:h},v||b?x.createElement("defs",null,x.createElement("clipPath",{id:"clipPath-".concat(S)},x.createElement("rect",{x:v?s:s-c/2,y:b?f:f-d/2,width:v?c:c*2,height:b?d:d*2}))):null,x.createElement($e,{className:"recharts-bar-rectangles",clipPath:w?"url(#clipPath-".concat(S,")"):null},y?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(w,S),(!p||g)&&fi.renderCallByParent(this.props,a))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curData:n.data,prevData:i.curData}:n.data!==i.curData?{curData:n.data}:null}}]),t}(V.PureComponent);H4=fa;ei(fa,"displayName","Bar");ei(fa,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!$n.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});ei(fa,"getComposedData",function(e){var t=e.props,r=e.item,n=e.barPosition,i=e.bandSize,a=e.xAxis,o=e.yAxis,u=e.xAxisTicks,l=e.yAxisTicks,s=e.stackedData,f=e.dataStartIndex,c=e.displayedData,d=e.offset,p=zfe(n,r);if(!p)return null;var y=t.layout,m=r.props,g=m.dataKey,h=m.children,v=m.minPointSize,b=y==="horizontal"?o:a,w=s?b.scale.domain():null,S=Xfe({numericAxis:b}),$=$r(h,gs),_=c.map(function(O,T){var P,k,E,C,N,z;s?P=Ufe(s[f+T],w):(P=Et(O,g),Array.isArray(P)||(P=[S,P]));var F=Fye(v,H4.defaultProps.minPointSize)(P[1],T);if(y==="horizontal"){var B,j=[o.scale(P[0]),o.scale(P[1])],L=j[0],U=j[1];k=S_({axis:a,ticks:u,bandSize:i,offset:p.offset,entry:O,index:T}),E=(B=U??L)!==null&&B!==void 0?B:void 0,C=p.size;var Y=L-U;if(N=Number.isNaN(Y)?0:Y,z={x:k,y:o.y,width:C,height:o.height},Math.abs(F)>0&&Math.abs(N)<Math.abs(F)){var G=jt(N||F)*(Math.abs(F)-Math.abs(N));E-=G,N+=G}}else{var ne=[a.scale(P[0]),a.scale(P[1])],ce=ne[0],Ae=ne[1];if(k=ce,E=S_({axis:o,ticks:l,bandSize:i,offset:p.offset,entry:O,index:T}),C=Ae-ce,N=p.size,z={x:a.x,y:E,width:a.width,height:N},Math.abs(F)>0&&Math.abs(C)<Math.abs(F)){var Pe=jt(C||F)*(Math.abs(F)-Math.abs(C));C+=Pe}}return ft(ft(ft({},O),{},{x:k,y:E,width:C,height:N,value:s?P:P[1],payload:O,background:z},$&&$[T]&&$[T].props),{},{tooltipPayload:[p4(r,O)],tooltipPosition:{x:k+C/2,y:E+N/2}})});return ft({data:_,layout:y},d)});function Ql(e){"@babel/helpers - typeof";return Ql=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ql(e)}function Yye(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jO(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,K4(n.key),n)}}function qye(e,t,r){return t&&jO(e.prototype,t),r&&jO(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function NO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Dr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?NO(Object(r),!0).forEach(function(n){Lp(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):NO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Lp(e,t,r){return t=K4(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K4(e){var t=Qye(e,"string");return Ql(t)=="symbol"?t:String(t)}function Qye(e,t){if(Ql(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Ql(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Zye=function(t,r,n,i,a){var o=t.width,u=t.height,l=t.layout,s=t.children,f=Object.keys(r),c={left:n.left,leftMirror:n.left,right:o-n.right,rightMirror:o-n.right,top:n.top,topMirror:n.top,bottom:u-n.bottom,bottomMirror:u-n.bottom},d=!!rr(s,fa);return f.reduce(function(p,y){var m=r[y],g=m.orientation,h=m.domain,v=m.padding,b=v===void 0?{}:v,w=m.mirror,S=m.reversed,$="".concat(g).concat(w?"Mirror":""),_,O,T,P,k;if(m.type==="number"&&(m.padding==="gap"||m.padding==="no-gap")){var E=h[1]-h[0],C=1/0,N=m.categoricalDomain.sort();if(N.forEach(function(ce,Ae){Ae>0&&(C=Math.min((ce||0)-(N[Ae-1]||0),C))}),Number.isFinite(C)){var z=C/E,F=m.layout==="vertical"?n.height:n.width;if(m.padding==="gap"&&(_=z*F/2),m.padding==="no-gap"){var B=Nt(t.barCategoryGap,z*F),j=z*F/2;_=j-B-(j-B)/F*B}}}i==="xAxis"?O=[n.left+(b.left||0)+(_||0),n.left+n.width-(b.right||0)-(_||0)]:i==="yAxis"?O=l==="horizontal"?[n.top+n.height-(b.bottom||0),n.top+(b.top||0)]:[n.top+(b.top||0)+(_||0),n.top+n.height-(b.bottom||0)-(_||0)]:O=m.range,S&&(O=[O[1],O[0]]);var L=s4(m,a,d),U=L.scale,Y=L.realScaleType;U.domain(h).range(O),c4(U);var G=f4(U,Dr(Dr({},m),{},{realScaleType:Y}));i==="xAxis"?(k=g==="top"&&!w||g==="bottom"&&w,T=n.left,P=c[$]-k*m.height):i==="yAxis"&&(k=g==="left"&&!w||g==="right"&&w,T=c[$]-k*m.width,P=n.top);var ne=Dr(Dr(Dr({},m),G),{},{realScaleType:Y,x:T,y:P,scale:U,width:i==="xAxis"?n.width:m.width,height:i==="yAxis"?n.height:m.height});return ne.bandSize=Qf(ne,G),!m.hide&&i==="xAxis"?c[$]+=(k?-1:1)*ne.height:m.hide||(c[$]+=(k?-1:1)*ne.width),Dr(Dr({},p),{},Lp({},y,ne))},{})},X4=function(t,r){var n=t.x,i=t.y,a=r.x,o=r.y;return{x:Math.min(n,a),y:Math.min(i,o),width:Math.abs(a-n),height:Math.abs(o-i)}},Jye=function(t){var r=t.x1,n=t.y1,i=t.x2,a=t.y2;return X4({x:r,y:n},{x:i,y:a})},Y4=function(){function e(t){Yye(this,e),this.scale=t}return qye(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.bandAware,a=n.position;if(r!==void 0){if(a)switch(a){case"start":return this.scale(r);case"middle":{var o=this.bandwidth?this.bandwidth()/2:0;return this.scale(r)+o}case"end":{var u=this.bandwidth?this.bandwidth():0;return this.scale(r)+u}default:return this.scale(r)}if(i){var l=this.bandwidth?this.bandwidth()/2:0;return this.scale(r)+l}return this.scale(r)}}},{key:"isInRange",value:function(r){var n=this.range(),i=n[0],a=n[n.length-1];return i<=a?r>=i&&r<=a:r>=a&&r<=i}}],[{key:"create",value:function(r){return new e(r)}}]),e}();Lp(Y4,"EPS",1e-4);var R1=function(t){var r=Object.keys(t).reduce(function(n,i){return Dr(Dr({},n),{},Lp({},i,Y4.create(t[i])))},{});return Dr(Dr({},r),{},{apply:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.bandAware,u=a.position;return bye(i,function(l,s){return r[s].apply(l,{bandAware:o,position:u})})},isInRange:function(i){return W4(i,function(a,o){return r[o].isInRange(a)})}})};function eme(e){return(e%180+180)%180}var tme=function(t){var r=t.width,n=t.height,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=eme(i),o=a*Math.PI/180,u=Math.atan(n/r),l=o>u&&o<Math.PI-u?n/Math.sin(o):r/Math.cos(o);return Math.abs(l)},rme=un,nme=ms,ime=hp;function ame(e){return function(t,r,n){var i=Object(t);if(!nme(t)){var a=rme(r);t=ime(t),r=function(u){return a(i[u],u,i)}}var o=e(t,r,n);return o>-1?i[a?t[o]:o]:void 0}}var ome=ame,ume=F4;function lme(e){var t=ume(e),r=t%1;return t===t?r?t-r:t:0}var sme=lme,cme=WE,fme=un,dme=sme,pme=Math.max;function vme(e,t,r){var n=e==null?0:e.length;if(!n)return-1;var i=r==null?0:dme(r);return i<0&&(i=pme(n+i,0)),cme(e,fme(t),i)}var hme=vme,yme=ome,mme=hme,gme=yme(mme),bme=gme;const wme=Se(bme);var Sme=MY(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),F1=V.createContext(void 0),B1=V.createContext(void 0),q4=V.createContext(void 0),Q4=V.createContext({}),Z4=V.createContext(void 0),J4=V.createContext(0),eT=V.createContext(0),MO=function(t){var r=t.state,n=r.xAxisMap,i=r.yAxisMap,a=r.offset,o=t.clipPathId,u=t.children,l=t.width,s=t.height,f=Sme(a);return x.createElement(F1.Provider,{value:n},x.createElement(B1.Provider,{value:i},x.createElement(Q4.Provider,{value:a},x.createElement(q4.Provider,{value:f},x.createElement(Z4.Provider,{value:o},x.createElement(J4.Provider,{value:s},x.createElement(eT.Provider,{value:l},u)))))))},$me=function(){return V.useContext(Z4)},tT=function(t){var r=V.useContext(F1);r==null&&ra();var n=r[t];return n==null&&ra(),n},_me=function(){var t=V.useContext(F1);return qn(t)},Ome=function(){var t=V.useContext(B1),r=wme(t,function(n){return W4(n.domain,Number.isFinite)});return r||qn(t)},rT=function(t){var r=V.useContext(B1);r==null&&ra();var n=r[t];return n==null&&ra(),n},xme=function(){var t=V.useContext(q4);return t},Ame=function(){return V.useContext(Q4)},z1=function(){return V.useContext(eT)},U1=function(){return V.useContext(J4)};function xo(e){"@babel/helpers - typeof";return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xo(e)}function Pme(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Eme(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,iT(n.key),n)}}function Tme(e,t,r){return t&&Eme(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function kme(e,t,r){return t=vd(t),Cme(e,nT()?Reflect.construct(t,r||[],vd(e).constructor):t.apply(e,r))}function Cme(e,t){if(t&&(xo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ime(e)}function Ime(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nT(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(nT=function(){return!!e})()}function vd(e){return vd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},vd(e)}function jme(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&sm(e,t)}function sm(e,t){return sm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},sm(e,t)}function DO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function LO(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?DO(Object(r),!0).forEach(function(n){W1(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):DO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function W1(e,t,r){return t=iT(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function iT(e){var t=Nme(e,"string");return xo(t)=="symbol"?t:String(t)}function Nme(e,t){if(xo(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(xo(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Mme(e,t){return Fme(e)||Rme(e,t)||Lme(e,t)||Dme()}function Dme(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lme(e,t){if(e){if(typeof e=="string")return RO(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return RO(e,t)}}function RO(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Rme(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function Fme(e){if(Array.isArray(e))return e}function cm(){return cm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},cm.apply(this,arguments)}var Bme=function(t,r){var n;return x.isValidElement(t)?n=x.cloneElement(t,r):le(t)?n=t(r):n=x.createElement("line",cm({},r,{className:"recharts-reference-line-line"})),n},zme=function(t,r,n,i,a,o,u,l,s){var f=a.x,c=a.y,d=a.width,p=a.height;if(n){var y=s.y,m=t.y.apply(y,{position:o});if(nn(s,"discard")&&!t.y.isInRange(m))return null;var g=[{x:f+d,y:m},{x:f,y:m}];return l==="left"?g.reverse():g}if(r){var h=s.x,v=t.x.apply(h,{position:o});if(nn(s,"discard")&&!t.x.isInRange(v))return null;var b=[{x:v,y:c+p},{x:v,y:c}];return u==="top"?b.reverse():b}if(i){var w=s.segment,S=w.map(function($){return t.apply($,{position:o})});return nn(s,"discard")&&fye(S,function($){return!t.isInRange($)})?null:S}return null};function Ume(e){var t=e.x,r=e.y,n=e.segment,i=e.xAxisId,a=e.yAxisId,o=e.shape,u=e.className,l=e.alwaysShow,s=$me(),f=tT(i),c=rT(a),d=xme();if(!s||!d)return null;vi(l===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var p=R1({x:f.scale,y:c.scale}),y=lt(t),m=lt(r),g=n&&n.length===2,h=zme(p,y,m,g,d,e.position,f.orientation,c.orientation,e);if(!h)return null;var v=Mme(h,2),b=v[0],w=b.x,S=b.y,$=v[1],_=$.x,O=$.y,T=nn(e,"hidden")?"url(#".concat(s,")"):void 0,P=LO(LO({clipPath:T},oe(e,!0)),{},{x1:w,y1:S,x2:_,y2:O});return x.createElement($e,{className:pe("recharts-reference-line",u)},Bme(o,P),ot.renderCallByParent(e,Jye({x1:w,y1:S,x2:_,y2:O})))}var H1=function(e){jme(t,e);function t(){return Pme(this,t),kme(this,t,arguments)}return Tme(t,[{key:"render",value:function(){return x.createElement(Ume,this.props)}}]),t}(x.Component);W1(H1,"displayName","ReferenceLine");W1(H1,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function fm(){return fm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fm.apply(this,arguments)}function Ao(e){"@babel/helpers - typeof";return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ao(e)}function FO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function BO(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?FO(Object(r),!0).forEach(function(n){Rp(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):FO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Wme(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hme(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,oT(n.key),n)}}function Gme(e,t,r){return t&&Hme(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Vme(e,t,r){return t=hd(t),Kme(e,aT()?Reflect.construct(t,r||[],hd(e).constructor):t.apply(e,r))}function Kme(e,t){if(t&&(Ao(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xme(e)}function Xme(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aT(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(aT=function(){return!!e})()}function hd(e){return hd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},hd(e)}function Yme(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&dm(e,t)}function dm(e,t){return dm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},dm(e,t)}function Rp(e,t,r){return t=oT(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oT(e){var t=qme(e,"string");return Ao(t)=="symbol"?t:String(t)}function qme(e,t){if(Ao(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Ao(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Qme=function(t){var r=t.x,n=t.y,i=t.xAxis,a=t.yAxis,o=R1({x:i.scale,y:a.scale}),u=o.apply({x:r,y:n},{bandAware:!0});return nn(t,"discard")&&!o.isInRange(u)?null:u},Fp=function(e){Yme(t,e);function t(){return Wme(this,t),Vme(this,t,arguments)}return Gme(t,[{key:"render",value:function(){var n=this.props,i=n.x,a=n.y,o=n.r,u=n.alwaysShow,l=n.clipPathId,s=lt(i),f=lt(a);if(vi(u===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!s||!f)return null;var c=Qme(this.props);if(!c)return null;var d=c.x,p=c.y,y=this.props,m=y.shape,g=y.className,h=nn(this.props,"hidden")?"url(#".concat(l,")"):void 0,v=BO(BO({clipPath:h},oe(this.props,!0)),{},{cx:d,cy:p});return x.createElement($e,{className:pe("recharts-reference-dot",g)},t.renderDot(m,v),ot.renderCallByParent(this.props,{x:d-o,y:p-o,width:2*o,height:2*o}))}}]),t}(x.Component);Rp(Fp,"displayName","ReferenceDot");Rp(Fp,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});Rp(Fp,"renderDot",function(e,t){var r;return x.isValidElement(e)?r=x.cloneElement(e,t):le(e)?r=e(t):r=x.createElement(L1,fm({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),r});function pm(){return pm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pm.apply(this,arguments)}function Po(e){"@babel/helpers - typeof";return Po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Po(e)}function zO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function UO(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?zO(Object(r),!0).forEach(function(n){Bp(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Zme(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jme(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,lT(n.key),n)}}function ege(e,t,r){return t&&Jme(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function tge(e,t,r){return t=yd(t),rge(e,uT()?Reflect.construct(t,r||[],yd(e).constructor):t.apply(e,r))}function rge(e,t){if(t&&(Po(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return nge(e)}function nge(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function uT(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(uT=function(){return!!e})()}function yd(e){return yd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},yd(e)}function ige(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&vm(e,t)}function vm(e,t){return vm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},vm(e,t)}function Bp(e,t,r){return t=lT(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lT(e){var t=age(e,"string");return Po(t)=="symbol"?t:String(t)}function age(e,t){if(Po(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Po(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var oge=function(t,r,n,i,a){var o=a.x1,u=a.x2,l=a.y1,s=a.y2,f=a.xAxis,c=a.yAxis;if(!f||!c)return null;var d=R1({x:f.scale,y:c.scale}),p={x:t?d.x.apply(o,{position:"start"}):d.x.rangeMin,y:n?d.y.apply(l,{position:"start"}):d.y.rangeMin},y={x:r?d.x.apply(u,{position:"end"}):d.x.rangeMax,y:i?d.y.apply(s,{position:"end"}):d.y.rangeMax};return nn(a,"discard")&&(!d.isInRange(p)||!d.isInRange(y))?null:X4(p,y)},zp=function(e){ige(t,e);function t(){return Zme(this,t),tge(this,t,arguments)}return ege(t,[{key:"render",value:function(){var n=this.props,i=n.x1,a=n.x2,o=n.y1,u=n.y2,l=n.className,s=n.alwaysShow,f=n.clipPathId;vi(s===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var c=lt(i),d=lt(a),p=lt(o),y=lt(u),m=this.props.shape;if(!c&&!d&&!p&&!y&&!m)return null;var g=oge(c,d,p,y,this.props);if(!g&&!m)return null;var h=nn(this.props,"hidden")?"url(#".concat(f,")"):void 0;return x.createElement($e,{className:pe("recharts-reference-area",l)},t.renderRect(m,UO(UO({clipPath:h},oe(this.props,!0)),g)),ot.renderCallByParent(this.props,g))}}]),t}(x.Component);Bp(zp,"displayName","ReferenceArea");Bp(zp,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});Bp(zp,"renderRect",function(e,t){var r;return x.isValidElement(e)?r=x.cloneElement(e,t):le(e)?r=e(t):r=x.createElement(D1,pm({},t,{className:"recharts-reference-area-rect"})),r});function sT(e,t,r){if(t<1)return[];if(t===1&&r===void 0)return e;for(var n=[],i=0;i<e.length;i+=t)n.push(e[i]);return n}function uge(e,t,r){var n={width:e.width+t.width,height:e.height+t.height};return tme(n,r)}function lge(e,t,r){var n=r==="width",i=e.x,a=e.y,o=e.width,u=e.height;return t===1?{start:n?i:a,end:n?i+o:a+u}:{start:n?i+o:a+u,end:n?i:a}}function md(e,t,r,n,i){if(e*t<e*n||e*t>e*i)return!1;var a=r();return e*(t-e*a/2-n)>=0&&e*(t+e*a/2-i)<=0}function sge(e,t){return sT(e,t+1)}function cge(e,t,r,n,i){for(var a=(n||[]).slice(),o=t.start,u=t.end,l=0,s=1,f=o,c=function(){var y=n==null?void 0:n[l];if(y===void 0)return{v:sT(n,s)};var m=l,g,h=function(){return g===void 0&&(g=r(y,m)),g},v=y.coordinate,b=l===0||md(e,v,h,f,u);b||(l=0,f=o,s+=1),b&&(f=v+e*(h()/2+i),l+=s)},d;s<=a.length;)if(d=c(),d)return d.v;return[]}function Zl(e){"@babel/helpers - typeof";return Zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zl(e)}function WO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function xt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?WO(Object(r),!0).forEach(function(n){fge(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):WO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fge(e,t,r){return t=dge(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dge(e){var t=pge(e,"string");return Zl(t)=="symbol"?t:String(t)}function pge(e,t){if(Zl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Zl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vge(e,t,r,n,i){for(var a=(n||[]).slice(),o=a.length,u=t.start,l=t.end,s=function(d){var p=a[d],y,m=function(){return y===void 0&&(y=r(p,d)),y};if(d===o-1){var g=e*(p.coordinate+e*m()/2-l);a[d]=p=xt(xt({},p),{},{tickCoord:g>0?p.coordinate-g*e:p.coordinate})}else a[d]=p=xt(xt({},p),{},{tickCoord:p.coordinate});var h=md(e,p.tickCoord,m,u,l);h&&(l=p.tickCoord-e*(m()/2+i),a[d]=xt(xt({},p),{},{isShow:!0}))},f=o-1;f>=0;f--)s(f);return a}function hge(e,t,r,n,i,a){var o=(n||[]).slice(),u=o.length,l=t.start,s=t.end;if(a){var f=n[u-1],c=r(f,u-1),d=e*(f.coordinate+e*c/2-s);o[u-1]=f=xt(xt({},f),{},{tickCoord:d>0?f.coordinate-d*e:f.coordinate});var p=md(e,f.tickCoord,function(){return c},l,s);p&&(s=f.tickCoord-e*(c/2+i),o[u-1]=xt(xt({},f),{},{isShow:!0}))}for(var y=a?u-1:u,m=function(v){var b=o[v],w,S=function(){return w===void 0&&(w=r(b,v)),w};if(v===0){var $=e*(b.coordinate-e*S()/2-l);o[v]=b=xt(xt({},b),{},{tickCoord:$<0?b.coordinate-$*e:b.coordinate})}else o[v]=b=xt(xt({},b),{},{tickCoord:b.coordinate});var _=md(e,b.tickCoord,S,l,s);_&&(l=b.tickCoord+e*(S()/2+i),o[v]=xt(xt({},b),{},{isShow:!0}))},g=0;g<y;g++)m(g);return o}function G1(e,t,r){var n=e.tick,i=e.ticks,a=e.viewBox,o=e.minTickGap,u=e.orientation,l=e.interval,s=e.tickFormatter,f=e.unit,c=e.angle;if(!i||!i.length||!n)return[];if(K(l)||$n.isSsr)return sge(i,typeof l=="number"&&K(l)?l:0);var d=[],p=u==="top"||u==="bottom"?"width":"height",y=f&&p==="width"?Xu(f,{fontSize:t,letterSpacing:r}):{width:0,height:0},m=function(b,w){var S=le(s)?s(b.value,w):b.value;return p==="width"?uge(Xu(S,{fontSize:t,letterSpacing:r}),y,c):Xu(S,{fontSize:t,letterSpacing:r})[p]},g=i.length>=2?jt(i[1].coordinate-i[0].coordinate):1,h=lge(a,g,p);return l==="equidistantPreserveStart"?cge(g,h,m,i,o):(l==="preserveStart"||l==="preserveStartEnd"?d=hge(g,h,m,i,o,l==="preserveStartEnd"):d=vge(g,h,m,i,o),d.filter(function(v){return v.isShow}))}var yge=["viewBox"],mge=["viewBox"],gge=["ticks"];function Eo(e){"@babel/helpers - typeof";return Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Eo(e)}function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fa.apply(this,arguments)}function HO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function kt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?HO(Object(r),!0).forEach(function(n){V1(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):HO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function A0(e,t){if(e==null)return{};var r=bge(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function bge(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function wge(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function GO(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,fT(n.key),n)}}function Sge(e,t,r){return t&&GO(e.prototype,t),r&&GO(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function $ge(e,t,r){return t=gd(t),_ge(e,cT()?Reflect.construct(t,r||[],gd(e).constructor):t.apply(e,r))}function _ge(e,t){if(t&&(Eo(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Oge(e)}function Oge(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cT(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(cT=function(){return!!e})()}function gd(e){return gd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},gd(e)}function xge(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hm(e,t)}function hm(e,t){return hm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},hm(e,t)}function V1(e,t,r){return t=fT(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function fT(e){var t=Age(e,"string");return Eo(t)=="symbol"?t:String(t)}function Age(e,t){if(Eo(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Eo(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var tu=function(e){xge(t,e);function t(r){var n;return wge(this,t),n=$ge(this,t,[r]),n.state={fontSize:"",letterSpacing:""},n}return Sge(t,[{key:"shouldComponentUpdate",value:function(n,i){var a=n.viewBox,o=A0(n,yge),u=this.props,l=u.viewBox,s=A0(u,mge);return!Ka(a,l)||!Ka(o,s)||!Ka(i,this.state)}},{key:"componentDidMount",value:function(){var n=this.layerReference;if(n){var i=n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];i&&this.setState({fontSize:window.getComputedStyle(i).fontSize,letterSpacing:window.getComputedStyle(i).letterSpacing})}}},{key:"getTickLineCoord",value:function(n){var i=this.props,a=i.x,o=i.y,u=i.width,l=i.height,s=i.orientation,f=i.tickSize,c=i.mirror,d=i.tickMargin,p,y,m,g,h,v,b=c?-1:1,w=n.tickSize||f,S=K(n.tickCoord)?n.tickCoord:n.coordinate;switch(s){case"top":p=y=n.coordinate,g=o+ +!c*l,m=g-b*w,v=m-b*d,h=S;break;case"left":m=g=n.coordinate,y=a+ +!c*u,p=y-b*w,h=p-b*d,v=S;break;case"right":m=g=n.coordinate,y=a+ +c*u,p=y+b*w,h=p+b*d,v=S;break;default:p=y=n.coordinate,g=o+ +c*l,m=g+b*w,v=m+b*d,h=S;break}return{line:{x1:p,y1:m,x2:y,y2:g},tick:{x:h,y:v}}}},{key:"getTickTextAnchor",value:function(){var n=this.props,i=n.orientation,a=n.mirror,o;switch(i){case"left":o=a?"start":"end";break;case"right":o=a?"end":"start";break;default:o="middle";break}return o}},{key:"getTickVerticalAnchor",value:function(){var n=this.props,i=n.orientation,a=n.mirror,o="end";switch(i){case"left":case"right":o="middle";break;case"top":o=a?"start":"end";break;default:o=a?"end":"start";break}return o}},{key:"renderAxisLine",value:function(){var n=this.props,i=n.x,a=n.y,o=n.width,u=n.height,l=n.orientation,s=n.mirror,f=n.axisLine,c=kt(kt(kt({},oe(this.props,!1)),oe(f,!1)),{},{fill:"none"});if(l==="top"||l==="bottom"){var d=+(l==="top"&&!s||l==="bottom"&&s);c=kt(kt({},c),{},{x1:i,y1:a+d*u,x2:i+o,y2:a+d*u})}else{var p=+(l==="left"&&!s||l==="right"&&s);c=kt(kt({},c),{},{x1:i+p*o,y1:a,x2:i+p*o,y2:a+u})}return x.createElement("line",Fa({},c,{className:pe("recharts-cartesian-axis-line",or(f,"className"))}))}},{key:"renderTicks",value:function(n,i,a){var o=this,u=this.props,l=u.tickLine,s=u.stroke,f=u.tick,c=u.tickFormatter,d=u.unit,p=G1(kt(kt({},this.props),{},{ticks:n}),i,a),y=this.getTickTextAnchor(),m=this.getTickVerticalAnchor(),g=oe(this.props,!1),h=oe(f,!1),v=kt(kt({},g),{},{fill:"none"},oe(l,!1)),b=p.map(function(w,S){var $=o.getTickLineCoord(w),_=$.line,O=$.tick,T=kt(kt(kt(kt({textAnchor:y,verticalAnchor:m},g),{},{stroke:"none",fill:s},h),O),{},{index:S,payload:w,visibleTicksCount:p.length,tickFormatter:c});return x.createElement($e,Fa({className:"recharts-cartesian-axis-tick",key:"tick-".concat(w.value,"-").concat(w.coordinate,"-").concat(w.tickCoord)},Ji(o.props,w,S)),l&&x.createElement("line",Fa({},v,_,{className:pe("recharts-cartesian-axis-tick-line",or(l,"className"))})),f&&t.renderTickItem(f,T,"".concat(le(c)?c(w.value,S):w.value).concat(d||"")))});return x.createElement("g",{className:"recharts-cartesian-axis-ticks"},b)}},{key:"render",value:function(){var n=this,i=this.props,a=i.axisLine,o=i.width,u=i.height,l=i.ticksGenerator,s=i.className,f=i.hide;if(f)return null;var c=this.props,d=c.ticks,p=A0(c,gge),y=d;return le(l)&&(y=d&&d.length>0?l(this.props):l(p)),o<=0||u<=0||!y||!y.length?null:x.createElement($e,{className:pe("recharts-cartesian-axis",s),ref:function(g){n.layerReference=g}},a&&this.renderAxisLine(),this.renderTicks(y,this.state.fontSize,this.state.letterSpacing),ot.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(n,i,a){var o;return x.isValidElement(n)?o=x.cloneElement(n,i):le(n)?o=n(i):o=x.createElement(ea,Fa({},i,{className:"recharts-cartesian-axis-tick-value"}),a),o}}]),t}(V.Component);V1(tu,"displayName","CartesianAxis");V1(tu,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var Pge=["x1","y1","x2","y2","key"],Ege=["offset"];function na(e){"@babel/helpers - typeof";return na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},na(e)}function VO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Pt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?VO(Object(r),!0).forEach(function(n){Tge(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):VO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Tge(e,t,r){return t=kge(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function kge(e){var t=Cge(e,"string");return na(t)=="symbol"?t:String(t)}function Cge(e,t){if(na(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(na(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},zi.apply(this,arguments)}function KO(e,t){if(e==null)return{};var r=Ige(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ige(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var jge=function(t){var r=t.fill;if(!r||r==="none")return null;var n=t.fillOpacity,i=t.x,a=t.y,o=t.width,u=t.height;return x.createElement("rect",{x:i,y:a,width:o,height:u,stroke:"none",fill:r,fillOpacity:n,className:"recharts-cartesian-grid-bg"})};function dT(e,t){var r;if(x.isValidElement(e))r=x.cloneElement(e,t);else if(le(e))r=e(t);else{var n=t.x1,i=t.y1,a=t.x2,o=t.y2,u=t.key,l=KO(t,Pge),s=oe(l,!1);s.offset;var f=KO(s,Ege);r=x.createElement("line",zi({},f,{x1:n,y1:i,x2:a,y2:o,fill:"none",key:u}))}return r}function Nge(e){var t=e.x,r=e.width,n=e.horizontal,i=n===void 0?!0:n,a=e.horizontalPoints;if(!i||!a||!a.length)return null;var o=a.map(function(u,l){var s=Pt(Pt({},e),{},{x1:t,y1:u,x2:t+r,y2:u,key:"line-".concat(l),index:l});return dT(i,s)});return x.createElement("g",{className:"recharts-cartesian-grid-horizontal"},o)}function Mge(e){var t=e.y,r=e.height,n=e.vertical,i=n===void 0?!0:n,a=e.verticalPoints;if(!i||!a||!a.length)return null;var o=a.map(function(u,l){var s=Pt(Pt({},e),{},{x1:u,y1:t,x2:u,y2:t+r,key:"line-".concat(l),index:l});return dT(i,s)});return x.createElement("g",{className:"recharts-cartesian-grid-vertical"},o)}function Dge(e){var t=e.horizontalFill,r=e.fillOpacity,n=e.x,i=e.y,a=e.width,o=e.height,u=e.horizontalPoints,l=e.horizontal,s=l===void 0?!0:l;if(!s||!t||!t.length)return null;var f=u.map(function(d){return Math.round(d+i-i)}).sort(function(d,p){return d-p});i!==f[0]&&f.unshift(0);var c=f.map(function(d,p){var y=!f[p+1],m=y?i+o-d:f[p+1]-d;if(m<=0)return null;var g=p%t.length;return x.createElement("rect",{key:"react-".concat(p),y:d,x:n,height:m,width:a,stroke:"none",fill:t[g],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return x.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},c)}function Lge(e){var t=e.vertical,r=t===void 0?!0:t,n=e.verticalFill,i=e.fillOpacity,a=e.x,o=e.y,u=e.width,l=e.height,s=e.verticalPoints;if(!r||!n||!n.length)return null;var f=s.map(function(d){return Math.round(d+a-a)}).sort(function(d,p){return d-p});a!==f[0]&&f.unshift(0);var c=f.map(function(d,p){var y=!f[p+1],m=y?a+u-d:f[p+1]-d;if(m<=0)return null;var g=p%n.length;return x.createElement("rect",{key:"react-".concat(p),x:d,y:o,width:m,height:l,stroke:"none",fill:n[g],fillOpacity:i,className:"recharts-cartesian-grid-bg"})});return x.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},c)}var Rge=function(t,r){var n=t.xAxis,i=t.width,a=t.height,o=t.offset;return l4(G1(Pt(Pt(Pt({},tu.defaultProps),n),{},{ticks:wn(n,!0),viewBox:{x:0,y:0,width:i,height:a}})),o.left,o.left+o.width,r)},Fge=function(t,r){var n=t.yAxis,i=t.width,a=t.height,o=t.offset;return l4(G1(Pt(Pt(Pt({},tu.defaultProps),n),{},{ticks:wn(n,!0),viewBox:{x:0,y:0,width:i,height:a}})),o.top,o.top+o.height,r)},wa={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function pT(e){var t,r,n,i,a,o,u=z1(),l=U1(),s=Ame(),f=Pt(Pt({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:wa.stroke,fill:(r=e.fill)!==null&&r!==void 0?r:wa.fill,horizontal:(n=e.horizontal)!==null&&n!==void 0?n:wa.horizontal,horizontalFill:(i=e.horizontalFill)!==null&&i!==void 0?i:wa.horizontalFill,vertical:(a=e.vertical)!==null&&a!==void 0?a:wa.vertical,verticalFill:(o=e.verticalFill)!==null&&o!==void 0?o:wa.verticalFill,x:K(e.x)?e.x:s.left,y:K(e.y)?e.y:s.top,width:K(e.width)?e.width:s.width,height:K(e.height)?e.height:s.height}),c=f.x,d=f.y,p=f.width,y=f.height,m=f.syncWithTicks,g=f.horizontalValues,h=f.verticalValues,v=_me(),b=Ome();if(!K(p)||p<=0||!K(y)||y<=0||!K(c)||c!==+c||!K(d)||d!==+d)return null;var w=f.verticalCoordinatesGenerator||Rge,S=f.horizontalCoordinatesGenerator||Fge,$=f.horizontalPoints,_=f.verticalPoints;if((!$||!$.length)&&le(S)){var O=g&&g.length,T=S({yAxis:b?Pt(Pt({},b),{},{ticks:O?g:b.ticks}):void 0,width:u,height:l,offset:s},O?!0:m);vi(Array.isArray(T),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(na(T),"]")),Array.isArray(T)&&($=T)}if((!_||!_.length)&&le(w)){var P=h&&h.length,k=w({xAxis:v?Pt(Pt({},v),{},{ticks:P?h:v.ticks}):void 0,width:u,height:l,offset:s},P?!0:m);vi(Array.isArray(k),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(na(k),"]")),Array.isArray(k)&&(_=k)}return x.createElement("g",{className:"recharts-cartesian-grid"},x.createElement(jge,{fill:f.fill,fillOpacity:f.fillOpacity,x:f.x,y:f.y,width:f.width,height:f.height}),x.createElement(Nge,zi({},f,{offset:s,horizontalPoints:$,xAxis:v,yAxis:b})),x.createElement(Mge,zi({},f,{offset:s,verticalPoints:_,xAxis:v,yAxis:b})),x.createElement(Dge,zi({},f,{horizontalPoints:$})),x.createElement(Lge,zi({},f,{verticalPoints:_})))}pT.displayName="CartesianGrid";function To(e){"@babel/helpers - typeof";return To=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},To(e)}function Bge(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zge(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,yT(n.key),n)}}function Uge(e,t,r){return t&&zge(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wge(e,t,r){return t=bd(t),Hge(e,vT()?Reflect.construct(t,r||[],bd(e).constructor):t.apply(e,r))}function Hge(e,t){if(t&&(To(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Gge(e)}function Gge(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vT(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(vT=function(){return!!e})()}function bd(e){return bd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},bd(e)}function Vge(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ym(e,t)}function ym(e,t){return ym=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},ym(e,t)}function hT(e,t,r){return t=yT(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function yT(e){var t=Kge(e,"string");return To(t)=="symbol"?t:String(t)}function Kge(e,t){if(To(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(To(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mm(){return mm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},mm.apply(this,arguments)}function Xge(e){var t=e.xAxisId,r=z1(),n=U1(),i=tT(t);return i==null?null:x.createElement(tu,mm({},i,{className:pe("recharts-".concat(i.axisType," ").concat(i.axisType),i.className),viewBox:{x:0,y:0,width:r,height:n},ticksGenerator:function(o){return wn(o,!0)}}))}var Up=function(e){Vge(t,e);function t(){return Bge(this,t),Wge(this,t,arguments)}return Uge(t,[{key:"render",value:function(){return x.createElement(Xge,this.props)}}]),t}(x.Component);hT(Up,"displayName","XAxis");hT(Up,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function ko(e){"@babel/helpers - typeof";return ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ko(e)}function Yge(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qge(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,bT(n.key),n)}}function Qge(e,t,r){return t&&qge(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zge(e,t,r){return t=wd(t),Jge(e,mT()?Reflect.construct(t,r||[],wd(e).constructor):t.apply(e,r))}function Jge(e,t){if(t&&(ko(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return e1e(e)}function e1e(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function mT(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(mT=function(){return!!e})()}function wd(e){return wd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},wd(e)}function t1e(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gm(e,t)}function gm(e,t){return gm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},gm(e,t)}function gT(e,t,r){return t=bT(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bT(e){var t=r1e(e,"string");return ko(t)=="symbol"?t:String(t)}function r1e(e,t){if(ko(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(ko(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bm(){return bm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},bm.apply(this,arguments)}var n1e=function(t){var r=t.yAxisId,n=z1(),i=U1(),a=rT(r);return a==null?null:x.createElement(tu,bm({},a,{className:pe("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:n,height:i},ticksGenerator:function(u){return wn(u,!0)}}))},Wp=function(e){t1e(t,e);function t(){return Yge(this,t),Zge(this,t,arguments)}return Qge(t,[{key:"render",value:function(){return x.createElement(n1e,this.props)}}]),t}(x.Component);gT(Wp,"displayName","YAxis");gT(Wp,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function XO(e){return u1e(e)||o1e(e)||a1e(e)||i1e()}function i1e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a1e(e,t){if(e){if(typeof e=="string")return wm(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return wm(e,t)}}function o1e(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function u1e(e){if(Array.isArray(e))return wm(e)}function wm(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Sm=function(t,r,n,i,a){var o=$r(t,H1),u=$r(t,Fp),l=[].concat(XO(o),XO(u)),s=$r(t,zp),f="".concat(i,"Id"),c=i[0],d=r;if(l.length&&(d=l.reduce(function(m,g){if(g.props[f]===n&&nn(g.props,"extendDomain")&&K(g.props[c])){var h=g.props[c];return[Math.min(m[0],h),Math.max(m[1],h)]}return m},d)),s.length){var p="".concat(c,"1"),y="".concat(c,"2");d=s.reduce(function(m,g){if(g.props[f]===n&&nn(g.props,"extendDomain")&&K(g.props[p])&&K(g.props[y])){var h=g.props[p],v=g.props[y];return[Math.min(m[0],h,v),Math.max(m[1],h,v)]}return m},d)}return a&&a.length&&(d=a.reduce(function(m,g){return K(g)?[Math.min(m[0],g),Math.max(m[1],g)]:m},d)),d},wT={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function i(l,s,f){this.fn=l,this.context=s,this.once=f||!1}function a(l,s,f,c,d){if(typeof f!="function")throw new TypeError("The listener must be a function");var p=new i(f,c||l,d),y=r?r+s:s;return l._events[y]?l._events[y].fn?l._events[y]=[l._events[y],p]:l._events[y].push(p):(l._events[y]=p,l._eventsCount++),l}function o(l,s){--l._eventsCount===0?l._events=new n:delete l._events[s]}function u(){this._events=new n,this._eventsCount=0}u.prototype.eventNames=function(){var s=[],f,c;if(this._eventsCount===0)return s;for(c in f=this._events)t.call(f,c)&&s.push(r?c.slice(1):c);return Object.getOwnPropertySymbols?s.concat(Object.getOwnPropertySymbols(f)):s},u.prototype.listeners=function(s){var f=r?r+s:s,c=this._events[f];if(!c)return[];if(c.fn)return[c.fn];for(var d=0,p=c.length,y=new Array(p);d<p;d++)y[d]=c[d].fn;return y},u.prototype.listenerCount=function(s){var f=r?r+s:s,c=this._events[f];return c?c.fn?1:c.length:0},u.prototype.emit=function(s,f,c,d,p,y){var m=r?r+s:s;if(!this._events[m])return!1;var g=this._events[m],h=arguments.length,v,b;if(g.fn){switch(g.once&&this.removeListener(s,g.fn,void 0,!0),h){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,f),!0;case 3:return g.fn.call(g.context,f,c),!0;case 4:return g.fn.call(g.context,f,c,d),!0;case 5:return g.fn.call(g.context,f,c,d,p),!0;case 6:return g.fn.call(g.context,f,c,d,p,y),!0}for(b=1,v=new Array(h-1);b<h;b++)v[b-1]=arguments[b];g.fn.apply(g.context,v)}else{var w=g.length,S;for(b=0;b<w;b++)switch(g[b].once&&this.removeListener(s,g[b].fn,void 0,!0),h){case 1:g[b].fn.call(g[b].context);break;case 2:g[b].fn.call(g[b].context,f);break;case 3:g[b].fn.call(g[b].context,f,c);break;case 4:g[b].fn.call(g[b].context,f,c,d);break;default:if(!v)for(S=1,v=new Array(h-1);S<h;S++)v[S-1]=arguments[S];g[b].fn.apply(g[b].context,v)}}return!0},u.prototype.on=function(s,f,c){return a(this,s,f,c,!1)},u.prototype.once=function(s,f,c){return a(this,s,f,c,!0)},u.prototype.removeListener=function(s,f,c,d){var p=r?r+s:s;if(!this._events[p])return this;if(!f)return o(this,p),this;var y=this._events[p];if(y.fn)y.fn===f&&(!d||y.once)&&(!c||y.context===c)&&o(this,p);else{for(var m=0,g=[],h=y.length;m<h;m++)(y[m].fn!==f||d&&!y[m].once||c&&y[m].context!==c)&&g.push(y[m]);g.length?this._events[p]=g.length===1?g[0]:g:o(this,p)}return this},u.prototype.removeAllListeners=function(s){var f;return s?(f=r?r+s:s,this._events[f]&&o(this,f)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=r,u.EventEmitter=u,e.exports=u})(wT);var l1e=wT.exports;const s1e=Se(l1e);var P0=new s1e,E0="recharts.syncMouseEvents";function Jl(e){"@babel/helpers - typeof";return Jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jl(e)}function c1e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f1e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ST(n.key),n)}}function d1e(e,t,r){return t&&f1e(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function T0(e,t,r){return t=ST(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ST(e){var t=p1e(e,"string");return Jl(t)=="symbol"?t:String(t)}function p1e(e,t){if(Jl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Jl(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var v1e=function(){function e(){c1e(this,e),T0(this,"activeIndex",0),T0(this,"coordinateList",[]),T0(this,"layout","horizontal")}return d1e(e,[{key:"setDetails",value:function(r){var n,i=r.coordinateList,a=i===void 0?null:i,o=r.container,u=o===void 0?null:o,l=r.layout,s=l===void 0?null:l,f=r.offset,c=f===void 0?null:f,d=r.mouseHandlerCallback,p=d===void 0?null:d;this.coordinateList=(n=a??this.coordinateList)!==null&&n!==void 0?n:[],this.container=u??this.container,this.layout=s??this.layout,this.offset=c??this.offset,this.mouseHandlerCallback=p??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(r){if(this.coordinateList.length!==0)switch(r.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(r){this.activeIndex=r}},{key:"spoofMouse",value:function(){var r,n;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var i=this.container.getBoundingClientRect(),a=i.x,o=i.y,u=i.height,l=this.coordinateList[this.activeIndex].coordinate,s=((r=window)===null||r===void 0?void 0:r.scrollX)||0,f=((n=window)===null||n===void 0?void 0:n.scrollY)||0,c=a+l+s,d=o+this.offset.top+u/2+f;this.mouseHandlerCallback({pageX:c,pageY:d})}}}]),e}();function h1e(e,t,r){if(r==="number"&&t===!0&&Array.isArray(e)){var n=e==null?void 0:e[0],i=e==null?void 0:e[1];if(n&&i&&K(n)&&K(i))return!0}return!1}function y1e(e,t,r,n){var i=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-i:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-i,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function $T(e){var t=e.cx,r=e.cy,n=e.radius,i=e.startAngle,a=e.endAngle,o=je(t,r,n,i),u=je(t,r,n,a);return{points:[o,u],cx:t,cy:r,radius:n,startAngle:i,endAngle:a}}function m1e(e,t,r){var n,i,a,o;if(e==="horizontal")n=t.x,a=n,i=r.top,o=r.top+r.height;else if(e==="vertical")i=t.y,o=i,n=r.left,a=r.left+r.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var u=t.cx,l=t.cy,s=t.innerRadius,f=t.outerRadius,c=t.angle,d=je(u,l,s,c),p=je(u,l,f,c);n=d.x,i=d.y,a=p.x,o=p.y}else return $T(t);return[{x:n,y:i},{x:a,y:o}]}function es(e){"@babel/helpers - typeof";return es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},es(e)}function YO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?YO(Object(r),!0).forEach(function(n){g1e(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):YO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function g1e(e,t,r){return t=b1e(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b1e(e){var t=w1e(e,"string");return es(t)=="symbol"?t:String(t)}function w1e(e,t){if(es(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(es(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function S1e(e){var t=e.element,r=e.tooltipEventType,n=e.isActive,i=e.activeCoordinate,a=e.activePayload,o=e.offset,u=e.activeTooltipIndex,l=e.tooltipAxisBandSize,s=e.layout,f=e.chartName;if(!t||!t.props.cursor||!n||!i||f!=="ScatterChart"&&r!=="axis")return null;var c,d=Hy;if(f==="ScatterChart")c=i,d=t0e;else if(f==="BarChart")c=y1e(s,i,o,l),d=D1;else if(s==="radial"){var p=$T(i),y=p.cx,m=p.cy,g=p.radius,h=p.startAngle,v=p.endAngle;c={cx:y,cy:m,startAngle:h,endAngle:v,innerRadius:g,outerRadius:g},d=b4}else c={points:m1e(s,i,o)},d=Hy;var b=$c($c($c($c({stroke:"#ccc",pointerEvents:"none"},o),c),oe(t.props.cursor,!1)),{},{payload:a,payloadIndex:u,className:pe("recharts-tooltip-cursor",t.props.cursor.className)});return V.isValidElement(t.props.cursor)?V.cloneElement(t.props.cursor,b):V.createElement(d,b)}var $1e=["item"],_1e=["children","className","width","height","style","compact","title","desc"];function Co(e){"@babel/helpers - typeof";return Co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Co(e)}function el(){return el=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},el.apply(this,arguments)}function qO(e,t){return A1e(e)||x1e(e,t)||OT(e,t)||O1e()}function O1e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x1e(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,a,o,u=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,t!==0)for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){s=!0,i=f}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return u}}function A1e(e){if(Array.isArray(e))return e}function QO(e,t){if(e==null)return{};var r=P1e(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function P1e(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function E1e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T1e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,xT(n.key),n)}}function k1e(e,t,r){return t&&T1e(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function C1e(e,t,r){return t=Sd(t),I1e(e,_T()?Reflect.construct(t,r||[],Sd(e).constructor):t.apply(e,r))}function I1e(e,t){if(t&&(Co(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ye(e)}function _T(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_T=function(){return!!e})()}function Sd(e){return Sd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Sd(e)}function ye(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j1e(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$m(e,t)}function $m(e,t){return $m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},$m(e,t)}function Io(e){return D1e(e)||M1e(e)||OT(e)||N1e()}function N1e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OT(e,t){if(e){if(typeof e=="string")return _m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _m(e,t)}}function M1e(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function D1e(e){if(Array.isArray(e))return _m(e)}function _m(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ZO(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ZO(Object(r),!0).forEach(function(n){ae(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ZO(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ae(e,t,r){return t=xT(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xT(e){var t=L1e(e,"string");return Co(t)=="symbol"?t:String(t)}function L1e(e,t){if(Co(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Co(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var R1e={xAxis:["bottom","top"],yAxis:["left","right"]},F1e={width:"100%",height:"100%"},AT={x:0,y:0};function _c(e){return e}var B1e=function(t,r){return r==="horizontal"?t.x:r==="vertical"?t.y:r==="centric"?t.angle:t.radius},z1e=function(t,r,n,i){var a=r.find(function(f){return f&&f.index===n});if(a){if(t==="horizontal")return{x:a.coordinate,y:i.y};if(t==="vertical")return{x:i.x,y:a.coordinate};if(t==="centric"){var o=a.coordinate,u=i.radius;return D(D(D({},i),je(i.cx,i.cy,u,o)),{},{angle:o,radius:u})}var l=a.coordinate,s=i.angle;return D(D(D({},i),je(i.cx,i.cy,l,s)),{},{angle:s,radius:l})}return AT},Hp=function(t,r){var n=r.graphicalItems,i=r.dataStartIndex,a=r.dataEndIndex,o=(n??[]).reduce(function(u,l){var s=l.props.data;return s&&s.length?[].concat(Io(u),Io(s)):u},[]);return o.length>0?o:t&&t.length&&K(i)&&K(a)?t.slice(i,a+1):[]};function PT(e){return e==="number"?[0,"auto"]:void 0}var Om=function(t,r,n,i){var a=t.graphicalItems,o=t.tooltipAxis,u=Hp(r,t);return n<0||!a||!a.length||n>=u.length?null:a.reduce(function(l,s){var f,c=(f=s.props.data)!==null&&f!==void 0?f:r;c&&t.dataStartIndex+t.dataEndIndex!==0&&(c=c.slice(t.dataStartIndex,t.dataEndIndex+1));var d;if(o.dataKey&&!o.allowDuplicatedCategory){var p=c===void 0?u:c;d=Qh(p,o.dataKey,i)}else d=c&&c[n]||u[n];return d?[].concat(Io(l),[p4(s,d)]):l},[])},JO=function(t,r,n,i){var a=i||{x:t.chartX,y:t.chartY},o=B1e(a,n),u=t.orderedTooltipTicks,l=t.tooltipAxis,s=t.tooltipTicks,f=Mfe(o,u,s,l);if(f>=0&&s){var c=s[f]&&s[f].value,d=Om(t,r,f,c),p=z1e(n,u,f,a);return{activeTooltipIndex:f,activeLabel:c,activePayload:d,activeCoordinate:p}}return null},U1e=function(t,r){var n=r.axes,i=r.graphicalItems,a=r.axisType,o=r.axisIdKey,u=r.stackGroups,l=r.dataStartIndex,s=r.dataEndIndex,f=t.layout,c=t.children,d=t.stackOffset,p=u4(f,a);return n.reduce(function(y,m){var g,h=m.type.defaultProps!==void 0?D(D({},m.type.defaultProps),m.props):m.props,v=h.type,b=h.dataKey,w=h.allowDataOverflow,S=h.allowDuplicatedCategory,$=h.scale,_=h.ticks,O=h.includeHidden,T=h[o];if(y[T])return y;var P=Hp(t.data,{graphicalItems:i.filter(function(G){var ne,ce=o in G.props?G.props[o]:(ne=G.type.defaultProps)===null||ne===void 0?void 0:ne[o];return ce===T}),dataStartIndex:l,dataEndIndex:s}),k=P.length,E,C,N;h1e(h.domain,w,v)&&(E=Fy(h.domain,null,w),p&&(v==="number"||$!=="auto")&&(N=qu(P,b,"category")));var z=PT(v);if(!E||E.length===0){var F,B=(F=h.domain)!==null&&F!==void 0?F:z;if(b){if(E=qu(P,b,v),v==="category"&&p){var j=Mq(E);S&&j?(C=E,E=sd(0,k)):S||(E=O_(B,E,m).reduce(function(G,ne){return G.indexOf(ne)>=0?G:[].concat(Io(G),[ne])},[]))}else if(v==="category")S?E=E.filter(function(G){return G!==""&&!de(G)}):E=O_(B,E,m).reduce(function(G,ne){return G.indexOf(ne)>=0||ne===""||de(ne)?G:[].concat(Io(G),[ne])},[]);else if(v==="number"){var L=Bfe(P,i.filter(function(G){var ne,ce,Ae=o in G.props?G.props[o]:(ne=G.type.defaultProps)===null||ne===void 0?void 0:ne[o],Pe="hide"in G.props?G.props.hide:(ce=G.type.defaultProps)===null||ce===void 0?void 0:ce.hide;return Ae===T&&(O||!Pe)}),b,a,f);L&&(E=L)}p&&(v==="number"||$!=="auto")&&(N=qu(P,b,"category"))}else p?E=sd(0,k):u&&u[T]&&u[T].hasStack&&v==="number"?E=d==="expand"?[0,1]:d4(u[T].stackGroups,l,s):E=o4(P,i.filter(function(G){var ne=o in G.props?G.props[o]:G.type.defaultProps[o],ce="hide"in G.props?G.props.hide:G.type.defaultProps.hide;return ne===T&&(O||!ce)}),v,f,!0);if(v==="number")E=Sm(c,E,T,a,_),B&&(E=Fy(B,E,w));else if(v==="category"&&B){var U=B,Y=E.every(function(G){return U.indexOf(G)>=0});Y&&(E=U)}}return D(D({},y),{},ae({},T,D(D({},h),{},{axisType:a,domain:E,categoricalDomain:N,duplicateDomain:C,originalDomain:(g=h.domain)!==null&&g!==void 0?g:z,isCategorical:p,layout:f})))},{})},W1e=function(t,r){var n=r.graphicalItems,i=r.Axis,a=r.axisType,o=r.axisIdKey,u=r.stackGroups,l=r.dataStartIndex,s=r.dataEndIndex,f=t.layout,c=t.children,d=Hp(t.data,{graphicalItems:n,dataStartIndex:l,dataEndIndex:s}),p=d.length,y=u4(f,a),m=-1;return n.reduce(function(g,h){var v=h.type.defaultProps!==void 0?D(D({},h.type.defaultProps),h.props):h.props,b=v[o],w=PT("number");if(!g[b]){m++;var S;return y?S=sd(0,p):u&&u[b]&&u[b].hasStack?(S=d4(u[b].stackGroups,l,s),S=Sm(c,S,b,a)):(S=Fy(w,o4(d,n.filter(function($){var _,O,T=o in $.props?$.props[o]:(_=$.type.defaultProps)===null||_===void 0?void 0:_[o],P="hide"in $.props?$.props.hide:(O=$.type.defaultProps)===null||O===void 0?void 0:O.hide;return T===b&&!P}),"number",f),i.defaultProps.allowDataOverflow),S=Sm(c,S,b,a)),D(D({},g),{},ae({},b,D(D({axisType:a},i.defaultProps),{},{hide:!0,orientation:or(R1e,"".concat(a,".").concat(m%2),null),domain:S,originalDomain:w,isCategorical:y,layout:f})))}return g},{})},H1e=function(t,r){var n=r.axisType,i=n===void 0?"xAxis":n,a=r.AxisComp,o=r.graphicalItems,u=r.stackGroups,l=r.dataStartIndex,s=r.dataEndIndex,f=t.children,c="".concat(i,"Id"),d=$r(f,a),p={};return d&&d.length?p=U1e(t,{axes:d,graphicalItems:o,axisType:i,axisIdKey:c,stackGroups:u,dataStartIndex:l,dataEndIndex:s}):o&&o.length&&(p=W1e(t,{Axis:a,graphicalItems:o,axisType:i,axisIdKey:c,stackGroups:u,dataStartIndex:l,dataEndIndex:s})),p},G1e=function(t){var r=qn(t),n=wn(r,!1,!0);return{tooltipTicks:n,orderedTooltipTicks:s1(n,function(i){return i.coordinate}),tooltipAxis:r,tooltipAxisBandSize:Qf(r,n)}},ex=function(t){var r=t.children,n=t.defaultShowTooltip,i=rr(r,_o),a=0,o=0;return t.data&&t.data.length!==0&&(o=t.data.length-1),i&&i.props&&(i.props.startIndex>=0&&(a=i.props.startIndex),i.props.endIndex>=0&&(o=i.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:a,dataEndIndex:o,activeTooltipIndex:-1,isTooltipActive:!!n}},V1e=function(t){return!t||!t.length?!1:t.some(function(r){var n=si(r&&r.type);return n&&n.indexOf("Bar")>=0})},tx=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},K1e=function(t,r){var n=t.props,i=t.graphicalItems,a=t.xAxisMap,o=a===void 0?{}:a,u=t.yAxisMap,l=u===void 0?{}:u,s=n.width,f=n.height,c=n.children,d=n.margin||{},p=rr(c,_o),y=rr(c,$l),m=Object.keys(l).reduce(function(S,$){var _=l[$],O=_.orientation;return!_.mirror&&!_.hide?D(D({},S),{},ae({},O,S[O]+_.width)):S},{left:d.left||0,right:d.right||0}),g=Object.keys(o).reduce(function(S,$){var _=o[$],O=_.orientation;return!_.mirror&&!_.hide?D(D({},S),{},ae({},O,or(S,"".concat(O))+_.height)):S},{top:d.top||0,bottom:d.bottom||0}),h=D(D({},g),m),v=h.bottom;p&&(h.bottom+=p.props.height||_o.defaultProps.height),y&&r&&(h=Rfe(h,i,n,r));var b=s-h.left-h.right,w=f-h.top-h.bottom;return D(D({brushBottom:v},h),{},{width:Math.max(b,0),height:Math.max(w,0)})},X1e=function(t,r){if(r==="xAxis")return t[r].width;if(r==="yAxis")return t[r].height},ET=function(t){var r,n=t.chartName,i=t.GraphicalChild,a=t.defaultTooltipEventType,o=a===void 0?"axis":a,u=t.validateTooltipEventTypes,l=u===void 0?["axis"]:u,s=t.axisComponents,f=t.legendContent,c=t.formatAxisMap,d=t.defaultProps,p=function(g,h){var v=h.graphicalItems,b=h.stackGroups,w=h.offset,S=h.updateId,$=h.dataStartIndex,_=h.dataEndIndex,O=g.barSize,T=g.layout,P=g.barGap,k=g.barCategoryGap,E=g.maxBarSize,C=tx(T),N=C.numericAxisName,z=C.cateAxisName,F=V1e(v),B=[];return v.forEach(function(j,L){var U=Hp(g.data,{graphicalItems:[j],dataStartIndex:$,dataEndIndex:_}),Y=j.type.defaultProps!==void 0?D(D({},j.type.defaultProps),j.props):j.props,G=Y.dataKey,ne=Y.maxBarSize,ce=Y["".concat(N,"Id")],Ae=Y["".concat(z,"Id")],Pe={},Ee=s.reduce(function(M,Z){var q=h["".concat(Z.axisType,"Map")],H=Y["".concat(Z.axisType,"Id")];q&&q[H]||Z.axisType==="zAxis"||ra();var re=q[H];return D(D({},M),{},ae(ae({},Z.axisType,re),"".concat(Z.axisType,"Ticks"),wn(re)))},Pe),rt=Ee[z],Q=Ee["".concat(z,"Ticks")],ie=b&&b[ce]&&b[ce].hasStack&&Yfe(j,b[ce].stackGroups),ue=si(j.type).indexOf("Bar")>=0,R=Qf(rt,Q),ze=[],he=F&&Dfe({barSize:O,stackGroups:b,totalSize:X1e(Ee,z)});if(ue){var Qe,Xe,Bt=de(ne)?E:ne,A=(Qe=(Xe=Qf(rt,Q,!0))!==null&&Xe!==void 0?Xe:Bt)!==null&&Qe!==void 0?Qe:0;ze=Lfe({barGap:P,barCategoryGap:k,bandSize:A!==R?A:R,sizeList:he[Ae],maxBarSize:Bt}),A!==R&&(ze=ze.map(function(M){return D(D({},M),{},{position:D(D({},M.position),{},{offset:M.position.offset-A/2})})}))}var I=j&&j.type&&j.type.getComposedData;I&&B.push({props:D(D({},I(D(D({},Ee),{},{displayedData:U,props:g,dataKey:G,item:j,bandSize:R,barPosition:ze,offset:w,stackedData:ie,layout:T,dataStartIndex:$,dataEndIndex:_}))),{},ae(ae(ae({key:j.key||"item-".concat(L)},N,Ee[N]),z,Ee[z]),"animationId",S)),childIndex:Vq(j,g.children),item:j})}),B},y=function(g,h){var v=g.props,b=g.dataStartIndex,w=g.dataEndIndex,S=g.updateId;if(!wS({props:v}))return null;var $=v.children,_=v.layout,O=v.stackOffset,T=v.data,P=v.reverseStackOrder,k=tx(_),E=k.numericAxisName,C=k.cateAxisName,N=$r($,i),z=Kfe(T,N,"".concat(E,"Id"),"".concat(C,"Id"),O,P),F=s.reduce(function(Y,G){var ne="".concat(G.axisType,"Map");return D(D({},Y),{},ae({},ne,H1e(v,D(D({},G),{},{graphicalItems:N,stackGroups:G.axisType===E&&z,dataStartIndex:b,dataEndIndex:w}))))},{}),B=K1e(D(D({},F),{},{props:v,graphicalItems:N}),h==null?void 0:h.legendBBox);Object.keys(F).forEach(function(Y){F[Y]=c(v,F[Y],B,Y.replace("Map",""),n)});var j=F["".concat(C,"Map")],L=G1e(j),U=p(v,D(D({},F),{},{dataStartIndex:b,dataEndIndex:w,updateId:S,graphicalItems:N,stackGroups:z,offset:B}));return D(D({formattedGraphicalItems:U,graphicalItems:N,offset:B,stackGroups:z},L),F)};return r=function(m){j1e(g,m);function g(h){var v,b,w;return E1e(this,g),w=C1e(this,g,[h]),ae(ye(w),"eventEmitterSymbol",Symbol("rechartsEventEmitter")),ae(ye(w),"accessibilityManager",new v1e),ae(ye(w),"handleLegendBBoxUpdate",function(S){if(S){var $=w.state,_=$.dataStartIndex,O=$.dataEndIndex,T=$.updateId;w.setState(D({legendBBox:S},y({props:w.props,dataStartIndex:_,dataEndIndex:O,updateId:T},D(D({},w.state),{},{legendBBox:S}))))}}),ae(ye(w),"handleReceiveSyncEvent",function(S,$,_){if(w.props.syncId===S){if(_===w.eventEmitterSymbol&&typeof w.props.syncMethod!="function")return;w.applySyncEvent($)}}),ae(ye(w),"handleBrushChange",function(S){var $=S.startIndex,_=S.endIndex;if($!==w.state.dataStartIndex||_!==w.state.dataEndIndex){var O=w.state.updateId;w.setState(function(){return D({dataStartIndex:$,dataEndIndex:_},y({props:w.props,dataStartIndex:$,dataEndIndex:_,updateId:O},w.state))}),w.triggerSyncEvent({dataStartIndex:$,dataEndIndex:_})}}),ae(ye(w),"handleMouseEnter",function(S){var $=w.getMouseInfo(S);if($){var _=D(D({},$),{},{isTooltipActive:!0});w.setState(_),w.triggerSyncEvent(_);var O=w.props.onMouseEnter;le(O)&&O(_,S)}}),ae(ye(w),"triggeredAfterMouseMove",function(S){var $=w.getMouseInfo(S),_=$?D(D({},$),{},{isTooltipActive:!0}):{isTooltipActive:!1};w.setState(_),w.triggerSyncEvent(_);var O=w.props.onMouseMove;le(O)&&O(_,S)}),ae(ye(w),"handleItemMouseEnter",function(S){w.setState(function(){return{isTooltipActive:!0,activeItem:S,activePayload:S.tooltipPayload,activeCoordinate:S.tooltipPosition||{x:S.cx,y:S.cy}}})}),ae(ye(w),"handleItemMouseLeave",function(){w.setState(function(){return{isTooltipActive:!1}})}),ae(ye(w),"handleMouseMove",function(S){S.persist(),w.throttleTriggeredAfterMouseMove(S)}),ae(ye(w),"handleMouseLeave",function(S){w.throttleTriggeredAfterMouseMove.cancel();var $={isTooltipActive:!1};w.setState($),w.triggerSyncEvent($);var _=w.props.onMouseLeave;le(_)&&_($,S)}),ae(ye(w),"handleOuterEvent",function(S){var $=Gq(S),_=or(w.props,"".concat($));if($&&le(_)){var O,T;/.*touch.*/i.test($)?T=w.getMouseInfo(S.changedTouches[0]):T=w.getMouseInfo(S),_((O=T)!==null&&O!==void 0?O:{},S)}}),ae(ye(w),"handleClick",function(S){var $=w.getMouseInfo(S);if($){var _=D(D({},$),{},{isTooltipActive:!0});w.setState(_),w.triggerSyncEvent(_);var O=w.props.onClick;le(O)&&O(_,S)}}),ae(ye(w),"handleMouseDown",function(S){var $=w.props.onMouseDown;if(le($)){var _=w.getMouseInfo(S);$(_,S)}}),ae(ye(w),"handleMouseUp",function(S){var $=w.props.onMouseUp;if(le($)){var _=w.getMouseInfo(S);$(_,S)}}),ae(ye(w),"handleTouchMove",function(S){S.changedTouches!=null&&S.changedTouches.length>0&&w.throttleTriggeredAfterMouseMove(S.changedTouches[0])}),ae(ye(w),"handleTouchStart",function(S){S.changedTouches!=null&&S.changedTouches.length>0&&w.handleMouseDown(S.changedTouches[0])}),ae(ye(w),"handleTouchEnd",function(S){S.changedTouches!=null&&S.changedTouches.length>0&&w.handleMouseUp(S.changedTouches[0])}),ae(ye(w),"triggerSyncEvent",function(S){w.props.syncId!==void 0&&P0.emit(E0,w.props.syncId,S,w.eventEmitterSymbol)}),ae(ye(w),"applySyncEvent",function(S){var $=w.props,_=$.layout,O=$.syncMethod,T=w.state.updateId,P=S.dataStartIndex,k=S.dataEndIndex;if(S.dataStartIndex!==void 0||S.dataEndIndex!==void 0)w.setState(D({dataStartIndex:P,dataEndIndex:k},y({props:w.props,dataStartIndex:P,dataEndIndex:k,updateId:T},w.state)));else if(S.activeTooltipIndex!==void 0){var E=S.chartX,C=S.chartY,N=S.activeTooltipIndex,z=w.state,F=z.offset,B=z.tooltipTicks;if(!F)return;if(typeof O=="function")N=O(B,S);else if(O==="value"){N=-1;for(var j=0;j<B.length;j++)if(B[j].value===S.activeLabel){N=j;break}}var L=D(D({},F),{},{x:F.left,y:F.top}),U=Math.min(E,L.x+L.width),Y=Math.min(C,L.y+L.height),G=B[N]&&B[N].value,ne=Om(w.state,w.props.data,N),ce=B[N]?{x:_==="horizontal"?B[N].coordinate:U,y:_==="horizontal"?Y:B[N].coordinate}:AT;w.setState(D(D({},S),{},{activeLabel:G,activeCoordinate:ce,activePayload:ne,activeTooltipIndex:N}))}else w.setState(S)}),ae(ye(w),"renderCursor",function(S){var $,_=w.state,O=_.isTooltipActive,T=_.activeCoordinate,P=_.activePayload,k=_.offset,E=_.activeTooltipIndex,C=_.tooltipAxisBandSize,N=w.getTooltipEventType(),z=($=S.props.active)!==null&&$!==void 0?$:O,F=w.props.layout,B=S.key||"_recharts-cursor";return x.createElement(S1e,{key:B,activeCoordinate:T,activePayload:P,activeTooltipIndex:E,chartName:n,element:S,isActive:z,layout:F,offset:k,tooltipAxisBandSize:C,tooltipEventType:N})}),ae(ye(w),"renderPolarAxis",function(S,$,_){var O=or(S,"type.axisType"),T=or(w.state,"".concat(O,"Map")),P=T&&T[S.props["".concat(O,"Id")]];return V.cloneElement(S,D(D({},P),{},{className:pe(O,P.className),key:S.key||"".concat($,"-").concat(_),ticks:wn(P,!0)}))}),ae(ye(w),"renderPolarGrid",function(S){var $=S.props,_=$.radialLines,O=$.polarAngles,T=$.polarRadius,P=w.state,k=P.radiusAxisMap,E=P.angleAxisMap,C=qn(k),N=qn(E),z=N.cx,F=N.cy,B=N.innerRadius,j=N.outerRadius;return V.cloneElement(S,{polarAngles:Array.isArray(O)?O:wn(N,!0).map(function(L){return L.coordinate}),polarRadius:Array.isArray(T)?T:wn(C,!0).map(function(L){return L.coordinate}),cx:z,cy:F,innerRadius:B,outerRadius:j,key:S.key||"polar-grid",radialLines:_})}),ae(ye(w),"renderLegend",function(){var S=w.state.formattedGraphicalItems,$=w.props,_=$.children,O=$.width,T=$.height,P=w.props.margin||{},k=O-(P.left||0)-(P.right||0),E=i4({children:_,formattedGraphicalItems:S,legendWidth:k,legendContent:f});if(!E)return null;var C=E.item,N=QO(E,$1e);return V.cloneElement(C,D(D({},N),{},{chartWidth:O,chartHeight:T,margin:P,onBBoxUpdate:w.handleLegendBBoxUpdate}))}),ae(ye(w),"renderTooltip",function(){var S,$=w.props,_=$.children,O=$.accessibilityLayer,T=rr(_,Xr);if(!T)return null;var P=w.state,k=P.isTooltipActive,E=P.activeCoordinate,C=P.activePayload,N=P.activeLabel,z=P.offset,F=(S=T.props.active)!==null&&S!==void 0?S:k;return V.cloneElement(T,{viewBox:D(D({},z),{},{x:z.left,y:z.top}),active:F,label:N,payload:F?C:[],coordinate:E,accessibilityLayer:O})}),ae(ye(w),"renderBrush",function(S){var $=w.props,_=$.margin,O=$.data,T=w.state,P=T.offset,k=T.dataStartIndex,E=T.dataEndIndex,C=T.updateId;return V.cloneElement(S,{key:S.key||"_recharts-brush",onChange:gc(w.handleBrushChange,S.props.onChange),data:O,x:K(S.props.x)?S.props.x:P.left,y:K(S.props.y)?S.props.y:P.top+P.height+P.brushBottom-(_.bottom||0),width:K(S.props.width)?S.props.width:P.width,startIndex:k,endIndex:E,updateId:"brush-".concat(C)})}),ae(ye(w),"renderReferenceElement",function(S,$,_){if(!S)return null;var O=ye(w),T=O.clipPathId,P=w.state,k=P.xAxisMap,E=P.yAxisMap,C=P.offset,N=S.props,z=N.xAxisId,F=N.yAxisId;return V.cloneElement(S,{key:S.key||"".concat($,"-").concat(_),xAxis:k[z],yAxis:E[F],viewBox:{x:C.left,y:C.top,width:C.width,height:C.height},clipPathId:T})}),ae(ye(w),"renderActivePoints",function(S){var $=S.item,_=S.activePoint,O=S.basePoint,T=S.childIndex,P=S.isRange,k=[],E=$.props.key,C=$.item.type.defaultProps!==void 0?D(D({},$.item.type.defaultProps),$.item.props):$.item.props,N=C.activeDot,z=C.dataKey,F=D(D({index:T,dataKey:z,cx:_.x,cy:_.y,r:4,fill:M1($.item),strokeWidth:2,stroke:"#fff",payload:_.payload,value:_.value,key:"".concat(E,"-activePoint-").concat(T)},oe(N,!1)),Of(N));return k.push(g.renderActiveDot(N,F)),O?k.push(g.renderActiveDot(N,D(D({},F),{},{cx:O.x,cy:O.y,key:"".concat(E,"-basePoint-").concat(T)}))):P&&k.push(null),k}),ae(ye(w),"renderGraphicChild",function(S,$,_){var O=w.filterFormatItem(S,$,_);if(!O)return null;var T=w.getTooltipEventType(),P=w.state,k=P.isTooltipActive,E=P.tooltipAxis,C=P.activeTooltipIndex,N=P.activeLabel,z=w.props.children,F=rr(z,Xr),B=O.props,j=B.points,L=B.isRange,U=B.baseLine,Y=O.item.type.defaultProps!==void 0?D(D({},O.item.type.defaultProps),O.item.props):O.item.props,G=Y.activeDot,ne=Y.hide,ce=Y.activeBar,Ae=Y.activeShape,Pe=!!(!ne&&k&&F&&(G||ce||Ae)),Ee={};T!=="axis"&&F&&F.props.trigger==="click"?Ee={onClick:gc(w.handleItemMouseEnter,S.props.onClick)}:T!=="axis"&&(Ee={onMouseLeave:gc(w.handleItemMouseLeave,S.props.onMouseLeave),onMouseEnter:gc(w.handleItemMouseEnter,S.props.onMouseEnter)});var rt=V.cloneElement(S,D(D({},O.props),Ee));function Q(Z){return typeof E.dataKey=="function"?E.dataKey(Z.payload):null}if(Pe)if(C>=0){var ie,ue;if(E.dataKey&&!E.allowDuplicatedCategory){var R=typeof E.dataKey=="function"?Q:"payload.".concat(E.dataKey.toString());ie=Qh(j,R,N),ue=L&&U&&Qh(U,R,N)}else ie=j==null?void 0:j[C],ue=L&&U&&U[C];if(Ae||ce){var ze=S.props.activeIndex!==void 0?S.props.activeIndex:C;return[V.cloneElement(S,D(D(D({},O.props),Ee),{},{activeIndex:ze})),null,null]}if(!de(ie))return[rt].concat(Io(w.renderActivePoints({item:O,activePoint:ie,basePoint:ue,childIndex:C,isRange:L})))}else{var he,Qe=(he=w.getItemByXY(w.state.activeCoordinate))!==null&&he!==void 0?he:{graphicalItem:rt},Xe=Qe.graphicalItem,Bt=Xe.item,A=Bt===void 0?S:Bt,I=Xe.childIndex,M=D(D(D({},O.props),Ee),{},{activeIndex:I});return[V.cloneElement(A,M),null,null]}return L?[rt,null,null]:[rt,null]}),ae(ye(w),"renderCustomized",function(S,$,_){return V.cloneElement(S,D(D({key:"recharts-customized-".concat(_)},w.props),w.state))}),ae(ye(w),"renderMap",{CartesianGrid:{handler:_c,once:!0},ReferenceArea:{handler:w.renderReferenceElement},ReferenceLine:{handler:_c},ReferenceDot:{handler:w.renderReferenceElement},XAxis:{handler:_c},YAxis:{handler:_c},Brush:{handler:w.renderBrush,once:!0},Bar:{handler:w.renderGraphicChild},Line:{handler:w.renderGraphicChild},Area:{handler:w.renderGraphicChild},Radar:{handler:w.renderGraphicChild},RadialBar:{handler:w.renderGraphicChild},Scatter:{handler:w.renderGraphicChild},Pie:{handler:w.renderGraphicChild},Funnel:{handler:w.renderGraphicChild},Tooltip:{handler:w.renderCursor,once:!0},PolarGrid:{handler:w.renderPolarGrid,once:!0},PolarAngleAxis:{handler:w.renderPolarAxis},PolarRadiusAxis:{handler:w.renderPolarAxis},Customized:{handler:w.renderCustomized}}),w.clipPathId="".concat((v=h.id)!==null&&v!==void 0?v:ys("recharts"),"-clip"),w.throttleTriggeredAfterMouseMove=rue(w.triggeredAfterMouseMove,(b=h.throttleDelay)!==null&&b!==void 0?b:1e3/60),w.state={},w}return k1e(g,[{key:"componentDidMount",value:function(){var v,b;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(v=this.props.margin.left)!==null&&v!==void 0?v:0,top:(b=this.props.margin.top)!==null&&b!==void 0?b:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var v=this.props,b=v.children,w=v.data,S=v.height,$=v.layout,_=rr(b,Xr);if(_){var O=_.props.defaultIndex;if(!(typeof O!="number"||O<0||O>this.state.tooltipTicks.length)){var T=this.state.tooltipTicks[O]&&this.state.tooltipTicks[O].value,P=Om(this.state,w,O,T),k=this.state.tooltipTicks[O].coordinate,E=(this.state.offset.top+S)/2,C=$==="horizontal",N=C?{x:k,y:E}:{y:k,x:E},z=this.state.formattedGraphicalItems.find(function(B){var j=B.item;return j.type.name==="Scatter"});z&&(N=D(D({},N),z.props.points[O].tooltipPosition),P=z.props.points[O].tooltipPayload);var F={activeTooltipIndex:O,isTooltipActive:!0,activeLabel:T,activePayload:P,activeCoordinate:N};this.setState(F),this.renderCursor(_),this.accessibilityManager.setIndex(O)}}}},{key:"getSnapshotBeforeUpdate",value:function(v,b){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==b.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==v.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==v.margin){var w,S;this.accessibilityManager.setDetails({offset:{left:(w=this.props.margin.left)!==null&&w!==void 0?w:0,top:(S=this.props.margin.top)!==null&&S!==void 0?S:0}})}return null}},{key:"componentDidUpdate",value:function(v){Jh([rr(v.children,Xr)],[rr(this.props.children,Xr)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var v=rr(this.props.children,Xr);if(v&&typeof v.props.shared=="boolean"){var b=v.props.shared?"axis":"item";return l.indexOf(b)>=0?b:o}return o}},{key:"getMouseInfo",value:function(v){if(!this.container)return null;var b=this.container,w=b.getBoundingClientRect(),S=sue(w),$={chartX:Math.round(v.pageX-S.left),chartY:Math.round(v.pageY-S.top)},_=w.width/b.offsetWidth||1,O=this.inRange($.chartX,$.chartY,_);if(!O)return null;var T=this.state,P=T.xAxisMap,k=T.yAxisMap,E=this.getTooltipEventType();if(E!=="axis"&&P&&k){var C=qn(P).scale,N=qn(k).scale,z=C&&C.invert?C.invert($.chartX):null,F=N&&N.invert?N.invert($.chartY):null;return D(D({},$),{},{xValue:z,yValue:F})}var B=JO(this.state,this.props.data,this.props.layout,O);return B?D(D({},$),B):null}},{key:"inRange",value:function(v,b){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,S=this.props.layout,$=v/w,_=b/w;if(S==="horizontal"||S==="vertical"){var O=this.state.offset,T=$>=O.left&&$<=O.left+O.width&&_>=O.top&&_<=O.top+O.height;return T?{x:$,y:_}:null}var P=this.state,k=P.angleAxisMap,E=P.radiusAxisMap;if(k&&E){var C=qn(k);return P_({x:$,y:_},C)}return null}},{key:"parseEventsOfWrapper",value:function(){var v=this.props.children,b=this.getTooltipEventType(),w=rr(v,Xr),S={};w&&b==="axis"&&(w.props.trigger==="click"?S={onClick:this.handleClick}:S={onMouseEnter:this.handleMouseEnter,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd});var $=Of(this.props,this.handleOuterEvent);return D(D({},$),S)}},{key:"addListener",value:function(){P0.on(E0,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){P0.removeListener(E0,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(v,b,w){for(var S=this.state.formattedGraphicalItems,$=0,_=S.length;$<_;$++){var O=S[$];if(O.item===v||O.props.key===v.key||b===si(O.item.type)&&w===O.childIndex)return O}return null}},{key:"renderClipPath",value:function(){var v=this.clipPathId,b=this.state.offset,w=b.left,S=b.top,$=b.height,_=b.width;return x.createElement("defs",null,x.createElement("clipPath",{id:v},x.createElement("rect",{x:w,y:S,height:$,width:_})))}},{key:"getXScales",value:function(){var v=this.state.xAxisMap;return v?Object.entries(v).reduce(function(b,w){var S=qO(w,2),$=S[0],_=S[1];return D(D({},b),{},ae({},$,_.scale))},{}):null}},{key:"getYScales",value:function(){var v=this.state.yAxisMap;return v?Object.entries(v).reduce(function(b,w){var S=qO(w,2),$=S[0],_=S[1];return D(D({},b),{},ae({},$,_.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(v){var b;return(b=this.state.xAxisMap)===null||b===void 0||(b=b[v])===null||b===void 0?void 0:b.scale}},{key:"getYScaleByAxisId",value:function(v){var b;return(b=this.state.yAxisMap)===null||b===void 0||(b=b[v])===null||b===void 0?void 0:b.scale}},{key:"getItemByXY",value:function(v){var b=this.state,w=b.formattedGraphicalItems,S=b.activeItem;if(w&&w.length)for(var $=0,_=w.length;$<_;$++){var O=w[$],T=O.props,P=O.item,k=P.type.defaultProps!==void 0?D(D({},P.type.defaultProps),P.props):P.props,E=si(P.type);if(E==="Bar"){var C=(T.data||[]).find(function(B){return Mve(v,B)});if(C)return{graphicalItem:O,payload:C}}else if(E==="RadialBar"){var N=(T.data||[]).find(function(B){return P_(v,B)});if(N)return{graphicalItem:O,payload:N}}else if(Mp(O,S)||Dp(O,S)||Xl(O,S)){var z=_he({graphicalItem:O,activeTooltipItem:S,itemData:k.data}),F=k.activeIndex===void 0?z:k.activeIndex;return{graphicalItem:D(D({},O),{},{childIndex:F}),payload:Xl(O,S)?k.data[z]:O.props.data[z]}}}return null}},{key:"render",value:function(){var v=this;if(!wS(this))return null;var b=this.props,w=b.children,S=b.className,$=b.width,_=b.height,O=b.style,T=b.compact,P=b.title,k=b.desc,E=QO(b,_1e),C=oe(E,!1);if(T)return x.createElement(MO,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},x.createElement(ty,el({},C,{width:$,height:_,title:P,desc:k}),this.renderClipPath(),$S(w,this.renderMap)));if(this.props.accessibilityLayer){var N,z;C.tabIndex=(N=this.props.tabIndex)!==null&&N!==void 0?N:0,C.role=(z=this.props.role)!==null&&z!==void 0?z:"application",C.onKeyDown=function(B){v.accessibilityManager.keyboardEvent(B)},C.onFocus=function(){v.accessibilityManager.focus()}}var F=this.parseEventsOfWrapper();return x.createElement(MO,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},x.createElement("div",el({className:pe("recharts-wrapper",S),style:D({position:"relative",cursor:"default",width:$,height:_},O)},F,{ref:function(j){v.container=j}}),x.createElement(ty,el({},C,{width:$,height:_,title:P,desc:k,style:F1e}),this.renderClipPath(),$S(w,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}]),g}(V.Component),ae(r,"displayName",n),ae(r,"defaultProps",D({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},d)),ae(r,"getDerivedStateFromProps",function(m,g){var h=m.dataKey,v=m.data,b=m.children,w=m.width,S=m.height,$=m.layout,_=m.stackOffset,O=m.margin,T=g.dataStartIndex,P=g.dataEndIndex;if(g.updateId===void 0){var k=ex(m);return D(D(D({},k),{},{updateId:0},y(D(D({props:m},k),{},{updateId:0}),g)),{},{prevDataKey:h,prevData:v,prevWidth:w,prevHeight:S,prevLayout:$,prevStackOffset:_,prevMargin:O,prevChildren:b})}if(h!==g.prevDataKey||v!==g.prevData||w!==g.prevWidth||S!==g.prevHeight||$!==g.prevLayout||_!==g.prevStackOffset||!Ka(O,g.prevMargin)){var E=ex(m),C={chartX:g.chartX,chartY:g.chartY,isTooltipActive:g.isTooltipActive},N=D(D({},JO(g,v,$)),{},{updateId:g.updateId+1}),z=D(D(D({},E),C),N);return D(D(D({},z),y(D({props:m},z),g)),{},{prevDataKey:h,prevData:v,prevWidth:w,prevHeight:S,prevLayout:$,prevStackOffset:_,prevMargin:O,prevChildren:b})}if(!Jh(b,g.prevChildren)){var F,B,j,L,U=rr(b,_o),Y=U&&(F=(B=U.props)===null||B===void 0?void 0:B.startIndex)!==null&&F!==void 0?F:T,G=U&&(j=(L=U.props)===null||L===void 0?void 0:L.endIndex)!==null&&j!==void 0?j:P,ne=Y!==T||G!==P,ce=!de(v),Ae=ce&&!ne?g.updateId:g.updateId+1;return D(D({updateId:Ae},y(D(D({props:m},g),{},{updateId:Ae,dataStartIndex:Y,dataEndIndex:G}),g)),{},{prevChildren:b,dataStartIndex:Y,dataEndIndex:G})}return null}),ae(r,"renderActiveDot",function(m,g){var h;return V.isValidElement(m)?h=V.cloneElement(m,g):le(m)?h=m(g):h=x.createElement(L1,g),x.createElement($e,{className:"recharts-active-dot",key:g.key},h)}),r},Y1e=ET({chartName:"BarChart",GraphicalChild:fa,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Up},{axisType:"yAxis",AxisComp:Wp}],formatAxisMap:Zye}),q1e=ET({chartName:"PieChart",GraphicalChild:Dn,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:Np},{axisType:"radiusAxis",AxisComp:Ip}],formatAxisMap:ade,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}});const Q1e=Ne.div`
  margin: 0 auto;
  margin-top: -45px;
`;function Z1e({avgPvalue:e}){const t=Math.PI/180,r=[{name:"A",value:5,color:"#db1d1d",shadowColor:"#750505"},{name:"B",value:95,color:"#0cc20c",shadowColor:"#036503"}],n=150,i=200,a=50,o=100,u=(l,s,f,c,d,p,y)=>{let m=0;s.forEach(C=>{m+=C.value});const g=180*(1-l/m),h=(d+2*p)/3,v=Math.sin(-t*g),b=Math.cos(-t*g),w=5,S=f+5,$=c+5,_=S+w*v,O=$-w*b,T=S-w*v,P=$+w*b,k=S+h*b,E=$+h*v;return[X.jsx("circle",{cx:S,cy:$,r:w,fill:y,stroke:"none"},l),X.jsx("path",{d:`M${_} ${O}L${T} ${P} L${k} ${E} L${_} ${O}`,stroke:"#none",fill:y,style:{filter:"drop-shadow(2px 2px 2px black)"}},l*2)]};return X.jsx(Q1e,{children:X.jsxs(q1e,{width:320,height:210,children:[X.jsxs(Dn,{dataKey:"value",startAngle:180,endAngle:0,data:r,cx:n,cy:i,innerRadius:a,outerRadius:o,fill:"#8884d8",stroke:"none",children:[r.map((l,s)=>X.jsx(gs,{fill:l.color,style:{filter:`drop-shadow(2px 2px 2px ${l.shadowColor})`}},`cell-${s}`)),X.jsx(ot,{value:`Average P-value: ${e}`,position:"center",dy:-130,fill:"black",fontStyle:"bold",fontSize:16})]},Math.random()),u(e*100,r,n,i,a,o,"#0c0c02")]})})}const J1e=Ne.div`
  display: flex;
  justify-content: center;
  margin-right: 10px;
`,ebe=Ne.div`
  width: fit-content;
  height: fit-content;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border: solid 1px darkgray;
  border-radius: 5%;
  background-color: white;
  margin: 0;
`;function tbe({chartData:e,expected:t}){const r=({active:i,payload:a})=>i?X.jsx(ebe,{children:`Average ${a&&a[0].value}`}):null;return X.jsx(J1e,{children:X.jsxs(Y1e,{width:450,height:250,data:e,children:[X.jsx(pT,{strokeDasharray:"3 3"}),X.jsx(Up,{dataKey:"dataName"}),X.jsx(Wp,{padding:{bottom:1}}),X.jsx(Xr,{content:X.jsx(r,{}),offset:10}),X.jsx(fa,{dataKey:"absolute",children:e.map((i,a)=>X.jsx(gs,{fill:iS(t[0],e[a].absolute),style:{outline:"1px solid",outlineColor:"black",filter:`drop-shadow(3px 1px 3px ${iS(t[0],e[a].absolute)})`}},`cell-${a}`))})]})})}const rbe=Ne.table`
  align-self: center;
  width: 100%;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,nbe=Ne.tbody`
  text-align: center;
`;function ibe({chartData:e}){return X.jsxs(rbe,{children:[X.jsx("thead",{children:X.jsxs("tr",{children:[X.jsx("th",{children:"Value"}),X.jsx("th",{children:"Number"}),X.jsx("th",{children:"Percentage"})]})}),X.jsx(nbe,{children:e==null?void 0:e.map((t,r)=>X.jsxs("tr",{children:[X.jsx("td",{children:r+1}),X.jsx("td",{children:Math.round(t.absolute*1e4)/1e4}),X.jsx("td",{children:Math.round(t.percent*1e4)/1e4})]},r))})]})}const rx=Ne.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`,abe=Ne.h3`
  text-align: center;
`,obe=Ne.p`
  display: flex;
  justify-content: space-between;
  justify-self: center;
  width: 60%;
  margin-left: 20%;
  font-size: small;
  font-weight: 600;
`;function nx({chartData:e,avgPandChi:t,expected:r,children:n}){return X.jsxs(rx,{children:[X.jsx(abe,{children:n}),X.jsx(ibe,{chartData:e}),X.jsx(tbe,{chartData:e,expected:r}),X.jsx(Z1e,{avgPvalue:t.pValue}),X.jsx(rx,{children:X.jsxs(obe,{children:[X.jsx("span",{children:"Chi square"}),X.jsx("span",{children:t.chiSquare})]})})]})}const ube=Ne.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`,lbe=Ne.section`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;function sbe(){var d;const[e,t]=V.useState({regResults:[],cryptoResults:[]}),[r,n]=V.useState({regChartData:[],cryptoChartData:[]}),[i,a]=V.useState(!1),[o,u]=V.useState([]),l=rS(e.regResults,o),s=rS(e.cryptoResults,o),f=nS(l),c=nS(s);return X.jsxs(ube,{children:[X.jsx(ZV,{}),X.jsx(WC,{setResults:t,setChartData:n,setExpected:u,setIsRolling:a,results:e,isRolling:i}),i&&X.jsx(eP,{}),!i&&((d=e.regResults)==null?void 0:d.length)>0&&X.jsxs(lbe,{children:[X.jsx(nx,{chartData:r.regChartData,avgPandChi:f,expected:o,children:"Standard Random Method"}),X.jsx(nx,{chartData:r.cryptoChartData,avgPandChi:c,expected:o,children:"Cryptographicly Secure Method"})]}),X.jsx(XV,{})]})}k0.createRoot(document.getElementById("root")).render(X.jsx(x.StrictMode,{children:X.jsx(Ch.Provider,{value:{style:{verticalAlign:"middle"}},children:X.jsx(sbe,{})})}));
