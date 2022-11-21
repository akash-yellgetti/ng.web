import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as menus from '../core/json/menus.json';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  // mobileQuery: MediaQueryList;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private localStorageService: LocalStorageService, private route: Router) {}
  
  logout = () => {
    this.localStorageService.clear();
    this.route.navigate(['auth/login']);
  }

  redirect = (key: string) => {
    switch (key) {
      case 'home':
        this.route.navigate(['main/home']);
        break;
      case 'finance':
        this.route.navigate(['main/user/personal-finance']);
        break;
      case 'profile':
        this.route.navigate(['main/user/profile']);    
        break;
      case 'family':
        this.route.navigate(['main/user/family']);
        break;
      case 'chat':
        this.route.navigate(['main/user/chat']);
        break;
      case 'notification':
        this.route.navigate(['main/user/notification']);
        break;
    
      default:
        break;
    }
    
  }
}
