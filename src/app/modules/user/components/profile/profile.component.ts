import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../layout/core/services/module.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public moduleService: ModuleService) { 
    this.moduleService.mainTitle.next("Profile");
  }

  ngOnInit(): void {
  }

}
