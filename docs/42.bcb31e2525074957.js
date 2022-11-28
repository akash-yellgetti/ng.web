"use strict";(self.webpackChunkngweb=self.webpackChunkngweb||[]).push([[42],{8042:(U,u,r)=>{r.r(u),r.d(u,{FinanceModule:()=>T});var s=r(6630),t=r(4650),h=r(3922),m=r(3848),p=r(6895);function y(e,o){if(1&e&&(t.TgZ(0,"a",2,3),t._uU(2),t.qZA()),2&e){const n=o.$implicit,i=t.MAs(1);t.Q6J("routerLink",n.link)("active",i.isActive),t.xp6(2),t.hij(" ",n.label," ")}}let x=(()=>{class e{constructor(n){this.moduleService=n,this.tabs=[{label:"Income",link:"./income"},{label:"Expense",link:"./expense"}],this.moduleService.mainTitle.next("Budget")}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-budget"]],decls:3,vars:1,consts:[["mat-tab-nav-bar","",1,"mat-tab-nav-bar-budget"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(n,i){1&n&&(t.TgZ(0,"nav",0),t.YNc(1,y,3,3,"a",1),t.qZA(),t._UZ(2,"router-outlet")),2&n&&(t.xp6(1),t.Q6J("ngForOf",i.tabs))},dependencies:[m.BU,m.Nj,p.sg,s.lC,s.yS,s.Od],styles:[".mat-tab-nav-bar-budget[_ngcontent-%COMP%]{background-color:#efefef;display:flex;justify-content:space-between;align-content:stretch}"]}),e})();var f=r(4850),g=r(2289),l=r(3546),c=r(1576),b=r(3047);function C(e,o){1&e&&(t.TgZ(0,"div",2)(1,"mat-card",11),t._uU(2," Sample Card "),t.qZA()()),2&e&&t.Q6J("fxFlex","16.6%")}const d=function(){return[500,500]},Z=function(){return[1,2,3,4,5,6]};let F=(()=>{class e{constructor(n,i){this.breakpointObserver=n,this.moduleService=i,this.data={assets:[{name:"ePF",value:196e3},{name:"eNPS",value:1e5},{name:"PPF",value:1e5},{name:"stocks",value:6e4},{name:"mutual-fund",value:15e3}],liabilities:[{name:"HouseHold",value:25e3},{name:"Akash Axis PL",value:15500},{name:"Panu Axis PL",value:6500},{name:"Home Loan",value:5e4},{name:"Home Loan Addon",value:1e4}],goals:[{name:"Stock Portfolio",value:3e6},{name:"Europe Studies",value:2e6},{name:"chikoowadi Downpayment",value:4e6},{name:"Child Marriage",value:8e6},{name:"Child Education",value:1e7},{name:"Retirement",value:5e7}]},this.single=[{name:"Principal",value:3e5},{name:"Interest",value:104e3}],this.legendPosition="below",this.cards=this.breakpointObserver.observe(g.u3.Handset).pipe((0,f.U)(({matches:w})=>w?[{title:"Card 1",cols:1,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}])),this.moduleService.mainTitle.next("Dashboard")}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.Yg),t.Y36(h.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:49,vars:47,consts:[[1,"content"],["fxLayout","row ","fxLayoutGap","15px",1,"content-row"],[3,"fxFlex"],[1,"dashboard-medium-card"],["routerLink","/main/user/finance/budget/income"],[1,"dashboard-card-content"],[3,"view","results","labels","scheme","legend","legendPosition","doughnut"],["routerLink","/main/user/finance/budget/expense"],[3,"view","results","labels","scheme","legend","legendPosition"],["fxLayout","row","fxLayoutGap","15px",1,"content-row"],[3,"fxFlex",4,"ngFor","ngForOf"],[1,"dashboard-small-card"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-header")(5,"mat-card-title")(6,"a",4),t._uU(7," Income "),t.qZA()()(),t.TgZ(8,"mat-card-content",5),t._UZ(9,"ngx-charts-pie-chart",6),t.qZA()()(),t.TgZ(10,"div",2)(11,"mat-card",3)(12,"mat-card-header")(13,"mat-card-title")(14,"a",7),t._uU(15," Expense "),t.qZA()()(),t.TgZ(16,"mat-card-content",5),t._UZ(17,"ngx-charts-pie-chart",6),t.qZA()()()(),t.TgZ(18,"div",1)(19,"div",2)(20,"mat-card",3)(21,"mat-card-header")(22,"mat-card-title"),t._uU(23," Assets "),t.qZA()(),t.TgZ(24,"mat-card-content",5),t._UZ(25,"ngx-charts-pie-chart",6),t.qZA()()(),t.TgZ(26,"div",2)(27,"mat-card",3)(28,"mat-card-header")(29,"mat-card-title"),t._uU(30," Liabilities "),t.qZA()(),t.TgZ(31,"mat-card-content",5),t._UZ(32,"ngx-charts-pie-chart",8),t.qZA()()(),t.TgZ(33,"div",2)(34,"mat-card",3)(35,"mat-card-header")(36,"mat-card-title"),t._uU(37," Goals "),t.qZA()(),t.TgZ(38,"mat-card-content",5),t._UZ(39,"ngx-charts-pie-chart",8),t.qZA()()()(),t.TgZ(40,"div",9),t.YNc(41,C,3,1,"div",10),t.qZA(),t.TgZ(42,"div",1)(43,"div",2)(44,"mat-card",3),t._uU(45," Sample Card "),t.qZA()(),t.TgZ(46,"div",2)(47,"mat-card",3),t._uU(48," Sample Card "),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("fxFlex","50%"),t.xp6(7),t.Q6J("view",t.DdM(41,d))("results",i.data.assets)("labels",!0)("scheme","vivid")("legend",!0)("legendPosition",i.legendPosition)("doughnut",!1),t.xp6(1),t.Q6J("fxFlex","50%"),t.xp6(7),t.Q6J("view",t.DdM(42,d))("results",i.data.assets)("labels",!0)("scheme","vivid")("legend",!0)("legendPosition",i.legendPosition)("doughnut",!1),t.xp6(2),t.Q6J("fxFlex","33%"),t.xp6(6),t.Q6J("view",t.DdM(43,d))("results",i.data.assets)("labels",!0)("scheme","vivid")("legend",!0)("legendPosition",i.legendPosition)("doughnut",!1),t.xp6(1),t.Q6J("fxFlex","33%"),t.xp6(6),t.Q6J("view",t.DdM(44,d))("results",i.data.liabilities)("labels",!0)("scheme","vivid")("legend",!0)("legendPosition",i.legendPosition),t.xp6(1),t.Q6J("fxFlex","33%"),t.xp6(6),t.Q6J("view",t.DdM(45,d))("results",i.data.goals)("labels",!0)("scheme","vivid")("legend",!0)("legendPosition",i.legendPosition),t.xp6(2),t.Q6J("ngForOf",t.DdM(46,Z)),t.xp6(2),t.Q6J("fxFlex","70%"),t.xp6(3),t.Q6J("fxFlex","30%"))},dependencies:[l.a8,l.dk,l.dn,l.n5,c.xw,c.SQ,c.yH,p.sg,b.JU,s.yS],styles:[".content-row[_ngcontent-%COMP%]{margin-bottom:15px}.wrap[_ngcontent-%COMP%]{min-height:128px}.dashboard-small-card[_ngcontent-%COMP%]{min-height:180px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;inset:15px;border-radius:40px}.dashboard-medium-card[_ngcontent-%COMP%]{min-height:300px}.dashboard-card-content[_ngcontent-%COMP%]{width:100%;height:calc(100% - 30px);display:flex;flex-flow:column;justify-content:center;align-items:center;box-sizing:border-box}"]}),e})();var v=r(7489);const P=[{type:"house-hold",amount:1e4,title:"Amma",description:"Daily-Expense"},{type:"house-hold",amount:5e3,title:"D-Mart",description:"Monthly Groceries"},{type:"house-hold",amount:5e3,title:"Akash",description:"Personal Expense"},{type:"house-hold",amount:5e3,title:"Panu",description:"Personal Expense"},{title:"Mortgage or rent",description:"Description",amount:0,type:"house-hold"},{title:"Phone",description:"Description",amount:0,type:"house-hold"},{title:"Electricity",description:"Description",amount:0,type:"house-hold"},{title:"Gas",description:"Description",amount:0,type:"house-hold"},{title:"Water and sewer",description:"Description",amount:0,type:"house-hold"},{title:"Cable",description:"Description",amount:0,type:"house-hold"},{title:"Waste removal",description:"Description",amount:0,type:"house-hold"},{title:"Maintenance or repairs",description:"Description",amount:0,type:"house-hold"},{title:"Supplies",description:"Description",amount:0,type:"house-hold"},{title:"Other",description:"Description",amount:0,type:"house-hold"},{type:"investment",amount:5e3,title:"PPF",description:"Personal Provident Fund"},{type:"investment",amount:5e3,title:"NPS",description:"National Pension Schem"},{type:"investment",amount:16e3,title:"ePF",description:"Employer Provident Fund"},{type:"investment",amount:0,title:"RD",description:"Recurring Deposit"},{type:"investment",amount:0,title:"FD",description:"Fixed Deposit"},{type:"investment",amount:0,title:"MF",description:"Mutual fund"},{type:"investment",amount:0,title:"Property",description:"Real State investment"},{type:"investment",amount:0,title:"Debt",description:"Debt Mutual Fund"},{type:"investment",amount:0,title:"Gold",description:"Gold Ornaments "},{type:"investment",amount:0,title:"Paper-Gold",description:"Paper-Gold"},{type:"loan",amount:5e4,title:"Home Loan",description:"A-704 Avenue Society Kashigoan"},{type:"loan",amount:1e4,title:"Home Addon Loan",description:"Personal Closing Marriage"},{type:"loan",amount:15500,title:"Axis Akash",description:"Personal Loan"},{type:"loan",amount:6500,title:"Axis Panu",description:"Personal Loan"},{title:"Vehicle payment",description:"Vehicle payment",amount:0,type:"transportation"},{title:"Bus/taxi fare",description:"Bus/taxi fare",amount:0,type:"transportation"},{title:"Insurance",description:"Insurance",amount:0,type:"transportation"},{title:"Licensing",description:"Licensing",amount:0,type:"transportation"},{title:"Fuel",description:"Fuel",amount:0,type:"transportation"},{title:"Maintenance",description:"Maintenance",amount:0,type:"transportation"},{title:"Other",description:"Other",amount:0,type:"transportation"},{title:"Home",desctiption:"Home",amount:0,type:"insurance"},{title:"Health",desctiption:"Health",amount:0,type:"insurance"},{title:"Life",desctiption:"Life",amount:0,type:"insurance"},{title:"Other",desctiption:"Other",amount:0,type:"insurance"},{type:"loan",amount:0,title:"Eduction Loan",description:"Eduction"},{type:"loan",amount:0,title:"Mortgage Loan",description:"Loan against property"},{type:"loan",amount:0,title:"Gold Loan",description:"Loan against gold"},{title:"Groceries",description:"Groceries",amount:0,type:"food"},{title:"Dining out",description:"Dining out",amount:0,type:"food"},{title:"Other",description:"Other",amount:0,type:"food"},{title:"Food",description:"Food",amount:0,type:"pets"},{title:"Medical",description:"Medical",amount:0,type:"pets"},{title:"Grooming",description:"Grooming",amount:0,type:"pets"},{title:"Toys",description:"Toys",amount:0,type:"pets"},{title:"Other",description:"Other",amount:0,type:"pets"},{title:"Medical",description:"Medical",amount:0,type:"personal-care"},{title:"Hair/nails",description:"Hair/nails",amount:0,type:"personal-care"},{title:"Clothing",description:"Clothing",amount:0,type:"personal-care"},{title:"Dry cleaning",description:"Dry cleaning",amount:0,type:"personal-care"},{title:"Health club",description:"Health club",amount:0,type:"personal-care"},{title:"Organization dues or fees",description:"Organization dues or fees",amount:0,type:"personal-care"},{title:"Other",description:"Other",amount:0,type:"personal-care"},{title:"Video/DVD",description:"Video/DVD",amount:0,type:"entertainment"},{title:"CDs",description:"CDs",amount:0,type:"entertainment"},{title:"Movies",description:"Movies",amount:0,type:"entertainment"},{title:"Concerts",description:"Concerts",amount:0,type:"entertainment"},{title:"Sporting events",description:"Sporting events",amount:0,type:"entertainment"},{title:"Live theater",description:"Live theater",amount:0,type:"entertainment"},{title:"Gift 1",description:"Gift 1",amount:0,type:"gift"},{title:"Charity 1",description:"Charity 1",amount:0,type:"donation"},{title:"ICICI Bank",description:"Platinum",amount:75e3,type:"credit-card"},{title:"ICICI Bank",description:"Amazon",amount:1e3,type:"credit-card"},{title:"Bullet 2-Wheeler",description:"MH 12 MJ 5500",amount:0,type:"vehicle"},{title:"Activa 2-Wheeler",description:"MH 04 FY 1285 ",amount:0,type:"vehicle"},{title:"Activa 2-Wheeler",description:"MH 02 J 1285 ",amount:0,type:"vehicle"}];var A=r(7392);function M(e,o){if(1&e&&(t.TgZ(0,"div")(1,"div",3)(2,"mat-card",4)(3,"mat-card-header"),t._UZ(4,"mat-icon",5),t.TgZ(5,"mat-card-title"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card-subtitle"),t._uU(8),t.qZA(),t._UZ(9,"div",6)(10,"div",7),t.TgZ(11,"span",8),t._uU(12),t.ALo(13,"currency"),t.qZA()()()()()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("fxFlex","100%"),t.xp6(3),t.Udp("font-size",24,"px"),t.xp6(2),t.hij(" ",n.title," "),t.xp6(2),t.hij(" ",n.description||"description"," "),t.xp6(4),t.Oqu(t.xi3(13,6,n.amount,"\u20b9 "))}}let a=(()=>{class e{constructor(n){this.router=n,this.data=[];const i=this.router.snapshot.routeConfig?.path;this.data=v.get(v.groupBy(P,"type"),i)}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-expense-common"]],decls:3,vars:1,consts:[[1,"content"],["fxLayout","column ","fxLayoutGap","15px",1,"content-row"],[4,"ngFor","ngForOf"],[3,"fxFlex"],[1,"expense-common-card"],["mat-card-avatar","",2,"border","1px solid black"],["fxFlex",""],[2,"flex-grow","1"],[2,"font-weight","bold"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,M,14,9,"div",2),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngForOf",i.data))},dependencies:[A.Hw,l.a8,l.dk,l.n5,l.$j,l.kc,c.xw,c.SQ,c.yH,p.sg,p.H9],styles:[".content[_ngcontent-%COMP%]{padding:15px}.expense-common-card[_ngcontent-%COMP%]{padding-bottom:0}"]}),e})();function D(e,o){if(1&e&&(t.TgZ(0,"a",2,3),t._uU(2),t.qZA()),2&e){const n=o.$implicit,i=t.MAs(1);t.Q6J("routerLink",n.link)("active",i.isActive),t.xp6(2),t.hij(" ",n.label," ")}}const L=[{path:"dashboard",component:F},{path:"budget",component:x,children:[{path:"income",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-income"]],decls:3,vars:0,template:function(n,i){1&n&&(t.TgZ(0,"p"),t._uU(1,"income works!"),t.qZA(),t._UZ(2,"router-outlet"))},dependencies:[s.lC]}),e})()},{path:"expense",component:(()=>{class e{constructor(){this.tabs=[{label:"House-Hold",link:"./house-hold"},{label:"Loan",link:"./loan"},{label:"Transportation",link:"./transportation"},{label:"Insurance",link:"./insurance"},{label:"Food",link:"./food"},{label:"Pets",link:"./pets"},{label:"Personal-Care",link:"./personal-care"},{label:"Entertainment",link:"./entertainment"},{label:"Gift",link:"./gift"},{label:"Donation",link:"./donation"},{label:"Credit-Card",link:"./credit-card"},{label:"Vehicle",link:"./vehicle"},{label:"Investment",link:"./investment"}]}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-expense"]],decls:3,vars:1,consts:[["mat-tab-nav-bar","",1,"mat-tab-nav-bar-budget"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(n,i){1&n&&(t.TgZ(0,"nav",0),t.YNc(1,D,3,3,"a",1),t.qZA(),t._UZ(2,"router-outlet")),2&n&&(t.xp6(1),t.Q6J("ngForOf",i.tabs))},dependencies:[m.BU,m.Nj,p.sg,s.lC,s.yS,s.Od],styles:[".small-card-square[_ngcontent-%COMP%]{min-width:150px;min-height:150px;margin-bottom:15px}"]}),e})(),children:[{path:"house-hold",component:a},{path:"insurance",component:a},{path:"donation",component:a},{path:"gift",component:a},{path:"insurance",component:a},{path:"investment",component:a},{path:"transportation",component:a},{path:"entertainment",component:a},{path:"personal-care",component:a},{path:"pets",component:a},{path:"food",component:a},{path:"insurance",component:a},{path:"loan",component:a},{path:"credit-card",component:a},{path:"vehicle",component:a},{path:"saving",component:a},{path:"taxes",component:a},{path:"legal",component:a}]}]}];let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(L),s.Bz]}),e})();var k=r(2969);let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[k.m,O]}),e})()}}]);