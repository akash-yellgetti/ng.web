import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule as _LayoutModule } from '@angular/cdk/layout';
import { MainComponent } from './main/main.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { LeftNavigationComponent } from './main/left-navigation/left-navigation.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { CardComponent } from '../../shared/components/card/card.component';
import { DatatableComponent } from '../../shared/components/datatable/datatable.component';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { FormComponent } from '../../shared/components/form/form.component';
import { FormBuilderModule } from '../form-builder/form-builder.module';
import { FilterComponent } from '../../shared/components/filter/filter.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { NgxModule } from '../../shared/modules/ngx.module';



@NgModule({
  declarations: [MainComponent, LeftNavigationComponent, CardComponent, DatatableComponent, PaginatorComponent, AuthComponent, FormComponent, FilterComponent, BreadcrumbComponent],
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
