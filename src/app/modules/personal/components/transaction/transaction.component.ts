import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { budget } from 'src/app/shared/json/budet.json';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
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
  ngOnInit(): void {}

  constructor() {
    this.fetch((data: any) => {
      this.rows = data;
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
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

    req.send();
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
