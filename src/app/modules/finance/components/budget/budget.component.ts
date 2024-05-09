import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { budget } from 'src/app/shared/json/budet.json';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { pieChartOptions } from '../../../../shared/components/chart/chart-options';
import { BudgetService } from '../../services/api/budget/budget.service';
import { FieldService } from '../../../../shared/services/field/field.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  public data: any = [];
  public form: any = {
    category: {
      value: 'income',
    },
    subcategory: {
      value: 'salary',
    },
    title: {
      value: 'BTS salary',
    },
    description: {
      value: '#salary',
    },
    amount: {
      value: 100000,
    },
  };
  public budgetData: any = [];
  public budgetColumn: any = [
    {
      name: 'category',
      title: 'category',
      data: 'category',
    },
    {
      name: 'subcategory',
      title: 'subcategory',
      data: 'subcategory',
    },
    {
      name: 'title',
      title: 'title',
      data: 'title',
    },
    {
      name: 'description',
      title: 'description',
      data: 'description',
    },
    {
      name: 'amount',
      title: 'amount',
      data: 'amount',
    },
  ];
   
  categoryWise: any = {};
  chartOptions: any = {
    data: [],
  };
  updateFlag: any = true;
  constructor(
    private cdr: ChangeDetectorRef, 
    private activatedRoute: ActivatedRoute,
    private fieldService: FieldService,
    private budgetService: BudgetService
  ) {
    
  }
  
  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data.budget.data;
    const categoryWise = _.reduce(
      _.groupBy(this.data, 'category'),
      (o: any, v, k) => {
        o[k] = _.sum(_.map(v, 'amount'));
        return o;
      },
      {}
    );
    this.categoryWise = categoryWise;
    this.refreshDatatableAndChart('income');
  }

  refreshDatatableAndChart = (category: string) => {
    this.budgetData = _.filter(this.data, (v) => {
      return v.category === category;
    });
    this.chartOptions = null;
    this.chartOptions = { data: [] };
    this.chartOptions.data = _.reduce(this.budgetData, (a: any, v: any, k) => {
      a.push([v.title, v.amount]);
      return a;
    }, []);
    this.cdr.detectChanges();
  };

  getChartDataFormat = (data: any, groupByKey: any, sumKey: any) => {
    return _.map(_.groupBy(data, groupByKey), (v, idx) => {
      return { name: idx, y: _.sumBy(v, sumKey) };
    });
  };

  save = () => {
    const json = this.fieldService.json(this.form);
    this.budgetService.createBudget(json).subscribe((res) => {
      console.log(res);
    })
  };
}
