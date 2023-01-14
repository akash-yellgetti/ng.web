import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';
import { LocalStorageService } from 'ngx-webstorage';
import { setting } from '../../../../shared/json/setting.json';
import { ConversationService } from '../../services/conversation/conversation.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public user: any = null;
  profileImg: any;

  constructor(public moduleService: ModuleService, private localStorageService: LocalStorageService, private conversationService: ConversationService) { 
    this.moduleService.mainTitle.next("Chat");
    
  }

  ngOnInit(): void {
    this.user = this.localStorageService.retrieve('user');
    this.setProfileImage();
  }

  setProfileImage = () => {
    this.user = this.localStorageService.retrieve('user');
    if (this.user && this.user.profilePicture) {
      this.profileImg = setting['uri'] + '/' + this.user.profilePicture;
    }
  }

}
