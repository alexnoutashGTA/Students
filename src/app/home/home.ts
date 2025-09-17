import {Component, DoCheck, OnChanges, OnInit, signal} from '@angular/core';
import {MainService} from '../services/main-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css','../assets/theme-button-google.css', '../assets/theme-anchor-chatGPT.css']
})
export class Home implements OnInit, OnChanges, DoCheck {

  imagesLinks: {
    studentId: string;
    url: string; desc: string }[] = []
  llmTopic = '';
  testNumber: number = 0;
  selectedHomeProfile: string = "Alex Noutash";
  message: string = '';
  totalPageNumbers: number = 0;
  nextButtonStyle: object = {};
  previousButtonStyle: object = {};
  isFirstPage = signal(true);
  isLastPage = signal(false);
  private Window: any;
  userName: string = '';


  constructor(private service: MainService, private windowRef: Window, private router: Router) {
    console.log('home Page Constructor is called');
    this.imagesLinks = service.ImagesLinks.slice(0, 5);
    console.log("Test number: " +this.testNumber);
    this.llmTopic = this.service.llmIntroduction;
    this.Window=windowRef;

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
      'opacity': this.isFirstPage() ? '0.6' : '1.0',
      'cursor': this.isFirstPage() ? 'not-allowed' : 'allowed',
    }
      this.previousButtonStyle = {
        'opacity': this.isLastPage()? '0.6' : '1.0',
        'cursor': this.isLastPage() ? 'not-allowed' : 'allowed',
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


      this.Window.dataLayer.push({event: 'homepagenextbutton'});
      this.Window.dataLayer.push({
        'userName': this.service.usrName
      });

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

  saveName() {
    this.service.saveName(this.userName);
  }

  imageClicked(studentId: string) {
    this.router.navigate(['/detail', studentId]);
  }
}
