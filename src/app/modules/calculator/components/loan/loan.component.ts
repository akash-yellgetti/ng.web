import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { ChartService } from 'src/app/shared/services/chart/chart.service';
import * as _ from 'lodash';
import { data } from 'jquery';
import { CHART_OPTIONS_ONE } from 'src/app/shared/components/chart/chart-options';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  public loanData: any = [];
  public loanColumns: any = [
    {
      data: 'month',
      title: 'month',
    }
    ,{
      data: 'loanAmount',
      title: 'loanAmount',
    }
    ,{
      data: 'emi',
      title: 'emi',
    }
    
    ,{
      data: 'principal',
      title: 'principal',
    }
    ,{
      data: 'totalPrincipal',
      title: 'totalPrincipal',
    }
    ,{
      data: 'interest',
      title: 'interest',
    }
    ,{
      data: 'totalInterest',
      title: 'totalInterest',
    }
    ,{
      data: 'partPayment',
      title: 'partPayment',
    }
    ,{
      data: 'totalPartPayment',
      title: 'totalPartPayment',
    }
    ,{
      data: 'balance',
      title: 'balance',
    }
    
  //   {
  //     'name': 'type',
  //   }, {
  //     'name': 'title',
  //   }, {
  //   'name': 'description',
  // },{
  //   'name': 'noOfYears', 
  // },{
  //   'name': 'amount', 
  // }
  ];
  public lastLoanData: any = {};
 
  public pieChartOptions: any = { 
    
    chart: {
        type: 'pie',
        renderTo: 'pie-chart-container'
    },
    title: {
        text: 'Browser Market Share'
    },
    series: [{
        name: 'Investment',
        data: []
    }],
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name} ({point.y}) </b>: {point.percentage:.1f} %'
          }
      }
  },
  legend: {
      enabled: true,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 1
  }
  };;
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
      { name: 'New York', data: [4, 3, 2, 8, 7] },
      { name: 'London', data: [3, 4, 6, 10, 15] },
      { name: 'London', data: [5, 4, 6, 8, 11] }
  ]
  };
  updateFlag: any = 0;
  InstallmentAmount: any = 0;
  form: any = {
    amount: {
      value: 7500000
    },
    rate: {
      value: 8.6
    },
    tenure: {
      value: 15
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
  
  
  constructor(public chartService: ChartService, public calculatorService: CalculatorService) { }

  ngOnInit(): void {
    // console.log(this.lineChartOptions)
  }
 
  getChartDataFormat = (data: any, groupByKey: any, sumKey: any) => {
    return _.map(_.groupBy(data, groupByKey), (v,idx) => { return { name: idx, 
      y: _.sumBy(v, sumKey) }})
  }

  calculate = () => {
    const form = this.form;
    const emiAmount: any = parseFloat(form.emi.value) === 0 ? this.calculatorService.emi(form.amount.value, form.rate.value, form.tenure.value) : parseFloat(form.emi.value);
    form.emi.value = emiAmount;
    const data: any = this.calculatorService.emiTable(Number(form.amount.value), Number(form.rate.value), Number(form.tenure.value), Number(form.emi.value), Number(form.growthRate.value), parseFloat(form.additionalAmount.value));
    const sipAmount = Number(form.emi.value) * 0.30;
    const investmentData = this.calculatorService.investmentTable(sipAmount, 12, Number(parseInt((data.length/12).toString())), 10, 0);
    const finalData = _.values(_.merge(_.keyBy(data, 'month'), _.keyBy(investmentData, 'month')));
    this.loanData = finalData;
    const last: any = _.last(data);
    last.totalAmount = form.amount.value + last.totalInterest;
    this.lastLoanData = last;
    
    const lineChartOptions = JSON.parse(JSON.stringify(CHART_OPTIONS_ONE));
    lineChartOptions.series = [
        { name: 'totalPrincipal', data: _.map(data, 'totalPrincipal') },
        { name: 'totalInterest', data: _.map(data, 'totalInterest') },
        { name: 'balance', data: _.map(data, 'balance') },
        { name: 'totalAmount', data: _.map(investmentData, 'totalAmount') },
        { name: 'totalMonthlyInterest', data: _.map(investmentData, 'totalMonthlyInterest') },
      ];
    this.lineChartOptions = JSON.parse(JSON.stringify(lineChartOptions));
    this.updateFlag = !this.updateFlag;

    // this.pieChartOptions.series[0].data = [
    //   { name: 'totalPrincipal', y: _.get(last, 'totalPrincipal', 0) },
    //   { name: 'totalInterest', y: _.get(last, 'totalInterest', 0) },
    //   { name: 'totalPartPayment', y: _.get(last, 'totalPartPayment', 0) },
    // ];
    // // this.lineChartOptions.xAxis.categories = _.map(this.loanData, 'month');
    // this.lineChartOptions.series = [
    //   {
    //     name: 'principal',
    //     data: _.map(this.loanData, 'principal')
    //   },
    //   {
    //     name: 'interest',
    //     data: _.map(this.loanData, 'interest')
    //   }
    // ]
    // console.log(this.lineChartOptions)
    // this.updateFlag = !this.updateFlag;
    
  }
}