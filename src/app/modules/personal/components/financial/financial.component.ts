import { Component, OnInit } from '@angular/core';
import { pieChartOptions } from 'src/app/shared/components/chart/chart-options';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {

  public pieChartOptions: any = JSON.parse(JSON.stringify(pieChartOptions));;
  updateFlag: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
