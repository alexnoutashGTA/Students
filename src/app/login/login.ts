import { Component } from '@angular/core';
import {ContentService} from '../services/content-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userName: string='';
  password: string='';

  loginClicked() {
    const loginBody={userName:this.userName, password:this.password};
    this.contentService.postLogin({loginBody : loginBody}).subscribe(x=>{
      console.log(x);
    })
  }
  constructor(private contentService: ContentService) { }
}
