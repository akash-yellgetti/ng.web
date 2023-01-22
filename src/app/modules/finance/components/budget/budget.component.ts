import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss', '../expense-common/expense-common.component.scss']
})
export class BudgetComponent implements OnInit {
  public tabs: any = [
    {
      title: 'Income',
      description: '',
      key: 'income',
      link: './income',
      children: [
        {
          title: 'Salary',
          description: 'Salary',
          link: './salary',
        },
        {
          title: 'Business',
          description: 'Business',
          link: './business',
        },
        {
          title: 'Rental',
          description: 'Rental',
          link: './rental',
        }
      ]
    },
    {
      title: 'Expense',
      description: '',
      key: 'expense',
      link: './expense',
      children: [
        {
          title: 'House-Hold',
          description: 'House-Hold',
          key: 'house-hold',
          link: './house-hold',
          children: [
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
          ]
        },
        {
          title: 'Loan',
          description: 'Loan',
          link: './loan',
        },
        {
          title: 'Transportation',
          description: 'Transportation',
          link: './transportation',
        },
        {
          title: 'Insurance',
          description: 'Insurance',
          link: './insurance',
        },
        {
          title: 'Food',
          description: 'Food',
          link: './food',
        },
        {
          title: 'Pets',
          description: 'Pets',
          link: './pets',
        },
        {
          title: 'Personal-Care',
          description: 'Personal-Care',
          link: './personal-care',
        },
        {
          title: 'Entertainment',
          description: 'Entertainment',
          link: './entertainment',
        },
        {
          title: 'Gift',
          description: 'Gift',
          link: './gift',
        },
        {
          title: 'Donation',
          description: 'Donation',
          link: './donation',
        },
        {
          title: 'Credit-Card',
          description: 'Credit-Card',
          link: './credit-card',
        },
        {
          title: 'Vehicle',
          description: 'Vehicle',
          link: './vehicle',
        },
        {
          title: 'Investment',
          description: 'Investment',
          link: './investment',
        },
          // {
        //   title: 'Saving',
        // description: 'Saving',
        //   link: './saving',
        // },
        // {
        //   title: 'Taxes',
        // description: 'Taxes',
        //   link: './taxes',
        // },
        // {
        //   title: 'Legal',
        // description: 'Legal',
        //   link: './legal',
        // }
      ]
    }
    
  ];
  public tab: any = null;
  data: any = null;
  numbers: any = [];
  constructor(public moduleService: ModuleService) { 
    this.numbers = Array(10).fill(4).map((x,i)=>i);
    this.moduleService.mainTitle.next("Budget");
    this.switchTab('income');
  }


  ngOnInit(): void {
    
  }

  switchTab = (key: string) => {
    this.tab = _.find(this.tabs, {  key });
    this.data = null;
  }

  selectCategory = (key: string) => {
    this.data = _.find(this.tab.children, {  key }) ||  { children: [] };
  }

}
