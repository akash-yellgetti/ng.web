import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator/calculator.service';
import * as _ from 'lodash';
import { CHART_OPTIONS_ONE } from 'src/app/shared/components/chart/chart-options';
@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  updateFlag: any = 0;
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
      { name: 'London', data: [3, 4, 6, 10, 15] }
    ]
  };
  form: any = {
    amount: {
      value: 22500
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
  investment: any = {

    sip: {
      form: {
        monthlyAmount: {
          value: 25000
        },
        roi: {
          value: 12
        },
        tenure: {
          value: 10
        },
        growth: {
          value: 10
        },
        extra: {
          value: 2
        },
      },
      result: {

      }
    },

    stepUpSip: {
      form: {
        monthlyAmount: {
          value: 25000
        },
        roi: {
          value: 12
        },
        tenure: {
          value: 10
        },
        growth: {
          value: 10
        },
        extra: {
          value: 2
        },
      },
      result: {
        
      }
    },

    loan: {
      form: {
        monthlyAmount: {
          value: 25000
        },
        roi: {
          value: 12
        },
        tenure: {
          value: 10
        },
        growth: {
          value: 10
        },
        extra: {
          value: 2
        },
      },
      result: {
        
      }
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

  
  constructor(public calculatorService: CalculatorService, private cdr: ChangeDetectorRef)  { }

  ngOnInit(): void {
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
    const lineChartOptions = JSON.parse(JSON.stringify(CHART_OPTIONS_ONE));
    lineChartOptions.series = [
        { name: 'monthlySum', data: _.map(investmentData, 'monthlySum') },
        { name: 'totalExtraAmount', data: _.map(investmentData, 'totalMonthlyAmount') },
        { name: 'monthlyInterest', data: _.map(investmentData, 'monthlyInterest') },
      ];
    this.lineChartOptions = JSON.parse(JSON.stringify(lineChartOptions));
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
