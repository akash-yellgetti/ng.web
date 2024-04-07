import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(public socket: Socket,public storage: LocalStorageService,
    private toastr: ToastrService) {
      // this.connected();
      // this.socket.fromEvent('userSocketId').subscribe((id: any) => {
      //   let user = this.storage.retrieve('user');
      //   user = {...user, userSocketId: id, deviceId: '12345' };
      //   // console.log('userSocketId', id)
      //   this.storage.store('user', user);
      //   this.connected();
      //   this.toastr.info(id, 'User Socket Id')
      // })
      this.socket.fromEvent('getUserDetails').subscribe((data: any) => {
        // console.log(data)
        let user = this.storage.retrieve('user');
        user = {...user, userSocketId: data.socketId, deviceId: '12345' };
        this.storage.store('user', user);
        this.connected();
      })
    }

  connected = () => {
    const user = this.storage.retrieve('user');
    const device = this.storage.retrieve('device');
    // console.log(this.socket)
    this.socket.emit("online", { user, socketId: this.socket.ioSocket.id, deviceId: device.deviceId });
  }

  send = (evtName: string, data: any) => {
    this.socket.emit('send', { ...data, evtName });
  }

  receive = () => {
    return this.socket.fromEvent('chat.message');
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

  getOnlineUsers() {
    return this.socket.fromEvent('onlineUsers');
  }

  postChatMessageSend(data: any) {
    this.send('send', data);
  }

  getChatMessageReceive() {
    return this.socket.fromEvent('chat.message');
  }

  getNotification() {
    return this.socket.fromEvent('notification');
    // this.socket.on('notification', (data: any) => {
    //   this.toastr.info(data.title)
    // });
  }

}
