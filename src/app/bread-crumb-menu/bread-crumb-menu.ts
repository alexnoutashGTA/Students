import { Component } from '@angular/core';
import {MenuService} from '../services/menu-service';

@Component({
  selector: 'app-bread-crumb-menu',
  standalone: false,
  templateUrl: './bread-crumb-menu.html',
  styleUrl: './bread-crumb-menu.css'
})
export class BreadCrumbMenu {
  homeLabel: String = "";
  messagesLabel: String = "";
  detailsLabel: String = "";

  constructor(private serv: MenuService) {
    this.homeLabel = serv.HomeLabel;
    this.messagesLabel = serv.MessageLabel;
    this.detailsLabel = serv.DetailedLabel;
  }
}
