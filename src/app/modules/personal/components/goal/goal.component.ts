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
  public data: any = goals;
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
      'name': 'type',
    }, {
      'name': 'title',
    }, {
    'name': 'description',
  },{
    'name': 'noOfYears', 
  },{
    'name': 'amount', 
  }
  ];
  chartOptions: any = {
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
  updateFlag: any = false;
  goal: any = {
    amount: {
      value: 10000
    },
    rate: {
      value: 12
    },
    tenure: {
      value: 5
    }
  }
  selected: any = [];
  SelectionType = SelectionType;
  constructor(private fb: FormBuilder, public chartService: ChartService,
    public calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.selected = _.filter(this.data, (r: any) => r && r.currentSlot === true);
    console.log(this.selected)
    this.chartOptions.series =  [{
      name: 'Principal',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
          194.1, 95.6, 54.4]

  }, {
      name: 'Interest',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
          106.6, 92.3]
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
    const sipAmount: any = this.calculatorService.SIPAmount(goal.amount.value, goal.rate.value, goal.tenure.value);
    const data: any = this.calculatorService.getSIPAmountGrid(parseFloat(sipAmount), goal.rate.value, goal.tenure.value);
    const principal: any = _.values(_.mapValues(data, 'monthlyAmount'));
    this.chartOptions.series[0].data = principal;
    const Interest: any = _.values(_.mapValues(data, 'monthlyInterest'));
    this.chartOptions.series[1].data = Interest;
    // console.log(this.chartOptions.series)
    console.log(data);
    this.updateFlag = true;
  }
}
