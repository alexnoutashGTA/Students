import { Component } from '@angular/core';
import {MainService} from '../services/main-service';

@Component({
  selector: 'app-side-menu',
  standalone: false,
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {
  message: String = "";

  constructor(private serv: MainService ) {
    this.message = serv.Greetings;
  }
}
