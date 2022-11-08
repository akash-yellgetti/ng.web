import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { setting } from 'src/app/shared/json/setting.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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

  

  handleError = (e: any, m: any) => {

  }
}
