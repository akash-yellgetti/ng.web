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
import Swal from 'sweetalert2'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  public emiData: any = [];
  public investmentData: any = [];
 

  public emiColumns: any = [
    {
      data: 'month',
      title: 'month',
    }
    ,{
      data: 'principal',
      title: 'principal',
    }
    ,{
      data: 'emi',
      title: 'emi',
    }
    ,{
      data: 'principalPayment',
      title: 'principalPayment',
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
      data: 'partPaymentAmount',
      title: 'partPaymentAmount',
    }
    ,{
      data: 'remainingPrincipal',
      title: 'remainingPrincipal',
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
      data: 'monthlySum',
      title: 'monthlySum',
    },
    {
      data: 'monthlyInterest',
      title: 'monthlyInterest',
    },
    {
      data: 'totalAmount',
      title: 'totalAmount',
    },
    {
      data: 'totalInvestmentAmount',
      title: 'totalInvestmentAmount',
    }
  ];

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
      value: 30
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
    this.emiData = this.calculatorService.emiTable(goal.amount.value, goal.rate.value, goal.tenure.value, parseFloat(goal.emi.value), parseFloat(goal.partPaymentAmount.value), parseFloat(goal.increaseEmi.value));
    this.investmentData = this.calculatorService.stepUpSipTable(this.calculatorService.percentageValue(emiAmount, goal.investPercentEmi.value), goal.investmentROI.value, goal.increaseEmi.value, parseFloat((this.emiData.length/12).toFixed(2)));
    
    
  }
}
