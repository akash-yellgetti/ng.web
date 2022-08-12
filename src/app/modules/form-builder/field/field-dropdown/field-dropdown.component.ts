import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-dropdown',
  templateUrl: './field-dropdown.component.html',
  styleUrls: ['./field-dropdown.component.css']
})
export class FieldDropdownComponent {
  @Input() field:any = {};
  // @Input() form:any;

  constructor() {

  }
}