import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { budget } from 'src/app/shared/json/budet.json';
import { Moment} from 'moment';
import * as _moment from 'moment';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class TransactionComponent implements OnInit {
  public data: any = budget;
  public columns: any = [
    {
      name: 'date',
    },
    {
      name: 'title',
    },
    {
      name: 'decription',
    },
    {
      name: 'amount',
    },
  ];
  loading = false;
  rows: any = [];
  ColumnMode = ColumnMode;
  month: any = 1;
  date = new FormControl(moment());
  ngOnInit(): void {}

  constructor() {
    const d = new Date();
    this.month = d.getMonth()+1;
    // console.log(this.date.value.t)
    const check = moment(this.data.value).format("MM-YYYY");
    console.log(check)
    this.fetch((data: any) => {
      this.rows = data;
    });
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    console.log(normalizedMonthAndYear)
    datepicker.close();
  }

  fetch(cb: any) {

    const req = new XMLHttpRequest();
    var data = JSON.stringify({
      "month": this.month
    });
    req.open('POST', 'http://localhost:5001/personal/transaction/list');
    req.setRequestHeader(
      'Authorization',
      'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY4ZDYxOTMxYjlmNGY2NjY1M2ZkODIiLCJmaXJzdE5hbWUiOiJBa2FzaCIsImxhc3ROYW1lIjoiWWVsbGdldHRpIiwiZG9iIjoiMTk5Mi0wNy0wNFQxODozMDowMC4wMDBaIiwiZ2VuZGVyIjoibSIsIm1vYmlsZU5vIjo5OTIwMDIxMDczLCJlbWFpbCI6ImFha2FzaDU3OTJAZ21haWwuY29tIiwiaXNBY3RpdmUiOjEsImNyZWF0ZWRCeSI6bnVsbCwidXBkYXRlZEJ5IjpudWxsLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTIwVDE0OjE1OjUzLjE2OVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA2LTE3VDA4OjA2OjEzLjQ2OVoiLCJfX3YiOjAsInNlc3Npb24iOiI2NGNjYTA4NzkwNmE4NTkxNzVlMWRkNDUiLCJpYXQiOjE2OTExMzIwMzksImV4cCI6MTY5MTE0MjgzOX0.CmZ4z_KLmBzeDZKv8gE-R2OqyD7lYvi9W6PzgQuMGRM'
    );
    req.setRequestHeader('Content-Type', 'application/json');

    req.onload = () => {
      const data = JSON.parse(req.response);
      // console.log(data)
      cb(data.data);
    };

    req.send(data);
  }

  onSort(event: any) {
    // event was triggered, start sort sequence
    console.log('Sort Event', event);
    this.loading = true;
    // emulate a server request with a timeout
    setTimeout(() => {
      const rows = [...this.rows];
      // this is only for demo purposes, normally
      // your server would return the result for
      // you and you would just set the rows prop
      const sort = event.sorts[0];
      rows.sort((a, b) => {
        return (
          a[sort.prop].localeCompare(b[sort.prop]) *
          (sort.dir === 'desc' ? -1 : 1)
        );
      });

      this.rows = rows;
      this.loading = false;
    }, 1000);
  }
}
