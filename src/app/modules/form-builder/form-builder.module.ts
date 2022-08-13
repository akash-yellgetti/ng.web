import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormComponent } from './form/form.component';
import { FieldModule } from './field/field.module';
import { MaterialModule } from 'src/app/modules/common/material.module';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FieldModule,
    FormBuilderRoutingModule
  ],
  exports: [
    FormComponent
  ] 
})
export class FormBuilderModule { }
