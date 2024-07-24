import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})

export class EntryGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkEntryPage();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.checkEntryPage();
  }

  checkEntryPage = () => {
    const isBudgetCompleted =
      this.localStorageService.retrieve('isEntryCompleted');
    if (isBudgetCompleted === false) {
      this.router.navigate(['main/entry']);
      return false;
    }
    return true;
  };
}
