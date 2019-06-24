!function(e){var a={};function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)r.d(t,n,function(a){return e[a]}.bind(null,n));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="",r(r.s=2)}([function(e,a){e.exports=React},function(e,a){e.exports=ReactDOM},function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(1),i=r.n(o),d={autoComplete:{Off:"off",On:"on",Name:"name","Honorific: Prefix":"honorific-prefix","Given Name":"given-name","Additional Name":"additional-name","Family Name":"family-name","Honorific: Suffix":"honorific-suffix",Nickname:"nickname",Email:"email",Username:"username","New Password":"new-password","Current Password":"current-password","Organization Title":"organization-title",Organization:"organization","Street Address":"street-address","Address Line 1":"address-line1","Address Line 2":"address-line2","Address Line 3":"address-line3","Address Level 4":"address-level4","Address Level 3":"address-level3","Address Level 2":"address-level2","Address Level 1":"address-level1",Country:"country","Country Name":"country-name","Postal Code":"postal-code","Credit Card: Name":"cc-name","Credit Card: Given Name":"cc-given-name","Credit Card: Additional Name":"cc-additional-name","Credit Card: Family Name":"cc-family-name","Credit Card: Number":"cc-number","Credit Card: Expiry":"cc-exp","Credit Card: Expiry Month":"cc-exp-month","Credit Card: Expiry Year":"cc-exp-year","Credit Card: CSC":"cc-csc","Credit Card: Type":"cc-type","Transaction: Currency":"transaction-currency","Transaction: Amount":"transaction-amount",Language:"language",Birthday:"bday","Birthday: Day":"bday-day","Birthday: Month":"bday-month","Birthday: Year":"bday-year",Sex:"sex",Telephone:"tel","Telephone: Country Code":"tel-country-code","Telephone: National":"tel-national","Telephone: Area Code":"tel-area-code","Telephone: Local":"tel-local","Telephone: Extension":"tel-extension",IMPP:"impp",URL:"url",Photo:"photo"}},l=function(e){var a=e.moreDetail,r=e.moreDetailHint,n=e.name,o=e.disabled,i=e.readOnly,l=e.rows,s=e.cols,c=e.autoFocus,u=e.spellCheck,m=e.autoComplete,C=e.maxLength,y=e.value,p=e.onChange;return t.createElement("div",{className:"g-textarea-form-group"},t.createElement("label",{className:"g-textarea-label",htmlFor:a},"Can you provide more detail?"),t.createElement("span",{className:"g-textarea-hint",id:r},"Don't include personal or financial information, eg your National Insurance number or credit card details."),t.createElement("textarea",{"aria-describedby":r,className:"g-textarea",id:a,name:n,rows:l,disabled:o,readOnly:i,cols:s,autoFocus:c,spellCheck:u,autoComplete:d.autoComplete[m],maxLength:C,value:y,onChange:p}))},s={autoComplete:{Off:"off",On:"on",Name:"name","Honorific: Prefix":"honorific-prefix","Given Name":"given-name","Additional Name":"additional-name","Family Name":"family-name","Honorific: Suffix":"honorific-suffix",Nickname:"nickname",Email:"email",Username:"username","New Password":"new-password","Current Password":"current-password","Organization Title":"organization-title",Organization:"organization","Street Address":"street-address","Address Line 1":"address-line1","Address Line 2":"address-line2","Address Line 3":"address-line3","Address Level 4":"address-level4","Address Level 3":"address-level3","Address Level 2":"address-level2","Address Level 1":"address-level1",Country:"country","Country Name":"country-name","Postal Code":"postal-code","Credit Card: Name":"cc-name","Credit Card: Given Name":"cc-given-name","Credit Card: Additional Name":"cc-additional-name","Credit Card: Family Name":"cc-family-name","Credit Card: Number":"cc-number","Credit Card: Expiry":"cc-exp","Credit Card: Expiry Month":"cc-exp-month","Credit Card: Expiry Year":"cc-exp-year","Credit Card: CSC":"cc-csc","Credit Card: Type":"cc-type","Transaction: Currency":"transaction-currency","Transaction: Amount":"transaction-amount",Language:"language",Birthday:"bday","Birthday: Day":"bday-day","Birthday: Month":"bday-month","Birthday: Year":"bday-year",Sex:"sex",Telephone:"tel","Telephone: Country Code":"tel-country-code","Telephone: National":"tel-national","Telephone: Area Code":"tel-area-code","Telephone: Local":"tel-local","Telephone: Extension":"tel-extension",IMPP:"impp",URL:"url",Photo:"photo"}},c=function(e){var a=e.fullAddress,r=e.name,n=e.disabled,o=e.readOnly,i=e.rows,d=e.cols,l=e.autoFocus,c=e.spellCheck,u=e.autoComplete,m=e.maxLength,C=e.value,y=e.onChange;return t.createElement("div",{className:"g-textareaWithCustomRows-form-group"},t.createElement("label",{className:"g-textareaWithCustomRows-label",htmlFor:a},"Full address"),t.createElement("textarea",{className:"g-textareaWithCustomRows-textarea",id:a,name:r,rows:i,disabled:n,readOnly:o,cols:d,autoFocus:l,spellCheck:c,autoComplete:s.autoComplete[u],maxLength:m,value:C,onChange:y}))},u={autoComplete:{Off:"off",On:"on",Name:"name","Honorific: Prefix":"honorific-prefix","Given Name":"given-name","Additional Name":"additional-name","Family Name":"family-name","Honorific: Suffix":"honorific-suffix",Nickname:"nickname",Email:"email",Username:"username","New Password":"new-password","Current Password":"current-password","Organization Title":"organization-title",Organization:"organization","Street Address":"street-address","Address Line 1":"address-line1","Address Line 2":"address-line2","Address Line 3":"address-line3","Address Level 4":"address-level4","Address Level 3":"address-level3","Address Level 2":"address-level2","Address Level 1":"address-level1",Country:"country","Country Name":"country-name","Postal Code":"postal-code","Credit Card: Name":"cc-name","Credit Card: Given Name":"cc-given-name","Credit Card: Additional Name":"cc-additional-name","Credit Card: Family Name":"cc-family-name","Credit Card: Number":"cc-number","Credit Card: Expiry":"cc-exp","Credit Card: Expiry Month":"cc-exp-month","Credit Card: Expiry Year":"cc-exp-year","Credit Card: CSC":"cc-csc","Credit Card: Type":"cc-type","Transaction: Currency":"transaction-currency","Transaction: Amount":"transaction-amount",Language:"language",Birthday:"bday","Birthday: Day":"bday-day","Birthday: Month":"bday-month","Birthday: Year":"bday-year",Sex:"sex",Telephone:"tel","Telephone: Country Code":"tel-country-code","Telephone: National":"tel-national","Telephone: Area Code":"tel-area-code","Telephone: Local":"tel-local","Telephone: Extension":"tel-extension",IMPP:"impp",URL:"url",Photo:"photo"}},m=function(e){var a=e.noNiReason,r=e.noNiReasonError,n=e.name,o=e.disabled,i=e.readOnly,d=e.rows,l=e.cols,s=e.autoFocus,c=e.spellCheck,m=e.autoComplete,C=e.maxLength,y=e.value,p=e.onChange;return t.createElement("div",{className:"g-textareaWithErrorMessage-form-group g-textareaWithErrorMessage-form-group--error"},t.createElement("label",{className:"g-textareaWithErrorMessage-label",htmlFor:a},"Why can't you provide a National Insurance number?"),t.createElement("span",{className:"g-textareaWithErrorMessage-error-message",id:r},"You must provide an explanation"),t.createElement("textarea",{"aria-describedby":r,className:"g-textareaWithErrorMessage-textarea g-textareaWithErrorMessage-textarea--error",id:a,name:n,rows:d,disabled:o,readOnly:i,cols:l,autoFocus:s,spellCheck:c,autoComplete:u.autoComplete[m],maxLength:C,value:y,onChange:p}))};function C(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var r=[],t=!0,n=!1,o=void 0;try{for(var i,d=e[Symbol.iterator]();!(t=(i=d.next()).done)&&(r.push(i.value),!a||r.length!==a);t=!0);}catch(e){n=!0,o=e}finally{try{t||null==d.return||d.return()}finally{if(n)throw o}}return r}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(e){var a=e.children;return n.a.createElement(t.Fragment,null,a)},p=function(e){return n.a.createElement(y,f({}),n.a.createElement(l,f({})),n.a.createElement(c,f({})),n.a.createElement(m,f({})))},f=function(e){var a=C(Object(t.useState)(e&&e.value),2),r=a[0],n=a[1],o=C(Object(t.useState)(e&&e.value2),2),i=o[0],d=o[1],l=C(Object(t.useState)(e&&e.value3),2),s=l[0],c=l[1];return{value:r,value2:i,value3:s,onChange:function(e){return n(e.target.value)},onChange2:function(e){return d(e.target.value)},onChange3:function(e){return c(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?i.a.hydrate(n.a.createElement(p,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);