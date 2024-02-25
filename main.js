(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var n={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"1fb88d22-b3e4-4983-a58b-4f7fd3e4978b","Content-Type":"application/json"}};function r(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return fetch("".concat(n.baseUrl,"/").concat(r),function(n){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){var r,c,i,u;r=n,c=e,i=o[e],u=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(c),(c="symbol"==t(u)?u:String(u))in r?Object.defineProperty(r,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[c]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}({method:o,headers:n.headers},c)).then((function(t){return function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}(t)}))}function o(t){return r("cards/likes/".concat(t),"PUT")}function c(t){return r("cards/likes/".concat(t),"DELETE")}function i(t){var e;(e=t.target.closest(".card").dataset.id,r("cards/".concat(e),"DELETE")).then((function(){t.target.closest(".card").remove()})).catch((function(t){console.log(t)}))}function u(t,e,n,r){return(r?c:o)(e.dataset.id).then((function(e){return t.target.classList.toggle("card__like-button_is-active"),n.textContent=e.likes.length,r=!r})).catch((function(t){console.log(t)}))}function a(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",s)}function l(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s)}function s(t){"Escape"===t.key&&l(document.querySelector(".popup_is-opened"))}function p(t,e,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function d(t,e,n){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(n.inactiveButtonClass)):(e.disabled=!0,e.classList.add(n.inactiveButtonClass))}function f(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);t.reset(),d(n,r,e),n.forEach((function(n){p(t,n,e)}))}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};!function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);d(n,r,e),n.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?p(t,e,n):function(t,e,n,r){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(t,e,n,e.validationMessage)}(t,o,e),d(n,r,e)}))}))}(e,t)}))}(m),Promise.all([r("users/me").catch((function(t){console.log(t)})),r("cards").catch((function(t){console.log(t)}))]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,c,i,u=[],a=!0,l=!1;try{if(c=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(u.push(r.value),u.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];v=o.avatar,O.style.backgroundImage="url(".concat(o.avatar,")"),S.textContent=o.name,g.textContent=o.about,c.forEach((function(t){b.append(D(t,o._id))}))})).catch((function(t){console.log(t)}));var v,b=document.querySelector(".places__list"),_=document.querySelectorAll(".popup"),S=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),h=document.querySelector(".profile__edit-button"),E=document.querySelector(".popup_type_edit"),q=document.forms["edit-profile"],C=document.querySelector(".profile__add-button"),k=document.querySelector(".popup_type_new-card"),L=document.forms["new-place"],O=document.querySelector(".profile__image"),j=document.querySelector(".popup_type_profile-image"),w=document.forms["profile-image"],A=document.querySelector(".popup_type_image"),P=A.querySelector(".popup__image"),x=A.querySelector(".popup__caption"),T=function(t,e){e.textContent=t?"Сохранение...":"Сохранить"};function D(t,e){return function(t){var e=t.cardObject,n=t.userId,r=t.functionList,o=document.querySelector("#card-template").content,c=document.createElement("button");c.setAttribute("type","button"),c.setAttribute("class","card__delete-button");var i=o.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__image"),a=i.querySelector(".card__title"),l=i.querySelector(".card__like-button"),s=i.querySelector(".card__like-counter"),p=e.owner._id===n,d=e.likes.some((function(t){return t._id===n}));return i.setAttribute("data-id",e._id),d&&l.classList.add("card__like-button_is-active"),p&&(i.append(c),c.addEventListener("click",r.removeCard)),a.textContent=e.name,u.src=e.link,u.alt=e.name,s.textContent=e.likes.length,l.addEventListener("click",(function(t){r.likedCard(t,i,s,d).then((function(t){d=t})).catch((function(t){console.log(t)}))})),u.addEventListener("click",(function(){return r.openPopupCard(e.name,e.link)})),i}({cardObject:t,userId:e,functionList:{openPopupCard:I,removeCard:i,likedCard:u}})}function I(t,e){P.setAttribute("src",e),P.setAttribute("alt",t),x.textContent=t,a(A)}h.addEventListener("click",(function(){q.name.value=S.textContent,q.description.value=g.textContent,f(q,m),a(E)})),O.addEventListener("click",(function(){w["profile-link"].value=v,f(w,m),a(j)})),C.addEventListener("click",(function(){L.reset(),f(L,m),a(k)})),_.forEach((function(t){t.classList.add("popup_is-animated");var e=t.querySelector(".popup__close"),n=t.querySelector(".popup__content");t.addEventListener("click",(function(){return l(t)})),e.addEventListener("click",(function(){return l(t)})),n.addEventListener("click",(function(t){return t.stopPropagation()}))})),q.addEventListener("submit",(function(t){t.preventDefault(),T(!0,q.querySelector(".popup__button")),function(t,e){return r("users/me","PATCH",{body:JSON.stringify({name:t,about:e})})}(q.name.value,q.description.value).then((function(t){S.textContent=t.name,g.textContent=t.about})).catch((function(t){console.log(t)})).finally((function(){T(!1,q.querySelector(".popup__button"))})),l(E)})),L.addEventListener("submit",(function(t){var e,n;t.preventDefault(),T(!0,L.querySelector(".popup__button")),(e=L["place-name"].value,n=L.link.value,r("cards","POST",{body:JSON.stringify({name:e,link:n})})).then((function(t){b.prepend(D(t,t.owner._id))})).catch((function(t){console.log(t)})).finally((function(){T(!1,L.querySelector(".popup__button"))})),l(k)})),w.addEventListener("submit",(function(t){var e;t.preventDefault(),T(!0,w.querySelector(".popup__button")),(e=w["profile-link"].value,r("users/me/avatar","PATCH",{body:JSON.stringify({avatar:e})})).then((function(t){O.style.backgroundImage="url(".concat(t.avatar,")")})).catch((function(t){console.log(t)})).finally((function(){T(!1,w.querySelector(".popup__button"))})),l(j)}))})();