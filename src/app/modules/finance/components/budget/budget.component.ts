import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';

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

  data: any = [
    {
      "type": "house-hold",
      "amount": 10000,
      "title": "Amma",
      "description": "Daily-Expense",
  },
  {
      "type": "house-hold",
      "amount": 5000,
      "title": "D-Mart",
      "description": "Monthly Groceries",
  },
  {
      "type": "house-hold",
      "amount": 5000,
      "title": "Akash",
      "description": "Personal Expense",
  },
  {
      "type": "house-hold",
      "amount": 5000,
      "title": "Panu",
      "description": "Personal Expense",
  },
  {
      "title": "Mortgage or rent",
      "description": "Description",
      "amount": 0,
      "type": "house-hold"
  }, {
      "title": "Phone",
      "description": "Description",
      "amount": 0,
      "type": "house-hold"
  }, {
      "title": "Electricity",
      "description": "Description",
      "amount": 0,
      "type": "house-hold"
  }, {
      "title": "Gas",
      "description": "Description",
      "amount": 0,
      "type": "house-hold"
  }, {
      "title": "Water and sewer",
      "description": "Description",
      "amount": 0,
      "type": "house-hold"
  }, {
      "title": "Cable",
      "description": "Description",
      "amount": 0,
      "type": "house-hold"
  }, {
      "title": "Waste removal",
      "description": "Description",
      "amount": 0,
      "type": "house-hold"
  }, {
      "title": "Maintenance or repairs",
      "description": "Description",
      "amount": 0,
      "type": "house-hold"
  }, {
      "title": "Supplies",
      "description": "Description",
      "amount": 0,
      "type": "house-hold"
  }, {
      "title": "Other",
      "description": "Description",
      "amount": 0,
      "type": "house-hold"
  }
  ];
  numbers: any = [];
  constructor(public moduleService: ModuleService) { 
    this.numbers = Array(10).fill(4).map((x,i)=>i);
    this.moduleService.mainTitle.next("Budget");
  }

  ngOnInit(): void {
    
  }

}
