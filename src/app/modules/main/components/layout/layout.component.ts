import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
// import * as menus from '../core/json/menus.json';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { ModuleService } from '../../core/services/module.service';
import { setting } from '../../../../shared/json/setting.json';
import { SocketService } from '../../../../shared/services/socket/socket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public mainTitle: string = 'Dashboard';
  public isCollapsed: any = false;
  public user: any = null;
  profileImg: any;
  profileBg: any;
  // mobileQuery: MediaQueryList;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private localStorageService: LocalStorageService, 
    private route: Router, 
    private socketService: SocketService, 
    private toastr: ToastrService, 
    public moduleService: ModuleService) {
    this.moduleService.mainTitle.subscribe((r: any) => {
      this.mainTitle = r;
    })
    this.user = this.localStorageService.retrieve('user');
    this.setProfileImage();
    // this.socketService.connect();
    // this.socketService.emit('main');
    // this.socketService.join('main');
    // this.socketService.join('notification');
    this.socketService.getNotification()
    .subscribe((notification: any) => {
      // console.log(r)
      const data = notification.data;
      // console.log(data)
      this.toastr.info(data.description, data.title)
    })
    // this.socketService.getMessage().subscribe((r) => {
    //   console.log('message', r)
    // })

    this.socketService.getOnlineUsers().subscribe((res: any) => {
      this.localStorageService.store('onlineUsers', res.users.filter((r: any) => r && r.userId && r.userId !== this.user._id ));
      // console.log(res.userId === user._d);
      // this.users = res.users.filter((r: any) => r && r.userId && r.userId !== user._id );
    })
  }

  setProfileImage = () => {
    this.user = this.localStorageService.retrieve('user');
    if (this.user && this.user.profilePicture) {
      this.profileImg = setting['uri'] + '/' + this.user.profilePicture;
    }

    if (this.user && this.user.profilePictureBackground) {
      this.profileBg = setting['uri'] + '/' + this.user.profilePictureBackground;
    }
  }
  
  logout = () => {
    this.localStorageService.clear();
    this.route.navigate(['auth/login']);
  }

  redirect = (key: string) => {
    switch (key) {
      case 'home':
        this.route.navigate(['main/layout/home']);
        break;
      case 'dashboard':
        this.route.navigate(['main/layout/dashboard']);
        break;
      case 'finance':
        this.route.navigate(['main/layout/user/finance/dashboard']);
        break;
      case 'profile':
        this.route.navigate(['main/layout/user/profile']);
        break;
      case 'family':
        this.route.navigate(['main/layout/user/family']);
        break;
      case 'chat':
        this.route.navigate(['main/layout/user/chat']);
        break;
      case 'notification':
        this.route.navigate(['main/layout/user/notification']);
        break;
      case 'home':
        this.route.navigate(['main/layout/home']);
        break;
      case 'setting':
        this.route.navigate(['main/layout/setting']);
        break;
      case 'blank':
        this.route.navigate(['main/layout/blank']);
        break;
      case 'help':
        this.route.navigate(['main/layout/help']);
        break;
      case 'finance':
        this.route.navigate(['main/layout/user/finance/dashboard']);
        break;
      case 'profile':
        this.route.navigate(['main/layout/user/profile']);    
        break;
      case 'family':
        this.route.navigate(['main/layout/user/family']);
        break;
      case 'chat':
        this.route.navigate(['main/layout/user/chat']);
        break;
      case 'notification':
        this.route.navigate(['main/layout/user/notification']);
        break;
      case 'logout':
        this.logout();
        break;
    
      default:
        break;
    }
  }

  sideNavToggle = () => {
    this.isCollapsed = !this.isCollapsed;
  }
}
