import { Component } from '@angular/core';
<<<<<<< HEAD
import {FormControl, FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
=======
import {messageObject} from './messageObject';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';
>>>>>>> 9d7ff11 (Changes made to form so far)

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {

<<<<<<< HEAD
  submitForm=new FormGroup({
=======
  profileForm = new FormGroup({
   userName: new FormControl(''),
    message: new FormControl(''),
    date: new FormControl(''),

});
  formMessage: messageObject = new messageObject("", "");
>>>>>>> 9d7ff11 (Changes made to form so far)

    userName:new FormControl("",[Validators.required]),
    message: new FormControl("",[Validators.required]),
    date:    new FormControl("",[Validators.required]),

  });

  onUserSave(){
    const formValue=this.submitForm.value;
    console.log(formValue);
  }

}
