import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModuleService } from '../../../layout/core/services/module.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public tabs = [
    {
      code: 'profile',
      name: 'Profile',
      link: '/main/user/profile'
    },
    {
      code: 'family',
      name: 'Family',
      link: '/main/user/family'
    },
    {
      code: 'vehicle',
      name: 'Vehicle',
      link: '/main/user/vehicle'
    },
    {
      code: 'visitor',
      name: 'Visitor',
      link: '/main/user/visitor'
    },
    {
      code: 'vendor',
      name: 'Vendor',
      link: '/main/user/vendor'
    },
    {
      code: 'payment',
      name: 'Payment',
      link: '/main/user/payment'
    }
  ]

  constructor(private router: Router, public moduleService: ModuleService) { 
    this.moduleService.mainTitle.next("Profile");
  }

  

  ngOnInit(): void {
  }

  redirect = (route: any) => {
    const navigationExtras: NavigationExtras = {
      state: {
        refresh: new Date().getTime()
      }
    }
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([route.link], navigationExtras));
  }

}
