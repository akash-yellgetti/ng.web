import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(public moduleService: ModuleService) { 
    this.moduleService.mainTitle.next("Help");
  }

  ngOnInit(): void {
  }

}
