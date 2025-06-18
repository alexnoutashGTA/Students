import { Component } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import {FormControl, FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
=======
import {messageObject} from './messageObject';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';
>>>>>>> 9d7ff11 (Changes made to form so far)
=======
import {messageObject} from './messageObject';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';
=======
import {FormControl, FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
>>>>>>> 1b32d4d (validation)
>>>>>>> 47b1980 (validation)

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  submitForm=new FormGroup({
=======
=======
>>>>>>> 47b1980 (validation)
  profileForm = new FormGroup({
<<<<<<< HEAD
<<<<<<< HEAD
   userName: new FormControl(''),
    message: new FormControl(''),
    date: new FormControl(''),
=======
   userName: new FormControl('Alex', [Validators.required, Validators.maxLength(6)]),
    message: new FormControl('', Validators.required,),
    date: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    })
>>>>>>> 1edb8c3 (Sample Forms Test)
=======
  profileForm = new FormGroup({
<<<<<<< HEAD
   userName: new FormControl(''),
    message: new FormControl(''),
    date: new FormControl(''),
>>>>>>> 9d7ff11 (Changes made to form so far)

});
  formMessage: messageObject = new messageObject("", "");
>>>>>>> 9d7ff11 (Changes made to form so far)

    userName:new FormControl("",[Validators.required]),
    message: new FormControl("",[Validators.required]),
    date:    new FormControl("",[Validators.required]),

  });

<<<<<<< HEAD
  onUserSave(){
    const formValue=this.submitForm.value;
    console.log(formValue);
=======

  submitForm(event: Event) {
    event.preventDefault();
    console.log('Form submitted'+" "+this.profileForm.controls['userName'].value+" "+this.profileForm.controls['message'].value);
>>>>>>> 1edb8c3 (Sample Forms Test)
=======
   userName: new FormControl('', [Validators.required, Validators.maxLength(6)]),
=======
   userName: new FormControl('Alex', [Validators.required, Validators.maxLength(6)]),
>>>>>>> 1edb8c3 (Sample Forms Test)
    message: new FormControl('', Validators.required,),
    date: new FormControl('', Validators.required),
    })





  submitForm(event: Event) {
    event.preventDefault();
    console.log('Form submitted'+" "+this.profileForm.controls['userName'].value+" "+this.profileForm.controls['message'].value);
<<<<<<< HEAD
>>>>>>> 111b64c (updated validation)
=======
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
>>>>>>> 47b1980 (validation)
  }

}
