import { Component, OnInit } from '@angular/core';
import { budget } from 'src/app/shared/json/budet.json';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  public data: any = budget;
  public columns: any = [
    {
      'name': 'date',
    }, {
    'name': 'category',
  },{
    'name': 'type', 
  },{
    'name': 'title', 
  },{
    'name': 'decription',
  },{
    'name': 'amount', 
  },
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}