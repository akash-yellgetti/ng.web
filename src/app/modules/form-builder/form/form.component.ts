import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form: any;
  constructor() { }

  ngOnInit() {
    let fieldsCtrls: any = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new UntypedFormControl(f.value || '', Validators.required)
      } else {
        let opts: any = {};
        for (let opt of f.options) {
          opts[opt.key] = new UntypedFormControl(opt.value);
        }
        fieldsCtrls[f.name] = new UntypedFormGroup(opts)
      }
    }
    this.form = new UntypedFormGroup(fieldsCtrls);
  }
}
