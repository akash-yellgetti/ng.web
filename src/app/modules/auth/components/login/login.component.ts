import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router, Routes } from '@angular/router';
import { FieldService } from 'src/app/shared/services/field/field.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public isCollapsed: any = true;
  public loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });
  public field = {
    email: {
      label: 'Email',
      name: 'email',
      value: null
    },
    password: {
      label: 'Passowrd',
      name: 'password',
      value: null
    }
  }
  constructor(private fb: FormBuilder, 
    private fieldService: FieldService,
    private authService: AuthService, 
    private storageService: LocalStorageService, 
    private route: Router) { }

  ngOnInit(): void {
  }

  login = () => {
    const controls = this.loginForm.controls;
    const params: any = this.fieldService.json(controls);
    params['email'] = "aakash5792@gmail.com";
    params['password'] = "AAbb12";
    
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
      if(res && res.status) {
        const data = res.data;
        this.storageService.store('tokens', data.tokens);
        this.storageService.store('user', data.user);
        this.route.navigate(['main/dashboard']);
      }
    })
  }

}
