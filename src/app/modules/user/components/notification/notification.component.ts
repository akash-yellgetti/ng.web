import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications: any = [];
  constructor(public moduleService: ModuleService,
    private activatedRoute: ActivatedRoute) { 
    this.moduleService.mainTitle.next("Notification");
    
    // console.log(this.notifications)
    
  }

  ngOnInit(): void {
    this.notifications = this.activatedRoute.snapshot.data.notifications.data;
  }

}
