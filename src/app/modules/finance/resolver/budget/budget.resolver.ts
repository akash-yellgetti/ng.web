import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BudgetService } from '../../services/api/budget/budget.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetResolver implements Resolve<boolean> {
  constructor(private budgetService: BudgetService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.budgetService.getDetail();
  }
}

