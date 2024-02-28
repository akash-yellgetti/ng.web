import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  getChartDataFormat = (data: any, groupByKey: any, sumKey: any) => {
    return _.map(_.groupBy(data, groupByKey), (v,idx) => { return { name: idx, 
      y: _.sumBy(v, sumKey) }})
  }
}
