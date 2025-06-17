import { Component } from '@angular/core';
import {messageObject} from './messageObject';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {

  profileForm = new FormGroup({
   userName: new FormControl(''),
    message: new FormControl(''),
    date: new FormControl(''),

});
  formMessage: messageObject = new messageObject("", "");

  submitForm(event: Event) {
    event.preventDefault();

    console.log('Form submitted'+" "+this.formMessage.userName+" "+this.formMessage.message +this.formMessage.dateTime);
  }
}
