import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { RoutineComponent } from './components/routine/routine.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { RoutineSchedulerComponent } from './components/routine-scheduler/routine-scheduler.component';
import { FinancialComponent } from './components/financial/financial.component';

const routes: Routes = [
  {
    path: 'budget',
    component: BudgetComponent
  },
  {
    path: 'financial',
    component: FinancialComponent
  },
  {
    path: 'routine',
    component: RoutineComponent
  },
  {
    path: 'routine-scheduler',
    component: RoutineSchedulerComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  },
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
