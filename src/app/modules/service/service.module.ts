import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { MeetingsComponent } from './meetings/meetings.component';
import { EventsComponent } from './events/events.component';
import { ComplaintsComponent } from './complaints/complaints.component';


@NgModule({
  declarations: [
    MeetingsComponent,
    EventsComponent,
    ComplaintsComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
