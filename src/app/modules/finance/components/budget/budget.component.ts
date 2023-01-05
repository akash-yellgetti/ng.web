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
  constructor(public moduleService: ModuleService) { 
    this.moduleService.mainTitle.next("Budget");
  }

  ngOnInit(): void {
    
  }

}
