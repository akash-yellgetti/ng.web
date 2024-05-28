import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { budget } from '../../../../shared/json/budet.json';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { pieChartOptions } from '../../../../shared/components/chart/chart-options';
import { BudgetService } from '../../services/api/budget/budget.service';
import { FieldService } from '../../../../shared/services/field/field.service';
import { forms } from '../../../../shared/json/forms.json';
import { CalculatorService } from 'src/app/modules/calculator/services/calculator.service';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  @ViewChild ('budgetForm') budgetForm: any;
  public data: any = [];
  public form: any = forms.budgetForm;
  public budgetData: any = [];
  public budgetColumn: any = [
    // {
    //   name: 'category',
    //   title: 'category',
    //   data: 'category',
    // },
    // {
    //   name: 'subcategory',
    //   title: 'Category',
    //   data: 'subcategory',
    // },
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
  type: string = 'income';
  typeWise: any = {};
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
    private toastr: ToastrService,
    private loaderService: LoaderService,
    private calculationService: CalculatorService,
    private fieldService: FieldService,
    private budgetService: BudgetService
  ) {
    
  }
  
  ngOnInit(): void {
    this.data = this.activatedRoute.snapshot.data.budget.data;
    this.fieldService.resetForm(this.form);
    this.loaderService.hideLoader();
    this.refreshDatatableAndChart('income');
  }

  refreshDatatableAndChart = (type: string) => {
    this.type = type;
    const typeWise = _.reduce(
      _.groupBy(this.data, 'type'),
      (o: any, v, k) => {
        o[k] = _.sum(_.map(v, 'amount'));
        return o;
      },
      {}
    );
    this.typeWise = typeWise;
    this.budgetData = _.filter(this.data, (v) => {
      return v.type === type;
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

  save = () => {
    const self = this;

    const fieldServiceObj = this.fieldService.validateForm(this.form, false);
    if (fieldServiceObj.getErrorsCount() > 0 ){
      // const errors = fieldServiceObj.getErrors();
      // this.fieldService.setToastr(errors);
      self.form = fieldServiceObj.getFields();
      return;
    }

    const json = this.fieldService.json(this.form);
    this.budgetService.createBudget(json).subscribe((res) => {
      if(res && res.status) {
        this.toastr.success('Budget Record Created Successfully');
        this.refreshData();
        $(this.budgetForm.nativeElement).modal('toggle'); 
      }
      
    });

    // return true; // Add this line to return a value
  };

  refreshData = () => {
    this.budgetService.getDetail().subscribe((d: any) => {
      this.data = d.data;
      this.refreshDatatableAndChart(this.type);
    });
  }

  getPercentage = (type: string) => {
    const total = this.typeWise.income;
    return this.calculationService.getPercentage(Number(this.typeWise[type]), Number(total)) || 0;
  }

  getIncomeUtilization = () => {
    const totalSpend: number = Number(this.typeWise?.expense || 0) + Number(this.typeWise?.goal || 0) + Number(this.typeWise?.investment || 0);
    const incomeBalance: number = Number(this.typeWise.income) - Number(totalSpend);
    this.typeWise.incomeBalance = incomeBalance;
    // console.log('totalSpend', );
    return this.calculationService.round2Decimal(this.calculationService.getPercentage(incomeBalance, Number(this.typeWise.income)))  || 0;
  }

  getCategories = (category: any) => {
    this.loaderService.showLoader();
    this.fieldService.getSelectData(category).subscribe((res: any) => {
      if(res && res.status) {
        category.options = res.data.map( (r: any) => {
          return {
            key: r[category.ajax.option.key],
            value: r[category.ajax.option.value],
          };
        });
        this.loaderService.hideLoader();
      }
    });
  }

  categoryTriggerSelect = (value: any) => {
    const self = this;
    const field = self.form.category;
    if(field.triggerSelect) {
      self.form[field.triggerSelect].options = [];
      const triggerfield = this.form[field.triggerSelect];
      triggerfield.ajax.data.parentCode = field.value;
      self.getCategories(triggerfield);
    }
     
  }

  subcategoryTriggerSelect = (value: any) => {
     
  }

  addBudget = (value: any) => {
    // console.log(this.budgetForm.nativeElement)
    let form = _.cloneDeep(this.form);
    // this.form = null
    // this.cdr.detectChanges();
    form = this.fieldService.resetForm(form);
    form.type.value = value;
    form.category.ajax.data.parentCode = value;
    this.getCategories(form.category);
    this.form = form;
    this.type = value;
    $('#addBudgetModal').modal('show');
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
