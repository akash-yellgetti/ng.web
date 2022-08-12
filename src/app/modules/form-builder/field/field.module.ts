import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldInputComponent } from './field-input/field-input.component';
import { FieldFileComponent } from './field-file/field-file.component';
import { MaterialModule } from 'src/app/material.module';
import { FieldRadioComponent } from './field-radio/field-radio.component';
import { FieldCheckboxComponent } from './field-checkbox/field-checkbox.component';
import { FieldDropdownComponent } from './field-dropdown/field-dropdown.component';



@NgModule({
  declarations: [
    FieldInputComponent,
    FieldFileComponent,
    FieldRadioComponent,
    FieldCheckboxComponent,
    FieldDropdownComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  exports: [
    FieldInputComponent,
    FieldFileComponent,
    FieldRadioComponent,
    FieldCheckboxComponent,
    FieldDropdownComponent
  ]
})
export class FieldModule { }
