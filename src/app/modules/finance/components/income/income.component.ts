import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  public tabs: any = [
    {
      label: 'Salary',
      link: './salary',
    },
    {
      label: 'Business',
      link: './business',
    },
    {
      label: 'Rental',
      link: './rental',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
