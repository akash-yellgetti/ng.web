import { Component, OnInit } from '@angular/core';
import { incomeTaxCategories } from './income-tax.json';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss']
})
export class IncomeTaxComponent implements OnInit {
  public categories: any =  incomeTaxCategories;
  form: any = {
    amount: {
      value: 10000000
    },
    rate: {
      value: 12
    },
    tenure: {
      value: 6
    },
    sip: {
      value: 0
    },
    growthRate: {
      value: 0
    },
    additionalAmount: {
      value: 0
    },
  }
  constructor() { }

  ngOnInit(): void {
  }

  calculate() {}

}
