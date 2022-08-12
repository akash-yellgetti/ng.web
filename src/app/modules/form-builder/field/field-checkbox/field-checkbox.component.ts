import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  styleUrls: ['./field-checkbox.component.css']
})
export class FieldCheckboxComponent {
  @Input() field:any = {};
  @Input() form:any;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
}