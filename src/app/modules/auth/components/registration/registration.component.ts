import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { FieldService } from 'src/app/shared/services/field/field.service';
import { AuthService } from '../../services/auth/auth.service';
import * as _ from 'lodash';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public hide: boolean = true;
  
  public isCollapsed: any = true;
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });
  
  public flag = {
    requestOtp: true,
    verifyOtp: false,
    mobileNo: false,
    register: false,
    otpFlag: 'Request'
  };
  public input: any = {
    otp: ''
  };
  public otp: string= '';
  public password: string= '';
  public confirm_password: string = '';
  public fields: any;
  constructor(private fb: FormBuilder, private router: Router, private storageService: LocalStorageService, 
    private fieldService: FieldService, private loaderService: LoaderService, private authService: AuthService) { }

  ngOnInit(): void {
    // this.fields = _.get(form, 'default.fields');
  }

  request = function (type: any) {
    // var otpParams = {
    //   email: _.get(_.find(this.fields, { name: 'email' }), 'value'),
    //   mobile_no: _.get(_.find(this.fields, { name: 'mobile_no' }), 'value'),
    //   flag: 'reg'
    // };


    // this.authService.generateOTP(otpParams).subscribe((res) => {
    //   // var res = data.data;
    //   console.log(res);
    //   // return $window.open('/login', '_self');
    //   if (res && res.status && res.status === 1) {
    //     this.flag.requestOtp = false;
    //     this.flag.verifyOtp = true;
    //     this.flag.mobileNo = true;
    //   }
    // });
  }

  verify = (otp: any) => {

    // var otpParams = {
    //   email: _.get(_.find(this.fields, { name: 'email' }), 'value'),
    //   mobile_no: _.get(_.find(this.fields, { name: 'mobile_no' }), 'value'),
    //   flag: 'reg',
    //   otp: otp
    // };

    // console.log(otpParams);

    // this.authService.verifyOTP(otpParams).subscribe((res) => {
    //   if (res.status == 1) {
    //     this.flag.requestOtp = false;
    //     this.flag.verifyOtp = false;
    //     this.flag.register = true;
    //   }
    //   // return $window.open('/login', '_self');
    // });
  }

  register = () => {
    // const fields = this.fields;

    // const errors = this.fieldService.setFields(this.fields).validate().getErrors();

    // if (this.fieldService.getErrorsCount()) {
    //   this.fieldService.setToastr();
    // }
    // const params = this.fieldService.getJsonData();
    // params.password = this.password;
    // params.confirm_password = this.confirm_password;
    // this.authService.register(params).subscribe((res) => {
    //   if (res.status == 1) {
    //     this.flag.requestOtp = false;
    //     this.flag.verifyOtp = false;
    //     this.flag.register = true;
    //     this.router.navigate(['auth/login']);
    //   }
    // });
  }
}

