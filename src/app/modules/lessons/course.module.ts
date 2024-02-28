import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseWrapperComponent } from './components/course-wrapper/course-wrapper.component';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CourseWrapperComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
