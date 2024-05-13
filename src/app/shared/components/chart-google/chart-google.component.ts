import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ChartType } from 'angular-google-charts';

interface iChartSetting {
  title: string;
  type: ChartType;
  data: any[];
  columnNames: string[];
  chartOptions: any;
  width: number;
  height: number;
}

@Component({
  selector: 'app-chart-google',
  templateUrl: './chart-google.component.html',
  styleUrls: ['./chart-google.component.scss']
})
export class ChartGoogleComponent implements OnInit {
  @Input() options: any = {
     
  };
  @Input() updateFlag: any = false;
  @Output() toParent: EventEmitter<any> = new EventEmitter();
  chartSetting: iChartSetting = {
    title: 'Browser market shares at a specific website, 2014',
    type: ChartType.PieChart,
    data: [],
    columnNames:  [],
    chartOptions: { 
      
    },
    width: 400,
    height: 400
  }

  constructor() {}

  ngOnInit(): void {
    this.options = { ...this.chartSetting, ...this.options}
    // console.log(this.options)
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes', changes)
    // this.options = { ...this.chartSetting, ...this.options }
    // if(changes && changes.options && changes.options.currentValue && changes.options.currentValue.data) {
    //   this.options = { ...this.chartSetting, ...this.options }
    //   this.options.data = changes.options.currentValue.data
    // }
    
  }

  onSelect = (event: any) => {
    this.toParent.emit(event);
  }
}
