import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { RoutineComponent } from './components/routine/routine.component';
import { GoalComponent } from './components/goal/goal.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  {
    path: 'budget',
    component: BudgetComponent
  },
  {
    path: 'routine',
    component: RoutineComponent
  },
  {
    path: 'goal',
    component: GoalComponent
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
