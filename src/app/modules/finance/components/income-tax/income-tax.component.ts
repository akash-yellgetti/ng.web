import { Component, OnInit } from '@angular/core';
import { incomeTaxCategories, incomeTaxSlabs } from './income-tax.json';
import { CalculatorService } from 'src/app/modules/calculator/services/calculator.service';


@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.scss']
})
export class IncomeTaxComponent implements OnInit {
  public categories: any =  incomeTaxCategories;
  public incomeTaxSlabs: any = incomeTaxSlabs;
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
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  getSlabIncomeTaxValue = (amount: number, slab: any) => {
    const value = slab.to - slab.from;
    console.log(slab.from, slab.to, 'value', value)
    return Math.round(this.calculatorService.getPercentageValue(value, slab.rate));
  }

}
