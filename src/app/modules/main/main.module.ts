import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HelpComponent } from './components/help/help.component';
import { SettingComponent } from './components/setting/setting.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlankComponent } from './components/blank/blank.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HelpComponent,
    SettingComponent,
    HomeComponent,
    DashboardComponent,
    BlankComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    
  ]
})
export class MainModule { }
