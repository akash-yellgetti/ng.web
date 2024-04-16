import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator/calculator.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  form: any = {
    amount: {
      value: 7500
    },
    rate: {
      value: 12
    },
    tenure: {
      value: 15
    },
    growthRate: {
      value: 0
    },
    additionalAmount: {
      value: 0
    },
    
  }
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

  investmentColumns: any = [
    {
      data: 'month',
      title: 'month',
    },
    {
      data: 'initialAmount',
      title: 'initialAmount',
    },
    {
      data: 'monthlyAmount',
      title: 'monthlyAmount',
    },
    {
      data: 'totalMonthlyAmount',
      title: 'totalMonthlyAmount',
    },
    {
      data: 'monthlySum',
      title: 'monthlySum',
    },
    
    {
      data: 'monthlyInterest',
      title: 'monthlyInterest',
    },
    {
      data: 'totalMonthlyInterest',
      title: 'totalMonthlyInterest',
    },
    {
      data: 'extraAmount',
      title: 'extraAmount',
    },
    {
      data: 'totalExtraAmount',
      title: 'totalExtraAmount',
    },
    
    {
      data: 'totalAmount',
      title: 'totalAmount',
    }
     
  ];
  public investmentData: any = [];
  constructor(public calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  calculate = () => {
    const form = this.form;
    this.investmentData = this.calculatorService.investmentTable(form.amount.value, form.rate.value, form.tenure.value, form.growthRate.value, Number(form.additionalAmount.value));
    
    
  }
}
