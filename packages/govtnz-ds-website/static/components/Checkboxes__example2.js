!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(1),i=n.n(l),o=function(e){var t=e.hintId,n=e.legend,a=e.hint,l=e.children;return r.createElement("div",{className:"g-fieldsetBlock-form-group"},r.createElement("fieldset",{"aria-describedby":t,className:"g-fieldset"},r.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:r.createElement(r.Fragment,null,"Legend text")),void 0!==t?r.createElement(r.Fragment,null,r.createElement("div",{className:"g-fieldsetBlock-hint",id:t},void 0!==a?a:r.createElement(r.Fragment,null,"Hint text"))):"",r.createElement("div",null,void 0!==l?l:r.createElement(r.Fragment,null,"Fieldset contents"))))},c={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},u=function(e){var t=e.styleSize,n=e.marginBottom8,a=e.id,l=e.children;return r.createElement("h1",{className:"".concat(void 0!==c.styleSize[t]?c.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:a},void 0!==l?l:r.createElement(r.Fragment,null,"Example text"))},d=function(e){var t=e.fakeFocus,n=e.checkboxId,a=e.hintId,l=e.name,i=e.disabled,o=e.readOnly,c=e.autoFocus,u=e.value,d=e.checked,s=e.onChange,m=e.label,v=e.hint;return r.createElement("div",{className:"g-checkboxes__item"},r.createElement("input",{"aria-describedby":a,className:"g-checkboxes__input".concat(t?" :focus":""),id:n,type:"checkbox",name:l,disabled:i,readOnly:o,autoFocus:c,value:u,checked:d,onChange:s}),r.createElement("label",{className:"g-checkboxBlock-label g-checkboxes__label",htmlFor:n},void 0!==m?m:r.createElement(r.Fragment,null,"Label text")),void 0!==a?r.createElement(r.Fragment,null,r.createElement("div",{className:"g-checkboxBlock-hint g-checkboxes__hint",id:a},void 0!==v?v:r.createElement(r.Fragment,null,"Hint text"))):"")};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},h=function(e){return a.a.createElement(v,f({}),a.a.createElement(o,m({legend:a.a.createElement(u,{styleSize:"large",id:"providerChoiceTitle3",marginBottom8:!0},"Who are your providers?"),hint:a.a.createElement("p",null,"Select all that apply."),hintId:"hintId3"},f({})),a.a.createElement(d,m({label:"Aardvark Access",checkboxId:"anyCheckboxId31",value:"provider1",name:"providerChoice3",labelId:"labelId31",hintId:"hintId31",hint:"Aardvark Access provides internet"},f({value:"provider1"}))),a.a.createElement(d,m({label:"Bumblebee Business",checkboxId:"anyCheckboxId32",value:"provider2",name:"providerChoice3",labelId:"labelId32",hintId:"hintId32",hint:"Bumblebee Business provides electricity"},f({value:"provider2"}))),a.a.createElement(d,m({label:"Caterpillar Company",checkboxId:"anyCheckboxId33",value:"provider3",name:"providerChoice3",labelId:"labelId33",hintId:"hintId33",hint:"Caterpillar Company provides telephone"},f({value:"provider3"})))))},f=function(e){var t=s(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],l=s(Object(r.useState)(e&&e.value2),2),i=l[0],o=l[1],c=s(Object(r.useState)(e&&e.value3),2),u=c[0],d=c[1];return{value:n,value2:i,value3:u,onChange:function(e){return a(e.target.value)},onChange2:function(e){return o(e.target.value)},onChange3:function(e){return d(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?i.a.hydrate(a.a.createElement(h,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);