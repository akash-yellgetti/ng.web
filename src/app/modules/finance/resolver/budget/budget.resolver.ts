import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BudgetService } from '../../services/api/budget/budget.service';
import { LoaderService } from '../../../../shared/services/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetResolver implements Resolve<boolean> {
  constructor(private budgetService: BudgetService, private loaderService: LoaderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.loaderService.showLoader();
    return this.budgetService.getDetail();
  }
}

