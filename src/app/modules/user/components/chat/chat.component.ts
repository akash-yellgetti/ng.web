import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';
import { LocalStorageService } from 'ngx-webstorage';
import { setting } from '../../../../shared/json/setting.json';
import { ConversationService } from '../../services/conversation/conversation.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { SocketService } from 'src/app/shared/services/socket/socket.service';

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
    private conversationService: ConversationService,
    private socketService: SocketService
    ) {
    this.user = this.localStorageService.retrieve('user');
    this.conversations = _.map(this.activatedRoute.snapshot.data.conversations.data, (r) => {
      const conversation = r.conversationDetail;
      if(conversation && conversation.type && conversation.type === 'individual') {
        const u = _.find(r.users, (d) => {
          return d._id !== this.user._id;
        })
        r.fullName = u.firstName +" "+ u.lastName;
      } else if(conversation && conversation.type && conversation.type === 'group') {
        // const u = _.find(r.users, (d) => {
        //   return d._id !== this.user._id;
        // })
        r.fullName = conversation.name;
      }
      return r;
    });
    this.socketService.join({ channels: _.values(_.mapValues(this.conversations, '_id')) });
    // this.socketService.receive().subscribe((data: any) => {
    //   const conversation: any = _.find(this.conversations, { _id: data.conversationId });
    //   conversation.
    // })
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
    this.route.navigateByUrl('/main/layout/user/chat', { skipLocationChange: true }).then(() => {
      this.route.navigate(['main/layout/user/chat', conversation._id, 'conversation']);
    });
  }

}
