(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{162:function(t,n,e){},180:function(t,n,e){var i=e(2);i(i.P,"Array",{fill:e(181)}),e(88)("fill")},181:function(t,n,e){"use strict";var i=e(21),a=e(87),o=e(50);t.exports=function(t){for(var n=i(this),e=o(n.length),r=arguments.length,s=a(r>1?arguments[1]:void 0,e),c=r>2?arguments[2]:void 0,d=void 0===c?e:a(c,e);d>s;)n[s++]=t;return n}},182:function(t,n,e){"use strict";var i=e(162);e.n(i).a},193:function(t,n,e){"use strict";e.r(n);e(180);var i={data:function(){return{}},mounted:function(){this.animationFrame(),this.init()},methods:{animationFrame:function(){for(var t=0,n=["ms","moz","webkit","o"],e=0;e<n.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[n[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[e]+"CancelAnimationFrame"]||window[n[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,e){var i=(new Date).getTime(),a=Math.max(0,16-(i-t)),o=window.setTimeout(function(){n(i+a)},a);return t=i+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})},init:function(){var t,n,e,i,a,o,r=!0;function s(){r=!(document.body.scrollTop>n)}function c(){t=window.innerWidth,n=document.documentElement.clientHeight/2,e.style.height=n+"px",i.width=t,i.height=n}function d(){if(r)for(var e in a.clearRect(0,0,t,n),o)o[e].draw();requestAnimationFrame(d)}function l(){var e=this;function i(){e.pos.x=Math.random()*t,e.pos.y=n+100*Math.random(),e.alpha=.1+.3*Math.random(),e.scale=.1+.3*Math.random(),e.velocity=Math.random()}e.pos={},i(),this.draw=function(){e.alpha<=0&&i(),e.pos.y-=e.velocity,e.alpha-=5e-4,a.beginPath(),a.arc(e.pos.x,e.pos.y,10*e.scale,0,2*Math.PI,!1),a.fillStyle="rgba(255,255,255,"+e.alpha+")",a.fill()}}!function(){t=window.innerWidth,n=document.documentElement.clientHeight/2,{x:0,y:n},(e=document.getElementById("large-header")).style.height=n+"px",(i=document.getElementById("cvs")).width=t,i.height=n,a=i.getContext("2d"),o=[];for(var r=0;r<.5*t;r++){var s=new l;o.push(s)}d()}(),window.addEventListener("scroll",s),window.addEventListener("resize",c)}}},a=(e(182),e(0)),o=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[[this._m(0)]],2)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"cont"},[n("div",{staticClass:"large-header",attrs:{id:"large-header"}},[n("canvas",{attrs:{id:"cvs"}}),this._v(" "),n("div",{staticClass:"add_info"},[n("p",[this._v("这雨，出生于天，死于大地。中间的过程，便是一生。我之所以看这雨水，不看天，不看地，看的也不是雨。而是这雨的一生......这便是生与死。")])])])])}],!1,null,null,null);o.options.__file="README.md";n.default=o.exports}}]);