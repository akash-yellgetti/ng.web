import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    protected _snackBar: MatSnackBar,
    protected toastr: ToastrService,
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
        this.toastr.error(error.message, 'Error');
        break;
      case 400:
      case 422:
        const data = error.data;
        for (let i in data) {
          const e = data[i];
          this.toastr.error(e.message, 'Error');
        }
        break;

      default:
        this.toastr.error(error.message, 'Error');
        break;
    }
  };
}
