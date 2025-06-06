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
    this.imagesLinks = service.ImagesLinks;
  }

}
