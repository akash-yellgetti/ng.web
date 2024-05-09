import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss']
})
export class IncomeTaxComponent implements OnInit {
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
