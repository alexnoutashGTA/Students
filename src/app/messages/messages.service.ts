import { Injectable } from '@angular/core';
import {messageObject} from './messageObject';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private savedMessage: any;

  getMessage() {
    return this.savedMessage;
  }
  messagesList: messageObject[] = [];
  SaveAMessage(newMessage: messageObject) {
    this.messagesList.push(newMessage);
  }
}
