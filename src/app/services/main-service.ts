import { Injectable } from '@angular/core';
import {messageObject} from "../messages/messageObject";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  ImagesLinks: { url: string; desc: string; studentId: string }[] = []

  HomePageNumber: number = 0;

  messagesList: messageObject[] = [];

  siteName="My Book"

  usrName = '';

  llmIntroduction: string = ` ${this.siteName} is a modern social networking platform where users can view and interact with friends' photos, posts, and updates. Designed for connection and community, the platform shows a dynamic list of friends' profile pictures, names, and activity, making it easy to stay connected. Perfect for those who want to share life updates and explore social circles in an intuitive, image-rich environment.`;

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
        desc: "First Man Image",
        studentId: "606364"
      },
      {
        url: "https://randomuser.me/api/portraits/women/1.jpg",
        desc: "First Woman Image",
        studentId: "123456"
      },
      {
        url: "https://randomuser.me/api/portraits/men/2.jpg",
        desc: "Second Men Image",
        studentId: "7778899"
      },
      {
        url: "https://randomuser.me/api/portraits/women/2.jpg",
        desc: "Second Woman Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/men/3.jpg",
        desc: "Third Men Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/women/3.jpg",
        desc: "Third Woman Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/men/4.jpg",
        desc: "Forth Men Image",
        studentId: ""

      },
      {
        url: "https://randomuser.me/api/portraits/women/4.jpg",
        desc: "Forth Woman Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/men/5.jpg",
        desc: "Fifth Men Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/women/5.jpg",
        desc: "Fifth Woman Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/men/6.jpg",
        desc: "Sixth Men Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/women/6.jpg",
        desc: "Sixth Woman Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/men/7.jpg",
        desc: "Seventh Men Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/women/7.jpg",
        desc: "Seventh Woman Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/men/8.jpg",
        desc: "Eight Men Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/women/8.jpg",
        desc: "Eight Woman Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/men/9.jpg",
        desc: "Ninth Men Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/women/9.jpg",
        desc: "Ninth Woman Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/men/10.jpg",
        desc: "Tenth Men Image",
        studentId: ""
      },
      {
        url: "https://randomuser.me/api/portraits/women/10.jpg",
        desc: "Tenth Woman Image",
        studentId: ""
      }]
  }

  saveName(userName: string) {
    this.usrName = userName;
  }
}
