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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide: boolean = false;
  public isCollapsed: any = false;
  public fields: any = [];
  public loginForm: any;
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
    private route: Router) {
    // this.fields = forms.login;
    this.fields = forms.login;
    this.loginForm = this.fb.group(this.fieldService.getFormGroupFields(this.fields))


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

    if (this.loginForm.invalid) {
      return;
    }

    const controls: any = this.loginForm.controls;
    const params = this.fieldService.json(controls);
    const myObserver: any = {
      next: (res: any) => {
        // console.log('Observer got a next value: ' + res);
        if (res && res.code === 200) {          
          this.toastr.success(res.message);
          const data = res.payload;
          const user: any = data.user;
          // const fullName: string = user.firstName+" "+user.lastName;
          const fullName: string = user.fname+" "+user.lname;
          user.fullName = fullName;
          const shortName: any = fullName.match(/\b(\w)/g)?.join('');
          user.shortName = shortName;
          this.storageService.store('tokens', data.token);
          this.storageService.store('user', user);
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
