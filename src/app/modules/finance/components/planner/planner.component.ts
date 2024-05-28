import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pieChartOptions } from '../../../../shared/components/chart-google/chart-google.json';
import { BudgetService } from '../../services/api/budget/budget.service';
import { FieldService } from '../../../../shared/services/field/field.service';
import { PlannerService } from '../../services/api/planner/planner.service';
import * as _ from 'lodash';
import { forms } from 'src/app/shared/json/forms.json';
import { plannerCategories } from './planner.json';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

declare var $: any;

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  public form: any = forms.plannerForm;
  public categories: any =  plannerCategories;
  data: any = [];
  public pieChartOptions: any = JSON.parse(JSON.stringify(pieChartOptions));;
  public assetsChartOptions: any = JSON.parse(JSON.stringify(pieChartOptions));
  public liabilityChartOptions: any = JSON.parse(JSON.stringify(pieChartOptions));
  public goalChartOptions: any = JSON.parse(JSON.stringify(pieChartOptions));
  updateFlag: any = 0;
   

  constructor(
    private cdr: ChangeDetectorRef, 
    private activatedRoute: ActivatedRoute,
    private loaderService: LoaderService,
    private fieldService: FieldService,
    private plannerService: PlannerService
  ) {
    
  }
  
  ngOnInit(): void {
    this.data = _.map(this.categories, (item: any) => {
      
      const items: any[] = _.filter(this.activatedRoute.snapshot.data.planner.data, { type: item.name }) || [];
      _.set(item, 'items', items || []);
      _.set(item, 'total', _.sumBy(items, 'amount'));
      // console.log(item.items);
      return item;
    }) 
    this.loaderService.hideLoader();
    // console.log(this.data); 
    this.refreshDatatableAndChart('investment');
  }

  addPlanner = (category: any) => {
    this.form.type.value = category.name;
  }

  save = () => {
    const errors = this.fieldService.validateForm(this.form);
    console.log(errors)
    if (Object.keys(errors).length > 0 ){
      this.fieldService.setToastr(errors)
      return;
    }
    const json = this.fieldService.json(this.form);
    this.plannerService.createPlanner(json).subscribe((res: any) => {
      console.log(res);
      $('#addPlannerModal').modal('hide');
    })
  };


  refreshDatatableAndChart = (type: string = 'investment') => {
    const assetsChartOptions = { ...this.assetsChartOptions };
    // console.log(this.budgetData)
    this.assetsChartOptions = null;
    this.assetsChartOptions = { ...assetsChartOptions, data: [] };
    this.assetsChartOptions.data = _.reduce(_.find(this.data, { name: type }).items, (a: any, v: any, k) => {
      a.push([v.title, v.principalAmount]);
      return a;
    }, []);
    this.assetsChartOptions.total = _.sumBy(_.find(this.data, { name: type }).items, 'principalAmount');
    console.log(this.assetsChartOptions)
    this.cdr.detectChanges();
  };

}
