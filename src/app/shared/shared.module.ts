import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { NgxModule } from './modules/ngx.module';
import { BreadcrumbsComponent } from '../modules/main/components/breadcrumbs/breadcrumbs.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DialogComponent } from './components/dialog/dialog.component';
import { ChartComponent } from './components/chart/chart.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { IndianNumberFormatPipe } from './pipe/indianNumberFormat/indian-number-format.pipe';
import { NumberToWordsPipe } from './pipe/numberToWords/number-to-words.pipe';
import { MonthsToYearsPipe } from './pipe/monthsToYears/months-to-years.pipe';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    DialogComponent,
    ChartComponent,
    DatatableComponent,
    IndianNumberFormatPipe,
    NumberToWordsPipe,
    MonthsToYearsPipe
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
    ChartComponent,
    DatatableComponent,
    IndianNumberFormatPipe,
    NumberToWordsPipe,
    MonthsToYearsPipe
  ]
})
export class SharedModule { }
