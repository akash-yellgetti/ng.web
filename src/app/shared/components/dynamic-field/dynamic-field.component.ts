import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  col: string;
  options?: { key: string, value: any, checked?: any, fields?: any, form?: any }[]; // For select and radio buttons
  validations?: string[];
}

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent implements OnInit {
  @Input() field!: FieldConfig;
  @Input() form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    if (['checkbox', 'checkbox-input', 'checkbox-form', 'chips-autocomplete'].indexOf(this.field.type) > -1) {
      this.initializeFormGroup(this.field);
    } else {
      const control = new FormControl('', this.getValidators(this.field.validations || []));
      this.form.addControl(this.field.name, control);
    }
  }
  
  initializeFormGroup(field: any): any {
    const formGroup: any = this.fb.array([]);
    this.form.addControl(field.name, formGroup);
    const options: any = field.options || [];
    for (const i in options) {
      if (options[i]) {
        const option = options[i];
        option.form = _.cloneDeep(this.fb.group({}));
      }
    }
  }

  updateCheckboxValue = (event: any,  field: any, option: any) => {
    const o = _.find(field.options, { option });
    // option.checked = event.target.checked;
    _.set(option, 'checked', event.checked);
    _.set(o, 'checked', event.checked);
    field.value = _.filter(field.options, { checked: true }) || [];
  }

  getValidators(validators: string[]): any[] {
    const formValidators = [];
    if (validators.includes('required')) {
      formValidators.push(Validators.required);
    }
    if (validators.includes('email')) {
      formValidators.push(Validators.email);
    }
    if (validators.includes('min')) {
      formValidators.push(Validators.min(1)); // Example for min validator
    }
    if (validators.includes('max')) {
      formValidators.push(Validators.max(100)); // Example for max validator
    }
    // Add more validators as needed
    return formValidators;
  }

  getErrorMessage(): string {
    const control: any = this.form.get(this.field.name);
    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('email')) {
      return 'Not a valid email';
    }
    if (control.hasError('min')) {
      return 'Value is too low';
    }
    if (control.hasError('max')) {
      return 'Value is too high';
    }
    // Add more error messages as needed
    return '';
  }
}
