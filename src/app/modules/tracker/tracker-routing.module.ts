import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VendorComponent } from './vendor/vendor.component';
import { VisitorComponent } from './visitor/visitor.component';

const routes: Routes = [
  {
    path: 'visitor',
    component: VisitorComponent,
    data: {
      module: "tracker",
      subModule: "visitor",
    },
  },
  {
    path: 'vendor',
    component: VendorComponent,
    data: {
      module: "tracker",
      subModule: "vendor",
    },
  },
  {
    path: 'vehicle',
    component: VehicleComponent,
    data: {
      module: "tracker",
      subModule: "vehicle",
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
