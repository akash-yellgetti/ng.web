import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {
  @Input() label: string = '';
  @Input() options: any = [];
  @Input() form?: any;
  @Input() controlName?: any;

  filteredOptions!: Observable<any>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filteredOptions = this.form.get(this.controlName).valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: any) => {
      return option.value.toLowerCase().includes(filterValue);
    });
  }

  writeValue(value: any): void {
    this.form.get(this.controlName).setValue(value);
  }

  registerOnChange(fn: any): void {
    this.form.get(this.controlName).valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // Register on touched
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.get(this.controlName).disable();
    } else {
      this.form.get(this.controlName).enable();
    }
  }
}
