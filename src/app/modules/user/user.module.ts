import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PersonalFinanceComponent } from './components/personal-finance/personal-finance.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FamilyComponent } from './components/family/family.component';
import { HabitsComponent } from './components/habits/habits.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { CategoriesComponent } from './components/categories/categories.component';


@NgModule({
  declarations: [
    PersonalFinanceComponent,
    ProfileComponent,
    ChatComponent,
    NotificationComponent,
    FamilyComponent,
    HabitsComponent,
    ChatWindowComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
