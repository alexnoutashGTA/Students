import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'MyBook';
  breadCrumbTitle: string = 'Our Community App!';
  sideMenuTitle: string = 'Our Community App!';

  menuItemClicked($event: any) {
    console.log($event)
  }
}










