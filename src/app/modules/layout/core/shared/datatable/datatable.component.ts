import { AfterViewInit, Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '../../services/module.service';
import * as _ from 'lodash';
import * as data from '../../json/data.json';


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
  fields: any =  [];
  data: any = null;
  items: any = [];
  config: PaginationInstance = { itemsPerPage: 15, currentPage: 1 };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) {
     this.moduleService.setCurrentRoute(this.route.snapshot.data.module, this.route.snapshot.data.subModule);
     const data = this.moduleService.getSubModule();
    //  console.log(data.fields)
     this.data = data;
     this.fields = data.fields;
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

