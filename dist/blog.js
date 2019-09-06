"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}function _arrayWithHoles(e){if(Array.isArray(e))return e}function asyncGeneratorStep(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function _asyncToGenerator(s){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=s.apply(e,i);function a(e){asyncGeneratorStep(r,t,n,a,o,"next",e)}function o(e){asyncGeneratorStep(r,t,n,a,o,"throw",e)}a(void 0)})}}var api="https://us-central1-open-classrooms-js-for-the-web.cloudfunctions.net/widgets",loadButton=document.getElementById("load-button");function getRequest(r){return new Promise(function(e,t){var n=new XMLHttpRequest;n.open("GET",r),n.onreadystatechange=function(){4===n.readyState&&(200!==n.status&&t(JSON.parse(n.response)),e(JSON.parse(n.response)))},n.send()})}function getBlogPost(){return _getBlogPost.apply(this,arguments)}function _getBlogPost(){return(_getBlogPost=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=getRequest(api+"/generate-title"),n=getRequest(api+"/generate-lorem"),e.prev=2,e.next=5,Promise.all([t,n]);case 5:r=e.sent,a=_slicedToArray(r,2),o=a[0],i=a[1],document.querySelector("main").appendChild(buildPostElement(o.title,i.lorem)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),document.querySelector("main").appendChild(buildPostElement("An error occurred!",e.t0));case 15:case"end":return e.stop()}},e,null,[[2,12]])}))).apply(this,arguments)}function buildPostElement(e,t){var n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("h2"),o=document.createElement("p");return n.classList.add("card"),r.classList.add("card-body"),a.classList.add("card-title"),o.classList.add("card-text"),a.textContent=e,o.textContent=t,r.appendChild(a),r.appendChild(o),n.appendChild(r),n}loadButton.addEventListener("click",_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:getBlogPost();case 1:case"end":return e.stop()}},e)})));