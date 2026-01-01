/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),e=new WeakMap;class o{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=e.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e.set(s,t))}return t}toString(){return this.cssText}}const n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(i)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r;const h=window,l=h.trustedTypes,d=l?l.emptyScript:"",a=h.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u},p="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))}),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(p))return!1;this[p]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var s;const e=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,e)=>{i?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(i=>{const e=document.createElement("style"),o=t.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,s.appendChild(e)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=v){var e;const o=this.constructor._$Ep(t,s);if(void 0!==o&&!0===s.reflect){const n=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:c).toAttribute(i,s.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,o=e._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=e.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:c;this._$El=o,this[o]=n.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,i)=>this[i]=t),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)}),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach(t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w;f[p]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:f}),(null!==(r=h.reactiveElementVersions)&&void 0!==r?r:h.reactiveElementVersions=[]).push("1.6.3");const m=window,b=m.trustedTypes,g=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,y="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,$="?"+_,k=`<${$}>`,S=document,x=()=>S.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,E="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,M=/>/g,N=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,z=/"/g,T=/^(?:script|style|textarea|title)$/i,I=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),R=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),D=new WeakMap,L=S.createTreeWalker(S,129,null,!1);function V(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==g?g.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":"",r=j;for(let i=0;i<s;i++){const s=t[i];let h,l,d=-1,a=0;for(;a<s.length&&(r.lastIndex=a,l=r.exec(s),null!==l);)a=r.lastIndex,r===j?"!--"===l[1]?r=O:void 0!==l[1]?r=M:void 0!==l[2]?(T.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=N):void 0!==l[3]&&(r=N):r===N?">"===l[0]?(r=null!=o?o:j,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,h=l[1],r=void 0===l[3]?N:'"'===l[3]?z:U):r===z||r===U?r=N:r===O||r===M?r=j:(r=N,o=void 0);const c=r===N&&t[i+1].startsWith("/>")?" ":"";n+=r===j?s+k:d>=0?(e.push(h),s.slice(0,d)+y+s.slice(d)+_+c):s+_+(-2===d?(e.push(void 0),i):c)}return[V(t,n+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class B{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[l,d]=P(t,i);if(this.el=B.createElement(l,s),L.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=L.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith(y)||i.startsWith(_)){const s=d[n++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+y).split(_),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?q:"?"===i[1]?F:"@"===i[1]?G:Z})}else h.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(T.test(e.tagName)){const t=e.textContent.split(_),i=t.length-1;if(i>0){e.textContent=b?b.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],x()),L.nextNode(),h.push({type:2,index:++o});e.append(t[i],x())}}}else if(8===e.nodeType)if(e.data===$)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(_,t+1));)h.push({type:7,index:o}),t+=_.length-1}o++}}static createElement(t,i){const s=S.createElement("template");return s.innerHTML=t,s}}function W(t,i,s=t,e){var o,n,r,h;if(i===R)return i;let l=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=C(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,s,e)),void 0!==e?(null!==(r=(h=s)._$Co)&&void 0!==r?r:h._$Co=[])[e]=l:s._$Cl=l),void 0!==l&&(i=W(t,l._$AS(t,i.values),l,e)),i}class H{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:S).importNode(s,!0);L.currentNode=o;let n=L.nextNode(),r=0,h=0,l=e[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new K(n,n.nextSibling,this,t):1===l.type?i=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(i=new Q(n,this,t)),this._$AV.push(i),l=e[++h]}r!==(null==l?void 0:l.index)&&(n=L.nextNode(),r++)}return L.currentNode=S,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class K{constructor(t,i,s,e){var o;this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=W(this,t,i),C(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==J&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=B.createElement(V(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else{const t=new H(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=D.get(t.strings);return void 0===i&&D.set(t.strings,i=new B(t)),i}T(t){A(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new K(this.k(x()),this.k(x()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class Z{constructor(t,i,s,e,o){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=J}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=W(this,t,i,0),n=!C(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const e=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=W(this,e[s+r],i,r),h===R&&(h=this._$AH[r]),n||(n=!C(h)||h!==this._$AH[r]),h===J?t=J:t!==J&&(t+=(null!=h?h:"")+o[r+1]),this._$AH[r]=h}n&&!e&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}const Y=b?b.emptyScript:"";class F extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==J?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class G extends Z{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=W(this,t,i,0))&&void 0!==s?s:J)===R)return;const e=this._$AH,o=t===J&&e!==J||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==J&&(e===J||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const X=m.litHtmlPolyfillSupport;null==X||X(B,K),(null!==(w=m.litHtmlVersions)&&void 0!==w?w:m.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,it;class st extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new K(i.insertBefore(x(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}st.finalized=!0,st._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:st});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nt(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):ot(t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(t){return nt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=1;class dt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends dt{constructor(t){var i;if(super(t),t.type!==lt||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){var s,e;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in i)i[t]&&!(null===(s=this.nt)||void 0===s?void 0:s.has(t))&&this.it.add(t);return this.render(i)}const o=t.element.classList;this.it.forEach(t=>{t in i||(o.remove(t),this.it.delete(t))});for(const t in i){const s=!!i[t];s===this.it.has(t)||(null===(e=this.nt)||void 0===e?void 0:e.has(t))||(s?(o.add(t),this.it.add(t)):(o.remove(t),this.it.delete(t)))}return R}});var ct=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};function ut(t){try{JSON.parse(t)}catch(t){return!1}return!0}let vt=class extends st{constructor(){super(...arguments),this.workflow="{}",this.frame="false",this.src="https://n8n-preview-service.internal.n8n.cloud/workflows/demo",this.collapseformobile="true",this.clicktointeract="false",this.hidecanvaserrors="false",this.disableinteractivity="false",this.disablenodeclicks="false",this.showCode=!1,this.showPreview=!0,this.fullscreen=!1,this.insideIframe=!1,this.copyText="Copy",this.isMobileView=!1,this.error=!1,this.interactive=!0,this.scrollX=0,this.scrollY=0,this.n8nReady=!1,this.iframeVisible=!1,this.observer=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){const t=this.shadowRoot.getElementById("int_iframe");this.observer.unobserve(t),this.iframeVisible=!0,this.n8nReady&&this.loadWorkflow()}})}),this.receiveMessage=({data:t,source:i})=>{const s=this.shadowRoot.getElementById("int_iframe");if(s&&ut(t)&&s.contentWindow===i){const i=JSON.parse(t);if("n8nReady"===i.command)this.n8nReady=!0,this.iframeVisible&&this.loadWorkflow();else if("openNDV"===i.command){if("true"===this.disablenodeclicks)return;this.fullscreen=!0}else"closeNDV"===i.command?this.fullscreen=!1:"error"===i.command&&(this.error=!0,this.showPreview=!1)}},this.onDocumentScroll=()=>{this.interactive&&this.insideIframe&&!("ontouchstart"in window)&&!navigator.maxTouchPoints&&window.scrollTo(this.scrollX,this.scrollY)}}firstUpdated(){const t=this.shadowRoot.getElementById("int_iframe");t&&this.observer.observe(t)}connectedCallback(){super.connectedCallback();try{"string"==typeof this.workflow&&this.workflow.startsWith("%7B%")&&(this.workflow=decodeURIComponent(this.workflow))}catch(t){}"true"!==this.clicktointeract&&"true"!==this.disableinteractivity||(this.interactive=!1),window.matchMedia("only screen and (max-width: 760px)").matches&&(this.isMobileView=!0),"true"===this.collapseformobile&&this.isMobileView&&(this.showPreview=!1),window.addEventListener("message",this.receiveMessage),document.addEventListener("scroll",this.onDocumentScroll)}disconnectedCallback(){window.removeEventListener("message",this.receiveMessage),document.removeEventListener("scroll",this.onDocumentScroll),super.disconnectedCallback()}loadWorkflow(){try{const t=JSON.parse(this.workflow);if(!t)throw new Error("Missing workflow");if(!t.nodes||!Array.isArray(t.nodes))throw new Error("Must have an array of nodes");const i=this.shadowRoot.getElementById("int_iframe");i.contentWindow&&i.contentWindow.postMessage(JSON.stringify({command:"openWorkflow",workflow:t,hideNodeIssues:"true"===this.hidecanvaserrors}),"*")}catch{this.error=!0}}toggleCode(){this.showCode=!this.showCode}onMouseEnter(){this.insideIframe=!0,this.scrollX=window.scrollX,this.scrollY=window.scrollY}onMouseLeave(){this.insideIframe=!1}onOverlayClick(){"true"!==this.disableinteractivity&&(this.interactive=!0)}copyClipboard(){navigator.clipboard.writeText(this.workflow),this.copyText="Copied",setTimeout(()=>{this.copyText="Copy"},1500)}toggleView(){this.showPreview=!0}renderIframe(){if(!this.showPreview||this.error)return I``;const t=this.theme?`?theme=${this.theme}`:"",i=`${this.src}${t}`,s="true"===this.disableinteractivity,e=I`<iframe
      class=${at({embedded_workflow_iframe_node_view:this.fullscreen,embedded_workflow_iframe:!this.fullscreen,non_interactive:!this.interactive})}
      allow="${s?J:"clipboard-write"}"
      src=${i}
      id="int_iframe"
    ></iframe>`;let o="";return s?o=I`<div
        class="overlay"
        ?hidden="${!(this.insideIframe||this.isMobileView)}"
      ></div>`:this.interactive||(o=I`<div
        class="overlay"
        @click="${this.onOverlayClick}"
        ?hidden="${!(this.insideIframe||this.isMobileView)}"
      >
        <button>Click to explore</button>
      </div>`),I`<div class="canvas-container">${o}${e}</div>`}render(){const t="true"===this.frame&&this.showPreview&&!this.error;return I`
      <div
        class="${at({embedded_workflow:!0,frame:t})}"
        @mouseenter=${this.onMouseEnter}
        @mouseleave=${this.onMouseLeave}
      >
        ${this.showPreview||this.error?"":I`<div
              class=${at({embedded_tip_error:!0})}
              ?hidden=${this.showPreview||this.error}
            >
              <button class="code_toggle" @click=${this.toggleView}>
                Show workflow
              </button>
            </div>`}
        ${this.renderIframe()}
        ${this.error?I`<div
              class=${at({embedded_tip_error:!0,embedded_tip_error_with_code:this.showCode})}
            >
              Could not load workflow preview. You can still
              <button class="code_toggle" @click=${this.toggleCode}>
                view the code
              </button>
              and paste it into n8n
            </div>`:""}
        ${t?I`<div
              class=${at({embedded_tip:!0,embedded_tip_with_code:this.showCode})}
            >
              💡 Double-click a node to see its settings, or paste
              <button class="code_toggle" @click=${this.toggleCode}>
                this workflow's code
              </button>
              into n8n to import it
            </div>`:""}
        ${this.showCode?I`<div class="workflow_json">
              <div class="copy_button" @click=${this.copyClipboard}>
                ${this.copyText}
              </div>
              <pre class="json_renderer" id="json">
${ut(this.workflow)?JSON.stringify(JSON.parse(this.workflow),void 0,2):"Invalid JSON"}
          </pre
              >
            </div>`:""}
      </div>
    `}};vt.styles=((t,...i)=>{const e=1===t.length?t[0]:i.reduce((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1],t[0]);return new o(e,t,s)})`
    :host {
      --n8n-color-primary-h: 6.9;
      --n8n-color-primary-s: 100%;
      --n8n-color-primary-l: 67.6%;
      --n8n-color-primary: hsl(
        var(--n8n-color-primary-h),
        var(--n8n-color-primary-s),
        var(--n8n-color-primary-l)
      );
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    button {
      outline: none;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-appearance: none;
    }

    .workflow_json {
      height: 300px;
      padding-left: 10px;
      overflow: auto;
      background-color: var(--n8n-json-background-color, hsl(260deg 100% 99%));
      word-wrap: normal;
      font-family: 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono', 'Courier New', monospace;
      font-size: 1.2em;
      color: hsl(0, 0%, 20%);
    }

    .overlay {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: var(--n8n-overlay-background, hsla(232, 48%, 12%, 0.1));
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
    }

    .overlay:hover {
      opacity: 1;
      transition: 250ms opacity;
    }

    .overlay > button {
      padding: 20px 40px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      border: var(--n8n-overlay-border, none);
      background-color: var(
        --n8n-overlay-background-color,
        var(--n8n-color-primary)
      );
      color: var(--n8n-interact-button-color, white);
    }

    .overlay > button:hover {
      filter: brightness(85%);
      cursor: pointer;
    }

    .canvas-container {
      height: var(--n8n-workflow-min-height, 300px);
      position: relative;
    }

    .embedded_workflow.frame {
      padding: 10px;
      background-color: var(--n8n-frame-background-color, hsl(260, 11%, 95%));
    }

    .embedded_workflow .embedded_tip_error {
      color: hsl(0, 0%, 40%);
      text-align: center;
      font-size: 0.9em;
    }

    .embedded_workflow .embedded_tip_error_with_code {
      margin-bottom: 10px;
    }

    .embedded_workflow .embedded_tip {
      margin-top: 7px;
      color: hsl(0, 0%, 40%);
      text-align: center;
      font-size: 0.9em;
    }

    .embedded_workflow .embedded_tip_with_code {
      margin-top: 7px;
      margin-bottom: 10px;
    }

    .embedded_workflow_iframe {
      width: 100%;
      min-height: var(--n8n-workflow-min-height, 300px);
      border: 0;
      border-radius: var(--n8n-iframe-border-radius, 0px);
    }

    .embedded_workflow_iframe_node_view {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 9999999;
    }

    .code_toggle {
      background: none;
      border: none;
      padding: 0px;
      margin: -1px;
      cursor: pointer;
      color: var(--n8n-color-primary);
      font-size: 1em;
    }

    .copy_button {
      display: none; /* Hide button */
    }

    .workflow_json:hover .copy_button {
      display: block;
      float: right;
      right: 0px;
      margin-top: 10px;
      margin-right: 10px;
      padding: 5px;
      font-family: 'Arial', 'sans-serif';
      font-size: 0.8em;
      color: #646464;
      background: var(--n8n-copy-button-background-color, rgb(239, 239, 239));
      cursor: pointer;
    }

    .non_interactive {
      pointer-events: none;
    }
  `,ct([nt({type:String})],vt.prototype,"workflow",void 0),ct([nt({type:String})],vt.prototype,"frame",void 0),ct([nt({type:String})],vt.prototype,"src",void 0),ct([nt({type:String})],vt.prototype,"collapseformobile",void 0),ct([nt({type:String})],vt.prototype,"clicktointeract",void 0),ct([nt({type:String})],vt.prototype,"hidecanvaserrors",void 0),ct([nt({type:String})],vt.prototype,"disableinteractivity",void 0),ct([nt({type:String})],vt.prototype,"disablenodeclicks",void 0),ct([nt({type:String})],vt.prototype,"theme",void 0),ct([rt()],vt.prototype,"showCode",void 0),ct([rt()],vt.prototype,"showPreview",void 0),ct([rt()],vt.prototype,"fullscreen",void 0),ct([rt()],vt.prototype,"insideIframe",void 0),ct([rt()],vt.prototype,"copyText",void 0),ct([rt()],vt.prototype,"isMobileView",void 0),ct([rt()],vt.prototype,"error",void 0),ct([rt()],vt.prototype,"interactive",void 0),vt=ct([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){customElements.define(t,i)}}})(t,i))("n8n-demo")],vt);export{vt as N8NDemo};
