import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnChanges{
  @Input() profile = ''; // decorate the property with @Input()

  ngOnChanges(){
    console.log("Changes are detected");
    this.profile = this.profile + "is a good student"
  }

  constructor() {
    console.log("profile componenet has been created");
  }
}
