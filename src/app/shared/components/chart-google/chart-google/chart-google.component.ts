import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chart-google',
  templateUrl: './chart-google.component.html',
  styleUrls: ['./chart-google.component.scss']
})
export class ChartGoogleComponent implements OnInit {
  @Input() options: any = {};
  @Input() updateFlag: any = false;
  chartSetting: any = {
    title: 'Browser market shares at a specific website, 2014',
    type: 'PieChart',
    data: [
       ['Firefox', 45.0],
       ['IE', 26.8],
       ['Chrome', 12.8],
       ['Safari', 8.5],
       ['Opera', 6.2],
       ['Others', 0.7] 
    ],
    columnNames: ['Browser', 'Percentage'],
    chartOptions: { 
      legend: { 
        position: 'bottom', 
        alignment: 'center' ,
        orientation: 'vertical',
      }
    },
    width: 375,
    height: 450
  }

  constructor() {}

  ngOnInit(): void {
    this.options = { ...this.chartSetting, ...this.options}
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes)
    // this.options = { ...this.chartSetting, ...this.options }
    if(changes && changes.options && changes.options.currentValue && changes.options.currentValue.data) {
      this.options = { ...this.chartSetting, ...this.options }
      this.options.data = changes.options.currentValue.data
    }
    
  }
}
