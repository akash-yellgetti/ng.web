import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { FamilyComponent } from './components/family/family.component';
import { HabitsComponent } from './components/habits/habits.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PersonalFinanceComponent } from './components/personal-finance/personal-finance.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ConversationsResolver } from './resolver/conversations/conversations.resolver';
import { ConversationHistoryResolver } from './resolver/conversation-history/conversation-history.resolver';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { NotificationsResolver } from './resolver/notifications/notifications.resolver';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'chat',
    component: ChatComponent,
    resolve: { conversations: ConversationsResolver  },
    children: [
      {
        path: ':id/conversation',
        resolve: { conversationHistory: ConversationHistoryResolver  },
        component: ChatWindowComponent
      }
    ]
  },
  {
    path: 'notification',
    resolve: { notifications: NotificationsResolver  },
    component: NotificationComponent
  },
  {
    path: 'family',
    component: FamilyComponent
  },
  {
    path: 'habits',
    component: HabitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
