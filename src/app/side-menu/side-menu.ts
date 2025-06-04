import { Component } from '@angular/core';
import {MenuService} from '../services/menu-service';

@Component({
  selector: 'app-side-menu',
  standalone: false,
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {
  homeLabel: String = "";
  messagesLabel: String = "";
  detailsLabel: String = "";

  constructor(private serv: MenuService) {
    this.homeLabel = serv.HomeLabel;
    this.messagesLabel = serv.MessageLabel;
    this.detailsLabel = serv.DetailedLabel;
  }
}
