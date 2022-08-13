import { AfterViewInit, Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import * as data from '../../../core/json/data.json';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  paginator: any = {
    draw: 0,
    length: 100,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
    pageIndex: 1,
    showFirstLastButtons: true,
    search: "",
    sort: {},
    displayedColumns: []
  };
  fields: any =  [ 
    {
      name: 'Name',
      datatable_data: 'name',
    },
    {
      name: 'Position',
      datatable_data: 'position',
    },
    {
      name: 'Salary',
      datatable_data: 'salary',
    },
  
  ];
  items: any = [];
  config: PaginationInstance = { itemsPerPage: 12, currentPage: 1 };
  constructor() { 
    this.items = _.get(data, 'default.data');
    // console.log(this.items);
  }

  ngOnInit(): void {
  }

  action = (type: string, data?: any) => {
  }

  getTableField = () => {
    return this.fields;
  }

  handlePageChange = (evt: any) => {
    this.config.currentPage = evt;
  }

  search = () => {
    this.paginator.pageSize = 10;
    this.paginator.pageIndex = 0;
    this.paginator.sort = {};
    // this.list();
  }

  onSearchClear = () => {
    this.paginator.search = "";
    this.paginator.pageSize = 10;
    this.paginator.pageIndex = 0;
    this.paginator.sort = {};
    // this.list();
  }

  sortData = (event: any) => {
    this.paginator.sort = event;
    this.paginator.pageIndex = 0;
    // this.list();
  }
}

