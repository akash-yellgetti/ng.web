import { Component, OnInit } from '@angular/core';
import { routine } from 'src/app/shared/json/routine.json';
import * as _ from 'lodash';
import { SelectionType } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss']
})
export class RoutineComponent implements OnInit {
  public data: any = routine;
  public columns: any = [
    {
      'name': 'type',
    }, {
    'name': 'start',
  },{
    'name': 'end', 
  },{
    'name': 'duration', 
  },{
    'name': 'currentSlot',
  },{
    'name': 'title', 
  },{
    'name': 'description',
  }
  ];
  selected: any = [];
  SelectionType = SelectionType;
  constructor() { }

  ngOnInit(): void {
    this.selected = _.filter(this.data, (r: any) => r && r.currentSlot === true);
    console.log(this.selected)
  }

  onSelect({ selected } : any) {
    console.log('Select Event', selected, this.selected);
  }
}
