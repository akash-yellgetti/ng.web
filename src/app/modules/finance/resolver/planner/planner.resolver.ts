import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PlannerService } from '../../services/api/planner/planner.service';
import { LoaderService } from '../../../../shared/services/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class PlannerResolver implements Resolve<boolean> {
  constructor(private plannerService: PlannerService, private loaderService: LoaderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.loaderService.showLoader();
    return this.plannerService.getDetail();
  }
}
