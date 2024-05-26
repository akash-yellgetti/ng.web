import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import { ChartType } from 'angular-google-charts';
import { ActivatedRoute } from '@angular/router';
import { transactionData } from '../../../../shared/json/bank-statement.json';
import { forms } from '../../../../shared/json/forms.json';
import { FieldService } from '../../../../shared/services/field/field.service';
import { TransactionService } from '../../services/api/transaction/transaction.service';
import { data } from 'jquery';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  public form = forms.transactionForm;
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
  public type: any;
  public datatable: any = {
    columns: [
      {
        data: 'date',
        title: 'Date',
      },
      {
        data: 'description',
        title: 'Description',
      },
      {
        data: 'amount',
        title: 'amount',
      },
    ],
    data: []
  }
  public updateFlag: any = true;
  
  constructor(
    private cdr: ChangeDetectorRef, 
    private activatedRoute: ActivatedRoute,
    private fieldService: FieldService,
    private transactionService: TransactionService
    ) {
    this.formatDatatoMonthYear();
   }

  formatDatatoMonthYear = () => {
    this.transactionData = this.transactionData.map((data: any) => {
      // Parse the date string using Moment.js
      const parsedDate = moment(data.transactionDate, 'YYYY/MM/DD');
      data.credit = _.isEmpty(_.trim(data.credit)) ? 0 : Number(data.credit);
      data.debit = _.isEmpty(_.trim(data.debit)) ? 0 : Number(data.debit);
      // Format the parsed date to "DD-MMM-YYYY" (e.g., "01-Apr-2023")
      const monthYear = parsedDate.format('MMM-YYYY');
      const month = parsedDate.format('MM');
      const year = parsedDate.format('YYYY');
  
      return {
        ...data,
        monthYear,
        month,
        year
      };
    })

    

    const transactionOverviewData = _.reduce(_.groupBy(this.transactionData, 'monthYear'), (o: any, v: any, k: any) => {
      o[k] = {
        income: _.sumBy(v, 'credit'),
        expense: _.sumBy(v, 'debit'),
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
    const self = this
    const selection = child.selection[0];
    const columns = ['credit', 'debit'];
    const chartData = this.chartOptions.data;
    console.log(chartData)
    // console.log('child', child);
    // this.chartOptions.data[child.row + 1][child.column] = child.value;
    // console.log(this.chartOptions.data[child.selection[0].row]);
    let data: any = _.filter(this.transactionData, (o: any) => {
      return o.monthYear === this.chartOptions.data[selection.row][0];
    })

    this.type = columns[selection.column - 1];

    data = _.filter(data, (r: any) => {
      
      return self.type === 'credit' && r.credit > 0 || self.type === 'debit' && r.debit > 0;
    })

    this.datatable.data = data;

    data = _.map(data, (r: any) => {

      const parsedDate = moment(r.transactionDate, 'YYYY-MM-DD');

      _.set(r, 'date', parsedDate.format('DD-MMM-YYYY'));
      
      _.set(r, 'amount', r.credit > 0 ? r.credit : r.debit);

      _.set(r, 'type', _.first(_.split(r.description, '/')));
      return r;
    })



    data = _.groupBy(data, 'type');
    this.type = columns[selection.column - 1];

    // console.log('data', data);

    this.chartOptions2 = null;
    this.chartOptions2 = { type: ChartType.PieChart,  columnNames: ['Type', 'Amount'] ,
      width: 500,  
      height: 500,  
    data: [] };
    this.chartOptions2.data = _.reduce(data, (a: any, v: any, k) => {
      a.push([k, _.sumBy(v, this.type)]);
      return a;
    }, []);

    console.log('this.chartOptions2', this.chartOptions2);

  }

  analyse = () => {
    const errors = this.fieldService.validateForm(this.form);
    // console.log(errors)
    if (Object.keys(errors).length > 0 ){
      this.fieldService.setToastr(errors)
      return;
    }
    const json = this.fieldService.json(this.form);
    // console.log(json);
    const formData = new FormData();
    for (const i in json) {
      if (json[i]) {
        formData.append(i, json[i]);
      }
    }

    this.transactionService.createTransaction(formData).subscribe((res) => {
      if (res &&res.status) {
        // this.fieldService.setToastr(res);
        this.transactionData = null;
        this.cdr.detectChanges();
        this.transactionData = res.data.data;
        this.formatDatatoMonthYear();
        this.cdr.detectChanges();
      }
      
    })

  }

}
