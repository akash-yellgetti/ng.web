"use strict";(self.webpackChunkngweb=self.webpackChunkngweb||[]).push([[503],{1503:(V,h,s)=>{s.r(h),s.d(h,{AuthModule:()=>X});var _=s(6895),d=s(6630),n=s(4006),t=s(4650),v=s(4942),T=s(6347),q=s(5219),C=s(4859),U=s(7392),g=s(9549),A=s(4144),f=s(3265);function k(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Email is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function N(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}let w=(()=>{class o{constructor(e,r,a,c,u){this.fb=e,this.fieldService=r,this.authService=a,this.storageService=c,this.route=u,this.hide=!0,this.isCollapsed=!0,this.loginForm=this.fb.group({email:[null,n.kI.required],password:[null,n.kI.required]}),this.field={email:{label:"Email",name:"email",value:null},password:{label:"Passowrd",name:"password",value:null}},this.login=()=>{const m=this.fieldService.json(this.loginForm.controls);m.email="aakash5792@gmail.com",m.password="AAbb12",this.authService.login(m).subscribe(l=>{if(l&&l.status){const y=l.data;this.storageService.store("tokens",y.tokens),this.storageService.store("user",y.user),this.route.navigate(["main/dashboard"])}})}}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(v.D),t.Y36(T.e),t.Y36(q.n2),t.Y36(d.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:74,vars:10,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-primary","fixed-top"],[1,"navbar-brand",3,"routerLink"],["src","","alt","Sociosafety"],["type","button","aria-controls","collapseExample",1,"navbar-toggler",3,"click"],[1,"bi","bi-filter-right"],[1,"container-fluid"],[1,"row"],[1,"col-xl-5","col-xs-12","p-0"],[1,"welcome","space-lg","vh-100","bg-primary","inverse",3,"ngbCollapse","ngbCollapseChange"],["collapse","ngbCollapse"],[1,"contain","header","pt-lg-xs"],[1,"title"],[1,"contain","mt-5"],[1,"text-semibold"],[1,"app-links"],["href","#"],[1,"icon-play-store"],[1,"icon-apple-icon"],[1,"auth-bg-img","inverse"],[1,"col-lg-7","col-xs-12","p-0"],[1,"login","bg-white","space-lg","vh-100"],[1,"sub-title"],["href","javascript:void(0)","routerLink","/auth/registration"],[1,"social-media"],["type","button",1,"btn","btn-icon"],[1,"bi","bi-google"],[1,"bi","bi-facebook"],[1,"contain","mt-5","form"],["novalidate","",3,"formGroup"],[1,"form-row"],[1,"col-12"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Email","formControlName","email"],[4,"ngIf"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[1,"form-row","form-action"],[1,"col"],["href","javascript:void(0)","routerLink","/auth/forgot-password",1,"text-secondary"],[1,"col","text-right"],["type","submit",1,"btn","btn-lg","btn-primary","rounded-0",3,"click"],[1,"auth-bg-img"]],template:function(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"nav",0)(1,"a",1),t._UZ(2,"img",2),t.TgZ(3,"strong"),t._uU(4,"Socio"),t.qZA(),t._uU(5," Safety "),t.qZA(),t.TgZ(6,"button",3),t.NdJ("click",function(){t.CHM(a);const u=t.MAs(12);return t.KtG(u.toggle())}),t._UZ(7,"i",4),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"section",8,9),t.NdJ("ngbCollapseChange",function(u){return r.isCollapsed=u}),t.TgZ(13,"div",10)(14,"h1",11)(15,"strong"),t._uU(16,"Welcome Back!"),t.qZA()(),t.TgZ(17,"p"),t._uU(18,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta molestiae asperiores modi incidunt dolorem deserunt nihil eius error, accusamus ipsam id facere nemo possimus corrupti quas quo, nostrum iusto expedita."),t.qZA()(),t.TgZ(19,"div",12)(20,"h5",13),t._uU(21,"Download our app"),t.qZA(),t.TgZ(22,"div",14)(23,"a",15),t._UZ(24,"i",16),t.TgZ(25,"span"),t._uU(26,"Google Play"),t.qZA()(),t.TgZ(27,"a",15),t._UZ(28,"i",17),t.TgZ(29,"span"),t._uU(30,"App Store"),t.qZA()()()(),t._UZ(31,"div",18),t.qZA()(),t.TgZ(32,"div",19)(33,"section",20)(34,"div",10)(35,"h1",11),t._uU(36,"Login to "),t.TgZ(37,"strong"),t._uU(38,"Socio Safety"),t.qZA()(),t.TgZ(39,"p",21),t._uU(40,"Dont have an account? "),t.TgZ(41,"a",22),t._uU(42,"Register"),t.qZA()(),t.TgZ(43,"div",23)(44,"button",24),t._UZ(45,"i",25),t.qZA(),t.TgZ(46,"button",24),t._UZ(47,"i",26),t.qZA()()(),t.TgZ(48,"div",27)(49,"form",28)(50,"div",29)(51,"div",30)(52,"mat-form-field",31)(53,"mat-label"),t._uU(54,"Email"),t.qZA(),t._UZ(55,"input",32),t.YNc(56,k,4,0,"mat-error",33),t.qZA()(),t.TgZ(57,"div",30)(58,"mat-form-field",31)(59,"mat-label"),t._uU(60,"Password"),t.qZA(),t._UZ(61,"input",34),t.TgZ(62,"button",35),t.NdJ("click",function(){return r.hide=!r.hide}),t.TgZ(63,"mat-icon"),t._uU(64),t.qZA(),t.YNc(65,N,4,0,"mat-error",33),t.qZA()()()(),t.TgZ(66,"div",36)(67,"div",37)(68,"a",38),t._uU(69,"Forgot your password?"),t.qZA()(),t.TgZ(70,"div",39)(71,"button",40),t.NdJ("click",function(){return r.login()}),t._uU(72,"Login"),t.qZA()()()()(),t._UZ(73,"div",41),t.qZA()()()()}2&e&&(t.xp6(1),t.Q6J("routerLink","."),t.xp6(5),t.uIk("aria-expanded",!r.isCollapsed),t.xp6(5),t.Q6J("ngbCollapse",r.isCollapsed),t.xp6(38),t.Q6J("formGroup",r.loginForm),t.xp6(7),t.Q6J("ngIf",r.loginForm.controls.email.hasError("required")),t.xp6(5),t.Q6J("type",r.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",r.hide),t.xp6(2),t.Oqu(r.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",r.loginForm.controls.password.hasError("required")))},dependencies:[_.O5,C.lW,U.Hw,g.TO,g.KE,g.hX,g.R9,A.Nt,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,f.M2,f._D,d.yS],styles:[".login-page[_ngcontent-%COMP%]{top:0;margin:0;padding:0;width:100%;height:100%;display:block;background-color:#303f9f;background-position:center;background-repeat:no-repeat;background-size:cover;overflow:hidden}mat-card[_ngcontent-%COMP%]{width:30%;margin:10% auto;border-radius:8px}mat-form-field[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]{width:80%;display:block;margin:auto}mat-card-content[_ngcontent-%COMP%]{margin-top:20px}.login-button[_ngcontent-%COMP%]{display:block;width:80%;margin:20px auto}"]}),o})();var I=s(1130),x=s(1948),Z=s(9602);function J(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," First name is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function F(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Last name is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function O(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Gender is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function R(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Date of birth is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function S(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Mobile Number is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function M(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," OTP is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function Y(o,i){if(1&o&&(t.TgZ(0,"div",49)(1,"mat-form-field",30)(2,"mat-label"),t._uU(3,"OTP"),t.qZA(),t._UZ(4,"input",50),t.YNc(5,M,4,0,"mat-error",32),t.qZA()()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngIf",e.registrationForm.controls.no.hasError("required"))}}function P(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Email is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function Q(o,i){if(1&o&&(t.TgZ(0,"div",51)(1,"mat-form-field",30)(2,"mat-label"),t._uU(3,"Email"),t.qZA(),t._UZ(4,"input",52),t.YNc(5,P,4,0,"mat-error",32),t.qZA()()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngIf",e.registrationForm.controls.email.hasError("required"))}}function E(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function L(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",53)(1,"mat-form-field",30)(2,"mat-label"),t._uU(3,"Password"),t.qZA(),t._UZ(4,"input",54),t.TgZ(5,"button",55),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.hide=!a.hide)}),t.TgZ(6,"mat-icon"),t._uU(7),t.qZA(),t.YNc(8,E,4,0,"mat-error",32),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("type",e.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",e.hide),t.xp6(2),t.Oqu(e.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",e.registrationForm.controls.password.hasError("required"))}}function G(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Conirm Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function D(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",53)(1,"mat-form-field",30)(2,"mat-label"),t._uU(3,"Confirm Password"),t.qZA(),t._UZ(4,"input",56),t.TgZ(5,"button",55),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.hide=!a.hide)}),t.TgZ(6,"mat-icon"),t._uU(7),t.qZA(),t.YNc(8,G,4,0,"mat-error",32),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("type",e.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",e.hide),t.xp6(2),t.Oqu(e.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",e.registrationForm.controls.confirmPassword.hasError("required"))}}function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",57),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.generateOTP())}),t._uU(1,"Generate OTP"),t.qZA()}}function j(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",58),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.verify())}),t._uU(1,"Verify OTP"),t.qZA()}}function K(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",57),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.register())}),t._uU(1,"Register"),t.qZA()}}const B=[{path:"login",component:w},{path:"registration",component:(()=>{class o{constructor(e,r,a,c,u,b){this.fb=e,this.router=r,this.storageService=a,this.fieldService=c,this.loaderService=u,this.authService=b,this.hide=!0,this.isCollapsed=!0,this.registrationForm=this.fb.group({firstName:["A",n.kI.required],lastName:["B",n.kI.required],gender:["m",n.kI.required],mobileNo:["9920021073",n.kI.required],no:[null,n.kI.required],dob:["1992/12/08",n.kI.required],email:[null,n.kI.required],password:[null,n.kI.required],confirmPassword:[null,n.kI.required]}),this.flag={requestOtp:!0,verifyOtp:!1,mobileNo:!1,register:!1,otpFlag:"requestRegister"},this.input={otp:""},this.otp="",this.password="",this.confirm_password="",this.generateOTP=()=>{const p=this.fieldService.json(this.registrationForm.controls);p.type=this.flag.otpFlag,this.authService.generateOTP(p).subscribe(l=>{l&&l.status&&(this.flag.requestOtp=!1,this.flag.verifyOtp=!0,this.flag.mobileNo=!0)})},this.verify=()=>{const p=this.fieldService.json(this.registrationForm.controls);p.type=this.flag.otpFlag,this.authService.verifyOTP(p).subscribe(l=>{l&&l.status&&(this.flag.requestOtp=!1,this.flag.verifyOtp=!1,this.flag.register=!0)})},this.register=()=>{const p=this.fieldService.json(this.registrationForm.controls);p.type=this.flag.otpFlag,this.authService.register(p).subscribe(l=>{l&&l.status&&(this.flag.requestOtp=!1,this.flag.verifyOtp=!1,this.flag.register=!0)})}}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(d.F0),t.Y36(q.n2),t.Y36(v.D),t.Y36(I.D),t.Y36(T.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-registration"]],decls:90,vars:18,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-primary","fixed-top"],[1,"navbar-brand",3,"routerLink"],["src","","alt","Sociosafety"],["type","button","aria-controls","collapseExample",1,"navbar-toggler",3,"click"],[1,"bi","bi-filter-right"],[1,"container-fluid"],[1,"row"],[1,"col-xl-5","col-xs-12","p-0"],[1,"welcome","space-lg","vh-100","bg-primary","inverse",3,"ngbCollapse","ngbCollapseChange"],["collapse","ngbCollapse"],[1,"contain","header","pt-lg-xs"],[1,"title"],[1,"contain","mt-5"],[1,"text-semibold"],[1,"app-links"],["href","#"],[1,"icon-play-store"],[1,"icon-apple-icon"],[1,"auth-bg-img","inverse"],[1,"col-lg-7","col-xs-12","p-0"],[1,"login","bg-white","space-lg","vh-100"],[1,"sub-title"],["href","javascript:void(0)","routerLink","/auth/login"],[1,"social-media"],["type","button",1,"btn","btn-icon"],[1,"bi","bi-google"],[1,"bi","bi-facebook"],[1,"contain","mt-5","form"],["novalidate","",3,"formGroup"],[1,"form-row"],["appearance","outline",1,"w-100"],["matInput","","placeholder","First name","formControlName","firstName"],[4,"ngIf"],["matInput","","placeholder","Last name","formControlName","lastName"],["formControlName","gender"],["value","m"],["value","f"],["matInput","","formControlName","dob",3,"matDatepicker"],["matIconSuffix","",3,"for"],["picker",""],["matInput","","placeholder","Last name","formControlName","mobileNo"],["class","col-sm-12",4,"ngIf"],["class","col-12",4,"ngIf"],["class","col-6",4,"ngIf"],[1,"form-row","form-action"],["class","btn btn-lg btn-primary rounded-0",3,"click",4,"ngIf"],[1,"col","text-right"],["class","btn btn-lg btn-primary rounded-0","type","button",3,"click",4,"ngIf"],[1,"auth-bg-img"],[1,"col-sm-12"],["matInput","","placeholder","OTP","formControlName","no"],[1,"col-12"],["matInput","","placeholder","Email","formControlName","email"],[1,"col-6"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["matInput","","formControlName","confirmPassword",3,"type"],[1,"btn","btn-lg","btn-primary","rounded-0",3,"click"],["type","button",1,"btn","btn-lg","btn-primary","rounded-0",3,"click"]],template:function(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"nav",0)(1,"a",1),t._UZ(2,"img",2),t.TgZ(3,"strong"),t._uU(4,"Socio"),t.qZA(),t._uU(5," Safety "),t.qZA(),t.TgZ(6,"button",3),t.NdJ("click",function(){t.CHM(a);const u=t.MAs(12);return t.KtG(u.toggle())}),t._UZ(7,"i",4),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"section",8,9),t.NdJ("ngbCollapseChange",function(u){return r.isCollapsed=u}),t.TgZ(13,"div",10)(14,"h1",11)(15,"strong"),t._uU(16,"Welcome Back!"),t.qZA()(),t.TgZ(17,"p"),t._uU(18,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta molestiae asperiores modi incidunt dolorem deserunt nihil eius error, accusamus ipsam id facere nemo possimus corrupti quas quo, nostrum iusto expedita. "),t.qZA()(),t.TgZ(19,"div",12)(20,"h5",13),t._uU(21,"Download our app"),t.qZA(),t.TgZ(22,"div",14)(23,"a",15),t._UZ(24,"i",16),t.TgZ(25,"span"),t._uU(26,"Google Play"),t.qZA()(),t.TgZ(27,"a",15),t._UZ(28,"i",17),t.TgZ(29,"span"),t._uU(30,"App Store"),t.qZA()()()(),t._UZ(31,"div",18),t.qZA()(),t.TgZ(32,"div",19)(33,"section",20)(34,"div",10)(35,"h1",11),t._uU(36,"Create new account"),t.qZA(),t.TgZ(37,"p",21),t._uU(38,"Already have an account? "),t.TgZ(39,"a",22),t._uU(40,"Login"),t.qZA()(),t.TgZ(41,"div",23)(42,"button",24),t._UZ(43,"i",25),t.qZA(),t.TgZ(44,"button",24),t._UZ(45,"i",26),t.qZA()()(),t.TgZ(46,"div",27)(47,"form",28)(48,"div",29)(49,"mat-form-field",30)(50,"mat-label"),t._uU(51,"First Name"),t.qZA(),t._UZ(52,"input",31),t.YNc(53,J,4,0,"mat-error",32),t.qZA(),t.TgZ(54,"mat-form-field",30)(55,"mat-label"),t._uU(56,"Last Name"),t.qZA(),t._UZ(57,"input",33),t.YNc(58,F,4,0,"mat-error",32),t.qZA(),t.TgZ(59,"mat-radio-group",34)(60,"mat-radio-button",35),t._uU(61,"Male"),t.qZA(),t.TgZ(62,"mat-radio-button",36),t._uU(63,"Female"),t.qZA()(),t.YNc(64,O,4,0,"mat-error",32),t.TgZ(65,"mat-form-field",30)(66,"mat-label"),t._uU(67,"Choose a date"),t.qZA(),t._UZ(68,"input",37),t.TgZ(69,"mat-hint"),t._uU(70,"MM/DD/YYYY"),t.qZA(),t._UZ(71,"mat-datepicker-toggle",38)(72,"mat-datepicker",null,39),t.YNc(74,R,4,0,"mat-error",32),t.qZA(),t.TgZ(75,"mat-form-field",30)(76,"mat-label"),t._uU(77,"Mobile Number"),t.qZA(),t._UZ(78,"input",40),t.YNc(79,S,4,0,"mat-error",32),t.qZA(),t.YNc(80,Y,6,1,"div",41),t.YNc(81,Q,6,1,"div",42),t.YNc(82,L,9,5,"div",43),t.YNc(83,D,9,5,"div",43),t.qZA(),t.TgZ(84,"div",44),t.YNc(85,H,2,0,"button",45),t.TgZ(86,"div",46),t.YNc(87,j,2,0,"button",47),t.YNc(88,K,2,0,"button",45),t.qZA()()()(),t._UZ(89,"div",48),t.qZA()()()()}if(2&e){const a=t.MAs(73);t.xp6(1),t.Q6J("routerLink","."),t.xp6(5),t.uIk("aria-expanded",!r.isCollapsed),t.xp6(5),t.Q6J("ngbCollapse",r.isCollapsed),t.xp6(36),t.Q6J("formGroup",r.registrationForm),t.xp6(6),t.Q6J("ngIf",r.registrationForm.controls.firstName.hasError("required")),t.xp6(5),t.Q6J("ngIf",r.registrationForm.controls.lastName.hasError("required")),t.xp6(6),t.Q6J("ngIf",r.registrationForm.controls.gender.hasError("required")),t.xp6(4),t.Q6J("matDatepicker",a),t.xp6(3),t.Q6J("for",a),t.xp6(3),t.Q6J("ngIf",r.registrationForm.controls.dob.hasError("required")),t.xp6(5),t.Q6J("ngIf",r.registrationForm.controls.mobileNo.hasError("required")),t.xp6(1),t.Q6J("ngIf",r.flag.verifyOtp),t.xp6(1),t.Q6J("ngIf",r.flag.register),t.xp6(1),t.Q6J("ngIf",r.flag.register),t.xp6(1),t.Q6J("ngIf",r.flag.register),t.xp6(2),t.Q6J("ngIf",r.flag.requestOtp),t.xp6(2),t.Q6J("ngIf",r.flag.verifyOtp),t.xp6(1),t.Q6J("ngIf",r.flag.register)}},dependencies:[_.O5,C.lW,U.Hw,g.TO,g.KE,g.bx,g.hX,g.R9,A.Nt,x.VQ,x.U0,Z.Mq,Z.hl,Z.nW,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,f.M2,f._D,d.yS],styles:[".login-page[_ngcontent-%COMP%]{top:0;margin:0;padding:0;width:100%;height:100%;display:block;background-color:#303f9f;background-position:center;background-repeat:no-repeat;background-size:cover;overflow:hidden}mat-card[_ngcontent-%COMP%]{width:30%;margin:10% auto;border-radius:8px}mat-card-content[_ngcontent-%COMP%]{margin-top:20px}.login-button[_ngcontent-%COMP%]{display:block;width:80%;margin:20px auto}"]}),o})()}];let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(B),d.Bz]}),o})();var W=s(3742);let X=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.ez,W.m,z]}),o})()}}]);