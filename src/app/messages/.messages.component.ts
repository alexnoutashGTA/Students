import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  newMessage: string = '';
  messages: string[] = [];

  constructor(private messageService: MessageService) {}

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messageService.addMessage(this.newMessage);
      this.messages = this.messageService.getMessages();
      this.newMessage = '';
    }
  }
}
