import {Component, Input} from '@angular/core';
import {MenuService} from '../services/menu-service';

@Component({
  selector: 'app-side-menu',
  standalone: false,
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {
  @Input() title = ''; // decorate the property with @Input()

  homeLabel: String = "";
  messagesLabel: String = "";
  detailsLabel: String = "";
  homelink: string = "";
  messageLink: string ="";
  detailLink: string = "";
  linkList: string[] = [];
  labelList: string[] = []


  constructor(private serv: MenuService) {
    this.homeLabel = serv.HomeLabel;
    this.messagesLabel = serv.MessageLabel;
    this.detailsLabel = serv.DetailedLabel;
    this.homelink= serv.HomeLink;
    this.messageLink=serv.MessageLink;
    this.detailLink = serv.DetailsLink;
    this.linkList=serv.LinksList;
    this.labelList = serv.LabelList;
  }
}
