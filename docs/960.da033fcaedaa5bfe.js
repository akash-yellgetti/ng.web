"use strict";(self.webpackChunkngweb=self.webpackChunkngweb||[]).push([[960],{2960:(p,i,s)=>{s.r(i),s.d(i,{TradingviewModule:()=>g});var m=s(9808),l=s(2131),d=s(4668),o=s(5e3);const c=[{path:"alerts",component:(()=>{class e{constructor(){this.loading=!1,this.rows=[],this.columns=[{name:"timestamp"},{name:"datetime"},{name:"timeframe"},{name:"type"},{name:"exchange"},{name:"symbol"},{name:"price"},{name:"volume"}],this.ColumnMode=d.hq,this.fetch(t=>{this.rows=t})}ngOnInit(){}fetch(t){const n=new XMLHttpRequest;n.open("GET","https://api-web-bxum.onrender.com/tradingview/webhook/logs"),n.onload=()=>{let a=JSON.parse(n.response);a=a.data,t(a.splice(0,10))},n.send()}onSort(t){console.log("Sort Event",t),this.loading=!0,setTimeout(()=>{const n=[...this.rows];this.rows=n,this.loading=!1},1e3)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-alerts"]],decls:3,vars:5,consts:[[1,"container-fluid","d-flex"],[1,"col-70"],[1,"material","striped",3,"rows","columns","headerHeight","footerHeight","rowHeight"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"ngx-datatable",2),o.qZA()()),2&t&&(o.xp6(2),o.Q6J("rows",n.rows)("columns",n.columns)("headerHeight",50)("footerHeight",50)("rowHeight",50))},dependencies:[d.nE]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[l.Bz.forChild(c),l.Bz]}),e})();var h=s(793);let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[m.ez,h.m,u]}),e})()}}]);