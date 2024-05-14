import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import * as _ from 'lodash';
import { pieChartOptions } from '../../../../shared/components/chart/chart-options';
import { FieldService } from '../../../../shared/services/field/field.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  form: any = {
    amount: {
      value: 50000000
    },
    rate: {
      value: 12
    },
    tenure: {
      value: 20
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
  goalColumns: any = [
    {
      data: 'month',
      title: 'Month',
    },
    {
      data: 'initialAmount',
      title: 'Initial Amount',
    },
    {
      data: 'monthlyAmount',
      title: 'SIP Amount',
    },
    // {
    //   data: 'totalMonthlyAmount',
    //   title: 'totalMonthlyAmount',
    // },
    // {
    //   data: 'monthlySum',
    //   title: 'monthlySum',
    // },
    
    {
      data: 'monthlyInterest',
      title: 'Monthly Interest',
    },
    // {
    //   data: 'totalMonthlyInterest',
    //   title: 'totalMonthlyInterest',
    // },
    {
      data: 'extraAmount',
      title: 'Annual Additional Amount',
    },
    // {
    //   data: 'totalExtraAmount',
    //   title: 'totalExtraAmount',
    // },
    
    {
      data: 'totalAmount',
      title: 'Total Amount',
    }
     
  ];
  public lastInvestmentData: any = {};
  public goalData: any = [];
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
    const form = this.fieldService.json(this.form);
    const { amount, rate, tenure, sip, growthRate, additionalAmount } = this.form;
    const SIPAmount = this.calculatorService.SIPAmount(Number(amount.value)-(Number(additionalAmount.value) * Number(tenure.value)), Number(rate.value), Number(tenure.value));
    sip.value = SIPAmount;
    console.log(SIPAmount);
    const goalData: any = this.calculatorService.investmentTable(Number(SIPAmount), Number(rate.value), Number(tenure.value), Number(growthRate.value), Number(additionalAmount.value));
    this.goalData = goalData;
    const last = _.last(this.goalData);
    console.log(last);
    this.lastInvestmentData = last;

    const pieChartOptionss = JSON.parse(JSON.stringify(pieChartOptions));
    
    pieChartOptionss.series[0].data = [
      { name: 'totalMonthlyAmount', y: _.get(last, 'totalMonthlyAmount', 0) },
      { name: 'totalMonthlyInterest', y: _.get(last, 'totalMonthlyInterest', 0) },
      { name: 'totalExtraAmount', y: _.get(last, 'totalExtraAmount', 0) }
    ];
    this.pieChartOptions = JSON.parse(JSON.stringify(pieChartOptionss));
  }

}
