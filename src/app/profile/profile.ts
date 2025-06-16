import {Component, DoCheck, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnChanges, DoCheck{
  @Input() profile = ''; // decorate the property with @Input()
  @Input() message=''

  ngOnChanges(){
    console.log("Changes are detected");

  }
  ngDoCheck(){
/*
    this.profile = "Back to Alex Noutash";
*/
  }

  constructor() {
    console.log("profile componenet has been created");
  }
}
