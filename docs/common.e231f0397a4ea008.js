"use strict";(self.webpackChunkngweb=self.webpackChunkngweb||[]).push([[592],{6347:(O,_,n)=>{n.d(_,{e:()=>h});var o=n(520),c=n(4850),i=n(7221),a=n(8210),s=n(5e3),t=n(7261),r=n(5374),e=n(2290);let h=(()=>{class l{constructor(m,E,D,y){this._snackBar=m,this.http=E,this.storage=D,this.toastr=y,this.generateOTP=d=>{const p=a.G.uri+"/auth/otp/generate",f={headers:new o.WM({"Content-Type":"application/json"})},T=JSON.stringify(d);return this.http.post(p,T,f).pipe((0,c.U)(b=>b),(0,i.K)(this.handleError))},this.verifyOTP=d=>{const p=a.G.uri+"/auth/otp/verify",f={headers:new o.WM({"Content-Type":"application/json"})},T=JSON.stringify(d);return this.http.post(p,T,f).pipe((0,c.U)(b=>b),(0,i.K)(this.handleError))},this.register=d=>{const p=a.G.uri+"/auth/register",f={headers:new o.WM({"Content-Type":"application/json"})},T=JSON.stringify(d);return this.http.post(p,T,f).pipe((0,c.U)(b=>b),(0,i.K)(this.handleError))},this.login=d=>{const p=a.G.uri+"/auth/login",f={headers:new o.WM({"api-build-version":"1.1.96","Content-Type":"application/json"})},T=JSON.stringify(d);return this.http.post(p,T,f).pipe((0,c.U)(b=>b),(0,i.K)(this.handleError))},this.check=()=>{const d=a.G.uri+"/auth/check",g={headers:new o.WM({"Content-Type":"application/json",Authorization:this.getAuthToken()})};return this.http.get(d,g).pipe((0,c.U)(f=>f),(0,i.K)(this.handleError))},this.saveDevice=d=>{const p=a.G.uri+"/device/create",f={headers:new o.WM({"Content-Type":"application/json",Authorization:this.getAuthToken()})},T=JSON.stringify(d);return this.http.post(p,T,f).pipe((0,c.U)(b=>b),(0,i.K)(this.handleError))},this.getAuthToken=()=>`JWT ${this.storage.retrieve("tokens").accessToken}`,this.handleError=d=>{const p=d.error;switch(d.status){case 401:default:this.toastr.error(p.message);break;case 400:case 422:const g=p.data;for(let f in g)this.toastr.error(g[f].message)}}}}return l.\u0275fac=function(m){return new(m||l)(s.LFG(t.ux),s.LFG(o.eN),s.LFG(r.n2),s.LFG(e._W))},l.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},3193:(O,_,n)=>{n.d(_,{If:()=>s,vB:()=>r});var i,a,o=n(3470);const s={chart:{type:"pie"},tooltip:{valueSuffix:"%"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name} </b>: {point.percentage:.1f} %"}}},series:[{name:"Percentage",colorByPoint:!0,data:[{name:"Water",y:55.02},{name:"Fat",sliced:!0,selected:!0,y:26.71},{name:"Carbohydrates",y:1.09},{name:"Protein",y:15.5},{name:"Ash",y:1.68}]}]},r={chart:{type:"column"},legend:{align:"left",x:70,verticalAlign:"top",y:70,floating:!0,backgroundColor:null!==(a=null===(i=o.defaultOptions.legend)||void 0===i?void 0:i.backgroundColor)&&void 0!==a?a:"white",borderColor:"#CCC",borderWidth:1,shadow:!1},tooltip:{headerFormat:"<b>{point.x}</b><br/>",pointFormat:"{series.name}: {point.y}<br/>Total: {point.stackTotal}"},plotOptions:{column:{stacking:"normal"}},series:[{name:"BPL",data:[3,5,1,13]},{name:"FA Cup",data:[14,8,8,12]},{name:"CL",data:[0,2,6,3]}]}},9077:(O,_,n)=>{n.d(_,{n:()=>i});var o=n(5e3),c=n(2290);let i=(()=>{class a{constructor(t){this.toastr=t,this.toParentDataTableDelete=new o.vpe,this.toParentDataTableEdit=new o.vpe,this.id=Math.random().toString(36).substring(7)}ngOnInit(){this.loadData()}ngOnChanges(t){t.data&&t.data.currentValue&&this.loadData()}ngAfterViewInit(){this.initializeDataTable()}ngOnDestroy(){this.dataTable&&this.dataTable.destroy()}loadData(){this.dataTable&&(this.dataTable.clear(),this.dataTable.rows.add(this.data),this.dataTable.draw())}initializeDataTable(){const t=this;this.dataTable=$("#"+this.id).DataTable({dom:"lBfrtip",buttons:["copy","csv","excel","pdf","print",{text:"Delete",action:function(r,e,h,l){const u=e.rows({selected:!0}).data(),m=[];for(let E=0;E<u.length;E++)m.push(u[E]);t.toParentDataTableDelete.emit(m)}},{text:"Edit",action:function(r,e,h,l){const u=e.rows({selected:!0}).data();u.length>1?t.toastr.error("Please select only one row to edit"):t.toParentDataTableEdit.emit(u[0])}}],select:!0,data:[],columns:this.columns}),this.dataTable.clear(),this.dataTable.rows.add(this.data),this.dataTable.draw()}}return a.\u0275fac=function(t){return new(t||a)(o.Y36(c._W))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-datatable"]],inputs:{columns:"columns",data:"data"},outputs:{toParentDataTableDelete:"toParentDataTableDelete",toParentDataTableEdit:"toParentDataTableEdit"},features:[o.TTD],decls:1,vars:1,consts:[[1,"table","table-bordered","table-striped",3,"id"]],template:function(t,r){1&t&&o._UZ(0,"table",0),2&t&&o.s9C("id",r.id)}}),a})()},5585:(O,_,n)=>{n.d(_,{$:()=>c});var o=n(5e3);let c=(()=>{class i{transform(s){if(null==s)return"";const t="string"==typeof s?parseFloat(s.replace(/[^0-9.]/g,"")):s;return isNaN(t)?"":t.toLocaleString("en-IN",{maximumFractionDigits:2})}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275pipe=o.Yjl({name:"indianNumberFormat",type:i,pure:!0}),i})()},8690:(O,_,n)=>{n.d(_,{t:()=>i});var o=n(5e3);let c=(()=>{class a{constructor(){this.ones=["","one","two","three","four","five","six","seven","eight","nine"],this.teens=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],this.tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]}convertToWords(t){if(0===t)return"zero";let r="";t<0&&(r+="minus ",t=Math.abs(t));let e=Math.floor(t);const h=Math.round(100*(t-e));return e>=1e7&&(r+=this.convertToWords(Math.floor(e/1e7))+" crore ",e%=1e7),e>=1e5&&(r+=this.convertToWords(Math.floor(e/1e5))+" lakh ",e%=1e5),e>=1e3&&(r+=this.convertToWords(Math.floor(e/1e3))+" thousand ",e%=1e3),e>=100&&(r+=this.convertToWords(Math.floor(e/100))+" hundred ",e%=100),e>0&&(""!==r&&(r+="and "),e<10?r+=this.ones[e]:e<20?r+=this.teens[e-10]:(r+=this.tens[Math.floor(e/10)],e%10>0&&(r+="-"+this.ones[e%10]))),h>0&&(r+=" point ",h<10?r+=this.ones[h]:(r+=this.tens[Math.floor(h/10)],h%10>0&&(r+="-"+this.ones[h%10]))),r.trim()}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),i=(()=>{class a{constructor(t){this.numberToWordsService=t}transform(t){if(null==t)return"";"string"==typeof t&&parseFloat(t.replace(/[^0-9.]/g,""));const e=this.numberToWordsService.convertToWords(t);return this.capitalizeFirstLetter(e)}capitalizeFirstLetter(t){return t?(t=this.loopThroughWords(t,"-"),t=this.loopThroughWords(t)):""}loopThroughWords(t,r=" "){return t.split(r).map(l=>l.charAt(0).toUpperCase()+(-1===l.indexOf("-")?l.slice(1).toLowerCase():l.slice(1))).join(r)}}return a.\u0275fac=function(t){return new(t||a)(o.Y36(c,16))},a.\u0275pipe=o.Yjl({name:"numberToWords",type:a,pure:!0}),a})()},2260:(O,_,n)=>{n.d(_,{v:()=>s});var o=n(5e3),c=n(7261),i=n(520),a=n(5374);let s=(()=>{class t{constructor(e,h,l){this._snackBar=e,this.http=h,this.storage=l,this.getAuthToken=()=>`JWT ${this.storage.retrieve("tokens").accessToken}`,this.handleError=u=>{const m=u.error;switch(u.status){case 401:default:this._snackBar.open(m.message,void 0,{duration:5e3});break;case 400:case 422:const E=m.data;for(let D in E)this._snackBar.open(E[D].message,void 0,{duration:5e3})}}}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(c.ux),o.LFG(i.eN),o.LFG(a.n2))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);