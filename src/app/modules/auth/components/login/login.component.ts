import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router, Routes } from '@angular/router';
import { FieldService } from 'src/app/shared/services/field/field.service';
import { forms } from 'src/app/shared/json/forms.json';
import * as _ from 'lodash';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import Swal from 'sweetalert2'

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
    private route: Router) {
    // this.fields = forms.login;
    this.fields = forms.login;
    this.loginForm = this.fb.group(this.fieldService.getFormGroupFields(this.fields))


  }

  async ngOnInit(): Promise<any> {
    // this.isCollapsed = await this.breakpointObserver.observe(Breakpoints.Handset);
    // console.log('isCollapse', this.isCollapsed)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  login = (): any => {
    const controls = this.loginForm.controls;
    const errors = this.fieldService.validate(controls, this.fields);
    if (errors.length > 0) {
      return false;
    }
    const params = this.fieldService.json(controls);
    const myObserver = {
      next: (res: number) => {
        console.log('Observer got a next value: ' + res);
      },
      error: (err: Error) => {
        console.error('Observer got an error: ' + err);
      },
      complete: () => {
        console.log('Observer got a complete notification');
      },
    };

    this.authService.login(params).subscribe((res: any) => {
      if (res && res.status) {
        const data = res.data;
        this.storageService.store('tokens', data.tokens);
        this.storageService.store('user', data.user);
        this.route.navigate(['main/dashboard']);
      }
    })
  }

}
