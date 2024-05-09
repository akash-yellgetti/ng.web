import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pieChartOptions } from '../../../../shared/components/chart/chart-options';
import { BudgetService } from '../../services/api/budget/budget.service';
import { FieldService } from '../../../../shared/services/field/field.service';
import { PlannerService } from '../../services/api/planner/planner.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  public form: any = {
    
    type: {
      value: 'loan',
    },
    title: {
      value: 'Home Loan',
    },
    description: {
      value: '#HL',
    },
    amount: {
      value: 100000,
    },
    rate: {
      value: 9,
    },
    tenure: {
      value: 100000,
    },
  };
  categories = [
    {
      name: 'Loan',
      title: 'Loan',
    },
    {
      name: 'goal',
      title: 'goal'
    },
    {
      name: 'credit-card',
      title: 'Credit-Card'
    },
    {
      name: 'investment',
      title: 'Investment'
    },
    {
      name: 'lended',
      title: 'Lended'
    },
    {
      name: 'borrowed',
      title: 'Borrowed'
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
    this.data = this.activatedRoute.snapshot.data.planner.data;
    console.log(this.data);  
  }

  save = () => {
    const json = this.fieldService.json(this.form);
    this.plannerService.createPlanner(json).subscribe((res: any) => {
      console.log(res);
    })
  };

}
