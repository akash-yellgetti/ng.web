import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FamilyComponent } from './components/family/family.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SettingComponent } from './components/setting/setting.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ChatComponent,
    NotificationComponent,
    FamilyComponent,
    ChatWindowComponent,
    CategoriesComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
