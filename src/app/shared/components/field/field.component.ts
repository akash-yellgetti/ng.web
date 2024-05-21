import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() key: any;
  @Input() field: any;
  constructor() { }

  ngOnInit(): void {
  }

  handleFileInput = (event: any, field: any) => {
    const file = event.target.files[0];
    field.value = file;
    field.file = file;
  }
}
