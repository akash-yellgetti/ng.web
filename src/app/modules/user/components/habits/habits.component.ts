import { Component, OnInit } from '@angular/core';
import { habits } from 'src/app/shared/json/habits.json';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss']
})
export class HabitsComponent implements OnInit {
  public data: any = habits;
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
