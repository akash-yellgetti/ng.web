import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxWebstorageModule } from 'ngx-webstorage';


@NgModule({
  declarations: [],
  imports: [
    NgxPaginationModule,
    NgxWebstorageModule.forRoot({ prefix: '', separator: '', caseSensitive:true }),
    CommonModule
  ], 
  exports: [
    NgxPaginationModule,
    NgxWebstorageModule
    
  ]
})
export class NgxModule { }
