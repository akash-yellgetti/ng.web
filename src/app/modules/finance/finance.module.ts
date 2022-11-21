import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoanComponent } from './components/loan/loan.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoanComponent
  ],
  imports: [
    SharedModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
