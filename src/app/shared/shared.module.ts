import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { NgxModule } from './modules/ngx.module';
import { BreadcrumbsComponent } from '../modules/main/components/breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  imports: [
    MaterialModule,
    NgxModule
  ],
  exports: [
    MaterialModule,
    NgxModule,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
