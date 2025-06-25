import {Component, DoCheck, OnChanges, OnInit, signal} from '@angular/core';
import {MainService} from '../services/main-service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnChanges, DoCheck {

  imagesLinks: string[] = []
  testNumber: number = 0;
  selectedHomeProfile: string = "Alex Noutash";
  message: string = '';
  totalPageNumbers: number = 0;
  nextButtonStyle: object = {};
  isFirstPage = signal(true);
  isLastPage = signal(false);


  constructor(private service: MainService) {
    console.log('home Page Constructor is called');
    this.imagesLinks = service.ImagesLinks.slice(0, 5);
    console.log("Test number: " +this.testNumber);

  }

  ngOnInit(){
    this.totalPageNumbers = this.imagesLinks.length / 5

  }

  ngOnChanges(){
   console.log("Home Page changes detected");
    console.log("selectedHomeProfile " +this.selectedHomeProfile);

  }
  ngDoCheck(){
    this.nextButtonStyle = {
           'opacity': this.isFirstPage()? '0.6' : '1.0',
           'cursor': this.isFirstPage() ? 'not-allowed' : 'allowed',
    };
  }

    leftButtonClicked() {
    console.log('leftButtonClicked');
    this.service.HomePageNumberDecremented();
    let pageNumber: number = this.service.HomePageNumber;
    this.imagesLinks = this.service.ImagesLinks.slice(pageNumber * 5, (pageNumber + 1) * 5);
    if (pageNumber ==0) {

      this.isFirstPage.set(true)
    }
      this.isLastPage.set(false)

  }

  rightButtonClicked() {
    console.log('rightButtonClicked');
    this.service.HomePageNumberIncremented();
    let pageNumber: number = this.service.HomePageNumber;
    this.imagesLinks = this.service.ImagesLinks.slice(pageNumber*5, (pageNumber+1)*5);
    if (pageNumber > this.totalPageNumbers){
      this.isLastPage.set(true);
    }
    this.isFirstPage.set(false);

  }
}
