import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { PlannerComponent } from './components/planner/planner.component';
import { IncomeTaxComponent } from './components/income-tax/income-tax.component';


const routes: Routes = [
  {
    path: 'budget',
    component: BudgetComponent
  },
  {
    path: 'planner',
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
