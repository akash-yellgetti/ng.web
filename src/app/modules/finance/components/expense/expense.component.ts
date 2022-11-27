import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  public tabs: any = [
    {
      label: 'House-Hold',
      link: './house-hold',
    },
    {
      label: 'Loan',
      link: './loan',
    },
    {
      label: 'Transportation',
      link: './transportation',
    },
    {
      label: 'Insurance',
      link: './insurance',
    },
    {
      label: 'Food',
      link: './food',
    },
    {
      label: 'Pets',
      link: './pets',
    },
    {
      label: 'Personal-Care',
      link: './personal-care',
    },
    {
      label: 'Entertainment',
      link: './entertainment',
    },
    {
      label: 'Gift',
      link: './gift',
    },
    {
      label: 'Donation',
      link: './donation',
    },
    {
      label: 'Credit-Card',
      link: './credit-card',
    },
    {
      label: 'Vehicle',
      link: './vehicle',
    },
    {
      label: 'Investment',
      link: './investment',
    },
      // {
    //   label: 'Saving',
    //   link: './saving',
    // },
    // {
    //   label: 'Taxes',
    //   link: './taxes',
    // },
    // {
    //   label: 'Legal',
    //   link: './legal',
    // }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
