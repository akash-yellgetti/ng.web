import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

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
  @Input() form!: FormGroup;
  @Input() checkboxFormGroup: FormGroup = new FormGroup({});
  @Input() controlName!: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  onCheckChange(e: any, option: any) {
    console.log(e)
    const fieldControl: FormArray = this.form.get(this.controlName) as FormArray;
    if (e.checked) {
      fieldControl.push(new FormControl(option));
    } else {
       const index = fieldControl.controls.findIndex((control: any) => control.value === option);
       fieldControl.removeAt(index);
    }
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
