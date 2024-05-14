"use strict";(self.webpackChunkngweb=self.webpackChunkngweb||[]).push([[592],{6347:(y,m,r)=>{r.d(m,{e:()=>c});var n=r(520),d=r(4850),i=r(7221),a=r(8210),s=r(5e3),e=r(7261),o=r(5374),t=r(2290);let c=(()=>{class l{constructor(f,T,E,O){this._snackBar=f,this.http=T,this.storage=E,this.toastr=O,this.generateOTP=u=>{const p=a.G.uri+"/auth/otp/generate",v={headers:new n.WM({"Content-Type":"application/json"})},_=JSON.stringify(u);return this.http.post(p,_,v).pipe((0,d.U)(g=>g),(0,i.K)(this.handleError))},this.verifyOTP=u=>{const p=a.G.uri+"/auth/otp/verify",v={headers:new n.WM({"Content-Type":"application/json"})},_=JSON.stringify(u);return this.http.post(p,_,v).pipe((0,d.U)(g=>g),(0,i.K)(this.handleError))},this.register=u=>{const p=a.G.uri+"/auth/register",v={headers:new n.WM({"Content-Type":"application/json"})},_=JSON.stringify(u);return this.http.post(p,_,v).pipe((0,d.U)(g=>g),(0,i.K)(this.handleError))},this.login=u=>{const p=a.G.uri+"/auth/login",v={headers:new n.WM({"api-build-version":"1.1.96","Content-Type":"application/json"})},_=JSON.stringify(u);return this.http.post(p,_,v).pipe((0,d.U)(g=>g),(0,i.K)(this.handleError))},this.check=()=>{const u=a.G.uri+"/auth/check",b={headers:new n.WM({"Content-Type":"application/json",Authorization:this.getAuthToken()})};return this.http.get(u,b).pipe((0,d.U)(v=>v),(0,i.K)(this.handleError))},this.saveDevice=u=>{const p=a.G.uri+"/device/create",v={headers:new n.WM({"Content-Type":"application/json",Authorization:this.getAuthToken()})},_=JSON.stringify(u);return this.http.post(p,_,v).pipe((0,d.U)(g=>g),(0,i.K)(this.handleError))},this.getAuthToken=()=>`JWT ${this.storage.retrieve("tokens").accessToken}`,this.handleError=u=>{const p=u.error;switch(u.status){case 401:default:this.toastr.error(p.message);break;case 400:case 422:const b=p.data;for(let v in b)this.toastr.error(b[v].message)}}}}return l.\u0275fac=function(f){return new(f||l)(s.LFG(e.ux),s.LFG(n.eN),s.LFG(o.n2),s.LFG(t._W))},l.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},3193:(y,m,r)=>{r.d(m,{If:()=>s,vB:()=>o});var i,a,n=r(3470);const s={chart:{type:"pie"},tooltip:{valueSuffix:"%"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name} </b>: {point.percentage:.1f} %"}}},series:[{name:"Percentage",colorByPoint:!0,data:[{name:"Water",y:55.02},{name:"Fat",sliced:!0,selected:!0,y:26.71},{name:"Carbohydrates",y:1.09},{name:"Protein",y:15.5},{name:"Ash",y:1.68}]}]},o={chart:{type:"column"},legend:{align:"left",x:70,verticalAlign:"top",y:70,floating:!0,backgroundColor:null!==(a=null===(i=n.defaultOptions.legend)||void 0===i?void 0:i.backgroundColor)&&void 0!==a?a:"white",borderColor:"#CCC",borderWidth:1,shadow:!1},tooltip:{headerFormat:"<b>{point.x}</b><br/>",pointFormat:"{series.name}: {point.y}<br/>Total: {point.stackTotal}"},plotOptions:{column:{stacking:"normal"}},series:[{name:"BPL",data:[3,5,1,13]},{name:"FA Cup",data:[14,8,8,12]},{name:"CL",data:[0,2,6,3]}]}},9077:(y,m,r)=>{r.d(m,{n:()=>i});var n=r(5e3),d=r(2290);let i=(()=>{class a{constructor(e){this.toastr=e,this.toParentDataTableDelete=new n.vpe,this.toParentDataTableEdit=new n.vpe,this.id=Math.random().toString(36).substring(7)}ngOnInit(){this.loadData()}ngOnChanges(e){e.data&&e.data.currentValue&&this.loadData()}ngAfterViewInit(){this.initializeDataTable()}ngOnDestroy(){this.dataTable&&this.dataTable.destroy()}loadData(){this.dataTable&&(this.dataTable.clear(),this.dataTable.rows.add(this.data),this.dataTable.draw())}initializeDataTable(){const e=this;this.dataTable=$("#"+this.id).DataTable({dom:"lBfrtip",buttons:["copy","csv","excel","pdf","print",{text:"Delete",action:function(o,t,c,l){const h=t.rows({selected:!0}).data(),f=[];for(let T=0;T<h.length;T++)f.push(h[T]);e.toParentDataTableDelete.emit(f)}},{text:"Edit",action:function(o,t,c,l){const h=t.rows({selected:!0}).data();h.length>1?e.toastr.error("Please select only one row to edit"):e.toParentDataTableEdit.emit(h[0])}}],select:!0,data:[],columns:this.columns}),this.dataTable.clear(),this.dataTable.rows.add(this.data),this.dataTable.draw()}}return a.\u0275fac=function(e){return new(e||a)(n.Y36(d._W))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-datatable"]],inputs:{columns:"columns",data:"data"},outputs:{toParentDataTableDelete:"toParentDataTableDelete",toParentDataTableEdit:"toParentDataTableEdit"},features:[n.TTD],decls:1,vars:1,consts:[[1,"table","table-bordered","table-striped",3,"id"]],template:function(e,o){1&e&&n._UZ(0,"table",0),2&e&&n.s9C("id",o.id)}}),a})()},2819:(y,m,r)=>{r.d(m,{c:()=>n});const n={loginForm:{email:{name:"email",label:"Email",type:"text",validations:"required|email",value:""},password:{name:"password",label:"Password",type:"text",validations:"required",value:""}},registrationForm:{firstName:{name:"firstName",label:"First Name",type:"text",validations:"required",value:""},lastName:{name:"lastName",label:"Last Name",type:"text",validations:"required",value:""},gender:{name:"gender",label:"Gender",type:"text",validations:"required",value:""},dob:{name:"dob",label:"Date Of Birth",type:"date",validations:"required",value:""},mobileNo:{name:"mobileNo",label:"Mobile No",type:"date",validations:"required",value:""},no:{name:"no",label:"Mobile No",type:"date",validations:"required",value:""},email:{name:"email",label:"Email",type:"text",validations:"required|email",value:""},password:{name:"password",label:"Password",type:"text",validations:"required",value:""},confirmPassword:{name:"confirmPassword",label:"Confirm Password",type:"text",validations:"required",value:""}},registration:[],budgetForm:{category:{name:"category",label:"Category",value:"",validations:"required"},subcategory:{name:"subcategory",label:"Sub Category",value:"",validations:"required"},title:{name:"title",label:"Title",value:"",validations:"required"},description:{name:"description",label:"Description",value:"",validations:"required"},amount:{name:"amount",label:"Amount",value:0,validations:"required"}},plannerForm:{type:{name:"type",label:"Type",value:"",validations:"required"},title:{name:"title",label:"Title",value:"",validations:"required"},description:{name:"description",label:"Description",value:"",validations:"required"},amount:{name:"amount",label:"Amount",value:0,validations:"required"},rate:{name:"rate",label:"Rate Of Interest (p.a.)",value:0,validations:"required"},tenure:{name:"tenure",label:"Tenure (In-Years)",value:0,validations:"required"}},loanForm:{amount:{name:"amount",label:"Amount",value:5e6,validations:"required"},rate:{name:"rate",label:"Rate Of Interest (p.a.)",value:9,validations:"required"},tenure:{name:"tenure",label:"Tenure (In-Years)",value:20,validations:"required"},emi:{name:"emi",label:"EMI Amount",value:0,validations:""},growthRate:{name:"growthRate",label:"Annual Step-Up",value:0,validations:""},additionalAmount:{name:"additionalAmount",label:"Annual Part Payment",value:0,validations:""}}}},5585:(y,m,r)=>{r.d(m,{$:()=>d});var n=r(5e3);let d=(()=>{class i{transform(s){if(null==s)return"";const e="string"==typeof s?parseFloat(s.replace(/[^0-9.]/g,"")):s;return isNaN(e)?"":e.toLocaleString("en-IN",{maximumFractionDigits:2})}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275pipe=n.Yjl({name:"indianNumberFormat",type:i,pure:!0}),i})()},8690:(y,m,r)=>{r.d(m,{t:()=>i});var n=r(5e3);let d=(()=>{class a{constructor(){this.ones=["","one","two","three","four","five","six","seven","eight","nine"],this.teens=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],this.tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]}convertToWords(e){if(0===e)return"zero";let o="";e<0&&(o+="minus ",e=Math.abs(e));let t=Math.floor(e);const c=Math.round(100*(e-t));return t>=1e7&&(o+=this.convertToWords(Math.floor(t/1e7))+" crore ",t%=1e7),t>=1e5&&(o+=this.convertToWords(Math.floor(t/1e5))+" lakh ",t%=1e5),t>=1e3&&(o+=this.convertToWords(Math.floor(t/1e3))+" thousand ",t%=1e3),t>=100&&(o+=this.convertToWords(Math.floor(t/100))+" hundred ",t%=100),t>0&&(""!==o&&(o+="and "),t<10?o+=this.ones[t]:t<20?o+=this.teens[t-10]:(o+=this.tens[Math.floor(t/10)],t%10>0&&(o+="-"+this.ones[t%10]))),c>0&&(o+=" point ",c<10?o+=this.ones[c]:(o+=this.tens[Math.floor(c/10)],c%10>0&&(o+="-"+this.ones[c%10]))),o.trim()}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),i=(()=>{class a{constructor(e){this.numberToWordsService=e}transform(e){if(null==e)return"";"string"==typeof e&&parseFloat(e.replace(/[^0-9.]/g,""));const t=this.numberToWordsService.convertToWords(e);return this.capitalizeFirstLetter(t)}capitalizeFirstLetter(e){return e?(e=this.loopThroughWords(e,"-"),e=this.loopThroughWords(e)):""}loopThroughWords(e,o=" "){return e.split(o).map(l=>l.charAt(0).toUpperCase()+(-1===l.indexOf("-")?l.slice(1).toLowerCase():l.slice(1))).join(o)}}return a.\u0275fac=function(e){return new(e||a)(n.Y36(d,16))},a.\u0275pipe=n.Yjl({name:"numberToWords",type:a,pure:!0}),a})()},2260:(y,m,r)=>{r.d(m,{v:()=>s});var n=r(5e3),d=r(7261),i=r(520),a=r(5374);let s=(()=>{class e{constructor(t,c,l){this._snackBar=t,this.http=c,this.storage=l,this.getAuthToken=()=>`JWT ${this.storage.retrieve("tokens").accessToken}`,this.handleError=h=>{const f=h.error;switch(h.status){case 401:default:this._snackBar.open(f.message,void 0,{duration:5e3});break;case 400:case 422:const T=f.data;for(let E in T)this._snackBar.open(T[E].message,void 0,{duration:5e3})}}}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(d.ux),n.LFG(i.eN),n.LFG(a.n2))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);