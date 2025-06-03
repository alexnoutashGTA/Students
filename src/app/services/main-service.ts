import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  Greetings: String = "Hello World";

  constructor() { }
}
