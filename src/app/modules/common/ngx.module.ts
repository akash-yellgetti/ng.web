import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [],
  imports: [
    NgxPaginationModule,
    CommonModule
  ], 
  exports: [
    NgxPaginationModule
  ]
})
export class NgxModule { }
