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
    component: NotificationComponent,
    data: {
      module: "communication",
      subModule: "notification",
    }
  },
  {
    path: 'sms',
    component: SmsComponent,
    data: {
      module: "communication",
      subModule: "sms",
    }
  },
  {
    path: 'email',
    component: EmailComponent,
    data: {
      module: "communication",
      subModule: "email",
    }
  },
  {
    path: 'chat',
    component: ChatComponent,
    data: {
      module: "communication",
      subModule: "chat",
    }
  },
  {
    path: 'groups-chat',
    component: GroupChatComponent,
    data: {
      module: "communication",
      subModule: "groups-chat",
    }
  },
  {
    path: 'opinion-poll',
    component: OpinionPollComponent,
    data: {
      module: "communication",
      subModule: "opinion-poll",
    }
  },
  {
    path: 'discussion-forum',
    component: DiscussionForumComponent,
    data: {
      module: "communication",
      subModule: "discussion-forum",
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule { }
