import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { RoutineComponent } from './components/routine/routine.component';
import { GoalComponent } from './components/goal/goal.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { RoutineSchedulerComponent } from './components/routine-scheduler/routine-scheduler.component';
import { FireComponent } from './components/fire/fire.component';

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
    path: 'routine-scheduler',
    component: RoutineSchedulerComponent
  },
  {
    path: 'goal',
    component: GoalComponent
  },
  {
    path: 'fire',
    component: FireComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'investment',
    component: InvestmentComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
