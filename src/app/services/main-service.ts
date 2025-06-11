import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  ImagesLinks: string[]=[]

  HomePageNumber: number = 0;

  HomePageNumberIncremented = ()=>{
    if ((this.HomePageNumber +1) *5 <this.ImagesLinks.length){
    this.HomePageNumber += 1;
    }
  }
  HomePageNumberDecremented = ()=>{
    if (this.HomePageNumber > 0) {
      this.HomePageNumber += 1;
    }
  }

  constructor() {
     this.ImagesLinks= [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/women/4.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/6.jpg",
      "https://randomuser.me/api/portraits/men/7.jpg",
      "https://randomuser.me/api/portraits/men/8.jpg",
      "https://randomuser.me/api/portraits/men/9.jpg",
      "https://randomuser.me/api/portraits/men/10.jpg"];

     this.ImagesLinks.push( "https://randomuser.me/api/portraits/men/11.jpg");
    this.ImagesLinks.push( "https://randomuser.me/api/portraits/men/12.jpg");
    this.ImagesLinks.push( "https://randomuser.me/api/portraits/men/13.jpg");
    this.ImagesLinks.push( "https://randomuser.me/api/portraits/men/15.jpg");

    this.ImagesLinks.splice(5, 0, "https://randomuser.me/api/portraits/men/16.jpg");
    console.log("Total length: "+this.ImagesLinks.length);
   this.ImagesLinks.forEach(link => {
     console.log(link);
   });
  }
}

