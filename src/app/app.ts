import  {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
declare var gtag: Function; // Declare gtag to avoid TypeScript errors

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css','./assets/theme-font-chatGPT.css']
})
export class App implements OnInit {
  protected title = 'MyBook';
  breadCrumbTitle: string = 'Our Community App!';
  sideMenuTitle: string = 'Our Community App!';

  menuItemClicked($event: any) {
    console.log($event)
  }
  constructor(private router: Router) {}


  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Send pageview event to Google Analytics
      gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects,
        page_title: this.getPageTitle(event.urlAfterRedirects) // Implement logic to get dynamic page title
      });
    });
  }
  private getPageTitle(url: string): string {
    // Implement logic to extract or determine the page title from the URL or route configuration
    // For example, you might have a data property in your route config for the title
    return 'MyBook';
  }
}










