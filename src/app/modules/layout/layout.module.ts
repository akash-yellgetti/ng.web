import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule as _LayoutModule } from '@angular/cdk/layout';
import { MainComponent } from './main/main.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { CardComponent } from '../../shared/components/card/card.component';
import { DatatableComponent } from '../../shared/components/datatable/datatable.component';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import { FormsModule } from '@angular/forms';

import { FormComponent } from '../../shared/components/form/form.component';
import { FormBuilderModule } from '../form-builder/form-builder.module';
import { FilterComponent } from '../../shared/components/filter/filter.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { NgxModule } from '../../shared/modules/ngx.module';
import { AuthGuard } from '../auth/guards/auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [MainComponent, CardComponent, DatatableComponent, PaginatorComponent,  FormComponent, FilterComponent, BreadcrumbComponent, HomeComponent, HeaderComponent, FooterComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormBuilderModule,
    LayoutRoutingModule
  ],
  exports: [
    MainComponent,
    CardComponent,
    DatatableComponent,
    FormComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class LayoutModule { }
