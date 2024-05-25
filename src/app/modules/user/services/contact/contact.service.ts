import { Injectable } from '@angular/core';
import { CommonService } from '../../../../shared/services/common/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { setting } from 'src/app/shared/json/setting.json';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends CommonService{

  constructor(
    protected _snackBar: MatSnackBar,
    protected toastr: ToastrService,
    protected http: HttpClient,
    protected storage: LocalStorageService
  ) {
    super(_snackBar, toastr, http, storage);
  }

  getContacts = () => {
    const url = setting['uri'] + '/contact/list';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthToken()
    });
    const options = { headers: headers };
    
    return this.http.get(url, options)
      .pipe(map((data) => data),
      catchError(this.handleError));
  };

  refreshContacts = () => {
    const url = setting['uri'] + '/contact/refresh';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getAuthToken()
    });
    const options = { headers: headers };
    
    return this.http.get(url, options)
      .pipe(map((data) => data),
      catchError(this.handleError));
  };

  addContact = (data: any) => {
    const url = setting['uri'] + '/contact/create';

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
