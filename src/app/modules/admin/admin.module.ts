import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { LayoutModule } from '../layout/layout.module';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
