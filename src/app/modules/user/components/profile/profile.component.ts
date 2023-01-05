import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModuleService } from '../../../main/core/services/module.service';
import { LocalStorageService } from 'ngx-webstorage';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile/profile.service';
import { FieldService } from 'src/app/shared/services/field/field.service';
import { setting } from '../../../../shared/json/setting.json';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('editProfileImagesDialog', { static: true })
  editProfileImagesTemplate!: TemplateRef<any>;
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

  profileImages: any = {
    picture: {
      url: null,
      evt: null,
      src: null,
      blob: null,
    },
    pictureBackground: {
      url: null,
      evt: null,
      src: null,
      blob: null,
    },
  };

  constructor(
    private router: Router,
    public moduleService: ModuleService,
    private fieldService: FieldService,
    private localStorageService: LocalStorageService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public profileService: ProfileService
  ) {
    this.moduleService.mainTitle.next('Profile');
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
      this.profileBg =
        setting['uri'] + '/' + this.user.profilePictureBackground;
    }
  };

  redirect = (route: any) => {
    const navigationExtras: NavigationExtras = {
      state: {
        refresh: new Date().getTime(),
      },
    };
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([route.link], navigationExtras));
  };

  editProfile = () => {
    const dialogRef = this.dialog.open(this.editProfileImagesTemplate, {
      width: '800px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.clearFile('all');
    });
  };

  onFileSelected = (event: any, type: any) => {
    if (
      event &&
      event.target &&
      event.target.files &&
      event.target.files.length > 0
    ) {
      const file: File = event.target.files[0];
      if (type === 'profile') {
        // this.selectedFile = file;
        this.profileImages.picture.evt = event;
      } else if (type === 'profileBg') {
        // this.selectedFileBg = file;
        this.profileImages.pictureBackground.evt = event;
      }
    } else {
      this.clearFile(type);
    }
  };

  clearFile = (type: any) => {
    if (type === 'profile') {
      this.selectedFile = null;
      this.profileImages.picture.evt = null;
      this.profileImages.picture.blob = null;
    } else if (type === 'profileBg') {
      this.selectedFileBg = null;
      this.profileImages.pictureBackground.evt = null;
      this.profileImages.pictureBackground.blob = null;
    } else if (type === 'all') {
      this.selectedFile = null;
      this.selectedFileBg = null;
      this.profileImages.picture.evt = null;
      this.profileImages.picture.blob = null;
      this.profileImages.pictureBackground.evt = null;
      this.profileImages.pictureBackground.blob = null;
    }
  };

  upload = (): any => {
    // console.log(this.selectedFile)
    if (this.selectedFile === null && this.selectedFileBg === null) {
      return false;
    }

    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('profilePicture', this.selectedFile);
    }

    if (this.selectedFileBg) {
      formData.append('profilePictureBackground', this.selectedFileBg);
    }

    const myObserver: any = {
      next: (res: any) => {
        // console.log('Observer got a next value: ' + res);
        if (res && res.status) {
          let user: any = this.user;
          user = { ...user, ...res.data };
          this.localStorageService.store('user', user);
          this.user = user;
          this.setProfileImage();
          this.clearFile('all');
        }
      },
    };
    this.profileService.updateProfilePic(formData).subscribe(myObserver);
  };

  update = (): any => {
    if (this.profileForm.invalid) {
      console.log(this.profileForm);
      return;
    }

    const controls = this.profileForm.controls;
    const params: any = this.fieldService.json(controls);

    const myObserver: any = {
      next: (res: any) => {
        // console.log('Observer got a next value: ' + res);
        if (res && res.status) {
          let user: any = this.user;
          user = { ...user, ...res.data };
          const fullName: string = user.firstName + ' ' + user.lastName;
          user.fullName = fullName;
          const shortName: any = fullName.match(/\b(\w)/g)?.join('');
          user.shortName = shortName;
          this.localStorageService.store('user', user);
          this.user = user;
        }
      },
    };
    this.profileService.updateProfile(params).subscribe(myObserver);
  };

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent, field: any, key: any) {
    field.src = event.base64;
    field.blob = this.b64toBlob(event.base64, 'image/png');
    switch (key) {
      case 'picture':
        this.selectedFile = field.blob;
        break;
      case 'pictureBackground':
        this.selectedFileBg = field.blob;
        break;

      default:
        break;
    }
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  b64toBlob = (dataURI: any, type: any) => {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type });
  };
}
