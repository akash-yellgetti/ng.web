import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModuleService } from '../../../layout/core/services/module.service';
import { LocalStorageService } from 'ngx-webstorage';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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
  ];
  user: any;
  public profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [null, Validators.required],
    gender: [null, Validators.required],
    dob: [null, Validators.required],
    mobileNo: [null, Validators.required],
    email: [null, []],
  });

  constructor(private router: Router, public moduleService: ModuleService, private localStorageService: LocalStorageService, private fb: FormBuilder) {
    this.moduleService.mainTitle.next("Profile");
  }

  

  ngOnInit(): void {
    const user: any = this.localStorageService.retrieve('user');
    this.user = user;
    // this.profileForm.firstName.setValue('akash');
    this.profileForm.controls['firstName'].setValue(user.firstName);
    this.profileForm.controls['lastName'].setValue(user.lastName);
    this.profileForm.controls['gender'].setValue(user.gender);
    this.profileForm.controls['dob'].setValue(user.dob);
    this.profileForm.controls['mobileNo'].setValue(user.mobileNo);
    this.profileForm.controls['email'].setValue(user.email);
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
