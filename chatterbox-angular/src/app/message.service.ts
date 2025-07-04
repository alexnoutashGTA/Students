import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = [];

  getMessages(): string[] {
    return this.messages;
  }

  addMessage(message: string) {
    this.messages.push(message);
  }
}
