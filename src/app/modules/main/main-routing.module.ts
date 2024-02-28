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
    // canActivate: [AuthGuard],
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
          path: 'user',
          loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      },
      {
          path: 'course',
          loadChildren: () => import('../lessons/course.module').then(m => m.CourseModule)
      },
      {
          path: 'school',
          loadChildren: () => import('../school/school.module').then(m => m.SchoolModule)
      },
      {
          path: 'personal',
          loadChildren: () => import('../personal/personal.module').then(m => m.PersonalModule)
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
