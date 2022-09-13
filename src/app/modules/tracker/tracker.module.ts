import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { VisitorComponent } from './visitor/visitor.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VendorComponent } from './vendor/vendor.component';


@NgModule({
  declarations: [
    VisitorComponent,
    VehicleComponent,
    VendorComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule
  ]
})
export class TrackerModule { }
