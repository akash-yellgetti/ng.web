import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { setting } from 'src/app/shared/json/setting.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storage: LocalStorageService) { }

  generateOTP = (data: any): any => {
    const url = setting['uri'] + '/auth/otp/generate';
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    const params = JSON.stringify(data);

    return this.http.post(url, params, options)
      .pipe(map((data) => data));
  }

  verifyOTP = (data: any): any => {
    const url = setting['uri'] + '/auth/otp/verify';
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    const params = JSON.stringify(data);

    return this.http.post(url, params, options)
      .pipe(map((data) => data));
  }
  register = (data: any): any => {
    const url = setting['uri'] + '/auth/register';
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    const params = JSON.stringify(data);

    return this.http.post(url, params, options)
      .pipe(map((data) => data));
  }

  login = (data: any) => {
    const url = setting['uri'] + '/auth/login';
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    const params = JSON.stringify(data);

    return this.http.post(url, params, options)
      .pipe(map((data) => data));
  }

  check = () => { 
    const url = setting['uri'] + '/auth/check';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthToken()
    });
    const options = { headers: headers };
    
    return this.http.get(url, options)
      .pipe(map((data) => data),
      catchError(this.handleError));
  }

  getAuthToken = () => {
    const tokens = this.storage.retrieve('tokens');
    return `JWT ${tokens.accessToken}`;
  }

  handleError = (e: any, m: any): any => {
    const error = e.error;
    if (e.status === 401) {
      return throwError(error);
    }
  }
}
