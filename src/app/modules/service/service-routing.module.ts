import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintsComponent } from './complaints/complaints.component';
import { EventsComponent } from './events/events.component';
import { MeetingsComponent } from './meetings/meetings.component';

const routes: Routes = [
  {
    path: 'meetings',
    component: MeetingsComponent,
    data: {
      module: "service",
      subModule: "meetings",
    },
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      module: "service",
      subModule: "events",
    },
  },
  {
    path: 'complaints',
    component: ComplaintsComponent,
    data: {
      module: "service",
      subModule: "complaints",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
