import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as data from '../../../core/json/data.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  items: any = [];
  constructor() { 
    this.items = _.get(data, 'default.data');
    // console.log(this.items);
  }

  ngOnInit(): void {
  }
}
