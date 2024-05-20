import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pieChartOptions } from '../../../../shared/components/chart/chart-options';
import { BudgetService } from '../../services/api/budget/budget.service';
import { FieldService } from '../../../../shared/services/field/field.service';
import { PlannerService } from '../../services/api/planner/planner.service';
import * as _ from 'lodash';
import { forms } from 'src/app/shared/json/forms.json';

declare var $: any;

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  public form: any = forms.plannerForm;
  public categories: any = [
    {
      name: 'loan',
      title: 'Loan',
      items: []
    },
    {
      name: 'goal',
      title: 'Goal',
      items: []
    },
    {
      name: 'credit-card',
      title: 'Credit-Card',
      items: []
    },
    {
      name: 'investment',
      title: 'Investment',
      items: []
    },
    {
      name: 'lended',
      title: 'Lended',
      items: []
    },
    {
      name: 'borrowed',
      title: 'Borrowed',
      items: []
    },
    
  ]
  data: any = [];
  public pieChartOptions: any = JSON.parse(JSON.stringify(pieChartOptions));;
  updateFlag: any = 0;
   

  constructor(
    private cdr: ChangeDetectorRef, 
    private activatedRoute: ActivatedRoute,
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
    console.log(this.data); 
    
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

}
