import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  addMessage(msg: string) {
    this.messages.push(msg);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
