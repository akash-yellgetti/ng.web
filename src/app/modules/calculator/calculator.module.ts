import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { LoanComponent } from './components/loan/loan.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { SharedModule } from '../..//shared/shared.module';


@NgModule({
  declarations: [
    LoanComponent,
    InvestmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
