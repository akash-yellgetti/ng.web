import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { NgxModule } from './modules/ngx.module';
import { BreadcrumbsComponent } from '../modules/main/components/breadcrumbs/breadcrumbs.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DialogComponent } from './components/dialog/dialog.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    DialogComponent,
    ChartComponent
  ],
  imports: [
    MaterialModule,
    NgxModule,
    HighchartsChartModule
  ],
  exports: [
    MaterialModule,
    NgxModule,
    // HighchartsChartModule,
    BreadcrumbsComponent,
    ChartComponent
  ]
})
export class SharedModule { }
