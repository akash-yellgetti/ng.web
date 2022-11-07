import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { setting } from 'src/app/shared/json/setting.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login = (params) => {
    return this.http.post(`${setting.uri}/auth/login`, params);
  }
}
