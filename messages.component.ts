import { Component } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  newMessage: string = '';
  messages: string[] = [];

  constructor(private messageService: MessagesService) {}

  addMessage() {
    if (this.newMessage.trim()) {
      this.messageService.addMessage(this.newMessage);
      this.newMessage = '';
      this.refreshMessages();
    }
  }

  refreshMessages() {
    this.messages = this.messageService.getMessages();
  }

  ngOnInit() {
    this.refreshMessages();
  }
}
