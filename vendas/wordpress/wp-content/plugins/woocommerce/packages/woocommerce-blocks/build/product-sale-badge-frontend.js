(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[74],{116:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(51);var r=n(36);const c=()=>r.m>1},117:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(24),c=n(19);const a=t=>Object(r.a)(t)?JSON.parse(t)||{}:Object(c.a)(t)?t:{}},155:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(63),c=n(116),a=n(19),s=n(117);const o=t=>{if(!Object(c.a)())return{className:"",style:{}};const e=Object(a.a)(t)?t:{},n=Object(s.a)(e.style);return Object(r.__experimentalUseBorderProps)({...e,style:n})}},19:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));const r=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function c(t,e){return r(t)&&e in t}},21:function(t,e,n){"use strict";var r=n(0),c=n(5),a=n.n(c);e.a=t=>{let e,{label:n,screenReaderLabel:c,wrapperElement:s,wrapperProps:o={}}=t;const l=null!=n,u=null!=c;return!l&&u?(e=s||"span",o={...o,className:a()(o.className,"screen-reader-text")},Object(r.createElement)(e,o,c)):(e=s||r.Fragment,l&&u&&n!==c?Object(r.createElement)(e,o,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(e,o,n))}},288:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(63),c=n(116),a=n(19),s=n(117);const o=t=>{if(!Object(c.a)())return{className:"",style:{}};const e=Object(a.a)(t)?t:{},n=Object(s.a)(e.style);return Object(r.__experimentalUseColorProps)({...e,style:n})}},294:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(19),c=n(117);const a=t=>{const e=Object(r.a)(t)?t:{},n=Object(c.a)(e.style),a=Object(r.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:a.fontSize,lineHeight:a.lineHeight,fontWeight:a.fontWeight,fontStyle:a.fontStyle,textTransform:a.textTransform,fontFamily:e.fontFamily}}}},313:function(t,e,n){"use strict";n.r(e),n.d(e,"Block",(function(){return j}));var r=n(0),c=n(1),a=n(5),s=n.n(a),o=n(21),l=n(50),u=n(155),i=n(288),f=n(294),p=n(323),b=n(140);n(314);const j=t=>{const{className:e,align:n}=t,{parentClassName:a}=Object(l.useInnerBlockLayoutContext)(),{product:b}=Object(l.useProductDataContext)(),j=Object(u.a)(t),O=Object(i.a)(t),d=Object(f.a)(t),y=Object(p.a)(t);if(!b.id||!b.on_sale)return null;const m="string"==typeof n?"wc-block-components-product-sale-badge--align-"+n:"";return Object(r.createElement)("div",{className:s()("wc-block-components-product-sale-badge",e,m,{[a+"__product-onsale"]:a},O.className,j.className),style:{...O.style,...j.style,...d.style,...y.style}},Object(r.createElement)(o.a,{label:Object(c.__)("Sale","woocommerce"),screenReaderLabel:Object(c.__)("Product on sale","woocommerce")}))};e.default=Object(b.withProductDataContext)(j)},314:function(t,e){},323:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(63),c=n(116),a=n(19),s=n(117);const o=t=>{if(!Object(c.a)()||"function"!=typeof r.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(a.a)(t)?t:{},n=Object(s.a)(e.style);return Object(r.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},5:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var s=c.apply(null,r);s&&t.push(s)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&t.push(o);else t.push(r.toString())}}return t.join(" ")}t.exports?(c.default=c,t.exports=c):void 0===(r=function(){return c}.apply(e,[]))||(t.exports=r)}()}}]);