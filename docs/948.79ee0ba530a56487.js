"use strict";(self.webpackChunkngweb=self.webpackChunkngweb||[]).push([[948],{3948:(Y,O,v)=>{v.r(O),v.d(O,{CalculatorModule:()=>G});var q,N,S=v(9808),L=v(2131),p=v(7489),R=v(3470);const x={chart:{type:"pie"},tooltip:{valueSuffix:"%"},subtitle:{text:'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name} </b>: {point.percentage:.1f} %"}}},series:[{name:"Percentage",colorByPoint:!0,data:[{name:"Water",y:55.02},{name:"Fat",sliced:!0,selected:!0,y:26.71},{name:"Carbohydrates",y:1.09},{name:"Protein",y:15.5},{name:"Ash",y:1.68}]}]},C={chart:{type:"column"},legend:{align:"left",x:70,verticalAlign:"top",y:70,floating:!0,backgroundColor:null!==(N=null===(q=R.defaultOptions.legend)||void 0===q?void 0:q.backgroundColor)&&void 0!==N?N:"white",borderColor:"#CCC",borderWidth:1,shadow:!1},tooltip:{headerFormat:"<b>{point.x}</b><br/>",pointFormat:"{series.name}: {point.y}<br/>Total: {point.stackTotal}"},plotOptions:{column:{stacking:"normal"}},series:[{name:"BPL",data:[3,5,1,13]},{name:"FA Cup",data:[14,8,8,12]},{name:"CL",data:[0,2,6,3]},{name:"SL",data:[3,2,4,5]}]};var t=v(5e3),P=v(1880);let U=(()=>{class l{constructor(){this.futureValue=(n,e,a)=>(n*Math.pow(1+e/100/12,a)).toFixed(2),this.principalValue=(n,e,a)=>(n*Math.pow(1+e/100/12,a)).toFixed(2),this.SIPAmount=(n,e,a)=>{const r=e/100/12;return(n*(r/(Math.pow(1+r,12*a)-1))).toFixed(2)},this.investmentTable=(n,e,a,o=0,r=0)=>{const m=o/100,c=e/100/12,d=12*a,h=[];let g=0,s=0,y=0,Z=0,T=0,A=0,_=0,I=0,D=0;for(let b=1;b<d;b++)g=_,s=this.round2Decimal(n=b%12==0?n+n*m:n),y+=this.round2Decimal(s),y=this.round2Decimal(y),Z=this.round2Decimal(g+s),T=this.round2Decimal(Z*c),A+=this.round2Decimal(T),A=this.round2Decimal(A),I=b%12==0?r:0,D+=this.round2Decimal(I),_=this.round2Decimal(Z+I+T),h.push({month:b,initialAmount:g,monthlyAmount:s,totalMonthlyAmount:y,monthlySum:Z,monthlyInterest:T,totalMonthlyInterest:A,extraAmount:I,totalExtraAmount:D,totalAmount:_});return h},this.loanAmount=(n,e,a)=>{const r=e/100/12,i=n*((1-Math.pow(1+r,-12*a))/r);return this.round2Decimal(i)},this.emi=(n,e,a)=>{const r=e/100/12,i=12*a;return(n*r*Math.pow(1+r,i)/(Math.pow(1+r,i)-1)).toFixed(2)},this.emiTable=(n,e,a,o=0,r=0,i=0)=>{const m=[];let c=n,d=1,h=0,g=0,s=0,y=0;for(;c>0;){o=d%13==0&&0!==d?o+this.round2Decimal(o*r/100):o;const Z=this.round2Decimal(c),T=this.round2Decimal(c*e/1200);g=this.round2Decimal(g+T);const A=this.round2Decimal(o-T);h=this.round2Decimal(h+A),c-=this.round2Decimal(A);let _=d%12==0?i:0;s=_>0?s+_:s,y+=_>0?o+_:o,c-=_,c=this.round2Decimal(c),m.push({month:d,loanAmount:Z,emi:o,principal:A,interest:T,totalPrincipal:h,totalInterest:g,partPayment:_,totalPartPayment:s,balance:c,totalLoanAmount:y}),d++}return m},this.round2Decimal=n=>parseFloat(n.toFixed(2)),this.percentage=(n,e)=>{},this.percentageValue=(n,e)=>n*e/100,this.calculateSIPAmount=(n,e,a,o)=>{if(n<=0||a<=0||e<=0||o<0)return console.error("Invalid input values. All values must be positive."),-1;const i=e/100/12;let m=n;const c=12*a,d=o/100;let h=0,g=0;for(let s=1;s<=a;s++){const y=Math.pow(1+d,.08333333333333333)-1,Z=m*i/((Math.pow(1+i,c)-1)*(1+y));g+=12*Z,m-=12*Z,h+=Z,m*=1+d}return{SIPAmount:h,totalInvested:g}},this.calculateFIRENumber=(n,e,a,o,r,i,m)=>{if(n>=e||e>=a||o<=0||r<=0||i<=0||m<=0)return console.error("Invalid input values. Please ensure age and financial values are valid."),-1;let c=e-n,d=0,h=0;for(let s=0;s<c;s++){const A=12*o*Math.pow(1+r,s)-12*i*Math.pow(1+m,s);d+=A,h+=A/12}return 12*h*c}}}return l.\u0275fac=function(n){return new(n||l)},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var f=v(3075),w=v(2620),M=v(9077);let F=(()=>{class l{transform(n){if(null==n)return"";const e="string"==typeof n?parseFloat(n.replace(/[^0-9.]/g,"")):n;return isNaN(e)?"":e.toLocaleString("en-IN",{maximumFractionDigits:2})}}return l.\u0275fac=function(n){return new(n||l)},l.\u0275pipe=t.Yjl({name:"indianNumberFormat",type:l,pure:!0}),l})(),E=(()=>{class l{constructor(){this.ones=["","one","two","three","four","five","six","seven","eight","nine"],this.teens=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],this.tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]}convertToWords(n){if(0===n)return"zero";let e="";n<0&&(e+="minus ",n=Math.abs(n));let a=Math.floor(n);const o=Math.round(100*(n-a));return a>=1e7&&(e+=this.convertToWords(Math.floor(a/1e7))+" crore ",a%=1e7),a>=1e5&&(e+=this.convertToWords(Math.floor(a/1e5))+" lakh ",a%=1e5),a>=1e3&&(e+=this.convertToWords(Math.floor(a/1e3))+" thousand ",a%=1e3),a>=100&&(e+=this.convertToWords(Math.floor(a/100))+" hundred ",a%=100),a>0&&(""!==e&&(e+="and "),a<10?e+=this.ones[a]:a<20?e+=this.teens[a-10]:(e+=this.tens[Math.floor(a/10)],a%10>0&&(e+="-"+this.ones[a%10]))),o>0&&(e+=" point ",o<10?e+=this.ones[o]:(e+=this.tens[Math.floor(o/10)],o%10>0&&(e+="-"+this.ones[o%10]))),e.trim()}}return l.\u0275fac=function(n){return new(n||l)},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),J=(()=>{class l{constructor(n){this.numberToWordsService=n}transform(n){if(null==n)return"";"string"==typeof n&&parseFloat(n.replace(/[^0-9.]/g,""));const a=this.numberToWordsService.convertToWords(n);return this.capitalizeFirstLetter(a)}capitalizeFirstLetter(n){return n?(n=this.loopThroughWords(n,"-"),n=this.loopThroughWords(n)):""}loopThroughWords(n,e=" "){return n.split(e).map(r=>r.charAt(0).toUpperCase()+(-1===r.indexOf("-")?r.slice(1).toLowerCase():r.slice(1))).join(e)}}return l.\u0275fac=function(n){return new(n||l)(t.Y36(E,16))},l.\u0275pipe=t.Yjl({name:"numberToWords",type:l,pure:!0}),l})(),W=(()=>{class l{constructor(n,e){this.chartService=n,this.calculatorService=e,this.loanData=[],this.loanColumns=[{data:"month",title:"month"},{data:"loanAmount",title:"loanAmount"},{data:"emi",title:"emi"},{data:"principal",title:"principal"},{data:"totalPrincipal",title:"totalPrincipal"},{data:"interest",title:"interest"},{data:"totalInterest",title:"totalInterest"},{data:"partPayment",title:"partPayment"},{data:"totalPartPayment",title:"totalPartPayment"},{data:"balance",title:"balance"}],this.lastLoanData={},this.pieChartOptions={chart:{type:"pie",renderTo:"pie-chart-container"},title:{text:"Browser Market Share"},series:[{name:"Investment",data:[]}],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name} ({point.y}) </b>: {point.percentage:.1f} %"}}},legend:{enabled:!0,layout:"vertical",align:"right",verticalAlign:"middle",borderWidth:1}},this.stackedBarChartOptions=JSON.parse(JSON.stringify(C)),this.updateFlag=0,this.InstallmentAmount=0,this.form={amount:{value:75e5},rate:{value:8.6},tenure:{value:15},emi:{value:0},growthRate:{value:0},additionalAmount:{value:0}},this.getChartDataFormat=(a,o,r)=>p.map(p.groupBy(a,o),(i,m)=>({name:m,y:p.sumBy(i,r)})),this.calculate=()=>{const a=this.form,o=0===parseFloat(a.emi.value)?this.calculatorService.emi(a.amount.value,a.rate.value,a.tenure.value):parseFloat(a.emi.value);a.emi.value=o;const r=this.calculatorService.emiTable(Number(a.amount.value),Number(a.rate.value),Number(a.tenure.value),Number(a.emi.value),Number(a.growthRate.value),parseFloat(a.additionalAmount.value)),i=.3*Number(a.emi.value),m=this.calculatorService.investmentTable(i,12,Number(parseInt((r.length/12).toString())),0,0),c=p.values(p.merge(p.keyBy(r,"month"),p.keyBy(m,"month")));this.loanData=c;const d=p.last(r);d.totalAmount=a.amount.value+d.totalInterest,this.lastLoanData=d;const h=JSON.parse(JSON.stringify(C));h.series=[{name:"interest",data:p.map(r,"interest")},{name:"principal",data:p.map(r,"principal")},{name:"partPayment",data:p.map(r,"partPayment")}],this.stackedBarChartOptions=JSON.parse(JSON.stringify(h))}}ngOnInit(){}}return l.\u0275fac=function(n){return new(n||l)(t.Y36(P.C),t.Y36(U))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-loan"]],decls:108,vars:36,consts:[[1,"row"],[1,"col-xl-4","col-lg-4"],[1,"card","shadow","mb-4"],[1,"card-header","py-3","d-flex","flex-row","align-items-center","justify-content-between"],[1,"m-0","font-weight-bold","text-primary"],[1,"card-body"],[1,"form-group"],["for","amount"],["type","text","id","amount","placeholder","Enter amount",1,"form-control",3,"ngModel","ngModelChange"],["for","rate"],["type","text","id","rate","placeholder","Enter rate",1,"form-control",3,"ngModel","ngModelChange"],["for","tenure"],["type","text","id","tenure","placeholder","Enter tenure",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"col-xl-8","col-lg-8"],[3,"options","updateFlag"],[1,"col-xl-2","col-lg-6","mb-4"],[1,"card","border-left-primary","shadow","mb-3"],[1,"row","no-gutters","align-items-center"],[1,"col","mr-2"],[1,"text-xs","font-weight-bold","text-primary","text-uppercase","mb-1"],[1,"h5","mb-0","font-weight-bold","text-gray-800"],[1,"col-auto"],[1,"fas","fa-dollar-sign","fa-2x","text-gray-300"],[1,"col-xl-12","col-lg-12"],[3,"columns","data"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h6",4),t._uU(5,"Loan Calculator"),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Amount"),t.qZA(),t.TgZ(10,"input",8),t.NdJ("ngModelChange",function(o){return e.form.amount.value=o}),t.qZA()(),t.TgZ(11,"div",6)(12,"label",9),t._uU(13,"Rate"),t.qZA(),t.TgZ(14,"input",10),t.NdJ("ngModelChange",function(o){return e.form.rate.value=o}),t.qZA()(),t.TgZ(15,"div",6)(16,"label",11),t._uU(17,"Tenure"),t.qZA(),t.TgZ(18,"input",12),t.NdJ("ngModelChange",function(o){return e.form.tenure.value=o}),t.qZA()(),t.TgZ(19,"div",6)(20,"label",11),t._uU(21,"EMI"),t.qZA(),t.TgZ(22,"input",12),t.NdJ("ngModelChange",function(o){return e.form.emi.value=o}),t.qZA()(),t.TgZ(23,"div",6)(24,"label",11),t._uU(25,"Growth Rate In Emi Yearly"),t.qZA(),t.TgZ(26,"input",12),t.NdJ("ngModelChange",function(o){return e.form.growthRate.value=o}),t.qZA()(),t.TgZ(27,"div",6)(28,"label",11),t._uU(29,"Lumsum Part Payment Yearly"),t.qZA(),t.TgZ(30,"input",12),t.NdJ("ngModelChange",function(o){return e.form.additionalAmount.value=o}),t.qZA()(),t.TgZ(31,"button",13),t.NdJ("click",function(){return e.calculate()}),t._uU(32,"Submit"),t.qZA()()()(),t.TgZ(33,"div",14)(34,"div",2)(35,"div",3)(36,"h6",4),t._uU(37,"loan Pie Chart"),t.qZA()(),t.TgZ(38,"div",5),t._UZ(39,"app-chart",15),t.qZA()()(),t.TgZ(40,"div",16)(41,"div",17)(42,"div",5)(43,"div",18)(44,"div",19)(45,"div",20),t._uU(46," Loan Monthly Emi "),t.qZA(),t.TgZ(47,"div",21),t._uU(48),t.ALo(49,"currency"),t.qZA(),t.TgZ(50,"div",21),t._uU(51),t.ALo(52,"numberToWords"),t.qZA()(),t.TgZ(53,"div",22),t._UZ(54,"i",23),t.qZA()()()()(),t.TgZ(55,"div",16)(56,"div",17)(57,"div",5)(58,"div",18)(59,"div",19)(60,"div",20),t._uU(61," Total Interest Payable "),t.qZA(),t.TgZ(62,"div",21),t._uU(63),t.ALo(64,"indianNumberFormat"),t.qZA(),t.TgZ(65,"div",21),t._uU(66),t.ALo(67,"numberToWords"),t.qZA()(),t.TgZ(68,"div",22),t._UZ(69,"i",23),t.qZA()()()()(),t.TgZ(70,"div",16)(71,"div",17)(72,"div",5)(73,"div",18)(74,"div",19)(75,"div",20),t._uU(76," Total Part Payment Payable"),t.qZA(),t.TgZ(77,"div",21),t._uU(78),t.ALo(79,"currency"),t.qZA(),t.TgZ(80,"div",21),t._uU(81),t.ALo(82,"numberToWords"),t.qZA()(),t.TgZ(83,"div",22),t._UZ(84,"i",23),t.qZA()()()()(),t.TgZ(85,"div",16)(86,"div",17)(87,"div",5)(88,"div",18)(89,"div",19)(90,"div",20),t._uU(91," Total Payment (Principal + Interest) "),t.qZA(),t.TgZ(92,"div",21),t._uU(93),t.ALo(94,"indianNumberFormat"),t.qZA(),t.TgZ(95,"div",21),t._uU(96),t.ALo(97,"numberToWords"),t.qZA()(),t.TgZ(98,"div",22),t._UZ(99,"i",23),t.qZA()()()()()(),t.TgZ(100,"div",0)(101,"div",24)(102,"div",2)(103,"div",3)(104,"h6",4),t._uU(105,"Loan Overview"),t.qZA()(),t.TgZ(106,"div",5),t._UZ(107,"app-datatable",25),t.qZA()()()()),2&n&&(t.xp6(10),t.Q6J("ngModel",e.form.amount.value),t.xp6(4),t.Q6J("ngModel",e.form.rate.value),t.xp6(4),t.Q6J("ngModel",e.form.tenure.value),t.xp6(4),t.Q6J("ngModel",e.form.emi.value),t.xp6(4),t.Q6J("ngModel",e.form.growthRate.value),t.xp6(4),t.Q6J("ngModel",e.form.additionalAmount.value),t.xp6(9),t.Q6J("options",e.stackedBarChartOptions)("updateFlag",e.updateFlag),t.xp6(9),t.Oqu(t.xi3(49,18,e.form.emi.value||0,"INR")),t.xp6(3),t.Oqu(t.lcZ(52,21,e.form.emi.value||0)),t.xp6(12),t.Oqu(t.lcZ(64,23,e.lastLoanData.totalInterest||0)),t.xp6(3),t.Oqu(t.lcZ(67,25,e.lastLoanData.totalInterest||0)),t.xp6(12),t.Oqu(t.xi3(79,27,e.lastLoanData.totalPartPayment||0,"INR")),t.xp6(3),t.Oqu(t.lcZ(82,30,e.lastLoanData.totalPartPayment||0)),t.xp6(12),t.Oqu(t.lcZ(94,32,e.lastLoanData.totalAmount||0)),t.xp6(3),t.Oqu(t.lcZ(97,34,e.lastLoanData.totalAmount||0)),t.xp6(11),t.Q6J("columns",e.loanColumns)("data",e.loanData))},dependencies:[f.Fj,f.JJ,f.On,w.x,M.n,S.H9,F,J]}),l})();var Q=v(52);const j=[{path:"loan",component:W},{path:"investment",component:(()=>{class l{constructor(n,e){this.calculatorService=n,this.cdr=e,this.updateFlag=0,this.pieChartOptions=JSON.parse(JSON.stringify(x)),this.lineChartOptions={chart:{type:"line"},title:{text:"Monthly Temperature Trends"},series:[{name:"Tokyo",data:[7,6,9,14,18]},{name:"New York",data:[2,3,5,8,12]},{name:"London",data:[3,4,6,10,15]}]},this.stackedBarChartOptions=JSON.parse(JSON.stringify(C)),this.form={amount:{value:22500},rate:{value:12},tenure:{value:15},growthRate:{value:0},additionalAmount:{value:0}},this.investment={sip:{form:{monthlyAmount:{value:25e3},roi:{value:12},tenure:{value:10},growth:{value:10},extra:{value:2}},result:{}},stepUpSip:{form:{monthlyAmount:{value:25e3},roi:{value:12},tenure:{value:10},growth:{value:10},extra:{value:2}},result:{}},loan:{form:{monthlyAmount:{value:25e3},roi:{value:12},tenure:{value:10},growth:{value:10},extra:{value:2}},result:{}}},this.investmentColumns=[{data:"month",title:"month"},{data:"initialAmount",title:"initialAmount"},{data:"monthlyAmount",title:"monthlyAmount"},{data:"totalMonthlyAmount",title:"totalMonthlyAmount"},{data:"monthlySum",title:"monthlySum"},{data:"monthlyInterest",title:"monthlyInterest"},{data:"totalMonthlyInterest",title:"totalMonthlyInterest"},{data:"extraAmount",title:"extraAmount"},{data:"totalExtraAmount",title:"totalExtraAmount"},{data:"totalAmount",title:"totalAmount"}],this.lastInvestmentData={},this.investmentData=[],this.calculate=()=>{const a=this.form,o=this.calculatorService.investmentTable(Number(a.amount.value),Number(a.rate.value),Number(a.tenure.value),Number(a.growthRate.value),Number(a.additionalAmount.value));this.investmentData=o;const r=p.last(this.investmentData);this.lastInvestmentData=r,this.lineChartOptions.series=[],this.cdr.detectChanges();const i=JSON.parse(JSON.stringify(C));i.series=[{name:"monthlyInterest",data:p.map(o,"monthlyInterest")},{name:"monthlyAmount",data:p.map(o,"monthlyAmount")},{name:"extraAmount",data:p.map(o,"extraAmount")}],this.stackedBarChartOptions=JSON.parse(JSON.stringify(i)),this.updateFlag=!this.updateFlag}}ngOnInit(){}}return l.\u0275fac=function(n){return new(n||l)(t.Y36(Q.R),t.Y36(t.sBO))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-investment"]],decls:104,vars:33,consts:[[1,"row"],[1,"col-xl-4","col-lg-5"],[1,"card","shadow","mb-4"],[1,"card-header","py-3","d-flex","flex-row","align-items-center","justify-content-between"],[1,"m-0","font-weight-bold","text-primary"],[1,"card-body"],[1,"form-group"],["for","amount"],["type","text","id","amount","placeholder","Enter amount",1,"form-control",3,"ngModel","ngModelChange"],["for","rate"],["type","text","id","rate","placeholder","Enter rate",1,"form-control",3,"ngModel","ngModelChange"],["for","tenure"],["type","text","id","tenure","placeholder","Enter tenure",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"col-xl-8","col-lg-8"],[3,"options","updateFlag"],[1,"col-xl-3","col-md-6","mb-4"],[1,"card","border-left-primary","shadow","mb-3"],[1,"row","no-gutters","align-items-center"],[1,"col","mr-2"],[1,"text-xs","font-weight-bold","text-primary","text-uppercase","mb-1"],[1,"h5","mb-0","font-weight-bold","text-gray-800"],[1,"col-auto"],[1,"fas","fa-dollar-sign","fa-2x","text-gray-300"],[1,"col-xl-12","col-lg-12"],[3,"columns","data"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h6",4),t._uU(5,"Investment Calculator"),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Amount"),t.qZA(),t.TgZ(10,"input",8),t.NdJ("ngModelChange",function(o){return e.form.amount.value=o}),t.qZA()(),t.TgZ(11,"div",6)(12,"label",9),t._uU(13,"Rate"),t.qZA(),t.TgZ(14,"input",10),t.NdJ("ngModelChange",function(o){return e.form.rate.value=o}),t.qZA()(),t.TgZ(15,"div",6)(16,"label",11),t._uU(17,"Tenure"),t.qZA(),t.TgZ(18,"input",12),t.NdJ("ngModelChange",function(o){return e.form.tenure.value=o}),t.qZA()(),t.TgZ(19,"div",6)(20,"label",11),t._uU(21,"Growth Rate"),t.qZA(),t.TgZ(22,"input",12),t.NdJ("ngModelChange",function(o){return e.form.growthRate.value=o}),t.qZA()(),t.TgZ(23,"div",6)(24,"label",11),t._uU(25,"Lumsum Addition Yearly"),t.qZA(),t.TgZ(26,"input",12),t.NdJ("ngModelChange",function(o){return e.form.additionalAmount.value=o}),t.qZA()(),t.TgZ(27,"button",13),t.NdJ("click",function(){return e.calculate()}),t._uU(28," Submit "),t.qZA()()()(),t.TgZ(29,"div",14)(30,"div",2)(31,"div",3)(32,"h6",4),t._uU(33,"Investment Pie Chart"),t.qZA()(),t.TgZ(34,"div",5),t._UZ(35,"app-chart",15),t.qZA()()(),t.TgZ(36,"div",16)(37,"div",17)(38,"div",5)(39,"div",18)(40,"div",19)(41,"div",20),t._uU(42," Total Investment "),t.qZA(),t.TgZ(43,"div",21),t._uU(44),t.ALo(45,"indianNumberFormat"),t.qZA(),t.TgZ(46,"div",21),t._uU(47),t.ALo(48,"numberToWords"),t.qZA()(),t.TgZ(49,"div",22),t._UZ(50,"i",23),t.qZA()()()()(),t.TgZ(51,"div",16)(52,"div",17)(53,"div",5)(54,"div",18)(55,"div",19)(56,"div",20),t._uU(57," Total Interest "),t.qZA(),t.TgZ(58,"div",21),t._uU(59),t.ALo(60,"indianNumberFormat"),t.qZA(),t.TgZ(61,"div",21),t._uU(62),t.ALo(63,"numberToWords"),t.qZA()(),t.TgZ(64,"div",22),t._UZ(65,"i",23),t.qZA()()()()(),t.TgZ(66,"div",16)(67,"div",17)(68,"div",5)(69,"div",18)(70,"div",19)(71,"div",20),t._uU(72," Total Lumsum Amount "),t.qZA(),t.TgZ(73,"div",21),t._uU(74),t.ALo(75,"indianNumberFormat"),t.qZA(),t.TgZ(76,"div",21),t._uU(77),t.ALo(78,"numberToWords"),t.qZA()(),t.TgZ(79,"div",22),t._UZ(80,"i",23),t.qZA()()()()(),t.TgZ(81,"div",16)(82,"div",17)(83,"div",5)(84,"div",18)(85,"div",19)(86,"div",20),t._uU(87," Total Amount "),t.qZA(),t.TgZ(88,"div",21),t._uU(89),t.ALo(90,"indianNumberFormat"),t.qZA(),t.TgZ(91,"div",21),t._uU(92),t.ALo(93,"numberToWords"),t.qZA()(),t.TgZ(94,"div",22),t._UZ(95,"i",23),t.qZA()()()()()(),t.TgZ(96,"div",0)(97,"div",24)(98,"div",2)(99,"div",3)(100,"h6",4),t._uU(101,"Earnings Overview"),t.qZA()(),t.TgZ(102,"div",5),t._UZ(103,"app-datatable",25),t.qZA()()()()),2&n&&(t.xp6(10),t.Q6J("ngModel",e.form.amount.value),t.xp6(4),t.Q6J("ngModel",e.form.rate.value),t.xp6(4),t.Q6J("ngModel",e.form.tenure.value),t.xp6(4),t.Q6J("ngModel",e.form.growthRate.value),t.xp6(4),t.Q6J("ngModel",e.form.additionalAmount.value),t.xp6(9),t.Q6J("options",e.stackedBarChartOptions)("updateFlag",e.updateFlag),t.xp6(9),t.hij(" ",t.lcZ(45,17,e.lastInvestmentData.totalMonthlyAmount||0)," "),t.xp6(3),t.hij(" ",t.lcZ(48,19,e.lastInvestmentData.totalMonthlyAmount||0)," "),t.xp6(12),t.hij(" ",t.lcZ(60,21,e.lastInvestmentData.totalMonthlyInterest||0)," "),t.xp6(3),t.hij(" ",t.lcZ(63,23,e.lastInvestmentData.totalMonthlyInterest||0)," "),t.xp6(12),t.hij(" ",t.lcZ(75,25,e.lastInvestmentData.totalExtraAmount||0)," "),t.xp6(3),t.hij(" ",t.lcZ(78,27,e.lastInvestmentData.totalExtraAmount||0)," "),t.xp6(12),t.hij(" ",t.lcZ(90,29,e.lastInvestmentData.totalAmount||0)," "),t.xp6(3),t.hij(" ",t.lcZ(93,31,e.lastInvestmentData.totalAmount||0)," "),t.xp6(11),t.Q6J("columns",e.investmentColumns)("data",e.investmentData))},dependencies:[f.Fj,f.JJ,f.On,w.x,M.n,F,J]}),l})()},{path:"goal",component:(()=>{class l{constructor(n,e){this.calculatorService=n,this.cdr=e,this.form={amount:{value:1e7},rate:{value:12},tenure:{value:6},sip:{value:0},growthRate:{value:0},additionalAmount:{value:0}},this.goalColumns=[{data:"month",title:"month"},{data:"initialAmount",title:"initialAmount"},{data:"monthlyAmount",title:"monthlyAmount"},{data:"totalMonthlyAmount",title:"totalMonthlyAmount"},{data:"monthlySum",title:"monthlySum"},{data:"monthlyInterest",title:"monthlyInterest"},{data:"totalMonthlyInterest",title:"totalMonthlyInterest"},{data:"extraAmount",title:"extraAmount"},{data:"totalExtraAmount",title:"totalExtraAmount"},{data:"totalAmount",title:"totalAmount"}],this.lastInvestmentData={},this.goalData=[],this.pieChartOptions=JSON.parse(JSON.stringify(x)),this.updateFlag=0,this.calculate=()=>{const{amount:a,rate:o,tenure:r,sip:i,growthRate:m,additionalAmount:c}=this.form,d=this.calculatorService.SIPAmount(Number(a.value),Number(o.value),Number(r.value));i.value=d,console.log(d);const h=this.calculatorService.investmentTable(Number(d),Number(o.value),Number(r.value),Number(m.value),Number(c.value));this.goalData=h;const g=p.last(this.goalData);console.log(g),this.lastInvestmentData=g;const s=JSON.parse(JSON.stringify(x));s.series[0].data=[{name:"totalMonthlyAmount",y:p.get(g,"totalMonthlyAmount",0)},{name:"totalMonthlyInterest",y:p.get(g,"totalMonthlyInterest",0)},{name:"totalExtraAmount",y:p.get(g,"totalExtraAmount",0)}],this.pieChartOptions=JSON.parse(JSON.stringify(s))}}ngOnInit(){}}return l.\u0275fac=function(n){return new(n||l)(t.Y36(U),t.Y36(t.sBO))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-goal"]],decls:105,vars:34,consts:[[1,"row"],[1,"col-xl-4","col-lg-4"],[1,"card","shadow","mb-4"],[1,"card-header","py-3","d-flex","flex-row","align-items-center","justify-content-between"],[1,"m-0","font-weight-bold","text-primary"],[1,"card-body"],[1,"form-group"],["for","amount"],["type","text","id","amount","placeholder","Enter amount",1,"form-control",3,"ngModel","ngModelChange"],["for","rate"],["type","text","id","rate","placeholder","Enter rate",1,"form-control",3,"ngModel","ngModelChange"],["for","tenure"],["type","text","id","tenure","placeholder","Enter tenure",1,"form-control",3,"ngModel","ngModelChange"],["for","sipAmount"],["type","text","id","sipAmount","placeholder","Enter SIP amount",1,"form-control",3,"ngModel","ngModelChange"],["for","growthRate"],["type","text","id","growthRate","placeholder","Enter growth rate",1,"form-control",3,"ngModel","ngModelChange"],["for","additionalAmount"],["type","text","id","additionalAmount","placeholder","Enter additional amount",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"click"],[3,"options","updateFlag"],[1,"col-xl-3","col-md-6","mb-4"],[1,"card","border-left-primary","shadow","mb-3"],[1,"row","no-gutters","align-items-center"],[1,"col","mr-2"],[1,"text-xs","font-weight-bold","text-primary","text-uppercase","mb-1"],[1,"h5","mb-0","font-weight-bold","text-gray-800"],[1,"col-auto"],[1,"fas","fa-dollar-sign","fa-2x","text-gray-300"],[1,"col-xl-12","col-lg-12"],[3,"columns","data"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h6",4),t._uU(5,"Goal Calculator"),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Amount"),t.qZA(),t.TgZ(10,"input",8),t.NdJ("ngModelChange",function(o){return e.form.amount.value=o}),t.qZA()(),t.TgZ(11,"div",6)(12,"label",9),t._uU(13,"Rate"),t.qZA(),t.TgZ(14,"input",10),t.NdJ("ngModelChange",function(o){return e.form.rate.value=o}),t.qZA()(),t.TgZ(15,"div",6)(16,"label",11),t._uU(17,"Tenure"),t.qZA(),t.TgZ(18,"input",12),t.NdJ("ngModelChange",function(o){return e.form.tenure.value=o}),t.qZA()(),t.TgZ(19,"div",6)(20,"label",13),t._uU(21,"SIP Amount"),t.qZA(),t.TgZ(22,"input",14),t.NdJ("ngModelChange",function(o){return e.form.sip.value=o}),t.qZA()(),t.TgZ(23,"div",6)(24,"label",15),t._uU(25,"Growth Rate In SIP Yearly"),t.qZA(),t.TgZ(26,"input",16),t.NdJ("ngModelChange",function(o){return e.form.growthRate.value=o}),t.qZA()(),t.TgZ(27,"div",6)(28,"label",17),t._uU(29,"Lumsum Part Payment Yearly"),t.qZA(),t.TgZ(30,"input",18),t.NdJ("ngModelChange",function(o){return e.form.additionalAmount.value=o}),t.qZA()(),t.TgZ(31,"button",19),t.NdJ("click",function(){return e.calculate()}),t._uU(32," Submit "),t.qZA()()()(),t.TgZ(33,"div",1)(34,"div",2)(35,"div",3)(36,"h6",4),t._uU(37,"Goal Chart"),t.qZA()(),t.TgZ(38,"div",5),t._UZ(39,"app-chart",20),t.qZA()()(),t.TgZ(40,"div",21)(41,"div",22)(42,"div",5)(43,"div",23)(44,"div",24)(45,"div",25),t._uU(46," Total Investment "),t.qZA(),t.TgZ(47,"div",26),t._uU(48),t.ALo(49,"indianNumberFormat"),t.qZA(),t.TgZ(50,"div",26),t._uU(51),t.ALo(52,"numberToWords"),t.qZA()(),t.TgZ(53,"div",27),t._UZ(54,"i",28),t.qZA()()()(),t.TgZ(55,"div",22)(56,"div",5)(57,"div",23)(58,"div",24)(59,"div",25),t._uU(60," Total Interest "),t.qZA(),t.TgZ(61,"div",26),t._uU(62),t.ALo(63,"indianNumberFormat"),t.qZA(),t.TgZ(64,"div",26),t._uU(65),t.ALo(66,"numberToWords"),t.qZA()(),t.TgZ(67,"div",27),t._UZ(68,"i",28),t.qZA()()()(),t.TgZ(69,"div",22)(70,"div",5)(71,"div",23)(72,"div",24)(73,"div",25),t._uU(74," Total Lumsum Amount "),t.qZA(),t.TgZ(75,"div",26),t._uU(76),t.ALo(77,"indianNumberFormat"),t.qZA(),t.TgZ(78,"div",26),t._uU(79),t.ALo(80,"numberToWords"),t.qZA()(),t.TgZ(81,"div",27),t._UZ(82,"i",28),t.qZA()()()(),t.TgZ(83,"div",22)(84,"div",5)(85,"div",23)(86,"div",24)(87,"div",25),t._uU(88," Total Amount "),t.qZA(),t.TgZ(89,"div",26),t._uU(90),t.ALo(91,"indianNumberFormat"),t.qZA(),t.TgZ(92,"div",26),t._uU(93),t.ALo(94,"numberToWords"),t.qZA()(),t.TgZ(95,"div",27),t._UZ(96,"i",28),t.qZA()()()()()(),t.TgZ(97,"div",0)(98,"div",29)(99,"div",2)(100,"div",3)(101,"h6",4),t._uU(102,"Earnings Overview"),t.qZA()(),t.TgZ(103,"div",5),t._UZ(104,"app-datatable",30),t.qZA()()()()),2&n&&(t.xp6(10),t.Q6J("ngModel",e.form.amount.value),t.xp6(4),t.Q6J("ngModel",e.form.rate.value),t.xp6(4),t.Q6J("ngModel",e.form.tenure.value),t.xp6(4),t.Q6J("ngModel",e.form.sip.value),t.xp6(4),t.Q6J("ngModel",e.form.growthRate.value),t.xp6(4),t.Q6J("ngModel",e.form.additionalAmount.value),t.xp6(9),t.Q6J("options",e.pieChartOptions)("updateFlag",e.updateFlag),t.xp6(9),t.hij(" ",t.lcZ(49,18,e.lastInvestmentData.totalMonthlyAmount||0)," "),t.xp6(3),t.hij(" ",t.lcZ(52,20,e.lastInvestmentData.totalMonthlyAmount||0)," "),t.xp6(11),t.hij(" ",t.lcZ(63,22,e.lastInvestmentData.totalMonthlyInterest||0)," "),t.xp6(3),t.hij(" ",t.lcZ(66,24,e.lastInvestmentData.totalMonthlyInterest||0)," "),t.xp6(11),t.hij(" ",t.lcZ(77,26,e.lastInvestmentData.totalExtraAmount||0)," "),t.xp6(3),t.hij(" ",t.lcZ(80,28,e.lastInvestmentData.totalExtraAmount||0)," "),t.xp6(11),t.hij(" ",t.lcZ(91,30,e.lastInvestmentData.totalAmount||0)," "),t.xp6(3),t.hij(" ",t.lcZ(94,32,e.lastInvestmentData.totalAmount||0)," "),t.xp6(11),t.Q6J("columns",e.goalColumns)("data",e.goalData))},dependencies:[f.Fj,f.JJ,f.On,w.x,M.n,F,J]}),l})()},{path:"future",component:(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-future"]],decls:2,vars:0,template:function(n,e){1&n&&(t.TgZ(0,"p"),t._uU(1,"future works!"),t.qZA())}}),l})()},{path:"fire",component:(()=>{class l{constructor(n,e){this.calculatorService=n,this.cdr=e,this.form={age:{value:30},retirementAge:{value:45},lifeExpectancy:{value:85},currentIncome:{value:15e4},currentIncomegrowth:{value:10},currentExpense:{value:5e4},currentExpensegrowth:{value:6}},this.fireData=[],this.fireColumns=[{data:"month",title:"month"},{data:"initialAmount",title:"initialAmount"},{data:"monthlyAmount",title:"monthlyAmount"},{data:"totalMonthlyAmount",title:"totalMonthlyAmount"},{data:"monthlySum",title:"monthlySum"},{data:"monthlyInterest",title:"monthlyInterest"},{data:"totalMonthlyInterest",title:"totalMonthlyInterest"},{data:"extraAmount",title:"extraAmount"},{data:"totalExtraAmount",title:"totalExtraAmount"},{data:"totalAmount",title:"totalAmount"}],this.calculate=()=>{const a=this.calculatorService.calculateFIRENumber(Number(this.form.age.value),Number(this.form.retirementAge.value),Number(this.form.lifeExpectancy.value),Number(this.form.currentIncome.value),Number((Number(this.form.currentIncomegrowth.value)/12).toFixed(2)),Number(this.form.currentExpense.value),Number((Number(this.form.currentExpensegrowth.value)/12).toFixed(2)));console.log(a)}}ngOnInit(){}}return l.\u0275fac=function(n){return new(n||l)(t.Y36(U),t.Y36(t.sBO))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-fire"]],decls:45,vars:9,consts:[[1,"row"],[1,"col-xl-4","col-lg-5"],[1,"card","shadow","mb-4"],[1,"card-header","py-3","d-flex","flex-row","align-items-center","justify-content-between"],[1,"m-0","font-weight-bold","text-primary"],[1,"card-body"],[1,"form-group"],["for","amount"],["type","text","id","amount","placeholder","Enter amount",1,"form-control",3,"ngModel","ngModelChange"],["for","rate"],["type","text","id","rate","placeholder","Enter rate",1,"form-control",3,"ngModel","ngModelChange"],["for","tenure"],["type","text","id","tenure","placeholder","Enter tenure",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"col-xl-12","col-lg-12"],[3,"columns","data"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h6",4),t._uU(5,"FIRE Calculator"),t.qZA()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Age"),t.qZA(),t.TgZ(10,"input",8),t.NdJ("ngModelChange",function(o){return e.form.age.value=o}),t.qZA()(),t.TgZ(11,"div",6)(12,"label",9),t._uU(13,"Retirement Age"),t.qZA(),t.TgZ(14,"input",10),t.NdJ("ngModelChange",function(o){return e.form.retirementAge.value=o}),t.qZA()(),t.TgZ(15,"div",6)(16,"label",9),t._uU(17,"Life expectancy"),t.qZA(),t.TgZ(18,"input",10),t.NdJ("ngModelChange",function(o){return e.form.lifeExpectancy.value=o}),t.qZA()(),t.TgZ(19,"div",6)(20,"label",11),t._uU(21,"Current Income"),t.qZA(),t.TgZ(22,"input",12),t.NdJ("ngModelChange",function(o){return e.form.currentIncome.value=o}),t.qZA()(),t.TgZ(23,"div",6)(24,"label",11),t._uU(25,"Income Growth "),t.qZA(),t.TgZ(26,"input",12),t.NdJ("ngModelChange",function(o){return e.form.currentIncomegrowth.value=o}),t.qZA()(),t.TgZ(27,"div",6)(28,"label",11),t._uU(29,"Current Expense"),t.qZA(),t.TgZ(30,"input",12),t.NdJ("ngModelChange",function(o){return e.form.currentExpense.value=o}),t.qZA()(),t.TgZ(31,"div",6)(32,"label",11),t._uU(33,"Expense Growth "),t.qZA(),t.TgZ(34,"input",12),t.NdJ("ngModelChange",function(o){return e.form.currentExpensegrowth.value=o}),t.qZA()(),t.TgZ(35,"button",13),t.NdJ("click",function(){return e.calculate()}),t._uU(36,"Submit"),t.qZA()()()()(),t.TgZ(37,"div",0)(38,"div",14)(39,"div",2)(40,"div",3)(41,"h6",4),t._uU(42,"FIRE Overview"),t.qZA()(),t.TgZ(43,"div",5),t._UZ(44,"app-datatable",15),t.qZA()()()()),2&n&&(t.xp6(10),t.Q6J("ngModel",e.form.age.value),t.xp6(4),t.Q6J("ngModel",e.form.retirementAge.value),t.xp6(4),t.Q6J("ngModel",e.form.lifeExpectancy.value),t.xp6(4),t.Q6J("ngModel",e.form.currentIncome.value),t.xp6(4),t.Q6J("ngModel",e.form.currentIncomegrowth.value),t.xp6(4),t.Q6J("ngModel",e.form.currentExpense.value),t.xp6(4),t.Q6J("ngModel",e.form.currentExpensegrowth.value),t.xp6(10),t.Q6J("columns",e.fireColumns)("data",e.fireData))},dependencies:[f.Fj,f.JJ,f.On,M.n]}),l})()}];let k=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[L.Bz.forChild(j),L.Bz]}),l})();var B=v(793);let G=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[S.ez,B.m,k]}),l})()}}]);