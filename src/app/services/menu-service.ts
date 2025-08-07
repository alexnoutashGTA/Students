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

  LinksList = ["","messages","detail","faq","about-us","settings","log-in"];
  LabelList = ["Home","Go to Messages","Details","FAQ","About Us", "Settings", "Log in"];
  constructor() { }
}
