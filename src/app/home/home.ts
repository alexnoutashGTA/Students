import { Component } from '@angular/core';
import {MainService} from '../services/main-service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  imagesLinks: string[] = []

  constructor(private service: MainService) {
    this.imagesLinks = service.ImagesLinks.slice(0, 5);
  }

  leftButtonClicked() {
      console.log('leftButtonClicked');
      this.service.HomePageNumberDecremented();
    let pageNumber: number = this.service.HomePageNumber;
    this.imagesLinks = this.service.ImagesLinks.slice(pageNumber*5, (pageNumber+1)*5);

  }

  rightButtonClicked() {
    console.log('rightButtonClicked');
    this.service.HomePageNumberIncremented();
    let pageNumber: number = this.service.HomePageNumber;
    this.imagesLinks = this.service.ImagesLinks.slice(pageNumber*5, (pageNumber+1)*5);
  }
}
