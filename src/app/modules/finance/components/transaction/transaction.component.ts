import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { transactionData } from '../../../../shared/json/bank-statement.json';
import * as moment from 'moment';
import * as _ from 'lodash';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  public transactionData = transactionData;
  public chartOptions: any = { 
    type: ChartType.ColumnChart,
    columnNames: ['Month', 'Income', 'Expense'] ,
    data: []
   };

   public chartOptions2: any = {
    type: ChartType.PieChart,
    columnNames: ['type', 'Amount'] ,
    data: []

   }
  public updateFlag: any = true;
  
  constructor(private cdr: ChangeDetectorRef) {
    this.formatDatatoMonthYear();
   }

  formatDatatoMonthYear = () => {
    this.transactionData = this.transactionData.map((data: any) => {
      // Parse the date string using Moment.js
      const parsedDate = moment(data.transactionDate, 'DD/MM/YYYY');

      // Format the parsed date to "DD-MMM-YYYY" (e.g., "01-Apr-2023")
      const monthYear = parsedDate.format('MMM-YYYY');
      const month = parsedDate.format('MM');
      const year = parsedDate.format('YYYY');
      // Format the parsed date to "DD-MMM-YYYY" (e.g., "01-Apr-2023")

      // return formattedDate;
      // const transactionDate = new Date(Date.parse(data.transactionDate));
      // const month = transactionDate.getMonth() + 1; // Month is zero-indexed
      // const year = transactionDate.getFullYear();
      // const monthYear = `${month}-${year}`;
      return {
        ...data,
        monthYear,
        month,
        year
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

    // this.chartOptions = { data: [] };

    this.chartOptions = null;
    this.chartOptions = { type: ChartType.ColumnChart,  columnNames: ['Month', 'Income', 'Expense'] ,
      width: 1000,  
      height: 310,  
    data: [] };
    this.chartOptions.data = _.reduce(transactionOverviewData, (a: any, v: any, k) => {
      a.push([k, v.income, v.expense]);
      return a;
    }, []);

    console.log('this.chartOptions', this.chartOptions);
    // this.cdr.detectChanges();
  }



  ngOnInit(): void {
  }

  refreshDatatableAndChart = (category: string) => {
    
  };


  getChild = (child: any) => {
    const selection = child.selection[0];
    const columns = ['deposit', 'withdrawal'];
    // console.log('child', child);
    // this.chartOptions.data[child.row + 1][child.column] = child.value;
    // console.log(this.chartOptions.data[child.selection[0].row]);
    let data: any = _.filter(this.transactionData, (o: any) => {
      return o.monthYear === this.chartOptions.data[selection.row][0];
    })

    data = _.map(data, (r: any) => {
      _.set(r, 'type', _.first(_.split(r.remarks, '/')));
      return r;
    })

    data = _.groupBy(data, 'type');


    // console.log('data', data);

    this.chartOptions2 = null;
    this.chartOptions2 = { type: ChartType.PieChart,  columnNames: ['Type', 'Amount'] ,
      width: 500,  
      height: 500,  
    data: [] };
    this.chartOptions2.data = _.reduce(data, (a: any, v: any, k) => {
      a.push([k, _.sumBy(v, columns[selection.column - 1])]);
      return a;
    }, []);

    console.log('this.chartOptions2', this.chartOptions2);

  }

}
