import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
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
    emi: {
      value: 0
    },
    growthRate: {
      value: 0
    },
    additionalAmount: {
      value: 0
    },
    
  }
  constructor(public calculatorService: CalculatorService, private cdr: ChangeDetectorRef)  { }

  ngOnInit(): void {
  }

  calculate = () => {
    const { amount, rate, tenure, growthRate, additionalAmount } = this.form;
    // const futureValue = this.futureValue(amount.value, rate.value, tenure.value);
    // const data = this.calculatorService.calculateSIPAmount(Number(amount.value), Number(rate.value), Number(tenure.value), Number(growthRate.value));
    const data = this.calculatorService.SIPAmount(Number(amount.value), Number(rate.value), Number(tenure.value));
    console.log(data)
  }

}
