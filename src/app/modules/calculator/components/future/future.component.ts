import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { pieChartOptions } from '../../../../shared/components/chart/chart-options';
import { FieldService } from '../../../../shared/services/field/field.service';

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
  public pieChartOptions: any = JSON.parse(JSON.stringify(pieChartOptions));;
  updateFlag: any = 0;
  constructor(
    public calculatorService: CalculatorService, 
    private cdr: ChangeDetectorRef,
    private fieldService: FieldService
  )  { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.calculate();
  }

  calculate = () => {
    const json = this.fieldService.json(this.form);
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
    const pieChartOptionss = JSON.parse(JSON.stringify(pieChartOptions));
    
    pieChartOptionss.series[0].data = [
      { name: 'amount', y: amount.value },
      { name: 'interest', y: this.form.increasedValue.value },
      
    ];
    this.pieChartOptions = JSON.parse(JSON.stringify(pieChartOptionss));
    console.log(presentValue)
  }

}
