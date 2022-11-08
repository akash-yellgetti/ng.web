import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private storageService: LocalStorageService, private route: Router) { }

  ngOnInit(): void {
  }

  login = () => {
    const params: any = {
      "email": "aakash5792@gmail.com",
      "password": "AAbb12"
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
        this.storageService.store('tokens', res.data);
        this.route.navigate(['main']);
      }
    })
  }

}
