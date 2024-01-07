import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator/calculator.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  investment: any = {
    monthlyAmount: {
      value: 25000
    },
    roi: {
      value: 12
    },
    tenure: {
      value: 10
    },
    growth: {
      value: 10
    },
    extra: {
      value: 2
    },

  }
  constructor(public calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  calculate = () => {
    console.log(this.calculatorService.sipTable(this.investment.monthlyAmount.value, this.investment.roi.value, this.investment.tenure.value))
    console.log(this.calculatorService.loanAmount(this.investment.monthlyAmount.value, this.investment.roi.value, this.investment.tenure.value))
    console.log(this.calculatorService.stepUpSipTable(this.investment.monthlyAmount.value, this.investment.roi.value, this.investment.growth.value, this.investment.tenure.value))
  }
}
