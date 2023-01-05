import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(public moduleService: ModuleService) { 
    this.moduleService.mainTitle.next("Settings");
  }

  ngOnInit(): void {
  }

}
