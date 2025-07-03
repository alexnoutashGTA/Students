import { Component } from '@angular/core';
import { MessageService } from '../message.service'; // make sure this path is correct

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  message = { user: '', content: '' };
  allMessages: { user: string; content: string }[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.loadMessages();
  }

  onSubmit() {
    if (this.message.user && this.message.content) {
      this.messageService.addMessage(this.message);
      this.message = { user: '', content: '' };
      this.loadMessages();
    }
  }

  loadMessages() {
    this.allMessages = this.messageService.getMessages();
  }
}
