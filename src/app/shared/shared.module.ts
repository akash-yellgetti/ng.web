import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { NgxModule } from './modules/ngx.module';
import { DialogComponent } from './components/dialog/dialog/dialog.component';


@NgModule({
  declarations: [
    DialogComponent
  ],
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
