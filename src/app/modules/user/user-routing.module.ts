import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { FamilyComponent } from './components/family/family.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PersonalFinanceComponent } from './components/personal-finance/personal-finance.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'chat',
    component: ChatComponent
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
    path: 'personal-finance',
    component: PersonalFinanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
