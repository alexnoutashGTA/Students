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
  homelink: string = "";
  messageLink: string ="";
  detailLink: string = "";

  LinksList = ["","messages","detail"];
  LabelList = ["Home","Go to Messages","Details"];


  constructor(private serv: MenuService) {
    this.homeLabel = serv.HomeLabel;
    this.messagesLabel = serv.MessageLabel;
    this.detailsLabel = serv.DetailedLabel;
    this.homelink= serv.HomeLink;
    this.messageLink=serv.MessageLink;
    this.detailLink = serv.DetailsLink;
  }
}
