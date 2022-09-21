import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
 
import { MoneyControlService } from '../../services/money-control/money-control.service';

@Injectable({
  providedIn: 'root'
})
export class StockResolverService implements Resolve<any> {
    constructor(private moneyControl: MoneyControlService) {}
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      // console.log('Called Get Product in resolver...', route);
      return this.moneyControl.info(route.params.id).pipe(
        catchError(error => {
          return of('No data');
        })
      );
    }
  }
  
