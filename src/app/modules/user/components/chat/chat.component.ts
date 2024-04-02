import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModuleService } from '../../../main/core/services/module.service';
import { LocalStorageService } from 'ngx-webstorage';
import { setting } from '../../../../shared/json/setting.json';
import { ConversationService } from '../../services/conversation/conversation.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { SocketService } from 'src/app/shared/services/socket/socket.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild("dialogRef") dialogRef: any;
  public user: any = null;
  profileImg: any;
  conversations: any = [];
  params: any = null;
  message: string = '';
  currentConversationData: any = null;
  conversationHistory: any = [];
  public contact = {
    firstName: {
      value: ''
    },
    mobileNo: {
      value: ''
    }
  }
  constructor(
    private dialog: MatDialog,
    public moduleService: ModuleService, 
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private localStorageService: LocalStorageService, 
    private conversationService: ConversationService,
    private socketService: SocketService,
    private contactService: ContactService,
    private toastr: ToastrService
    ) {
    const user = this.localStorageService.retrieve('user');
    const onlineUsers = this.localStorageService.retrieve('onlineUsers');
    // console.log(onlineUsers);
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

      // console.log(conversation)
      

      return conversation;
    });
    this.socketService.join({ channels: _.values(_.mapValues(this.conversations, '_id')) });
    this.socketService.getChatMessageReceive().subscribe((data: any) => {
      // this.toastr.info(JSON.stringify(data));
      const conversation: any = _.find(this.conversations, { _id: data.conversationId });
      const messages = conversation.messages;
      messages.push({
        "conversationId": data.conversationId,
        "userId": data.userId,
        "type": data.data.type,
        "text": data.data.text,
      })
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
    // console.log(conversation)
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
    const data: any = {
      eventName: 'chat.message',
      eventTo: this.currentConversationData._id,
      "type": this.currentConversationData.type,
      "userId": this.user._id,
      "conversationId": this.currentConversationData._id,
      "data": {
          "type": "text",
          "text": _.cloneDeep(this.message)
      }
    };
    // const conversationType = this.currentConversationData.type === 'individual' ? : 
    this.conversationService.postConversationMessage(data).subscribe();
    this.socketService.postChatMessageSend(data);
    this.message = '';
  }

 

  addContactDialog(): void {
    const dialogRef = this.dialog.open(this.dialogRef, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  addContact = () => {
    console.log(this.contact)
    this.contactService.addContact({ firstName: this.contact.firstName.value, mobileNo: this.contact.mobileNo.value }).subscribe((data: any) => {
      this.toastr.success(data.message);
      this.dialog.closeAll();
    })
  }

  refreshContacts = () => {
    // console.log(this.contact)
    // this.contactService.addContact({ firstName: this.contact.firstName.value, mobileNo: this.contact.mobileNo.value }).subscribe((data: any) => {
    //   this.toastr.success(data.message);
    //   this.dialog.closeAll();
    // })
  }

  

  cancel = () => {
    this.dialog.closeAll()
  }


}
