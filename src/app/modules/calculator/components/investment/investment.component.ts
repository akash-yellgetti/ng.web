import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator/calculator.service';
import * as _ from 'lodash';
import { CHART_OPTIONS_ONE, pieChartOptions, stackedBarChartOptions } from 'src/app/shared/components/chart/chart-options';
import { FieldService } from '../../../../shared/services/field/field.service';
@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  updateFlag: any = 0;
  public pieChartOptions: any = JSON.parse(JSON.stringify(pieChartOptions));;
  public lineChartOptions: any = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Temperature Trends'
    },
   
    series: [
      { name: 'Tokyo', data: [7, 6, 9, 14, 18] },
      { name: 'New York', data: [2, 3, 5, 8, 12] },
      { name: 'London', data: [3, 4, 6, 10, 15] }
    ]
  };
  public stackedBarChartOptions: any =  JSON.parse(JSON.stringify(stackedBarChartOptions));
  form: any = {
    amount: {
      value: 30000
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
  public lastInvestmentData: any = {};
  public investmentData: any = [];

  
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
    const form = this.form;
    const investmentData: any = this.calculatorService.investmentTable(Number(form.amount.value), Number(form.rate.value), Number(form.tenure.value), Number(form.growthRate.value), Number(form.additionalAmount.value));
    this.investmentData = investmentData;
    const last = _.last(this.investmentData);
    this.lastInvestmentData = last;

    this.lineChartOptions.series = [];
    this.cdr.detectChanges();
    // this.lineChartOptions.series = [
    //   { name: 'totalMonthlyAmount', data: _.map(investmentData, 'totalMonthlyAmount') },
    //   { name: 'totalExtraAmount', data: _.map(investmentData, 'totalMonthlyAmount') },
    //   { name: 'totalMonthlyInterest', data: _.map(investmentData, 'totalMonthlyAmount') },
    // ];
    const stackedBarChartOptionss = JSON.parse(JSON.stringify(stackedBarChartOptions));
    stackedBarChartOptionss.series = [
      { name: 'monthlyInterest', data: _.map(investmentData, 'monthlyInterest') },
      { name: 'monthlyAmount', data: _.map(investmentData, 'monthlyAmount') },
      { name: 'extraAmount', data: _.map(investmentData, 'extraAmount') },
        // { name: 'balance', data: _.map(data, 'balance') },
        // { name: 'totalAmount', data: _.map(investmentData, 'totalAmount') },
        // { name: 'monthlyInterest', data: _.map(investmentData, 'monthlyInterest') },
        // { name: 'monthlyAmount', data: _.map(investmentData, 'monthlyAmount') },
      ];
    this.stackedBarChartOptions = JSON.parse(JSON.stringify(stackedBarChartOptionss));
    
    // const lineChartOptions = JSON.parse(JSON.stringify(CHART_OPTIONS_ONE));
    // lineChartOptions.series = [
    //     // { name: 'monthlySum', data: _.map(investmentData, 'monthlySum') },
    //     // { name: 'totalExtraAmount', data: _.map(investmentData, 'totalMonthlyAmount') },
    //     // { name: 'monthlyInterest', data: _.map(investmentData, 'monthlyInterest') },
    //     { name: 'totalMonthlyAmount', data: _.map(investmentData, 'totalMonthlyAmount') },
    //     { name: 'totalMonthlyInterest', data: _.map(investmentData, 'totalMonthlyInterest') },
    //     // { name: 'totalAmount', data: _.map(investmentData, 'totalAmount') },
    //   ];
    // this.lineChartOptions = JSON.parse(JSON.stringify(lineChartOptions));
    this.updateFlag = !this.updateFlag;
    // // [
    // //   {
    // //     name: 'totalMonthlyAmount',
    // //     data: [_.get(last, 'totalMonthlyAmount', 0)]
    // //   },
    // //   {
    // //     name: 'totalExtraAmount',
    // //     data: [_.get(last, 'totalExtraAmount', 0)]
    // //   },
    // //   {
    // //     name: 'totalMonthlyInterest',
    // //     data: [_.get(last, 'totalMonthlyInterest', 0)]
    // //   },
      
    // ]
    
    
  }
}
