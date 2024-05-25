import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { FieldService } from '../../../../shared/services/field/field.service';
import { AuthService } from '../../services/auth/auth.service';
import * as _ from 'lodash';
import Swal from 'sweetalert2'
import { forms } from 'src/app/shared/json/forms.json';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public hide: boolean = true;

  public isCollapsed: any = false;
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public form: any;
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
  public verifyOtpCount = 0;
  public flag = {
    requestOtp: true,
    resendOtp: false,
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
  constructor(
    private fb: FormBuilder, 
    private route: Router, 
    private toastr: ToastrService,
    private storageService: LocalStorageService,
    private fieldService: FieldService, private authService: AuthService) {
    this.form = forms.registrationForm;
  }

  ngOnInit(): void {
  }

  resendOTP = (): any => {
    this.form.no.value = '';
    this.generateOTP();
  }

  generateOTP = (): any => {
    const errors = this.fieldService.validateForm(this.form);
    if (Object.keys(errors).length > 0 ){
      this.fieldService.setToastr(errors)
      return false;
    }
    const params = this.fieldService.json(this.form);
    params.type = this.flag.otpFlag;

    this.authService.generateOTP(params).subscribe((res: any) => {
      if (res && res.status) {
        this.flag.requestOtp = false;
        this.flag.verifyOtp = true;
        this.flag.mobileNo = true;
        this.toastr.success('OTP Sent Successfully');
      }
    });
  }

  verify = (): any => {
    const errors = this.fieldService.validateForm(this.form);
    if (Object.keys(errors).length > 0 ){
      this.fieldService.setToastr(errors)
      return false;
    }
    const params = this.fieldService.json(this.form);
    params.type = this.flag.otpFlag;

    this.authService.verifyOTP(params).subscribe((res: any) => {
      if (res && res.status) {
        this.flag.requestOtp = false;
        this.flag.verifyOtp = false;
        this.flag.register = true;
        this.toastr.success(res.message);
        this.toastr.success('Please fill the password and confirm password to register');
      } else {
        this.verifyOtpCount++;
        if(this.verifyOtpCount >= 3){
          this.flag.requestOtp = false;
          this.flag.resendOtp = true;
          this.flag.verifyOtp = false;
          this.flag.mobileNo = false;
          this.flag.register = false;
          this.toastr.error('You have reached the maximum limit of OTP verification. Please try again later');
        } else {
          this.toastr.error(res.message);
        }
      }
    });
  }

  register = () => {
    const params = this.fieldService.json(this.form);
    params.type = this.flag.otpFlag;

    const myObserver: any = {
      next: (res: any) => {

        Swal.fire({
          title: 'Registered successfully',
          icon: 'success',
          confirmButtonColor: '#002b5c',
          confirmButtonText: 'Redirect To Login'
        }).then((result) => {
          if (result.isConfirmed) {
            this.flag.requestOtp = false;
            this.flag.verifyOtp = false;
            this.flag.register = true;
            this.route.navigate(['auth/login']);
          }
        });
      },
      error: (err: any) => {
        if (err && err.error && err.error.message) {
          Swal.fire(
            'Warning!',
            err.error.message,
            'error'
          )  
        }
      },
      complete: () => {
        console.log('Observer got a complete notification');
      },
    };

    this.authService.register(params).subscribe(myObserver);
  }
}

