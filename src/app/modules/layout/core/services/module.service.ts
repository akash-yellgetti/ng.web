import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as master from '../json/master.json';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private module: any = '';
  private subModule: any = '';
  constructor() { }

  setCurrentRoute = (module: string, subModule: string) => {
    const data =  _.get(master, 'default');
    // console.log(data)
    this.module = _.find(data, { name: module });
    this.subModule = _.find(this.module?.children, { name: subModule });
  }



  getSubModule = () => {
    return  this.subModule;
  }
}
