import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { NgxModule } from './modules/ngx.module';



@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    NgxModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    NgxModule,
  ]
})
export class SharedModule { }
