import{$ as qe,$a as xe,$b as ms,A as Pt,Aa as B,Ab as Jr,B as Zt,Ba as Ur,Bb as ya,C as at,Ca as qn,Cb as fn,D as Rr,Da as Ye,Db as ts,E as Fr,Ea as Qe,Eb as Fi,F as ne,Fa as x,Fb as es,G as Lr,Ga as l,Gb as ns,H as Wt,Ha as c,Hb as is,I as g,Ia as A,Ib as os,J as V,Ja as Lt,K as _,Ka as Bt,Kb as Fe,L as _a,La as Vt,Lb as as,M as r,Ma as Dt,Mb as rs,N as Br,Na as Jt,Nb as X,O as Di,Oa as f,Ob as xt,P as ct,Pa as Gr,Pb as Li,Q as dt,Qa as D,Qb as ss,R as ye,Ra as q,Rb as wa,S as G,Sa as M,Sb as ls,T as nt,Ta as Nt,Tb as cs,U as W,Ua as ut,Ub as ds,V as T,Va as I,Vb as Et,W as j,Wa as P,Wb as Y,X as we,Xa as $r,Y as St,Ya as pn,Yb as Mt,Z as z,Za as Ze,Zb as vt,_ as E,_a as ue,_b as Bi,a as F,aa as Vr,ab as S,ac as us,b as Rt,ba as Ei,bb as qr,bc as hs,c as Ot,ca as Ii,cb as ht,cc as Vi,d as de,da as Nr,db as u,dc as gt,e as b,ea as d,eb as O,ec as Ni,f as Dr,fa as At,fb as J,fc as ps,g as da,ga as me,gb as Je,gc as fs,h as Er,ha as Kt,hb as it,i as Ir,ia as lt,ib as ie,j as ve,ja as mt,jb as K,k as wt,ka as zr,kb as Xr,l as un,la as Xe,lb as va,m as Pr,ma as ba,mb as Kr,n as Ar,na as p,nb as Yr,o as ma,oa as N,ob as he,p as Ft,pa as k,pb as Z,q as Te,qa as Wr,qb as Ai,r as Q,ra as $,rb as pe,s as ua,sa as Yt,sb as Ti,t as hn,ta as jr,tb as fe,u as kt,ua as Ke,ub as Qr,v as ha,va as Hr,vb as Zr,w as pa,wa as Pi,wb as rt,x as fa,xa as Re,xb as R,y as ga,ya as w,yb as zt,z as Tr,za as L,zb as Ri}from"./chunk-OEXOHJA7.js";function tn(n){return n.buttons===0||n.detail===0}function en(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var xa;function gs(){if(xa==null){let n=typeof document<"u"?document.head:null;xa=!!(n&&(n.createShadowRoot||n.attachShadow))}return xa}function Ca(n){if(gs()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function gn(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function Tt(n){return n.composedPath?n.composedPath()[0]:n.target}var Xn;function _s(){if(Xn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Xn=!0}))}finally{Xn=Xn||!1}return Xn}function _n(n){return _s()?n:!!n.capture}function Qt(n,i=0){return bs(n)?Number(n):arguments.length===2?i:0}function bs(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function jt(n){return n instanceof E?n.nativeElement:n}var vs=new _("cdk-input-modality-detector-options"),ys={ignoreKeys:[18,17,224,91,16]},ws=650,ka={passive:!0,capture:!0},xs=(()=>{class n{_platform=r(X);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Dr(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Tt(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<ws||(this._modality.next(tn(t)?"keyboard":"mouse"),this._mostRecentTarget=Tt(t))};_onTouchstart=t=>{if(en(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Tt(t)};constructor(){let t=r(T),e=r(nt),o=r(vs,{optional:!0});if(this._options=F(F({},ys),o),this.modalityDetected=this._modality.pipe(Tr(1)),this.modalityChanged=this.modalityDetected.pipe(pa()),this._platform.isBrowser){let a=r(Kt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[a.listen(e,"keydown",this._onKeydown,ka),a.listen(e,"mousedown",this._onMousedown,ka),a.listen(e,"touchstart",this._onTouchstart,ka)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Kn=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Kn||{}),Cs=new _("cdk-focus-monitor-default-options"),zi=_n({passive:!0,capture:!0}),te=(()=>{class n{_ngZone=r(T);_platform=r(X);_inputModalityDetector=r(xs);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=r(nt);_stopInputModalityDetector=new b;constructor(){let t=r(Cs,{optional:!0});this._detectionMode=t?.detectionMode||Kn.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=Tt(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=jt(t);if(!this._platform.isBrowser||o.nodeType!==1)return ve();let a=Ca(o)||this._document,s=this._elementInfo.get(o);if(s)return e&&(s.checkChildren=!0),s.subject;let m={checkChildren:e,subject:new b,rootNode:a};return this._elementInfo.set(o,m),this._registerGlobalListeners(m),m.subject}stopMonitoring(t){let e=jt(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let a=jt(t),s=this._document.activeElement;a===s?this._getClosestElementsInfo(a).forEach(([m,h])=>this._originChanged(m,e,h)):(this._setOrigin(e),typeof a.focus=="function"&&a.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Kn.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===Kn.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?ws:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),a=Tt(t);!o||!o.checkChildren&&e!==a||this._originChanged(e,this._getFocusOrigin(a),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,zi),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,zi)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(at(this._stopInputModalityDetector)).subscribe(a=>{this._setOrigin(a,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,zi),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,zi),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,a)=>{(a===t||o.checkChildren&&a.contains(t))&&e.push([a,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let a=t.labels;if(a){for(let s=0;s<a.length;s++)if(a[s].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Zc(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var ks=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Jc=(()=>{class n{_mutationObserverFactory=r(ks);_observedElements=new Map;_ngZone=r(T);constructor(){}ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=jt(t);return new de(o=>{let s=this._observeElement(e).pipe(wt(m=>m.filter(h=>!Zc(h))),Q(m=>!!m.length)).subscribe(m=>{this._ngZone.run(()=>{o.next(m)})});return()=>{s.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new b,o=this._mutationObserverFactory.create(a=>e.next(a));o&&o.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:o,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:o}=this._observedElements.get(t);e&&e.disconnect(),o.complete(),this._observedElements.delete(t)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ms=(()=>{class n{_contentObserver=r(Jc);_elementRef=r(E);event=new W;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=Qt(t),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(hn(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",R],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),Wi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({providers:[ks]})}return n})();var bn=(()=>{class n{_platform=r(X);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return ed(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=td(cd(t));if(e&&(Ss(e)===-1||!this.isVisible(e)))return!1;let o=t.nodeName.toLowerCase(),a=Ss(t);return t.hasAttribute("contenteditable")?a!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!sd(t)?!1:o==="audio"?t.hasAttribute("controls")?a!==-1:!1:o==="video"?a===-1?!1:a!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return ld(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function td(n){try{return n.frameElement}catch{return null}}function ed(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function nd(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function id(n){return ad(n)&&n.type=="hidden"}function od(n){return rd(n)&&n.hasAttribute("href")}function ad(n){return n.nodeName.toLowerCase()=="input"}function rd(n){return n.nodeName.toLowerCase()=="a"}function Os(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Ss(n){if(!Os(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function sd(n){let i=n.nodeName.toLowerCase(),t=i==="input"&&n.type;return t==="text"||t==="password"||i==="select"||i==="textarea"}function ld(n){return id(n)?!1:nd(n)||od(n)||n.hasAttribute("contenteditable")||Os(n)}function cd(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var ji=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,t,e,o,a=!1,s){this._element=i,this._checker=t,this._ngZone=e,this._document=o,this._injector=s,a||this.attachAnchors()}destroy(){let i=this._startAnchor,t=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let t=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(i),!!e}return t.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let t=this._getRegionBoundary("start");return t&&t.focus(i),!!t}focusLastTabbableElement(i){let t=this._getRegionBoundary("end");return t&&t.focus(i),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let t=i.children;for(let e=0;e<t.length;e++){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(o)return o}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let t=i.children;for(let e=t.length-1;e>=0;e--){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(o)return o}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,t){i?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?At(i,{injector:this._injector}):setTimeout(i)}},Yn=(()=>{class n{_checker=r(bn);_ngZone=r(T);_document=r(nt);_injector=r(G);constructor(){r(xt).load(Li)}create(t,e=!1){return new ji(t,this._checker,this._ngZone,this._document,e,this._injector)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ds=new _("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Es=new _("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),dd=0,Qn=(()=>{class n{_ngZone=r(T);_defaultOptions=r(Es,{optional:!0});_liveElement;_document=r(nt);_sanitizer=r(ns);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=r(Ds,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let o=this._defaultOptions,a,s;return e.length===1&&typeof e[0]=="number"?s=e[0]:[a,s]=e,this.clear(),clearTimeout(this._previousTimeout),a||(a=o&&o.politeness?o.politeness:"polite"),s==null&&o&&(s=o.duration),this._liveElement.setAttribute("aria-live",a),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(m=>this._currentResolve=m)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:ss(this._liveElement,t,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",e=this._document.getElementsByClassName(t),o=this._document.createElement("div");for(let a=0;a<e.length;a++)e[a].remove();return o.classList.add(t),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${dd++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<e.length;o++){let a=e[o],s=a.getAttribute("aria-owns");s?s.indexOf(t)===-1&&a.setAttribute("aria-owns",s+" "+t):a.setAttribute("aria-owns",t)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var md=200,Hi=class{_letterKeyStream=new b;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new b;selectedItem=this._selectedItem;constructor(i,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:md;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(i),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let t=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Fr(t=>this._pressedLetters.push(t)),hn(i),Q(()=>this._pressedLetters.length>0),wt(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let o=(this._selectedItemIndex+e)%this._items.length,a=this._items[o];if(!this._skipPredicateFn?.(a)&&a.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(a);break}}this._pressedLetters=[]})}};function It(n,...i){return i.length?i.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var vn=class{_items;_activeItemIndex=j(-1);_activeItem=j(null);_wrap=!1;_typeaheadSubscription=Ot.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,t){this._items=i,i instanceof qe?this._itemChangesSubscription=i.changes.subscribe(e=>this._itemsChanged(e.toArray())):Ke(i)&&(this._effectRef=we(()=>this._itemsChanged(i()),{injector:t}))}tabOut=new b;change=new b;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Hi(t,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,t=10){return this._pageUpAndDown={enabled:i,delta:t},this}setActiveItem(i){let t=this._activeItem();this.updateActiveItem(i),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(i){let t=i.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(a=>!i[a]||this._allowedModifierKeys.indexOf(a)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let a=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(a>0?a:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let a=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(a<s?a:s-1,-1);break}else return;default:(o||It(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let t=this._getItemsArray(),e=typeof i=="number"?i:t.indexOf(i),o=t[e];this._activeItem.set(o??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let o=(this._activeItemIndex()+i*e+t.length)%t.length,a=t[o];if(!this._skipPredicateFn(a)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,t){let e=this._getItemsArray();if(e[i]){for(;this._skipPredicateFn(e[i]);)if(i+=t,!e[i])return;this.setActiveItem(i)}}_getItemsArray(){return Ke(this._items)?this._items():this._items instanceof qe?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let t=this._activeItem();if(t){let e=i.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var ni=class extends vn{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var ii=class extends vn{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Ma={},pt=class n{_appId=r(Vr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,t=!1){return this._appId!=="ng"&&(i+=this._appId),Ma.hasOwnProperty(i)||(Ma[i]=0),`${i}${t?n._infix+"-":""}${Ma[i]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ps=" ";function As(n,i,t){let e=Ts(n,i);t=t.trim(),!e.some(o=>o.trim()===t)&&(e.push(t),n.setAttribute(i,e.join(Ps)))}function Sa(n,i,t){let e=Ts(n,i);t=t.trim();let o=e.filter(a=>a!==t);o.length?n.setAttribute(i,o.join(Ps)):n.removeAttribute(i)}function Ts(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var oe=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(oe||{}),Ui,nn;function Gi(){if(nn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return nn=!1,nn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)nn=!0;else{let n=Element.prototype.scrollTo;n?nn=!/\{\s*\[native code\]\s*\}/.test(n.toString()):nn=!1}}return nn}function yn(){if(typeof document!="object"||!document)return oe.NORMAL;if(Ui==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let t=document.createElement("div"),e=t.style;e.width="2px",e.height="1px",n.appendChild(t),document.body.appendChild(n),Ui=oe.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Ui=n.scrollLeft===0?oe.NEGATED:oe.INVERTED),n.remove()}return Ui}function Oa(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var wn,Rs=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Da(){if(wn)return wn;if(typeof document!="object"||!document)return wn=new Set(Rs),wn;let n=document.createElement("input");return wn=new Set(Rs.filter(i=>(n.setAttribute("type",i),n.type===i))),wn}var hd=new _("MATERIAL_ANIMATIONS"),Fs=null;function pd(){return r(hd,{optional:!0})?.animationsDisabled||r(Ii,{optional:!0})==="NoopAnimations"?"di-disabled":(Fs??=r(ls).matchMedia("(prefers-reduced-motion)").matches,Fs?"reduced-motion":"enabled")}function ot(){return pd()!=="enabled"}function Ct(n){return n==null?"":typeof n=="string"?n:`${n}px`}function yt(n){return n!=null&&`${n}`!="false"}var Ht=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Ht||{}),Ea=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Ht.HIDDEN;constructor(i,t,e,o=!1){this._renderer=i,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},Ls=_n({passive:!0,capture:!0}),Ia=class{_events=new Map;addHandler(i,t,e,o){let a=this._events.get(t);if(a){let s=a.get(e);s?s.add(o):a.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),i.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Ls)})}removeHandler(i,t,e){let o=this._events.get(i);if(!o)return;let a=o.get(t);a&&(a.delete(e),a.size===0&&o.delete(t),o.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Ls)))}_delegateEventHandler=i=>{let t=Tt(i);t&&this._events.get(i.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(a=>a.handleEvent(i))})}},oi={enterDuration:225,exitDuration:150},fd=800,Bs=_n({passive:!0,capture:!0}),Vs=["mousedown","touchstart"],Ns=["mouseup","mouseleave","touchend","touchcancel"],gd=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),on=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ia;constructor(i,t,e,o,a){this._target=i,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=jt(e)),a&&a.get(xt).load(gd)}fadeInRipple(i,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=F(F({},oi),e.animation);e.centered&&(i=o.left+o.width/2,t=o.top+o.height/2);let s=e.radius||_d(i,t,o),m=i-o.left,h=t-o.top,v=a.enterDuration,y=document.createElement("div");y.classList.add("mat-ripple-element"),y.style.left=`${m-s}px`,y.style.top=`${h-s}px`,y.style.height=`${s*2}px`,y.style.width=`${s*2}px`,e.color!=null&&(y.style.backgroundColor=e.color),y.style.transitionDuration=`${v}ms`,this._containerElement.appendChild(y);let U=window.getComputedStyle(y),st=U.transitionProperty,bt=U.transitionDuration,et=st==="none"||bt==="0s"||bt==="0s, 0s"||o.width===0&&o.height===0,ft=new Ea(this,y,e,et);y.style.transform="scale3d(1, 1, 1)",ft.state=Ht.FADING_IN,e.persistent||(this._mostRecentTransientRipple=ft);let Xt=null;return!et&&(v||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let $n=()=>{Xt&&(Xt.fallbackTimer=null),clearTimeout(Or),this._finishRippleTransition(ft)},ca=()=>this._destroyRipple(ft),Or=setTimeout(ca,v+100);y.addEventListener("transitionend",$n),y.addEventListener("transitioncancel",ca),Xt={onTransitionEnd:$n,onTransitionCancel:ca,fallbackTimer:Or}}),this._activeRipples.set(ft,Xt),(et||!v)&&this._finishRippleTransition(ft),ft}fadeOutRipple(i){if(i.state===Ht.FADING_OUT||i.state===Ht.HIDDEN)return;let t=i.element,e=F(F({},oi),i.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",i.state=Ht.FADING_OUT,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let t=jt(i);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Vs.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ns.forEach(t=>{this._triggerElement.addEventListener(t,this,Bs)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Ht.FADING_IN?this._startFadeOutTransition(i):i.state===Ht.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let t=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=Ht.VISIBLE,!e&&(!t||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let t=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Ht.HIDDEN,t!==null&&(i.element.removeEventListener("transitionend",t.onTransitionEnd),i.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),i.element.remove()}_onMousedown(i){let t=tn(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+fd;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!en(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=i.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let t=i.state===Ht.VISIBLE||i.config.terminateOnPointerUp&&i.state===Ht.FADING_IN;!i.config.persistent&&t&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Vs.forEach(t=>n._eventManager.removeHandler(t,i,this)),this._pointerUpEventsRegistered&&(Ns.forEach(t=>i.removeEventListener(t,this,Bs)),this._pointerUpEventsRegistered=!1))}};function _d(n,i,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),o=Math.max(Math.abs(i-t.top),Math.abs(i-t.bottom));return Math.sqrt(e*e+o*o)}var an=new _("mat-ripple-global-options"),Ce=(()=>{class n{_elementRef=r(E);_animationsDisabled=ot();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=r(T),e=r(X),o=r(an,{optional:!0}),a=r(G);this._globalOptions=o||{},this._rippleRenderer=new on(this,t,this._elementRef,e,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:F(F(F({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,F(F({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,F(F({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,o){e&2&&S("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var bd={capture:!0},vd=["focus","mousedown","mouseenter","touchstart"],Pa="mat-ripple-loader-uninitialized",Aa="mat-ripple-loader-class-name",zs="mat-ripple-loader-centered",$i="mat-ripple-loader-disabled",Ws=(()=>{class n{_document=r(nt);_animationsDisabled=ot();_globalRippleOptions=r(an,{optional:!0});_platform=r(X);_ngZone=r(T);_injector=r(G);_eventCleanups;_hosts=new Map;constructor(){let t=r(Kt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>vd.map(e=>t.listen(this._document,e,this._onInteraction,bd)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Pa,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Aa))&&t.setAttribute(Aa,e.className||""),e.centered&&t.setAttribute(zs,""),e.disabled&&t.setAttribute($i,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute($i,""):t.removeAttribute($i)}_onInteraction=t=>{let e=Tt(t);if(e instanceof HTMLElement){let o=e.closest(`[${Pa}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Aa)),t.append(e);let o=this._globalRippleOptions,a=this._animationsDisabled?0:o?.animation?.enterDuration??oi.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??oi.exitDuration,m={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute($i),rippleConfig:{centered:t.hasAttribute(zs),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:s}}},h=new on(m,this._ngZone,e,this._platform,this._injector),v=!m.rippleDisabled;v&&h.setupTriggerEvents(t),this._hosts.set(t,{target:m,renderer:h,hasSetUpEvents:v}),t.removeAttribute(Pa)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ee=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var yd=["mat-icon-button",""],wd=["*"],xd=new _("MAT_BUTTON_CONFIG");function js(n){return n==null?void 0:zt(n)}var qi=(()=>{class n{_elementRef=r(E);_ngZone=r(T);_animationsDisabled=ot();_config=r(xd,{optional:!0});_focusMonitor=r(te);_cleanupClick;_renderer=r(lt);_rippleLoader=r(Ws);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){r(xt).load(ee);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,o){e&2&&(w("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),ht(o.color?"mat-"+o.color:""),S("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",R],disabled:[2,"disabled","disabled",R],ariaDisabled:[2,"aria-disabled","ariaDisabled",R],disabledInteractive:[2,"disabledInteractive","disabledInteractive",R],tabIndex:[2,"tabIndex","tabIndex",js],_tabindex:[2,"tabindex","_tabindex",js]}})}return n})(),Ut=(()=>{class n extends qi{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[$],attrs:yd,ngContentSelectors:wd,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(q(),Vt(0,"span",0),M(1),Vt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ge=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Y]})}return n})();var Cd=["matButton",""],Us=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Gs=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],kd=["mat-fab",""];var Hs=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),_e=(()=>{class n extends qi{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Md(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?Hs.get(this._appearance):null,a=Hs.get(t);o&&e.remove(...o),e.add(...a),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[$],attrs:Cd,ngContentSelectors:Gs,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(q(Us),Vt(0,"span",0),M(1),Lt(2,"span",1),M(3,1),Bt(),M(4,2),Vt(5,"span",2)(6,"span",3)),e&2&&S("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Md(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Sd=new _("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>Ta}),Ta={color:"accent"},$s=(()=>{class n extends qi{_options=r(Sd,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Ta,this.color=this._options.color||Ta.color}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(e,o){e&2&&S("mdc-fab--extended",o.extended)("mat-mdc-extended-fab",o.extended)},inputs:{extended:[2,"extended","extended",R]},exportAs:["matButton","matAnchor"],features:[$],attrs:kd,ngContentSelectors:Gs,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(q(Us),Vt(0,"span",0),M(1),Lt(2,"span",1),M(3,1),Bt(),M(4,2),Vt(5,"span",2)(6,"span",3)),e&2&&S("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return n})();var _t=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[ge,Y]})}return n})();var ai=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},re=class extends ai{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,t,e,o,a){super(),this.component=i,this.viewContainerRef=t,this.injector=e,this.projectableNodes=o,this.bindings=a||null}},se=class extends ai{templateRef;viewContainerRef;context;injector;constructor(i,t,e,o){super(),this.templateRef=i,this.viewContainerRef=t,this.context=e,this.injector=o}get origin(){return this.templateRef.elementRef}attach(i,t=this.context){return this.context=t,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Ra=class extends ai{element;constructor(i){super(),this.element=i instanceof E?i.nativeElement:i}},Le=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof re)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof se)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Ra)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ri=class extends Le{outletElement;_appRef;_defaultInjector;constructor(i,t,e){super(),this.outletElement=i,this._appRef=t,this._defaultInjector=e}attachComponentPortal(i){let t;if(i.viewContainerRef){let e=i.injector||i.viewContainerRef.injector,o=e.get(ba,null,{optional:!0})||void 0;t=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:e,ngModuleRef:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,o=i.injector||this._defaultInjector||G.NULL,a=o.get(Di,e.injector);t=Jr(i.component,{elementInjector:o,environmentInjector:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=i,t}attachTemplatePortal(i){let t=i.viewContainerRef,e=t.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return e.rootNodes.forEach(o=>this.outletElement.appendChild(o)),e.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(e);o!==-1&&t.remove(o)}),this._attachedPortal=i,e}attachDomPortal=i=>{let t=i.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=i,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Be=(()=>{class n extends Le{_moduleRef=r(ba,{optional:!0});_document=r(nt);_viewContainerRef=r(Xe);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new W;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let o=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(o,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(e,o)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[$]})}return n})(),si=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({})}return n})();var Dd=20,rn=(()=>{class n{_ngZone=r(T);_platform=r(X);_renderer=r(Kt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new b;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Dd){return this._platform.isBrowser?new de(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(ua(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ve()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let o=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(Q(a=>!a||o.indexOf(a)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((o,a)=>{this._scrollableContainsElement(a,t)&&e.push(a)}),e}_scrollableContainsElement(t,e){let o=jt(e),a=t.getElementRef().nativeElement;do if(o==a)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ve=(()=>{class n{elementRef=r(E);scrollDispatcher=r(rn);ngZone=r(T);dir=r(Et,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new b;_renderer=r(lt);_cleanupScroll;_elementScrolled=new b;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=o?t.end:t.start),t.right==null&&(t.right=o?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),o&&yn()!=oe.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),yn()==oe.INVERTED?t.left=t.right:yn()==oe.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Gi()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",o="right",a=this.elementRef.nativeElement;if(t=="top")return a.scrollTop;if(t=="bottom")return a.scrollHeight-a.clientHeight-a.scrollTop;let s=this.dir&&this.dir.value=="rtl";return t=="start"?t=s?o:e:t=="end"&&(t=s?e:o),s&&yn()==oe.INVERTED?t==e?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:s&&yn()==oe.NEGATED?t==e?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:t==e?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Ed=20,be=(()=>{class n{_platform=r(X);_listeners;_viewportSize=null;_change=new b;_document=r(nt);constructor(){let t=r(T),e=r(Kt).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=a=>this._change.next(a);this._listeners=[e.listen("window","resize",o),e.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+e,height:o,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),o=t.documentElement,a=o.getBoundingClientRect(),s=-a.top||t.body?.scrollTop||e.scrollY||o.scrollTop||0,m=-a.left||t.body?.scrollLeft||e.scrollX||o.scrollLeft||0;return{top:s,left:m}}change(t=Ed){return t>0?this._change.pipe(ua(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ke=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({})}return n})(),Fa=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Y,ke,Y,ke]})}return n})();var qs=Gi();function kn(n){return new Xi(n.get(be),n.get(nt))}var Xi=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,t){this._viewportRuler=i,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=Ct(-this._previousScrollPosition.left),i.style.top=Ct(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,t=this._document.body,e=i.style,o=t.style,a=e.scrollBehavior||"",s=o.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),qs&&(e.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),qs&&(e.scrollBehavior=a,o.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function tl(n,i){return new Ki(n.get(rn),n.get(T),n.get(be),i)}var Ki=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,t,e,o){this._scrollDispatcher=i,this._ngZone=t,this._viewportRuler=e,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Q(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var li=class{enable(){}disable(){}attach(){}};function La(n,i){return i.some(t=>{let e=n.bottom<t.top,o=n.top>t.bottom,a=n.right<t.left,s=n.left>t.right;return e||o||a||s})}function Xs(n,i){return i.some(t=>{let e=n.top<t.top,o=n.bottom>t.bottom,a=n.left<t.left,s=n.right>t.right;return e||o||a||s})}function ln(n,i){return new Yi(n.get(rn),n.get(be),n.get(T),i)}var Yi=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,t,e,o){this._scrollDispatcher=i,this._viewportRuler=t,this._ngZone=e,this._config=o}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:o}=this._viewportRuler.getViewportSize();La(t,[{width:e,height:o,bottom:o,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},el=(()=>{class n{_injector=r(G);constructor(){}noop=()=>new li;close=t=>tl(this._injector,t);block=()=>kn(this._injector);reposition=t=>ln(this._injector,t);static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),le=class{positionStrategy;scrollStrategy=new li;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let t=Object.keys(i);for(let e of t)i[e]!==void 0&&(this[e]=i[e])}}};var Qi=class{connectionPair;scrollableViewProperties;constructor(i,t){this.connectionPair=i,this.scrollableViewProperties=t}};var nl=(()=>{class n{_attachedOverlays=[];_document=r(nt);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),il=(()=>{class n extends nl{_ngZone=r(T);_renderer=r(Kt).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let o=e.length-1;o>-1;o--){let a=e[o];if(this.canReceiveEvent(a,t,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ol=(()=>{class n extends nl{_platform=r(X);_ngZone=r(T);_renderer=r(Kt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,o={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(e,"pointerdown",this._pointerDownListener,o),a.listen(e,"click",this._clickListener,o),a.listen(e,"auxclick",this._clickListener,o),a.listen(e,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Tt(t)};_clickListener=t=>{let e=Tt(t),o=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let s=a.length-1;s>-1;s--){let m=a[s],h=m._outsidePointerEvents;if(!(!m.hasAttached()||!this.canReceiveEvent(m,t,h))){if(Ks(m.overlayElement,e)||Ks(m.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>h.next(t)):h.next(t)}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ks(n,i){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=i;for(;e;){if(e===n)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var al=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),to=(()=>{class n{_platform=r(X);_containerElement;_document=r(nt);_styleLoader=r(xt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||Oa()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let a=0;a<o.length;a++)o[a].remove()}let e=this._document.createElement("div");e.classList.add(t),Oa()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(al)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ba=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,t,e,o){this._renderer=t,this._ngZone=e,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Va(n){return n&&n.nodeType===1}var xn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new b;_attachments=new b;_detachments=new b;_positionStrategy;_scrollStrategy;_locationChanges=Ot.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new b;_outsidePointerEvents=new b;_afterNextRenderRef;constructor(i,t,e,o,a,s,m,h,v,y=!1,U,st){this._portalOutlet=i,this._host=t,this._pane=e,this._config=o,this._ngZone=a,this._keyboardDispatcher=s,this._document=m,this._location=h,this._outsideClickDispatcher=v,this._animationsDisabled=y,this._injector=U,this._renderer=st,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=At(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=F(F({},this._config),i),this._updateElementSize()}setDirection(i){this._config=Rt(F({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Ct(this._config.width),i.height=Ct(this._config.height),i.minWidth=Ct(this._config.minWidth),i.minHeight=Ct(this._config.minHeight),i.maxWidth=Ct(this._config.maxWidth),i.maxHeight=Ct(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Va(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ba(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,t,e){let o=wa(t||[]).filter(a=>!!a);o.length&&(e?i.classList.add(...o):i.classList.remove(...o))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=At(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(t){if(i)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Ys="cdk-overlay-connected-position-bounding-box",Pd=/([A-Za-z%]+)$/;function ci(n,i){return new Zi(i,n.get(be),n.get(nt),n.get(X),n.get(to))}var Zi=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new b;_resizeSubscription=Ot.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,t,e,o,a){this._viewportRuler=t,this._document=e,this._platform=o,this._overlayContainer=a,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Ys),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,t=this._overlayRect,e=this._viewportRect,o=this._containerRect,a=[],s;for(let m of this._preferredPositions){let h=this._getOriginPoint(i,o,m),v=this._getOverlayPoint(h,t,m),y=this._getOverlayFit(v,t,e,m);if(y.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(m,h);return}if(this._canFitWithFlexibleDimensions(y,v,e)){a.push({position:m,origin:h,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(h,m)});continue}(!s||s.overlayFit.visibleArea<y.visibleArea)&&(s={overlayFit:y,overlayPoint:v,originPoint:h,position:m,overlayRect:t})}if(a.length){let m=null,h=-1;for(let v of a){let y=v.boundingBoxRect.width*v.boundingBoxRect.height*(v.position.weight||1);y>h&&(h=y,m=v)}this._isPushed=!1,this._applyPosition(m.position,m.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&sn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ys),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof E?this._origin.nativeElement:Va(this._origin)?this._origin:null}_getOriginPoint(i,t,e){let o;if(e.originX=="center")o=i.left+i.width/2;else{let s=this._isRtl()?i.right:i.left,m=this._isRtl()?i.left:i.right;o=e.originX=="start"?s:m}t.left<0&&(o-=t.left);let a;return e.originY=="center"?a=i.top+i.height/2:a=e.originY=="top"?i.top:i.bottom,t.top<0&&(a-=t.top),{x:o,y:a}}_getOverlayPoint(i,t,e){let o;e.overlayX=="center"?o=-t.width/2:e.overlayX==="start"?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let a;return e.overlayY=="center"?a=-t.height/2:a=e.overlayY=="top"?0:-t.height,{x:i.x+o,y:i.y+a}}_getOverlayFit(i,t,e,o){let a=Zs(t),{x:s,y:m}=i,h=this._getOffset(o,"x"),v=this._getOffset(o,"y");h&&(s+=h),v&&(m+=v);let y=0-s,U=s+a.width-e.width,st=0-m,bt=m+a.height-e.height,et=this._subtractOverflows(a.width,y,U),ft=this._subtractOverflows(a.height,st,bt),Xt=et*ft;return{visibleArea:Xt,isCompletelyWithinViewport:a.width*a.height===Xt,fitsInViewportVertically:ft===a.height,fitsInViewportHorizontally:et==a.width}}_canFitWithFlexibleDimensions(i,t,e){if(this._hasFlexibleDimensions){let o=e.bottom-t.y,a=e.right-t.x,s=Qs(this._overlayRef.getConfig().minHeight),m=Qs(this._overlayRef.getConfig().minWidth),h=i.fitsInViewportVertically||s!=null&&s<=o,v=i.fitsInViewportHorizontally||m!=null&&m<=a;return h&&v}return!1}_pushOverlayOnScreen(i,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let o=Zs(t),a=this._viewportRect,s=Math.max(i.x+o.width-a.width,0),m=Math.max(i.y+o.height-a.height,0),h=Math.max(a.top-e.top-i.y,0),v=Math.max(a.left-e.left-i.x,0),y=0,U=0;return o.width<=a.width?y=v||-s:y=i.x<this._getViewportMarginStart()?a.left-e.left-i.x:0,o.height<=a.height?U=h||-m:U=i.y<this._getViewportMarginTop()?a.top-e.top-i.y:0,this._previousPushAmount={x:y,y:U},{x:i.x+y,y:i.y+U}}_applyPosition(i,t){if(this._setTransformOrigin(i),this._setOverlayElementStyles(t,i),this._setBoundingBoxStyles(t,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Ad(this._lastScrollVisibility,e)){let o=new Qi(i,e);this._positionChanges.next(o)}this._lastScrollVisibility=e}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,o=i.overlayY;i.overlayX==="center"?e="center":this._isRtl()?e=i.overlayX==="start"?"right":"left":e=i.overlayX==="start"?"left":"right";for(let a=0;a<t.length;a++)t[a].style.transformOrigin=`${e} ${o}`}_calculateBoundingBoxRect(i,t){let e=this._viewportRect,o=this._isRtl(),a,s,m;if(t.overlayY==="top")s=i.y,a=e.height-s+this._getViewportMarginBottom();else if(t.overlayY==="bottom")m=e.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=e.height-m+this._getViewportMarginTop();else{let bt=Math.min(e.bottom-i.y+e.top,i.y),et=this._lastBoundingBoxSize.height;a=bt*2,s=i.y-bt,a>et&&!this._isInitialRender&&!this._growAfterOpen&&(s=i.y-et/2)}let h=t.overlayX==="start"&&!o||t.overlayX==="end"&&o,v=t.overlayX==="end"&&!o||t.overlayX==="start"&&o,y,U,st;if(v)st=e.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),y=i.x-this._getViewportMarginStart();else if(h)U=i.x,y=e.right-i.x-this._getViewportMarginEnd();else{let bt=Math.min(e.right-i.x+e.left,i.x),et=this._lastBoundingBoxSize.width;y=bt*2,U=i.x-bt,y>et&&!this._isInitialRender&&!this._growAfterOpen&&(U=i.x-et/2)}return{top:s,left:U,bottom:m,right:st,width:y,height:a}}_setBoundingBoxStyles(i,t){let e=this._calculateBoundingBoxRect(i,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;o.width=Ct(e.width),o.height=Ct(e.height),o.top=Ct(e.top)||"auto",o.bottom=Ct(e.bottom)||"auto",o.left=Ct(e.left)||"auto",o.right=Ct(e.right)||"auto",t.overlayX==="center"?o.alignItems="center":o.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?o.justifyContent="center":o.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",a&&(o.maxHeight=Ct(a)),s&&(o.maxWidth=Ct(s))}this._lastBoundingBoxSize=e,sn(this._boundingBox.style,o)}_resetBoundingBoxStyles(){sn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){sn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,t){let e={},o=this._hasExactPosition(),a=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(o){let y=this._viewportRuler.getViewportScrollPosition();sn(e,this._getExactOverlayY(t,i,y)),sn(e,this._getExactOverlayX(t,i,y))}else e.position="static";let m="",h=this._getOffset(t,"x"),v=this._getOffset(t,"y");h&&(m+=`translateX(${h}px) `),v&&(m+=`translateY(${v}px)`),e.transform=m.trim(),s.maxHeight&&(o?e.maxHeight=Ct(s.maxHeight):a&&(e.maxHeight="")),s.maxWidth&&(o?e.maxWidth=Ct(s.maxWidth):a&&(e.maxWidth="")),sn(this._pane.style,e)}_getExactOverlayY(i,t,e){let o={top:"",bottom:""},a=this._getOverlayPoint(t,this._overlayRect,i);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,e)),i.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;o.bottom=`${s-(a.y+this._overlayRect.height)}px`}else o.top=Ct(a.y);return o}_getExactOverlayX(i,t,e){let o={left:"",right:""},a=this._getOverlayPoint(t,this._overlayRect,i);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,e));let s;if(this._isRtl()?s=i.overlayX==="end"?"left":"right":s=i.overlayX==="end"?"right":"left",s==="right"){let m=this._document.documentElement.clientWidth;o.right=`${m-(a.x+this._overlayRect.width)}px`}else o.left=Ct(a.x);return o}_getScrollVisibility(){let i=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Xs(i,e),isOriginOutsideView:La(i,e),isOverlayClipped:Xs(t,e),isOverlayOutsideView:La(t,e)}}_subtractOverflows(i,...t){return t.reduce((e,o)=>e-Math.max(o,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+i-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,t){return t==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&wa(i).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof E)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let t=i.width||0,e=i.height||0;return{top:i.y,bottom:i.y+e,left:i.x,right:i.x+t,height:e,width:t}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();i&&(t.style.display="block");let e=t.getBoundingClientRect();return i&&(t.style.display=""),e}};function sn(n,i){for(let t in i)i.hasOwnProperty(t)&&(n[t]=i[t]);return n}function Qs(n){if(typeof n!="number"&&n!=null){let[i,t]=n.split(Pd);return!t||t==="px"?parseFloat(i):null}return n||null}function Zs(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Ad(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Js="cdk-global-overlay-wrapper";function Ne(n){return new Ji}var Ji=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let t=i.getConfig();this._overlayRef=i,this._width&&!t.width&&i.updateSize({width:this._width}),this._height&&!t.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Js),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:o,height:a,maxWidth:s,maxHeight:m}=e,h=(o==="100%"||o==="100vw")&&(!s||s==="100%"||s==="100vw"),v=(a==="100%"||a==="100vh")&&(!m||m==="100%"||m==="100vh"),y=this._xPosition,U=this._xOffset,st=this._overlayRef.getConfig().direction==="rtl",bt="",et="",ft="";h?ft="flex-start":y==="center"?(ft="center",st?et=U:bt=U):st?y==="left"||y==="end"?(ft="flex-end",bt=U):(y==="right"||y==="start")&&(ft="flex-start",et=U):y==="left"||y==="start"?(ft="flex-start",bt=U):(y==="right"||y==="end")&&(ft="flex-end",et=U),i.position=this._cssPosition,i.marginLeft=h?"0":bt,i.marginTop=v?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=h?"0":et,t.justifyContent=ft,t.alignItems=v?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(Js),e.justifyContent=e.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},rl=(()=>{class n{_injector=r(G);constructor(){}global(){return Ne()}flexibleConnectedTo(t){return ci(this._injector,t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),di=new _("OVERLAY_DEFAULT_CONFIG");function Se(n,i){n.get(xt).load(al);let t=n.get(to),e=n.get(nt),o=n.get(pt),a=n.get(Re),s=n.get(Et),m=n.get(lt,null,{optional:!0})||n.get(Kt).createRenderer(null,null),h=new le(i),v=n.get(di,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||s.value,"showPopover"in e.body?h.usePopover=i?.usePopover??v:h.usePopover=!1;let y=e.createElement("div"),U=e.createElement("div");y.id=o.getId("cdk-overlay-"),y.classList.add("cdk-overlay-pane"),U.appendChild(y),h.usePopover&&(U.setAttribute("popover","manual"),U.classList.add("cdk-overlay-popover"));let st=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return Va(st)?st.after(U):st?.type==="parent"?st.element.appendChild(U):t.getContainerElement().appendChild(U),new xn(new ri(y,a,n),U,y,h,n.get(T),n.get(il),e,n.get(fn),n.get(ol),i?.disableAnimations??n.get(Ii,null,{optional:!0})==="NoopAnimations",n.get(Di),m)}var eo=(()=>{class n{scrollStrategies=r(el);_positionBuilder=r(rl);_injector=r(G);constructor(){}create(t){return Se(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Td=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Rd=new _("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(G);return()=>ln(n)}}),Cn=(()=>{class n{elementRef=r(E);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),sl=new _("cdk-connected-overlay-default-config"),no=(()=>{class n{_dir=r(Et,{optional:!0});_injector=r(G);_overlayRef;_templatePortal;_backdropSubscription=Ot.EMPTY;_attachSubscription=Ot.EMPTY;_detachSubscription=Ot.EMPTY;_positionSubscription=Ot.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=r(Rd);_ngZone=r(T);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!="string"&&this._assignConfig(t)}backdropClick=new W;positionChange=new W;attach=new W;detach=new W;overlayKeydown=new W;overlayOutsideClick=new W;constructor(){let t=r(me),e=r(Xe),o=r(sl,{optional:!0}),a=r(di,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new se(t,e),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Td);let t=this._overlayRef=Se(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(e=>{this.overlayKeydown.next(e),e.keyCode===27&&!this.disableClose&&!It(e)&&(e.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(e=>{let o=this._getOriginElement(),a=Tt(e);(!o||o!==a&&!o.contains(a))&&this.overlayOutsideClick.next(e)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),e=new le({direction:this._dir||"ltr",positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(e.height=this.height),(this.minWidth||this.minWidth===0)&&(e.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(e.minHeight=this.minHeight),this.backdropClass&&(e.backdropClass=this.backdropClass),this.panelClass&&(e.panelClass=this.panelClass),e}_updatePositionStrategy(t){let e=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let t=ci(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof Cn?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Cn?this.origin.elementRef.nativeElement:this.origin instanceof E?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(e=>this.backdropClick.emit(e)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Rr(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",R],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",R],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",R],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",R],push:[2,"cdkConnectedOverlayPush","push",R],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",R],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",R],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[St]})}return n})(),ze=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({providers:[eo],imports:[Y,si,Fa,Fa]})}return n})();var Fd=["mat-menu-item",""],Ld=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Bd=["mat-icon, [matMenuItemIcon]","*"];function Vd(n,i){n&1&&(ye(),l(0,"svg",2),A(1,"polygon",3),c())}var Nd=["*"];function zd(n,i){if(n&1){let t=Dt();Lt(0,"div",0),Gr("click",function(){ct(t);let o=D();return dt(o.closed.emit("click"))})("animationstart",function(o){ct(t);let a=D();return dt(a._onAnimationStart(o.animationName))})("animationend",function(o){ct(t);let a=D();return dt(a._onAnimationDone(o.animationName))})("animationcancel",function(o){ct(t);let a=D();return dt(a._onAnimationDone(o.animationName))}),Lt(1,"div",1),M(2),Bt()()}if(n&2){let t=D();ht(t._classList),S("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Jt("id",t.panelId),w("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var za=new _("MAT_MENU_PANEL"),mi=(()=>{class n{_elementRef=r(E);_document=r(nt);_focusMonitor=r(te);_parentMenu=r(za,{optional:!0});_changeDetectorRef=r(rt);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new b;_focused=new b;_highlighted=!1;_triggersSubmenu=!1;constructor(){r(xt).load(ee),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let o=0;o<e.length;o++)e[o].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,o){e&1&&f("click",function(s){return o._checkDisabled(s)})("mouseenter",function(){return o._handleMouseEnter()}),e&2&&(w("role",o.role)("tabindex",o._getTabIndex())("aria-disabled",o.disabled)("disabled",o.disabled||null),S("mat-mdc-menu-item-highlighted",o._highlighted)("mat-mdc-menu-item-submenu-trigger",o._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",R],disableRipple:[2,"disableRipple","disableRipple",R]},exportAs:["matMenuItem"],attrs:Fd,ngContentSelectors:Bd,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,o){e&1&&(q(Ld),M(0),l(1,"span",0),M(2,1),c(),A(3,"div",1),L(4,Vd,2,0,":svg:svg",2)),e&2&&(d(3),x("matRippleDisabled",o.disableRipple||o.disabled)("matRippleTrigger",o._getHostElement()),d(),B(o._triggersSubmenu?4:-1))},dependencies:[Ce],encapsulation:2,changeDetection:0})}return n})();var Wd=new _("MatMenuContent");var jd=new _("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Na="_mat-menu-enter",io="_mat-menu-exit",Sn=(()=>{class n{_elementRef=r(E);_changeDetectorRef=r(rt);_injector=r(G);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ot();_allItems;_directDescendantItems=new qe;_classList={};_panelAnimationState="void";_animationDone=new b;_isAnimating=j(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,o=F({},this._classList);e&&e.length&&e.split(" ").forEach(a=>{o[a]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(a=>{o[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=o}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new W;close=this.closed;panelId=r(pt).getId("mat-menu-panel-");constructor(){let t=r(jd);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ii(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Pt(this._directDescendantItems),Zt(t=>Ft(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let o=t.toArray(),a=Math.max(0,Math.min(o.length-1,e.activeItemIndex||0));o[a]&&!o[a].disabled?e.setActiveItem(a):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Pt(this._directDescendantItems),Zt(e=>Ft(...e.map(o=>o._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,o=this._keyManager;switch(e){case 27:It(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&o.setFocusOrigin("keyboard"),o.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=At(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let o=this._keyManager;o.setFocusOrigin(t).setFirstItemActive(),!o.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=Rt(F({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===io;(e||t===Na)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Na||t===io)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(io),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Na:io)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Pt(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-menu"]],contentQueries:function(e,o,a){if(e&1&&Nt(a,Wd,5)(a,mi,5)(a,mi,4),e&2){let s;I(s=P())&&(o.lazyContent=s.first),I(s=P())&&(o._allItems=s),I(s=P())&&(o.items=s)}},viewQuery:function(e,o){if(e&1&&ut(me,5),e&2){let a;I(a=P())&&(o.templateRef=a.first)}},hostVars:3,hostBindings:function(e,o){e&2&&w("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",R],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:R(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[K([{provide:za,useExisting:n}])],ngContentSelectors:Nd,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,o){e&1&&(q(),jr(0,zd,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Hd=new _("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(G);return()=>ln(n)}});var Mn=new WeakMap,Ud=(()=>{class n{_canHaveBackdrop;_element=r(E);_viewContainerRef=r(Xe);_menuItemInstance=r(mi,{optional:!0,self:!0});_dir=r(Et,{optional:!0});_focusMonitor=r(te);_ngZone=r(T);_injector=r(G);_scrollStrategy=r(Hd);_changeDetectorRef=r(rt);_animationsDisabled=ot();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Ot.EMPTY;_menuCloseSubscription=Ot.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=r(za,{optional:!0});this._parentMaterialMenu=e instanceof Sn?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Mn.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let o=Mn.get(e);Mn.set(e,this),o&&o!==this&&o._closeMenu();let a=this._createOverlay(e),s=a.getConfig(),m=s.positionStrategy;this._setPosition(e,m),this._canHaveBackdrop?s.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:s.hasBackdrop=e.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof Sn&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(at(e.close)).subscribe(()=>{m.withLockedPosition(!1).reapplyLastPosition(),m.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,o=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),o instanceof Sn&&this._ownsMenu(o)?(this._pendingRemoval=o._animationDone.pipe(kt(1)).subscribe(()=>{e.detach(),Mn.has(o)||o.lazyContent?.detach()}),o._setIsOpen(!1)):(e.detach(),o?.lazyContent?.detach()),o&&this._ownsMenu(o)&&Mn.delete(o),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Se(this._injector,e),this._overlayRef.keydownEvents().subscribe(o=>{this._menu instanceof Sn&&this._menu._handleKeydown(o)})}return this._overlayRef}_getOverlayConfig(t){return new le({positionStrategy:ci(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(o=>{this._ngZone.run(()=>{let a=o.connectionPair.overlayX==="start"?"after":"before",s=o.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(a,s)})})}_setPosition(t,e){let[o,a]=t.xPosition==="before"?["end","start"]:["start","end"],[s,m]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[h,v]=[s,m],[y,U]=[o,a],st=0;if(this._triggersSubmenu()){if(U=o=t.xPosition==="before"?"start":"end",a=y=o==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let bt=this._parentMaterialMenu.items.first;this._parentInnerPadding=bt?bt._getHostElement().offsetTop:0}st=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(h=s==="top"?"bottom":"top",v=m==="top"?"bottom":"top");e.withPositions([{originX:o,originY:h,overlayX:y,overlayY:s,offsetY:st},{originX:a,originY:h,overlayX:U,overlayY:s,offsetY:st},{originX:o,originY:v,overlayX:y,overlayY:m,offsetY:-st},{originX:a,originY:v,overlayX:U,overlayY:m,offsetY:-st}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),o=this._parentMaterialMenu?this._parentMaterialMenu.closed:ve(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Q(s=>this._menuOpen&&s!==this._menuItemInstance)):ve();return Ft(t,o,a,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new se(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Mn.get(t)===this}_triggerIsAriaDisabled(){return R(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){zr()};static \u0275dir=k({type:n})}return n})(),ll=(()=>{class n extends Ud{_cleanupTouchstart;_hoverSubscription=Ot.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new W;onMenuOpen=this.menuOpened;menuClosed=new W;onMenuClose=this.menuClosed;constructor(){super(!0);let t=r(lt);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{en(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){tn(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,o){e&1&&f("click",function(s){return o._handleClick(s)})("mousedown",function(s){return o._handleMousedown(s)})("keydown",function(s){return o._handleKeydown(s)}),e&2&&w("aria-haspopup",o.menu?"menu":null)("aria-expanded",o.menuOpen)("aria-controls",o.menuOpen?o.menu==null?null:o.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[$]})}return n})();var En=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[ge,ze,Y,ke]})}return n})();var cn=class{constructor(i,t,e){this.id=i;this.name=t;this.schedule=e}};var dn=class{constructor(i,t,e,o,a,s){this.numberOfSets=i;this.numberOfExercises=t;this.preparationTime=e;this.workoutTime=o;this.restTime=a;this.restTimeBetweenSets=s}};var tt=class n{applicationName=$localize`:Application name@@applicationName:Tabata Max`;exampleWorkoutName=$localize`:Example workout name@@exampleWorkoutName:Basic Strength Workout`;static \u0275fac=function(t){return new(t||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var Oe=class n{static SIMPLE_WORKOUT;lastDeletedWorkout;selectedWorkout;workouts;translations=r(tt);localStoragePersistenceService=r(Bi);signals=r(gt);constructor(){n.SIMPLE_WORKOUT=new cn("quick_workout",this.translations.exampleWorkoutName,new dn(6,6,15,30,30,60)),this.selectedWorkout=this.signals.selectedWorkout.toSignal(),this.workouts=this.signals.workouts.toSignal();let i=this.localStoragePersistenceService.getStoredWorkouts(),t=this.localStoragePersistenceService.getStoredWorkoutSession();i&&this.signals.workouts.update(()=>i);let e=this.workouts().length?this.isWorkoutPresent(t?.lastWorkoutId)?t?.lastWorkoutId:this.workouts()[0].id:void 0;e&&this.selectWorkout(e)}selectWorkout(i){let t=this.workouts().find(e=>e.id===i);t&&this.signals.selectedWorkout.update(()=>t)}updateWorkout(i){let t=this.workouts().findIndex(e=>e.id===i.id);t>=0&&(this.signals.workouts.update(e=>{let o=[...e];return o.splice(t,1,i),o}),this.signals.selectedWorkout.update(()=>i),this.localStoragePersistenceService.persistWorkouts(this.workouts()))}addWorkout(i){i.id=crypto.randomUUID(),this.signals.workouts.update(t=>[...t,i]),this.signals.selectedWorkout.update(()=>i),this.localStoragePersistenceService.persistWorkouts(this.workouts())}deleteCurrentWorkout(){this.selectedWorkout()&&(this.lastDeletedWorkout=this.selectedWorkout(),this.deleteWorkout(this.selectedWorkout().id))}deleteWorkout(i){let t=this.workouts().findIndex(e=>e.id===i);t>=0&&(this.signals.workouts.update(e=>{let o=[...e];return o.splice(t,1),o}),this.signals.selectedWorkout.update(()=>this.workouts().length>0?this.workouts()[0]:void 0),this.localStoragePersistenceService.persistWorkouts(this.workouts()))}restoreLastDeletedWorkout(){this.lastDeletedWorkout&&(this.addWorkout(this.lastDeletedWorkout),this.localStoragePersistenceService.persistWorkouts(this.workouts()),this.lastDeletedWorkout=void 0)}saveCurrentWorkoutSession(){let i=this.selectedWorkout()?.id;i&&this.localStoragePersistenceService.persistWorkoutSession(i)}isWorkoutPresent(i){let t=!1;return i&&(t=!!this.workouts()?.find(o=>o.id===i)),t}static \u0275fac=function(t){return new(t||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var $d=["*",[["mat-toolbar-row"]]],qd=["*","mat-toolbar-row"],Xd=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),oo=(()=>{class n{_elementRef=r(E);_platform=r(X);_document=r(nt);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,o,a){if(e&1&&Nt(a,Xd,5),e&2){let s;I(s=P())&&(o._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,o){e&2&&(ht(o.color?"mat-"+o.color:""),S("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:qd,decls:2,vars:0,template:function(e,o){e&1&&(q($d),M(0),M(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ao=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Y]})}return n})();function Kd(n,i){if(n&1){let t=Dt();l(0,"div",1)(1,"button",2),f("click",function(){ct(t);let o=D();return dt(o.action())}),u(2),c()()}if(n&2){let t=D();d(2),J(" ",t.data.action," ")}}var Yd=["label"];function Qd(n,i){}var Zd=Math.pow(2,31)-1,ui=class{_overlayRef;instance;containerInstance;_afterDismissed=new b;_afterOpened=new b;_onAction=new b;_durationTimeoutId;_dismissedByAction=!1;constructor(i,t){this._overlayRef=t,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,Zd))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},dl=new _("MatSnackBarData"),In=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Jd=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),tm=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),em=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),nm=(()=>{class n{snackBarRef=r(ui);data=r(dl);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,o){e&1&&(l(0,"div",0),u(1),c(),L(2,Kd,3,1,"div",1)),e&2&&(d(),J(" ",o.data.message,`
`),d(),B(o.hasAction?2:-1))},dependencies:[_e,Jd,tm,em],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Wa="_mat-snack-bar-enter",ja="_mat-snack-bar-exit",im=(()=>{class n extends Le{_ngZone=r(T);_elementRef=r(E);_changeDetectorRef=r(rt);_platform=r(X);_animationsDisabled=ot();snackBarConfig=r(In);_document=r(nt);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=r(G);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new b;_onExit=new b;_onEnter=new b;_animationState="void";_live;_label;_role;_liveElementId=r(pt).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===ja?this._completeExit():t===Wa&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?At(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Wa)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Wa)},200)))}exit(){return this._destroyed?ve(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?At(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ja)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(ja),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(s=>t.classList.add(s)):t.classList.add(e)),this._exposeToModals();let o=this._label.nativeElement,a="mdc-snackbar__label";o.classList.toggle(a,!o.querySelector(`.${a}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<e.length;o++){let a=e[o],s=a.getAttribute("aria-owns");this._trackedModals.add(a),s?s.indexOf(t)===-1&&a.setAttribute("aria-owns",s+" "+t):a.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let o=e.replace(this._liveElementId,"").trim();o.length>0?t.setAttribute("aria-owns",o):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),o=t.querySelector("[aria-live]");if(e&&o){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(a=document.activeElement),e.removeAttribute("aria-hidden"),o.appendChild(e),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,o){if(e&1&&ut(Be,7)(Yd,7),e&2){let a;I(a=P())&&(o._portalOutlet=a.first),I(a=P())&&(o._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,o){e&1&&f("animationend",function(s){return o.onAnimationEnd(s.animationName)})("animationcancel",function(s){return o.onAnimationEnd(s.animationName)}),e&2&&S("mat-snack-bar-container-enter",o._animationState==="visible")("mat-snack-bar-container-exit",o._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!o._animationsDisabled)},features:[$],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),Yt(4,Qd,0,0,"ng-template",4),c(),A(5,"div"),c()()),e&2&&(d(5),w("aria-live",o._live)("role",o._role)("id",o._liveElementId))},dependencies:[Be],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),om=new _("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new In}),ml=(()=>{class n{_live=r(Qn);_injector=r(G);_breakpointObserver=r(cs);_parentSnackBar=r(n,{optional:!0,skipSelf:!0});_defaultConfig=r(om);_animationsDisabled=ot();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=nm;snackBarContainerComponent=im;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",o){let a=F(F({},this._defaultConfig),o);return a.data={message:t,action:e},a.announcementMessage===t&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let o=e&&e.viewContainerRef&&e.viewContainerRef.injector,a=G.create({parent:o||this._injector,providers:[{provide:In,useValue:e}]}),s=new re(this.snackBarContainerComponent,e.viewContainerRef,a),m=t.attach(s);return m.instance.snackBarConfig=e,m.instance}_attach(t,e){let o=F(F(F({},new In),this._defaultConfig),e),a=this._createOverlay(o),s=this._attachSnackBarContainer(a,o),m=new ui(s,a);if(t instanceof me){let h=new se(t,null,{$implicit:o.data,snackBarRef:m});m.instance=s.attachTemplatePortal(h)}else{let h=this._createInjector(o,m),v=new re(t,void 0,h),y=s.attachComponentPortal(v);m.instance=y.instance}return this._breakpointObserver.observe(ds.HandsetPortrait).pipe(at(a.detachments())).subscribe(h=>{a.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),o.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(m,o),this._openedSnackBarRef=m,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new le;e.direction=t.direction;let o=Ne(this._injector),a=t.direction==="rtl",s=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!a||t.horizontalPosition==="end"&&a,m=!s&&t.horizontalPosition!=="center";return s?o.left("0"):m?o.right("0"):o.centerHorizontally(),t.verticalPosition==="top"?o.top("0"):o.bottom("0"),e.positionStrategy=o,e.disableAnimations=this._animationsDisabled,Se(this._injector,e)}_createInjector(t,e){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector;return G.create({parent:o||this._injector,providers:[{provide:ui,useValue:e},{provide:dl,useValue:t.data}]})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ro=class n extends tt{navigationDrawerButtonLabel=$localize`:Navigation drawer button label@@navigationDrawerButtonLabel:Navigate`;navigationDrawerButtonLabelDescriptionLabel=$localize`:Longer description of Navigation drawer button@@navigationDrawerButtonLabelDescriptionLabel:Navigation Menu`;startWorkoutButtonLabel=$localize`:Start button label@@startWorkoutButtonLabel:Start`;startWorkoutButtonDescriptionLabel=$localize`:Longer description of Start button@@startWorkoutButtonDescriptionLabel:Start Workout`;settingsIconButtonDescriptionLabel=$localize`:Settings button description@@settingsIconButtonDescriptionLabel:Settings`;moreMenuDescriptionLabel=$localize`:More menu description@@moreMenuDescriptionLabel:More`;editWorkoutIconButtonLabel=$localize`:Edit button label@@editWorkoutIconButtonLabel:Edit`;editWorkoutIconButtonDescriptionLabel=$localize`:Longer description of Edit button@@editWorkoutIconButtonDescriptionLabel:Edit Workout`;deleteWorkoutIconButtonLabel=$localize`:Delete button label@@deleteWorkoutIconButtonLabel:Delete`;deleteWorkoutIconButtonDescriptionLabel=$localize`:Longer description of Delete button@@deleteWorkoutIconButtonDescriptionLabel:Delete Workout`;newWorkoutIconButtonLabel=$localize`:New button label@@newWorkoutIconButtonLabel:New`;newWorkoutIconButtonDescriptionLabel=$localize`:Longer description of New button@@newWorkoutIconButtonDescriptionLabel:New workout`;restoreWorkoutButtonLabel=$localize`:Restore button label@@restoreWorkoutButtonLabel:Restore`;workoutDeletedLabel=$localize`:User has just deleted a workout@@workoutDeletedLabel:Workout deleted.`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var so=class n extends tt{saveSettingsButtonLabel=$localize`:Save button label@@saveSettingsButtonLabel:Save`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var _l=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,e){this._renderer=t,this._elementRef=e}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(e){return new(e||n)(mt(lt),mt(E))};static \u0275dir=k({type:n})}return n})(),bl=(()=>{class n extends _l{static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275dir=k({type:n,features:[$]})}return n})(),He=new _("");var am={provide:He,useExisting:Wt(()=>Tn),multi:!0};function rm(){let n=ya()?ya().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var sm=new _(""),Tn=(()=>{class n extends _l{_compositionMode;_composing=!1;constructor(t,e,o){super(t,e),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!rm())}writeValue(t){let e=t??"";this.setProperty("value",e)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(e){return new(e||n)(mt(lt),mt(E),mt(sm,8))};static \u0275dir=k({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,o){e&1&&f("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[K([am]),$]})}return n})();function Ua(n){return n==null||Ga(n)===0}function Ga(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Ue=new _(""),xo=new _(""),lm=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,$t=class{static min(i){return vl(i)}static max(i){return yl(i)}static required(i){return cm(i)}static requiredTrue(i){return dm(i)}static email(i){return mm(i)}static minLength(i){return um(i)}static maxLength(i){return hm(i)}static pattern(i){return pm(i)}static nullValidator(i){return co()}static compose(i){return Sl(i)}static composeAsync(i){return Ol(i)}};function vl(n){return i=>{if(i.value==null||n==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t<n?{min:{min:n,actual:i.value}}:null}}function yl(n){return i=>{if(i.value==null||n==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t>n?{max:{max:n,actual:i.value}}:null}}function cm(n){return Ua(n.value)?{required:!0}:null}function dm(n){return n.value===!0?null:{required:!0}}function mm(n){return Ua(n.value)||lm.test(n.value)?null:{email:!0}}function um(n){return i=>{let t=i.value?.length??Ga(i.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function hm(n){return i=>{let t=i.value?.length??Ga(i.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function pm(n){if(!n)return co;let i,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),i=new RegExp(t)):(t=n.toString(),i=n),e=>{if(Ua(e.value))return null;let o=e.value;return i.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function co(n){return null}function wl(n){return n!=null}function xl(n){return Hr(n)?Ir(n):n}function Cl(n){let i={};return n.forEach(t=>{i=t!=null?F(F({},i),t):i}),Object.keys(i).length===0?null:i}function kl(n,i){return i.map(t=>t(n))}function fm(n){return!n.validate}function Ml(n){return n.map(i=>fm(i)?i:t=>i.validate(t))}function Sl(n){if(!n)return null;let i=n.filter(wl);return i.length==0?null:function(t){return Cl(kl(t,i))}}function $a(n){return n!=null?Sl(Ml(n)):null}function Ol(n){if(!n)return null;let i=n.filter(wl);return i.length==0?null:function(t){let e=kl(t,i).map(xl);return Pr(e).pipe(wt(Cl))}}function qa(n){return n!=null?Ol(Ml(n)):null}function ul(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function Dl(n){return n._rawValidators}function El(n){return n._rawAsyncValidators}function Ha(n){return n?Array.isArray(n)?n:[n]:[]}function mo(n,i){return Array.isArray(n)?n.includes(i):n===i}function hl(n,i){let t=Ha(i);return Ha(n).forEach(o=>{mo(t,o)||t.push(o)}),t}function pl(n,i){return Ha(i).filter(t=>!mo(n,t))}var uo=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=$a(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=qa(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,t){return this.control?this.control.hasError(i,t):!1}getError(i,t){return this.control?this.control.getError(i,t):null}},We=class extends uo{name;get formDirective(){return null}get path(){return null}},ce=class extends uo{_parent=null;name=null;valueAccessor=null},ho=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Co=(()=>{class n extends ho{constructor(t){super(t)}static \u0275fac=function(e){return new(e||n)(mt(ce,2))};static \u0275dir=k({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,o){e&2&&S("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[$]})}return n})(),ko=(()=>{class n extends ho{constructor(t){super(t)}static \u0275fac=function(e){return new(e||n)(mt(We,10))};static \u0275dir=k({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,o){e&2&&S("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[$]})}return n})();var hi="VALID",lo="INVALID",Pn="PENDING",pi="DISABLED",je=class{},po=class extends je{value;source;constructor(i,t){super(),this.value=i,this.source=t}},gi=class extends je{pristine;source;constructor(i,t){super(),this.pristine=i,this.source=t}},_i=class extends je{touched;source;constructor(i,t){super(),this.touched=i,this.source=t}},An=class extends je{status;source;constructor(i,t){super(),this.status=i,this.source=t}},fo=class extends je{source;constructor(i){super(),this.source=i}},go=class extends je{source;constructor(i){super(),this.source=i}};function Il(n){return(Mo(n)?n.validators:n)||null}function gm(n){return Array.isArray(n)?$a(n):n||null}function Pl(n,i){return(Mo(i)?i.asyncValidators:n)||null}function _m(n){return Array.isArray(n)?qa(n):n||null}function Mo(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function bm(n,i,t){let e=n.controls;if(!(i?Object.keys(e):e).length)throw new ne(1e3,"");if(!e[t])throw new ne(1001,"")}function vm(n,i,t){n._forEachChild((e,o)=>{if(t[o]===void 0)throw new ne(-1002,"")})}var _o=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,t){this._assignValidators(i),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return he(this.statusReactive)}set status(i){he(()=>this.statusReactive.set(i))}_status=Z(()=>this.statusReactive());statusReactive=j(void 0);get valid(){return this.status===hi}get invalid(){return this.status===lo}get pending(){return this.status===Pn}get disabled(){return this.status===pi}get enabled(){return this.status!==pi}errors;get pristine(){return he(this.pristineReactive)}set pristine(i){he(()=>this.pristineReactive.set(i))}_pristine=Z(()=>this.pristineReactive());pristineReactive=j(!0);get dirty(){return!this.pristine}get touched(){return he(this.touchedReactive)}set touched(i){he(()=>this.touchedReactive.set(i))}_touched=Z(()=>this.touchedReactive());touchedReactive=j(!1);get untouched(){return!this.touched}_events=new b;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(hl(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(hl(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(pl(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(pl(i,this._rawAsyncValidators))}hasValidator(i){return mo(this._rawValidators,i)}hasAsyncValidator(i){return mo(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let t=this.touched===!1;this.touched=!0;let e=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(Rt(F({},i),{sourceControl:e})),t&&i.emitEvent!==!1&&this._events.next(new _i(!0,e))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(i))}markAsUntouched(i={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:e})}),i.onlySelf||this._parent?._updateTouched(i,e),t&&i.emitEvent!==!1&&this._events.next(new _i(!1,e))}markAsDirty(i={}){let t=this.pristine===!0;this.pristine=!1;let e=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(Rt(F({},i),{sourceControl:e})),t&&i.emitEvent!==!1&&this._events.next(new gi(!1,e))}markAsPristine(i={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,e),t&&i.emitEvent!==!1&&this._events.next(new gi(!0,e))}markAsPending(i={}){this.status=Pn;let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new An(this.status,t)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(Rt(F({},i),{sourceControl:t}))}disable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=pi,this.errors=null,this._forEachChild(o=>{o.disable(Rt(F({},i),{onlySelf:!0}))}),this._updateValue();let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new po(this.value,e)),this._events.next(new An(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Rt(F({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=hi,this._forEachChild(e=>{e.enable(Rt(F({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(Rt(F({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(i,t){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===hi||this.status===Pn)&&this._runAsyncValidator(e,i.emitEvent)}let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new po(this.value,t)),this._events.next(new An(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(Rt(F({},i),{sourceControl:t}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?pi:hi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,t){if(this.asyncValidator){this.status=Pn,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:i!==!1};let e=xl(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,t={}){this.errors=i,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(i){let t=i;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((e,o)=>e&&e._find(o),this)}getError(i,t){let e=t?this.get(t):this;return e?.errors?e.errors[i]:null}hasError(i,t){return!!this.getError(i,t)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,t,e){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||e)&&this._events.next(new An(this.status,t)),this._parent&&this._parent._updateControlsErrors(i,t,e)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?pi:this.errors?lo:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Pn)?Pn:this._anyControlsHaveStatus(lo)?lo:hi}_anyControlsHaveStatus(i){return this._anyControls(t=>t.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,t){let e=!this._anyControlsDirty(),o=this.pristine!==e;this.pristine=e,i.onlySelf||this._parent?._updatePristine(i,t),o&&this._events.next(new gi(this.pristine,t))}_updateTouched(i={},t){this.touched=this._anyControlsTouched(),this._events.next(new _i(this.touched,t)),i.onlySelf||this._parent?._updateTouched(i,t)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Mo(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=gm(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=_m(this._rawAsyncValidators)}},De=class extends _o{constructor(i,t,e){super(Il(t),Pl(e,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,t){return this.controls[i]?this.controls[i]:(this.controls[i]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(i,t,e={}){this.registerControl(i,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(i,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(i,t,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],t&&this.registerControl(i,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,t={}){vm(this,!0,i),Object.keys(i).forEach(e=>{bm(this,!0,e),this.controls[e].setValue(i[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(i,t={}){i!=null&&(Object.keys(i).forEach(e=>{let o=this.controls[e];o&&o.patchValue(i[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i={},t={}){this._forEachChild((e,o)=>{e.reset(i?i[o]:null,Rt(F({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new go(this))}getRawValue(){return this._reduceChildren({},(i,t,e)=>(i[e]=t.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(t,e)=>e._syncPendingControls()?!0:t);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(t=>{let e=this.controls[t];e&&i(e,t)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[t,e]of Object.entries(this.controls))if(this.contains(t)&&i(e))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(t,e,o)=>((e.enabled||this.disabled)&&(t[o]=e.value),t))}_reduceChildren(i,t){let e=i;return this._forEachChild((o,a)=>{e=t(e,o,a)}),e}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var bi=new _("",{factory:()=>So}),So="always";function ym(n,i){return[...i.path,n]}function bo(n,i,t=So){Xa(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),xm(n,i),km(n,i),Cm(n,i),wm(n,i)}function vo(n,i,t=!0){let e=()=>{};i?.valueAccessor?.registerOnChange(e),i?.valueAccessor?.registerOnTouched(e),wo(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function yo(n,i){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(i)})}function wm(n,i){if(i.valueAccessor.setDisabledState){let t=e=>{i.valueAccessor.setDisabledState(e)};n.registerOnDisabledChange(t),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function Xa(n,i){let t=Dl(n);i.validator!==null?n.setValidators(ul(t,i.validator)):typeof t=="function"&&n.setValidators([t]);let e=El(n);i.asyncValidator!==null?n.setAsyncValidators(ul(e,i.asyncValidator)):typeof e=="function"&&n.setAsyncValidators([e]);let o=()=>n.updateValueAndValidity();yo(i._rawValidators,o),yo(i._rawAsyncValidators,o)}function wo(n,i){let t=!1;if(n!==null){if(i.validator!==null){let o=Dl(n);if(Array.isArray(o)&&o.length>0){let a=o.filter(s=>s!==i.validator);a.length!==o.length&&(t=!0,n.setValidators(a))}}if(i.asyncValidator!==null){let o=El(n);if(Array.isArray(o)&&o.length>0){let a=o.filter(s=>s!==i.asyncValidator);a.length!==o.length&&(t=!0,n.setAsyncValidators(a))}}}let e=()=>{};return yo(i._rawValidators,e),yo(i._rawAsyncValidators,e),t}function xm(n,i){i.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Al(n,i)})}function Cm(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Al(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function Al(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function km(n,i){let t=(e,o)=>{i.valueAccessor.writeValue(e),o&&i.viewToModelUpdate(e)};n.registerOnChange(t),i._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Tl(n,i){n==null,Xa(n,i)}function Mm(n,i){return wo(n,i)}function Rl(n,i){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(i,t.currentValue)}function Sm(n){return Object.getPrototypeOf(n.constructor)===bl}function Fl(n,i){n._syncPendingControls(),i.forEach(t=>{let e=t.control;e.updateOn==="submit"&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function Ll(n,i){if(!i)return null;Array.isArray(i);let t,e,o;return i.forEach(a=>{a.constructor===Tn?t=a:Sm(a)?e=a:o=a}),o||e||t||null}function Om(n,i){let t=n.indexOf(i);t>-1&&n.splice(t,1)}var Dm={provide:We,useExisting:Wt(()=>vi)},fi=Promise.resolve(),vi=(()=>{class n extends We{callSetDisabledState;get submitted(){return he(this.submittedReactive)}_submitted=Z(()=>this.submittedReactive());submittedReactive=j(!1);_directives=new Set;form;ngSubmit=new W;options;constructor(t,e,o){super(),this.callSetDisabledState=o,this.form=new De({},$a(t),qa(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){fi.then(()=>{let e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),bo(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){fi.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){fi.then(()=>{let e=this._findContainer(t.path),o=new De({});Tl(o,t),e.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){fi.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){fi.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Fl(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new fo(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(e){return new(e||n)(mt(Ue,10),mt(xo,10),mt(bi,8))};static \u0275dir=k({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,o){e&1&&f("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[K([Dm]),$]})}return n})();function fl(n,i){let t=n.indexOf(i);t>-1&&n.splice(t,1)}function gl(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Gt=class extends _o{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,t,e){super(Il(t),Pl(e,t)),this._applyFormState(i),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Mo(t)&&(t.nonNullable||t.initialValueIsDefault)&&(gl(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,t={}){this.value=this._pendingValue=i,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(i,t={}){this.setValue(i,t)}reset(i=this.defaultValue,t={}){this._applyFormState(i),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new go(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){fl(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){fl(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){gl(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Em=n=>n instanceof Gt;var Oo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),Im={provide:He,useExisting:Wt(()=>Ka),multi:!0},Ka=(()=>{class n extends bl{writeValue(t){let e=t??"";this.setProperty("value",e)}registerOnChange(t){this.onChange=e=>{t(e==""?null:parseFloat(e))}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275dir=k({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,o){e&1&&f("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[K([Im]),$]})}return n})();var Pm=(()=>{class n extends We{callSetDisabledState;get submitted(){return he(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Z(()=>this._submittedReactive());_submittedReactive=j(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,e,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(wo(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let e=this.form.get(t.path);return bo(e,t,this.callSetDisabledState),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){vo(t.control||null,t,!1),Om(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,e){this.form.get(t.path).setValue(e)}onReset(){this.resetForm()}resetForm(t=void 0,e={}){this.form.reset(t,e),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Fl(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new fo(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let e=t.control,o=this.form.get(t.path);e!==o&&(vo(e||null,t),Em(o)&&(bo(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let e=this.form.get(t.path);Tl(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let e=this.form?.get(t.path);e&&Mm(e,t)&&e.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Xa(this.form,this),this._oldForm&&wo(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(e){return new(e||n)(mt(Ue,10),mt(xo,10),mt(bi,8))};static \u0275dir=k({type:n,features:[$,St]})}return n})();var Ya=new _(""),Am={provide:ce,useExisting:Wt(()=>Qa)},Qa=(()=>{class n extends ce{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new W;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,e,o,a,s){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=s,this._setValidators(t),this._setAsyncValidators(e),this.valueAccessor=Ll(this,o)}ngOnChanges(t){if(this._isControlChanged(t)){let e=t.form.previousValue;e&&vo(e,this,!1),bo(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Rl(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&vo(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(e){return new(e||n)(mt(Ue,10),mt(xo,10),mt(He,10),mt(Ya,8),mt(bi,8))};static \u0275dir=k({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[K([Am]),$,St]})}return n})();var Tm={provide:ce,useExisting:Wt(()=>yi)},yi=(()=>{class n extends ce{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new W;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,e,o,a,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(e),this._setAsyncValidators(o),this.valueAccessor=Ll(this,a)}ngOnChanges(t){this._added||this._setUpControl(),Rl(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ym(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(e){return new(e||n)(mt(We,13),mt(Ue,10),mt(xo,10),mt(He,10),mt(Ya,8))};static \u0275dir=k({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[K([Tm]),$,St]})}return n})();var Rm={provide:We,useExisting:Wt(()=>Ee)},Ee=(()=>{class n extends Pm{form=null;ngSubmit=new W;get control(){return this.form}static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275dir=k({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,o){e&1&&f("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[K([Rm]),$]})}return n})();function Bl(n){return typeof n=="number"?n:parseFloat(n)}var Vl=(()=>{class n{_validator=co;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let e=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(e),this._validator=this._enabled?this.createValidator(e):co,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,features:[St]})}return n})(),Fm={provide:Ue,useExisting:Wt(()=>Za),multi:!0},Za=(()=>{class n extends Vl{max;inputName="max";normalizeInput=t=>Bl(t);createValidator=t=>yl(t);static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275dir=k({type:n,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(e,o){e&2&&w("max",o._enabled?o.max:null)},inputs:{max:"max"},standalone:!1,features:[K([Fm]),$]})}return n})(),Lm={provide:Ue,useExisting:Wt(()=>Ja),multi:!0},Ja=(()=>{class n extends Vl{min;inputName="min";normalizeInput=t=>Bl(t);createValidator=t=>vl(t);static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275dir=k({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(e,o){e&2&&w("min",o._enabled?o.min:null)},inputs:{min:"min"},standalone:!1,features:[K([Lm]),$]})}return n})();var Nl=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({})}return n})();var Do=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:bi,useValue:t.callSetDisabledState??So}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Nl]})}return n})(),Eo=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Ya,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:bi,useValue:t.callSetDisabledState??So}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Nl]})}return n})();var tr=class{_box;_destroyed=new b;_resizeSubject=new b;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new de(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),e.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Q(t=>t.some(e=>e.target===i)),ga({bufferSize:1,refCount:!0}),at(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Wl=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=r(T);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let o=e?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new tr(o)),this._observers.get(o).observe(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Bm=["notch"],Vm=["matFormFieldNotchedOutline",""],Nm=["*"],jl=["iconPrefixContainer"],Hl=["textPrefixContainer"],Ul=["iconSuffixContainer"],Gl=["textSuffixContainer"],zm=["textField"],Wm=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],jm=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Hm(n,i){n&1&&A(0,"span",21)}function Um(n,i){if(n&1&&(l(0,"label",20),M(1,1),L(2,Hm,1,0,"span",21),c()),n&2){let t=D(2);x("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),w("for",t._control.disableAutomaticLabeling?null:t._control.id),d(2),B(!t.hideRequiredMarker&&t._control.required?2:-1)}}function Gm(n,i){if(n&1&&L(0,Um,3,5,"label",20),n&2){let t=D();B(t._hasFloatingLabel()?0:-1)}}function $m(n,i){n&1&&A(0,"div",7)}function qm(n,i){}function Xm(n,i){if(n&1&&Yt(0,qm,0,0,"ng-template",13),n&2){D(2);let t=ue(1);x("ngTemplateOutlet",t)}}function Km(n,i){if(n&1&&(l(0,"div",9),L(1,Xm,1,1,null,13),c()),n&2){let t=D();x("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),d(),B(t._forceDisplayInfixLabel()?-1:1)}}function Ym(n,i){n&1&&(l(0,"div",10,2),M(2,2),c())}function Qm(n,i){n&1&&(l(0,"div",11,3),M(2,3),c())}function Zm(n,i){}function Jm(n,i){if(n&1&&Yt(0,Zm,0,0,"ng-template",13),n&2){D();let t=ue(1);x("ngTemplateOutlet",t)}}function tu(n,i){n&1&&(l(0,"div",14,4),M(2,4),c())}function eu(n,i){n&1&&(l(0,"div",15,5),M(2,5),c())}function nu(n,i){n&1&&A(0,"div",16)}function iu(n,i){n&1&&(l(0,"div",18),M(1,6),c())}function ou(n,i){if(n&1&&(l(0,"mat-hint",22),u(1),c()),n&2){let t=D(2);x("id",t._hintLabelId),d(),O(t.hintLabel)}}function au(n,i){if(n&1&&(l(0,"div",19),L(1,ou,2,2,"mat-hint",22),M(2,7),A(3,"div",23),M(4,8),c()),n&2){let t=D();d(),B(t.hintLabel?1:-1)}}var mn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["mat-label"]]})}return n})(),ru=new _("MatError");var er=(()=>{class n{align="start";id=r(pt).getId("mat-mdc-hint-");static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(e,o){e&2&&(Jt("id",o.id),w("align",null),S("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),su=new _("MatPrefix");var Zl=new _("MatSuffix"),nr=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[K([{provide:Zl,useExisting:n}])]})}return n})(),Jl=new _("FloatingLabelParent"),$l=(()=>{class n{_elementRef=r(E);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=r(Wl);_ngZone=r(T);_parent=r(Jl);_resizeSubscription=new Ot;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return lu(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(e,o){e&2&&S("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function lu(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let t=i.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let e=t.scrollWidth;return t.remove(),e}var ql="mdc-line-ripple--active",Io="mdc-line-ripple--deactivating",Xl=(()=>{class n{_elementRef=r(E);_cleanupTransitionEnd;constructor(){let t=r(T),e=r(lt);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=e.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Io),t.add(ql)}deactivate(){this._elementRef.nativeElement.classList.add(Io)}_handleTransitionEnd=t=>{let e=this._elementRef.nativeElement.classList,o=e.contains(Io);t.propertyName==="opacity"&&o&&e.remove(ql,Io)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Kl=(()=>{class n{_elementRef=r(E);_ngZone=r(T);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,e=t.querySelector(".mdc-floating-label");e?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(e.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>e.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let e=this._notch.nativeElement;!this.open||!t?e.style.width="":e.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(e,o){if(e&1&&ut(Bm,5),e&2){let a;I(a=P())&&(o._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(e,o){e&2&&S("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Vm,ngContentSelectors:Nm,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(e,o){e&1&&(q(),Vt(0,"div",1),Lt(1,"div",2,0),M(3),Bt(),Vt(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),wi=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n})}return n})();var xi=new _("MatFormField"),cu=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Yl="fill",du="auto",Ql="fixed",mu="translateY(-50%)",Rn=(()=>{class n{_elementRef=r(E);_changeDetectorRef=r(rt);_platform=r(X);_idGenerator=r(pt);_ngZone=r(T);_defaults=r(cu,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=fe("iconPrefixContainer");_textPrefixContainerSignal=fe("textPrefixContainer");_iconSuffixContainerSignal=fe("iconSuffixContainer");_textSuffixContainerSignal=fe("textSuffixContainer");_prefixSuffixContainers=Z(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Qr(mn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=yt(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||du}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let e=t||this._defaults?.appearance||Yl;this._appearanceSignal.set(e)}_appearanceSignal=j(Yl);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ql}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||Ql}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new b;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ot();constructor(){let t=this._defaults,e=r(Et);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),we(()=>this._currentDirection=e.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Z(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let e=this._control,o="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(o+t.controlType),e.controlType&&this._elementRef.nativeElement.classList.add(o+e.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=e.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=e.stateChanges.pipe(Pt([void 0,void 0]),wt(()=>[e.errorState,e.userAriaDescribedBy]),fa(),Q(([[a,s],[m,h]])=>a!==m||s!==h)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),e.ngControl&&e.ngControl.valueChanges&&(this._valueChanges=e.ngControl.valueChanges.pipe(at(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ft(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){Ri({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Z(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let e=this._control?this._control.ngControl:null;return e&&e[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(m=>m.align==="start"):null,s=this._hintChildren?this._hintChildren.find(m=>m.align==="end"):null;a?t.push(a.id):this._hintLabel&&t.push(this._hintLabelId),s&&t.push(s.id)}else this._errorChildren&&t.push(...this._errorChildren.map(a=>a.id));let e=this._control.describedByIds,o;if(e){let a=this._describedByIds||t;o=t.concat(e.filter(s=>s&&!a.includes(s)))}else o=t;this._control.setDescribedByIds(o),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,s=t?.getBoundingClientRect().width??0,m=e?.getBoundingClientRect().width??0,h=o?.getBoundingClientRect().width??0,v=a?.getBoundingClientRect().width??0,y=this._currentDirection==="rtl"?"-1":"1",U=`${s+m}px`,bt=`calc(${y} * (${U} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,et=`var(--mat-mdc-form-field-label-transform, ${mu} translateX(${bt}))`,ft=s+m+h+v;return[et,ft]}_writeOutlinedLabelStyles(t){if(t!==null){let[e,o]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=e),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let e=t.getRootNode();return e&&e!==t}return document.documentElement.contains(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-form-field"]],contentQueries:function(e,o,a){if(e&1&&($r(a,o._labelChild,mn,5),Nt(a,wi,5)(a,su,5)(a,Zl,5)(a,ru,5)(a,er,5)),e&2){Ze();let s;I(s=P())&&(o._formFieldControl=s.first),I(s=P())&&(o._prefixChildren=s),I(s=P())&&(o._suffixChildren=s),I(s=P())&&(o._errorChildren=s),I(s=P())&&(o._hintChildren=s)}},viewQuery:function(e,o){if(e&1&&(pn(o._iconPrefixContainerSignal,jl,5)(o._textPrefixContainerSignal,Hl,5)(o._iconSuffixContainerSignal,Ul,5)(o._textSuffixContainerSignal,Gl,5),ut(zm,5)(jl,5)(Hl,5)(Ul,5)(Gl,5)($l,5)(Kl,5)(Xl,5)),e&2){Ze(4);let a;I(a=P())&&(o._textField=a.first),I(a=P())&&(o._iconPrefixContainer=a.first),I(a=P())&&(o._textPrefixContainer=a.first),I(a=P())&&(o._iconSuffixContainer=a.first),I(a=P())&&(o._textSuffixContainer=a.first),I(a=P())&&(o._floatingLabel=a.first),I(a=P())&&(o._notchedOutline=a.first),I(a=P())&&(o._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(e,o){e&2&&S("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[K([{provide:xi,useExisting:n},{provide:Jl,useExisting:n}])],ngContentSelectors:jm,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(e,o){if(e&1&&(q(Wm),Yt(0,Gm,1,1,"ng-template",null,0,va),l(2,"div",6,1),f("click",function(s){return o._control.onContainerClick(s)}),L(4,$m,1,0,"div",7),l(5,"div",8),L(6,Km,2,2,"div",9),L(7,Ym,3,0,"div",10),L(8,Qm,3,0,"div",11),l(9,"div",12),L(10,Jm,1,1,null,13),M(11),c(),L(12,tu,3,0,"div",14),L(13,eu,3,0,"div",15),c(),L(14,nu,1,0,"div",16),c(),l(15,"div",17),L(16,iu,2,0,"div",18)(17,au,5,1,"div",19),c()),e&2){let a;d(2),S("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),d(2),B(!o._hasOutline()&&!o._control.disabled?4:-1),d(2),B(o._hasOutline()?6:-1),d(),B(o._hasIconPrefix?7:-1),d(),B(o._hasTextPrefix?8:-1),d(2),B(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),d(2),B(o._hasTextSuffix?12:-1),d(),B(o._hasIconSuffix?13:-1),d(),B(o._hasOutline()?-1:14),d(),S("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let s=o._getSubscriptMessageType();d(),B((a=s)==="error"?16:a==="hint"?17:-1)}},dependencies:[$l,Kl,ts,Xl,er],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var Ie=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Wi,Rn,Y]})}return n})();var uu=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),hu={passive:!0},ec=(()=>{class n{_platform=r(X);_ngZone=r(T);_renderer=r(Kt).createRenderer(null,null);_styleLoader=r(xt);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return Er;this._styleLoader.load(uu);let e=jt(t),o=this._monitoredElements.get(e);if(o)return o.subject;let a=new b,s="cdk-text-field-autofilled",m=v=>{v.animationName==="cdk-text-field-autofill-start"&&!e.classList.contains(s)?(e.classList.add(s),this._ngZone.run(()=>a.next({target:v.target,isAutofilled:!0}))):v.animationName==="cdk-text-field-autofill-end"&&e.classList.contains(s)&&(e.classList.remove(s),this._ngZone.run(()=>a.next({target:v.target,isAutofilled:!1})))},h=this._ngZone.runOutsideAngular(()=>(e.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(e,"animationstart",m,hu)));return this._monitoredElements.set(e,{subject:a,unlisten:h}),a}stopMonitoring(t){let e=jt(t),o=this._monitoredElements.get(e);o&&(o.unlisten(),o.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var nc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({})}return n})();var ic=new _("MAT_INPUT_VALUE_ACCESSOR");var Po=(()=>{class n{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fn=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,t,e,o,a){this._defaultMatcher=i,this.ngControl=t,this._parentFormGroup=e,this._parentForm=o,this._stateChanges=a}updateErrorState(){let i=this.errorState,t=this._parentFormGroup||this._parentForm,e=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,a=e?.isErrorState(o,t)??!1;a!==i&&(this.errorState=a,this._stateChanges.next())}};var pu=["button","checkbox","file","hidden","image","radio","range","reset","submit"],fu=new _("MAT_INPUT_CONFIG"),oc=(()=>{class n{_elementRef=r(E);_platform=r(X);ngControl=r(ce,{optional:!0,self:!0});_autofillMonitor=r(ec);_ngZone=r(T);_formField=r(xi,{optional:!0});_renderer=r(lt);_uid=r(pt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=r(fu,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new b;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=yt(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator($t.required)??!1}set required(t){this._required=yt(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Da().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=yt(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Da().has(t));constructor(){let t=r(vi,{optional:!0}),e=r(Ee,{optional:!0}),o=r(Po),a=r(ic,{optional:!0,self:!0}),s=this._elementRef.nativeElement,m=s.nodeName.toLowerCase();a?Ke(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Fn(o,this.ngControl,e,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=m==="select",this._isTextarea=m==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&we(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type==="number"?(e.type="text",e.setSelectionRange(0,0),e.type="number"):e.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){pu.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let e=t.target;!e.value&&e.selectionStart===0&&e.selectionEnd===0&&(e.setSelectionRange(1,1),e.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(e,o){e&1&&f("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),e&2&&(Jt("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),w("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),S("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",R]},exportAs:["matInput"],features:[K([{provide:wi,useExisting:n}]),St]})}return n})(),Ao=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Ie,Ie,nc,Y]})}return n})();var Ci=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new b;constructor(i=!1,t,e=!0,o){this._multiple=i,this._emitChanges=e,this.compareWith=o,t&&t.length&&(i?t.forEach(a=>this._markSelected(a)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...i){this._verifyValueAssignment(i),i.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...i){this._verifyValueAssignment(i);let t=this.selected,e=new Set(i.map(a=>this._getConcreteValue(a)));i.forEach(a=>this._markSelected(a)),t.filter(a=>!e.has(this._getConcreteValue(a,e))).forEach(a=>this._unmarkSelected(a));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let t=this._hasQueuedChanges();return i&&this._emitChangeEvent(),t}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(i,e))return e;return i}else return i}};var ac=(()=>{class n{_animationsDisabled=ot();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,o){e&2&&S("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var _u=["text"],bu=[[["mat-icon"]],"*"],vu=["mat-icon","*"];function yu(n,i){if(n&1&&A(0,"mat-pseudo-checkbox",1),n&2){let t=D();x("disabled",t.disabled)("state",t.selected?"checked":"unchecked")}}function wu(n,i){if(n&1&&A(0,"mat-pseudo-checkbox",3),n&2){let t=D();x("disabled",t.disabled)}}function xu(n,i){if(n&1&&(l(0,"span",4),u(1),c()),n&2){let t=D();d(),J("(",t.group.label,")")}}var or=new _("MAT_OPTION_PARENT_COMPONENT"),ar=new _("MatOptgroup");var ir=class{source;isUserInput;constructor(i,t=!1){this.source=i,this.isUserInput=t}},Ln=(()=>{class n{_element=r(E);_changeDetectorRef=r(rt);_parent=r(or,{optional:!0});group=r(ar,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=r(pt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=j(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new W;_text;_stateChanges=new b;constructor(){let t=r(xt);t.load(ee),t.load(Li),this._signalDisableRipple=!!this._parent&&Ke(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!It(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new ir(this,t))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-option"]],viewQuery:function(e,o){if(e&1&&ut(_u,7),e&2){let a;I(a=P())&&(o._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(e,o){e&1&&f("click",function(){return o._selectViaInteraction()})("keydown",function(s){return o._handleKeydown(s)}),e&2&&(Jt("id",o.id),w("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),S("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",R]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:vu,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(e,o){e&1&&(q(bu),L(0,yu,1,2,"mat-pseudo-checkbox",1),M(1),l(2,"span",2,0),M(4,1),c(),L(5,wu,1,1,"mat-pseudo-checkbox",3),L(6,xu,2,1,"span",4),A(7,"div",5)),e&2&&(B(o.multiple?0:-1),d(5),B(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),d(),B(o.group&&o.group._inert?6:-1),d(),x("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[ac,Ce],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function rc(n,i,t){if(t.length){let e=i.toArray(),o=t.toArray(),a=0;for(let s=0;s<n+1;s++)e[s].group&&e[s].group===o[a]&&a++;return a}return 0}function sc(n,i,t,e){return n<t?n:n+i>t+e?Math.max(0,n-e+i):t}var To=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Y]})}return n})();var rr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[ge,To,Ln,Y]})}return n})();var Cu=["trigger"],ku=["panel"],Mu=[[["mat-select-trigger"]],"*"],Su=["mat-select-trigger","*"];function Ou(n,i){if(n&1&&(l(0,"span",4),u(1),c()),n&2){let t=D();d(),O(t.placeholder)}}function Du(n,i){n&1&&M(0)}function Eu(n,i){if(n&1&&(l(0,"span",11),u(1),c()),n&2){let t=D(2);d(),O(t.triggerValue)}}function Iu(n,i){if(n&1&&(l(0,"span",5),L(1,Du,1,0)(2,Eu,2,1,"span",11),c()),n&2){let t=D();d(),B(t.customTrigger?1:2)}}function Pu(n,i){if(n&1){let t=Dt();l(0,"div",12,1),f("keydown",function(o){ct(t);let a=D();return dt(a._handleKeydown(o))}),M(2,1),c()}if(n&2){let t=D();ht(t.panelClass),S("mat-select-panel-animations-enabled",!t._animationsDisabled)("mat-primary",(t._parentFormField==null?null:t._parentFormField.color)==="primary")("mat-accent",(t._parentFormField==null?null:t._parentFormField.color)==="accent")("mat-warn",(t._parentFormField==null?null:t._parentFormField.color)==="warn")("mat-undefined",!(t._parentFormField!=null&&t._parentFormField.color)),w("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}var Au=new _("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(G);return()=>ln(n)}}),Tu=new _("MAT_SELECT_CONFIG"),Ru=new _("MatSelectTrigger"),sr=class{source;value;constructor(i,t){this.source=i,this.value=t}},lc=(()=>{class n{_viewportRuler=r(be);_changeDetectorRef=r(rt);_elementRef=r(E);_dir=r(Et,{optional:!0});_idGenerator=r(pt);_renderer=r(lt);_parentFormField=r(xi,{optional:!0});ngControl=r(ce,{self:!0,optional:!0});_liveAnnouncer=r(Qn);_defaultOptions=r(Tu,{optional:!0});_animationsDisabled=ot();_popoverLocation;_initialized=new b;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let e=this.options.toArray()[t];if(e){let o=this.panel.nativeElement,a=rc(t,this.options,this.optionGroups),s=e._getHostElement();t===0&&a===1?o.scrollTop=0:o.scrollTop=sc(s.offsetTop,s.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new sr(this,t)}_scrollStrategyFactory=r(Au);_panelOpen=!1;_compareWith=(t,e)=>t===e;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new b;_errorStateTracker;stateChanges=new b;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=j(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator($t.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=un(()=>{let t=this.options;return t?t.changes.pipe(Pt(t),Zt(()=>Ft(...t.map(e=>e.onSelectionChange)))):this._initialized.pipe(Zt(()=>this.optionSelectionChanges))});openedChange=new W;_openedStream=this.openedChange.pipe(Q(t=>t),wt(()=>{}));_closedStream=this.openedChange.pipe(Q(t=>!t),wt(()=>{}));selectionChange=new W;valueChange=new W;constructor(){let t=r(Po),e=r(vi,{optional:!0}),o=r(Ee,{optional:!0}),a=r(new Ai("tabindex"),{optional:!0}),s=r(di,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Fn(t,this.ngControl,o,e,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ci(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(at(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(at(this._destroy)).subscribe(t=>{t.added.forEach(e=>e.select()),t.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(Pt(null),at(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),e=this.ngControl;if(t!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?o.setAttribute("aria-labelledby",t):o.removeAttribute("aria-labelledby")}e&&(this._previousControl!==e.control&&(this._previousControl!==void 0&&e.disabled!==null&&e.disabled!==this.disabled&&(this.disabled=e.disabled),this._previousControl=e.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(kt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let t=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;let e=`${this.id}-panel`;this._trackedModal&&Sa(this._trackedModal,"aria-owns",e),As(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){if(!this._trackedModal)return;let t=`${this.id}-panel`;Sa(this._trackedModal,"aria-owns",t),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{e(),clearTimeout(o),this._cleanupDetach=void 0};let t=this.panel.nativeElement,e=this._renderer.listen(t,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let e=t.keyCode,o=e===40||e===38||e===37||e===39,a=e===13||e===32,s=this._keyManager;if(!s.isTyping()&&a&&!It(t)||(this.multiple||t.altKey)&&o)t.preventDefault(),this.open();else if(!this.multiple){let m=this.selected;s.onKeydown(t);let h=this.selected;h&&m!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(t){let e=this._keyManager,o=t.keyCode,a=o===40||o===38,s=e.isTyping();if(a&&t.altKey)t.preventDefault(),this.close();else if(!s&&(o===13||o===32)&&e.activeItem&&!It(t))t.preventDefault(),e.activeItem._selectViaInteraction();else if(!s&&this._multiple&&o===65&&t.ctrlKey){t.preventDefault();let m=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(m?h.select():h.deselect())})}else{let m=e.activeItemIndex;e.onKeydown(t),this._multiple&&a&&t.shiftKey&&e.activeItem&&e.activeItemIndex!==m&&e.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!It(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(e=>e.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(e=>this._selectOptionByValue(e)),this._sortValues();else{let e=this._selectOptionByValue(t);e?this._keyManager.updateActiveItem(e):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let e=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,t)}catch{return!1}});return e&&this._selectionModel.select(e),e}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof Cn?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ni(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=Ft(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(at(t)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ft(...this.options.map(e=>e._stateChanges)).pipe(at(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,e){let o=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(o!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),e&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),e&&this.focus())),o!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((e,o)=>this.sortComparator?this.sortComparator(e,o,t):t.indexOf(e)-t.indexOf(o)),this.stateChanges.next()}}_propagateChanges(t){let e;this.multiple?e=this.selected.map(o=>o.value):e=this.selected?this.selected.value:t,this._value=e,this.valueChange.emit(e),this._onChange(e),this.selectionChange.emit(this._getChangeEvent(e)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let e=0;e<this.options.length;e++)if(!this.options.get(e).disabled){t=e;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(t){let e=Tt(t);e&&(e.tagName==="MAT-OPTION"||e.classList.contains("cdk-overlay-backdrop")||e.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-select"]],contentQueries:function(e,o,a){if(e&1&&Nt(a,Ru,5)(a,Ln,5)(a,ar,5),e&2){let s;I(s=P())&&(o.customTrigger=s.first),I(s=P())&&(o.options=s),I(s=P())&&(o.optionGroups=s)}},viewQuery:function(e,o){if(e&1&&ut(Cu,5)(ku,5)(no,5),e&2){let a;I(a=P())&&(o.trigger=a.first),I(a=P())&&(o.panel=a.first),I(a=P())&&(o._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(e,o){e&1&&f("keydown",function(s){return o._handleKeydown(s)})("focus",function(){return o._onFocus()})("blur",function(){return o._onBlur()}),e&2&&(w("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),S("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",R],disableRipple:[2,"disableRipple","disableRipple",R],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:zt(t)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",R],placeholder:"placeholder",required:[2,"required","required",R],multiple:[2,"multiple","multiple",R],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",R],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",zt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",R]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[K([{provide:wi,useExisting:n},{provide:or,useExisting:n}]),St],ngContentSelectors:Su,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(e,o){if(e&1&&(q(Mu),l(0,"div",2,0),f("click",function(){return o.open()}),l(3,"div",3),L(4,Ou,2,1,"span",4)(5,Iu,3,1,"span",5),c(),l(6,"div",6)(7,"div",7),ye(),l(8,"svg",8),A(9,"path",9),c()()()(),Yt(10,Pu,3,16,"ng-template",10),f("detach",function(){return o.close()})("backdropClick",function(){return o.close()})("overlayKeydown",function(s){return o._handleOverlayKeydown(s)})),e&2){let a=ue(1);d(3),w("id",o._valueId),d(),B(o.empty?4:5),d(6),x("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation)}},dependencies:[Cn,no],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var cc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[ze,rr,Y,ke,Ie,rr]})}return n})();var Lu=["mat-internal-form-field",""],Bu=["*"],dc=(()=>{class n{labelPosition="after";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(e,o){e&2&&S("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Lu,ngContentSelectors:Bu,decls:1,vars:0,template:function(e,o){e&1&&(q(),M(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Vu=["switch"],Nu=["*"];function zu(n,i){n&1&&(l(0,"span",11),ye(),l(1,"svg",13),A(2,"path",14),c(),l(3,"svg",15),A(4,"path",16),c()())}var Wu=new _("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Ro=class{source;checked;constructor(i,t){this.source=i,this.checked=t}},lr=(()=>{class n{_elementRef=r(E);_focusMonitor=r(te);_changeDetectorRef=r(rt);defaults=r(Wu);_onChange=t=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(t){return new Ro(this,t)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ot();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new W;toggleChange=new W;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){r(xt).load(ee);let t=r(new Ai("tabindex"),{optional:!0}),e=this.defaults;this.tabIndex=t==null?0:parseInt(t)||0,this.color=e.color||"accent",this.id=this._uniqueId=r(pt).getId("mat-mdc-slide-toggle-"),this.hideIcon=e.hideIcon??!1,this.disabledInteractive=e.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t==="keyboard"||t==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ro(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(e,o){if(e&1&&ut(Vu,5),e&2){let a;I(a=P())&&(o._switchElement=a.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(e,o){e&2&&(Jt("id",o.id),w("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),ht(o.color?"mat-"+o.color:""),S("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",R],color:"color",disabled:[2,"disabled","disabled",R],disableRipple:[2,"disableRipple","disableRipple",R],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:zt(t)],checked:[2,"checked","checked",R],hideIcon:[2,"hideIcon","hideIcon",R],disabledInteractive:[2,"disabledInteractive","disabledInteractive",R]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[K([{provide:He,useExisting:Wt(()=>n),multi:!0},{provide:Ue,useExisting:n,multi:!0}]),St],ngContentSelectors:Nu,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(e,o){if(e&1&&(q(),l(0,"div",1)(1,"button",2,0),f("click",function(){return o._handleClick()}),A(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),A(8,"span",8),c(),l(9,"span",9),A(10,"span",10),c(),L(11,zu,5,0,"span",11),c()()(),l(12,"label",12),f("click",function(s){return s.stopPropagation()}),M(13),c()()),e&2){let a=ue(2);x("labelPosition",o.labelPosition),d(),S("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),x("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),w("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),d(9),x("matRippleTrigger",a)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),d(),B(o.hideIcon?-1:11),d(),x("for",o.buttonId),w("id",o._labelId)}},dependencies:[Ce,dc],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),mc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[lr,Y]})}return n})();var Hu=["knob"],Uu=["valueIndicatorContainer"];function Gu(n,i){if(n&1&&(l(0,"div",2,1)(2,"div",5)(3,"span",6),u(4),c()()()),n&2){let t=D();d(4),O(t.valueIndicatorText)}}var $u=["trackActive"],qu=["*"];function Xu(n,i){if(n&1&&A(0,"div"),n&2){let t=i.$implicit,e=i.$index,o=D(3);ht(t===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),xe("transform",o._calcTickMarkTransform(e))}}function Ku(n,i){if(n&1&&Ye(0,Xu,1,4,"div",8,Ur),n&2){let t=D(2);Qe(t._tickMarks)}}function Yu(n,i){if(n&1&&(l(0,"div",6,1),L(2,Ku,2,0),c()),n&2){let t=D();d(2),B(t._cachedWidth?2:-1)}}function Qu(n,i){if(n&1&&A(0,"mat-slider-visual-thumb",7),n&2){let t=D();x("discrete",t.discrete)("thumbPosition",1)("valueIndicatorText",t.startValueIndicatorText)}}var H=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(H||{}),Bn=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(Bn||{}),cr=new _("_MatSlider"),uc=new _("_MatSliderThumb"),Zu=new _("_MatSliderRangeThumb"),hc=new _("_MatSliderVisualThumb");var Ju=(()=>{class n{_cdr=r(rt);_ngZone=r(T);_slider=r(cr);_renderer=r(lt);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=r(E).nativeElement;_platform=r(X);constructor(){}ngAfterViewInit(){let t=this._slider._getInput(this.thumbPosition);t&&(this._ripple.radius=24,this._sliderInput=t,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let e=this._sliderInputEl,o=this._renderer;this._listenerCleanups=[o.listen(e,"pointermove",this._onPointerMove),o.listen(e,"pointerdown",this._onDragStart),o.listen(e,"pointerup",this._onDragEnd),o.listen(e,"pointerleave",this._onMouseLeave),o.listen(e,"focus",this._onFocus),o.listen(e,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t())}_onPointerMove=t=>{if(this._sliderInput._isFocused)return;let e=this._hostElement.getBoundingClientRect(),o=this._slider._isCursorOnSliderThumb(t,e);this._isHovered=o,o?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=t=>{t.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(t){return t?.state===Ht.FADING_IN||t?.state===Ht.VISIBLE}_showRipple(t,e){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===H.START?H.END:H.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!e)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:t,centered:!0,persistent:!0})}_hideRipple(t){if(t?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let e=this._getSibling();e._isShowingAnyRipple()||(this._hideValueIndicator(),e._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===H.START?H.END:H.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(e,o){if(e&1&&ut(Ce,5)(Hu,5)(Uu,5),e&2){let a;I(a=P())&&(o._ripple=a.first),I(a=P())&&(o._knob=a.first),I(a=P())&&(o._valueIndicatorContainer=a.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[K([{provide:hc,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(e,o){e&1&&(L(0,Gu,5,1,"div",2),A(1,"div",3,0)(3,"div",4)),e&2&&(B(o.discrete?0:-1),d(3),x("matRippleDisabled",!0))},dependencies:[Ce],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2,changeDetection:0})}return n})(),pc=(()=>{class n{_ngZone=r(T);_cdr=r(rt);_elementRef=r(E);_dir=r(Et,{optional:!0});_globalRippleOptions=r(an,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(t){this._disabled=t;let e=this._getInput(H.END),o=this._getInput(H.START);e&&(e.disabled=this._disabled),o&&(o.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(t){this._discrete=t,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(t){this._showTickMarks=t,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(t){let e=t==null||isNaN(t)?this._min:t;this._min!==e&&this._updateMin(e)}_min=0;color;disableRipple=!1;_updateMin(t){let e=this._min;this._min=t,this._isRange?this._updateMinRange({old:e,new:t}):this._updateMinNonRange(t),this._onMinMaxOrStepChange()}_updateMinRange(t){let e=this._getInput(H.END),o=this._getInput(H.START),a=e.value,s=o.value;o.min=t.new,e.min=Math.max(t.new,o.value),o.max=Math.min(e.max,e.value),o._updateWidthInactive(),e._updateWidthInactive(),t.new<t.old?this._onTranslateXChangeBySideEffect(e,o):this._onTranslateXChangeBySideEffect(o,e),a!==e.value&&this._onValueChange(e),s!==o.value&&this._onValueChange(o)}_updateMinNonRange(t){let e=this._getInput(H.END);if(e){let o=e.value;e.min=t,e._updateThumbUIByValue(),this._updateTrackUI(e),o!==e.value&&this._onValueChange(e)}}get max(){return this._max}set max(t){let e=t==null||isNaN(t)?this._max:t;this._max!==e&&this._updateMax(e)}_max=100;_updateMax(t){let e=this._max;this._max=t,this._isRange?this._updateMaxRange({old:e,new:t}):this._updateMaxNonRange(t),this._onMinMaxOrStepChange()}_updateMaxRange(t){let e=this._getInput(H.END),o=this._getInput(H.START),a=e.value,s=o.value;e.max=t.new,o.max=Math.min(t.new,e.value),e.min=o.value,e._updateWidthInactive(),o._updateWidthInactive(),t.new>t.old?this._onTranslateXChangeBySideEffect(o,e):this._onTranslateXChangeBySideEffect(e,o),a!==e.value&&this._onValueChange(e),s!==o.value&&this._onValueChange(o)}_updateMaxNonRange(t){let e=this._getInput(H.END);if(e){let o=e.value;e.max=t,e._updateThumbUIByValue(),this._updateTrackUI(e),o!==e.value&&this._onValueChange(e)}}get step(){return this._step}set step(t){let e=isNaN(t)?this._step:t;this._step!==e&&this._updateStep(e)}_step=1;_updateStep(t){this._step=t,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let t=this._getInput(H.END),e=this._getInput(H.START),o=t.value,a=e.value,s=e.value;t.min=this._min,e.max=this._max,t.step=this._step,e.step=this._step,this._platform.SAFARI&&(t.value=t.value,e.value=e.value),t.min=Math.max(this._min,e.value),e.max=Math.min(this._max,t.value),e._updateWidthInactive(),t._updateWidthInactive(),t.value<s?this._onTranslateXChangeBySideEffect(e,t):this._onTranslateXChangeBySideEffect(t,e),o!==t.value&&this._onValueChange(t),a!==e.value&&this._onValueChange(e)}_updateStepNonRange(){let t=this._getInput(H.END);if(t){let e=t.value;t.step=this._step,this._platform.SAFARI&&(t.value=t.value),t._updateThumbUIByValue(),e!==t.value&&this._onValueChange(t)}}displayWith=t=>`${t}`;_tickMarks;_noopAnimations=ot();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Z(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=r(X);constructor(){r(xt).load(ee);let t=this._isRtl();Ri(()=>{let e=this._isRtl();e!==t&&(t=e,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let t=this._getInput(H.END),e=this._getInput(H.START);this._isRange=!!t&&!!e,this._cdr.detectChanges();let o=this._getThumb(H.END);this._rippleRadius=o._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(t,e):this._initUINonRange(t),this._updateTrackUI(t),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(t){t.initProps(),t.initUI(),this._updateValueIndicatorUI(t),this._hasViewInitialized=!0,t._updateThumbUIByValue()}_initUIRange(t,e){t.initProps(),t.initUI(),e.initProps(),e.initUI(),t._updateMinMax(),e._updateMinMax(),t._updateStaticStyles(),e._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,t._updateThumbUIByValue(),e._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let t=this._getInput(H.END),e=this._getInput(H.START);t._setIsLeftThumb(),e._setIsLeftThumb(),t.translateX=t._calcTranslateXByValue(),e.translateX=e._calcTranslateXByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateWidthInactive(),e._updateWidthInactive(),t._updateThumbUIByValue(),e._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(H.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(H.START)._isActive||this._getThumb(H.END)._isActive}_getValue(t=H.END){let e=this._getInput(t);return e?e.value:this.min}_skipUpdate(){return!!(this._getInput(H.START)?._skipUIUpdate||this._getInput(H.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(t){let e=this._trackActive.nativeElement.style;e.left=t.left,e.right=t.right,e.transformOrigin=t.transformOrigin,e.transform=t.transform}_calcTickMarkTransform(t){let e=t*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-e:e}px)`}_onTranslateXChange(t){this._hasViewInitialized&&(this._updateThumbUI(t),this._updateTrackUI(t),this._updateOverlappingThumbUI(t))}_onTranslateXChangeBySideEffect(t,e){this._hasViewInitialized&&(t._updateThumbUIByValue(),e._updateThumbUIByValue())}_onValueChange(t){this._hasViewInitialized&&(this._updateValueIndicatorUI(t),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let t=this._getInput(H.END),e=this._getInput(H.START);t._updateThumbUIByValue(),e._updateThumbUIByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateMinMax(),e._updateMinMax(),t._updateWidthInactive(),e._updateWidthInactive()}else{let t=this._getInput(H.END);t&&t._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let t=this._getInput(H.START),e=this._getInput(H.END);return!t||!e?!1:e.translateX-t.translateX<20}_updateOverlappingThumbClassNames(t){let e=t.getSibling(),o=this._getThumb(t.thumbPosition);this._getThumb(e.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),o._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(t){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(t))}_updateThumbUI(t){if(this._skipUpdate())return;let e=this._getThumb(t.thumbPosition===H.END?H.END:H.START);e._hostElement.style.transform=`translateX(${t.translateX}px)`}_updateValueIndicatorUI(t){if(this._skipUpdate())return;let e=this.displayWith(t.value);if(this._hasViewInitialized?t._valuetext.set(e):t._hostElement.setAttribute("aria-valuetext",e),this.discrete){t.thumbPosition===H.START?this.startValueIndicatorText=e:this.endValueIndicatorText=e;let o=this._getThumb(t.thumbPosition);e.length<3?o._hostElement.classList.add("mdc-slider__thumb--short-value"):o._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let t=this._getInput(H.END),e=this._getInput(H.START);t&&this._updateValueIndicatorUI(t),e&&this._updateValueIndicatorUI(e)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let t=this._step&&this._step>0?this._step:1,o=(Math.floor(this.max/t)*t-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*o}_updateTrackUI(t){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(t):this._updateTrackUINonRange(t))}_updateTrackUIRange(t){let e=t.getSibling();if(!e||!this._cachedWidth)return;let o=Math.abs(e.translateX-t.translateX)/this._cachedWidth;t._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-e.translateX}px`,transformOrigin:"right",transform:`scaleX(${o})`}):this._setTrackActiveStyles({left:`${e.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${o})`})}_updateTrackUINonRange(t){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-t.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${t.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let t=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(t):this._updateTickMarkUINonRange(t)}_updateTickMarkUINonRange(t){let e=this._getValue(),o=Math.max(Math.round((e-this.min)/t),0)+1,a=Math.max(Math.round((this.max-e)/t),0)-1;this._isRtl()?o++:a++,this._tickMarks=Array(o).fill(Bn.ACTIVE).concat(Array(a).fill(Bn.INACTIVE))}_updateTickMarkUIRange(t){let e=this._getValue(),o=this._getValue(H.START),a=Math.max(Math.round((o-this.min)/t),0),s=Math.max(Math.round((e-o)/t)+1,0),m=Math.max(Math.round((this.max-e)/t),0);this._tickMarks=Array(a).fill(Bn.INACTIVE).concat(Array(s).fill(Bn.ACTIVE),Array(m).fill(Bn.INACTIVE))}_getInput(t){if(t===H.END&&this._input)return this._input;if(this._inputs?.length)return t===H.START?this._inputs.first:this._inputs.last}_getThumb(t){return t===H.END?this._thumbs?.last:this._thumbs?.first}_setTransition(t){this._hasAnimation=!this._platform.IOS&&t&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(t,e){let o=e.width/2,a=e.x+o,s=e.y+o,m=t.clientX-a,h=t.clientY-s;return Math.pow(m,2)+Math.pow(h,2)<Math.pow(o,2)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-slider"]],contentQueries:function(e,o,a){if(e&1&&Nt(a,uc,5)(a,Zu,4),e&2){let s;I(s=P())&&(o._input=s.first),I(s=P())&&(o._inputs=s)}},viewQuery:function(e,o){if(e&1&&ut($u,5)(hc,5),e&2){let a;I(a=P())&&(o._trackActive=a.first),I(a=P())&&(o._thumbs=a)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(e,o){e&2&&(ht("mat-"+(o.color||"primary")),S("mdc-slider--range",o._isRange)("mdc-slider--disabled",o.disabled)("mdc-slider--discrete",o.discrete)("mdc-slider--tick-marks",o.showTickMarks)("_mat-animation-noopable",o._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",R],discrete:[2,"discrete","discrete",R],showTickMarks:[2,"showTickMarks","showTickMarks",R],min:[2,"min","min",zt],color:"color",disableRipple:[2,"disableRipple","disableRipple",R],max:[2,"max","max",zt],step:[2,"step","step",zt],displayWith:"displayWith"},exportAs:["matSlider"],features:[K([{provide:cr,useExisting:n}])],ngContentSelectors:qu,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(e,o){e&1&&(q(),M(0),l(1,"div",2),A(2,"div",3),l(3,"div",4),A(4,"div",5,0),c(),L(6,Yu,3,1,"div",6),c(),L(7,Qu,1,3,"mat-slider-visual-thumb",7),A(8,"mat-slider-visual-thumb",7)),e&2&&(d(6),B(o.showTickMarks?6:-1),d(),B(o._isRange?7:-1),d(),x("discrete",o.discrete)("thumbPosition",2)("valueIndicatorText",o.endValueIndicatorText))},dependencies:[Ju],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
}
.mdc-slider__value-indicator::after {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();var th={provide:He,useExisting:Wt(()=>dr),multi:!0};var dr=(()=>{class n{_ngZone=r(T);_elementRef=r(E);_cdr=r(rt);_slider=r(cr);_platform=r(X);_listenerCleanups;get value(){return zt(this._hostElement.value,0)}set value(t){t===null&&(t=this._getDefaultValue()),t=isNaN(t)?0:t;let e=t+"";if(!this._hasSetInitialValue){this._initialValue=e;return}this._isActive||this._setValue(e)}_setValue(t){this._hostElement.value=t,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new W;dragStart=new W;dragEnd=new W;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(t){this._translateX=t}_translateX;thumbPosition=H.END;get min(){return zt(this._hostElement.min,0)}set min(t){this._hostElement.min=t+"",this._cdr.detectChanges()}get max(){return zt(this._hostElement.max,0)}set max(t){this._hostElement.max=t+"",this._cdr.detectChanges()}get step(){return zt(this._hostElement.step,0)}set step(t){this._hostElement.step=t+"",this._cdr.detectChanges()}get disabled(){return R(this._hostElement.disabled)}set disabled(t){this._hostElement.disabled=t,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=j("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(t){this._isFocused=t}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new b;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let t=r(lt);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[t.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),t.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),t.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(t){if(!(this.disabled||t.button!==0)){if(this._platform.IOS){let e=this._slider._isCursorOnSliderThumb(t,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=e,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(t,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(t),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(t){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(t)},0)}_fixValue(t){let e=t.clientX-this._slider._cachedLeft,o=this._slider._cachedWidth,a=this._slider.step===0?1:this._slider.step,s=Math.floor((this._slider.max-this._slider.min)/a),m=this._slider._isRtl()?1-e/o:e/o,v=Math.round(m*s)/s*(this._slider.max-this._slider.min)+this._slider.min,y=Math.round(v/a)*a,U=this.value;if(y===U){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});return}this.value=y,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation})}_onPointerMove(t){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(t)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(t){let e=this._tickMarkOffset,o=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(t,o),e)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(t){return t.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(t){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(t)}_updateThumbUIByPointerEvent(t,e){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(t)),this._updateThumbUI(e)}_updateThumbUI(t){this._slider._setTransition(!!t?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(t){(this._isControlInitialized||t!==null)&&(this.value=t)}registerOnChange(t){this._onChangeFn=t,this._isControlInitialized=!0}registerOnTouched(t){this._onTouchedFn=t}setDisabledState(t){this.disabled=t}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(e,o){e&1&&f("change",function(){return o._onChange()})("input",function(){return o._onInput()})("blur",function(){return o._onBlur()})("focus",function(){return o._onFocus()}),e&2&&w("aria-valuetext",o._valuetext())},inputs:{value:[2,"value","value",zt]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[K([th,{provide:uc,useExisting:n}])]})}return n})();var fc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[ge,Y]})}return n})();var Fo=class n extends tt{languageFormFieldLabel=$localize`:Language form field label@@languageFormFieldLabel:Language`;layoutFormFieldLabel=$localize`:Layout form field label@@layoutFormFieldLabel:Layout`;soundSwitchLabel=$localize`:Sound enable/disable switch label@@soundSwitchLabel:Sound`;animationSwitchLabel=$localize`:Animation enable/disable switch label@@animationSwitchLabel:Animation`;missingTranslationLabel=$localize`:Missing translation label@@missingTranslationLabel:Missing translation`;settingsAmericanEnglishLanguageLabel=$localize`:American English language setting label@@settingsAmericanEnglishLanguageLabel:English`;settingsHungarianLanguageLabel=$localize`:Hungarian language setting label@@settingsHungarianLanguageLabel:Hungarian`;autoLayoutSettingLabel=$localize`:Auto layout setting label@@autoLayoutSettingLabel:Auto`;smartPhoneLayoutSettingLabel=$localize`:Smartphone layout setting label@@smartPhoneLayoutSettingLabel:Smartphone`;tabletLayoutSettingLabel=$localize`:Tabblet layout setting label@@tabletLayoutSettingLabel:Tablet`;desktopLayoutSettingLabel=$localize`:Desktop layout setting label@@desktopLayoutSettingLabel:Desktop`;resolveLanguageLabel(i){let t=this.missingTranslationLabel;switch(i){case"en-US":t=this.settingsAmericanEnglishLanguageLabel;break;case"hu-HU":t=this.settingsHungarianLanguageLabel;break}return t}resolveLayoutLabel(i){let t=this.missingTranslationLabel;switch(i){case"auto":t=this.autoLayoutSettingLabel;break;case"wide_portrait":t=this.smartPhoneLayoutSettingLabel;break;case"landscape":t=this.tabletLayoutSettingLabel;break;case"wide_landscape":t=this.desktopLayoutSettingLabel;break}return t}static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};function ih(n,i){if(n&1&&(l(0,"mat-option",3),u(1),c()),n&2){let t=i.$implicit,e=D();x("value",it(t)),d(),O(e.translations.resolveLanguageLabel(t))}}function oh(n,i){if(n&1&&(l(0,"mat-option",3),u(1),c()),n&2){let t=i.$implicit,e=D();x("value",it(t)),d(),O(e.translations.resolveLayoutLabel(t))}}var Vn=class n{static DEFAULT_VOLUME=gt.DEFAULT_VOLUME;volumeIcon=j("volume_down");isDirty=pe();isValid=pe();currentSettings;isSaveInProgress;languages=[];layouts=[];form;languageFormControl;layoutFormcontrol;volumeFormcontrol;isSaveInProgressSubscription;formValueChangeSubscription;translations=r(Fo);settingsService=r(ps);audioPlaybackService=r(Ni);signals=r(gt);constructor(){this.currentSettings=this.signals.settings.toSignal(),this.isSaveInProgress=this.signals.isSettingsSaveInProgress.toSignal(),this.isSaveInProgressSubscription=us(this.isSaveInProgress).subscribe(i=>{i&&this.save()}),this.languageFormControl=new Gt(this.currentSettings().language),this.layoutFormcontrol=new Gt(this.currentSettings().layout),this.volumeFormcontrol=new Gt(this.currentSettings().volume),this.updateVolumeIcon(this.currentSettings().volume),this.form=new De({language:this.languageFormControl,layout:this.layoutFormcontrol,volume:this.volumeFormcontrol,audioEnabled:new Gt(this.currentSettings().isAudioEnabled),animationEnabled:new Gt(this.currentSettings().isAnimationEnabled)}),this.formValueChangeSubscription=this.form.valueChanges.subscribe(()=>{this.isDirty.emit(this.form.dirty),this.isValid.emit(this.form.valid)}),Object.values(Vi).forEach(i=>{this.languages.push(i)}),this.layouts.push("auto"),this.layouts.push("wide_portrait"),this.layouts.push("landscape"),this.layouts.push("wide_landscape")}ngOnDestroy(){this.isSaveInProgressSubscription.unsubscribe(),this.formValueChangeSubscription.unsubscribe()}onVolumeChanged(i){i===0?this.form.controls.audioEnabled.setValue(!1):this.form.controls.audioEnabled.setValue(!0),this.updateVolumeIcon(i),this.audioPlaybackService.testVolume(i)}onAudioSliderChanged(i){i.checked?this.volumeFormcontrol.setValue(n.DEFAULT_VOLUME):this.volumeFormcontrol.setValue(0)}save(){let i=this.form.controls.language.value,t=this.form.controls.layout.value,e=new hs(i,t,this.form.controls.volume.value??n.DEFAULT_VOLUME,this.form.controls.audioEnabled.value,this.form.controls.animationEnabled.value);this.settingsService.update(e),this.form.controls.language.dirty&&this.signals.settingsNeedsReload.set(!0)}updateVolumeIcon(i){i===0?this.volumeIcon.update(()=>"no_sound"):i>50?this.volumeIcon.update(()=>"volume_up"):this.volumeIcon.update(()=>"volume_down")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-settings-form"]],outputs:{isDirty:"isDirty",isValid:"isValid"},decls:31,vars:9,consts:[[1,"settings-form",3,"formGroup"],["floatLabel","always","subscriptSizing","dynamic",1,"full-width"],[3,"formControl"],[3,"value"],[1,"settings-form-field-container"],[1,"settings-slide-form-field","full-width"],[1,"settings-form-label"],["aria-hidden","true"],["formControlName","audioEnabled",3,"change"],[1,"settings-volume-control-form-field","full-width"],["min","0","max","100","step","1"],["matSliderThumb","","value","25",3,"valueChange","formControl"],["formControlName","animationEnabled"]],template:function(t,e){t&1&&(l(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),u(3),c(),l(4,"mat-select",2),Ye(5,ih,2,3,"mat-option",3,qn),c()(),l(7,"mat-form-field",1)(8,"mat-label"),u(9),c(),l(10,"mat-select",2),Ye(11,oh,2,3,"mat-option",3,qn),c()(),l(13,"div",4)(14,"div",5)(15,"mat-label",6)(16,"mat-icon",7),u(17,"speaker"),c(),u(18),c(),l(19,"mat-slide-toggle",8),f("change",function(a){return e.onAudioSliderChanged(a)}),c()(),l(20,"div",9)(21,"mat-icon",7),u(22),c(),l(23,"mat-slider",10)(24,"input",11),f("valueChange",function(a){return e.onVolumeChanged(a)}),c()()()(),l(25,"div",5)(26,"mat-label",6)(27,"mat-icon",7),u(28,"animation"),c(),u(29),c(),A(30,"mat-slide-toggle",12),c()()),t&2&&(x("formGroup",e.form),d(3),O(e.translations.languageFormFieldLabel),d(),x("formControl",e.languageFormControl),d(),Qe(e.languages),d(4),O(e.translations.layoutFormFieldLabel),d(),x("formControl",e.layoutFormcontrol),d(),Qe(e.layouts),d(7),J("",e.translations.soundSwitchLabel," "),d(4),O(e.volumeIcon()),d(2),x("formControl",e.volumeFormcontrol),d(5),J("",e.translations.animationSwitchLabel," "))},dependencies:[Ie,Rn,mn,Ao,vt,Mt,cc,lc,Ln,mc,lr,fc,pc,dr,Do,Oo,Tn,Co,ko,Eo,Qa,Ee,yi],styles:[".settings-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1rem;height:100%}.settings-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%], .settings-form[_ngcontent-%COMP%]   .settings-form-field-container[_ngcontent-%COMP%]{width:100%}.settings-form[_ngcontent-%COMP%]   .settings-volume-control-form-field[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.settings-form[_ngcontent-%COMP%]   .settings-volume-control-form-field[_ngcontent-%COMP%]   .mat-mdc-slider[_ngcontent-%COMP%]{width:100%;flex-grow:2;margin-left:1rem}.settings-form[_ngcontent-%COMP%]   .settings-slide-form-field[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}.settings-form[_ngcontent-%COMP%]   .settings-form-label[_ngcontent-%COMP%]{display:flex;align-items:center}.settings-form[_ngcontent-%COMP%]   .settings-form-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.25rem}"]})};function ah(n,i){}var Ge=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var ur=(()=>{class n extends Le{_elementRef=r(E);_focusTrapFactory=r(Yn);_config;_interactivityChecker=r(bn);_ngZone=r(T);_focusMonitor=r(te);_renderer=r(lt);_changeDetectorRef=r(rt);_injector=r(G);_platform=r(X);_document=r(nt);_portalOutlet;_focusTrapped=new b;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(Ge,{optional:!0})||new Ge,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{a(),s(),t.removeAttribute("tabindex")},a=this._renderer.listen(t,"blur",o),s=this._renderer.listen(t,"mousedown",o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(t){this._isDestroyed||At(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let o=gn(),a=this._elementRef.nativeElement;(!o||o===this._document.body||o===a||a.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=gn();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=gn()))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,o){if(e&1&&ut(Be,7),e&2){let a;I(a=P())&&(o._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,o){e&2&&w("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[$],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,o){e&1&&Yt(0,ah,0,0,"ng-template",0)},dependencies:[Be],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),ki=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new b;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,t){this.overlayRef=i,this.config=t,this.disableClose=t.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!It(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(i,t){if(this._canClose(i)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(i),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",t=""){return this.overlayRef.updateSize({width:i,height:t}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(i,t,this.componentInstance))}},rh=new _("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=r(G);return()=>kn(n)}}),sh=new _("DialogData"),lh=new _("DefaultDialogConfig");function ch(n){let i=j(n),t=new W;return{valueSignal:i,get value(){return i()},change:t,ngOnDestroy(){t.complete()}}}var gc=(()=>{class n{_injector=r(G);_defaultOptions=r(lh,{optional:!0});_parentDialog=r(n,{optional:!0,skipSelf:!0});_overlayContainer=r(to);_idGenerator=r(pt);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new b;_afterOpenedAtThisLevel=new b;_ariaHiddenElements=new Map;_scrollStrategy=r(rh);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=un(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Pt(void 0)));constructor(){}open(t,e){let o=this._defaultOptions||new Ge;e=F(F({},o),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let a=this._getOverlayConfig(e),s=Se(this._injector,a),m=new ki(s,e),h=this._attachContainer(s,m,e);if(m.containerInstance=h,!this.openDialogs.length){let v=this._overlayContainer.getContainerElement();h._focusTrapped?h._focusTrapped.pipe(kt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(v)}):this._hideNonDialogContentFromAssistiveTechnology(v)}return this._attachDialogContent(t,m,h,e),this.openDialogs.push(m),m.closed.subscribe(()=>this._removeOpenDialog(m,!0)),this.afterOpened.next(m),m}closeAll(){mr(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){mr(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),mr(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new le({positionStrategy:t.positionStrategy||Ne().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){let a=o.injector||o.viewContainerRef?.injector,s=[{provide:Ge,useValue:o},{provide:ki,useValue:e},{provide:xn,useValue:t}],m;o.container?typeof o.container=="function"?m=o.container:(m=o.container.type,s.push(...o.container.providers(o))):m=ur;let h=new re(m,o.viewContainerRef,G.create({parent:a||this._injector,providers:s}));return t.attach(h).instance}_attachDialogContent(t,e,o,a){if(t instanceof me){let s=this._createInjector(a,e,o,void 0),m={$implicit:a.data,dialogRef:e};a.templateContext&&(m=F(F({},m),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),o.attachTemplatePortal(new se(t,null,m,s))}else{let s=this._createInjector(a,e,o,this._injector),m=o.attachComponentPortal(new re(t,a.viewContainerRef,s));e.componentRef=m,e.componentInstance=m.instance}}_createInjector(t,e,o,a){let s=t.injector||t.viewContainerRef?.injector,m=[{provide:sh,useValue:t.data},{provide:ki,useValue:e}];return t.providers&&(typeof t.providers=="function"?m.push(...t.providers(e,t,o)):m.push(...t.providers)),t.direction&&(!s||!s.get(Et,null,{optional:!0}))&&m.push({provide:Et,useValue:ch(t.direction)}),G.create({parent:s||a,providers:m})}_removeOpenDialog(t,e){let o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,s)=>{a?s.setAttribute("aria-hidden",a):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){let a=e[o];a!==t&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function mr(n,i){let t=n.length;for(;t--;)i(n[t])}function dh(n,i){}var Bo=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},hr="mdc-dialog--open",_c="mdc-dialog--opening",bc="mdc-dialog--closing",mh=150,uh=75,hh=(()=>{class n extends ur{_animationStateChanged=new W;_animationsEnabled=!ot();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?yc(this._config.enterAnimationDuration)??mh:0;_exitAnimationDuration=this._animationsEnabled?yc(this._config.exitAnimationDuration)??uh:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(vc,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(_c,hr)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(hr),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(hr),this._animationsEnabled?(this._hostElement.style.setProperty(vc,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(bc)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(_c,bc)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,o){e&2&&(Jt("id",o._config.id),w("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),S("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[$],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(l(0,"div",0)(1,"div",1),Yt(2,dh,0,0,"ng-template",2),c()())},dependencies:[Be],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),vc="--mat-dialog-transition-duration";function yc(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Qt(n.substring(0,n.length-2)):n.endsWith("s")?Qt(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Lo=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Lo||{}),Mi=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new da(1);_beforeClosed=new da(1);_result;_closeFallbackTimeout;_state=Lo.OPEN;_closeInteractionType;constructor(i,t,e){this._ref=i,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(Q(o=>o.state==="opened"),kt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(Q(o=>o.state==="closed"),kt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ft(this.backdropClick(),this.keydownEvents().pipe(Q(o=>o.keyCode===27&&!this.disableClose&&!It(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),ph(this,o.type==="keydown"?"keyboard":"mouse"))})}close(i){let t=this._config.closePredicate;t&&!t(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(Q(e=>e.state==="closing"),kt(1)).subscribe(e=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=Lo.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let t=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?t.left(i.left):t.right(i.right):t.centerHorizontally(),i&&(i.top||i.bottom)?i.top?t.top(i.top):t.bottom(i.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",t=""){return this._ref.updateSize(i,t),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Lo.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function ph(n,i,t){return n._closeInteractionType=i,n.close(t)}var fh=new _("MatMdcDialogData"),gh=new _("mat-mdc-dialog-default-options"),_h=new _("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(G);return()=>kn(n)}}),Vo=(()=>{class n{_defaultOptions=r(gh,{optional:!0});_scrollStrategy=r(_h);_parentDialog=r(n,{optional:!0,skipSelf:!0});_idGenerator=r(pt);_injector=r(G);_dialog=r(gc);_animationsDisabled=ot();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new b;_afterOpenedAtThisLevel=new b;dialogConfigClass=Bo;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=un(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Pt(void 0)));constructor(){this._dialogRefConstructor=Mi,this._dialogContainerType=hh,this._dialogDataToken=fh}open(t,e){let o;e=F(F({},this._defaultOptions||new Bo),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(t,Rt(F({},e),{positionStrategy:Ne(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:Ge,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(s,m,h)=>(o=new this._dialogRefConstructor(s,e,h),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:m.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=a.componentRef,o.componentInstance=a.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(o);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Wr([Ve])]})}return n})();var $e=class n{overlays={};router=r(Fe);overlay=r(eo);matDialogService=r(Vo);signals=r(gt);constructor(){}openDialog(i,t){if(this.signals.isSmartPhone.value())this.router.navigate([t]);else{let e={maxWidth:"inherit"},o=this.matDialogService.open(i,e)}}toggleOverlay(i,t,e){if(this.signals.isSmartPhone.value())this.router.navigate([t]);else if(this.overlays[i.toString()])this.closeOverlay(i);else{let o={panelClass:"overlay-container",hasBackdrop:!0,backdropClass:"overlay-container-backdrop",positionStrategy:this.overlay.position().flexibleConnectedTo(e).withPositions([{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top",offsetY:5}]).withPush(!1)},a=this.overlay.create(o),s=new re(i);a.attach(s),a.backdropClick().pipe(kt(1)).subscribe(()=>{this.closeOverlay(i)}),this.overlays[i.toString()]=a}}closeOverlay(i){this.overlays[i.toString()]&&(this.overlays[i.toString()].detach(),delete this.overlays[i.toString()])}static \u0275fac=function(t){return new(t||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var No=class n{isFormValid=!0;isSaveInProgress=!1;subscription;translations=r(so);dialogService=r($e);signals=r(gt);constructor(){this.subscription=this.signals.isSettingsSaveInProgress.toObservable().subscribe(i=>{this.isSaveInProgress&&!i?this.dialogService.closeOverlay(n):this.isSaveInProgress=i})}ngOnDestroy(){this.subscription.unsubscribe()}setValid(i){this.isFormValid=i}onSaveClicked(){this.signals.isSettingsSaveInProgress.set(!0)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-settings-dialog"]],decls:5,vars:5,consts:[[1,"settings-dialog-content"],[3,"isValid"],[1,"settings-dialog-footer"],["mat-flat-button","",3,"click","title","disabled"]],template:function(t,e){t&1&&(l(0,"section",0)(1,"tbt-settings-form",1),f("isValid",function(a){return e.setValid(a)}),c()(),l(2,"footer",2)(3,"button",3),f("click",function(){return e.onSaveClicked()}),u(4),c()()),t&2&&(d(3),x("title",it(e.translations.saveSettingsButtonLabel))("disabled",!e.isFormValid),w("aria-label",e.translations.saveSettingsButtonLabel),d(),J(" ",e.translations.saveSettingsButtonLabel," "))},dependencies:[_t,_e,Vn],styles:[".settings-dialog-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding-top:1rem}"]})};var bh=["settingsButton"];function vh(n,i){if(n&1){let t=Dt();l(0,"button",3),f("click",function(){ct(t);let o=D(2);return dt(o.onStartButtonClicked())}),l(1,"mat-icon",4),u(2,"play_arrow"),c()()}if(n&2){let t=D(2);x("title",it(t.translations.startWorkoutButtonDescriptionLabel)),w("aria-label",t.translations.startWorkoutButtonDescriptionLabel)}}function yh(n,i){if(n&1){let t=Dt();l(0,"button",12),f("click",function(){ct(t);let o=D(2);return dt(o.onStartButtonClicked())}),l(1,"mat-icon",4),u(2,"play_arrow"),c(),u(3),c()}if(n&2){let t=D(2);x("title",it(t.translations.startWorkoutButtonDescriptionLabel)),w("aria-label",t.translations.startWorkoutButtonDescriptionLabel),d(3),J(" ",t.translations.startWorkoutButtonLabel," ")}}function wh(n,i){if(n&1&&L(0,vh,3,3,"button",10)(1,yh,4,4,"button",11),n&2){let t=D();B(t.isSmartPhone()?0:1)}}function xh(n,i){if(n&1){let t=Dt();l(0,"button",9),f("click",function(){ct(t);let o=D();return dt(o.onEditMenuItemClicked())}),l(1,"mat-icon",4),u(2,"edit"),c(),l(3,"span"),u(4),c()(),l(5,"button",9),f("click",function(){ct(t);let o=D();return dt(o.onDeleteMenuItemClicked())}),l(6,"mat-icon",4),u(7,"delete"),c(),l(8,"span"),u(9),c()()}if(n&2){let t=D();x("title",it(t.translations.editWorkoutIconButtonDescriptionLabel)),w("aria-label",t.translations.editWorkoutIconButtonDescriptionLabel),d(4),O(t.translations.editWorkoutIconButtonLabel),d(),x("title",it(t.translations.deleteWorkoutIconButtonDescriptionLabel)),w("aria-label",t.translations.deleteWorkoutIconButtonDescriptionLabel),d(4),O(t.translations.deleteWorkoutIconButtonLabel)}}var zo=class n{onNavigationMenuToggle=pe();onSideSheetToggle=pe();isSmartPhone;selectedWorkout;isModificationAllowed=Z(()=>!!this.selectedWorkout());title=Z(()=>this.selectedWorkout()?.name?this.selectedWorkout().name:this.translations.applicationName);settingsButton=fe.required("settingsButton",{read:E});translations=r(ro);router=r(Fe);dialogService=r($e);snackBarService=r(ml);workoutConfigurationService=r(Oe);signals=r(gt);constructor(){this.isSmartPhone=this.signals.isSmartPhone.toSignal(),this.selectedWorkout=this.signals.selectedWorkout.toSignal()}onNavigationMenuClicked(){this.onNavigationMenuToggle.emit()}onNewMenuItemClicked(){this.onSideSheetToggle.emit(!0)}onEditMenuItemClicked(){this.onSideSheetToggle.emit(!1)}onDeleteMenuItemClicked(){this.workoutConfigurationService.deleteCurrentWorkout(),this.snackBarService.open(this.translations.workoutDeletedLabel,this.translations.restoreWorkoutButtonLabel,{duration:5e3}).onAction().subscribe(()=>{this.workoutConfigurationService.restoreLastDeletedWorkout()})}onSettingsButtonClicked(){this.dialogService.toggleOverlay(No,"/settings",this.settingsButton())}onStartButtonClicked(){this.workoutConfigurationService.saveCurrentWorkoutSession(),this.router.navigateByUrl("/timer")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-workout-launcher-nav-bar"]],viewQuery:function(t,e){t&1&&pn(e.settingsButton,bh,5,E),t&2&&Ze()},outputs:{onNavigationMenuToggle:"onNavigationMenuToggle",onSideSheetToggle:"onSideSheetToggle"},decls:24,vars:19,consts:[["settingsButton",""],["moreMenu","matMenu"],[1,"workout-launcher-navbar"],["mat-icon-button","",3,"click","title"],["aria-hidden","true"],[1,"navbar-title",3,"title"],[1,"toolbar-spacer"],[1,"action-icons"],["mat-icon-button","",3,"matMenuTriggerFor","title"],["mat-menu-item","",3,"click","title"],["mat-icon-button","",3,"title"],["mat-flat-button","",1,"workout-launcher",3,"title"],["mat-flat-button","",1,"workout-launcher",3,"click","title"]],template:function(t,e){if(t&1&&(l(0,"mat-toolbar",2)(1,"button",3),f("click",function(){return e.onNavigationMenuClicked()}),l(2,"mat-icon",4),u(3,"menu"),c()(),l(4,"span",5),u(5),c(),A(6,"span",6),l(7,"span",7),L(8,wh,2,1),l(9,"button",3,0),f("click",function(){return e.onSettingsButtonClicked()}),l(11,"mat-icon",4),u(12,"settings"),c()(),l(13,"button",8)(14,"mat-icon",4),u(15,"more_vert"),c()(),l(16,"mat-menu",null,1)(18,"button",9),f("click",function(){return e.onNewMenuItemClicked()}),l(19,"mat-icon",4),u(20,"add"),c(),l(21,"span"),u(22),c()(),L(23,xh,10,8),c()()()),t&2){let o=ue(17);d(),x("title",it(e.translations.navigationDrawerButtonLabel)),w("aria-label",e.translations.navigationDrawerButtonLabelDescriptionLabel),d(3),x("title",it(e.title())),d(),O(e.title()),d(3),B(e.isModificationAllowed()?8:-1),d(),x("title",it(e.translations.settingsIconButtonDescriptionLabel)),w("aria-label",e.translations.settingsIconButtonDescriptionLabel),d(4),x("title",it(e.translations.moreMenuDescriptionLabel))("matMenuTriggerFor",o),w("aria-label",e.translations.moreMenuDescriptionLabel),d(5),x("title",it(e.translations.newWorkoutIconButtonDescriptionLabel)),w("aria-label",e.translations.newWorkoutIconButtonDescriptionLabel),d(4),O(e.translations.newWorkoutIconButtonLabel),d(),B(e.isModificationAllowed()?23:-1)}},dependencies:[ao,oo,vt,Mt,En,Sn,mi,ll,_t,_e,Ut],styles:[".workout-launcher-navbar[_ngcontent-%COMP%]{color:var(--mat-sys-on-tertiary-container);background-color:transparent}.workout-launcher-navbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.wide-portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.wide-portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{gap:.5rem}"]})};var Wo=["*"],Ch=["content"],kh=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Mh=["mat-drawer","mat-drawer-content","*"];function Sh(n,i){if(n&1){let t=Dt();l(0,"div",1),f("click",function(){ct(t);let o=D();return dt(o._onBackdropClicked())}),c()}if(n&2){let t=D();S("mat-drawer-shown",t._isShowingBackdrop())}}function Oh(n,i){n&1&&(l(0,"mat-drawer-content"),M(1,2),c())}var Dh=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Eh=["mat-sidenav","mat-sidenav-content","*"];function Ih(n,i){if(n&1){let t=Dt();l(0,"div",1),f("click",function(){ct(t);let o=D();return dt(o._onBackdropClicked())}),c()}if(n&2){let t=D();S("mat-drawer-shown",t._isShowingBackdrop())}}function Ph(n,i){n&1&&(l(0,"mat-sidenav-content"),M(1,2),c())}var Ah=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Th=new _("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),gr=new _("MAT_DRAWER_CONTAINER"),Nn=(()=>{class n extends Ve{_platform=r(X);_changeDetectorRef=r(rt);_container=r(fr);constructor(){let t=r(E),e=r(rn),o=r(T);super(t,e,o)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,o){e&2&&(xe("margin-left",o._container._contentMargins.left,"px")("margin-right",o._container._contentMargins.right,"px"),S("mat-drawer-content-hidden",o._shouldBeHidden()))},features:[K([{provide:Ve,useExisting:n}]),$],ngContentSelectors:Wo,decls:1,vars:0,template:function(e,o){e&1&&(q(),M(0))},encapsulation:2,changeDetection:0})}return n})(),pr=(()=>{class n{_elementRef=r(E);_focusTrapFactory=r(Yn);_focusMonitor=r(te);_platform=r(X);_ngZone=r(T);_renderer=r(lt);_interactivityChecker=r(bn);_doc=r(nt);_container=r(gr,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=yt(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=yt(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(yt(t))}_opened=j(!1);_openedVia=null;_animationStarted=new b;_animationEnd=new b;openedChange=new W(!0);_openedStream=this.openedChange.pipe(Q(t=>t),wt(()=>{}));openedStart=this._animationStarted.pipe(Q(()=>this.opened),ha(void 0));_closedStream=this.openedChange.pipe(Q(t=>!t),wt(()=>{}));closedStart=this._animationStarted.pipe(Q(()=>!this.opened),ha(void 0));_destroyed=new b;onPositionChanged=new W;_content;_modeChanged=new b;_injector=r(G);_changeDetectorRef=r(rt);constructor(){this.openedChange.pipe(at(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",o=>{o.keyCode===27&&!this.disableClose&&!It(o)&&this._ngZone.run(()=>{this.close(),o.stopPropagation(),o.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{a(),s(),t.removeAttribute("tabindex")},a=this._renderer.listen(t,"blur",o),s=this._renderer.listen(t,"mousedown",o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":At(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let o=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),o}_setOpen(t,e,o){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(o),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(kt(1)).subscribe(s=>a(s?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,o=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),o.insertBefore(this._anchor,e)),o.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,o){if(e&1&&ut(Ch,5),e&2){let a;I(a=P())&&(o._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,o){e&2&&(w("align",null)("tabIndex",o.mode!=="side"?"-1":null),xe("visibility",!o._container&&!o.opened?"hidden":null),S("mat-drawer-end",o.position==="end")("mat-drawer-over",o.mode==="over")("mat-drawer-push",o.mode==="push")("mat-drawer-side",o.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Wo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,o){e&1&&(q(),l(0,"div",1,0),M(2),c())},dependencies:[Ve],encapsulation:2,changeDetection:0})}return n})(),fr=(()=>{class n{_dir=r(Et,{optional:!0});_element=r(E);_ngZone=r(T);_changeDetectorRef=r(rt);_animationDisabled=ot();_transitionsEnabled=!1;_allDrawers;_drawers=new qe;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=yt(t)}_autosize=r(Th);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:yt(t)}_backdropOverride=null;backdropClick=new W;_start=null;_end=null;_left=null;_right=null;_destroyed=new b;_doCheckSubject=new b;_contentMargins={left:null,right:null};_contentMarginChanges=new b;get scrollable(){return this._userContent||this._content}_injector=r(G);constructor(){let t=r(X),e=r(be);this._dir?.change.pipe(at(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(at(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Pt(this._allDrawers),at(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Pt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(hn(10),at(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let o=this._left._getWidth();t+=o,e-=o}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let o=this._right._getWidth();e+=o,t-=o}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(at(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(at(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(at(this._drawers.changes)).subscribe(()=>{At({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(at(Ft(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,o="mat-drawer-container-has-open";t?e.add(o):e.remove(o)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,o,a){if(e&1&&Nt(a,Nn,5)(a,pr,5),e&2){let s;I(s=P())&&(o._content=s.first),I(s=P())&&(o._allDrawers=s)}},viewQuery:function(e,o){if(e&1&&ut(Nn,5),e&2){let a;I(a=P())&&(o._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,o){e&2&&S("mat-drawer-container-explicit-backdrop",o._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[K([{provide:gr,useExisting:n}])],ngContentSelectors:Mh,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,o){e&1&&(q(kh),L(0,Sh,1,2,"div",0),M(1),M(2,1),L(3,Oh,2,0,"mat-drawer-content")),e&2&&(B(o.hasBackdrop?0:-1),d(3),B(o._content?-1:3))},dependencies:[Nn],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),xc=(()=>{class n extends Nn{static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[K([{provide:Ve,useExisting:n}]),$],ngContentSelectors:Wo,decls:1,vars:0,template:function(e,o){e&1&&(q(),M(0))},encapsulation:2,changeDetection:0})}return n})(),_r=(()=>{class n extends pr{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=yt(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Qt(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Qt(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,o){e&2&&(w("tabIndex",o.mode!=="side"?"-1":null)("align",null),xe("top",o.fixedInViewport?o.fixedTopGap:null,"px")("bottom",o.fixedInViewport?o.fixedBottomGap:null,"px"),S("mat-drawer-end",o.position==="end")("mat-drawer-over",o.mode==="over")("mat-drawer-push",o.mode==="push")("mat-drawer-side",o.mode==="side")("mat-sidenav-fixed",o.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[K([{provide:pr,useExisting:n}]),$],ngContentSelectors:Wo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,o){e&1&&(q(),l(0,"div",1,0),M(2),c())},dependencies:[Ve],encapsulation:2,changeDetection:0})}return n})(),Cc=(()=>{class n extends fr{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,o,a){if(e&1&&Nt(a,xc,5)(a,_r,5),e&2){let s;I(s=P())&&(o._content=s.first),I(s=P())&&(o._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,o){e&2&&S("mat-drawer-container-explicit-backdrop",o._backdropOverride)},exportAs:["matSidenavContainer"],features:[K([{provide:gr,useExisting:n},{provide:fr,useExisting:n}]),$],ngContentSelectors:Eh,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,o){e&1&&(q(Dh),L(0,Ih,1,2,"div",0),M(1),M(2,1),L(3,Ph,2,0,"mat-sidenav-content")),e&2&&(B(o.hasBackdrop?0:-1),d(3),B(o._content?-1:3))},dependencies:[xc],styles:[Ah],encapsulation:2,changeDetection:0})}return n})(),kc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[ke,Y,ke]})}return n})();var br=(()=>{class n{get vertical(){return this._vertical}set vertical(t){this._vertical=yt(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=yt(t)}_inset=!1;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,o){e&2&&(w("aria-orientation",o.vertical?"vertical":"horizontal"),S("mat-divider-vertical",o.vertical)("mat-divider-horizontal",!o.vertical)("mat-divider-inset",o.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,o){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return n})(),Mc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Y]})}return n})();var Sc=["*"],Oc=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Fh=["unscopedContent"],Lh=["text"],Bh=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Vh=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Nh=new _("ListOption"),vr=(()=>{class n{_elementRef=r(E);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),zh=(()=>{class n{_elementRef=r(E);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),Wh=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),Dc=(()=>{class n{_listOption=r(Nh,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,hostVars:4,hostBindings:function(e,o){e&2&&S("mdc-list-item__start",o._isAlignedAtStart())("mdc-list-item__end",!o._isAlignedAtStart())}})}return n})(),jh=(()=>{class n extends Dc{static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275dir=k({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[$]})}return n})(),yr=(()=>{class n extends Dc{static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275dir=k({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[$]})}return n})(),Hh=new _("MAT_LIST_CONFIG"),Si=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=yt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(yt(t))}_disabled=j(!1);_defaultOptions=r(Hh,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,hostVars:1,hostBindings:function(e,o){e&2&&w("aria-disabled",o.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Uh=(()=>{class n{_elementRef=r(E);_ngZone=r(T);_listBase=r(Si,{optional:!0});_platform=r(X);_hostElement;_isButtonElement;_noopAnimations=ot();_avatars;_icons;set lines(t){this._explicitLines=Qt(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=yt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(yt(t))}_disabled=j(!1);_subscriptions=new Ot;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){r(xt).load(ee);let t=r(an,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new on(this,this._ngZone,this._hostElement,this._platform,r(G)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ft(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),o=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;o.classList.toggle("mdc-list-item__primary-text",a),o.classList.toggle("mdc-list-item__secondary-text",!a)}else o.classList.remove("mdc-list-item__primary-text"),o.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,contentQueries:function(e,o,a){if(e&1&&Nt(a,jh,4)(a,yr,4),e&2){let s;I(s=P())&&(o._avatars=s),I(s=P())&&(o._icons=s)}},hostVars:4,hostBindings:function(e,o){e&2&&(w("aria-disabled",o.disabled)("disabled",o._isButtonElement&&o.disabled||null),S("mdc-list-item--disabled",o.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var Ec=(()=>{class n extends Si{static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[K([{provide:Si,useExisting:n}]),$],ngContentSelectors:Sc,decls:1,vars:0,template:function(e,o){e&1&&(q(),M(0))},styles:[Oc],encapsulation:2,changeDetection:0})}return n})(),jo=(()=>{class n extends Uh{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=yt(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,o,a){if(e&1&&Nt(a,zh,5)(a,vr,5)(a,Wh,5),e&2){let s;I(s=P())&&(o._lines=s),I(s=P())&&(o._titles=s),I(s=P())&&(o._meta=s)}},viewQuery:function(e,o){if(e&1&&ut(Fh,5)(Lh,5),e&2){let a;I(a=P())&&(o._unscopedContent=a.first),I(a=P())&&(o._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,o){e&2&&(w("aria-current",o._getAriaCurrent()),S("mdc-list-item--activated",o.activated)("mdc-list-item--with-leading-avatar",o._avatars.length!==0)("mdc-list-item--with-leading-icon",o._icons.length!==0)("mdc-list-item--with-trailing-meta",o._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",o._hasBothLeadingAndTrailing())("_mat-animation-noopable",o._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[$],ngContentSelectors:Vh,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,o){e&1&&(q(Bh),M(0),l(1,"span",1),M(2,1),M(3,2),l(4,"span",2,0),f("cdkObserveContent",function(){return o._updateItemLines(!0)}),M(6,3),c()(),M(7,4),M(8,5),A(9,"div",3))},dependencies:[Ms],encapsulation:2,changeDetection:0})}return n})();var Ic=(()=>{class n extends Si{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(o){return(t||(t=z(n)))(o||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[K([{provide:Si,useExisting:n}]),$],ngContentSelectors:Sc,decls:1,vars:0,template:function(e,o){e&1&&(q(),M(0))},styles:[Oc],encapsulation:2,changeDetection:0})}return n})();var Ho=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Wi,ge,To,Y,Mc]})}return n})();var Uo=class n extends tt{createWorkoutButtonLabel=$localize`:Save button label, when user is creating workout@@createWorkoutButtonLabel:Create`;editWorkoutButtonLabel=$localize`:Save button label, when user is updating workout@@editWorkoutButtonLabel:Update`;workoutNameFormFieldLabel=$localize`:Name form field label@@workoutNameFormFieldLabel:Name`;workoutSetsFormFieldLabel=$localize`:Sets form field label@@workoutSetsFormFieldLabel:Sets`;workoutExercisePerSetsFormFieldLabel=$localize`:Exercises  per set form field label@@workoutExercisePerSetsFormFieldLabel:Exercises / Set`;workoutDefaultTimeUnitLabel=$localize`:seconds label@@workoutDefaultTimeUnitLabel:second`;workoutPreparationTimeFormFieldLabel=$localize`:Preparation time form field label@@workoutPreparationTimeFormFieldLabel:Preparation Time`;workoutTimeFormFieldLabel=$localize`:Workout time form field label@@workoutTimeFormFieldLabel:Workout Time`;workoutRestTimeFormFieldLabel=$localize`:Rest time form field label@@workoutRestTimeFormFieldLabel:Rest Time`;workoutRestBetweenSetsTimeFormFieldLabel=$localize`:Rest Time Between Sets form field label@@workoutRestBetweenSetsTimeFormFieldLabel:Rest Time Between Sets`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var Go=class n{isNewWorkout=Ti();onWorkoutSaved=pe();form;workout;saveLabel;translations=r(Uo);workoutConfigurationService=r(Oe);signals=r(gt);constructor(){this.saveLabel=j(this.translations.createWorkoutButtonLabel),this.workout=this.signals.selectedWorkout.toSignal(),this.form=new De({})}ngOnChanges(i){if(i.isNewWorkout){let t=i.isNewWorkout.currentValue,e=this.workout();t?(e=Oe.SIMPLE_WORKOUT,this.saveLabel.set(this.translations.createWorkoutButtonLabel)):this.saveLabel.set(this.translations.editWorkoutButtonLabel),this.form=new De({name:new Gt(e?.name,$t.required),numberOfSets:new Gt(e?.schedule.numberOfSets,$t.required),numberOfExercises:new Gt(e?.schedule.numberOfExercises,$t.required),preparationTime:new Gt(e?.schedule.preparationTime,$t.required),workoutTime:new Gt(e?.schedule.workoutTime,$t.required),restTime:new Gt(e?.schedule.restTime,$t.required),restTimeBetweenSets:new Gt(e?.schedule.restTimeBetweenSets,$t.required)})}}onSaveClicked(){if(this.isNewWorkout()){let i=new dn(this.form.controls.numberOfSets.value,this.form.controls.numberOfExercises.value,this.form.controls.preparationTime.value,this.form.controls.workoutTime.value,this.form.controls.restTime.value,this.form.controls.restTimeBetweenSets.value),t=new cn("",this.form.controls.name.value,i);this.workoutConfigurationService.addWorkout(t)}else{let i=new dn(this.form.controls.numberOfSets.value,this.form.controls.numberOfExercises.value,this.form.controls.preparationTime.value,this.form.controls.workoutTime.value,this.form.controls.restTime.value,this.form.controls.restTimeBetweenSets.value),t=new cn(this.workout().id,this.form.controls.name.value,i);this.workoutConfigurationService.updateWorkout(t)}this.onWorkoutSaved.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-workout-schedule"]],inputs:{isNewWorkout:[1,"isNewWorkout"]},outputs:{onWorkoutSaved:"onWorkoutSaved"},features:[St],decls:41,vars:17,consts:[[1,"workout-schedule-form-container"],[1,"workout-schedule-form",3,"formGroup"],["floatLabel","always","subscriptSizing","dynamic",1,"workout-schedule-form-field"],["matInput","","type","text","formControlName","name"],["matInput","","type","number","min","1","step","1","max","99","formControlName","numberOfSets"],["matInput","","type","number","min","1","step","1","max","99","formControlName","numberOfExercises"],["matInput","","type","number","min","5","step","5","max","900","formControlName","preparationTime"],["matTextSuffix","",1,"workout-schedule-form-field-suffix"],["matInput","","type","number","min","5","step","5","max","900","formControlName","workoutTime"],["matInput","","type","number","min","5","step","5","max","900","formControlName","restTime"],["floatLabel","always","subscriptSizing","dynamic","max","900",1,"workout-schedule-form-field"],["matInput","","type","number","min","0","step","5","formControlName","restTimeBetweenSets"],[1,"workout-schedule-form-actions"],["mat-flat-button","",3,"click","title","disabled"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label"),u(4),c(),A(5,"input",3),c(),l(6,"mat-form-field",2)(7,"mat-label"),u(8),c(),A(9,"input",4),c(),l(10,"mat-form-field",2)(11,"mat-label"),u(12),c(),A(13,"input",5),c(),l(14,"mat-form-field",2)(15,"mat-label"),u(16),c(),A(17,"input",6),l(18,"span",7),u(19),c()(),l(20,"mat-form-field",2)(21,"mat-label"),u(22),c(),A(23,"input",8),l(24,"span",7),u(25),c()(),l(26,"mat-form-field",2)(27,"mat-label"),u(28),c(),A(29,"input",9),l(30,"span",7),u(31),c()(),l(32,"mat-form-field",10)(33,"mat-label"),u(34),c(),A(35,"input",11),l(36,"span",7),u(37),c()()(),l(38,"div",12)(39,"button",13),f("click",function(){return e.onSaveClicked()}),u(40),c()()()),t&2&&(d(),x("formGroup",e.form),d(3),O(e.translations.workoutNameFormFieldLabel),d(4),O(e.translations.workoutSetsFormFieldLabel),d(4),O(e.translations.workoutExercisePerSetsFormFieldLabel),d(4),O(e.translations.workoutPreparationTimeFormFieldLabel),d(3),O(e.translations.workoutDefaultTimeUnitLabel),d(3),O(e.translations.workoutTimeFormFieldLabel),d(3),O(e.translations.workoutDefaultTimeUnitLabel),d(3),O(e.translations.workoutRestTimeFormFieldLabel),d(3),O(e.translations.workoutDefaultTimeUnitLabel),d(3),O(e.translations.workoutRestBetweenSetsTimeFormFieldLabel),d(3),O(e.translations.workoutDefaultTimeUnitLabel),d(2),x("title",it(e.saveLabel()))("disabled",!e.form.valid),w("aria-label",e.saveLabel()),d(),J(" ",e.saveLabel()," "))},dependencies:[_t,_e,Ie,Rn,mn,nr,Ao,oc,Do,Oo,Tn,Ka,Co,ko,Ja,Za,Eo,Ee,yi],styles:[".workout-schedule-form-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1rem}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]   .workout-schedule-form-field[_ngcontent-%COMP%]{width:100%}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]   .workout-schedule-form-field-suffix[_ngcontent-%COMP%]{margin-left:.5rem}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form-actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}"]})};var zn=class n extends tt{createWorkoutNavHeaderLabel=$localize`:Side sheet label, when user is creating workout@@createWorkoutNavHeaderLabel:New Workout`;editWorkoutNavHeaderLabel=$localize`:Side sheet label, when user is editing a workout@@editWorkoutNavHeaderLabel:Edit Workout`;closeSideSheetButtonLabel=$localize`:close side sheet label name@@closeSideSheetButtonLabel:Back`;newWorkoutButtonLabel=$localize`:New workout button label name@@newWorkoutButtonLabel:New Workout`;aboutButtonLabel=$localize`:About button label@@aboutButtonLabel:About`;workoutListLabel=$localize`:Heading for workout list@@workoutListLabel:My Workouts`;workoutLabel=$localize`:Workout label@@workoutLabel:Workout`;setLabel=$localize`:Set label name@@setLabel:Set`;exerciseLabel=$localize`:Exercise label@@exerciseLabel:Exercise`;restLabel=$localize`:Rest label name@@restLabel:Rest`;timeUnitLabel=$localize`:Time unit label@@timeUnitLabel:minute`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ac="1.4.18";var $o=class n extends tt{copyrightNotice=$localize`:Copyright notice@@copyrightNotice:2025 - Márk Szabó`;contactInformationLabel=$localize`:Contact information label@@contactInformationLabel:Contact`;madeInLabel=$localize`:Made in label@@madeInLabel:Made in`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var Wn=class n{applicationVersion=j(Ac);translations=r($o);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-application-info"]],decls:25,vars:5,consts:[["matListItemIcon","","aria-hidden","true"],["matListItemTitle",""],["href","mailto:hello@example.com","target","_blank","rel","noopener noreferrer"],[1,"made-in-section"],["src","european-flag.jpg"]],template:function(t,e){t&1&&(l(0,"mat-list")(1,"mat-list-item")(2,"mat-icon",0),u(3,"web_asset"),c(),l(4,"div",1),u(5),c()(),l(6,"mat-list-item")(7,"mat-icon",0),u(8,"mail"),c(),l(9,"div",1)(10,"a",2),u(11),c()()(),l(12,"mat-list-item")(13,"mat-icon",0),u(14,"copyright"),c(),l(15,"div",1),u(16),c()(),l(17,"mat-list-item")(18,"mat-icon",0),u(19,"public"),c(),l(20,"div",1)(21,"div",3)(22,"div"),u(23),c(),A(24,"img",4),c()()()()),t&2&&(d(5),Je("",e.translations.applicationName," ",e.applicationVersion()),d(6),O(e.translations.contactInformationLabel),d(5),O(e.translations.copyrightNotice),d(7),O(e.translations.madeInLabel))},dependencies:[vt,Mt,Ho,Ec,jo,yr,vr],styles:[".made-in-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.3rem}"]})};var qo=class n extends tt{closeAboutButtonLabel=$localize`:Close button label@@closeAboutButtonLabel:Close`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var $h=()=>({backgroundImage:"url(./blob-background.svg)"}),Xo=class n{translations=r(qo);dialogRef=r(Mi);constructor(){}onCloseClicked(){this.dialogRef.close()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-about-dialog"]],decls:7,vars:7,consts:[[1,"about-dialog-content"],[1,"hero"],["src","icons/icon-192x192.png",1,"application-icon"],[1,"info"],["mat-button","",3,"click","title"]],template:function(t,e){t&1&&(l(0,"mat-dialog-content",0)(1,"section",1),A(2,"img",2),c(),l(3,"section",3),A(4,"tbt-application-info"),l(5,"button",4),f("click",function(){return e.onCloseClicked()}),u(6),c()()()),t&2&&(d(),qr(Xr(6,$h)),d(4),x("title",it(e.translations.closeAboutButtonLabel)),w("aria-label",e.translations.closeAboutButtonLabel),d(),J(" ",e.translations.closeAboutButtonLabel," "))},dependencies:[vt,_t,_e,wc,Wn],styles:[".about-dialog-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-height:100%;padding:0}.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:30vw;width:30vw;height:30dvw;width:30dvw;background-size:cover;background-position:center}.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .application-icon[_ngcontent-%COMP%]{max-width:40%;max-height:40%}.about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;height:30vw;width:30vw;height:30dvw;width:30dvw}@media screen and (max-width:600px)or (max-height:650px){.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{height:40vw;width:40vw;height:40dvw;width:40dvw;min-height:300px;min-width:300px}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:40vw;width:40vw;height:40dvw;width:40dvw;min-height:300px;min-width:300px}@media screen and (max-width:600px)or (max-height:450px){.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]{flex-direction:column}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{height:40vh;width:60vh;height:40dvh;width:60dvh}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:40vh;width:60vh;height:40dvh;width:60dvh}@media screen and (max-height:600px){.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}"]})};var Ko=class n extends tt{summary=$localize`:Summary text@@appSummary:Training, streamlined. Tabata Max is the web-based interval timer built for those who want more results with less distraction. Start faster. Train smarter.`;keyBenefitsHeader=$localize`:Header for key benefits section@@keyBenefitsHeader:Designed for the Work.`;keyBenefit1Label=$localize`:Label for key benefit 1@@keyBenefit1Label:Simply Focused`;keyBenefit2Label=$localize`:Label for key benefit 2@@keyBenefit2Label:Stay in Sync`;keyBenefit3Label=$localize`:Label for key benefit 3@@keyBenefit3Label:Seamlessly Portable`;keyBenefit4Label=$localize`:Label for key benefit 4@@keyBenefit4Label:Start Instantly`;keyBenefit1=$localize`:Text for key benefit 1@@keyBenefit1:A clean design that puts your workout first.`;keyBenefit2=$localize`:Text for key benefit 2@@keyBenefit2:Clear cues that let you focus on your movement.`;keyBenefit3=$localize`:Text for key benefit 3@@keyBenefit3:A consistent experience across all your devices.`;keyBenefit4=$localize`:Text for key benefit 4@@keyBenefit4:Open in your browser to begin. Install for offline use anytime, anywhere.`;callToActionLabel=$localize`:Call to action label@@callToActionLabel:Are You Ready?`;launcherScreenshotCaption=$localize`:Screenshot caption@@launcherScreenshotCaption:Opening screen showing your last workout`;workoutEditScreenshotCaption=$localize`:Screenshot caption@@workoutEditScreenshotCaption:Editing a workout`;workoutListScreenshotCaption=$localize`:Screenshot caption@@workoutListScreenshotCaption:Listing workouts`;workoutRestScreenshotCaption=$localize`:Screenshot caption@@workoutRestScreenshotCaption:Resting during a workout`;workoutPrepareScreenshotCaption=$localize`:Screenshot caption@@workoutPrepareScreenshotCaption:Prepare for the next rep during workout`;workoutActivityScreenshotCaption=$localize`:Screenshot caption@@workoutActivityScreenshotCaption:Workout active rep`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var qh=["*"];var Xh=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Kh=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Yh=new _("MAT_CARD_CONFIG"),Tc=(()=>{class n{appearance;constructor(){let t=r(Yh,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,o){e&2&&S("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:qh,decls:1,vars:0,template:function(e,o){e&1&&(q(),M(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),Rc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Fc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=k({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Lc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Kh,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(e,o){e&1&&(q(Xh),M(0),Lt(1,"div",0),M(2,1),Bt(),M(3,2))},encapsulation:2,changeDetection:0})}return n})();var Bc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=N({type:n});static \u0275inj=V({imports:[Y]})}return n})();var Yo=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-animated-greeting"]],decls:9,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","preserveAspectRatio","xMidYMid meet","viewBox","0 0 662.3 78"],["id","svgGroup","fill","none","fill-rule","evenodd","stroke","#005cbb","stroke-linecap","round","stroke-width","0.2mm","font-size","9pt",2,"stroke","#005cbb","stroke-width",".2mm","fill","none"],["id","0","d","M97.1 0h40.5q-2.2 9.4-4.35 18.75-2.15 9.35-4.35 18.75-2.2 9.4-4.35 18.75Q122.4 65.6 120.3 75H73.8l-6-37.6q0-.1-.05-.15l-.05-.05h-.05q-.05 0-.1.05t-.05.15L61.6 75H18.2l-3.6-15q-1.8-7.5-3.65-15Q9.1 37.5 7.3 30q-1.8-7.5-3.65-15Q1.8 7.5 0 0h42.6q.8 5.1 1.55 10.25t1.5 10.25q.75 5.1 1.55 10.25T48.7 41h.5l5.6-41h30.1l5.9 41h.2q1.5-10.3 3.05-20.5Q95.6 10.3 97.1 0Z",1,"tkrlAKKf_0"],["id","1","d","m189.4 45.3 30.9 10.1q-1.8 6.3-7.65 11.45Q206.8 72 197.9 75T178 78q-9.4 0-17.55-2.1t-14.3-6.35Q140 65.3 136.5 58.9T133 44q0-8.5 3.5-14.9t9.65-10.65q6.15-4.25 14.35-6.35Q168.7 10 178 10q9.5 0 17.45 2.1 7.95 2.1 13.7 6.45 5.75 4.35 8.9 11 3.15 6.65 3.15 15.75h-54.6v.1q0 1.5.8 2.8.8 1.3 2.25 2.25t3.6 1.45q2.15.5 4.95.5 5.3 0 8.2-1.9 2.9-1.9 3-5.2Zm-22.6-3.1h22.3q.1 0 .1-.05V42q0-1.6-.85-2.85t-2.35-2.1q-1.5-.85-3.55-1.3-2.05-.45-4.45-.45-4.9 0-8.1 1.75-3.2 1.75-3.2 4.95v.2h.1Z",1,"tkrlAKKf_1"],["id","2","d","M258.6 75H224V0h34.6v75Z",1,"tkrlAKKf_2"],["id","3","d","m350.2 38.4-32.1 5.7q0-2.7-1.7-4.4-1.7-1.7-4.3-2.45-2.6-.75-5.5-.75-3.2 0-5.85.85-2.65.85-4.15 2.5-1.5 1.65-1.5 4.15 0 1.9.85 3.3t2.45 2.35q1.6.95 3.7 1.4 2.1.45 4.5.45 2.8 0 5.45-.7 2.65-.7 4.35-2.35 1.7-1.65 1.7-4.35 8.4 1 16.1 2.05 7.7 1.05 16.1 2.15-1.2 9.7-7.15 16.35-5.95 6.65-15.4 10Q318.3 78 306.6 78q-9.4 0-17.55-2.1t-14.3-6.35q-6.15-4.25-9.65-10.65T261.6 44q0-4.4.95-8.2.95-3.8 2.75-7.05t4.35-5.95q2.55-2.7 5.75-4.8 4.1-2.7 9-4.45t10.55-2.65q5.65-.9 11.65-.9 11.5 0 20.75 3.15t15.3 9.45q6.05 6.3 7.55 15.8Z",1,"tkrlAKKf_3"],["id","4","d","M397.6 78q-6.2 0-12-.9t-10.8-2.75q-5-1.85-9.1-4.65-4.1-2.8-7-6.55-2.9-3.75-4.5-8.5t-1.6-10.55q0-6.8 2.25-12.25t6.4-9.55q4.15-4.1 9.75-6.85t12.35-4.1Q390.1 10 397.6 10q9.4 0 17.55 2.15t14.3 6.4q6.15 4.25 9.65 10.65t3.5 14.9q0 8.5-3.5 14.85t-9.65 10.6q-6.15 4.25-14.3 6.35Q407 78 397.6 78Zm.1-26.5q6.2 0 8.8-2.4 2.6-2.4 2.6-5.2 0-1.3-.6-2.6t-1.9-2.4q-1.3-1.1-3.5-1.75-2.2-.65-5.4-.65t-5.45.65q-2.25.65-3.6 1.75t-1.95 2.4q-.6 1.3-.6 2.7 0 1.4.6 2.75t2 2.4q1.4 1.05 3.6 1.7 2.2.65 5.4.65Z",1,"tkrlAKKf_4"],["id","5","d","M571.2 75h-34.6V43.4q0-2.9-1.45-4.1-1.45-1.2-3.45-1.3-2-.1-3.65.5T526 39.7l7-25.7q3.6-1.6 7.75-2.4 4.15-.8 8.25-.8 5.8 0 10.85 1.8t8.2 5.7q3.15 3.9 3.15 10.4V75ZM526 75h-34.6V43.4q0-2.9-1.45-4.1-1.45-1.2-3.45-1.3-2-.1-3.65.5t-2.05 1.2l8-25.7q7.3-3.2 15.8-3.2 4.2 0 8 1t6.85 3.1q3.05 2.1 4.8 5.55Q526 23.9 526 28.7V75Zm-45.8 0h-34.6V13h34.6v62Z",1,"tkrlAKKf_5"],["id","6","d","m630.5 45.3 30.9 10.1q-1.8 6.3-7.65 11.45Q647.9 72 639 75t-19.9 3q-9.4 0-17.55-2.1t-14.3-6.35q-6.15-4.25-9.65-10.65T574.1 44q0-8.5 3.5-14.9t9.65-10.65q6.15-4.25 14.35-6.35 8.2-2.1 17.5-2.1 9.5 0 17.45 2.1 7.95 2.1 13.7 6.45 5.75 4.35 8.9 11 3.15 6.65 3.15 15.75h-54.6v.1q0 1.5.8 2.8.8 1.3 2.25 2.25t3.6 1.45q2.15.5 4.95.5 5.3 0 8.2-1.9 2.9-1.9 3-5.2Zm-22.6-3.1h22.3q.1 0 .1-.05V42q0-1.6-.85-2.85t-2.35-2.1q-1.5-.85-3.55-1.3-2.05-.45-4.45-.45-4.9 0-8.1 1.75-3.2 1.75-3.2 4.95v.2h.1Z",1,"tkrlAKKf_6"]],template:function(t,e){t&1&&(ye(),Lt(0,"svg",0)(1,"g",1),Vt(2,"path",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8),Bt()())},styles:[".tkrlAKKf_0[_ngcontent-%COMP%]{stroke-dasharray:601 603;stroke-dashoffset:602;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 0ms forwards}.tkrlAKKf_1[_ngcontent-%COMP%]{stroke-dasharray:411 413;stroke-dashoffset:412;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 111ms forwards}.tkrlAKKf_2[_ngcontent-%COMP%]{stroke-dasharray:220 222;stroke-dashoffset:221;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 222ms forwards}.tkrlAKKf_3[_ngcontent-%COMP%]{stroke-dasharray:369 371;stroke-dashoffset:370;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 333ms forwards}.tkrlAKKf_4[_ngcontent-%COMP%]{stroke-dasharray:316 318;stroke-dashoffset:317;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 444ms forwards}.tkrlAKKf_5[_ngcontent-%COMP%]{stroke-dasharray:597 599;stroke-dashoffset:598;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 555ms forwards}.tkrlAKKf_6[_ngcontent-%COMP%]{stroke-dasharray:411 413;stroke-dashoffset:412;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 666ms forwards}@keyframes _ngcontent-%COMP%_tkrlAKKf_draw{to{stroke-dashoffset:0}}@keyframes _ngcontent-%COMP%_tkrlAKKf_fade{0%{stroke-opacity:1}93.54838709677419%{stroke-opacity:1}to{stroke-opacity:0}}"]})};var Qo=class n extends tt{previousImageButtonLabel=$localize`:Back button label@@previousImageButtonLabel:Back`;nextImageButtonLabel=$localize`:Next button label@@nextImageButtonLabel:Next`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var Zo=class n{images=Ti();backButtonLabel;nextButtonLabel;src=j("");caption=j("");index=0;translations=r(Qo);constructor(){this.backButtonLabel=j(this.translations.previousImageButtonLabel),this.nextButtonLabel=j(this.translations.nextImageButtonLabel)}ngOnInit(){let i=this.images()?.at(0);i&&(this.src.set(i.src),this.caption.set(i.caption))}onBackClicked(){this.index>0&&(this.index=this.index-1,this.selectImage(this.images()?.at(this.index)))}onNextClicked(){let i=this.images()?.length;i&&this.index<i-1&&(this.index=this.index+1,this.selectImage(this.images()?.at(this.index)))}selectImage(i){i&&(this.src.set(i.src),this.caption.set(i.caption))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-image-gallery"]],inputs:{images:[1,"images"]},decls:11,vars:7,consts:[[1,"image-gallery-container"],["mat-icon-button","",1,"back-button",3,"click","title"],["aria-hidden","true"],[1,"selected-image",3,"click"],[3,"src","alt"],["mat-icon-button","",1,"next-button",3,"click","title"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"button",1),f("click",function(){return e.onBackClicked()}),l(2,"mat-icon",2),u(3,"arrow_back"),c()(),l(4,"figure",3),f("click",function(){return e.onNextClicked()}),A(5,"img",4),l(6,"figcaption"),u(7),c()(),l(8,"button",5),f("click",function(){return e.onNextClicked()}),l(9,"mat-icon",2),u(10,"arrow_forward"),c()()()),t&2&&(d(),x("title",e.backButtonLabel()),w("aria-label",e.backButtonLabel()),d(4),x("src",e.src(),Nr)("alt",e.caption()),d(2),O(e.caption()),d(),x("title",e.nextButtonLabel()),w("aria-label",e.nextButtonLabel()))},dependencies:[_t,Ut,vt,Mt],styles:[".image-gallery-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:2px}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;justify-content:center;margin:0}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{font:var(--mat-sys-title-large);padding-top:.5rem}"]})};var Ae=class{constructor(i,t){this.src=i;this.caption=t}};var Jo=class n{onCreate=pe();translations;images;workoutLauncherComponentTranslations=r(zn);workoutLauncherEmptyStateComponentTranslations=r(Ko);constructor(){this.translations=Object.assign({},this.workoutLauncherComponentTranslations,this.workoutLauncherEmptyStateComponentTranslations),this.images=[new Ae("images/launcher.png",this.translations.launcherScreenshotCaption),new Ae("images/workout-edit.png",this.translations.workoutEditScreenshotCaption),new Ae("images/workout-list.png",this.translations.workoutListScreenshotCaption),new Ae("images/workout-rest.png",this.translations.workoutRestScreenshotCaption),new Ae("images/workout-prepare.png",this.translations.workoutPrepareScreenshotCaption),new Ae("images/workout-start.png",this.translations.workoutActivityScreenshotCaption)]}onCreateButtonClicked(){this.onCreate.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-workout-launcher-empty-state"]],outputs:{onCreate:"onCreate"},decls:55,vars:16,consts:[[1,"empty-workouts"],[1,"message"],[1,"greeting"],[1,"summary"],[1,"screenshots",3,"images"],[1,"key-benefits-header"],[1,"key-benefits"],[1,"key-benefit"],[1,"key-benefit-label"],[1,"key-benefit-content"],[1,"call-to-action"],[1,"call-to-action-label"],[1,"action-emoticon"],["mat-fab","","extended","",3,"click","title"],["aria-hidden","true"]],template:function(t,e){t&1&&(l(0,"section",0)(1,"div",1),A(2,"tbt-animated-greeting",2),l(3,"div",3),u(4),c()(),A(5,"tbt-image-gallery",4),l(6,"div",1)(7,"div",5),u(8),c(),l(9,"div",6)(10,"mat-card",7)(11,"mat-card-header")(12,"mat-card-title"),u(13,"\u2728"),l(14,"span",8),u(15),c()()(),l(16,"mat-card-content")(17,"p",9),u(18),c()()(),l(19,"mat-card",7)(20,"mat-card-header")(21,"mat-card-title"),u(22,"\u{1F441}\uFE0F"),l(23,"span",8),u(24),c()()(),l(25,"mat-card-content")(26,"p",9),u(27),c()()(),l(28,"mat-card",7)(29,"mat-card-header")(30,"mat-card-title"),u(31,"\u{1F4BB}"),l(32,"span",8),u(33),c()()(),l(34,"mat-card-content")(35,"p",9),u(36),c()()(),l(37,"mat-card",7)(38,"mat-card-header")(39,"mat-card-title"),u(40,"\u26A1\uFE0F"),l(41,"span",8),u(42),c()()(),l(43,"mat-card-content")(44,"p",9),u(45),c()()()(),l(46,"div",10)(47,"span",11),u(48),c(),l(49,"span",12),u(50,"\u{1F449}"),c(),l(51,"button",13),f("click",function(){return e.onCreateButtonClicked()}),l(52,"mat-icon",14),u(53,"add"),c(),u(54),c()()()()),t&2&&(d(4),O(e.translations.summary),d(),x("images",e.images),d(3),O(e.translations.keyBenefitsHeader),d(7),O(e.translations.keyBenefit1Label),d(3),O(e.translations.keyBenefit1),d(6),O(e.translations.keyBenefit2Label),d(3),O(e.translations.keyBenefit2),d(6),O(e.translations.keyBenefit3Label),d(3),O(e.translations.keyBenefit3),d(6),O(e.translations.keyBenefit4Label),d(3),O(e.translations.keyBenefit4),d(3),O(e.translations.callToActionLabel),d(3),x("title",it(e.translations.newWorkoutButtonLabel)),w("aria-label",e.translations.newWorkoutButtonLabel),d(3),J(" ",e.translations.newWorkoutButtonLabel," "))},dependencies:[_t,$s,vt,Mt,Bc,Tc,Fc,Lc,Rc,Yo,Zo],styles:["[_nghost-%COMP%]{display:flex;justify-content:center}.empty-workouts[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font:var(--mat-sys-headline-medium);color:var(--mat-sys-on-surface)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]{width:80%;margin-top:8rem;margin-bottom:4rem;text-align:center}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{text-align:justify}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits-header[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);font-weight:700;margin-bottom:2rem}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{display:grid}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]{margin:1rem}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]   .key-benefit-label[_ngcontent-%COMP%]{font-weight:700}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]   .key-benefit-content[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:20rem;font:var(--mat-sys-headline-large);font-weight:700;margin-top:4rem;margin-bottom:2rem;border-style:solid;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));background-color:var(--mat-sys-primary)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .call-to-action-label[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%]{margin-right:2.5rem;margin-left:2.5rem;font-size:2.5rem}.empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{margin-top:4rem;margin-bottom:4rem}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]{width:50ch}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small)}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{margin-top:6rem;margin-bottom:6rem;width:max(50ch,50vw)}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{margin-top:6rem}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]{width:100%;margin-top:2rem}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{width:80%;font:var(--mat-sys-headline-small)}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:1fr}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{width:98vw}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]{width:100%;margin-top:2rem}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{width:90%;font:var(--mat-sys-headline-small)}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:1fr}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small);font-weight:600;height:15rem}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%]{margin-right:1.5rem;margin-left:1.5rem;font-size:1.5rem}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{width:90vw}"]})};var Zh=["drawer"],Jh=["sideSheet"];function tp(n,i){n&1&&A(0,"mat-divider",11)}function ep(n,i){if(n&1){let t=Dt();l(0,"a",27),f("click",function(){let o=ct(t).$implicit,a=D(2);return dt(a.onWorkoutSelected(o))}),u(1),c()}if(n&2){let t=i.$implicit,e=D(2);x("activated",e.isWorkoutSelected(t)),d(),O(t.name)}}function np(n,i){if(n&1&&(l(0,"h3",24),u(1),c(),l(2,"mat-nav-list",25),Ye(3,ep,2,2,"a",26,qn),c()),n&2){let t=D();d(),J(" ",t.translations.workoutListLabel," "),d(2),Qe(t.workouts())}}function ip(n,i){if(n&1&&(l(0,"div",18),u(1),c()),n&2){let t=D();d(),O(t.translations.createWorkoutNavHeaderLabel)}}function op(n,i){if(n&1&&(l(0,"div",18),u(1),c()),n&2){let t=D();d(),O(t.translations.editWorkoutNavHeaderLabel)}}function ap(n,i){if(n&1&&(l(0,"section",28)(1,"div"),u(2),c(),l(3,"div",29)(4,"mat-icon",30),u(5,"sprint"),c(),l(6,"span",31),u(7),c()()(),l(8,"section",32)(9,"div"),u(10),c(),l(11,"div",29)(12,"mat-icon",30),u(13,"laps"),c(),l(14,"span",31),u(15),c(),l(16,"span",31),u(17,"\xA0/\xA0"),c(),l(18,"mat-icon",30),u(19,"exercise"),c(),l(20,"span",31),u(21),c()()(),l(22,"section",33)(23,"div"),u(24),c(),l(25,"div",29)(26,"mat-icon",30),u(27,"coffee"),c(),l(28,"span",31),u(29),c()()()),n&2){let t,e,o,a=D(2);d(),ht(ie("configuration-option-value ",a.displayTextClass())),d(),J(" ",(t=a.workout())==null||t.schedule==null?null:t.schedule.workoutTime," "),d(5),O(a.translations.workoutLabel),d(2),ht(ie("configuration-option-value ",a.displayTextClass())),d(),Je(" ",(e=a.workout())==null||e.schedule==null?null:e.schedule.numberOfSets,"/",(e=a.workout())==null||e.schedule==null?null:e.schedule.numberOfExercises," "),d(5),O(a.translations.setLabel),d(6),O(a.translations.exerciseLabel),d(2),ht(ie("configuration-option-value ",a.displayTextClass())),d(),J(" ",(o=a.workout())==null||o.schedule==null?null:o.schedule.restTime," "),d(5),O(a.translations.restLabel)}}function rp(n,i){if(n&1&&(l(0,"section",34)(1,"div",35)(2,"div"),u(3),c(),l(4,"div",29)(5,"mat-icon",30),u(6,"laps"),c(),l(7,"span",31),u(8),c()()(),l(9,"div",35)(10,"div"),u(11),c(),l(12,"div",29)(13,"mat-icon",30),u(14,"exercise"),c(),l(15,"span",31),u(16),c()()()(),l(17,"section",36)(18,"div",35)(19,"div"),u(20),c(),l(21,"div",29)(22,"span",31),u(23),c()()()(),l(24,"section",37)(25,"div",35)(26,"div"),u(27),c(),l(28,"div",29)(29,"mat-icon",30),u(30,"sprint"),c(),l(31,"span",31),u(32),c()()(),l(33,"div",35)(34,"div"),u(35),c(),l(36,"div",29)(37,"mat-icon",30),u(38,"coffee"),c(),l(39,"span",31),u(40),c()()()()),n&2){let t,e,o,a,s=D(2);d(2),ht(ie("configuration-option-value ",s.displayTextClass())),d(),J(" ",(t=s.workout())==null||t.schedule==null?null:t.schedule.numberOfSets," "),d(5),O(s.translations.setLabel),d(2),ht(ie("configuration-option-value ",s.displayTextClass())),d(),J(" ",(e=s.workout())==null||e.schedule==null?null:e.schedule.numberOfExercises," "),d(5),O(s.translations.exerciseLabel),d(3),ht(ie("configuration-option-value ",s.displayTextClass())),d(),J(" ",s.totalWorkoutTime()," "),d(3),O(s.translations.timeUnitLabel),d(3),ht(ie("configuration-option-value ",s.displayTextClass())),d(),J(" ",(o=s.workout())==null||o.schedule==null?null:o.schedule.workoutTime," "),d(5),J(" ",s.translations.workoutLabel),d(2),ht(ie("configuration-option-value ",s.displayTextClass())),d(),J(" ",(a=s.workout())==null||a.schedule==null?null:a.schedule.restTime," "),d(5),O(s.translations.restLabel)}}function sp(n,i){if(n&1&&L(0,ap,30,17)(1,rp,41,25),n&2){let t=D();B(t.isNarrowLayout()?0:1)}}function lp(n,i){if(n&1){let t=Dt();l(0,"tbt-workout-launcher-empty-state",38),f("onCreate",function(){ct(t);let o=D();return dt(o.onCreate())}),c()}}var jn=class n{static LARGE_DISPLAY_TEXT="large-display-text";static SMALL_DISPLAY_TEXT="small-display-text";workout;workouts;isSmartPhone;isNewWorkout=j(!1);displayTextClass=Z(()=>{let i=this.workout()?.schedule;return i&&(i.restTime>=100||i.workoutTime>=100||i.numberOfSets>=10&&i.numberOfExercises>=10)?n.SMALL_DISPLAY_TEXT:n.LARGE_DISPLAY_TEXT});totalWorkoutTime=Z(()=>{let i=0,t=this.workout()?.schedule;if(t!==void 0){let e=t.numberOfExercises*t.workoutTime+(t.numberOfExercises-1)*t.restTime;i=t.numberOfSets*e,t.restTimeBetweenSets?i+=t.numberOfSets*t.restTimeBetweenSets:i+=t.numberOfSets*t.restTime,t.preparationTime&&(i+=t.preparationTime),i=Math.min(Math.round(i/60),999)}return i});translations=r(zn);router=r(Fe);dialogService=r($e);workoutConfigurationService=r(Oe);layoutDetectionService=r(fs);signals=r(gt);navigationDrawer=fe("drawer");sideSheet=fe("sideSheet");constructor(){this.workout=this.signals.selectedWorkout.toSignal(),this.workouts=this.signals.workouts.toSignal(),this.isSmartPhone=this.signals.isSmartPhone.toSignal(),this.signals.settingsNeedsReload.toObservable().subscribe(i=>{i&&window.location.reload()})}isWorkoutSelected(i){return this.workout()?.id===i?.id}toggleNavigationDrawer(){this.navigationDrawer()?.toggle()}toggleSideSheet(i){this.isNewWorkout.update(()=>i),this.sideSheet()?.toggle()}onCloseSideSheetClicked(){this.sideSheet()?.toggle()}onAboutClicked(){this.navigationDrawer()?.close().then(()=>{this.dialogService.openDialog(Xo,"/about")})}onWorkoutSelected(i){this.workoutConfigurationService.selectWorkout(i.id),this.toggleNavigationDrawer()}onCreate(){this.toggleSideSheet(!0)}isNarrowLayout(){return this.layoutDetectionService.isNarrowLayout()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-workout-launcher"]],viewQuery:function(t,e){t&1&&pn(e.navigationDrawer,Zh,5)(e.sideSheet,Jh,5),t&2&&Ze(2)},decls:32,vars:14,consts:[["drawer",""],["sideSheet",""],["autosize","",1,"navigation-drawer-container"],["mode","over",1,"navigation-drawer"],[1,"navigation-drawer-content"],[1,"navigation-drawer-header-container"],[1,"navigation-drawer-title-container"],["src","icons/icon-72x72.png",1,"navigation-drawer-app-icon"],[1,"navigation-drawer-title"],[1,"navigation-list","navigation-drawer-small-gap"],["mat-list-item","",3,"click"],[1,"navigation-drawer-divider"],[1,"navigation-drawer-links"],["mode","over","position","end",1,"side-sheet"],[1,"side-sheet-container"],[1,"side-sheet-nav"],["mat-icon-button","",3,"click","title"],["aria-hidden","true"],[1,"side-sheet-header"],[1,"side-sheet-content"],[3,"onWorkoutSaved","isNewWorkout"],[1,"launcher"],[3,"onNavigationMenuToggle","onSideSheetToggle"],[1,"empty-state"],[1,"navigation-drawer-label"],[1,"navigation-list"],["mat-list-item","",3,"activated"],["mat-list-item","",3,"click","activated"],[1,"workout-time","configuration-option"],[1,"configuration-description"],["aria-hidden","false",1,"configuration-option-icon"],[1,"configuration-option-name"],[1,"set-and-exercise-counter","configuration-option"],[1,"rest-time","configuration-option"],[1,"left-column"],[1,"configuration-option"],[1,"center-column"],[1,"right-column"],[1,"empty-state",3,"onCreate"]],template:function(t,e){t&1&&(l(0,"mat-sidenav-container",2)(1,"mat-sidenav",3,0)(3,"section",4)(4,"div",5)(5,"div",6),A(6,"img",7),l(7,"h3",8),u(8),c()(),l(9,"mat-nav-list",9)(10,"a",10),f("click",function(){return e.onAboutClicked()}),u(11),c()(),L(12,tp,1,0,"mat-divider",11),c(),l(13,"div",12),L(14,np,5,1),c()()(),l(15,"mat-sidenav",13,1)(17,"section",14)(18,"div",15)(19,"button",16),f("click",function(){return e.onCloseSideSheetClicked()}),l(20,"mat-icon",17),u(21,"arrow_back"),c()(),L(22,ip,2,1,"div",18)(23,op,2,1,"div",18),c(),l(24,"div",19)(25,"tbt-workout-schedule",20),f("onWorkoutSaved",function(){return e.onCloseSideSheetClicked()}),c()()()(),l(26,"mat-drawer-content",21)(27,"nav")(28,"tbt-workout-launcher-nav-bar",22),f("onNavigationMenuToggle",function(){return e.toggleNavigationDrawer()})("onSideSheetToggle",function(a){return e.toggleSideSheet(a)}),c()(),l(29,"main"),L(30,sp,2,1)(31,lp,1,0,"tbt-workout-launcher-empty-state",23),c()()()),t&2&&(S("display",e.workout()!==void 0),d(8),O(e.translations.applicationName),d(3),O(e.translations.aboutButtonLabel),d(),B(e.workouts().length?12:-1),d(2),B(e.workouts().length?14:-1),d(5),x("title",it(e.translations.closeSideSheetButtonLabel)),w("aria-label",e.translations.closeSideSheetButtonLabel),d(3),B(e.isNewWorkout()?22:23),d(3),x("isNewWorkout",e.isNewWorkout()),d(4),S("intro",e.workout()===void 0),d(),B(e.workout()!==void 0?30:31))},dependencies:[_t,Ut,vt,Mt,En,kc,Nn,_r,Cc,Ho,Ic,jo,br,zo,Go,Jo],styles:[`nav[_ngcontent-%COMP%]{width:100%}.navigation-drawer-container[_ngcontent-%COMP%]{height:100%}.navigation-drawer-container.display[_ngcontent-%COMP%]{background-image:url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23e1ecffff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linecap='square' stroke-width='0.5' stroke='%23ffffffff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]{max-width:85%}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]{padding:1rem;display:flex;flex-direction:column;height:calc(100% - 2rem)}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]   .navigation-drawer-app-icon[_ngcontent-%COMP%]{height:44px;width:44px}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]   .navigation-drawer-title[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);font-size:1.5em}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-divider[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level3)}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-label[_ngcontent-%COMP%]{font:var(--mat-sys-title-large);font-size:1.25em;font-weight:200;margin-bottom:1rem;margin-left:0;margin-top:2rem;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-small-gap[_ngcontent-%COMP%]{margin-bottom:1rem;margin-left:0;margin-top:0;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-large-gap[_ngcontent-%COMP%]{margin-bottom:2rem;margin-left:0;margin-top:0;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-links[_ngcontent-%COMP%]{overflow:auto}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-links[_ngcontent-%COMP%]   .navigation-list[_ngcontent-%COMP%]{padding:0}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]{max-width:85%}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem;height:calc(100% - 2rem)}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-nav[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:flex-start;gap:1rem}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-nav[_ngcontent-%COMP%]   .side-sheet-header[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-content[_ngcontent-%COMP%]{height:100%;flex-grow:2}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 1fr [center-column] 50% [right-column] 1fr;grid-template-rows:[center-row] 1fr;height:100%;color:var(--mat-sys-primary)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]{grid-column-start:center-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:center}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(12.5vh,7.5vw);line-height:min(12.5vh,7.5vw);font-size:min(12.5dvh,7.5dvw);line-height:min(12.5dvh,7.5dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(50vh,30vw);line-height:min(50vh,30vw);font-size:min(50dvh,30dvw);line-height:min(50dvh,30dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(50vh,24vw);line-height:min(50vh,24vw);font-size:min(50dvh,24dvw);line-height:min(50dvh,24dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:min(6.25vh,3.75vw);margin-right:.5vw;font-size:min(6.25dvh,3.75dvw);margin-right:.5dvw;height:auto;width:auto}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(6.25vh,3.75vw);line-height:min(6.25vh,3.75vw);font-size:min(6.25dvh,3.75dvw);line-height:min(6.25dvh,3.75dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-family:Exo,serif;font-optical-sizing:auto;font-weight:500;font-style:normal;margin:0;text-shadow:5px 5px 10px #b6afaf,-5px -5px 10px #ffffff}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(25vh,15vw);line-height:min(25vh,15vw);font-size:min(25dvh,15dvw);line-height:min(25dvh,15dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(25vh,12vw);line-height:min(25vh,12vw);font-size:min(25dvh,12dvw);line-height:min(25dvh,12dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main.intro[_ngcontent-%COMP%]{display:block;height:auto}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 50% [bottom-row] 1fr;height:100%}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 2;grid-row-start:top-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(11.25vh,9.375vw);line-height:min(11.25vh,9.375vw);font-size:min(11.25dvh,9.375dvw);line-height:min(11.25dvh,9.375dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(45vh,30vw);line-height:min(45vh,30vw);font-size:min(45dvh,30dvw);line-height:min(45dvh,30dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(45vh,30vw);line-height:min(45vh,30vw);font-size:min(45dvh,30dvw);line-height:min(45dvh,30dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:min(5.625vh,4.5vw);margin-right:.5vw;font-size:min(5.625dvh,4.5dvw);margin-right:.5dvw}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(5.625vh,4.5vw);line-height:min(5.625vh,4.5vw);font-size:min(5.625dvh,4.5dvw);line-height:min(5.625dvh,4.5dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(22.5vh,15vw);line-height:min(22.5vh,15vw);font-size:min(22.5dvh,15dvw);line-height:min(22.5dvh,15dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(25vh,15vw);line-height:min(25vh,15vw);font-size:min(25dvh,15dvw);line-height:min(25dvh,15dvw)}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[column] 1fr;grid-template-rows:[top-row] 1fr [center-row] 1fr [bottom-row] 1fr;height:100%}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .workout-time[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .workout-time[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .rest-time[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .rest-time[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .set-and-exercise-counter.configuration-option[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .set-and-exercise-counter.configuration-option[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%]{font-family:Exo,serif;font-optical-sizing:auto;font-weight:500;font-style:normal;margin:0;border:0}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:18vh;line-height:18vh;font-size:18dvh;line-height:18dvh}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:4vh;font-size:4dvh;margin-right:.5dvh,dvw;height:auto;width:auto}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:4vh;line-height:4vh;font-size:4dvh;line-height:4dvh}`]})};var wr=class{constructor(i){this.activeWorkout=i}timer;subscription;workoutTimeline=[];currentActivityPointer=0;lastTick=0;pausedAtTick=0;start(){this.createWorkoutTimeline(),this.timer=ma(0,1e3),this.subscription=this.timer.subscribe(i=>this.onTick(i)),this.publishCurrentActivity()}stop(){this.subscription?.unsubscribe(),this.timer=void 0}pause(){this.pausedAtTick=this.lastTick,this.stop()}resume(){this.timer=ma(0,1e3),this.subscription=this.timer.subscribe(i=>this.onTick(i))}rewind(){this.pause();let i=!1,t=this.workoutTimeline[this.currentActivityPointer];t.remainingSeconds<t.length?(this.pausedAtTick-=t.length-t.remainingSeconds,this.lastTick-=t.length-t.remainingSeconds,t.remainingSeconds=t.length,i=!0):this.currentActivityPointer-1>=0&&(this.currentActivityPointer--,t=this.workoutTimeline[this.currentActivityPointer],t.remainingSeconds=t.length,this.pausedAtTick-=t.length,this.lastTick-=t.length,i=!0),i&&this.publishCurrentActivity()}forward(){this.pause();let i=!1,t=this.workoutTimeline[this.currentActivityPointer];this.currentActivityPointer+1<this.workoutTimeline.length?(t.remainingSeconds<t.length?(this.pausedAtTick+=t.remainingSeconds,this.lastTick+=t.remainingSeconds):(this.pausedAtTick+=t.length,this.lastTick+=t.length),t.remainingSeconds=0,this.currentActivityPointer++,t=this.workoutTimeline[this.currentActivityPointer],i=!0):t.remainingSeconds<t.length&&(this.pausedAtTick+=t.remainingSeconds,this.lastTick+=t.remainingSeconds,t.remainingSeconds=0,i=!0),i&&this.publishCurrentActivity()}onTick(i){this.lastTick=this.calculateCounter(i);let t=this.workoutTimeline[this.currentActivityPointer],e=t.finishTimestamp-this.lastTick;t.remainingSeconds=e,e===0&&this.currentActivityPointer++,this.currentActivityPointer<this.workoutTimeline.length?this.publishCurrentActivity():(this.stop(),this.currentActivityPointer--,this.publishFinalActivity())}publishCurrentActivity(){postMessage({workoutActivity:this.workoutTimeline[this.currentActivityPointer],isWorkoutFinished:!1})}publishFinalActivity(){postMessage({workoutActivity:this.workoutTimeline[this.workoutTimeline.length-1],isWorkoutFinished:!0})}calculateCounter(i){return this.pausedAtTick+i}createWorkoutTimeline(){let i=0;this.activeWorkout.schedule.preparationTime&&(i+=this.activeWorkout.schedule.preparationTime,this.workoutTimeline.push({type:0,finishTimestamp:i,remainingSeconds:this.activeWorkout.schedule.preparationTime,length:this.activeWorkout.schedule.preparationTime,set:1,activity:1}));for(let t=0;t<this.activeWorkout.schedule.numberOfSets;t++)for(let e=0;e<this.activeWorkout.schedule.numberOfExercises;e++)i+=this.activeWorkout.schedule.workoutTime,this.workoutTimeline.push({type:1,finishTimestamp:i,remainingSeconds:this.activeWorkout.schedule.workoutTime,length:this.activeWorkout.schedule.workoutTime,set:t+1,activity:e+1}),this.activeWorkout.schedule.restTimeBetweenSets>0?e<this.activeWorkout.schedule.numberOfExercises-1?(i+=this.activeWorkout.schedule.restTime,this.workoutTimeline.push({type:2,finishTimestamp:i,remainingSeconds:this.activeWorkout.schedule.restTime,length:this.activeWorkout.schedule.restTime,set:t+1,activity:e+1})):t<this.activeWorkout.schedule.numberOfSets-1&&(i+=this.activeWorkout.schedule.restTimeBetweenSets,this.workoutTimeline.push({type:3,finishTimestamp:i,remainingSeconds:this.activeWorkout.schedule.restTimeBetweenSets,length:this.activeWorkout.schedule.restTimeBetweenSets,set:t+1,activity:e+1})):(i+=this.activeWorkout.schedule.restTime,this.workoutTimeline.push({type:2,finishTimestamp:i,remainingSeconds:this.activeWorkout.schedule.restTime,length:this.activeWorkout.schedule.restTime,set:t+1,activity:e+1}))}};if(typeof Worker<"u"){let n;addEventListener("message",({data:i})=>{switch(i?.command){case 0:i.workout&&(n=new wr(i?.workout),n.start());break;case 1:n?.stop();break;case 2:n?.pause();break;case 3:n?.resume();break;case 4:n?.rewind();break;case 5:n?.forward();break;default:console.log(`Unknown command: ${i}`)}})}var ta=class n{wakeLock=null;isSupported;get supported(){return this.isSupported}constructor(){this.isSupported="wakeLock"in navigator,this.isSupported&&document.addEventListener("visibilitychange",this.handleVisibilityChange.bind(this))}ngOnDestroy(){document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.releaseWakeLock()}async requestWakeLock(){if(!this.isSupported)return!1;try{return this.wakeLock=await navigator.wakeLock.request("screen"),this.wakeLock.addEventListener("release",()=>{this.wakeLock=null}),!0}catch(i){return console.error(`Failed to request wake lock: ${i}`),!1}}async releaseWakeLock(){this.wakeLock&&(await this.wakeLock.release(),this.wakeLock=null)}async handleVisibilityChange(){document.visibilityState==="visible"&&!this.wakeLock&&await this.requestWakeLock()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var Hn=class n{currentWorkoutActivity;countdown;worker;platformId=r(Ei);signals=r(gt);wakeLockService=r(ta);constructor(){this.currentWorkoutActivity=this.signals.currentWorkoutActivity.toSignal(),this.countdown=this.signals.countdown.toSignal(),Fi(this.platformId)&&(this.worker=new Worker(new URL("worker-MH7RI72V.js",import.meta.url),{type:"module"}))}async start(i){this.worker&&(this.wakeLockService.supported&&await this.wakeLockService.requestWakeLock(),this.worker.postMessage({command:0,workout:i}),this.worker.onmessage=t=>{if(t.data?.workoutActivity?.type>=0&&t.data?.workoutActivity?.remainingSeconds>=0&&t.data?.workoutActivity?.set>=1&&t.data?.workoutActivity?.activity>=1){let e=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.type!==t.data?.workoutActivity?.type,o=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.activity!==t.data?.workoutActivity?.activity,a=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.set!==t.data?.workoutActivity?.set;this.signals.currentWorkoutActivity.update(()=>t.data?.workoutActivity),this.countdown()>0&&e?(this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!0)):t.data?.workoutActivity?.remainingSeconds<=3&&t.data?.workoutActivity?.remainingSeconds>=1?this.signals.countdown.set(t.data?.workoutActivity?.remainingSeconds):(this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!1)),this.signals.isActivityChanged.set(!!o),this.signals.isSetChanged.set(!!a),this.signals.isWorkoutFinished.set(t.data?.isWorkoutFinished)}})}async stop(){this.worker?.postMessage({command:1}),this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!1),this.signals.isActivityChanged.set(!1),this.signals.isSetChanged.set(!1),this.signals.isWorkoutFinished.set(!1),this.wakeLockService.supported&&this.wakeLockService.releaseWakeLock()}pause(){this.worker?.postMessage({command:2})}resume(){this.worker?.postMessage({command:3})}rewind(){this.worker?.postMessage({command:4})}forward(){this.worker?.postMessage({command:5})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var ea=class n extends tt{backToHomeButtonLabel=$localize`:Back button label@@backToHomeButtonLabel:Back`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var na=class n{selectedWorkout;title=Z(()=>this.selectedWorkout()?.name?this.selectedWorkout().name:this.translations.applicationName);translations=r(ea);router=r(Fe);workoutRunnerService=r(Hn);signals=r(gt);constructor(){this.selectedWorkout=this.signals.selectedWorkout.toSignal()}async onBackClicked(i){i.stopPropagation(),await this.workoutRunnerService.stop(),this.router.navigateByUrl("/launcher")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-basic-nav-bar"]],decls:7,vars:4,consts:[[1,"timer-navbar"],[1,"action-icons"],["mat-icon-button","",3,"click","title"],["aria-hidden","true"],[1,"navbar-title"]],template:function(t,e){t&1&&(l(0,"mat-toolbar",0)(1,"span",1)(2,"button",2),f("click",function(a){return e.onBackClicked(a)}),l(3,"mat-icon",3),u(4,"arrow_back"),c()()(),l(5,"span",4),u(6),c()()),t&2&&(d(2),x("title",it(e.translations.backToHomeButtonLabel)),w("aria-label",e.translations.backToHomeButtonLabel),d(4),O(e.title()))},dependencies:[ao,oo,vt,Mt,_t,Ut],styles:[".timer-navbar[_ngcontent-%COMP%]{color:#fff;background:transparent}.timer-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%]{font-weight:700}.timer-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]})};var ia=class n extends tt{resumeButtonLabel=$localize`:Resume button label@@resumeButtonLabel:Resume (Space bar)`;pauseButtonLabel=$localize`:Pause button label@@pauseButtonLabel:Pause (Space bar)`;rewindButtonLabel=$localize`:Rewind button label@@rewindButtonLabel:Rewind`;forwardButtonLabel=$localize`:Forward button label@@forwardButtonLabel:Forward`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};function dp(n,i){n&1&&(l(0,"mat-icon",7),u(1,"play_arrow"),c()),n&2&&x("inline",!0)}function mp(n,i){n&1&&(l(0,"mat-icon",7),u(1,"pause"),c()),n&2&&x("inline",!0)}function up(n,i){if(n&1){let t=Dt();l(0,"section",5)(1,"button",6),f("click",function(o){ct(t);let a=D();return dt(a.onRewindClicked(o))}),l(2,"mat-icon",7),u(3,"fast_rewind"),c()(),l(4,"button",6),f("click",function(o){ct(t);let a=D();return dt(a.onPauseToggled(o))}),L(5,dp,2,1,"mat-icon",7)(6,mp,2,1,"mat-icon",7),c(),l(7,"button",6),f("click",function(o){ct(t);let a=D();return dt(a.onForwardClicked(o))}),l(8,"mat-icon",7),u(9,"fast_forward"),c()()()}if(n&2){let t=D();d(),x("disableRipple",!0)("title",t.rewindButtonLabel()),w("aria-label",t.rewindButtonLabel()),d(),x("inline",!0),d(2),x("disableRipple",!0)("title",t.pauseResumeButtonLabel()),w("aria-label",t.pauseResumeButtonLabel()),d(),B(t.isPaused()?5:6),d(2),x("disableRipple",!0)("title",t.forwardButtonLabel()),w("aria-label",t.forwardButtonLabel()),d(),x("inline",!0)}}var oa=class n{static COUNTDOWN_COLOR="#EFB700";static EXERCISE_COLOR="#008450";static REST_COLOR="#B81D13";static WORKOUT_FINISH_COLOR="#005CBB";static LARGE_DISPLAY_TEXT="large-display-text";static SMALL_DISPLAY_TEXT="small-display-text";selectedWorkout;currentWorkoutActivity;countdown;isCountdownFinished;isActivityChanged;isSetChanged;isWorkoutFinished;settings;isWorkoutFinishedSubscription;isAnimationEnabled=j(!0);isAudioEnabled=j(!0);isWorkoutPresent=Z(()=>!!this.selectedWorkout());isWorkoutStarted=Z(()=>!!this.currentWorkoutActivity());remainingTime=Z(()=>{let i=this.currentWorkoutActivity()?.remainingSeconds;return i||0});set=Z(()=>{let i=this.currentWorkoutActivity()?.set;return i||1});exercise=Z(()=>{let i=this.currentWorkoutActivity()?.activity;return i||1});color=Z(()=>{let i=this.currentWorkoutActivity()?.type,t="";return this.isWorkoutFinished()?t=n.WORKOUT_FINISH_COLOR:this.countdown()>0?t=n.COUNTDOWN_COLOR:i===1?t=n.EXERCISE_COLOR:t=n.REST_COLOR,t});activityIcon=Z(()=>{let i="";switch(this.currentWorkoutActivity()?.type){case 1:i="sprint";break;case 2:i="coffee";break;case 3:case 0:i="sports_score";break;default:i="home"}return i});activityIconPulseAnimation=Z(()=>{let i=this.currentWorkoutActivity()?.length;if(this.isAnimationEnabled()&&i&&this.remainingTime()<i&&this.remainingTime()!==0){let t=i%2===0?1:0;return this.remainingTime()%2===t}return!1});activityPulseAnimation=Z(()=>!!(this.isAnimationEnabled()&&this.isActivityChanged()));setPulseAnimation=Z(()=>!!(this.isAnimationEnabled()&&this.isSetChanged()));displayTextClass=Z(()=>{let i=this.selectedWorkout()?.schedule;return i&&(i.restTime>=100||i.workoutTime>=100)?n.SMALL_DISPLAY_TEXT:n.LARGE_DISPLAY_TEXT});pauseResumeButtonLabel=Z(()=>this.isPaused()?this.translations.resumeButtonLabel:this.translations.pauseButtonLabel);rewindButtonLabel;forwardButtonLabel;isPaused=j(!1);workoutRunnerService=r(Hn);audioPlaybackService=r(Ni);dialogService=r(Vo);translations=r(ia);signals=r(gt);constructor(){this.selectedWorkout=this.signals.selectedWorkout.toSignal(),this.currentWorkoutActivity=this.signals.currentWorkoutActivity.toSignal(),this.countdown=this.signals.countdown.toSignal(),this.isCountdownFinished=this.signals.isCountdownFinished.toSignal(),this.isActivityChanged=this.signals.isActivityChanged.toSignal(),this.isWorkoutFinished=this.signals.isWorkoutFinished.toSignal(),this.isSetChanged=this.signals.isSetChanged.toSignal(),this.rewindButtonLabel=j(this.translations.rewindButtonLabel),this.forwardButtonLabel=j(this.translations.forwardButtonLabel),this.isWorkoutFinishedSubscription=this.signals.isWorkoutFinished.toObservable().subscribe(i=>{i&&this.isAudioEnabled()&&this.audioPlaybackService.playWorkoutfinishSound()}),this.settings=this.signals.settings.toSignal(),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled),we(()=>{this.isAudioEnabled()&&(this.countdown()>0&&this.audioPlaybackService.playCountdownSound(),this.isCountdownFinished()&&(this.currentWorkoutActivity()?.type===3?this.audioPlaybackService.playSetFinishedSound():this.audioPlaybackService.playCountdownFinishedSound()))}),Ar(window,"keydown").pipe(Q(i=>i.code==="Space"),ms()).subscribe(i=>{i.preventDefault(),i.stopPropagation(),this.switchWorkoutRunnerState()})}async ngAfterViewInit(){this.selectedWorkout()&&await this.workoutRunnerService.start(this.selectedWorkout())}ngOnDestroy(){this.isWorkoutFinishedSubscription.unsubscribe()}onRewindClicked(i){i.stopPropagation(),this.isPaused()||this.isPaused.update(t=>!0),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!1),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!1),this.workoutRunnerService.rewind()}onForwardClicked(i){i.stopPropagation(),this.isPaused()||this.isPaused.update(t=>!0),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!1),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!1),this.workoutRunnerService.forward()}onPauseToggled(i){i.stopPropagation(),this.switchWorkoutRunnerState()}switchWorkoutRunnerState(){this.isPaused.update(i=>!i),this.isPaused()?this.workoutRunnerService.pause():(this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!0),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!0),this.workoutRunnerService.resume())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-basic-timer"]],decls:17,vars:18,consts:[[3,"click","dblclick"],[1,"set-counter"],[1,"info-icon"],["aria-hidden","false",1,"info-icon"],[1,"exercise-counter"],[1,"timer-controls"],["mat-icon-button","",3,"click","disableRipple","title"],["aria-hidden","true",3,"inline"]],template:function(t,e){if(t&1&&(l(0,"nav",0),f("click",function(a){return e.onPauseToggled(a)})("dblclick",function(a){return e.onRewindClicked(a)}),A(1,"tbt-basic-nav-bar"),c(),l(2,"main",0),f("click",function(a){return e.onPauseToggled(a)})("dblclick",function(a){return e.onRewindClicked(a)}),l(3,"section"),u(4),c(),l(5,"section",1)(6,"span"),u(7),c(),A(8,"span",2),l(9,"mat-icon",3),u(10,"laps"),c()(),l(11,"section",4)(12,"span"),u(13),c(),l(14,"mat-icon",3),u(15),c()(),L(16,up,10,12,"section",5),c()),t&2){let o,a;d(2),xe("background-color",e.color()),d(),ht(ie("countdown-timer ",e.displayTextClass())),d(),O(e.remainingTime()),d(),S("pulse",e.setPulseAnimation()),d(2),Je("",e.set(),"/",((o=e.selectedWorkout())==null||o.schedule==null?null:o.schedule.numberOfSets)??"?"),d(4),S("pulse",e.activityPulseAnimation()),d(2),Je("",e.exercise(),"/",((a=e.selectedWorkout())==null||a.schedule==null?null:a.schedule.numberOfExercises)??"?"," "),d(),S("pulse",e.activityIconPulseAnimation()),d(),O(e.activityIcon()),d(),B(e.isWorkoutPresent()&&e.isWorkoutStarted()?16:-1)}},dependencies:[_t,Ut,vt,Mt,En,na],styles:["@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}nav[_ngcontent-%COMP%]{position:fixed;width:100%;top:0}main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 1fr [center-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 80% [bottom-row] 1fr;width:100vw;height:calc(100vh - var(--mat-toolbar-standard-height, 64px));height:calc(100dvh - var(--mat-toolbar-standard-height, 64px));padding-top:var(--mat-toolbar-standard-height, 64px);color:#fff}main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:center-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal}main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(80vh,50vw);line-height:min(80vh,50vw);font-size:min(80dvh,50dvw);line-height:min(80dvh,50dvw)}main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(70vh,30vw);line-height:min(70vh,30vw);font-size:min(70dvh,30dvw);line-height:min(70dvh,30dvw)}main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;grid-column-start:left-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal;font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw)}main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;grid-column-start:right-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal;font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw)}main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw);height:auto;width:auto;will-change:transform}main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:min(3vh,3vw);gap:min(3dvh,3dvw);grid-column-start:center-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}main[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1s ease forwards}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 25% [center-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 75% [bottom-row] 1fr}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:left-column;grid-column-end:span 3;grid-row-start:top-row;grid-row-end:span 1;font-style:normal}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(75vh,75vw);line-height:min(75vh,75vw);font-size:min(75dvh,75dvw);line-height:min(75dvh,75dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(55vh,55vw);line-height:min(55vh,55vw);font-size:min(55dvh,55dvw);line-height:min(55dvh,55dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1;font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1;font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{gap:in(3vh,3vw);gap:in(3dvh,3dvw);grid-column-start:center-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 60% [center-row] 20% [bottom-row] 1fr}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:left-column;grid-column-end:span 2;grid-row-start:top-row;grid-row-end:span 1;font-style:normal}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(60vh,75vw);line-height:min(60vh,75vw);font-size:min(60dvh,75dvw);line-height:min(60dvh,75dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(50vh,55vw);line-height:min(50vh,55vw);font-size:min(50dvh,55dvw);line-height:min(50dvh,55dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{gap:5vw;gap:5dvw;grid-column-start:left-column;grid-column-end:span 2;grid-row-start:bottom-row;grid-row-end:span 1}"]})};var aa=class n extends tt{settingsHeader=$localize`:Header for settings page@@settingsHeader:Settings`;backFromSettingsButtonLabel=$localize`:Back button label@@backFromSettingsButtonLabel:Back`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var hp=["*"],Un=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-portrait-page-decoration"]],ngContentSelectors:hp,decls:4,vars:0,consts:[[1,"layout-root"],[1,"content"],[1,"background"]],template:function(t,e){t&1&&(q(),Lt(0,"div",0)(1,"div",1),M(2),Bt(),Vt(3,"div",2),Bt())},styles:[`.layout-root[_ngcontent-%COMP%]{height:100%;width:100%;display:grid;grid-template-columns:1fr}.layout-root[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;width:100%;grid-row-start:1;grid-column-start:1}.layout-root[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{grid-row-start:1;grid-column-start:1;height:100%;width:100%;clip-path:polygon(0 80%,100% 60%,100% 100%,0 100%);background-image:url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23e1ecffff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linecap='square' stroke-width='0.5' stroke='%23ffffffff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")}`]})};var ra=class n{isFormValid=!0;isFormDirty=!1;translations=r(aa);location=r(fn);signals=r(gt);constructor(){}onBackClicked(){this.isFormValid&&this.isFormDirty&&this.signals.isSettingsSaveInProgress.set(!0),this.location.back()}setValid(i){this.isFormValid=i}setDirty(i){this.isFormDirty=i}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-settings"]],decls:9,vars:4,consts:[[1,"settings-container"],[1,"settings-title"],["mat-icon-button","",1,"back-arrow",3,"click","title"],["aria-hidden","true"],[1,"settings-content"],[3,"isDirty","isValid"]],template:function(t,e){t&1&&(l(0,"tbt-portrait-page-decoration")(1,"section",0)(2,"h2",1)(3,"button",2),f("click",function(){return e.onBackClicked()}),l(4,"mat-icon",3),u(5,"arrow_back"),c()(),u(6),c(),l(7,"div",4)(8,"tbt-settings-form",5),f("isDirty",function(a){return e.setDirty(a)})("isValid",function(a){return e.setValid(a)}),c()()()()),t&2&&(d(3),x("title",it(e.translations.backFromSettingsButtonLabel)),w("aria-label",e.translations.backFromSettingsButtonLabel),d(3),J(" ",e.translations.settingsHeader," "))},dependencies:[_t,Ut,vt,Mt,Vn,Un],styles:[".settings-container[_ngcontent-%COMP%]{height:calc(100% - 3em);padding:1.5rem}.settings-container[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;font-weight:400;font:var(--mat-sys-title-large)}.settings-container[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%]{margin-right:.25rem}"]})};var sa=class n extends tt{aboutHeader=$localize`:Header for about page@@aboutHeader:About`;backFromAboutButtonLabel=$localize`:Back button label@@backFromAboutButtonLabel:Back`;static \u0275fac=(()=>{let i;return function(e){return(i||(i=z(n)))(e||n)}})();static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};var la=class n{translations=r(sa);location=r(fn);constructor(){}onBackClicked(){this.location.back()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["tbt-about"]],decls:9,vars:4,consts:[[1,"about-container"],[1,"about-title"],["mat-icon-button","",1,"back-arrow",3,"click","title"],["aria-hidden","true"],[1,"about-content"]],template:function(t,e){t&1&&(l(0,"tbt-portrait-page-decoration")(1,"section",0)(2,"h2",1)(3,"button",2),f("click",function(){return e.onBackClicked()}),l(4,"mat-icon",3),u(5,"arrow_back"),c()(),u(6),c(),l(7,"div",4),A(8,"tbt-application-info"),c()()()),t&2&&(d(3),x("title",it(e.translations.backFromAboutButtonLabel)),w("aria-label",e.translations.backFromAboutButtonLabel),d(3),J(" ",e.translations.aboutHeader," "))},dependencies:[vt,Mt,_t,Ut,Wn,Un],styles:[".about-container[_ngcontent-%COMP%]{height:calc(100% - 3em);padding:1.5rem}.about-container[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;font-weight:400;font:var(--mat-sys-title-large)}.about-container[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%]{margin-right:.25rem}"]})};var Vc=[{path:"launcher",component:jn},{path:"timer",component:oa},{path:"about",component:la},{path:"settings",component:ra},{path:"",component:jn,pathMatch:"full"},{path:"**",component:jn,pathMatch:"full"}];var xr="Service workers are disabled or not supported by this browser",Gn=class{serviceWorker;worker;registration;events;constructor(i,t){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=new de(e=>e.error(new ne(5601,!1)));else{let e=null,o=new b;this.worker=new de(v=>(e!==null&&v.next(e),o.subscribe(y=>v.next(y))));let a=()=>{let{controller:v}=i;v!==null&&(e=v,o.next(e))};i.addEventListener("controllerchange",a),a(),this.registration=this.worker.pipe(Zt(()=>i.getRegistration().then(v=>{if(!v)throw new ne(5601,!1);return v})));let s=new b;this.events=s.asObservable();let m=v=>{let{data:y}=v;y?.type&&s.next(y)};i.addEventListener("message",m),t?.get(Re,null,{optional:!0})?.onDestroy(()=>{i.removeEventListener("controllerchange",a),i.removeEventListener("message",m)})}}postMessage(i,t){return new Promise(e=>{this.worker.pipe(kt(1)).subscribe(o=>{o.postMessage(F({action:i},t)),e()})})}postMessageWithOperation(i,t,e){let o=this.waitForOperationCompleted(e),a=this.postMessage(i,t);return Promise.all([a,o]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(i){let t;return typeof i=="string"?t=e=>e.type===i:t=e=>i.includes(e.type),this.events.pipe(Q(t))}nextEventOfType(i){return this.eventsOfType(i).pipe(kt(1))}waitForOperationCompleted(i){return new Promise((t,e)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Q(o=>o.nonce===i),kt(1),wt(o=>{if(o.result!==void 0)return o.result;throw new Error(o.error)})).subscribe({next:t,error:e})})}get isEnabled(){return!!this.serviceWorker}},pp=(()=>{class n{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new b;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=Te,this.notificationClicks=Te,this.notificationCloses=Te,this.pushSubscriptionChanges=Te,this.subscription=Te;return}this.messages=this.sw.eventsOfType("PUSH").pipe(wt(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(wt(o=>o.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(wt(o=>o.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(wt(o=>o.data)),this.pushManager=this.sw.registration.pipe(wt(o=>o.pushManager));let e=this.pushManager.pipe(Zt(o=>o.getSubscription()));this.subscription=new de(o=>{let a=e.subscribe(o),s=this.subscriptionChanges.subscribe(o);return()=>{a.unsubscribe(),s.unsubscribe()}})}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(xr));let e={userVisibleOnly:!0},o=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),a=new Uint8Array(new ArrayBuffer(o.length));for(let s=0;s<o.length;s++)a[s]=o.charCodeAt(s);return e.applicationServerKey=a,new Promise((s,m)=>{this.pushManager.pipe(Zt(h=>h.subscribe(e)),kt(1)).subscribe({next:h=>{this.subscriptionChanges.next(h),s(h)},error:m})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(xr));let t=e=>{if(e===null)throw new ne(5602,!1);return e.unsubscribe().then(o=>{if(!o)throw new ne(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((e,o)=>{this.subscription.pipe(kt(1),Zt(t)).subscribe({next:e,error:o})})}decodeBase64(t){return atob(t)}static \u0275fac=function(e){return new(e||n)(_a(Gn))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})(),Cr=(()=>{class n{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=Te,this.unrecoverable=Te;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(xr));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let t=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new ne(5601,!1));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(e){return new(e||n)(_a(Gn))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})(),zc=new _("");function fp(){let n=r(Oi);if(!("serviceWorker"in navigator&&n.enabled!==!1))return;let i=r(zc),t=r(T),e=r(Re);t.runOutsideAngular(()=>{let o=navigator.serviceWorker,a=()=>o.controller?.postMessage({action:"INITIALIZE"});o.addEventListener("controllerchange",a),e.onDestroy(()=>{o.removeEventListener("controllerchange",a)})}),t.runOutsideAngular(()=>{let o,{registrationStrategy:a}=n;if(typeof a=="function")o=new Promise(s=>a().subscribe(()=>s()));else{let[s,...m]=(a||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":o=Promise.resolve();break;case"registerWithDelay":o=Nc(+m[0]||0);break;case"registerWhenStable":o=Promise.race([e.whenStable(),Nc(+m[0])]);break;default:throw new ne(5600,!1)}}o.then(()=>{e.destroyed||navigator.serviceWorker.register(i,{scope:n.scope,updateViaCache:n.updateViaCache,type:n.type}).catch(s=>console.error(Lr(5604,!1)))})})}function Nc(n){return new Promise(i=>setTimeout(i,n))}function gp(){let n=r(Oi),i=r(G),t=!0;return new Gn(t&&n.enabled!==!1?navigator.serviceWorker:void 0,i)}var Oi=class{enabled;updateViaCache;type;scope;registrationStrategy};function Wc(n,i={}){return Br([pp,Cr,{provide:zc,useValue:n},{provide:Oi,useValue:i},{provide:Gn,useFactory:gp},Pi(fp)])}var kr={providers:[Kr(),as(Vc,rs()),Wc("ngsw-worker.js",{enabled:!Zr(),registrationStrategy:"registerImmediately"}),os(is()),Pi(async()=>{let n=r(Cr),i=r(Ei);Fi(i)&&n.isEnabled&&n.versionUpdates.pipe(Q(t=>t.type==="VERSION_READY")).subscribe(()=>{window.location.reload()})})]};var jc;function Hc(n){jc??=new TextEncoder;let i=jc.encode(n),t=new DataView(i.buffer,i.byteOffset,i.byteLength),e=Uc(t,i.length,0),o=Uc(t,i.length,102072);return e==0&&(o==0||o==1)&&(e=e^319790063,o=o^-1801410264),BigInt.asUintN(32,BigInt(e))<<BigInt(32)|BigInt.asUintN(32,BigInt(o))}function _p(n,i=""){let t=Hc(n);return i&&(t=BigInt.asUintN(64,t<<BigInt(1))|t>>BigInt(63)&BigInt(1),t+=Hc(i)),BigInt.asUintN(63,t).toString()}function Uc(n,i,t){let e=2654435769,o=2654435769,a=0,s=i-12;for(;a<=s;a+=12){e+=n.getUint32(a,!0),o+=n.getUint32(a+4,!0),t+=n.getUint32(a+8,!0);let h=Gc(e,o,t);e=h[0],o=h[1],t=h[2]}let m=i-a;return t+=i,m>=4?(e+=n.getUint32(a,!0),a+=4,m>=8?(o+=n.getUint32(a,!0),a+=4,m>=9&&(t+=n.getUint8(a++)<<8),m>=10&&(t+=n.getUint8(a++)<<16),m===11&&(t+=n.getUint8(a++)<<24)):(m>=5&&(o+=n.getUint8(a++)),m>=6&&(o+=n.getUint8(a++)<<8),m===7&&(o+=n.getUint8(a++)<<16))):(m>=1&&(e+=n.getUint8(a++)),m>=2&&(e+=n.getUint8(a++)<<8),m===3&&(e+=n.getUint8(a++)<<16)),Gc(e,o,t)[2]}function Gc(n,i,t){return n-=i,n-=t,n^=t>>>13,i-=t,i-=n,i^=n<<8,t-=n,t-=i,t^=i>>>13,n-=i,n-=t,n^=t>>>12,i-=t,i-=n,i^=n<<16,t-=n,t-=i,t^=i>>>5,n-=i,n-=t,n^=t>>>3,i-=t,i-=n,i^=n<<10,t-=n,t-=i,t^=i>>>15,[n,i,t]}function $c(n,i,t,e,o=[]){let a={},s={},m={},h=bp(n[0],n.raw[0]),v=[h.text],y=[],U=h.text;for(let et=1;et<n.length;et++){let{messagePart:ft,placeholderName:Xt=yp(et),associatedMessageId:$n}=vp(n[et],n.raw[et]);U+=`{$${Xt}}${ft}`,i!==void 0&&(a[Xt]=i[et-1],s[Xt]=o[et-1]),y.push(Xt),$n!==void 0&&(m[Xt]=$n),v.push(ft)}let st=h.customId||_p(U,h.meaning||""),bt=h.legacyIds?h.legacyIds.filter(et=>et!==st):[];return{id:st,legacyIds:bt,substitutions:a,substitutionLocations:s,text:U,customId:h.customId,meaning:h.meaning||"",description:h.description||"",messageParts:v,messagePartLocations:e,placeholderNames:y,associatedMessageIds:m,location:t}}function bp(n,i){let{text:t,block:e}=qc(n,i);if(e===void 0)return{text:t};{let[o,...a]=e.split("\u241F"),[s,m]=o.split("@@",2),[h,v]=s.split("|",2);return v===void 0&&(v=h,h=void 0),v===""&&(v=void 0),{text:t,meaning:h,description:v,customId:m,legacyIds:a}}}function vp(n,i){let{text:t,block:e}=qc(n,i);if(e===void 0)return{messagePart:t};{let[o,a]=e.split("@@");return{messagePart:t,placeholderName:o,associatedMessageId:a}}}function qc(n,i){if(i.charAt(0)!==":")return{text:n};{let t=wp(n,i);return{block:n.substring(1,t),text:n.substring(t+1)}}}function yp(n){return n===1?"PH":`PH_${n-1}`}function wp(n,i){for(let t=1,e=1;t<n.length;t++,e++)if(i[e]==="\\")e++;else if(n[t]===":")return t;throw new Error(`Unterminated $localize metadata block in "${i}".`)}var Mr=class extends Error{parsedMessage;type="MissingTranslationError";constructor(i){super(`No translation found for ${Xc(i)}.`),this.parsedMessage=i}};function Cp(n,i,t){let e=$c(i,t),o=n[e.id];if(e.legacyIds!==void 0)for(let a=0;a<e.legacyIds.length&&o===void 0;a++)o=n[e.legacyIds[a]];if(o===void 0)throw new Mr(e);return[o.messageParts,o.placeholderNames.map(a=>{if(e.substitutions.hasOwnProperty(a))return e.substitutions[a];throw new Error(`There is a placeholder name mismatch with the translation provided for the message ${Xc(e)}.
The translation contains a placeholder with name ${a}, which does not exist in the message.`)})]}function kp(n){let i=n.split(/{\$([^}]*)}/),t=[i[0]],e=[];for(let a=1;a<i.length-1;a+=2)e.push(i[a]),t.push(`${i[a+1]}`);let o=t.map(a=>a.charAt(0)===":"?"\\"+a:a);return{text:n,messageParts:Mp(t,o),placeholderNames:e}}function Mp(n,i){return Object.defineProperty(n,"raw",{value:i}),n}function Xc(n){let i=n.meaning&&` - "${n.meaning}"`,t=n.legacyIds&&n.legacyIds.length>0?` [${n.legacyIds.map(e=>`"${e}"`).join(", ")}]`:"";return`"${n.id}"${t} ("${n.text}"${i})`}function Kc(n){$localize.translate||($localize.translate=Sp),$localize.TRANSLATIONS||($localize.TRANSLATIONS={}),Object.keys(n).forEach(i=>{$localize.TRANSLATIONS[i]=kp(n[i])})}function Yc(){$localize.translate=void 0,$localize.TRANSLATIONS={}}function Sp(n,i){try{return Cp($localize.TRANSLATIONS,n,i)}catch(t){return console.warn(t.message),[n,i]}}var Sr="en-US",Qc=localStorage.getItem(Bi.SETTINGS_KEY);if(Qc)try{Sr=JSON.parse(Qc).language??"en-US"}catch(n){console.log(n)}Op(Sr).then(()=>import("./chunk-IXKCNS7Y.js")).then(n=>{kr.providers.push({provide:Yr,useValue:Sr}),es(n.AppComponent,kr).catch(i=>console.error(i))});async function Op(n){return n==="en-US"?Promise.resolve():fetch(`locale/${n}/messages.json`).then(i=>i.json()).catch(i=>console.error(i)).then(i=>{Yc(),$localize.locale=n,Kc(i.translations)})}
