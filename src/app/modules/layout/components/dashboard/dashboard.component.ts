import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  circumference = 2 * Math.PI * 50;
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "arrows": false};

  constructor() { }

  ngOnInit(): void {
  }

  calc(value: any) {
    const progress = value / 100;
    return this.circumference * (1 - value);
  }

}
