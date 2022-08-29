import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalFinanceComponent } from './personal-finance/personal-finance.component';

const routes: Routes = [
  {
    path: 'personal-finance',
    component: PersonalFinanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
