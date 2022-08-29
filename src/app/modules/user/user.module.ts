import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PersonalFinanceComponent } from './personal-finance/personal-finance.component';
import { MaterialModule } from '../common/material.module';


@NgModule({
  declarations: [
    PersonalFinanceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule
  ]
})
export class UserModule { }
