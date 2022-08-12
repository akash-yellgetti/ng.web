import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-field-radio',
  templateUrl: './field-radio.component.html',
  styleUrls: ['./field-radio.component.css']
})
export class FieldRadioComponent {
  @Input() field:any = {};
  @Input() form:any;
}