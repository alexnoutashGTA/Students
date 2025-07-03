import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from './message.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './messages.html',
  styleUrl: './app.css'
})
export class App {
  newMessage = '';
  messages: string[] = [];

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getMessages();
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messageService.addMessage(this.newMessage.trim());
      this.newMessage = '';
      this.messages = this.messageService.getMessages();
    }
  }
}
