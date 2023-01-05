import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { NgxModule } from './modules/ngx.module';




@NgModule({
  declarations: [

  ],
  imports: [
    MaterialModule,
    NgxModule,
  ],
  exports: [
    MaterialModule,
    NgxModule,
  ]
})
export class SharedModule { }
