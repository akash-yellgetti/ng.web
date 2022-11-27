import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../layout/core/services/module.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(public moduleService: ModuleService) { 
    this.moduleService.mainTitle.next("Notification");
  }

  ngOnInit(): void {
  }

}
