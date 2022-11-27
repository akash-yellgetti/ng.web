import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  public tabs: any = [
    {
      label: 'Income',
      link: './income',
    },
    {
      label: 'Expense',
      link: './expense'
    }
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
