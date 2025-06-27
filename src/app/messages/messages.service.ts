import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private savedMessage: any;

  saveMessage(data: any) {
    this.savedMessage = data;
  }

  getMessage() {
    return this.savedMessage;
  }
}
