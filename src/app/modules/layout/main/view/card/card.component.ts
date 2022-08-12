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
    console.log(this.items);
  }

  ngOnInit(): void {
  }

  action = (type: string, data?: any) => {
    // switch (type) {
    //   case 'add':
    //     const form = this.form;
    //     form.action = 'add';
    //     this.fields = _.get(form, 'fields');
    //     break;
    //   case 'edit':
    //     this.form.action = 'edit';
    //     this.detail(data);
    //     break;
    //   case 'delete':
    //     this.form.action = 'delete';
    //     this.delete(data);
    //     break;
    //   case 'cancel':
    //     this.form.action = 'list';
    //     break;

    //   default:
    //     break;
    // }
  }
}
