import { Component } from '@angular/core';
import {FormControl, FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';

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
   userName: new FormControl('Alex', [Validators.required, Validators.maxLength(6)]),
    message: new FormControl('', Validators.required,),
    date: new FormControl('', Validators.required),
    })
>>>>>>> 1edb8c3 (Sample Forms Test)

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
  }

}
