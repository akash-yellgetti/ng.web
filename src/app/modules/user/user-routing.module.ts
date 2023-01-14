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
        resolve: { conversations: ConversationsResolver  },
        component: ChatComponent,
      }
    ]
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'family',
    component: FamilyComponent
  },
  {
    path: 'habits',
    component: HabitsComponent
  },
  {
    path: 'finance',
    loadChildren: () => import('../finance/finance.module').then(m => m.FinanceModule)
  },
  {
    path: 'personal-finance',
    component: PersonalFinanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
