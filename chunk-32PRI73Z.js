import{$ as te,Ea as oe,Fa as ae,K as T,Ka as l,L as R,La as u,M as Me,Ma as V,N as Q,Na as w,P as v,Ta as h,U as Ae,V as ee,Va as j,W as f,Wa as we,Za as Se,a as d,aa as ie,b as c,ba as Ee,ca as Fe,fb as S,g as Ce,ga as E,gb as m,hb as le,j as Ve,ja as ne,o as De,ob as Ie,sa as re,ta as a,u as be,va as se,xa as F,ya as y}from"./chunk-5PKEA7AN.js";var je=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(a(se),a(ne))}}static{this.\u0275dir=f({type:i})}}return i})(),vt=(()=>{class i extends je{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Fe(i)))(r||i)}})()}static{this.\u0275dir=f({type:i,features:[y]})}}return i})(),Be=new v("");var yt={provide:Be,useExisting:R(()=>X),multi:!0};function Ct(){let i=le()?le().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Vt=new v(""),X=(()=>{class i extends je{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ct())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(a(se),a(ne),a(Vt,8))}}static{this.\u0275dir=f({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&w("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},features:[j([yt]),y]})}}return i})();function g(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Ue(i){return i!=null&&typeof i.length=="number"}var He=new v(""),Le=new v(""),Dt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,C=class{static min(e){return bt(e)}static max(e){return Mt(e)}static required(e){return At(e)}static requiredTrue(e){return Et(e)}static email(e){return Ft(e)}static minLength(e){return wt(e)}static maxLength(e){return St(e)}static pattern(e){return It(e)}static nullValidator(e){return $e(e)}static compose(e){return Ye(e)}static composeAsync(e){return Ke(e)}};function bt(i){return e=>{if(g(e.value)||g(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function Mt(i){return e=>{if(g(e.value)||g(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function At(i){return g(i.value)?{required:!0}:null}function Et(i){return i.value===!0?null:{required:!0}}function Ft(i){return g(i.value)||Dt.test(i.value)?null:{email:!0}}function wt(i){return e=>g(e.value)||!Ue(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function St(i){return e=>Ue(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function It(i){if(!i)return $e;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(g(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function $e(i){return null}function We(i){return i!=null}function qe(i){return Se(i)?Ve(i):i}function ze(i){let e={};return i.forEach(t=>{e=t!=null?d(d({},e),t):e}),Object.keys(e).length===0?null:e}function Ze(i,e){return e.map(t=>t(i))}function xt(i){return!i.validate}function Xe(i){return i.map(e=>xt(e)?e:t=>e.validate(t))}function Ye(i){if(!i)return null;let e=i.filter(We);return e.length==0?null:function(t){return ze(Ze(t,e))}}function Je(i){return i!=null?Ye(Xe(i)):null}function Ke(i){if(!i)return null;let e=i.filter(We);return e.length==0?null:function(t){let n=Ze(t,e).map(qe);return be(n).pipe(De(ze))}}function Qe(i){return i!=null?Ke(Xe(i)):null}function xe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function et(i){return i._rawValidators}function tt(i){return i._rawAsyncValidators}function ue(i){return i?Array.isArray(i)?i:[i]:[]}function H(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ne(i,e){let t=ue(e);return ue(i).forEach(r=>{H(t,r)||t.push(r)}),t}function Oe(i,e){return ue(e).filter(t=>!H(i,t))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Je(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Qe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},M=class extends L{get formDirective(){return null}get path(){return null}},P=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},$=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Nt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ci=c(d({},Nt),{"[class.ng-submitted]":"isSubmitted"}),it=(()=>{class i extends ${constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(a(P,2))}}static{this.\u0275dir=f({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&ae("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[y]})}}return i})(),nt=(()=>{class i extends ${constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(a(M,10))}}static{this.\u0275dir=f({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&ae("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[y]})}}return i})();var I="VALID",B="INVALID",D="PENDING",x="DISABLED",_=class{},W=class extends _{constructor(e,t){super(),this.value=e,this.source=t}},N=class extends _{constructor(e,t){super(),this.pristine=e,this.source=t}},O=class extends _{constructor(e,t){super(),this.touched=e,this.source=t}},b=class extends _{constructor(e,t){super(),this.status=e,this.source=t}},de=class extends _{constructor(e){super(),this.source=e}},ce=class extends _{constructor(e){super(),this.source=e}};function pe(i){return(Y(i)?i.validators:i)||null}function Ot(i){return Array.isArray(i)?Je(i):i||null}function me(i,e){return(Y(e)?e.asyncValidators:i)||null}function Pt(i){return Array.isArray(i)?Qe(i):i||null}function Y(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function rt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new T(1e3,"");if(!n[t])throw new T(1001,"")}function st(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new T(1002,"")})}var A=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=S(()=>this.statusReactive()),this.statusReactive=F(void 0),this._pristine=S(()=>this.pristineReactive()),this.pristineReactive=F(!0),this._touched=S(()=>this.touchedReactive()),this.touchedReactive=F(!1),this._events=new Ce,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return m(this.statusReactive)}set status(e){m(()=>this.statusReactive.set(e))}get valid(){return this.status===I}get invalid(){return this.status===B}get pending(){return this.status==D}get disabled(){return this.status===x}get enabled(){return this.status!==x}get pristine(){return m(this.pristineReactive)}set pristine(e){m(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return m(this.touchedReactive)}set touched(e){m(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ne(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Oe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(d({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new O(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new O(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(d({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new N(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new N(!0,n))}markAsPending(e={}){this.status=D;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new b(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(d({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=x,this.errors=null,this._forEachChild(r=>{r.disable(c(d({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,n)),this._events.next(new b(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(d({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(n=>{n.enable(c(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(d({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===D)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new W(this.value,t)),this._events.next(new b(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(d({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=qe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new b(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(B)?B:I}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new N(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new O(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Y(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ot(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Pt(this._rawAsyncValidators)}},q=class extends A{constructor(e,t,n){super(pe(t),me(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){st(this,!0,e),Object.keys(e).forEach(n=>{rt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var he=class extends q{};var ot=new v("CallSetDisabledState",{providedIn:"root",factory:()=>ge}),ge="always";function kt(i,e){return[...e.path,i]}function Pe(i,e,t=ge){_e(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Tt(i,e),jt(i,e),Rt(i,e),Gt(i,e)}function ke(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),Z(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function z(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Gt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function _e(i,e){let t=et(i);e.validator!==null?i.setValidators(xe(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=tt(i);e.asyncValidator!==null?i.setAsyncValidators(xe(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();z(e._rawValidators,r),z(e._rawAsyncValidators,r)}function Z(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=et(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=tt(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return z(e._rawValidators,n),z(e._rawAsyncValidators,n),t}function Tt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&at(i,e)})}function Rt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&at(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function at(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function jt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Bt(i,e){i==null,_e(i,e)}function Ut(i,e){return Z(i,e)}function Ht(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Lt(i){return Object.getPrototypeOf(i.constructor)===vt}function $t(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Wt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===X?t=s:Lt(s)?n=s:r=s}),r||n||t||null}function qt(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ge(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Te(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var U=class extends A{constructor(e=null,t,n){super(pe(t),me(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Te(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ge(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ge(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Te(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var zt=i=>i instanceof U;var lt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=f({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var ut=new v("");var Zt={provide:M,useExisting:R(()=>ve)},ve=(()=>{class i extends M{get submitted(){return m(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=S(()=>this._submittedReactive()),this._submittedReactive=F(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new E,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return Pe(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){ke(t.control||null,t,!1),qt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),$t(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new de(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ce(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(ke(n||null,t),zt(r)&&(Pe(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);Bt(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&Ut(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){_e(this.form,this),this._oldForm&&Z(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(a(He,10),a(Le,10),a(ot,8))}}static{this.\u0275dir=f({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&w("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[j([Zt]),y,te]})}}return i})();var Xt={provide:P,useExisting:R(()=>ye)},ye=(()=>{class i extends P{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,o){super(),this._ngModelWarningConfig=o,this._added=!1,this.name=null,this.update=new E,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Wt(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Ht(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return kt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(a(M,13),a(He,10),a(Le,10),a(Be,10),a(ut,8))}}static{this.\u0275dir=f({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[j([Xt]),y,te]})}}return i})();var Yt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=ee({type:i})}static{this.\u0275inj=Q({})}}return i})(),fe=class extends A{constructor(e,t,n){super(pe(t),me(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){st(this,!1,e),e.forEach((n,r)=>{rt(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Re(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var dt=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,n=null){let r=this._reduceControls(t),s={};return Re(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new q(r,s)}record(t,n=null){let r=this._reduceControls(t);return new he(r,n)}control(t,n,r){let s={};return this.useNonNullable?(Re(n)?s=n:(s.validators=n,s.asyncValidators=r),new U(t,c(d({},s),{nonNullable:!0}))):new U(t,n,r)}array(t,n,r){let s=t.map(o=>this._createControl(o));return new fe(s,n,r)}_reduceControls(t){let n={};return Object.keys(t).forEach(r=>{n[r]=this._createControl(t[r])}),n}_createControl(t){if(t instanceof U)return t;if(t instanceof A)return t;if(Array.isArray(t)){let n=t[0],r=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,r,s)}else return this.control(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Me({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ct=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ut,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ot,useValue:t.callSetDisabledState??ge}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=ee({type:i})}static{this.\u0275inj=Q({imports:[Yt]})}}return i})();var p={_origin:"https://api.emailjs.com"};var ht=(i,e="https://api.emailjs.com")=>{p._userID=i,p._origin=e};var J=(i,e,t)=>{if(!i)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var k=class{constructor(e){this.status=e.status,this.text=e.responseText}};var K=(i,e,t={})=>new Promise((n,r)=>{let s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{let G=new k(o);G.status===200||G.text==="OK"?n(G):r(G)}),s.addEventListener("error",({target:o})=>{r(new k(o))}),s.open("POST",p._origin+i,!0),Object.keys(t).forEach(o=>{s.setRequestHeader(o,t[o])}),s.send(e)});var ft=(i,e,t,n)=>{let r=n||p._userID;return J(r,i,e),K("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:i,template_id:e,template_params:t}),{"Content-type":"application/json"})};var Kt=i=>{let e;if(typeof i=="string"?e=document.querySelector(i):e=i,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},pt=(i,e,t,n)=>{let r=n||p._userID,s=Kt(t);J(r,i,e);let o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",i),o.append("template_id",e),o.append("user_id",r),K("/api/v1.0/email/send-form",o)};var mt={init:ht,send:ft,sendForm:pt};var gt=class i{constructor(e){this.fb=e;this.contactForm=this.fb.group({name:["",C.required],email:["",[C.required,C.email]],message:["",C.required]})}contactForm;onSubmit(){if(this.contactForm.valid){let{name:e,email:t,message:n}=this.contactForm.value,r={from_name:e,message:n,reply_to:t,to_name:e,to_email:t};mt.send("service_qdb6z0p","template_9kiie6n",r,"JkeQbQNIMYPNvrd9H").then(s=>{console.log("SUCCESS!",s.status,s.text),alert("Message sent successfully!"),this.contactForm.reset()},s=>{console.error("FAILED...",s),alert("Failed to send message. Please try again later.")})}}static \u0275fac=function(t){return new(t||i)(a(dt))};static \u0275cmp=Ae({type:i,selectors:[["app-contact"]],standalone:!0,features:[we],decls:44,vars:2,consts:[[1,"grid","gap-8"],[1,"card","bg-base-200"],[1,"card-body"],[1,"card-title","text-3xl","mb-4"],[1,"grid","md:grid-cols-2","gap-8"],[1,"space-y-4",3,"ngSubmit","formGroup"],[1,"form-control"],[1,"label"],[1,"label-text"],["type","text","formControlName","name",1,"input","input-bordered"],["type","email","formControlName","email",1,"input","input-bordered"],["formControlName","message",1,"textarea","textarea-bordered","h-32"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"bg-base-300","p-6","rounded-lg"],[1,"text-xl","font-bold","mb-4"],[1,"space-y-4"],[1,"font-bold"],["href","mailto:hotiukmax@gmail.com",1,"link"],[1,"flex","gap-4","mt-2"],["href","https://github.com/MaxHotiuk","target","_blank","rel","noopener noreferrer",1,"text-2xl","hover:text-primary","transition-colors"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","currentColor",1,"w-6","h-6"],["d","M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"],["href","https://www.linkedin.com/in/maxhotiuk/","target","_blank","rel","noopener noreferrer",1,"text-2xl","hover:text-primary","transition-colors"],["d","M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),h(4,"Get in Touch"),u(),l(5,"div",4)(6,"div")(7,"form",5),w("ngSubmit",function(){return n.onSubmit()}),l(8,"div",6)(9,"label",7)(10,"span",8),h(11,"Name"),u()(),V(12,"input",9),u(),l(13,"div",6)(14,"label",7)(15,"span",8),h(16,"Email"),u()(),V(17,"input",10),u(),l(18,"div",6)(19,"label",7)(20,"span",8),h(21,"Message"),u()(),V(22,"textarea",11),u(),l(23,"button",12),h(24,"Send Message"),u()()(),l(25,"div",13)(26,"h3",14),h(27,"Other Ways to Connect"),u(),l(28,"div",15)(29,"div")(30,"h4",16),h(31,"Email"),u(),l(32,"a",17),h(33,"hotiukmax@gmail.com"),u()(),l(34,"div")(35,"h4",16),h(36,"Social Media"),u(),l(37,"div",18)(38,"a",19),ie(),l(39,"svg",20),V(40,"path",21),u()(),Ee(),l(41,"a",22),ie(),l(42,"svg",20),V(43,"path",23),u()()()()()()()()()()),t&2&&(re(7),oe("formGroup",n.contactForm),re(16),oe("disabled",!n.contactForm.valid))},dependencies:[Ie,ct,lt,X,it,nt,ve,ye],encapsulation:2})};export{gt as ContactComponent};
