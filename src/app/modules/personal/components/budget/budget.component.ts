import { Component, OnInit } from '@angular/core';
import { budget } from 'src/app/shared/json/budet.json';
import * as _ from 'lodash';
import { pieChartOptions } from 'src/app/shared/components/chart/chart-options';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  public data: any = budget;
  public budgetData: any = budget;
  public budgetColumn: any = [
    {
      'name': 'date',
      'title': 'date',
      'data': 'date',
    },
     {
    'name': 'category',
    'title': 'category',
    'data': 'category',
  },{
    'name': 'subCategory', 
    'title': 'subCategory', 
    'data': 'subCategory', 
  },{
    'name': 'title', 
    'title': 'title', 
    'data': 'title', 
  },{
    'name': 'description',
    'title': 'description',
    'data': 'description',
  },{
    'name': 'amount', 
    'title': 'amount', 
    'data': 'amount', 
  },
  
  ];
  chartOptions: any = {
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 70.67,
          // sliced: true,
          // selected: true
      }, {
          name: 'Edge',
          y: 14.77
      },  {
          name: 'Firefox',
          y: 4.86
      }, {
          name: 'Safari',
          y: 2.63
      }, {
          name: 'Internet Explorer',
          y: 1.53
      },  {
          name: 'Opera',
          y: 1.40
      }, {
          name: 'Sogou Explorer',
          y: 0.84
      }, {
          name: 'QQ',
          y: 0.51
      }, {
          name: 'Other',
          y: 2.6
      }]
  }]
  }
  chartOptions1: any = {};
  public pieChartOptions: any = JSON.parse(JSON.stringify(pieChartOptions));;
  updateFlag: any = 0;
  constructor() { 
    this.chartOptions1 = {...this.chartOptions}
  }

  ngOnInit(): void {
      this.chartOptions.series = [{
        name: 'Category',
        colorByPoint: true,
        data: this.getChartDataFormat(this.data, 'category', 'amount')
      }];

      this.chartOptions1.series = [{
        name: 'Type',
        colorByPoint: true,
        data: this.getChartDataFormat(this.data, 'subCategory', 'amount')
      }];
  }

  getChartDataFormat = (data: any, groupByKey: any, sumKey: any) => {
    return _.map(_.groupBy(data, groupByKey), (v,idx) => { return { name: idx, 
      y: _.sumBy(v, sumKey) }})
  }

}