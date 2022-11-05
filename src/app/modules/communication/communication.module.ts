import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationRoutingModule } from './communication-routing.module';
import { SmsComponent } from './components/sms/sms.component';
import { NotificationComponent } from './components/notification/notification.component';
import { EmailComponent } from './components/email/email.component';
import { ChatComponent } from './components/chat/chat.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { OpinionPollComponent } from './components/opinion-poll/opinion-poll.component';
import { DiscussionForumComponent } from './components/discussion-forum/discussion-forum.component';
import { LayoutModule } from '../layout/layout.module';
import { MaterialModule } from '../../shared/modules/material.module';


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
    MaterialModule,
    LayoutModule,
    CommunicationRoutingModule
  ]
})
export class CommunicationModule { }
