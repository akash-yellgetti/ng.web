import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ToastrModule } from 'ngx-toastr';

import { setting } from '../json/setting.json'
const config: SocketIoConfig = { url: setting.uri, options: { transports: ['polling']  } };




@NgModule({
  declarations: [],
  imports: [
    ImageCropperModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgxChartsModule,
    NgxWebstorageModule.forRoot({ prefix: '', separator: '', caseSensitive:true }),
    SocketIoModule.forRoot(config),
    SlickCarouselModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
    }),
    CommonModule
  ], 
  exports: [
    ImageCropperModule,
    NgxPaginationModule,
    NgxWebstorageModule,
    NgxChartsModule,
    NgxDatatableModule,
    SlickCarouselModule,
    
  ]
})
export class NgxModule { }
