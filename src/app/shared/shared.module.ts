import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { NgxModule } from './modules/ngx.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DialogComponent } from './components/dialog/dialog.component';
import { ChartComponent } from './components/chart/chart.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { IndianNumberFormatPipe } from './pipe/indianNumberFormat/indian-number-format.pipe';
import { NumberToWordsPipe } from './pipe/numberToWords/number-to-words.pipe';
import { MonthsToYearsPipe } from './pipe/monthsToYears/months-to-years.pipe';
import { ChartGoogleComponent } from './components/chart-google/chart-google.component';
import { ChartJsComponent } from './components/chart-js/chart-js/chart-js.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { FieldComponent } from './components/field/field.component';
import { KeysPipe } from './pipe/keys/keys.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DynamicStepperComponent } from './components/dynamic-stepper/dynamic-stepper.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { ChipsAutocompleteComponent } from './components/chips-autocomplete/chips-autocomplete.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    DialogComponent,
    ChartComponent,
    DatatableComponent,
    IndianNumberFormatPipe,
    NumberToWordsPipe,
    MonthsToYearsPipe,
    ChartGoogleComponent,
    ChartJsComponent,
    FieldComponent,
    KeysPipe,
    SpinnerComponent,
    DynamicStepperComponent,
    DynamicFieldComponent,
    CheckboxGroupComponent,
    ChipsAutocompleteComponent,
    AutocompleteComponent,
    FileUploadComponent,
  ],
  imports: [
    MaterialModule,
    NgxModule,
    HighchartsChartModule,
    GoogleChartsModule
  ],
  exports: [
    MaterialModule,
    NgxModule,
    // HighchartsChartModule,
    SpinnerComponent,
    BreadcrumbsComponent,
    ChartComponent,
    ChartJsComponent,
    ChartGoogleComponent,
    DatatableComponent,
    FieldComponent,
    IndianNumberFormatPipe,
    NumberToWordsPipe,
    MonthsToYearsPipe,
    KeysPipe
  ]
})
export class SharedModule { }
