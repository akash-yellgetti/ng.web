import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  col: string;
  options?: { key: string, value: any }[]; // For select and radio buttons
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

  constructor() {}

  ngOnInit(): void {
    const control = new FormControl('', this.getValidators(this.field.validations || []));
    this.form.addControl(this.field.name, control);
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
