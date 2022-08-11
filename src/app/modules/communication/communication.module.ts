import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationRoutingModule } from './communication-routing.module';
import { SmsComponent } from './sms/sms.component';
import { NotificationComponent } from './notification/notification.component';
import { EmailComponent } from './email/email.component';
import { ChatComponent } from './chat/chat.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { OpinionPollComponent } from './opinion-poll/opinion-poll.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';


@NgModule({
  declarations: [
    SmsComponent,
    NotificationComponent,
    EmailComponent,
    ChatComponent,
    GroupChatComponent,
    OpinionPollComponent,
    DiscussionForumComponent
  ],
  imports: [
    CommonModule,
    CommunicationRoutingModule
  ]
})
export class CommunicationModule { }
