import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseWrapperComponent } from './components/course-wrapper/course-wrapper.component';

const routes: Routes = [
  {
    path: 'course-details',
    component: CourseWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
