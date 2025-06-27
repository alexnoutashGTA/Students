import { Component } from '@angular/core';
import {messageObject} from './messageObject';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MessageService} from './messages.service';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl:'./messages.html',
  styleUrl: '/messages.css'
})
export class Messages {

  submitForm = new FormGroup({
   userName: new FormControl('Alex', [Validators.required, Validators.maxLength(6)]),
    message: new FormControl('', Validators.required,),
    date: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    })
  private savedData: any;

  onUserSave() {
    const formValue = this.submitForm.value;
    console.log(formValue);
  }
  constructor(private messageService: MessageService) {
    this.savedData = this.messageService.getMessage();

  }
}
