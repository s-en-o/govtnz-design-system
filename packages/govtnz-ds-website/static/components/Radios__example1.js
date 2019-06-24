!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(1),o=n.n(l),i=function(e){var t=e.hintId,n=e.errorId,a=e.legend,l=e.hint,o=e.error,i=e.children;return r.createElement("div",{className:"g-fieldsetBlockWithError-form-group g-fieldsetBlockWithError-form-group--error"},r.createElement("fieldset",{"aria-describedby":void 0!==t||void 0!==n?"".concat(t||"").concat(n?" "+n:""):void 0,className:"g-fieldset"},r.createElement("legend",{className:"g-fieldset__legend"},void 0!==a?a:r.createElement(r.Fragment,null,"Legend text")),r.createElement("div",{className:"g-fieldsetBlockWithError-hint",id:t},void 0!==l?l:r.createElement(r.Fragment,null,"Hint text")),r.createElement("div",{className:"g-fieldsetBlockWithError-error-message",id:n},r.createElement("span",{className:"g-fieldsetBlockWithError-visually-hidden"},"Error:"," "),void 0!==o?o:r.createElement(r.Fragment,null,"Error text")),r.createElement("div",{className:"g-fieldsetBlockWithError-children"},void 0!==i?i:r.createElement(r.Fragment,null,"Fieldset contents"))))},c={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},d=function(e){var t=e.styleSize,n=e.marginBottom8,a=e.id,l=e.children;return r.createElement("h1",{className:"".concat(void 0!==c.styleSize[t]?c.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:a},void 0!==l?l:r.createElement(r.Fragment,null,"Example text"))},u=function(e){var t=e.inline,n=e.children;return r.createElement("div",{className:"g-radios".concat(t?" g-radios--inline":"")},void 0!==n?n:r.createElement(r.Fragment,null,"Radio components"))},s=function(e){var t=e.fakeFocus,n=e.radioId,a=e.hintId,l=e.name,o=e.disabled,i=e.readOnly,c=e.autoFocus,d=e.value,u=e.checked,s=e.onChange,m=e.label;return r.createElement("div",{className:"g-radios__item"},r.createElement("input",{"aria-describedby":a,className:"g-radios__input".concat(t?" :focus":""),id:n,name:l,type:"radio",disabled:o,readOnly:i,autoFocus:c,value:d,checked:u,onChange:s}),r.createElement("label",{className:"g-radios-label g-radios__label",htmlFor:n},void 0!==m?m:r.createElement(r.Fragment,null,"Label text")))};function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},v=function(e){return a.a.createElement(f,h({}),a.a.createElement(i,g({legend:a.a.createElement(d,{styleSize:"large",id:"nameChangeId5"},"Have you changed your name?"),hint:a.a.createElement("p",null,"This includes changing your last name or spelling your name differently."),hintId:"hintId5",errorId:"errorId5",error:"Select 'yes' if you have changed your name."},h({})),a.a.createElement(u,g({inline:!0},h({})),a.a.createElement(s,g({label:"Yes",radioId:"anyRadioId9234",value:"true",name:"nameChange5",labelId:"labelId9",hintId:"hintId5"},h({value:"true"}))),a.a.createElement(s,g({label:"No",radioId:"anyRadioId10",value:"false",name:"nameChange5",hintId:"hintId5",labelId:"labelId10"},h({value:"false"}))))))},h=function(e){var t=m(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],l=m(Object(r.useState)(e&&e.value2),2),o=l[0],i=l[1],c=m(Object(r.useState)(e&&e.value3),2),d=c[0],u=c[1];return{value:n,value2:o,value3:d,onChange:function(e){return a(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return u(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(v,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);