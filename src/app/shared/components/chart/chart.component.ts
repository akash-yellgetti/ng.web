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
  chartOptions: any = {};
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = { ...this.chartOptions, ...this.options}
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chartOptions = { ...this.chartOptions, ...this.options}
  }
}
