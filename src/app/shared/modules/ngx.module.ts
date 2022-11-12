import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { BrowserModule } from '@angular/platform-browser';

const config: SocketIoConfig = { url: 'http://api.dicezen.com', options: {} };




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
