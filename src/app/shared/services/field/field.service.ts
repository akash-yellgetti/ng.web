import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }

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
        console.log(element)

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
