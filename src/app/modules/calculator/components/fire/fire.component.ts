import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { months } from 'moment';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss']
})
export class FireComponent implements OnInit {
  form: any = {
    age: {
      value: 35
    },
    retirementAge: {
      value: 60
    },
    lifeExpectancy: {
      value: 80
    },
    currentIncome: {
      value: 35000
    },
    currentIncomegrowth: {
      value: 10
    },
    
    currentExpense: {
      value: 1200000
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
    const { age, retirementAge, lifeExpectancy, currentIncome, currentIncomegrowth,  currentExpense, currentExpensegrowth }: any = this.form;
    // const fireNumber = this.calculatorService.calculateFIRENumber(
    //   Number(this.form.age.value),
    //   Number(this.form.retirementAge.value),
    //   Number(this.form.lifeExpectancy.value),
    //   Number(this.form.currentIncome.value),
    //   Number((Number(this.form.currentIncomegrowth.value)/12).toFixed(2)),
    //   Number(this.form.currentExpense.value),
    //   Number((Number(this.form.currentExpensegrowth.value)/12).toFixed(2)),
    // )
    // console.log(fireNumber)
    const tenureToRetirement: number = Number(retirementAge.value) - Number(age.value);
    const monthlyIncomeAtRetirement: number = this.calculatorService.futureValue(Number(currentIncome.value), Number(currentExpensegrowth.value), tenureToRetirement);
    console.log(monthlyIncomeAtRetirement)
    const annualIncomeAtRetirement: number = Number((monthlyIncomeAtRetirement * 12).toFixed(2));
    console.log(annualIncomeAtRetirement)
    const corpusRequired: number = this.calculatorService.corpusAmount(monthlyIncomeAtRetirement, Number(currentExpensegrowth.value));
    console.log(corpusRequired)
    const retirementTenure: number = Number(lifeExpectancy.value) - Number(retirementAge.value);
  }

}
