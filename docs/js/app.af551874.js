(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)i=s[d],r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1db6":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".wavetext span[data-v-54697353]{display:inline-block;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}",""])},4521:function(t,e,n){"use strict";var o=n("f410"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"jumbotron jumbotron-fluid"},[n("div",{staticClass:"container"},[n("WavingText",{attrs:{text:"Vue waving text!",duration:"1.1",side:"30",fontsize:"56",textClass:"display-4 mb-30 text-shadow",fromcolor:"white",tocolor:"#95b0ad"}}),n("WavingText",{attrs:{text:"Play with settings below.",duration:"1.1",side:"30",fontsize:"20",textClass:"lead mb-30",fromcolor:"#1b1823",tocolor:"#7b7075"}})],1)])]),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("\n\t\t\t\t\t\tWaving Text Settings\n\t\t\t\t\t")]),n("div",{staticClass:"card-body"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"duration"}},[t._v("Duration: "+t._s(t.duration)+"s ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],staticClass:"form-control-range",attrs:{type:"range",step:"0.1",min:"0.1",max:"1.5",id:"duration"},domProps:{value:t.duration},on:{__r:function(e){t.duration=e.target.value}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"distance"}},[t._v("Distance: "+t._s(t.distance))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.distance,expression:"distance"}],staticClass:"form-control-range",attrs:{type:"range",min:"10",max:"280",id:"distance"},domProps:{value:t.distance},on:{__r:function(e){t.distance=e.target.value}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"font"}},[t._v("Font: "+t._s(t.font))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.font,expression:"font"}],staticClass:"form-control-range",attrs:{type:"range",min:"20",max:"100",id:"font"},domProps:{value:t.font},on:{__r:function(e){t.font=e.target.value}}})]),n("p",[t._v("Color text animation:")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"font"}},[t._v("From color: "+t._s(t.color))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.color},on:{input:function(e){e.target.composing||(t.color=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"font"}},[t._v("To color: "+t._s(t.color2))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color2,expression:"color2"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.color2},on:{input:function(e){e.target.composing||(t.color2=e.target.value)}}})])])])]),n("div",{staticClass:"col-md-8 d-flex justify-content-center align-items-center"},[n("WavingText",{attrs:{text:"Hello World!",duration:t.duration,side:t.distance,fontsize:t.font,textClass:"testClass",fromcolor:t.color,tocolor:t.color2}})],1)])])])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wavetext"},[t._l(t.innertext,function(e,o){return n("span",{key:o,class:t.textClass,style:t.style(o),domProps:{innerHTML:t._s(t.renderLetter(e))}})}),n("v-style",[t._v("\n\t\t@keyframes "+t._s(t.aniName)+"{\n\t\tfrom{\n\t\ttransform:translateY(0);\n\t\tcolor: "+t._s(t.fromcolor)+";\n\t\t}\n\t\tto{\n\t\ttransform:translateY(-"+t._s(t.side)+"px);\n\t\t}\n\t\t}\n\t")])],2)},s=[],l=(n("9ec8"),n("c5f6"),n("6b54"),n("75fc")),c={name:"WavingText",components:{"v-style":{render:function(t){return t("style",this.$slots.default)}}},props:{text:{type:String,required:!0},duration:{type:String,default:"0.3"},side:{type:String,default:"90"},fontsize:{type:String,default:"50"},textClass:{type:String,default:""},fromcolor:{type:String,default:"white"},tocolor:{type:String,default:"black"}},data:function(){return{innertext:Object(l["a"])(this.text),aniName:"_".concat(Math.random().toString(36).substr(2,9))}},computed:{countChar:function(){return Number(this.innertext.length)}},mounted:function(){},methods:{style:function(t){var e="animation-name:".concat(this.aniName,";"),n="font-size:".concat(this.fontsize,"px;"),o="animation-delay:-".concat((this.countChar-t)*Number(this.duration)/this.countChar,"s;"),r="animation-duration:".concat(this.duration,"s;"),a="color: ".concat(this.tocolor,";");return"".concat(e," ").concat(n," ").concat(a," ").concat(o," ").concat(r)},renderLetter:function(t){return" "===t?"&nbsp;":t}}},u=c,d=(n("4521"),n("2877")),f=Object(d["a"])(u,i,s,!1,null,"54697353",null),p=f.exports,m={name:"App",components:{WavingText:p},data:function(){return{duration:"0.5",distance:"90",font:"70",color:"#ff8000",color2:"#800040"}}},v=m,b=(n("5c0b"),Object(d["a"])(v,r,a,!1,null,null,null)),x=b.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("e959"),r=n.n(o);r.a},a33e:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"#app{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;width:100vw;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.container-fluid{padding-left:0;padding-right:0}.mb-30{margin-bottom:30px;font-weight:700}body,html{overflow-x:hidden}.text-shadow{text-shadow:.1em .1em .2em #000}.jumbotron{background-image:url(https://images.unsplash.com/19/waves.JPG);background-position:50%;background-repeat:no-repeat;background-size:cover;min-height:600px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.testClass{font-weight:700}",""])},e959:function(t,e,n){var o=n("a33e");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("499e").default;r("6f19147e",o,!0,{sourceMap:!1,shadowMode:!1})},f410:function(t,e,n){var o=n("1db6");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("499e").default;r("5d52b6ee",o,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.af551874.js.map