import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  styleUrls: ['./field-checkbox.component.scss']
})
export class FieldCheckboxComponent implements OnInit {
  @Input() field:any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
