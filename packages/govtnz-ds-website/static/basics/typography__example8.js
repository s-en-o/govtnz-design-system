!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(1),o=n.n(l),u={styleSize:{large:"g-p-body-l",medium:"g-p-body-m",small:"g-p-body-s","x-small":"g-p-body-xs"}},i=function(e){var t=e.styleSize,n=e.children;return r.createElement("p",{className:void 0!==u.styleSize[t]?u.styleSize[t]:""},void 0!==n?n:r.createElement(r.Fragment,null,"Example text"))},c=function(e){var t=e.bulleted,n=e.children;return r.createElement("ul",{className:"g-ul-list".concat(t?" g-ul-list--bullet":"")},void 0!==n?n:r.createElement(r.Fragment,null,"Example text"))},f=function(e){var t=e.children;return r.createElement("li",null,void 0!==t?t:r.createElement(r.Fragment,null,"Example text"))};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},p=function(e){return a.a.createElement(m,v({}),a.a.createElement(i,d({styleSize:"medium"},v({})),"To help keep the kitchen clean, please:"),a.a.createElement(c,d({bulleted:!0},v({})),a.a.createElement(f,v({}),"replace tea and coffee jars on shelf"),a.a.createElement(f,v({}),"wipe down bench"),a.a.createElement(f,v({}),"wash dishes by: ",a.a.createElement(c,d({bulleted:!0},v({})),a.a.createElement(f,v({}),"loading the dishwasher, if it's empty"),a.a.createElement(f,v({}),"rinsing and stacking, if dishwasher is going"))),a.a.createElement(f,v({}),"put recycling in labelled bins")))},v=function(e){var t=s(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],l=s(Object(r.useState)(e&&e.value2),2),o=l[0],u=l[1],i=s(Object(r.useState)(e&&e.value3),2),c=i[0],f=i[1];return{value:n,value2:o,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return f(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(p,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);