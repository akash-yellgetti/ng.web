import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private _snackBar: MatSnackBar) { }

  getFormGroupFields = (data: any) => {
    return _.cloneDeep(_.chain(data)
      .reduce((o: any, v, k) => {
        const validionsData = v && v.validations ? v.validations.split('|') : [];
        const validations = _.chain(validionsData).map((r) => {
          return this.getValidator(r);
        }).value();

        o[v.name] = [null, validations];
        return o;
      }, {})
      .value());
  }

  getValidator = (key: string) => {
    switch (key) {
      case 'required':
        return Validators.required;
        break;
      case 'email':
        return Validators.email;
        break;
      default:
        return null
        break;
    }
  }

  getValidatorMessage = (key: string) => {
    switch (key) {
      case 'required':
        return;
        break;
      case 'email':
        return Validators.email;
        break;
      default:
        return null
        break;
    }
  }

  validate = (data: any, fields: any) => {
    return _.reject(_.flatten(_.values(_.mapValues(data, 'errors'))), _.isEmpty);
  }

  displayErrors = (errors: any) => {
    for (const i in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, i)) {
        const element = errors[i];
        // console.log(element)
        this._snackBar.open('Cannonball!!', 'Splash')

      }
    }
  }

  json = (data: any) => {
    return _.chain(data)
      // .keyBy('name')
      .reduce((a: any, v, k) => {
        a[k] = v['value'];
        return a;
      }, {})

      .value();
  }
}


export function dateIsBeforeOrOnToday(control: FormControl) {
  const dateStruct: any = control.value;
  if (!dateStruct || !dateStruct.year || !dateStruct.month || !dateStruct.day) {
    return { validDate: true };
  }
  //confirm it is before today or today
  const date = new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day);

  let today = new Date();
  today.setHours(0,0,0,0);

  if (date <= today) {
      return null;
  }

  return { validDate: true };
}