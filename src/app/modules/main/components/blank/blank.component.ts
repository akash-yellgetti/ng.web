import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

  constructor(public moduleService: ModuleService) { 
    this.moduleService.mainTitle.next("Blank");
  }

  ngOnInit(): void {
  }

}
