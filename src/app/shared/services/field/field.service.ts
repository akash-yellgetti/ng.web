import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';
import { ValidationService } from '../validation/validation.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { CommonService } from '../common/common.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { catchError, map } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { setting } from '../../json/setting.json';

@Injectable({
  providedIn: 'root'
})
export class FieldService extends CommonService {

  constructor(
    protected _snackBar: MatSnackBar,
    protected http: HttpClient,
    protected storage: LocalStorageService,
    public toastr: ToastrService, 
    public validationSevice: ValidationService
  ) {
    super(_snackBar, http, storage);
  }

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

  validateForm = (form: any) => {
    const self = this;
    let errors: any = {};
    form = _.map(_.cloneDeep(form), (r) => {
      const validations = r.validations ? r.validations.split('|') : [];
      const errs = self.validationSevice.validate(validations, r, form);
      if(_.size(errs) > 0) {
        errors[r.label] = errs;
      }
      form.errors = errs;
      return form;
    });
    
    return errors;
  }

  setToastr = (errors: any) => {
    for (const ind in errors) {
      const error = errors[ind];
      for (const errI in error) {
        this.toastr.error(error[errI], ind);
      }
    }
  }


  validateField = (field: any, value: any) => {
    switch (field.type) {
      case 'required':
        return Validators.email;
        break;
      case 'password':
        return Validators.minLength(6);
        break;
      case 'confirmPassword':
        return Validators.minLength(6);
        break;
      default:
        return null
        break;
    }
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

  getSelectData = (field: any): any => {
    const url = setting['uri'] + field.ajax.uri;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getAuthToken(),
    });
    const options = { headers: headers };
    const params = JSON.stringify(field.ajax.data);

    return this.http.post(url, params, options).pipe(
      map((data: any) => data),
      catchError(this.handleError));
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