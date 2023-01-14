import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';
import { LocalStorageService } from 'ngx-webstorage';
import { setting } from '../../../../shared/json/setting.json';
import { ConversationService } from '../../services/conversation/conversation.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  user: any = null;
  conversationHistory: any = [];
  constructor(
    public moduleService: ModuleService, 
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private localStorageService: LocalStorageService, 
    private conversationService: ConversationService
    ) {
      // console.log(this.activatedRoute.snapshot)
    this.conversationHistory = this.activatedRoute.snapshot.data.conversationHistory.data;
    console.log(this.conversationHistory)
    // this.moduleService.mainTitle.next("Chat");
  }

  ngOnInit(): void {
    this.user = this.localStorageService.retrieve('user');
  }

}
