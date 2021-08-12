(()=>{"use strict";var t,e={800:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,i){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,i)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=r(t);if(e){var s=r(this).constructor;i=Reflect.construct(o,arguments,s)}else i=o.apply(this,arguments);return n(this,i)}}function n(e,i){if(i&&("object"===t(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,i){return e&&u(t.prototype,e),i&&u(t,i),t}var l=new(function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&e(t,i)}(r,t);var n=i(r);function r(){return a(this,r),n.apply(this,arguments)}return c(r,[{key:"addArrows",value:function(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowsEvents()}},{key:"addArrowsEvents",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.prevElement.addEventListener("touchstart",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide),this.nextElement.addEventListener("touchstart",this.activeNextSlide)}}]),r}(function(){function t(e,i){a(this,t),this.slide=document.querySelector(e),this.wrapper=document.querySelector(i),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active"}return c(t,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .4s":""}},{key:"moveSlide",value:function(t){this.dist.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0px, 0px)")}},{key:"updatePosition",value:function(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"onMove",value:function(t){var e="touchmove"===t.type?t.changedTouches[0].clientX:t.clientX,i=this.updatePosition(e);this.moveSlide(i)}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slideConfig",value:function(){var t=this;return this.slideArray=o(this.slide.children).map((function(e,i){return{position:t.slidePosition(e),element:e}})),this.slideArray}},{key:"slideIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}},{key:"changeSlide",value:function(t){var e=this.slideArray[t];this.dist.finalPosition=e.position,this.moveSlide(e.position),this.slideIndexNav(t),this.changeActiveClass()}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"changeActiveClass",value:function(){var t=this;this.slideArray.forEach((function(e){e.element.classList.remove(t.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){var t=this;setTimeout((function(){t.slideConfig(),t.transition(!0),t.changeSlide(t.index.active)}),250)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){var t,e,i;this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize=(t=this.onResize.bind(this),e=100,function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];i&&clearTimeout(i),i=setTimeout((function(){t.apply(void 0,r),i=null}),e)})}},{key:"init",value:function(){return this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slideConfig(),this.changeSlide(2),this.addResizeEvent(),this}}]),t}()))(".slide",".slide-wrapper");l.init(),l.addArrows(".arrow-nav .prev",".arrow-nav .next")},562:()=>{}},i={};function n(t){var r=i[t];if(void 0!==r)return r.exports;var o=i[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.m=e,t=[],n.O=(e,i,r,o)=>{if(!i){var s=1/0;for(l=0;l<t.length;l++){for(var[i,r,o]=t[l],a=!0,u=0;u<i.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((t=>n.O[t](i[u])))?i.splice(u--,1):(a=!1,o<s&&(s=o));if(a){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,r,o]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={587:0,384:0};n.O.j=e=>0===t[e];var e=(e,i)=>{var r,o,[s,a,u]=i,c=0;for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var l=u(n);for(e&&e(i);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[s[c]]=0;return n.O(l)},i=self.webpackChunkprojeto_slide=self.webpackChunkprojeto_slide||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})(),n.O(void 0,[384],(()=>n(800)));var r=n.O(void 0,[384],(()=>n(562)));r=n.O(r)})();