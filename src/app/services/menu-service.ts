import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  HomeLabel: String = "Home";
  MessageLabel: String = "Messages";
  DetailedLabel: String = "Details";

  constructor() { }
}
