import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';
import { LocalStorageService } from 'ngx-webstorage';
import { setting } from '../../../../shared/json/setting.json';
import { ConversationService } from '../../services/conversation/conversation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from 'src/app/shared/services/socket/socket.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  user: any = null;
  params: any = null;
  message: string = '';
  currentConversationData: any = null;
  conversationHistory: any = [];
  constructor(
    public moduleService: ModuleService, 
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private localStorageService: LocalStorageService, 
    private socketService: SocketService,
    private conversationService: ConversationService
    ) {
      // console.log(this.activatedRoute.snapshot)
    this.conversationHistory = this.activatedRoute.snapshot.data.conversationHistory.data;
    this.currentConversationData = this.localStorageService.retrieve('currentConversationData');
    // console.log(this.conversationHistory);
    this.params = this.activatedRoute.snapshot.params;
    // console.log(params)
    // this.moduleService.mainTitle.next("Chat");
    this.socketService.receive().subscribe((data: any) => {
      if(this.params && this.params.id && this.params.id === data.conversationId) {
        this.conversationHistory.push(data);
      }
    })
  }

  ngOnInit(): void {
    this.user = this.localStorageService.retrieve('user');
  }

  send = () => {
    this.socketService.postChatMessageSend({
      eventName: 'chat.message.receive',
      // eventType: '',
      eventTo: this.params.id,
      "conversationType": "individual",
      "userId": this.user._id,
      "conversationId": this.params.id,
      "data": {
          "type": "text",
          "text": _.cloneDeep(this.message)
      }
    })
    this.message = '';
  }

}
