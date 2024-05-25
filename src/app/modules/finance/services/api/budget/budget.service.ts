import { Injectable } from '@angular/core';
import { setting } from '../../../../../shared/json/setting.json';
import { CommonService } from '../../../../../shared/services/common/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BudgetService extends CommonService {

  constructor(
    protected _snackBar: MatSnackBar,
    protected toastr: ToastrService,
    protected http: HttpClient,
    protected storage: LocalStorageService
  ) {
    super(_snackBar, toastr, http, storage);
  }

  getDetail = () => {
    const url = setting['uri'] + '/budget/detail';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthToken()
    });
    const options = { headers: headers };
    
    return this.http.get(url, options)
      .pipe(map((data) => data),
      catchError(this.handleError));
  };

  createBudget = (data: any) => {
    const url = setting['uri'] + '/budget/create';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getAuthToken(),
    });
    const options = { headers: headers };
    const params = JSON.stringify(data);

    return this.http.post(url, params, options).pipe(
      map((data: any) => data),
      catchError(this.handleError)
    );
  };

  updateBudget = (data: any) => {
    const url = setting['uri'] + '/budget/update';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getAuthToken(),
    });
    const options = { headers: headers };
    const params = JSON.stringify(data);

    return this.http.post(url, params, options).pipe(
      map((data: any) => data),
      catchError(this.handleError)
    );
  };

  deleteBudget = (data: any) => {
    const url = setting['uri'] + '/budget/delete';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getAuthToken(),
    });
    const options = { headers: headers };
    const params = JSON.stringify(data);

    return this.http.post(url, params, options).pipe(
      map((data: any) => data),
      catchError(this.handleError)
    );
  };

  
}
