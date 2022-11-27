import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { financeDashboard } from 'src/app/shared/json/finance-dashboard.json';

@Component({
  selector: 'app-expense-common',
  templateUrl: './expense-common.component.html',
  styleUrls: ['./expense-common.component.scss']
})
export class ExpenseCommonComponent implements OnInit {
  public data: any = [];
  constructor(private router: ActivatedRoute) {
    const path: any = this.router.snapshot.routeConfig?.path;
    this.data = _.get(_.groupBy(financeDashboard, 'type'), path);
    
  }

  ngOnInit(): void {
  }

}
