import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(public socket: Socket,private storage: LocalStorageService,
    private toastr: ToastrService) { }

  connect = () => {
    const user = this.storage.retrieve('user');
    this.socket.emit("connected", { user });
  }

  send = (evtName: string, data: any) => {
    this.socket.emit(evtName, data);
  }

  join = (roomName: string) => {
    // this.socket.emit('join.'+roomName);
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

  // getUsers() {
  //   return this.socket.fromEvent('users');
  // }

  getNotification() {
    this.socket.on('notification', (data: any) => {
      this.toastr.info(data.title)
    });
  }

}
