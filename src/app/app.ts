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
<<<<<<< HEAD
  breadCrumbTitle: string = 'Welcome to MyBook!';
=======
  breadCrumbMenuSecondTitle:string='Hello Everyone!';

>>>>>>> 6aa0f38 (Added EventEmitter to Side Menu)
  menuItemClicked($event: any) {
    console.log($event)
  }
}
