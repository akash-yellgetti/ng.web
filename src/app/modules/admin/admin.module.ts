import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { LayoutModule } from '../layout/layout.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormBuilderModule } from '../form-builder/form-builder.module';
import { RoleComponent } from './role/role.component';
import { MenuComponent } from './menu/menu.component';
import { ConstantComponent } from './constant/constant.component';


@NgModule({
  declarations: [
    UserComponent,
    RoleComponent,
    MenuComponent,
    ConstantComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormBuilderModule,
    LayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
