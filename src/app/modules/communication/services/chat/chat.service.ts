import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public socket: Socket,private storage: LocalStorageService) {
    
  }

  joinSocket = () => {
    const data: any = {  userId: this.storage.retrieve('user')._id };
    console.log(data);
    // console.log(this.socket.ioSocket.id);
    this.socket.emit('join-socket', data)
  }

  sendMessage(data: any) {
    this.socket.emit('chat.message', data)
  }

  getMessage() {
    return this.socket.fromEvent('chat.message');
  }

  getUsers() {
    return this.socket.fromEvent('users');
  }


  
}
