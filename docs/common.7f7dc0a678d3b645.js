"use strict";(self.webpackChunkngweb=self.webpackChunkngweb||[]).push([[592],{6347:(E,f,a)=>{a.d(f,{e:()=>x});var e=a(520),u=a(4850),s=a(7221),_=a(8210),d=a(5e3),g=a(7261),v=a(5374),C=a(2290);let x=(()=>{class h{constructor(m,T,o,r){this._snackBar=m,this.http=T,this.storage=o,this.toastr=r,this.generateOTP=t=>{const l=_.G.uri+"/auth/otp/generate",i={headers:new e.WM({"Content-Type":"application/json"})},c=JSON.stringify(t);return this.http.post(l,c,i).pipe((0,u.U)(p=>p),(0,s.K)(this.handleError))},this.verifyOTP=t=>{const l=_.G.uri+"/auth/otp/verify",i={headers:new e.WM({"Content-Type":"application/json"})},c=JSON.stringify(t);return this.http.post(l,c,i).pipe((0,u.U)(p=>p),(0,s.K)(this.handleError))},this.register=t=>{const l=_.G.uri+"/auth/register",i={headers:new e.WM({"Content-Type":"application/json"})},c=JSON.stringify(t);return this.http.post(l,c,i).pipe((0,u.U)(p=>p),(0,s.K)(this.handleError))},this.login=t=>{const l=_.G.uri+"/auth/login",i={headers:new e.WM({"api-build-version":"1.1.96","Content-Type":"application/json"})},c=JSON.stringify(t);return this.http.post(l,c,i).pipe((0,u.U)(p=>p),(0,s.K)(this.handleError))},this.check=()=>{const t=_.G.uri+"/auth/check",n={headers:new e.WM({"Content-Type":"application/json",Authorization:this.getAuthToken()})};return this.http.get(t,n).pipe((0,u.U)(i=>i),(0,s.K)(this.handleError))},this.saveDevice=t=>{const l=_.G.uri+"/device/create",i={headers:new e.WM({"Content-Type":"application/json",Authorization:this.getAuthToken()})},c=JSON.stringify(t);return this.http.post(l,c,i).pipe((0,u.U)(p=>p),(0,s.K)(this.handleError))},this.getAuthToken=()=>`JWT ${this.storage.retrieve("tokens").accessToken}`,this.handleError=t=>{const l=t.error;switch(t.status){case 401:default:this.toastr.error(l.message);break;case 400:case 422:const n=l.data;for(let i in n)this.toastr.error(n[i].message)}}}}return h.\u0275fac=function(m){return new(m||h)(d.LFG(g.ux),d.LFG(e.eN),d.LFG(v.n2),d.LFG(C._W))},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},6885:(E,f,a)=>{a.d(f,{C:()=>T});var e=a(5e3),u=a(8069),s=a(3075),_=a(9808);function d(o,r){if(1&o&&(e.TgZ(0,"div",3)(1,"h5",4),e._uU(2),e.qZA(),e._UZ(3,"hr",5),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.field.label)}}function g(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"label",6),e._uU(2),e.qZA(),e.TgZ(3,"input",7),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.field.value=n)}),e.qZA(),e.TgZ(4,"div",8),e._uU(5," Please choose a username. "),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.s9C("for",t.field.name),e.xp6(1),e.Oqu(t.field.label),e.xp6(1),e.s9C("type",t.field.fieldtype),e.s9C("id",t.field.name),e.MGl("placeholder","Enter ",t.field.label,""),e.Q6J("ngModel",t.field.value)}}function v(o,r){if(1&o&&(e.TgZ(0,"option",12),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.Q6J("value",t.key),e.xp6(1),e.Oqu(t.value)}}function C(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"label",6),e._uU(2),e.qZA(),e.TgZ(3,"select",9),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.field.value=n)})("ngModelChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.triggerSelect(n))}),e.TgZ(4,"option",10),e._uU(5),e.qZA(),e.YNc(6,v,2,2,"option",11),e.qZA(),e.TgZ(7,"div",8),e._uU(8," Please choose a username. "),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.s9C("for",t.field.name),e.xp6(1),e.Oqu(t.field.label),e.xp6(1),e.s9C("id",t.field.name),e.Q6J("ngModel",t.field.value),e.xp6(2),e.hij("Select ",t.field.label,""),e.xp6(1),e.Q6J("ngForOf",t.field.options)}}function x(o,r){if(1&o&&(e.TgZ(0,"option",12),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.Q6J("value",t.key),e.xp6(1),e.Oqu(t.value)}}function h(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"label",6),e._uU(2),e.qZA(),e.TgZ(3,"select",9),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.field.value=n)})("ngModelChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.triggerSelect(n))}),e.TgZ(4,"option",10),e._uU(5),e.qZA(),e.YNc(6,x,2,2,"option",11),e.qZA(),e.TgZ(7,"div",8),e._uU(8," Please choose a username. "),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.s9C("for",t.field.name),e.xp6(1),e.Oqu(t.field.label),e.xp6(1),e.s9C("id",t.field.name),e.Q6J("ngModel",t.field.value),e.xp6(2),e.hij("Select ",t.field.label,""),e.xp6(1),e.Q6J("ngForOf",t.field.options)}}function M(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"label"),e._uU(2),e.qZA(),e.TgZ(3,"input",7),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.field.value=n)}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.field.label),e.xp6(1),e.s9C("type",t.field.fieldtype),e.s9C("id",t.field.name),e.MGl("placeholder","Enter ",t.field.label,""),e.Q6J("ngModel",t.field.value)}}function m(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"label"),e._uU(2),e.qZA(),e.TgZ(3,"input",13),e.NdJ("ngModelChange",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.field.value=n)})("change",function(n){e.CHM(t);const i=e.oxw();return e.KtG(i.handleFileInput(n,i.field))}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.field.label),e.xp6(1),e.s9C("type",t.field.fieldtype),e.s9C("id",t.field.name),e.MGl("placeholder","Enter ",t.field.label,""),e.Q6J("ngModel",t.field.value)}}let T=(()=>{class o{constructor(t){this.fieldService=t,this.handleFileInput=(l,n)=>{const i=l.target.files[0];n.value=i,n.file=i},this.triggerSelect=l=>{const n=this.field;if(n.triggerSelect){this.form[n.triggerSelect].options=[];const i=this.form[n.triggerSelect];i.ajax.data.parentCode=n.value,this.fieldService.getSelectData(i).subscribe(c=>{this.form[n.triggerSelect].options=c.data.map(p=>({key:p[this.form[n.triggerSelect].ajax.option.key],value:p[this.form[n.triggerSelect].ajax.option.value]}))})}}}ngOnInit(){}ngAfterViewInit(){"select-ajax"===this.field.fieldtype&&this.fieldService.getSelectData(this.field).subscribe(t=>{console.log(this.field.ajax.option),this.field.options=t.data.map(l=>({key:l[this.field.ajax.option.key],value:l[this.field.ajax.option.value]})),console.log(t.data)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.D))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-field"]],inputs:{key:"key",form:"form",field:"field"},decls:7,vars:7,consts:[[3,"ngSwitch"],["class","form-group",4,"ngSwitchCase"],["class","form-group ",4,"ngSwitchCase"],[1,"form-group"],[1,"mt-1"],[1,"m-0"],[3,"for"],[1,"form-control",3,"type","id","placeholder","ngModel","ngModelChange"],["required","",1,"invalid-feedback"],[1,"form-control",3,"id","ngModel","ngModelChange"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"form-control",3,"type","id","placeholder","ngModel","ngModelChange","change"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0),e.YNc(1,d,4,1,"div",1),e.YNc(2,g,6,6,"div",2),e.YNc(3,C,9,6,"div",2),e.YNc(4,h,9,6,"div",2),e.YNc(5,M,4,5,"div",1),e.YNc(6,m,4,5,"div",1),e.qZA()),2&t&&(e.Q6J("ngSwitch",l.field.fieldtype),e.xp6(1),e.Q6J("ngSwitchCase","header"),e.xp6(1),e.Q6J("ngSwitchCase","text"),e.xp6(1),e.Q6J("ngSwitchCase","select"),e.xp6(1),e.Q6J("ngSwitchCase","select-ajax"),e.xp6(1),e.Q6J("ngSwitchCase","number"),e.xp6(1),e.Q6J("ngSwitchCase","file"))},dependencies:[s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.On,_.sg,_.RF,_.n9]}),o})()},1481:(E,f,a)=>{a.d(f,{V:()=>u});var e=a(5e3);let u=(()=>{class s{transform(d){return d?Object.keys(d).map(g=>({key:g,value:d[g]})):[]}}return s.\u0275fac=function(d){return new(d||s)},s.\u0275pipe=e.Yjl({name:"keys",type:s,pure:!0}),s})()}}]);