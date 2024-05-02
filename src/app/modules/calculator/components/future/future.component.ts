import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.scss']
})
export class FutureComponent implements OnInit {
  form: any = {
    amount: {
      value: 100000
    },
    rate: {
      value: 6
    },
    tenure: {
      value: 5
    },
    increasedValue: {
      value: 0
    },
    futureValue: {
      value: 0
    },
    
  }

  fireData: any = [];
  fireColumns: any = [
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
  constructor(public calculatorService: CalculatorService, private cdr: ChangeDetectorRef)  { }

  ngOnInit(): void {
  }

  calculate = () => {
    const { amount, rate, tenure, sip, growthRate, additionalAmount } = this.form;
    const futureValue = this.calculatorService.futureValue(
      Number(amount.value),
      Number(rate.value),
      Number(tenure.value),
    )
    this.form.futureValue.value = futureValue;
    this.form.increasedValue.value = futureValue - amount.value;
    // console.log(futureValue)
    const presentValue = this.calculatorService.principalValue(Number(futureValue), Number(rate.value), Number(tenure.value));
    console.log(presentValue)
  }

}
