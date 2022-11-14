import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PersonalFinanceComponent } from './components/personal-finance/personal-finance.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotificationComponent } from './components/notification/notification.component';


@NgModule({
  declarations: [
    PersonalFinanceComponent,
    ProfileComponent,
    ChatComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule
  ]
})
export class UserModule { }
