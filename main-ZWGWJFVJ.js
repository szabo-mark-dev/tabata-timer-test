import{$ as Ti,A as Ii,Aa as Bi,B as Wt,Ba as Xa,C as Aa,Ca as Ka,D as Fa,E as gt,Ea as Ya,F as Ra,G as Yn,H as Zn,I as La,J as ct,K as ot,L as Jn,M as Va,N as Di,O as Yt,P as jt,Q as xt,R as Ht,S as J,T as le,U as Ut,V as Ba,W as et,Y as dt,Z as at,_ as ti,a as Xn,aa as Na,b as Oi,ba as to,c as _a,ca as eo,d as ba,da as De,e as va,ea as ei,f as ya,fa as ye,g as wa,ga as Ei,h as xa,ha as Ai,ia as za,j as se,ja as Wa,k as ka,ka as ja,l as Ca,la as Fi,m as Ma,ma as Ha,n as Sa,na as io,o as Oa,oa as no,p as lt,pa as ii,q as Ie,qa as Ri,r as Kn,ra as G,s as ve,sa as Ua,t as Pt,ta as qa,u as Pa,ua as Ga,v as Ia,va as Li,w as Da,wa as it,x as Pi,xa as Vi,y as Ta,ya as $a,z as Ea,za as Qa}from"./chunk-LCDAYU75.js";import{$ as z,$a as wi,$b as m,A as Gn,Aa as vi,Ab as fe,B as bt,Bb as h,Cb as l,D as pt,Db as c,Ea as ea,Eb as v,Fa as ia,Fb as Rt,Gb as Lt,H as Ko,Hb as ge,I as ae,Ib as ht,J as $n,Jb as Vt,Kb as u,Lb as ca,Mb as g,Nb as j,O as Yo,Ob as C,Pb as ft,Q as Zo,Qb as st,Rb as y,S as Ot,Sb as w,T as Me,Ta as na,Tb as da,U as Q,Ua as d,Ub as Pe,Vb as _e,Wb as Bt,X as Se,Xb as re,Ya as oa,Yb as x,Z as vt,Za as Qt,Zb as ma,_ as D,_a as yi,_b as nt,a as rt,ab as ut,ac as b,b as St,ba as O,bb as Y,bc as L,cb as xi,cc as be,da as r,db as aa,dc as q,ea as Jo,ec as Et,f as oe,fc as V,gc as ua,h as Uo,hb as p,hc as Qn,i as A,ia as X,ib as W,ja as K,jb as I,jc as ha,ka as $t,kc as pa,l as qo,la as mt,lb as U,lc as Kt,ma as Tt,mb as Xt,mc as B,nb as ra,nc as Ci,o as Go,oc as Nt,p as Ze,pa as H,pb as ki,pc as Mi,qa as $,qb as sa,qc as zt,rc as fa,sc as ga,t as Ft,ta as F,ua as ta,ub as f,vb as M,vc as Z,wa as Oe,wb as S,x as $o,xa as yt,xb as la,xc as N,y as Qo,ya as E,yb as Je,yc as wt,z as Xo,za as R,zb as pe,zc as Si}from"./chunk-P5GNNYST.js";var Ds=["mat-menu-item",""],Ts=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Es=["mat-icon, [matMenuItemIcon]","*"];function As(i,o){i&1&&($t(),l(0,"svg",2),v(1,"polygon",3),c())}var Fs=["*"];function Rs(i,o){if(i&1){let t=ht();Rt(0,"div",0),ca("click",function(){X(t);let n=g();return K(n.closed.emit("click"))})("animationstart",function(n){X(t);let a=g();return K(a._onAnimationStart(n.animationName))})("animationend",function(n){X(t);let a=g();return K(a._onAnimationDone(n.animationName))})("animationcancel",function(n){X(t);let a=g();return K(a._onAnimationDone(n.animationName))}),Rt(1,"div",1),C(2),Lt()()}if(i&2){let t=g();nt(t._classList),x("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Vt("id",t.panelId),f("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var ao=new O("MAT_MENU_PANEL"),ni=(()=>{class i{_elementRef=r(R);_document=r(Tt);_focusMonitor=r(ve);_parentMenu=r(ao,{optional:!0});_changeDetectorRef=r(Z);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new A;_focused=new A;_highlighted=!1;_triggersSubmenu=!1;constructor(){r(Pt).load(jt),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<e.length;n++)e[n].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,n){e&1&&u("click",function(s){return n._checkDisabled(s)})("mouseenter",function(){return n._handleMouseEnter()}),e&2&&(f("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),x("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",N],disableRipple:[2,"disableRipple","disableRipple",N]},exportAs:["matMenuItem"],attrs:Ds,ngContentSelectors:Es,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,n){e&1&&(j(Ts),C(0),l(1,"span",0),C(2,1),c(),v(3,"div",1),M(4,As,2,0,":svg:svg",2)),e&2&&(d(3),h("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),d(),S(n._triggersSubmenu?4:-1))},dependencies:[Yt],encapsulation:2,changeDetection:0})}return i})();var Ls=new O("MatMenuContent");var Vs=new O("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),oo="_mat-menu-enter",Ni="_mat-menu-exit",Ee=(()=>{class i{_elementRef=r(R);_changeDetectorRef=r(Z);_injector=r(mt);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ct();_allItems;_directDescendantItems=new vi;_classList={};_panelAnimationState="void";_animationDone=new A;_isAnimating=F(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,n=rt({},this._classList);e&&e.length&&e.split(" ").forEach(a=>{n[a]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new H;close=this.closed;panelId=r(gt).getId("mat-menu-panel-");constructor(){let t=r(Vs);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Fa(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Ot(this._directDescendantItems),Me(t=>bt(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let n=t.toArray(),a=Math.max(0,Math.min(n.length-1,e.activeItemIndex||0));n[a]&&!n[a].disabled?e.setActiveItem(a):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Ot(this._directDescendantItems),Me(e=>bt(...e.map(n=>n._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,n=this._keyManager;switch(e){case 27:Wt(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Qt(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(t).setFirstItemActive(),!n.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=St(rt({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Ni;(e||t===oo)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===oo||t===Ni)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ni),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?oo:Ni)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Ot(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-menu"]],contentQueries:function(e,n,a){if(e&1&&ft(a,Ls,5)(a,ni,5)(a,ni,4),e&2){let s;y(s=w())&&(n.lazyContent=s.first),y(s=w())&&(n._allItems=s),y(s=w())&&(n.items=s)}},viewQuery:function(e,n){if(e&1&&st(yi,5),e&2){let a;y(a=w())&&(n.templateRef=a.first)}},hostVars:3,hostBindings:function(e,n){e&2&&f("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",N],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:N(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[V([{provide:ao,useExisting:i}])],ngContentSelectors:Fs,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,n){e&1&&(j(),ra(0,Rs,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return i})(),Bs=new O("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=r(mt);return()=>Ei(i)}});var Te=new WeakMap,Ns=(()=>{class i{_canHaveBackdrop;_element=r(R);_viewContainerRef=r(aa);_menuItemInstance=r(ni,{optional:!0,self:!0});_dir=r(Ht,{optional:!0});_focusMonitor=r(ve);_ngZone=r($);_injector=r(mt);_scrollStrategy=r(Bs);_changeDetectorRef=r(Z);_animationsDisabled=ct();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=oe.EMPTY;_menuCloseSubscription=oe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=r(ao,{optional:!0});this._parentMaterialMenu=e instanceof Ee?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Te.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let n=Te.get(e);Te.set(e,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(e),s=a.getConfig(),_=s.positionStrategy;this._setPosition(e,_),this._canHaveBackdrop?s.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:s.hasBackdrop=e.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof Ee&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(Q(e.close)).subscribe(()=>{_.withLockedPosition(!1).reapplyLastPosition(),_.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,n=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof Ee&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(ae(1)).subscribe(()=>{e.detach(),Te.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(e.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&Te.delete(n),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Fi(this._injector,e),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof Ee&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(t){return new Ai({positionStrategy:za(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX==="start"?"after":"before",s=n.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(a,s)})})}_setPosition(t,e){let[n,a]=t.xPosition==="before"?["end","start"]:["start","end"],[s,_]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[P,tt]=[s,_],[Mt,It]=[n,a],Gt=0;if(this._triggersSubmenu()){if(It=n=t.xPosition==="before"?"start":"end",a=Mt=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Ce=this._parentMaterialMenu.items.first;this._parentInnerPadding=Ce?Ce._getHostElement().offsetTop:0}Gt=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(P=s==="top"?"bottom":"top",tt=_==="top"?"bottom":"top");e.withPositions([{originX:n,originY:P,overlayX:Mt,overlayY:s,offsetY:Gt},{originX:a,originY:P,overlayX:It,overlayY:s,offsetY:Gt},{originX:n,originY:tt,overlayX:Mt,overlayY:_,offsetY:-Gt},{originX:a,originY:tt,overlayX:It,overlayY:_,offsetY:-Gt}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ze(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(pt(s=>this._menuOpen&&s!==this._menuItemInstance)):Ze();return bt(t,n,a,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Ti(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Te.get(t)===this}_triggerIsAriaDisabled(){return N(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){xi()};static \u0275dir=I({type:i})}return i})(),Za=(()=>{class i extends Ns{_cleanupTouchstart;_hoverSubscription=oe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new H;onMenuOpen=this.menuOpened;menuClosed=new H;onMenuClose=this.menuClosed;constructor(){super(!0);let t=r(ut);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{Sa(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){Ma(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,n){e&1&&u("click",function(s){return n._handleClick(s)})("mousedown",function(s){return n._handleMousedown(s)})("keydown",function(s){return n._handleKeydown(s)}),e&2&&f("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[U]})}return i})();var Re=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[le,ii,J,ye]})}return i})();var we=class{constructor(o,t,e){this.id=o;this.name=t;this.schedule=e}};var xe=class{constructor(o,t,e,n,a,s){this.numberOfSets=o;this.numberOfExercises=t;this.preparationTime=e;this.workoutTime=n;this.restTime=a;this.restTimeBetweenSets=s}};var Zt=class i{static SIMPLE_WORKOUT;lastDeletedWorkout;selectedWorkout;workouts;translations=r(G);localStoragePersistenceService=r(Ri);signals=r(it);constructor(){i.SIMPLE_WORKOUT=new we("quick_workout",this.translations.exampleWorkoutName,new xe(6,6,15,30,30,60)),this.selectedWorkout=this.signals.selectedWorkout.toSignal(),this.workouts=this.signals.workouts.toSignal();let o=this.localStoragePersistenceService.getStoredWorkouts(),t=this.localStoragePersistenceService.getStoredWorkoutSession();o&&this.signals.workouts.update(()=>o);let e=this.workouts().length?this.isWorkoutPresent(t?.lastWorkoutId)?t?.lastWorkoutId:this.workouts()[0].id:void 0;e&&this.selectWorkout(e)}selectWorkout(o){let t=this.workouts().find(e=>e.id===o);t&&this.signals.selectedWorkout.update(()=>t)}updateWorkout(o){let t=this.workouts().findIndex(e=>e.id===o.id);t>=0&&(this.signals.workouts.update(e=>{let n=[...e];return n.splice(t,1,o),n}),this.signals.selectedWorkout.update(()=>o),this.localStoragePersistenceService.persistWorkouts(this.workouts()))}addWorkout(o){o.id=crypto.randomUUID(),this.signals.workouts.update(t=>[...t,o]),this.signals.selectedWorkout.update(()=>o),this.localStoragePersistenceService.persistWorkouts(this.workouts())}deleteCurrentWorkout(){this.selectedWorkout()&&(this.lastDeletedWorkout=this.selectedWorkout(),this.deleteWorkout(this.selectedWorkout().id))}deleteWorkout(o){let t=this.workouts().findIndex(e=>e.id===o);t>=0&&(this.signals.workouts.update(e=>{let n=[...e];return n.splice(t,1),n}),this.signals.selectedWorkout.update(()=>this.workouts().length>0?this.workouts()[0]:void 0),this.localStoragePersistenceService.persistWorkouts(this.workouts()))}restoreLastDeletedWorkout(){this.lastDeletedWorkout&&(this.addWorkout(this.lastDeletedWorkout),this.localStoragePersistenceService.persistWorkouts(this.workouts()),this.lastDeletedWorkout=void 0)}saveCurrentWorkoutSession(){let o=this.selectedWorkout()?.id;o&&this.localStoragePersistenceService.persistWorkoutSession(o)}isWorkoutPresent(o){let t=!1;return o&&(t=!!this.workouts()?.find(n=>n.id===o)),t}static \u0275fac=function(t){return new(t||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ws=["*",[["mat-toolbar-row"]]],js=["*","mat-toolbar-row"],Hs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),Ui=(()=>{class i{_elementRef=r(R);_platform=r(lt);_document=r(Tt);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-toolbar"]],contentQueries:function(e,n,a){if(e&1&&ft(a,Hs,5),e&2){let s;y(s=w())&&(n._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(nt(n.color?"mat-"+n.color:""),x("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:js,decls:2,vars:0,template:function(e,n){e&1&&(j(Ws),C(0),C(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return i})();var qi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[J]})}return i})();function Us(i,o){if(i&1){let t=ht();l(0,"div",1)(1,"button",2),u("click",function(){X(t);let n=g();return K(n.action())}),m(2),c()()}if(i&2){let t=g();d(2),L(" ",t.data.action," ")}}var qs=["label"];function Gs(i,o){}var $s=Math.pow(2,31)-1,ai=class{_overlayRef;instance;containerInstance;_afterDismissed=new A;_afterOpened=new A;_onAction=new A;_durationTimeoutId;_dismissedByAction=!1;constructor(o,t){this._overlayRef=t,this.containerInstance=o,o._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(o){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(o,$s))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},tr=new O("MatSnackBarData"),Le=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Qs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),Xs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),Ks=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),Ys=(()=>{class i{snackBarRef=r(ai);data=r(tr);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(l(0,"div",0),m(1),c(),M(2,Us,3,1,"div",1)),e&2&&(d(),L(" ",n.data.message,`
`),d(),S(n.hasAction?2:-1))},dependencies:[Ut,Qs,Xs,Ks],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),ro="_mat-snack-bar-enter",so="_mat-snack-bar-exit",Zs=(()=>{class i extends Na{_ngZone=r($);_elementRef=r(R);_changeDetectorRef=r(Z);_platform=r(lt);_animationsDisabled=ct();snackBarConfig=r(Le);_document=r(Tt);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=r(mt);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new A;_onExit=new A;_onEnter=new A;_animationState="void";_live;_label;_role;_liveElementId=r(gt).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===so?this._completeExit():t===ro&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Qt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ro)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(ro)},200)))}exit(){return this._destroyed?Ze(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Qt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(so)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(so),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(s=>t.classList.add(s)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,a="mdc-snackbar__label";n.classList.toggle(a,!n.querySelector(`.${a}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let a=e[n],s=a.getAttribute("aria-owns");this._trackedModals.add(a),s?s.indexOf(t)===-1&&a.setAttribute("aria-owns",s+" "+t):a.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),n=t.querySelector("[aria-live]");if(e&&n){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(a=document.activeElement),e.removeAttribute("aria-hidden"),n.appendChild(e),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&st(to,7)(qs,7),e&2){let a;y(a=w())&&(n._portalOutlet=a.first),y(a=w())&&(n._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,n){e&1&&u("animationend",function(s){return n.onAnimationEnd(s.animationName)})("animationcancel",function(s){return n.onAnimationEnd(s.animationName)}),e&2&&x("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[U],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),Xt(4,Gs,0,0,"ng-template",4),c(),v(5,"div"),c()()),e&2&&(d(5),f("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[to],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return i})(),Js=new O("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Le}),er=(()=>{class i{_live=r(Ii);_injector=r(mt);_breakpointObserver=r(Ia);_parentSnackBar=r(i,{optional:!0,skipSelf:!0});_defaultConfig=r(Js);_animationsDisabled=ct();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ys;snackBarContainerComponent=Zs;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let a=rt(rt({},this._defaultConfig),n);return a.data={message:t,action:e},a.announcementMessage===t&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,a=mt.create({parent:n||this._injector,providers:[{provide:Le,useValue:e}]}),s=new ti(this.snackBarContainerComponent,e.viewContainerRef,a),_=t.attach(s);return _.instance.snackBarConfig=e,_.instance}_attach(t,e){let n=rt(rt(rt({},new Le),this._defaultConfig),e),a=this._createOverlay(n),s=this._attachSnackBarContainer(a,n),_=new ai(s,a);if(t instanceof yi){let P=new Ti(t,null,{$implicit:n.data,snackBarRef:_});_.instance=s.attachTemplatePortal(P)}else{let P=this._createInjector(n,_),tt=new ti(t,void 0,P),Mt=s.attachComponentPortal(tt);_.instance=Mt.instance}return this._breakpointObserver.observe(La.HandsetPortrait).pipe(Q(a.detachments())).subscribe(P=>{a.overlayElement.classList.toggle(this.handsetCssClass,P.matches)}),n.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(_,n),this._openedSnackBarRef=_,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new Ai;e.direction=t.direction;let n=Wa(this._injector),a=t.direction==="rtl",s=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!a||t.horizontalPosition==="end"&&a,_=!s&&t.horizontalPosition!=="center";return s?n.left("0"):_?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,e.disableAnimations=this._animationsDisabled,Fi(this._injector,e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return mt.create({parent:n||this._injector,providers:[{provide:ai,useValue:e},{provide:tr,useValue:t.data}]})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Gi=class i extends G{navigationDrawerButtonLabel=$localize`:Navigation drawer button label@@navigationDrawerButtonLabel:Navigate`;navigationDrawerButtonLabelDescriptionLabel=$localize`:Longer description of Navigation drawer button@@navigationDrawerButtonLabelDescriptionLabel:Navigation Menu`;startWorkoutButtonLabel=$localize`:Start button label@@startWorkoutButtonLabel:Start`;startWorkoutButtonDescriptionLabel=$localize`:Longer description of Start button@@startWorkoutButtonDescriptionLabel:Start Workout`;settingsIconButtonDescriptionLabel=$localize`:Settings button description@@settingsIconButtonDescriptionLabel:Settings`;moreMenuDescriptionLabel=$localize`:More menu description@@moreMenuDescriptionLabel:More`;editWorkoutIconButtonLabel=$localize`:Edit button label@@editWorkoutIconButtonLabel:Edit`;editWorkoutIconButtonDescriptionLabel=$localize`:Longer description of Edit button@@editWorkoutIconButtonDescriptionLabel:Edit Workout`;deleteWorkoutIconButtonLabel=$localize`:Delete button label@@deleteWorkoutIconButtonLabel:Delete`;deleteWorkoutIconButtonDescriptionLabel=$localize`:Longer description of Delete button@@deleteWorkoutIconButtonDescriptionLabel:Delete Workout`;newWorkoutIconButtonLabel=$localize`:New button label@@newWorkoutIconButtonLabel:New`;newWorkoutIconButtonDescriptionLabel=$localize`:Longer description of New button@@newWorkoutIconButtonDescriptionLabel:New workout`;restoreWorkoutButtonLabel=$localize`:Restore button label@@restoreWorkoutButtonLabel:Restore`;workoutDeletedLabel=$localize`:User has just deleted a workout@@workoutDeletedLabel:Workout deleted.`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var $i=class i extends G{saveSettingsButtonLabel=$localize`:Save button label@@saveSettingsButtonLabel:Save`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var sr=(()=>{class i{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,e){this._renderer=t,this._elementRef=e}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(e){return new(e||i)(Y(ut),Y(R))};static \u0275dir=I({type:i})}return i})(),lr=(()=>{class i extends sr{static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=I({type:i,features:[U]})}return i})(),me=new O("");var tl={provide:me,useExisting:vt(()=>Ne),multi:!0};function el(){let i=Xn()?Xn().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var il=new O(""),Ne=(()=>{class i extends sr{_compositionMode;_composing=!1;constructor(t,e,n){super(t,e),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!el())}writeValue(t){let e=t??"";this.setProperty("value",e)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(e){return new(e||i)(Y(ut),Y(R),Y(il,8))};static \u0275dir=I({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,n){e&1&&u("input",function(s){return n._handleInput(s.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(s){return n._compositionEnd(s.target.value)})},standalone:!1,features:[V([tl]),U]})}return i})();function co(i){return i==null||mo(i)===0}function mo(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var ue=new O(""),ln=new O(""),nl=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,kt=class{static min(o){return cr(o)}static max(o){return dr(o)}static required(o){return ol(o)}static requiredTrue(o){return al(o)}static email(o){return rl(o)}static minLength(o){return sl(o)}static maxLength(o){return ll(o)}static pattern(o){return cl(o)}static nullValidator(o){return Xi()}static compose(o){return gr(o)}static composeAsync(o){return _r(o)}};function cr(i){return o=>{if(o.value==null||i==null)return null;let t=parseFloat(o.value);return!isNaN(t)&&t<i?{min:{min:i,actual:o.value}}:null}}function dr(i){return o=>{if(o.value==null||i==null)return null;let t=parseFloat(o.value);return!isNaN(t)&&t>i?{max:{max:i,actual:o.value}}:null}}function ol(i){return co(i.value)?{required:!0}:null}function al(i){return i.value===!0?null:{required:!0}}function rl(i){return co(i.value)||nl.test(i.value)?null:{email:!0}}function sl(i){return o=>{let t=o.value?.length??mo(o.value);return t===null||t===0?null:t<i?{minlength:{requiredLength:i,actualLength:t}}:null}}function ll(i){return o=>{let t=o.value?.length??mo(o.value);return t!==null&&t>i?{maxlength:{requiredLength:i,actualLength:t}}:null}}function cl(i){if(!i)return Xi;let o,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),o=new RegExp(t)):(t=i.toString(),o=i),e=>{if(co(e.value))return null;let n=e.value;return o.test(n)?null:{pattern:{requiredPattern:t,actualValue:n}}}}function Xi(i){return null}function mr(i){return i!=null}function ur(i){return sa(i)?Go(i):i}function hr(i){let o={};return i.forEach(t=>{o=t!=null?rt(rt({},o),t):o}),Object.keys(o).length===0?null:o}function pr(i,o){return o.map(t=>t(i))}function dl(i){return!i.validate}function fr(i){return i.map(o=>dl(o)?o:t=>o.validate(t))}function gr(i){if(!i)return null;let o=i.filter(mr);return o.length==0?null:function(t){return hr(pr(t,o))}}function uo(i){return i!=null?gr(fr(i)):null}function _r(i){if(!i)return null;let o=i.filter(mr);return o.length==0?null:function(t){let e=pr(t,o).map(ur);return Qo(e).pipe(Ft(hr))}}function ho(i){return i!=null?_r(fr(i)):null}function ir(i,o){return i===null?[o]:Array.isArray(i)?[...i,o]:[i,o]}function br(i){return i._rawValidators}function vr(i){return i._rawAsyncValidators}function lo(i){return i?Array.isArray(i)?i:[i]:[]}function Ki(i,o){return Array.isArray(i)?i.includes(o):i===o}function nr(i,o){let t=lo(o);return lo(i).forEach(n=>{Ki(t,n)||t.push(n)}),t}function or(i,o){return lo(o).filter(t=>!Ki(i,t))}var Yi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=uo(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=ho(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control?.reset(o)}hasError(o,t){return this.control?this.control.hasError(o,t):!1}getError(o,t){return this.control?this.control.getError(o,t):null}},ce=class extends Yi{name;get formDirective(){return null}get path(){return null}},At=class extends Yi{_parent=null;name=null;valueAccessor=null},Zi=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var cn=(()=>{class i extends Zi{constructor(t){super(t)}static \u0275fac=function(e){return new(e||i)(Y(At,2))};static \u0275dir=I({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,n){e&2&&x("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[U]})}return i})(),dn=(()=>{class i extends Zi{constructor(t){super(t)}static \u0275fac=function(e){return new(e||i)(Y(ce,10))};static \u0275dir=I({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,n){e&2&&x("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},standalone:!1,features:[U]})}return i})();var ri="VALID",Qi="INVALID",Ve="PENDING",si="DISABLED",de=class{},Ji=class extends de{value;source;constructor(o,t){super(),this.value=o,this.source=t}},ci=class extends de{pristine;source;constructor(o,t){super(),this.pristine=o,this.source=t}},di=class extends de{touched;source;constructor(o,t){super(),this.touched=o,this.source=t}},Be=class extends de{status;source;constructor(o,t){super(),this.status=o,this.source=t}},tn=class extends de{source;constructor(o){super(),this.source=o}},en=class extends de{source;constructor(o){super(),this.source=o}};function yr(i){return(mn(i)?i.validators:i)||null}function ml(i){return Array.isArray(i)?uo(i):i||null}function wr(i,o){return(mn(o)?o.asyncValidators:i)||null}function ul(i){return Array.isArray(i)?ho(i):i||null}function mn(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function hl(i,o,t){let e=i.controls;if(!(o?Object.keys(e):e).length)throw new Se(1e3,"");if(!e[t])throw new Se(1001,"")}function pl(i,o,t){i._forEachChild((e,n)=>{if(t[n]===void 0)throw new Se(-1002,"")})}var nn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,t){this._assignValidators(o),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return Kt(this.statusReactive)}set status(o){Kt(()=>this.statusReactive.set(o))}_status=B(()=>this.statusReactive());statusReactive=F(void 0);get valid(){return this.status===ri}get invalid(){return this.status===Qi}get pending(){return this.status===Ve}get disabled(){return this.status===si}get enabled(){return this.status!==si}errors;get pristine(){return Kt(this.pristineReactive)}set pristine(o){Kt(()=>this.pristineReactive.set(o))}_pristine=B(()=>this.pristineReactive());pristineReactive=F(!0);get dirty(){return!this.pristine}get touched(){return Kt(this.touchedReactive)}set touched(o){Kt(()=>this.touchedReactive.set(o))}_touched=B(()=>this.touchedReactive());touchedReactive=F(!1);get untouched(){return!this.touched}_events=new A;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(nr(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(nr(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(or(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(or(o,this._rawAsyncValidators))}hasValidator(o){return Ki(this._rawValidators,o)}hasAsyncValidator(o){return Ki(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let t=this.touched===!1;this.touched=!0;let e=o.sourceControl??this;o.onlySelf||this._parent?.markAsTouched(St(rt({},o),{sourceControl:e})),t&&o.emitEvent!==!1&&this._events.next(new di(!0,e))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(o))}markAsUntouched(o={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=o.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:e})}),o.onlySelf||this._parent?._updateTouched(o,e),t&&o.emitEvent!==!1&&this._events.next(new di(!1,e))}markAsDirty(o={}){let t=this.pristine===!0;this.pristine=!1;let e=o.sourceControl??this;o.onlySelf||this._parent?.markAsDirty(St(rt({},o),{sourceControl:e})),t&&o.emitEvent!==!1&&this._events.next(new ci(!1,e))}markAsPristine(o={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=o.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),o.onlySelf||this._parent?._updatePristine(o,e),t&&o.emitEvent!==!1&&this._events.next(new ci(!0,e))}markAsPending(o={}){this.status=Ve;let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Be(this.status,t)),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.markAsPending(St(rt({},o),{sourceControl:t}))}disable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=si,this.errors=null,this._forEachChild(n=>{n.disable(St(rt({},o),{onlySelf:!0}))}),this._updateValue();let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Ji(this.value,e)),this._events.next(new Be(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(St(rt({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=ri,this._forEachChild(e=>{e.enable(St(rt({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(St(rt({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(o,t){o.onlySelf||(this._parent?.updateValueAndValidity(o),o.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ri||this.status===Ve)&&this._runAsyncValidator(e,o.emitEvent)}let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Ji(this.value,t)),this._events.next(new Be(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.updateValueAndValidity(St(rt({},o),{sourceControl:t}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?si:ri}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,t){if(this.asyncValidator){this.status=Ve,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:o!==!1};let e=ur(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:t,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,t={}){this.errors=o,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(o){let t=o;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((e,n)=>e&&e._find(n),this)}getError(o,t){let e=t?this.get(t):this;return e?.errors?e.errors[o]:null}hasError(o,t){return!!this.getError(o,t)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,t,e){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||e)&&this._events.next(new Be(this.status,t)),this._parent&&this._parent._updateControlsErrors(o,t,e)}_initObservables(){this.valueChanges=new H,this.statusChanges=new H}_calculateStatus(){return this._allControlsDisabled()?si:this.errors?Qi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ve)?Ve:this._anyControlsHaveStatus(Qi)?Qi:ri}_anyControlsHaveStatus(o){return this._anyControls(t=>t.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,t){let e=!this._anyControlsDirty(),n=this.pristine!==e;this.pristine=e,o.onlySelf||this._parent?._updatePristine(o,t),n&&this._events.next(new ci(this.pristine,t))}_updateTouched(o={},t){this.touched=this._anyControlsTouched(),this._events.next(new di(this.touched,t)),o.onlySelf||this._parent?._updateTouched(o,t)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){mn(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){return!o&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=ml(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=ul(this._rawAsyncValidators)}},Jt=class extends nn{constructor(o,t,e){super(yr(t),wr(e,t)),this.controls=o,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(o,t){return this.controls[o]?this.controls[o]:(this.controls[o]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(o,t,e={}){this.registerControl(o,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(o,t={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(o,t,e={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],t&&this.registerControl(o,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,t={}){pl(this,!0,o),Object.keys(o).forEach(e=>{hl(this,!0,e),this.controls[e].setValue(o[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(o,t={}){o!=null&&(Object.keys(o).forEach(e=>{let n=this.controls[e];n&&n.patchValue(o[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(o={},t={}){this._forEachChild((e,n)=>{e.reset(o?o[n]:null,St(rt({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new en(this))}getRawValue(){return this._reduceChildren({},(o,t,e)=>(o[e]=t.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(t,e)=>e._syncPendingControls()?!0:t);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(t=>{let e=this.controls[t];e&&o(e,t)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[t,e]of Object.entries(this.controls))if(this.contains(t)&&o(e))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(o,t){let e=o;return this._forEachChild((n,a)=>{e=t(e,n,a)}),e}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var mi=new O("",{factory:()=>un}),un="always";function fl(i,o){return[...o.path,i]}function on(i,o,t=un){po(i,o),o.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&o.valueAccessor.setDisabledState?.(i.disabled),_l(i,o),vl(i,o),bl(i,o),gl(i,o)}function an(i,o,t=!0){let e=()=>{};o?.valueAccessor?.registerOnChange(e),o?.valueAccessor?.registerOnTouched(e),sn(i,o),i&&(o._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function rn(i,o){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(o)})}function gl(i,o){if(o.valueAccessor.setDisabledState){let t=e=>{o.valueAccessor.setDisabledState(e)};i.registerOnDisabledChange(t),o._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function po(i,o){let t=br(i);o.validator!==null?i.setValidators(ir(t,o.validator)):typeof t=="function"&&i.setValidators([t]);let e=vr(i);o.asyncValidator!==null?i.setAsyncValidators(ir(e,o.asyncValidator)):typeof e=="function"&&i.setAsyncValidators([e]);let n=()=>i.updateValueAndValidity();rn(o._rawValidators,n),rn(o._rawAsyncValidators,n)}function sn(i,o){let t=!1;if(i!==null){if(o.validator!==null){let n=br(i);if(Array.isArray(n)&&n.length>0){let a=n.filter(s=>s!==o.validator);a.length!==n.length&&(t=!0,i.setValidators(a))}}if(o.asyncValidator!==null){let n=vr(i);if(Array.isArray(n)&&n.length>0){let a=n.filter(s=>s!==o.asyncValidator);a.length!==n.length&&(t=!0,i.setAsyncValidators(a))}}}let e=()=>{};return rn(o._rawValidators,e),rn(o._rawAsyncValidators,e),t}function _l(i,o){o.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&xr(i,o)})}function bl(i,o){o.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&xr(i,o),i.updateOn!=="submit"&&i.markAsTouched()})}function xr(i,o){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function vl(i,o){let t=(e,n)=>{o.valueAccessor.writeValue(e),n&&o.viewToModelUpdate(e)};i.registerOnChange(t),o._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function kr(i,o){i==null,po(i,o)}function yl(i,o){return sn(i,o)}function Cr(i,o){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(o,t.currentValue)}function wl(i){return Object.getPrototypeOf(i.constructor)===lr}function Mr(i,o){i._syncPendingControls(),o.forEach(t=>{let e=t.control;e.updateOn==="submit"&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function Sr(i,o){if(!o)return null;Array.isArray(o);let t,e,n;return o.forEach(a=>{a.constructor===Ne?t=a:wl(a)?e=a:n=a}),n||e||t||null}function xl(i,o){let t=i.indexOf(o);t>-1&&i.splice(t,1)}var kl={provide:ce,useExisting:vt(()=>ui)},li=Promise.resolve(),ui=(()=>{class i extends ce{callSetDisabledState;get submitted(){return Kt(this.submittedReactive)}_submitted=B(()=>this.submittedReactive());submittedReactive=F(!1);_directives=new Set;form;ngSubmit=new H;options;constructor(t,e,n){super(),this.callSetDisabledState=n,this.form=new Jt({},uo(t),ho(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){li.then(()=>{let e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),on(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){li.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){li.then(()=>{let e=this._findContainer(t.path),n=new Jt({});kr(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){li.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){li.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Mr(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new tn(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(e){return new(e||i)(Y(ue,10),Y(ln,10),Y(mi,8))};static \u0275dir=I({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,n){e&1&&u("submit",function(s){return n.onSubmit(s)})("reset",function(){return n.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[V([kl]),U]})}return i})();function ar(i,o){let t=i.indexOf(o);t>-1&&i.splice(t,1)}function rr(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var _t=class extends nn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,t,e){super(yr(t),wr(e,t)),this._applyFormState(o),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),mn(t)&&(t.nonNullable||t.initialValueIsDefault)&&(rr(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,t={}){this.value=this._pendingValue=o,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(o,t={}){this.setValue(o,t)}reset(o=this.defaultValue,t={}){this._applyFormState(o),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new en(this))}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){ar(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){ar(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){rr(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var Cl=i=>i instanceof _t;var hn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})(),Ml={provide:me,useExisting:vt(()=>fo),multi:!0},fo=(()=>{class i extends lr{writeValue(t){let e=t??"";this.setProperty("value",e)}registerOnChange(t){this.onChange=e=>{t(e==""?null:parseFloat(e))}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=I({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,n){e&1&&u("input",function(s){return n.onChange(s.target.value)})("blur",function(){return n.onTouched()})},standalone:!1,features:[V([Ml]),U]})}return i})();var Sl=(()=>{class i extends ce{callSetDisabledState;get submitted(){return Kt(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=B(()=>this._submittedReactive());_submittedReactive=F(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,e,n){super(),this.callSetDisabledState=n,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(sn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let e=this.form.get(t.path);return on(e,t,this.callSetDisabledState),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){an(t.control||null,t,!1),xl(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,e){this.form.get(t.path).setValue(e)}onReset(){this.resetForm()}resetForm(t=void 0,e={}){this.form.reset(t,e),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Mr(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new tn(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let e=t.control,n=this.form.get(t.path);e!==n&&(an(e||null,t),Cl(n)&&(on(n,t,this.callSetDisabledState),t.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let e=this.form.get(t.path);kr(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let e=this.form?.get(t.path);e&&yl(e,t)&&e.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){po(this.form,this),this._oldForm&&sn(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(e){return new(e||i)(Y(ue,10),Y(ln,10),Y(mi,8))};static \u0275dir=I({type:i,features:[U,yt]})}return i})();var go=new O(""),Ol={provide:At,useExisting:vt(()=>_o)},_o=(()=>{class i extends At{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new H;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,e,n,a,s){super(),this._ngModelWarningConfig=a,this.callSetDisabledState=s,this._setValidators(t),this._setAsyncValidators(e),this.valueAccessor=Sr(this,n)}ngOnChanges(t){if(this._isControlChanged(t)){let e=t.form.previousValue;e&&an(e,this,!1),on(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Cr(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&an(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(e){return new(e||i)(Y(ue,10),Y(ln,10),Y(me,10),Y(go,8),Y(mi,8))};static \u0275dir=I({type:i,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[V([Ol]),U,yt]})}return i})();var Pl={provide:At,useExisting:vt(()=>hi)},hi=(()=>{class i extends At{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new H;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,e,n,a,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=Sr(this,a)}ngOnChanges(t){this._added||this._setUpControl(),Cr(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return fl(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(e){return new(e||i)(Y(ce,13),Y(ue,10),Y(ln,10),Y(me,10),Y(go,8))};static \u0275dir=I({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[V([Pl]),U,yt]})}return i})();var Il={provide:ce,useExisting:vt(()=>te)},te=(()=>{class i extends Sl{form=null;ngSubmit=new H;get control(){return this.form}static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=I({type:i,selectors:[["","formGroup",""]],hostBindings:function(e,n){e&1&&u("submit",function(s){return n.onSubmit(s)})("reset",function(){return n.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[V([Il]),U]})}return i})();function Or(i){return typeof i=="number"?i:parseFloat(i)}var Pr=(()=>{class i{_validator=Xi;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let e=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(e),this._validator=this._enabled?this.createValidator(e):Xi,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,features:[yt]})}return i})(),Dl={provide:ue,useExisting:vt(()=>bo),multi:!0},bo=(()=>{class i extends Pr{max;inputName="max";normalizeInput=t=>Or(t);createValidator=t=>dr(t);static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=I({type:i,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(e,n){e&2&&f("max",n._enabled?n.max:null)},inputs:{max:"max"},standalone:!1,features:[V([Dl]),U]})}return i})(),Tl={provide:ue,useExisting:vt(()=>vo),multi:!0},vo=(()=>{class i extends Pr{min;inputName="min";normalizeInput=t=>Or(t);createValidator=t=>cr(t);static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=I({type:i,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(e,n){e&2&&f("min",n._enabled?n.min:null)},inputs:{min:"min"},standalone:!1,features:[V([Tl]),U]})}return i})();var Ir=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({})}return i})();var pn=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:mi,useValue:t.callSetDisabledState??un}]}}static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[Ir]})}return i})(),fn=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:go,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:mi,useValue:t.callSetDisabledState??un}]}}static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[Ir]})}return i})();var yo=class{_box;_destroyed=new A;_resizeSubject=new A;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new Uo(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),e.unsubscribe(),this._elementObservables.delete(o)}}).pipe(pt(t=>t.some(e=>e.target===o)),Zo({bufferSize:1,refCount:!0}),Q(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Tr=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=r($);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let n=e?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new yo(n)),this._observers.get(n).observe(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var El=["notch"],Al=["matFormFieldNotchedOutline",""],Fl=["*"],Er=["iconPrefixContainer"],Ar=["textPrefixContainer"],Fr=["iconSuffixContainer"],Rr=["textSuffixContainer"],Rl=["textField"],Ll=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Vl=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Bl(i,o){i&1&&v(0,"span",21)}function Nl(i,o){if(i&1&&(l(0,"label",20),C(1,1),M(2,Bl,1,0,"span",21),c()),i&2){let t=g(2);h("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),f("for",t._control.disableAutomaticLabeling?null:t._control.id),d(2),S(!t.hideRequiredMarker&&t._control.required?2:-1)}}function zl(i,o){if(i&1&&M(0,Nl,3,5,"label",20),i&2){let t=g();S(t._hasFloatingLabel()?0:-1)}}function Wl(i,o){i&1&&v(0,"div",7)}function jl(i,o){}function Hl(i,o){if(i&1&&Xt(0,jl,0,0,"ng-template",13),i&2){g(2);let t=Bt(1);h("ngTemplateOutlet",t)}}function Ul(i,o){if(i&1&&(l(0,"div",9),M(1,Hl,1,1,null,13),c()),i&2){let t=g();h("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),d(),S(t._forceDisplayInfixLabel()?-1:1)}}function ql(i,o){i&1&&(l(0,"div",10,2),C(2,2),c())}function Gl(i,o){i&1&&(l(0,"div",11,3),C(2,3),c())}function $l(i,o){}function Ql(i,o){if(i&1&&Xt(0,$l,0,0,"ng-template",13),i&2){g();let t=Bt(1);h("ngTemplateOutlet",t)}}function Xl(i,o){i&1&&(l(0,"div",14,4),C(2,4),c())}function Kl(i,o){i&1&&(l(0,"div",15,5),C(2,5),c())}function Yl(i,o){i&1&&v(0,"div",16)}function Zl(i,o){i&1&&(l(0,"div",18),C(1,6),c())}function Jl(i,o){if(i&1&&(l(0,"mat-hint",22),m(1),c()),i&2){let t=g(2);h("id",t._hintLabelId),d(),b(t.hintLabel)}}function tc(i,o){if(i&1&&(l(0,"div",19),M(1,Jl,2,2,"mat-hint",22),C(2,7),v(3,"div",23),C(4,8),c()),i&2){let t=g();d(),S(t.hintLabel?1:-1)}}var ke=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["mat-label"]]})}return i})(),ec=new O("MatError");var wo=(()=>{class i{align="start";id=r(gt).getId("mat-mdc-hint-");static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(e,n){e&2&&(Vt("id",n.id),f("align",null),x("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),ic=new O("MatPrefix");var jr=new O("MatSuffix"),xo=(()=>{class i{set _isTextSelector(t){this._isText=!0}_isText=!1;static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[V([{provide:jr,useExisting:i}])]})}return i})(),Hr=new O("FloatingLabelParent"),Lr=(()=>{class i{_elementRef=r(R);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=r(Tr);_ngZone=r($);_parent=r(Hr);_resizeSubscription=new oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return nc(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(e,n){e&2&&x("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function nc(i){let o=i;if(o.offsetParent!==null)return o.scrollWidth;let t=o.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let e=t.scrollWidth;return t.remove(),e}var Vr="mdc-line-ripple--active",gn="mdc-line-ripple--deactivating",Br=(()=>{class i{_elementRef=r(R);_cleanupTransitionEnd;constructor(){let t=r($),e=r(ut);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=e.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(gn),t.add(Vr)}deactivate(){this._elementRef.nativeElement.classList.add(gn)}_handleTransitionEnd=t=>{let e=this._elementRef.nativeElement.classList,n=e.contains(gn);t.propertyName==="opacity"&&n&&e.remove(Vr,gn)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Nr=(()=>{class i{_elementRef=r(R);_ngZone=r($);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,e=t.querySelector(".mdc-floating-label");e?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(e.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>e.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let e=this._notch.nativeElement;!this.open||!t?e.style.width="":e.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(e,n){if(e&1&&st(El,5),e&2){let a;y(a=w())&&(n._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(e,n){e&2&&x("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Al,ngContentSelectors:Fl,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(e,n){e&1&&(j(),ge(0,"div",1),Rt(1,"div",2,0),C(3),Lt(),ge(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),pi=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i})}return i})();var fi=new O("MatFormField"),oc=new O("MAT_FORM_FIELD_DEFAULT_OPTIONS"),zr="fill",ac="auto",Wr="fixed",rc="translateY(-50%)",ze=(()=>{class i{_elementRef=r(R);_changeDetectorRef=r(Z);_platform=r(lt);_idGenerator=r(gt);_ngZone=r($);_defaults=r(oc,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=zt("iconPrefixContainer");_textPrefixContainerSignal=zt("textPrefixContainer");_iconSuffixContainerSignal=zt("iconSuffixContainer");_textSuffixContainerSignal=zt("textSuffixContainer");_prefixSuffixContainers=B(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=fa(ke);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=ot(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ac}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let e=t||this._defaults?.appearance||zr;this._appearanceSignal.set(e)}_appearanceSignal=F(zr);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Wr}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||Wr}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new A;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ct();constructor(){let t=this._defaults,e=r(Ht);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Oe(()=>this._currentDirection=e.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=B(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let e=this._control,n="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(n+t.controlType),e.controlType&&this._elementRef.nativeElement.classList.add(n+e.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=e.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=e.stateChanges.pipe(Ot([void 0,void 0]),Ft(()=>[e.errorState,e.userAriaDescribedBy]),Yo(),pt(([[a,s],[_,P]])=>a!==_||s!==P)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),e.ngControl&&e.ngControl.valueChanges&&(this._valueChanges=e.ngControl.valueChanges.pipe(Q(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),bt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){Si({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=B(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let e=this._control?this._control.ngControl:null;return e&&e[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(_=>_.align==="start"):null,s=this._hintChildren?this._hintChildren.find(_=>_.align==="end"):null;a?t.push(a.id):this._hintLabel&&t.push(this._hintLabelId),s&&t.push(s.id)}else this._errorChildren&&t.push(...this._errorChildren.map(a=>a.id));let e=this._control.describedByIds,n;if(e){let a=this._describedByIds||t;n=t.concat(e.filter(s=>s&&!a.includes(s)))}else n=t;this._control.setDescribedByIds(n),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,s=t?.getBoundingClientRect().width??0,_=e?.getBoundingClientRect().width??0,P=n?.getBoundingClientRect().width??0,tt=a?.getBoundingClientRect().width??0,Mt=this._currentDirection==="rtl"?"-1":"1",It=`${s+_}px`,Ce=`calc(${Mt} * (${It} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Dt=`var(--mat-mdc-form-field-label-transform, ${rc} translateX(${Ce}))`,bi=s+_+P+tt;return[Dt,bi]}_writeOutlinedLabelStyles(t){if(t!==null){let[e,n]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=e),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let e=t.getRootNode();return e&&e!==t}return document.documentElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-form-field"]],contentQueries:function(e,n,a){if(e&1&&(da(a,n._labelChild,ke,5),ft(a,pi,5)(a,ic,5)(a,jr,5)(a,ec,5)(a,wo,5)),e&2){_e();let s;y(s=w())&&(n._formFieldControl=s.first),y(s=w())&&(n._prefixChildren=s),y(s=w())&&(n._suffixChildren=s),y(s=w())&&(n._errorChildren=s),y(s=w())&&(n._hintChildren=s)}},viewQuery:function(e,n){if(e&1&&(Pe(n._iconPrefixContainerSignal,Er,5)(n._textPrefixContainerSignal,Ar,5)(n._iconSuffixContainerSignal,Fr,5)(n._textSuffixContainerSignal,Rr,5),st(Rl,5)(Er,5)(Ar,5)(Fr,5)(Rr,5)(Lr,5)(Nr,5)(Br,5)),e&2){_e(4);let a;y(a=w())&&(n._textField=a.first),y(a=w())&&(n._iconPrefixContainer=a.first),y(a=w())&&(n._textPrefixContainer=a.first),y(a=w())&&(n._iconSuffixContainer=a.first),y(a=w())&&(n._textSuffixContainer=a.first),y(a=w())&&(n._floatingLabel=a.first),y(a=w())&&(n._notchedOutline=a.first),y(a=w())&&(n._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(e,n){e&2&&x("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[V([{provide:fi,useExisting:i},{provide:Hr,useExisting:i}])],ngContentSelectors:Vl,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(e,n){if(e&1&&(j(Ll),Xt(0,zl,1,1,"ng-template",null,0,Qn),l(2,"div",6,1),u("click",function(s){return n._control.onContainerClick(s)}),M(4,Wl,1,0,"div",7),l(5,"div",8),M(6,Ul,2,2,"div",9),M(7,ql,3,0,"div",10),M(8,Gl,3,0,"div",11),l(9,"div",12),M(10,Ql,1,1,null,13),C(11),c(),M(12,Xl,3,0,"div",14),M(13,Kl,3,0,"div",15),c(),M(14,Yl,1,0,"div",16),c(),l(15,"div",17),M(16,Zl,2,0,"div",18)(17,tc,5,1,"div",19),c()),e&2){let a;d(2),x("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),d(2),S(!n._hasOutline()&&!n._control.disabled?4:-1),d(2),S(n._hasOutline()?6:-1),d(),S(n._hasIconPrefix?7:-1),d(),S(n._hasTextPrefix?8:-1),d(2),S(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),d(2),S(n._hasTextSuffix?12:-1),d(),S(n._hasIconSuffix?13:-1),d(),S(n._hasOutline()?-1:14),d(),x("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let s=n._getSubscriptMessageType();d(),S((a=s)==="error"?16:a==="hint"?17:-1)}},dependencies:[Lr,Nr,_a,Br,wo],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var ee=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[Pi,ze,J]})}return i})();var sc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(e,n){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return i})(),lc={passive:!0},qr=(()=>{class i{_platform=r(lt);_ngZone=r($);_renderer=r(wi).createRenderer(null,null);_styleLoader=r(Pt);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return qo;this._styleLoader.load(sc);let e=Kn(t),n=this._monitoredElements.get(e);if(n)return n.subject;let a=new A,s="cdk-text-field-autofilled",_=tt=>{tt.animationName==="cdk-text-field-autofill-start"&&!e.classList.contains(s)?(e.classList.add(s),this._ngZone.run(()=>a.next({target:tt.target,isAutofilled:!0}))):tt.animationName==="cdk-text-field-autofill-end"&&e.classList.contains(s)&&(e.classList.remove(s),this._ngZone.run(()=>a.next({target:tt.target,isAutofilled:!1})))},P=this._ngZone.runOutsideAngular(()=>(e.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(e,"animationstart",_,lc)));return this._monitoredElements.set(e,{subject:a,unlisten:P}),a}stopMonitoring(t){let e=Kn(t),n=this._monitoredElements.get(e);n&&(n.unlisten(),n.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Gr=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({})}return i})();var $r=new O("MAT_INPUT_VALUE_ACCESSOR");var _n=(()=>{class i{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var We=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(o,t,e,n,a){this._defaultMatcher=o,this.ngControl=t,this._parentFormGroup=e,this._parentForm=n,this._stateChanges=a}updateErrorState(){let o=this.errorState,t=this._parentFormGroup||this._parentForm,e=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,a=e?.isErrorState(n,t)??!1;a!==o&&(this.errorState=a,this._stateChanges.next())}};var cc=["button","checkbox","file","hidden","image","radio","range","reset","submit"],dc=new O("MAT_INPUT_CONFIG"),Qr=(()=>{class i{_elementRef=r(R);_platform=r(lt);ngControl=r(At,{optional:!0,self:!0});_autofillMonitor=r(qr);_ngZone=r($);_formField=r(fi,{optional:!0});_renderer=r(ut);_uid=r(gt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=r(dc,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new A;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=ot(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(kt.required)??!1}set required(t){this._required=ot(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Zn().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=ot(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Zn().has(t));constructor(){let t=r(ui,{optional:!0}),e=r(te,{optional:!0}),n=r(_n),a=r($r,{optional:!0,self:!0}),s=this._elementRef.nativeElement,_=s.nodeName.toLowerCase();a?ki(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new We(n,this.ngControl,e,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=_==="select",this._isTextarea=_==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Oe(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type==="number"?(e.type="text",e.setSelectionRange(0,0),e.type="number"):e.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){cc.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let e=t.target;!e.value&&e.selectionStart===0&&e.selectionEnd===0&&(e.setSelectionRange(1,1),e.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(e,n){e&1&&u("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),e&2&&(Vt("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),f("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),x("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",N]},exportAs:["matInput"],features:[V([{provide:pi,useExisting:i}]),yt]})}return i})(),bn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[ee,ee,Gr,J]})}return i})();var gi=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new A;constructor(o=!1,t,e=!0,n){this._multiple=o,this._emitChanges=e,this.compareWith=n,t&&t.length&&(o?t.forEach(a=>this._markSelected(a)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...o){this._verifyValueAssignment(o),o.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...o){this._verifyValueAssignment(o),o.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...o){this._verifyValueAssignment(o);let t=this.selected,e=new Set(o.map(a=>this._getConcreteValue(a)));o.forEach(a=>this._markSelected(a)),t.filter(a=>!e.has(this._getConcreteValue(a,e))).forEach(a=>this._unmarkSelected(a));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let t=this._hasQueuedChanges();return o&&this._emitChangeEvent(),t}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(o,e))return e;return o}else return o}};var Xr=(()=>{class i{_animationsDisabled=ct();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,n){e&2&&x("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return i})();var uc=["text"],hc=[[["mat-icon"]],"*"],pc=["mat-icon","*"];function fc(i,o){if(i&1&&v(0,"mat-pseudo-checkbox",1),i&2){let t=g();h("disabled",t.disabled)("state",t.selected?"checked":"unchecked")}}function gc(i,o){if(i&1&&v(0,"mat-pseudo-checkbox",3),i&2){let t=g();h("disabled",t.disabled)}}function _c(i,o){if(i&1&&(l(0,"span",4),m(1),c()),i&2){let t=g();d(),L("(",t.group.label,")")}}var Co=new O("MAT_OPTION_PARENT_COMPONENT"),Mo=new O("MatOptgroup");var ko=class{source;isUserInput;constructor(o,t=!1){this.source=o,this.isUserInput=t}},je=(()=>{class i{_element=r(R);_changeDetectorRef=r(Z);_parent=r(Co,{optional:!0});group=r(Mo,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=r(gt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=F(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new H;_text;_stateChanges=new A;constructor(){let t=r(Pt);t.load(jt),t.load(Pa),this._signalDisableRipple=!!this._parent&&ki(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!Wt(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new ko(this,t))}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-option"]],viewQuery:function(e,n){if(e&1&&st(uc,7),e&2){let a;y(a=w())&&(n._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(e,n){e&1&&u("click",function(){return n._selectViaInteraction()})("keydown",function(s){return n._handleKeydown(s)}),e&2&&(Vt("id",n.id),f("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),x("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",N]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:pc,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(e,n){e&1&&(j(hc),M(0,fc,1,2,"mat-pseudo-checkbox",1),C(1),l(2,"span",2,0),C(4,1),c(),M(5,gc,1,1,"mat-pseudo-checkbox",3),M(6,_c,2,1,"span",4),v(7,"div",5)),e&2&&(S(n.multiple?0:-1),d(5),S(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),d(),S(n.group&&n.group._inert?6:-1),d(),h("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[Xr,Yt],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return i})();function Kr(i,o,t){if(t.length){let e=o.toArray(),n=t.toArray(),a=0;for(let s=0;s<i+1;s++)e[s].group&&e[s].group===n[a]&&a++;return a}return 0}function Yr(i,o,t,e){return i<t?i:i+o>t+e?Math.max(0,i-e+o):t}var vn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[J]})}return i})();var So=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[le,vn,je,J]})}return i})();var vc=["trigger"],yc=["panel"],wc=[[["mat-select-trigger"]],"*"],xc=["mat-select-trigger","*"];function kc(i,o){if(i&1&&(l(0,"span",4),m(1),c()),i&2){let t=g();d(),b(t.placeholder)}}function Cc(i,o){i&1&&C(0)}function Mc(i,o){if(i&1&&(l(0,"span",11),m(1),c()),i&2){let t=g(2);d(),b(t.triggerValue)}}function Sc(i,o){if(i&1&&(l(0,"span",5),M(1,Cc,1,0)(2,Mc,2,1,"span",11),c()),i&2){let t=g();d(),S(t.customTrigger?1:2)}}function Oc(i,o){if(i&1){let t=ht();l(0,"div",12,1),u("keydown",function(n){X(t);let a=g();return K(a._handleKeydown(n))}),C(2,1),c()}if(i&2){let t=g();nt(t.panelClass),x("mat-select-panel-animations-enabled",!t._animationsDisabled)("mat-primary",(t._parentFormField==null?null:t._parentFormField.color)==="primary")("mat-accent",(t._parentFormField==null?null:t._parentFormField.color)==="accent")("mat-warn",(t._parentFormField==null?null:t._parentFormField.color)==="warn")("mat-undefined",!(t._parentFormField!=null&&t._parentFormField.color)),f("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}var Pc=new O("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=r(mt);return()=>Ei(i)}}),Ic=new O("MAT_SELECT_CONFIG"),Dc=new O("MatSelectTrigger"),Oo=class{source;value;constructor(o,t){this.source=o,this.value=t}},Zr=(()=>{class i{_viewportRuler=r(ei);_changeDetectorRef=r(Z);_elementRef=r(R);_dir=r(Ht,{optional:!0});_idGenerator=r(gt);_renderer=r(ut);_parentFormField=r(fi,{optional:!0});ngControl=r(At,{self:!0,optional:!0});_liveAnnouncer=r(Ii);_defaultOptions=r(Ic,{optional:!0});_animationsDisabled=ct();_popoverLocation;_initialized=new A;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let e=this.options.toArray()[t];if(e){let n=this.panel.nativeElement,a=Kr(t,this.options,this.optionGroups),s=e._getHostElement();t===0&&a===1?n.scrollTop=0:n.scrollTop=Yr(s.offsetTop,s.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new Oo(this,t)}_scrollStrategyFactory=r(Pc);_panelOpen=!1;_compareWith=(t,e)=>t===e;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new A;_errorStateTracker;stateChanges=new A;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=F(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(kt.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=$o(()=>{let t=this.options;return t?t.changes.pipe(Ot(t),Me(()=>bt(...t.map(e=>e.onSelectionChange)))):this._initialized.pipe(Me(()=>this.optionSelectionChanges))});openedChange=new H;_openedStream=this.openedChange.pipe(pt(t=>t),Ft(()=>{}));_closedStream=this.openedChange.pipe(pt(t=>!t),Ft(()=>{}));selectionChange=new H;valueChange=new H;constructor(){let t=r(_n),e=r(ui,{optional:!0}),n=r(te,{optional:!0}),a=r(new Ci("tabindex"),{optional:!0}),s=r(ja,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new We(t,this.ngControl,n,e,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new gi(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Q(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Q(this._destroy)).subscribe(t=>{t.added.forEach(e=>e.select()),t.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(Ot(null),Q(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),e=this.ngControl;if(t!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?n.setAttribute("aria-labelledby",t):n.removeAttribute("aria-labelledby")}e&&(this._previousControl!==e.control&&(this._previousControl!==void 0&&e.disabled!==null&&e.disabled!==this.disabled&&(this.disabled=e.disabled),this._previousControl=e.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ae(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let t=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;let e=`${this.id}-panel`;this._trackedModal&&Yn(this._trackedModal,"aria-owns",e),Ra(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){if(!this._trackedModal)return;let t=`${this.id}-panel`;Yn(this._trackedModal,"aria-owns",t),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{e(),clearTimeout(n),this._cleanupDetach=void 0};let t=this.panel.nativeElement,e=this._renderer.listen(t,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let e=t.keyCode,n=e===40||e===38||e===37||e===39,a=e===13||e===32,s=this._keyManager;if(!s.isTyping()&&a&&!Wt(t)||(this.multiple||t.altKey)&&n)t.preventDefault(),this.open();else if(!this.multiple){let _=this.selected;s.onKeydown(t);let P=this.selected;P&&_!==P&&this._liveAnnouncer.announce(P.viewValue,1e4)}}_handleOpenKeydown(t){let e=this._keyManager,n=t.keyCode,a=n===40||n===38,s=e.isTyping();if(a&&t.altKey)t.preventDefault(),this.close();else if(!s&&(n===13||n===32)&&e.activeItem&&!Wt(t))t.preventDefault(),e.activeItem._selectViaInteraction();else if(!s&&this._multiple&&n===65&&t.ctrlKey){t.preventDefault();let _=this.options.some(P=>!P.disabled&&!P.selected);this.options.forEach(P=>{P.disabled||(_?P.select():P.deselect())})}else{let _=e.activeItemIndex;e.onKeydown(t),this._multiple&&a&&t.shiftKey&&e.activeItem&&e.activeItemIndex!==_&&e.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!Wt(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(e=>e.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(e=>this._selectOptionByValue(e)),this._sortValues();else{let e=this._selectOptionByValue(t);e?this._keyManager.updateActiveItem(e):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let e=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,t)}catch{return!1}});return e&&this._selectionModel.select(e),e}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof io?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Aa(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=bt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Q(t)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),bt(...this.options.map(e=>e._stateChanges)).pipe(Q(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,e){let n=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(n!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),e&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),e&&this.focus())),n!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((e,n)=>this.sortComparator?this.sortComparator(e,n,t):t.indexOf(e)-t.indexOf(n)),this.stateChanges.next()}}_propagateChanges(t){let e;this.multiple?e=this.selected.map(n=>n.value):e=this.selected?this.selected.value:t,this._value=e,this.valueChange.emit(e),this._onChange(e),this.selectionChange.emit(this._getChangeEvent(e)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let e=0;e<this.options.length;e++)if(!this.options.get(e).disabled){t=e;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(t){let e=Oa(t);e&&(e.tagName==="MAT-OPTION"||e.classList.contains("cdk-overlay-backdrop")||e.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-select"]],contentQueries:function(e,n,a){if(e&1&&ft(a,Dc,5)(a,je,5)(a,Mo,5),e&2){let s;y(s=w())&&(n.customTrigger=s.first),y(s=w())&&(n.options=s),y(s=w())&&(n.optionGroups=s)}},viewQuery:function(e,n){if(e&1&&st(vc,5)(yc,5)(no,5),e&2){let a;y(a=w())&&(n.trigger=a.first),y(a=w())&&(n.panel=a.first),y(a=w())&&(n._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(e,n){e&1&&u("keydown",function(s){return n._handleKeydown(s)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),e&2&&(f("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),x("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",N],disableRipple:[2,"disableRipple","disableRipple",N],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:wt(t)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",N],placeholder:"placeholder",required:[2,"required","required",N],multiple:[2,"multiple","multiple",N],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",N],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",wt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",N]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[V([{provide:pi,useExisting:i},{provide:Co,useExisting:i}]),yt],ngContentSelectors:xc,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(e,n){if(e&1&&(j(wc),l(0,"div",2,0),u("click",function(){return n.open()}),l(3,"div",3),M(4,kc,2,1,"span",4)(5,Sc,3,1,"span",5),c(),l(6,"div",6)(7,"div",7),$t(),l(8,"svg",8),v(9,"path",9),c()()()(),Xt(10,Oc,3,16,"ng-template",10),u("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(s){return n._handleOverlayKeydown(s)})),e&2){let a=Bt(1);d(3),f("id",n._valueId),d(),S(n.empty?4:5),d(6),h("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[io,no],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return i})();var Jr=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[ii,So,J,ye,ee,So]})}return i})();var Ec=["mat-internal-form-field",""],Ac=["*"],ts=(()=>{class i{labelPosition="after";static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(e,n){e&2&&x("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Ec,ngContentSelectors:Ac,decls:1,vars:0,template:function(e,n){e&1&&(j(),C(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var Fc=["switch"],Rc=["*"];function Lc(i,o){i&1&&(l(0,"span",11),$t(),l(1,"svg",13),v(2,"path",14),c(),l(3,"svg",15),v(4,"path",16),c()())}var Vc=new O("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),yn=class{source;checked;constructor(o,t){this.source=o,this.checked=t}},Po=(()=>{class i{_elementRef=r(R);_focusMonitor=r(ve);_changeDetectorRef=r(Z);defaults=r(Vc);_onChange=t=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(t){return new yn(this,t)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ct();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(t){this._checked=t,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new H;toggleChange=new H;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){r(Pt).load(jt);let t=r(new Ci("tabindex"),{optional:!0}),e=this.defaults;this.tabIndex=t==null?0:parseInt(t)||0,this.color=e.color||"accent",this.id=this._uniqueId=r(gt).getId("mat-mdc-slide-toggle-"),this.hideIcon=e.hideIcon??!1,this.disabledInteractive=e.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{t==="keyboard"||t==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):t||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(t){t.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}validate(t){return this.required&&t.value!==!0?{required:!0}:null}registerOnValidatorChange(t){this._validatorOnChange=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new yn(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(e,n){if(e&1&&st(Fc,5),e&2){let a;y(a=w())&&(n._switchElement=a.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(e,n){e&2&&(Vt("id",n.id),f("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),nt(n.color?"mat-"+n.color:""),x("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",N],color:"color",disabled:[2,"disabled","disabled",N],disableRipple:[2,"disableRipple","disableRipple",N],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:wt(t)],checked:[2,"checked","checked",N],hideIcon:[2,"hideIcon","hideIcon",N],disabledInteractive:[2,"disabledInteractive","disabledInteractive",N]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[V([{provide:me,useExisting:vt(()=>i),multi:!0},{provide:ue,useExisting:i,multi:!0}]),yt],ngContentSelectors:Rc,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(e,n){if(e&1&&(j(),l(0,"div",1)(1,"button",2,0),u("click",function(){return n._handleClick()}),v(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),v(8,"span",8),c(),l(9,"span",9),v(10,"span",10),c(),M(11,Lc,5,0,"span",11),c()()(),l(12,"label",12),u("click",function(s){return s.stopPropagation()}),C(13),c()()),e&2){let a=Bt(2);h("labelPosition",n.labelPosition),d(),x("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),h("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),f("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),d(9),h("matRippleTrigger",a)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),d(),S(n.hideIcon?-1:11),d(),h("for",n.buttonId),f("id",n._labelId)}},dependencies:[Yt,ts],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return i})(),es=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[Po,J]})}return i})();var Nc=["knob"],zc=["valueIndicatorContainer"];function Wc(i,o){if(i&1&&(l(0,"div",2,1)(2,"div",5)(3,"span",6),m(4),c()()()),i&2){let t=g();d(4),b(t.valueIndicatorText)}}var jc=["trackActive"],Hc=["*"];function Uc(i,o){if(i&1&&v(0,"div"),i&2){let t=o.$implicit,e=o.$index,n=g(3);nt(t===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),re("transform",n._calcTickMarkTransform(e))}}function qc(i,o){if(i&1&&pe(0,Uc,1,4,"div",8,la),i&2){let t=g(2);fe(t._tickMarks)}}function Gc(i,o){if(i&1&&(l(0,"div",6,1),M(2,qc,2,0),c()),i&2){let t=g();d(2),S(t._cachedWidth?2:-1)}}function $c(i,o){if(i&1&&v(0,"mat-slider-visual-thumb",7),i&2){let t=g();h("discrete",t.discrete)("thumbPosition",1)("valueIndicatorText",t.startValueIndicatorText)}}var T=(function(i){return i[i.START=1]="START",i[i.END=2]="END",i})(T||{}),He=(function(i){return i[i.ACTIVE=0]="ACTIVE",i[i.INACTIVE=1]="INACTIVE",i})(He||{}),Io=new O("_MatSlider"),is=new O("_MatSliderThumb"),Qc=new O("_MatSliderRangeThumb"),ns=new O("_MatSliderVisualThumb");var Xc=(()=>{class i{_cdr=r(Z);_ngZone=r($);_slider=r(Io);_renderer=r(ut);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=r(R).nativeElement;_platform=r(lt);constructor(){}ngAfterViewInit(){let t=this._slider._getInput(this.thumbPosition);t&&(this._ripple.radius=24,this._sliderInput=t,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let e=this._sliderInputEl,n=this._renderer;this._listenerCleanups=[n.listen(e,"pointermove",this._onPointerMove),n.listen(e,"pointerdown",this._onDragStart),n.listen(e,"pointerup",this._onDragEnd),n.listen(e,"pointerleave",this._onMouseLeave),n.listen(e,"focus",this._onFocus),n.listen(e,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t())}_onPointerMove=t=>{if(this._sliderInput._isFocused)return;let e=this._hostElement.getBoundingClientRect(),n=this._slider._isCursorOnSliderThumb(t,e);this._isHovered=n,n?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=t=>{t.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(t){return t?.state===Jn.FADING_IN||t?.state===Jn.VISIBLE}_showRipple(t,e){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===T.START?T.END:T.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!e)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:t,centered:!0,persistent:!0})}_hideRipple(t){if(t?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let e=this._getSibling();e._isShowingAnyRipple()||(this._hideValueIndicator(),e._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===T.START?T.END:T.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(e,n){if(e&1&&st(Yt,5)(Nc,5)(zc,5),e&2){let a;y(a=w())&&(n._ripple=a.first),y(a=w())&&(n._knob=a.first),y(a=w())&&(n._valueIndicatorContainer=a.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[V([{provide:ns,useExisting:i}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(e,n){e&1&&(M(0,Wc,5,1,"div",2),v(1,"div",3,0)(3,"div",4)),e&2&&(S(n.discrete?0:-1),d(3),h("matRippleDisabled",!0))},dependencies:[Yt],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return i})(),os=(()=>{class i{_ngZone=r($);_cdr=r(Z);_elementRef=r(R);_dir=r(Ht,{optional:!0});_globalRippleOptions=r(Di,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(t){this._disabled=t;let e=this._getInput(T.END),n=this._getInput(T.START);e&&(e.disabled=this._disabled),n&&(n.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(t){this._discrete=t,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(t){this._showTickMarks=t,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(t){let e=t==null||isNaN(t)?this._min:t;this._min!==e&&this._updateMin(e)}_min=0;color;disableRipple=!1;_updateMin(t){let e=this._min;this._min=t,this._isRange?this._updateMinRange({old:e,new:t}):this._updateMinNonRange(t),this._onMinMaxOrStepChange()}_updateMinRange(t){let e=this._getInput(T.END),n=this._getInput(T.START),a=e.value,s=n.value;n.min=t.new,e.min=Math.max(t.new,n.value),n.max=Math.min(e.max,e.value),n._updateWidthInactive(),e._updateWidthInactive(),t.new<t.old?this._onTranslateXChangeBySideEffect(e,n):this._onTranslateXChangeBySideEffect(n,e),a!==e.value&&this._onValueChange(e),s!==n.value&&this._onValueChange(n)}_updateMinNonRange(t){let e=this._getInput(T.END);if(e){let n=e.value;e.min=t,e._updateThumbUIByValue(),this._updateTrackUI(e),n!==e.value&&this._onValueChange(e)}}get max(){return this._max}set max(t){let e=t==null||isNaN(t)?this._max:t;this._max!==e&&this._updateMax(e)}_max=100;_updateMax(t){let e=this._max;this._max=t,this._isRange?this._updateMaxRange({old:e,new:t}):this._updateMaxNonRange(t),this._onMinMaxOrStepChange()}_updateMaxRange(t){let e=this._getInput(T.END),n=this._getInput(T.START),a=e.value,s=n.value;e.max=t.new,n.max=Math.min(t.new,e.value),e.min=n.value,e._updateWidthInactive(),n._updateWidthInactive(),t.new>t.old?this._onTranslateXChangeBySideEffect(n,e):this._onTranslateXChangeBySideEffect(e,n),a!==e.value&&this._onValueChange(e),s!==n.value&&this._onValueChange(n)}_updateMaxNonRange(t){let e=this._getInput(T.END);if(e){let n=e.value;e.max=t,e._updateThumbUIByValue(),this._updateTrackUI(e),n!==e.value&&this._onValueChange(e)}}get step(){return this._step}set step(t){let e=isNaN(t)?this._step:t;this._step!==e&&this._updateStep(e)}_step=1;_updateStep(t){this._step=t,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let t=this._getInput(T.END),e=this._getInput(T.START),n=t.value,a=e.value,s=e.value;t.min=this._min,e.max=this._max,t.step=this._step,e.step=this._step,this._platform.SAFARI&&(t.value=t.value,e.value=e.value),t.min=Math.max(this._min,e.value),e.max=Math.min(this._max,t.value),e._updateWidthInactive(),t._updateWidthInactive(),t.value<s?this._onTranslateXChangeBySideEffect(e,t):this._onTranslateXChangeBySideEffect(t,e),n!==t.value&&this._onValueChange(t),a!==e.value&&this._onValueChange(e)}_updateStepNonRange(){let t=this._getInput(T.END);if(t){let e=t.value;t.step=this._step,this._platform.SAFARI&&(t.value=t.value),t._updateThumbUIByValue(),e!==t.value&&this._onValueChange(t)}}displayWith=t=>`${t}`;_tickMarks;_noopAnimations=ct();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=B(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=r(lt);constructor(){r(Pt).load(jt);let t=this._isRtl();Si(()=>{let e=this._isRtl();e!==t&&(t=e,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let t=this._getInput(T.END),e=this._getInput(T.START);this._isRange=!!t&&!!e,this._cdr.detectChanges();let n=this._getThumb(T.END);this._rippleRadius=n._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(t,e):this._initUINonRange(t),this._updateTrackUI(t),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(t){t.initProps(),t.initUI(),this._updateValueIndicatorUI(t),this._hasViewInitialized=!0,t._updateThumbUIByValue()}_initUIRange(t,e){t.initProps(),t.initUI(),e.initProps(),e.initUI(),t._updateMinMax(),e._updateMinMax(),t._updateStaticStyles(),e._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,t._updateThumbUIByValue(),e._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let t=this._getInput(T.END),e=this._getInput(T.START);t._setIsLeftThumb(),e._setIsLeftThumb(),t.translateX=t._calcTranslateXByValue(),e.translateX=e._calcTranslateXByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateWidthInactive(),e._updateWidthInactive(),t._updateThumbUIByValue(),e._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(T.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(T.START)._isActive||this._getThumb(T.END)._isActive}_getValue(t=T.END){let e=this._getInput(t);return e?e.value:this.min}_skipUpdate(){return!!(this._getInput(T.START)?._skipUIUpdate||this._getInput(T.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(t){let e=this._trackActive.nativeElement.style;e.left=t.left,e.right=t.right,e.transformOrigin=t.transformOrigin,e.transform=t.transform}_calcTickMarkTransform(t){let e=t*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-e:e}px)`}_onTranslateXChange(t){this._hasViewInitialized&&(this._updateThumbUI(t),this._updateTrackUI(t),this._updateOverlappingThumbUI(t))}_onTranslateXChangeBySideEffect(t,e){this._hasViewInitialized&&(t._updateThumbUIByValue(),e._updateThumbUIByValue())}_onValueChange(t){this._hasViewInitialized&&(this._updateValueIndicatorUI(t),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let t=this._getInput(T.END),e=this._getInput(T.START);t._updateThumbUIByValue(),e._updateThumbUIByValue(),t._updateStaticStyles(),e._updateStaticStyles(),t._updateMinMax(),e._updateMinMax(),t._updateWidthInactive(),e._updateWidthInactive()}else{let t=this._getInput(T.END);t&&t._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let t=this._getInput(T.START),e=this._getInput(T.END);return!t||!e?!1:e.translateX-t.translateX<20}_updateOverlappingThumbClassNames(t){let e=t.getSibling(),n=this._getThumb(t.thumbPosition);this._getThumb(e.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),n._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(t){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(t))}_updateThumbUI(t){if(this._skipUpdate())return;let e=this._getThumb(t.thumbPosition===T.END?T.END:T.START);e._hostElement.style.transform=`translateX(${t.translateX}px)`}_updateValueIndicatorUI(t){if(this._skipUpdate())return;let e=this.displayWith(t.value);if(this._hasViewInitialized?t._valuetext.set(e):t._hostElement.setAttribute("aria-valuetext",e),this.discrete){t.thumbPosition===T.START?this.startValueIndicatorText=e:this.endValueIndicatorText=e;let n=this._getThumb(t.thumbPosition);e.length<3?n._hostElement.classList.add("mdc-slider__thumb--short-value"):n._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let t=this._getInput(T.END),e=this._getInput(T.START);t&&this._updateValueIndicatorUI(t),e&&this._updateValueIndicatorUI(e)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let t=this._step&&this._step>0?this._step:1,n=(Math.floor(this.max/t)*t-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*n}_updateTrackUI(t){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(t):this._updateTrackUINonRange(t))}_updateTrackUIRange(t){let e=t.getSibling();if(!e||!this._cachedWidth)return;let n=Math.abs(e.translateX-t.translateX)/this._cachedWidth;t._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-e.translateX}px`,transformOrigin:"right",transform:`scaleX(${n})`}):this._setTrackActiveStyles({left:`${e.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${n})`})}_updateTrackUINonRange(t){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-t.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${t.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let t=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(t):this._updateTickMarkUINonRange(t)}_updateTickMarkUINonRange(t){let e=this._getValue(),n=Math.max(Math.round((e-this.min)/t),0)+1,a=Math.max(Math.round((this.max-e)/t),0)-1;this._isRtl()?n++:a++,this._tickMarks=Array(n).fill(He.ACTIVE).concat(Array(a).fill(He.INACTIVE))}_updateTickMarkUIRange(t){let e=this._getValue(),n=this._getValue(T.START),a=Math.max(Math.round((n-this.min)/t),0),s=Math.max(Math.round((e-n)/t)+1,0),_=Math.max(Math.round((this.max-e)/t),0);this._tickMarks=Array(a).fill(He.INACTIVE).concat(Array(s).fill(He.ACTIVE),Array(_).fill(He.INACTIVE))}_getInput(t){if(t===T.END&&this._input)return this._input;if(this._inputs?.length)return t===T.START?this._inputs.first:this._inputs.last}_getThumb(t){return t===T.END?this._thumbs?.last:this._thumbs?.first}_setTransition(t){this._hasAnimation=!this._platform.IOS&&t&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(t,e){let n=e.width/2,a=e.x+n,s=e.y+n,_=t.clientX-a,P=t.clientY-s;return Math.pow(_,2)+Math.pow(P,2)<Math.pow(n,2)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-slider"]],contentQueries:function(e,n,a){if(e&1&&ft(a,is,5)(a,Qc,4),e&2){let s;y(s=w())&&(n._input=s.first),y(s=w())&&(n._inputs=s)}},viewQuery:function(e,n){if(e&1&&st(jc,5)(ns,5),e&2){let a;y(a=w())&&(n._trackActive=a.first),y(a=w())&&(n._thumbs=a)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(e,n){e&2&&(nt("mat-"+(n.color||"primary")),x("mdc-slider--range",n._isRange)("mdc-slider--disabled",n.disabled)("mdc-slider--discrete",n.discrete)("mdc-slider--tick-marks",n.showTickMarks)("_mat-animation-noopable",n._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",N],discrete:[2,"discrete","discrete",N],showTickMarks:[2,"showTickMarks","showTickMarks",N],min:[2,"min","min",wt],color:"color",disableRipple:[2,"disableRipple","disableRipple",N],max:[2,"max","max",wt],step:[2,"step","step",wt],displayWith:"displayWith"},exportAs:["matSlider"],features:[V([{provide:Io,useExisting:i}])],ngContentSelectors:Hc,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(e,n){e&1&&(j(),C(0),l(1,"div",2),v(2,"div",3),l(3,"div",4),v(4,"div",5,0),c(),M(6,Gc,3,1,"div",6),c(),M(7,$c,1,3,"mat-slider-visual-thumb",7),v(8,"mat-slider-visual-thumb",7)),e&2&&(d(6),S(n.showTickMarks?6:-1),d(),S(n._isRange?7:-1),d(),h("discrete",n.discrete)("thumbPosition",2)("valueIndicatorText",n.endValueIndicatorText))},dependencies:[Xc],styles:[`.mdc-slider__track {
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
`],encapsulation:2,changeDetection:0})}return i})();var Kc={provide:me,useExisting:vt(()=>Do),multi:!0};var Do=(()=>{class i{_ngZone=r($);_elementRef=r(R);_cdr=r(Z);_slider=r(Io);_platform=r(lt);_listenerCleanups;get value(){return wt(this._hostElement.value,0)}set value(t){t===null&&(t=this._getDefaultValue()),t=isNaN(t)?0:t;let e=t+"";if(!this._hasSetInitialValue){this._initialValue=e;return}this._isActive||this._setValue(e)}_setValue(t){this._hostElement.value=t,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new H;dragStart=new H;dragEnd=new H;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(t){this._translateX=t}_translateX;thumbPosition=T.END;get min(){return wt(this._hostElement.min,0)}set min(t){this._hostElement.min=t+"",this._cdr.detectChanges()}get max(){return wt(this._hostElement.max,0)}set max(t){this._hostElement.max=t+"",this._cdr.detectChanges()}get step(){return wt(this._hostElement.step,0)}set step(t){this._hostElement.step=t+"",this._cdr.detectChanges()}get disabled(){return N(this._hostElement.disabled)}set disabled(t){this._hostElement.disabled=t,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=F("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(t){this._isFocused=t}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new A;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let t=r(ut);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[t.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),t.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),t.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(t){if(!(this.disabled||t.button!==0)){if(this._platform.IOS){let e=this._slider._isCursorOnSliderThumb(t,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=e,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(t,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(t),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(t){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(t)},0)}_fixValue(t){let e=t.clientX-this._slider._cachedLeft,n=this._slider._cachedWidth,a=this._slider.step===0?1:this._slider.step,s=Math.floor((this._slider.max-this._slider.min)/a),_=this._slider._isRtl()?1-e/n:e/n,tt=Math.round(_*s)/s*(this._slider.max-this._slider.min)+this._slider.min,Mt=Math.round(tt/a)*a,It=this.value;if(Mt===It){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation});return}this.value=Mt,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(t,{withAnimation:this._slider._hasAnimation})}_onPointerMove(t){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(t)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(t){let e=this._tickMarkOffset,n=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(t,n),e)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(t){return t.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(t){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(t)}_updateThumbUIByPointerEvent(t,e){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(t)),this._updateThumbUI(e)}_updateThumbUI(t){this._slider._setTransition(!!t?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(t){(this._isControlInitialized||t!==null)&&(this.value=t)}registerOnChange(t){this._onChangeFn=t,this._isControlInitialized=!0}registerOnTouched(t){this._onTouchedFn=t}setDisabledState(t){this.disabled=t}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(e,n){e&1&&u("change",function(){return n._onChange()})("input",function(){return n._onInput()})("blur",function(){return n._onBlur()})("focus",function(){return n._onFocus()}),e&2&&f("aria-valuetext",n._valuetext())},inputs:{value:[2,"value","value",wt]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[V([Kc,{provide:is,useExisting:i}])]})}return i})();var as=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[le,J]})}return i})();var wn=class i extends G{languageFormFieldLabel=$localize`:Language form field label@@languageFormFieldLabel:Language`;layoutFormFieldLabel=$localize`:Layout form field label@@layoutFormFieldLabel:Layout`;soundSwitchLabel=$localize`:Sound enable/disable switch label@@soundSwitchLabel:Sound`;animationSwitchLabel=$localize`:Animation enable/disable switch label@@animationSwitchLabel:Animation`;missingTranslationLabel=$localize`:Missing translation label@@missingTranslationLabel:Missing translation`;settingsAmericanEnglishLanguageLabel=$localize`:American English language setting label@@settingsAmericanEnglishLanguageLabel:English`;settingsHungarianLanguageLabel=$localize`:Hungarian language setting label@@settingsHungarianLanguageLabel:Hungarian`;autoLayoutSettingLabel=$localize`:Auto layout setting label@@autoLayoutSettingLabel:Auto`;smartPhoneLayoutSettingLabel=$localize`:Smartphone layout setting label@@smartPhoneLayoutSettingLabel:Smartphone`;tabletLayoutSettingLabel=$localize`:Tabblet layout setting label@@tabletLayoutSettingLabel:Tablet`;desktopLayoutSettingLabel=$localize`:Desktop layout setting label@@desktopLayoutSettingLabel:Desktop`;resolveLanguageLabel(o){let t=this.missingTranslationLabel;switch(o){case"en-US":t=this.settingsAmericanEnglishLanguageLabel;break;case"hu-HU":t=this.settingsHungarianLanguageLabel;break}return t}resolveLayoutLabel(o){let t=this.missingTranslationLabel;switch(o){case"auto":t=this.autoLayoutSettingLabel;break;case"wide_portrait":t=this.smartPhoneLayoutSettingLabel;break;case"landscape":t=this.tabletLayoutSettingLabel;break;case"wide_landscape":t=this.desktopLayoutSettingLabel;break}return t}static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};function Jc(i,o){if(i&1&&(l(0,"mat-option",3),m(1),c()),i&2){let t=o.$implicit,e=g();h("value",q(t)),d(),b(e.translations.resolveLanguageLabel(t))}}function td(i,o){if(i&1&&(l(0,"mat-option",3),m(1),c()),i&2){let t=o.$implicit,e=g();h("value",q(t)),d(),b(e.translations.resolveLayoutLabel(t))}}var Ue=class i{static DEFAULT_VOLUME=it.DEFAULT_VOLUME;volumeIcon=F("volume_down");isDirty=Nt();isValid=Nt();currentSettings;isSaveInProgress;languages=[];layouts=[];form;languageFormControl;layoutFormcontrol;volumeFormcontrol;isSaveInProgressSubscription;formValueChangeSubscription;translations=r(wn);settingsService=r($a);audioPlaybackService=r(Vi);signals=r(it);constructor(){this.currentSettings=this.signals.settings.toSignal(),this.isSaveInProgress=this.signals.isSettingsSaveInProgress.toSignal(),this.isSaveInProgressSubscription=qa(this.isSaveInProgress).subscribe(o=>{o&&this.save()}),this.languageFormControl=new _t(this.currentSettings().language),this.layoutFormcontrol=new _t(this.currentSettings().layout),this.volumeFormcontrol=new _t(this.currentSettings().volume),this.updateVolumeIcon(this.currentSettings().volume),this.form=new Jt({language:this.languageFormControl,layout:this.layoutFormcontrol,volume:this.volumeFormcontrol,audioEnabled:new _t(this.currentSettings().isAudioEnabled),animationEnabled:new _t(this.currentSettings().isAnimationEnabled)}),this.formValueChangeSubscription=this.form.valueChanges.subscribe(()=>{this.isDirty.emit(this.form.dirty),this.isValid.emit(this.form.valid)}),Object.values(Li).forEach(o=>{this.languages.push(o)}),this.layouts.push("auto"),this.layouts.push("wide_portrait"),this.layouts.push("landscape"),this.layouts.push("wide_landscape")}ngOnDestroy(){this.isSaveInProgressSubscription.unsubscribe(),this.formValueChangeSubscription.unsubscribe()}onVolumeChanged(o){o===0?this.form.controls.audioEnabled.setValue(!1):this.form.controls.audioEnabled.setValue(!0),this.updateVolumeIcon(o),this.audioPlaybackService.testVolume(o)}onAudioSliderChanged(o){o.checked?this.volumeFormcontrol.setValue(i.DEFAULT_VOLUME):this.volumeFormcontrol.setValue(0)}save(){let o=this.form.controls.language.value,t=this.form.controls.layout.value,e=new Ga(o,t,this.form.controls.volume.value??i.DEFAULT_VOLUME,this.form.controls.audioEnabled.value,this.form.controls.animationEnabled.value);this.settingsService.update(e),this.form.controls.language.dirty&&this.signals.settingsNeedsReload.set(!0)}updateVolumeIcon(o){o===0?this.volumeIcon.update(()=>"no_sound"):o>50?this.volumeIcon.update(()=>"volume_up"):this.volumeIcon.update(()=>"volume_down")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-settings-form"]],outputs:{isDirty:"isDirty",isValid:"isValid"},decls:31,vars:9,consts:[[1,"settings-form",3,"formGroup"],["floatLabel","always","subscriptSizing","dynamic",1,"full-width"],[3,"formControl"],[3,"value"],[1,"settings-form-field-container"],[1,"settings-slide-form-field","full-width"],[1,"settings-form-label"],["aria-hidden","true"],["formControlName","audioEnabled",3,"change"],[1,"settings-volume-control-form-field","full-width"],["min","0","max","100","step","1"],["matSliderThumb","","value","25",3,"valueChange","formControl"],["formControlName","animationEnabled"]],template:function(t,e){t&1&&(l(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),m(3),c(),l(4,"mat-select",2),pe(5,Jc,2,3,"mat-option",3,Je),c()(),l(7,"mat-form-field",1)(8,"mat-label"),m(9),c(),l(10,"mat-select",2),pe(11,td,2,3,"mat-option",3,Je),c()(),l(13,"div",4)(14,"div",5)(15,"mat-label",6)(16,"mat-icon",7),m(17,"speaker"),c(),m(18),c(),l(19,"mat-slide-toggle",8),u("change",function(a){return e.onAudioSliderChanged(a)}),c()(),l(20,"div",9)(21,"mat-icon",7),m(22),c(),l(23,"mat-slider",10)(24,"input",11),u("valueChange",function(a){return e.onVolumeChanged(a)}),c()()()(),l(25,"div",5)(26,"mat-label",6)(27,"mat-icon",7),m(28,"animation"),c(),m(29),c(),v(30,"mat-slide-toggle",12),c()()),t&2&&(h("formGroup",e.form),d(3),b(e.translations.languageFormFieldLabel),d(),h("formControl",e.languageFormControl),d(),fe(e.languages),d(4),b(e.translations.layoutFormFieldLabel),d(),h("formControl",e.layoutFormcontrol),d(),fe(e.layouts),d(7),L("",e.translations.soundSwitchLabel," "),d(4),b(e.volumeIcon()),d(2),h("formControl",e.volumeFormcontrol),d(5),L("",e.translations.animationSwitchLabel," "))},dependencies:[ee,ze,ke,bn,at,dt,Jr,Zr,je,es,Po,as,os,Do,pn,hn,Ne,cn,dn,fn,_o,te,hi],styles:[".settings-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1rem;height:100%}.settings-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%], .settings-form[_ngcontent-%COMP%]   .settings-form-field-container[_ngcontent-%COMP%]{width:100%}.settings-form[_ngcontent-%COMP%]   .settings-volume-control-form-field[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.settings-form[_ngcontent-%COMP%]   .settings-volume-control-form-field[_ngcontent-%COMP%]   .mat-mdc-slider[_ngcontent-%COMP%]{width:100%;flex-grow:2;margin-left:1rem}.settings-form[_ngcontent-%COMP%]   .settings-slide-form-field[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}.settings-form[_ngcontent-%COMP%]   .settings-form-label[_ngcontent-%COMP%]{display:flex;align-items:center}.settings-form[_ngcontent-%COMP%]   .settings-form-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.25rem}"]})};var he=class i{overlays={};router=r(se);overlay=r(Ha);matDialogService=r(Bi);signals=r(it);constructor(){}openDialog(o,t){if(this.signals.isSmartPhone.value())this.router.navigate([t]);else{let e={maxWidth:"inherit"},n=this.matDialogService.open(o,e)}}toggleOverlay(o,t,e){if(this.signals.isSmartPhone.value())this.router.navigate([t]);else if(this.overlays[o.toString()])this.closeOverlay(o);else{let n={panelClass:"overlay-container",hasBackdrop:!0,backdropClass:"overlay-container-backdrop",positionStrategy:this.overlay.position().flexibleConnectedTo(e).withPositions([{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top",offsetY:5}]).withPush(!1)},a=this.overlay.create(n),s=new ti(o);a.attach(s),a.backdropClick().pipe(ae(1)).subscribe(()=>{this.closeOverlay(o)}),this.overlays[o.toString()]=a}}closeOverlay(o){this.overlays[o.toString()]&&(this.overlays[o.toString()].detach(),delete this.overlays[o.toString()])}static \u0275fac=function(t){return new(t||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var xn=class i{isFormValid=!0;isSaveInProgress=!1;subscription;translations=r($i);dialogService=r(he);signals=r(it);constructor(){this.subscription=this.signals.isSettingsSaveInProgress.toObservable().subscribe(o=>{this.isSaveInProgress&&!o?this.dialogService.closeOverlay(i):this.isSaveInProgress=o})}ngOnDestroy(){this.subscription.unsubscribe()}setValid(o){this.isFormValid=o}onSaveClicked(){this.signals.isSettingsSaveInProgress.set(!0)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-settings-dialog"]],decls:5,vars:5,consts:[[1,"settings-dialog-content"],[3,"isValid"],[1,"settings-dialog-footer"],["mat-flat-button","",3,"click","title","disabled"]],template:function(t,e){t&1&&(l(0,"section",0)(1,"tbt-settings-form",1),u("isValid",function(a){return e.setValid(a)}),c()(),l(2,"footer",2)(3,"button",3),u("click",function(){return e.onSaveClicked()}),m(4),c()()),t&2&&(d(3),h("title",q(e.translations.saveSettingsButtonLabel))("disabled",!e.isFormValid),f("aria-label",e.translations.saveSettingsButtonLabel),d(),L(" ",e.translations.saveSettingsButtonLabel," "))},dependencies:[et,Ut,Ue],styles:[".settings-dialog-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding-top:1rem}"]})};var ed=["settingsButton"];function id(i,o){if(i&1){let t=ht();l(0,"button",3),u("click",function(){X(t);let n=g(2);return K(n.onStartButtonClicked())}),l(1,"mat-icon",4),m(2,"play_arrow"),c()()}if(i&2){let t=g(2);h("title",q(t.translations.startWorkoutButtonDescriptionLabel)),f("aria-label",t.translations.startWorkoutButtonDescriptionLabel)}}function nd(i,o){if(i&1){let t=ht();l(0,"button",12),u("click",function(){X(t);let n=g(2);return K(n.onStartButtonClicked())}),l(1,"mat-icon",4),m(2,"play_arrow"),c(),m(3),c()}if(i&2){let t=g(2);h("title",q(t.translations.startWorkoutButtonDescriptionLabel)),f("aria-label",t.translations.startWorkoutButtonDescriptionLabel),d(3),L(" ",t.translations.startWorkoutButtonLabel," ")}}function od(i,o){if(i&1&&M(0,id,3,3,"button",10)(1,nd,4,4,"button",11),i&2){let t=g();S(t.isSmartPhone()?0:1)}}function ad(i,o){if(i&1){let t=ht();l(0,"button",9),u("click",function(){X(t);let n=g();return K(n.onEditMenuItemClicked())}),l(1,"mat-icon",4),m(2,"edit"),c(),l(3,"span"),m(4),c()(),l(5,"button",9),u("click",function(){X(t);let n=g();return K(n.onDeleteMenuItemClicked())}),l(6,"mat-icon",4),m(7,"delete"),c(),l(8,"span"),m(9),c()()}if(i&2){let t=g();h("title",q(t.translations.editWorkoutIconButtonDescriptionLabel)),f("aria-label",t.translations.editWorkoutIconButtonDescriptionLabel),d(4),b(t.translations.editWorkoutIconButtonLabel),d(),h("title",q(t.translations.deleteWorkoutIconButtonDescriptionLabel)),f("aria-label",t.translations.deleteWorkoutIconButtonDescriptionLabel),d(4),b(t.translations.deleteWorkoutIconButtonLabel)}}var kn=class i{onNavigationMenuToggle=Nt();onSideSheetToggle=Nt();isSmartPhone;selectedWorkout;isModificationAllowed=B(()=>!!this.selectedWorkout());title=B(()=>this.selectedWorkout()?.name?this.selectedWorkout().name:this.translations.applicationName);settingsButton=zt.required("settingsButton",{read:R});translations=r(Gi);router=r(se);dialogService=r(he);snackBarService=r(er);workoutConfigurationService=r(Zt);signals=r(it);constructor(){this.isSmartPhone=this.signals.isSmartPhone.toSignal(),this.selectedWorkout=this.signals.selectedWorkout.toSignal()}onNavigationMenuClicked(){this.onNavigationMenuToggle.emit()}onNewMenuItemClicked(){this.onSideSheetToggle.emit(!0)}onEditMenuItemClicked(){this.onSideSheetToggle.emit(!1)}onDeleteMenuItemClicked(){this.workoutConfigurationService.deleteCurrentWorkout(),this.snackBarService.open(this.translations.workoutDeletedLabel,this.translations.restoreWorkoutButtonLabel,{duration:5e3}).onAction().subscribe(()=>{this.workoutConfigurationService.restoreLastDeletedWorkout()})}onSettingsButtonClicked(){this.dialogService.toggleOverlay(xn,"/settings",this.settingsButton())}onStartButtonClicked(){this.workoutConfigurationService.saveCurrentWorkoutSession(),this.router.navigateByUrl("/timer")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-workout-launcher-nav-bar"]],viewQuery:function(t,e){t&1&&Pe(e.settingsButton,ed,5,R),t&2&&_e()},outputs:{onNavigationMenuToggle:"onNavigationMenuToggle",onSideSheetToggle:"onSideSheetToggle"},decls:24,vars:19,consts:[["settingsButton",""],["moreMenu","matMenu"],[1,"workout-launcher-navbar"],["mat-icon-button","",3,"click","title"],["aria-hidden","true"],[1,"navbar-title",3,"title"],[1,"toolbar-spacer"],[1,"action-icons"],["mat-icon-button","",3,"matMenuTriggerFor","title"],["mat-menu-item","",3,"click","title"],["mat-icon-button","",3,"title"],["mat-flat-button","",1,"workout-launcher",3,"title"],["mat-flat-button","",1,"workout-launcher",3,"click","title"]],template:function(t,e){if(t&1&&(l(0,"mat-toolbar",2)(1,"button",3),u("click",function(){return e.onNavigationMenuClicked()}),l(2,"mat-icon",4),m(3,"menu"),c()(),l(4,"span",5),m(5),c(),v(6,"span",6),l(7,"span",7),M(8,od,2,1),l(9,"button",3,0),u("click",function(){return e.onSettingsButtonClicked()}),l(11,"mat-icon",4),m(12,"settings"),c()(),l(13,"button",8)(14,"mat-icon",4),m(15,"more_vert"),c()(),l(16,"mat-menu",null,1)(18,"button",9),u("click",function(){return e.onNewMenuItemClicked()}),l(19,"mat-icon",4),m(20,"add"),c(),l(21,"span"),m(22),c()(),M(23,ad,10,8),c()()()),t&2){let n=Bt(17);d(),h("title",q(e.translations.navigationDrawerButtonLabel)),f("aria-label",e.translations.navigationDrawerButtonLabelDescriptionLabel),d(3),h("title",q(e.title())),d(),b(e.title()),d(3),S(e.isModificationAllowed()?8:-1),d(),h("title",q(e.translations.settingsIconButtonDescriptionLabel)),f("aria-label",e.translations.settingsIconButtonDescriptionLabel),d(4),h("title",q(e.translations.moreMenuDescriptionLabel))("matMenuTriggerFor",n),f("aria-label",e.translations.moreMenuDescriptionLabel),d(5),h("title",q(e.translations.newWorkoutIconButtonDescriptionLabel)),f("aria-label",e.translations.newWorkoutIconButtonDescriptionLabel),d(4),b(e.translations.newWorkoutIconButtonLabel),d(),S(e.isModificationAllowed()?23:-1)}},dependencies:[qi,Ui,at,dt,Re,Ee,ni,Za,et,Ut,xt],styles:[".workout-launcher-navbar[_ngcontent-%COMP%]{color:var(--mat-sys-on-tertiary-container);background-color:transparent}.workout-launcher-navbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.wide-portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.wide-portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{gap:.5rem}"]})};var Cn=["*"],rd=["content"],sd=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],ld=["mat-drawer","mat-drawer-content","*"];function cd(i,o){if(i&1){let t=ht();l(0,"div",1),u("click",function(){X(t);let n=g();return K(n._onBackdropClicked())}),c()}if(i&2){let t=g();x("mat-drawer-shown",t._isShowingBackdrop())}}function dd(i,o){i&1&&(l(0,"mat-drawer-content"),C(1,2),c())}var md=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],ud=["mat-sidenav","mat-sidenav-content","*"];function hd(i,o){if(i&1){let t=ht();l(0,"div",1),u("click",function(){X(t);let n=g();return K(n._onBackdropClicked())}),c()}if(i&2){let t=g();x("mat-drawer-shown",t._isShowingBackdrop())}}function pd(i,o){i&1&&(l(0,"mat-sidenav-content"),C(1,2),c())}var fd=`.mat-drawer-container {
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
`;var gd=new O("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Ao=new O("MAT_DRAWER_CONTAINER"),qe=(()=>{class i extends De{_platform=r(lt);_changeDetectorRef=r(Z);_container=r(Eo);constructor(){let t=r(R),e=r(eo),n=r($);super(t,e,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,n){e&2&&(re("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),x("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[V([{provide:De,useExisting:i}]),U],ngContentSelectors:Cn,decls:1,vars:0,template:function(e,n){e&1&&(j(),C(0))},encapsulation:2,changeDetection:0})}return i})(),To=(()=>{class i{_elementRef=r(R);_focusTrapFactory=r(Ea);_focusMonitor=r(ve);_platform=r(lt);_ngZone=r($);_renderer=r(ut);_interactivityChecker=r(Ta);_doc=r(Tt);_container=r(Ao,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=ot(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=ot(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(ot(t))}_opened=F(!1);_openedVia=null;_animationStarted=new A;_animationEnd=new A;openedChange=new H(!0);_openedStream=this.openedChange.pipe(pt(t=>t),Ft(()=>{}));openedStart=this._animationStarted.pipe(pt(()=>this.opened),$n(void 0));_closedStream=this.openedChange.pipe(pt(t=>!t),Ft(()=>{}));closedStart=this._animationStarted.pipe(pt(()=>!this.opened),$n(void 0));_destroyed=new A;onPositionChanged=new H;_content;_modeChanged=new A;_injector=r(mt);_changeDetectorRef=r(Z);constructor(){this.openedChange.pipe(Q(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Wt(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{a(),s(),t.removeAttribute("tabindex")},a=this._renderer.listen(t,"blur",n),s=this._renderer.listen(t,"mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Qt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let n=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),n}_setOpen(t,e,n){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(ae(1)).subscribe(s=>a(s?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,n=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,e)),n.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,n){if(e&1&&st(rd,5),e&2){let a;y(a=w())&&(n._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,n){e&2&&(f("align",null)("tabIndex",n.mode!=="side"?"-1":null),re("visibility",!n._container&&!n.opened?"hidden":null),x("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Cn,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(j(),l(0,"div",1,0),C(2),c())},dependencies:[De],encapsulation:2,changeDetection:0})}return i})(),Eo=(()=>{class i{_dir=r(Ht,{optional:!0});_element=r(R);_ngZone=r($);_changeDetectorRef=r(Z);_animationDisabled=ct();_transitionsEnabled=!1;_allDrawers;_drawers=new vi;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=ot(t)}_autosize=r(gd);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:ot(t)}_backdropOverride=null;backdropClick=new H;_start=null;_end=null;_left=null;_right=null;_destroyed=new A;_doCheckSubject=new A;_contentMargins={left:null,right:null};_contentMarginChanges=new A;get scrollable(){return this._userContent||this._content}_injector=r(mt);constructor(){let t=r(lt),e=r(ei);this._dir?.change.pipe(Q(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(Q(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ot(this._allDrawers),Q(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ot(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ko(10),Q(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();t+=n,e-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();e+=n,t-=n}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(Q(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(Q(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(Q(this._drawers.changes)).subscribe(()=>{Qt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(Q(bt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,n="mat-drawer-container-has-open";t?e.add(n):e.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,n,a){if(e&1&&ft(a,qe,5)(a,To,5),e&2){let s;y(s=w())&&(n._content=s.first),y(s=w())&&(n._allDrawers=s)}},viewQuery:function(e,n){if(e&1&&st(qe,5),e&2){let a;y(a=w())&&(n._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,n){e&2&&x("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[V([{provide:Ao,useExisting:i}])],ngContentSelectors:ld,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(j(sd),M(0,cd,1,2,"div",0),C(1),C(2,1),M(3,dd,2,0,"mat-drawer-content")),e&2&&(S(n.hasBackdrop?0:-1),d(3),S(n._content?-1:3))},dependencies:[qe],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return i})(),rs=(()=>{class i extends qe{static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[V([{provide:De,useExisting:i}]),U],ngContentSelectors:Cn,decls:1,vars:0,template:function(e,n){e&1&&(j(),C(0))},encapsulation:2,changeDetection:0})}return i})(),Fo=(()=>{class i extends To{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=ot(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Ie(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Ie(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,n){e&2&&(f("tabIndex",n.mode!=="side"?"-1":null)("align",null),re("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),x("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[V([{provide:To,useExisting:i}]),U],ngContentSelectors:Cn,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,n){e&1&&(j(),l(0,"div",1,0),C(2),c())},dependencies:[De],encapsulation:2,changeDetection:0})}return i})(),ss=(()=>{class i extends Eo{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,n,a){if(e&1&&ft(a,rs,5)(a,Fo,5),e&2){let s;y(s=w())&&(n._content=s.first),y(s=w())&&(n._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,n){e&2&&x("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[V([{provide:Ao,useExisting:i},{provide:Eo,useExisting:i}]),U],ngContentSelectors:ud,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,n){e&1&&(j(md),M(0,hd,1,2,"div",0),C(1),C(2,1),M(3,pd,2,0,"mat-sidenav-content")),e&2&&(S(n.hasBackdrop?0:-1),d(3),S(n._content?-1:3))},dependencies:[rs],styles:[fd],encapsulation:2,changeDetection:0})}return i})(),ls=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[ye,J,ye]})}return i})();var Ro=(()=>{class i{get vertical(){return this._vertical}set vertical(t){this._vertical=ot(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=ot(t)}_inset=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){e&2&&(f("aria-orientation",n.vertical?"vertical":"horizontal"),x("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return i})(),cs=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[J]})}return i})();var ds=["*"],ms=`.mdc-list {
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
`,bd=["unscopedContent"],vd=["text"],yd=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],wd=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var xd=new O("ListOption"),Lo=(()=>{class i{_elementRef=r(R);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),kd=(()=>{class i{_elementRef=r(R);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),Cd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),us=(()=>{class i{_listOption=r(xd,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,hostVars:4,hostBindings:function(e,n){e&2&&x("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return i})(),Md=(()=>{class i extends us{static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=I({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[U]})}return i})(),Vo=(()=>{class i extends us{static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275dir=I({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[U]})}return i})(),Sd=new O("MAT_LIST_CONFIG"),_i=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=ot(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(ot(t))}_disabled=F(!1);_defaultOptions=r(Sd,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,hostVars:1,hostBindings:function(e,n){e&2&&f("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),Od=(()=>{class i{_elementRef=r(R);_ngZone=r($);_listBase=r(_i,{optional:!0});_platform=r(lt);_hostElement;_isButtonElement;_noopAnimations=ct();_avatars;_icons;set lines(t){this._explicitLines=Ie(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=ot(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(ot(t))}_disabled=F(!1);_subscriptions=new oe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){r(Pt).load(jt);let t=r(Di,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Va(this,this._ngZone,this._hostElement,this._platform,r(mt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(bt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",a),n.classList.toggle("mdc-list-item__secondary-text",!a)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=I({type:i,contentQueries:function(e,n,a){if(e&1&&ft(a,Md,4)(a,Vo,4),e&2){let s;y(s=w())&&(n._avatars=s),y(s=w())&&(n._icons=s)}},hostVars:4,hostBindings:function(e,n){e&2&&(f("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),x("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var hs=(()=>{class i extends _i{static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[V([{provide:_i,useExisting:i}]),U],ngContentSelectors:ds,decls:1,vars:0,template:function(e,n){e&1&&(j(),C(0))},styles:[ms],encapsulation:2,changeDetection:0})}return i})(),Mn=(()=>{class i extends Od{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=ot(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,a){if(e&1&&ft(a,kd,5)(a,Lo,5)(a,Cd,5),e&2){let s;y(s=w())&&(n._lines=s),y(s=w())&&(n._titles=s),y(s=w())&&(n._meta=s)}},viewQuery:function(e,n){if(e&1&&st(bd,5)(vd,5),e&2){let a;y(a=w())&&(n._unscopedContent=a.first),y(a=w())&&(n._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(f("aria-current",n._getAriaCurrent()),x("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[U],ngContentSelectors:wd,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(j(yd),C(0),l(1,"span",1),C(2,1),C(3,2),l(4,"span",2,0),u("cdkObserveContent",function(){return n._updateItemLines(!0)}),C(6,3),c()(),C(7,4),C(8,5),v(9,"div",3))},dependencies:[Da],encapsulation:2,changeDetection:0})}return i})();var ps=(()=>{class i extends _i{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(n){return(t||(t=E(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[V([{provide:_i,useExisting:i}]),U],ngContentSelectors:ds,decls:1,vars:0,template:function(e,n){e&1&&(j(),C(0))},styles:[ms],encapsulation:2,changeDetection:0})}return i})();var Sn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=W({type:i});static \u0275inj=z({imports:[Pi,le,vn,J,cs]})}return i})();var On=class i extends G{createWorkoutButtonLabel=$localize`:Save button label, when user is creating workout@@createWorkoutButtonLabel:Create`;editWorkoutButtonLabel=$localize`:Save button label, when user is updating workout@@editWorkoutButtonLabel:Update`;workoutNameFormFieldLabel=$localize`:Name form field label@@workoutNameFormFieldLabel:Name`;workoutSetsFormFieldLabel=$localize`:Sets form field label@@workoutSetsFormFieldLabel:Sets`;workoutExercisePerSetsFormFieldLabel=$localize`:Exercises  per set form field label@@workoutExercisePerSetsFormFieldLabel:Exercises / Set`;workoutDefaultTimeUnitLabel=$localize`:seconds label@@workoutDefaultTimeUnitLabel:second`;workoutPreparationTimeFormFieldLabel=$localize`:Preparation time form field label@@workoutPreparationTimeFormFieldLabel:Preparation Time`;workoutTimeFormFieldLabel=$localize`:Workout time form field label@@workoutTimeFormFieldLabel:Workout Time`;workoutRestTimeFormFieldLabel=$localize`:Rest time form field label@@workoutRestTimeFormFieldLabel:Rest Time`;workoutRestBetweenSetsTimeFormFieldLabel=$localize`:Rest Time Between Sets form field label@@workoutRestBetweenSetsTimeFormFieldLabel:Rest Time Between Sets`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var Pn=class i{isNewWorkout=Mi();onWorkoutSaved=Nt();form;workout;saveLabel;translations=r(On);workoutConfigurationService=r(Zt);signals=r(it);constructor(){this.saveLabel=F(this.translations.createWorkoutButtonLabel),this.workout=this.signals.selectedWorkout.toSignal(),this.form=new Jt({})}ngOnChanges(o){if(o.isNewWorkout){let t=o.isNewWorkout.currentValue,e=this.workout();t?(e=Zt.SIMPLE_WORKOUT,this.saveLabel.set(this.translations.createWorkoutButtonLabel)):this.saveLabel.set(this.translations.editWorkoutButtonLabel),this.form=new Jt({name:new _t(e?.name,kt.required),numberOfSets:new _t(e?.schedule.numberOfSets,kt.required),numberOfExercises:new _t(e?.schedule.numberOfExercises,kt.required),preparationTime:new _t(e?.schedule.preparationTime,kt.required),workoutTime:new _t(e?.schedule.workoutTime,kt.required),restTime:new _t(e?.schedule.restTime,kt.required),restTimeBetweenSets:new _t(e?.schedule.restTimeBetweenSets,kt.required)})}}onSaveClicked(){if(this.isNewWorkout()){let o=new xe(this.form.controls.numberOfSets.value,this.form.controls.numberOfExercises.value,this.form.controls.preparationTime.value,this.form.controls.workoutTime.value,this.form.controls.restTime.value,this.form.controls.restTimeBetweenSets.value),t=new we("",this.form.controls.name.value,o);this.workoutConfigurationService.addWorkout(t)}else{let o=new xe(this.form.controls.numberOfSets.value,this.form.controls.numberOfExercises.value,this.form.controls.preparationTime.value,this.form.controls.workoutTime.value,this.form.controls.restTime.value,this.form.controls.restTimeBetweenSets.value),t=new we(this.workout().id,this.form.controls.name.value,o);this.workoutConfigurationService.updateWorkout(t)}this.onWorkoutSaved.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-workout-schedule"]],inputs:{isNewWorkout:[1,"isNewWorkout"]},outputs:{onWorkoutSaved:"onWorkoutSaved"},features:[yt],decls:41,vars:17,consts:[[1,"workout-schedule-form-container"],[1,"workout-schedule-form",3,"formGroup"],["floatLabel","always","subscriptSizing","dynamic",1,"workout-schedule-form-field"],["matInput","","type","text","formControlName","name"],["matInput","","type","number","min","1","step","1","max","99","formControlName","numberOfSets"],["matInput","","type","number","min","1","step","1","max","99","formControlName","numberOfExercises"],["matInput","","type","number","min","5","step","5","max","900","formControlName","preparationTime"],["matTextSuffix","",1,"workout-schedule-form-field-suffix"],["matInput","","type","number","min","5","step","5","max","900","formControlName","workoutTime"],["matInput","","type","number","min","5","step","5","max","900","formControlName","restTime"],["floatLabel","always","subscriptSizing","dynamic","max","900",1,"workout-schedule-form-field"],["matInput","","type","number","min","0","step","5","formControlName","restTimeBetweenSets"],[1,"workout-schedule-form-actions"],["mat-flat-button","",3,"click","title","disabled"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label"),m(4),c(),v(5,"input",3),c(),l(6,"mat-form-field",2)(7,"mat-label"),m(8),c(),v(9,"input",4),c(),l(10,"mat-form-field",2)(11,"mat-label"),m(12),c(),v(13,"input",5),c(),l(14,"mat-form-field",2)(15,"mat-label"),m(16),c(),v(17,"input",6),l(18,"span",7),m(19),c()(),l(20,"mat-form-field",2)(21,"mat-label"),m(22),c(),v(23,"input",8),l(24,"span",7),m(25),c()(),l(26,"mat-form-field",2)(27,"mat-label"),m(28),c(),v(29,"input",9),l(30,"span",7),m(31),c()(),l(32,"mat-form-field",10)(33,"mat-label"),m(34),c(),v(35,"input",11),l(36,"span",7),m(37),c()()(),l(38,"div",12)(39,"button",13),u("click",function(){return e.onSaveClicked()}),m(40),c()()()),t&2&&(d(),h("formGroup",e.form),d(3),b(e.translations.workoutNameFormFieldLabel),d(4),b(e.translations.workoutSetsFormFieldLabel),d(4),b(e.translations.workoutExercisePerSetsFormFieldLabel),d(4),b(e.translations.workoutPreparationTimeFormFieldLabel),d(3),b(e.translations.workoutDefaultTimeUnitLabel),d(3),b(e.translations.workoutTimeFormFieldLabel),d(3),b(e.translations.workoutDefaultTimeUnitLabel),d(3),b(e.translations.workoutRestTimeFormFieldLabel),d(3),b(e.translations.workoutDefaultTimeUnitLabel),d(3),b(e.translations.workoutRestBetweenSetsTimeFormFieldLabel),d(3),b(e.translations.workoutDefaultTimeUnitLabel),d(2),h("title",q(e.saveLabel()))("disabled",!e.form.valid),f("aria-label",e.saveLabel()),d(),L(" ",e.saveLabel()," "))},dependencies:[et,Ut,ee,ze,ke,xo,bn,Qr,pn,hn,Ne,fo,cn,dn,vo,bo,fn,te,hi],styles:[".workout-schedule-form-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1rem}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]   .workout-schedule-form-field[_ngcontent-%COMP%]{width:100%}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]   .workout-schedule-form-field-suffix[_ngcontent-%COMP%]{margin-left:.5rem}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form-actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}"]})};var Ge=class i extends G{createWorkoutNavHeaderLabel=$localize`:Side sheet label, when user is creating workout@@createWorkoutNavHeaderLabel:New Workout`;editWorkoutNavHeaderLabel=$localize`:Side sheet label, when user is editing a workout@@editWorkoutNavHeaderLabel:Edit Workout`;closeSideSheetButtonLabel=$localize`:close side sheet label name@@closeSideSheetButtonLabel:Back`;newWorkoutButtonLabel=$localize`:New workout button label name@@newWorkoutButtonLabel:New Workout`;aboutButtonLabel=$localize`:About button label@@aboutButtonLabel:About`;workoutListLabel=$localize`:Heading for workout list@@workoutListLabel:My Workouts`;workoutLabel=$localize`:Workout label@@workoutLabel:Workout`;setLabel=$localize`:Set label name@@setLabel:Set`;exerciseLabel=$localize`:Exercise label@@exerciseLabel:Exercise`;restLabel=$localize`:Rest label name@@restLabel:Rest`;timeUnitLabel=$localize`:Time unit label@@timeUnitLabel:minute`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var gs="1.4.17";var In=class i extends G{copyrightNotice=$localize`:Copyright notice@@copyrightNotice:2025 - Márk Szabó`;contactInformationLabel=$localize`:Contact information label@@contactInformationLabel:Contact`;madeInLabel=$localize`:Made in label@@madeInLabel:Made in`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var $e=class i{applicationVersion=F(gs);translations=r(In);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-application-info"]],decls:25,vars:5,consts:[["matListItemIcon","","aria-hidden","true"],["matListItemTitle",""],["href","mailto:hello@example.com","target","_blank","rel","noopener noreferrer"],[1,"made-in-section"],["src","european-flag.jpg"]],template:function(t,e){t&1&&(l(0,"mat-list")(1,"mat-list-item")(2,"mat-icon",0),m(3,"web_asset"),c(),l(4,"div",1),m(5),c()(),l(6,"mat-list-item")(7,"mat-icon",0),m(8,"mail"),c(),l(9,"div",1)(10,"a",2),m(11),c()()(),l(12,"mat-list-item")(13,"mat-icon",0),m(14,"copyright"),c(),l(15,"div",1),m(16),c()(),l(17,"mat-list-item")(18,"mat-icon",0),m(19,"public"),c(),l(20,"div",1)(21,"div",3)(22,"div"),m(23),c(),v(24,"img",4),c()()()()),t&2&&(d(5),be("",e.translations.applicationName," ",e.applicationVersion()),d(6),b(e.translations.contactInformationLabel),d(5),b(e.translations.copyrightNotice),d(7),b(e.translations.madeInLabel))},dependencies:[at,dt,Sn,hs,Mn,Vo,Lo],styles:[".made-in-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.3rem}"]})};var Dn=class i extends G{closeAboutButtonLabel=$localize`:Close button label@@closeAboutButtonLabel:Close`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var Id=()=>({backgroundImage:"url(./blob-background.svg)"}),Tn=class i{translations=r(Dn);dialogRef=r(Qa);constructor(){}onCloseClicked(){this.dialogRef.close()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-about-dialog"]],decls:7,vars:7,consts:[[1,"about-dialog-content"],[1,"hero"],["src","icons/icon-192x192.png",1,"application-icon"],[1,"info"],["mat-button","",3,"click","title"]],template:function(t,e){t&1&&(l(0,"mat-dialog-content",0)(1,"section",1),v(2,"img",2),c(),l(3,"section",3),v(4,"tbt-application-info"),l(5,"button",4),u("click",function(){return e.onCloseClicked()}),m(6),c()()()),t&2&&(d(),ma(ua(6,Id)),d(4),h("title",q(e.translations.closeAboutButtonLabel)),f("aria-label",e.translations.closeAboutButtonLabel),d(),L(" ",e.translations.closeAboutButtonLabel," "))},dependencies:[at,et,Ut,Xa,$e],styles:[".about-dialog-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-height:100%;padding:0}.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:30vw;width:30vw;height:30dvw;width:30dvw;background-size:cover;background-position:center}.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .application-icon[_ngcontent-%COMP%]{max-width:40%;max-height:40%}.about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;height:30vw;width:30vw;height:30dvw;width:30dvw}@media screen and (max-width:600px)or (max-height:650px){.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{height:40vw;width:40vw;height:40dvw;width:40dvw;min-height:300px;min-width:300px}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:40vw;width:40vw;height:40dvw;width:40dvw;min-height:300px;min-width:300px}@media screen and (max-width:600px)or (max-height:450px){.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]{flex-direction:column}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{height:40vh;width:60vh;height:40dvh;width:60dvh}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:40vh;width:60vh;height:40dvh;width:60dvh}@media screen and (max-height:600px){.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}"]})};var En=class i extends G{summary=$localize`:Summary text@@appSummary:Ready to unleash your inner warrior and conquer your fitness goals? Tabata Max is your ultimate web-based Tabata and HIIT timer, built to ignite your workouts and push your limits! Forget complicated setups; we've crafted an intuitive experience that gets you sweating faster and smarter. Get ready to transform your training and feel the burn, the fun way!`;keyBenefitsHeader=$localize`:Header for key benefits section@@keyBenefitsHeader:Why You'll Love Training with Tabata Max`;keyBenefit1Label=$localize`:Label for key benefit 1@@keyBenefit1Label:Pure, Uncluttered Focus`;keyBenefit2Label=$localize`:Label for key benefit 2@@keyBenefit2Label:See It, Hear It`;keyBenefit3Label=$localize`:Label for key benefit 3@@keyBenefit3Label:Works Anywhere, Anytime`;keyBenefit4Label=$localize`:Label for key benefit 4@@keyBenefit4Label:Instant Access, Anywhere`;keyBenefit1=$localize`:Text for key benefit 1@@keyBenefit1:Enjoy a clean, minimal design that cuts out the noise, letting you zero in on what truly matters: your performance!`;keyBenefit2=$localize`:Text for key benefit 2@@keyBenefit2:Clear audio and visual cues keep you perfectly in sync, so you can focus on your form, not the clock.`;keyBenefit3=$localize`:Text for key benefit 3@@keyBenefit3:Whether you're crushing it in your living room or at the gym, our design shines on all your devices – phone, tablet, or desktop!`;keyBenefit4=$localize`:Text for key benefit 4@@keyBenefit4:Jump right into your fitness journey with this web-based app – just open your browser! And the best part? You can even install it on your device to use it whenever you want, even without an internet connection.`;callToActionLabel=$localize`:Call to action label@@callToActionLabel:Are You Ready?`;launcherScreenshotCaption=$localize`:Screenshot caption@@launcherScreenshotCaption:Opening screen showing your last workout`;workoutEditScreenshotCaption=$localize`:Screenshot caption@@workoutEditScreenshotCaption:Editing a workout`;workoutListScreenshotCaption=$localize`:Screenshot caption@@workoutListScreenshotCaption:Listing workouts`;workoutRestScreenshotCaption=$localize`:Screenshot caption@@workoutRestScreenshotCaption:Resting during a workout`;workoutPrepareScreenshotCaption=$localize`:Screenshot caption@@workoutPrepareScreenshotCaption:Prepare for the next rep during workout`;workoutActivityScreenshotCaption=$localize`:Screenshot caption@@workoutActivityScreenshotCaption:Workout active rep`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var An=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-animated-greeting"]],decls:9,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","preserveAspectRatio","xMidYMid meet","viewBox","0 0 662.3 78"],["id","svgGroup","fill","none","fill-rule","evenodd","stroke","#005cbb","stroke-linecap","round","stroke-width","0.2mm","font-size","9pt",2,"stroke","#005cbb","stroke-width",".2mm","fill","none"],["id","0","d","M97.1 0h40.5q-2.2 9.4-4.35 18.75-2.15 9.35-4.35 18.75-2.2 9.4-4.35 18.75Q122.4 65.6 120.3 75H73.8l-6-37.6q0-.1-.05-.15l-.05-.05h-.05q-.05 0-.1.05t-.05.15L61.6 75H18.2l-3.6-15q-1.8-7.5-3.65-15Q9.1 37.5 7.3 30q-1.8-7.5-3.65-15Q1.8 7.5 0 0h42.6q.8 5.1 1.55 10.25t1.5 10.25q.75 5.1 1.55 10.25T48.7 41h.5l5.6-41h30.1l5.9 41h.2q1.5-10.3 3.05-20.5Q95.6 10.3 97.1 0Z",1,"tkrlAKKf_0"],["id","1","d","m189.4 45.3 30.9 10.1q-1.8 6.3-7.65 11.45Q206.8 72 197.9 75T178 78q-9.4 0-17.55-2.1t-14.3-6.35Q140 65.3 136.5 58.9T133 44q0-8.5 3.5-14.9t9.65-10.65q6.15-4.25 14.35-6.35Q168.7 10 178 10q9.5 0 17.45 2.1 7.95 2.1 13.7 6.45 5.75 4.35 8.9 11 3.15 6.65 3.15 15.75h-54.6v.1q0 1.5.8 2.8.8 1.3 2.25 2.25t3.6 1.45q2.15.5 4.95.5 5.3 0 8.2-1.9 2.9-1.9 3-5.2Zm-22.6-3.1h22.3q.1 0 .1-.05V42q0-1.6-.85-2.85t-2.35-2.1q-1.5-.85-3.55-1.3-2.05-.45-4.45-.45-4.9 0-8.1 1.75-3.2 1.75-3.2 4.95v.2h.1Z",1,"tkrlAKKf_1"],["id","2","d","M258.6 75H224V0h34.6v75Z",1,"tkrlAKKf_2"],["id","3","d","m350.2 38.4-32.1 5.7q0-2.7-1.7-4.4-1.7-1.7-4.3-2.45-2.6-.75-5.5-.75-3.2 0-5.85.85-2.65.85-4.15 2.5-1.5 1.65-1.5 4.15 0 1.9.85 3.3t2.45 2.35q1.6.95 3.7 1.4 2.1.45 4.5.45 2.8 0 5.45-.7 2.65-.7 4.35-2.35 1.7-1.65 1.7-4.35 8.4 1 16.1 2.05 7.7 1.05 16.1 2.15-1.2 9.7-7.15 16.35-5.95 6.65-15.4 10Q318.3 78 306.6 78q-9.4 0-17.55-2.1t-14.3-6.35q-6.15-4.25-9.65-10.65T261.6 44q0-4.4.95-8.2.95-3.8 2.75-7.05t4.35-5.95q2.55-2.7 5.75-4.8 4.1-2.7 9-4.45t10.55-2.65q5.65-.9 11.65-.9 11.5 0 20.75 3.15t15.3 9.45q6.05 6.3 7.55 15.8Z",1,"tkrlAKKf_3"],["id","4","d","M397.6 78q-6.2 0-12-.9t-10.8-2.75q-5-1.85-9.1-4.65-4.1-2.8-7-6.55-2.9-3.75-4.5-8.5t-1.6-10.55q0-6.8 2.25-12.25t6.4-9.55q4.15-4.1 9.75-6.85t12.35-4.1Q390.1 10 397.6 10q9.4 0 17.55 2.15t14.3 6.4q6.15 4.25 9.65 10.65t3.5 14.9q0 8.5-3.5 14.85t-9.65 10.6q-6.15 4.25-14.3 6.35Q407 78 397.6 78Zm.1-26.5q6.2 0 8.8-2.4 2.6-2.4 2.6-5.2 0-1.3-.6-2.6t-1.9-2.4q-1.3-1.1-3.5-1.75-2.2-.65-5.4-.65t-5.45.65q-2.25.65-3.6 1.75t-1.95 2.4q-.6 1.3-.6 2.7 0 1.4.6 2.75t2 2.4q1.4 1.05 3.6 1.7 2.2.65 5.4.65Z",1,"tkrlAKKf_4"],["id","5","d","M571.2 75h-34.6V43.4q0-2.9-1.45-4.1-1.45-1.2-3.45-1.3-2-.1-3.65.5T526 39.7l7-25.7q3.6-1.6 7.75-2.4 4.15-.8 8.25-.8 5.8 0 10.85 1.8t8.2 5.7q3.15 3.9 3.15 10.4V75ZM526 75h-34.6V43.4q0-2.9-1.45-4.1-1.45-1.2-3.45-1.3-2-.1-3.65.5t-2.05 1.2l8-25.7q7.3-3.2 15.8-3.2 4.2 0 8 1t6.85 3.1q3.05 2.1 4.8 5.55Q526 23.9 526 28.7V75Zm-45.8 0h-34.6V13h34.6v62Z",1,"tkrlAKKf_5"],["id","6","d","m630.5 45.3 30.9 10.1q-1.8 6.3-7.65 11.45Q647.9 72 639 75t-19.9 3q-9.4 0-17.55-2.1t-14.3-6.35q-6.15-4.25-9.65-10.65T574.1 44q0-8.5 3.5-14.9t9.65-10.65q6.15-4.25 14.35-6.35 8.2-2.1 17.5-2.1 9.5 0 17.45 2.1 7.95 2.1 13.7 6.45 5.75 4.35 8.9 11 3.15 6.65 3.15 15.75h-54.6v.1q0 1.5.8 2.8.8 1.3 2.25 2.25t3.6 1.45q2.15.5 4.95.5 5.3 0 8.2-1.9 2.9-1.9 3-5.2Zm-22.6-3.1h22.3q.1 0 .1-.05V42q0-1.6-.85-2.85t-2.35-2.1q-1.5-.85-3.55-1.3-2.05-.45-4.45-.45-4.9 0-8.1 1.75-3.2 1.75-3.2 4.95v.2h.1Z",1,"tkrlAKKf_6"]],template:function(t,e){t&1&&($t(),Rt(0,"svg",0)(1,"g",1),ge(2,"path",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8),Lt()())},styles:[".tkrlAKKf_0[_ngcontent-%COMP%]{stroke-dasharray:601 603;stroke-dashoffset:602;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 0ms forwards}.tkrlAKKf_1[_ngcontent-%COMP%]{stroke-dasharray:411 413;stroke-dashoffset:412;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 111ms forwards}.tkrlAKKf_2[_ngcontent-%COMP%]{stroke-dasharray:220 222;stroke-dashoffset:221;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 222ms forwards}.tkrlAKKf_3[_ngcontent-%COMP%]{stroke-dasharray:369 371;stroke-dashoffset:370;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 333ms forwards}.tkrlAKKf_4[_ngcontent-%COMP%]{stroke-dasharray:316 318;stroke-dashoffset:317;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 444ms forwards}.tkrlAKKf_5[_ngcontent-%COMP%]{stroke-dasharray:597 599;stroke-dashoffset:598;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 555ms forwards}.tkrlAKKf_6[_ngcontent-%COMP%]{stroke-dasharray:411 413;stroke-dashoffset:412;animation:_ngcontent-%COMP%_tkrlAKKf_draw 1333ms ease 666ms forwards}@keyframes _ngcontent-%COMP%_tkrlAKKf_draw{to{stroke-dashoffset:0}}@keyframes _ngcontent-%COMP%_tkrlAKKf_fade{0%{stroke-opacity:1}93.54838709677419%{stroke-opacity:1}to{stroke-opacity:0}}"]})};var Fn=class i extends G{previousImageButtonLabel=$localize`:Back button label@@previousImageButtonLabel:Back`;nextImageButtonLabel=$localize`:Next button label@@nextImageButtonLabel:Next`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var Rn=class i{images=Mi();backButtonLabel;nextButtonLabel;src=F("");caption=F("");index=0;translations=r(Fn);constructor(){this.backButtonLabel=F(this.translations.previousImageButtonLabel),this.nextButtonLabel=F(this.translations.nextImageButtonLabel)}ngOnInit(){let o=this.images()?.at(0);o&&(this.src.set(o.src),this.caption.set(o.caption))}onBackClicked(){this.index>0&&(this.index=this.index-1,this.selectImage(this.images()?.at(this.index)))}onNextClicked(){let o=this.images()?.length;o&&this.index<o-1&&(this.index=this.index+1,this.selectImage(this.images()?.at(this.index)))}selectImage(o){o&&(this.src.set(o.src),this.caption.set(o.caption))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-image-gallery"]],inputs:{images:[1,"images"]},decls:11,vars:7,consts:[[1,"image-gallery-container"],["mat-icon-button","",1,"back-button",3,"click","title"],["aria-hidden","true"],[1,"selected-image",3,"click"],[3,"src","alt"],["mat-icon-button","",1,"next-button",3,"click","title"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"button",1),u("click",function(){return e.onBackClicked()}),l(2,"mat-icon",2),m(3,"arrow_back"),c()(),l(4,"figure",3),u("click",function(){return e.onNextClicked()}),v(5,"img",4),l(6,"figcaption"),m(7),c()(),l(8,"button",5),u("click",function(){return e.onNextClicked()}),l(9,"mat-icon",2),m(10,"arrow_forward"),c()()()),t&2&&(d(),h("title",e.backButtonLabel()),f("aria-label",e.backButtonLabel()),d(4),h("src",e.src(),na)("alt",e.caption()),d(2),b(e.caption()),d(),h("title",e.nextButtonLabel()),f("aria-label",e.nextButtonLabel()))},dependencies:[et,xt,at,dt],styles:[".image-gallery-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:2px}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;justify-content:center;margin:0}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{font:var(--mat-sys-title-large);padding-top:.5rem}"]})};var ne=class{constructor(o,t){this.src=o;this.caption=t}};var Ln=class i{onCreate=Nt();translations;images;workoutLauncherComponentTranslations=r(Ge);workoutLauncherEmptyStateComponentTranslations=r(En);constructor(){this.translations=Object.assign({},this.workoutLauncherComponentTranslations,this.workoutLauncherEmptyStateComponentTranslations),this.images=[new ne("images/launcher.png",this.translations.launcherScreenshotCaption),new ne("images/workout-edit.png",this.translations.workoutEditScreenshotCaption),new ne("images/workout-list.png",this.translations.workoutListScreenshotCaption),new ne("images/workout-rest.png",this.translations.workoutRestScreenshotCaption),new ne("images/workout-prepare.png",this.translations.workoutPrepareScreenshotCaption),new ne("images/workout-start.png",this.translations.workoutActivityScreenshotCaption)]}onCreateButtonClicked(){this.onCreate.emit()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-workout-launcher-empty-state"]],outputs:{onCreate:"onCreate"},decls:39,vars:16,consts:[[1,"empty-workouts"],[1,"message"],[1,"greeting"],[1,"summary"],[1,"screenshots",3,"images"],[1,"key-benefits-header"],[1,"key-benefits"],[1,"key-benefit"],[1,"key-benefit-label"],[1,"call-to-action"],[1,"call-to-action-label"],[1,"action-emoticon"],["mat-fab","","extended","",3,"click","title"],["aria-hidden","true"]],template:function(t,e){t&1&&(l(0,"section",0)(1,"div",1),v(2,"tbt-animated-greeting",2),l(3,"div",3),m(4),c()(),v(5,"tbt-image-gallery",4),l(6,"div",1)(7,"div",5),m(8),c(),l(9,"ul",6)(10,"li",7),m(11,"\u2728 "),l(12,"span",8),m(13),c(),m(14),c(),l(15,"li",7),m(16,"\u{1F441}\uFE0F "),l(17,"span",8),m(18),c(),m(19),c(),l(20,"li",7),m(21,"\u{1F4BB} "),l(22,"span",8),m(23),c(),m(24),c(),l(25,"li",7),m(26,"\u26A1\uFE0F "),l(27,"span",8),m(28),c(),m(29),c()(),l(30,"div",9)(31,"span",10),m(32),c(),l(33,"span",11),m(34,"\u{1F449}"),c(),l(35,"button",12),u("click",function(){return e.onCreateButtonClicked()}),l(36,"mat-icon",13),m(37,"add"),c(),m(38),c()()()()),t&2&&(d(4),b(e.translations.summary),d(),h("images",e.images),d(3),L("",e.translations.keyBenefitsHeader,":"),d(5),L("",e.translations.keyBenefit1Label,": "),d(),b(e.translations.keyBenefit1),d(4),L("",e.translations.keyBenefit2Label,": "),d(),b(e.translations.keyBenefit2),d(4),L("",e.translations.keyBenefit3Label,": "),d(),b(e.translations.keyBenefit3),d(4),L("",e.translations.keyBenefit4Label,": "),d(),b(e.translations.keyBenefit4),d(3),b(e.translations.callToActionLabel),d(3),h("title",q(e.translations.newWorkoutButtonLabel)),f("aria-label",e.translations.newWorkoutButtonLabel),d(3),L(" ",e.translations.newWorkoutButtonLabel," "))},dependencies:[et,Ba,at,dt,An,Rn],styles:[".empty-workouts[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;color:var(--mat-sys-on-surface)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:60ch;font:var(--mat-sys-headline-medium)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]{width:100%;margin-top:2rem;margin-bottom:4rem;text-align:center}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{text-align:justify}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits-header[_ngcontent-%COMP%]{font-weight:700;text-align:left;width:100%}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]{margin-bottom:.75rem;text-align:justify}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]   .key-benefit-label[_ngcontent-%COMP%]{font-weight:700}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{display:flex;align-items:center;font:var(--mat-sys-headline-large);font-weight:700;margin-bottom:2rem}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%]{margin-right:2.5rem;margin-left:2.5rem;font-size:2.5rem}.empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{width:80vw;margin-top:3rem;margin-bottom:3rem}.landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{width:50ch;max-width:90%}.landscape[_nghost-%COMP%]   .screenshots[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .screenshots[_ngcontent-%COMP%]{width:98vw}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{width:80%;font:var(--mat-sys-headline-small)}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{width:98vw}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{width:90%;font:var(--mat-sys-headline-small)}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small);font-weight:600}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%]{margin-right:1.5rem;margin-left:1.5rem;font-size:1.5rem}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{width:98vw}"]})};var Dd=["drawer"],Td=["sideSheet"];function Ed(i,o){i&1&&v(0,"mat-divider",11)}function Ad(i,o){if(i&1){let t=ht();l(0,"a",27),u("click",function(){let n=X(t).$implicit,a=g(2);return K(a.onWorkoutSelected(n))}),m(1),c()}if(i&2){let t=o.$implicit,e=g(2);h("activated",e.isWorkoutSelected(t)),d(),b(t.name)}}function Fd(i,o){if(i&1&&(l(0,"h3",24),m(1),c(),l(2,"mat-nav-list",25),pe(3,Ad,2,2,"a",26,Je),c()),i&2){let t=g();d(),L(" ",t.translations.workoutListLabel," "),d(2),fe(t.workouts())}}function Rd(i,o){if(i&1&&(l(0,"div",18),m(1),c()),i&2){let t=g();d(),b(t.translations.createWorkoutNavHeaderLabel)}}function Ld(i,o){if(i&1&&(l(0,"div",18),m(1),c()),i&2){let t=g();d(),b(t.translations.editWorkoutNavHeaderLabel)}}function Vd(i,o){if(i&1&&(l(0,"section",28)(1,"div"),m(2),c(),l(3,"div",29)(4,"mat-icon",30),m(5,"sprint"),c(),l(6,"span",31),m(7),c()()(),l(8,"section",32)(9,"div"),m(10),c(),l(11,"div",29)(12,"mat-icon",30),m(13,"laps"),c(),l(14,"span",31),m(15),c(),l(16,"span",31),m(17,"\xA0/\xA0"),c(),l(18,"mat-icon",30),m(19,"exercise"),c(),l(20,"span",31),m(21),c()()(),l(22,"section",33)(23,"div"),m(24),c(),l(25,"div",29)(26,"mat-icon",30),m(27,"coffee"),c(),l(28,"span",31),m(29),c()()()),i&2){let t,e,n,a=g(2);d(),nt(Et("configuration-option-value ",a.displayTextClass())),d(),L(" ",(t=a.workout())==null||t.schedule==null?null:t.schedule.workoutTime," "),d(5),b(a.translations.workoutLabel),d(2),nt(Et("configuration-option-value ",a.displayTextClass())),d(),be(" ",(e=a.workout())==null||e.schedule==null?null:e.schedule.numberOfSets,"/",(e=a.workout())==null||e.schedule==null?null:e.schedule.numberOfExercises," "),d(5),b(a.translations.setLabel),d(6),b(a.translations.exerciseLabel),d(2),nt(Et("configuration-option-value ",a.displayTextClass())),d(),L(" ",(n=a.workout())==null||n.schedule==null?null:n.schedule.restTime," "),d(5),b(a.translations.restLabel)}}function Bd(i,o){if(i&1&&(l(0,"section",34)(1,"div",35)(2,"div"),m(3),c(),l(4,"div",29)(5,"mat-icon",30),m(6,"laps"),c(),l(7,"span",31),m(8),c()()(),l(9,"div",35)(10,"div"),m(11),c(),l(12,"div",29)(13,"mat-icon",30),m(14,"exercise"),c(),l(15,"span",31),m(16),c()()()(),l(17,"section",36)(18,"div",35)(19,"div"),m(20),c(),l(21,"div",29)(22,"span",31),m(23),c()()()(),l(24,"section",37)(25,"div",35)(26,"div"),m(27),c(),l(28,"div",29)(29,"mat-icon",30),m(30,"sprint"),c(),l(31,"span",31),m(32),c()()(),l(33,"div",35)(34,"div"),m(35),c(),l(36,"div",29)(37,"mat-icon",30),m(38,"coffee"),c(),l(39,"span",31),m(40),c()()()()),i&2){let t,e,n,a,s=g(2);d(2),nt(Et("configuration-option-value ",s.displayTextClass())),d(),L(" ",(t=s.workout())==null||t.schedule==null?null:t.schedule.numberOfSets," "),d(5),b(s.translations.setLabel),d(2),nt(Et("configuration-option-value ",s.displayTextClass())),d(),L(" ",(e=s.workout())==null||e.schedule==null?null:e.schedule.numberOfExercises," "),d(5),b(s.translations.exerciseLabel),d(3),nt(Et("configuration-option-value ",s.displayTextClass())),d(),L(" ",s.totalWorkoutTime()," "),d(3),b(s.translations.timeUnitLabel),d(3),nt(Et("configuration-option-value ",s.displayTextClass())),d(),L(" ",(n=s.workout())==null||n.schedule==null?null:n.schedule.workoutTime," "),d(5),L(" ",s.translations.workoutLabel),d(2),nt(Et("configuration-option-value ",s.displayTextClass())),d(),L(" ",(a=s.workout())==null||a.schedule==null?null:a.schedule.restTime," "),d(5),b(s.translations.restLabel)}}function Nd(i,o){if(i&1&&M(0,Vd,30,17)(1,Bd,41,25),i&2){let t=g();S(t.isNarrowLayout()?0:1)}}function zd(i,o){if(i&1){let t=ht();l(0,"tbt-workout-launcher-empty-state",38),u("onCreate",function(){X(t);let n=g();return K(n.onCreate())}),c()}}var Qe=class i{static LARGE_DISPLAY_TEXT="large-display-text";static SMALL_DISPLAY_TEXT="small-display-text";workout;workouts;isSmartPhone;isNewWorkout=F(!1);displayTextClass=B(()=>{let o=this.workout()?.schedule;return o&&(o.restTime>=100||o.workoutTime>=100||o.numberOfSets>=10&&o.numberOfExercises>=10)?i.SMALL_DISPLAY_TEXT:i.LARGE_DISPLAY_TEXT});totalWorkoutTime=B(()=>{let o=0,t=this.workout()?.schedule;if(t!==void 0){let e=t.numberOfExercises*t.workoutTime+(t.numberOfExercises-1)*t.restTime;o=t.numberOfSets*e,t.restTimeBetweenSets?o+=t.numberOfSets*t.restTimeBetweenSets:o+=t.numberOfSets*t.restTime,t.preparationTime&&(o+=t.preparationTime),o=Math.min(Math.round(o/60),999)}return o});translations=r(Ge);router=r(se);dialogService=r(he);workoutConfigurationService=r(Zt);layoutDetectionService=r(Ka);signals=r(it);navigationDrawer=zt("drawer");sideSheet=zt("sideSheet");constructor(){this.workout=this.signals.selectedWorkout.toSignal(),this.workouts=this.signals.workouts.toSignal(),this.isSmartPhone=this.signals.isSmartPhone.toSignal(),this.signals.settingsNeedsReload.toObservable().subscribe(o=>{o&&window.location.reload()})}isWorkoutSelected(o){return this.workout()?.id===o?.id}toggleNavigationDrawer(){this.navigationDrawer()?.toggle()}toggleSideSheet(o){this.isNewWorkout.update(()=>o),this.sideSheet()?.toggle()}onCloseSideSheetClicked(){this.sideSheet()?.toggle()}onAboutClicked(){this.navigationDrawer()?.close().then(()=>{this.dialogService.openDialog(Tn,"/about")})}onWorkoutSelected(o){this.workoutConfigurationService.selectWorkout(o.id),this.toggleNavigationDrawer()}onCreate(){this.toggleSideSheet(!0)}isNarrowLayout(){return this.layoutDetectionService.isNarrowLayout()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-workout-launcher"]],viewQuery:function(t,e){t&1&&Pe(e.navigationDrawer,Dd,5)(e.sideSheet,Td,5),t&2&&_e(2)},decls:32,vars:14,consts:[["drawer",""],["sideSheet",""],["autosize","",1,"navigation-drawer-container"],["mode","over",1,"navigation-drawer"],[1,"navigation-drawer-content"],[1,"navigation-drawer-header-container"],[1,"navigation-drawer-title-container"],["src","icons/icon-72x72.png",1,"navigation-drawer-app-icon"],[1,"navigation-drawer-title"],[1,"navigation-list","navigation-drawer-small-gap"],["mat-list-item","",3,"click"],[1,"navigation-drawer-divider"],[1,"navigation-drawer-links"],["mode","over","position","end",1,"side-sheet"],[1,"side-sheet-container"],[1,"side-sheet-nav"],["mat-icon-button","",3,"click","title"],["aria-hidden","true"],[1,"side-sheet-header"],[1,"side-sheet-content"],[3,"onWorkoutSaved","isNewWorkout"],[1,"launcher"],[3,"onNavigationMenuToggle","onSideSheetToggle"],[1,"empty-state"],[1,"navigation-drawer-label"],[1,"navigation-list"],["mat-list-item","",3,"activated"],["mat-list-item","",3,"click","activated"],[1,"workout-time","configuration-option"],[1,"configuration-description"],["aria-hidden","false",1,"configuration-option-icon"],[1,"configuration-option-name"],[1,"set-and-exercise-counter","configuration-option"],[1,"rest-time","configuration-option"],[1,"left-column"],[1,"configuration-option"],[1,"center-column"],[1,"right-column"],[1,"empty-state",3,"onCreate"]],template:function(t,e){t&1&&(l(0,"mat-sidenav-container",2)(1,"mat-sidenav",3,0)(3,"section",4)(4,"div",5)(5,"div",6),v(6,"img",7),l(7,"h3",8),m(8),c()(),l(9,"mat-nav-list",9)(10,"a",10),u("click",function(){return e.onAboutClicked()}),m(11),c()(),M(12,Ed,1,0,"mat-divider",11),c(),l(13,"div",12),M(14,Fd,5,1),c()()(),l(15,"mat-sidenav",13,1)(17,"section",14)(18,"div",15)(19,"button",16),u("click",function(){return e.onCloseSideSheetClicked()}),l(20,"mat-icon",17),m(21,"arrow_back"),c()(),M(22,Rd,2,1,"div",18)(23,Ld,2,1,"div",18),c(),l(24,"div",19)(25,"tbt-workout-schedule",20),u("onWorkoutSaved",function(){return e.onCloseSideSheetClicked()}),c()()()(),l(26,"mat-drawer-content",21)(27,"nav")(28,"tbt-workout-launcher-nav-bar",22),u("onNavigationMenuToggle",function(){return e.toggleNavigationDrawer()})("onSideSheetToggle",function(a){return e.toggleSideSheet(a)}),c()(),l(29,"main"),M(30,Nd,2,1)(31,zd,1,0,"tbt-workout-launcher-empty-state",23),c()()()),t&2&&(x("display",e.workout()!==void 0),d(8),b(e.translations.applicationName),d(3),b(e.translations.aboutButtonLabel),d(),S(e.workouts().length?12:-1),d(2),S(e.workouts().length?14:-1),d(5),h("title",q(e.translations.closeSideSheetButtonLabel)),f("aria-label",e.translations.closeSideSheetButtonLabel),d(3),S(e.isNewWorkout()?22:23),d(3),h("isNewWorkout",e.isNewWorkout()),d(4),x("intro",e.workout()===void 0),d(),S(e.workout()!==void 0?30:31))},dependencies:[et,xt,at,dt,Re,ls,qe,Fo,ss,Sn,ps,Mn,Ro,kn,Pn,Ln],styles:[`nav[_ngcontent-%COMP%]{width:100%}.navigation-drawer-container[_ngcontent-%COMP%]{height:100%}.navigation-drawer-container.display[_ngcontent-%COMP%]{background-image:url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23e1ecffff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linecap='square' stroke-width='0.5' stroke='%23ffffffff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]{max-width:85%}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]{padding:1rem;display:flex;flex-direction:column;height:calc(100% - 2rem)}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]   .navigation-drawer-app-icon[_ngcontent-%COMP%]{height:44px;width:44px}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]   .navigation-drawer-title[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);font-size:1.5em}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-divider[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level3)}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-label[_ngcontent-%COMP%]{font:var(--mat-sys-title-large);font-size:1.25em;font-weight:200;margin-bottom:1rem;margin-left:0;margin-top:2rem;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-small-gap[_ngcontent-%COMP%]{margin-bottom:1rem;margin-left:0;margin-top:0;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-large-gap[_ngcontent-%COMP%]{margin-bottom:2rem;margin-left:0;margin-top:0;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-links[_ngcontent-%COMP%]{overflow:auto}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-links[_ngcontent-%COMP%]   .navigation-list[_ngcontent-%COMP%]{padding:0}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]{max-width:85%}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem;height:calc(100% - 2rem)}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-nav[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:flex-start;gap:1rem}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-nav[_ngcontent-%COMP%]   .side-sheet-header[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-content[_ngcontent-%COMP%]{height:100%;flex-grow:2}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 1fr [center-column] 50% [right-column] 1fr;grid-template-rows:[center-row] 1fr;height:100%;color:var(--mat-sys-primary)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]{grid-column-start:center-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:center}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(12.5vh,7.5vw);line-height:min(12.5vh,7.5vw);font-size:min(12.5dvh,7.5dvw);line-height:min(12.5dvh,7.5dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(50vh,30vw);line-height:min(50vh,30vw);font-size:min(50dvh,30dvw);line-height:min(50dvh,30dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(50{list.nth($unit,1)},24vw);line-height:min(50vh,24vw);font-size:min(50{list.nth($unit,1)},24dvw);line-height:min(50dvh,24dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:min(6.25vh,3.75vw);margin-right:.5vw;font-size:min(6.25dvh,3.75dvw);margin-right:.5dvw;height:auto;width:auto}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(6.25vh,3.75vw);line-height:min(6.25vh,3.75vw);font-size:min(6.25dvh,3.75dvw);line-height:min(6.25dvh,3.75dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-family:Exo,serif;font-optical-sizing:auto;font-weight:500;font-style:normal;margin:0;text-shadow:5px 5px 10px #b6afaf,-5px -5px 10px #ffffff}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(25vh,15vw);line-height:min(25vh,15vw);font-size:min(25dvh,15dvw);line-height:min(25dvh,15dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(25vh,12vw);line-height:min(25vh,12vw);font-size:min(25dvh,12dvw);line-height:min(25dvh,12dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main.intro[_ngcontent-%COMP%]{display:block;height:auto}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 50% [bottom-row] 1fr;height:100%}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 2;grid-row-start:top-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(11.25vh,9.375vw);line-height:min(11.25vh,9.375vw);font-size:min(11.25dvh,9.375dvw);line-height:min(11.25dvh,9.375dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(45vh,30vw);line-height:min(45vh,30vw);font-size:min(45dvh,30dvw);line-height:min(45dvh,30dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(45vh,30vw);line-height:min(45vh,30vw);font-size:min(45dvh,30dvw);line-height:min(45dvh,30dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:min(5.625vh,4.5vw);font-size:min(5.625dvh,4.5dvw);margin-right:.5dvh,dvw}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(5.625vh,4.5vw);line-height:min(5.625vh,4.5vw);font-size:min(5.625dvh,4.5dvw);line-height:min(5.625dvh,4.5dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(22.5vh,15vw);line-height:min(22.5vh,15vw);font-size:min(22.5dvh,15dvw);line-height:min(22.5dvh,15dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(25vh,15vw);line-height:min(25vh,15vw);font-size:min(25dvh,15dvw);line-height:min(25dvh,15dvw)}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[column] 1fr;grid-template-rows:[top-row] 1fr [center-row] 1fr [bottom-row] 1fr;height:100%}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .workout-time[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .workout-time[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .rest-time[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .rest-time[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .set-and-exercise-counter.configuration-option[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .set-and-exercise-counter.configuration-option[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%]{font-family:Exo,serif;font-optical-sizing:auto;font-weight:500;font-style:normal;margin:0;border:0}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:18vh;line-height:18vh;font-size:18dvh;line-height:18dvh}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:4vh;font-size:4dvh;margin-right:.5dvh,dvw;height:auto;width:auto}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:4vh;line-height:4vh;font-size:4dvh;line-height:4dvh}`]})};var Bo=class{constructor(o){this.activeWorkout=o}timer;subscription;workoutTimeline=[];currentActivityPointer=0;lastTick=0;pausedAtTick=0;start(){this.createWorkoutTimeline(),this.timer=Gn(0,1e3),this.subscription=this.timer.subscribe(o=>this.onTick(o)),this.publishCurrentActivity()}stop(){this.subscription?.unsubscribe(),this.timer=void 0}pause(){this.pausedAtTick=this.lastTick,this.stop()}resume(){this.timer=Gn(0,1e3),this.subscription=this.timer.subscribe(o=>this.onTick(o))}rewind(){this.pause();let o=!1,t=this.workoutTimeline[this.currentActivityPointer];t.remainingSeconds<t.length?(this.pausedAtTick-=t.length-t.remainingSeconds,this.lastTick-=t.length-t.remainingSeconds,t.remainingSeconds=t.length,o=!0):this.currentActivityPointer-1>=0&&(this.currentActivityPointer--,t=this.workoutTimeline[this.currentActivityPointer],t.remainingSeconds=t.length,this.pausedAtTick-=t.length,this.lastTick-=t.length,o=!0),o&&this.publishCurrentActivity()}forward(){this.pause();let o=!1,t=this.workoutTimeline[this.currentActivityPointer];this.currentActivityPointer+1<this.workoutTimeline.length?(t.remainingSeconds<t.length?(this.pausedAtTick+=t.remainingSeconds,this.lastTick+=t.remainingSeconds):(this.pausedAtTick+=t.length,this.lastTick+=t.length),t.remainingSeconds=0,this.currentActivityPointer++,t=this.workoutTimeline[this.currentActivityPointer],o=!0):t.remainingSeconds<t.length&&(this.pausedAtTick+=t.remainingSeconds,this.lastTick+=t.remainingSeconds,t.remainingSeconds=0,o=!0),o&&this.publishCurrentActivity()}onTick(o){this.lastTick=this.calculateCounter(o);let t=this.workoutTimeline[this.currentActivityPointer],e=t.finishTimestamp-this.lastTick;t.remainingSeconds=e,e===0&&this.currentActivityPointer++,this.currentActivityPointer<this.workoutTimeline.length?this.publishCurrentActivity():(this.stop(),this.currentActivityPointer--,this.publishFinalActivity())}publishCurrentActivity(){postMessage({workoutActivity:this.workoutTimeline[this.currentActivityPointer],isWorkoutFinished:!1})}publishFinalActivity(){postMessage({workoutActivity:this.workoutTimeline[this.workoutTimeline.length-1],isWorkoutFinished:!0})}calculateCounter(o){return this.pausedAtTick+o}createWorkoutTimeline(){let o=0;this.activeWorkout.schedule.preparationTime&&(o+=this.activeWorkout.schedule.preparationTime,this.workoutTimeline.push({type:0,finishTimestamp:o,remainingSeconds:this.activeWorkout.schedule.preparationTime,length:this.activeWorkout.schedule.preparationTime,set:1,activity:1}));for(let t=0;t<this.activeWorkout.schedule.numberOfSets;t++)for(let e=0;e<this.activeWorkout.schedule.numberOfExercises;e++)o+=this.activeWorkout.schedule.workoutTime,this.workoutTimeline.push({type:1,finishTimestamp:o,remainingSeconds:this.activeWorkout.schedule.workoutTime,length:this.activeWorkout.schedule.workoutTime,set:t+1,activity:e+1}),this.activeWorkout.schedule.restTimeBetweenSets>0?e<this.activeWorkout.schedule.numberOfExercises-1?(o+=this.activeWorkout.schedule.restTime,this.workoutTimeline.push({type:2,finishTimestamp:o,remainingSeconds:this.activeWorkout.schedule.restTime,length:this.activeWorkout.schedule.restTime,set:t+1,activity:e+1})):t<this.activeWorkout.schedule.numberOfSets-1&&(o+=this.activeWorkout.schedule.restTimeBetweenSets,this.workoutTimeline.push({type:3,finishTimestamp:o,remainingSeconds:this.activeWorkout.schedule.restTimeBetweenSets,length:this.activeWorkout.schedule.restTimeBetweenSets,set:t+1,activity:e+1})):(o+=this.activeWorkout.schedule.restTime,this.workoutTimeline.push({type:2,finishTimestamp:o,remainingSeconds:this.activeWorkout.schedule.restTime,length:this.activeWorkout.schedule.restTime,set:t+1,activity:e+1}))}};if(typeof Worker<"u"){let i;addEventListener("message",({data:o})=>{switch(o?.command){case 0:o.workout&&(i=new Bo(o?.workout),i.start());break;case 1:i?.stop();break;case 2:i?.pause();break;case 3:i?.resume();break;case 4:i?.rewind();break;case 5:i?.forward();break;default:console.log(`Unknown command: ${o}`)}})}var Vn=class i{wakeLock=null;isSupported;get supported(){return this.isSupported}constructor(){this.isSupported="wakeLock"in navigator,this.isSupported&&document.addEventListener("visibilitychange",this.handleVisibilityChange.bind(this))}ngOnDestroy(){document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.releaseWakeLock()}async requestWakeLock(){if(!this.isSupported)return!1;try{return this.wakeLock=await navigator.wakeLock.request("screen"),this.wakeLock.addEventListener("release",()=>{this.wakeLock=null}),!0}catch(o){return console.error(`Failed to request wake lock: ${o}`),!1}}async releaseWakeLock(){this.wakeLock&&(await this.wakeLock.release(),this.wakeLock=null)}async handleVisibilityChange(){document.visibilityState==="visible"&&!this.wakeLock&&await this.requestWakeLock()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var Xe=class i{currentWorkoutActivity;countdown;worker;platformId=r(ea);signals=r(it);wakeLockService=r(Vn);constructor(){this.currentWorkoutActivity=this.signals.currentWorkoutActivity.toSignal(),this.countdown=this.signals.countdown.toSignal(),ba(this.platformId)&&(this.worker=new Worker(new URL("worker-MH7RI72V.js",import.meta.url),{type:"module"}))}async start(o){this.worker&&(this.wakeLockService.supported&&await this.wakeLockService.requestWakeLock(),this.worker.postMessage({command:0,workout:o}),this.worker.onmessage=t=>{if(t.data?.workoutActivity?.type>=0&&t.data?.workoutActivity?.remainingSeconds>=0&&t.data?.workoutActivity?.set>=1&&t.data?.workoutActivity?.activity>=1){let e=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.type!==t.data?.workoutActivity?.type,n=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.activity!==t.data?.workoutActivity?.activity,a=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.set!==t.data?.workoutActivity?.set;this.signals.currentWorkoutActivity.update(()=>t.data?.workoutActivity),this.countdown()>0&&e?(this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!0)):t.data?.workoutActivity?.remainingSeconds<=3&&t.data?.workoutActivity?.remainingSeconds>=1?this.signals.countdown.set(t.data?.workoutActivity?.remainingSeconds):(this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!1)),this.signals.isActivityChanged.set(!!n),this.signals.isSetChanged.set(!!a),this.signals.isWorkoutFinished.set(t.data?.isWorkoutFinished)}})}async stop(){this.worker?.postMessage({command:1}),this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!1),this.signals.isActivityChanged.set(!1),this.signals.isSetChanged.set(!1),this.signals.isWorkoutFinished.set(!1),this.wakeLockService.supported&&this.wakeLockService.releaseWakeLock()}pause(){this.worker?.postMessage({command:2})}resume(){this.worker?.postMessage({command:3})}rewind(){this.worker?.postMessage({command:4})}forward(){this.worker?.postMessage({command:5})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var Bn=class i extends G{backToHomeButtonLabel=$localize`:Back button label@@backToHomeButtonLabel:Back`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var Nn=class i{selectedWorkout;title=B(()=>this.selectedWorkout()?.name?this.selectedWorkout().name:this.translations.applicationName);translations=r(Bn);router=r(se);workoutRunnerService=r(Xe);signals=r(it);constructor(){this.selectedWorkout=this.signals.selectedWorkout.toSignal()}async onBackClicked(o){o.stopPropagation(),await this.workoutRunnerService.stop(),this.router.navigateByUrl("/launcher")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-basic-nav-bar"]],decls:7,vars:4,consts:[[1,"timer-navbar"],[1,"action-icons"],["mat-icon-button","",3,"click","title"],["aria-hidden","true"],[1,"navbar-title"]],template:function(t,e){t&1&&(l(0,"mat-toolbar",0)(1,"span",1)(2,"button",2),u("click",function(a){return e.onBackClicked(a)}),l(3,"mat-icon",3),m(4,"arrow_back"),c()()(),l(5,"span",4),m(6),c()()),t&2&&(d(2),h("title",q(e.translations.backToHomeButtonLabel)),f("aria-label",e.translations.backToHomeButtonLabel),d(4),b(e.title()))},dependencies:[qi,Ui,at,dt,et,xt],styles:[".timer-navbar[_ngcontent-%COMP%]{color:#fff;background:transparent}.timer-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%]{font-weight:700}.timer-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]})};var zn=class i extends G{resumeButtonLabel=$localize`:Resume button label@@resumeButtonLabel:Resume (Space bar)`;pauseButtonLabel=$localize`:Pause button label@@pauseButtonLabel:Pause (Space bar)`;rewindButtonLabel=$localize`:Rewind button label@@rewindButtonLabel:Rewind`;forwardButtonLabel=$localize`:Forward button label@@forwardButtonLabel:Forward`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};function jd(i,o){i&1&&(l(0,"mat-icon",7),m(1,"play_arrow"),c()),i&2&&h("inline",!0)}function Hd(i,o){i&1&&(l(0,"mat-icon",7),m(1,"pause"),c()),i&2&&h("inline",!0)}function Ud(i,o){if(i&1){let t=ht();l(0,"section",5)(1,"button",6),u("click",function(n){X(t);let a=g();return K(a.onRewindClicked(n))}),l(2,"mat-icon",7),m(3,"fast_rewind"),c()(),l(4,"button",6),u("click",function(n){X(t);let a=g();return K(a.onPauseToggled(n))}),M(5,jd,2,1,"mat-icon",7)(6,Hd,2,1,"mat-icon",7),c(),l(7,"button",6),u("click",function(n){X(t);let a=g();return K(a.onForwardClicked(n))}),l(8,"mat-icon",7),m(9,"fast_forward"),c()()()}if(i&2){let t=g();d(),h("disableRipple",!0)("title",t.rewindButtonLabel()),f("aria-label",t.rewindButtonLabel()),d(),h("inline",!0),d(2),h("disableRipple",!0)("title",t.pauseResumeButtonLabel()),f("aria-label",t.pauseResumeButtonLabel()),d(),S(t.isPaused()?5:6),d(2),h("disableRipple",!0)("title",t.forwardButtonLabel()),f("aria-label",t.forwardButtonLabel()),d(),h("inline",!0)}}var Wn=class i{static COUNTDOWN_COLOR="#EFB700";static EXERCISE_COLOR="#008450";static REST_COLOR="#B81D13";static WORKOUT_FINISH_COLOR="#005CBB";static LARGE_DISPLAY_TEXT="large-display-text";static SMALL_DISPLAY_TEXT="small-display-text";selectedWorkout;currentWorkoutActivity;countdown;isCountdownFinished;isActivityChanged;isSetChanged;isWorkoutFinished;settings;isWorkoutFinishedSubscription;isAnimationEnabled=F(!0);isAudioEnabled=F(!0);isWorkoutPresent=B(()=>!!this.selectedWorkout());isWorkoutStarted=B(()=>!!this.currentWorkoutActivity());remainingTime=B(()=>{let o=this.currentWorkoutActivity()?.remainingSeconds;return o||0});set=B(()=>{let o=this.currentWorkoutActivity()?.set;return o||1});exercise=B(()=>{let o=this.currentWorkoutActivity()?.activity;return o||1});color=B(()=>{let o=this.currentWorkoutActivity()?.type,t="";return this.isWorkoutFinished()?t=i.WORKOUT_FINISH_COLOR:this.countdown()>0?t=i.COUNTDOWN_COLOR:o===1?t=i.EXERCISE_COLOR:t=i.REST_COLOR,t});activityIcon=B(()=>{let o="";switch(this.currentWorkoutActivity()?.type){case 1:o="sprint";break;case 2:o="coffee";break;case 3:case 0:o="sports_score";break;default:o="home"}return o});activityIconPulseAnimation=B(()=>{let o=this.currentWorkoutActivity()?.length;if(this.isAnimationEnabled()&&o&&this.remainingTime()<o&&this.remainingTime()!==0){let t=o%2===0?1:0;return this.remainingTime()%2===t}return!1});activityPulseAnimation=B(()=>!!(this.isAnimationEnabled()&&this.isActivityChanged()));setPulseAnimation=B(()=>!!(this.isAnimationEnabled()&&this.isSetChanged()));displayTextClass=B(()=>{let o=this.selectedWorkout()?.schedule;return o&&(o.restTime>=100||o.workoutTime>=100)?i.SMALL_DISPLAY_TEXT:i.LARGE_DISPLAY_TEXT});pauseResumeButtonLabel=B(()=>this.isPaused()?this.translations.resumeButtonLabel:this.translations.pauseButtonLabel);rewindButtonLabel;forwardButtonLabel;isPaused=F(!1);workoutRunnerService=r(Xe);audioPlaybackService=r(Vi);dialogService=r(Bi);translations=r(zn);signals=r(it);constructor(){this.selectedWorkout=this.signals.selectedWorkout.toSignal(),this.currentWorkoutActivity=this.signals.currentWorkoutActivity.toSignal(),this.countdown=this.signals.countdown.toSignal(),this.isCountdownFinished=this.signals.isCountdownFinished.toSignal(),this.isActivityChanged=this.signals.isActivityChanged.toSignal(),this.isWorkoutFinished=this.signals.isWorkoutFinished.toSignal(),this.isSetChanged=this.signals.isSetChanged.toSignal(),this.rewindButtonLabel=F(this.translations.rewindButtonLabel),this.forwardButtonLabel=F(this.translations.forwardButtonLabel),this.isWorkoutFinishedSubscription=this.signals.isWorkoutFinished.toObservable().subscribe(o=>{o&&this.isAudioEnabled()&&this.audioPlaybackService.playWorkoutfinishSound()}),this.settings=this.signals.settings.toSignal(),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled),Oe(()=>{this.isAudioEnabled()&&(this.countdown()>0&&this.audioPlaybackService.playCountdownSound(),this.isCountdownFinished()&&(this.currentWorkoutActivity()?.type===3?this.audioPlaybackService.playSetFinishedSound():this.audioPlaybackService.playCountdownFinishedSound()))}),Xo(window,"keydown").pipe(pt(o=>o.code==="Space"),Ua()).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this.switchWorkoutRunnerState()})}async ngAfterViewInit(){this.selectedWorkout()&&await this.workoutRunnerService.start(this.selectedWorkout())}ngOnDestroy(){this.isWorkoutFinishedSubscription.unsubscribe()}onRewindClicked(o){o.stopPropagation(),this.isPaused()||this.isPaused.update(t=>!0),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!1),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!1),this.workoutRunnerService.rewind()}onForwardClicked(o){o.stopPropagation(),this.isPaused()||this.isPaused.update(t=>!0),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!1),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!1),this.workoutRunnerService.forward()}onPauseToggled(o){o.stopPropagation(),this.switchWorkoutRunnerState()}switchWorkoutRunnerState(){this.isPaused.update(o=>!o),this.isPaused()?this.workoutRunnerService.pause():(this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!0),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!0),this.workoutRunnerService.resume())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-basic-timer"]],decls:17,vars:18,consts:[[3,"click","dblclick"],[1,"set-counter"],[1,"info-icon"],["aria-hidden","false",1,"info-icon"],[1,"exercise-counter"],[1,"timer-controls"],["mat-icon-button","",3,"click","disableRipple","title"],["aria-hidden","true",3,"inline"]],template:function(t,e){if(t&1&&(l(0,"nav",0),u("click",function(a){return e.onPauseToggled(a)})("dblclick",function(a){return e.onRewindClicked(a)}),v(1,"tbt-basic-nav-bar"),c(),l(2,"main",0),u("click",function(a){return e.onPauseToggled(a)})("dblclick",function(a){return e.onRewindClicked(a)}),l(3,"section"),m(4),c(),l(5,"section",1)(6,"span"),m(7),c(),v(8,"span",2),l(9,"mat-icon",3),m(10,"laps"),c()(),l(11,"section",4)(12,"span"),m(13),c(),l(14,"mat-icon",3),m(15),c()(),M(16,Ud,10,12,"section",5),c()),t&2){let n,a;d(2),re("background-color",e.color()),d(),nt(Et("countdown-timer ",e.displayTextClass())),d(),b(e.remainingTime()),d(),x("pulse",e.setPulseAnimation()),d(2),be("",e.set(),"/",((n=e.selectedWorkout())==null||n.schedule==null?null:n.schedule.numberOfSets)??"?"),d(4),x("pulse",e.activityPulseAnimation()),d(2),be("",e.exercise(),"/",((a=e.selectedWorkout())==null||a.schedule==null?null:a.schedule.numberOfExercises)??"?"," "),d(),x("pulse",e.activityIconPulseAnimation()),d(),b(e.activityIcon()),d(),S(e.isWorkoutPresent()&&e.isWorkoutStarted()?16:-1)}},dependencies:[et,xt,at,dt,Re,Nn],styles:["@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}nav[_ngcontent-%COMP%]{position:fixed;width:100%;top:0}main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 1fr [center-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 80% [bottom-row] 1fr;width:100vw;height:calc(100vh - var(--mat-toolbar-standard-height, 64px));height:calc(100dvh - var(--mat-toolbar-standard-height, 64px));padding-top:var(--mat-toolbar-standard-height, 64px);color:#fff}main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:center-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal}main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(80vh,50vw);line-height:min(80vh,50vw);font-size:min(80dvh,50dvw);line-height:min(80dvh,50dvw)}main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(70vh,30vw);line-height:min(70vh,30vw);font-size:min(70dvh,30dvw);line-height:min(70dvh,30dvw)}main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;grid-column-start:left-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal;font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw)}main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;grid-column-start:right-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal;font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw)}main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw);height:auto;width:auto;will-change:transform}main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:min(3vh,3vw);gap:min(3dvh,3dvw);grid-column-start:center-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}main[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1s ease forwards}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 25% [center-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 75% [bottom-row] 1fr}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:left-column;grid-column-end:span 3;grid-row-start:top-row;grid-row-end:span 1;font-style:normal}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(75vh,75vw);line-height:min(75vh,75vw);font-size:min(75dvh,75dvw);line-height:min(75dvh,75dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(55vh,55vw);line-height:min(55vh,55vw);font-size:min(55dvh,55dvw);line-height:min(55dvh,55dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1;font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1;font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{gap:in(3vh,3vw);gap:in(3dvh,3dvw);grid-column-start:center-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 60% [center-row] 20% [bottom-row] 1fr}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:left-column;grid-column-end:span 2;grid-row-start:top-row;grid-row-end:span 1;font-style:normal}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(60vh,75vw);line-height:min(60vh,75vw);font-size:min(60dvh,75dvw);line-height:min(60dvh,75dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(50vh,55vw);line-height:min(50vh,55vw);font-size:min(50dvh,55dvw);line-height:min(50dvh,55dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{gap:5vw;gap:5dvw;grid-column-start:left-column;grid-column-end:span 2;grid-row-start:bottom-row;grid-row-end:span 1}"]})};var jn=class i extends G{settingsHeader=$localize`:Header for settings page@@settingsHeader:Settings`;backFromSettingsButtonLabel=$localize`:Back button label@@backFromSettingsButtonLabel:Back`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var qd=["*"],Ke=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-portrait-page-decoration"]],ngContentSelectors:qd,decls:4,vars:0,consts:[[1,"layout-root"],[1,"content"],[1,"background"]],template:function(t,e){t&1&&(j(),Rt(0,"div",0)(1,"div",1),C(2),Lt(),ge(3,"div",2),Lt())},styles:[`.layout-root[_ngcontent-%COMP%]{height:100%;width:100%;display:grid;grid-template-columns:1fr}.layout-root[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;width:100%;grid-row-start:1;grid-column-start:1}.layout-root[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{grid-row-start:1;grid-column-start:1;height:100%;width:100%;clip-path:polygon(0 80%,100% 60%,100% 100%,0 100%);background-image:url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23e1ecffff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linecap='square' stroke-width='0.5' stroke='%23ffffffff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")}`]})};var Hn=class i{isFormValid=!0;isFormDirty=!1;translations=r(jn);location=r(Oi);signals=r(it);constructor(){}onBackClicked(){this.isFormValid&&this.isFormDirty&&this.signals.isSettingsSaveInProgress.set(!0),this.location.back()}setValid(o){this.isFormValid=o}setDirty(o){this.isFormDirty=o}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-settings"]],decls:9,vars:4,consts:[[1,"settings-container"],[1,"settings-title"],["mat-icon-button","",1,"back-arrow",3,"click","title"],["aria-hidden","true"],[1,"settings-content"],[3,"isDirty","isValid"]],template:function(t,e){t&1&&(l(0,"tbt-portrait-page-decoration")(1,"section",0)(2,"h2",1)(3,"button",2),u("click",function(){return e.onBackClicked()}),l(4,"mat-icon",3),m(5,"arrow_back"),c()(),m(6),c(),l(7,"div",4)(8,"tbt-settings-form",5),u("isDirty",function(a){return e.setDirty(a)})("isValid",function(a){return e.setValid(a)}),c()()()()),t&2&&(d(3),h("title",q(e.translations.backFromSettingsButtonLabel)),f("aria-label",e.translations.backFromSettingsButtonLabel),d(3),L(" ",e.translations.settingsHeader," "))},dependencies:[et,xt,at,dt,Ue,Ke],styles:[".settings-container[_ngcontent-%COMP%]{height:calc(100% - 3em);padding:1.5rem}.settings-container[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;font-weight:400;font:var(--mat-sys-title-large)}.settings-container[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%]{margin-right:.25rem}"]})};var Un=class i extends G{aboutHeader=$localize`:Header for about page@@aboutHeader:About`;backFromAboutButtonLabel=$localize`:Back button label@@backFromAboutButtonLabel:Back`;static \u0275fac=(()=>{let o;return function(e){return(o||(o=E(i)))(e||i)}})();static \u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})};var qn=class i{translations=r(Un);location=r(Oi);constructor(){}onBackClicked(){this.location.back()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["tbt-about"]],decls:9,vars:4,consts:[[1,"about-container"],[1,"about-title"],["mat-icon-button","",1,"back-arrow",3,"click","title"],["aria-hidden","true"],[1,"about-content"]],template:function(t,e){t&1&&(l(0,"tbt-portrait-page-decoration")(1,"section",0)(2,"h2",1)(3,"button",2),u("click",function(){return e.onBackClicked()}),l(4,"mat-icon",3),m(5,"arrow_back"),c()(),m(6),c(),l(7,"div",4),v(8,"tbt-application-info"),c()()()),t&2&&(d(3),h("title",q(e.translations.backFromAboutButtonLabel)),f("aria-label",e.translations.backFromAboutButtonLabel),d(3),L(" ",e.translations.aboutHeader," "))},dependencies:[at,dt,et,xt,$e,Ke],styles:[".about-container[_ngcontent-%COMP%]{height:calc(100% - 3em);padding:1.5rem}.about-container[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;font-weight:400;font:var(--mat-sys-title-large)}.about-container[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%]{margin-right:.25rem}"]})};var _s=[{path:"launcher",component:Qe},{path:"timer",component:Wn},{path:"about",component:qn},{path:"settings",component:Hn},{path:"",component:Qe,pathMatch:"full"},{path:"**",component:Qe,pathMatch:"full"}];var Gd="@",$d=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=r(mt);loadingSchedulerFn=r(Qd,{optional:!0});_engine;constructor(t,e,n,a,s){this.doc=t,this.delegate=e,this.zone=n,this.animationType=a,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-A6E3SS67.js").then(n=>n),e;return this.loadingSchedulerFn?e=this.loadingSchedulerFn(t):e=t(),e.catch(n=>{throw new Se(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:a})=>{this._engine=n(this.animationType,this.doc);let s=new a(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,e){let n=this.delegate.createRenderer(t,e);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new No(n);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let _=s.createRenderer(t,e);a.use(_),this.scheduler??=this.injector.get(ta,null,{optional:!0}),this.scheduler?.notify(10)}).catch(s=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(e){xi()};static \u0275prov=D({token:i,factory:i.\u0275fac})}return i})(),No=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let t of this.replay)t(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,t){return this.delegate.createElement(o,t)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,t){this.delegate.appendChild(o,t)}insertBefore(o,t,e,n){this.delegate.insertBefore(o,t,e,n)}removeChild(o,t,e,n){this.delegate.removeChild(o,t,e,n)}selectRootElement(o,t){return this.delegate.selectRootElement(o,t)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,t,e,n){this.delegate.setAttribute(o,t,e,n)}removeAttribute(o,t,e){this.delegate.removeAttribute(o,t,e)}addClass(o,t){this.delegate.addClass(o,t)}removeClass(o,t){this.delegate.removeClass(o,t)}setStyle(o,t,e,n){this.delegate.setStyle(o,t,e,n)}removeStyle(o,t,e){this.delegate.removeStyle(o,t,e)}setProperty(o,t,e){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(o,t,e)),this.delegate.setProperty(o,t,e)}setValue(o,t){this.delegate.setValue(o,t)}listen(o,t,e,n){return this.shouldReplay(t)&&this.replay.push(a=>a.listen(o,t,e,n)),this.delegate.listen(o,t,e,n)}shouldReplay(o){return this.replay!==null&&o.startsWith(Gd)}},Qd=new O("");function bs(i="animations"){return oa("NgAsyncAnimations"),Jo([{provide:wi,useFactory:()=>new $d(r(Tt),r(va),r($),i)},{provide:ia,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var zo={providers:[ha(),ka(_s,Ca()),bs(),Ya("ngsw-worker.js",{enabled:!ga(),registrationStrategy:"registerWhenStable:30000"}),xa(wa())]};var vs;function ys(i){vs??=new TextEncoder;let o=vs.encode(i),t=new DataView(o.buffer,o.byteOffset,o.byteLength),e=ws(t,o.length,0),n=ws(t,o.length,102072);return e==0&&(n==0||n==1)&&(e=e^319790063,n=n^-1801410264),BigInt.asUintN(32,BigInt(e))<<BigInt(32)|BigInt.asUintN(32,BigInt(n))}function Xd(i,o=""){let t=ys(i);return o&&(t=BigInt.asUintN(64,t<<BigInt(1))|t>>BigInt(63)&BigInt(1),t+=ys(o)),BigInt.asUintN(63,t).toString()}function ws(i,o,t){let e=2654435769,n=2654435769,a=0,s=o-12;for(;a<=s;a+=12){e+=i.getUint32(a,!0),n+=i.getUint32(a+4,!0),t+=i.getUint32(a+8,!0);let P=xs(e,n,t);e=P[0],n=P[1],t=P[2]}let _=o-a;return t+=o,_>=4?(e+=i.getUint32(a,!0),a+=4,_>=8?(n+=i.getUint32(a,!0),a+=4,_>=9&&(t+=i.getUint8(a++)<<8),_>=10&&(t+=i.getUint8(a++)<<16),_===11&&(t+=i.getUint8(a++)<<24)):(_>=5&&(n+=i.getUint8(a++)),_>=6&&(n+=i.getUint8(a++)<<8),_===7&&(n+=i.getUint8(a++)<<16))):(_>=1&&(e+=i.getUint8(a++)),_>=2&&(e+=i.getUint8(a++)<<8),_===3&&(e+=i.getUint8(a++)<<16)),xs(e,n,t)[2]}function xs(i,o,t){return i-=o,i-=t,i^=t>>>13,o-=t,o-=i,o^=i<<8,t-=i,t-=o,t^=o>>>13,i-=o,i-=t,i^=t>>>12,o-=t,o-=i,o^=i<<16,t-=i,t-=o,t^=o>>>5,i-=o,i-=t,i^=t>>>3,o-=t,o-=i,o^=i<<10,t-=i,t-=o,t^=o>>>15,[i,o,t]}function ks(i,o,t,e,n=[]){let a={},s={},_={},P=Kd(i[0],i.raw[0]),tt=[P.text],Mt=[],It=P.text;for(let Dt=1;Dt<i.length;Dt++){let{messagePart:bi,placeholderName:Ye=Zd(Dt),associatedMessageId:Ho}=Yd(i[Dt],i.raw[Dt]);It+=`{$${Ye}}${bi}`,o!==void 0&&(a[Ye]=o[Dt-1],s[Ye]=n[Dt-1]),Mt.push(Ye),Ho!==void 0&&(_[Ye]=Ho),tt.push(bi)}let Gt=P.customId||Xd(It,P.meaning||""),Ce=P.legacyIds?P.legacyIds.filter(Dt=>Dt!==Gt):[];return{id:Gt,legacyIds:Ce,substitutions:a,substitutionLocations:s,text:It,customId:P.customId,meaning:P.meaning||"",description:P.description||"",messageParts:tt,messagePartLocations:e,placeholderNames:Mt,associatedMessageIds:_,location:t}}function Kd(i,o){let{text:t,block:e}=Cs(i,o);if(e===void 0)return{text:t};{let[n,...a]=e.split("\u241F"),[s,_]=n.split("@@",2),[P,tt]=s.split("|",2);return tt===void 0&&(tt=P,P=void 0),tt===""&&(tt=void 0),{text:t,meaning:P,description:tt,customId:_,legacyIds:a}}}function Yd(i,o){let{text:t,block:e}=Cs(i,o);if(e===void 0)return{messagePart:t};{let[n,a]=e.split("@@");return{messagePart:t,placeholderName:n,associatedMessageId:a}}}function Cs(i,o){if(o.charAt(0)!==":")return{text:i};{let t=Jd(i,o);return{block:i.substring(1,t),text:i.substring(t+1)}}}function Zd(i){return i===1?"PH":`PH_${i-1}`}function Jd(i,o){for(let t=1,e=1;t<i.length;t++,e++)if(o[e]==="\\")e++;else if(i[t]===":")return t;throw new Error(`Unterminated $localize metadata block in "${o}".`)}var Wo=class extends Error{parsedMessage;type="MissingTranslationError";constructor(o){super(`No translation found for ${Ms(o)}.`),this.parsedMessage=o}};function em(i,o,t){let e=ks(o,t),n=i[e.id];if(e.legacyIds!==void 0)for(let a=0;a<e.legacyIds.length&&n===void 0;a++)n=i[e.legacyIds[a]];if(n===void 0)throw new Wo(e);return[n.messageParts,n.placeholderNames.map(a=>{if(e.substitutions.hasOwnProperty(a))return e.substitutions[a];throw new Error(`There is a placeholder name mismatch with the translation provided for the message ${Ms(e)}.
The translation contains a placeholder with name ${a}, which does not exist in the message.`)})]}function im(i){let o=i.split(/{\$([^}]*)}/),t=[o[0]],e=[];for(let a=1;a<o.length-1;a+=2)e.push(o[a]),t.push(`${o[a+1]}`);let n=t.map(a=>a.charAt(0)===":"?"\\"+a:a);return{text:i,messageParts:nm(t,n),placeholderNames:e}}function nm(i,o){return Object.defineProperty(i,"raw",{value:o}),i}function Ms(i){let o=i.meaning&&` - "${i.meaning}"`,t=i.legacyIds&&i.legacyIds.length>0?` [${i.legacyIds.map(e=>`"${e}"`).join(", ")}]`:"";return`"${i.id}"${t} ("${i.text}"${o})`}function Ss(i){$localize.translate||($localize.translate=om),$localize.TRANSLATIONS||($localize.TRANSLATIONS={}),Object.keys(i).forEach(o=>{$localize.TRANSLATIONS[o]=im(i[o])})}function Os(){$localize.translate=void 0,$localize.TRANSLATIONS={}}function om(i,o){try{return em($localize.TRANSLATIONS,i,o)}catch(t){return console.warn(t.message),[i,o]}}var jo="en-US",Ps=localStorage.getItem(Ri.SETTINGS_KEY);if(Ps)try{jo=JSON.parse(Ps).language??"en-US"}catch(i){console.log(i)}am(jo).then(()=>import("./chunk-GPAM4YJQ.js")).then(i=>{zo.providers.push({provide:pa,useValue:jo}),ya(i.AppComponent,zo).catch(o=>console.error(o))});async function am(i){return i==="en-US"?Promise.resolve():fetch(`locale/${i}/messages.json`).then(o=>o.json()).catch(o=>console.error(o)).then(o=>{Os(),$localize.locale=i,Ss(o.translations)})}
