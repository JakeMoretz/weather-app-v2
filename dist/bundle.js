(()=>{"use strict";var n,e,t,r,o,a,i,s,c,p,d,u,l,f,h={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;400&family=Montserrat&family=Oooh+Baby&family=Poppins:ital,wght@0,400;1,900&family=Roboto:ital,wght@1,300&display=swap);"]),i.push([n.id,"\n* {\n    font-family: 'Roboto', sans-serif;\n    color: white;\n}\n\nbody {\n    background-color: black;\n    margin: 0;\n    display: grid;\n    height: 100vh;\n    place-items: center;\n}\n\n.card {\n    background: #136a8a;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to bottom, #267871, #136a8a);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to bottom, #267871, #136a8a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    \n    height: 600px;\n    width: 400px;\n    border-radius: 30px;\n    padding: 20px;\n}\n\n.search {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    height: 50px;\n}\n\n.search input {\n    \n    width: 80%;\n    text-align: center;\n    border-radius: 30px;\n    font-size: 1.5em;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.search button {\n    border-radius: 30px;\n    width: 50px;\n    cursor: pointer;\n    background-color: white;\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.search button img {\n    height: 30px;\n}\n\n.info {\n    height: 400px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.info img{\n    height: 150px;\n    width: 150px;\n    padding-top: 20px;\n}\n\n.info h1 {\n    font-size: 5em;\n    margin: 30px;\n}\n\n.info h2 {\n    font-size:2.3em;\n    margin-top:0;\n}\n\n.wrapper {\n    display: flex;\n    justify-content: space-between;\n}\n\n.col {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n.col img{\n    height: 80px;\n    width: 70px;\n    margin-right: 15px;\n    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(72deg) brightness(103%) contrast(101%);\n    \n}\n\n.first-p{\n    font-size: 1.5em;\n    margin-bottom:10px;\n    margin-top: 15px;   \n}\n\np {\n    font-size: 1.1em;\n    margin-top: 0;\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],p=r.base?c[0]+r.base:c[0],d=a[p]||0,u="".concat(p," ").concat(d);a[p]=d+1;var l=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),p=0;p<a.length;p++){var d=t(a[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function g(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return h[n](t,t.exports,g),t.exports}g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),g.nc=void 0,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),s=g.n(i),c=g(216),p=g.n(c),d=g(589),u=g.n(d),l=g(426),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals})();