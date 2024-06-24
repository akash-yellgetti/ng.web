import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StepperComponent } from 'src/app/shared/components/stepper/stepper.component';
import { EntryGuard } from 'src/app/shared/guards/entry/entry.guard';

const routes: Routes = [
  {
    path: 'entry',
    component: StepperComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [AuthGuard, EntryGuard],
    canActivateChild: [AuthGuard, EntryGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
          path: 'user',
          loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      },
      {
          path: 'finance',
          loadChildren: () => import('../finance/finance.module').then(m => m.FinanceModule)
      },
      {
        path: 'calculator',
        loadChildren: () => import('../calculator/calculator.module').then(m => m.CalculatorModule)
      },
      // { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
      // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
