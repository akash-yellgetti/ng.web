import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './components/loan/loan.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { FireComponent } from './components/fire/fire.component';
import { GoalComponent } from './components/goal/goal.component';

const routes: Routes = [
  {
    path: 'loan',
    component: LoanComponent
  },
  {
    path: 'investment',
    component: InvestmentComponent
  },
  {
    path: 'goal',
    component: GoalComponent
  },
  {
    path: 'fire',
    component: FireComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
