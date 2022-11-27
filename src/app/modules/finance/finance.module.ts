import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoanComponent } from './components/loan/loan.component';
import { BudgetComponent } from './components/budget/budget.component';
import { BudgetCommonComponent } from './components/budget-common/budget-common.component';
import { IncomeComponent } from './components/income/income.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { ExpenseCommonComponent } from './components/expense-common/expense-common.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoanComponent,
    BudgetComponent,
    BudgetCommonComponent,
    IncomeComponent,
    ExpenseComponent,
    ExpenseCommonComponent
  ],
  imports: [
    SharedModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
