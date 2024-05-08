import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { months } from 'moment';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss']
})
export class FireComponent implements OnInit {
  result: any = {};
  form: any = {
    age: {
      value: 30
    },
    retirementAge: {
      value: 40
    },
    lifeExpectancy: {
      value: 80
    },
    currentIncome: {
      value: 100000
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
    investmentRoipre: {
      value: 12
    },
    investmentRoipost: {
      value: 8
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

  ngAfterViewInit() {
    this.calculate();
  }

  calculate = () => {
    const { age, retirementAge, lifeExpectancy, currentIncome, currentIncomegrowth,  currentExpense, currentExpensegrowth, investmentRoipre, investmentRoipost }: any = this.form;
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
    const monthlyIncomeAtRetirement: number = this.calculatorService.futureValue(Number(currentIncome.value), Number(currentIncomegrowth.value), tenureToRetirement);
    console.log('monthlyIncomeAtRetirement', monthlyIncomeAtRetirement)
    this.result.monthlyIncomeAtRetirement = monthlyIncomeAtRetirement;
    const annualIncomeAtRetirement: number = Number((monthlyIncomeAtRetirement * 12).toFixed(2));
    console.log('annualIncomeAtRetirement', annualIncomeAtRetirement)
    const monthlyExpenseAtRetirement: number = this.calculatorService.futureValue(Number(currentExpense.value), Number(currentExpensegrowth.value), tenureToRetirement);
    this.result.monthlyExpenseAtRetirement = monthlyExpenseAtRetirement;
    console.log('monthlyExpenseAtRetirement', monthlyExpenseAtRetirement)
    const annualExpenseAtRetirement: number = Number((monthlyExpenseAtRetirement * 12).toFixed(2));
    console.log('annualExpenseAtRetirement', annualExpenseAtRetirement)
    const normalFireCorpusRequired: number = this.calculatorService.corpusAmount(annualExpenseAtRetirement, 4);
    console.log('normalFireCorpusRequired', normalFireCorpusRequired)
    this.result.normalFireCorpusRequired = normalFireCorpusRequired;
    const leanFireCorpusRequired: number = this.calculatorService.corpusAmount(annualExpenseAtRetirement, 5);
    console.log('leanFireCorpusRequired', leanFireCorpusRequired)
    this.result.leanFireCorpusRequired = leanFireCorpusRequired;
    const fatFireCorpusRequired: number = this.calculatorService.corpusAmount(annualExpenseAtRetirement, 3);
    console.log('fatFireCorpusRequired', fatFireCorpusRequired)
    this.result.fatFireCorpusRequired = fatFireCorpusRequired;
    const SIPAmount = this.calculatorService.SIPAmount(normalFireCorpusRequired, Number(investmentRoipre.value), tenureToRetirement);
    console.log('SIPAmount', SIPAmount)
    this.result.SIPAmount = SIPAmount;
    
    
    // const retirementTenure: number = Number(lifeExpectancy.value) - Number(retirementAge.value);
  }

}
