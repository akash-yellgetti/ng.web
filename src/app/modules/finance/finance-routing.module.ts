import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetCommonComponent } from './components/budget-common/budget-common.component';
import { BudgetComponent } from './components/budget/budget.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenseCommonComponent } from './components/expense-common/expense-common.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { IncomeComponent } from './components/income/income.component';
import { LoanComponent } from './components/loan/loan.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'budget',
    component: BudgetComponent,
    children: [
      {
        path: 'income',
        component: IncomeComponent,
        children:  [

          {
            path: 'salary',
            component: ExpenseCommonComponent
          },
          {
            path: 'business',
            component: ExpenseCommonComponent
          },
          {
            path: 'rental',
            component: ExpenseCommonComponent
          },
        ]
      },
      {
        path: 'expense',
        component: ExpenseComponent,
        children:  [

          {
            path: 'house-hold',
            component: ExpenseCommonComponent
          },

          {
            path: 'insurance',
            component: ExpenseCommonComponent
          },
          {
            path: 'donation',
            component: ExpenseCommonComponent
          },

          {
            path: 'gift',
            component: ExpenseCommonComponent
          },
          {
            path: 'insurance',
            component: ExpenseCommonComponent
          },
          {
            path: 'investment',
            component: ExpenseCommonComponent
          },

          {
            path: 'transportation',
            component: ExpenseCommonComponent
          },
          {
            path: 'entertainment',
            component: ExpenseCommonComponent
          },
          {
            path: 'personal-care',
            component: ExpenseCommonComponent
          },
          {
            path: 'pets',
            component: ExpenseCommonComponent
          },
          {
            path: 'food',
            component: ExpenseCommonComponent
          },
          {
            path: 'insurance',
            component: ExpenseCommonComponent
          },
          {
            path: 'loan',
            component: ExpenseCommonComponent
          },
          {
            path: 'credit-card',
            component: ExpenseCommonComponent
          },
          {
            path: 'vehicle',
            component: ExpenseCommonComponent
          },
          {
            path: 'saving',
            component: ExpenseCommonComponent
          },
          {
            path: 'taxes',
            component: ExpenseCommonComponent
          },
          {
            path: 'legal',
            component: ExpenseCommonComponent
          }
        ]
       
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
