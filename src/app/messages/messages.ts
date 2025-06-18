import { Component } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import {messageObject} from './messageObject';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';
=======
import {FormControl, FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
>>>>>>> 1b32d4d (validation)
=======
import {FormControl, FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
=======
import {messageObject} from './messageObject';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {dateTimestampProvider} from 'rxjs/internal/scheduler/dateTimestampProvider';
>>>>>>> 111b64c (updated validation)
>>>>>>> 0e8b983 (updated validation)

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
=======
=======
>>>>>>> 0e8b983 (updated validation)
  submitForm=new FormGroup({
>>>>>>> 7a209af (fixed unit test)

    userName:new FormControl("",[Validators.required]),
    message: new FormControl("",[Validators.required]),
    date:    new FormControl("",[Validators.required]),
=======
  profileForm = new FormGroup({
   userName: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    message: new FormControl('', Validators.required,),
    date: new FormControl('', Validators.required),
    })




>>>>>>> 111b64c (updated validation)

  });

<<<<<<< HEAD
  onUserSave(){
    const formValue=this.submitForm.value;
    console.log(formValue);
<<<<<<< HEAD
>>>>>>> 1b32d4d (validation)
=======
=======
    console.log('Form submitted'+" "+this.profileForm.controls['userName'].value+" "+this.profileForm.controls['message'].value);
>>>>>>> 111b64c (updated validation)
>>>>>>> 0e8b983 (updated validation)
  }

}
