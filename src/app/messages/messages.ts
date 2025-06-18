import { Component } from '@angular/core';
import {messageObject} from './messageObject';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {

  profileForm = new FormGroup({
   userName: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    message: new FormControl('', Validators.required,),
    date: new FormControl('', Validators.required),
    })





  submitForm(event: Event) {
    event.preventDefault();

    console.log('Form submitted'+" "+this.profileForm.controls['userName'].value+" "+this.profileForm.controls['message'].value);
  }
}
