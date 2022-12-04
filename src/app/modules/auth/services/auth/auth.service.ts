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
    // const url = 'http://localhost:5001/auth/login';

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
      // 'Authorization': this.authToken,
      // 'api-build-version': '1.0.0',
    });
    const options = { headers: headers };
    const params = JSON.stringify(data);

    return this.http.post(url, params, options)
      .pipe(map((data) => data));
  }

  verifyOTP = (data: any): any => {

  }
  register = (data: any): any => {
    const url = setting['uri'] + '/auth/login';
    // const url = 'http://localhost:5001/auth/login';

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
      // 'Authorization': this.authToken,
      // 'api-build-version': '1.0.0',
    });
    const options = { headers: headers };
    const params = JSON.stringify(data);

    return this.http.post(url, params, options)
      .pipe(map((data) => data));
  }

  login = (data: any) => {
    const url = setting['uri'] + '/auth/login';
    // const url = 'http://localhost:5001/auth/login';

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
      // 'Authorization': this.authToken,
      // 'api-build-version': '1.0.0',
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
    return `Bearer ${tokens.accessToken}`;
  }

  handleError = (e: any, m: any): any => {
    const error = e.error;
    if (e.status === 401) {
      return throwError(error);
    }
  }
}
