import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { NgxEventCalendarModule } from 'ngx-event-calendar';
import { setting } from '../json/setting.json'
const config: SocketIoConfig = { url: setting.uri, options: { transports: ['polling']  } };




@NgModule({
  declarations: [],
  imports: [
    NgxEventCalendarModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgxChartsModule,
    NgxWebstorageModule.forRoot({ prefix: '', separator: '', caseSensitive:true }),
    SocketIoModule.forRoot(config),
    CommonModule
  ], 
  exports: [
    NgxEventCalendarModule,
    NgxPaginationModule,
    NgxWebstorageModule,
    NgxChartsModule,
    NgxDatatableModule
    
  ]
})
export class NgxModule { }
