import { Component, OnInit } from '@angular/core';
  import * as _ from 'lodash';
  import { SelectionType } from '@swimlane/ngx-datatable';
  import { goals } from 'src/app/shared/json/goals.json';
  import { CalculatorService } from 'src/app/shared/services/calculator/calculator.service';
  import { ChartService } from 'src/app/shared/services/chart/chart.service';
  import { NavigationExtras, Router } from '@angular/router';
  import { ModuleService } from '../../../main/core/services/module.service';
  import { LocalStorageService } from 'ngx-webstorage';
  import { MatDialog } from '@angular/material/dialog';
  import { FormBuilder, FormControl, Validators } from '@angular/forms';
  import { FieldService } from 'src/app/shared/services/field/field.service';
  import { setting } from '../../../../shared/json/setting.json';
  import { ImageCroppedEvent } from 'ngx-image-cropper';
  
@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss']
})
export class FireComponent implements OnInit {
    public data: any = [];
    public profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
      dob: [null, Validators.required],
      mobileNo: [null, Validators.required],
      email: [null, []],
    });
  
    public columns: any = [
      {
        data: 'month',
        title: 'month',
      },
      {
        data: 'principal',
        title: 'principal',
      },
      {
        data: 'emi',
        title: 'emi',
      },
      {
        data: 'principalPayment',
        title: 'principalPayment',
      },
      {
        data: 'interest',
        title: 'interest',
      },
      {
        data: 'partPaymentAmount',
        title: 'partPaymentAmount',
      },
      {
        data: 'remainingPrincipal',
        title: 'remainingPrincipal',
      }
    ];
    chartOptions2: any = {
      title: {
        text: 'Balance Tracking Principal Loan and Investment',
        align: 'center',
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 70.67,
            // sliced: true,
            // selected: true
        }, {
            name: 'Edge',
            y: 14.77
        },    {
            name: 'Other',
            y: 2.6
        }]
      }]
    }
    chartOptions: any = {
      title: {
        text: 'Monthly Investment',
        align: 'center',
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 70.67,
            // sliced: true,
            // selected: true
        }, {
            name: 'Edge',
            y: 14.77
        },  {
            name: 'Firefox',
            y: 4.86
        }, {
            name: 'Safari',
            y: 2.63
        }, {
            name: 'Internet Explorer',
            y: 1.53
        },  {
            name: 'Opera',
            y: 1.40
        }, {
            name: 'Sogou Explorer',
            y: 0.84
        }, {
            name: 'QQ',
            y: 0.51
        }, {
            name: 'Other',
            y: 2.6
        }]
    }]
    }
    updateFlag: any = 0;
    InstallmentAmount: any = 0;
    goal: any = {
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
        value: 75000
      },
      partPaymentAmount: {
        value: 2
      },
      increaseEmi: {
        value: 10
      },
      investPercentEmi: {
        value: 10
      },
      investmentROI: {
        value: 12
      },
    }
    selected: any = [];
    SelectionType = SelectionType;
    constructor(private fb: FormBuilder, public chartService: ChartService,
      public calculatorService: CalculatorService) { }
  
    ngOnInit(): void {
      this.selected = _.filter(this.data, (r: any) => r && r.currentSlot === true);
      console.log(this.selected)
      this.chartOptions.series =  [  {
      name: 'partPaymentAmount',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
          106.6, 92.3]
  },
  {
    name: 'Interest',
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
        106.6, 92.3]
  },
  {
    name: 'Principal',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
        194.1, 95.6, 54.4]
  
  },
    
  ];
    }
  
    onSelect({ selected } : any) {
      console.log('Select Event', selected, this.selected);
    }
  
    getChartDataFormat = (data: any, groupByKey: any, sumKey: any) => {
      return _.map(_.groupBy(data, groupByKey), (v,idx) => { return { name: idx, 
        y: _.sumBy(v, sumKey) }})
    }
  
    getPrincipalMonthlyAmount = () => {
      const goal = this.goal;
      const emiAmount: any = parseFloat(goal.emi.value) === 0 ? this.calculatorService.emi(goal.amount.value, goal.rate.value, goal.tenure.value) : parseFloat(goal.emi.value);
      goal.emi.value = emiAmount;
      const data: any = this.calculatorService.emiTable(goal.amount.value, goal.rate.value, goal.tenure.value, parseFloat(goal.emi.value), parseFloat(goal.partPaymentAmount.value), parseFloat(goal.increaseEmi.value));
      console.table(data)
      const data1: any = _.map(_.chunk(data, 12), (v: any) => {
        return {
          "principal": _.sumBy(v, 'principal'),
          "emi": _.get(_.last(v), 'emi'),
          "principalPayment": _.sumBy(v, 'principalPayment'),
          "interest": _.sumBy(v, 'interest'),
          "partPaymentAmount": _.sumBy(v, 'partPaymentAmount'),
          "remainingPrincipal":_.get(_.last(v), 'remainingPrincipal'),
        }
      });
      console.log(data1);
      const principal: any = _.values(_.mapValues(data1, 'principalPayment'));
      // console.log(principal)
      this.chartOptions.series[2].data = principal;
      const Interest: any = _.values(_.mapValues(data1, 'interest'));
      this.chartOptions.series[1].data = Interest;
      const extraAmount: any = _.values(_.mapValues(data1, 'partPaymentAmount'));
      this.chartOptions.series[0].data = extraAmount;
      // console.log(this.chartOptions.series)
      // this.chartOptions.title = this.chartOptions.title + " : " + sipAmount;
      // console.log(data);
      this.updateFlag = new Date().getTime();
      // console.log(this.updateFlag)
      // this.updateFlag = this.updateFlag === false ? true : this.updateFlag;
      // console.log(this.updateFlag);
      // this.updateFlag =  !(this.updateFlag);
      this.data = data;
    }
  }
  