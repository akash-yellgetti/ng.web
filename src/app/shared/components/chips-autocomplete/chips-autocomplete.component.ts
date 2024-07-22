import { COMMA, ENTER, F } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-chips-autocomplete',
  templateUrl: './chips-autocomplete.component.html',
  styleUrls: ['./chips-autocomplete.component.scss'],
})
export class ChipsAutocompleteComponent implements OnInit {
  @Input() label!: string;
  @Input() options!: any;
  @Input() type!: any;
  @Input() field!: any;
  @Input() form!: FormGroup;
  @Input() checkboxFormGroup: FormGroup = new FormGroup({});
  @Input() controlName!: string;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  inputCtrl = new FormControl('');
  filteredOptions: Observable<any>;
  selectedOptions: any = [];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredOptions = this.inputCtrl.valueChanges.pipe(
      startWith(null),
      map((option: string | null) =>
        option ? this._filter(option) : this._filter('')
      )
    );
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
 

  add(event: MatChipInputEvent): void {
    const fieldControl: FormArray = this.form.get(this.controlName) as FormArray;
    const value = (event.value || '').trim();
    const option = { key: value, value: value }
    // Add our fruit
    if (value) {
      this.selectedOptions.push(option);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.inputCtrl.setValue(null);
    fieldControl.push(new FormControl({ key: option.key, value: option.value }));
  }

  remove(option: any): void {
    const fieldControl: FormArray = this.form.get(this.controlName) as FormArray;
    const index = this.selectedOptions.indexOf(option);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
    this.inputCtrl.setValue(null);
    const _index = fieldControl.controls.findIndex((control: any) => control.value.key === option.key);
    fieldControl.removeAt(_index);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const fieldControl: FormArray = this.form.get(this.controlName) as FormArray;
    this.selectedOptions.push(event.option.value);
    // this.selectedOptions.push();
    this.fruitInput.nativeElement.value = '';
    this.inputCtrl.setValue(null);
    const option = event.option.value;
    fieldControl.push(new FormControl({ key: option.key, value: option.value }));
  }

  private _filter(filterValue: any): string[] {
    return this.options.filter((option: any) => {
      return this.selectedOptions.indexOf(option) === -1 && option.value.toLowerCase().includes(filterValue)
    });
  }
}
