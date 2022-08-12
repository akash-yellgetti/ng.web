import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-radio',
  templateUrl: './field-radio.component.html',
  styleUrls: ['./field-radio.component.scss']
})
export class FieldRadioComponent implements OnInit {
  @Input() field:any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
