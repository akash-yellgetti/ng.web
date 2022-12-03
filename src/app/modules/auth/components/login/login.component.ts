import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public fields: any = [
    {
      "name": "email",
      "label": "Email",
      "value": "akash@sociosafety.com"
    },
    {
      "name": "password",
      "label": "password",
      "value": "12345"
    }
  ];
  public isCollapsed: any = true;
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
  constructor(private authService: AuthService, private storageService: LocalStorageService, private route: Router) { }

  ngOnInit(): void {
  }

  login = () => {
    const params: any = {
      "email": this.field.email.value,
      "password": this.field.password.value,
    };

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
        this.route.navigate(['main/user/finance/dashboard']);
      }
    })
  }

}
