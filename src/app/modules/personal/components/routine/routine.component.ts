import { Component, OnInit } from '@angular/core';
import { routine } from 'src/app/shared/json/routine.json';

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
    'name': 'type', 
  },{
    'name': 'title', 
  },{
    'name': 'decription',
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
