import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth/auth.guard';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
