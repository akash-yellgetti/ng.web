"use strict";(self.webpackChunkngweb=self.webpackChunkngweb||[]).push([[592],{3193:(p,l,a)=>{a.d(l,{If:()=>i,vB:()=>o});var n,s,e=a(3470);const i={chart:{type:"pie"},tooltip:{valueSuffix:"%"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name} </b>: {point.percentage:.1f} %"}}},series:[{name:"Percentage",colorByPoint:!0,data:[{name:"Water",y:55.02},{name:"Fat",sliced:!0,selected:!0,y:26.71},{name:"Carbohydrates",y:1.09},{name:"Protein",y:15.5},{name:"Ash",y:1.68}]}]},o={chart:{type:"column"},legend:{align:"left",x:70,verticalAlign:"top",y:70,floating:!0,backgroundColor:null!==(s=null===(n=e.defaultOptions.legend)||void 0===n?void 0:n.backgroundColor)&&void 0!==s?s:"white",borderColor:"#CCC",borderWidth:1,shadow:!1},tooltip:{headerFormat:"<b>{point.x}</b><br/>",pointFormat:"{series.name}: {point.y}<br/>Total: {point.stackTotal}"},plotOptions:{column:{stacking:"normal"}},series:[{name:"BPL",data:[3,5,1,13]},{name:"FA Cup",data:[14,8,8,12]},{name:"CL",data:[0,2,6,3]},{name:"SL",data:[3,2,4,5]}]}},2620:(p,l,a)=>{a.d(l,{x:()=>i});var e=a(3470),n=a(5e3),s=a(1409);let i=(()=>{class t{constructor(){this.Highcharts=e,this.options={},this.updateFlag=!1,this.chartOptions={}}ngOnInit(){this.chartOptions=Object.assign(Object.assign({},this.chartOptions),this.options)}ngOnChanges(r){this.chartOptions=Object.assign(Object.assign({},this.chartOptions),this.options)}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-chart"]],inputs:{options:"options",updateFlag:"updateFlag"},features:[n.TTD],decls:1,vars:3,consts:[[2,"width","100%","height","400px","display","block",3,"Highcharts","options","update","updateChange"]],template:function(r,d){1&r&&(n.TgZ(0,"highcharts-chart",0),n.NdJ("updateChange",function(c){return d.updateFlag=c}),n.qZA()),2&r&&n.Q6J("Highcharts",d.Highcharts)("options",d.chartOptions)("update",d.updateFlag)},dependencies:[s.x]}),t})()},9077:(p,l,a)=>{a.d(l,{n:()=>n});var e=a(5e3),h=a(9224);let n=(()=>{class s{constructor(){this.id=Math.random().toString(36).substring(7)}ngOnInit(){this.loadData()}ngOnChanges(t){t.data&&t.data.currentValue&&this.loadData()}ngAfterViewInit(){this.initializeDataTable()}ngOnDestroy(){this.dataTable&&this.dataTable.destroy()}loadData(){this.dataTable&&(this.dataTable.clear(),this.dataTable.rows.add(this.data),this.dataTable.draw())}initializeDataTable(){this.dataTable=$("#"+this.id).DataTable({dom:"lBfrtip",buttons:["copy","csv","excel","pdf","print"],lengthMenu:[[10,15,20,25,50,-1],[10,15,20,25,50,"All"]],pageLength:15,data:[],columns:this.columns}),this.dataTable.clear(),this.dataTable.rows.add(this.data),this.dataTable.draw()}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-datatable"]],inputs:{columns:"columns",data:"data"},features:[e.TTD],decls:2,vars:1,consts:[[1,"table","table-striped","table-bordered",3,"id"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card"),e._UZ(1,"table",0),e.qZA()),2&t&&(e.xp6(1),e.s9C("id",o.id))},dependencies:[h.a8]}),s})()}}]);