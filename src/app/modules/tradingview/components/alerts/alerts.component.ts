import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  ngOnInit(): void {
  }

  loading = false;

  rows = [];

  columns = [
    { name: 'timestamp' },
    { name: 'datetime' },
    { name: 'timeframe' },
    { name: 'type' },
    { name: 'exchange' },
    { name: 'symbol' },
    { name: 'price' },
    { name: 'volume' },
     
  ];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch((data: any) => {
      this.rows = data;
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://api-web-bxum.onrender.com/tradingview/webhook/logs`);

    req.onload = () => {
      let data = JSON.parse(req.response);
      data = data.data;
      // console.log(data)
      cb(data.splice(0, 10));
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
      // rows.sort((a, b) => {
      //   return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
      // });

      this.rows = rows;
      this.loading = false;
    }, 1000);
  }

}
