import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'MyBook';
  sideMenuTitle: string = 'Welcome to MyBook!';
  breadCrumbTitle: string = 'Welcome to MyBook!';
  menuItemClicked($event: any) {
    console.log($event)
  }
}
