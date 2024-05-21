import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { ChartService } from '../../../../shared/services/chart/chart.service';
import * as _ from 'lodash';
import { FieldService } from '../../../../shared/services/field/field.service';
import { CHART_OPTIONS_ONE, columnChartOptions, lineChartOptions, stackedBarChartOptions } from '../../../../shared/components/chart/chart-options';
import { forms } from 'src/app/shared/json/forms.json';
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
      title: 'Month',
    },
    // {
    //   data: 'loanAmount',
    //   title: 'loanAmount',
    // },
    {
      data: 'emi',
      title: 'EMI Amount',
    },
    {
      data: 'principal',
      title: 'Principal',
    },
    // {
    //   data: 'totalPrincipal',
    //   title: 'totalPrincipal',
    // },
    {
      data: 'interest',
      title: 'Interest',
    },
    // {
    //   data: 'totalInterest',
    //   title: 'totalInterest',
    // },
    {
      data: 'partPayment',
      title: 'Annual Part Payment',
    },
    // {
    //   data: 'totalPartPayment',
    //   title: 'totalPartPayment',
    // },
    {
      data: 'balance',
      title: 'Balance',
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
  // public lineChartOptions: any =  JSON.parse(JSON.stringify(lineChartOptions));
  public stackedBarChartOptions: any =  JSON.parse(JSON.stringify(stackedBarChartOptions));
  updateFlag: any = 0;
  InstallmentAmount: any = 0;
  form: any = forms.loanForm;

  constructor(
    public chartService: ChartService, 
    public calculatorService: CalculatorService, 
    private cdr: ChangeDetectorRef,
    private fieldService: FieldService
  )  { }

  ngOnInit(): void {
    // console.log(this.lineChartOptions)
  }

  ngAfterViewInit() {
    this.calculate();
  }
 
  getChartDataFormat = (data: any, groupByKey: any, sumKey: any) => {
    return _.map(_.groupBy(data, groupByKey), (v,idx) => { return { name: idx, 
      y: _.sumBy(v, sumKey) }})
  }

  calculate = () => {
    const form = this.form;
    const errors = this.fieldService.validateForm(form);
    if (Object.keys(errors).length > 0 ){
      this.fieldService.setToastr(errors)
      return;
    }
    const emiAmount: any = parseFloat(form.emi.value) === 0 ? this.calculatorService.emi(form.amount.value, form.rate.value, form.tenure.value) : parseFloat(form.emi.value);
    form.emi.value = emiAmount;
    const data: any = this.calculatorService.emiTable(Number(form.amount.value), Number(form.rate.value), Number(form.tenure.value), Number(form.emi.value), Number(form.growthRate.value), parseFloat(form.additionalAmount.value));
    const sipAmount = Number(form.emi.value) * 0.30;
    // const investmentData = this.calculatorService.investmentTable(sipAmount, 12, Number(parseInt((data.length/12).toString())), 0, 0);
    // const finalData = _.values(_.merge(_.keyBy(data, 'month'), _.keyBy(investmentData, 'month')));
    this.loanData = data;
    const last: any = _.last(data);
    last.totalAmount = Number(form.amount.value) + Number(last.totalInterest);
    this.lastLoanData = last;
    
    const stackedBarChartOptionss = JSON.parse(JSON.stringify(stackedBarChartOptions));
    stackedBarChartOptionss.series = [
      { name: 'interest', data: _.map(data, 'interest') },
      { name: 'principal', data: _.map(data, 'principal') },
      { name: 'partPayment', data: _.map(data, 'partPayment') }, 
      ];
    this.stackedBarChartOptions = JSON.parse(JSON.stringify(stackedBarChartOptionss));
     
  }
}