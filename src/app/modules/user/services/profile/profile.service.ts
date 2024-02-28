import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { setting } from 'src/app/shared/json/setting.json';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private _snackBar: MatSnackBar,
    private http: HttpClient,
    private storage: LocalStorageService
  ) {}

  updateProfilePic = (data: any) => {
    const url = setting['uri'] + '/user/profile/picture';

    const headers = new HttpHeaders({
      Authorization: this.getAuthToken(),
    });
    const options = { headers: headers };
    // const params = JSON.stringify(data);

    return this.http.post(url, data, options).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  };

  updateProfile = (data: any) => {
    const url = setting['uri'] + '/user/profile/update';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getAuthToken(),
    });
    const options = { headers: headers };
    const params = JSON.stringify(data);

    return this.http.post(url, params, options).pipe(
      map((data) => data),
      catchError(this.handleError)
    );
  };

  getAuthToken = () => {
    const tokens = this.storage.retrieve('tokens');
    return `JWT ${tokens.accessToken}`;
  };

  handleError = (e: any): any => {
    const error = e.error;
    switch (e.status) {
      case 401:
        // return throwError(error);
        this._snackBar.open(error.message, undefined, {
          duration: 5000,
        });
        break;
      case 400:
      case 422:
        const data = error.data;
        for (let i in data) {
          const e = data[i];
          // console.log(e.message)
          this._snackBar.open(e.message, undefined, {
            duration: 5000,
          });
        }
        break;

      default:
        this._snackBar.open(error.message, undefined, {
          duration: 5000,
        });
        break;
    }
  };
}
