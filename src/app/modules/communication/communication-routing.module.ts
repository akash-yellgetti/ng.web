import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { DiscussionForumComponent } from './components/discussion-forum/discussion-forum.component';
import { EmailComponent } from './components/email/email.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { NotificationComponent } from './components/notification/notification.component';
import { OpinionPollComponent } from './components/opinion-poll/opinion-poll.component';
import { SmsComponent } from './components/sms/sms.component';


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
