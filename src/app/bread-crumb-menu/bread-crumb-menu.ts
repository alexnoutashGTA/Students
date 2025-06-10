import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuService} from '../services/menu-service';


@Component({
  selector: 'app-bread-crumb-menu',
  standalone: false,
  templateUrl: './bread-crumb-menu.html',
  styleUrl: './bread-crumb-menu.css'
})
export class BreadCrumbMenu {
  @Input() title = ''; // decorate the property with @Input()
  @Output() menuClicked = new EventEmitter();

  homeLabel: String = "";
  messagesLabel: String = "";
  detailsLabel: String = "";
  homelink: string = "";
  messageLink: string ="";
  detailLink: string = "";
  linkList: string[] = [];
  labelList: string[] = [];





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

  linkClicked(i: number) {
    this.menuClicked.emit(i)
  }
}

