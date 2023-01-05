import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(public moduleService: ModuleService) { 
    this.moduleService.mainTitle.next("Chat");
  }

  ngOnInit(): void {
  }

}
