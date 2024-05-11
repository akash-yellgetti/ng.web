import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router, Routes } from '@angular/router';
import { FieldService } from '../../../../shared/services/field/field.service';

import { forms } from 'src/app/shared/json/forms.json';
import * as _ from 'lodash';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public isCollapsed: any = false;
  public fields: any = [];
  public loginForm: any;
  public form: any;
  public deviceInfo: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private fieldService: FieldService,
    private authService: AuthService,
    private storageService: LocalStorageService,
    private toastr: ToastrService,
    private deviceService: DeviceDetectorService,
    private route: Router) {
    // this.fields = forms.login;
    // this.fields = forms.login;

    // this.loginForm = this.fb.group(this.fieldService.getFormGroupFields(this.fields))
    this.form = forms.loginForm;
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  async ngOnInit(): Promise<any> {
    // this.isCollapsed = await this.breakpointObserver.observe(Breakpoints.Handset);
    // console.log('isCollapse', this.isCollapsed)
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!',
    //   showClass: {
    //     popup: 'animate__animated animate__fadeInDown'
    //   },
    //   hideClass: {
    //     popup: 'animate__animated animate__fadeOutUp'
    //   }
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     )
    //   }
    // })
  }

  login = (): any => {

    const errors = this.fieldService.validateForm(this.form);
    if (Object.keys(errors).length > 0 ){
      this.fieldService.setToastr(errors)
      return false;
    }

    const params = this.fieldService.json(this.form);
    console.log(params)
    const myObserver: any = {
      next: async(res: any) => {
        // console.log('Observer got a next value: ' + res);
        if (res && res.status === true) {
          const deviceParams = {...this.deviceInfo };
          // this.toastr.success(res.message);
          const data = res.data;
          const user: any = data.user;
          const fullName: string = user.firstName+" "+user.lastName;
          // const fullName: string = user.fname+" "+user.lname;
          user.fullName = fullName;
          const shortName: any = fullName.match(/\b(\w)/g)?.join('');
          user.shortName = shortName;
          this.storageService.store('tokens', data.tokens);
          this.storageService.store('user', user);
          const deviceRes: any = await this.authService.saveDevice(deviceParams).toPromise();
          const deviceData = deviceRes.data;
          this.storageService.store('device', {...deviceParams, deviceId: deviceData._id });
          this.route.navigate(['main/layout/dashboard']);
        }
      },
      error: (err: any) => {
        if (err && err.error && err.error.message) {
          // Swal.fire(
          //   'Warning!',
          //   err.error.message,
          //   'error'
          // )  
          this.toastr.error(err.error.message);
        }
      },
      complete: () => {
        console.log('Observer got a complete notification');
      },
    };

    this.authService.login(params).subscribe(myObserver)
  }

}
