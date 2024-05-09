import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PlannerService } from '../../services/api/planner/planner.service';

@Injectable({
  providedIn: 'root'
})
export class PlannerResolver implements Resolve<boolean> {
  constructor(private plannerService: PlannerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.plannerService.getDetail();
  }
}
