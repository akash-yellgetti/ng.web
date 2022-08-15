import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '../../layout/core/services/module.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public data: any = null
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) {
     this.moduleService.setCurrentRoute(this.route.snapshot.data.module, this.route.snapshot.data.subModule);
     const data = this.moduleService.getSubModule();
    //  console.log(data);
    this.data = data;
  }

  ngOnInit(): void {
  }
}
