import { Injectable } from '@angular/core';
import { setting } from '../../../json/setting.json';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { CommonService } from '../../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends CommonService {

  constructor(
    protected _snackBar: MatSnackBar,
    protected toastr: ToastrService,
    protected http: HttpClient,
    protected storage: LocalStorageService
  ) {
    super(_snackBar, toastr, http, storage);
  }

  get = () => {
    const url = setting['uri'] + '/categories/list';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthToken()
    });
    const options = { headers: headers };

    return this.http.get(url, options)
      .pipe(map((data) => data),
      catchError(this.handleError));
  };
}
