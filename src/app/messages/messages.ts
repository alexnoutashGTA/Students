import {Component, OnInit} from '@angular/core';
import {messageObject} from './messageObject';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MainService} from "../services/main-service";
import {ContentService} from '../services/content-service';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrls: ['./messages.css', '../assets/theme-button-google.css']
})
export class Messages implements OnInit {
  protected messages :messageObject[] = [];

    constructor(protected service:MainService, protected contentService:ContentService) {
    }
  ngOnInit() {
    this.contentService.getMessages().subscribe(asyncCallResponse => {
        asyncCallResponse.forEach((response: any) => {
          this.messages.push(new messageObject(response.senderID,response.message,response.receiverID))
        })
      }
    )
  }
  submitForm = new FormGroup({
   userName: new FormControl('Alex', [Validators.required, Validators.maxLength(6)]),
    message: new FormControl('', Validators.required,),
    date: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
    })

  onMessageSave() {
    const formValue  = this.submitForm.value;
    // @ts-ignore
      let newMessage: messageObject = new messageObject(formValue.userName, formValue.message,formValue.date)
      this.service.SaveAMessage(newMessage);
      this.contentService.postNessage({
        messageBody: { senderID: 'Alex', receiverID: formValue.userName,message: formValue.message}})
        .subscribe(x=>console.log(x));
  }}

