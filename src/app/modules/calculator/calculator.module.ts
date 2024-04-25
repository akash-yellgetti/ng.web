import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { LoanComponent } from './components/loan/loan.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { SharedModule } from '../..//shared/shared.module';
import { FireComponent } from './components/fire/fire.component';
import { GoalComponent } from './components/goal/goal.component';


@NgModule({
  declarations: [
    LoanComponent,
    InvestmentComponent,
    FireComponent,
    GoalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
