import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as master from '../json/master.json';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  data: any = null;
  private module: any = '';
  private subModule: any = '';
  constructor() { }

  set = (data: any) => {
    this.data = data;
    this.setCurrentRoute(data.module, data.subModule);
  }

  get = () => {
    return this.data;
  }

  getModule = () => {
    return  this.module;
  }

  getSubModule = () => {
    return  this.subModule;
  }

  setCurrentRoute = (module: string, subModule: string) => {
    const data =  _.get(master, 'default');
    this.module = _.find(data, { name: module });
    this.subModule = _.find(this.module?.children, { name: subModule });
  }

}
