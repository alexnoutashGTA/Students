import { Component } from '@angular/core';
<<<<<<< HEAD
import {messageObject} from './messageObject';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';
=======
import {FormControl, FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
>>>>>>> 1b32d4d (validation)

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {

<<<<<<< HEAD
  profileForm = new FormGroup({
   userName: new FormControl('Alex', [Validators.required, Validators.maxLength(6)]),
    message: new FormControl('', Validators.required,),
    date: new FormControl('', Validators.required),
    })





  submitForm(event: Event) {
    event.preventDefault();
    console.log('Form submitted'+" "+this.profileForm.controls['userName'].value+" "+this.profileForm.controls['message'].value);
=======
  submitForm:FormGroup=new FormGroup({

    userName:new FormControl("",[Validators.required]),
    message: new FormControl("",[Validators.required]),
    date:    new FormControl("",[Validators.required]),

  });

  onUserSave(){
    const formValue=this.submitForm.value;
    console.log(formValue);
>>>>>>> 1b32d4d (validation)
  }

}
