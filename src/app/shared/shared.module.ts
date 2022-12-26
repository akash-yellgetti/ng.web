import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { NgxModule } from './modules/ngx.module';
import { DialogComponent } from './components/dialog/dialog/dialog.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    MaterialModule,
    NgxModule,
    CommonModule,
    SlickCarouselModule,
  ],
  exports: [
    MaterialModule,
    NgxModule,
    SlickCarouselModule
  ]
})
export class SharedModule { }
