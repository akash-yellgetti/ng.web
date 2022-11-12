import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { setting } from '../json/setting.json'
const config: SocketIoConfig = { url: setting.uri, options: { transports: ['polling']  } };




@NgModule({
  declarations: [],
  imports: [
    NgxPaginationModule,
    NgxWebstorageModule.forRoot({ prefix: '', separator: '', caseSensitive:true }),
    SocketIoModule.forRoot(config),
    CommonModule
  ], 
  exports: [
    NgxPaginationModule,
    NgxWebstorageModule
    
  ]
})
export class NgxModule { }
