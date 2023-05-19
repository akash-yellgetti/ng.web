import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';
import { LocalStorageService } from 'ngx-webstorage';
import { setting } from '../../../../shared/json/setting.json';
import { ConversationService } from '../../services/conversation/conversation.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { SocketService } from 'src/app/shared/services/socket/socket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public user: any = null;
  profileImg: any;
  conversations: any = [];
  params: any = null;
  message: string = '';
  currentConversationData: any = null;
  conversationHistory: any = [];
  constructor(
    public moduleService: ModuleService, 
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private localStorageService: LocalStorageService, 
    private conversationService: ConversationService,
    private socketService: SocketService,
    private toastr: ToastrService
    ) {
    const user = this.localStorageService.retrieve('user');
    const onlineUsers = this.localStorageService.retrieve('onlineUsers');
    console.log(onlineUsers);
    this.conversations = _.map(this.activatedRoute.snapshot.data.conversations.data, (conversation) => {
      // const conversation = r.conversationDetail;
      if(conversation && conversation.type && conversation.type === 'individual') {
        const u = _.find(conversation.members, (d) => {
          return !(d.userId === user._id);
        })
        // console.log(u)
        // console.log(user._id)
        conversation.user = u.user;
        conversation.fullName = u.user.firstName +" "+ u.user.lastName;
        // conversation.userId = u.userId;
        // console.log(onlineUsers, u)
        conversation.isOnline = _.find(onlineUsers, { userId: u.user._id }) || false;
      } else if(conversation && conversation.type && conversation.type === 'group') {
        // const u = _.find(r.users, (d) => {
        //   return d._id !== this.user._id;
        // })
        conversation.fullName = conversation.name;
      }
      // conversation.

      console.log(conversation)
      

      return conversation;
    });
    this.socketService.join({ channels: _.values(_.mapValues(this.conversations, '_id')) });
    this.socketService.receive().subscribe((data: any) => {
      this.toastr.info(JSON.stringify(data));
      // const conversation: any = _.find(this.conversations, { _id: data.conversationId });
      // conversation.
    })
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
    console.log(conversation)
    this.currentConversationData = conversation;
    // this.localStorageService.store('currentConversationData', { 
    //   userId: conversation._id,
    //   userFullName: conversation.fullName,
    // });
    // this.route.navigateByUrl('/main/layout/user/chat', { skipLocationChange: true }).then(() => {
    //   this.route.navigate(['main/layout/user/chat', conversation._id, 'conversation']);
    // });
  }

  send = () => {
    this.socketService.postChatMessageSend({
      eventName: 'chat.message.receive',
      // eventType: '',
      eventTo: this.currentConversationData.conversationId,
      "conversationType": "individual",
      "userId": this.currentConversationData.userId,
      "conversationId": this.currentConversationData.conversationId,
      "data": {
          "type": "text",
          "text": _.cloneDeep(this.message)
      }
    })
    this.message = '';
  }


}
