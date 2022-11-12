import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { SocketService } from 'src/app/shared/services/socket/socket.service';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public users: any = [];

  constructor(private chatService: ChatService, private storage: LocalStorageService, private cdr: ChangeDetectorRef) {
    
   }

  ngOnInit(): void {
    this.chatService.joinSocket();
    this.chatService.getUsers().subscribe(this.getUsers)
    this.chatService.getMessage().subscribe(this.getMessage)
  }

  getUsers = (users: any) => {
    console.log('users', users)
    const user = this.storage.retrieve('user');
    this.users = [];
    this.cdr.detectChanges();
    this.users = users.filter((r: any) => r && r.userId && r.userId != user._id);
  }

  sendMessage = () => {
    const user: any =  this.users[0];
    console.log(user)
    this.chatService.sendMessage({ userId: user.userId, message: 'hi' });
  }

  getMessage = (data: any) => {
    console.log('chat.message', data)
  }

}
