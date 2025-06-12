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
<<<<<<< HEAD
  breadCrumbTitle: string = 'Welcome to MyBook!';
=======
=======
>>>>>>> f666295 (changes)
  breadCrumbMenuSecondTitle:string='Hello Everyone!';

>>>>>>> 6aa0f38 (Added EventEmitter to Side Menu)
  menuItemClicked($event: any) {
    console.log($event)
  }
=======
  breadcrumbTitle: string = 'Welcome to MyBook!';
>>>>>>> 3563a31 (changes)
}
