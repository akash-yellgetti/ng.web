import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { ModuleService } from '../../core/services/module.service';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  mainHeader: string = "Main Header";
  collapsed = true;
  
  @Input() isHandset: any;
  @Input() drawerRef: any;
  @Input() drawerChatRef: any;
  @Input() isCollapsed: any;
  @Output() toSideNavToggle: EventEmitter<any> = new EventEmitter();
  constructor(private loaderService: LoaderService, private storageService: LocalStorageService, private route: Router) { }

  ngOnInit(): void {
   
  }

  

  toggle = () => {
    
    console.log(this.isHandset);
    if(this.isHandset){
      this.drawerRef.toggle();
    } else {
      this.toSideNavToggle.emit();
      // this.isCollapsed = !this.isCollapsed;
    }
  }

  toggleChat = () => {
    console.log(this.isHandset);
    // console.log(this.chatRef);
    
    // if(this.isHandset){
      this.drawerChatRef.toggle();
    // } else {
    //   this.toSideNavToggle.emit();
    //   // this.isCollapsed = !this.isCollapsed;
    // }
  }



  logout = () => {
    this.storageService.clear();
    this.route.navigate(['auth/login']);
  }

  redirect = (key: string) => {
    switch (key) {
      case 'home':
        this.route.navigate(['main/home']);
        break;
      case 'finance':
        this.route.navigate(['main/user/finance/dashboard']);
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
