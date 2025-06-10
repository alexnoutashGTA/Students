import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  HomeLabel: String = "Home";
  MessageLabel: String = "Go to Messages";
  DetailedLabel: String = "Details";

  HomeLink= "";
  MessageLink="messages";
  DetailsLink = "detail"

  LinksList = ["","messages","detail"];
  LabelList = ["Home","Go to Messages","Details"];
  constructor() { }
}
