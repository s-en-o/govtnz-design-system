!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r){e.exports=React},function(e,r){e.exports=ReactDOM},function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(1),l=t.n(o),i=function(e){var r=e.fileUpload1,t=e.name,a=e.disabled,o=e.readOnly,l=e.autoFocus;return n.createElement("div",{className:"g-fileUpload-form-group"},n.createElement("label",{className:"g-fileUpload-label",htmlFor:r},"Upload a file"),n.createElement("input",{className:"g-file-upload",id:r,name:t,type:"file",disabled:a,readOnly:o,autoFocus:l}))},u=function(e){var r=e.fileUpload3,t=e.fileUpload3Hint,a=e.fileUpload3Error,o=e.name,l=e.disabled,i=e.readOnly,u=e.autoFocus;return n.createElement("div",{className:"g-fileUploadWithErrorMessage-form-group g-fileUploadWithErrorMessage-form-group--error"},n.createElement("label",{className:"g-fileUploadWithErrorMessage-label",htmlFor:r},"Upload a file"),n.createElement("span",{className:"g-fileUploadWithErrorMessage-hint",id:t},"Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."),n.createElement("span",{className:"g-fileUploadWithErrorMessage-error-message",id:a},"Error message goes here"),n.createElement("input",{"aria-describedby":void 0!==t||void 0!==a?"".concat(t||"").concat(a?" "+a:""):void 0,className:"g-fileUploadWithErrorMessage-file-upload g-fileUploadWithErrorMessage-file-upload--error",id:r,name:o,type:"file",disabled:l,readOnly:i,autoFocus:u}))};function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(e){var r=e.children;return a.a.createElement(n.Fragment,null,r)},s=function(e){return a.a.createElement(d,f({}),a.a.createElement(i,f({})),a.a.createElement(u,f({})))},f=function(e){var r=c(Object(n.useState)(e&&e.value),2),t=r[0],a=r[1],o=c(Object(n.useState)(e&&e.value2),2),l=o[0],i=o[1],u=c(Object(n.useState)(e&&e.value3),2),d=u[0],s=u[1];return{value:t,value2:l,value3:d,onChange:function(e){return a(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return s(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?l.a.hydrate(a.a.createElement(s,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);