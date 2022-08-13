import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { PaginationInstance } from 'ngx-pagination';
import * as data from '../../../core/json/data.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  items: any = [];
  config: PaginationInstance = { itemsPerPage: 12, currentPage: 1 };
  constructor() { 
    this.items = _.get(data, 'default.data');
    // console.log(this.items);
  }

  ngOnInit(): void {
  }

  handlePageChange = (evt: any) => {
    this.config.currentPage = evt;
  }
}
