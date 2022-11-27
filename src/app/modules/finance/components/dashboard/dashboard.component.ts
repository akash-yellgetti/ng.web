import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public data = {
    assets: [
      {
        "name": "ePF",
        "value": 196000,
      },
      {
        "name": "eNPS",
        "value": 100000,
      },
      {
        "name": "PPF",
        "value": 100000,
      },
      {
        "name": "stocks",
        "value": 60000,
      },
      {
        "name": "mutual-fund",
        "value": 15000,
      }
    ],
    liabilities: [
      {
        "name": "HouseHold",
        "value": 25000,
      },
      {
        "name": "Akash Axis PL",
        "value": 15500,
      },
      {
        "name": "Panu Axis PL",
        "value": 6500,
      },
      {
        "name": "Home Loan",
        "value": 50000,
      },
      {
        "name": "Home Loan Addon",
        "value": 10000,
      }
    ],
    goals: [
      {
        "name": "Stock Portfolio",
        "value": 3000000,
      },
      {
        "name": "Europe Studies",
        "value": 2000000,
      },
      {
        "name": "chikoowadi Downpayment",
        "value": 4000000,
      },
      
      {
        "name": "Child Marriage",
        "value": 8000000,
      },
      {
        "name": "Child Education",
        "value": 10000000,
      },
      {
        "name": "Retirement",
        "value": 50000000,
      }
    ]
  }
  public single = [
    {
      "name": "Principal",
      "value": 300000
    },
    {
      "name": "Interest",
      "value": 104000,
    },
  ]
  legendPosition: any = "below";
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }

}
