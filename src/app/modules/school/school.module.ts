import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherComponent } from './components/teacher/teacher.component';


@NgModule({
  declarations: [
    TimeTableComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule { }
