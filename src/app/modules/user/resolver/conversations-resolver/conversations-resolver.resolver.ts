import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConversationService } from '../../services/conversation.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationsResolverResolver implements Resolve<boolean> {
  constructor(private conversationService: ConversationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.conversationService.getConversation();
  }
}
