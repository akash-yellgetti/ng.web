import { Component, OnInit } from '@angular/core';
import { pieChartOptions } from 'src/app/shared/components/chart/chart-options';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  categories = [
    {
      name: 'Loan',
      title: 'Loan',
    },
    {
      name: 'goal',
      title: 'goal'
    },
    {
      name: 'credit-card',
      title: 'Credit-Card'
    },
    {
      name: 'investment',
      title: 'Investment'
    },
    {
      name: 'lended',
      title: 'Lended'
    },
    {
      name: 'borrowed',
      title: 'Borrowed'
    },
    
  ]
  public pieChartOptions: any = JSON.parse(JSON.stringify(pieChartOptions));;
  updateFlag: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
