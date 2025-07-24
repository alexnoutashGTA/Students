import { Component } from '@angular/core';
import {ContentService} from '../services/content-service';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  faqList: string[];
  remoteFaqList: any;
  /*Inject the service and get the content*/
  constructor(private contentService: ContentService) {
    this.faqList = contentService.getFaqContent();
    this.remoteFaqList = contentService.getRemoteContent();
  }
}
