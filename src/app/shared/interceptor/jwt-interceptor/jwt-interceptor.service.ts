import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private storage: LocalStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    // const user = this.storage.get('user');
    
    // const token = this.storage.getToken();
    // if (token && request.url !== this.storage.get('getIpUrl') && !request.url.includes(this.storage.getSessionStorage('cmsMediaObjectUrl'))) {
    //   request = request.clone({
    //     setHeaders: {
    //       authorization: token
    //     }
    //   });
    // }

    // if (request.url.includes(' https://api1.cloudcms.com')) {
    //   console.log('inside condition');
    //   request = request.clone({
    //     setHeaders: {
    //       authorization: this.storage.getSessionStorage('cloudCmsToken')
    //     }
    //   });
    // }



    // && request.url !== this.storage.getSessionStorage('cmsMediaObjectUrl')
    // && request.url !== this.storage.getSessionStorage('cmsMediaObjectUrl')

    // if (request.url !== this.storage.get('getIpUrl') && (hasStorage && !request.url.includes(this.storage.getSessionStorage('cmsMediaObjectUrl')))) {
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
        //   'api-build-version': this.appConfig && this.appConfig.config && this.appConfig.config.apiBuildVersion ? this.appConfig.config.apiBuildVersion : '1.0.0'
        }
      });
    // }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        // if (event instanceof HttpResponse) {
        // console.log('HttpResponse event--->>>', event);
        // }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          // console.log('HttpErrorResponse event--->>>', error);
          if (error.status === 401) {
            // this.storage.delete('user');
            // this.storage.delete('token');
            // window.location.href = '';
          }
        }

        return throwError(error.error);
      })
    );
  }

}
