import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-child-detail',
  standalone: false,
  templateUrl: './child-detail.html',
  styleUrls: ['./child-detail.css', '../assets/theme-button-google.css']
})
export class ChildDetail {
  @Input({ required: true }) detail: any;


}
