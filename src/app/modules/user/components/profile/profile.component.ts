import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModuleService } from '../../../layout/core/services/module.service';
import { LocalStorageService } from 'ngx-webstorage';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile/profile.service';
import { setting } from '../../../../shared/json/setting.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('editProfileImagesDialog', { static: true })
  editProfileImagesTemplate!: TemplateRef<any>;
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
  profileImg: any;
  profileBg: any;
  selectedFile: any;
  selectedFileBg: any;

  constructor(private router: Router, public moduleService: ModuleService, private localStorageService: LocalStorageService, private fb: FormBuilder, 
    public dialog: MatDialog,
    public profileService: ProfileService
    ) {
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
    this.setProfileImage();
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

  redirect = (route: any) => {
    const navigationExtras: NavigationExtras = {
      state: {
        refresh: new Date().getTime()
      }
    }
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([route.link], navigationExtras));
  }

  editProfile = () => {
    const dialogRef = this.dialog.open(this.editProfileImagesTemplate, {
      width: '800px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.clearFile('all');
    });
  }

  onFileSelected = (event: any, type: any) => {
    if (event && event.target && event.target.files && event.target.files.length > 0) {
      const file: File = event.target.files[0];
      if (type === 'profile') {
        this.selectedFile = file;
      } else if (type === 'profileBg') {
        this.selectedFileBg = file;
      }
    } else {
      this.clearFile(type);
    }
  }

  clearFile = (type: any) => {
    if (type === 'profile') {
      this.selectedFile = null;
    } else if (type === 'profileBg') {
      this.selectedFileBg = null;
    } else if (type === 'all') {
      this.selectedFile = null;
      this.selectedFileBg = null;
    }
  }

  upload = (): any => {
    // console.log(this.selectedFile)
    if(this.selectedFile === null && this.selectedFileBg === null) {
      return false;
    }

    const formData = new FormData();
    if(this.selectedFile) {
      formData.append('profilePicture', this.selectedFile);
    }

    if(this.selectedFileBg) {
      formData.append('profilePictureBackground', this.selectedFileBg);
    }

    const myObserver: any = {
      next: (res: any) => {
        // console.log('Observer got a next value: ' + res);
        if (res && res.status) {
          const data = res.data;
          const user: any = data.user;
          const fullName: string = user.firstName+" "+user.lastName;
          user.fullName = fullName;
          const shortName: any = fullName.match(/\b(\w)/g)?.join('');
          user.shortName = shortName;
          this.localStorageService.store('tokens', data.tokens);
          this.localStorageService.store('user', user);
          
        }
      }
    };
    this.profileService.updateProfilePic(formData).subscribe()
  }

}
