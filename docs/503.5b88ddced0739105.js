"use strict";(self.webpackChunkngweb=self.webpackChunkngweb||[]).push([[503],{1503:(J,d,o)=>{o.r(d),o.d(d,{AuthModule:()=>O});var f=o(6895),m=o(6630),n=o(4650),h=o(6347),v=o(5219),C=o(4859),x=o(3683),c=o(3546),M=o(9549),y=o(4144),i=o(4006),u=o(1576);const A=[{path:"login",component:(()=>{class t{constructor(e,l,g){this.authService=e,this.storageService=l,this.route=g,this.field={email:{label:"Email",name:"email",value:null},password:{label:"Passowrd",name:"password",value:null}},this.login=()=>{this.authService.login({email:this.field.email.value,password:this.field.password.value}).subscribe(r=>{if(r&&r.status){const p=r.data;this.storageService.store("tokens",p.tokens),this.storageService.store("user",p.user),this.route.navigate(["main/user/finance/dashboard"])}})}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(h.e),n.Y36(v.n2),n.Y36(m.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:11,vars:3,consts:[["fxLayout","row","fxLayoutAlign","center center","fxFlexFill","",1,"login"],["fxFlex.sm","100%","fxFlex.xs","100%",3,"fxFlex"],["color","primary"],["fxLayoutAlign","stretch","fxLayout","column",1,"login-form"],["matInput","","placeholder","Username","name","username","required","",3,"ngModel","ngModelChange"],["matInput","","placeholder","Password","type","password","name","password","required","",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,l){1&e&&(n.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-toolbar",2),n._uU(3,"Login"),n.qZA(),n.TgZ(4,"mat-card-content",3)(5,"mat-form-field")(6,"input",4),n.NdJ("ngModelChange",function(s){return l.field.email.value=s}),n.qZA()(),n.TgZ(7,"mat-form-field")(8,"input",5),n.NdJ("ngModelChange",function(s){return l.field.password.value=s}),n.qZA()(),n.TgZ(9,"button",6),n.NdJ("click",function(){return l.login()}),n._uU(10,"Login"),n.qZA()()()()),2&e&&(n.xp6(1),n.Q6J("fxFlex","25%"),n.xp6(5),n.Q6J("ngModel",l.field.email.value),n.xp6(2),n.Q6J("ngModel",l.field.password.value))},dependencies:[C.lW,x.Ye,c.a8,c.dn,M.KE,y.Nt,i.Fj,i.JJ,i.Q7,i.On,u.xw,u.Wh,u.s9,u.yH],styles:[".login[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{padding:0}.login[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{padding:20px}"]}),t})()},{path:"registration",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-registration"]],decls:2,vars:0,template:function(e,l){1&e&&(n.TgZ(0,"p"),n._uU(1,"registration works!"),n.qZA())}}),t})()}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.Bz.forChild(A),m.Bz]}),t})();var F=o(2969);let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[f.ez,F.m,L]}),t})()}}]);