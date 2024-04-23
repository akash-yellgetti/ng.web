import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  @Input() options: any = {};
  @Input() updateFlag: any = false;
  chartOptions: any = {
    // chart: {
    //   type: 'column',
    // },
    // title: {
    //   text: 'Major trophies for some English teams',
    //   align: 'center',
    // },
    // // xAxis: {
    // //   categories: ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester United'],
    // // },
    // yAxis: {
    //   min: 0,
    //   title: {
    //     text: 'Count trophies',
    //   },
    //   stackLabels: {
    //     // enabled: true,
    //   },
    // },
    // legend: {
    //   align: 'left',
    //   x: 70,
    //   verticalAlign: 'top',
    //   y: 70,
    //   floating: true,
    //   backgroundColor: 'white',
    //   borderColor: '#CCC',
    //   borderWidth: 1,
    //   shadow: false,
    // },
    // tooltip: {
    //   headerFormat: '<b>{point.x}</b><br/>',
    //   pointFormat: '{series.name}: {point.y}',
    // },
    // plotOptions: {
    //   column: {
    //     stacking: 'normal',
    //     // dataLabels: {
    //     //   enabled: true,
    //     // },
    //   },
    // },
  };
  constructor() {}

  ngOnInit(): void {
    // this.chartOptions.series = this.options.series;
    this.chartOptions = { ...this.chartOptions, ...this.options}
    // console.log(this.chartOptions)
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    // console.log(changes)

    // console.log(this.options)

    this.chartOptions = { ...this.chartOptions, ...this.options}
    // console.log(this.chartOptions)
  }
}
