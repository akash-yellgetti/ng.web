import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { BudgetComponent } from './components/budget/budget.component';
import { PlannerComponent } from './components/planner/planner.component';
import { IncomeTaxComponent } from './components/income-tax/income-tax.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BudgetComponent,
    PlannerComponent,
    IncomeTaxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
