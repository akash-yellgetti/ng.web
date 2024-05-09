import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { PlannerComponent } from './components/planner/planner.component';
import { IncomeTaxComponent } from './components/income-tax/income-tax.component';
import { BudgetResolver } from './resolver/budget/budget.resolver';
import { PlannerResolver } from './resolver/planner/planner.resolver';


const routes: Routes = [
  {
    path: 'budget',
    resolve: { budget: BudgetResolver },
    component: BudgetComponent
  },
  {
    path: 'planner',
    resolve: { data: PlannerResolver },
    component: PlannerComponent
  },
  {
    path: 'income-tax',
    component: IncomeTaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
