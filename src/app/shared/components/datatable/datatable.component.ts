import { AfterViewInit, Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '../../../modules/layout/core/services/module.service';
import * as _ from 'lodash';
import * as data from '../../../modules/layout/core/json/data.json';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
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
    this.items = _.get(data, 'default.data');
    const subModuleData = this.moduleService.getSubModule();
     
    this.data = subModuleData;
    this.fields = subModuleData.fields;
    //  console.log(this.items)
    
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

  sortData = (evt: any) => {
    // this.paginator.sort = event;
    // this.paginator.pageIndex = 0;
    // this.list();
    console.log(evt)
    evt.direction = evt.direction || 'asc';
    const items = _.orderBy(_.cloneDeep(this.items), [evt.active], [evt.direction]);
    console.log(items)
    this.items = items;
    
  }
}

