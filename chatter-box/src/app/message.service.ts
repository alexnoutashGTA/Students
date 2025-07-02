import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: { user: string; content: string }[] = [];

  addMessage(message: { user: string; content: string }) {
    this.messages.push({ ...message });
  }

  getMessages() {
    return [...this.messages]; // copy to avoid mutation
  }
}
