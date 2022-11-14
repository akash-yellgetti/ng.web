import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private localStorageService: LocalStorageService, private route: Router, private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuthenication();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkAuthenication();
  }

  checkAuthenication = () => {
    const tokens = this.localStorageService.retrieve('tokens');

    if (!tokens) {
      this.route.navigate(['/auth/login']);
      return false;
    }

    if (tokens && !tokens.accessToken) {
      this.route.navigate(['/auth/login']);
      return false;
    }

    if (tokens && tokens.accessToken) {
      this.authService.check().subscribe((res) => {
        // this.route.navigate(['/auth/login']);
        return true;
      }, error => {
        this.route.navigate(['/auth/login']);
        return false;
      })
    }

    return true;
  }
}
