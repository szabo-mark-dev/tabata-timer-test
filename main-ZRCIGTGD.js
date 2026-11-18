import{$ as Da,$a as m,$b as ce,A as ne,Aa as Tt,Ab as cn,Ac as rs,B as pe,Ba as f,Bb as Ha,Bc as as,C as ze,Ca as l,Cc as vn,D as B,Da as d,Db as gt,Dc as ss,E as z,Ea as C,Eb as qa,Ec as yn,F as w,Fa as Le,Fb as Ga,Fc as ls,G as s,Ga as Ne,Gb as $a,Gc as Yo,H as Di,Ha as Et,Hb as Ka,Hc as Zo,I as se,Ia as ke,Ib as Ei,Ic as Jt,J as le,Ja as We,Jb as Qa,Jc as wn,K as nt,Ka as g,Kb as _e,Kc as Z,L as $,La as Ra,Lb as ot,Lc as ds,M as qe,Ma as y,Mb as Ko,Mc as Ri,N as Qt,Na as U,Nb as rt,Nc as ae,O as W,Oa as S,Ob as je,Oc as Cn,P as ee,Pa as Me,Pb as Xa,Pc as xn,Q as M,Qa as fe,Qb as Ya,Qc as cs,R as Ma,Ra as x,Rb as mn,Rc as ms,S as Sa,Sa as k,Sb as un,Sc as us,T as Oa,Ta as La,Tb as hn,Tc as hs,U as te,Ua as Xt,Ub as Za,V as rn,Va as It,Vb as Te,W as Re,Wa as Ye,Wb as Ja,X as A,Xa as ft,Xb as es,Y as Ge,Ya as O,Yb as we,Z as R,Za as Na,Zb as Qo,_ as an,_a as de,_b as be,a as V,aa as pt,ab as v,ac as Xo,b as ge,ba as c,bb as G,bc as ts,c as zo,ca as sn,cb as At,cc as pn,d as Qe,da as Pa,db as Q,dc as at,e as nn,ea as oe,eb as Ke,ec as et,f as L,fa as Oe,fb as H,fc as Ee,g as on,ga as De,gb as Va,gc as Ve,h as ga,ha as Y,hb as Go,hc as J,i as _a,ia as Ta,ib as Ba,ic as _t,j as ba,ja as Ea,jb as za,jc as bt,k as Wo,ka as Ho,kb as p,kc as is,l as Xe,la as _,lb as N,lc as me,m as $t,ma as j,mb as Ft,n as va,na as E,nb as ln,nc as ve,o as ya,oa as qo,ob as Ze,oc as ue,p as jo,pa as Pi,pb as Yt,pc as Ii,q as Ce,qa as Ia,qb as Je,qc as fn,r as he,ra as K,rb as Wa,rc as ns,s as wa,sa as $e,sb as ie,sc as Ai,t as Se,ta as Aa,tb as q,tc as vt,u as Uo,ua as b,ub as Pe,uc as Fi,v as Ca,va as P,vb as Zt,vc as Rt,w as xa,wa as T,wb as ja,wc as gn,x as ka,xa as Fa,xb as $o,xc as _n,y as xe,ya as Ti,yb as dn,yc as bn,z as Kt,za as Pt,zb as Ua,zc as os}from"./chunk-7S3WHC2F.js";var Ad=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Fd=["mat-icon, [matMenuItemIcon]","*"];function Rd(n,i){n&1&&(nt(),l(0,"svg",2),C(1,"polygon",3),d())}var Ld=["*"];function Nd(n,i){if(n&1){let e=ke();Le(0,"div",0),Ra("click",function(){se(e);let o=y();return le(o.closed.emit("click"))})("animationstart",function(o){se(e);let r=y();return le(r._onAnimationStart(o.animationName))})("animationend",function(o){se(e);let r=y();return le(r._onAnimationDone(o.animationName))})("animationcancel",function(o){se(e);let r=y();return le(r._onAnimationDone(o.animationName))}),Le(1,"div",1),S(2),Ne()()}if(n&2){let e=y();de(e._classList),O("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),We("id",e.panelId),b("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var er=new w("MAT_MENU_PANEL"),Li=(()=>{class n{_elementRef=s(R);_document=s(qe);_focusMonitor=s(rt);_parentMenu=s(er,{optional:!0});_changeDetectorRef=s(ie);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new L;_focused=new L;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(je).load(et),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let o=0;o<t.length;o++)t[o].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,o){t&1&&g("click",function(a){return o._checkDisabled(a)})("mouseenter",function(){return o._handleMouseEnter()}),t&2&&(b("role",o.role)("tabindex",o._getTabIndex())("aria-disabled",o.disabled)("disabled",o.disabled||null),O("mat-mdc-menu-item-highlighted",o._highlighted)("mat-mdc-menu-item-submenu-trigger",o._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",q],disableRipple:[2,"disableRipple","disableRipple",q]},exportAs:["matMenuItem"],ngContentSelectors:Fd,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,o){t&1&&(U(Ad),S(0),l(1,"span",0),S(2,1),d(),C(3,"div",1),P(4,Rd,2,0,":svg:svg",2)),t&2&&(c(3),f("matRippleDisabled",o.disableRipple||o.disabled)("matRippleTrigger",o._getHostElement()),c(),T(o._triggersSubmenu?4:-1))},dependencies:[at],encapsulation:2})}return n})();var Vd=new w("MatMenuContent");var Bd=new w("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Jo="_mat-menu-enter",kn="_mat-menu-exit",ti=(()=>{class n{_elementRef=s(R);_changeDetectorRef=s(ie);_injector=s($);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=be();_allItems;_directDescendantItems=new an;_classList={};_panelAnimationState="void";_animationDone=new L;_isAnimating=M(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,o=V({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{o[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{o[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=o}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new W;close=this.closed;panelId=s(we).getId("mat-menu-panel-");constructor(){let e=s(Bd);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new es(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(xe(this._directDescendantItems),Kt(e=>Ce(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let o=e.toArray(),r=Math.max(0,Math.min(o.length-1,t.activeItemIndex||0));o[r]&&!o[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(xe(this._directDescendantItems),Kt(t=>Ce(...t.map(o=>o._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,o=this._keyManager;switch(t){case 27:Te(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&o.setFocusOrigin("keyboard"),o.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=pt(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let o=this._keyManager;o.setFocusOrigin(e).setFirstItemActive(),!o.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ge(V({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===kn;(t||e===Jo)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Jo||e===kn)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(kn),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Jo:kn)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(xe(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-menu"]],contentQueries:function(t,o,r){if(t&1&&Me(r,Vd,5)(r,Li,5)(r,Li,4),t&2){let a;x(a=k())&&(o.lazyContent=a.first),x(a=k())&&(o._allItems=a),x(a=k())&&(o.items=a)}},viewQuery:function(t,o){if(t&1&&fe(sn,5),t&2){let r;x(r=k())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(t,o){t&2&&b("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",q],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:q(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[H([{provide:er,useExisting:n}])],ngContentSelectors:Ld,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,o){t&1&&(U(),Aa(0,Nd,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})}return n})(),zd=new w("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=s($);return()=>_n(n)}});var ei=new WeakMap,Wd=(()=>{class n{_canHaveBackdrop;_element=s(R);_viewContainerRef=s(Ea);_menuItemInstance=s(Li,{optional:!0,self:!0});_dir=s(Ve,{optional:!0});_focusMonitor=s(rt);_ngZone=s(ee);_injector=s($);_scrollStrategy=s(zd);_changeDetectorRef=s(ie);_animationsDisabled=be();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Qe.EMPTY;_menuCloseSubscription=Qe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=s(er,{optional:!0});this._parentMaterialMenu=t instanceof ti?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ei.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let o=ei.get(t);ei.set(t,this),o&&o!==this&&o._closeMenu();let r=this._createOverlay(t),a=r.getConfig(),u=a.positionStrategy;this._setPosition(t,u),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof ti&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ne(t.close)).subscribe(()=>{u.withLockedPosition(!1).reapplyLastPosition(),u.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,o=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),o instanceof ti&&this._ownsMenu(o)?(this._pendingRemoval=o._animationDone.pipe(Se(1)).subscribe(()=>{t.detach(),ei.has(o)||o.lazyContent?.detach()}),o._setIsOpen(!1)):(t.detach(),o?.lazyContent?.detach()),o&&this._ownsMenu(o)&&ei.delete(o),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=yn(this._injector,t),this._overlayRef.keydownEvents().subscribe(o=>{this._menu instanceof ti&&this._menu._handleKeydown(o)})}return this._overlayRef}_getOverlayConfig(e){return new bn({positionStrategy:as(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(o=>{this._ngZone.run(()=>{let r=o.connectionPair.overlayX==="start"?"after":"before",a=o.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(r,a)})})}_setPosition(e,t){let[o,r]=e.xPosition==="before"?["end","start"]:["start","end"],[a,u]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[h,I]=[a,u],[X,ye]=[o,r],Fe=0;if(this._triggersSubmenu()){if(ye=o=e.xPosition==="before"?"start":"end",r=X=o==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Gt=this._parentMaterialMenu.items.first;this._parentInnerPadding=Gt?Gt._getHostElement().offsetTop:0}Fe=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(h=a==="top"?"bottom":"top",I=u==="top"?"bottom":"top");t.withPositions([{originX:o,originY:h,overlayX:X,overlayY:a,offsetY:Fe},{originX:r,originY:h,overlayX:ye,overlayY:a,offsetY:Fe},{originX:o,originY:I,overlayX:X,overlayY:u,offsetY:-Fe},{originX:r,originY:I,overlayX:ye,overlayY:u,offsetY:-Fe}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),o=this._parentMaterialMenu?this._parentMaterialMenu.closed:Wo(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(he(a=>this._menuOpen&&a!==this._menuItemInstance)):Wo();return Ce(e,o,r,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new fn(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ei.get(e)===this}_triggerIsAriaDisabled(){return q(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Ta()};static \u0275dir=E({type:n})}return n})(),ps=(()=>{class n extends Wd{_cleanupTouchstart;_hoverSubscription=Qe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new W;onMenuOpen=this.menuOpened;menuClosed=new W;onMenuClose=this.menuClosed;constructor(){super(!0);let e=s(oe);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Ka(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){$a(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,o){t&1&&g("click",function(a){return o._handleClick(a)})("mousedown",function(a){return o._handleMousedown(a)})("keydown",function(a){return o._handleKeydown(a)}),t&2&&b("aria-haspopup",o.menu?"menu":null)("aria-expanded",o.menuOpen)("aria-controls",o.menuOpen?o.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[K]})}return n})();var oi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[_t,Jt,J,Rt]})}return n})();var Lt=class{constructor(i,e,t){this.id=i;this.name=e;this.schedule=t}id;name;schedule};var ri=class{constructor(i,e,t,o,r,a){this.numberOfSets=i;this.numberOfExercises=e;this.preparationTime=t;this.workoutTime=o;this.restTime=r;this.restTimeBetweenSets=a}numberOfSets;numberOfExercises;preparationTime;workoutTime;restTime;restTimeBetweenSets};var re=class n{static SIMPLE_WORKOUT;lastDeletedWorkout;selectedWorkout;workouts;translations=s(Z);localStoragePersistenceService=s(wn);signals=s(ae);constructor(){n.SIMPLE_WORKOUT=new Lt("quick_workout",this.translations.exampleWorkoutName,new ri(6,6,15,30,30,60)),this.selectedWorkout=this.signals.selectedWorkout.toSignal(),this.workouts=this.signals.workouts.toSignal();let i=this.localStoragePersistenceService.getStoredWorkouts(),e=this.localStoragePersistenceService.getStoredWorkoutSession();i&&this.signals.workouts.update(()=>i);let t=this.workouts().length?this.isWorkoutPresent(e?.lastWorkoutId)?e?.lastWorkoutId:this.workouts()[0].id:void 0;t&&this.selectWorkout(t)}selectWorkout(i){let e=this.workouts().find(t=>t.id===i);e&&this.signals.selectedWorkout.update(()=>e)}updateWorkout(i){let e=this.workouts().findIndex(t=>t.id===i.id);e>=0&&(this.signals.workouts.update(t=>{let o=[...t];return o.splice(e,1,i),o}),this.signals.selectedWorkout.update(()=>i),this.localStoragePersistenceService.persistWorkouts(this.workouts()))}addWorkout(i){i.id=crypto.randomUUID(),this.signals.workouts.update(e=>[...e,i]),this.signals.selectedWorkout.update(()=>i),this.localStoragePersistenceService.persistWorkouts(this.workouts())}deleteCurrentWorkout(){this.selectedWorkout()&&(this.lastDeletedWorkout=this.selectedWorkout(),this.deleteWorkout(this.selectedWorkout().id))}deleteWorkout(i){let e=this.workouts().findIndex(t=>t.id===i);e>=0&&(this.signals.workouts.update(t=>{let o=[...t];return o.splice(e,1),o}),this.signals.selectedWorkout.update(()=>this.workouts().length>0?this.workouts()[0]:void 0),this.localStoragePersistenceService.persistWorkouts(this.workouts()))}restoreLastDeletedWorkout(){this.lastDeletedWorkout&&(this.addWorkout(this.lastDeletedWorkout),this.localStoragePersistenceService.persistWorkouts(this.workouts()),this.lastDeletedWorkout=void 0)}saveCurrentWorkoutSession(){let i=this.selectedWorkout()?.id;i&&this.localStoragePersistenceService.persistWorkoutSession(i)}isWorkoutPresent(i){let e=!1;return i&&(e=!!this.workouts()?.find(o=>o.id===i)),e}static \u0275fac=function(e){return new(e||n)};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ud=["*",[["mat-toolbar-row"]]],Hd=["*","mat-toolbar-row"],qd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Pn=(()=>{class n{_elementRef=s(R);_platform=s(_e);_document=s(qe);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,o,r){if(t&1&&Me(r,qd,5),t&2){let a;x(a=k())&&(o._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,o){t&2&&(de(o.color?"mat-"+o.color:""),O("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Hd,decls:2,vars:0,template:function(t,o){t&1&&(U(Ud),S(0),S(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return n})();var Tn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[J]})}return n})();var En=class n extends Z{navigationDrawerButtonLabel=$localize`:Navigation drawer button label@@navigationDrawerButtonLabel:Navigate`;navigationDrawerButtonLabelDescriptionLabel=$localize`:Longer description of Navigation drawer button@@navigationDrawerButtonLabelDescriptionLabel:Navigation Menu`;startWorkoutButtonLabel=$localize`:Start button label@@startWorkoutButtonLabel:Start`;startWorkoutButtonDescriptionLabel=$localize`:Longer description of Start button@@startWorkoutButtonDescriptionLabel:Start Workout`;settingsIconButtonDescriptionLabel=$localize`:Settings button description@@settingsIconButtonDescriptionLabel:Settings`;moreMenuDescriptionLabel=$localize`:More menu description@@moreMenuDescriptionLabel:More`;editWorkoutIconButtonLabel=$localize`:Edit button label@@editWorkoutIconButtonLabel:Edit`;editWorkoutIconButtonDescriptionLabel=$localize`:Longer description of Edit button@@editWorkoutIconButtonDescriptionLabel:Edit Workout`;deleteWorkoutIconButtonLabel=$localize`:Delete button label@@deleteWorkoutIconButtonLabel:Delete`;deleteWorkoutIconButtonDescriptionLabel=$localize`:Longer description of Delete button@@deleteWorkoutIconButtonDescriptionLabel:Delete Workout`;newWorkoutIconButtonLabel=$localize`:New button label@@newWorkoutIconButtonLabel:New`;newWorkoutIconButtonDescriptionLabel=$localize`:Longer description of New button@@newWorkoutIconButtonDescriptionLabel:New workout`;restoreWorkoutButtonLabel=$localize`:Restore button label@@restoreWorkoutButtonLabel:Restore`;workoutDeletedLabel=$localize`:User has just deleted a workout@@workoutDeletedLabel:Workout deleted.`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var In=class n extends Z{saveSettingsButtonLabel=$localize`:Save button label@@saveSettingsButtonLabel:Save`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var ws=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(Y(oe),Y(R))};static \u0275dir=E({type:n})}return n})(),Gd=(()=>{class n extends ws{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=E({type:n,features:[K]})}return n})(),st=new w("");var $d={provide:st,useExisting:ze(()=>Un),multi:!0};function Kd(){let n=$o()?$o().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Qd=new w(""),Un=(()=>{class n extends ws{_compositionMode;_composing=!1;constructor(e,t,o){super(e,t),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Kd())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(Y(oe),Y(R),Y(Qd,8))};static \u0275dir=E({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,o){t&1&&g("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[H([$d]),K]})}return n})();function nr(n){return n==null||or(n)===0}function or(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var lt=new w(""),Hn=new w(""),Xd=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,tt=class{static min(i){return Yd(i)}static max(i){return Zd(i)}static required(i){return Cs(i)}static requiredTrue(i){return Jd(i)}static email(i){return ec(i)}static minLength(i){return tc(i)}static maxLength(i){return ic(i)}static pattern(i){return nc(i)}static nullValidator(i){return Fn()}static compose(i){return Ds(i)}static composeAsync(i){return Ps(i)}};function Yd(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function Zd(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function Cs(n){return nr(n.value)?{required:!0}:null}function Jd(n){return n.value===!0?null:{required:!0}}function ec(n){return nr(n.value)||Xd.test(n.value)?null:{email:!0}}function tc(n){return i=>{let e=i.value?.length??or(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function ic(n){return i=>{let e=i.value?.length??or(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function nc(n){if(!n)return Fn;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(nr(t.value))return null;let o=t.value;return i.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function Fn(n){return null}function xs(n){return n!=null}function ks(n){return Ho(n)?ba(n):n}function Ms(n){let i={};return n.forEach(e=>{i=e!=null?V(V({},i),e):i}),Object.keys(i).length===0?null:i}function Ss(n,i){return i.map(e=>e(n))}function oc(n){return!n.validate}function Os(n){return n.map(i=>oc(i)?i:e=>i.validate(e))}function Ds(n){if(!n)return null;let i=n.filter(xs);return i.length==0?null:function(e){return Ms(Ss(e,i))}}function rr(n){return n!=null?Ds(Os(n)):null}function Ps(n){if(!n)return null;let i=n.filter(xs);return i.length==0?null:function(e){let t=Ss(e,i).map(ks);return va(t).pipe(Xe(Ms))}}function ar(n){return n!=null?Ps(Os(n)):null}function gs(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function Ts(n){return n._rawValidators}function Es(n){return n._rawAsyncValidators}function tr(n){return n?Array.isArray(n)?n:[n]:[]}function Rn(n,i){return Array.isArray(n)?n.includes(i):n===i}function _s(n,i){let e=tr(i);return tr(n).forEach(o=>{Rn(e,o)||e.push(o)}),e}function bs(n,i){return tr(i).filter(e=>!Rn(n,e))}var Ln=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=rr(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=ar(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},wt=class extends Ln{name;get formDirective(){return null}get path(){return null}};var Ni="VALID",An="INVALID",ai="PENDING",Vi="DISABLED",Ct=class{},Nn=class extends Ct{value;source;constructor(i,e){super(),this.value=i,this.source=e}},zi=class extends Ct{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Wi=class extends Ct{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},si=class extends Ct{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Vn=class extends Ct{source;constructor(i){super(),this.source=i}},li=class extends Ct{source;constructor(i){super(),this.source=i}};function Is(n){return(qn(n)?n.validators:n)||null}function rc(n){return Array.isArray(n)?rr(n):n||null}function As(n,i){return(qn(i)?i.asyncValidators:n)||null}function ac(n){return Array.isArray(n)?ar(n):n||null}function qn(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function sc(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new pe(1e3,"");if(!Fs(t,e))throw new pe(1001,"")}function lc(n,i,e){n._forEachChild((t,o)=>{if(e[o]===void 0)throw new pe(-1002,"")})}var di=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=M(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return N(this.statusReactive)}set status(i){N(()=>this.statusReactive.set(i))}_status=p(()=>this.statusReactive());statusReactive=M(void 0);get valid(){return this.status===Ni}get invalid(){return this.status===An}get pending(){return this.status===ai}get disabled(){return this.status===Vi}get enabled(){return this.status!==Vi}errors;get pristine(){return N(this.pristineReactive)}set pristine(i){N(()=>this.pristineReactive.set(i))}_pristine=p(()=>this.pristineReactive());pristineReactive=M(!0);get dirty(){return!this.pristine}get touched(){return N(this.touchedReactive)}set touched(i){N(()=>this.touchedReactive.set(i))}_touched=p(()=>this.touchedReactive());touchedReactive=M(!1);get untouched(){return!this.touched}_events=new L;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(_s(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(_s(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(bs(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(bs(i,this._rawAsyncValidators))}hasValidator(i){return Rn(this._rawValidators,i)}hasAsyncValidator(i){return Rn(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(ge(V({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Wi(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Wi(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(ge(V({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new zi(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new zi(!0,t))}markAsPending(i={}){this.status=ai;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new si(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(ge(V({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Vi,this.errors=null,this._forEachChild(o=>{o.disable(ge(V({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Nn(this.value,t)),this._events.next(new si(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ge(V({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ni,this._forEachChild(t=>{t.enable(ge(V({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ge(V({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ni||this.status===ai)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Nn(this.value,e)),this._events.next(new si(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(ge(V({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Vi:Ni}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=ai,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=ks(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,o)=>t&&t._find(o),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new si(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?Vi:this.errors?An:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ai)?ai:this._anyControlsHaveStatus(An)?An:Ni}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),o=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),o&&this._events.next(new zi(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Wi(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){qn(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=rc(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=ac(this._rawAsyncValidators)}_updateHasRequiredValidator(){N(()=>this._hasRequired.set(this.hasValidator(tt.required)))}};function Fs(n,i){return Object.hasOwn(n,i)}function sr(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function Rs(n){if(n.tagName!=="INPUT")return!1;let i=n.type;return i==="number"||i==="range"||i==="date"||i==="month"}function Ls(n){return n.tagName==="INPUT"||n.tagName==="TEXTAREA"}function ji(n,i,e,t){switch(e){case"name":n.setAttribute(i,e,t);break;case"disabled":case"readonly":case"required":t?n.setAttribute(i,e,""):n.removeAttribute(i,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?n.setAttribute(i,e,t.toString()):n.removeAttribute(i,e);break}}var ir=class{kind;context;control;message;constructor({kind:i,context:e,control:t}){this.kind=i,this.context=e,this.control=t}};var dc=(()=>{class n{_validator=Fn;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Fn,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,features:[Re]})}return n})();var cc={provide:lt,useExisting:ze(()=>Ns),multi:!0};var Ns=(()=>{class n extends dc{required;inputName="required";normalizeInput=q;createValidator=e=>Cs;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=E({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,o){t&2&&b("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[H([cc]),K]})}return n})();var lr=new w(""),Ui=new w("",{factory:()=>Gn}),Gn="always";function mc(n,i){return[...i.path,n]}function Vs(n,i,e=Gn){dr(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),hc(n,i),fc(n,i),pc(n,i),uc(n,i)}function Bn(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),Wn(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function zn(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function uc(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function dr(n,i){let e=Ts(n);i.validator!==null?n.setValidators(gs(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=Es(n);i.asyncValidator!==null?n.setAsyncValidators(gs(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let o=()=>n.updateValueAndValidity();zn(i._rawValidators,o),zn(i._rawAsyncValidators,o)}function Wn(n,i){let e=!1;if(n!==null){if(i.validator!==null){let o=Ts(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==i.validator);r.length!==o.length&&(e=!0,n.setValidators(r))}}if(i.asyncValidator!==null){let o=Es(n);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==i.asyncValidator);r.length!==o.length&&(e=!0,n.setAsyncValidators(r))}}}let t=()=>{};return zn(i._rawValidators,t),zn(i._rawAsyncValidators,t),e}function hc(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Bs(n,i)})}function pc(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Bs(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function Bs(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function fc(n,i){let e=(t,o)=>{i.valueAccessor.writeValue(t),o&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function zs(n,i){n==null,dr(n,i)}function gc(n,i){return Wn(n,i)}function Ws(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function _c(n){return Object.getPrototypeOf(n.constructor)===Gd}function js(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function cr(n,i){if(!i)return null;Array.isArray(i);let e,t,o;return i.forEach(r=>{r.constructor===Un?e=r:_c(r)?t=r:o=r}),o||t||e||null}function bc(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var Us={provide:lr,useFactory:()=>{let n=s(Ie,{self:!0});return{setParseErrors:i=>{n.setParseErrorSource(i)},set onReset(i){n.onReset=i}}}},Ie=class extends Ln{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(i){this.userOnReset=i,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof li&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=cr(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(i,e,t){super(),this.injector=i,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(Qt)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let i=this.injector?.get(ie);if(!this.control||!i)return;let e=i.markForCheck.bind(i);this.subscription=new Qe,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof li&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(i){!i.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!i.customControl||(this.isCustomControlBased=!0,i.listenToCustomControlModel(o=>{this.control?.setValue(o,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(o)}),i.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=sr(i.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof Ns))}ngControlUpdate(i,e){if(!this.isCustomControlBased)return;let t=this.control,o=this.customControlBindings;Object.is(o.value,t.value)||(o.value=t.value,i.setCustomControlModelInput(t.value)),this.bindControlProperty(i,o,"touched",t.touched),this.bindControlProperty(i,o,"dirty",t.dirty),this.bindControlProperty(i,o,"valid",t.valid),this.bindControlProperty(i,o,"invalid",t.invalid),this.bindControlProperty(i,o,"pending",t.pending),this.bindControlProperty(i,o,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(i,o,"required",this.isRequired);let r=t.errors;if(o.errors!==r){o.errors=r;let a=this._convertErrors(r);i.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(i,e,t,o){if(e[t]===o)return;e[t]=o;let r=i.setInputOnDirectives(t,o);this.isNativeFormElement&&!r&&(t==="disabled"||t==="required")&&this.renderer&&ji(this.renderer,i.nativeElement,t,o)}_convertErrors(i){if(i===null)return[];let e=this.control;return Object.entries(i).map(([t,o])=>new ir({context:o,kind:t,control:e}))}setParseErrorSource(i){if(i===void 0)return;let e=null,t=p(()=>{let o=i();return o.length===0?null:o.reduce((r,a)=>(r[a.kind]=a,r),{})});this.parseErrorsValidator=(()=>e).bind(this),te(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(i){this.parseErrorsValidator&&(i?.removeValidators(this.parseErrorsValidator),i?.updateValueAndValidity({emitEvent:!1}))}},jn=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Hs=(()=>{class n extends jn{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(Y(Ie,2))};static \u0275dir=E({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,o){t&2&&O("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[K]})}return n})(),qs=(()=>{class n extends jn{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(Y(wt,10))};static \u0275dir=E({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,o){t&2&&O("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[K]})}return n})(),Nt=class extends di{constructor(i,e,t){super(Is(e),As(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){let t=this._find(i);return t||(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){let t=this._find(i);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){let o=this._find(i);o&&o._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this._find(i)?.enabled===!0}setValue(i,e={}){N(()=>{lc(this,!0,i),Object.keys(i).forEach(t=>{sc(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let o=this._find(t);o&&o.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,o)=>{t.reset(i?i[o]:null,ge(V({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new li(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,o)=>((t.enabled||this.disabled)&&(e[o]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((o,r)=>{t=e(t,o,r)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return Fs(this.controls,i)?this.controls[i]:null}};var vc={provide:wt,useExisting:ze(()=>Hi)},Bi=Promise.resolve(),Hi=(()=>{class n extends wt{callSetDisabledState;get submitted(){return N(this.submittedReactive)}_submitted=p(()=>this.submittedReactive());submittedReactive=M(!1);_directives=new Set;form;ngSubmit=new W;options;constructor(e,t,o){super(),this.callSetDisabledState=o,this.form=new Nt({},rr(e),ar(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Bi.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Bi.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Bi.then(()=>{let t=this._findContainer(e.path),o=new Nt({});zs(o,e),t.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Bi.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Bi.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),js(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Vn(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(Y(lt,10),Y(Hn,10),Y(Ui,8))};static \u0275dir=E({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,o){t&1&&g("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[H([vc]),K]})}return n})();function vs(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function ys(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Vt=class extends di{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(Is(e),As(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),qn(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ys(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){N(()=>{this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new li(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){vs(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){vs(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){ys(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var yc=n=>n instanceof Vt;var Gs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var wc=(()=>{class n extends wt{callSetDisabledState;get submitted(){return N(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=p(()=>this._submittedReactive());_submittedReactive=M(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Wn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Bn(e.control||null,e,!1),bc(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,js(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Vn(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,o=this.form.get(e.path);t!==o&&(Bn(t||null,e),yc(o)&&e._setupWithForm(o,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);zs(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&gc(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){dr(this.form,this),this._oldForm&&Wn(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(Y(lt,10),Y(Hn,10),Y(Ui,8))};static \u0275dir=E({type:n,features:[K,Re]})}return n})();var mr=new w(""),Cc={provide:Ie,useExisting:ze(()=>ur)},ur=(()=>{class n extends Ie{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new W;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,o,r,a,u,h){super(h,u,o),this._ngModelWarningConfig=r,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&(Bn(t,this,!1),this.removeParseErrorsValidator(t)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Vs(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:!1})}Ws(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Bn(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!0)}static \u0275fac=function(t){return new(t||n)(Y(lt,10),Y(Hn,10),Y(st,10),Y(mr,8),Y(Ui,8),Y(oe,8),Y($,8))};static \u0275dir=E({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[H([Cc,Us]),K,Re,Pi(null)]})}return n})();var xc={provide:Ie,useExisting:ze(()=>hr)},hr=(()=>{class n extends Ie{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new W;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,o,r,a,u,h){super(h,u,r),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(o)}_setupWithForm(e,t){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Vs(e,this,t))}ngOnChanges(e){this._added||this._setUpControl(),Ws(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return mc(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static \u0275fac=function(t){return new(t||n)(Y(wt,13),Y(lt,10),Y(Hn,10),Y(st,10),Y(mr,8),Y(oe,8),Y($,8))};static \u0275dir=E({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[H([xc,Us]),K,Re,Pi(null)]})}return n})();var kc={provide:wt,useExisting:ze(()=>Bt)},Bt=(()=>{class n extends wc{form=null;ngSubmit=new W;get control(){return this.form}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=E({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,o){t&1&&g("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[H([kc]),K]})}return n})();var $s=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({})}return n})();var Ks=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Ui,useValue:e.callSetDisabledState??Gn}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[$s]})}return n})(),Qs=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:mr,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ui,useValue:e.callSetDisabledState??Gn}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[$s]})}return n})();var pr=class{_box;_destroyed=new L;_resizeSubject=new L;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new nn(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(he(e=>e.some(t=>t.target===i)),ka({bufferSize:1,refCount:!0}),ne(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Xs=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(ee);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new pr(o)),this._observers.get(o).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})();var Sc=["notch"],Oc=["*"],Ys=["iconPrefixContainer"],Zs=["textPrefixContainer"],Js=["iconSuffixContainer"],el=["textSuffixContainer"],Dc=["textField"],Pc=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Tc=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Ec(n,i){n&1&&C(0,"span",21)}function Ic(n,i){if(n&1&&(l(0,"label",20),S(1,1),P(2,Ec,1,0,"span",21),d()),n&2){let e=y(2);f("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),b("for",e._control.disableAutomaticLabeling?null:e._control.id),c(2),T(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ac(n,i){if(n&1&&P(0,Ic,3,5,"label",20),n&2){let e=y();T(e._hasFloatingLabel()?0:-1)}}function Fc(n,i){n&1&&C(0,"div",7)}function Rc(n,i){}function Lc(n,i){if(n&1&&$e(0,Rc,0,0,"ng-template",13),n&2){y(2);let e=Ye(1);f("ngTemplateOutlet",e)}}function Nc(n,i){if(n&1&&(l(0,"div",9),P(1,Lc,1,1,null,13),d()),n&2){let e=y();f("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),c(),T(e._forceDisplayInfixLabel()?-1:1)}}function Vc(n,i){n&1&&(l(0,"div",10,2),S(2,2),d())}function Bc(n,i){n&1&&(l(0,"div",11,3),S(2,3),d())}function zc(n,i){}function Wc(n,i){if(n&1&&$e(0,zc,0,0,"ng-template",13),n&2){y();let e=Ye(1);f("ngTemplateOutlet",e)}}function jc(n,i){n&1&&(l(0,"div",14,4),S(2,4),d())}function Uc(n,i){n&1&&(l(0,"div",15,5),S(2,5),d())}function Hc(n,i){n&1&&C(0,"div",16)}function qc(n,i){n&1&&(l(0,"div",18),S(1,6),d())}function Gc(n,i){if(n&1&&(l(0,"mat-hint",22),m(1),d()),n&2){let e=y(2);f("id",e._hintLabelId),c(),v(e.hintLabel)}}function $c(n,i){if(n&1&&(l(0,"div",19),P(1,Gc,2,2,"mat-hint",22),S(2,7),C(3,"div",23),S(4,8),d()),n&2){let e=y();c(),T(e.hintLabel?1:-1)}}var zt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["mat-label"]]})}return n})(),Kc=new w("MatError");var fr=(()=>{class n{align="start";id=s(we).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(We("id",o.id),b("align",null),O("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Qc=new w("MatPrefix");var sl=new w("MatSuffix"),gr=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[H([{provide:sl,useExisting:n}])]})}return n})(),ll=new w("FloatingLabelParent"),tl=(()=>{class n{_elementRef=s(R);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Xs);_ngZone=s(ee);_parent=s(ll);_resizeSubscription=new Qe;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Xc(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&O("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Xc(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var il="mdc-line-ripple--active",$n="mdc-line-ripple--deactivating",nl=(()=>{class n{_elementRef=s(R);_cleanupTransitionEnd;constructor(){let e=s(ee),t=s(oe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove($n),e.add(il)}deactivate(){this._elementRef.nativeElement.classList.add($n)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains($n);e.propertyName==="opacity"&&o&&t.remove(il,$n)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),ol=(()=>{class n{_elementRef=s(R);_ngZone=s(ee);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,o){if(t&1&&fe(Sc,5),t&2){let r;x(r=k())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,o){t&2&&O("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:Oc,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,o){t&1&&(U(),Et(0,"div",1),Le(1,"div",2,0),S(3),Ne(),Et(4,"div",3))},encapsulation:2})}return n})(),qi=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n})}return n})();var Gi=new w("MatFormField"),Yc=new w("MAT_FORM_FIELD_DEFAULT_OPTIONS"),rl="fill",Zc="auto",al="fixed",Jc="translateY(-50%)",ci=(()=>{class n{_elementRef=s(R);_changeDetectorRef=s(ie);_platform=s(_e);_idGenerator=s(we);_ngZone=s(ee);_defaults=s(Yc,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Je("iconPrefixContainer");_textPrefixContainerSignal=Je("textPrefixContainer");_iconSuffixContainerSignal=Je("iconSuffixContainer");_textSuffixContainerSignal=Je("textSuffixContainer");_prefixSuffixContainers=p(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Wa(zt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ce(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Zc}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||rl;this._appearanceSignal.set(t)}_appearanceSignal=M(rl);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||al}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||al}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new L;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=be();constructor(){let e=this._defaults,t=s(Ve);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),te(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=p(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(xe([void 0,void 0]),Xe(()=>[t.errorState,t.userAriaDescribedBy]),xa(),he(([[r,a],[u,h]])=>r!==u||a!==h)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ne(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ce(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Zt({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=p(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(u=>u.align==="start"):null,a=this._hintChildren?this._hintChildren.find(u=>u.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,o;if(t){let r=this._describedByIds||e;o=e.concat(t.filter(a=>a&&!r.includes(a)))}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,u=t?.getBoundingClientRect().width??0,h=o?.getBoundingClientRect().width??0,I=r?.getBoundingClientRect().width??0,X=this._currentDirection==="rtl"?"-1":"1",ye=`${a+u}px`,Gt=`calc(${X} * (${ye} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,He=`var(--mat-mdc-form-field-label-transform, ${Jc} translateX(${Gt}))`,tn=a+u+h+I;return[He,tn]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,o,r){if(t&1&&(La(r,o._labelChild,zt,5),Me(r,qi,5)(r,Qc,5)(r,sl,5)(r,Kc,5)(r,fr,5)),t&2){It();let a;x(a=k())&&(o._formFieldControl=a.first),x(a=k())&&(o._prefixChildren=a),x(a=k())&&(o._suffixChildren=a),x(a=k())&&(o._errorChildren=a),x(a=k())&&(o._hintChildren=a)}},viewQuery:function(t,o){if(t&1&&(Xt(o._iconPrefixContainerSignal,Ys,5)(o._textPrefixContainerSignal,Zs,5)(o._iconSuffixContainerSignal,Js,5)(o._textSuffixContainerSignal,el,5),fe(Dc,5)(Ys,5)(Zs,5)(Js,5)(el,5)(tl,5)(ol,5)(nl,5)),t&2){It(4);let r;x(r=k())&&(o._textField=r.first),x(r=k())&&(o._iconPrefixContainer=r.first),x(r=k())&&(o._textPrefixContainer=r.first),x(r=k())&&(o._iconSuffixContainer=r.first),x(r=k())&&(o._textSuffixContainer=r.first),x(r=k())&&(o._floatingLabel=r.first),x(r=k())&&(o._notchedOutline=r.first),x(r=k())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,o){t&2&&O("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[H([{provide:Gi,useExisting:n},{provide:ll,useExisting:n}])],ngContentSelectors:Tc,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,o){if(t&1&&(U(Pc),$e(0,Ac,1,1,"ng-template",null,0,Go),l(2,"div",6,1),g("click",function(a){return o._control.onContainerClick(a)}),P(4,Fc,1,0,"div",7),l(5,"div",8),P(6,Nc,2,2,"div",9),P(7,Vc,3,0,"div",10),P(8,Bc,3,0,"div",11),l(9,"div",12),P(10,Wc,1,1,null,13),S(11),d(),P(12,jc,3,0,"div",14),P(13,Uc,3,0,"div",15),d(),P(14,Hc,1,0,"div",16),d(),l(15,"div",17),P(16,qc,2,0,"div",18)(17,$c,5,1,"div",19),d()),t&2){let r;c(2),O("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),c(2),T(!o._hasOutline()&&!o._control.disabled?4:-1),c(2),T(o._hasOutline()?6:-1),c(),T(o._hasIconPrefix?7:-1),c(),T(o._hasTextPrefix?8:-1),c(2),T(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),c(2),T(o._hasTextSuffix?12:-1),c(),T(o._hasIconSuffix?13:-1),c(),T(o._hasOutline()?-1:14),c(),O("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();c(),T((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[tl,ol,Ua,nl,fr],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return n})();var dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[mn,ci,J]})}return n})();var em=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})(),tm={passive:!0},cl=(()=>{class n{_platform=s(_e);_ngZone=s(ee);_renderer=s(Pa).createRenderer(null,null);_styleLoader=s(je);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return _a;this._styleLoader.load(em);let t=Ko(e),o=this._monitoredElements.get(t);if(o)return o.subject;let r=new L,a="cdk-text-field-autofilled",u=I=>{I.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:I.target,isAutofilled:!0}))):I.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:I.target,isAutofilled:!1})))},h=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",u,tm)));return this._monitoredElements.set(t,{subject:r,unlisten:h}),r}stopMonitoring(e){let t=Ko(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})();var ml=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({})}return n})();var ul=new w("MAT_INPUT_VALUE_ACCESSOR");var Kn=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})();var mi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,o,r){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=r}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(o,e)??!1;r!==i&&(this.errorState=r,this._stateChanges.next())}};var im=["button","checkbox","file","hidden","image","radio","range","reset","submit"],nm=new w("MAT_INPUT_CONFIG"),hl=(()=>{class n{_elementRef=s(R);_platform=s(_e);ngControl=s(Ie,{optional:!0,self:!0});_autofillMonitor=s(cl);_ngZone=s(ee);_formField=s(Gi,{optional:!0});_renderer=s(oe);_uid=s(we).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(nm,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new L;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ce(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(tt.required)??!1}set required(e){this._required=ce(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Qo().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ce(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Qo().has(e));constructor(){let e=s(Hi,{optional:!0}),t=s(Bt,{optional:!0}),o=s(Kn),r=s(ul,{optional:!0,self:!0}),a=this._elementRef.nativeElement,u=a.nodeName.toLowerCase();r?rn(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new mi(o,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=u==="select",this._isTextarea=u==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&te(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){im.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&g("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),t&2&&(We("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),b("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),O("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",q]},exportAs:["matInput"],features:[H([{provide:qi,useExisting:n}]),Re]})}return n})(),Qn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[dt,dt,ml,J]})}return n})();var $i=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new L;constructor(i=!1,e,t=!0,o){this._multiple=i,this._emitChanges=t,this.compareWith=o,e&&e.length&&(i?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var pl=(()=>{class n{_animationsDisabled=be();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&O("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return n})();var rm=["text"],am=[[["mat-icon"]],"*"],sm=["mat-icon","*"];function lm(n,i){if(n&1&&C(0,"mat-pseudo-checkbox",1),n&2){let e=y();f("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function dm(n,i){if(n&1&&C(0,"mat-pseudo-checkbox",3),n&2){let e=y();f("disabled",e.disabled)}}function cm(n,i){if(n&1&&(l(0,"span",4),m(1),d()),n&2){let e=y();c(),G("(",e.group.label,")")}}var br=new w("MAT_OPTION_PARENT_COMPONENT"),vr=new w("MatOptgroup");var _r=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},ui=(()=>{class n{_element=s(R);_changeDetectorRef=s(ie);_parent=s(br,{optional:!0});group=s(vr,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(we).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=M(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new W;_text;_stateChanges=new L;constructor(){let e=s(je);e.load(et),e.load(Xa),this._signalDisableRipple=!!this._parent&&rn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Te(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new _r(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-option"]],viewQuery:function(t,o){if(t&1&&fe(rm,7),t&2){let r;x(r=k())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,o){t&1&&g("click",function(){return o._selectViaInteraction()})("keydown",function(a){return o._handleKeydown(a)}),t&2&&(We("id",o.id),b("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),O("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",q]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:sm,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,o){t&1&&(U(am),P(0,lm,1,2,"mat-pseudo-checkbox",1),S(1),l(2,"span",2,0),S(4,1),d(),P(5,dm,1,1,"mat-pseudo-checkbox",3),P(6,cm,2,1,"span",4),C(7,"div",5)),t&2&&(T(o.multiple?0:-1),c(5),T(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),c(),T(o.group&&o.group._inert?6:-1),c(),f("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[pl,at],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return n})();function fl(n,i,e){if(e.length){let t=i.toArray(),o=e.toArray(),r=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===o[r]&&r++;return r}return 0}function gl(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var Xn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[J]})}return n})();var yr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[_t,Xn,ui,J]})}return n})();var um=["trigger"],hm=["panel"],pm=[[["mat-select-trigger"]],"*"],fm=["mat-select-trigger","*"];function gm(n,i){if(n&1&&(l(0,"span",4),m(1),d()),n&2){let e=y();c(),v(e.placeholder)}}function _m(n,i){n&1&&S(0)}function bm(n,i){if(n&1&&(l(0,"span",11),m(1),d()),n&2){let e=y(2);c(),v(e.triggerValue)}}function vm(n,i){if(n&1&&(l(0,"span",5),P(1,_m,1,0)(2,bm,2,1,"span",11),d()),n&2){let e=y();c(),T(e.customTrigger?1:2)}}function ym(n,i){if(n&1){let e=ke();l(0,"div",12,1),g("keydown",function(o){se(e);let r=y();return le(r._handleKeydown(o))}),S(2,1),d()}if(n&2){let e=y();de(e.panelClass),O("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),b("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var wm=new w("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s($);return()=>_n(n)}}),Cm=new w("MAT_SELECT_CONFIG"),xm=new w("MatSelectTrigger"),wr=class{source;value;constructor(i,e){this.source=i,this.value=e}},_l=(()=>{class n{_viewportRuler=s(Fi);_changeDetectorRef=s(ie);_elementRef=s(R);_dir=s(Ve,{optional:!0});_idGenerator=s(we);_renderer=s(oe);_parentFormField=s(Gi,{optional:!0});ngControl=s(Ie,{self:!0,optional:!0});_liveAnnouncer=s(Za);_defaultOptions=s(Cm,{optional:!0});_animationsDisabled=be();_popoverLocation;_initialized=new L;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let o=this.panel.nativeElement,r=fl(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&r===1?o.scrollTop=0:o.scrollTop=gl(a.offsetTop,a.offsetHeight,o.scrollTop,o.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new wr(this,e)}_scrollStrategyFactory=s(wm);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new L;_errorStateTracker;stateChanges=new L;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=M(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(tt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=$t(()=>{let e=this.options;return e?e.changes.pipe(xe(e),Kt(()=>Ce(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Kt(()=>this.optionSelectionChanges))});openedChange=new W;_openedStream=this.openedChange.pipe(he(e=>e),Xe(()=>{}));_closedStream=this.openedChange.pipe(he(e=>!e),Xe(()=>{}));selectionChange=new W;valueChange=new W;constructor(){let e=s(Kn),t=s(Hi,{optional:!0}),o=s(Bt,{optional:!0}),r=s(new ln("tabindex"),{optional:!0}),a=s(ss,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new mi(e,this.ngControl,o,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new $i(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ne(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ne(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(xe(null),ne(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute("aria-labelledby",e):o.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Se(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(o),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,o=t===40||t===38||t===37||t===39,r=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&r&&!Te(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let u=this.selected;a.onKeydown(e);let h=this.selected;h&&u!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,o=e.keyCode,r=o===40||o===38,a=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!a&&(o===13||o===32)&&t.activeItem&&!Te(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let u=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(u?h.select():h.deselect())})}else{let u=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==u&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Te(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Yo?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ja(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ce(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ne(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ce(...this.options.map(t=>t._stateChanges)).pipe(ne(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,o)=>this.sortComparator?this.sortComparator(t,o,e):e.indexOf(t)-e.indexOf(o)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(o=>o.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Qa(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-select"]],contentQueries:function(t,o,r){if(t&1&&Me(r,xm,5)(r,ui,5)(r,vr,5),t&2){let a;x(a=k())&&(o.customTrigger=a.first),x(a=k())&&(o.options=a),x(a=k())&&(o.optionGroups=a)}},viewQuery:function(t,o){if(t&1&&fe(um,5)(hm,5)(Zo,5),t&2){let r;x(r=k())&&(o.trigger=r.first),x(r=k())&&(o.panel=r.first),x(r=k())&&(o._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,o){t&1&&g("keydown",function(a){return o._handleKeydown(a)})("focus",function(){return o._onFocus()})("blur",function(){return o._onBlur()}),t&2&&(b("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),O("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",q],disableRipple:[2,"disableRipple","disableRipple",q],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Pe(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",q],placeholder:"placeholder",required:[2,"required","required",q],multiple:[2,"multiple","multiple",q],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",q],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Pe],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",q]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[H([{provide:qi,useExisting:n},{provide:br,useExisting:n}]),Re],ngContentSelectors:fm,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,o){if(t&1&&(U(pm),l(0,"div",2,0),g("click",function(){return o.open()}),l(3,"div",3),P(4,gm,2,1,"span",4)(5,vm,3,1,"span",5),d(),l(6,"div",6)(7,"div",7),nt(),l(8,"svg",8),C(9,"path",9),d()()()(),$e(10,ym,3,16,"ng-template",10),g("detach",function(){return o.close()})("backdropClick",function(){return o.close()})("overlayKeydown",function(a){return o._handleOverlayKeydown(a)})),t&2){let r=Ye(1);c(3),b("id",o._valueId),c(),T(o.empty?4:5),c(6),f("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation)}},dependencies:[Yo,Zo],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})();var bl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[Jt,yr,J,Rt,dt,yr]})}return n})();var Mm=["*"],vl=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,o){t&2&&O("mdc-form-field--align-end",o.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:Mm,decls:1,vars:0,template:function(t,o){t&1&&(U(),S(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return n})();var Sm=["switch"],Om=["*"];function Dm(n,i){n&1&&(l(0,"span",11),nt(),l(1,"svg",13),C(2,"path",14),d(),l(3,"svg",15),C(4,"path",16),d()())}var Pm=new w("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Yn=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},Cr=(()=>{class n{_elementRef=s(R);_focusMonitor=s(rt);_changeDetectorRef=s(ie);defaults=s(Pm);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Yn(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=be();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new W;toggleChange=new W;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(je).load(et);let e=s(new ln("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=s(we).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Yn(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,o){if(t&1&&fe(Sm,5),t&2){let r;x(r=k())&&(o._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,o){t&2&&(We("id",o.id),b("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),de(o.color?"mat-"+o.color:""),O("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",q],color:"color",disabled:[2,"disabled","disabled",q],disableRipple:[2,"disableRipple","disableRipple",q],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Pe(e)],checked:[2,"checked","checked",q],hideIcon:[2,"hideIcon","hideIcon",q],disabledInteractive:[2,"disabledInteractive","disabledInteractive",q]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[H([{provide:st,useExisting:ze(()=>n),multi:!0},{provide:lt,useExisting:n,multi:!0}]),Re],ngContentSelectors:Om,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,o){if(t&1&&(U(),l(0,"div",1)(1,"button",2,0),g("click",function(){return o._handleClick()}),C(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),C(8,"span",8),d(),l(9,"span",9),C(10,"span",10),d(),P(11,Dm,5,0,"span",11),d()()(),l(12,"label",12),g("click",function(a){return a.stopPropagation()}),S(13),d()()),t&2){let r=Ye(2);f("labelPosition",o.labelPosition),c(),O("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),f("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),b("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),c(9),f("matRippleTrigger",r)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),c(),T(o.hideIcon?-1:11),c(),f("for",o.buttonId),b("id",o._labelId)}},dependencies:[at,vl],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})(),yl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[Cr,J]})}return n})();var Em=["knob"],Im=["valueIndicatorContainer"];function Am(n,i){if(n&1&&(l(0,"div",2,1)(2,"div",5)(3,"span",6),m(4),d()()()),n&2){let e=y();c(4),v(e.valueIndicatorText)}}var Fm=["trackActive"],Rm=["*"];function Lm(n,i){if(n&1&&C(0,"div"),n&2){let e=i.$implicit,t=i.$index,o=y(3);de(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),ft("transform",o._calcTickMarkTransform(t))}}function Nm(n,i){if(n&1&&Pt(0,Lm,1,4,"div",8,Fa),n&2){let e=y(2);Tt(e._tickMarks)}}function Vm(n,i){if(n&1&&(l(0,"div",6,1),P(2,Nm,2,0),d()),n&2){let e=y();c(2),T(e._cachedWidth?2:-1)}}function Bm(n,i){if(n&1&&C(0,"mat-slider-visual-thumb",7),n&2){let e=y();f("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText)}}var F=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(F||{}),hi=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(hi||{}),xr=new w("_MatSlider"),wl=new w("_MatSliderThumb"),zm=new w("_MatSliderRangeThumb"),Cl=new w("_MatSliderVisualThumb");var Wm=(()=>{class n{_cdr=s(ie);_ngZone=s(ee);_slider=s(xr);_renderer=s(oe);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=s(R).nativeElement;_platform=s(_e);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,o=this._renderer;this._listenerCleanups=[o.listen(t,"pointermove",this._onPointerMove),o.listen(t,"pointerdown",this._onDragStart),o.listen(t,"pointerup",this._onDragEnd),o.listen(t,"pointerleave",this._onMouseLeave),o.listen(t,"focus",this._onFocus),o.listen(t,"blur",this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),o=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=o,o?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused")};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused")};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"))}_isShowingRipple(e){return e?.state===Xo.FADING_IN||e?.state===Xo.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===F.START?F.END:F.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator")}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator")}_getSibling(){return this._slider._getThumb(this.thumbPosition===F.START?F.END:F.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,o){if(t&1&&fe(at,5)(Em,5)(Im,5),t&2){let r;x(r=k())&&(o._ripple=r.first),x(r=k())&&(o._knob=r.first),x(r=k())&&(o._valueIndicatorContainer=r.first)}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[H([{provide:Cl,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,o){t&1&&(P(0,Am,5,1,"div",2),C(1,"div",3,0)(3,"div",4)),t&2&&(T(o.discrete?0:-1),c(3),f("matRippleDisabled",!0))},dependencies:[at],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})(),xl=(()=>{class n{_ngZone=s(ee);_cdr=s(ie);_elementRef=s(R);_dir=s(Ve,{optional:!0});_globalRippleOptions=s(pn,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(F.END),o=this._getInput(F.START);t&&(t.disabled=this._disabled),o&&(o.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(F.END),o=this._getInput(F.START),r=t.value,a=o.value;o.min=e.new,t.min=Math.max(e.new,o.value),o.max=Math.min(t.max,t.value),o._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,o):this._onTranslateXChangeBySideEffect(o,t),r!==t.value&&this._onValueChange(t),a!==o.value&&this._onValueChange(o)}_updateMinNonRange(e){let t=this._getInput(F.END);if(t){let o=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),o!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(F.END),o=this._getInput(F.START),r=t.value,a=o.value;t.max=e.new,o.max=Math.min(e.new,t.value),t.min=o.value,t._updateWidthInactive(),o._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(o,t):this._onTranslateXChangeBySideEffect(t,o),r!==t.value&&this._onValueChange(t),a!==o.value&&this._onValueChange(o)}_updateMaxNonRange(e){let t=this._getInput(F.END);if(t){let o=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),o!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(F.END),t=this._getInput(F.START),o=e.value,r=t.value,a=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<a?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),o!==e.value&&this._onValueChange(e),r!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(F.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=be();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=p(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=s(_e);constructor(){s(je).load(et);let e=this._isRtl();Zt(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(F.END),t=this._getInput(F.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let o=this._getThumb(F.END);this._rippleRadius=o._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(F.END),t=this._getInput(F.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(F.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(F.START)._isActive||this._getThumb(F.END)._isActive}_getValue(e=F.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(F.START)?._skipUIUpdate||this._getInput(F.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(F.END),t=this._getInput(F.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(F.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(F.START),t=this._getInput(F.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),o=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),o._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===F.END?F.END:F.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===F.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let o=this._getThumb(e.thumbPosition);t.length<3?o._hostElement.classList.add("mdc-slider__thumb--short-value"):o._hostElement.classList.remove("mdc-slider__thumb--short-value")}}_updateValueIndicatorUIs(){let e=this._getInput(F.END),t=this._getInput(F.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,o=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*o}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let o=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${o})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${o})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),o=Math.max(Math.round((t-this.min)/e),0)+1,r=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?o++:r++,this._tickMarks=Array(o).fill(hi.ACTIVE).concat(Array(r).fill(hi.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),o=this._getValue(F.START),r=Math.max(Math.round((o-this.min)/e),0),a=Math.max(Math.round((t-o)/e)+1,0),u=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(r).fill(hi.INACTIVE).concat(Array(a).fill(hi.ACTIVE),Array(u).fill(hi.INACTIVE))}_getInput(e){if(e===F.END&&this._input)return this._input;if(this._inputs?.length)return e===F.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===F.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation)}_isCursorOnSliderThumb(e,t){let o=t.width/2,r=t.x+o,a=t.y+o,u=e.clientX-r,h=e.clientY-a;return Math.pow(u,2)+Math.pow(h,2)<Math.pow(o,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-slider"]],contentQueries:function(t,o,r){if(t&1&&Me(r,wl,5)(r,zm,4),t&2){let a;x(a=k())&&(o._input=a.first),x(a=k())&&(o._inputs=a)}},viewQuery:function(t,o){if(t&1&&fe(Fm,5)(Cl,5),t&2){let r;x(r=k())&&(o._trackActive=r.first),x(r=k())&&(o._thumbs=r)}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,o){t&2&&(de("mat-"+(o.color||"primary")),O("mdc-slider--range",o._isRange)("mdc-slider--disabled",o.disabled)("mdc-slider--discrete",o.discrete)("mdc-slider--tick-marks",o.showTickMarks)("_mat-animation-noopable",o._noopAnimations))},inputs:{disabled:[2,"disabled","disabled",q],discrete:[2,"discrete","discrete",q],showTickMarks:[2,"showTickMarks","showTickMarks",q],min:[2,"min","min",Pe],color:"color",disableRipple:[2,"disableRipple","disableRipple",q],max:[2,"max","max",Pe],step:[2,"step","step",Pe],displayWith:"displayWith"},exportAs:["matSlider"],features:[H([{provide:xr,useExisting:n}])],ngContentSelectors:Rm,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,o){t&1&&(U(),S(0),l(1,"div",2),C(2,"div",3),l(3,"div",4),C(4,"div",5,0),d(),P(6,Vm,3,1,"div",6),d(),P(7,Bm,1,3,"mat-slider-visual-thumb",7),C(8,"mat-slider-visual-thumb",7)),t&2&&(c(6),T(o.showTickMarks?6:-1),c(),T(o._isRange?7:-1),c(),f("discrete",o.discrete)("thumbPosition",2)("valueIndicatorText",o.endValueIndicatorText))},dependencies:[Wm],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var jm={provide:st,useExisting:ze(()=>kr),multi:!0};var kr=(()=>{class n{_ngZone=s(ee);_elementRef=s(R);_cdr=s(ie);_slider=s(xr);_platform=s(_e);_listenerCleanups;get value(){return Pe(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new W;dragStart=new W;dragEnd=new W;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=F.END;get min(){return Pe(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges()}get max(){return Pe(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges()}get step(){return Pe(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges()}get disabled(){return q(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=M("");_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new L;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=s(oe);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!0}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,o=this._slider._cachedWidth,r=this._slider.step===0?1:this._slider.step,a=Math.floor((this._slider.max-this._slider.min)/r),u=this._slider._isRtl()?1-t/o:t/o,I=Math.round(u*a)/a*(this._slider.max-this._slider.min)+this._slider.min,X=Math.round(I/r)*r,ye=this.value;if(X===ye){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=X,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,o=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,o),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,o){t&1&&g("change",function(){return o._onChange()})("input",function(){return o._onInput()})("blur",function(){return o._onBlur()})("focus",function(){return o._onFocus()}),t&2&&b("aria-valuetext",o._valuetext())},inputs:{value:[2,"value","value",Pe]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[H([jm,{provide:wl,useExisting:n}])]})}return n})();var kl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[_t,J]})}return n})();var Zn=class n extends Z{languageFormFieldLabel=$localize`:Language form field label@@languageFormFieldLabel:Language`;layoutFormFieldLabel=$localize`:Layout form field label@@layoutFormFieldLabel:Layout`;soundSwitchLabel=$localize`:Sound enable/disable switch label@@soundSwitchLabel:Sound`;animationSwitchLabel=$localize`:Animation enable/disable switch label@@animationSwitchLabel:Animation`;missingTranslationLabel=$localize`:Missing translation label@@missingTranslationLabel:Missing translation`;settingsAmericanEnglishLanguageLabel=$localize`:American English language setting label@@settingsAmericanEnglishLanguageLabel:English`;settingsHungarianLanguageLabel=$localize`:Hungarian language setting label@@settingsHungarianLanguageLabel:Hungarian`;autoLayoutSettingLabel=$localize`:Auto layout setting label@@autoLayoutSettingLabel:Auto`;smartPhoneLayoutSettingLabel=$localize`:Smartphone layout setting label@@smartPhoneLayoutSettingLabel:Smartphone`;tabletLayoutSettingLabel=$localize`:Tabblet layout setting label@@tabletLayoutSettingLabel:Tablet`;desktopLayoutSettingLabel=$localize`:Desktop layout setting label@@desktopLayoutSettingLabel:Desktop`;resolveLanguageLabel(i){let e=this.missingTranslationLabel;switch(i){case"en-US":e=this.settingsAmericanEnglishLanguageLabel;break;case"hu-HU":e=this.settingsHungarianLanguageLabel;break}return e}resolveLayoutLabel(i){let e=this.missingTranslationLabel;switch(i){case"auto":e=this.autoLayoutSettingLabel;break;case"wide_portrait":e=this.smartPhoneLayoutSettingLabel;break;case"landscape":e=this.tabletLayoutSettingLabel;break;case"wide_landscape":e=this.desktopLayoutSettingLabel;break}return e}static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};function qm(n,i){if(n&1&&(l(0,"mat-option",3),m(1),d()),n&2){let e=i.$implicit,t=y();f("value",Q(e)),c(),v(t.translations.resolveLanguageLabel(e))}}function Gm(n,i){if(n&1&&(l(0,"mat-option",3),m(1),d()),n&2){let e=i.$implicit,t=y();f("value",Q(e)),c(),v(t.translations.resolveLayoutLabel(e))}}var pi=class n{static DEFAULT_VOLUME=ae.DEFAULT_VOLUME;volumeIcon=M("volume_down");isDirty=Ze();isValid=Ze();currentSettings;isSaveInProgress;languages=[];layouts=[];form;languageFormControl;layoutFormcontrol;volumeFormcontrol;formValueChangeSubscription;translations=s(Zn);settingsService=s(cs);audioPlaybackService=s(xn);signals=s(ae);constructor(){this.currentSettings=this.signals.settings.toSignal(),this.isSaveInProgress=this.signals.isSettingsSaveInProgress.toSignal(),this.languageFormControl=new Vt(this.currentSettings().language),this.layoutFormcontrol=new Vt(this.currentSettings().layout),this.volumeFormcontrol=new Vt(this.currentSettings().volume),this.updateVolumeIcon(this.currentSettings().volume),this.form=new Nt({language:this.languageFormControl,layout:this.layoutFormcontrol,volume:this.volumeFormcontrol,audioEnabled:new Vt(this.currentSettings().isAudioEnabled),animationEnabled:new Vt(this.currentSettings().isAnimationEnabled)}),this.formValueChangeSubscription=this.form.valueChanges.subscribe(()=>{this.isDirty.emit(this.form.dirty),this.isValid.emit(this.form.valid)}),Object.values(Ri).forEach(i=>{this.languages.push(i)}),this.layouts.push("auto"),this.layouts.push("wide_portrait"),this.layouts.push("landscape"),this.layouts.push("wide_landscape"),te(()=>{this.isSaveInProgress()&&this.save()})}ngOnDestroy(){this.formValueChangeSubscription.unsubscribe()}onVolumeChanged(i){i===0?this.form.controls.audioEnabled.setValue(!1):this.form.controls.audioEnabled.setValue(!0),this.updateVolumeIcon(i),this.audioPlaybackService.testVolume(i)}onAudioSliderChanged(i){i.checked?this.volumeFormcontrol.setValue(n.DEFAULT_VOLUME):this.volumeFormcontrol.setValue(0)}save(){let i=this.form.controls.language.value,e=this.form.controls.layout.value,t=new ds(i,e,this.form.controls.volume.value??n.DEFAULT_VOLUME,this.form.controls.audioEnabled.value,this.form.controls.animationEnabled.value);this.settingsService.update(t),this.form.controls.language.dirty&&this.signals.settingsNeedsReload.set(!0)}updateVolumeIcon(i){i===0?this.volumeIcon.update(()=>"no_sound"):i>50?this.volumeIcon.update(()=>"volume_up"):this.volumeIcon.update(()=>"volume_down")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-settings-form"]],outputs:{isDirty:"isDirty",isValid:"isValid"},decls:31,vars:9,consts:[[1,"settings-form",3,"formGroup"],["floatLabel","always","subscriptSizing","dynamic",1,"full-width"],[1,"language-select",3,"formControl"],[3,"value"],[1,"layout-select",3,"formControl"],[1,"settings-form-field-container"],[1,"settings-slide-form-field","full-width"],[1,"settings-form-label"],["aria-hidden","true"],["formControlName","audioEnabled",1,"audio-toggle",3,"change"],[1,"settings-volume-control-form-field","full-width"],["min","0","max","100","step","1"],["matSliderThumb","","value","25",3,"valueChange","formControl"],["formControlName","animationEnabled",1,"animation-toggle"]],template:function(e,t){e&1&&(l(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),m(3),d(),l(4,"mat-select",2),Pt(5,qm,2,3,"mat-option",3,Ti),d(),Oe(),d(),l(7,"mat-form-field",1)(8,"mat-label"),m(9),d(),l(10,"mat-select",4),Pt(11,Gm,2,3,"mat-option",3,Ti),d(),Oe(),d(),l(13,"div",5)(14,"div",6)(15,"mat-label",7)(16,"mat-icon",8),m(17,"speaker"),d(),m(18),d(),l(19,"mat-slide-toggle",9),g("change",function(r){return t.onAudioSliderChanged(r)}),d(),Oe(),d(),l(20,"div",10)(21,"mat-icon",8),m(22),d(),l(23,"mat-slider",11)(24,"input",12),g("valueChange",function(r){return t.onVolumeChanged(r)}),d(),Oe(),d()()(),l(25,"div",6)(26,"mat-label",7)(27,"mat-icon",8),m(28,"animation"),d(),m(29),d(),C(30,"mat-slide-toggle",13),Oe(),d()()),e&2&&(f("formGroup",t.form),c(3),v(t.translations.languageFormFieldLabel),c(),f("formControl",t.languageFormControl),De(),c(),Tt(t.languages),c(4),v(t.translations.layoutFormFieldLabel),c(),f("formControl",t.layoutFormcontrol),De(),c(),Tt(t.layouts),c(7),G("",t.translations.soundSwitchLabel," "),c(),De(),c(3),v(t.volumeIcon()),c(2),f("formControl",t.volumeFormcontrol),De(),c(5),G("",t.translations.animationSwitchLabel," "),c(),De())},dependencies:[dt,ci,zt,Qn,ue,ve,bl,_l,ui,yl,Cr,kl,xl,kr,Ks,Gs,Un,Hs,qs,Qs,ur,Bt,hr],styles:[".settings-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1rem;height:100%}.settings-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%], .settings-form[_ngcontent-%COMP%]   .settings-form-field-container[_ngcontent-%COMP%]{width:100%}.settings-form[_ngcontent-%COMP%]   .settings-volume-control-form-field[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.settings-form[_ngcontent-%COMP%]   .settings-volume-control-form-field[_ngcontent-%COMP%]   .mat-mdc-slider[_ngcontent-%COMP%]{width:100%;flex-grow:2;margin-left:1rem}.settings-form[_ngcontent-%COMP%]   .settings-slide-form-field[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}.settings-form[_ngcontent-%COMP%]   .settings-form-label[_ngcontent-%COMP%]{display:flex;align-items:center}.settings-form[_ngcontent-%COMP%]   .settings-form-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.25rem}"]})};function Km(n,i){}var xt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Sr=(()=>{class n extends ns{_elementRef=s(R);_focusTrapFactory=s(hn);_config;_interactivityChecker=s(un);_ngZone=s(ee);_focusMonitor=s(rt);_renderer=s(oe);_changeDetectorRef=s(ie);_injector=s($);_platform=s(_e);_document=s(qe);_portalOutlet;_focusTrapped=new L;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(xt,{optional:!0})||new xt,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let o=()=>{r(),a(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",o),a=this._renderer.listen(e,"mousedown",o)})),e.focus(t)}_focusByCssSelector(e,t){let o=this._elementRef.nativeElement.querySelector(e);o&&this._forceFocus(o,t)}_trapFocus(e){this._isDestroyed||pt(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let o=Ei(),r=this._elementRef.nativeElement;(!o||o===this._document.body||o===r||r.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Ei();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Ei()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,o){if(t&1&&fe(Ai,7),t&2){let r;x(r=k())&&(o._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,o){t&2&&b("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[K],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,o){t&1&&$e(0,Km,0,0,"ng-template",0)},dependencies:[Ai],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return n})(),Ki=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new L;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!Te(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},Qm=new w("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=s($);return()=>gn(n)}}),Xm=new w("DialogData"),Ym=new w("DefaultDialogConfig");function Zm(n){let i=M(n),e=new W;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var Ml=(()=>{class n{_injector=s($);_defaultOptions=s(Ym,{optional:!0});_parentDialog=s(n,{optional:!0,skipSelf:!0});_overlayContainer=s(os);_idGenerator=s(we);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new L;_afterOpenedAtThisLevel=new L;_ariaHiddenElements=new Map;_scrollStrategy=s(Qm);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=$t(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(xe(void 0)));open(e,t){let o=this._defaultOptions||new xt;t=V(V({},o),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),a=yn(this._injector,r),u=new Ki(a,t),h=this._attachContainer(a,u,t);if(u.containerInstance=h,!this.openDialogs.length){let I=this._overlayContainer.getContainerElement();h._focusTrapped?h._focusTrapped.pipe(Se(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(I)}):this._hideNonDialogContentFromAssistiveTechnology(I)}return this._attachDialogContent(e,u,h,t),this.openDialogs.push(u),u.closed.subscribe(()=>this._removeOpenDialog(u,!0)),this.afterOpened.next(u),u}closeAll(){Mr(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Mr(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Mr(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new bn({positionStrategy:e.positionStrategy||vn().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,o){let r=o.injector||o.viewContainerRef?.injector,a=[{provide:xt,useValue:o},{provide:Ki,useValue:t},{provide:rs,useValue:e}],u;o.container?typeof o.container=="function"?u=o.container:(u=o.container.type,a.push(...o.container.providers(o))):u=Sr;let h=new Ii(u,o.viewContainerRef,$.create({parent:r||this._injector,providers:a}));return e.attach(h).instance}_attachDialogContent(e,t,o,r){if(e instanceof sn){let a=this._createInjector(r,t,o,void 0),u={$implicit:r.data,dialogRef:t};r.templateContext&&(u=V(V({},u),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),o.attachTemplatePortal(new fn(e,null,u,a))}else{let a=this._createInjector(r,t,o,this._injector),u=o.attachComponentPortal(new Ii(e,r.viewContainerRef,a,null,r.bindings));t.componentRef=u,t.componentInstance=u.instance}}_createInjector(e,t,o,r){let a=e.injector||e.viewContainerRef?.injector,u=[{provide:Xm,useValue:e.data},{provide:Ki,useValue:t}];return e.providers&&(typeof e.providers=="function"?u.push(...e.providers(t,e,o)):u.push(...e.providers)),e.direction&&(!a||!a.get(Ve,null,{optional:!0}))&&u.push({provide:Ve,useValue:Zm(e.direction)}),$.create({parent:a||r,providers:u})}_removeOpenDialog(e,t){let o=this.openDialogs.indexOf(e);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let o=t.length-1;o>-1;o--){let r=t[o];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})();function Mr(n,i){let e=n.length;for(;e--;)i(n[e])}function Jm(n,i){}var eo=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},Or="mdc-dialog--open",Sl="mdc-dialog--opening",Ol="mdc-dialog--closing",eu=150,tu=75,iu=(()=>{class n extends Sr{_animationStateChanged=new W;_animationsEnabled=!be();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Pl(this._config.enterAnimationDuration)??eu:0;_exitAnimationDuration=this._animationsEnabled?Pl(this._config.exitAnimationDuration)??tu:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Dl,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Sl,Or)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Or),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Or),this._animationsEnabled?(this._hostElement.style.setProperty(Dl,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ol)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Sl,Ol)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,o){t&2&&(We("id",o._config.id),b("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),O("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[K],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,o){t&1&&(l(0,"div",0)(1,"div",1),$e(2,Jm,0,0,"ng-template",2),d()())},dependencies:[Ai],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return n})(),Dl="--mat-dialog-transition-duration";function Pl(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?ot(n.substring(0,n.length-2)):n.endsWith("s")?ot(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Jn=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Jn||{}),Qi=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new on(1);_beforeClosed=new on(1);_result;_closeFallbackTimeout;_state=Jn.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(he(o=>o.state==="opened"),Se(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(he(o=>o.state==="closed"),Se(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ce(this.backdropClick(),this.keydownEvents().pipe(he(o=>o.keyCode===27&&!this.disableClose&&!Te(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),nu(this,o.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(he(t=>t.state==="closing"),Se(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Jn.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Jn.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function nu(n,i,e){return n._closeInteractionType=i,n.close(e)}var ou=new w("MatMdcDialogData"),ru=new w("mat-mdc-dialog-default-options"),au=new w("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=s($);return()=>gn(n)}}),to=(()=>{class n{_defaultOptions=s(ru,{optional:!0});_scrollStrategy=s(au);_parentDialog=s(n,{optional:!0,skipSelf:!0});_idGenerator=s(we);_injector=s($);_dialog=s(Ml);_animationsDisabled=be();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new L;_afterOpenedAtThisLevel=new L;dialogConfigClass=eo;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=$t(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(xe(void 0)));constructor(){this._dialogRefConstructor=Qi,this._dialogContainerType=iu,this._dialogDataToken=ou}open(e,t){let o;t=V(V({},this._defaultOptions||new eo),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,ge(V({},t),{positionStrategy:vn(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:xt,useValue:t}]},templateContext:()=>({dialogRef:o}),providers:(a,u,h)=>(o=new this._dialogRefConstructor(a,t,h),o.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:u.data},{provide:this._dialogRefConstructor,useValue:o}])}));return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(o);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ge({token:n,factory:n.\u0275fac})}return n})();var Tl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Ia([vt])]})}return n})();var kt=class n{overlays={};router=s(gt);overlay=s(ls);matDialogService=s(to);signals=s(ae);constructor(){}openDialog(i,e){if(this.signals.isSmartPhone.value())this.router.navigate([e]);else{let t={maxWidth:"inherit"},o=this.matDialogService.open(i,t)}}toggleOverlay(i,e,t){if(this.signals.isSmartPhone.value())this.router.navigate([e]);else if(this.overlays[i.toString()])this.closeOverlay(i);else{let o={panelClass:"overlay-container",hasBackdrop:!0,backdropClass:"overlay-container-backdrop",positionStrategy:this.overlay.position().flexibleConnectedTo(t).withPositions([{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top",offsetY:5}]).withPush(!1)},r=this.overlay.create(o),a=new Ii(i);r.attach(a),r.backdropClick().pipe(Se(1)).subscribe(()=>{this.closeOverlay(i)}),this.overlays[i.toString()]=r}}closeOverlay(i){this.overlays[i.toString()]&&(this.overlays[i.toString()].detach(),delete this.overlays[i.toString()])}static \u0275fac=function(e){return new(e||n)};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var io=class n{isFormValid=M(!0);isSaveInProgress=!1;translations=s(In);dialogService=s(kt);signals=s(ae);constructor(){te(()=>{let i=this.signals.isSettingsSaveInProgress.toSignal();this.isSaveInProgress&&!i()?this.dialogService.closeOverlay(n):this.isSaveInProgress=i()})}setValid(i){this.isFormValid.set(i)}onSaveClicked(){this.signals.isSettingsSaveInProgress.set(!0)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-settings-dialog"]],decls:5,vars:5,consts:[[1,"settings-dialog-content"],[3,"isValid"],[1,"settings-dialog-footer"],["matButton","filled",1,"save-settings-button",3,"click","title","disabled"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"tbt-settings-form",1),g("isValid",function(r){return t.setValid(r)}),d()(),l(2,"footer",2)(3,"button",3),g("click",function(){return t.onSaveClicked()}),m(4),d()()),e&2&&(c(3),f("title",Q(t.translations.saveSettingsButtonLabel))("disabled",!t.isFormValid()),b("aria-label",t.translations.saveSettingsButtonLabel),c(),G(" ",t.translations.saveSettingsButtonLabel," "))},dependencies:[me,bt,pi],styles:[".settings-dialog-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding-top:1rem}"]})};var su=["settingsButton"];function lu(n,i){if(n&1){let e=ke();l(0,"button",17),g("click",function(){se(e);let o=y(2);return le(o.onStartButtonClicked())}),l(1,"mat-icon",18),m(2,"play_arrow"),d()()}if(n&2){let e=y(2);f("title",Q(e.translations.startWorkoutButtonDescriptionLabel)),b("aria-label",e.translations.startWorkoutButtonDescriptionLabel)}}function du(n,i){if(n&1){let e=ke();l(0,"button",19),g("click",function(){se(e);let o=y(2);return le(o.onStartButtonClicked())}),l(1,"mat-icon",18),m(2,"play_arrow"),d(),m(3),d()}if(n&2){let e=y(2);f("title",Q(e.translations.startWorkoutButtonDescriptionLabel)),b("aria-label",e.translations.startWorkoutButtonDescriptionLabel),c(3),G(" ",e.translations.startWorkoutButtonLabel," ")}}function cu(n,i){if(n&1&&P(0,lu,3,3,"button",15)(1,du,4,4,"button",16),n&2){let e=y();T(e.isSmartPhone()?0:1)}}function mu(n,i){if(n&1){let e=ke();l(0,"button",20),g("click",function(){se(e);let o=y();return le(o.onEditMenuItemClicked())}),l(1,"mat-icon",21),m(2,"edit"),d(),l(3,"span"),m(4),d()(),l(5,"button",22),g("click",function(){se(e);let o=y();return le(o.onDeleteMenuItemClicked())}),l(6,"mat-icon",23),m(7,"delete"),d(),l(8,"span"),m(9),d()()}if(n&2){let e=y();f("title",Q(e.translations.editWorkoutIconButtonDescriptionLabel)),b("aria-label",e.translations.editWorkoutIconButtonDescriptionLabel),c(4),v(e.translations.editWorkoutIconButtonLabel),c(),f("title",Q(e.translations.deleteWorkoutIconButtonDescriptionLabel)),b("aria-label",e.translations.deleteWorkoutIconButtonDescriptionLabel),c(4),v(e.translations.deleteWorkoutIconButtonLabel)}}var no=class n{onNavigationMenuToggle=Ze();onSideSheetToggle=Ze();isSmartPhone;selectedWorkout;isModificationAllowed=p(()=>!!this.selectedWorkout());title=p(()=>this.selectedWorkout()?.name?this.selectedWorkout().name:this.translations.applicationName);settingsButton=Je.required("settingsButton",{read:R});translations=s(En);router=s(gt);dialogService=s(kt);snackBarService=s(Cn);workoutConfigurationService=s(re);signals=s(ae);constructor(){this.isSmartPhone=this.signals.isSmartPhone.toSignal(),this.selectedWorkout=this.signals.selectedWorkout.toSignal()}onNavigationMenuClicked(){this.onNavigationMenuToggle.emit()}onNewMenuItemClicked(){this.onSideSheetToggle.emit(!0)}onEditMenuItemClicked(){this.onSideSheetToggle.emit(!1)}onDeleteMenuItemClicked(){this.workoutConfigurationService.deleteCurrentWorkout(),this.snackBarService.open(this.translations.workoutDeletedLabel,this.translations.restoreWorkoutButtonLabel,{duration:5e3}).onAction().subscribe(()=>{this.workoutConfigurationService.restoreLastDeletedWorkout()})}onSettingsButtonClicked(){this.dialogService.toggleOverlay(io,"/settings",this.settingsButton())}onStartButtonClicked(){this.workoutConfigurationService.saveCurrentWorkoutSession(),this.router.navigateByUrl("/timer")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-workout-launcher-nav-bar"]],viewQuery:function(e,t){e&1&&Xt(t.settingsButton,su,5,R),e&2&&It()},outputs:{onNavigationMenuToggle:"onNavigationMenuToggle",onSideSheetToggle:"onSideSheetToggle"},decls:24,vars:19,consts:[["settingsButton",""],["moreMenu","matMenu"],[1,"workout-launcher-navbar"],["mat-icon-button","",1,"nav-menu-button",3,"click","title"],["aria-hidden","true",1,"nav-menu-icon"],[1,"navbar-title",3,"title"],[1,"toolbar-spacer"],[1,"action-icons"],["mat-icon-button","",1,"settings-button",3,"click","title"],["aria-hidden","true",1,"settings-icon"],["mat-icon-button","",1,"more-menu-button",3,"matMenuTriggerFor","title"],["aria-hidden","true",1,"more-menu-icon"],[1,"more-menu"],["mat-menu-item","",1,"new-workout-menu-item",3,"click","title"],["aria-hidden","true",1,"new-workout-icon"],["mat-icon-button","",1,"start-workout-button",3,"title"],["matButton","filled",1,"workout-launcher","start-workout-button","filled",3,"title"],["mat-icon-button","",1,"start-workout-button",3,"click","title"],["aria-hidden","true",1,"start-workout-icon"],["matButton","filled",1,"workout-launcher","start-workout-button","filled",3,"click","title"],["mat-menu-item","",1,"edit-workout-menu-item",3,"click","title"],["aria-hidden","true",1,"edit-workout-icon"],["mat-menu-item","",1,"delete-workout-menu-item",3,"click","title"],["aria-hidden","true",1,"delete-workout-icon"]],template:function(e,t){if(e&1&&(l(0,"mat-toolbar",2)(1,"button",3),g("click",function(){return t.onNavigationMenuClicked()}),l(2,"mat-icon",4),m(3,"menu"),d()(),l(4,"span",5),m(5),d(),C(6,"span",6),l(7,"span",7),P(8,cu,2,1),l(9,"button",8,0),g("click",function(){return t.onSettingsButtonClicked()}),l(11,"mat-icon",9),m(12,"settings"),d()(),l(13,"button",10)(14,"mat-icon",11),m(15,"more_vert"),d()(),l(16,"mat-menu",12,1)(18,"button",13),g("click",function(){return t.onNewMenuItemClicked()}),l(19,"mat-icon",14),m(20,"add"),d(),l(21,"span"),m(22),d()(),P(23,mu,10,8),d()()()),e&2){let o=Ye(17);c(),f("title",Q(t.translations.navigationDrawerButtonLabel)),b("aria-label",t.translations.navigationDrawerButtonLabelDescriptionLabel),c(3),f("title",Q(t.title())),c(),v(t.title()),c(3),T(t.isModificationAllowed()?8:-1),c(),f("title",Q(t.translations.settingsIconButtonDescriptionLabel)),b("aria-label",t.translations.settingsIconButtonDescriptionLabel),c(4),f("title",Q(t.translations.moreMenuDescriptionLabel))("matMenuTriggerFor",o),b("aria-label",t.translations.moreMenuDescriptionLabel),c(5),f("title",Q(t.translations.newWorkoutIconButtonDescriptionLabel)),b("aria-label",t.translations.newWorkoutIconButtonDescriptionLabel),c(4),v(t.translations.newWorkoutIconButtonLabel),c(),T(t.isModificationAllowed()?23:-1)}},dependencies:[Tn,Pn,ue,ve,oi,ti,Li,ps,me,bt,Ee],styles:[".workout-launcher-navbar[_ngcontent-%COMP%]{color:var(--mat-sys-on-tertiary-container);background-color:transparent}.workout-launcher-navbar[_ngcontent-%COMP%]   .toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.wide-portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.wide-portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .portrait[_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .workout-launcher-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{gap:.5rem}"]})};var oo=["*"],uu=["content"],Il=[[["mat-drawer"],["mat-sidenav"]],[["mat-drawer-content"],["mat-sidenav-content"]],"*"],Al=["mat-drawer, mat-sidenav","mat-drawer-content, mat-sidenav-content","*"];function hu(n,i){if(n&1){let e=ke();l(0,"div",1),g("click",function(){se(e);let o=y();return le(o._onBackdropClicked())}),d()}if(n&2){let e=y();O("mat-drawer-shown",e._isShowingBackdrop())}}function pu(n,i){n&1&&(l(0,"mat-drawer-content"),S(1,2),d())}function fu(n,i){if(n&1){let e=ke();l(0,"div",1),g("click",function(){se(e);let o=y();return le(o._onBackdropClicked())}),d()}if(n&2){let e=y();O("mat-drawer-shown",e._isShowingBackdrop())}}function gu(n,i){n&1&&(l(0,"mat-sidenav-content"),S(1,2),d())}var _u=`.mat-drawer-container {
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
`;var bu=new w("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Tr=new w("MAT_DRAWER_CONTAINER"),Wt=(()=>{class n extends vt{_platform=s(_e);_changeDetectorRef=s(ie);_element=s(R);_ngZone=s(ee);_isInert=!1;_container=s(Pr);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(e){e.opened?this._ngZone.runOutsideAngular(()=>{e._animationEnd.pipe(Ca(50),Se(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_updateInert(){let e=this._container._isShowingBackdrop();if(e!==this._isInert){let t=this._element.nativeElement;this._isInert=e,e?t.setAttribute("inert","true"):t.removeAttribute("inert")}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,o){t&2&&(ft("margin-left",o._container._contentMargins.left,"px")("margin-right",o._container._contentMargins.right,"px"),O("mat-drawer-content-hidden",o._shouldBeHidden()))},features:[H([{provide:vt,useExisting:n}]),K],ngContentSelectors:oo,decls:1,vars:0,template:function(t,o){t&1&&(U(),S(0))},encapsulation:2})}return n})(),Dr=(()=>{class n{_elementRef=s(R);_focusTrapFactory=s(hn);_focusMonitor=s(rt);_platform=s(_e);_ngZone=s(ee);_renderer=s(oe);_interactivityChecker=s(un);_doc=s(qe);_container=s(Tr,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ce(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ce(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ce(e))}_opened=M(!1);_openedVia=null;_animationStarted=new L;_animationEnd=new L;openedChange=new W(!0);_openedStream=this.openedChange.pipe(he(e=>e),Xe(()=>{}));openedStart=this._animationStarted.pipe(he(()=>this.opened),Uo(void 0));_closedStream=this.openedChange.pipe(he(e=>!e),Xe(()=>{}));closedStart=this._animationStarted.pipe(he(()=>!this.opened),Uo(void 0));_destroyed=new L;onPositionChanged=new W;_content;_modeChanged=new L;_injector=s($);_changeDetectorRef=s(ie);constructor(){this.openedChange.pipe(ne(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",o=>{o.keyCode===27&&!this.disableClose&&!Te(o)&&this._ngZone.run(()=>{this.close(),o.stopPropagation(),o.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(e,t){let o=this._elementRef.nativeElement.querySelector(e);o&&(this._interactivityChecker.isFocusable(o)||(o.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),u(),o.removeAttribute("tabindex")},a=this._renderer.listen(o,"blur",r),u=this._renderer.listen(o,"mousedown",r)})),o.focus(t))}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":pt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let o=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),o}_setOpen(e,t,o){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),(this._container?._content||this._container?._userContent)?._drawerToggled(this),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(o),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(Se(1)).subscribe(a=>r(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,o=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),o.insertBefore(this._anchor,t)),o.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,o){if(t&1&&fe(uu,5),t&2){let r;x(r=k())&&(o._content=r.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,o){t&2&&(b("align",null)("tabIndex",o.mode!=="side"?"-1":null),ft("visibility",!o._container&&!o.opened?"hidden":null),O("mat-drawer-end",o.position==="end")("mat-drawer-over",o.mode==="over")("mat-drawer-push",o.mode==="push")("mat-drawer-side",o.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:oo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,o){t&1&&(U(),l(0,"div",1,0),S(2),d())},dependencies:[vt],encapsulation:2})}return n})(),Pr=(()=>{class n{_dir=s(Ve,{optional:!0});_element=s(R);_ngZone=s(ee);_changeDetectorRef=s(ie);_animationDisabled=be();_transitionsEnabled=!1;_allDrawers;_drawers=new an;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ce(e)}_autosize=s(bu);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ce(e)}_backdropOverride=null;backdropClick=new W;_start=null;_end=null;_left=null;_right=null;_destroyed=new L;_doCheckSubject=new L;_contentMargins={left:null,right:null};_contentMarginChanges=new L;get scrollable(){return this._userContent||this._content}_injector=s($);constructor(){let e=s(_e),t=s(Fi);this._dir?.change.pipe(ne(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(ne(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(xe(this._allDrawers),ne(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(xe(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(wa(10),ne(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let o=this._left._getWidth();e+=o,t-=o}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let o=this._right._getWidth();t+=o,e-=o}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ne(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(ne(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ne(this._drawers.changes)).subscribe(()=>{pt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ne(Ce(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,o="mat-drawer-container-has-open";e?t.add(o):t.remove(o)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,o,r){if(t&1&&Me(r,Wt,5)(r,Dr,5),t&2){let a;x(a=k())&&(o._content=a.first),x(a=k())&&(o._allDrawers=a)}},viewQuery:function(t,o){if(t&1&&fe(Wt,5),t&2){let r;x(r=k())&&(o._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,o){t&2&&O("mat-drawer-container-explicit-backdrop",o._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[H([{provide:Tr,useExisting:n}])],ngContentSelectors:Al,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,o){t&1&&(U(Il),P(0,hu,1,2,"div",0),S(1),S(2,1),P(3,pu,2,0,"mat-drawer-content")),t&2&&(T(o.hasBackdrop?0:-1),c(3),T(o._content?-1:3))},dependencies:[Wt],styles:[`.mat-drawer-container {
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
`],encapsulation:2})}return n})(),El=(()=>{class n extends Wt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[H([{provide:vt,useExisting:n},{provide:Wt,useExisting:n}]),K],ngContentSelectors:oo,decls:1,vars:0,template:function(t,o){t&1&&(U(),S(0))},encapsulation:2})}return n})(),Er=(()=>{class n extends Dr{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ce(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=ot(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=ot(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,o){t&2&&(b("tabIndex",o.mode!=="side"?"-1":null)("align",null),ft("top",o.fixedInViewport?o.fixedTopGap:null,"px")("bottom",o.fixedInViewport?o.fixedBottomGap:null,"px"),O("mat-drawer-end",o.position==="end")("mat-drawer-over",o.mode==="over")("mat-drawer-push",o.mode==="push")("mat-drawer-side",o.mode==="side")("mat-sidenav-fixed",o.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[H([{provide:Dr,useExisting:n}]),K],ngContentSelectors:oo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,o){t&1&&(U(),l(0,"div",1,0),S(2),d())},dependencies:[vt],encapsulation:2})}return n})(),Fl=(()=>{class n extends Pr{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,o,r){if(t&1&&Me(r,El,5)(r,Er,5),t&2){let a;x(a=k())&&(o._content=a.first),x(a=k())&&(o._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,o){t&2&&O("mat-drawer-container-explicit-backdrop",o._backdropOverride)},exportAs:["matSidenavContainer"],features:[H([{provide:Tr,useExisting:n},{provide:Pr,useExisting:n}]),K],ngContentSelectors:Al,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,o){t&1&&(U(Il),P(0,fu,1,2,"div",0),S(1),S(2,1),P(3,gu,2,0,"mat-sidenav-content")),t&2&&(T(o.hasBackdrop?0:-1),c(3),T(o._content?-1:3))},dependencies:[El],styles:[_u],encapsulation:2})}return n})(),Rl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[Rt,J,Rt]})}return n})();var Ir=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=ce(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ce(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,o){t&2&&(b("aria-orientation",o.vertical?"vertical":"horizontal"),O("mat-divider-vertical",o.vertical)("mat-divider-horizontal",!o.vertical)("mat-divider-inset",o.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-divider {
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
`],encapsulation:2})}return n})(),Ll=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[J]})}return n})();var Nl=["*"],Vl=`.mdc-list {
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
`,yu=["unscopedContent"],wu=["text"],Cu=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],xu=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var ku=new w("ListOption"),Ar=(()=>{class n{_elementRef=s(R);static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),Mu=(()=>{class n{_elementRef=s(R);static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),Su=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),Bl=(()=>{class n{_listOption=s(ku,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,hostVars:4,hostBindings:function(t,o){t&2&&O("mdc-list-item__start",o._isAlignedAtStart())("mdc-list-item__end",!o._isAlignedAtStart())}})}return n})(),Ou=(()=>{class n extends Bl{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=E({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[K]})}return n})(),Fr=(()=>{class n extends Bl{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275dir=E({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[K]})}return n})(),Du=new w("MAT_LIST_CONFIG"),Xi=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ce(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ce(e))}_disabled=M(!1);_defaultOptions=s(Du,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,hostVars:1,hostBindings:function(t,o){t&2&&b("aria-disabled",o.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Pu=(()=>{class n{_elementRef=s(R);_ngZone=s(ee);_listBase=s(Xi,{optional:!0});_platform=s(_e);_hostElement;_isButtonElement;_noopAnimations=be();_avatars;_icons;set lines(e){this._explicitLines=ot(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ce(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ce(e))}_disabled=M(!1);_subscriptions=new Qe;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){s(je).load(et);let e=s(pn,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ts(this,this._ngZone,this._hostElement,this._platform,s($)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ce(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),o=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&t===1;o.classList.toggle("mdc-list-item__primary-text",r),o.classList.toggle("mdc-list-item__secondary-text",!r)}else o.classList.remove("mdc-list-item__primary-text"),o.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,contentQueries:function(t,o,r){if(t&1&&Me(r,Ou,4)(r,Fr,4),t&2){let a;x(a=k())&&(o._avatars=a),x(a=k())&&(o._icons=a)}},hostVars:4,hostBindings:function(t,o){t&2&&(b("aria-disabled",o.disabled)("disabled",o._isButtonElement&&o.disabled||null),O("mdc-list-item--disabled",o.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var zl=(()=>{class n extends Xi{static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[H([{provide:Xi,useExisting:n}]),K],ngContentSelectors:Nl,decls:1,vars:0,template:function(t,o){t&1&&(U(),S(0))},styles:[Vl],encapsulation:2})}return n})(),ro=(()=>{class n extends Pu{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ce(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,o,r){if(t&1&&Me(r,Mu,5)(r,Ar,5)(r,Su,5),t&2){let a;x(a=k())&&(o._lines=a),x(a=k())&&(o._titles=a),x(a=k())&&(o._meta=a)}},viewQuery:function(t,o){if(t&1&&fe(yu,5)(wu,5),t&2){let r;x(r=k())&&(o._unscopedContent=r.first),x(r=k())&&(o._itemText=r.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,o){t&2&&(b("aria-current",o._getAriaCurrent()),O("mdc-list-item--activated",o.activated)("mdc-list-item--with-leading-avatar",o._avatars.length!==0)("mdc-list-item--with-leading-icon",o._icons.length!==0)("mdc-list-item--with-trailing-meta",o._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",o._hasBothLeadingAndTrailing())("_mat-animation-noopable",o._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[K],ngContentSelectors:xu,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,o){t&1&&(U(Cu),S(0),l(1,"span",1),S(2,1),S(3,2),l(4,"span",2,0),g("cdkObserveContent",function(){return o._updateItemLines(!0)}),S(6,3),d()(),S(7,4),S(8,5),C(9,"div",3))},dependencies:[Ya],encapsulation:2})}return n})();var Wl=(()=>{class n extends Xi{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[H([{provide:Xi,useExisting:n}]),K],ngContentSelectors:Nl,decls:1,vars:0,template:function(t,o){t&1&&(U(),S(0))},styles:[Vl],encapsulation:2})}return n})();var ao=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[mn,_t,Xn,J,Ll]})}return n})();var Rr=0;function Tu(){return Rr}function Mt(n,i){return(...e)=>{try{return Rr=i,n(...e)}finally{Rr=0}}}function Eu(n){return!n}function Ul(n){return n}function St(n){return Array.isArray(n)}function lo(n){return(typeof n=="object"||typeof n=="function")&&n!=null}var jt=Symbol(),_o=Symbol(),Zi=class{predicates;fns=[];constructor(i){this.predicates=i}push(i){this.fns.push(Hl(this.predicates,i))}mergeIn(i){let e=this.predicates?i.fns.map(t=>Hl(this.predicates,t)):i.fns;this.fns.push(...e)}hasRules(){return this.fns.length>0}},co=class extends Zi{get defaultValue(){return!1}compute(i){return this.fns.some(e=>{let t=e(i);return t&&t!==_o})}},gi=class n extends Zi{ignore;static ignoreNull(i){return new n(i,e=>e===null)}constructor(i,e){super(i),this.ignore=e}get defaultValue(){return[]}compute(i){return this.fns.reduce((e,t)=>{let o=t(i);return o===void 0||o===_o?e:St(o)?[...e,...this.ignore?o.filter(r=>!this.ignore(r)):o]:this.ignore&&this.ignore(o)?e:[...e,o]},[])}},Lr=class extends gi{constructor(i){super(i,void 0)}},Nr=class extends Zi{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(i,e){super(i),this.key=e}compute(i){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let t=0;t<this.fns.length;t++){let o=this.fns[t](i);o!==_o&&(e=this.key.reducer.reduce(e,o))}return e}};function Hl(n,i){return n.length===0?i:e=>{for(let t of n){let o=e.stateOf(t.path),r=N(o.structure.pathKeys).length-t.depth;for(let a=0;a<r;a++)o=o.structure.parent;if(!t.fn(o.context))return _o}return i(e)}}var _i=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(i){this.predicates=i,this.hidden=new co(i),this.disabledReasons=new Lr(i),this.readonly=new co(i),this.syncErrors=gi.ignoreNull(i),this.syncTreeErrors=gi.ignoreNull(i),this.asyncErrors=gi.ignoreNull(i)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(i){return this.metadata.has(i)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(i){return this.metadata.has(i)||this.metadata.set(i,new Nr(this.predicates,i)),this.metadata.get(i)}mergeIn(i){this.hidden.mergeIn(i.hidden),this.disabledReasons.mergeIn(i.disabledReasons),this.readonly.mergeIn(i.readonly),this.syncErrors.mergeIn(i.syncErrors),this.syncTreeErrors.mergeIn(i.syncTreeErrors),this.asyncErrors.mergeIn(i.asyncErrors);for(let e of i.getMetadataKeys()){let t=i.metadata.get(e);this.getMetadata(e).mergeIn(t)}}},mo=class{depth;constructor(i){this.depth=i}build(){return new uo(this,[],0)}},bi=class n extends mo{constructor(i){super(i)}current;all=[];addHiddenRule(i){this.getCurrent().addHiddenRule(i)}addDisabledReasonRule(i){this.getCurrent().addDisabledReasonRule(i)}addReadonlyRule(i){this.getCurrent().addReadonlyRule(i)}addSyncErrorRule(i){this.getCurrent().addSyncErrorRule(i)}addSyncTreeErrorRule(i){this.getCurrent().addSyncTreeErrorRule(i)}addAsyncErrorRule(i){this.getCurrent().addAsyncErrorRule(i)}addMetadataRule(i,e){this.getCurrent().addMetadataRule(i,e)}getChild(i){if(i===jt){let e=this.getCurrent().children;e.size>(e.has(jt)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(i)}hasLogic(i){return this===i?!0:this.all.some(({builder:e})=>e.hasLogic(i))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:i})=>i.anyChildHasLogic())}mergeIn(i,e){e?this.all.push({builder:i,predicate:{fn:Mt(e.fn,this.depth),path:e.path}}):this.all.push({builder:i}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new Ji(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}},Ji=class extends mo{logic=new _i([]);children=new Map;constructor(i){super(i)}addHiddenRule(i){this.logic.hidden.push(Mt(i,this.depth))}addDisabledReasonRule(i){this.logic.disabledReasons.push(Mt(i,this.depth))}addReadonlyRule(i){this.logic.readonly.push(Mt(i,this.depth))}addSyncErrorRule(i){this.logic.syncErrors.push(Mt(i,this.depth))}addSyncTreeErrorRule(i){this.logic.syncTreeErrors.push(Mt(i,this.depth))}addAsyncErrorRule(i){this.logic.asyncErrors.push(Mt(i,this.depth))}addMetadataRule(i,e){this.logic.getMetadata(i).push(Mt(e,this.depth))}getChild(i){return this.children.has(i)||this.children.set(i,new bi(this.depth+1)),this.children.get(i)}hasLogic(i){return this===i}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let i of this.children.values())if(i.hasRules())return!0;return!1}},uo=class n{builder;predicates;depth;logic;constructor(i,e,t){this.builder=i,this.predicates=e,this.depth=t,this.logic=i?Iu(i,e,t):new _i([])}getChild(i){let e=this.builder?$l(this.builder,i):[];if(e.length===0)return new n(void 0,[],this.depth+1);if(e.length===1){let{builder:t,predicates:o}=e[0];return new n(t,[...this.predicates,...o.map(r=>Br(r,this.depth))],this.depth+1)}else{let t=e.map(({builder:o,predicates:r})=>new n(o,[...this.predicates,...r.map(a=>Br(a,this.depth))],this.depth+1));return new Vr(t)}}hasLogic(i){return this.builder?this.builder.hasLogic(i):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}},Vr=class n{all;logic;constructor(i){this.all=i,this.logic=new _i([]);for(let e of i)this.logic.mergeIn(e.logic)}getChild(i){return new n(this.all.flatMap(e=>e.getChild(i)))}hasLogic(i){return this.all.some(e=>e.hasLogic(i))}hasRules(){return this.all.some(i=>i.hasRules())}anyChildHasLogic(){return this.all.some(i=>i.anyChildHasLogic())}};function $l(n,i){if(n instanceof bi)return n.all.flatMap(({builder:e,predicate:t})=>{let o=$l(e,i);return t?o.map(({builder:r,predicates:a})=>({builder:r,predicates:[...a,t]})):o});if(n instanceof Ji)return[...i!==jt&&n.children.has(jt)?[{builder:n.getChild(jt),predicates:[]}]:[],...n.children.has(i)?[{builder:n.getChild(i),predicates:[]}]:[]];throw new pe(1909,!1)}function Iu(n,i,e){let t=new _i(i);if(n instanceof bi){let o=n.all.map(({builder:r,predicate:a})=>new uo(r,a?[...i,Br(a,e)]:i,e));for(let r of o)t.mergeIn(r.logic)}else if(n instanceof Ji)t.mergeIn(n.logic);else throw new pe(1909,!1);return t}function Br(n,i){return ge(V({},n),{depth:i})}var Kl=Symbol("PATH"),mt=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Au);logicBuilder;constructor(i,e,t,o){this.keys=i,this.parent=t,this.keyInParent=o,this.root=e??this,t||(this.logicBuilder=bi.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(i){return this.children.has(i)||this.children.set(i,new n([...this.keys,i],this.root,this,i)),this.children.get(i)}mergeIn(i,e){let t=i.compile();this.builder.mergeIn(t.builder,e)}static unwrapFieldPath(i){return i[Kl]}static newRoot(){return new n([],void 0,void 0,void 0)}},Au={get(n,i){return i===Kl?n:n.getChild(i).fieldPathProxy}},so,Yi=new Map,ho=class n{schemaFn;constructor(i){this.schemaFn=i}compile(){if(Yi.has(this))return Yi.get(this);let i=mt.newRoot();Yi.set(this,i);let e=so;try{so=i,this.schemaFn(i.fieldPathProxy)}finally{so=e}return i}static create(i){return i instanceof n?i:new n(i)}static rootCompile(i){try{return Yi.clear(),i===void 0?mt.newRoot():i instanceof n?i.compile():new n(i).compile()}finally{Yi.clear()}}};function Fu(n){return n instanceof ho||typeof n=="function"}function Xr(n){if(so!==mt.unwrapFieldPath(n).root)throw new pe(1908,!1)}function ut(n,i,e){return Xr(n),mt.unwrapFieldPath(n).builder.addMetadataRule(i,e),i}var Ot={list(){return{reduce:(n,i)=>i===void 0?n:[...n,i],getInitial:()=>[]}},min(){return{reduce:(n,i)=>n===void 0||i===void 0?n??i:i<n?i:n,getInitial:()=>{}}},max(){return{reduce:(n,i)=>n===void 0||i===void 0?n??i:i>n?i:n,getInitial:()=>{}}},or(){return{reduce:(n,i)=>n||i,getInitial:()=>!1}},and(){return{reduce:(n,i)=>n&&i,getInitial:()=>!0}},override:Ru};function Ru(n){return{reduce:(i,e)=>e,getInitial:()=>n?.()}}var Yr=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),po=class{reducer;create;brand;[Yr];constructor(i,e){this.reducer=i,this.create=e}};function Ue(n){return new po(n??Ot.override())}function Zr(){return Ue()}var Jr=Ue(Ot.or()),ea=Zr();var ta=Ue(Ot.max()),ia=Zr();var na=Ue(Ot.min()),Ql=Ue(Ot.max()),Xl=Ue(Ot.min()),Yl=Ue(Ot.list());function Be(n,i){if(n===i)return!0;if(!n||!i||n.length!==i.length)return!1;for(let e=0;e<n.length;e++)if(!Object.is(n[e],i[e]))return!1;return!0}function Lu(n){return n.errors().length>0?"invalid":n.pending()?"unknown":"valid"}var zr=class{node;constructor(i){this.node=i}rawSyncTreeErrors=p(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Be});syncErrors=p(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Nu(this.node.submitState.submissionErrors())],{equal:Be});syncValid=p(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(i,e)=>e&&i.validationState.syncValid(),Eu));syncTreeErrors=p(()=>this.rawSyncTreeErrors().filter(i=>i.fieldTree===this.node.fieldTree),{equal:Be});rawAsyncErrors=p(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Be});asyncErrors=p(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(i=>i==="pending"||i.fieldTree===this.node.fieldTree),{equal:Be});parseErrors=p(()=>this.node.formFieldBindings().flatMap(i=>i.parseErrors()),{equal:Be});errors=p(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(i=>i!=="pending")],{equal:Be});errorSummary=p(()=>{let i=this.node.structure.reduceChildren(this.errors(),(e,t)=>[...t,...e.errorSummary()]);return N(()=>i.sort(Vu)),i},{equal:Be});pending=p(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(i,e)=>e||i.validationState.asyncErrors().includes("pending")));status=p(()=>{if(this.shouldSkipValidation())return"valid";let i=Lu(this);return this.node.structure.reduceChildren(i,(e,t)=>t==="invalid"||e.validationState.status()==="invalid"?"invalid":t==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=p(()=>this.status()==="valid");invalid=p(()=>this.status()==="invalid");shouldSkipValidation=p(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Nu(n){return n===void 0?[]:St(n)?n:[n]}function Zl(n,i){if(St(n))for(let e of n)e.fieldTree??=i;else n&&(n.fieldTree??=i);return n}function ql(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((i,e)=>!i||!e.element?i??e.element:i.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:i,void 0)}function Vu(n,i){let e=ql(n),t=ql(i);return e===t?0:e===void 0||t===void 0?e===void 0?1:-1:e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Wr=Ue(),jr=class{node;cache=new WeakMap;constructor(i){this.node=i,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(i){if(!this.cache.has(i)){let e=p(()=>{let t=mt.unwrapFieldPath(i),o=this.node,r=Tu();for(;r>0||!o.structure.logic.hasLogic(t.root.builder);)if(r--,o=o.structure.parent,o===void 0)throw new pe(1900,!1);for(let a of t.keys)if(o=o.structure.getChild(a),o===void 0)throw new pe(1901,!1);return o.fieldTree});this.cache.set(i,e)}return this.cache.get(i)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=p(()=>{let i=this.key();if(!St(N(this.node.structure.parent.value)))throw new pe(1906,!1);return Number(i)});fieldTreeOf(i){return this.resolve(i)}stateOf(i){return this.resolve(i)()}valueOf=i=>{let e=this.resolve(i)().value();if(e instanceof di)throw new pe(1907,!1);return e}},Ur=class{node;metadata=new Map;constructor(i){this.node=i}runMetadataCreateLifecycle(){this.node.logicNode.logic.hasMetadataKeys()&&N(()=>Di(this.node.structure.injector,()=>{for(let i of this.node.logicNode.logic.getMetadataKeys())if(i.create){let e=this.node.logicNode.logic.getMetadata(i),t=i.create(this.node,p(()=>e.compute(this.node.context)));this.metadata.set(i,t)}}))}get(i){if(this.has(i)&&!this.metadata.has(i)){if(i.create)throw new pe(1912,!1);let e=this.node.logicNode.logic.getMetadata(i);this.metadata.set(i,p(()=>e.compute(this.node.context)))}return this.metadata.get(i)}has(i){return this.node.logicNode.logic.hasMetadata(i)}},Bu={get(n,i,e){let t=n(),o=t.structure.getChild(i);if(o!==void 0)return o.fieldTree;let r=N(t.value);if(St(r)){if(i==="length")return t.value().length;if(i===Symbol.iterator)return()=>(t.value(),Array.prototype[Symbol.iterator].apply(t.fieldTree))}if(lo(r)&&i===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(n,i){let e=N(n().value),t=Reflect.getOwnPropertyDescriptor(e,i);return t&&!t.configurable&&(t.configurable=!0),t},ownKeys(n){let i=N(n().value);return typeof i=="object"&&i!==null?Reflect.ownKeys(i):[]}};function zu(n,i){let e=p(()=>n()[i()]);return e[zo]=n[zo],e.set=t=>{Object.is(N(e),t)||n.update(o=>Wu(o,t,i()))},e.update=t=>{e.set(t(N(e)))},e.asReadonly=()=>e,e}function Wu(n,i,e){if(St(n)){let t=[...n];return t[e]=i,t}else return ge(V({},n),{[e]:i})}var fi=Symbol(""),Jl=p(()=>!1),fo=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=$.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(i,e,t){this.logic=i,this.node=e,this.createChildNode=t}children(){this.ensureChildrenMap();let i=this.childrenMap();return i===void 0?[]:Array.from(i.byPropertyKey.values()).map(e=>N(e.reader))}materializedChildren(){let i=this.childrenMap();return i===void 0?[]:Array.from(i.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return N(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||N(()=>{this.childrenMap.update(i=>this.computeChildrenMap(this.value(),i,!0))})}getChild(i){this.ensureChildrenMap();let e=i.toString(),t=N(this.childrenMap)?.byPropertyKey.get(e)?.reader;return t||(t=this.createReader(e)),t()}reduceChildren(i,e,t){let o=this.childrenMap();if(!o)return i;let r=i;for(let a of o.byPropertyKey.values()){if(t?.(r))break;r=e(N(a.reader),r)}return r}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(i,e,t){if(i==="root")return{keyInParent:ed,isOrphaned:Jl};let o=this.parent,r=t,a=p(()=>{if(o.structure.isOrphaned())return fi;let I=o.structure.childrenMap();if(!I)return fi;let X=I.byPropertyKey.get(r);if(X&&X.node===this.node)return r;if(e===void 0)return fi;for(let[ye,Fe]of I.byPropertyKey)if(Fe.node===this.node)return r=ye;return fi}),u=p(()=>a()===fi);return{keyInParent:p(()=>{let I=a();if(I===fi)throw e===void 0?new pe(-1902,!1):new pe(1904,!1);return I}),isOrphaned:u}}createChildrenMap(){return Ft({source:this.value,computation:(i,e)=>this.computeChildrenMap(i,e?.value,!1)})}computeChildrenMap(i,e,t){if(!lo(i)||!t&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:new Map};let o,r=St(i);e!==void 0&&(r?o=Uu(e,i,this.identitySymbol):o=Hu(e,i));for(let a of Object.keys(i)){let u,h=i[a];if(h===void 0){e.byPropertyKey.has(a)&&(o??=V({},e),o.byPropertyKey.delete(a));continue}r&&lo(h)&&!St(h)&&(u=h[this.identitySymbol]??=Symbol(""));let I;u&&(e.byTrackingKey?.has(u)||(o??=V({},e),o.byTrackingKey??=new Map,o.byTrackingKey.set(u,this.createChildNode(a,u,r))),I=(o??e).byTrackingKey.get(u));let X=e.byPropertyKey.get(a);X===void 0?(o??=V({},e),o.byPropertyKey.set(a,{reader:this.createReader(a),node:I??this.createChildNode(a,u,r)})):I&&I!==X.node&&(o??=V({},e),X.node=I)}return o??e}createReader(i){return p(()=>this.childrenMap()?.byPropertyKey.get(i)?.node)}},Hr=class extends fo{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return ju}get keyInParent(){return ed}isOrphaned=Jl;childrenMap;constructor(i,e,t,o,r){super(e,i,r),this.fieldManager=t,this.value=o,this.childrenMap=this.createChildrenMap()}},qr=class extends fo{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(i,e,t,o,r,a){super(e,i,a),this.logic=e,this.parent=t,this.root=this.parent.structure.root;let u=this.createKeyOrOrphanSignals("child",o,r);this.isOrphaned=u.isOrphaned,this.keyInParent=u.keyInParent,this.pathKeys=p(()=>[...t.structure.pathKeys(),this.keyInParent()]),this.value=zu(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var ju=p(()=>[]),ed=p(()=>{throw new pe(1905,!1)});function Uu(n,i,e){let t,o=new Set(n.byPropertyKey.keys()),r=new Set(n.byTrackingKey?.keys());for(let a=0;a<i.length;a++){let u=i[a];o.delete(a.toString()),lo(u)&&u.hasOwnProperty(e)&&r.delete(u[e])}if(o.size>0){t??=V({},n);for(let a of o)t.byPropertyKey.delete(a)}if(r.size>0){t??=V({},n);for(let a of r)t.byTrackingKey?.delete(a)}return t}function Hu(n,i){let e;for(let t of n.byPropertyKey.keys())i.hasOwnProperty(t)||(e??=V({},n),e.byPropertyKey.delete(t));return e}var Gr=class{node;selfSubmitting=M(!1);submissionErrors;constructor(i){this.node=i,this.submissionErrors=Ft({source:this.node.structure.value,computation:()=>[]})}submitting=p(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},en=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new jr(this)}fieldProxy=new Proxy(()=>this,Bu);pathNode;constructor(i){this.pathNode=i.pathNode,this.fieldAdapter=i.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,i),this.validationState=this.fieldAdapter.createValidationState(this,i),this.nodeState=this.fieldAdapter.createNodeState(this,i),this.metadataState=new Ur(this),this.submitState=new Gr(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(i){this.getBindingForFocus()?.focus(i)}getBindingForFocus(){let i=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(Gl,void 0);return i||this.structure.children().map(e=>e.getBindingForFocus()).reduce(Gl,void 0)}pendingSync=Ft({source:()=>this.value(),computation:(i,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let i=this.metadata(ia)?.();return i?this.metadata(i):void 0}get maxLength(){return this.metadata(Xl)}get min(){let i=this.metadata(ea)?.();return i?this.metadata(i):void 0}get minLength(){return this.metadata(Ql)}get pattern(){return this.metadata(Yl)??qu}get required(){return this.metadata(Jr)??Gu}metadata(i){return this.metadataState.get(i)}getError(i){return this.errors().find(e=>e.kind===i)}hasMetadata(i){return this.metadataState.has(i)}markAsTouched(i){this.structure.isOrphaned()||N(()=>{this.markAsTouchedInternal(i),this.flushSync()})}markAsTouchedInternal(i){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!i?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(i){N(()=>this._reset(i))}_reset(i){this.pendingSync()?.abort(),i!==void 0&&this.value.set(i),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset()}reloadValidation(){N(()=>this._reloadValidation())}_reloadValidation(){let i=this.logicNode.logic.getMetadataKeys();for(let e of i)e[Yr]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation()}controlValueSignal(){let i=Ft(this.value);i.rawSet=i.set,i.set=t=>{i.rawSet(t),this.markAsDirty(),this.debounceSync()};let e=i.update;return i.update=t=>{e(t),this.markAsDirty(),this.debounceSync()},i}sync(){this.value.set(this.controlValue())}flushSync(){let i=this.pendingSync();i&&!i.signal.aborted&&(i.abort(),this.sync())}async debounceSync(){let i=N(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(i){let e=new AbortController,t=i(e.signal);if(t&&(this.pendingSync.set(e),await t,e.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(i,e,t,o){return o.newRoot(i,e,t,o)}createStructure(i){return i.kind==="root"?new Hr(this,i.logic,i.fieldManager,i.value,this.newChild.bind(this)):new qr(this,i.logic,i.parent,i.identityInParent,i.initialKeyInParent,this.newChild.bind(this))}newChild(i,e,t){let o,r;return t?(o=this.pathNode.getChild(jt),r=this.structure.logic.getChild(jt)):(o=this.pathNode.getChild(i),r=this.structure.logic.getChild(i)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:o,logic:r,initialKeyInParent:i,identityInParent:e,fieldAdapter:this.fieldAdapter})}},qu=p(()=>[]),Gu=p(()=>!1);function Gl(n,i){return n?i&&n.element.compareDocumentPosition(i.element)&Node.DOCUMENT_POSITION_PRECEDING?i:n:i}var $r=class{node;selfTouched=M(!1);selfDirty=M(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=M([]);constructor(i){this.node=i}dirty=p(()=>{let i=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(i,(e,t)=>t||e.nodeState.dirty(),Ul)});touched=p(()=>{let i=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(i,(e,t)=>t||e.nodeState.touched(),Ul)});disabledReasons=p(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Be});disabled=p(()=>!!this.disabledReasons().length);readonly=p(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=p(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=p(()=>{let i=this.node.structure.parent;return i?`${i.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=p(()=>{if(this.node.logicNode.logic.hasMetadata(Wr)){let e=this.node.logicNode.logic.getMetadata(Wr).compute(this.node.context);if(e)return t=>e(this.node.context,t)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=p(()=>this.hidden()||this.disabled()||this.readonly())},Kr=class{newRoot(i,e,t,o){return new en({kind:"root",fieldManager:i,value:e,pathNode:t,logic:t.builder.build(),fieldAdapter:o})}newChild(i){return new en(i)}createNodeState(i){return new $r(i)}createValidationState(i){return new zr(i)}createStructure(i,e){return i.createStructure(e)}},Qr=class{injector;rootName;submitOptions;constructor(i,e,t){this.injector=i,this.rootName=e??`${this.injector.get(Ma)}.form${$u++}`,this.submitOptions=t}structures=new Set;createFieldManagementEffect(i){te(()=>{let e=new Set;this.markStructuresLive(i,e);for(let t of this.structures)e.has(t)||(this.structures.delete(t),N(()=>t.destroy()))},{injector:this.injector})}markStructuresLive(i,e){e.add(i);for(let t of i.children())this.markStructuresLive(t.structure,e)}},$u=0,td=new w("");function Ku(n){let i,e,t;return n.length===3?[i,e,t]=n:n.length===2?Fu(n[1])?[i,e]=n:[i,t]=n:[i]=n,[i,e,t]}function oa(...n){let[i,e,t]=Ku(n),o=t?.injector??s($),r=Di(o,()=>ho.rootCompile(e)),a=new Qr(o,t?.name,t?.submission),u=t?.adapter??new Kr,h=en.newRoot(a,i,r,u);a.createFieldManagementEffect(h.structure);let{experimentalWebMcpTool:I}=t??{};if(I){let X=Di(o,()=>s(td,{optional:!0}));X&&Di(o,()=>X(h.fieldTree,{name:I.name,description:I.description}))}return h.fieldTree}var go=class{kind="compat";control;fieldTree;context;message;constructor({context:i,kind:e,control:t}){this.context=i,this.kind=e,this.control=t}};function id(n){if(n.length===0)return null;let i={};for(let e of n)i[e.kind]=e instanceof go?e.context:e;return i}function nd(n,i){return n===null?[]:Object.entries(n).map(([e,t])=>new go({context:t,kind:e,control:i}))}var Qu=new w("");function vi(n,i){return n instanceof Function?n(i):n}function Xu(n){return typeof n=="number"?isNaN(n):n===""||n===!1||n==null}function od(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function ca(n,i){Xr(n),mt.unwrapFieldPath(n).builder.addSyncErrorRule(t=>Zl(i(t),t.fieldTree))}function Yu(n){return new ra(n)}function Zu(n,i){return new aa(n,i)}function Ju(n,i){return new sa(n,i)}var yi=class{__brand=void 0;kind="";fieldTree;message;constructor(i){i&&Object.assign(this,i)}},ra=class extends yi{kind="required"},aa=class extends yi{min;kind="min";constructor(i,e){super(e),this.min=i}};var sa=class extends yi{max;kind="max";constructor(i,e){super(e),this.max=i}};var bo=class extends yi{kind="parse"};function wi(n,i,e){let t=Ue();ut(n,t,o=>{if(!(e?.when&&!e.when(o)))return typeof i=="function"?i(o):i}),ut(n,na,({state:o})=>o.metadata(t)()),ut(n,ia,()=>na),ca(n,o=>{let r=o.value();if(r===null||Number.isNaN(r))return;let a=o.state.metadata(t)();if(!(a===void 0||Number.isNaN(a))&&r>a)return e?.error?vi(e.error,o):Ju(a,{message:vi(e?.message,o)})})}function Ht(n,i,e){let t=Ue();ut(n,t,o=>{if(!(e?.when&&!e.when(o)))return typeof i=="function"?i(o):i}),ut(n,ta,({state:o})=>o.metadata(t)()),ut(n,ea,()=>ta),ca(n,o=>{let r=o.value();if(r===null||Number.isNaN(r))return;let a=o.state.metadata(t)();if(!(a===void 0||Number.isNaN(a))&&r<a)return e?.error?vi(e.error,o):Zu(a,{message:vi(e?.message,o)})})}function Dt(n,i){let e=ut(n,Ue(),t=>i?.when?i.when(t):!0);ut(n,Jr,({state:t})=>t.metadata(e)()),ca(n,t=>{if(t.state.metadata(e)()&&Xu(t.value()))return i?.error?vi(i.error,t):Yu({message:vi(i?.message,t)})})}function eh(n,i,e){let t=Ft({source:n,computation:()=>[],equal:Be}),o=a=>{let u=e(a);t.set(od(u.error)),u.value!==void 0&&i(u.value),t.set(od(u.error))},r=()=>{t.set([])};return{errors:t.asReadonly(),setRawValue:o,reset:r}}var la=class{field;constructor(i){this.field=i}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return id(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new pe(1910,!1)}valueAccessor=null;hasValidator(i){return i===tt.required?this.field().required():!1}updateValueAndValidity(){}},da={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},th=(()=>{let n={};for(let i of Object.keys(da))n[da[i]]=i;return n})();function ma(n,i){let e=th[i];return n[e]?.()}var ua=Object.values(da);function vo(){return{}}function Ut(n,i,e){return n[i]!==e?(n[i]=e,!0):!1}function ih(n,i,e){let t;if(ld(n)&&e.isBadInput(n))return{error:new bo};switch(n.type){case"checkbox":return{value:n.checked};case"number":case"range":case"datetime-local":if(t=N(i),typeof t=="number"||t===null)return{value:n.value===""?null:n.valueAsNumber};break;case"date":case"month":case"time":case"week":if(t=N(i),t===null||t instanceof Date)return{value:n.valueAsDate};if(typeof t=="number")return{value:n.valueAsNumber};break}if(n.tagName==="INPUT"&&n.type==="text"&&(t??=N(i),typeof t=="number"||t===null)){if(n.value==="")return{value:null};let o=Number(n.value);return Number.isNaN(o)?{error:new bo}:{value:o}}return{value:n.value}}function rd(n,i){switch(n.type){case"checkbox":n.checked=i;return;case"radio":n.checked=i===n.value;return;case"number":case"range":case"datetime-local":if(typeof i=="number"){ad(n,i);return}else if(i===null){n.value="";return}break;case"date":case"month":case"time":case"week":if(i===null||i instanceof Date){n.valueAsDate=i;return}else if(typeof i=="number"){ad(n,i);return}}if(n.tagName==="INPUT"&&n.type==="text"){if(typeof i=="number"){n.value=isNaN(i)?"":String(i);return}if(i===null){n.value="";return}}n.value=i}function ad(n,i){isNaN(i)?n.value="":n.valueAsNumber=i}function ld(n){return n.tagName==="INPUT"}function nh(n){return n.type==="date"||n.type==="datetime-local"||n.type==="month"||n.type==="time"||n.type==="week"}function oh(n,i){let e=n.getUTCFullYear(),t=String(n.getUTCMonth()+1).padStart(2,"0");if(i==="month")return`${e}-${t}`;let o=String(n.getUTCDate()).padStart(2,"0");return`${e}-${t}-${o}`}function dd(n,i,e){return i instanceof Date&&(n==="min"||n==="max")&&(e==="date"||e==="month")?oh(i,e):i}function rh(n,i){n.listenToCustomControlModel(t=>i.state().controlValue.set(t)),n.listenToCustomControlOutput("touch",()=>i.state().markAsTouched()),i.registerAsBinding(n.customControl);let e=vo();return()=>{let t=i.state(),o=t.controlValue();Ut(e,"controlValue",o)&&n.setCustomControlModelInput(o);for(let r of ua){let a;if(r==="errors"?a=i.errors():a=ma(t,r),Ut(e,r,a)&&(n.setInputOnDirectives(r,a),i.elementAcceptsNativeProperty(r)&&!n.customControlHasInput(r))){let u=dd(r,a,i.nativeFormElement.type);ji(i.renderer,i.nativeFormElement,r,u)}}}}function ah(n){return typeof n=="object"&&n!==null}function sh(n,i){let e=vo();i.controlValueAccessor.registerOnChange(o=>{e.controlValue=o,i.state().controlValue.set(o)}),i.controlValueAccessor.registerOnTouched(()=>i.state().markAsTouched());let t=i.injector.get(lt,null,{optional:!0,self:!0});if(t){let o;for(let h of t)ah(h)&&h.registerOnValidatorChange&&(o??=M(0),h.registerOnValidatorChange(()=>{o.update(I=>I+1)}));let r=t.map(h=>typeof h=="function"?h:h.validate.bind(h)),a=tt.compose(r),u=p(()=>{o?.();let h=a?a(i.interopNgControl.control):null;return nd(h,i.interopNgControl.control)});i.parseErrorsSource.set(u)}return i.registerAsBinding({reset:()=>{let o=i.state().value();e.controlValue=o,N(()=>i.controlValueAccessor.writeValue(o))}}),()=>{let o=i.state(),r=o.value();Ut(e,"controlValue",r)&&N(()=>i.controlValueAccessor.writeValue(r));for(let a of ua){let u=ma(o,a);if(Ut(e,a,u)){let h=n.setInputOnDirectives(a,u);a==="disabled"&&i.controlValueAccessor.setDisabledState?N(()=>i.controlValueAccessor.setDisabledState(u)):!h&&i.elementAcceptsNativeProperty(a)&&ji(i.renderer,i.nativeFormElement,a,u)}}}}function lh(n,i,e){if(typeof MutationObserver!="function")return;let t=new MutationObserver(o=>{o.some(r=>dh(r))&&i()});t.observe(n,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>t.disconnect())}function dh(n){if(n.type==="childList"||n.type==="characterData"){if(n.target instanceof Comment)return!1;for(let i of n.addedNodes)if(!(i instanceof Comment))return!0;for(let i of n.removedNodes)if(!(i instanceof Comment))return!0;return!1}return n.type==="attributes"&&n.target instanceof HTMLOptionElement}function ch(n,i,e,t){let o=!1,r=i.nativeFormElement,a=eh(()=>i.state().value(),h=>i.state().controlValue.set(h),h=>ih(r,i.state().value,t));e.set(a.errors),i.onReset=()=>{a.reset();let h=i.state().value();u.controlValue=h,rd(r,h)},n.listenToDom("input",()=>a.setRawValue(void 0)),n.listenToDom("blur",()=>i.state().markAsTouched()),ld(r)&&nh(r)&&t.watchValidity(i.destroyRef,r,()=>a.setRawValue(void 0)),i.registerAsBinding(),r.tagName==="SELECT"&&lh(r,()=>{o&&(r.value=i.state().controlValue())},i.destroyRef);let u=vo();return()=>{let h=i.state();for(let X of ua){let ye=ma(h,X);if(Ut(u,X,ye)&&(n.setInputOnDirectives(X,ye),i.elementAcceptsNativeProperty(X))){let Fe=dd(X,ye,r.type);ji(i.renderer,r,X,Fe)}}let I=h.controlValue();Ut(u,"controlValue",I)&&rd(r,I),o=!0}}var cd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=B({token:n,factory:e=>mh.\u0275fac(e),providedIn:"root"})}return n})(),mh=(()=>{class n extends cd{document=s(qe);cspNonce=s(Oa,{optional:!0});injectedStyles=new WeakMap;watchValidity(e,t,o){let r=t.getRootNode();this.injectedStyles.has(r)||this.injectedStyles.set(r,this.createTransitionStyle(r));let a=u=>{let h=u;(h.animationName==="ng-valid"||h.animationName==="ng-invalid")&&o()};t.addEventListener("animationstart",a),e.onDestroy(()=>{t.removeEventListener("animationstart",a)})}isBadInput(e){return e.validity?.badInput??!1}createTransitionStyle(e){let t=this.document.createElement("style");return this.cspNonce&&(t.nonce=this.cspNonce),t.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(t):e.appendChild(t),t}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=A(n)))(o||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})(),uh=Symbol(),sd=new w(""),md=(()=>{class n{field=Yt.required({alias:"formField"});state=p(()=>this.field()());renderer=s(oe);destroyRef=s(Qt);injector=s($);element=s(R).nativeElement;elementIsNativeFormElement=sr(this.element);elementAcceptsTextualValues=Ls(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=s(st,{optional:!0,self:!0});config=s(Qu,{optional:!0});validityMonitor=s(cd);parseErrorsSource=M(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new la(this.state)}parseErrors=p(()=>this.parseErrorsSource()?.().map(e=>ge(V({},e),{fieldTree:N(this.state).fieldTree,formField:this}))??[],{equal:Be});errors=p(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Be});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e)}set onReset(e){this.parseErrorsResetCallback=e}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:cr(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([o,r])=>[o,p(()=>r(this))]);if(e.length===0)return;let t=vo();Zt({write:()=>{for(let[o,r]of e){let a=r();Ut(t,o,a)&&(a?this.renderer.addClass(this.element,o):this.renderer.removeClass(this.element,o))}}},{injector:this.injector})}focus(e){this.focuser(e)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(e){if(this.isFieldBinding)throw new pe(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=t=>e.focus(t)),e?.reset&&(this.resetter=()=>e.reset()),te(t=>{let o=this.state();o.nodeState.formFieldBindings.update(r=>[...r,this]),t(()=>{o.nodeState.formFieldBindings.update(r=>r.filter(a=>a!==this))})},{injector:this.injector})}[uh];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=sh(e,this);else if(e.customControl)this.\u0275ngControlUpdate=rh(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=ch(e,this,this.parseErrorsSource,this.validityMonitor);else throw new pe(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this._elementAcceptsMinMax??=Rs(this.element);case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[H([{provide:sd,useExisting:n},{provide:Ie,useFactory:()=>s(n).interopNgControl},{provide:lr,useFactory:()=>s(sd,{self:!0})}]),Pi("formField")]})}return n})();var yo=class n extends Z{createWorkoutButtonLabel=$localize`:Save button label, when user is creating workout@@createWorkoutButtonLabel:Create`;editWorkoutButtonLabel=$localize`:Save button label, when user is updating workout@@editWorkoutButtonLabel:Update`;workoutNameFormFieldLabel=$localize`:Name form field label@@workoutNameFormFieldLabel:Name`;workoutSetsFormFieldLabel=$localize`:Sets form field label@@workoutSetsFormFieldLabel:Sets`;workoutExercisePerSetsFormFieldLabel=$localize`:Exercises  per set form field label@@workoutExercisePerSetsFormFieldLabel:Exercises / Set`;workoutDefaultTimeUnitLabel=$localize`:seconds label@@workoutDefaultTimeUnitLabel:second`;workoutPreparationTimeFormFieldLabel=$localize`:Preparation time form field label@@workoutPreparationTimeFormFieldLabel:Preparation Time`;workoutTimeFormFieldLabel=$localize`:Workout time form field label@@workoutTimeFormFieldLabel:Workout Time`;workoutRestTimeFormFieldLabel=$localize`:Rest time form field label@@workoutRestTimeFormFieldLabel:Rest Time`;workoutRestBetweenSetsTimeFormFieldLabel=$localize`:Rest Time Between Sets form field label@@workoutRestBetweenSetsTimeFormFieldLabel:Rest Time Between Sets`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var wo=class n{isNewWorkout=Yt();onWorkoutSaved=Ze();workout;saveLabel;workoutFormModel=M({name:re.SIMPLE_WORKOUT.name,numberOfSets:re.SIMPLE_WORKOUT.schedule.numberOfSets,numberOfExercises:re.SIMPLE_WORKOUT.schedule.numberOfExercises,preparationTime:re.SIMPLE_WORKOUT.schedule.preparationTime,workoutTime:re.SIMPLE_WORKOUT.schedule.workoutTime,restTime:re.SIMPLE_WORKOUT.schedule.restTime,restTimeBetweenSets:re.SIMPLE_WORKOUT.schedule.restTimeBetweenSets});workoutForm=oa(this.workoutFormModel,i=>{Dt(i.name,{message:"Workout name is required"}),Dt(i.numberOfSets),Dt(i.numberOfExercises),Dt(i.preparationTime),Dt(i.workoutTime),Dt(i.restTime),Dt(i.restTimeBetweenSets),Ht(i.numberOfSets,1),wi(i.numberOfSets,99),Ht(i.numberOfExercises,1),wi(i.numberOfExercises,99),Ht(i.preparationTime,5),wi(i.preparationTime,900),Ht(i.workoutTime,5),wi(i.workoutTime,900),Ht(i.restTime,5),wi(i.restTime,900),Ht(i.restTimeBetweenSets,0)});translations=s(yo);workoutConfigurationService=s(re);signals=s(ae);constructor(){this.saveLabel=M(this.translations.createWorkoutButtonLabel),this.workout=this.signals.selectedWorkout.toSignal(),te(()=>{let i=this.isNewWorkout(),e=this.workout();i?(this.saveLabel.set(this.translations.createWorkoutButtonLabel),this.workoutFormModel.set({name:re.SIMPLE_WORKOUT.name,numberOfSets:re.SIMPLE_WORKOUT.schedule.numberOfSets,numberOfExercises:re.SIMPLE_WORKOUT.schedule.numberOfExercises,preparationTime:re.SIMPLE_WORKOUT.schedule.preparationTime,workoutTime:re.SIMPLE_WORKOUT.schedule.workoutTime,restTime:re.SIMPLE_WORKOUT.schedule.restTime,restTimeBetweenSets:re.SIMPLE_WORKOUT.schedule.restTimeBetweenSets})):e&&(this.saveLabel.set(this.translations.editWorkoutButtonLabel),this.workoutFormModel.set({name:e.name,numberOfSets:e.schedule.numberOfSets,numberOfExercises:e.schedule.numberOfExercises,preparationTime:e.schedule.preparationTime,workoutTime:e.schedule.workoutTime,restTime:e.schedule.restTime,restTimeBetweenSets:e.schedule.restTimeBetweenSets}))})}onSaveClicked(){let i=this.workoutFormModel(),e=new ri(i.numberOfSets,i.numberOfExercises,i.preparationTime,i.workoutTime,i.restTime,i.restTimeBetweenSets);if(this.isNewWorkout()){let t=new Lt("",i.name,e);this.workoutConfigurationService.addWorkout(t)}else{let t=new Lt(this.workout().id,i.name,e);this.workoutConfigurationService.updateWorkout(t)}this.onWorkoutSaved.emit()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-workout-schedule"]],inputs:{isNewWorkout:[1,"isNewWorkout"]},outputs:{onWorkoutSaved:"onWorkoutSaved"},decls:41,vars:23,consts:[[1,"workout-schedule-form-container"],[1,"workout-schedule-form"],["floatLabel","always","subscriptSizing","dynamic",1,"workout-schedule-form-field"],["matInput","","type","text",3,"formField"],["matInput","","type","number","step","1",3,"formField"],["matInput","","type","number","step","5",3,"formField"],["matTextSuffix","",1,"workout-schedule-form-field-suffix"],[1,"workout-schedule-form-actions"],["matButton","filled",3,"click","title","disabled"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label"),m(4),d(),C(5,"input",3),Oe(),d(),l(6,"mat-form-field",2)(7,"mat-label"),m(8),d(),C(9,"input",4),Oe(),d(),l(10,"mat-form-field",2)(11,"mat-label"),m(12),d(),C(13,"input",4),Oe(),d(),l(14,"mat-form-field",2)(15,"mat-label"),m(16),d(),C(17,"input",5),Oe(),l(18,"span",6),m(19),d()(),l(20,"mat-form-field",2)(21,"mat-label"),m(22),d(),C(23,"input",5),Oe(),l(24,"span",6),m(25),d()(),l(26,"mat-form-field",2)(27,"mat-label"),m(28),d(),C(29,"input",5),Oe(),l(30,"span",6),m(31),d()(),l(32,"mat-form-field",2)(33,"mat-label"),m(34),d(),C(35,"input",5),Oe(),l(36,"span",6),m(37),d()()(),l(38,"div",7)(39,"button",8),g("click",function(){return t.onSaveClicked()}),m(40),d()()()),e&2&&(c(4),v(t.translations.workoutNameFormFieldLabel),c(),f("formField",t.workoutForm.name),De(),c(3),v(t.translations.workoutSetsFormFieldLabel),c(),f("formField",t.workoutForm.numberOfSets),De(),c(3),v(t.translations.workoutExercisePerSetsFormFieldLabel),c(),f("formField",t.workoutForm.numberOfExercises),De(),c(3),v(t.translations.workoutPreparationTimeFormFieldLabel),c(),f("formField",t.workoutForm.preparationTime),De(),c(2),v(t.translations.workoutDefaultTimeUnitLabel),c(3),v(t.translations.workoutTimeFormFieldLabel),c(),f("formField",t.workoutForm.workoutTime),De(),c(2),v(t.translations.workoutDefaultTimeUnitLabel),c(3),v(t.translations.workoutRestTimeFormFieldLabel),c(),f("formField",t.workoutForm.restTime),De(),c(2),v(t.translations.workoutDefaultTimeUnitLabel),c(3),v(t.translations.workoutRestBetweenSetsTimeFormFieldLabel),c(),f("formField",t.workoutForm.restTimeBetweenSets),De(),c(2),v(t.translations.workoutDefaultTimeUnitLabel),c(2),f("title",Q(t.saveLabel()))("disabled",t.workoutForm().invalid()),b("aria-label",t.saveLabel()),c(),G(" ",t.saveLabel()," "))},dependencies:[me,bt,dt,ci,zt,gr,Qn,hl,md],styles:[".workout-schedule-form-container[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:1rem}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]   .workout-schedule-form-field[_ngcontent-%COMP%]{width:100%}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form[_ngcontent-%COMP%]   .workout-schedule-form-field-suffix[_ngcontent-%COMP%]{margin-left:.5rem}.workout-schedule-form-container[_ngcontent-%COMP%]   .workout-schedule-form-actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}"]})};var Ci=class n extends Z{createWorkoutNavHeaderLabel=$localize`:Side sheet label, when user is creating workout@@createWorkoutNavHeaderLabel:New Workout`;editWorkoutNavHeaderLabel=$localize`:Side sheet label, when user is editing a workout@@editWorkoutNavHeaderLabel:Edit Workout`;closeSideSheetButtonLabel=$localize`:close side sheet label name@@closeSideSheetButtonLabel:Back`;newWorkoutButtonLabel=$localize`:New workout button label name@@newWorkoutButtonLabel:New Workout`;aboutButtonLabel=$localize`:About button label@@aboutButtonLabel:About`;workoutListLabel=$localize`:Heading for workout list@@workoutListLabel:My Workouts`;workoutLabel=$localize`:Workout label@@workoutLabel:Workout`;setLabel=$localize`:Set label name@@setLabel:Set`;exerciseLabel=$localize`:Exercise label@@exerciseLabel:Exercise`;restLabel=$localize`:Rest label name@@restLabel:Rest`;timeUnitLabel=$localize`:Time unit label@@timeUnitLabel:minute`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var ud="1.4.47";var Co=class n extends Z{copyrightNotice=$localize`:Copyright notice@@copyrightNotice:2025 - Márk Szabó`;contactInformationLabel=$localize`:Contact information label@@contactInformationLabel:Contact`;madeInLabel=$localize`:Made in label@@madeInLabel:Made in`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var xi=class n{applicationVersion=M(ud);translations=s(Co);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-application-info"]],decls:25,vars:5,consts:[["matListItemIcon","","aria-hidden","true",1,"app-version-icon"],["matListItemTitle",""],["matListItemIcon","","aria-hidden","true",1,"contact-icon"],["href","mailto:hello@example.com","target","_blank","rel","noopener noreferrer"],["matListItemIcon","","aria-hidden","true",1,"copyright-icon"],["matListItemIcon","","aria-hidden","true",1,"public-icon"],[1,"made-in-section"],["src","european-flag.jpg"]],template:function(e,t){e&1&&(l(0,"mat-list")(1,"mat-list-item")(2,"mat-icon",0),m(3,"web_asset"),d(),l(4,"div",1),m(5),d()(),l(6,"mat-list-item")(7,"mat-icon",2),m(8,"mail"),d(),l(9,"div",1)(10,"a",3),m(11),d()()(),l(12,"mat-list-item")(13,"mat-icon",4),m(14,"copyright"),d(),l(15,"div",1),m(16),d()(),l(17,"mat-list-item")(18,"mat-icon",5),m(19,"public"),d(),l(20,"div",1)(21,"div",6)(22,"div"),m(23),d(),C(24,"img",7),d()()()()),e&2&&(c(5),At("",t.translations.applicationName," ",t.applicationVersion()),c(6),v(t.translations.contactInformationLabel),c(5),v(t.translations.copyrightNotice),c(7),v(t.translations.madeInLabel))},dependencies:[ue,ve,ao,zl,ro,Fr,Ar],styles:[".made-in-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.3rem}"]})};var xo=class n extends Z{closeAboutButtonLabel=$localize`:Close button label@@closeAboutButtonLabel:Close`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var ph=()=>({backgroundImage:"url(./blob-background.svg)"}),ko=class n{translations=s(xo);dialogRef=s(Qi);constructor(){}onCloseClicked(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-about-dialog"]],decls:7,vars:7,consts:[[1,"about-dialog-content"],[1,"hero"],["src","icons/icon-192x192.png",1,"application-icon"],[1,"info"],["mat-button","",1,"close-button",3,"click","title"]],template:function(e,t){e&1&&(l(0,"mat-dialog-content",0)(1,"section",1),C(2,"img",2),d(),l(3,"section",3),C(4,"tbt-application-info"),l(5,"button",4),g("click",function(){return t.onCloseClicked()}),m(6),d()()()),e&2&&(c(),Na(Va(6,ph)),c(4),f("title",Q(t.translations.closeAboutButtonLabel)),b("aria-label",t.translations.closeAboutButtonLabel),c(),G(" ",t.translations.closeAboutButtonLabel," "))},dependencies:[ue,me,bt,Tl,xi],styles:[".about-dialog-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-height:100%;padding:0}.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:30vw;width:30vw;height:30dvw;width:30dvw;background-size:cover;background-position:center}.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .application-icon[_ngcontent-%COMP%]{max-width:40%;max-height:40%}.about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;height:30vw;width:30vw;height:30dvw;width:30dvw}@media screen and ((max-width:600px)or (max-height:650px)){.about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{height:40vw;width:40vw;height:40dvw;width:40dvw;min-height:300px;min-width:300px}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:40vw;width:40vw;height:40dvw;width:40dvw;min-height:300px;min-width:300px}@media screen and ((max-width:600px)or (max-height:450px)){.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.landscape[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]{flex-direction:column}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{height:40vh;width:60vh;height:40dvh;width:60dvh}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:40vh;width:60vh;height:40dvh;width:60dvh}@media screen and (max-height:600px){.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]{display:none}.portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .about-dialog-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{height:300px!important;width:300px!important}}"]})};var Mo=class n extends Z{summary=$localize`:Summary text@@appSummary:Training, streamlined. Tabata Max is the web-based interval timer built for those who want more results with less distraction. Start faster. Train smarter.`;keyBenefitsHeader=$localize`:Header for key benefits section@@keyBenefitsHeader:Designed for the Work.`;keyBenefit1Label=$localize`:Label for key benefit 1@@keyBenefit1Label:Simply Focused`;keyBenefit2Label=$localize`:Label for key benefit 2@@keyBenefit2Label:Stay in Sync`;keyBenefit3Label=$localize`:Label for key benefit 3@@keyBenefit3Label:Seamlessly Portable`;keyBenefit4Label=$localize`:Label for key benefit 4@@keyBenefit4Label:Start Instantly`;keyBenefit1=$localize`:Text for key benefit 1@@keyBenefit1:A clean design that puts your workout first.`;keyBenefit2=$localize`:Text for key benefit 2@@keyBenefit2:Clear cues that let you focus on your movement.`;keyBenefit3=$localize`:Text for key benefit 3@@keyBenefit3:A consistent experience across all your devices.`;keyBenefit4=$localize`:Text for key benefit 4@@keyBenefit4:Open in your browser to begin. Install for offline use anytime, anywhere.`;callToActionLabel=$localize`:Call to action label@@callToActionLabel:Are You Ready?`;launcherScreenshotCaption=$localize`:Screenshot caption@@launcherScreenshotCaption:Opening screen showing your last workout`;workoutEditScreenshotCaption=$localize`:Screenshot caption@@workoutEditScreenshotCaption:Editing a workout`;workoutListScreenshotCaption=$localize`:Screenshot caption@@workoutListScreenshotCaption:Listing workouts`;workoutRestScreenshotCaption=$localize`:Screenshot caption@@workoutRestScreenshotCaption:Resting during a workout`;workoutPrepareScreenshotCaption=$localize`:Screenshot caption@@workoutPrepareScreenshotCaption:Prepare for the next rep during workout`;workoutActivityScreenshotCaption=$localize`:Screenshot caption@@workoutActivityScreenshotCaption:Workout active rep`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var fh=["*"];var gh=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],_h=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],bh=new w("MAT_CARD_CONFIG"),hd=(()=>{class n{appearance;constructor(){let e=s(bh,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,o){t&2&&O("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:fh,decls:1,vars:0,template:function(t,o){t&1&&(U(),S(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})}return n})(),pd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var fd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var gd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:_h,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,o){t&1&&(U(gh),S(0),Le(1,"div",0),S(2,1),Ne(),S(3,2))},encapsulation:2})}return n})();var _d=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=j({type:n});static \u0275inj=z({imports:[J]})}return n})();var So=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-animated-greeting"]],decls:11,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","preserveAspectRatio","xMidYMid meet","viewBox","0 0 662.3 78"],["id","svgGroup","fill","none","fill-rule","evenodd","stroke","#005cbb","stroke-linecap","round","stroke-width","0.2mm","font-size","9pt",2,"stroke","#005cbb","stroke-width",".2mm","fill","none"],["id","0","d","M97.1 0h40.5q-2.2 9.4-4.35 18.75-2.15 9.35-4.35 18.75-2.2 9.4-4.35 18.75Q122.4 65.6 120.3 75H73.8l-6-37.6q0-.1-.05-.15l-.05-.05h-.05q-.05 0-.1.05t-.05.15L61.6 75H18.2l-3.6-15q-1.8-7.5-3.65-15Q9.1 37.5 7.3 30q-1.8-7.5-3.65-15Q1.8 7.5 0 0h42.6q.8 5.1 1.55 10.25t1.5 10.25q.75 5.1 1.55 10.25T48.7 41h.5l5.6-41h30.1l5.9 41h.2q1.5-10.3 3.05-20.5Q95.6 10.3 97.1 0Z",1,"tkrlAKKf_0"],["id","1","d","m189.4 45.3 30.9 10.1q-1.8 6.3-7.65 11.45Q206.8 72 197.9 75T178 78q-9.4 0-17.55-2.1t-14.3-6.35Q140 65.3 136.5 58.9T133 44q0-8.5 3.5-14.9t9.65-10.65q6.15-4.25 14.35-6.35Q168.7 10 178 10q9.5 0 17.45 2.1 7.95 2.1 13.7 6.45 5.75 4.35 8.9 11 3.15 6.65 3.15 15.75h-54.6v.1q0 1.5.8 2.8.8 1.3 2.25 2.25t3.6 1.45q2.15.5 4.95.5 5.3 0 8.2-1.9 2.9-1.9 3-5.2Zm-22.6-3.1h22.3q.1 0 .1-.05V42q0-1.6-.85-2.85t-2.35-2.1q-1.5-.85-3.55-1.3-2.05-.45-4.45-.45-4.9 0-8.1 1.75-3.2 1.75-3.2 4.95v.2h.1Z",1,"tkrlAKKf_1"],["id","2","d","M258.6 75H224V0h34.6v75Z",1,"tkrlAKKf_2"],["id","3","d","m350.2 38.4-32.1 5.7q0-2.7-1.7-4.4-1.7-1.7-4.3-2.45-2.6-.75-5.5-.75-3.2 0-5.85.85-2.65.85-4.15 2.5-1.5 1.65-1.5 4.15 0 1.9.85 3.3t2.45 2.35q1.6.95 3.7 1.4 2.1.45 4.5.45 2.8 0 5.45-.7 2.65-.7 4.35-2.35 1.7-1.65 1.7-4.35 8.4 1 16.1 2.05 7.7 1.05 16.1 2.15-1.2 9.7-7.15 16.35-5.95 6.65-15.4 10Q318.3 78 306.6 78q-9.4 0-17.55-2.1t-14.3-6.35q-6.15-4.25-9.65-10.65T261.6 44q0-4.4.95-8.2.95-3.8 2.75-7.05t4.35-5.95q2.55-2.7 5.75-4.8 4.1-2.7 9-4.45t10.55-2.65q5.65-.9 11.65-.9 11.5 0 20.75 3.15t15.3 9.45q6.05 6.3 7.55 15.8Z",1,"tkrlAKKf_3"],["id","4","d","M397.6 78q-6.2 0-12-.9t-10.8-2.75q-5-1.85-9.1-4.65-4.1-2.8-7-6.55-2.9-3.75-4.5-8.5t-1.6-10.55q0-6.8 2.25-12.25t6.4-9.55q4.15-4.1 9.75-6.85t12.35-4.1Q390.1 10 397.6 10q9.4 0 17.55 2.15t14.3 6.4q6.15 4.25 9.65 10.65t3.5 14.9q0 8.5-3.5 14.85t-9.65 10.6q-6.15 4.25-14.3 6.35Q407 78 397.6 78Zm.1-26.5q6.2 0 8.8-2.4 2.6-2.4 2.6-5.2 0-1.3-.6-2.6t-1.9-2.4q-1.3-1.1-3.5-1.75-2.2-.65-5.4-.65t-5.45.65q-2.25.65-3.6 1.75t-1.95 2.4q-.6 1.3-.6 2.7 0 1.4.6 2.75t2 2.4q1.4 1.05 3.6 1.7 2.2.65 5.4.65Z",1,"tkrlAKKf_4"],["id","5","d","M571.2 75h-34.6V43.4q0-2.9-1.45-4.1-1.45-1.2-3.45-1.3-2-.1-3.65.5T526 39.7l7-25.7q3.6-1.6 7.75-2.4 4.15-.8 8.25-.8 5.8 0 10.85 1.8t8.2 5.7q3.15 3.9 3.15 10.4V75ZM526 75h-34.6V43.4q0-2.9-1.45-4.1-1.45-1.2-3.45-1.3-2-.1-3.65.5t-2.05 1.2l8-25.7q7.3-3.2 15.8-3.2 4.2 0 8 1t6.85 3.1q3.05 2.1 4.8 5.55Q526 23.9 526 28.7V75Zm-45.8 0h-34.6V13h34.6v62Z",1,"tkrlAKKf_5"],["id","6","d","m630.5 45.3 30.9 10.1q-1.8 6.3-7.65 11.45Q647.9 72 639 75t-19.9 3q-9.4 0-17.55-2.1t-14.3-6.35q-6.15-4.25-9.65-10.65T574.1 44q0-8.5 3.5-14.9t9.65-10.65q6.15-4.25 14.35-6.35 8.2-2.1 17.5-2.1 9.5 0 17.45 2.1 7.95 2.1 13.7 6.45 5.75 4.35 8.9 11 3.15 6.65 3.15 15.75h-54.6v.1q0 1.5.8 2.8.8 1.3 2.25 2.25t3.6 1.45q2.15.5 4.95.5 5.3 0 8.2-1.9 2.9-1.9 3-5.2Zm-22.6-3.1h22.3q.1 0 .1-.05V42q0-1.6-.85-2.85t-2.35-2.1q-1.5-.85-3.55-1.3-2.05-.45-4.45-.45-4.9 0-8.1 1.75-3.2 1.75-3.2 4.95v.2h.1Z",1,"tkrlAKKf_6"],["data-made-with","vivus-instant"]],template:function(e,t){e&1&&(nt(),Le(0,"svg",0)(1,"g",1),Et(2,"path",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8),Ne(),Le(9,"style",9),m(10,".tkrlAKKf_0{stroke-dasharray:601 603;stroke-dashoffset:602;animation:tkrlAKKf_draw 1333ms ease 0ms forwards;}.tkrlAKKf_1{stroke-dasharray:411 413;stroke-dashoffset:412;animation:tkrlAKKf_draw 1333ms ease 111ms forwards;}.tkrlAKKf_2{stroke-dasharray:220 222;stroke-dashoffset:221;animation:tkrlAKKf_draw 1333ms ease 222ms forwards;}.tkrlAKKf_3{stroke-dasharray:369 371;stroke-dashoffset:370;animation:tkrlAKKf_draw 1333ms ease 333ms forwards;}.tkrlAKKf_4{stroke-dasharray:316 318;stroke-dashoffset:317;animation:tkrlAKKf_draw 1333ms ease 444ms forwards;}.tkrlAKKf_5{stroke-dasharray:597 599;stroke-dashoffset:598;animation:tkrlAKKf_draw 1333ms ease 555ms forwards;}.tkrlAKKf_6{stroke-dasharray:411 413;stroke-dashoffset:412;animation:tkrlAKKf_draw 1333ms ease 666ms forwards;}@keyframes tkrlAKKf_draw{100%{stroke-dashoffset:0;}}@keyframes tkrlAKKf_fade{0%{stroke-opacity:1;}93.54838709677419%{stroke-opacity:1;}100%{stroke-opacity:0;}}"),Ne()())},encapsulation:2})};var Oo=class n extends Z{previousImageButtonLabel=$localize`:Back button label@@previousImageButtonLabel:Back`;nextImageButtonLabel=$localize`:Next button label@@nextImageButtonLabel:Next`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var Do=class n{images=Yt();backButtonLabel;nextButtonLabel;src=M("");caption=M("");index=0;translations=s(Oo);constructor(){this.backButtonLabel=M(this.translations.previousImageButtonLabel),this.nextButtonLabel=M(this.translations.nextImageButtonLabel),te(()=>{this.images()?.length&&this.onImagesUpdated()})}ngOnInit(){this.onImagesUpdated()}onBackClicked(){this.index>0&&(this.index=this.index-1,this.selectImage(this.images()?.at(this.index)))}onNextClicked(){let i=this.images()?.length;i&&this.index<i-1&&(this.index=this.index+1,this.selectImage(this.images()?.at(this.index)))}onImagesUpdated(){let i=this.images()?.at(0);i&&(this.src.set(i.src),this.caption.set(i.caption))}selectImage(i){i&&(this.src.set(i.src),this.caption.set(i.caption))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-image-gallery"]],inputs:{images:[1,"images"]},decls:11,vars:7,consts:[[1,"image-gallery-container"],["mat-icon-button","",1,"back-button",3,"click","title"],["aria-hidden","true"],[1,"selected-image",3,"click"],[3,"src","alt"],["mat-icon-button","",1,"next-button",3,"click","title"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"button",1),g("click",function(){return t.onBackClicked()}),l(2,"mat-icon",2),m(3,"arrow_back"),d()(),l(4,"figure",3),g("click",function(){return t.onNextClicked()}),C(5,"img",4),l(6,"figcaption"),m(7),d()(),l(8,"button",5),g("click",function(){return t.onNextClicked()}),l(9,"mat-icon",2),m(10,"arrow_forward"),d()()()),e&2&&(c(),f("title",t.backButtonLabel()),b("aria-label",t.backButtonLabel()),c(4),f("src",t.src(),Da)("alt",t.caption()),c(2),v(t.caption()),c(),f("title",t.nextButtonLabel()),b("aria-label",t.nextButtonLabel()))},dependencies:[me,Ee,ue,ve],styles:[".image-gallery-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:2px}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;justify-content:center;margin:0}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%}.image-gallery-container[_ngcontent-%COMP%]   .selected-image[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{font:var(--mat-sys-title-large);padding-top:.5rem}"]})};var ht=class{constructor(i,e){this.src=i;this.caption=e}src;caption};var Po=class n{onCreate=Ze();translations;images;workoutLauncherComponentTranslations=s(Ci);workoutLauncherEmptyStateComponentTranslations=s(Mo);constructor(){this.translations=Object.assign({},this.workoutLauncherComponentTranslations,this.workoutLauncherEmptyStateComponentTranslations),this.images=[new ht("images/launcher.png",this.translations.launcherScreenshotCaption),new ht("images/workout-edit.png",this.translations.workoutEditScreenshotCaption),new ht("images/workout-list.png",this.translations.workoutListScreenshotCaption),new ht("images/workout-rest.png",this.translations.workoutRestScreenshotCaption),new ht("images/workout-prepare.png",this.translations.workoutPrepareScreenshotCaption),new ht("images/workout-start.png",this.translations.workoutActivityScreenshotCaption)]}onCreateButtonClicked(){this.onCreate.emit()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-workout-launcher-empty-state"]],outputs:{onCreate:"onCreate"},decls:53,vars:16,consts:[[1,"empty-workouts"],[1,"message"],[1,"greeting"],[1,"summary"],[1,"screenshots",3,"images"],[1,"key-benefits-header"],[1,"key-benefits"],[1,"key-benefit"],[1,"key-benefit-label"],[1,"key-benefit-content"],[1,"call-to-action"],[1,"call-to-action-label"],["mat-fab","","extended","",1,"new-workout-button",3,"click","title"],["aria-hidden","true",1,"new-workout-icon"]],template:function(e,t){e&1&&(l(0,"section",0)(1,"div",1),C(2,"tbt-animated-greeting",2),l(3,"div",3),m(4),d()(),C(5,"tbt-image-gallery",4),l(6,"div",1)(7,"div",5),m(8),d(),l(9,"div",6)(10,"mat-card",7)(11,"mat-card-header")(12,"mat-card-title"),m(13,"\u2728"),l(14,"span",8),m(15),d()()(),l(16,"mat-card-content")(17,"p",9),m(18),d()()(),l(19,"mat-card",7)(20,"mat-card-header")(21,"mat-card-title"),m(22,"\u{1F441}\uFE0F"),l(23,"span",8),m(24),d()()(),l(25,"mat-card-content")(26,"p",9),m(27),d()()(),l(28,"mat-card",7)(29,"mat-card-header")(30,"mat-card-title"),m(31,"\u{1F4BB}"),l(32,"span",8),m(33),d()()(),l(34,"mat-card-content")(35,"p",9),m(36),d()()(),l(37,"mat-card",7)(38,"mat-card-header")(39,"mat-card-title"),m(40,"\u26A1\uFE0F"),l(41,"span",8),m(42),d()()(),l(43,"mat-card-content")(44,"p",9),m(45),d()()()(),l(46,"div",10)(47,"span",11),m(48),d(),l(49,"button",12),g("click",function(){return t.onCreateButtonClicked()}),l(50,"mat-icon",13),m(51,"add"),d(),m(52),d()()()()),e&2&&(c(4),v(t.translations.summary),c(),f("images",t.images),c(3),v(t.translations.keyBenefitsHeader),c(7),v(t.translations.keyBenefit1Label),c(3),v(t.translations.keyBenefit1),c(6),v(t.translations.keyBenefit2Label),c(3),v(t.translations.keyBenefit2),c(6),v(t.translations.keyBenefit3Label),c(3),v(t.translations.keyBenefit3),c(6),v(t.translations.keyBenefit4Label),c(3),v(t.translations.keyBenefit4),c(3),G("",t.translations.callToActionLabel," "),c(),f("title",Q(t.translations.newWorkoutButtonLabel)),b("aria-label",t.translations.newWorkoutButtonLabel),c(3),G(" ",t.translations.newWorkoutButtonLabel," "))},dependencies:[me,is,ue,ve,_d,hd,fd,gd,pd,So,Do],styles:["[_nghost-%COMP%]{display:flex;justify-content:center}.empty-workouts[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font:var(--mat-sys-headline-medium);color:var(--mat-sys-on-surface)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]{width:80%;margin-top:8rem;margin-bottom:4rem;text-align:center}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{text-align:justify}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits-header[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);font-weight:700;margin-bottom:2rem}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{display:grid}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]{margin:1rem}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]   .key-benefit-label[_ngcontent-%COMP%]{font-weight:700}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]   .key-benefit[_ngcontent-%COMP%]   .key-benefit-content[_ngcontent-%COMP%]{font:var(--mat-sys-body-large)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:2.5rem;width:100%;height:20rem;font:var(--mat-sys-headline-large);font-weight:700;margin-top:4rem;margin-bottom:2rem;border-style:solid;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));background-color:var(--mat-sys-primary)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .call-to-action-label[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary)}.empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%]{font-size:2.5rem}.empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{margin-top:4rem;margin-bottom:4rem}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]{width:min(50ch,90%)}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small)}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{margin-top:6rem;margin-bottom:6rem;width:max(46ch,50vw)}.wide-landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .wide-landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .landscape[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .landscape   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{margin-top:6rem}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]{width:100%;margin-top:2rem}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{width:90%;font:var(--mat-sys-headline-small)}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:1fr}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{width:90vw}.portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%]{font-size:2rem}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%]{width:100%;margin-top:2rem}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{width:90%;font:var(--mat-sys-headline-small)}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .key-benefits[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:1fr}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]{font:var(--mat-sys-headline-small);font-weight:600;height:15rem;justify-content:center}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .call-to-action[_ngcontent-%COMP%]   .action-emoticon[_ngcontent-%COMP%]{font-size:2rem}.wide-portrait[_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .empty-workouts[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{width:90vw}"]})};var yh=["drawer"],wh=["sideSheet"];function Ch(n,i){n&1&&C(0,"mat-divider",11)}function xh(n,i){if(n&1){let e=ke();l(0,"a",27),g("click",function(){let o=se(e).$implicit,r=y(2);return le(r.onWorkoutSelected(o))}),m(1),d()}if(n&2){let e=i.$implicit,t=y(2);f("activated",t.isWorkoutSelected(e)),c(),v(e.name)}}function kh(n,i){if(n&1&&(l(0,"h3",24),m(1),d(),l(2,"mat-nav-list",25),Pt(3,xh,2,2,"a",26,Ti),d()),n&2){let e=y();c(),G(" ",e.translations.workoutListLabel," "),c(2),Tt(e.workouts())}}function Mh(n,i){if(n&1&&(l(0,"div",18),m(1),d()),n&2){let e=y();c(),v(e.translations.createWorkoutNavHeaderLabel)}}function Sh(n,i){if(n&1&&(l(0,"div",18),m(1),d()),n&2){let e=y();c(),v(e.translations.editWorkoutNavHeaderLabel)}}function Oh(n,i){if(n&1&&(l(0,"section",28)(1,"div"),m(2),d(),l(3,"div",29)(4,"mat-icon",30),m(5,"sprint"),d(),l(6,"span",31),m(7),d()()(),l(8,"section",32)(9,"div"),m(10),d(),l(11,"div",29)(12,"mat-icon",33),m(13,"laps"),d(),l(14,"span",31),m(15),d(),l(16,"span",31),m(17,"\xA0/\xA0"),d(),l(18,"mat-icon",34),m(19,"exercise"),d(),l(20,"span",31),m(21),d()()(),l(22,"section",35)(23,"div"),m(24),d(),l(25,"div",29)(26,"mat-icon",36),m(27,"coffee"),d(),l(28,"span",31),m(29),d()()()),n&2){let e=y(2);c(),de(Ke("configuration-option-value ",e.displayTextClass())),c(),G(" ",e.workout()?.schedule?.workoutTime," "),c(5),v(e.translations.workoutLabel),c(2),de(Ke("configuration-option-value ",e.displayTextClass())),c(),At(" ",e.workout()?.schedule?.numberOfSets,"/",e.workout()?.schedule?.numberOfExercises," "),c(5),v(e.translations.setLabel),c(6),v(e.translations.exerciseLabel),c(2),de(Ke("configuration-option-value ",e.displayTextClass())),c(),G(" ",e.workout()?.schedule?.restTime," "),c(5),v(e.translations.restLabel)}}function Dh(n,i){if(n&1&&(l(0,"section",37)(1,"div",38)(2,"div"),m(3),d(),l(4,"div",29)(5,"mat-icon",39),m(6,"laps"),d(),l(7,"span",31),m(8),d()()(),l(9,"div",38)(10,"div"),m(11),d(),l(12,"div",29)(13,"mat-icon",34),m(14,"exercise"),d(),l(15,"span",31),m(16),d()()()(),l(17,"section",40)(18,"div",38)(19,"div"),m(20),d(),l(21,"div",29)(22,"span",31),m(23),d()()()(),l(24,"section",41)(25,"div",38)(26,"div"),m(27),d(),l(28,"div",29)(29,"mat-icon",42),m(30,"sprint"),d(),l(31,"span",31),m(32),d()()(),l(33,"div",38)(34,"div"),m(35),d(),l(36,"div",29)(37,"mat-icon",43),m(38,"coffee"),d(),l(39,"span",31),m(40),d()()()()),n&2){let e=y(2);c(2),de(Ke("configuration-option-value ",e.displayTextClass())),c(),G(" ",e.workout()?.schedule?.numberOfSets," "),c(5),v(e.translations.setLabel),c(2),de(Ke("configuration-option-value ",e.displayTextClass())),c(),G(" ",e.workout()?.schedule?.numberOfExercises," "),c(5),v(e.translations.exerciseLabel),c(3),de(Ke("configuration-option-value ",e.displayTextClass())),c(),G(" ",e.totalWorkoutTime()," "),c(3),v(e.translations.timeUnitLabel),c(3),de(Ke("configuration-option-value ",e.displayTextClass())),c(),G(" ",e.workout()?.schedule?.workoutTime," "),c(5),G(" ",e.translations.workoutLabel),c(2),de(Ke("configuration-option-value ",e.displayTextClass())),c(),G(" ",e.workout()?.schedule?.restTime," "),c(5),v(e.translations.restLabel)}}function Ph(n,i){if(n&1&&P(0,Oh,30,17)(1,Dh,41,25),n&2){let e=y();T(e.isNarrowLayout()?0:1)}}function Th(n,i){if(n&1){let e=ke();l(0,"tbt-workout-launcher-empty-state",44),g("onCreate",function(){se(e);let o=y();return le(o.onCreate())}),d()}}var ki=class n{static LARGE_DISPLAY_TEXT="large-display-text";static SMALL_DISPLAY_TEXT="small-display-text";workout;workouts;isSmartPhone;isNewWorkout=M(!1);displayTextClass=p(()=>{let i=this.workout()?.schedule;return i&&(i.restTime>=100||i.workoutTime>=100||i.numberOfSets>=10&&i.numberOfExercises>=10)?n.SMALL_DISPLAY_TEXT:n.LARGE_DISPLAY_TEXT});totalWorkoutTime=p(()=>{let i=0,e=this.workout()?.schedule;if(e!==void 0){let t=e.numberOfExercises*e.workoutTime+(e.numberOfExercises-1)*e.restTime;i=e.numberOfSets*t,e.restTimeBetweenSets?i+=e.numberOfSets*e.restTimeBetweenSets:i+=e.numberOfSets*e.restTime,e.preparationTime&&(i+=e.preparationTime),i=Math.min(Math.round(i/60),999)}return i});translations=s(Ci);router=s(gt);dialogService=s(kt);workoutConfigurationService=s(re);layoutDetectionService=s(ms);signals=s(ae);navigationDrawer=Je("drawer");sideSheet=Je("sideSheet");constructor(){this.workout=this.signals.selectedWorkout.toSignal(),this.workouts=this.signals.workouts.toSignal(),this.isSmartPhone=this.signals.isSmartPhone.toSignal(),te(()=>{this.signals.settingsNeedsReload.toSignal()()&&window.location.reload()})}isWorkoutSelected(i){return this.workout()?.id===i?.id}toggleNavigationDrawer(){this.navigationDrawer()?.toggle()}toggleSideSheet(i){this.isNewWorkout.update(()=>i),this.sideSheet()?.toggle()}onCloseSideSheetClicked(){this.sideSheet()?.toggle()}onAboutClicked(){this.navigationDrawer()?.close().then(()=>{this.dialogService.openDialog(ko,"/about")})}onWorkoutSelected(i){this.workoutConfigurationService.selectWorkout(i.id),this.toggleNavigationDrawer()}onCreate(){this.toggleSideSheet(!0)}isNarrowLayout(){return this.layoutDetectionService.isNarrowLayout()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-workout-launcher"]],viewQuery:function(e,t){e&1&&Xt(t.navigationDrawer,yh,5)(t.sideSheet,wh,5),e&2&&It(2)},decls:32,vars:14,consts:[["drawer",""],["sideSheet",""],["autosize","",1,"navigation-drawer-container"],["mode","over",1,"navigation-drawer"],[1,"navigation-drawer-content"],[1,"navigation-drawer-header-container"],[1,"navigation-drawer-title-container"],["src","icons/icon-72x72.png",1,"navigation-drawer-app-icon"],[1,"navigation-drawer-title"],[1,"about-button-container","navigation-list","navigation-drawer-small-gap"],["mat-list-item","",1,"about-button",3,"click"],[1,"navigation-drawer-divider"],[1,"navigation-drawer-links"],["mode","over","position","end",1,"side-sheet"],[1,"side-sheet-container"],[1,"side-sheet-nav"],["mat-icon-button","",3,"click","title"],["aria-hidden","true",1,"close-icon"],[1,"side-sheet-header"],[1,"side-sheet-content"],[3,"onWorkoutSaved","isNewWorkout"],[1,"launcher"],[3,"onNavigationMenuToggle","onSideSheetToggle"],[1,"empty-state"],[1,"navigation-drawer-label"],[1,"navigation-list"],["mat-list-item","",3,"activated"],["mat-list-item","",3,"click","activated"],[1,"workout-time","configuration-option"],[1,"configuration-description"],["aria-hidden","false",1,"configuration-option-icon","sprint-icon"],[1,"configuration-option-name"],[1,"set-and-exercise-counter","configuration-option"],["aria-hidden","false",1,"configuration-option-icon","laps-icon"],["aria-hidden","false",1,"configuration-option-icon","exercise-icon"],[1,"rest-time","configuration-option"],["aria-hidden","false",1,"configuration-option-icon","coffee-icon"],[1,"left-column"],[1,"configuration-option"],["aria-hidden","false",1,"configuration-option-icon","set-icon"],[1,"center-column"],[1,"right-column"],["aria-hidden","false",1,"configuration-option-icon","workout-icon"],["aria-hidden","false",1,"configuration-option-icon","rest-icon"],[1,"empty-state",3,"onCreate"]],template:function(e,t){e&1&&(l(0,"mat-sidenav-container",2)(1,"mat-sidenav",3,0)(3,"section",4)(4,"div",5)(5,"div",6),C(6,"img",7),l(7,"h3",8),m(8),d()(),l(9,"mat-nav-list",9)(10,"a",10),g("click",function(){return t.onAboutClicked()}),m(11),d()(),P(12,Ch,1,0,"mat-divider",11),d(),l(13,"div",12),P(14,kh,5,1),d()()(),l(15,"mat-sidenav",13,1)(17,"section",14)(18,"div",15)(19,"button",16),g("click",function(){return t.onCloseSideSheetClicked()}),l(20,"mat-icon",17),m(21,"arrow_back"),d()(),P(22,Mh,2,1,"div",18)(23,Sh,2,1,"div",18),d(),l(24,"div",19)(25,"tbt-workout-schedule",20),g("onWorkoutSaved",function(){return t.onCloseSideSheetClicked()}),d()()()(),l(26,"mat-drawer-content",21)(27,"nav")(28,"tbt-workout-launcher-nav-bar",22),g("onNavigationMenuToggle",function(){return t.toggleNavigationDrawer()})("onSideSheetToggle",function(r){return t.toggleSideSheet(r)}),d()(),l(29,"main"),P(30,Ph,2,1)(31,Th,1,0,"tbt-workout-launcher-empty-state",23),d()()()),e&2&&(O("display",t.workout()!==void 0),c(8),v(t.translations.applicationName),c(3),v(t.translations.aboutButtonLabel),c(),T(t.workouts().length?12:-1),c(2),T(t.workouts().length?14:-1),c(5),f("title",Q(t.translations.closeSideSheetButtonLabel)),b("aria-label",t.translations.closeSideSheetButtonLabel),c(3),T(t.isNewWorkout()?22:23),c(3),f("isNewWorkout",t.isNewWorkout()),c(4),O("intro",t.workout()===void 0),c(),T(t.workout()!==void 0?30:31))},dependencies:[me,Ee,ue,ve,oi,Rl,Wt,Er,Fl,ao,Wl,ro,Ir,no,wo,Po],styles:[`nav[_ngcontent-%COMP%]{width:100%}.navigation-drawer-container[_ngcontent-%COMP%]{height:100%}.navigation-drawer-container.display[_ngcontent-%COMP%]{background-image:url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23e1ecffff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linecap='square' stroke-width='0.5' stroke='%23ffffffff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]{max-width:85%}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]{padding:1rem;display:flex;flex-direction:column;height:calc(100% - 2rem)}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]   .navigation-drawer-app-icon[_ngcontent-%COMP%]{height:44px;width:44px}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-title-container[_ngcontent-%COMP%]   .navigation-drawer-title[_ngcontent-%COMP%]{font:var(--mat-sys-display-small);font-size:1.5em}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-divider[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level3)}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-label[_ngcontent-%COMP%]{font:var(--mat-sys-title-large);font-size:1.25em;font-weight:200;margin-bottom:1rem;margin-left:0;margin-top:2rem;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-small-gap[_ngcontent-%COMP%]{margin-bottom:1rem;margin-left:0;margin-top:0;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-large-gap[_ngcontent-%COMP%]{margin-bottom:2rem;margin-left:0;margin-top:0;margin-right:0}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-links[_ngcontent-%COMP%]{overflow:auto}.navigation-drawer-container[_ngcontent-%COMP%]   .navigation-drawer[_ngcontent-%COMP%]   .navigation-drawer-content[_ngcontent-%COMP%]   .navigation-drawer-links[_ngcontent-%COMP%]   .navigation-list[_ngcontent-%COMP%]{padding:0}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]{max-width:85%}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem;height:calc(100% - 2rem)}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-nav[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:flex-start;gap:1rem}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-nav[_ngcontent-%COMP%]   .side-sheet-header[_ngcontent-%COMP%]{font:var(--mat-sys-title-medium)}.navigation-drawer-container[_ngcontent-%COMP%]   .side-sheet[_ngcontent-%COMP%]   .side-sheet-container[_ngcontent-%COMP%]   .side-sheet-content[_ngcontent-%COMP%]{height:100%;flex-grow:2}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 1fr [center-column] 50% [right-column] 1fr;grid-template-rows:[center-row] 1fr;height:100%;color:var(--mat-sys-primary)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]{grid-column-start:center-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:center}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(12.5vh,7.5vw);line-height:min(12.5vh,7.5vw);font-size:min(12.5dvh,7.5dvw);line-height:min(12.5dvh,7.5dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(50vh,30vw);line-height:min(50vh,30vw);font-size:min(50dvh,30dvw);line-height:min(50dvh,30dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(50vh,24vw);line-height:min(50vh,24vw);font-size:min(50dvh,24dvw);line-height:min(50dvh,24dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;display:flex;flex-direction:column;align-items:center;justify-content:space-around}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:min(6.25vh,3.75vw);margin-right:.5vw;font-size:min(6.25dvh,3.75dvw);margin-right:.5dvw;height:auto;width:auto}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(6.25vh,3.75vw);line-height:min(6.25vh,3.75vw);font-size:min(6.25dvh,3.75dvw);line-height:min(6.25dvh,3.75dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-family:Exo,serif;font-optical-sizing:auto;font-weight:500;font-style:normal;margin:0;text-shadow:5px 5px 10px #b6afaf,-5px -5px 10px #ffffff}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(25vh,15vw);line-height:min(25vh,15vw);font-size:min(25dvh,15dvw);line-height:min(25dvh,15dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(25vh,12vw);line-height:min(25vh,12vw);font-size:min(25dvh,12dvw);line-height:min(25dvh,12dvw)}.navigation-drawer-container[_ngcontent-%COMP%]   .launcher[_ngcontent-%COMP%]   main.intro[_ngcontent-%COMP%]{display:block;height:auto}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 50% [bottom-row] 1fr;height:100%}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 2;grid-row-start:top-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(11.25vh,9.375vw);line-height:min(11.25vh,9.375vw);font-size:min(11.25dvh,9.375dvw);line-height:min(11.25dvh,9.375dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(45vh,30vw);line-height:min(45vh,30vw);font-size:min(45dvh,30dvw);line-height:min(45dvh,30dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .center-column[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(45vh,30vw);line-height:min(45vh,30vw);font-size:min(45dvh,30dvw);line-height:min(45dvh,30dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:min(5.625vh,4.5vw);margin-right:.5vw;font-size:min(5.625dvh,4.5dvw);margin-right:.5dvw}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:min(5.625vh,4.5vw);line-height:min(5.625vh,4.5vw);font-size:min(5.625dvh,4.5dvw);line-height:min(5.625dvh,4.5dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%]{font-size:min(22.5vh,15vw);line-height:min(22.5vh,15vw);font-size:min(22.5dvh,15dvw);line-height:min(22.5dvh,15dvw)}.portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:min(25vh,15vw);line-height:min(25vh,15vw);font-size:min(25dvh,15dvw);line-height:min(25dvh,15dvw)}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[column] 1fr;grid-template-rows:[top-row] 1fr [center-row] 1fr [bottom-row] 1fr;height:100%}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .workout-time[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .workout-time[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .rest-time[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .rest-time[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .set-and-exercise-counter.configuration-option[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .set-and-exercise-counter.configuration-option[_ngcontent-%COMP%]{grid-column-start:column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value[_ngcontent-%COMP%]{font-family:Exo,serif;font-optical-sizing:auto;font-weight:500;font-style:normal;margin:0;border:0}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.large-display-text[_ngcontent-%COMP%], .wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-option-value.small-display-text[_ngcontent-%COMP%]{font-size:18vh;line-height:18vh;font-size:18dvh;line-height:18dvh}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-icon[_ngcontent-%COMP%]{font-size:4vh;font-size:4dvh;margin-right:.5dvh,dvw;height:auto;width:auto}.wide-portrait[_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   .launcher[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .configuration-option[_ngcontent-%COMP%]   .configuration-description[_ngcontent-%COMP%]   .configuration-option-name[_ngcontent-%COMP%]{font-size:4vh;line-height:4vh;font-size:4dvh;line-height:4dvh}`]})};var qt=2;var To=class{constructor(i,e,t=ga){this.activeWorkout=i;this.publish=e;this.scheduler=t}activeWorkout;publish;scheduler;timer;subscription;workoutTimeline=[];currentActivityPointer=0;lastTick=0;pausedAtTick=0;start(){this.createWorkoutTimeline(),this.timer=jo(0,1e3,this.scheduler),this.subscription=this.timer.subscribe(i=>this.onTick(i)),this.publishCurrentActivity()}stop(){this.subscription?.unsubscribe(),this.timer=void 0}pause(){this.pausedAtTick=this.lastTick,this.stop()}resume(){this.timer=jo(0,1e3,this.scheduler),this.subscription=this.timer.subscribe(i=>this.onTick(i))}rewind(){this.pause();let i=!1,e=this.workoutTimeline[this.currentActivityPointer];e.remainingSeconds<e.length?(this.pausedAtTick-=e.length-e.remainingSeconds,this.lastTick-=e.length-e.remainingSeconds,e.remainingSeconds=e.length,i=!0):this.currentActivityPointer-1>=0&&(this.currentActivityPointer--,e=this.workoutTimeline[this.currentActivityPointer],e.remainingSeconds=e.length,this.pausedAtTick-=e.length,this.lastTick-=e.length,i=!0),i&&this.publishCurrentActivity()}forward(){this.pause();let i=!1,e=this.workoutTimeline[this.currentActivityPointer];this.currentActivityPointer+1<this.workoutTimeline.length?(e.remainingSeconds<e.length?(this.pausedAtTick+=e.remainingSeconds,this.lastTick+=e.remainingSeconds):(this.pausedAtTick+=e.length,this.lastTick+=e.length),e.remainingSeconds=0,this.currentActivityPointer++,e=this.workoutTimeline[this.currentActivityPointer],i=!0):e.remainingSeconds<e.length&&(this.pausedAtTick+=e.remainingSeconds,this.lastTick+=e.remainingSeconds,e.remainingSeconds=0,i=!0),i&&this.publishCurrentActivity()}onTick(i){this.lastTick=this.calculateCounter(i);let e=this.workoutTimeline[this.currentActivityPointer],t=e.finishTimestamp-this.lastTick;e.remainingSeconds=t,t===0&&this.currentActivityPointer++,this.currentActivityPointer<this.workoutTimeline.length?this.publishCurrentActivity():(this.stop(),this.currentActivityPointer--,this.publishFinalActivity())}publishCurrentActivity(){this.publish({protocol:qt,workoutActivity:this.workoutTimeline[this.currentActivityPointer],isWorkoutFinished:!1})}publishFinalActivity(){this.publish({protocol:qt,workoutActivity:this.workoutTimeline[this.workoutTimeline.length-1],isWorkoutFinished:!0})}calculateCounter(i){return this.pausedAtTick+i}createWorkoutTimeline(){let i=0;this.activeWorkout.schedule.preparationTime&&(i+=this.activeWorkout.schedule.preparationTime,this.workoutTimeline.push({type:0,finishTimestamp:i,remainingSeconds:this.activeWorkout.schedule.preparationTime,length:this.activeWorkout.schedule.preparationTime,set:1,activity:1}));for(let e=0;e<this.activeWorkout.schedule.numberOfSets;e++)for(let t=0;t<this.activeWorkout.schedule.numberOfExercises;t++)i+=this.activeWorkout.schedule.workoutTime,this.workoutTimeline.push({type:1,finishTimestamp:i,remainingSeconds:this.activeWorkout.schedule.workoutTime,length:this.activeWorkout.schedule.workoutTime,set:e+1,activity:t+1}),this.activeWorkout.schedule.restTimeBetweenSets>0?t<this.activeWorkout.schedule.numberOfExercises-1?(i+=this.activeWorkout.schedule.restTime,this.workoutTimeline.push({type:2,finishTimestamp:i,remainingSeconds:this.activeWorkout.schedule.restTime,length:this.activeWorkout.schedule.restTime,set:e+1,activity:t+1})):e<this.activeWorkout.schedule.numberOfSets-1&&(i+=this.activeWorkout.schedule.restTimeBetweenSets,this.workoutTimeline.push({type:3,finishTimestamp:i,remainingSeconds:this.activeWorkout.schedule.restTimeBetweenSets,length:this.activeWorkout.schedule.restTimeBetweenSets,set:e+1,activity:t+1})):(i+=this.activeWorkout.schedule.restTime,this.workoutTimeline.push({type:2,finishTimestamp:i,remainingSeconds:this.activeWorkout.schedule.restTime,length:this.activeWorkout.schedule.restTime,set:e+1,activity:t+1}))}};var Eo=class n{wakeLock=null;isSupported;visibilityChangeHandler=null;get supported(){return this.isSupported}constructor(){this.isSupported="wakeLock"in navigator,this.isSupported&&(this.visibilityChangeHandler=this.handleVisibilityChange.bind(this),document.addEventListener("visibilitychange",this.visibilityChangeHandler))}ngOnDestroy(){this.visibilityChangeHandler&&document.removeEventListener("visibilitychange",this.visibilityChangeHandler),this.releaseWakeLock()}async requestWakeLock(){if(!this.isSupported)return!1;try{return this.wakeLock=await navigator.wakeLock.request("screen"),this.wakeLock.addEventListener("release",()=>{this.wakeLock=null}),!0}catch(i){return console.error(`Failed to request wake lock: ${i}`),!1}}async releaseWakeLock(){this.isSupported&&this.wakeLock&&(await this.wakeLock.release(),this.wakeLock=null)}async handleVisibilityChange(){this.isSupported&&document.visibilityState==="visible"&&!this.wakeLock&&await this.requestWakeLock()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var Mi=class n{workerReady=M(!1);currentWorkoutActivity;countdown;worker;fallbackTimer;activeWorkout;workerFailure;platformId=s(Sa);signals=s(ae);wakeLockService=s(Eo);constructor(){this.currentWorkoutActivity=this.signals.currentWorkoutActivity.toSignal(),this.countdown=this.signals.countdown.toSignal(),cn(this.platformId)&&this.connectWorker()}async start(i){return this.activeWorkout=i,this.wakeLockService.supported&&await this.wakeLockService.requestWakeLock(),this.sendToWorker(0,i)?(this.signals.isWorkoutRunning.set(!0),this.signals.runnerFailure.set(void 0),!0):this.startFallbackTimer()?!0:(this.reportFailure(this.workerFailure?.reason??"TimerUnavailable",this.workerFailure?`${this.workerFailure.detail}; main thread timer failed`:"Main thread timer failed"),!1)}async stop(){this.sendCommand(1),this.signals.isWorkoutRunning.set(!1),this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!1),this.signals.isActivityChanged.set(!1),this.signals.isSetChanged.set(!1),this.signals.isWorkoutFinished.set(!1),this.wakeLockService.supported&&this.wakeLockService.releaseWakeLock()}pause(){this.sendCommand(2)}resume(){this.sendCommand(3)}rewind(){this.sendCommand(4)}forward(){this.sendCommand(5)}connectWorker(){try{this.worker=new Worker(new URL("worker-KUO3UQX6.js",import.meta.url),{type:"module"}),this.worker.onmessage=i=>this.handleRunnerEvent(i.data),this.worker.onerror=i=>this.handleWorkerFailure("WorkerFailed",i),this.workerReady.set(!0)}catch(i){this.worker=void 0,this.workerReady.set(!1),this.workerFailure={reason:"WorkerUnavailable",detail:`${i}`},console.warn("Countdown worker could not be created, falling back to the main thread",i)}}sendCommand(i,e){this.sendToWorker(i,e)||this.runOnMainThread(i)}sendToWorker(i,e){if(!this.workerReady()||!this.worker)return!1;let t={protocol:qt,command:i,workout:e};return this.worker.postMessage(t),!0}runOnMainThread(i){if(this.fallbackTimer)switch(i){case 1:this.fallbackTimer.stop();break;case 2:this.fallbackTimer.pause();break;case 3:this.fallbackTimer.resume();break;case 4:this.fallbackTimer.rewind();break;case 5:this.fallbackTimer.forward();break}}startFallbackTimer(){if(!cn(this.platformId)||!this.activeWorkout)return this.signals.isWorkoutRunning.set(!1),!1;try{return this.fallbackTimer=new To(this.activeWorkout,i=>this.handleRunnerEvent(i)),this.fallbackTimer.start(),this.signals.isWorkoutRunning.set(!0),this.signals.runnerFailure.set(void 0),!0}catch{return this.fallbackTimer=void 0,this.signals.isWorkoutRunning.set(!1),!1}}handleRunnerEvent(i){if(i){if(i.protocol!==qt){this.handleProtocolMismatch(i.protocol);return}if(i?.workoutActivity?.type>=0&&i?.workoutActivity?.remainingSeconds>=0&&i?.workoutActivity?.set>=1&&i?.workoutActivity?.activity>=1){let e=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.type!==i?.workoutActivity?.type,t=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.activity!==i?.workoutActivity?.activity,o=this.currentWorkoutActivity()&&this.currentWorkoutActivity()?.set!==i?.workoutActivity?.set;this.signals.currentWorkoutActivity.update(()=>i?.workoutActivity),this.countdown()>0&&e?(this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!0)):i?.workoutActivity?.remainingSeconds<=3&&i?.workoutActivity?.remainingSeconds>=1?this.signals.countdown.set(i?.workoutActivity?.remainingSeconds):(this.signals.countdown.set(0),this.signals.isCountdownFinished.set(!1)),this.signals.isActivityChanged.set(!!t),this.signals.isSetChanged.set(!!o),this.signals.isWorkoutFinished.set(i?.isWorkoutFinished),i?.isWorkoutFinished&&this.signals.isWorkoutRunning.set(!1)}}}handleWorkerFailure(i,e){console.error("Workout worker failed to start",e),this.terminateWorker(),this.continueOnMainThread(i,`${e}`)}handleProtocolMismatch(i){console.error(`Workout worker protocol mismatch: ${i}, expected ${qt}. A cached worker cannot be used by this build.`),this.terminateWorker(),this.continueOnMainThread("ProtocolMismatch",`worker protocol ${i}`)}continueOnMainThread(i,e){!cn(this.platformId)||!this.signals.isWorkoutRunning.value()||this.startFallbackTimer()||this.reportFailure(i,e)}terminateWorker(){this.worker?.terminate(),this.worker=void 0,this.workerReady.set(!1)}reportFailure(i,e){let t={reason:i,detail:e};this.signals.runnerFailure.set(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var Io=class n extends Z{backToHomeButtonLabel=$localize`:Back button label@@backToHomeButtonLabel:Back`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ao=class n{selectedWorkout;title=p(()=>this.selectedWorkout()?.name?this.selectedWorkout().name:this.translations.applicationName);translations=s(Io);router=s(gt);workoutRunnerService=s(Mi);signals=s(ae);constructor(){this.selectedWorkout=this.signals.selectedWorkout.toSignal()}async onBackClicked(i){i.stopPropagation(),await this.workoutRunnerService.stop(),this.router.navigateByUrl("/launcher")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-basic-nav-bar"]],decls:7,vars:4,consts:[[1,"timer-navbar"],[1,"action-icons"],["mat-icon-button","",1,"back-arrow",3,"click","title"],["aria-hidden","true",1,"back-icon"],[1,"navbar-title"]],template:function(e,t){e&1&&(l(0,"mat-toolbar",0)(1,"span",1)(2,"button",2),g("click",function(r){return t.onBackClicked(r)}),l(3,"mat-icon",3),m(4,"arrow_back"),d()()(),l(5,"span",4),m(6),d()()),e&2&&(c(2),f("title",Q(t.translations.backToHomeButtonLabel)),b("aria-label",t.translations.backToHomeButtonLabel),c(4),v(t.title()))},dependencies:[Tn,Pn,ue,ve,me,Ee],styles:[".timer-navbar[_ngcontent-%COMP%]{color:#fff;background:transparent}.timer-navbar[_ngcontent-%COMP%]   .navbar-title[_ngcontent-%COMP%]{font-weight:700}.timer-navbar[_ngcontent-%COMP%]   .action-icons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]})};var Fo=class n extends Z{resumeButtonLabel=$localize`:Resume button label@@resumeButtonLabel:Resume (Space bar)`;pauseButtonLabel=$localize`:Pause button label@@pauseButtonLabel:Pause (Space bar)`;rewindButtonLabel=$localize`:Rewind button label@@rewindButtonLabel:Rewind`;forwardButtonLabel=$localize`:Forward button label@@forwardButtonLabel:Forward`;timerUnavailableLabel=$localize`:Timer unavailable label@@timerUnavailableLabel:Timer could not be started`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};function bd(n){n||(n=s(Qt));let i=new nn(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(ne(i))}function Ih(n,i){n&1&&(l(0,"mat-icon",10),m(1,"play_arrow"),d()),n&2&&f("inline",!0)}function Ah(n,i){n&1&&(l(0,"mat-icon",11),m(1,"pause"),d()),n&2&&f("inline",!0)}function Fh(n,i){if(n&1){let e=ke();l(0,"section",6)(1,"button",7),g("click",function(o){se(e);let r=y();return le(r.onRewindClicked(o))}),l(2,"mat-icon",8),m(3,"fast_rewind"),d()(),l(4,"button",9),g("click",function(o){se(e);let r=y();return le(r.onPauseToggled(o))}),P(5,Ih,2,1,"mat-icon",10)(6,Ah,2,1,"mat-icon",11),d(),l(7,"button",12),g("click",function(o){se(e);let r=y();return le(r.onForwardClicked(o))}),l(8,"mat-icon",13),m(9,"fast_forward"),d()()()}if(n&2){let e=y();c(),f("disableRipple",!0)("title",e.rewindButtonLabel()),b("aria-label",e.rewindButtonLabel()),c(),f("inline",!0),c(2),f("disableRipple",!0)("title",e.pauseResumeButtonLabel()),b("aria-label",e.pauseResumeButtonLabel()),c(),T(e.isPaused()?5:6),c(2),f("disableRipple",!0)("title",e.forwardButtonLabel()),b("aria-label",e.forwardButtonLabel()),c(),f("inline",!0)}}var Ro=class n{static COUNTDOWN_COLOR="#EFB700";static EXERCISE_COLOR="#008450";static REST_COLOR="#B81D13";static WORKOUT_FINISH_COLOR="#005CBB";static LARGE_DISPLAY_TEXT="large-display-text";static SMALL_DISPLAY_TEXT="small-display-text";static RUNNER_FAILURE_DURATION=8e3;selectedWorkout;currentWorkoutActivity;countdown;isCountdownFinished;isActivityChanged;isSetChanged;isWorkoutFinished;runnerFailure;settings;isAnimationEnabled=M(!0);isAudioEnabled=M(!0);isWorkoutPresent=p(()=>!!this.selectedWorkout());isWorkoutStarted=p(()=>!!this.currentWorkoutActivity());remainingTime=p(()=>{let i=this.currentWorkoutActivity()?.remainingSeconds;return i||0});set=p(()=>{let i=this.currentWorkoutActivity()?.set;return i||1});exercise=p(()=>{let i=this.currentWorkoutActivity()?.activity;return i||1});color=p(()=>{let i=this.currentWorkoutActivity()?.type,e="";return this.isWorkoutFinished()?e=n.WORKOUT_FINISH_COLOR:this.countdown()>0?e=n.COUNTDOWN_COLOR:i===1?e=n.EXERCISE_COLOR:e=n.REST_COLOR,e});activityIcon=p(()=>{let i="";switch(this.currentWorkoutActivity()?.type){case 1:i="sprint";break;case 2:i="coffee";break;case 3:case 0:i="sports_score";break;default:i="home"}return i});activityIconPulseAnimation=p(()=>{let i=this.currentWorkoutActivity()?.length;if(this.isAnimationEnabled()&&i&&this.remainingTime()<i&&this.remainingTime()!==0){let e=i%2===0?1:0;return this.remainingTime()%2===e}return!1});activityPulseAnimation=p(()=>!!(this.isAnimationEnabled()&&this.isActivityChanged()));setPulseAnimation=p(()=>!!(this.isAnimationEnabled()&&this.isSetChanged()));displayTextClass=p(()=>{let i=this.selectedWorkout()?.schedule;return i&&(i.restTime>=100||i.workoutTime>=100)?n.SMALL_DISPLAY_TEXT:n.LARGE_DISPLAY_TEXT});pauseResumeButtonLabel=p(()=>this.isPaused()?this.translations.resumeButtonLabel:this.translations.pauseButtonLabel);rewindButtonLabel;forwardButtonLabel;isPaused=M(!1);workoutRunnerService=s(Mi);audioPlaybackService=s(xn);dialogService=s(to);snackBarService=s(Cn);translations=s(Fo);signals=s(ae);constructor(){this.selectedWorkout=this.signals.selectedWorkout.toSignal(),this.currentWorkoutActivity=this.signals.currentWorkoutActivity.toSignal(),this.countdown=this.signals.countdown.toSignal(),this.isCountdownFinished=this.signals.isCountdownFinished.toSignal(),this.isActivityChanged=this.signals.isActivityChanged.toSignal(),this.isWorkoutFinished=this.signals.isWorkoutFinished.toSignal(),this.isSetChanged=this.signals.isSetChanged.toSignal(),this.runnerFailure=this.signals.runnerFailure.toSignal(),this.rewindButtonLabel=M(this.translations.rewindButtonLabel),this.forwardButtonLabel=M(this.translations.forwardButtonLabel),this.settings=this.signals.settings.toSignal(),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled),te(()=>{this.isAudioEnabled()&&(this.countdown()>0&&this.audioPlaybackService.playCountdownSound(),this.isCountdownFinished()&&(this.currentWorkoutActivity()?.type===3?this.audioPlaybackService.playSetFinishedSound():this.audioPlaybackService.playCountdownFinishedSound()))}),te(()=>{this.isWorkoutFinished()&&N(this.isAudioEnabled)&&this.audioPlaybackService.playWorkoutFinishedSound()}),te(()=>{this.runnerFailure()&&this.snackBarService.open(this.translations.timerUnavailableLabel,void 0,{duration:n.RUNNER_FAILURE_DURATION})}),ya(window,"keydown").pipe(he(i=>i.code==="Space"),bd()).subscribe(i=>{i.preventDefault(),i.stopPropagation(),this.switchWorkoutRunnerState()})}async ngAfterViewInit(){this.selectedWorkout()&&await this.workoutRunnerService.start(this.selectedWorkout())}onRewindClicked(i){i.stopPropagation(),this.isPaused()||this.isPaused.update(e=>!0),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!1),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!1),this.workoutRunnerService.rewind()}onForwardClicked(i){i.stopPropagation(),this.isPaused()||this.isPaused.update(e=>!0),this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!1),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!1),this.workoutRunnerService.forward()}onPauseToggled(i){i.stopPropagation(),this.switchWorkoutRunnerState()}switchWorkoutRunnerState(){this.isPaused.update(i=>!i),this.isPaused()?this.workoutRunnerService.pause():(this.isAnimationEnabled.update(()=>this.settings().isAnimationEnabled&&!0),this.isAudioEnabled.update(()=>this.settings().isAudioEnabled&&!0),this.workoutRunnerService.resume())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-basic-timer"]],decls:17,vars:18,consts:[[3,"click","dblclick"],[1,"set-counter"],[1,"info-icon"],["aria-hidden","false",1,"laps","info-icon"],[1,"exercise-counter"],["aria-hidden","false",1,"activity","info-icon"],[1,"timer-controls"],["mat-icon-button","",1,"rewind-button",3,"click","disableRipple","title"],["aria-hidden","true",1,"fast_rewind",3,"inline"],["mat-icon-button","",1,"pause-button",3,"click","disableRipple","title"],["aria-hidden","true",1,"play_arrow",3,"inline"],["aria-hidden","true",1,"pause",3,"inline"],["mat-icon-button","",1,"forward-button",3,"click","disableRipple","title"],["aria-hidden","true",1,"fast_forward",3,"inline"]],template:function(e,t){e&1&&(l(0,"nav",0),g("click",function(r){return t.onPauseToggled(r)})("dblclick",function(r){return t.onRewindClicked(r)}),C(1,"tbt-basic-nav-bar"),d(),l(2,"main",0),g("click",function(r){return t.onPauseToggled(r)})("dblclick",function(r){return t.onRewindClicked(r)}),l(3,"section"),m(4),d(),l(5,"section",1)(6,"span"),m(7),d(),C(8,"span",2),l(9,"mat-icon",3),m(10,"laps"),d()(),l(11,"section",4)(12,"span"),m(13),d(),l(14,"mat-icon",5),m(15),d()(),P(16,Fh,10,12,"section",6),d()),e&2&&(c(2),ft("background-color",t.color()),c(),de(Ke("countdown-timer ",t.displayTextClass())),c(),v(t.remainingTime()),c(),O("pulse",t.setPulseAnimation()),c(2),At("",t.set(),"/",t.selectedWorkout()?.schedule?.numberOfSets??"?"),c(4),O("pulse",t.activityPulseAnimation()),c(2),At("",t.exercise(),"/",t.selectedWorkout()?.schedule?.numberOfExercises??"?"," "),c(),O("pulse",t.activityIconPulseAnimation()),c(),v(t.activityIcon()),c(),T(t.isWorkoutPresent()&&t.isWorkoutStarted()?16:-1))},dependencies:[me,Ee,ue,ve,oi,Ao],styles:["@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}nav[_ngcontent-%COMP%]{position:fixed;width:100%;top:0}main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 1fr [center-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 80% [bottom-row] 1fr;width:100vw;height:calc(100vh - var(--mat-toolbar-standard-height, 64px));height:calc(100dvh - var(--mat-toolbar-standard-height, 64px));padding-top:var(--mat-toolbar-standard-height, 64px);color:#fff}main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:center-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal}main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(80vh,50vw);line-height:min(80vh,50vw);font-size:min(80dvh,50dvw);line-height:min(80dvh,50dvw)}main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(70vh,30vw);line-height:min(70vh,30vw);font-size:min(70dvh,30dvw);line-height:min(70dvh,30dvw)}main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;grid-column-start:left-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal;font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw)}main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;grid-column-start:right-column;grid-column-end:span 1;grid-row-start:top-row;grid-row-end:span 1;font-family:Exo,serif;font-optical-sizing:auto;font-weight:900;font-style:normal;font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw)}main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(25vh,10vw);line-height:min(25vh,10vw);font-size:min(25dvh,10dvw);line-height:min(25dvh,10dvw);height:auto;width:auto;will-change:transform}main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:min(3vh,3vw);gap:min(3dvh,3dvw);grid-column-start:center-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}main[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1s ease forwards}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 25% [center-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 75% [bottom-row] 1fr}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:left-column;grid-column-end:span 3;grid-row-start:top-row;grid-row-end:span 1;font-style:normal}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(75vh,75vw);line-height:min(75vh,75vw);font-size:min(75dvh,75dvw);line-height:min(75dvh,75dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(55vh,55vw);line-height:min(55vh,55vw);font-size:min(55dvh,55dvw);line-height:min(55dvh,55dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1;font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1;font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(8vh,8vw);line-height:min(8vh,8vw);font-size:min(8dvh,8dvw);line-height:min(8dvh,8dvw)}.portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%], .portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{gap:in(3vh,3vw);gap:in(3dvh,3dvw);grid-column-start:center-column;grid-column-end:span 1;grid-row-start:bottom-row;grid-row-end:span 1}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid-template-columns:[left-column] 50% [right-column] 1fr;grid-template-rows:[top-row] 60% [center-row] 20% [bottom-row] 1fr}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;grid-column-start:left-column;grid-column-end:span 2;grid-row-start:top-row;grid-row-end:span 1;font-style:normal}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.large-display-text[_ngcontent-%COMP%]{font-size:min(60vh,75vw);line-height:min(60vh,75vw);font-size:min(60dvh,75dvw);line-height:min(60dvh,75dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .countdown-timer.small-display-text[_ngcontent-%COMP%]{font-size:min(50vh,55vw);line-height:min(50vh,55vw);font-size:min(50dvh,55dvw);line-height:min(50dvh,55dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .set-counter[_ngcontent-%COMP%]{grid-column-start:left-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .exercise-counter[_ngcontent-%COMP%]{grid-column-start:right-column;grid-column-end:span 1;grid-row-start:center-row;grid-row-end:span 1;font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:min(9.5vh,20vw);line-height:min(9.5vh,20vw);font-size:min(9.5dvh,20dvw);line-height:min(9.5dvh,20dvw)}.wide-portrait[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%], .wide-portrait   [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .timer-controls[_ngcontent-%COMP%]{gap:5vw;gap:5dvw;grid-column-start:left-column;grid-column-end:span 2;grid-row-start:bottom-row;grid-row-end:span 1}"]})};var Lo=class n extends Z{settingsHeader=$localize`:Header for settings page@@settingsHeader:Settings`;backFromSettingsButtonLabel=$localize`:Back button label@@backFromSettingsButtonLabel:Back`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var Rh=["*"],Si=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-portrait-page-decoration"]],ngContentSelectors:Rh,decls:4,vars:0,consts:[[1,"layout-root"],[1,"content"],[1,"background"]],template:function(e,t){e&1&&(U(),Le(0,"div",0)(1,"div",1),S(2),Ne(),Et(3,"div",2),Ne())},styles:[`.layout-root[_ngcontent-%COMP%]{height:100%;width:100%;display:grid;grid-template-columns:1fr}.layout-root[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;width:100%;grid-row-start:1;grid-column-start:1}.layout-root[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{grid-row-start:1;grid-column-start:1;height:100%;width:100%;clip-path:polygon(0 80%,100% 60%,100% 100%,0 100%);background-image:url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='87' height='50.232' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23e1ecffff'/><path d='M0 54.424l14.5-8.373c4.813 2.767 9.705 5.573 14.5 8.37l14.5-8.373V29.303M0 4.193v16.744l-14.5 8.373L0 37.68l14.5-8.374V12.562l29-16.746m43.5 58.6l-14.5-8.37v-33.49c-4.795-2.797-9.687-5.603-14.5-8.37m43.5 25.111L87 37.67c-4.795-2.797-24.187-13.973-29-16.74l-14.5 8.373-14.5-8.37v-33.489m72.5 8.365L87 4.183l-14.5-8.37M87 4.183v16.745L58 37.673v16.744m0-66.976V4.185L43.5 12.56c-4.795-2.797-24.187-13.973-29-16.74L0 4.192l-14.5-8.37m29 33.484c4.813 2.767 9.705 5.573 14.5 8.37V54.42'  stroke-linecap='square' stroke-width='0.5' stroke='%23ffffffff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")}`]})};var No=class n{isFormValid=!0;isFormDirty=!1;translations=s(Lo);location=s(dn);signals=s(ae);constructor(){}onBackClicked(){this.isFormValid&&this.isFormDirty&&this.signals.isSettingsSaveInProgress.set(!0),this.location.back()}setValid(i){this.isFormValid=i}setDirty(i){this.isFormDirty=i}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-settings"]],decls:9,vars:4,consts:[[1,"settings-container"],[1,"settings-title"],["mat-icon-button","",1,"back-arrow",3,"click","title"],["aria-hidden","true",1,"back-icon"],[1,"settings-content"],[3,"isDirty","isValid"]],template:function(e,t){e&1&&(l(0,"tbt-portrait-page-decoration")(1,"section",0)(2,"h2",1)(3,"button",2),g("click",function(){return t.onBackClicked()}),l(4,"mat-icon",3),m(5,"arrow_back"),d()(),m(6),d(),l(7,"div",4)(8,"tbt-settings-form",5),g("isDirty",function(r){return t.setDirty(r)})("isValid",function(r){return t.setValid(r)}),d()()()()),e&2&&(c(3),f("title",Q(t.translations.backFromSettingsButtonLabel)),b("aria-label",t.translations.backFromSettingsButtonLabel),c(3),G(" ",t.translations.settingsHeader," "))},dependencies:[me,Ee,ue,ve,pi,Si],styles:[".settings-container[_ngcontent-%COMP%]{height:calc(100% - 3em);padding:1.5rem}.settings-container[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;font-weight:400;font:var(--mat-sys-title-large)}.settings-container[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%]{margin-right:.25rem}"]})};var Vo=class n extends Z{aboutHeader=$localize`:Header for about page@@aboutHeader:About`;backFromAboutButtonLabel=$localize`:Back button label@@backFromAboutButtonLabel:Back`;static \u0275fac=(()=>{let i;return function(t){return(i||(i=A(n)))(t||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac,providedIn:"root"})};var Bo=class n{translations=s(Vo);location=s(dn);constructor(){}onBackClicked(){this.location.back()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["tbt-about"]],decls:9,vars:4,consts:[[1,"about-container"],[1,"about-title"],["mat-icon-button","",1,"back-arrow",3,"click","title"],["aria-hidden","true",1,"back-icon"],[1,"about-content"]],template:function(e,t){e&1&&(l(0,"tbt-portrait-page-decoration")(1,"section",0)(2,"h2",1)(3,"button",2),g("click",function(){return t.onBackClicked()}),l(4,"mat-icon",3),m(5,"arrow_back"),d()(),m(6),d(),l(7,"div",4),C(8,"tbt-application-info"),d()()()),e&2&&(c(3),f("title",Q(t.translations.backFromAboutButtonLabel)),b("aria-label",t.translations.backFromAboutButtonLabel),c(3),G(" ",t.translations.aboutHeader," "))},dependencies:[ue,ve,me,Ee,xi,Si],styles:[".about-container[_ngcontent-%COMP%]{height:calc(100% - 3em);padding:1.5rem}.about-container[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;font-weight:400;font:var(--mat-sys-title-large)}.about-container[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%]{margin-right:.25rem}"]})};var vd=[{path:"launcher",component:ki},{path:"timer",component:Ro},{path:"about",component:Bo},{path:"settings",component:No},{path:"",component:ki,pathMatch:"full"},{path:"**",component:ki,pathMatch:"full"}];var ha={providers:[Ba(),qa(vd,Ga()),us("ngsw-worker.js",{enabled:!ja(),registrationStrategy:"registerWhenStable:30000"}),qo(async()=>{let n=s(re);return Promise.resolve()}),qo(()=>{s(hs).init()})]};var yd;function wd(n){yd??=new TextEncoder;let i=yd.encode(n),e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=Cd(e,i.length,0),o=Cd(e,i.length,102072);return t==0&&(o==0||o==1)&&(t=t^319790063,o=o^-1801410264),BigInt.asUintN(32,BigInt(t))<<BigInt(32)|BigInt.asUintN(32,BigInt(o))}function Lh(n,i=""){let e=wd(n);return i&&(e=BigInt.asUintN(64,e<<BigInt(1))|e>>BigInt(63)&BigInt(1),e+=wd(i)),BigInt.asUintN(63,e).toString()}function Cd(n,i,e){let t=2654435769,o=2654435769,r=0,a=i-12;for(;r<=a;r+=12){t+=n.getUint32(r,!0),o+=n.getUint32(r+4,!0),e+=n.getUint32(r+8,!0);let h=xd(t,o,e);t=h[0],o=h[1],e=h[2]}let u=i-r;return e+=i,u>=4?(t+=n.getUint32(r,!0),r+=4,u>=8?(o+=n.getUint32(r,!0),r+=4,u>=9&&(e+=n.getUint8(r++)<<8),u>=10&&(e+=n.getUint8(r++)<<16),u===11&&(e+=n.getUint8(r++)<<24)):(u>=5&&(o+=n.getUint8(r++)),u>=6&&(o+=n.getUint8(r++)<<8),u===7&&(o+=n.getUint8(r++)<<16))):(u>=1&&(t+=n.getUint8(r++)),u>=2&&(t+=n.getUint8(r++)<<8),u===3&&(t+=n.getUint8(r++)<<16)),xd(t,o,e)[2]}function xd(n,i,e){return n-=i,n-=e,n^=e>>>13,i-=e,i-=n,i^=n<<8,e-=n,e-=i,e^=i>>>13,n-=i,n-=e,n^=e>>>12,i-=e,i-=n,i^=n<<16,e-=n,e-=i,e^=i>>>5,n-=i,n-=e,n^=e>>>3,i-=e,i-=n,i^=n<<10,e-=n,e-=i,e^=i>>>15,[n,i,e]}function kd(n,i,e,t,o=[]){let r={},a={},u={},h=Nh(n[0],n.raw[0]),I=[h.text],X=[],ye=h.text;for(let He=1;He<n.length;He++){let{messagePart:tn,placeholderName:Oi=Bh(He),associatedMessageId:fa}=Vh(n[He],n.raw[He]);ye+=`{$${Oi}}${tn}`,i!==void 0&&(r[Oi]=i[He-1],a[Oi]=o[He-1]),X.push(Oi),fa!==void 0&&(u[Oi]=fa),I.push(tn)}let Fe=h.customId||Lh(ye,h.meaning||""),Gt=h.legacyIds?h.legacyIds.filter(He=>He!==Fe):[];return{id:Fe,legacyIds:Gt,substitutions:r,substitutionLocations:a,text:ye,customId:h.customId,meaning:h.meaning||"",description:h.description||"",messageParts:I,messagePartLocations:t,placeholderNames:X,associatedMessageIds:u,location:e}}function Nh(n,i){let{text:e,block:t}=Md(n,i);if(t===void 0)return{text:e};{let[o,...r]=t.split("\u241F"),[a,u]=o.split("@@",2),[h,I]=a.split("|",2);return I===void 0&&(I=h,h=void 0),I===""&&(I=void 0),{text:e,meaning:h,description:I,customId:u,legacyIds:r}}}function Vh(n,i){let{text:e,block:t}=Md(n,i);if(t===void 0)return{messagePart:e};{let[o,r]=t.split("@@");return{messagePart:e,placeholderName:o,associatedMessageId:r}}}function Md(n,i){if(i.charAt(0)!==":")return{text:n};{let e=zh(n,i);return{block:n.substring(1,e),text:n.substring(e+1)}}}function Bh(n){return n===1?"PH":`PH_${n-1}`}function zh(n,i){for(let e=1,t=1;e<n.length;e++,t++)if(i[t]==="\\")t++;else if(n[e]===":")return e;throw new Error(`Unterminated $localize metadata block in "${i}".`)}var pa=class extends Error{parsedMessage;type="MissingTranslationError";constructor(i){super(`No translation found for ${Sd(i)}.`),this.parsedMessage=i}};function jh(n,i,e){let t=kd(i,e),o=n[t.id];if(t.legacyIds!==void 0)for(let r=0;r<t.legacyIds.length&&o===void 0;r++)o=n[t.legacyIds[r]];if(o===void 0)throw new pa(t);return[o.messageParts,o.placeholderNames.map(r=>{if(t.substitutions.hasOwnProperty(r))return t.substitutions[r];throw new Error(`There is a placeholder name mismatch with the translation provided for the message ${Sd(t)}.
The translation contains a placeholder with name ${r}, which does not exist in the message.`)})]}function Uh(n){let i=n.split(/{\$([^}]*)}/),e=[i[0]],t=[];for(let r=1;r<i.length-1;r+=2)t.push(i[r]),e.push(`${i[r+1]}`);let o=e.map(r=>r.charAt(0)===":"?"\\"+r:r);return{text:n,messageParts:Hh(e,o),placeholderNames:t}}function Hh(n,i){return Object.defineProperty(n,"raw",{value:i}),n}function Sd(n){let i=n.meaning&&` - "${n.meaning}"`,e=n.legacyIds&&n.legacyIds.length>0?` [${n.legacyIds.map(t=>`"${t}"`).join(", ")}]`:"";return`"${n.id}"${e} ("${n.text}"${i})`}function Od(n){$localize.translate||($localize.translate=qh),$localize.TRANSLATIONS||($localize.TRANSLATIONS={}),Object.keys(n).forEach(i=>{$localize.TRANSLATIONS[i]=Uh(n[i])})}function Dd(){$localize.translate=void 0,$localize.TRANSLATIONS={}}function qh(n,i){try{return jh($localize.TRANSLATIONS,n,i)}catch(e){return console.warn(e.message),[n,i]}}var Gh={load:n=>fetch(n).then(i=>i.ok?i.json():Promise.reject(new Error(`HTTP ${i.status}`))),apply:(n,i)=>{Dd(),$localize.locale=n,Od(i)}};function $h(n){return`locale/${n}/messages.json`}function Kh(n){return Object.values(Ri).includes(n)}function Pd(n){if(!n)return"en-US";try{let i=JSON.parse(n);return Kh(i.language)?i.language:"en-US"}catch(i){return console.log(i),"en-US"}}async function Td(n,i=Gh){if(n!=="en-US")try{let e=await i.load($h(n));e.translations&&i.apply(n,e.translations)}catch(e){console.warn("Failed to load translations, using default locale.",e)}}var Ed=Pd(localStorage.getItem(wn.SETTINGS_KEY));Td(Ed).then(()=>import("./chunk-MVUVLEFQ.js")).then(n=>{ha.providers.push({provide:za,useValue:Ed}),Ha(n.AppComponent,ha).catch(i=>console.error(i))});
