import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConversationService } from '../../services/conversation/conversation.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationsResolver implements Resolve<any> {
  constructor(private conversationService: ConversationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.conversationService.getConversation();
  }
}
