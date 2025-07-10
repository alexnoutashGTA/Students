import { Injectable } from '@angular/core';
import {messageObject} from "../messages/messageObject";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  ImagesLinks: { url: string; desc: string }[] = []

  HomePageNumber: number = 0;

  messagesList: messageObject[] = [];

  HomePageNumberIncremented = () => {
    if ((this.HomePageNumber + 1) * 5 < this.ImagesLinks.length) {
      this.HomePageNumber += 1;
    }
  }
  HomePageNumberDecremented = () => {
    if (this.HomePageNumber > 0) {
      this.HomePageNumber -= 1;
    }
  }

  SaveAMessage(newMessage: messageObject) {
    this.messagesList.push(newMessage);
  }

  constructor() {
    this.ImagesLinks = [
      {
        url: "https://randomuser.me/api/portraits/men/1.jpg",
        desc: "First Man Image"
      },
      {
        url: "https://randomuser.me/api/portraits/women/1.jpg",
        desc: "First Woman Image"
      },
      {
        url: "https://randomuser.me/api/portraits/men/2.jpg",
        desc: "Second Men Image"
      },
      {
        url: "https://randomuser.me/api/portraits/women/2.jpg",
        desc: "Second Woman Image"
      },
      {
        url: "https://randomuser.me/api/portraits/men/3.jpg",
        desc: "Third Men Image"
      },
      {
        url: "https://randomuser.me/api/portraits/women/3.jpg",
        desc: "Third Woman Image"
      },
      {
        url: "https://randomuser.me/api/portraits/men/4.jpg",
        desc: "Forth Men Image"
      },
      {
        url: "https://randomuser.me/api/portraits/women/4.jpg",
        desc: "Forth Woman Image"
      },
      {
        url: "https://randomuser.me/api/portraits/men/5.jpg",
        desc: "Fifth Men Image"
      },
      {
        url: "https://randomuser.me/api/portraits/women/5.jpg",
        desc: "Fifth Woman Image"
      },
      {
        url: "https://randomuser.me/api/portraits/men/6.jpg",
        desc: "Sixth Men Image"
      },
      {
        url: "https://randomuser.me/api/portraits/women/6.jpg",
        desc: "Sixth Woman Image"
      },
      {
        url: "https://randomuser.me/api/portraits/men/7.jpg",
        desc: "Seventh Men Image"
      },
      {
        url: "https://randomuser.me/api/portraits/women/7.jpg",
        desc: "Seventh Woman Image"
      },
      {
        url: "https://randomuser.me/api/portraits/men/8.jpg",
        desc: "Eight Men Image"
      },
      {
        url: "https://randomuser.me/api/portraits/women/8.jpg",
        desc: "Eight Woman Image"
      },
      {
        url: "https://randomuser.me/api/portraits/men/9.jpg",
        desc: "Ninth Men Image"
      },
      {
        url: "https://randomuser.me/api/portraits/women/9.jpg",
        desc: "Ninth Woman Image"
      },
      {
        url: "https://randomuser.me/api/portraits/men/10.jpg",
        desc: "Tenth Men Image"
      },
      {
        url: "https://randomuser.me/api/portraits/women/10.jpg",
        desc: "Tenth Woman Image"
      }]
  }
}
