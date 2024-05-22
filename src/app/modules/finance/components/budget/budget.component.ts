import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { budget } from 'src/app/shared/json/budet.json';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { pieChartOptions } from '../../../../shared/components/chart/chart-options';
import { BudgetService } from '../../services/api/budget/budget.service';
import { FieldService } from '../../../../shared/services/field/field.service';
import { forms } from 'src/app/shared/json/forms.json';
import { CalculatorService } from 'src/app/shared/services/calculator/calculator.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  public data: any = [];
  public form: any = forms.budgetForm;
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
    columnNames:  [ 'Income','Expense'],
    chartOptions: { 
      
    },
    width: 400,
    height: 400
  };
  updateFlag: any = true;
  constructor(
    private cdr: ChangeDetectorRef, 
    private activatedRoute: ActivatedRoute,
    private calculationService: CalculatorService,
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
    const chartOptions = { ...this.chartOptions };
    // console.log(this.budgetData)
    this.chartOptions = null;
    this.chartOptions = { ...chartOptions, data: [] };
    this.chartOptions.data = _.reduce(this.budgetData, (a: any, v: any, k) => {
      a.push([v.title, v.amount]);
      return a;
    }, []);
    console.log(this.chartOptions)
    this.cdr.detectChanges();
  };

  getChartDataFormat = (data: any, groupByKey: any, sumKey: any) => {
    return _.map(_.groupBy(data, groupByKey), (v, idx) => {
      return { name: idx, y: _.sumBy(v, sumKey) };
    });
  };

  save = (): void => {

    const errors = this.fieldService.validateForm(this.form);
    if (Object.keys(errors).length > 0 ){
      this.fieldService.setToastr(errors)
      return;
    }

    const json = this.fieldService.json(this.form);
    this.budgetService.createBudget(json).subscribe((res) => {
      this.refreshData();
    });

    // return true; // Add this line to return a value
  };

  refreshData = () => {
    this.budgetService.getDetail().subscribe((d: any) => {
      this.data = d.data;
      this.refreshDatatableAndChart(this.category);
    });
  }

  getPercentage = (category: string) => {
    const total = this.categoryWise.income;
    return this.calculationService.getPercentage(Number(this.categoryWise[category]), Number(total)) || 0;
  }

  getIncomeUtilization = () => {
    const total = Number(this.categoryWise?.expense || 0) + Number(this.categoryWise?.want || 0) + Number(this.categoryWise?.investment || 0);
    return this.calculationService.getPercentage(total, Number(this.categoryWise.income))  || 0;
  }

  addBudget = (value: any) => {
    const form = this.form;
    this.form = null
    this.cdr.detectChanges();
    this.form = form;
    this.form.type.value = value;
    this.form.category.ajax.data.parentCode = value;
    this.cdr.detectChanges();
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
