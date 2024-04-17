import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator/calculator.service';
import * as _ from 'lodash';
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

  
  constructor(public calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  calculate = () => {
    const form = this.form;
    this.investmentData = this.calculatorService.investmentTable(Number(form.amount.value), Number(form.rate.value), Number(form.tenure.value), Number(form.growthRate.value), Number(form.additionalAmount.value));
    const last = _.last(this.investmentData);
    this.lastInvestmentData = last;
    this.pieChartOptions.series[0].data = [
      { name: 'totalMonthlyAmount', y: _.get(last, 'totalMonthlyAmount', 0) },
      { name: 'totalExtraAmount', y: _.get(last, 'totalExtraAmount', 0) },
      { name: 'totalMonthlyInterest', y: _.get(last, 'totalMonthlyInterest', 0) },
    ];
    this.updateFlag = !this.updateFlag;
    // [
    //   {
    //     name: 'totalMonthlyAmount',
    //     data: [_.get(last, 'totalMonthlyAmount', 0)]
    //   },
    //   {
    //     name: 'totalExtraAmount',
    //     data: [_.get(last, 'totalExtraAmount', 0)]
    //   },
    //   {
    //     name: 'totalMonthlyInterest',
    //     data: [_.get(last, 'totalMonthlyInterest', 0)]
    //   },
      
    // ]
    
    
  }
}
