import {Component, OnChanges, OnInit} from '@angular/core';
import {MainService} from '../services/main-service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnChanges {

  imagesLinks: string[] = []
  testNumber: number = 0;
  selectedHomeProfile: string = "Alex Noutash";

  constructor(private service: MainService) {
    console.log('home Page Constructor is called');
    this.imagesLinks = service.ImagesLinks.slice(0, 5);
    console.log("Test number: " +this.testNumber);

  }

  ngOnInit(){
      /*console.log("Home Page Initialized");
      console.log("Test number: " +this.testNumber);*/
  }

  ngOnChanges(){
   console.log("Home Page changes detected");
    console.log("selectedHomeProfile " +this.selectedHomeProfile);
  }

    leftButtonClicked() {
    console.log('leftButtonClicked');
    this.service.HomePageNumberDecremented();
    let pageNumber: number = this.service.HomePageNumber;
    this.imagesLinks = this.service.ImagesLinks.slice(pageNumber * 5, (pageNumber + 1) * 5);

  }

  rightButtonClicked() {
    console.log('rightButtonClicked');
    this.service.HomePageNumberIncremented();
    let pageNumber: number = this.service.HomePageNumber;
    this.imagesLinks = this.service.ImagesLinks.slice(pageNumber*5, (pageNumber+1)*5);
  }
}
