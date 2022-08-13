import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule as _LayoutModule } from '@angular/cdk/layout';
import { MainComponent } from './main/main.component';
import { MaterialModule } from 'src/app/material.module';
import { LeftNavigationComponent } from './main/left-navigation/left-navigation.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { CardComponent } from './main/view/card/card.component';
import { DatatableComponent } from './main/view/datatable/datatable.component';
import { PaginatorComponent } from './main/view/paginator/paginator.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { FormComponent } from './main/view/form/form.component';
import { FormBuilderModule } from '../form-builder/form-builder.module';



@NgModule({
  declarations: [MainComponent, LeftNavigationComponent, CardComponent, DatatableComponent, PaginatorComponent, AuthComponent, FormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormBuilderModule,
    LayoutRoutingModule
  ],
  exports: [
    MainComponent,
    LeftNavigationComponent,
    CardComponent,
    DatatableComponent,
    FormComponent
  ]
})
export class LayoutModule { }
