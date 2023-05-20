import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { NotificationService } from '../../services/notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsResolver implements Resolve<boolean> {
  constructor(private notificationService: NotificationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.notificationService.getNotifications();
  }
}
