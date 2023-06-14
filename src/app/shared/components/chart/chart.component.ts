import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  @Input() options: any = {};
  chartOptions: any =  {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        // text: 'Browser market shares in May, 2020',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                // distance: -20,
                // style: {
                //     fontWeight: 'bold',
                //     color: 'white'
                // },
                format: '<b>{point.name}</b>: {point.percentage:.1f} % | {y:.2f}'
            },
            // startAngle: -90,
            // endAngle: 90,
            // center: ['50%', '75%'],
            // size: '70%',
            showInLegend: true
        }
    },
     
    series: []
};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions.series = this.options.series;
  }

}
