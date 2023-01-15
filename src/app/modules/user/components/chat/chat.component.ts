import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';
import { LocalStorageService } from 'ngx-webstorage';
import { setting } from '../../../../shared/json/setting.json';
import { ConversationService } from '../../services/conversation/conversation.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public user: any = null;
  profileImg: any;
  conversations: any = [];
  constructor(
    public moduleService: ModuleService, 
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private localStorageService: LocalStorageService, 
    private conversationService: ConversationService
    ) {
    this.user = this.localStorageService.retrieve('user');
    this.conversations = _.map(this.activatedRoute.snapshot.data.conversations.data, (r) => {
      if(r && r.type && r.type === 'individual') {
        const u = _.find(r.users, (d) => {
          return d._id !== this.user._id;
        })
        r.fullName = u.firstName +" "+ u.lastName;
      } else if(r && r.type && r.type === 'group') {
        // const u = _.find(r.users, (d) => {
        //   return d._id !== this.user._id;
        // })
        r.fullName = r.name;
      }
      return r;
    });
    this.moduleService.mainTitle.next("Chat");
  }

  ngOnInit(): void {
    
    this.setProfileImage();
  }

  setProfileImage = () => {
    this.user = this.localStorageService.retrieve('user');
    if (this.user && this.user.profilePicture) {
      this.profileImg = setting['uri'] + '/' + this.user.profilePicture;
    }
  }

  redirectToChatWindow = (conversation: any) => {
    this.route.navigate(['main/layout/user/chat', conversation._id, 'conversation']);
  }

}
