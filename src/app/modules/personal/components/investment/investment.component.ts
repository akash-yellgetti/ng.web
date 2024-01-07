import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator/calculator.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  investment: any = {

    sip: {
      form: {
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
      },
      result: {

      }
    },

    stepUpSip: {
      form: {
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
      },
      result: {
        
      }
    },

    loan: {
      form: {
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
      },
      result: {
        
      }
    },
 

  }
  constructor(public calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  calculate = () => {
    this.investment.sip.result = this.calculatorService.sipTable(this.investment.sip.form.monthlyAmount.value, this.investment.sip.form.roi.value, this.investment.sip.form.tenure.value);
    this.investment.stepUpSip.result = this.calculatorService.stepUpSipTable(this.investment.stepUpSip.form.monthlyAmount.value, this.investment.stepUpSip.form.roi.value, this.investment.stepUpSip.form.growth.value, this.investment.stepUpSip.form.tenure.value);
    const loan = this.calculatorService.loanAmount(this.investment.loan.form.monthlyAmount.value, this.investment.loan.form.roi.value, this.investment.loan.form.tenure.value)
    this.investment.loan.result = this.calculatorService.emiGrid(loan, this.investment.loan.form.monthlyAmount.value, this.investment.loan.form.roi.value, this.investment.loan.form.tenure.value)
    console.log(this.investment)
  }
}
