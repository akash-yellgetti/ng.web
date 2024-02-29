import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: [
    './datatable.component.scss'
  ]
})
export class DatatableComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const datatableOptions = {
      ajax: {
        url: 'https://api-web-bxum.onrender.com/tradingview/webhook/logs',
        type: 'GET',
        contentType: 'application/json'
      },
      // responsive: true,
      // dom: 'lBfrtip',
  
      buttons: [
        {
          extend: 'csv',
          split: ['pdf', 'excel'],
          title: new Date().getTime() + ' - Data export'
        }
      ],
      lengthMenu: [
        [10, 20, 25, 50, -1],
        [10, 20, 25, 50, 'All']
      ],
      pageLength: 10,
      // order: [[0, 'desc']],
      columns: [
        { title: 'timestamp', data: 'timestamp' },
        { title: 'datetime', data: 'datetime' },
        { title: 'timeframe', data: 'timeframe' },
        { title: 'type', data: 'type' },
        { title: 'exchange', data: 'exchange' },
        { title: 'symbol', data: 'symbol' },
        { title: 'price', data: 'price' },
        { title: 'volume', data: 'volume' },
        // { title: 'open', data: 'open' },
        // { title: 'high', data: 'high' },
        // { title: 'low', data: 'low' },
        // { title: 'close', data: 'close' },
        // { title: 'volume', data: 'volume' },
      ],
      initComplete: function () {
        const table = this;
        // table.api().page('last').draw('page')
        // const data = table.api().rows().data();
        // refreshChart(data)
        // console.log()
      }
    };
    $(document).ready(function () {
      $('#example').DataTable(datatableOptions);
    });
  }
}
