import { Component } from '@angular/core';
import {FormControl, FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {

  submitForm:FormGroup=new FormGroup({

    userName:new FormControl("",[Validators.required]),
    message: new FormControl("",[Validators.required]),
    date:    new FormControl("",[Validators.required]),

  });

  onUserSave(){
    const formValue=this.submitForm.value;
    console.log(formValue);
  }

}
