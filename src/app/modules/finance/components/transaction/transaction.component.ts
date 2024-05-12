import { Component, OnInit } from '@angular/core';
import { transactionData } from '../../../../shared/json/bank-statement.json';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  public transactionData = transactionData;
  constructor() {
    this.formatDatatoMonthYear();
   }

  formatDatatoMonthYear = () => {
    this.transactionData = this.transactionData.map((data: any) => {
      // Parse the date string using Moment.js
      const parsedDate = moment(data.transactionDate, 'DD/MM/YYYY');

      // Format the parsed date to "DD-MMM-YYYY" (e.g., "01-Apr-2023")
      const monthYear = parsedDate.format('MM-YYYY');

      // return formattedDate;
      // const transactionDate = new Date(Date.parse(data.transactionDate));
      // const month = transactionDate.getMonth() + 1; // Month is zero-indexed
      // const year = transactionDate.getFullYear();
      // const monthYear = `${month}-${year}`;
      return {
        ...data,
        monthYear
      };
    })

    

    const transactionOverviewData = _.reduce(_.groupBy(this.transactionData, 'monthYear'), (o: any, v: any, k: any) => {
      o[k] = {
        income: _.sumBy(v, 'deposit'),
        expense: _.sumBy(v, 'withdrawal'),
      }
      return o;
    }, {})

    console.log('transactionOverviewData', transactionOverviewData);
    // console.log(this.transactionData)
  }

  ngOnInit(): void {
  }

}
