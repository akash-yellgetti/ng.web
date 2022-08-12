import { AfterViewInit, Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import * as data from '../../../core/json/data.json';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Output() public mainHeader = new EventEmitter<string>();
  form: any = {
    name: '',
    action: 'list'
  };
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
  }
  fields: any =  [ {
    name: 'name',
    datatable_data: 'name',
  },
  {
    name: 'position',
    datatable_data: 'position',
  },
  {
    name: 'salary',
    datatable_data: 'salary',
  },
  
];
  items: any = [];
  @ViewChild(MatPaginator) any: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute) {
    this.items = _.get(data, 'default.data');
    this.paginator.displayedColumns = _.union(_.values(_.mapValues(this.fields, 'datatable_data')), ['more']);

  }

  ngOnInit(): void {
  }

  action = (type: string, data?: any) => {
  }

  getTableField = () => {
    return this.fields;
  }
  
  handlePageEvent = (event: any) => {
    this.paginator.pageSize = event.pageSize;
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.sort = {};
    // this.list()
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
