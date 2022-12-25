import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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

  public isCollapsed: any = false;
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public registrationForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    gender: [null, Validators.required],
    dob: [null, Validators.required],
    mobileNo: [null, Validators.required],
    no: [null, []],
    email: [null, []],
    password: [null, []],
    confirmPassword: [null, []],
  });

  public flag = {
    requestOtp: true,
    verifyOtp: false,
    mobileNo: false,
    register: false,
    otpFlag: 'requestRegister'
  };
  public input: any = {
    otp: ''
  };
  public otp: string = '';
  public password: string = '';
  public confirm_password: string = '';
  public fields: any;
  constructor(private fb: FormBuilder, private route: Router, private storageService: LocalStorageService,
    private fieldService: FieldService, private loaderService: LoaderService, private authService: AuthService) { }

  ngOnInit(): void {
    // this.fields = _.get(form, 'default.fields');
  }

  generateOTP = (): any => {
    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.invalid) {
      return;
    }
    const controls = this.registrationForm.controls;
    const errors = this.fieldService.validate(controls, this.fields);
    if (errors.length > 0) {
      return false;
    }
    const params: any = this.fieldService.json(controls);
    params.type = this.flag.otpFlag;

    this.authService.generateOTP(params).subscribe((res: any) => {
      if (res && res.status) {
        this.flag.requestOtp = false;
        this.flag.verifyOtp = true;
        this.flag.mobileNo = true;
      }
    });
  }

  verify = (): any => {
    if (this.registrationForm.invalid) {
      return;
    }
    const controls = this.registrationForm.controls;
    const errors = this.fieldService.validate(controls, this.fields);
    if (errors.length > 0) {
      return false;
    }
    const params: any = this.fieldService.json(controls);
    params.type = this.flag.otpFlag;

    this.authService.verifyOTP(params).subscribe((res: any) => {
      if (res && res.status) {
        this.flag.requestOtp = false;
        this.flag.verifyOtp = false;
        this.flag.register = true;
      }
    });
  }

  register = () => {
    if (this.registrationForm.invalid) {
      return;
    }

    const controls = this.registrationForm.controls;
    const params: any = this.fieldService.json(controls);
    params.type = this.flag.otpFlag;

    this.authService.register(params).subscribe((res: any) => {
      if (res && res.status) {
        this.flag.requestOtp = false;
        this.flag.verifyOtp = false;
        this.flag.register = true;
        this.route.navigate(['auth/login']);
      }
    });
  }
}

