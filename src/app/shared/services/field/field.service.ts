import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }

  validate = () => {
    return _.chain([]).value();
  }

  json = (data: any) => {
    return _.chain(data)
    // .keyBy('name')
    .reduce((a: any, v, k) => {
      a[k] = v['value'];
      return a;
    },{})

    .value();
  }
}
