import{$ as H,$a as w,$b as El,A as ta,Aa as g,Ab as bl,B as ea,Ba as W,Bb as v,C as na,Ca as O,Cb as G,D as il,Da as yi,Db as mn,E as Bt,Ea as wi,Eb as fo,F as se,Fa as dl,Fb as we,G as st,Ga as X,Gb as je,H as ol,Ha as qt,Hb as Ce,I as rl,Ia as ml,Ib as vl,J as dt,Ja as We,Jb as ht,K as al,Ka as y,Kb as V,L as ee,La as F,Lb as Rt,M as $,Ma as L,Mb as In,N as B,Na as ul,Nb as yl,O as _,Oa as Ci,Ob as wl,P as ia,Pa as sn,Pb as la,Q as s,Qa as ln,Qb as Tn,R as oa,Ra as b,Rb as go,S as co,Sa as l,Sb as _o,T as vi,Ta as m,Tb as Cl,U as _t,Ua as A,Ub as xl,V as bt,Va as Dt,Vb as kl,W as le,Wa as At,Wb as Ml,X as ra,Xa as Ht,Xb as Sl,Y as z,Ya as po,Z as nt,Za as Lt,Zb as Ue,_ as ze,_a as ce,_b as Ol,a as I,aa as N,ab as hl,ac as Y,b as Mt,ba as R,bb as M,bc as It,c as Yr,ca as mo,cb as K,cc as bo,d as Pt,da as uo,db as k,dc as Dl,e as ae,ea as ho,eb as Gt,ec as ca,f as C,fa as sl,fb as pt,fc as Al,g as Xs,ga as mt,gb as T,gc as Il,h as bi,ha as on,hb as P,hc as Tl,i as Ys,ia as zt,ib as pl,ic as Nt,j as Qs,ja as U,jb as An,jc as Z,k as Zs,ka as Q,kb as cn,l as Oe,la as E,lb as de,lc as Ft,m as Js,ma as rn,mb as ie,mc as St,n as Et,na as ll,nb as S,nc as vo,o as En,oa as Wt,ob as fl,oc as Pl,p as tl,pa as d,pb as ft,pc as yo,q as el,qa as ye,qb as h,qc as gt,r as Qr,ra as ne,rb as D,rc as wo,s as Ut,sa as ot,sb as et,sc as Rl,t as Be,ta as Yt,tb as dn,tc as Fl,u as J,ua as Qt,ub as lt,v as Zr,va as ut,vb as pe,w as Dn,wa as cl,wb as tt,x as Ct,xa as an,xb as gl,y as Jr,ya as aa,yb as xi,z as nl,za as sa,zb as _l}from"./chunk-X3KCLDJD.js";function un(i){return i.buttons===0||i.detail===0}function hn(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var da;function Ll(){if(da==null){let i=typeof document<"u"?document.head:null;da=!!(i&&(i.createShadowRoot||i.attachShadow))}return da}function ma(i){if(Ll()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Pn(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let n=i.shadowRoot.activeElement;if(n===i)break;i=n}return i}function jt(i){if(i.composedPath)try{return i.composedPath()[0]}catch{}return i.target}var ki;function Nl(){if(ki==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ki=!0}))}finally{ki=ki||!1}return ki}function Rn(i){return Nl()?i:!!i.capture}function oe(i,n=0){return Vl(i)?Number(i):arguments.length===2?n:0}function Vl(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function $t(i){return i instanceof E?i.nativeElement:i}var Bl=new _("cdk-input-modality-detector-options"),zl={ignoreKeys:[18,17,224,91,16]},Wl=650,ua={passive:!0,capture:!0},jl=(()=>{class i{_platform=s(Y);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Xs(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=jt(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Wl||(this._modality.next(un(t)?"keyboard":"mouse"),this._mostRecentTarget=jt(t))};_onTouchstart=t=>{if(hn(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=jt(t)};constructor(){let t=s(N),e=s(nt),o=s(Bl,{optional:!0});if(this._options=I(I({},zl),o),this.modalityDetected=this._modality.pipe(il(1)),this.modalityChanged=this.modalityDetected.pipe(ta()),this._platform.isBrowser){let r=s(ne).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,"keydown",this._onKeydown,ua),r.listen(e,"mousedown",this._onMousedown,ua),r.listen(e,"touchstart",this._onTouchstart,ua)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),Mi=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Mi||{}),Ul=new _("cdk-focus-monitor-default-options"),Co=Rn({passive:!0,capture:!0}),me=(()=>{class i{_ngZone=s(N);_platform=s(Y);_inputModalityDetector=s(jl);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(nt);_stopInputModalityDetector=new C;constructor(){let t=s(Ul,{optional:!0});this._detectionMode=t?.detectionMode||Mi.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=jt(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=$t(t);if(!this._platform.isBrowser||o.nodeType!==1)return Oe();let r=ma(o)||this._document,a=this._elementInfo.get(o);if(a)return e&&(a.checkChildren=!0),a.subject;let c={checkChildren:e,subject:new C,rootNode:r};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=$t(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let r=$t(t),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([c,u])=>this._originChanged(c,e,u)):(this._setOrigin(e),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Mi.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===Mi.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Wl:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),r=jt(t);!o||!o.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,Co),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,Co)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(st(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Co),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Co),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&e.push([r,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();function Qm(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let n=0;n<i.addedNodes.length;n++)if(!(i.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<i.removedNodes.length;n++)if(!(i.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var Hl=(()=>{class i{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),Zm=(()=>{class i{_mutationObserverFactory=s(Hl);_observedElements=new Map;_ngZone=s(N);ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=$t(t);return new ae(o=>{let a=this._observeElement(e).pipe(Et(c=>c.filter(u=>!Qm(u))),J(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{o.next(c)})});return()=>{a.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new C,o=this._mutationObserverFactory.create(r=>e.next(r));o&&o.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:o,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:o}=this._observedElements.get(t);e&&e.disconnect(),o.complete(),this._observedElements.delete(t)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),Gl=(()=>{class i{_contentObserver=s(Zm);_elementRef=s(E);event=new H;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=oe(t),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(Dn(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",V],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return i})(),xo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({providers:[Hl]})}return i})();var Fn=(()=>{class i{_platform=s(Y);isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return tu(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=Jm(lu(t));if(e&&(ql(e)===-1||!this.isVisible(e)))return!1;let o=t.nodeName.toLowerCase(),r=ql(t);return t.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!au(t)?!1:o==="audio"?t.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return su(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();function Jm(i){try{return i.frameElement}catch{return null}}function tu(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function eu(i){let n=i.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function nu(i){return ou(i)&&i.type=="hidden"}function iu(i){return ru(i)&&i.hasAttribute("href")}function ou(i){return i.nodeName.toLowerCase()=="input"}function ru(i){return i.nodeName.toLowerCase()=="a"}function $l(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let n=i.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function ql(i){if(!$l(i))return null;let n=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function au(i){let n=i.nodeName.toLowerCase(),t=n==="input"&&i.type;return t==="text"||t==="password"||n==="select"||n==="textarea"}function su(i){return nu(i)?!1:eu(i)||iu(i)||i.hasAttribute("contenteditable")||$l(i)}function lu(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var ko=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,e,o,r=!1,a){this._element=n,this._checker=t,this._ngZone=e,this._document=o,this._injector=a,r||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(n),!!e}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary("start");return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary("end");return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=0;e<t.length;e++){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(o)return o}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=t.length-1;e>=0;e--){let o=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(o)return o}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Wt(n,{injector:this._injector})}},Si=(()=>{class i{_checker=s(Fn);_ngZone=s(N);_document=s(nt);_injector=s(z);constructor(){s(It).load(bo)}create(t,e=!1){return new ko(t,this._checker,this._ngZone,this._document,e,this._injector)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();var Kl=new _("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Xl=new _("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),cu=0,Oi=(()=>{class i{_ngZone=s(N);_defaultOptions=s(Xl,{optional:!0});_liveElement;_document=s(nt);_sanitizer=s(Sl);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=s(Kl,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let o=this._defaultOptions,r,a;return e.length===1&&typeof e[0]=="number"?a=e[0]:[r,a]=e,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),a==null&&o&&(a=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:Dl(this._liveElement,t,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",e=this._document.getElementsByClassName(t),o=this._document.createElement("div");for(let r=0;r<e.length;r++)e[r].remove();return o.classList.add(t),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${cu++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<e.length;o++){let r=e[o],a=r.getAttribute("aria-owns");a?a.indexOf(t)===-1&&r.setAttribute("aria-owns",a+" "+t):r.setAttribute("aria-owns",t)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();var du=200,Mo=class{_letterKeyStream=new C;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new C;selectedItem=this._selectedItem;constructor(n,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:du;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(n),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let t=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(rl(t=>this._pressedLetters.push(t)),Dn(n),J(()=>this._pressedLetters.length>0),Et(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let o=(this._selectedItemIndex+e)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function Vt(i,...n){return n.length?n.some(t=>i[t]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Ln=class{_items;_activeItemIndex=R(-1);_activeItem=R(null);_wrap=!1;_typeaheadSubscription=Pt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,t){this._items=n,n instanceof rn?this._itemChangesSubscription=n.changes.subscribe(e=>this._itemsChanged(e.toArray())):on(n)&&(this._effectRef=mt(()=>this._itemsChanged(n()),{injector:t}))}tabOut=new C;change=new C;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Mo(t,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,t=10){return this._pageUpAndDown={enabled:n,delta:t},this}setActiveItem(n){let t=this._activeItem();this.updateActiveItem(n),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(n){let t=n.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!n[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(o||Vt(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let t=this._getItemsArray(),e=typeof n=="number"?n:t.indexOf(n),o=t[e];this._activeItem.set(o??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let o=(this._activeItemIndex()+n*e+t.length)%t.length,r=t[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,t){let e=this._getItemsArray();if(e[n]){for(;this._skipPredicateFn(e[n]);)if(n+=t,!e[n])return;this.setActiveItem(n)}}_getItemsArray(){return on(this._items)?this._items():this._items instanceof rn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let t=this._activeItem();if(t){let e=n.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Ti=class extends Ln{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Pi=class extends Ln{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Ql=new Map,vt=class i{_appId=s(mo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){this._appId!=="ng"&&(n+=this._appId);let e=Ql.get(n);return e===void 0?e=0:e++,Ql.set(n,e),`${n}${t?i._infix+"-":""}${e}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})};var fe=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(fe||{}),So,pn;function Oo(){if(pn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return pn=!1,pn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)pn=!0;else{let i=Element.prototype.scrollTo;i?pn=!/\{\s*\[native code\]\s*\}/.test(i.toString()):pn=!1}}return pn}function Nn(){if(typeof document!="object"||!document)return fe.NORMAL;if(So==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let t=document.createElement("div"),e=t.style;e.width="2px",e.height="1px",i.appendChild(t),document.body.appendChild(i),So=fe.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,So=i.scrollLeft===0?fe.NEGATED:fe.INVERTED),i.remove()}return So}function ha(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Vn,Zl=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function pa(){if(Vn)return Vn;if(typeof document!="object"||!document)return Vn=new Set(Zl),Vn;let i=document.createElement("input");return Vn=new Set(Zl.filter(n=>(i.setAttribute("type",n),i.type===n))),Vn}var uu=new _("MATERIAL_ANIMATIONS"),Jl=null;function fa(){return s(uu,{optional:!0})?.animationsDisabled||s(ho,{optional:!0})==="NoopAnimations"?"di-disabled":(Jl??=s(Al).matchMedia("(prefers-reduced-motion)").matches,Jl?"reduced-motion":"enabled")}function ct(){return fa()!=="enabled"}function Tt(i){return i==null?"":typeof i=="string"?i:`${i}px`}function Ot(i){return i!=null&&`${i}`!="false"}var Kt=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Kt||{}),ga=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Kt.HIDDEN;constructor(n,t,e,o=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},tc=Rn({passive:!0,capture:!0}),_a=class{_events=new Map;addHandler(n,t,e,o){let r=this._events.get(t);if(r){let a=r.get(e);a?a.add(o):r.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,tc)})}removeHandler(n,t,e){let o=this._events.get(n);if(!o)return;let r=o.get(t);r&&(r.delete(e),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,tc)))}_delegateEventHandler=n=>{let t=jt(n);t&&this._events.get(n.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(r=>r.handleEvent(n))})}},Ri={enterDuration:225,exitDuration:150},hu=800,ec=Rn({passive:!0,capture:!0}),nc=["mousedown","touchstart"],ic=["mouseup","mouseleave","touchend","touchcancel"],pu=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return i})(),fn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new _a;constructor(n,t,e,o,r){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=$t(e)),r&&r.get(It).load(pu)}fadeInRipple(n,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=I(I({},Ri),e.animation);e.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let a=e.radius||fu(n,t,o),c=n-o.left,u=t-o.top,p=r.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${c-a}px`,f.style.top=`${u-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,e.color!=null&&(f.style.backgroundColor=e.color),f.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(f);let j=window.getComputedStyle(f),it=j.transitionProperty,kt=j.transitionDuration,at=it==="none"||kt==="0s"||kt==="0s, 0s"||o.width===0&&o.height===0,wt=new ga(this,f,e,at);f.style.transform="scale3d(1, 1, 1)",wt.state=Kt.FADING_IN,e.persistent||(this._mostRecentTransientRipple=wt);let te=null;return!at&&(p||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let _i=()=>{te&&(te.fallbackTimer=null),clearTimeout(Ks),this._finishRippleTransition(wt)},Xr=()=>this._destroyRipple(wt),Ks=setTimeout(Xr,p+100);f.addEventListener("transitionend",_i),f.addEventListener("transitioncancel",Xr),te={onTransitionEnd:_i,onTransitionCancel:Xr,fallbackTimer:Ks}}),this._activeRipples.set(wt,te),(at||!p)&&this._finishRippleTransition(wt),wt}fadeOutRipple(n){if(n.state===Kt.FADING_OUT||n.state===Kt.HIDDEN)return;let t=n.element,e=I(I({},Ri),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",n.state=Kt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=$t(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,nc.forEach(e=>{i._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ic.forEach(t=>{this._triggerElement.addEventListener(t,this,ec)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Kt.FADING_IN?this._startFadeOutTransition(n):n.state===Kt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=Kt.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Kt.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=un(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+hu;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!hn(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===Kt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Kt.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(nc.forEach(t=>i._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(ic.forEach(t=>n.removeEventListener(t,this,ec)),this._pointerUpEventsRegistered=!1))}};function fu(i,n,t){let e=Math.max(Math.abs(i-t.left),Math.abs(i-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+o*o)}var gn=new _("mat-ripple-global-options"),Ee=(()=>{class i{_elementRef=s(E);_animationsDisabled=ct();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=s(N),e=s(Y),o=s(gn,{optional:!0}),r=s(z);this._globalOptions=o||{},this._rippleRenderer=new fn(this,t,this._elementRef,e,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:I(I(I({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,I(I({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,I(I({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,o){e&2&&S("mat-ripple-unbounded",o.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var gu={capture:!0},_u=["focus","mousedown","mouseenter","touchstart"],ba="mat-ripple-loader-uninitialized",va="mat-ripple-loader-class-name",oc="mat-ripple-loader-centered",Eo="mat-ripple-loader-disabled",rc=(()=>{class i{_document=s(nt);_animationsDisabled=ct();_globalRippleOptions=s(gn,{optional:!0});_platform=s(Y);_ngZone=s(N);_injector=s(z);_eventCleanups;_hosts=new Map;constructor(){let t=s(ne).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>_u.map(e=>t.listen(this._document,e,this._onInteraction,gu)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(ba,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(va))&&t.setAttribute(va,e.className||""),e.centered&&t.setAttribute(oc,""),e.disabled&&t.setAttribute(Eo,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(Eo,""):t.removeAttribute(Eo)}_onInteraction=t=>{let e=jt(t);if(e instanceof HTMLElement){let o=e.closest(`[${ba}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(va)),t.append(e);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??Ri.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Ri.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Eo),rippleConfig:{centered:t.hasAttribute(oc),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},u=new fn(c,this._ngZone,e,this._platform,this._injector),p=!c.rippleDisabled;p&&u.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:u,hasSetUpEvents:p}),t.removeAttribute(ba)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();var ue=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return i})();var bu=["*",[["","progressIndicator",""]]],vu=["*","[progressIndicator]"];function yu(i,n){i&1&&(Dt(0,"div",1),k(1,1),At())}var wu=new _("MAT_BUTTON_CONFIG");function ac(i){return i==null?void 0:Rt(i)}var Do=(()=>{class i{_elementRef=s(E);_ngZone=s(N);_animationsDisabled=ct();_config=s(wu,{optional:!0});_focusMonitor=s(me);_cleanupClick;_renderer=s(ot);_rippleLoader=s(rc);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=je(!1,{transform:V});constructor(){s(It).load(ue);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(e,o){e&2&&(y("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),ft(o.color?"mat-"+o.color:""),S("mat-mdc-button-progress-indicator-shown",o.showProgress())("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",V],disabled:[2,"disabled","disabled",V],ariaDisabled:[2,"aria-disabled","ariaDisabled",V],disabledInteractive:[2,"disabledInteractive","disabledInteractive",V],tabIndex:[2,"tabIndex","tabIndex",ac],_tabindex:[2,"tabindex","_tabindex",ac],showProgress:[1,"showProgress"]}})}return i})(),Xt=(()=>{class i extends Do{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[X],ngContentSelectors:vu,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(K(bu),Ht(0,"span",0),k(1),F(2,yu,2,0,"div",1),Ht(3,"span",2)(4,"span",3)),e&2&&(d(2),L(o.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
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

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
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
`],encapsulation:2})}return i})();var xe=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[Z]})}return i})();var lc=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],cc=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function Cu(i,n){i&1&&(Dt(0,"div",2),k(1,3),At())}function xu(i,n){i&1&&(Dt(0,"div",2),k(1,3),At())}var sc=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ke=(()=>{class i extends Do{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=ku(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?sc.get(this._appearance):null,r=sc.get(t);o&&e.remove(...o),e.add(...r),this._appearance=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[X],ngContentSelectors:cc,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(K(lc),Ht(0,"span",0),k(1),Dt(2,"span",1),k(3,1),At(),k(4,2),F(5,Cu,2,0,"div",2),Ht(6,"span",3)(7,"span",4)),e&2&&(S("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),d(5),L(o.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
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

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
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
`],encapsulation:2})}return i})();function ku(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Mu=new _("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>ya}),ya={color:"accent"},dc=(()=>{class i extends Do{_options=s(Mu,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||ya,this.color=this._options.color||ya.color}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(e,o){e&2&&S("mdc-fab--extended",o.extended)("mat-mdc-extended-fab",o.extended)},inputs:{extended:[2,"extended","extended",V]},exportAs:["matButton","matAnchor"],features:[X],ngContentSelectors:cc,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(K(lc),Ht(0,"span",0),k(1),Dt(2,"span",1),k(3,1),At(),k(4,2),F(5,xu,2,0,"div",2),Ht(6,"span",3)(7,"span",4)),e&2&&(S("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),d(5),L(o.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
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

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})}return i})();var xt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[xe,Z]})}return i})();var Fi=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},_e=class extends Fi{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,t,e,o,r,a){super(),this.component=n,this.viewContainerRef=t,this.injector=e,this.projectableNodes=o,this.bindings=r||null,this.directives=a||null}},be=class extends Fi{templateRef;viewContainerRef;context;injector;constructor(n,t,e,o){super(),this.templateRef=n,this.viewContainerRef=t,this.context=e,this.injector=o}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}},wa=class extends Fi{element;constructor(n){super(),this.element=n instanceof E?n.nativeElement:n}},He=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof _e)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof be)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof wa)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Li=class extends He{outletElement;_appRef;_defaultInjector;constructor(n,t,e){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=e}attachComponentPortal(n){let t;if(n.viewContainerRef){let e=n.injector||n.viewContainerRef.injector,o=e.get(sa,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:e,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,o=n.injector||this._defaultInjector||z.NULL,r=o.get(co,e.injector);t=yl(n.component,{elementInjector:o,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,e=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return e.rootNodes.forEach(o=>this.outletElement.appendChild(o)),e.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(e);o!==-1&&t.remove(o)}),this._attachedPortal=n,e}attachDomPortal=n=>{let t=n.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Ge=(()=>{class i extends He{_moduleRef=s(sa,{optional:!0});_document=s(nt);_viewContainerRef=s(an);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new H;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let o=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(o,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(e,o)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275dir=O({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[X]})}return i})(),Ni=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({})}return i})();var Su=20,Vi=(()=>{class i{_ngZone=s(N);_platform=s(Y);_renderer=s(ne).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new C;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Su){return this._platform.isBrowser?new ae(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(Zr(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Oe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let o=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(J(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,t)&&e.push(r)}),e}_targetContainsElement(t,e){let o=$t(e),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),qe=(()=>{class i{elementRef=s(E);scrollDispatcher=s(Vi);ngZone=s(N);dir=s(Nt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new C;_renderer=s(ot);_cleanupScroll;_elementScrolled=new C;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,o=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=o?t.end:t.start),t.right==null&&(t.right=o?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),o&&Nn()!=fe.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),Nn()==fe.INVERTED?t.left=t.right:Nn()==fe.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Oo()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",o="right",r=this.elementRef.nativeElement;if(t=="top")return r.scrollTop;if(t=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value=="rtl";return t=="start"?t=a?o:e:t=="end"&&(t=a?e:o),a&&Nn()==fe.INVERTED?t==e?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&Nn()==fe.NEGATED?t==e?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:t==e?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Ou=20,Me=(()=>{class i{_platform=s(Y);_listeners;_viewportSize=null;_change=new C;_document=s(nt);constructor(){let t=s(N),e=s(ne).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[e.listen("window","resize",o),e.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+e,height:o,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect(),a=-r.top||t.body?.scrollTop||e.scrollY||o.scrollTop||0,c=-r.left||t.body?.scrollLeft||e.scrollX||o.scrollLeft||0;return{top:a,left:c}}change(t=Ou){return t>0?this._change.pipe(Zr(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();var De=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({})}return i})(),Ca=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[Z,De,Z,De]})}return i})();var mc=Oo();function Wn(i){return new Ao(i.get(Me),i.get(nt))}var Ao=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Tt(-this._previousScrollPosition.left),n.style.top=Tt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,e=n.style,o=t.style,r=e.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),mc&&(e.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),mc&&(e.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function bc(i,n){return new Io(i.get(Vi),i.get(N),i.get(Me),n)}var Io=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,e,o){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=e,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(J(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Bi=class{enable(){}disable(){}attach(){}};function xa(i,n){return n.some(t=>{let e=i.bottom<t.top,o=i.top>t.bottom,r=i.right<t.left,a=i.left>t.right;return e||o||r||a})}function uc(i,n){return n.some(t=>{let e=i.top<t.top,o=i.bottom>t.bottom,r=i.left<t.left,a=i.right>t.right;return e||o||r||a})}function bn(i,n){return new To(i.get(Vi),i.get(Me),i.get(N),n)}var To=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,e,o){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=e,this._config=o}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:o}=this._viewportRuler.getViewportSize();xa(t,[{width:e,height:o,bottom:o,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},vc=(()=>{class i{_injector=s(z);noop=()=>new Bi;close=t=>bc(this._injector,t);block=()=>Wn(this._injector);reposition=t=>bn(this._injector,t);static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),ve=class{positionStrategy;scrollStrategy=new Bi;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let e of t)n[e]!==void 0&&(this[e]=n[e])}}};var Po=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var yc=(()=>{class i{_attachedOverlays=[];_document=s(nt);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),wc=(()=>{class i extends yc{_ngZone=s(N);_renderer=s(ne).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let o=e.length-1;o>-1;o--){let r=e[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),Cc=(()=>{class i extends yc{_platform=s(Y);_ngZone=s(N);_renderer=s(ne).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(e,"pointerdown",this._pointerDownListener,o),r.listen(e,"click",this._clickListener,o),r.listen(e,"auxclick",this._clickListener,o),r.listen(e,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=jt(t)};_clickListener=t=>{let e=jt(t),o=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let c=r[a],u=c._outsidePointerEvents;if(!(!c.hasAttached()||!this.canReceiveEvent(c,t,u))){if(hc(c.overlayElement,e)||hc(c.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>u.next(t)):u.next(t)}}};static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();function hc(i,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=n;for(;e;){if(e===i)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var xc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return i})(),Lo=(()=>{class i{_platform=s(Y);_containerElement;_document=s(nt);_styleLoader=s(It);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||ha()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let e=this._document.createElement("div");e.classList.add(t),ha()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(xc)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),ka=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,e,o){this._renderer=t,this._ngZone=e,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ma(i){return i&&i.nodeType===1}var Bn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C;_attachments=new C;_detachments=new C;_positionStrategy;_scrollStrategy;_locationChanges=Pt.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C;_outsidePointerEvents=new C;_afterNextRenderRef;constructor(n,t,e,o,r,a,c,u,p,f=!1,j,it){this._portalOutlet=n,this._host=t,this._pane=e,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=c,this._location=u,this._outsideClickDispatcher=p,this._animationsDisabled=f,this._injector=j,this._renderer=it,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Wt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=I(I({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Mt(I({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Tt(this._config.width),n.height=Tt(this._config.height),n.minWidth=Tt(this._config.minWidth),n.minHeight=Tt(this._config.minHeight),n.maxWidth=Tt(this._config.maxWidth),n.maxHeight=Tt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ma(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ka(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,e){let o=ca(t||[]).filter(r=>!!r);o.length&&(e?n.classList.add(...o):n.classList.remove(...o))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Wt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},pc="cdk-overlay-connected-position-bounding-box",Du=/([A-Za-z%]+)$/;function zi(i,n){return new Ro(n,i.get(Me),i.get(nt),i.get(Y),i.get(Lo))}var Ro=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C;_resizeSubscription=Pt.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,e,o,r){this._viewportRuler=t,this._document=e,this._platform=o,this._overlayContainer=r,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(pc),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,e=this._viewportRect,o=this._containerRect,r=[],a;for(let c of this._preferredPositions){let u=this._getOriginPoint(n,o,c),p=this._getOverlayPoint(u,t,c),f=this._getOverlayFit(p,t,e,c);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(c,u);return}if(this._canFitWithFlexibleDimensions(f,p,e)){r.push({position:c,origin:u,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(u,c)});continue}(!a||a.overlayFit.visibleArea<f.visibleArea)&&(a={overlayFit:f,overlayPoint:p,originPoint:u,position:c,overlayRect:t})}if(r.length){let c=null,u=-1;for(let p of r){let f=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);f>u&&(u=f,c=p)}this._isPushed=!1,this._applyPosition(c.position,c.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&_n(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(pc),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof E?this._origin.nativeElement:Ma(this._origin)?this._origin:null}_getOriginPoint(n,t,e){let o;if(e.originX=="center")o=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,c=this._isRtl()?n.left:n.right;o=e.originX=="start"?a:c}t.left<0&&(o-=t.left);let r;return e.originY=="center"?r=n.top+n.height/2:r=e.originY=="top"?n.top:n.bottom,t.top<0&&(r-=t.top),{x:o,y:r}}_getOverlayPoint(n,t,e){let o;e.overlayX=="center"?o=-t.width/2:e.overlayX==="start"?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let r;return e.overlayY=="center"?r=-t.height/2:r=e.overlayY=="top"?0:-t.height,{x:n.x+o,y:n.y+r}}_getOverlayFit(n,t,e,o){let r=gc(t),{x:a,y:c}=n,u=this._getOffset(o,"x"),p=this._getOffset(o,"y");u&&(a+=u),p&&(c+=p);let f=0-a,j=a+r.width-e.width,it=0-c,kt=c+r.height-e.height,at=this._subtractOverflows(r.width,f,j),wt=this._subtractOverflows(r.height,it,kt),te=at*wt;return{visibleArea:te,isCompletelyWithinViewport:r.width*r.height===te,fitsInViewportVertically:wt===r.height,fitsInViewportHorizontally:at==r.width}}_canFitWithFlexibleDimensions(n,t,e){if(this._hasFlexibleDimensions){let o=e.bottom-t.y,r=e.right-t.x,a=fc(this._overlayRef.getConfig().minHeight),c=fc(this._overlayRef.getConfig().minWidth),u=n.fitsInViewportVertically||a!=null&&a<=o,p=n.fitsInViewportHorizontally||c!=null&&c<=r;return u&&p}return!1}_pushOverlayOnScreen(n,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=gc(t),r=this._viewportRect,a=Math.max(n.x+o.width-r.width,0),c=Math.max(n.y+o.height-r.height,0),u=Math.max(r.top-e.top-n.y,0),p=Math.max(r.left-e.left-n.x,0),f=0,j=0;return o.width<=r.width?f=p||-a:f=n.x<this._getViewportMarginStart()?r.left-e.left-n.x:0,o.height<=r.height?j=u||-c:j=n.y<this._getViewportMarginTop()?r.top-e.top-n.y:0,this._previousPushAmount={x:f,y:j},{x:n.x+f,y:n.y+j}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Au(this._lastScrollVisibility,e)){let o=new Po(n,e);this._positionChanges.next(o)}this._lastScrollVisibility=e}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,o=n.overlayY;n.overlayX==="center"?e="center":this._isRtl()?e=n.overlayX==="start"?"right":"left":e=n.overlayX==="start"?"left":"right";for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${e} ${o}`}_calculateBoundingBoxRect(n,t){let e=this._viewportRect,o=this._isRtl(),r,a,c;if(t.overlayY==="top")a=n.y,r=e.height-a+this._getViewportMarginBottom();else if(t.overlayY==="bottom")c=e.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=e.height-c+this._getViewportMarginTop();else{let kt=Math.min(e.bottom-n.y+e.top,n.y),at=this._lastBoundingBoxSize.height;r=kt*2,a=n.y-kt,r>at&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-at/2)}let u=t.overlayX==="start"&&!o||t.overlayX==="end"&&o,p=t.overlayX==="end"&&!o||t.overlayX==="start"&&o,f,j,it;if(p)it=e.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=n.x-this._getViewportMarginStart();else if(u)j=n.x,f=e.right-n.x-this._getViewportMarginEnd();else{let kt=Math.min(e.right-n.x+e.left,n.x),at=this._lastBoundingBoxSize.width;f=kt*2,j=n.x-kt,f>at&&!this._isInitialRender&&!this._growAfterOpen&&(j=n.x-at/2)}return{top:a,left:j,bottom:c,right:it,width:f,height:r}}_setBoundingBoxStyles(n,t){let e=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=Tt(e.width),o.height=Tt(e.height),o.top=Tt(e.top)||"auto",o.bottom=Tt(e.bottom)||"auto",o.left=Tt(e.left)||"auto",o.right=Tt(e.right)||"auto",t.overlayX==="center"?o.alignItems="center":o.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?o.justifyContent="center":o.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=Tt(r)),a&&(o.maxWidth=Tt(a))}this._lastBoundingBoxSize=e,_n(this._boundingBox.style,o)}_resetBoundingBoxStyles(){_n(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){_n(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let e={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let f=this._viewportRuler.getViewportScrollPosition();_n(e,this._getExactOverlayY(t,n,f)),_n(e,this._getExactOverlayX(t,n,f))}else e.position="static";let c="",u=this._getOffset(t,"x"),p=this._getOffset(t,"y");u&&(c+=`translateX(${u}px) `),p&&(c+=`translateY(${p}px)`),e.transform=c.trim(),a.maxHeight&&(o?e.maxHeight=Tt(a.maxHeight):r&&(e.maxHeight="")),a.maxWidth&&(o?e.maxWidth=Tt(a.maxWidth):r&&(e.maxWidth="")),_n(this._pane.style,e)}_getExactOverlayY(n,t,e){let o={top:"",bottom:""},r=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`}else o.top=Tt(r.y);return o}_getExactOverlayX(n,t,e){let o={left:"",right:""},r=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let c=this._document.documentElement.clientWidth;o.right=`${c-(r.x+this._overlayRect.width)}px`}else o.left=Tt(r.x);return o}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:uc(n,e),isOriginOutsideView:xa(n,e),isOverlayClipped:uc(t,e),isOverlayOutsideView:xa(t,e)}}_subtractOverflows(n,...t){return t.reduce((e,o)=>e-Math.max(o,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+n-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ca(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof E)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,e=n.height||0;return{top:n.y,bottom:n.y+e,left:n.x,right:n.x+t,height:e,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let e=t.getBoundingClientRect();return n&&(t.style.display=""),e}};function _n(i,n){for(let t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i}function fc(i){if(typeof i!="number"&&i!=null){let[n,t]=i.split(Du);return!t||t==="px"?parseFloat(n):null}return i||null}function gc(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Au(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var _c="cdk-global-overlay-wrapper";function $e(i){return new Fo}var Fo=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(_c),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:c}=e,u=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),p=(r==="100%"||r==="100vh")&&(!c||c==="100%"||c==="100vh"),f=this._xPosition,j=this._xOffset,it=this._overlayRef.getConfig().direction==="rtl",kt="",at="",wt="";u?wt="flex-start":f==="center"?(wt="center",it?at=j:kt=j):it?f==="left"||f==="end"?(wt="flex-end",kt=j):(f==="right"||f==="start")&&(wt="flex-start",at=j):f==="left"||f==="start"?(wt="flex-start",kt=j):(f==="right"||f==="end")&&(wt="flex-end",at=j),n.position=this._cssPosition,n.marginLeft=u?"0":kt,n.marginTop=p?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=u?"0":at,t.justifyContent=wt,t.alignItems=p?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(_c),e.justifyContent=e.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},kc=(()=>{class i{_injector=s(z);global(){return $e()}flexibleConnectedTo(t){return zi(this._injector,t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),Wi=new _("OVERLAY_DEFAULT_CONFIG");function Ie(i,n){i.get(It).load(xc);let t=i.get(Lo),e=i.get(nt),o=i.get(vt),r=i.get(We),a=i.get(Nt),c=i.get(ot,null,{optional:!0})||i.get(ne).createRenderer(null,null),u=new ve(n),p=i.get(Wi,null,{optional:!0})?.usePopover??!0;u.direction=u.direction||a.value,"showPopover"in e.body?u.usePopover=n?.usePopover??p:u.usePopover=!1;let f=e.createElement("div"),j=e.createElement("div");f.id=o.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),j.appendChild(f),u.usePopover&&(j.setAttribute("popover","manual"),j.classList.add("cdk-overlay-popover"));let it=u.usePopover?u.positionStrategy?.getPopoverInsertionPoint?.():null;return Ma(it)?it.after(j):it?.type==="parent"?it.element.appendChild(j):t.getContainerElement().appendChild(j),new Bn(new Li(f,r,i),j,f,u,i.get(N),i.get(wc),e,i.get(Tn),i.get(Cc),n?.disableAnimations??i.get(ho,null,{optional:!0})==="NoopAnimations",i.get(co),c)}var No=(()=>{class i{scrollStrategies=s(vc);_positionBuilder=s(kc);_injector=s(z);create(t){return Ie(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})(),Iu=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Tu=new _("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(z);return()=>bn(i)}}),zn=(()=>{class i{elementRef=s(E);static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),Mc=new _("cdk-connected-overlay-default-config"),Vo=(()=>{class i{_dir=s(Nt,{optional:!0});_injector=s(z);_overlayRef;_templatePortal;_backdropSubscription=Pt.EMPTY;_attachSubscription=Pt.EMPTY;_detachSubscription=Pt.EMPTY;_positionSubscription=Pt.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(Tu);_ngZone=s(N);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!="string"&&this._assignConfig(t)}backdropClick=new H;positionChange=new H;attach=new H;detach=new H;overlayKeydown=new H;overlayOutsideClick=new H;constructor(){let t=s(ye),e=s(an),o=s(Mc,{optional:!0}),r=s(Wi,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new be(t,e),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Iu);let t=this._overlayRef=Ie(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(e=>{this.overlayKeydown.next(e),e.keyCode===27&&!this.disableClose&&!Vt(e)&&(e.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(e=>{let o=this._getOriginElement(),r=jt(e);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(e)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),e=new ve({direction:this._dir||"ltr",positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(e.height=this.height),(this.minWidth||this.minWidth===0)&&(e.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(e.minHeight=this.minHeight),this.backdropClass&&(e.backdropClass=this.backdropClass),this.panelClass&&(e.panelClass=this.panelClass),e}_updatePositionStrategy(t){let e=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let t=zi(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof zn?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof zn?this.origin.elementRef.nativeElement:this.origin instanceof E?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(e=>this.backdropClick.emit(e)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(ol(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",V],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",V],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",V],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",V],push:[2,"cdkConnectedOverlayPush","push",V],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",V],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",V],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[zt]})}return i})(),Ke=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({providers:[No],imports:[Z,Ni,Ca,Ca]})}return i})();var Pu=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Ru=["mat-icon, [matMenuItemIcon]","*"];function Fu(i,n){i&1&&(le(),l(0,"svg",2),A(1,"polygon",3),m())}var Lu=["*"];function Nu(i,n){if(i&1){let t=Lt();Dt(0,"div",0),hl("click",function(){_t(t);let o=M();return bt(o.closed.emit("click"))})("animationstart",function(o){_t(t);let r=M();return bt(r._onAnimationStart(o.animationName))})("animationend",function(o){_t(t);let r=M();return bt(r._onAnimationDone(o.animationName))})("animationcancel",function(o){_t(t);let r=M();return bt(r._onAnimationDone(o.animationName))}),Dt(1,"div",1),k(2),At()()}if(i&2){let t=M();ft(t._classList),S("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),ce("id",t.panelId),y("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var Oa=new _("MAT_MENU_PANEL"),ji=(()=>{class i{_elementRef=s(E);_document=s(nt);_focusMonitor=s(me);_parentMenu=s(Oa,{optional:!0});_changeDetectorRef=s(ht);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new C;_focused=new C;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(It).load(ue),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let o=0;o<e.length;o++)e[o].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,o){e&1&&w("click",function(a){return o._checkDisabled(a)})("mouseenter",function(){return o._handleMouseEnter()}),e&2&&(y("role",o.role)("tabindex",o._getTabIndex())("aria-disabled",o.disabled)("disabled",o.disabled||null),S("mat-mdc-menu-item-highlighted",o._highlighted)("mat-mdc-menu-item-submenu-trigger",o._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",V],disableRipple:[2,"disableRipple","disableRipple",V]},exportAs:["matMenuItem"],ngContentSelectors:Ru,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,o){e&1&&(K(Pu),k(0),l(1,"span",0),k(2,1),m(),A(3,"div",1),F(4,Fu,2,0,":svg:svg",2)),e&2&&(d(3),b("matRippleDisabled",o.disableRipple||o.disabled)("matRippleTrigger",o._getHostElement()),d(),L(o._triggersSubmenu?4:-1))},dependencies:[Ee],encapsulation:2})}return i})();var Vu=new _("MatMenuContent");var Bu=new _("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Sa="_mat-menu-enter",Bo="_mat-menu-exit",Un=(()=>{class i{_elementRef=s(E);_changeDetectorRef=s(ht);_injector=s(z);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ct();_allItems;_directDescendantItems=new rn;_classList={};_panelAnimationState="void";_animationDone=new C;_isAnimating=R(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(t){let e=this._previousPanelClass,o=I({},this._classList);e&&e.length&&e.split(" ").forEach(r=>{o[r]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(r=>{o[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=o}_previousPanelClass="";get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new H;close=this.closed;panelId=s(vt).getId("mat-menu-panel-");constructor(){let t=s(Bu);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Pi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Bt(this._directDescendantItems),se(t=>Ut(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let o=t.toArray(),r=Math.max(0,Math.min(o.length-1,e.activeItemIndex||0));o[r]&&!o[r].disabled?e.setActiveItem(r):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Bt(this._directDescendantItems),se(e=>Ut(...e.map(o=>o._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,o=this._keyManager;switch(e){case 27:Vt(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&o.setFocusOrigin("keyboard"),o.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Wt(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let o=this._keyManager;o.setFocusOrigin(t).setFirstItemActive(),!o.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=Mt(I({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Bo;(e||t===Sa)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Sa||t===Bo)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Bo),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Sa:Bo)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Bt(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-menu"]],contentQueries:function(e,o,r){if(e&1&&Gt(r,Vu,5)(r,ji,5)(r,ji,4),e&2){let a;T(a=P())&&(o.lazyContent=a.first),T(a=P())&&(o._allItems=a),T(a=P())&&(o.items=a)}},viewQuery:function(e,o){if(e&1&&pt(ye,5),e&2){let r;T(r=P())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(e,o){e&2&&y("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",V],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:V(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[tt([{provide:Oa,useExisting:i}])],ngContentSelectors:Lu,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,o){e&1&&(K(),ml(0,Nu,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})}return i})(),zu=new _("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(z);return()=>bn(i)}});var jn=new WeakMap,Wu=(()=>{class i{_canHaveBackdrop;_element=s(E);_viewContainerRef=s(an);_menuItemInstance=s(ji,{optional:!0,self:!0});_dir=s(Nt,{optional:!0});_focusMonitor=s(me);_ngZone=s(N);_injector=s(z);_scrollStrategy=s(zu);_changeDetectorRef=s(ht);_animationsDisabled=ct();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Pt.EMPTY;_menuCloseSubscription=Pt.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t?(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=s(Oa,{optional:!0});this._parentMaterialMenu=e instanceof Un?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&jn.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let o=jn.get(e);jn.set(e,this),o&&o!==this&&o._closeMenu();let r=this._createOverlay(e),a=r.getConfig(),c=a.positionStrategy;this._setPosition(e,c),this._canHaveBackdrop?a.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:a.hasBackdrop=e.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof Un&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(st(e.close)).subscribe(()=>{c.withLockedPosition(!1).reapplyLastPosition(),c.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,o=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),o instanceof Un&&this._ownsMenu(o)?(this._pendingRemoval=o._animationDone.pipe(Ct(1)).subscribe(()=>{e.detach(),jn.has(o)||o.lazyContent?.detach()}),o._setIsOpen(!1)):(e.detach(),o?.lazyContent?.detach()),o&&this._ownsMenu(o)&&jn.delete(o),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Ie(this._injector,e),this._overlayRef.keydownEvents().subscribe(o=>{this._menu instanceof Un&&this._menu._handleKeydown(o)})}return this._overlayRef}_getOverlayConfig(t){return new ve({positionStrategy:zi(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(o=>{this._ngZone.run(()=>{let r=o.connectionPair.overlayX==="start"?"after":"before",a=o.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(r,a)})})}_setPosition(t,e){let[o,r]=t.xPosition==="before"?["end","start"]:["start","end"],[a,c]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[u,p]=[a,c],[f,j]=[o,r],it=0;if(this._triggersSubmenu()){if(j=o=t.xPosition==="before"?"start":"end",r=f=o==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let kt=this._parentMaterialMenu.items.first;this._parentInnerPadding=kt?kt._getHostElement().offsetTop:0}it=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(u=a==="top"?"bottom":"top",p=c==="top"?"bottom":"top");e.withPositions([{originX:o,originY:u,overlayX:f,overlayY:a,offsetY:it},{originX:r,originY:u,overlayX:j,overlayY:a,offsetY:it},{originX:o,originY:p,overlayX:f,overlayY:c,offsetY:-it},{originX:r,originY:p,overlayX:j,overlayY:c,offsetY:-it}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),o=this._parentMaterialMenu?this._parentMaterialMenu.closed:Oe(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(J(a=>this._menuOpen&&a!==this._menuItemInstance)):Oe();return Ut(t,o,r,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new be(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return jn.get(t)===this}_triggerIsAriaDisabled(){return V(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){cl()};static \u0275dir=O({type:i})}return i})(),Sc=(()=>{class i extends Wu{_cleanupTouchstart;_hoverSubscription=Pt.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new H;onMenuOpen=this.menuOpened;menuClosed=new H;onMenuClose=this.menuClosed;constructor(){super(!0);let t=s(ot);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{hn(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){un(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,o){e&1&&w("click",function(a){return o._handleClick(a)})("mousedown",function(a){return o._handleMousedown(a)})("keydown",function(a){return o._handleKeydown(a)}),e&2&&y("aria-haspopup",o.menu?"menu":null)("aria-expanded",o.menuOpen)("aria-controls",o.menuOpen?o.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[X]})}return i})();var qn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[xe,Ke,Z,De]})}return i})();var vn=class{constructor(n,t,e){this.id=n;this.name=t;this.schedule=e}id;name;schedule};var $n=class{constructor(n,t,e,o,r,a){this.numberOfSets=n;this.numberOfExercises=t;this.preparationTime=e;this.workoutTime=o;this.restTime=r;this.restTimeBetweenSets=a}numberOfSets;numberOfExercises;preparationTime;workoutTime;restTime;restTimeBetweenSets};var rt=class i{applicationName=$localize`:Application name@@applicationName:Tabata Max`;exampleWorkoutName=$localize`:Example workout name@@exampleWorkoutName:Basic Strength Workout`;static \u0275fac=function(t){return new(t||i)};static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var yt=class i{static SIMPLE_WORKOUT;lastDeletedWorkout;selectedWorkout;workouts;translations=s(rt);localStoragePersistenceService=s(vo);signals=s(gt);constructor(){i.SIMPLE_WORKOUT=new vn("quick_workout",this.translations.exampleWorkoutName,new $n(6,6,15,30,30,60)),this.selectedWorkout=this.signals.selectedWorkout.toSignal(),this.workouts=this.signals.workouts.toSignal();let n=this.localStoragePersistenceService.getStoredWorkouts(),t=this.localStoragePersistenceService.getStoredWorkoutSession();n&&this.signals.workouts.update(()=>n);let e=this.workouts().length?this.isWorkoutPresent(t?.lastWorkoutId)?t?.lastWorkoutId:this.workouts()[0].id:void 0;e&&this.selectWorkout(e),this.signals.isWorkoutsLoading.set(!1)}selectWorkout(n){let t=this.workouts().find(e=>e.id===n);t&&this.signals.selectedWorkout.update(()=>t)}updateWorkout(n){let t=this.workouts().findIndex(e=>e.id===n.id);t>=0&&(this.signals.workouts.update(e=>{let o=[...e];return o.splice(t,1,n),o}),this.signals.selectedWorkout.update(()=>n),this.localStoragePersistenceService.persistWorkouts(this.workouts()))}addWorkout(n){n.id=crypto.randomUUID(),this.signals.workouts.update(t=>[...t,n]),this.signals.selectedWorkout.update(()=>n),this.localStoragePersistenceService.persistWorkouts(this.workouts())}deleteCurrentWorkout(){this.selectedWorkout()&&(this.lastDeletedWorkout=this.selectedWorkout(),this.deleteWorkout(this.selectedWorkout().id))}deleteWorkout(n){let t=this.workouts().findIndex(e=>e.id===n);t>=0&&(this.signals.workouts.update(e=>{let o=[...e];return o.splice(t,1),o}),this.signals.selectedWorkout.update(()=>this.workouts().length>0?this.workouts()[0]:void 0),this.localStoragePersistenceService.persistWorkouts(this.workouts()))}restoreLastDeletedWorkout(){this.lastDeletedWorkout&&(this.addWorkout(this.lastDeletedWorkout),this.localStoragePersistenceService.persistWorkouts(this.workouts()),this.lastDeletedWorkout=void 0)}saveCurrentWorkoutSession(){let n=this.selectedWorkout()?.id;n&&this.localStoragePersistenceService.persistWorkoutSession(n)}isWorkoutPresent(n){let t=!1;return n&&(t=!!this.workouts()?.find(o=>o.id===n)),t}static \u0275fac=function(t){return new(t||i)};static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Uu=["*",[["mat-toolbar-row"]]],Hu=["*","mat-toolbar-row"],Gu=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),zo=(()=>{class i{_elementRef=s(E);_platform=s(Y);_document=s(nt);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-toolbar"]],contentQueries:function(e,o,r){if(e&1&&Gt(r,Gu,5),e&2){let a;T(a=P())&&(o._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,o){e&2&&(ft(o.color?"mat-"+o.color:""),S("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Hu,decls:2,vars:0,template:function(e,o){e&1&&(K(Uu),k(0),k(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return i})();var Wo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[Z]})}return i})();function qu(i,n){if(i&1){let t=Lt();l(0,"div",1)(1,"button",2),w("click",function(){_t(t);let o=M();return bt(o.action())}),h(2),m()()}if(i&2){let t=M();d(2),et(" ",t.data.action," ")}}var $u=["label"];function Ku(i,n){}var Xu=Math.pow(2,31)-1,Ui=class{_overlayRef;instance;containerInstance;_afterDismissed=new C;_afterOpened=new C;_onAction=new C;_durationTimeoutId;_dismissedByAction=!1;constructor(n,t){this._overlayRef=t,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,Xu))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ec=new _("MatSnackBarData"),Kn=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Yu=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),Qu=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),Zu=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),Ju=(()=>{class i{snackBarRef=s(Ui);data=s(Ec);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,o){e&1&&(l(0,"div",0),h(1),m(),F(2,qu,3,1,"div",1)),e&2&&(d(),et(" ",o.data.message,`
`),d(),L(o.hasAction?2:-1))},dependencies:[ke,Yu,Qu,Zu],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return i})(),Ea="_mat-snack-bar-enter",Da="_mat-snack-bar-exit",th=(()=>{class i extends He{_ngZone=s(N);_elementRef=s(E);_changeDetectorRef=s(ht);_platform=s(Y);_animationsDisabled=ct();snackBarConfig=s(Kn);_document=s(nt);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(z);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new C;_onExit=new C;_onEnter=new C;_animationState="void";_live;_label;_role;_liveElementId=s(vt).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===Da?this._completeExit():t===Ea&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Wt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ea)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Ea)},200)))}exit(){return this._destroyed?Oe(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Wt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Da)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Da),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(a=>t.classList.add(a)):t.classList.add(e)),this._exposeToModals();let o=this._label.nativeElement,r="mdc-snackbar__label";o.classList.toggle(r,!o.querySelector(`.${r}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<e.length;o++){let r=e[o],a=r.getAttribute("aria-owns");this._trackedModals.add(r),a?a.indexOf(t)===-1&&r.setAttribute("aria-owns",a+" "+t):r.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let o=e.replace(this._liveElementId,"").trim();o.length>0?t.setAttribute("aria-owns",o):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),o=t.querySelector("[aria-live]");if(e&&o){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(r=document.activeElement),e.removeAttribute("aria-hidden"),o.appendChild(e),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,o){if(e&1&&pt(Ge,7)($u,7),e&2){let r;T(r=P())&&(o._portalOutlet=r.first),T(r=P())&&(o._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,o){e&1&&w("animationend",function(a){return o.onAnimationEnd(a.animationName)})("animationcancel",function(a){return o.onAnimationEnd(a.animationName)}),e&2&&S("mat-snack-bar-container-enter",o._animationState==="visible")("mat-snack-bar-container-exit",o._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!o._animationsDisabled)},features:[X],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),qt(4,Ku,0,0,"ng-template",4),m(),A(5,"div"),m()()),e&2&&(d(5),y("aria-live",o._live)("role",o._role)("id",o._liveElementId))},dependencies:[Ge],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2,changeDetection:1})}return i})(),eh=new _("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Kn}),Dc=(()=>{class i{_live=s(Oi);_injector=s(z);_breakpointObserver=s(Il);_parentSnackBar=s(i,{optional:!0,skipSelf:!0});_defaultConfig=s(eh);_animationsDisabled=ct();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ju;snackBarContainerComponent=th;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",o){let r=I(I({},this._defaultConfig),o);return r.data={message:t,action:e},r.announcementMessage===t&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let o=e&&e.viewContainerRef&&e.viewContainerRef.injector,r=z.create({parent:o||this._injector,providers:[{provide:Kn,useValue:e}]}),a=new _e(this.snackBarContainerComponent,e.viewContainerRef,r),c=t.attach(a);return c.instance.snackBarConfig=e,c.instance}_attach(t,e){let o=I(I(I({},new Kn),this._defaultConfig),e),r=this._createOverlay(o),a=this._attachSnackBarContainer(r,o),c=new Ui(a,r);if(t instanceof ye){let u=new be(t,null,{$implicit:o.data,snackBarRef:c});c.instance=a.attachTemplatePortal(u)}else{let u=this._createInjector(o,c),p=new _e(t,void 0,u),f=a.attachComponentPortal(p);c.instance=f.instance}return this._breakpointObserver.observe(Tl.HandsetPortrait).pipe(st(r.detachments())).subscribe(u=>{r.overlayElement.classList.toggle(this.handsetCssClass,u.matches)}),o.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(c,o),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new ve;e.direction=t.direction;let o=$e(this._injector),r=t.direction==="rtl",a=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!r||t.horizontalPosition==="end"&&r,c=!a&&t.horizontalPosition!=="center";return a?o.left("0"):c?o.right("0"):o.centerHorizontally(),t.verticalPosition==="top"?o.top("0"):o.bottom("0"),e.positionStrategy=o,e.disableAnimations=this._animationsDisabled,Ie(this._injector,e)}_createInjector(t,e){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector;return z.create({parent:o||this._injector,providers:[{provide:Ui,useValue:e},{provide:Ec,useValue:t.data}]})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();var jo=class i extends rt{navigationDrawerButtonLabel=$localize`:Navigation drawer button label@@navigationDrawerButtonLabel:Navigate`;navigationDrawerButtonLabelDescriptionLabel=$localize`:Longer description of Navigation drawer button@@navigationDrawerButtonLabelDescriptionLabel:Navigation Menu`;startWorkoutButtonLabel=$localize`:Start button label@@startWorkoutButtonLabel:Start`;startWorkoutButtonDescriptionLabel=$localize`:Longer description of Start button@@startWorkoutButtonDescriptionLabel:Start Workout`;settingsIconButtonDescriptionLabel=$localize`:Settings button description@@settingsIconButtonDescriptionLabel:Settings`;moreMenuDescriptionLabel=$localize`:More menu description@@moreMenuDescriptionLabel:More`;editWorkoutIconButtonLabel=$localize`:Edit button label@@editWorkoutIconButtonLabel:Edit`;editWorkoutIconButtonDescriptionLabel=$localize`:Longer description of Edit button@@editWorkoutIconButtonDescriptionLabel:Edit Workout`;deleteWorkoutIconButtonLabel=$localize`:Delete button label@@deleteWorkoutIconButtonLabel:Delete`;deleteWorkoutIconButtonDescriptionLabel=$localize`:Longer description of Delete button@@deleteWorkoutIconButtonDescriptionLabel:Delete Workout`;newWorkoutIconButtonLabel=$localize`:New button label@@newWorkoutIconButtonLabel:New`;newWorkoutIconButtonDescriptionLabel=$localize`:Longer description of New button@@newWorkoutIconButtonDescriptionLabel:New workout`;restoreWorkoutButtonLabel=$localize`:Restore button label@@restoreWorkoutButtonLabel:Restore`;workoutDeletedLabel=$localize`:User has just deleted a workout@@workoutDeletedLabel:Workout deleted.`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Uo=class i extends rt{saveSettingsButtonLabel=$localize`:Save button label@@saveSettingsButtonLabel:Save`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Fc=(()=>{class i{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,e){this._renderer=t,this._elementRef=e}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(e){return new(e||i)(ut(ot),ut(E))};static \u0275dir=O({type:i})}return i})(),nh=(()=>{class i extends Fc{static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275dir=O({type:i,features:[X]})}return i})(),Te=new _("");var ih={provide:Te,useExisting:ee(()=>tr),multi:!0};function oh(){let i=la()?la().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var rh=new _(""),tr=(()=>{class i extends Fc{_compositionMode;_composing=!1;constructor(t,e,o){super(t,e),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!oh())}writeValue(t){let e=t??"";this.setProperty("value",e)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(e){return new(e||i)(ut(ot),ut(E),ut(rh,8))};static \u0275dir=O({type:i,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(e,o){e&1&&w("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[tt([ih]),X]})}return i})();function Ta(i){return i==null||Pa(i)===0}function Pa(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Pe=new _(""),er=new _(""),ah=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Se=class{static min(n){return sh(n)}static max(n){return lh(n)}static required(n){return Lc(n)}static requiredTrue(n){return ch(n)}static email(n){return dh(n)}static minLength(n){return mh(n)}static maxLength(n){return uh(n)}static pattern(n){return hh(n)}static nullValidator(n){return Go()}static compose(n){return jc(n)}static composeAsync(n){return Uc(n)}};function sh(i){return n=>{if(n.value==null||i==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<i?{min:{min:i,actual:n.value}}:null}}function lh(i){return n=>{if(n.value==null||i==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>i?{max:{max:i,actual:n.value}}:null}}function Lc(i){return Ta(i.value)?{required:!0}:null}function ch(i){return i.value===!0?null:{required:!0}}function dh(i){return Ta(i.value)||ah.test(i.value)?null:{email:!0}}function mh(i){return n=>{let t=n.value?.length??Pa(n.value);return t===null||t===0?null:t<i?{minlength:{requiredLength:i,actualLength:t}}:null}}function uh(i){return n=>{let t=n.value?.length??Pa(n.value);return t!==null&&t>i?{maxlength:{requiredLength:i,actualLength:t}}:null}}function hh(i){if(!i)return Go;let n,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=i.toString(),n=i),e=>{if(Ta(e.value))return null;let o=e.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function Go(i){return null}function Nc(i){return i!=null}function Vc(i){return aa(i)?Zs(i):i}function Bc(i){let n={};return i.forEach(t=>{n=t!=null?I(I({},n),t):n}),Object.keys(n).length===0?null:n}function zc(i,n){return n.map(t=>t(i))}function ph(i){return!i.validate}function Wc(i){return i.map(n=>ph(n)?n:t=>n.validate(t))}function jc(i){if(!i)return null;let n=i.filter(Nc);return n.length==0?null:function(t){return Bc(zc(t,n))}}function Ra(i){return i!=null?jc(Wc(i)):null}function Uc(i){if(!i)return null;let n=i.filter(Nc);return n.length==0?null:function(t){let e=zc(t,n).map(Vc);return tl(e).pipe(Et(Bc))}}function Fa(i){return i!=null?Uc(Wc(i)):null}function Ac(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function Hc(i){return i._rawValidators}function Gc(i){return i._rawAsyncValidators}function Aa(i){return i?Array.isArray(i)?i:[i]:[]}function qo(i,n){return Array.isArray(i)?i.includes(n):i===n}function Ic(i,n){let t=Aa(n);return Aa(i).forEach(o=>{qo(t,o)||t.push(o)}),t}function Tc(i,n){return Aa(n).filter(t=>!qo(i,t))}var $o=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Ra(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Fa(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},Xe=class extends $o{name;get formDirective(){return null}get path(){return null}};var Hi="VALID",Ho="INVALID",Xn="PENDING",Gi="DISABLED",Ye=class{},Ko=class extends Ye{value;source;constructor(n,t){super(),this.value=n,this.source=t}},$i=class extends Ye{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},Ki=class extends Ye{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},Yn=class extends Ye{status;source;constructor(n,t){super(),this.status=n,this.source=t}},Xo=class extends Ye{source;constructor(n){super(),this.source=n}},Qn=class extends Ye{source;constructor(n){super(),this.source=n}};function qc(i){return(nr(i)?i.validators:i)||null}function fh(i){return Array.isArray(i)?Ra(i):i||null}function $c(i,n){return(nr(n)?n.asyncValidators:i)||null}function gh(i){return Array.isArray(i)?Fa(i):i||null}function nr(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function _h(i,n,t){let e=i.controls;if(!(n?Object.keys(e):e).length)throw new dt(1e3,"");if(!Kc(e,t))throw new dt(1001,"")}function bh(i,n,t){i._forEachChild((e,o)=>{if(t[o]===void 0)throw new dt(-1002,"")})}var Zn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=R(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return G(this.statusReactive)}set status(n){G(()=>this.statusReactive.set(n))}_status=v(()=>this.statusReactive());statusReactive=R(void 0);get valid(){return this.status===Hi}get invalid(){return this.status===Ho}get pending(){return this.status===Xn}get disabled(){return this.status===Gi}get enabled(){return this.status!==Gi}errors;get pristine(){return G(this.pristineReactive)}set pristine(n){G(()=>this.pristineReactive.set(n))}_pristine=v(()=>this.pristineReactive());pristineReactive=R(!0);get dirty(){return!this.pristine}get touched(){return G(this.touchedReactive)}set touched(n){G(()=>this.touchedReactive.set(n))}_touched=v(()=>this.touchedReactive());touchedReactive=R(!1);get untouched(){return!this.touched}_events=new C;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ic(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ic(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Tc(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Tc(n,this._rawAsyncValidators))}hasValidator(n){return qo(this._rawValidators,n)}hasAsyncValidator(n){return qo(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let e=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Mt(I({},n),{sourceControl:e})),t&&n.emitEvent!==!1&&this._events.next(new Ki(!0,e))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:e})}),n.onlySelf||this._parent?._updateTouched(n,e),t&&n.emitEvent!==!1&&this._events.next(new Ki(!1,e))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let e=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Mt(I({},n),{sourceControl:e})),t&&n.emitEvent!==!1&&this._events.next(new $i(!1,e))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,e),t&&n.emitEvent!==!1&&this._events.next(new $i(!0,e))}markAsPending(n={}){this.status=Xn;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Yn(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Mt(I({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Gi,this.errors=null,this._forEachChild(o=>{o.disable(Mt(I({},n),{onlySelf:!0}))}),this._updateValue();let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ko(this.value,e)),this._events.next(new Yn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Mt(I({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Hi,this._forEachChild(e=>{e.enable(Mt(I({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Mt(I({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Hi||this.status===Xn)&&this._runAsyncValidator(e,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ko(this.value,t)),this._events.next(new Yn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Mt(I({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Gi:Hi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=Xn,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let e=Vc(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((e,o)=>e&&e._find(o),this)}getError(n,t){let e=t?this.get(t):this;return e?.errors?e.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,e){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||e)&&this._events.next(new Yn(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,e)}_initObservables(){this.valueChanges=new H,this.statusChanges=new H}_calculateStatus(){return this._allControlsDisabled()?Gi:this.errors?Ho:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Xn)?Xn:this._anyControlsHaveStatus(Ho)?Ho:Hi}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let e=!this._anyControlsDirty(),o=this.pristine!==e;this.pristine=e,n.onlySelf||this._parent?._updatePristine(n,t),o&&this._events.next(new $i(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new Ki(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){nr(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=fh(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=gh(this._rawAsyncValidators)}_updateHasRequiredValidator(){G(()=>this._hasRequired.set(this.hasValidator(Se.required)))}};function Kc(i,n){return Object.hasOwn(i,n)}function La(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function Xc(i){if(i.tagName!=="INPUT")return!1;let n=i.type;return n==="number"||n==="range"||n==="date"||n==="month"}function Yc(i){return i.tagName==="INPUT"||i.tagName==="TEXTAREA"}function Xi(i,n,t,e){switch(t){case"name":i.setAttribute(n,t,e);break;case"disabled":case"readonly":case"required":e?i.setAttribute(n,t,""):i.removeAttribute(n,t);break;case"max":case"min":case"minLength":case"maxLength":e!==void 0?i.setAttribute(n,t,e.toString()):i.removeAttribute(n,t);break}}var Ia=class{kind;context;control;message;constructor({kind:n,context:t,control:e}){this.kind=n,this.context=t,this.control=e}};var vh=(()=>{class i{_validator=Go;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let e=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(e),this._validator=this._enabled?this.createValidator(e):Go,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,features:[zt]})}return i})();var yh={provide:Pe,useExisting:ee(()=>Qc),multi:!0};var Qc=(()=>{class i extends vh{required;inputName="required";normalizeInput=V;createValidator=t=>Lc;enabled(t){return t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275dir=O({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,o){e&2&&y("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[tt([yh]),X]})}return i})();var Na=new _(""),Yi=new _("",{factory:()=>ir}),ir="always";function wh(i,n){return[...n.path,i]}function Zc(i,n,t=ir){Va(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),xh(i,n),Mh(i,n),kh(i,n),Ch(i,n)}function Yo(i,n,t=!0){let e=()=>{};n?.valueAccessor?.registerOnChange(e),n?.valueAccessor?.registerOnTouched(e),Zo(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Qo(i,n){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Ch(i,n){if(n.valueAccessor.setDisabledState){let t=e=>{n.valueAccessor.setDisabledState(e)};i.registerOnDisabledChange(t),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function Va(i,n){let t=Hc(i);n.validator!==null?i.setValidators(Ac(t,n.validator)):typeof t=="function"&&i.setValidators([t]);let e=Gc(i);n.asyncValidator!==null?i.setAsyncValidators(Ac(e,n.asyncValidator)):typeof e=="function"&&i.setAsyncValidators([e]);let o=()=>i.updateValueAndValidity();Qo(n._rawValidators,o),Qo(n._rawAsyncValidators,o)}function Zo(i,n){let t=!1;if(i!==null){if(n.validator!==null){let o=Hc(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==n.validator);r.length!==o.length&&(t=!0,i.setValidators(r))}}if(n.asyncValidator!==null){let o=Gc(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==n.asyncValidator);r.length!==o.length&&(t=!0,i.setAsyncValidators(r))}}}let e=()=>{};return Qo(n._rawValidators,e),Qo(n._rawAsyncValidators,e),t}function xh(i,n){n.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Jc(i,n)})}function kh(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Jc(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function Jc(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Mh(i,n){let t=(e,o)=>{n.valueAccessor.writeValue(e),o&&n.viewToModelUpdate(e)};i.registerOnChange(t),n._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function td(i,n){i==null,Va(i,n)}function Sh(i,n){return Zo(i,n)}function ed(i,n){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function Oh(i){return Object.getPrototypeOf(i.constructor)===nh}function nd(i,n){i._syncPendingControls(),n.forEach(t=>{let e=t.control;e.updateOn==="submit"&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function Ba(i,n){if(!n)return null;Array.isArray(n);let t,e,o;return n.forEach(r=>{r.constructor===tr?t=r:Oh(r)?e=r:o=r}),o||e||t||null}function Eh(i,n){let t=i.indexOf(n);t>-1&&i.splice(t,1)}var id={provide:Na,useFactory:()=>{let i=s(Zt,{self:!0});return{setParseErrors:n=>{i.setParseErrorSource(n)},set onReset(n){i.onReset=n}}}},Zt=class extends $o{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof Qn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Ba(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,t,e){super(),this.injector=n,this.renderer=t,this.rawValueAccessors=e,this.injector?.get(ze)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(ht);if(!this.control||!n)return;let t=n.markForCheck.bind(n);this.subscription=new Pt,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Qn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(o=>{this.control?.setValue(o,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(o)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=La(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof Qc))}ngControlUpdate(n,t){if(!this.isCustomControlBased)return;let e=this.control,o=this.customControlBindings;Object.is(o.value,e.value)||(o.value=e.value,n.setCustomControlModelInput(e.value)),this.bindControlProperty(n,o,"touched",e.touched),this.bindControlProperty(n,o,"dirty",e.dirty),this.bindControlProperty(n,o,"valid",e.valid),this.bindControlProperty(n,o,"invalid",e.invalid),this.bindControlProperty(n,o,"pending",e.pending),this.bindControlProperty(n,o,"disabled",e.disabled),this.shouldBindRequired&&this.bindControlProperty(n,o,"required",this.isRequired);let r=e.errors;if(o.errors!==r){o.errors=r;let a=this._convertErrors(r);n.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,t,e,o){if(t[e]===o)return;t[e]=o;let r=n.setInputOnDirectives(e,o);this.isNativeFormElement&&!r&&(e==="disabled"||e==="required")&&this.renderer&&Xi(this.renderer,n.nativeElement,e,o)}_convertErrors(n){if(n===null)return[];let t=this.control;return Object.entries(n).map(([e,o])=>new Ia({context:o,kind:e,control:t}))}setParseErrorSource(n){if(n===void 0)return;let t=null,e=v(()=>{let o=n();return o.length===0?null:o.reduce((r,a)=>(r[a.kind]=a,r),{})});this.parseErrorsValidator=(()=>t).bind(this),mt(()=>{t=e(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},Jo=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var od=(()=>{class i extends Jo{constructor(t){super(t)}static \u0275fac=function(e){return new(e||i)(ut(Zt,2))};static \u0275dir=O({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,o){e&2&&S("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[X]})}return i})(),rd=(()=>{class i extends Jo{constructor(t){super(t)}static \u0275fac=function(e){return new(e||i)(ut(Xe,10))};static \u0275dir=O({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,o){e&2&&S("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[X]})}return i})(),yn=class extends Zn{constructor(n,t,e){super(qc(t),$c(e,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){let e=this._find(n);return e||(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,e={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){let e=this._find(n);e&&e._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,e={}){let o=this._find(n);o&&o._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,t={}){G(()=>{bh(this,!0,n),Object.keys(n).forEach(e=>{_h(this,!0,e),this.controls[e].setValue(n[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(e=>{let o=this._find(e);o&&o.patchValue(n[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((e,o)=>{e.reset(n?n[o]:null,Mt(I({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Qn(this))}getRawValue(){return this._reduceChildren({},(n,t,e)=>(n[e]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,e)=>e._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let e=this.controls[t];e&&n(e,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,e]of Object.entries(this.controls))if(this.contains(t)&&n(e))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,e,o)=>((e.enabled||this.disabled)&&(t[o]=e.value),t))}_reduceChildren(n,t){let e=n;return this._forEachChild((o,r)=>{e=t(e,o,r)}),e}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return Kc(this.controls,n)?this.controls[n]:null}};var Dh={provide:Xe,useExisting:ee(()=>Qi)},qi=Promise.resolve(),Qi=(()=>{class i extends Xe{callSetDisabledState;get submitted(){return G(this.submittedReactive)}_submitted=v(()=>this.submittedReactive());submittedReactive=R(!1);_directives=new Set;form;ngSubmit=new H;options;constructor(t,e,o){super(),this.callSetDisabledState=o,this.form=new yn({},Ra(t),Fa(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){qi.then(()=>{let e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){qi.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){qi.then(()=>{let e=this._findContainer(t.path),o=new yn({});td(o,t),e.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){qi.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){qi.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),nd(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new Xo(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(e){return new(e||i)(ut(Pe,10),ut(er,10),ut(Yi,8))};static \u0275dir=O({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,o){e&1&&w("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[tt([Dh]),X]})}return i})();function Pc(i,n){let t=i.indexOf(n);t>-1&&i.splice(t,1)}function Rc(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var wn=class extends Zn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,e){super(qc(t),$c(e,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),nr(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Rc(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){G(()=>{this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Qn(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Pc(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Pc(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Rc(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Ah=i=>i instanceof wn;var ad=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var Ih=(()=>{class i extends Xe{callSetDisabledState;get submitted(){return G(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=v(()=>this._submittedReactive());_submittedReactive=R(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,e,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Zo(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let e=this.form.get(t.path);return t._setupWithForm(e,this.callSetDisabledState),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){Yo(t.control||null,t,!1),Eh(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,e){this.form.get(t.path).setValue(e)}onReset(){this.resetForm()}resetForm(t=void 0,e={}){this.form.reset(t,e),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,nd(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Xo(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let e=t.control,o=this.form.get(t.path);e!==o&&(Yo(e||null,t),Ah(o)&&t._setupWithForm(o,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let e=this.form.get(t.path);td(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let e=this.form?.get(t.path);e&&Sh(e,t)&&e.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Va(this.form,this),this._oldForm&&Zo(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(e){return new(e||i)(ut(Pe,10),ut(er,10),ut(Yi,8))};static \u0275dir=O({type:i,features:[X,zt]})}return i})();var za=new _(""),Th={provide:Zt,useExisting:ee(()=>Wa)},Wa=(()=>{class i extends Zt{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new H;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,e,o,r,a,c,u){super(u,c,o),this._ngModelWarningConfig=r,this.callSetDisabledState=a,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){if(this._isControlChanged(t)){let e=t.form.previousValue;e&&(Yo(e,this,!1),this.removeParseErrorsValidator(e)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Zc(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:!1})}ed(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Yo(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}\u0275ngControlCreate(t){super.ngControlCreate(t)}\u0275ngControlUpdate(t){super.ngControlUpdate(t,!0)}static \u0275fac=function(e){return new(e||i)(ut(Pe,10),ut(er,10),ut(Te,10),ut(za,8),ut(Yi,8),ut(ot,8),ut(z,8))};static \u0275dir=O({type:i,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[tt([Th,id]),X,zt,wi(null)]})}return i})();var Ph={provide:Zt,useExisting:ee(()=>ja)},ja=(()=>{class i extends Zt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new H;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,e,o,r,a,c,u){super(u,c,r),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(e),this._setAsyncValidators(o)}_setupWithForm(t,e){this.control=t,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Zc(t,this,e))}ngOnChanges(t){this._added||this._setUpControl(),ed(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return wh(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(t){super.ngControlCreate(t)}\u0275ngControlUpdate(t){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(t,!0))}static \u0275fac=function(e){return new(e||i)(ut(Xe,13),ut(Pe,10),ut(er,10),ut(Te,10),ut(za,8),ut(ot,8),ut(z,8))};static \u0275dir=O({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[tt([Ph,id]),X,zt,wi(null)]})}return i})();var Rh={provide:Xe,useExisting:ee(()=>Cn)},Cn=(()=>{class i extends Ih{form=null;ngSubmit=new H;get control(){return this.form}static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275dir=O({type:i,selectors:[["","formGroup",""]],hostBindings:function(e,o){e&1&&w("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[tt([Rh]),X]})}return i})();var sd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({})}return i})();var ld=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Yi,useValue:t.callSetDisabledState??ir}]}}static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[sd]})}return i})(),cd=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:za,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Yi,useValue:t.callSetDisabledState??ir}]}}static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[sd]})}return i})();var Ua=class{_box;_destroyed=new C;_resizeSubject=new C;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ae(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),e.unsubscribe(),this._elementObservables.delete(n)}}).pipe(J(t=>t.some(e=>e.target===n)),na({bufferSize:1,refCount:!0}),st(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},dd=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(N);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let o=e?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new Ua(o)),this._observers.get(o).observe(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();var Lh=["notch"],Nh=["*"],md=["iconPrefixContainer"],ud=["textPrefixContainer"],hd=["iconSuffixContainer"],pd=["textSuffixContainer"],Vh=["textField"],Bh=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],zh=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Wh(i,n){i&1&&A(0,"span",21)}function jh(i,n){if(i&1&&(l(0,"label",20),k(1,1),F(2,Wh,1,0,"span",21),m()),i&2){let t=M(2);b("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),y("for",t._control.disableAutomaticLabeling?null:t._control.id),d(2),L(!t.hideRequiredMarker&&t._control.required?2:-1)}}function Uh(i,n){if(i&1&&F(0,jh,3,5,"label",20),i&2){let t=M();L(t._hasFloatingLabel()?0:-1)}}function Hh(i,n){i&1&&A(0,"div",7)}function Gh(i,n){}function qh(i,n){if(i&1&&qt(0,Gh,0,0,"ng-template",13),i&2){M(2);let t=de(1);b("ngTemplateOutlet",t)}}function $h(i,n){if(i&1&&(l(0,"div",9),F(1,qh,1,1,null,13),m()),i&2){let t=M();b("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),d(),L(t._forceDisplayInfixLabel()?-1:1)}}function Kh(i,n){i&1&&(l(0,"div",10,2),k(2,2),m())}function Xh(i,n){i&1&&(l(0,"div",11,3),k(2,3),m())}function Yh(i,n){}function Qh(i,n){if(i&1&&qt(0,Yh,0,0,"ng-template",13),i&2){M();let t=de(1);b("ngTemplateOutlet",t)}}function Zh(i,n){i&1&&(l(0,"div",14,4),k(2,4),m())}function Jh(i,n){i&1&&(l(0,"div",15,5),k(2,5),m())}function tp(i,n){i&1&&A(0,"div",16)}function ep(i,n){i&1&&(l(0,"div",18),k(1,6),m())}function np(i,n){if(i&1&&(l(0,"mat-hint",22),h(1),m()),i&2){let t=M(2);b("id",t._hintLabelId),d(),D(t.hintLabel)}}function ip(i,n){if(i&1&&(l(0,"div",19),F(1,np,2,2,"mat-hint",22),k(2,7),A(3,"div",23),k(4,8),m()),i&2){let t=M();d(),L(t.hintLabel?1:-1)}}var xn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["mat-label"]]})}return i})(),op=new _("MatError");var Ha=(()=>{class i{align="start";id=s(vt).getId("mat-mdc-hint-");static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(e,o){e&2&&(ce("id",o.id),y("align",null),S("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),rp=new _("MatPrefix");var wd=new _("MatSuffix"),Ga=(()=>{class i{set _isTextSelector(t){this._isText=!0}_isText=!1;static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[tt([{provide:wd,useExisting:i}])]})}return i})(),Cd=new _("FloatingLabelParent"),fd=(()=>{class i{_elementRef=s(E);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(dd);_ngZone=s(N);_parent=s(Cd);_resizeSubscription=new Pt;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return ap(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(e,o){e&2&&S("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function ap(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let e=t.scrollWidth;return t.remove(),e}var gd="mdc-line-ripple--active",or="mdc-line-ripple--deactivating",_d=(()=>{class i{_elementRef=s(E);_cleanupTransitionEnd;constructor(){let t=s(N),e=s(ot);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=e.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(or),t.add(gd)}deactivate(){this._elementRef.nativeElement.classList.add(or)}_handleTransitionEnd=t=>{let e=this._elementRef.nativeElement.classList,o=e.contains(or);t.propertyName==="opacity"&&o&&e.remove(gd,or)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),bd=(()=>{class i{_elementRef=s(E);_ngZone=s(N);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,e=t.querySelector(".mdc-floating-label");e?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(e.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>e.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let e=this._notch.nativeElement;!this.open||!t?e.style.width="":e.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(e,o){if(e&1&&pt(Lh,5),e&2){let r;T(r=P())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(e,o){e&2&&S("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:Nh,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(e,o){e&1&&(K(),Ht(0,"div",1),Dt(1,"div",2,0),k(3),At(),Ht(4,"div",3))},encapsulation:2})}return i})(),Zi=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i})}return i})();var Ji=new _("MatFormField"),sp=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),vd="fill",lp="auto",yd="fixed",cp="translateY(-50%)",Jn=(()=>{class i{_elementRef=s(E);_changeDetectorRef=s(ht);_platform=s(Y);_idGenerator=s(vt);_ngZone=s(N);_defaults=s(sp,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ce("iconPrefixContainer");_textPrefixContainerSignal=Ce("textPrefixContainer");_iconSuffixContainerSignal=Ce("iconSuffixContainer");_textSuffixContainerSignal=Ce("textSuffixContainer");_prefixSuffixContainers=v(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=vl(xn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Ot(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||lp}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let e=t||this._defaults?.appearance||vd;this._appearanceSignal.set(e)}_appearanceSignal=R(vd);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||yd}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||yd}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new C;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ct();constructor(){let t=this._defaults,e=s(Nt);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),mt(()=>this._currentDirection=e.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=v(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let e=this._control,o="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(o+t.controlType),e.controlType&&this._elementRef.nativeElement.classList.add(o+e.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=e.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=e.stateChanges.pipe(Bt([void 0,void 0]),Et(()=>[e.errorState,e.userAriaDescribedBy]),ea(),J(([[r,a],[c,u]])=>r!==c||a!==u)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),e.ngControl&&e.ngControl.valueChanges&&(this._valueChanges=e.ngControl.valueChanges.pipe(st(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ut(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){In({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=v(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let e=this._control?this._control.ngControl:null;return e&&e[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(c=>c.align==="start"):null,a=this._hintChildren?this._hintChildren.find(c=>c.align==="end"):null;r?t.push(r.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(r=>r.id));let e=this._control.describedByIds,o;if(e){let r=this._describedByIds||t;o=t.concat(e.filter(a=>a&&!r.includes(a)))}else o=t;this._control.setDescribedByIds(o),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,c=e?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0,p=r?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",j=`${a+c}px`,kt=`calc(${f} * (${j} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,at=`var(--mat-mdc-form-field-label-transform, ${cp} translateX(${kt}))`,wt=a+c+u+p;return[at,wt]}_writeOutlinedLabelStyles(t){if(t!==null){let[e,o]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=e),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let e=t.getRootNode();return e&&e!==t}return document.documentElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-form-field"]],contentQueries:function(e,o,r){if(e&1&&(pl(r,o._labelChild,xn,5),Gt(r,Zi,5)(r,rp,5)(r,wd,5)(r,op,5)(r,Ha,5)),e&2){cn();let a;T(a=P())&&(o._formFieldControl=a.first),T(a=P())&&(o._prefixChildren=a),T(a=P())&&(o._suffixChildren=a),T(a=P())&&(o._errorChildren=a),T(a=P())&&(o._hintChildren=a)}},viewQuery:function(e,o){if(e&1&&(An(o._iconPrefixContainerSignal,md,5)(o._textPrefixContainerSignal,ud,5)(o._iconSuffixContainerSignal,hd,5)(o._textSuffixContainerSignal,pd,5),pt(Vh,5)(md,5)(ud,5)(hd,5)(pd,5)(fd,5)(bd,5)(_d,5)),e&2){cn(4);let r;T(r=P())&&(o._textField=r.first),T(r=P())&&(o._iconPrefixContainer=r.first),T(r=P())&&(o._textPrefixContainer=r.first),T(r=P())&&(o._iconSuffixContainer=r.first),T(r=P())&&(o._textSuffixContainer=r.first),T(r=P())&&(o._floatingLabel=r.first),T(r=P())&&(o._notchedOutline=r.first),T(r=P())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(e,o){e&2&&S("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[tt([{provide:Ji,useExisting:i},{provide:Cd,useExisting:i}])],ngContentSelectors:zh,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(e,o){if(e&1&&(K(Bh),qt(0,Uh,1,1,"ng-template",null,0,xi),l(2,"div",6,1),w("click",function(a){return o._control.onContainerClick(a)}),F(4,Hh,1,0,"div",7),l(5,"div",8),F(6,$h,2,2,"div",9),F(7,Kh,3,0,"div",10),F(8,Xh,3,0,"div",11),l(9,"div",12),F(10,Qh,1,1,null,13),k(11),m(),F(12,Zh,3,0,"div",14),F(13,Jh,3,0,"div",15),m(),F(14,tp,1,0,"div",16),m(),l(15,"div",17),F(16,ep,2,0,"div",18)(17,ip,5,1,"div",19),m()),e&2){let r;d(2),S("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),d(2),L(!o._hasOutline()&&!o._control.disabled?4:-1),d(2),L(o._hasOutline()?6:-1),d(),L(o._hasIconPrefix?7:-1),d(),L(o._hasTextPrefix?8:-1),d(2),L(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),d(2),L(o._hasTextSuffix?12:-1),d(),L(o._hasIconSuffix?13:-1),d(),L(o._hasOutline()?-1:14),d(),S("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();d(),L((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[fd,bd,go,_d,Ha],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return i})();var Re=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[xo,Jn,Z]})}return i})();var dp=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})(),mp={passive:!0},kd=(()=>{class i{_platform=s(Y);_ngZone=s(N);_renderer=s(ne).createRenderer(null,null);_styleLoader=s(It);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return Qs;this._styleLoader.load(dp);let e=$t(t),o=this._monitoredElements.get(e);if(o)return o.subject;let r=new C,a="cdk-text-field-autofilled",c=p=>{p.animationName==="cdk-text-field-autofill-start"&&!e.classList.contains(a)?(e.classList.add(a),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!0}))):p.animationName==="cdk-text-field-autofill-end"&&e.classList.contains(a)&&(e.classList.remove(a),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!1})))},u=this._ngZone.runOutsideAngular(()=>(e.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(e,"animationstart",c,mp)));return this._monitoredElements.set(e,{subject:r,unlisten:u}),r}stopMonitoring(t){let e=$t(t),o=this._monitoredElements.get(e);o&&(o.unlisten(),o.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();var Md=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({})}return i})();var Sd=new _("MAT_INPUT_VALUE_ACCESSOR");var rr=(()=>{class i{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();var ti=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,t,e,o,r){this._defaultMatcher=n,this.ngControl=t,this._parentFormGroup=e,this._parentForm=o,this._stateChanges=r}updateErrorState(){let n=this.errorState,t=this._parentFormGroup||this._parentForm,e=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=e?.isErrorState(o,t)??!1;r!==n&&(this.errorState=r,this._stateChanges.next())}};var up=["button","checkbox","file","hidden","image","radio","range","reset","submit"],hp=new _("MAT_INPUT_CONFIG"),Od=(()=>{class i{_elementRef=s(E);_platform=s(Y);ngControl=s(Zt,{optional:!0,self:!0});_autofillMonitor=s(kd);_ngZone=s(N);_formField=s(Ji,{optional:!0});_renderer=s(ot);_uid=s(vt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(hp,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new C;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=Ot(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Se.required)??!1}set required(t){this._required=Ot(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&pa().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Ot(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>pa().has(t));constructor(){let t=s(Qi,{optional:!0}),e=s(Cn,{optional:!0}),o=s(rr),r=s(Sd,{optional:!0,self:!0}),a=this._elementRef.nativeElement,c=a.nodeName.toLowerCase();r?on(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new ti(o,this.ngControl,e,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c==="select",this._isTextarea=c==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&mt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type==="number"?(e.type="text",e.setSelectionRange(0,0),e.type="number"):e.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){up.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let e=t.target;!e.value&&e.selectionStart===0&&e.selectionEnd===0&&(e.setSelectionRange(1,1),e.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(e,o){e&1&&w("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),e&2&&(ce("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),y("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),S("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",V]},exportAs:["matInput"],features:[tt([{provide:Zi,useExisting:i}]),zt]})}return i})(),ar=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[Re,Re,Md,Z]})}return i})();var to=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new C;constructor(n=!1,t,e=!0,o){this._multiple=n,this._emitChanges=e,this.compareWith=o,t&&t.length&&(n?t.forEach(r=>this._markSelected(r)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...n){this._verifyValueAssignment(n),n.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...n){this._verifyValueAssignment(n);let t=this.selected,e=new Set(n.map(r=>this._getConcreteValue(r)));n.forEach(r=>this._markSelected(r)),t.filter(r=>!e.has(this._getConcreteValue(r,e))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let t=this._hasQueuedChanges();return n&&this._emitChangeEvent(),t}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(n,e))return e;return n}else return n}};var Ed=(()=>{class i{_animationsDisabled=ct();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,o){e&2&&S("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,o){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return i})();var fp=["text"],gp=[[["mat-icon"]],"*"],_p=["mat-icon","*"];function bp(i,n){if(i&1&&A(0,"mat-pseudo-checkbox",1),i&2){let t=M();b("disabled",t.disabled)("state",t.selected?"checked":"unchecked")}}function vp(i,n){if(i&1&&A(0,"mat-pseudo-checkbox",3),i&2){let t=M();b("disabled",t.disabled)}}function yp(i,n){if(i&1&&(l(0,"span",4),h(1),m()),i&2){let t=M();d(),et("(",t.group.label,")")}}var $a=new _("MAT_OPTION_PARENT_COMPONENT"),Ka=new _("MatOptgroup");var qa=class{source;isUserInput;constructor(n,t=!1){this.source=n,this.isUserInput=t}},ei=(()=>{class i{_element=s(E);_changeDetectorRef=s(ht);_parent=s($a,{optional:!0});group=s(Ka,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(vt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=R(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new H;_text;_stateChanges=new C;constructor(){let t=s(It);t.load(ue),t.load(bo),this._signalDisableRipple=!!this._parent&&on(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!Vt(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new qa(this,t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-option"]],viewQuery:function(e,o){if(e&1&&pt(fp,7),e&2){let r;T(r=P())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(e,o){e&1&&w("click",function(){return o._selectViaInteraction()})("keydown",function(a){return o._handleKeydown(a)}),e&2&&(ce("id",o.id),y("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),S("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",V]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:_p,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(e,o){e&1&&(K(gp),F(0,bp,1,2,"mat-pseudo-checkbox",1),k(1),l(2,"span",2,0),k(4,1),m(),F(5,vp,1,1,"mat-pseudo-checkbox",3),F(6,yp,2,1,"span",4),A(7,"div",5)),e&2&&(L(o.multiple?0:-1),d(5),L(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),d(),L(o.group&&o.group._inert?6:-1),d(),b("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[Ed,Ee],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return i})();function Dd(i,n,t){if(t.length){let e=n.toArray(),o=t.toArray(),r=0;for(let a=0;a<i+1;a++)e[a].group&&e[a].group===o[r]&&r++;return r}return 0}function Ad(i,n,t,e){return i<t?i:i+n>t+e?Math.max(0,i-e+n):t}var sr=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[Z]})}return i})();var Xa=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[xe,sr,ei,Z]})}return i})();var wp=["trigger"],Cp=["panel"],xp=[[["mat-select-trigger"]],"*"],kp=["mat-select-trigger","*"];function Mp(i,n){if(i&1&&(l(0,"span",4),h(1),m()),i&2){let t=M();d(),D(t.placeholder)}}function Sp(i,n){i&1&&k(0)}function Op(i,n){if(i&1&&(l(0,"span",11),h(1),m()),i&2){let t=M(2);d(),D(t.triggerValue)}}function Ep(i,n){if(i&1&&(l(0,"span",5),F(1,Sp,1,0)(2,Op,2,1,"span",11),m()),i&2){let t=M();d(),L(t.customTrigger?1:2)}}function Dp(i,n){if(i&1){let t=Lt();l(0,"div",12,1),w("keydown",function(o){_t(t);let r=M();return bt(r._handleKeydown(o))}),k(2,1),m()}if(i&2){let t=M();ft(t.panelClass),S("mat-select-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._parentFormField?.color==="primary")("mat-accent",t._parentFormField?.color==="accent")("mat-warn",t._parentFormField?.color==="warn")("mat-undefined",!t._parentFormField?.color),y("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}var Ap=new _("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(z);return()=>bn(i)}}),Ip=new _("MAT_SELECT_CONFIG"),Tp=new _("MatSelectTrigger"),Ya=class{source;value;constructor(n,t){this.source=n,this.value=t}},Id=(()=>{class i{_viewportRuler=s(Me);_changeDetectorRef=s(ht);_elementRef=s(E);_dir=s(Nt,{optional:!0});_idGenerator=s(vt);_renderer=s(ot);_parentFormField=s(Ji,{optional:!0});ngControl=s(Zt,{self:!0,optional:!0});_liveAnnouncer=s(Oi);_defaultOptions=s(Ip,{optional:!0});_animationsDisabled=ct();_popoverLocation;_initialized=new C;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let e=this.options.toArray()[t];if(e){let o=this.panel.nativeElement,r=Dd(t,this.options,this.optionGroups),a=e._getHostElement();t===0&&r===1?o.scrollTop=0:o.scrollTop=Ad(a.offsetTop,a.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new Ya(this,t)}_scrollStrategyFactory=s(Ap);_panelOpen=!1;_compareWith=(t,e)=>t===e;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new C;_errorStateTracker;stateChanges=new C;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=R(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Se.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=En(()=>{let t=this.options;return t?t.changes.pipe(Bt(t),se(()=>Ut(...t.map(e=>e.onSelectionChange)))):this._initialized.pipe(se(()=>this.optionSelectionChanges))});openedChange=new H;_openedStream=this.openedChange.pipe(J(t=>t),Et(()=>{}));_closedStream=this.openedChange.pipe(J(t=>!t),Et(()=>{}));selectionChange=new H;valueChange=new H;constructor(){let t=s(rr),e=s(Qi,{optional:!0}),o=s(Cn,{optional:!0}),r=s(new fo("tabindex"),{optional:!0}),a=s(Wi,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ti(t,this.ngControl,o,e,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new to(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(st(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(st(this._destroy)).subscribe(t=>{t.added.forEach(e=>e.select()),t.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(Bt(null),st(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),e=this.ngControl;if(t!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?o.setAttribute("aria-labelledby",t):o.removeAttribute("aria-labelledby")}e&&(this._previousControl!==e.control&&(this._previousControl!==void 0&&e.disabled!==null&&e.disabled!==this.disabled&&(this.disabled=e.disabled),this._previousControl=e.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ct(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{e(),clearTimeout(o),this._cleanupDetach=void 0};let t=this.panel.nativeElement,e=this._renderer.listen(t,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let e=t.keyCode,o=e===40||e===38||e===37||e===39,r=e===13||e===32,a=this._keyManager;if(!a.isTyping()&&r&&!Vt(t)||(this.multiple||t.altKey)&&o)t.preventDefault(),this.open();else if(!this.multiple){let c=this.selected;a.onKeydown(t);let u=this.selected;u&&c!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(t){let e=this._keyManager,o=t.keyCode,r=o===40||o===38,a=e.isTyping();if(r&&t.altKey)t.preventDefault(),this.close();else if(!a&&(o===13||o===32)&&e.activeItem&&!Vt(t))t.preventDefault(),e.activeItem._selectViaInteraction();else if(!a&&this._multiple&&o===65&&t.ctrlKey){t.preventDefault();let c=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(c?u.select():u.deselect())})}else{let c=e.activeItemIndex;e.onKeydown(t),this._multiple&&r&&t.shiftKey&&e.activeItem&&e.activeItemIndex!==c&&e.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!Vt(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(e=>e.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(e=>this._selectOptionByValue(e)),this._sortValues();else{let e=this._selectOptionByValue(t);e?this._keyManager.updateActiveItem(e):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let e=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,t)}catch{return!1}});return e&&this._selectionModel.select(e),e}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof zn?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ti(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=Ut(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(st(t)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ut(...this.options.map(e=>e._stateChanges)).pipe(st(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,e){let o=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(o!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),e&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),e&&this.focus())),o!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((e,o)=>this.sortComparator?this.sortComparator(e,o,t):t.indexOf(e)-t.indexOf(o)),this.stateChanges.next()}}_propagateChanges(t){let e;this.multiple?e=this.selected.map(o=>o.value):e=this.selected?this.selected.value:t,this._value=e,this.valueChange.emit(e),this._onChange(e),this.selectionChange.emit(this._getChangeEvent(e)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let e=0;e<this.options.length;e++)if(!this.options.get(e).disabled){t=e;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(t){let e=jt(t);e&&(e.tagName==="MAT-OPTION"||e.classList.contains("cdk-overlay-backdrop")||e.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-select"]],contentQueries:function(e,o,r){if(e&1&&Gt(r,Tp,5)(r,ei,5)(r,Ka,5),e&2){let a;T(a=P())&&(o.customTrigger=a.first),T(a=P())&&(o.options=a),T(a=P())&&(o.optionGroups=a)}},viewQuery:function(e,o){if(e&1&&pt(wp,5)(Cp,5)(Vo,5),e&2){let r;T(r=P())&&(o.trigger=r.first),T(r=P())&&(o.panel=r.first),T(r=P())&&(o._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(e,o){e&1&&w("keydown",function(a){return o._handleKeydown(a)})("focus",function(){return o._onFocus()})("blur",function(){return o._onBlur()}),e&2&&(y("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),S("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",V],disableRipple:[2,"disableRipple","disableRipple",V],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:Rt(t)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",V],placeholder:"placeholder",required:[2,"required","required",V],multiple:[2,"multiple","multiple",V],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",V],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Rt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",V]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[tt([{provide:Zi,useExisting:i},{provide:$a,useExisting:i}]),zt],ngContentSelectors:kp,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(e,o){if(e&1&&(K(xp),l(0,"div",2,0),w("click",function(){return o.open()}),l(3,"div",3),F(4,Mp,2,1,"span",4)(5,Ep,3,1,"span",5),m(),l(6,"div",6)(7,"div",7),le(),l(8,"svg",8),A(9,"path",9),m()()()(),qt(10,Dp,3,16,"ng-template",10),w("detach",function(){return o.close()})("backdropClick",function(){return o.close()})("overlayKeydown",function(a){return o._handleOverlayKeydown(a)})),e&2){let r=de(1);d(3),y("id",o._valueId),d(),L(o.empty?4:5),d(6),b("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation)}},dependencies:[zn,Vo],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return i})();var Td=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[Ke,Xa,Z,De,Re,Xa]})}return i})();var Rp=["*"],Pd=(()=>{class i{labelPosition="after";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(e,o){e&2&&S("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:Rp,decls:1,vars:0,template:function(e,o){e&1&&(K(),k(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return i})();var Fp=["switch"],Lp=["*"];function Np(i,n){i&1&&(l(0,"span",11),le(),l(1,"svg",13),A(2,"path",14),m(),l(3,"svg",15),A(4,"path",16),m()())}var Vp=new _("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),lr=class{source;checked;constructor(n,t){this.source=n,this.checked=t}},Qa=(()=>{class i{_elementRef=s(E);_focusMonitor=s(me);_changeDetectorRef=s(ht);defaults=s(Vp);_onChange=t=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(t){return new lr(this,t)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ct();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new H;toggleChange=new H;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(It).load(ue);let t=s(new fo("tabindex"),{optional:!0}),e=this.defaults;this.tabIndex=t==null?0:parseInt(t)||0,this.color=e.color||"accent",this.id=this._uniqueId=s(vt).getId("mat-mdc-slide-toggle-"),this.hideIcon=e.hideIcon??!1,this.disabledInteractive=e.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t==="keyboard"||t==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new lr(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(e,o){if(e&1&&pt(Fp,5),e&2){let r;T(r=P())&&(o._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(e,o){e&2&&(ce("id",o.id),y("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),ft(o.color?"mat-"+o.color:""),S("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",V],color:"color",disabled:[2,"disabled","disabled",V],disableRipple:[2,"disableRipple","disableRipple",V],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:Rt(t)],checked:[2,"checked","checked",V],hideIcon:[2,"hideIcon","hideIcon",V],disabledInteractive:[2,"disabledInteractive","disabledInteractive",V]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[tt([{provide:Te,useExisting:ee(()=>i),multi:!0},{provide:Pe,useExisting:i,multi:!0}]),zt],ngContentSelectors:Lp,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(e,o){if(e&1&&(K(),l(0,"div",1)(1,"button",2,0),w("click",function(){return o._handleClick()}),A(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),A(8,"span",8),m(),l(9,"span",9),A(10,"span",10),m(),F(11,Np,5,0,"span",11),m()()(),l(12,"label",12),w("click",function(a){return a.stopPropagation()}),k(13),m()()),e&2){let r=de(2);b("labelPosition",o.labelPosition),d(),S("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),b("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),y("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),d(9),b("matRippleTrigger",r)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),d(),L(o.hideIcon?-1:11),d(),b("for",o.buttonId),y("id",o._labelId)}},dependencies:[Ee,Pd],styles:[`.mdc-switch {
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
`],encapsulation:2})}return i})(),Rd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[Qa,Z]})}return i})();var zp=["knob"],Wp=["valueIndicatorContainer"];function jp(i,n){if(i&1&&(l(0,"div",2,1)(2,"div",5)(3,"span",6),h(4),m()()()),i&2){let t=M();d(4),D(t.valueIndicatorText)}}var Up=["trackActive"],Hp=["*"];function Gp(i,n){if(i&1&&A(0,"div"),i&2){let t=n.$implicit,e=n.$index,o=M(3);ft(t===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),ie("transform",o._calcTickMarkTransform(e))}}function qp(i,n){if(i&1&&sn(0,Gp,1,4,"div",8,ul),i&2){let t=M(2);ln(t._tickMarks)}}function $p(i,n){if(i&1&&(l(0,"div",6,1),F(2,qp,2,0),m()),i&2){let t=M();d(2),L(t._cachedWidth?2:-1)}}function Kp(i,n){if(i&1&&A(0,"mat-slider-visual-thumb",7),i&2){let t=M();b("discrete",t.discrete)("thumbPosition",1)("valueIndicatorText",t.startValueIndicatorText)}}var q=(function(i){return i[i.START=1]="START",i[i.END=2]="END",i})(q||{}),ni=(function(i){return i[i.ACTIVE=0]="ACTIVE",i[i.INACTIVE=1]="INACTIVE",i})(ni||{}),Za=new _("_MatSlider"),Fd=new _("_MatSliderThumb"),Xp=new _("_MatSliderRangeThumb"),Ld=new _("_MatSliderVisualThumb");var Yp=(()=>{class i{_cdr=s(ht);_ngZone=s(N);_slider=s(Za);_renderer=s(ot);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=s(E).nativeElement;_platform=s(Y);ngAfterViewInit(){let t=this._slider._getInput(this.thumbPosition);t&&(this._ripple.radius=24,this._sliderInput=t,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let e=this._sliderInputEl,o=this._renderer;this._listenerCleanups=[o.listen(e,"pointermove",this._onPointerMove),o.listen(e,"pointerdown",this._onDragStart),o.listen(e,"pointerup",this._onDragEnd),o.listen(e,"pointerleave",this._onMouseLeave),o.listen(e,"focus",this._onFocus),o.listen(e,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t())}_onPointerMove=t=>{if(this._sliderInput._isFocused)return;let e=this._hostElement.getBoundingClientRect(),o=this._slider._isCursorOnSliderThumb(t,e);this._isHovered=o,o?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=t=>{t.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(t){return t?.state===Kt.FADING_IN||t?.state===Kt.VISIBLE}_showRipple(t,e){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===q.START?q.END:q.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!e)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:t,centered:!0,persistent:!0})}_hideRipple(t){if(t?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let e=this._getSibling();e._isShowingAnyRipple()||(this._hideValueIndicator(),e._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===q.START?q.END:q.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(e,o){if(e&1&&pt(Ee,5)(zp,5)(Wp,5),e&2){let r;T(r=P())&&(o._ripple=r.first),T(r=P())&&(o._knob=r.first),T(r=P())&&(o._valueIndicatorContainer=r.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[tt([{provide:Ld,useExisting:i}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(e,o){e&1&&(F(0,jp,5,1,"div",2),A(1,"div",3,0)(3,"div",4)),e&2&&(L(o.discrete?0:-1),d(3),b("matRippleDisabled",!0))},dependencies:[Ee],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return i})(),Nd=(()=>{class i{_ngZone=s(N);_cdr=s(ht);_elementRef=s(E);_dir=s(Nt,{optional:!0});_globalRippleOptions=s(gn,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(t){this._disabled=t;let e=this._getInput(q.END),o=this._getInput(q.START);e&&(e.disabled=this._disabled),o&&(o.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(t){this._discrete=t,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(t){this._showTickMarks=t,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(t){let e=t==null||isNaN(t)?this._min:t;this._min!==e&&this._updateMin(e)}_min=0;color;disableRipple=!1;_updateMin(t){let e=this._min;this._min=t,this._isRange?this._updateMinRange({old:e,new:t}):this._updateMinNonRange(t),this._onMinMaxOrStepChange()}_updateMinRange(t){let e=this._getInput(q.END),o=this._getInput(q.START),r=e.value,a=o.value;o.min=t.new,e.min=Math.max(t.new,o.value),o.max=Math.min(e.max,e.value),o._updateWidthInactive(),e._updateWidthInactive(),t.new<t.old?this._onTranslateXChangeBySideEffect(e,o):this._onTranslateXChangeBySideEffect(o,e),r!==e.value&&this._onValueChange(e),a!==o.value&&this._onValueChange(o)}_updateMinNonRange(t){let e=this._getInput(q.END);if(e){let o=e.value;e.min=t,e._updateThumbUIByValue(),this._updateTrackUI(e),o!==e.value&&this._onValueChange(e)}}get max(){return this._max}set max(t){let e=t==null||isNaN(t)?this._max:t;this._max!==e&&this._updateMax(e)}_max=100;_updateMax(t){let e=this._max;this._max=t,this._isRange?this._updateMaxRange({old:e,new:t}):this._updateMaxNonRange(t),this._onMinMaxOrStepChange()}_updateMaxRange(t){let e=this._getInput(q.END),o=this._getInput(q.START),r=e.value,a=o.value;e.max=t.new,o.max=Math.min(t.new,e.value),e.min=o.value,e._updateWidthInactive(),o._updateWidthInactive(),t.new>t.old?this._onTranslateXChangeBySideEffect(o,e):this._onTranslateXChangeBySideEffect(e,o),r!==e.value&&this._onValueChange(e),a!==o.value&&this._onValueChange(o)}_updateMaxNonRange(t){let e=this._getInput(q.END);if(e){let o=e.value;e.max=t,e._updateThumbUIByValue(),this._updateTrackUI(e),o!==e.value&&this._onValueChange(e)}}get step(){return this._step}set step(t){let e=isNaN(t)?this._step:t;this._step!==e&&this._updateStep(e)}_step=1;_updateStep(t){this._step=t,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let t=this._getInput(q.END),e=this._getInput(q.START),o=t.value,r=e.value,a=e.value;t.min=this._min,e.max=this._max,t.step=this._step,e.step=this._step,this._platform.SAFARI&&(t.value=t.value,e.value=e.value),t.min=Math.max(this._min,e.value),e.max=Math.min(this._max,t.value),e._updateWidthInactive(),t._updateWidthInactive(),t.value<a?this._onTranslateXChangeBySideEffect(e,t):this._onTranslateXChangeBySideEffect(t,e),o!==t.value&&this._onValueChange(t),r!==e.value&&this._onValueChange(e)}_updateStepNonRange(){let t=this._getInput(q.END);if(t){let e=t.value;t.step=this._step,this._platform.SAFARI&&(t.value=t.value),t._updateThumbUIByValue(),e!==t.value&&this._onValueChange(t)}}displayWith=t=>`${t}`;_tickMarks;_noopAnimations=ct();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=v(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=s(Y);constructor(){s(It).load(ue);let t=this._isRtl();In(()=>{let e=this._isRtl();e!==t&&(t=e,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let t=this._getInput(q.END),e=this._getInput(q.START);this._isRange=!!t&&!!e,this._cdr.detectChanges();let o=this._getThumb(q.END);this._rippleRadius=o._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(t,e):this._initUINonRange(t),this._updateTrackUI(t),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(t){t.initProps(),t.initUI(),this._updateValueIndicatorUI(t),this._hasViewInitialized=!0,t._updateThumbUIByValue()}_initUIRange(t,e){t.initProps(),t.initUI(),e.initProps(),e.initUI(),t._updateMinMax(),e._updateMinMax(),t._updateStaticStyles(),e._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,t._updateThumbUIByValue(),e._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let t=this._getInput(q.END),e=this._getInput(q.START);t._setIsLeftThumb(),e._setIsLeftThumb(),t.translateX=t._calcTranslateXByValue(),e.translateX=e._calcTranslateXByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateWidthInactive(),e._updateWidthInactive(),t._updateThumbUIByValue(),e._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(q.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(q.START)._isActive||this._getThumb(q.END)._isActive}_getValue(t=q.END){let e=this._getInput(t);return e?e.value:this.min}_skipUpdate(){return!!(this._getInput(q.START)?._skipUIUpdate||this._getInput(q.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(t){let e=this._trackActive.nativeElement.style;e.left=t.left,e.right=t.right,e.transformOrigin=t.transformOrigin,e.transform=t.transform}_calcTickMarkTransform(t){let e=t*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-e:e}px)`}_onTranslateXChange(t){this._hasViewInitialized&&(this._updateThumbUI(t),this._updateTrackUI(t),this._updateOverlappingThumbUI(t))}_onTranslateXChangeBySideEffect(t,e){this._hasViewInitialized&&(t._updateThumbUIByValue(),e._updateThumbUIByValue())}_onValueChange(t){this._hasViewInitialized&&(this._updateValueIndicatorUI(t),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let t=this._getInput(q.END),e=this._getInput(q.START);t._updateThumbUIByValue(),e._updateThumbUIByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateMinMax(),e._updateMinMax(),t._updateWidthInactive(),e._updateWidthInactive()}else{let t=this._getInput(q.END);t&&t._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let t=this._getInput(q.START),e=this._getInput(q.END);return!t||!e?!1:e.translateX-t.translateX<20}_updateOverlappingThumbClassNames(t){let e=t.getSibling(),o=this._getThumb(t.thumbPosition);this._getThumb(e.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),o._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(t){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(t))}_updateThumbUI(t){if(this._skipUpdate())return;let e=this._getThumb(t.thumbPosition===q.END?q.END:q.START);e._hostElement.style.transform=`translateX(${t.translateX}px)`}_updateValueIndicatorUI(t){if(this._skipUpdate())return;let e=this.displayWith(t.value);if(this._hasViewInitialized?t._valuetext.set(e):t._hostElement.setAttribute("aria-valuetext",e),this.discrete){t.thumbPosition===q.START?this.startValueIndicatorText=e:this.endValueIndicatorText=e;let o=this._getThumb(t.thumbPosition);e.length<3?o._hostElement.classList.add("mdc-slider__thumb--short-value"):o._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let t=this._getInput(q.END),e=this._getInput(q.START);t&&this._updateValueIndicatorUI(t),e&&this._updateValueIndicatorUI(e)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let t=this._step&&this._step>0?this._step:1,o=(Math.floor(this.max/t)*t-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*o}_updateTrackUI(t){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(t):this._updateTrackUINonRange(t))}_updateTrackUIRange(t){let e=t.getSibling();if(!e||!this._cachedWidth)return;let o=Math.abs(e.translateX-t.translateX)/this._cachedWidth;t._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-e.translateX}px`,transformOrigin:"right",transform:`scaleX(${o})`}):this._setTrackActiveStyles({left:`${e.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${o})`})}_updateTrackUINonRange(t){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-t.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${t.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let t=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(t):this._updateTickMarkUINonRange(t)}_updateTickMarkUINonRange(t){let e=this._getValue(),o=Math.max(Math.round((e-this.min)/t),0)+1,r=Math.max(Math.round((this.max-e)/t),0)-1;this._isRtl()?o++:r++,this._tickMarks=Array(o).fill(ni.ACTIVE).concat(Array(r).fill(ni.INACTIVE))}_updateTickMarkUIRange(t){let e=this._getValue(),o=this._getValue(q.START),r=Math.max(Math.round((o-this.min)/t),0),a=Math.max(Math.round((e-o)/t)+1,0),c=Math.max(Math.round((this.max-e)/t),0);this._tickMarks=Array(r).fill(ni.INACTIVE).concat(Array(a).fill(ni.ACTIVE),Array(c).fill(ni.INACTIVE))}_getInput(t){if(t===q.END&&this._input)return this._input;if(this._inputs?.length)return t===q.START?this._inputs.first:this._inputs.last}_getThumb(t){return t===q.END?this._thumbs?.last:this._thumbs?.first}_setTransition(t){this._hasAnimation=!this._platform.IOS&&t&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(t,e){let o=e.width/2,r=e.x+o,a=e.y+o,c=t.clientX-r,u=t.clientY-a;return Math.pow(c,2)+Math.pow(u,2)<Math.pow(o,2)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-slider"]],contentQueries:function(e,o,r){if(e&1&&Gt(r,Fd,5)(r,Xp,4),e&2){let a;T(a=P())&&(o._input=a.first),T(a=P())&&(o._inputs=a)}},viewQuery:function(e,o){if(e&1&&pt(Up,5)(Ld,5),e&2){let r;T(r=P())&&(o._trackActive=r.first),T(r=P())&&(o._thumbs=r)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(e,o){e&2&&(ft("mat-"+(o.color||"primary")),S("mdc-slider--range",o._isRange)("mdc-slider--disabled",o.disabled)("mdc-slider--discrete",o.discrete)("mdc-slider--tick-marks",o.showTickMarks)("_mat-animation-noopable",o._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",V],discrete:[2,"discrete","discrete",V],showTickMarks:[2,"showTickMarks","showTickMarks",V],min:[2,"min","min",Rt],color:"color",disableRipple:[2,"disableRipple","disableRipple",V],max:[2,"max","max",Rt],step:[2,"step","step",Rt],displayWith:"displayWith"},exportAs:["matSlider"],features:[tt([{provide:Za,useExisting:i}])],ngContentSelectors:Hp,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(e,o){e&1&&(K(),k(0),l(1,"div",2),A(2,"div",3),l(3,"div",4),A(4,"div",5,0),m(),F(6,$p,3,1,"div",6),m(),F(7,Kp,1,3,"mat-slider-visual-thumb",7),A(8,"mat-slider-visual-thumb",7)),e&2&&(d(6),L(o.showTickMarks?6:-1),d(),L(o._isRange?7:-1),d(),b("discrete",o.discrete)("thumbPosition",2)("valueIndicatorText",o.endValueIndicatorText))},dependencies:[Yp],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return i})();var Qp={provide:Te,useExisting:ee(()=>Ja),multi:!0};var Ja=(()=>{class i{_ngZone=s(N);_elementRef=s(E);_cdr=s(ht);_slider=s(Za);_platform=s(Y);_listenerCleanups;get value(){return Rt(this._hostElement.value,0)}set value(t){t===null&&(t=this._getDefaultValue()),t=isNaN(t)?0:t;let e=t+"";if(!this._hasSetInitialValue){this._initialValue=e;return}this._isActive||this._setValue(e)}_setValue(t){this._hostElement.value=t,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new H;dragStart=new H;dragEnd=new H;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(t){this._translateX=t}_translateX;thumbPosition=q.END;get min(){return Rt(this._hostElement.min,0)}set min(t){this._hostElement.min=t+"",this._cdr.detectChanges()}get max(){return Rt(this._hostElement.max,0)}set max(t){this._hostElement.max=t+"",this._cdr.detectChanges()}get step(){return Rt(this._hostElement.step,0)}set step(t){this._hostElement.step=t+"",this._cdr.detectChanges()}get disabled(){return V(this._hostElement.disabled)}set disabled(t){this._hostElement.disabled=t,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=R("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(t){this._isFocused=t}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new C;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let t=s(ot);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[t.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),t.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),t.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(t){if(!(this.disabled||t.button!==0)){if(this._platform.IOS){let e=this._slider._isCursorOnSliderThumb(t,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=e,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(t,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(t),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(t){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(t)},0)}_fixValue(t){let e=t.clientX-this._slider._cachedLeft,o=this._slider._cachedWidth,r=this._slider.step===0?1:this._slider.step,a=Math.floor((this._slider.max-this._slider.min)/r),c=this._slider._isRtl()?1-e/o:e/o,p=Math.round(c*a)/a*(this._slider.max-this._slider.min)+this._slider.min,f=Math.round(p/r)*r,j=this.value;if(f===j){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});return}this.value=f,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation})}_onPointerMove(t){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(t)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(t){let e=this._tickMarkOffset,o=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(t,o),e)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(t){return t.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(t){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(t)}_updateThumbUIByPointerEvent(t,e){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(t)),this._updateThumbUI(e)}_updateThumbUI(t){this._slider._setTransition(!!t?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(t){(this._isControlInitialized||t!==null)&&(this.value=t)}registerOnChange(t){this._onChangeFn=t,this._isControlInitialized=!0}registerOnTouched(t){this._onTouchedFn=t}setDisabledState(t){this.disabled=t}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(e,o){e&1&&w("change",function(){return o._onChange()})("input",function(){return o._onInput()})("blur",function(){return o._onBlur()})("focus",function(){return o._onFocus()}),e&2&&y("aria-valuetext",o._valuetext())},inputs:{value:[2,"value","value",Rt]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[tt([Qp,{provide:Fd,useExisting:i}])]})}return i})();var Vd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[xe,Z]})}return i})();var cr=class i extends rt{languageFormFieldLabel=$localize`:Language form field label@@languageFormFieldLabel:Language`;layoutFormFieldLabel=$localize`:Layout form field label@@layoutFormFieldLabel:Layout`;soundSwitchLabel=$localize`:Sound enable/disable switch label@@soundSwitchLabel:Sound`;animationSwitchLabel=$localize`:Animation enable/disable switch label@@animationSwitchLabel:Animation`;missingTranslationLabel=$localize`:Missing translation label@@missingTranslationLabel:Missing translation`;settingsAmericanEnglishLanguageLabel=$localize`:American English language setting label@@settingsAmericanEnglishLanguageLabel:English`;settingsHungarianLanguageLabel=$localize`:Hungarian language setting label@@settingsHungarianLanguageLabel:Hungarian`;autoLayoutSettingLabel=$localize`:Auto layout setting label@@autoLayoutSettingLabel:Auto`;smartPhoneLayoutSettingLabel=$localize`:Smartphone layout setting label@@smartPhoneLayoutSettingLabel:Smartphone`;tabletLayoutSettingLabel=$localize`:Tabblet layout setting label@@tabletLayoutSettingLabel:Tablet`;desktopLayoutSettingLabel=$localize`:Desktop layout setting label@@desktopLayoutSettingLabel:Desktop`;resolveLanguageLabel(n){let t=this.missingTranslationLabel;switch(n){case"en-US":t=this.settingsAmericanEnglishLanguageLabel;break;case"hu-HU":t=this.settingsHungarianLanguageLabel;break}return t}resolveLayoutLabel(n){let t=this.missingTranslationLabel;switch(n){case"auto":t=this.autoLayoutSettingLabel;break;case"wide_portrait":t=this.smartPhoneLayoutSettingLabel;break;case"landscape":t=this.tabletLayoutSettingLabel;break;case"wide_landscape":t=this.desktopLayoutSettingLabel;break}return t}static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};function tf(i,n){if(i&1&&(l(0,"mat-option",3),h(1),m()),i&2){let t=n.$implicit,e=M();b("value",lt(t)),d(),D(e.translations.resolveLanguageLabel(t))}}function ef(i,n){if(i&1&&(l(0,"mat-option",3),h(1),m()),i&2){let t=n.$implicit,e=M();b("value",lt(t)),d(),D(e.translations.resolveLayoutLabel(t))}}var ii=class i{static DEFAULT_VOLUME=gt.DEFAULT_VOLUME;volumeIcon=R("volume_down");isDirty=we();isValid=we();currentSettings;isSaveInProgress;languages=[];layouts=[];form;languageFormControl;layoutFormcontrol;volumeFormcontrol;formValueChangeSubscription;translations=s(cr);settingsService=s(Rl);audioPlaybackService=s(wo);signals=s(gt);constructor(){this.currentSettings=this.signals.settings.toSignal(),this.isSaveInProgress=this.signals.isSettingsSaveInProgress.toSignal(),this.languageFormControl=new wn(this.currentSettings().language),this.layoutFormcontrol=new wn(this.currentSettings().layout),this.volumeFormcontrol=new wn(this.currentSettings().volume),this.updateVolumeIcon(this.currentSettings().volume),this.form=new yn({language:this.languageFormControl,layout:this.layoutFormcontrol,volume:this.volumeFormcontrol,audioEnabled:new wn(this.currentSettings().isAudioEnabled),animationEnabled:new wn(this.currentSettings().isAnimationEnabled)}),this.formValueChangeSubscription=this.form.valueChanges.subscribe(()=>{this.isDirty.emit(this.form.dirty),this.isValid.emit(this.form.valid)}),Object.values(yo).forEach(n=>{this.languages.push(n)}),this.layouts.push("auto"),this.layouts.push("wide_portrait"),this.layouts.push("landscape"),this.layouts.push("wide_landscape"),mt(()=>{this.isSaveInProgress()&&this.save()})}ngOnDestroy(){this.formValueChangeSubscription.unsubscribe()}onVolumeChanged(n){n===0?this.form.controls.audioEnabled.setValue(!1):this.form.controls.audioEnabled.setValue(!0),this.updateVolumeIcon(n),this.audioPlaybackService.testVolume(n)}onAudioSliderChanged(n){n.checked?this.volumeFormcontrol.setValue(i.DEFAULT_VOLUME):this.volumeFormcontrol.setValue(0)}save(){let n=this.form.controls.language.value,t=this.form.controls.layout.value,e=new Pl(n,t,this.form.controls.volume.value??i.DEFAULT_VOLUME,this.form.controls.audioEnabled.value,this.form.controls.animationEnabled.value);this.settingsService.update(e),this.form.controls.language.dirty&&this.signals.settingsNeedsReload.set(!0)}updateVolumeIcon(n){n===0?this.volumeIcon.update(()=>"no_sound"):n>50?this.volumeIcon.update(()=>"volume_up"):this.volumeIcon.update(()=>"volume_down")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-settings-form"]],outputs:{isDirty:"isDirty",isValid:"isValid"},decls:31,vars:9,consts:[[1,"settings-form",3,"formGroup"],["floatLabel","always","subscriptSizing","dynamic",1,"full-width"],[1,"language-select",3,"formControl"],[3,"value"],[1,"layout-select",3,"formControl"],[1,"settings-form-field-container"],[1,"settings-slide-form-field","full-width"],[1,"settings-form-label"],["aria-hidden","true"],["formControlName","audioEnabled",1,"audio-toggle",3,"change"],[1,"settings-volume-control-form-field","full-width"],["min","0","max","100","step","1"],["matSliderThumb","","value","25",3,"valueChange","formControl"],["formControlName","animationEnabled",1,"animation-toggle"]],template:function(t,e){t&1&&(l(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),h(3),m(),l(4,"mat-select",2),sn(5,tf,2,3,"mat-option",3,Ci),m(),Yt(),m(),l(7,"mat-form-field",1)(8,"mat-label"),h(9),m(),l(10,"mat-select",4),sn(11,ef,2,3,"mat-option",3,Ci),m(),Yt(),m(),l(13,"div",5)(14,"div",6)(15,"mat-label",7)(16,"mat-icon",8),h(17,"speaker"),m(),h(18),m(),l(19,"mat-slide-toggle",9),w("change",function(r){return e.onAudioSliderChanged(r)}),m(),Yt(),m(),l(20,"div",10)(21,"mat-icon",8),h(22),m(),l(23,"mat-slider",11)(24,"input",12),w("valueChange",function(r){return e.onVolumeChanged(r)}),m(),Yt(),m()()(),l(25,"div",6)(26,"mat-label",7)(27,"mat-icon",8),h(28,"animation"),m(),h(29),m(),A(30,"mat-slide-toggle",13),Yt(),m()()),t&2&&(b("formGroup",e.form),d(3),D(e.translations.languageFormFieldLabel),d(),b("formControl",e.languageFormControl),Qt(),d(),ln(e.languages),d(4),D(e.translations.layoutFormFieldLabel),d(),b("formControl",e.layoutFormcontrol),Qt(),d(),ln(e.layouts),d(7),et("",e.translations.soundSwitchLabel," "),d(),Qt(),d(3),D(e.volumeIcon()),d(2),b("formControl",e.volumeFormcontrol),Qt(),d(5),et("",e.translations.animationSwitchLabel," "),d(),Qt())},dependencies:[Re,Jn,xn,ar,St,Ft,Td,Id,ei,Rd,Qa,Vd,Nd,Ja,ld,ad,tr,od,rd,cd,Wa,Cn,ja],styles:[".settings-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1rem;height:100%}.settings-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%], .settings-form[_ngcontent-%COMP%]   .settings-form-field-container[_ngcontent-%COMP%]{width:100%}.settings-form[_ngcontent-%COMP%]   .settings-volume-control-form-field[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.settings-form[_ngcontent-%COMP%]   .settings-volume-control-form-field[_ngcontent-%COMP%]   .mat-mdc-slider[_ngcontent-%COMP%]{width:100%;flex-grow:2;margin-left:1rem}.settings-form[_ngcontent-%COMP%]   .settings-slide-form-field[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}.settings-form[_ngcontent-%COMP%]   .settings-form-label[_ngcontent-%COMP%]{display:flex;align-items:center}.settings-form[_ngcontent-%COMP%]   .settings-form-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.25rem}"]})};function nf(i,n){}var Qe=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var es=(()=>{class i extends He{_elementRef=s(E);_focusTrapFactory=s(Si);_config;_interactivityChecker=s(Fn);_ngZone=s(N);_focusMonitor=s(me);_renderer=s(ot);_changeDetectorRef=s(ht);_injector=s(z);_platform=s(Y);_document=s(nt);_portalOutlet;_focusTrapped=new C;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(Qe,{optional:!0})||new Qe,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),a(),t.removeAttribute("tabindex")},r=this._renderer.listen(t,"blur",o),a=this._renderer.listen(t,"mousedown",o)})),t.focus(e)}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,e)}_trapFocus(t){this._isDestroyed||Wt(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let o=Pn(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=Pn();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Pn()))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,o){if(e&1&&pt(Ge,7),e&2){let r;T(r=P())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,o){e&2&&y("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[X],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,o){e&1&&qt(0,nf,0,0,"ng-template",0)},dependencies:[Ge],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return i})(),eo=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new C;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,t){this.overlayRef=n,this.config=t,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!Vt(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(n,t){if(this._canClose(n)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(n),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",t=""){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(n,t,this.componentInstance))}},of=new _("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=s(z);return()=>Wn(i)}}),rf=new _("DialogData"),af=new _("DefaultDialogConfig");function sf(i){let n=R(i),t=new H;return{valueSignal:n,get value(){return n()},change:t,ngOnDestroy(){t.complete()}}}var Bd=(()=>{class i{_injector=s(z);_defaultOptions=s(af,{optional:!0});_parentDialog=s(i,{optional:!0,skipSelf:!0});_overlayContainer=s(Lo);_idGenerator=s(vt);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new C;_afterOpenedAtThisLevel=new C;_ariaHiddenElements=new Map;_scrollStrategy=s(of);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=En(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Bt(void 0)));open(t,e){let o=this._defaultOptions||new Qe;e=I(I({},o),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let r=this._getOverlayConfig(e),a=Ie(this._injector,r),c=new eo(a,e),u=this._attachContainer(a,c,e);if(c.containerInstance=u,!this.openDialogs.length){let p=this._overlayContainer.getContainerElement();u._focusTrapped?u._focusTrapped.pipe(Ct(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(p)}):this._hideNonDialogContentFromAssistiveTechnology(p)}return this._attachDialogContent(t,c,u,e),this.openDialogs.push(c),c.closed.subscribe(()=>this._removeOpenDialog(c,!0)),this.afterOpened.next(c),c}closeAll(){ts(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){ts(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),ts(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new ve({positionStrategy:t.positionStrategy||$e().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,o){let r=o.injector||o.viewContainerRef?.injector,a=[{provide:Qe,useValue:o},{provide:eo,useValue:e},{provide:Bn,useValue:t}],c;o.container?typeof o.container=="function"?c=o.container:(c=o.container.type,a.push(...o.container.providers(o))):c=es;let u=new _e(c,o.viewContainerRef,z.create({parent:r||this._injector,providers:a}));return t.attach(u).instance}_attachDialogContent(t,e,o,r){if(t instanceof ye){let a=this._createInjector(r,e,o,void 0),c={$implicit:r.data,dialogRef:e};r.templateContext&&(c=I(I({},c),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new be(t,null,c,a))}else{let a=this._createInjector(r,e,o,this._injector),c=o.attachComponentPortal(new _e(t,r.viewContainerRef,a,null,r.bindings));e.componentRef=c,e.componentInstance=c.instance}}_createInjector(t,e,o,r){let a=t.injector||t.viewContainerRef?.injector,c=[{provide:rf,useValue:t.data},{provide:eo,useValue:e}];return t.providers&&(typeof t.providers=="function"?c.push(...t.providers(e,t,o)):c.push(...t.providers)),t.direction&&(!a||!a.get(Nt,null,{optional:!0}))&&c.push({provide:Nt,useValue:sf(t.direction)}),z.create({parent:a||r,providers:c})}_removeOpenDialog(t,e){let o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let o=e.length-1;o>-1;o--){let r=e[o];r!==t&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();function ts(i,n){let t=i.length;for(;t--;)n(i[t])}function lf(i,n){}var mr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},ns="mdc-dialog--open",zd="mdc-dialog--opening",Wd="mdc-dialog--closing",cf=150,df=75,mf=(()=>{class i extends es{_animationStateChanged=new H;_animationsEnabled=!ct();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Ud(this._config.enterAnimationDuration)??cf:0;_exitAnimationDuration=this._animationsEnabled?Ud(this._config.exitAnimationDuration)??df:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(jd,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(zd,ns)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ns),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ns),this._animationsEnabled?(this._hostElement.style.setProperty(jd,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Wd)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(zd,Wd)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,o){e&2&&(ce("id",o._config.id),y("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),S("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[X],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,o){e&1&&(l(0,"div",0)(1,"div",1),qt(2,lf,0,0,"ng-template",2),m()())},dependencies:[Ge],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return i})(),jd="--mat-dialog-transition-duration";function Ud(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?oe(i.substring(0,i.length-2)):i.endsWith("s")?oe(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var dr=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(dr||{}),no=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new bi(1);_beforeClosed=new bi(1);_result;_closeFallbackTimeout;_state=dr.OPEN;_closeInteractionType;constructor(n,t,e){this._ref=n,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(J(o=>o.state==="opened"),Ct(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(J(o=>o.state==="closed"),Ct(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ut(this.backdropClick(),this.keydownEvents().pipe(J(o=>o.keyCode===27&&!this.disableClose&&!Vt(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),uf(this,o.type==="keydown"?"keyboard":"mouse"))})}close(n){let t=this._config.closePredicate;t&&!t(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(J(e=>e.state==="closing"),Ct(1)).subscribe(e=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=dr.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=dr.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function uf(i,n,t){return i._closeInteractionType=n,i.close(t)}var hf=new _("MatMdcDialogData"),pf=new _("mat-mdc-dialog-default-options"),ff=new _("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(z);return()=>Wn(i)}}),ur=(()=>{class i{_defaultOptions=s(pf,{optional:!0});_scrollStrategy=s(ff);_parentDialog=s(i,{optional:!0,skipSelf:!0});_idGenerator=s(vt);_injector=s(z);_dialog=s(Bd);_animationsDisabled=ct();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new C;_afterOpenedAtThisLevel=new C;dialogConfigClass=mr;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=En(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Bt(void 0)));constructor(){this._dialogRefConstructor=no,this._dialogContainerType=mf,this._dialogDataToken=hf}open(t,e){let o;e=I(I({},this._defaultOptions||new mr),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(t,Mt(I({},e),{positionStrategy:$e(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:Qe,useValue:e}]},templateContext:()=>({dialogRef:o}),providers:(a,c,u)=>(o=new this._dialogRefConstructor(a,e,u),o.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:u},{provide:this._dialogDataToken,useValue:c.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(o);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac})}return i})();var Hd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[dl([qe])]})}return i})();var Ze=class i{overlays={};router=s(Ue);overlay=s(No);matDialogService=s(ur);signals=s(gt);constructor(){}openDialog(n,t){if(this.signals.isSmartPhone.value())this.router.navigate([t]);else{let e={maxWidth:"inherit"},o=this.matDialogService.open(n,e)}}toggleOverlay(n,t,e){if(this.signals.isSmartPhone.value())this.router.navigate([t]);else if(this.overlays[n.toString()])this.closeOverlay(n);else{let o={panelClass:"overlay-container",hasBackdrop:!0,backdropClass:"overlay-container-backdrop",positionStrategy:this.overlay.position().flexibleConnectedTo(e).withPositions([{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top",offsetY:5}]).withPush(!1)},r=this.overlay.create(o),a=new _e(n);r.attach(a),r.backdropClick().pipe(Ct(1)).subscribe(()=>{this.closeOverlay(n)}),this.overlays[n.toString()]=r}}closeOverlay(n){this.overlays[n.toString()]&&(this.overlays[n.toString()].detach(),delete this.overlays[n.toString()])}static \u0275fac=function(t){return new(t||i)};static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var hr=class i{isFormValid=R(!0);isSaveInProgress=!1;translations=s(Uo);dialogService=s(Ze);signals=s(gt);constructor(){mt(()=>{let n=this.signals.isSettingsSaveInProgress.toSignal();this.isSaveInProgress&&!n()?this.dialogService.closeOverlay(i):this.isSaveInProgress=n()})}setValid(n){this.isFormValid.set(n)}onSaveClicked(){this.signals.isSettingsSaveInProgress.set(!0)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-settings-dialog"]],decls:5,vars:5,consts:[[1,"settings-dialog-content"],[3,"isValid"],[1,"settings-dialog-footer"],["matButton","filled",1,"save-settings-button",3,"click","title","disabled"]],template:function(t,e){t&1&&(l(0,"section",0)(1,"tbt-settings-form",1),w("isValid",function(r){return e.setValid(r)}),m()(),l(2,"footer",2)(3,"button",3),w("click",function(){return e.onSaveClicked()}),h(4),m()()),t&2&&(d(3),b("title",lt(e.translations.saveSettingsButtonLabel))("disabled",!e.isFormValid()),y("aria-label",e.translations.saveSettingsButtonLabel),d(),et(" ",e.translations.saveSettingsButtonLabel," "))},dependencies:[xt,ke,ii],styles:[".settings-dialog-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding-top:1rem}"]})};var gf=["settingsButton"];function _f(i,n){if(i&1){let t=Lt();l(0,"button",17),w("click",function(){_t(t);let o=M(2);return bt(o.onStartButtonClicked())}),l(1,"mat-icon",18),h(2,"play_arrow"),m()()}if(i&2){let t=M(2);b("title",lt(t.translations.startWorkoutButtonDescriptionLabel)),y("aria-label",t.translations.startWorkoutButtonDescriptionLabel)}}function bf(i,n){if(i&1){let t=Lt();l(0,"button",19),w("click",function(){_t(t);let o=M(2);return bt(o.onStartButtonClicked())}),l(1,"mat-icon",18),h(2,"play_arrow"),m(),h(3),m()}if(i&2){let t=M(2);b("title",lt(t.translations.startWorkoutButtonDescriptionLabel)),y("aria-label",t.translations.startWorkoutButtonDescriptionLabel),d(3),et(" ",t.translations.startWorkoutButtonLabel," ")}}function vf(i,n){if(i&1&&F(0,_f,3,3,"button",15)(1,bf,4,4,"button",16),i&2){let t=M();L(t.isSmartPhone()?0:1)}}function yf(i,n){if(i&1){let t=Lt();l(0,"button",20),w("click",function(){_t(t);let o=M();return bt(o.onEditMenuItemClicked())}),l(1,"mat-icon",21),h(2,"edit"),m(),l(3,"span"),h(4),m()(),l(5,"button",22),w("click",function(){_t(t);let o=M();return bt(o.onDeleteMenuItemClicked())}),l(6,"mat-icon",23),h(7,"delete"),m(),l(8,"span"),h(9),m()()}if(i&2){let t=M();b("title",lt(t.translations.editWorkoutIconButtonDescriptionLabel)),y("aria-label",t.translations.editWorkoutIconButtonDescriptionLabel),d(4),D(t.translations.editWorkoutIconButtonLabel),d(),b("title",lt(t.translations.deleteWorkoutIconButtonDescriptionLabel)),y("aria-label",t.translations.deleteWorkoutIconButtonDescriptionLabel),d(4),D(t.translations.deleteWorkoutIconButtonLabel)}}var pr=class i{onNavigationMenuToggle=we();onSideSheetToggle=we();isSmartPhone;selectedWorkout;isModificationAllowed=v(()=>!!this.selectedWorkout());title=v(()=>this.selectedWorkout()?.name?this.selectedWorkout().name:this.translations.applicationName);settingsButton=Ce.required("settingsButton",{read:E});translations=s(jo);router=s(Ue);dialogService=s(Ze);snackBarService=s(Dc);workoutConfigurationService=s(yt);signals=s(gt);constructor(){this.isSmartPhone=this.signals.isSmartPhone.toSignal(),this.selectedWorkout=this.signals.selectedWorkout.toSignal()}onNavigationMenuClicked(){this.onNavigationMenuToggle.emit()}onNewMenuItemClicked(){this.onSideSheetToggle.emit(!0)}onEditMenuItemClicked(){this.onSideSheetToggle.emit(!1)}onDeleteMenuItemClicked(){this.workoutConfigurationService.deleteCurrentWorkout(),this.snackBarService.open(this.translations.workoutDeletedLabel,this.translations.restoreWorkoutButtonLabel,{duration:5e3}).onAction().subscribe(()=>{this.workoutConfigurationService.restoreLastDeletedWorkout()})}onSettingsButtonClicked(){this.dialogService.toggleOverlay(hr,"/settings",this.settingsButton())}onStartButtonClicked(){this.workoutConfigurationService.saveCurrentWorkoutSession(),this.router.navigateByUrl("/timer")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-workout-launcher-nav-bar"]],viewQuery:function(t,e){t&1&&An(e.settingsButton,gf,5,E),t&2&&cn()},outputs:{onNavigationMenuToggle:"onNavigationMenuToggle",onSideSheetToggle:"onSideSheetToggle"},decls:24,vars:19,consts:[["settingsButton",""],["moreMenu","matMenu"],[1,"workout-launcher-navbar"],["mat-icon-button","",1,"nav-menu-button",3,"click","title"],["aria-hidden","true",1,"nav-menu-icon"],[1,"navbar-title",3,"title"],[1,"toolbar-spacer"],[1,"action-icons"],["mat-icon-button","",1,"settings-button",3,"click","title"],["aria-hidden","true",1,"settings-icon"],["mat-icon-button","",1,"more-menu-button",3,"matMenuTriggerFor","title"],["aria-hidden","true",1,"more-menu-icon"],[1,"more-menu"],["mat-menu-item","",1,"new-workout-menu-item",3,"click","title"],["aria-hidden","true",1,"new-workout-icon"],["mat-icon-button","",1,"start-workout-button",3,"title"],["matButton","filled",1,"workout-launcher","start-workout-button","filled",3,"title"],["mat-icon-button","",1,"start-workout-button",3,"click","title"],["aria-hidden","true",1,"start-workout-icon"],["matButton","filled",1,"workout-launcher","start-workout-button","filled",3,"click","title"],["mat-menu-item","",1,"edit-workout-menu-item",3,"click","title"],["aria-hidden","true",1,"edit-workout-icon"],["mat-menu-item","",1,"delete-workout-menu-item",3,"click","title"],["aria-hidden","true",1,"delete-workout-icon"]],template:function(t,e){if(t&1&&(l(0,"mat-toolbar",2)(1,"button",3),w("click",function(){return e.onNavigationMenuClicked()}),l(2,"mat-icon",4),h(3,"menu"),m()(),l(4,"span",5),h(5),m(),A(6,"span",6),l(7,"span",7),F(8,vf,2,1),l(9,"button",8,0),w("click",function(){return e.onSettingsButtonClicked()}),l(11,"mat-icon",9),h(12,"settings"),m()(),l(13,"button",10)(14,"mat-icon",11),h(15,"more_vert"),m()(),l(16,"mat-menu",12,1)(18,"button",13),w("click",function(){return e.onNewMenuItemClicked()}),l(19,"mat-icon",14),h(20,"add"),m(),l(21,"span"),h(22),m()(),F(23,yf,10,8),m()()()),t&2){let o=de(17);d(),b("title",lt(e.translations.navigationDrawerButtonLabel)),y("aria-label",e.translations.navigationDrawerButtonLabelDescriptionLabel),d(3),b("title",lt(e.title())),d(),D(e.title()),d(3),L(e.isModificationAllowed()?8:-1),d(),b("title",lt(e.translations.settingsIconButtonDescriptionLabel)),y("aria-label",e.translations.settingsIconButtonDescriptionLabel),d(4),b("title",lt(e.translations.moreMenuDescriptionLabel))("matMenuTriggerFor",o),y("aria-label",e.translations.moreMenuDescriptionLabel),d(5),b("title",lt(e.translations.newWorkoutIconButtonDescriptionLabel)),y("aria-label",e.translations.newWorkoutIconButtonDescriptionLabel),d(4),D(e.translations.newWorkoutIconButtonLabel),d(),L(e.isModificationAllowed()?23:-1)}},dependencies:[Wo,zo,St,Ft,qn,Un,ji,Sc,xt,ke,Xt],styles:[".workout-launcher-navbar[_ngcontent-%COMP%]{color:var(--mat-sys-on-tertiary-container);background-color:transparent}.workout-launcher-navbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.wide-portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.wide-portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{gap:.5rem}"]})};var fr=["*"],wf=["content"],qd=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],$d=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function Cf(i,n){if(i&1){let t=Lt();l(0,"div",1),w("click",function(){_t(t);let o=M();return bt(o._onBackdropClicked())}),m()}if(i&2){let t=M();S("mat-drawer-shown",t._isShowingBackdrop())}}function xf(i,n){i&1&&(l(0,"mat-drawer-content"),k(1,2),m())}function kf(i,n){if(i&1){let t=Lt();l(0,"div",1),w("click",function(){_t(t);let o=M();return bt(o._onBackdropClicked())}),m()}if(i&2){let t=M();S("mat-drawer-shown",t._isShowingBackdrop())}}function Mf(i,n){i&1&&(l(0,"mat-sidenav-content"),k(1,2),m())}var Sf=`.mat-drawer-container {
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
`;var Of=new _("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),rs=new _("MAT_DRAWER_CONTAINER"),kn=(()=>{class i extends qe{_platform=s(Y);_changeDetectorRef=s(ht);_element=s(E);_ngZone=s(N);_isInert=!1;_container=s(os);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(nl(50),Ct(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute("inert","true"):e.removeAttribute("inert")}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,o){e&2&&(ie("margin-left",o._container._contentMargins.left,"px")("margin-right",o._container._contentMargins.right,"px"),S("mat-drawer-content-hidden",o._shouldBeHidden()))},features:[tt([{provide:qe,useExisting:i}]),X],ngContentSelectors:fr,decls:1,vars:0,template:function(e,o){e&1&&(K(),k(0))},encapsulation:2})}return i})(),is=(()=>{class i{_elementRef=s(E);_focusTrapFactory=s(Si);_focusMonitor=s(me);_platform=s(Y);_ngZone=s(N);_renderer=s(ot);_interactivityChecker=s(Fn);_doc=s(nt);_container=s(rs,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=Ot(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=Ot(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(Ot(t))}_opened=R(!1);_openedVia=null;_animationStarted=new C;_animationEnd=new C;openedChange=new H(!0);_openedStream=this.openedChange.pipe(J(t=>t),Et(()=>{}));openedStart=this._animationStarted.pipe(J(()=>this.opened),Jr(void 0));_closedStream=this.openedChange.pipe(J(t=>!t),Et(()=>{}));closedStart=this._animationStarted.pipe(J(()=>!this.opened),Jr(void 0));_destroyed=new C;onPositionChanged=new H;_content;_modeChanged=new C;_injector=s(z);_changeDetectorRef=s(ht);constructor(){this.openedChange.pipe(st(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",o=>{o.keyCode===27&&!this.disableClose&&!Vt(o)&&this._ngZone.run(()=>{this.close(),o.stopPropagation(),o.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,e){let o=this._elementRef.nativeElement.querySelector(t);o&&(this._interactivityChecker.isFocusable(o)||(o.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),c(),o.removeAttribute("tabindex")},a=this._renderer.listen(o,"blur",r),c=this._renderer.listen(o,"mousedown",r)})),o.focus(e))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Wt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let o=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),o}_setOpen(t,e,o){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),(this._container?._content||this._container?._userContent)?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(o),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(Ct(1)).subscribe(a=>r(a?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,o=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),o.insertBefore(this._anchor,e)),o.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,o){if(e&1&&pt(wf,5),e&2){let r;T(r=P())&&(o._content=r.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,o){e&2&&(y("align",null)("tabIndex",o.mode!=="side"?"-1":null),ie("visibility",!o._container&&!o.opened?"hidden":null),S("mat-drawer-end",o.position==="end")("mat-drawer-over",o.mode==="over")("mat-drawer-push",o.mode==="push")("mat-drawer-side",o.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:fr,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,o){e&1&&(K(),l(0,"div",1,0),k(2),m())},dependencies:[qe],encapsulation:2})}return i})(),os=(()=>{class i{_dir=s(Nt,{optional:!0});_element=s(E);_ngZone=s(N);_changeDetectorRef=s(ht);_animationDisabled=ct();_transitionsEnabled=!1;_allDrawers;_drawers=new rn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=Ot(t)}_autosize=s(Of);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:Ot(t)}_backdropOverride=null;backdropClick=new H;_start=null;_end=null;_left=null;_right=null;_destroyed=new C;_doCheckSubject=new C;_contentMargins={left:null,right:null};_contentMarginChanges=new C;get scrollable(){return this._userContent||this._content}_injector=s(z);constructor(){let t=s(Y),e=s(Me);this._dir?.change.pipe(st(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(st(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Bt(this._allDrawers),st(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Bt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Dn(10),st(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let o=this._left._getWidth();t+=o,e-=o}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let o=this._right._getWidth();e+=o,t-=o}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(st(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(st(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(st(this._drawers.changes)).subscribe(()=>{Wt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(st(Ut(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,o="mat-drawer-container-has-open";t?e.add(o):e.remove(o)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,o,r){if(e&1&&Gt(r,kn,5)(r,is,5),e&2){let a;T(a=P())&&(o._content=a.first),T(a=P())&&(o._allDrawers=a)}},viewQuery:function(e,o){if(e&1&&pt(kn,5),e&2){let r;T(r=P())&&(o._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,o){e&2&&S("mat-drawer-container-explicit-backdrop",o._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[tt([{provide:rs,useExisting:i}])],ngContentSelectors:$d,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,o){e&1&&(K(qd),F(0,Cf,1,2,"div",0),k(1),k(2,1),F(3,xf,2,0,"mat-drawer-content")),e&2&&(L(o.hasBackdrop?0:-1),d(3),L(o._content?-1:3))},dependencies:[kn],styles:[`.mat-drawer-container {
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
`],encapsulation:2})}return i})(),Gd=(()=>{class i extends kn{static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[tt([{provide:qe,useExisting:i},{provide:kn,useExisting:i}]),X],ngContentSelectors:fr,decls:1,vars:0,template:function(e,o){e&1&&(K(),k(0))},encapsulation:2})}return i})(),as=(()=>{class i extends is{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=Ot(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=oe(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=oe(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,o){e&2&&(y("tabIndex",o.mode!=="side"?"-1":null)("align",null),ie("top",o.fixedInViewport?o.fixedTopGap:null,"px")("bottom",o.fixedInViewport?o.fixedBottomGap:null,"px"),S("mat-drawer-end",o.position==="end")("mat-drawer-over",o.mode==="over")("mat-drawer-push",o.mode==="push")("mat-drawer-side",o.mode==="side")("mat-sidenav-fixed",o.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[tt([{provide:is,useExisting:i}]),X],ngContentSelectors:fr,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,o){e&1&&(K(),l(0,"div",1,0),k(2),m())},dependencies:[qe],encapsulation:2})}return i})(),Kd=(()=>{class i extends os{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,o,r){if(e&1&&Gt(r,Gd,5)(r,as,5),e&2){let a;T(a=P())&&(o._content=a.first),T(a=P())&&(o._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,o){e&2&&S("mat-drawer-container-explicit-backdrop",o._backdropOverride)},exportAs:["matSidenavContainer"],features:[tt([{provide:rs,useExisting:i},{provide:os,useExisting:i}]),X],ngContentSelectors:$d,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,o){e&1&&(K(qd),F(0,kf,1,2,"div",0),k(1),k(2,1),F(3,Mf,2,0,"mat-sidenav-content")),e&2&&(L(o.hasBackdrop?0:-1),d(3),L(o._content?-1:3))},dependencies:[Gd],styles:[Sf],encapsulation:2})}return i})(),Xd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[De,Z,De]})}return i})();var ss=(()=>{class i{get vertical(){return this._vertical}set vertical(t){this._vertical=Ot(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=Ot(t)}_inset=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,o){e&2&&(y("aria-orientation",o.vertical?"vertical":"horizontal"),S("mat-divider-vertical",o.vertical)("mat-divider-horizontal",!o.vertical)("mat-divider-inset",o.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,o){},styles:[`.mat-divider {
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
`],encapsulation:2})}return i})(),Yd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[Z]})}return i})();var Qd=["*"],Zd=`.mdc-list {
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
`,Df=["unscopedContent"],Af=["text"],If=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Tf=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Pf=new _("ListOption"),ls=(()=>{class i{_elementRef=s(E);static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Rf=(()=>{class i{_elementRef=s(E);static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),Ff=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),Jd=(()=>{class i{_listOption=s(Pf,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,hostVars:4,hostBindings:function(e,o){e&2&&S("mdc-list-item__start",o._isAlignedAtStart())("mdc-list-item__end",!o._isAlignedAtStart())}})}return i})(),Lf=(()=>{class i extends Jd{static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275dir=O({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[X]})}return i})(),cs=(()=>{class i extends Jd{static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275dir=O({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[X]})}return i})(),Nf=new _("MAT_LIST_CONFIG"),io=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Ot(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(Ot(t))}_disabled=R(!1);_defaultOptions=s(Nf,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,hostVars:1,hostBindings:function(e,o){e&2&&y("aria-disabled",o.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),Vf=(()=>{class i{_elementRef=s(E);_ngZone=s(N);_listBase=s(io,{optional:!0});_platform=s(Y);_hostElement;_isButtonElement;_noopAnimations=ct();_avatars;_icons;set lines(t){this._explicitLines=oe(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=Ot(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(Ot(t))}_disabled=R(!1);_subscriptions=new Pt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){s(It).load(ue);let t=s(gn,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new fn(this,this._ngZone,this._hostElement,this._platform,s(z)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ut(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),o=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&e===1;o.classList.toggle("mdc-list-item__primary-text",r),o.classList.toggle("mdc-list-item__secondary-text",!r)}else o.classList.remove("mdc-list-item__primary-text"),o.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,contentQueries:function(e,o,r){if(e&1&&Gt(r,Lf,4)(r,cs,4),e&2){let a;T(a=P())&&(o._avatars=a),T(a=P())&&(o._icons=a)}},hostVars:4,hostBindings:function(e,o){e&2&&(y("aria-disabled",o.disabled)("disabled",o._isButtonElement&&o.disabled||null),S("mdc-list-item--disabled",o.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var tm=(()=>{class i extends io{static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[tt([{provide:io,useExisting:i}]),X],ngContentSelectors:Qd,decls:1,vars:0,template:function(e,o){e&1&&(K(),k(0))},styles:[Zd],encapsulation:2})}return i})(),gr=(()=>{class i extends Vf{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=Ot(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,o,r){if(e&1&&Gt(r,Rf,5)(r,ls,5)(r,Ff,5),e&2){let a;T(a=P())&&(o._lines=a),T(a=P())&&(o._titles=a),T(a=P())&&(o._meta=a)}},viewQuery:function(e,o){if(e&1&&pt(Df,5)(Af,5),e&2){let r;T(r=P())&&(o._unscopedContent=r.first),T(r=P())&&(o._itemText=r.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,o){e&2&&(y("aria-current",o._getAriaCurrent()),S("mdc-list-item--activated",o.activated)("mdc-list-item--with-leading-avatar",o._avatars.length!==0)("mdc-list-item--with-leading-icon",o._icons.length!==0)("mdc-list-item--with-trailing-meta",o._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",o._hasBothLeadingAndTrailing())("_mat-animation-noopable",o._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[X],ngContentSelectors:Tf,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,o){e&1&&(K(If),k(0),l(1,"span",1),k(2,1),k(3,2),l(4,"span",2,0),w("cdkObserveContent",function(){return o._updateItemLines(!0)}),k(6,3),m()(),k(7,4),k(8,5),A(9,"div",3))},dependencies:[Gl],encapsulation:2})}return i})();var em=(()=>{class i extends io{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275cmp=g({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[tt([{provide:io,useExisting:i}]),X],ngContentSelectors:Qd,decls:1,vars:0,template:function(e,o){e&1&&(K(),k(0))},styles:[Zd],encapsulation:2})}return i})();var _r=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[xo,xe,sr,Z,Yd]})}return i})();var Bf=["determinateSpinner"];function zf(i,n){if(i&1&&(le(),l(0,"svg",11),A(1,"circle",12),m()),i&2){let t=M();y("viewBox",t._viewBox()),d(),ie("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeCircumference()/2,"px")("stroke-width",t._circleStrokeWidth(),"%"),y("r",t._circleRadius())}}var Wf=new _("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:im})}),im=100,jf=10,om=(()=>{class i{_elementRef=s(E);_noopAnimations;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";_determinateCircle;constructor(){let t=s(Wf),e=fa(),o=this._elementRef.nativeElement;this._noopAnimations=e==="di-disabled"&&!!t&&!t._forceAnimations,this.mode=o.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&e==="reduced-motion"&&o.classList.add("mat-progress-spinner-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}_value=0;get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}_diameter=im;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_strokeWidth;_circleRadius(){return(this.diameter-jf)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(e,o){if(e&1&&pt(Bf,5),e&2){let r;T(r=P())&&(o._determinateCircle=r.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(e,o){e&2&&(y("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),ft("mat-"+o.color),ie("width",o.diameter,"px")("height",o.diameter,"px")("--mat-progress-spinner-size",o.diameter+"px")("--mat-progress-spinner-active-indicator-width",o.diameter+"px"),S("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Rt],diameter:[2,"diameter","diameter",Rt],strokeWidth:[2,"strokeWidth","strokeWidth",Rt]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(e,o){if(e&1&&(qt(0,zf,2,8,"ng-template",null,0,xi),l(2,"div",2,1),le(),l(4,"svg",3),A(5,"circle",4),m()(),ra(),l(6,"div",5)(7,"div",6)(8,"div",7),po(9,8),m(),l(10,"div",9),po(11,8),m(),l(12,"div",10),po(13,8),m()()()),e&2){let r=de(1);d(4),y("viewBox",o._viewBox()),d(),ie("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),y("r",o._circleRadius()),d(4),b("ngTemplateOutlet",r),d(2),b("ngTemplateOutlet",r),d(2),b("ngTemplateOutlet",r)}},dependencies:[go],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return i})();var rm=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[Z]})}return i})();var ds=0;function Hf(){return ds}function Je(i,n){return(...t)=>{try{return ds=n,i(...t)}finally{ds=0}}}function Gf(i){return!i}function am(i){return i}function tn(i){return Array.isArray(i)}function vr(i){return(typeof i=="object"||typeof i=="function")&&i!=null}var Mn=Symbol(),Or=Symbol(),ro=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(sm(this.predicates,n))}mergeIn(n){let t=this.predicates?n.fns.map(e=>sm(this.predicates,e)):n.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}},yr=class extends ro{get defaultValue(){return!1}compute(n){return this.fns.some(t=>{let e=t(n);return e&&e!==Or})}},ri=class i extends ro{ignore;static ignoreNull(n){return new i(n,t=>t===null)}constructor(n,t){super(n),this.ignore=t}get defaultValue(){return[]}compute(n){return this.fns.reduce((t,e)=>{let o=e(n);return o===void 0||o===Or?t:tn(o)?[...t,...this.ignore?o.filter(r=>!this.ignore(r)):o]:this.ignore&&this.ignore(o)?t:[...t,o]},[])}},ms=class extends ri{constructor(n){super(n,void 0)}},us=class extends ro{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,t){super(n),this.key=t}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let e=0;e<this.fns.length;e++){let o=this.fns[e](n);o!==Or&&(t=this.key.reducer.reduce(t,o))}return t}};function sm(i,n){return i.length===0?n:t=>{for(let e of i){let o=t.stateOf(e.path),r=G(o.structure.pathKeys).length-e.depth;for(let a=0;a<r;a++)o=o.structure.parent;if(!e.fn(o.context))return Or}return n(t)}}var ai=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new yr(n),this.disabledReasons=new ms(n),this.readonly=new yr(n),this.syncErrors=ri.ignoreNull(n),this.syncTreeErrors=ri.ignoreNull(n),this.asyncErrors=ri.ignoreNull(n)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(n){return this.metadata.has(n)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new us(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let t of n.getMetadataKeys()){let e=n.metadata.get(t);this.getMetadata(t).mergeIn(e)}}},wr=class{depth;constructor(n){this.depth=n}build(){return new Cr(this,[],0)}},si=class i extends wr{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,t){this.getCurrent().addMetadataRule(n,t)}getChild(n){if(n===Mn){let t=this.getCurrent().children;t.size>(t.has(Mn)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:t})=>t.hasLogic(n))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:n})=>n.anyChildHasLogic())}mergeIn(n,t){t?this.all.push({builder:n,predicate:{fn:Je(t.fn,this.depth),path:t.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new ao(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}},ao=class extends wr{logic=new ai([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(Je(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(Je(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(Je(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(Je(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(Je(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(Je(n,this.depth))}addMetadataRule(n,t){this.logic.getMetadata(n).push(Je(t,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new si(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let n of this.children.values())if(n.hasRules())return!0;return!1}},Cr=class i{builder;predicates;depth;logic;constructor(n,t,e){this.builder=n,this.predicates=t,this.depth=e,this.logic=n?qf(n,t,e):new ai([])}getChild(n){let t=this.builder?dm(this.builder,n):[];if(t.length===0)return new i(void 0,[],this.depth+1);if(t.length===1){let{builder:e,predicates:o}=t[0];return new i(e,[...this.predicates,...o.map(r=>ps(r,this.depth))],this.depth+1)}else{let e=t.map(({builder:o,predicates:r})=>new i(o,[...this.predicates,...r.map(a=>ps(a,this.depth))],this.depth+1));return new hs(e)}}hasLogic(n){return this.builder?this.builder.hasLogic(n):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}},hs=class i{all;logic;constructor(n){this.all=n,this.logic=new ai([]);for(let t of n)this.logic.mergeIn(t.logic)}getChild(n){return new i(this.all.flatMap(t=>t.getChild(n)))}hasLogic(n){return this.all.some(t=>t.hasLogic(n))}hasRules(){return this.all.some(n=>n.hasRules())}anyChildHasLogic(){return this.all.some(n=>n.anyChildHasLogic())}};function dm(i,n){if(i instanceof si)return i.all.flatMap(({builder:t,predicate:e})=>{let o=dm(t,n);return e?o.map(({builder:r,predicates:a})=>({builder:r,predicates:[...a,e]})):o});if(i instanceof ao)return[...n!==Mn&&i.children.has(Mn)?[{builder:i.getChild(Mn),predicates:[]}]:[],...i.children.has(n)?[{builder:i.getChild(n),predicates:[]}]:[]];throw new dt(1909,!1)}function qf(i,n,t){let e=new ai(n);if(i instanceof si){let o=i.all.map(({builder:r,predicate:a})=>new Cr(r,a?[...n,ps(a,t)]:n,t));for(let r of o)e.mergeIn(r.logic)}else if(i instanceof ao)e.mergeIn(i.logic);else throw new dt(1909,!1);return e}function ps(i,n){return Mt(I({},i),{depth:n})}var mm=Symbol("PATH"),Le=class i{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,$f);logicBuilder;constructor(n,t,e,o){this.keys=n,this.parent=e,this.keyInParent=o,this.root=t??this,e||(this.logicBuilder=si.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new i([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,t){let e=n.compile();this.builder.mergeIn(e.builder,t)}static unwrapFieldPath(n){return n[mm]}static newRoot(){return new i([],void 0,void 0,void 0)}},$f={get(i,n){return n===mm?i:i.getChild(n).fieldPathProxy}},br,oo=new Map,xr=class i{schemaFn;constructor(n){this.schemaFn=n}compile(){if(oo.has(this))return oo.get(this);let n=Le.newRoot();oo.set(this,n);let t=br;try{br=n,this.schemaFn(n.fieldPathProxy)}finally{br=t}return n}static create(n){return n instanceof i?n:new i(n)}static rootCompile(n){try{return oo.clear(),n===void 0?Le.newRoot():n instanceof i?n.compile():new i(n).compile()}finally{oo.clear()}}};function Kf(i){return i instanceof xr||typeof i=="function"}function Ms(i){if(br!==Le.unwrapFieldPath(i).root)throw new dt(1908,!1)}function Ne(i,n,t){return Ms(i),Le.unwrapFieldPath(i).builder.addMetadataRule(n,t),n}var en={list(){return{reduce:(i,n)=>n===void 0?i:[...i,n],getInitial:()=>[]}},min(){return{reduce:(i,n)=>i===void 0||n===void 0?i??n:n<i?n:i,getInitial:()=>{}}},max(){return{reduce:(i,n)=>i===void 0||n===void 0?i??n:n>i?n:i,getInitial:()=>{}}},or(){return{reduce:(i,n)=>i||n,getInitial:()=>!1}},and(){return{reduce:(i,n)=>i&&n,getInitial:()=>!0}},override:Xf};function Xf(i){return{reduce:(n,t)=>t,getInitial:()=>i?.()}}var Ss=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),kr=class{reducer;create;brand;[Ss];constructor(n,t){this.reducer=n,this.create=t}};function he(i){return new kr(i??en.override())}function Os(){return he()}var Es=he(en.or()),Ds=Os();var As=he(en.max()),Is=Os();var Ts=he(en.min()),um=he(en.max()),hm=he(en.min()),pm=he(en.list());function re(i,n){if(i===n)return!0;if(!i||!n||i.length!==n.length)return!1;for(let t=0;t<i.length;t++)if(!Object.is(i[t],n[t]))return!1;return!0}function Yf(i){return i.errors().length>0?"invalid":i.pending()?"unknown":"valid"}var fs=class{node;constructor(n){this.node=n}rawSyncTreeErrors=v(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:re});syncErrors=v(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Qf(this.node.submitState.submissionErrors())],{equal:re});syncValid=v(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,t)=>t&&n.validationState.syncValid(),Gf));syncTreeErrors=v(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree),{equal:re});rawAsyncErrors=v(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:re});asyncErrors=v(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree),{equal:re});parseErrors=v(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()),{equal:re});errors=v(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")],{equal:re});errorSummary=v(()=>{let n=this.node.structure.reduceChildren(this.errors(),(t,e)=>[...e,...t.errorSummary()]);return G(()=>n.sort(Zf)),n},{equal:re});pending=v(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,t)=>t||n.validationState.asyncErrors().includes("pending")));status=v(()=>{if(this.shouldSkipValidation())return"valid";let n=Yf(this);return this.node.structure.reduceChildren(n,(t,e)=>e==="invalid"||t.validationState.status()==="invalid"?"invalid":e==="unknown"||t.validationState.status()==="unknown"?"unknown":"valid",t=>t==="invalid")});valid=v(()=>this.status()==="valid");invalid=v(()=>this.status()==="invalid");shouldSkipValidation=v(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Qf(i){return i===void 0?[]:tn(i)?i:[i]}function fm(i,n){if(tn(i))for(let t of i)t.fieldTree??=n;else i&&(i.fieldTree??=n);return i}function lm(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((n,t)=>!n||!t.element?n??t.element:n.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:n,void 0)}function Zf(i,n){let t=lm(i),e=lm(n);return t===e?0:t===void 0||e===void 0?t===void 0?1:-1:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var gs=he(),_s=class{node;cache=new WeakMap;constructor(n){this.node=n,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(n){if(!this.cache.has(n)){let t=v(()=>{let e=Le.unwrapFieldPath(n),o=this.node,r=Hf();for(;r>0||!o.structure.logic.hasLogic(e.root.builder);)if(r--,o=o.structure.parent,o===void 0)throw new dt(1900,!1);for(let a of e.keys)if(o=o.structure.getChild(a),o===void 0)throw new dt(1901,!1);return o.fieldTree});this.cache.set(n,t)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=v(()=>{let n=this.key();if(!tn(G(this.node.structure.parent.value)))throw new dt(1906,!1);return Number(n)});fieldTreeOf(n){return this.resolve(n)}stateOf(n){return this.resolve(n)()}valueOf=n=>{let t=this.resolve(n)().value();if(t instanceof Zn)throw new dt(1907,!1);return t}},bs=class{node;metadata=new Map;constructor(n){this.node=n}runMetadataCreateLifecycle(){this.node.logicNode.logic.hasMetadataKeys()&&G(()=>vi(this.node.structure.injector,()=>{for(let n of this.node.logicNode.logic.getMetadataKeys())if(n.create){let t=this.node.logicNode.logic.getMetadata(n),e=n.create(this.node,v(()=>t.compute(this.node.context)));this.metadata.set(n,e)}}))}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new dt(1912,!1);let t=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,v(()=>t.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},Jf={get(i,n,t){let e=i(),o=e.structure.getChild(n);if(o!==void 0)return o.fieldTree;let r=G(e.value);if(tn(r)){if(n==="length")return e.value().length;if(n===Symbol.iterator)return()=>(e.value(),Array.prototype[Symbol.iterator].apply(e.fieldTree))}if(vr(r)&&n===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(i,n){let t=G(i().value),e=Reflect.getOwnPropertyDescriptor(t,n);return e&&!e.configurable&&(e.configurable=!0),e},ownKeys(i){let n=G(i().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function tg(i,n){let t=v(()=>i()[n()]);return t[Yr]=i[Yr],t.set=e=>{Object.is(G(t),e)||i.update(o=>eg(o,e,n()))},t.update=e=>{t.set(e(G(t)))},t.asReadonly=()=>t,t}function eg(i,n,t){if(tn(i)){let e=[...i];return e[t]=n,e}else return Mt(I({},i),{[t]:n})}var oi=Symbol(""),gm=v(()=>!1),Mr=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=z.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,t,e){this.logic=n,this.node=t,this.createChildNode=e}children(){this.ensureChildrenMap();let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(t=>G(t.reader))}materializedChildren(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return G(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||G(()=>{this.childrenMap.update(n=>this.computeChildrenMap(this.value(),n,!0))})}getChild(n){this.ensureChildrenMap();let t=n.toString(),e=G(this.childrenMap)?.byPropertyKey.get(t)?.reader;return e||(e=this.createReader(t)),e()}reduceChildren(n,t,e){let o=this.childrenMap();if(!o)return n;let r=n;for(let a of o.byPropertyKey.values()){if(e?.(r))break;r=t(G(a.reader),r)}return r}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(n,t,e){if(n==="root")return{keyInParent:_m,isOrphaned:gm};let o=this.parent,r=e,a=v(()=>{if(o.structure.isOrphaned())return oi;let p=o.structure.childrenMap();if(!p)return oi;let f=p.byPropertyKey.get(r);if(f&&f.node===this.node)return r;if(t===void 0)return oi;for(let[j,it]of p.byPropertyKey)if(it.node===this.node)return r=j;return oi}),c=v(()=>a()===oi);return{keyInParent:v(()=>{let p=a();if(p===oi)throw t===void 0?new dt(-1902,!1):new dt(1904,!1);return p}),isOrphaned:c}}createChildrenMap(){return mn({source:this.value,computation:(n,t)=>this.computeChildrenMap(n,t?.value,!1)})}computeChildrenMap(n,t,e){if(!vr(n)||!e&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let o,r=tn(n);t!==void 0&&(r?o=ig(t,n,this.identitySymbol):o=og(t,n));for(let a of Object.keys(n)){let c,u=n[a];if(u===void 0){t.byPropertyKey.has(a)&&(o??=I({},t),o.byPropertyKey.delete(a));continue}r&&vr(u)&&!tn(u)&&(c=u[this.identitySymbol]??=Symbol(""));let p;c&&(t.byTrackingKey?.has(c)||(o??=I({},t),o.byTrackingKey??=new Map,o.byTrackingKey.set(c,this.createChildNode(a,c,r))),p=(o??t).byTrackingKey.get(c));let f=t.byPropertyKey.get(a);f===void 0?(o??=I({},t),o.byPropertyKey.set(a,{reader:this.createReader(a),node:p??this.createChildNode(a,c,r)})):p&&p!==f.node&&(o??=I({},t),f.node=p)}return o??t}createReader(n){return v(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},vs=class extends Mr{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return ng}get keyInParent(){return _m}isOrphaned=gm;childrenMap;constructor(n,t,e,o,r){super(t,n,r),this.fieldManager=e,this.value=o,this.childrenMap=this.createChildrenMap()}},ys=class extends Mr{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(n,t,e,o,r,a){super(t,n,a),this.logic=t,this.parent=e,this.root=this.parent.structure.root;let c=this.createKeyOrOrphanSignals("child",o,r);this.isOrphaned=c.isOrphaned,this.keyInParent=c.keyInParent,this.pathKeys=v(()=>[...e.structure.pathKeys(),this.keyInParent()]),this.value=tg(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var ng=v(()=>[]),_m=v(()=>{throw new dt(1905,!1)});function ig(i,n,t){let e,o=new Set(i.byPropertyKey.keys()),r=new Set(i.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let c=n[a];o.delete(a.toString()),vr(c)&&c.hasOwnProperty(t)&&r.delete(c[t])}if(o.size>0){e??=I({},i);for(let a of o)e.byPropertyKey.delete(a)}if(r.size>0){e??=I({},i);for(let a of r)e.byTrackingKey?.delete(a)}return e}function og(i,n){let t;for(let e of i.byPropertyKey.keys())n.hasOwnProperty(e)||(t??=I({},i),t.byPropertyKey.delete(e));return t}var ws=class{node;selfSubmitting=R(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=mn({source:this.node.structure.value,computation:()=>[]})}submitting=v(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},so=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new _s(this)}fieldProxy=new Proxy(()=>this,Jf);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new bs(this),this.submitState=new ws(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(cm,void 0);return n||this.structure.children().map(t=>t.getBindingForFocus()).reduce(cm,void 0)}pendingSync=mn({source:()=>this.value(),computation:(n,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let n=this.metadata(Is)?.();return n?this.metadata(n):void 0}get maxLength(){return this.metadata(hm)}get min(){let n=this.metadata(Ds)?.();return n?this.metadata(n):void 0}get minLength(){return this.metadata(um)}get pattern(){return this.metadata(pm)??rg}get required(){return this.metadata(Es)??ag}metadata(n){return this.metadataState.get(n)}getError(n){return this.errors().find(t=>t.kind===n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(n){this.structure.isOrphaned()||G(()=>{this.markAsTouchedInternal(n),this.flushSync()})}markAsTouchedInternal(n){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!n?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){G(()=>this._reset(n))}_reset(n){this.pendingSync()?.abort(),n!==void 0&&this.value.set(n),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){G(()=>this._reloadValidation())}_reloadValidation(){let n=this.logicNode.logic.getMetadataKeys();for(let t of n)t[Ss]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let n=mn(this.value);n.rawSet=n.set,n.set=e=>{n.rawSet(e),this.markAsDirty(),this.debounceSync()};let t=n.update;return n.update=e=>{t(e),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=G(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let t=new AbortController,e=n(t.signal);if(e&&(this.pendingSync.set(t),await e,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(n,t,e,o){return o.newRoot(n,t,e,o)}createStructure(n){return n.kind==="root"?new vs(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new ys(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,t,e){let o,r;return e?(o=this.pathNode.getChild(Mn),r=this.structure.logic.getChild(Mn)):(o=this.pathNode.getChild(n),r=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:o,logic:r,initialKeyInParent:n,identityInParent:t,fieldAdapter:this.fieldAdapter})}},rg=v(()=>[]),ag=v(()=>!1);function cm(i,n){return i?n&&i.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:i:n}var Cs=class{node;selfTouched=R(!1);selfDirty=R(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=R([]);constructor(n){this.node=n}dirty=v(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(t,e)=>e||t.nodeState.dirty(),am)});touched=v(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(t,e)=>e||t.nodeState.touched(),am)});disabledReasons=v(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:re});disabled=v(()=>!!this.disabledReasons().length);readonly=v(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=v(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=v(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=v(()=>{if(this.node.logicNode.logic.hasMetadata(gs)){let t=this.node.logicNode.logic.getMetadata(gs).compute(this.node.context);if(t)return e=>t(this.node.context,e)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=v(()=>this.hidden()||this.disabled()||this.readonly())},xs=class{newRoot(n,t,e,o){return new so({kind:"root",fieldManager:n,value:t,pathNode:e,logic:e.builder.build(),fieldAdapter:o})}newChild(n){return new so(n)}createNodeState(n){return new Cs(n)}createValidationState(n){return new fs(n)}createStructure(n,t){return n.createStructure(t)}},ks=class{injector;rootName;submitOptions;constructor(n,t,e){this.injector=n,this.rootName=t??`${this.injector.get(mo)}.form${sg++}`,this.submitOptions=e}structures=new Set;createFieldManagementEffect(n){mt(()=>{let t=new Set;this.markStructuresLive(n,t);for(let e of this.structures)t.has(e)||(this.structures.delete(e),G(()=>e.destroy()))},{injector:this.injector})}markStructuresLive(n,t){t.add(n);for(let e of n.children())this.markStructuresLive(e.structure,t)}},sg=0,bm=new _("");function lg(i){let n,t,e;return i.length===3?[n,t,e]=i:i.length===2?Kf(i[1])?[n,t]=i:[n,e]=i:[n]=i,[n,t,e]}function Ps(...i){let[n,t,e]=lg(i),o=e?.injector??s(z),r=vi(o,()=>xr.rootCompile(t)),a=new ks(o,e?.name,e?.submission),c=e?.adapter??new xs,u=so.newRoot(a,n,r,c);a.createFieldManagementEffect(u.structure);let{experimentalWebMcpTool:p}=e??{};if(p){let f=vi(o,()=>s(bm,{optional:!0}));f&&vi(o,()=>f(u.fieldTree,{name:p.name,description:p.description}))}return u.fieldTree}var Sr=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:t,control:e}){this.context=n,this.kind=t,this.control=e}};function vm(i){if(i.length===0)return null;let n={};for(let t of i)n[t.kind]=t instanceof Sr?t.context:t;return n}function ym(i,n){return i===null?[]:Object.entries(i).map(([t,e])=>new Sr({context:e,kind:t,control:n}))}var dg=new _("");function li(i,n){return i instanceof Function?i(n):i}function mg(i){return typeof i=="number"?isNaN(i):i===""||i===!1||i==null}function wm(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function Bs(i,n){Ms(i),Le.unwrapFieldPath(i).builder.addSyncErrorRule(e=>fm(n(e),e.fieldTree))}function ug(i){return new Rs(i)}function hg(i,n){return new Fs(i,n)}function pg(i,n){return new Ls(i,n)}var ci=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},Rs=class extends ci{kind="required"},Fs=class extends ci{min;kind="min";constructor(n,t){super(t),this.min=n}};var Ls=class extends ci{max;kind="max";constructor(n,t){super(t),this.max=n}};var Er=class extends ci{kind="parse"};function di(i,n,t){let e=he();Ne(i,e,o=>{if(!(t?.when&&!t.when(o)))return typeof n=="function"?n(o):n}),Ne(i,Ts,({state:o})=>o.metadata(e)()),Ne(i,Is,()=>Ts),Bs(i,o=>{let r=o.value();if(r===null||Number.isNaN(r))return;let a=o.state.metadata(e)();if(!(a===void 0||Number.isNaN(a))&&r>a)return t?.error?li(t.error,o):pg(a,{message:li(t?.message,o)})})}function On(i,n,t){let e=he();Ne(i,e,o=>{if(!(t?.when&&!t.when(o)))return typeof n=="function"?n(o):n}),Ne(i,As,({state:o})=>o.metadata(e)()),Ne(i,Ds,()=>As),Bs(i,o=>{let r=o.value();if(r===null||Number.isNaN(r))return;let a=o.state.metadata(e)();if(!(a===void 0||Number.isNaN(a))&&r<a)return t?.error?li(t.error,o):hg(a,{message:li(t?.message,o)})})}function nn(i,n){let t=Ne(i,he(),e=>n?.when?n.when(e):!0);Ne(i,Es,({state:e})=>e.metadata(t)()),Bs(i,e=>{if(e.state.metadata(t)()&&mg(e.value()))return n?.error?li(n.error,e):ug({message:li(n?.message,e)})})}function fg(i,n,t){let e=mn({source:i,computation:()=>[],equal:re}),o=a=>{let c=t(a);e.set(wm(c.error)),c.value!==void 0&&n(c.value),e.set(wm(c.error))},r=()=>{e.set([])};return{errors:e.asReadonly(),setRawValue:o,reset:r}}var Ns=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return vm(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new dt(1910,!1)}valueAccessor=null;hasValidator(n){return n===Se.required?this.field().required():!1}updateValueAndValidity(){}},Vs={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},gg=(()=>{let i={};for(let n of Object.keys(Vs))i[Vs[n]]=n;return i})();function zs(i,n){let t=gg[n];return i[t]?.()}var Ws=Object.values(Vs);function Dr(){return{}}function Sn(i,n,t){return i[n]!==t?(i[n]=t,!0):!1}function _g(i,n,t){let e;if(Mm(i)&&t.isBadInput(i))return{error:new Er};switch(i.type){case"checkbox":return{value:i.checked};case"number":case"range":case"datetime-local":if(e=G(n),typeof e=="number"||e===null)return{value:i.value===""?null:i.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=G(n),e===null||e instanceof Date)return{value:i.valueAsDate};if(typeof e=="number")return{value:i.valueAsNumber};break}if(i.tagName==="INPUT"&&i.type==="text"&&(e??=G(n),typeof e=="number"||e===null)){if(i.value==="")return{value:null};let o=Number(i.value);return Number.isNaN(o)?{error:new Er}:{value:o}}return{value:i.value}}function Cm(i,n){switch(i.type){case"checkbox":i.checked=n;return;case"radio":i.checked=n===i.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){xm(i,n);return}else if(n===null){i.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){i.valueAsDate=n;return}else if(typeof n=="number"){xm(i,n);return}}if(i.tagName==="INPUT"&&i.type==="text"){if(typeof n=="number"){i.value=isNaN(n)?"":String(n);return}if(n===null){i.value="";return}}i.value=n}function xm(i,n){isNaN(n)?i.value="":i.valueAsNumber=n}function Mm(i){return i.tagName==="INPUT"}function bg(i){return i.type==="date"||i.type==="datetime-local"||i.type==="month"||i.type==="time"||i.type==="week"}function vg(i,n){let t=i.getUTCFullYear(),e=String(i.getUTCMonth()+1).padStart(2,"0");if(n==="month")return`${t}-${e}`;let o=String(i.getUTCDate()).padStart(2,"0");return`${t}-${e}-${o}`}function Sm(i,n,t){return n instanceof Date&&(i==="min"||i==="max")&&(t==="date"||t==="month")?vg(n,t):n}function yg(i,n){i.listenToCustomControlModel(e=>n.state().controlValue.set(e)),i.listenToCustomControlOutput("touch",()=>n.state().markAsTouched()),n.registerAsBinding(i.customControl);let t=Dr();return()=>{let e=n.state(),o=e.controlValue();Sn(t,"controlValue",o)&&i.setCustomControlModelInput(o);for(let r of Ws){let a;if(r==="errors"?a=n.errors():a=zs(e,r),Sn(t,r,a)&&(i.setInputOnDirectives(r,a),n.elementAcceptsNativeProperty(r)&&!i.customControlHasInput(r))){let c=Sm(r,a,n.nativeFormElement.type);Xi(n.renderer,n.nativeFormElement,r,c)}}}}function wg(i){return typeof i=="object"&&i!==null}function Cg(i,n){let t=Dr();n.controlValueAccessor.registerOnChange(o=>{t.controlValue=o,n.state().controlValue.set(o)}),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched());let e=n.injector.get(Pe,null,{optional:!0,self:!0});if(e){let o;for(let u of e)wg(u)&&u.registerOnValidatorChange&&(o??=R(0),u.registerOnValidatorChange(()=>{o.update(p=>p+1)}));let r=e.map(u=>typeof u=="function"?u:u.validate.bind(u)),a=Se.compose(r),c=v(()=>{o?.();let u=a?a(n.interopNgControl.control):null;return ym(u,n.interopNgControl.control)});n.parseErrorsSource.set(c)}return n.registerAsBinding({reset:()=>{let o=n.state().value();t.controlValue=o,G(()=>n.controlValueAccessor.writeValue(o))}}),()=>{let o=n.state(),r=o.value();Sn(t,"controlValue",r)&&G(()=>n.controlValueAccessor.writeValue(r));for(let a of Ws){let c=zs(o,a);if(Sn(t,a,c)){let u=i.setInputOnDirectives(a,c);a==="disabled"&&n.controlValueAccessor.setDisabledState?G(()=>n.controlValueAccessor.setDisabledState(c)):!u&&n.elementAcceptsNativeProperty(a)&&Xi(n.renderer,n.nativeFormElement,a,c)}}}}function xg(i,n,t){if(typeof MutationObserver!="function")return;let e=new MutationObserver(o=>{o.some(r=>kg(r))&&n()});e.observe(i,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>e.disconnect())}function kg(i){if(i.type==="childList"||i.type==="characterData"){if(i.target instanceof Comment)return!1;for(let n of i.addedNodes)if(!(n instanceof Comment))return!0;for(let n of i.removedNodes)if(!(n instanceof Comment))return!0;return!1}return i.type==="attributes"&&i.target instanceof HTMLOptionElement}function Mg(i,n,t,e){let o=!1,r=n.nativeFormElement,a=fg(()=>n.state().value(),u=>n.state().controlValue.set(u),u=>_g(r,n.state().value,e));t.set(a.errors),n.onReset=()=>{a.reset();let u=n.state().value();c.controlValue=u,Cm(r,u)},i.listenToDom("input",()=>a.setRawValue(void 0)),i.listenToDom("blur",()=>n.state().markAsTouched()),Mm(r)&&bg(r)&&e.watchValidity(n.destroyRef,r,()=>a.setRawValue(void 0)),n.registerAsBinding(),r.tagName==="SELECT"&&xg(r,()=>{o&&(r.value=n.state().controlValue())},n.destroyRef);let c=Dr();return()=>{let u=n.state();for(let f of Ws){let j=zs(u,f);if(Sn(c,f,j)&&(i.setInputOnDirectives(f,j),n.elementAcceptsNativeProperty(f))){let it=Sm(f,j,r.type);Xi(n.renderer,r,f,it)}}let p=u.controlValue();Sn(c,"controlValue",p)&&Cm(r,p),o=!0}}var Om=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275prov=$({token:i,factory:t=>Sg.\u0275fac(t),providedIn:"root"})}return i})(),Sg=(()=>{class i extends Om{document=s(nt);cspNonce=s(sl,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,e,o){let r=e.getRootNode();this.injectedStyles.has(r)||this.injectedStyles.set(r,this.createTransitionStyle(r));let a=c=>{let u=c;(u.animationName==="ng-valid"||u.animationName==="ng-invalid")&&o()};e.addEventListener("animationstart",a),t.onDestroy(()=>{e.removeEventListener("animationstart",a)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let e=this.document.createElement("style");return this.cspNonce&&(e.nonce=this.cspNonce),e.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(e):t.appendChild(e),e}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=U(i)))(o||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac})}return i})(),Og=Symbol(),km=new _(""),Em=(()=>{class i{field=je.required({alias:"formField"});state=v(()=>this.field()());renderer=s(ot);destroyRef=s(ze);injector=s(z);element=s(E).nativeElement;elementIsNativeFormElement=La(this.element);elementAcceptsTextualValues=Yc(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=s(Te,{optional:!0,self:!0});config=s(dg,{optional:!0});validityMonitor=s(Om);parseErrorsSource=R(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Ns(this.state)}parseErrors=v(()=>this.parseErrorsSource()?.().map(t=>Mt(I({},t),{fieldTree:G(this.state).fieldTree,formField:this}))??[],{equal:re});errors=v(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:re});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:Ba(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([o,r])=>[o,v(()=>r(this))]);if(t.length===0)return;let e=Dr();In({write:()=>{for(let[o,r]of t){let a=r();Sn(e,o,a)&&(a?this.renderer.addClass(this.element,o):this.renderer.removeClass(this.element,o))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new dt(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=e=>t.focus(e)),t?.reset&&(this.resetter=()=>t.reset()),mt(e=>{let o=this.state();o.nodeState.formFieldBindings.update(r=>[...r,this]),e(()=>{o.nodeState.formFieldBindings.update(r=>r.filter(a=>a!==this))})},{injector:this.injector})}[Og];\u0275ngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=Cg(t,this);else if(t.customControl)this.\u0275ngControlUpdate=yg(t,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=Mg(t,this,this.parseErrorsSource,this.validityMonitor);else throw new dt(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case"min":case"max":return this._elementAcceptsMinMax??=Xc(this.element);case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[tt([{provide:km,useExisting:i},{provide:Zt,useFactory:()=>s(i).interopNgControl},{provide:Na,useFactory:()=>s(km,{self:!0})}]),wi("formField")]})}return i})();var Ar=class i extends rt{createWorkoutButtonLabel=$localize`:Save button label, when user is creating workout@@createWorkoutButtonLabel:Create`;editWorkoutButtonLabel=$localize`:Save button label, when user is updating workout@@editWorkoutButtonLabel:Update`;workoutNameFormFieldLabel=$localize`:Name form field label@@workoutNameFormFieldLabel:Name`;workoutSetsFormFieldLabel=$localize`:Sets form field label@@workoutSetsFormFieldLabel:Sets`;workoutExercisePerSetsFormFieldLabel=$localize`:Exercises  per set form field label@@workoutExercisePerSetsFormFieldLabel:Exercises / Set`;workoutDefaultTimeUnitLabel=$localize`:seconds label@@workoutDefaultTimeUnitLabel:second`;workoutPreparationTimeFormFieldLabel=$localize`:Preparation time form field label@@workoutPreparationTimeFormFieldLabel:Preparation Time`;workoutTimeFormFieldLabel=$localize`:Workout time form field label@@workoutTimeFormFieldLabel:Workout Time`;workoutRestTimeFormFieldLabel=$localize`:Rest time form field label@@workoutRestTimeFormFieldLabel:Rest Time`;workoutRestBetweenSetsTimeFormFieldLabel=$localize`:Rest Time Between Sets form field label@@workoutRestBetweenSetsTimeFormFieldLabel:Rest Time Between Sets`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ir=class i{isNewWorkout=je();onWorkoutSaved=we();workout;saveLabel;workoutFormModel=R({name:yt.SIMPLE_WORKOUT.name,numberOfSets:yt.SIMPLE_WORKOUT.schedule.numberOfSets,numberOfExercises:yt.SIMPLE_WORKOUT.schedule.numberOfExercises,preparationTime:yt.SIMPLE_WORKOUT.schedule.preparationTime,workoutTime:yt.SIMPLE_WORKOUT.schedule.workoutTime,restTime:yt.SIMPLE_WORKOUT.schedule.restTime,restTimeBetweenSets:yt.SIMPLE_WORKOUT.schedule.restTimeBetweenSets});workoutForm=Ps(this.workoutFormModel,n=>{nn(n.name,{message:"Workout name is required"}),nn(n.numberOfSets),nn(n.numberOfExercises),nn(n.preparationTime),nn(n.workoutTime),nn(n.restTime),nn(n.restTimeBetweenSets),On(n.numberOfSets,1),di(n.numberOfSets,99),On(n.numberOfExercises,1),di(n.numberOfExercises,99),On(n.preparationTime,5),di(n.preparationTime,900),On(n.workoutTime,5),di(n.workoutTime,900),On(n.restTime,5),di(n.restTime,900),On(n.restTimeBetweenSets,0)});translations=s(Ar);workoutConfigurationService=s(yt);signals=s(gt);constructor(){this.saveLabel=R(this.translations.createWorkoutButtonLabel),this.workout=this.signals.selectedWorkout.toSignal(),mt(()=>{let n=this.isNewWorkout(),t=this.workout();n?(this.saveLabel.set(this.translations.createWorkoutButtonLabel),this.workoutFormModel.set({name:yt.SIMPLE_WORKOUT.name,numberOfSets:yt.SIMPLE_WORKOUT.schedule.numberOfSets,numberOfExercises:yt.SIMPLE_WORKOUT.schedule.numberOfExercises,preparationTime:yt.SIMPLE_WORKOUT.schedule.preparationTime,workoutTime:yt.SIMPLE_WORKOUT.schedule.workoutTime,restTime:yt.SIMPLE_WORKOUT.schedule.restTime,restTimeBetweenSets:yt.SIMPLE_WORKOUT.schedule.restTimeBetweenSets})):t&&(this.saveLabel.set(this.translations.editWorkoutButtonLabel),this.workoutFormModel.set({name:t.name,numberOfSets:t.schedule.numberOfSets,numberOfExercises:t.schedule.numberOfExercises,preparationTime:t.schedule.preparationTime,workoutTime:t.schedule.workoutTime,restTime:t.schedule.restTime,restTimeBetweenSets:t.schedule.restTimeBetweenSets}))})}onSaveClicked(){let n=this.workoutFormModel(),t=new $n(n.numberOfSets,n.numberOfExercises,n.preparationTime,n.workoutTime,n.restTime,n.restTimeBetweenSets);if(this.isNewWorkout()){let e=new vn("",n.name,t);this.workoutConfigurationService.addWorkout(e)}else{let e=new vn(this.workout().id,n.name,t);this.workoutConfigurationService.updateWorkout(e)}this.onWorkoutSaved.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-workout-schedule"]],inputs:{isNewWorkout:[1,"isNewWorkout"]},outputs:{onWorkoutSaved:"onWorkoutSaved"},decls:41,vars:23,consts:[[1,"workout-schedule-form-container"],[1,"workout-schedule-form"],["floatLabel","always","subscriptSizing","dynamic",1,"workout-schedule-form-field"],["matInput","","type","text",3,"formField"],["matInput","","type","number","step","1",3,"formField"],["matInput","","type","number","step","5",3,"formField"],["matTextSuffix","",1,"workout-schedule-form-field-suffix"],[1,"workout-schedule-form-actions"],["matButton","filled",3,"click","title","disabled"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label"),h(4),m(),A(5,"input",3),Yt(),m(),l(6,"mat-form-field",2)(7,"mat-label"),h(8),m(),A(9,"input",4),Yt(),m(),l(10,"mat-form-field",2)(11,"mat-label"),h(12),m(),A(13,"input",4),Yt(),m(),l(14,"mat-form-field",2)(15,"mat-label"),h(16),m(),A(17,"input",5),Yt(),l(18,"span",6),h(19),m()(),l(20,"mat-form-field",2)(21,"mat-label"),h(22),m(),A(23,"input",5),Yt(),l(24,"span",6),h(25),m()(),l(26,"mat-form-field",2)(27,"mat-label"),h(28),m(),A(29,"input",5),Yt(),l(30,"span",6),h(31),m()(),l(32,"mat-form-field",2)(33,"mat-label"),h(34),m(),A(35,"input",5),Yt(),l(36,"span",6),h(37),m()()(),l(38,"div",7)(39,"button",8),w("click",function(){return e.onSaveClicked()}),h(40),m()()()),t&2&&(d(4),D(e.translations.workoutNameFormFieldLabel),d(),b("formField",e.workoutForm.name),Qt(),d(3),D(e.translations.workoutSetsFormFieldLabel),d(),b("formField",e.workoutForm.numberOfSets),Qt(),d(3),D(e.translations.workoutExercisePerSetsFormFieldLabel),d(),b("formField",e.workoutForm.numberOfExercises),Qt(),d(3),D(e.translations.workoutPreparationTimeFormFieldLabel),d(),b("formField",e.workoutForm.preparationTime),Qt(),d(2),D(e.translations.workoutDefaultTimeUnitLabel),d(3),D(e.translations.workoutTimeFormFieldLabel),d(),b("formField",e.workoutForm.workoutTime),Qt(),d(2),D(e.translations.workoutDefaultTimeUnitLabel),d(3),D(e.translations.workoutRestTimeFormFieldLabel),d(),b("formField",e.workoutForm.restTime),Qt(),d(2),D(e.translations.workoutDefaultTimeUnitLabel),d(3),D(e.translations.workoutRestBetweenSetsTimeFormFieldLabel),d(),b("formField",e.workoutForm.restTimeBetweenSets),Qt(),d(2),D(e.translations.workoutDefaultTimeUnitLabel),d(2),b("title",lt(e.saveLabel()))("disabled",e.workoutForm().invalid()),y("aria-label",e.saveLabel()),d(),et(" ",e.saveLabel()," "))},dependencies:[xt,ke,Re,Jn,xn,Ga,ar,Od,Em],styles:[".workout-schedule-form-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1rem}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]   .workout-schedule-form-field[_ngcontent-%COMP%]{width:100%}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]   .workout-schedule-form-field-suffix[_ngcontent-%COMP%]{margin-left:.5rem}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form-actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}"]})};var mi=class i extends rt{createWorkoutNavHeaderLabel=$localize`:Side sheet label, when user is creating workout@@createWorkoutNavHeaderLabel:New Workout`;editWorkoutNavHeaderLabel=$localize`:Side sheet label, when user is editing a workout@@editWorkoutNavHeaderLabel:Edit Workout`;closeSideSheetButtonLabel=$localize`:close side sheet label name@@closeSideSheetButtonLabel:Back`;newWorkoutButtonLabel=$localize`:New workout button label name@@newWorkoutButtonLabel:New Workout`;aboutButtonLabel=$localize`:About button label@@aboutButtonLabel:About`;workoutListLabel=$localize`:Heading for workout list@@workoutListLabel:My Workouts`;workoutLabel=$localize`:Workout label@@workoutLabel:Workout`;setLabel=$localize`:Set label name@@setLabel:Set`;exerciseLabel=$localize`:Exercise label@@exerciseLabel:Exercise`;restLabel=$localize`:Rest label name@@restLabel:Rest`;timeUnitLabel=$localize`:Time unit label@@timeUnitLabel:minute`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Dm="1.4.27";var Tr=class i extends rt{copyrightNotice=$localize`:Copyright notice@@copyrightNotice:2025 - Márk Szabó`;contactInformationLabel=$localize`:Contact information label@@contactInformationLabel:Contact`;madeInLabel=$localize`:Made in label@@madeInLabel:Made in`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var ui=class i{applicationVersion=R(Dm);translations=s(Tr);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-application-info"]],decls:25,vars:5,consts:[["matListItemIcon","","aria-hidden","true",1,"app-version-icon"],["matListItemTitle",""],["matListItemIcon","","aria-hidden","true",1,"contact-icon"],["href","mailto:hello@example.com","target","_blank","rel","noopener noreferrer"],["matListItemIcon","","aria-hidden","true",1,"copyright-icon"],["matListItemIcon","","aria-hidden","true",1,"public-icon"],[1,"made-in-section"],["src","european-flag.jpg"]],template:function(t,e){t&1&&(l(0,"mat-list")(1,"mat-list-item")(2,"mat-icon",0),h(3,"web_asset"),m(),l(4,"div",1),h(5),m()(),l(6,"mat-list-item")(7,"mat-icon",2),h(8,"mail"),m(),l(9,"div",1)(10,"a",3),h(11),m()()(),l(12,"mat-list-item")(13,"mat-icon",4),h(14,"copyright"),m(),l(15,"div",1),h(16),m()(),l(17,"mat-list-item")(18,"mat-icon",5),h(19,"public"),m(),l(20,"div",1)(21,"div",6)(22,"div"),h(23),m(),A(24,"img",7),m()()()()),t&2&&(d(5),dn("",e.translations.applicationName," ",e.applicationVersion()),d(6),D(e.translations.contactInformationLabel),d(5),D(e.translations.copyrightNotice),d(7),D(e.translations.madeInLabel))},dependencies:[St,Ft,_r,tm,gr,cs,ls],styles:[".made-in-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.3rem}"]})};var Pr=class i extends rt{closeAboutButtonLabel=$localize`:Close button label@@closeAboutButtonLabel:Close`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Dg=()=>({backgroundImage:"url(./blob-background.svg)"}),Rr=class i{translations=s(Pr);dialogRef=s(no);constructor(){}onCloseClicked(){this.dialogRef.close()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-about-dialog"]],decls:7,vars:7,consts:[[1,"about-dialog-content"],[1,"hero"],["src","icons/icon-192x192.png",1,"application-icon"],[1,"info"],["mat-button","",1,"close-button",3,"click","title"]],template:function(t,e){t&1&&(l(0,"mat-dialog-content",0)(1,"section",1),A(2,"img",2),m(),l(3,"section",3),A(4,"tbt-application-info"),l(5,"button",4),w("click",function(){return e.onCloseClicked()}),h(6),m()()()),t&2&&(d(),fl(gl(6,Dg)),d(4),b("title",lt(e.translations.closeAboutButtonLabel)),y("aria-label",e.translations.closeAboutButtonLabel),d(),et(" ",e.translations.closeAboutButtonLabel," "))},dependencies:[St,xt,ke,Hd,ui],styles:[".about-dialog-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-height:100%;padding:0}.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:30vw;width:30vw;height:30dvw;width:30dvw;background-size:cover;background-position:center}.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .application-icon[_ngcontent-%COMP%]{max-width:40%;max-height:40%}.about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;height:30vw;width:30vw;height:30dvw;width:30dvw}@media screen and ((max-width:600px)or (max-height:650px)){.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{height:40vw;width:40vw;height:40dvw;width:40dvw;min-height:300px;min-width:300px}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:40vw;width:40vw;height:40dvw;width:40dvw;min-height:300px;min-width:300px}@media screen and ((max-width:600px)or (max-height:450px)){.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]{flex-direction:column}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{height:40vh;width:60vh;height:40dvh;width:60dvh}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:40vh;width:60vh;height:40dvh;width:60dvh}@media screen and (max-height:600px){.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}"]})};var Fr=class i extends rt{summary=$localize`:Summary text@@appSummary:Training, streamlined. Tabata Max is the web-based interval timer built for those who want more results with less distraction. Start faster. Train smarter.`;keyBenefitsHeader=$localize`:Header for key benefits section@@keyBenefitsHeader:Designed for the Work.`;keyBenefit1Label=$localize`:Label for key benefit 1@@keyBenefit1Label:Simply Focused`;keyBenefit2Label=$localize`:Label for key benefit 2@@keyBenefit2Label:Stay in Sync`;keyBenefit3Label=$localize`:Label for key benefit 3@@keyBenefit3Label:Seamlessly Portable`;keyBenefit4Label=$localize`:Label for key benefit 4@@keyBenefit4Label:Start Instantly`;keyBenefit1=$localize`:Text for key benefit 1@@keyBenefit1:A clean design that puts your workout first.`;keyBenefit2=$localize`:Text for key benefit 2@@keyBenefit2:Clear cues that let you focus on your movement.`;keyBenefit3=$localize`:Text for key benefit 3@@keyBenefit3:A consistent experience across all your devices.`;keyBenefit4=$localize`:Text for key benefit 4@@keyBenefit4:Open in your browser to begin. Install for offline use anytime, anywhere.`;callToActionLabel=$localize`:Call to action label@@callToActionLabel:Are You Ready?`;launcherScreenshotCaption=$localize`:Screenshot caption@@launcherScreenshotCaption:Opening screen showing your last workout`;workoutEditScreenshotCaption=$localize`:Screenshot caption@@workoutEditScreenshotCaption:Editing a workout`;workoutListScreenshotCaption=$localize`:Screenshot caption@@workoutListScreenshotCaption:Listing workouts`;workoutRestScreenshotCaption=$localize`:Screenshot caption@@workoutRestScreenshotCaption:Resting during a workout`;workoutPrepareScreenshotCaption=$localize`:Screenshot caption@@workoutPrepareScreenshotCaption:Prepare for the next rep during workout`;workoutActivityScreenshotCaption=$localize`:Screenshot caption@@workoutActivityScreenshotCaption:Workout active rep`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ag=["*"];var Ig=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Tg=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Pg=new _("MAT_CARD_CONFIG"),Am=(()=>{class i{appearance;constructor(){let t=s(Pg,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,o){e&2&&S("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Ag,decls:1,vars:0,template:function(e,o){e&1&&(K(),k(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return i})(),Im=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var Tm=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=O({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})();var Pm=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=g({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Tg,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(e,o){e&1&&(K(Ig),k(0),Dt(1,"div",0),k(2,1),At(),k(3,2))},encapsulation:2})}return i})();var Rm=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=B({imports:[Z]})}return i})();var Lr=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-animated-greeting"]],decls:11,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","preserveAspectRatio","xMidYMid meet","viewBox","0 0 662.3 78"],["id","svgGroup","fill","none","fill-rule","evenodd","stroke","#005cbb","stroke-linecap","round","stroke-width","0.2mm","font-size","9pt",2,"stroke","#005cbb","stroke-width",".2mm","fill","none"],["id","0","d","M97.1 0h40.5q-2.2 9.4-4.35 18.75-2.15 9.35-4.35 18.75-2.2 9.4-4.35 18.75Q122.4 65.6 120.3 75H73.8l-6-37.6q0-.1-.05-.15l-.05-.05h-.05q-.05 0-.1.05t-.05.15L61.6 75H18.2l-3.6-15q-1.8-7.5-3.65-15Q9.1 37.5 7.3 30q-1.8-7.5-3.65-15Q1.8 7.5 0 0h42.6q.8 5.1 1.55 10.25t1.5 10.25q.75 5.1 1.55 10.25T48.7 41h.5l5.6-41h30.1l5.9 41h.2q1.5-10.3 3.05-20.5Q95.6 10.3 97.1 0Z",1,"tkrlAKKf_0"],["id","1","d","m189.4 45.3 30.9 10.1q-1.8 6.3-7.65 11.45Q206.8 72 197.9 75T178 78q-9.4 0-17.55-2.1t-14.3-6.35Q140 65.3 136.5 58.9T133 44q0-8.5 3.5-14.9t9.65-10.65q6.15-4.25 14.35-6.35Q168.7 10 178 10q9.5 0 17.45 2.1 7.95 2.1 13.7 6.45 5.75 4.35 8.9 11 3.15 6.65 3.15 15.75h-54.6v.1q0 1.5.8 2.8.8 1.3 2.25 2.25t3.6 1.45q2.15.5 4.95.5 5.3 0 8.2-1.9 2.9-1.9 3-5.2Zm-22.6-3.1h22.3q.1 0 .1-.05V42q0-1.6-.85-2.85t-2.35-2.1q-1.5-.85-3.55-1.3-2.05-.45-4.45-.45-4.9 0-8.1 1.75-3.2 1.75-3.2 4.95v.2h.1Z",1,"tkrlAKKf_1"],["id","2","d","M258.6 75H224V0h34.6v75Z",1,"tkrlAKKf_2"],["id","3","d","m350.2 38.4-32.1 5.7q0-2.7-1.7-4.4-1.7-1.7-4.3-2.45-2.6-.75-5.5-.75-3.2 0-5.85.85-2.65.85-4.15 2.5-1.5 1.65-1.5 4.15 0 1.9.85 3.3t2.45 2.35q1.6.95 3.7 1.4 2.1.45 4.5.45 2.8 0 5.45-.7 2.65-.7 4.35-2.35 1.7-1.65 1.7-4.35 8.4 1 16.1 2.05 7.7 1.05 16.1 2.15-1.2 9.7-7.15 16.35-5.95 6.65-15.4 10Q318.3 78 306.6 78q-9.4 0-17.55-2.1t-14.3-6.35q-6.15-4.25-9.65-10.65T261.6 44q0-4.4.95-8.2.95-3.8 2.75-7.05t4.35-5.95q2.55-2.7 5.75-4.8 4.1-2.7 9-4.45t10.55-2.65q5.65-.9 11.65-.9 11.5 0 20.75 3.15t15.3 9.45q6.05 6.3 7.55 15.8Z",1,"tkrlAKKf_3"],["id","4","d","M397.6 78q-6.2 0-12-.9t-10.8-2.75q-5-1.85-9.1-4.65-4.1-2.8-7-6.55-2.9-3.75-4.5-8.5t-1.6-10.55q0-6.8 2.25-12.25t6.4-9.55q4.15-4.1 9.75-6.85t12.35-4.1Q390.1 10 397.6 10q9.4 0 17.55 2.15t14.3 6.4q6.15 4.25 9.65 10.65t3.5 14.9q0 8.5-3.5 14.85t-9.65 10.6q-6.15 4.25-14.3 6.35Q407 78 397.6 78Zm.1-26.5q6.2 0 8.8-2.4 2.6-2.4 2.6-5.2 0-1.3-.6-2.6t-1.9-2.4q-1.3-1.1-3.5-1.75-2.2-.65-5.4-.65t-5.45.65q-2.25.65-3.6 1.75t-1.95 2.4q-.6 1.3-.6 2.7 0 1.4.6 2.75t2 2.4q1.4 1.05 3.6 1.7 2.2.65 5.4.65Z",1,"tkrlAKKf_4"],["id","5","d","M571.2 75h-34.6V43.4q0-2.9-1.45-4.1-1.45-1.2-3.45-1.3-2-.1-3.65.5T526 39.7l7-25.7q3.6-1.6 7.75-2.4 4.15-.8 8.25-.8 5.8 0 10.85 1.8t8.2 5.7q3.15 3.9 3.15 10.4V75ZM526 75h-34.6V43.4q0-2.9-1.45-4.1-1.45-1.2-3.45-1.3-2-.1-3.65.5t-2.05 1.2l8-25.7q7.3-3.2 15.8-3.2 4.2 0 8 1t6.85 3.1q3.05 2.1 4.8 5.55Q526 23.9 526 28.7V75Zm-45.8 0h-34.6V13h34.6v62Z",1,"tkrlAKKf_5"],["id","6","d","m630.5 45.3 30.9 10.1q-1.8 6.3-7.65 11.45Q647.9 72 639 75t-19.9 3q-9.4 0-17.55-2.1t-14.3-6.35q-6.15-4.25-9.65-10.65T574.1 44q0-8.5 3.5-14.9t9.65-10.65q6.15-4.25 14.35-6.35 8.2-2.1 17.5-2.1 9.5 0 17.45 2.1 7.95 2.1 13.7 6.45 5.75 4.35 8.9 11 3.15 6.65 3.15 15.75h-54.6v.1q0 1.5.8 2.8.8 1.3 2.25 2.25t3.6 1.45q2.15.5 4.95.5 5.3 0 8.2-1.9 2.9-1.9 3-5.2Zm-22.6-3.1h22.3q.1 0 .1-.05V42q0-1.6-.85-2.85t-2.35-2.1q-1.5-.85-3.55-1.3-2.05-.45-4.45-.45-4.9 0-8.1 1.75-3.2 1.75-3.2 4.95v.2h.1Z",1,"tkrlAKKf_6"],["data-made-with","vivus-instant"]],template:function(t,e){t&1&&(le(),Dt(0,"svg",0)(1,"g",1),Ht(2,"path",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8),At(),Dt(9,"style",9),h(10,".tkrlAKKf_0{stroke-dasharray:601 603;stroke-dashoffset:602;animation:tkrlAKKf_draw 1333ms ease 0ms forwards;}.tkrlAKKf_1{stroke-dasharray:411 413;stroke-dashoffset:412;animation:tkrlAKKf_draw 1333ms ease 111ms forwards;}.tkrlAKKf_2{stroke-dasharray:220 222;stroke-dashoffset:221;animation:tkrlAKKf_draw 1333ms ease 222ms forwards;}.tkrlAKKf_3{stroke-dasharray:369 371;stroke-dashoffset:370;animation:tkrlAKKf_draw 1333ms ease 333ms forwards;}.tkrlAKKf_4{stroke-dasharray:316 318;stroke-dashoffset:317;animation:tkrlAKKf_draw 1333ms ease 444ms forwards;}.tkrlAKKf_5{stroke-dasharray:597 599;stroke-dashoffset:598;animation:tkrlAKKf_draw 1333ms ease 555ms forwards;}.tkrlAKKf_6{stroke-dasharray:411 413;stroke-dashoffset:412;animation:tkrlAKKf_draw 1333ms ease 666ms forwards;}@keyframes tkrlAKKf_draw{100%{stroke-dashoffset:0;}}@keyframes tkrlAKKf_fade{0%{stroke-opacity:1;}93.54838709677419%{stroke-opacity:1;}100%{stroke-opacity:0;}}"),At()())},encapsulation:2})};var Nr=class i extends rt{previousImageButtonLabel=$localize`:Back button label@@previousImageButtonLabel:Back`;nextImageButtonLabel=$localize`:Next button label@@nextImageButtonLabel:Next`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Vr=class i{images=je();backButtonLabel;nextButtonLabel;src=R("");caption=R("");index=0;translations=s(Nr);constructor(){this.backButtonLabel=R(this.translations.previousImageButtonLabel),this.nextButtonLabel=R(this.translations.nextImageButtonLabel),mt(()=>{this.images()?.length&&this.onImagesUpdated()})}ngOnInit(){this.onImagesUpdated()}onBackClicked(){this.index>0&&(this.index=this.index-1,this.selectImage(this.images()?.at(this.index)))}onNextClicked(){let n=this.images()?.length;n&&this.index<n-1&&(this.index=this.index+1,this.selectImage(this.images()?.at(this.index)))}onImagesUpdated(){let n=this.images()?.at(0);n&&(this.src.set(n.src),this.caption.set(n.caption))}selectImage(n){n&&(this.src.set(n.src),this.caption.set(n.caption))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-image-gallery"]],inputs:{images:[1,"images"]},decls:11,vars:7,consts:[[1,"image-gallery-container"],["mat-icon-button","",1,"back-button",3,"click","title"],["aria-hidden","true"],[1,"selected-image",3,"click"],[3,"src","alt"],["mat-icon-button","",1,"next-button",3,"click","title"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"button",1),w("click",function(){return e.onBackClicked()}),l(2,"mat-icon",2),h(3,"arrow_back"),m()(),l(4,"figure",3),w("click",function(){return e.onNextClicked()}),A(5,"img",4),l(6,"figcaption"),h(7),m()(),l(8,"button",5),w("click",function(){return e.onNextClicked()}),l(9,"mat-icon",2),h(10,"arrow_forward"),m()()()),t&2&&(d(),b("title",e.backButtonLabel()),y("aria-label",e.backButtonLabel()),d(4),b("src",e.src(),ll)("alt",e.caption()),d(2),D(e.caption()),d(),b("title",e.nextButtonLabel()),y("aria-label",e.nextButtonLabel()))},dependencies:[xt,Xt,St,Ft],styles:[".image-gallery-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:2px}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;justify-content:center;margin:0}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{font:var(--mat-sys-title-large);padding-top:.5rem}"]})};var Ve=class{constructor(n,t){this.src=n;this.caption=t}src;caption};var Br=class i{onCreate=we();translations;images;workoutLauncherComponentTranslations=s(mi);workoutLauncherEmptyStateComponentTranslations=s(Fr);constructor(){this.translations=Object.assign({},this.workoutLauncherComponentTranslations,this.workoutLauncherEmptyStateComponentTranslations),this.images=[new Ve("images/launcher.png",this.translations.launcherScreenshotCaption),new Ve("images/workout-edit.png",this.translations.workoutEditScreenshotCaption),new Ve("images/workout-list.png",this.translations.workoutListScreenshotCaption),new Ve("images/workout-rest.png",this.translations.workoutRestScreenshotCaption),new Ve("images/workout-prepare.png",this.translations.workoutPrepareScreenshotCaption),new Ve("images/workout-start.png",this.translations.workoutActivityScreenshotCaption)]}onCreateButtonClicked(){this.onCreate.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-workout-launcher-empty-state"]],outputs:{onCreate:"onCreate"},decls:53,vars:16,consts:[[1,"empty-workouts"],[1,"message"],[1,"greeting"],[1,"summary"],[1,"screenshots",3,"images"],[1,"key-benefits-header"],[1,"key-benefits"],[1,"key-benefit"],[1,"key-benefit-label"],[1,"key-benefit-content"],[1,"call-to-action"],[1,"call-to-action-label"],["mat-fab","","extended","",1,"new-workout-button",3,"click","title"],["aria-hidden","true",1,"new-workout-icon"]],template:function(t,e){t&1&&(l(0,"section",0)(1,"div",1),A(2,"tbt-animated-greeting",2),l(3,"div",3),h(4),m()(),A(5,"tbt-image-gallery",4),l(6,"div",1)(7,"div",5),h(8),m(),l(9,"div",6)(10,"mat-card",7)(11,"mat-card-header")(12,"mat-card-title"),h(13,"\u2728"),l(14,"span",8),h(15),m()()(),l(16,"mat-card-content")(17,"p",9),h(18),m()()(),l(19,"mat-card",7)(20,"mat-card-header")(21,"mat-card-title"),h(22,"\u{1F441}\uFE0F"),l(23,"span",8),h(24),m()()(),l(25,"mat-card-content")(26,"p",9),h(27),m()()(),l(28,"mat-card",7)(29,"mat-card-header")(30,"mat-card-title"),h(31,"\u{1F4BB}"),l(32,"span",8),h(33),m()()(),l(34,"mat-card-content")(35,"p",9),h(36),m()()(),l(37,"mat-card",7)(38,"mat-card-header")(39,"mat-card-title"),h(40,"\u26A1\uFE0F"),l(41,"span",8),h(42),m()()(),l(43,"mat-card-content")(44,"p",9),h(45),m()()()(),l(46,"div",10)(47,"span",11),h(48),m(),l(49,"button",12),w("click",function(){return e.onCreateButtonClicked()}),l(50,"mat-icon",13),h(51,"add"),m(),h(52),m()()()()),t&2&&(d(4),D(e.translations.summary),d(),b("images",e.images),d(3),D(e.translations.keyBenefitsHeader),d(7),D(e.translations.keyBenefit1Label),d(3),D(e.translations.keyBenefit1),d(6),D(e.translations.keyBenefit2Label),d(3),D(e.translations.keyBenefit2),d(6),D(e.translations.keyBenefit3Label),d(3),D(e.translations.keyBenefit3),d(6),D(e.translations.keyBenefit4Label),d(3),D(e.translations.keyBenefit4),d(3),et("",e.translations.callToActionLabel," "),d(),b("title",lt(e.translations.newWorkoutButtonLabel)),y("aria-label",e.translations.newWorkoutButtonLabel),d(3),et(" ",e.translations.newWorkoutButtonLabel," "))},dependencies:[xt,dc,St,Ft,Rm,Am,Tm,Pm,Im,Lr,Vr],styles:["[_nghost-%COMP%]{display:flex;justify-content:center}.empty-workouts[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font:var(--mat-sys-headline-medium);color:var(--mat-sys-on-surface)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]{width:80%;margin-top:8rem;margin-bottom:4rem;text-align:center}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{text-align:justify}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits-header[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);font-weight:700;margin-bottom:2rem}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{display:grid}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]{margin:1rem}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]   .key-benefit-label[_ngcontent-%COMP%]{font-weight:700}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]   .key-benefit-content[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:2.5rem;width:100%;height:20rem;font:var(--mat-sys-headline-large);font-weight:700;margin-top:4rem;margin-bottom:2rem;border-style:solid;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));background-color:var(--mat-sys-primary)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .call-to-action-label[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%]{font-size:2.5rem}.empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{margin-top:4rem;margin-bottom:4rem}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]{width:min(50ch,90%)}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small)}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{margin-top:6rem;margin-bottom:6rem;width:max(46ch,50vw)}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{margin-top:6rem}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]{width:100%;margin-top:2rem}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{width:90%;font:var(--mat-sys-headline-small)}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:1fr}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{width:90vw}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%]{font-size:2rem}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]{width:100%;margin-top:2rem}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{width:90%;font:var(--mat-sys-headline-small)}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:1fr}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small);font-weight:600;height:15rem;justify-content:center}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%]{font-size:2rem}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{width:90vw}"]})};var Fg=["drawer"],Lg=["sideSheet"];function Ng(i,n){i&1&&A(0,"mat-divider",11)}function Vg(i,n){if(i&1){let t=Lt();l(0,"a",26),w("click",function(){let o=_t(t).$implicit,r=M(2);return bt(r.onWorkoutSelected(o))}),h(1),m()}if(i&2){let t=n.$implicit,e=M(2);b("activated",e.isWorkoutSelected(t)),d(),D(t.name)}}function Bg(i,n){if(i&1&&(l(0,"h3",23),h(1),m(),l(2,"mat-nav-list",24),sn(3,Vg,2,2,"a",25,Ci),m()),i&2){let t=M();d(),et(" ",t.translations.workoutListLabel," "),d(2),ln(t.workouts())}}function zg(i,n){if(i&1&&(l(0,"div",18),h(1),m()),i&2){let t=M();d(),D(t.translations.createWorkoutNavHeaderLabel)}}function Wg(i,n){if(i&1&&(l(0,"div",18),h(1),m()),i&2){let t=M();d(),D(t.translations.editWorkoutNavHeaderLabel)}}function jg(i,n){if(i&1&&(l(0,"section",27)(1,"div"),h(2),m(),l(3,"div",28)(4,"mat-icon",29),h(5,"sprint"),m(),l(6,"span",30),h(7),m()()(),l(8,"section",31)(9,"div"),h(10),m(),l(11,"div",28)(12,"mat-icon",32),h(13,"laps"),m(),l(14,"span",30),h(15),m(),l(16,"span",30),h(17,"\xA0/\xA0"),m(),l(18,"mat-icon",33),h(19,"exercise"),m(),l(20,"span",30),h(21),m()()(),l(22,"section",34)(23,"div"),h(24),m(),l(25,"div",28)(26,"mat-icon",35),h(27,"coffee"),m(),l(28,"span",30),h(29),m()()()),i&2){let t=M(2);d(),ft(pe("configuration-option-value ",t.displayTextClass())),d(),et(" ",t.workout()?.schedule?.workoutTime," "),d(5),D(t.translations.workoutLabel),d(2),ft(pe("configuration-option-value ",t.displayTextClass())),d(),dn(" ",t.workout()?.schedule?.numberOfSets,"/",t.workout()?.schedule?.numberOfExercises," "),d(5),D(t.translations.setLabel),d(6),D(t.translations.exerciseLabel),d(2),ft(pe("configuration-option-value ",t.displayTextClass())),d(),et(" ",t.workout()?.schedule?.restTime," "),d(5),D(t.translations.restLabel)}}function Ug(i,n){if(i&1&&(l(0,"section",36)(1,"div",37)(2,"div"),h(3),m(),l(4,"div",28)(5,"mat-icon",38),h(6,"laps"),m(),l(7,"span",30),h(8),m()()(),l(9,"div",37)(10,"div"),h(11),m(),l(12,"div",28)(13,"mat-icon",33),h(14,"exercise"),m(),l(15,"span",30),h(16),m()()()(),l(17,"section",39)(18,"div",37)(19,"div"),h(20),m(),l(21,"div",28)(22,"span",30),h(23),m()()()(),l(24,"section",40)(25,"div",37)(26,"div"),h(27),m(),l(28,"div",28)(29,"mat-icon",41),h(30,"sprint"),m(),l(31,"span",30),h(32),m()()(),l(33,"div",37)(34,"div"),h(35),m(),l(36,"div",28)(37,"mat-icon",42),h(38,"coffee"),m(),l(39,"span",30),h(40),m()()()()),i&2){let t=M(2);d(2),ft(pe("configuration-option-value ",t.displayTextClass())),d(),et(" ",t.workout()?.schedule?.numberOfSets," "),d(5),D(t.translations.setLabel),d(2),ft(pe("configuration-option-value ",t.displayTextClass())),d(),et(" ",t.workout()?.schedule?.numberOfExercises," "),d(5),D(t.translations.exerciseLabel),d(3),ft(pe("configuration-option-value ",t.displayTextClass())),d(),et(" ",t.totalWorkoutTime()," "),d(3),D(t.translations.timeUnitLabel),d(3),ft(pe("configuration-option-value ",t.displayTextClass())),d(),et(" ",t.workout()?.schedule?.workoutTime," "),d(5),et(" ",t.translations.workoutLabel),d(2),ft(pe("configuration-option-value ",t.displayTextClass())),d(),et(" ",t.workout()?.schedule?.restTime," "),d(5),D(t.translations.restLabel)}}function Hg(i,n){if(i&1&&F(0,jg,30,17)(1,Ug,41,25),i&2){let t=M();L(t.isNarrowLayout()?0:1)}}function Gg(i,n){i&1&&A(0,"mat-spinner")}function qg(i,n){if(i&1){let t=Lt();l(0,"tbt-workout-launcher-empty-state",44),w("onCreate",function(){_t(t);let o=M(2);return bt(o.onCreate())}),m()}}function $g(i,n){if(i&1&&F(0,Gg,1,0,"mat-spinner")(1,qg,1,0,"tbt-workout-launcher-empty-state",43),i&2){let t=M();L(t.isWorkoutsLoading()?0:1)}}var hi=class i{static LARGE_DISPLAY_TEXT="large-display-text";static SMALL_DISPLAY_TEXT="small-display-text";workout;workouts;isWorkoutsLoading;isSmartPhone;isNewWorkout=R(!1);displayTextClass=v(()=>{let n=this.workout()?.schedule;return n&&(n.restTime>=100||n.workoutTime>=100||n.numberOfSets>=10&&n.numberOfExercises>=10)?i.SMALL_DISPLAY_TEXT:i.LARGE_DISPLAY_TEXT});totalWorkoutTime=v(()=>{let n=0,t=this.workout()?.schedule;if(t!==void 0){let e=t.numberOfExercises*t.workoutTime+(t.numberOfExercises-1)*t.restTime;n=t.numberOfSets*e,t.restTimeBetweenSets?n+=t.numberOfSets*t.restTimeBetweenSets:n+=t.numberOfSets*t.restTime,t.preparationTime&&(n+=t.preparationTime),n=Math.min(Math.round(n/60),999)}return n});translations=s(mi);router=s(Ue);dialogService=s(Ze);workoutConfigurationService=s(yt);layoutDetectionService=s(Fl);signals=s(gt);navigationDrawer=Ce("drawer");sideSheet=Ce("sideSheet");constructor(){this.workout=this.signals.selectedWorkout.toSignal(),this.workouts=this.signals.workouts.toSignal(),this.isWorkoutsLoading=this.signals.isWorkoutsLoading.toSignal(),this.isSmartPhone=this.signals.isSmartPhone.toSignal(),mt(()=>{this.signals.settingsNeedsReload.toSignal()()&&window.location.reload()})}isWorkoutSelected(n){return this.workout()?.id===n?.id}toggleNavigationDrawer(){this.navigationDrawer()?.toggle()}toggleSideSheet(n){this.isNewWorkout.update(()=>n),this.sideSheet()?.toggle()}onCloseSideSheetClicked(){this.sideSheet()?.toggle()}onAboutClicked(){this.navigationDrawer()?.close().then(()=>{this.dialogService.openDialog(Rr,"/about")})}onWorkoutSelected(n){this.workoutConfigurationService.selectWorkout(n.id),this.toggleNavigationDrawer()}onCreate(){this.toggleSideSheet(!0)}isNarrowLayout(){return this.layoutDetectionService.isNarrowLayout()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-workout-launcher"]],viewQuery:function(t,e){t&1&&An(e.navigationDrawer,Fg,5)(e.sideSheet,Lg,5),t&2&&cn(2)},decls:32,vars:14,consts:[["drawer",""],["sideSheet",""],["autosize","",1,"navigation-drawer-container"],["mode","over",1,"navigation-drawer"],[1,"navigation-drawer-content"],[1,"navigation-drawer-header-container"],[1,"navigation-drawer-title-container"],["src","icons/icon-72x72.png",1,"navigation-drawer-app-icon"],[1,"navigation-drawer-title"],[1,"about-button-container","navigation-list","navigation-drawer-small-gap"],["mat-list-item","",1,"about-button",3,"click"],[1,"navigation-drawer-divider"],[1,"navigation-drawer-links"],["mode","over","position","end",1,"side-sheet"],[1,"side-sheet-container"],[1,"side-sheet-nav"],["mat-icon-button","",3,"click","title"],["aria-hidden","true",1,"close-icon"],[1,"side-sheet-header"],[1,"side-sheet-content"],[3,"onWorkoutSaved","isNewWorkout"],[1,"launcher"],[3,"onNavigationMenuToggle","onSideSheetToggle"],[1,"navigation-drawer-label"],[1,"navigation-list"],["mat-list-item","",3,"activated"],["mat-list-item","",3,"click","activated"],[1,"workout-time","configuration-option"],[1,"configuration-description"],["aria-hidden","false",1,"configuration-option-icon","sprint-icon"],[1,"configuration-option-name"],[1,"set-and-exercise-counter","configuration-option"],["aria-hidden","false",1,"configuration-option-icon","laps-icon"],["aria-hidden","false",1,"configuration-option-icon","exercise-icon"],[1,"rest-time","configuration-option"],["aria-hidden","false",1,"configuration-option-icon","coffee-icon"],[1,"left-column"],[1,"configuration-option"],["aria-hidden","false",1,"configuration-option-icon","set-icon"],[1,"center-column"],[1,"right-column"],["aria-hidden","false",1,"configuration-option-icon","workout-icon"],["aria-hidden","false",1,"configuration-option-icon","rest-icon"],[1,"empty-state"],[1,"empty-state",3,"onCreate"]],template:function(t,e){t&1&&(l(0,"mat-sidenav-container",2)(1,"mat-sidenav",3,0)(3,"section",4)(4,"div",5)(5,"div",6),A(6,"img",7),l(7,"h3",8),h(8),m()(),l(9,"mat-nav-list",9)(10,"a",10),w("click",function(){return e.onAboutClicked()}),h(11),m()(),F(12,Ng,1,0,"mat-divider",11),m(),l(13,"div",12),F(14,Bg,5,1),m()()(),l(15,"mat-sidenav",13,1)(17,"section",14)(18,"div",15)(19,"button",16),w("click",function(){return e.onCloseSideSheetClicked()}),l(20,"mat-icon",17),h(21,"arrow_back"),m()(),F(22,zg,2,1,"div",18)(23,Wg,2,1,"div",18),m(),l(24,"div",19)(25,"tbt-workout-schedule",20),w("onWorkoutSaved",function(){return e.onCloseSideSheetClicked()}),m()()()(),l(26,"mat-drawer-content",21)(27,"nav")(28,"tbt-workout-launcher-nav-bar",22),w("onNavigationMenuToggle",function(){return e.toggleNavigationDrawer()})("onSideSheetToggle",function(r){return e.toggleSideSheet(r)}),m()(),l(29,"main"),F(30,Hg,2,1)(31,$g,2,1),m()()()),t&2&&(S("display",e.workout()!==void 0),d(8),D(e.translations.applicationName),d(3),D(e.translations.aboutButtonLabel),d(),L(e.workouts().length?12:-1),d(2),L(e.workouts().length?14:-1),d(5),b("title",lt(e.translations.closeSideSheetButtonLabel)),y("aria-label",e.translations.closeSideSheetButtonLabel),d(3),L(e.isNewWorkout()?22:23),d(3),b("isNewWorkout",e.isNewWorkout()),d(4),S("intro",!e.isWorkoutsLoading()&&e.workout()===void 0),d(),L(e.workout()!==void 0?30:31))},dependencies:[xt,Xt,St,Ft,qn,Xd,kn,as,Kd,_r,em,gr,ss,rm,om,pr,Ir,Br],styles:[`nav[_ngcontent-%COMP%]{width:100%}.navigation-drawer-container[_ngcontent-%COMP%]{height:100%}.navigation-drawer-container.display[_ngcontent-%COMP%]{background-image:url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23e1ecffff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linecap='square' stroke-width='0.5' stroke='%23ffffffff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]{max-width:85%}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]{padding:1rem;display:flex;flex-direction:column;height:calc(100% - 2rem)}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]   .navigation-drawer-app-icon[_ngcontent-%COMP%]{height:44px;width:44px}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]   .navigation-drawer-title[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);font-size:1.5em}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-divider[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level3)}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-label[_ngcontent-%COMP%]{font:var(--mat-sys-title-large);font-size:1.25em;font-weight:200;margin-bottom:1rem;margin-left:0;margin-top:2rem;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-small-gap[_ngcontent-%COMP%]{margin-bottom:1rem;margin-left:0;margin-top:0;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-large-gap[_ngcontent-%COMP%]{margin-bottom:2rem;margin-left:0;margin-top:0;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-links[_ngcontent-%COMP%]{overflow:auto}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-links[_ngcontent-%COMP%]   .navigation-list[_ngcontent-%COMP%]{padding:0}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]{max-width:85%}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem;height:calc(100% - 2rem)}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-nav[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:flex-start;gap:1rem}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-nav[_ngcontent-%COMP%]   .side-sheet-header[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-content[_ngcontent-%COMP%]{height:100%;flex-grow:2}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 1fr [center-column] 50% [right-column] 1fr;grid-template-rows:[center-row] 1fr;height:100%;color:var(--mat-sys-primary)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]{grid-column-start:center-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:center}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(12.5vh,7.5vw);line-height:min(12.5vh,7.5vw);font-size:min(12.5dvh,7.5dvw);line-height:min(12.5dvh,7.5dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(50vh,30vw);line-height:min(50vh,30vw);font-size:min(50dvh,30dvw);line-height:min(50dvh,30dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(50vh,24vw);line-height:min(50vh,24vw);font-size:min(50dvh,24dvw);line-height:min(50dvh,24dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:min(6.25vh,3.75vw);margin-right:.5vw;font-size:min(6.25dvh,3.75dvw);margin-right:.5dvw;height:auto;width:auto}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(6.25vh,3.75vw);line-height:min(6.25vh,3.75vw);font-size:min(6.25dvh,3.75dvw);line-height:min(6.25dvh,3.75dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-family:Exo,serif;font-optical-sizing:auto;font-weight:500;font-style:normal;margin:0;text-shadow:5px 5px 10px #b6afaf,-5px -5px 10px #ffffff}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(25vh,15vw);line-height:min(25vh,15vw);font-size:min(25dvh,15dvw);line-height:min(25dvh,15dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(25vh,12vw);line-height:min(25vh,12vw);font-size:min(25dvh,12dvw);line-height:min(25dvh,12dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main.intro[_ngcontent-%COMP%]{display:block;height:auto}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 50% [bottom-row] 1fr;height:100%}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 2;grid-row-start:top-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(11.25vh,9.375vw);line-height:min(11.25vh,9.375vw);font-size:min(11.25dvh,9.375dvw);line-height:min(11.25dvh,9.375dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(45vh,30vw);line-height:min(45vh,30vw);font-size:min(45dvh,30dvw);line-height:min(45dvh,30dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(45vh,30vw);line-height:min(45vh,30vw);font-size:min(45dvh,30dvw);line-height:min(45dvh,30dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:min(5.625vh,4.5vw);margin-right:.5vw;font-size:min(5.625dvh,4.5dvw);margin-right:.5dvw}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(5.625vh,4.5vw);line-height:min(5.625vh,4.5vw);font-size:min(5.625dvh,4.5dvw);line-height:min(5.625dvh,4.5dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(22.5vh,15vw);line-height:min(22.5vh,15vw);font-size:min(22.5dvh,15dvw);line-height:min(22.5dvh,15dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(25vh,15vw);line-height:min(25vh,15vw);font-size:min(25dvh,15dvw);line-height:min(25dvh,15dvw)}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[column] 1fr;grid-template-rows:[top-row] 1fr [center-row] 1fr [bottom-row] 1fr;height:100%}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .workout-time[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .workout-time[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .rest-time[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .rest-time[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .set-and-exercise-counter.configuration-option[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .set-and-exercise-counter.configuration-option[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%]{font-family:Exo,serif;font-optical-sizing:auto;font-weight:500;font-style:normal;margin:0;border:0}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:18vh;line-height:18vh;font-size:18dvh;line-height:18dvh}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:4vh;font-size:4dvh;margin-right:.5dvh,dvw;height:auto;width:auto}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:4vh;line-height:4vh;font-size:4dvh;line-height:4dvh}`]})};var js=class{constructor(n,t=Ys){this.activeWorkout=n;this.scheduler=t}activeWorkout;scheduler;timer;subscription;workoutTimeline=[];currentActivityPointer=0;lastTick=0;pausedAtTick=0;start(){this.createWorkoutTimeline(),this.timer=Qr(0,1e3,this.scheduler),this.subscription=this.timer.subscribe(n=>this.onTick(n)),this.publishCurrentActivity()}stop(){this.subscription?.unsubscribe(),this.timer=void 0}pause(){this.pausedAtTick=this.lastTick,this.stop()}resume(){this.timer=Qr(0,1e3,this.scheduler),this.subscription=this.timer.subscribe(n=>this.onTick(n))}rewind(){this.pause();let n=!1,t=this.workoutTimeline[this.currentActivityPointer];t.remainingSeconds<t.length?(this.pausedAtTick-=t.length-t.remainingSeconds,this.lastTick-=t.length-t.remainingSeconds,t.remainingSeconds=t.length,n=!0):this.currentActivityPointer-1>=0&&(this.currentActivityPointer--,t=this.workoutTimeline[this.currentActivityPointer],t.remainingSeconds=t.length,this.pausedAtTick-=t.length,this.lastTick-=t.length,n=!0),n&&this.publishCurrentActivity()}forward(){this.pause();let n=!1,t=this.workoutTimeline[this.currentActivityPointer];this.currentActivityPointer+1<this.workoutTimeline.length?(t.remainingSeconds<t.length?(this.pausedAtTick+=t.remainingSeconds,this.lastTick+=t.remainingSeconds):(this.pausedAtTick+=t.length,this.lastTick+=t.length),t.remainingSeconds=0,this.currentActivityPointer++,t=this.workoutTimeline[this.currentActivityPointer],n=!0):t.remainingSeconds<t.length&&(this.pausedAtTick+=t.remainingSeconds,this.lastTick+=t.remainingSeconds,t.remainingSeconds=0,n=!0),n&&this.publishCurrentActivity()}onTick(n){this.lastTick=this.calculateCounter(n);let t=this.workoutTimeline[this.currentActivityPointer],e=t.finishTimestamp-this.lastTick;t.remainingSeconds=e,e===0&&this.currentActivityPointer++,this.currentActivityPointer<this.workoutTimeline.length?this.publishCurrentActivity():(this.stop(),this.currentActivityPointer--,this.publishFinalActivity())}publishCurrentActivity(){postMessage({workoutActivity:this.workoutTimeline[this.currentActivityPointer],isWorkoutFinished:!1})}publishFinalActivity(){postMessage({workoutActivity:this.workoutTimeline[this.workoutTimeline.length-1],isWorkoutFinished:!0})}calculateCounter(n){return this.pausedAtTick+n}createWorkoutTimeline(){let n=0;this.activeWorkout.schedule.preparationTime&&(n+=this.activeWorkout.schedule.preparationTime,this.workoutTimeline.push({type:0,finishTimestamp:n,remainingSeconds:this.activeWorkout.schedule.preparationTime,length:this.activeWorkout.schedule.preparationTime,set:1,activity:1}));for(let t=0;t<this.activeWorkout.schedule.numberOfSets;t++)for(let e=0;e<this.activeWorkout.schedule.numberOfExercises;e++)n+=this.activeWorkout.schedule.workoutTime,this.workoutTimeline.push({type:1,finishTimestamp:n,remainingSeconds:this.activeWorkout.schedule.workoutTime,length:this.activeWorkout.schedule.workoutTime,set:t+1,activity:e+1}),this.activeWorkout.schedule.restTimeBetweenSets>0?e<this.activeWorkout.schedule.numberOfExercises-1?(n+=this.activeWorkout.schedule.restTime,this.workoutTimeline.push({type:2,finishTimestamp:n,remainingSeconds:this.activeWorkout.schedule.restTime,length:this.activeWorkout.schedule.restTime,set:t+1,activity:e+1})):t<this.activeWorkout.schedule.numberOfSets-1&&(n+=this.activeWorkout.schedule.restTimeBetweenSets,this.workoutTimeline.push({type:3,finishTimestamp:n,remainingSeconds:this.activeWorkout.schedule.restTimeBetweenSets,length:this.activeWorkout.schedule.restTimeBetweenSets,set:t+1,activity:e+1})):(n+=this.activeWorkout.schedule.restTime,this.workoutTimeline.push({type:2,finishTimestamp:n,remainingSeconds:this.activeWorkout.schedule.restTime,length:this.activeWorkout.schedule.restTime,set:t+1,activity:e+1}))}};if(typeof Worker<"u"){let i;addEventListener("message",({data:n})=>{switch(n?.command){case 0:n.workout&&(i=new js(n?.workout),i.start());break;case 1:i?.stop();break;case 2:i?.pause();break;case 3:i?.resume();break;case 4:i?.rewind();break;case 5:i?.forward();break;default:console.log(`Unknown command: ${n}`)}})}var zr=class i{wakeLock=null;isSupported;visibilityChangeHandler=null;get supported(){return this.isSupported}constructor(){this.isSupported="wakeLock"in navigator,this.isSupported&&(this.visibilityChangeHandler=this.handleVisibilityChange.bind(this),document.addEventListener("visibilitychange",this.visibilityChangeHandler))}ngOnDestroy(){this.visibilityChangeHandler&&document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.releaseWakeLock()}async requestWakeLock(){if(!this.isSupported)return!1;try{return this.wakeLock=await navigator.wakeLock.request("screen"),this.wakeLock.addEventListener("release",()=>{this.wakeLock=null}),!0}catch(n){return console.error(`Failed to request wake lock: ${n}`),!1}}async releaseWakeLock(){this.isSupported&&this.wakeLock&&(await this.wakeLock.release(),this.wakeLock=null)}async handleVisibilityChange(){this.isSupported&&document.visibilityState==="visible"&&!this.wakeLock&&await this.requestWakeLock()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var pi=class i{currentWorkoutActivity;countdown;worker;platformId=s(uo);signals=s(gt);wakeLockService=s(zr);constructor(){this.currentWorkoutActivity=this.signals.currentWorkoutActivity.toSignal(),this.countdown=this.signals.countdown.toSignal(),_o(this.platformId)&&(this.worker=new Worker(new URL("worker-DQAWI73E.js",import.meta.url),{type:"module"}))}async start(n){this.worker&&(this.wakeLockService.supported&&await this.wakeLockService.requestWakeLock(),this.worker.postMessage({command:0,workout:n}),this.worker.onmessage=t=>{if(t.data?.workoutActivity?.type>=0&&t.data?.workoutActivity?.remainingSeconds>=0&&t.data?.workoutActivity?.set>=1&&t.data?.workoutActivity?.activity>=1){let e=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.type!==t.data?.workoutActivity?.type,o=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.activity!==t.data?.workoutActivity?.activity,r=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.set!==t.data?.workoutActivity?.set;this.signals.currentWorkoutActivity.update(()=>t.data?.workoutActivity),this.countdown()>0&&e?(this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!0)):t.data?.workoutActivity?.remainingSeconds<=3&&t.data?.workoutActivity?.remainingSeconds>=1?this.signals.countdown.set(t.data?.workoutActivity?.remainingSeconds):(this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!1)),this.signals.isActivityChanged.set(!!o),this.signals.isSetChanged.set(!!r),this.signals.isWorkoutFinished.set(t.data?.isWorkoutFinished)}})}async stop(){this.worker?.postMessage({command:1}),this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!1),this.signals.isActivityChanged.set(!1),this.signals.isSetChanged.set(!1),this.signals.isWorkoutFinished.set(!1),this.wakeLockService.supported&&this.wakeLockService.releaseWakeLock()}pause(){this.worker?.postMessage({command:2})}resume(){this.worker?.postMessage({command:3})}rewind(){this.worker?.postMessage({command:4})}forward(){this.worker?.postMessage({command:5})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Wr=class i extends rt{backToHomeButtonLabel=$localize`:Back button label@@backToHomeButtonLabel:Back`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var jr=class i{selectedWorkout;title=v(()=>this.selectedWorkout()?.name?this.selectedWorkout().name:this.translations.applicationName);translations=s(Wr);router=s(Ue);workoutRunnerService=s(pi);signals=s(gt);constructor(){this.selectedWorkout=this.signals.selectedWorkout.toSignal()}async onBackClicked(n){n.stopPropagation(),await this.workoutRunnerService.stop(),this.router.navigateByUrl("/launcher")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-basic-nav-bar"]],decls:7,vars:4,consts:[[1,"timer-navbar"],[1,"action-icons"],["mat-icon-button","",1,"back-arrow",3,"click","title"],["aria-hidden","true",1,"back-icon"],[1,"navbar-title"]],template:function(t,e){t&1&&(l(0,"mat-toolbar",0)(1,"span",1)(2,"button",2),w("click",function(r){return e.onBackClicked(r)}),l(3,"mat-icon",3),h(4,"arrow_back"),m()()(),l(5,"span",4),h(6),m()()),t&2&&(d(2),b("title",lt(e.translations.backToHomeButtonLabel)),y("aria-label",e.translations.backToHomeButtonLabel),d(4),D(e.title()))},dependencies:[Wo,zo,St,Ft,xt,Xt],styles:[".timer-navbar[_ngcontent-%COMP%]{color:#fff;background:transparent}.timer-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%]{font-weight:700}.timer-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]})};var Ur=class i extends rt{resumeButtonLabel=$localize`:Resume button label@@resumeButtonLabel:Resume (Space bar)`;pauseButtonLabel=$localize`:Pause button label@@pauseButtonLabel:Pause (Space bar)`;rewindButtonLabel=$localize`:Rewind button label@@rewindButtonLabel:Rewind`;forwardButtonLabel=$localize`:Forward button label@@forwardButtonLabel:Forward`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};function Fm(i){i||(i=s(ze));let n=new ae(t=>{if(i.destroyed){t.next();return}return i.onDestroy(t.next.bind(t))});return t=>t.pipe(st(n))}function Lm(i,n){let t=n?.injector??s(z),e=new bi(1),o=mt(()=>{let r;try{r=i()}catch(a){G(()=>e.error(a));return}G(()=>e.next(r))},{injector:t,manualCleanup:!0});return t.get(ze).onDestroy(()=>{o.destroy(),e.complete()}),e.asObservable()}function Xg(i,n){i&1&&(l(0,"mat-icon",10),h(1,"play_arrow"),m()),i&2&&b("inline",!0)}function Yg(i,n){i&1&&(l(0,"mat-icon",11),h(1,"pause"),m()),i&2&&b("inline",!0)}function Qg(i,n){if(i&1){let t=Lt();l(0,"section",6)(1,"button",7),w("click",function(o){_t(t);let r=M();return bt(r.onRewindClicked(o))}),l(2,"mat-icon",8),h(3,"fast_rewind"),m()(),l(4,"button",9),w("click",function(o){_t(t);let r=M();return bt(r.onPauseToggled(o))}),F(5,Xg,2,1,"mat-icon",10)(6,Yg,2,1,"mat-icon",11),m(),l(7,"button",12),w("click",function(o){_t(t);let r=M();return bt(r.onForwardClicked(o))}),l(8,"mat-icon",13),h(9,"fast_forward"),m()()()}if(i&2){let t=M();d(),b("disableRipple",!0)("title",t.rewindButtonLabel()),y("aria-label",t.rewindButtonLabel()),d(),b("inline",!0),d(2),b("disableRipple",!0)("title",t.pauseResumeButtonLabel()),y("aria-label",t.pauseResumeButtonLabel()),d(),L(t.isPaused()?5:6),d(2),b("disableRipple",!0)("title",t.forwardButtonLabel()),y("aria-label",t.forwardButtonLabel()),d(),b("inline",!0)}}var Hr=class i{static COUNTDOWN_COLOR="#EFB700";static EXERCISE_COLOR="#008450";static REST_COLOR="#B81D13";static WORKOUT_FINISH_COLOR="#005CBB";static LARGE_DISPLAY_TEXT="large-display-text";static SMALL_DISPLAY_TEXT="small-display-text";selectedWorkout;currentWorkoutActivity;countdown;isCountdownFinished;isActivityChanged;isSetChanged;isWorkoutFinished;settings;isAnimationEnabled=R(!0);isAudioEnabled=R(!0);isWorkoutPresent=v(()=>!!this.selectedWorkout());isWorkoutStarted=v(()=>!!this.currentWorkoutActivity());remainingTime=v(()=>{let n=this.currentWorkoutActivity()?.remainingSeconds;return n||0});set=v(()=>{let n=this.currentWorkoutActivity()?.set;return n||1});exercise=v(()=>{let n=this.currentWorkoutActivity()?.activity;return n||1});color=v(()=>{let n=this.currentWorkoutActivity()?.type,t="";return this.isWorkoutFinished()?t=i.WORKOUT_FINISH_COLOR:this.countdown()>0?t=i.COUNTDOWN_COLOR:n===1?t=i.EXERCISE_COLOR:t=i.REST_COLOR,t});activityIcon=v(()=>{let n="";switch(this.currentWorkoutActivity()?.type){case 1:n="sprint";break;case 2:n="coffee";break;case 3:case 0:n="sports_score";break;default:n="home"}return n});activityIconPulseAnimation=v(()=>{let n=this.currentWorkoutActivity()?.length;if(this.isAnimationEnabled()&&n&&this.remainingTime()<n&&this.remainingTime()!==0){let t=n%2===0?1:0;return this.remainingTime()%2===t}return!1});activityPulseAnimation=v(()=>!!(this.isAnimationEnabled()&&this.isActivityChanged()));setPulseAnimation=v(()=>!!(this.isAnimationEnabled()&&this.isSetChanged()));displayTextClass=v(()=>{let n=this.selectedWorkout()?.schedule;return n&&(n.restTime>=100||n.workoutTime>=100)?i.SMALL_DISPLAY_TEXT:i.LARGE_DISPLAY_TEXT});pauseResumeButtonLabel=v(()=>this.isPaused()?this.translations.resumeButtonLabel:this.translations.pauseButtonLabel);rewindButtonLabel;forwardButtonLabel;isPaused=R(!1);workoutRunnerService=s(pi);audioPlaybackService=s(wo);dialogService=s(ur);translations=s(Ur);signals=s(gt);constructor(){this.selectedWorkout=this.signals.selectedWorkout.toSignal(),this.currentWorkoutActivity=this.signals.currentWorkoutActivity.toSignal(),this.countdown=this.signals.countdown.toSignal(),this.isCountdownFinished=this.signals.isCountdownFinished.toSignal(),this.isActivityChanged=this.signals.isActivityChanged.toSignal(),this.isWorkoutFinished=this.signals.isWorkoutFinished.toSignal(),this.isSetChanged=this.signals.isSetChanged.toSignal(),this.rewindButtonLabel=R(this.translations.rewindButtonLabel),this.forwardButtonLabel=R(this.translations.forwardButtonLabel),this.settings=this.signals.settings.toSignal(),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled),mt(()=>{this.isAudioEnabled()&&(this.countdown()>0&&this.audioPlaybackService.playCountdownSound(),this.isCountdownFinished()&&(this.currentWorkoutActivity()?.type===3?this.audioPlaybackService.playSetFinishedSound():this.audioPlaybackService.playCountdownFinishedSound()))}),mt(()=>{this.isWorkoutFinished()&&G(this.isAudioEnabled)&&this.audioPlaybackService.playWorkoutFinishedSound()}),el(window,"keydown").pipe(J(n=>n.code==="Space"),Fm()).subscribe(n=>{n.preventDefault(),n.stopPropagation(),this.switchWorkoutRunnerState()})}async ngAfterViewInit(){this.selectedWorkout()&&await this.workoutRunnerService.start(this.selectedWorkout())}onRewindClicked(n){n.stopPropagation(),this.isPaused()||this.isPaused.update(t=>!0),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!1),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!1),this.workoutRunnerService.rewind()}onForwardClicked(n){n.stopPropagation(),this.isPaused()||this.isPaused.update(t=>!0),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!1),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!1),this.workoutRunnerService.forward()}onPauseToggled(n){n.stopPropagation(),this.switchWorkoutRunnerState()}switchWorkoutRunnerState(){this.isPaused.update(n=>!n),this.isPaused()?this.workoutRunnerService.pause():(this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!0),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!0),this.workoutRunnerService.resume())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-basic-timer"]],decls:17,vars:18,consts:[[3,"click","dblclick"],[1,"set-counter"],[1,"info-icon"],["aria-hidden","false",1,"laps","info-icon"],[1,"exercise-counter"],["aria-hidden","false",1,"activity","info-icon"],[1,"timer-controls"],["mat-icon-button","",1,"rewind-button",3,"click","disableRipple","title"],["aria-hidden","true",1,"fast_rewind",3,"inline"],["mat-icon-button","",1,"pause-button",3,"click","disableRipple","title"],["aria-hidden","true",1,"play_arrow",3,"inline"],["aria-hidden","true",1,"pause",3,"inline"],["mat-icon-button","",1,"forward-button",3,"click","disableRipple","title"],["aria-hidden","true",1,"fast_forward",3,"inline"]],template:function(t,e){t&1&&(l(0,"nav",0),w("click",function(r){return e.onPauseToggled(r)})("dblclick",function(r){return e.onRewindClicked(r)}),A(1,"tbt-basic-nav-bar"),m(),l(2,"main",0),w("click",function(r){return e.onPauseToggled(r)})("dblclick",function(r){return e.onRewindClicked(r)}),l(3,"section"),h(4),m(),l(5,"section",1)(6,"span"),h(7),m(),A(8,"span",2),l(9,"mat-icon",3),h(10,"laps"),m()(),l(11,"section",4)(12,"span"),h(13),m(),l(14,"mat-icon",5),h(15),m()(),F(16,Qg,10,12,"section",6),m()),t&2&&(d(2),ie("background-color",e.color()),d(),ft(pe("countdown-timer ",e.displayTextClass())),d(),D(e.remainingTime()),d(),S("pulse",e.setPulseAnimation()),d(2),dn("",e.set(),"/",e.selectedWorkout()?.schedule?.numberOfSets??"?"),d(4),S("pulse",e.activityPulseAnimation()),d(2),dn("",e.exercise(),"/",e.selectedWorkout()?.schedule?.numberOfExercises??"?"," "),d(),S("pulse",e.activityIconPulseAnimation()),d(),D(e.activityIcon()),d(),L(e.isWorkoutPresent()&&e.isWorkoutStarted()?16:-1))},dependencies:[xt,Xt,St,Ft,qn,jr],styles:["@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}nav[_ngcontent-%COMP%]{position:fixed;width:100%;top:0}main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 1fr [center-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 80% [bottom-row] 1fr;width:100vw;height:calc(100vh - var(--mat-toolbar-standard-height, 64px));height:calc(100dvh - var(--mat-toolbar-standard-height, 64px));padding-top:var(--mat-toolbar-standard-height, 64px);color:#fff}main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:center-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal}main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(80vh,50vw);line-height:min(80vh,50vw);font-size:min(80dvh,50dvw);line-height:min(80dvh,50dvw)}main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(70vh,30vw);line-height:min(70vh,30vw);font-size:min(70dvh,30dvw);line-height:min(70dvh,30dvw)}main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;grid-column-start:left-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal;font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw)}main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;grid-column-start:right-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal;font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw)}main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw);height:auto;width:auto;will-change:transform}main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:min(3vh,3vw);gap:min(3dvh,3dvw);grid-column-start:center-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}main[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1s ease forwards}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 25% [center-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 75% [bottom-row] 1fr}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:left-column;grid-column-end:span 3;grid-row-start:top-row;grid-row-end:span 1;font-style:normal}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(75vh,75vw);line-height:min(75vh,75vw);font-size:min(75dvh,75dvw);line-height:min(75dvh,75dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(55vh,55vw);line-height:min(55vh,55vw);font-size:min(55dvh,55dvw);line-height:min(55dvh,55dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1;font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1;font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{gap:in(3vh,3vw);gap:in(3dvh,3dvw);grid-column-start:center-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 60% [center-row] 20% [bottom-row] 1fr}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:left-column;grid-column-end:span 2;grid-row-start:top-row;grid-row-end:span 1;font-style:normal}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(60vh,75vw);line-height:min(60vh,75vw);font-size:min(60dvh,75dvw);line-height:min(60dvh,75dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(50vh,55vw);line-height:min(50vh,55vw);font-size:min(50dvh,55dvw);line-height:min(50dvh,55dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{gap:5vw;gap:5dvw;grid-column-start:left-column;grid-column-end:span 2;grid-row-start:bottom-row;grid-row-end:span 1}"]})};var Gr=class i extends rt{settingsHeader=$localize`:Header for settings page@@settingsHeader:Settings`;backFromSettingsButtonLabel=$localize`:Back button label@@backFromSettingsButtonLabel:Back`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Zg=["*"],fi=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-portrait-page-decoration"]],ngContentSelectors:Zg,decls:4,vars:0,consts:[[1,"layout-root"],[1,"content"],[1,"background"]],template:function(t,e){t&1&&(K(),Dt(0,"div",0)(1,"div",1),k(2),At(),Ht(3,"div",2),At())},styles:[`.layout-root[_ngcontent-%COMP%]{height:100%;width:100%;display:grid;grid-template-columns:1fr}.layout-root[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;width:100%;grid-row-start:1;grid-column-start:1}.layout-root[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{grid-row-start:1;grid-column-start:1;height:100%;width:100%;clip-path:polygon(0 80%,100% 60%,100% 100%,0 100%);background-image:url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23e1ecffff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linecap='square' stroke-width='0.5' stroke='%23ffffffff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")}`]})};var qr=class i{isFormValid=!0;isFormDirty=!1;translations=s(Gr);location=s(Tn);signals=s(gt);constructor(){}onBackClicked(){this.isFormValid&&this.isFormDirty&&this.signals.isSettingsSaveInProgress.set(!0),this.location.back()}setValid(n){this.isFormValid=n}setDirty(n){this.isFormDirty=n}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-settings"]],decls:9,vars:4,consts:[[1,"settings-container"],[1,"settings-title"],["mat-icon-button","",1,"back-arrow",3,"click","title"],["aria-hidden","true",1,"back-icon"],[1,"settings-content"],[3,"isDirty","isValid"]],template:function(t,e){t&1&&(l(0,"tbt-portrait-page-decoration")(1,"section",0)(2,"h2",1)(3,"button",2),w("click",function(){return e.onBackClicked()}),l(4,"mat-icon",3),h(5,"arrow_back"),m()(),h(6),m(),l(7,"div",4)(8,"tbt-settings-form",5),w("isDirty",function(r){return e.setDirty(r)})("isValid",function(r){return e.setValid(r)}),m()()()()),t&2&&(d(3),b("title",lt(e.translations.backFromSettingsButtonLabel)),y("aria-label",e.translations.backFromSettingsButtonLabel),d(3),et(" ",e.translations.settingsHeader," "))},dependencies:[xt,Xt,St,Ft,ii,fi],styles:[".settings-container[_ngcontent-%COMP%]{height:calc(100% - 3em);padding:1.5rem}.settings-container[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;font-weight:400;font:var(--mat-sys-title-large)}.settings-container[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%]{margin-right:.25rem}"]})};var $r=class i extends rt{aboutHeader=$localize`:Header for about page@@aboutHeader:About`;backFromAboutButtonLabel=$localize`:Back button label@@backFromAboutButtonLabel:Back`;static \u0275fac=(()=>{let n;return function(e){return(n||(n=U(i)))(e||i)}})();static \u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"})};var Kr=class i{translations=s($r);location=s(Tn);constructor(){}onBackClicked(){this.location.back()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["tbt-about"]],decls:9,vars:4,consts:[[1,"about-container"],[1,"about-title"],["mat-icon-button","",1,"back-arrow",3,"click","title"],["aria-hidden","true",1,"back-icon"],[1,"about-content"]],template:function(t,e){t&1&&(l(0,"tbt-portrait-page-decoration")(1,"section",0)(2,"h2",1)(3,"button",2),w("click",function(){return e.onBackClicked()}),l(4,"mat-icon",3),h(5,"arrow_back"),m()(),h(6),m(),l(7,"div",4),A(8,"tbt-application-info"),m()()()),t&2&&(d(3),b("title",lt(e.translations.backFromAboutButtonLabel)),y("aria-label",e.translations.backFromAboutButtonLabel),d(3),et(" ",e.translations.aboutHeader," "))},dependencies:[St,Ft,xt,Xt,ui,fi],styles:[".about-container[_ngcontent-%COMP%]{height:calc(100% - 3em);padding:1.5rem}.about-container[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;font-weight:400;font:var(--mat-sys-title-large)}.about-container[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%]{margin-right:.25rem}"]})};var Nm=[{path:"launcher",component:hi},{path:"timer",component:Hr},{path:"about",component:Kr},{path:"settings",component:qr},{path:"",component:hi,pathMatch:"full"},{path:"**",component:hi,pathMatch:"full"}];var Us="Service workers are disabled or not supported by this browser",gi=class{serviceWorker;worker;registration;events;constructor(n,t){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new ae(e=>e.error(new dt(5601,!1)));else{let e=null,o=new C;this.worker=new ae(p=>(e!==null&&p.next(e),o.subscribe(f=>p.next(f))));let r=()=>{let{controller:p}=n;p!==null&&(e=p,o.next(e))};n.addEventListener("controllerchange",r),r(),this.registration=this.worker.pipe(se(()=>n.getRegistration().then(p=>{if(!p)throw new dt(5601,!1);return p})));let a=new C;this.events=a.asObservable();let c=p=>{let{data:f}=p;f?.type&&a.next(f)};n.addEventListener("message",c),t?.get(We,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",r),n.removeEventListener("message",c)})}}postMessage(n,t){return new Promise(e=>{this.worker.pipe(Ct(1)).subscribe(o=>{o.postMessage(I({action:n},t)),e()})})}postMessageWithOperation(n,t,e){let o=this.waitForOperationCompleted(e),r=this.postMessage(n,t);return Promise.all([r,o]).then(([,a])=>a)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let t;return typeof n=="string"?t=e=>e.type===n:t=e=>n.includes(e.type),this.events.pipe(J(t))}nextEventOfType(n){return this.eventsOfType(n).pipe(Ct(1))}waitForOperationCompleted(n){return new Promise((t,e)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(J(o=>o.nonce===n),Ct(1),Et(o=>{if(o.result!==void 0)return o.result;throw new Error(o.error)})).subscribe({next:t,error:e})})}get isEnabled(){return!!this.serviceWorker}},Jg=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new C;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=Be,this.notificationClicks=Be,this.notificationCloses=Be,this.pushSubscriptionChanges=Be,this.subscription=Be;return}this.messages=this.sw.eventsOfType("PUSH").pipe(Et(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(Et(o=>o.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(Et(o=>o.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(Et(o=>o.data)),this.pushManager=this.sw.registration.pipe(Et(o=>o.pushManager));let e=this.pushManager.pipe(se(o=>o.getSubscription()));this.subscription=new ae(o=>{let r=e.subscribe(o),a=this.subscriptionChanges.subscribe(o);return()=>{r.unsubscribe(),a.unsubscribe()}})}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Us));let e={userVisibleOnly:!0},o=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),r=new Uint8Array(new ArrayBuffer(o.length));for(let a=0;a<o.length;a++)r[a]=o.charCodeAt(a);return e.applicationServerKey=r,new Promise((a,c)=>{this.pushManager.pipe(se(u=>u.subscribe(e)),Ct(1)).subscribe({next:u=>{this.subscriptionChanges.next(u),a(u)},error:c})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Us));let t=e=>{if(e===null)throw new dt(5602,!1);return e.unsubscribe().then(o=>{if(!o)throw new dt(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((e,o)=>{this.subscription.pipe(Ct(1),se(t)).subscribe({next:e,error:o})})}decodeBase64(t){return atob(t)}static \u0275fac=function(e){return new(e||i)(ia(gi))};static \u0275prov=$({token:i,factory:i.\u0275fac})}return i})(),Hs=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=Be,this.unrecoverable=Be;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Us));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let t=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new dt(5601,!1));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(e){return new(e||i)(ia(gi))};static \u0275prov=$({token:i,factory:i.\u0275fac})}return i})(),Bm=new _("");function t_(){let i=s(lo);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let n=s(Bm),t=s(N),e=s(We);t.runOutsideAngular(()=>{let o=navigator.serviceWorker,r=()=>o.controller?.postMessage({action:"INITIALIZE"});o.addEventListener("controllerchange",r),e.onDestroy(()=>{o.removeEventListener("controllerchange",r)})}),t.runOutsideAngular(()=>{let o,{registrationStrategy:r}=i;if(typeof r=="function")o=new Promise(a=>r().subscribe(()=>a()));else{let[a,...c]=(r||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":o=Promise.resolve();break;case"registerWithDelay":o=Vm(+c[0]||0);break;case"registerWhenStable":o=Promise.race([e.whenStable(),Vm(+c[0])]);break;default:throw new dt(5600,!1)}}o.then(()=>{e.destroyed||navigator.serviceWorker.register(n,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(a=>console.error(al(5604,!1)))})})}function Vm(i){return new Promise(n=>setTimeout(n,i))}function e_(){let i=s(lo),n=s(z),t=!0;return new gi(t&&i.enabled!==!1?navigator.serviceWorker:void 0,n)}var lo=class{enabled;updateViaCache;type;scope;registrationStrategy};function zm(i,n={}){return oa([Jg,Hs,{provide:Bm,useValue:i},{provide:lo,useValue:n},{provide:gi,useFactory:e_},yi(t_)])}var Gs={providers:[_l(),Ol(Nm,El()),zm("ngsw-worker.js",{enabled:!wl(),registrationStrategy:"registerImmediately"}),Ml(xl(),kl()),yi(async()=>{let i=s(gt),n=Lm(i.isWorkoutsLoading.toSignal()),t=s(yt);return Js(n.pipe(J(e=>e===!1),Ct(1)))}),yi(async()=>{let i=s(Hs),n=s(uo);_o(n)&&i.isEnabled&&i.versionUpdates.pipe(J(t=>t.type==="VERSION_READY")).subscribe(()=>{window.location.reload()})})]};var Wm;function jm(i){Wm??=new TextEncoder;let n=Wm.encode(i),t=new DataView(n.buffer,n.byteOffset,n.byteLength),e=Um(t,n.length,0),o=Um(t,n.length,102072);return e==0&&(o==0||o==1)&&(e=e^319790063,o=o^-1801410264),BigInt.asUintN(32,BigInt(e))<<BigInt(32)|BigInt.asUintN(32,BigInt(o))}function n_(i,n=""){let t=jm(i);return n&&(t=BigInt.asUintN(64,t<<BigInt(1))|t>>BigInt(63)&BigInt(1),t+=jm(n)),BigInt.asUintN(63,t).toString()}function Um(i,n,t){let e=2654435769,o=2654435769,r=0,a=n-12;for(;r<=a;r+=12){e+=i.getUint32(r,!0),o+=i.getUint32(r+4,!0),t+=i.getUint32(r+8,!0);let u=Hm(e,o,t);e=u[0],o=u[1],t=u[2]}let c=n-r;return t+=n,c>=4?(e+=i.getUint32(r,!0),r+=4,c>=8?(o+=i.getUint32(r,!0),r+=4,c>=9&&(t+=i.getUint8(r++)<<8),c>=10&&(t+=i.getUint8(r++)<<16),c===11&&(t+=i.getUint8(r++)<<24)):(c>=5&&(o+=i.getUint8(r++)),c>=6&&(o+=i.getUint8(r++)<<8),c===7&&(o+=i.getUint8(r++)<<16))):(c>=1&&(e+=i.getUint8(r++)),c>=2&&(e+=i.getUint8(r++)<<8),c===3&&(e+=i.getUint8(r++)<<16)),Hm(e,o,t)[2]}function Hm(i,n,t){return i-=n,i-=t,i^=t>>>13,n-=t,n-=i,n^=i<<8,t-=i,t-=n,t^=n>>>13,i-=n,i-=t,i^=t>>>12,n-=t,n-=i,n^=i<<16,t-=i,t-=n,t^=n>>>5,i-=n,i-=t,i^=t>>>3,n-=t,n-=i,n^=i<<10,t-=i,t-=n,t^=n>>>15,[i,n,t]}function Gm(i,n,t,e,o=[]){let r={},a={},c={},u=i_(i[0],i.raw[0]),p=[u.text],f=[],j=u.text;for(let at=1;at<i.length;at++){let{messagePart:wt,placeholderName:te=r_(at),associatedMessageId:_i}=o_(i[at],i.raw[at]);j+=`{$${te}}${wt}`,n!==void 0&&(r[te]=n[at-1],a[te]=o[at-1]),f.push(te),_i!==void 0&&(c[te]=_i),p.push(wt)}let it=u.customId||n_(j,u.meaning||""),kt=u.legacyIds?u.legacyIds.filter(at=>at!==it):[];return{id:it,legacyIds:kt,substitutions:r,substitutionLocations:a,text:j,customId:u.customId,meaning:u.meaning||"",description:u.description||"",messageParts:p,messagePartLocations:e,placeholderNames:f,associatedMessageIds:c,location:t}}function i_(i,n){let{text:t,block:e}=qm(i,n);if(e===void 0)return{text:t};{let[o,...r]=e.split("\u241F"),[a,c]=o.split("@@",2),[u,p]=a.split("|",2);return p===void 0&&(p=u,u=void 0),p===""&&(p=void 0),{text:t,meaning:u,description:p,customId:c,legacyIds:r}}}function o_(i,n){let{text:t,block:e}=qm(i,n);if(e===void 0)return{messagePart:t};{let[o,r]=e.split("@@");return{messagePart:t,placeholderName:o,associatedMessageId:r}}}function qm(i,n){if(n.charAt(0)!==":")return{text:i};{let t=a_(i,n);return{block:i.substring(1,t),text:i.substring(t+1)}}}function r_(i){return i===1?"PH":`PH_${i-1}`}function a_(i,n){for(let t=1,e=1;t<i.length;t++,e++)if(n[e]==="\\")e++;else if(i[t]===":")return t;throw new Error(`Unterminated $localize metadata block in "${n}".`)}var qs=class extends Error{parsedMessage;type="MissingTranslationError";constructor(n){super(`No translation found for ${$m(n)}.`),this.parsedMessage=n}};function l_(i,n,t){let e=Gm(n,t),o=i[e.id];if(e.legacyIds!==void 0)for(let r=0;r<e.legacyIds.length&&o===void 0;r++)o=i[e.legacyIds[r]];if(o===void 0)throw new qs(e);return[o.messageParts,o.placeholderNames.map(r=>{if(e.substitutions.hasOwnProperty(r))return e.substitutions[r];throw new Error(`There is a placeholder name mismatch with the translation provided for the message ${$m(e)}.
The translation contains a placeholder with name ${r}, which does not exist in the message.`)})]}function c_(i){let n=i.split(/{\$([^}]*)}/),t=[n[0]],e=[];for(let r=1;r<n.length-1;r+=2)e.push(n[r]),t.push(`${n[r+1]}`);let o=t.map(r=>r.charAt(0)===":"?"\\"+r:r);return{text:i,messageParts:d_(t,o),placeholderNames:e}}function d_(i,n){return Object.defineProperty(i,"raw",{value:n}),i}function $m(i){let n=i.meaning&&` - "${i.meaning}"`,t=i.legacyIds&&i.legacyIds.length>0?` [${i.legacyIds.map(e=>`"${e}"`).join(", ")}]`:"";return`"${i.id}"${t} ("${i.text}"${n})`}function Km(i){$localize.translate||($localize.translate=m_),$localize.TRANSLATIONS||($localize.TRANSLATIONS={}),Object.keys(i).forEach(n=>{$localize.TRANSLATIONS[n]=c_(i[n])})}function Xm(){$localize.translate=void 0,$localize.TRANSLATIONS={}}function m_(i,n){try{return l_($localize.TRANSLATIONS,i,n)}catch(t){return console.warn(t.message),[i,n]}}var $s="en-US",Ym=localStorage.getItem(vo.SETTINGS_KEY);if(Ym)try{$s=JSON.parse(Ym).language??"en-US"}catch(i){console.log(i)}u_($s).then(()=>import("./chunk-5SI6MAJM.js")).then(i=>{Gs.providers.push({provide:bl,useValue:$s}),Cl(i.AppComponent,Gs).catch(n=>console.error(n))});async function u_(i){return i==="en-US"?Promise.resolve():fetch(`locale/${i}/messages.json`).then(n=>n.json()).catch(n=>console.error(n)).then(n=>{Xm(),$localize.locale=i,Km(n.translations)})}
