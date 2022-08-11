import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { EmailComponent } from './email/email.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { NotificationComponent } from './notification/notification.component';
import { OpinionPollComponent } from './opinion-poll/opinion-poll.component';
import { SmsComponent } from './sms/sms.component';


const routes: Routes = [
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'sms',
    component: SmsComponent
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'group-chat',
    component: GroupChatComponent
  },
  {
    path: 'opinion-poll',
    component: OpinionPollComponent
  },
  {
    path: 'discussion-forum',
    component: DiscussionForumComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule { }
