!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(1),a=n.n(u),l={level:{secondary:"g-button--secondary",warning:"g-button--warning"},type:{Submit:"submit",Reset:"reset",Button:"button"}},i=function(e){var t=e.disabled,n=e.level,o=e.name,u=e.type,a=e.onClick,i=e.children;return r.createElement("button",{className:"g-button".concat(t?" g-button--disabled":"").concat(void 0!==l.level[n]?" "+l.level[n]:""),disabled:t,type:l.type[u],name:o,onClick:a},void 0!==i?i:r.createElement(r.Fragment,null,"Example text"))};function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=function(e){var t=e.children;return o.a.createElement(r.Fragment,null,t)},s=function(e){return o.a.createElement(d,v({}),o.a.createElement(i,f({disabled:!0},v({})),"Save and continue"))},v=function(e){var t=c(Object(r.useState)(e&&e.value),2),n=t[0],o=t[1],u=c(Object(r.useState)(e&&e.value2),2),a=u[0],l=u[1],i=c(Object(r.useState)(e&&e.value3),2),f=i[0],d=i[1];return{value:n,value2:a,value3:f,onChange:function(e){return o(e.target.value)},onChange2:function(e){return l(e.target.value)},onChange3:function(e){return d(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?a.a.hydrate(o.a.createElement(s,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);