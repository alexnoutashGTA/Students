import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './messages.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-project';
  public messages: string[] = [];
  public newMessage: string = '';

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getMessages();
  }

  addMessage() {
    if (this.newMessage.trim()) {
      this.messageService.addMessage(this.newMessage);
      this.newMessage = '';
      this.messages = this.messageService.getMessages();
    }
  }
}
