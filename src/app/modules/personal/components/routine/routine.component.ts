import { Component, OnInit } from '@angular/core';
import { routine } from 'src/app/shared/json/routine.json';
import * as _ from 'lodash';
import { SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent implements OnInit {
  public data: any = routine;
  public columns: any = [
    {
      'name': 'type',
    }, {
    'name': 'start',
  },{
    'name': 'end', 
  },{
    'name': 'duration', 
  },{
    'name': 'currentSlot',
  },{
    'name': 'title', 
  },{
    'name': 'description',
  }
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
  selected: any = [];
  SelectionType = SelectionType;
  constructor() { }

  ngOnInit(): void {
    this.selected = _.filter(this.data, (r: any) => r && r.currentSlot === true);
    console.log(this.selected)
    this.chartOptions.series = [{
      name: 'Type',
      colorByPoint: true,
      data: this.getChartDataFormat(this.data, 'type', 'duration')
    }];
  }

  onSelect({ selected } : any) {
    console.log('Select Event', selected, this.selected);
  }

  getChartDataFormat = (data: any, groupByKey: any, sumKey: any) => {
    return _.map(_.groupBy(data, groupByKey), (v,idx) => { return { name: idx, 
      y: _.sumBy(v, sumKey) }})
  }
}
