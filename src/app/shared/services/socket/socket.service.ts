import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(public socket: Socket,private storage: LocalStorageService,
    private toastr: ToastrService) {
      this.socket.fromEvent('userSocketId').subscribe((id: any) => {
        let user = this.storage.retrieve('user');
        user = {...user, userSocketId: id };
        // console.log('userSocketId', id)
        this.storage.store('user', user);
        this.connected();
        this.toastr.info(id, 'User Socket Id')
      })
    }

  connected = () => {
    const user = this.storage.retrieve('user');
    this.socket.emit("connected", { user });
  }

  send = (evtName: string, data: any) => {
    this.socket.emit('send', { ...data, evtName });
  }

  receive = () => {
    return this.socket.fromEvent('receive');
  }

  join = (data: any = { channels: [] }) => {
    this.socket.emit('join', data);
  }

  leave = (roomName: string) => {
    // this.socket.emit('join.'+roomName);
  }
  // joinSocket = () => {
  //   const data: any = {  userId: this.storage.retrieve('user')._id };
  //   console.log(data);
  //   // console.log(this.socket.ioSocket.id);
  //   this.socket.emit('join-socket', data)
  // }

  // sendMessage(data: any) {
  //   this.socket.emit('chat.message', data)
  // }

  // getMessage() {
  //   return this.socket.fromEvent('chat.message');
  // }

  postChatMessageSend(data: any) {
    this.send('send', data);
  }

  getChatMessageReceive() {
    return this.socket.fromEvent('chat.message.receive');
  }

  getNotification() {
    this.socket.on('notification', (data: any) => {
      this.toastr.info(data.title)
    });
  }

}
