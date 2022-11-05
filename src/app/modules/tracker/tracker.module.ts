import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { VisitorComponent } from './components/visitor/visitor.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VendorComponent } from './components/vendor/vendor.component';


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
