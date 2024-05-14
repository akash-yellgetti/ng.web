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
    // {
    //   name: 'category',
    //   title: 'category',
    //   data: 'category',
    // },
    {
      name: 'subcategory',
      title: 'Category',
      data: 'subcategory',
    },
    {
      name: 'title',
      title: 'Title',
      data: 'title',
    },
    {
      name: 'description',
      title: 'Description',
      data: 'description',
    },
    {
      name: 'amount',
      title: 'Amount',
      data: 'amount',
    },
  ];
  category: string = 'income';
  categoryWise: any = {};
  chartOptions: any = {
    type: 'PieChart',
    data: [],
    columnNames:  ['Year', 'Income','Expense'],
    chartOptions: { 
      
    },
    width: 1500,
    height: 400
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
    
    this.refreshDatatableAndChart('income');
  }

  refreshDatatableAndChart = (category: string) => {
    this.category = category;
    const categoryWise = _.reduce(
      _.groupBy(this.data, 'category'),
      (o: any, v, k) => {
        o[k] = _.sum(_.map(v, 'amount'));
        return o;
      },
      {}
    );
    this.categoryWise = categoryWise;
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
      this.refreshData();
    })
  };

  refreshData = () => {
    this.budgetService.getDetail().subscribe((d: any) => {
      this.data = d.data;
      this.refreshDatatableAndChart(this.category);
    });
  }

  addBudget = (value: any) => {
    this.form.category.value = value;
  }

  delete = (data: any) => {
    console.log(data)
    const promises = [];
    
    for (const d of data) {
      promises.push(this.budgetService.deleteBudget({ id: d._id }).toPromise());
    }

    const result = Promise.all(promises);
    this.refreshData();
  }

  edit = (data: any) => {
    console.log(data)
  }
}
