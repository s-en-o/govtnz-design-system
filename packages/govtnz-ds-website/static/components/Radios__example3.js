!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.id,r=e.hintId,n=e.disabled,o=e.readOnly,l=e.autoFocus,i=e.name,u=e.value,c=e.checked,d=e.onChange,f=e.ref,s=e.label,m=e.hint;return a.default.createElement("div",{className:"g-radios__item"},a.default.createElement("input",{"aria-describedby":r,className:"g-radios__input",id:t,name:i,type:"radio",disabled:void 0!==n?"true"===n.toString():void 0,readOnly:o,autoFocus:l,value:u,checked:c,onChange:d,ref:f}),a.default.createElement("label",{className:"g-radios__label",htmlFor:t},void 0!==s?s:a.default.createElement(a.default.Fragment,null,"Label text")),void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-radios__hint",id:r},void 0!==m?m:a.default.createElement(a.default.Fragment,null,"Hint text"))):"")}},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.hintId,n=e.legend,o=e.hint,l=e.error,i=e.children;return a.default.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.default.createElement("fieldset",{"aria-describedby":void 0!==r||void 0!==t?(r||"")+(t?" "+t:""):void 0,className:"g-fieldsetBlock-fieldset"},a.default.createElement("legend",{className:"g-fieldsetBlock-fieldset__legend"},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Legend text")),void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-hint",id:r},void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Hint text"))):"",void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.default.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==l?l:a.default.createElement(a.default.Fragment,null,"Error text"))):"",a.default.createElement("div",null,void 0!==i?i:a.default.createElement(a.default.Fragment,null,"Fieldset contents"))))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),o={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom8,n=e.marginBottom0,l=e.id,i=e.children;return a.default.createElement("h1",{className:"g-heading"+(void 0!==o[t]?" "+o[t]:"")+(r?" g-heading-mb-8":"")+(n?" g-heading-mb-0":""),id:l},void 0!==i?i:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),l=r.n(o),i=r(3),u=r.n(i),c=r(4),d=r.n(c),f=r(1),s=r.n(f);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t,r){return t&&O(e.prototype,t),r&&O(e,r),e}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=I(e);if(t){var a=I(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return w(this,r)}}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var C=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},F=function(e){return a.a.createElement(C,P({title:"Example: Radio button items with hints"},N({})),a.a.createElement(u.a,P({legend:a.a.createElement(d.a,{styleSize:"large",id:"providerChoiceTitle1"},"Choose one provider"),hint:a.a.createElement("p",null,"Select one provider."),hintId:"hintId"},N({})),a.a.createElement(s.a,P({label:"Sign in with Aardvark services",hint:"North Island only",hintId:"someHintId7",id:"anyRadioId7234",name:"providerChoice3",value:"provider1",labelId:"labelId5"},N({value:"provider1"}))),a.a.createElement(s.a,P({label:"Sign in with Bumblebee services",hint:"North and South Island",hintId:"someHintId8",id:"anyRadioId8234",name:"providerChoice3",value:"provider2",labelId:"labelId8"},N({value:"provider2"}))),a.a.createElement(s.a,P({label:"Sign in with Caterpillar company",hint:"All new Zealand territories",hintId:"someHintId7234",id:"anyRadioId9f",name:"providerChoice3",value:"provider3",labelId:"labelId9"},N({value:"provider3"})))))},M=a.a.createContext(void 0),N=(n.Component,a.a.Component,a.a.Component,function(e){var t=m(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],o=m(Object(n.useState)(e&&e.value2),2),l=o[0],i=o[1],u=m(Object(n.useState)(e&&e.value3),2),c=u[0],d=u[1];return{value:r,value2:l,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return d(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?l.a.hydrate(a.a.createElement(F,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);