import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { BudgetComponent } from './components/budget/budget.component';
import { RoutineComponent } from './components/routine/routine.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoalComponent } from './components/goal/goal.component';
import { TransactionComponent } from './components/transaction/transaction.component';


@NgModule({
  declarations: [
    BudgetComponent,
    RoutineComponent,
    GoalComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
