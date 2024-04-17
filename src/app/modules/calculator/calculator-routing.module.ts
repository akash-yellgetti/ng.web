import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './components/loan/loan.component';
import { InvestmentComponent } from './components/investment/investment.component';

const routes: Routes = [
  {
    path: 'loan',
    component: LoanComponent
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
export class CalculatorRoutingModule { }
