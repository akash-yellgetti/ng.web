import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { setting } from '../json/setting.json'
const config: SocketIoConfig = { url: setting.uri, options: { transports: ['polling']  } };




@NgModule({
  declarations: [],
  imports: [
    
    NgxPaginationModule,
    NgxDatatableModule,
    NgxChartsModule,
    NgxWebstorageModule.forRoot({ prefix: '', separator: '', caseSensitive:true }),
    SocketIoModule.forRoot(config),
    CommonModule
  ], 
  exports: [
    
    NgxPaginationModule,
    NgxWebstorageModule,
    NgxChartsModule,
    NgxDatatableModule
    
  ]
})
export class NgxModule { }
