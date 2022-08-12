import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-field-file',
  templateUrl: './field-file.component.html',
  styleUrls: ['./field-file.component.css']
})
export class FieldFileComponent {
  @Input() field:any = {};
  @Input() form:any;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() {

  }

  ngOnChange(){
    console.log(this.field.value);
    // this.field.value.
  }
}