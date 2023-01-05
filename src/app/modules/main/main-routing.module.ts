import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth/auth.guard';
import { BlankComponent } from './components/blank/blank.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SettingComponent } from './components/setting/setting.component';

const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
      {
        path: 'blank',
        component: BlankComponent
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'socio-safety',
        loadChildren: () => import('../socio-safety/socio-safety.module').then(m => m.SocioSafetyModule)
      },
      {
        path: 'service',
        loadChildren: () => import('../service/service.module').then(m => m.ServiceModule)
      },
      {
          path: 'accounts',
          loadChildren: () => import('../accounts/accounts.module').then(m => m.AccountsModule)
      },
      {
          path: 'tracker',
          loadChildren: () => import('../tracker/tracker.module').then(m => m.TrackerModule)
      },
      {
          path: 'communication',
          loadChildren: () => import('../communication/communication.module').then(m => m.CommunicationModule)
      },
      {
          path: 'user',
          loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      },
      {
          path: 'market',
          loadChildren: () => import('../market/market.module').then(m => m.MarketModule)
      },
      { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
      // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
