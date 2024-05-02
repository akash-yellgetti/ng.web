import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss']
})
export class FireComponent implements OnInit {
  form: any = {
    age: {
      value: 30
    },
    retirementAge: {
      value: 45
    },
    lifeExpectancy: {
      value: 85
    },
    currentIncome: {
      value: 150000
    },
    currentIncomegrowth: {
      value: 10
    },
    
    currentExpense: {
      value: 50000
    },
    currentExpensegrowth: {
      value: 6
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
    const fireNumber = this.calculatorService.calculateFIRENumber(
      Number(this.form.age.value),
      Number(this.form.retirementAge.value),
      Number(this.form.lifeExpectancy.value),
      Number(this.form.currentIncome.value),
      Number((Number(this.form.currentIncomegrowth.value)/12).toFixed(2)),
      Number(this.form.currentExpense.value),
      Number((Number(this.form.currentExpensegrowth.value)/12).toFixed(2)),
    )
    console.log(fireNumber)
  }

}
