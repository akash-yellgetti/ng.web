import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './components/user/user.component';
import { LayoutModule } from '../layout/layout.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormBuilderModule } from '../form-builder/form-builder.module';
import { RoleComponent } from './components/role/role.component';
import { MenuComponent } from './components/menu/menu.component';
import { ConstantComponent } from './components/constant/constant.component';


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
