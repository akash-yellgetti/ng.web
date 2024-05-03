import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { BudgetComponent } from './components/budget/budget.component';
import { RoutineComponent } from './components/routine/routine.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionComponent } from './components/transaction/transaction.component';
import { RoutineSchedulerComponent } from './components/routine-scheduler/routine-scheduler.component';
import { FireComponent } from './components/fire/fire.component';
import { FinancialComponent } from './components/financial/financial.component';


@NgModule({
  declarations: [
    BudgetComponent,
    RoutineComponent,
    TransactionComponent,
    RoutineSchedulerComponent,
    FireComponent,
    FinancialComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
