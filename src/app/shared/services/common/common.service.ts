import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    protected _snackBar: MatSnackBar,
    protected http: HttpClient,
    protected storage: LocalStorageService
  ) {}

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
