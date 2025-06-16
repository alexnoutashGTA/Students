import { Component } from '@angular/core';
import {messageObject} from './messageObject';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {

  formMessage: messageObject = new messageObject("", "");

  submitForm(event: Event) {
    event.preventDefault();

    console.log('Form submitted'+" "+this.formMessage.userName+" "+this.formMessage.message);
  }
}
