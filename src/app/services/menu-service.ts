import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  HomeLabel: String = "Home";
  MessageLabel: String = "Go to Messages";
  DetailedLabel: String = "Details";

  constructor() { }
}
