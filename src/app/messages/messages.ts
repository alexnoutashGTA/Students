import { Component } from '@angular/core';
import {messageObject} from './messageObject';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MainService} from "../services/main-service";

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {

    constructor(private service:MainService) {
    }

  submitForm = new FormGroup({
   userName: new FormControl('Alex', [Validators.required, Validators.maxLength(6)]),
    message: new FormControl('', Validators.required,),
    date: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    })

  onUserSave() {
    const formValue  = this.submitForm.value;
    // @ts-ignore
      let newMessage: messageObject = new messageObject(formValue.userName, formValue.message,formValue.date)
      this.service.SaveAMessage(newMessage);
  }
}
