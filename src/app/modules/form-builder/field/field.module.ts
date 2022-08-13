import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/common/material.module';

import { FieldInputComponent } from './field-input/field-input.component';
import { FieldTextareaComponent } from './field-textarea/field-textarea.component';
import { FieldAutocompleteComponent } from './field-autocomplete/field-autocomplete.component';
import { FieldRadioComponent } from './field-radio/field-radio.component';
import { FieldCheckboxComponent } from './field-checkbox/field-checkbox.component';
import { FieldSelectComponent } from './field-select/field-select.component';


import { FieldDatetimeComponent } from './field-datetime/field-datetime.component';
import { FieldFileComponent } from './field-file/field-file.component';

import { FieldDropdownComponent } from './field-dropdown/field-dropdown.component';

@NgModule({
  declarations: [FieldInputComponent, FieldDropdownComponent, FieldTextareaComponent, FieldAutocompleteComponent, FieldRadioComponent, FieldCheckboxComponent, FieldSelectComponent, FieldDatetimeComponent, FieldFileComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FieldInputComponent, FieldDropdownComponent, FieldTextareaComponent, FieldAutocompleteComponent, FieldRadioComponent, FieldCheckboxComponent, FieldSelectComponent, FieldFileComponent],
})
export class FieldModule { }
