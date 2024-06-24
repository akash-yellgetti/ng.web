import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage'

@Injectable({
  providedIn: 'root'
})
export class EntryGuard implements CanActivate {

constructor(private router: Router, private localStorageService: LocalStorageService) {}

canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  const isBudgetCompleted = this.localStorageService.retrieve('isEntryCompleted') === 'true';
  if (!isBudgetCompleted) {
    this.router.navigate(['main/entry']);
    return false;
  }
  return true;
}
}