import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => CheckboxGroupComponent),
  //     multi: true
  //   }
  // ]
})
export class CheckboxGroupComponent implements OnInit {
  @Input() label!: string;
  @Input() options!: any;
  @Input() type!: any;
  @Input() field!: any;
  @Input() form!: FormGroup;
  @Input() checkboxFormGroup: FormGroup = new FormGroup({});
  @Input() controlName!: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  onCheckboxChange(e: any, option: any) {
    console.log(e)
    const fieldControl: FormArray = this.form.get(this.controlName) as FormArray;

    if (e.checked) {
      _.set(option, 'checked', true);
      fieldControl.push(new FormControl({ key: option.key, value: '' }));
    } else {
      _.set(option, 'checked', false);
      const index = fieldControl.controls.findIndex((control: any) => control.value === option);
      fieldControl.removeAt(index);
    }
  }

  onCheckboxInputChange(value: any, option: any) {
    const fieldControl: FormArray = this.form.get(this.controlName) as FormArray;
    const index = fieldControl.controls.findIndex((control: any) => {
      return control.value.key === option.key;
    });
    fieldControl.controls[index].setValue({ key: option.key, value });
  }

  isFieldValid(): any {
    // const control: any = this.checkboxFormGroup.get(this.controlName);
    // return control?.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(): any {
    // const control: any = this.checkboxFormGroup.get(this.controlName);
    // if (control.errors?.required) {
    //   return `${this.label} is required`;
    // }
    // return '';
  }
}
