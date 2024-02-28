import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTableComponent } from './components/time-table/time-table.component';

const routes: Routes = [
  {
    path: 'time-table',
    component: TimeTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
