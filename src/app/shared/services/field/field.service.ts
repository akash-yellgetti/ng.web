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

  resetForm = (form: any) => {
    return _.reduce(_.cloneDeep(form), (o: any, v: any, k) => {
      v.value = '';
      o[k] = v;
      return o;
    }, {});
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