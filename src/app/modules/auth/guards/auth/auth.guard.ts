import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate, CanActivateChild {
  constructor(private localStorageService: LocalStorageService, private route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.localStorageService.retrieve('tokens')|| (this.localStorageService.retrieve('tokens')  && Object.keys(this.localStorageService.retrieve('tokens')).length < 0)){
      // alert("not logged in");
      // redirect to not authorized page o
      this.route.navigate(['/auth/login']);
      return false
    }

    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(!this.localStorageService.retrieve('tokens')|| (this.localStorageService.retrieve('tokens')  && Object.keys(this.localStorageService.retrieve('tokens')).length < 0)){
      // alert("not logged in");
      // redirect to not authorized page o
      this.route.navigate(['/auth/login']);
      return false
    }

    return true;
  }
}
