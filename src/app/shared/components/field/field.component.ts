import { Component, Input, OnInit } from '@angular/core';
import { FieldService } from '../../services/field/field.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() key: any;
  @Input() form: any;
  @Input() field: any;
  constructor(private fieldService: FieldService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if(this.field.fieldtype === 'select-ajax') {
      this.fieldService.getSelectData(this.field).subscribe((res: any) => {
        console.log(this.field.ajax.option)
        this.field.options = res.data.map( (r: any) => {
          return {
            key: r[this.field.ajax.option.key],
            value: r[this.field.ajax.option.value],
          };
        });
        console.log(res.data);
      });
    };
  }

  handleFileInput = (event: any, field: any) => {
    const file = event.target.files[0];
    field.value = file;
    field.file = file;
  }

  triggerSelect = (value: any) => {
    const field = this.field;
    if(field.triggerSelect) {
      this.form[field.triggerSelect].options = [];
      const triggerfield = this.form[field.triggerSelect];
      triggerfield.ajax.data.parentCode = field.value;
      this.fieldService.getSelectData(triggerfield).subscribe((res: any) => {
        this.form[field.triggerSelect].options = res.data.map( (r: any) => {
          return {
            key: r[this.form[field.triggerSelect].ajax.option.key],
            value: r[this.form[field.triggerSelect].ajax.option.value],
          };
        });
      });
    }

  }
}
