import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataArray: any = [
    {
      id: 20, title: 'Match', desc: 'BL Match',
      startDate: new Date(), endDate: new Date(), createdBy: 'Mark',
      createdAt: new Date("2019-11-10T10:00:00"), type: 2, color: 'red'
    },

  ];;
  circumference = 2 * Math.PI * 50;
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "arrows": false };
  notes: any[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  calc(value: any) {
    const progress = value / 100;
    return this.circumference * (1 - value);
  }

  selectDay = (evt: any) => {
    console.log(evt);
  }

  addEvent = (evt: any) => {
    console.log(evt);
  }

}
